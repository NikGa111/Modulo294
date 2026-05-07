const api = "https://69fc7d13fce564e259182542.mockapi.io/watchlist";

// Riferimenti agli elementi del DOM
const form       = document.getElementById("itemForm");
const statusBox  = document.getElementById("status");
const grid       = document.getElementById("grid");
const inputId    = document.getElementById("itemId");

// Mostra un messaggio di stato
function setStatus(msg) {
  statusBox.textContent = msg;
}

// Resetta il form allo stato iniziale (nessun ID = modalità creazione)
function resetForm() {
  form.reset();
  inputId.value = "";
  setStatus("Pronto.");
}

// ─── READ ────────────────────────────────────────────────────────────────────
// Carica tutti gli elementi dall'API e li mostra nella griglia
async function loadItems() {
  setStatus("Caricamento...");
  try {
    const res   = await fetch(api);
    const items = await res.json();

    grid.innerHTML = ""; // svuota la griglia
    items.forEach(renderItem);

    setStatus(`${items.length} elementi caricati.`);
  } catch (err) {
    setStatus("Errore nel caricamento.");
    console.error(err);
  }
}

// Crea la card HTML per un singolo elemento e la aggiunge alla griglia
function renderItem(item) {
  const card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `
    <img src="${item.coverUrl}" alt="${item.title}" onerror="this.src='https://placehold.co/400x225?text=No+Image'">
    <div class="item-body">
      <div class="item-title">${item.title}</div>
      <div class="item-meta">${item.type} · ${item.platform} · ${item.status}</div>
      <div class="item-meta">⭐ ${item.rating ?? "—"}/10</div>
      <div class="item-meta">${item.notes ?? ""}</div>
      <div class="item-actions">
        <button class="edit"   onclick="editItem('${item.id}')">Modifica</button>
        <button class="delete" onclick="deleteItem('${item.id}')">Elimina</button>
      </div>
    </div>
  `;
  grid.appendChild(card);
}

// ─── CREATE / UPDATE ─────────────────────────────────────────────────────────
// Gestisce il submit del form: crea o aggiorna a seconda se c'è un ID
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = inputId.value; // vuoto = creazione, valorizzato = aggiornamento

  // Raccoglie i dati dal form
  const payload = {
    title:     document.getElementById("title").value,
    type:      document.getElementById("type").value,
    platform:  document.getElementById("platform").value,
    status:    document.getElementById("statusSelect").value,
    rating:    Number(document.getElementById("rating").value),
    coverUrl:  document.getElementById("coverUrl").value,
    notes:     document.getElementById("notes").value,
  };

  // Se c'è un ID → PUT (aggiorna), altrimenti → POST (crea)
  const url    = id ? `${api}/${id}` : api;
  const method = id ? "PUT" : "POST";

  setStatus("Salvataggio...");
  try {
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(id ? "Elemento aggiornato." : "Elemento creato.");
    resetForm();
    loadItems(); // ricarica la lista
  } catch (err) {
    setStatus("Errore nel salvataggio.");
    console.error(err);
  }
});

// ─── EDIT ────────────────────────────────────────────────────────────────────
// Carica i dati di un elemento nel form per modificarlo
async function editItem(id) {
  setStatus("Caricamento elemento...");
  try {
    const res  = await fetch(`${api}/${id}`);
    const item = await res.json();

    // Popola il form con i dati esistenti
    inputId.value                                    = item.id;
    document.getElementById("title").value           = item.title;
    document.getElementById("type").value            = item.type;
    document.getElementById("platform").value        = item.platform;
    document.getElementById("statusSelect").value    = item.status;
    document.getElementById("rating").value          = item.rating;
    document.getElementById("coverUrl").value        = item.coverUrl;
    document.getElementById("notes").value           = item.notes ?? "";

    setStatus(`Modifica: ${item.title}`);
  } catch (err) {
    setStatus("Errore nel caricamento elemento.");
    console.error(err);
  }
}

// ─── DELETE ──────────────────────────────────────────────────────────────────
// Elimina un elemento dopo conferma dell'utente
async function deleteItem(id) {
  if (!confirm("Eliminare questo elemento?")) return;

  setStatus("Eliminazione...");
  try {
    await fetch(`${api}/${id}`, { method: "DELETE" });
    setStatus("Elemento eliminato.");
    loadItems(); // ricarica la lista
  } catch (err) {
    setStatus("Errore nell'eliminazione.");
    console.error(err);
  } finally {
    resetForm(); // resetta il form in ogni caso
  }
}

// Bottone Annulla → resetta il form
document.getElementById("btnCancel").addEventListener("click", resetForm);

// Avvio: carica subito la lista
loadItems();
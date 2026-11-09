// Réglages communs à toutes les pages.
// KIT_URL : lien Gumroad du Kit Blocus. Tant qu'il est vide, l'encart du kit est masqué.
const KIT_URL = "";

document.querySelectorAll("[data-kit]").forEach((a) => {
  if (KIT_URL) a.href = KIT_URL;
  else a.closest(".kit")?.remove();
});
document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

// Lit un nombre écrit à la belge (virgule ou point). Renvoie NaN si vide/invalide.
function parseNum(v) {
  if (typeof v !== "string") return NaN;
  const s = v.trim().replace(/\s/g, "").replace(",", ".");
  return s === "" ? NaN : Number(s);
}

function fmt(n, digits = 2) {
  return n.toLocaleString("fr-BE", { minimumFractionDigits: 0, maximumFractionDigits: digits });
}

// Relance l'animation de surlignage sur un résultat.
function swipe(el) {
  el.classList.remove("swipe");
  void el.offsetWidth;
  el.classList.add("swipe");
}

const store = {
  get(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* stockage indisponible */ } },
};

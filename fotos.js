/*
 * =============================================
 *  📸 ARQUIVO DE FOTOS — EDITE AQUI!
 * =============================================
 *
 * Como adicionar suas fotos:
 *
 * 1. Coloque os arquivos de imagem na pasta  /fotos/
 * 2. Substitua os "src" abaixo pelo nome do arquivo
 *    Exemplo: src: "fotos/nossa-viagem.jpg"
 *
 * 3. Edite o "legenda" com uma frase especial para cada foto
 *
 * 4. Você pode adicionar ou remover itens à vontade!
 *    Cada objeto  { src, legenda }  é uma foto na galeria.
 *
 * =============================================
 */

const FOTOS = [

  /* -------- FOTO 1 -------- */
  {
    // ✏️ Substitua pelo caminho da sua foto
    src: "fotos/foto1.jpg",
    legenda: "✏️ Vc dps de tirar pelo de mim com pinça"
  },

  /* -------- FOTO 2 -------- */
  {
    src: "fotos/foto2.jpg",
    legenda: "✏️ Uma memória que nunca vou esquecer"
  },

  /* -------- FOTO 3 -------- */
  {
    src: "fotos/foto3.jpg",
    legenda: "✏️ Meu momento favorito com você"
  },

  /* -------- FOTO 4 -------- */
  {
    src: "fotos/foto4.HEIC",
    legenda: "✏️ Te amo mais que tudo"
  },

  /* -------- FOTO 5 -------- */
  {
    src: "fotos/foto5.HEIC",
    legenda: "✏️ Juntos para sempre"
  },

  /* -------- FOTO 6 -------- */
  {
    src: "fotos/foto6.PNG",
    legenda: "✏️ O melhor dia da minha vida"
  },

  /*
   * ➕ Para adicionar mais fotos, copie este bloco:
   *
   * {
   *   src: "fotos/nome-do-arquivo.jpg",
   *   legenda: "Sua legenda aqui"
   * },
   *
   */
];

/* ============================================
   RENDERIZA A GALERIA (não precisa mexer aqui)
   ============================================ */
function renderGaleria() {
  const grid = document.getElementById("galeriaGrid");
  if (!grid) return;

  FOTOS.forEach((foto, i) => {
    const item = document.createElement("div");
    item.className = "galeria-item reveal";
    item.innerHTML = `
      <img src="${foto.src}" alt="Foto ${i + 1}" loading="lazy" />
      <div class="galeria-overlay">
        <span class="galeria-caption">${foto.legenda}</span>
      </div>
    `;
    item.addEventListener("click", () => abrirLightbox(foto.src, foto.legenda));
    grid.appendChild(item);
  });
}

function abrirLightbox(src, caption) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");
  img.src = src;
  cap.textContent = caption;
  lb.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

document.addEventListener("DOMContentLoaded", () => {
  renderGaleria();

  const closeBtn = document.getElementById("lightboxClose");
  const lightbox = document.getElementById("lightbox");

  if (closeBtn) closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    document.body.style.overflow = "";
  });

  if (lightbox) lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
});

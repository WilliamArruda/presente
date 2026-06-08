/*
 * =============================================
 *  🎵 PLAYLIST — EDITE AS MÚSICAS AQUI
 * =============================================
 *
 * Como funciona:
 * - Cada item tem nome, artista e emoji
 * - O vinil gira quando você clica numa faixa
 * - É decorativo (não toca de verdade)
 *
 * ✏️ Adicione ou remova músicas à vontade!
 * =============================================
 */

const PLAYLIST = [

  /* ---- BTS ---- */
  { nome: "Dynamite",        artista: "BTS",             emoji: "💜" },
  { nome: "Butter",          artista: "BTS",             emoji: "💛" },
  { nome: "Boy With Luv",    artista: "BTS ft. Halsey",  emoji: "💜" },
  { nome: "Spring Day",      artista: "BTS",             emoji: "🌸" },
  { nome: "Permission to Dance", artista: "BTS",         emoji: "🕺" },

  /* ---- MICHAEL JACKSON ---- */
  { nome: "Thriller",        artista: "Michael Jackson", emoji: "🎃" },
  { nome: "Billie Jean",     artista: "Michael Jackson", emoji: "🎤" },
  { nome: "Beat It",         artista: "Michael Jackson", emoji: "🎸" },
  { nome: "Man in the Mirror", artista: "Michael Jackson", emoji: "🪞" },
  { nome: "Smooth Criminal", artista: "Michael Jackson", emoji: "🕴️" },

  /* ---- AMOR ---- */
  // ✏️ Adicione aqui músicas especiais de vocês dois!
  // { nome: "Nome da Música", artista: "Artista", emoji: "💜" },
];

/* ============================================
   RENDERIZA A PLAYLIST (não precisa mexer)
   ============================================ */
let trackAtiva = -1;
let vinylSpinning = false;

function renderPlaylist() {
  const container = document.getElementById("playlistTracks");
  const vinyl = document.getElementById("vinyl");
  if (!container) return;

  PLAYLIST.forEach((track, i) => {
    const item = document.createElement("div");
    item.className = "track-item reveal";
    item.innerHTML = `
      <span class="track-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="track-info">
        <div class="track-name">${track.nome}</div>
        <div class="track-artist">${track.artista}</div>
      </div>
      <span class="track-icon">${track.emoji}</span>
    `;

    item.addEventListener("click", () => {
      // Remove active de todos
      document.querySelectorAll(".track-item").forEach(t => t.classList.remove("active"));

      if (trackAtiva === i) {
        // Pausa se clicar na mesma
        trackAtiva = -1;
        vinyl.classList.remove("spinning");
      } else {
        trackAtiva = i;
        item.classList.add("active");
        vinyl.classList.add("spinning");
      }
    });

    container.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", renderPlaylist);

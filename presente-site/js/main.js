/*
 * =============================================
 *  💜 MAIN.JS — LÓGICA PRINCIPAL DO SITE
 *  Não precisa editar este arquivo!
 * =============================================
 */

// ============================================
// ⚙️ CONFIGURAÇÃO — SÓ ISSO VOCÊ EDITA AQUI
// ============================================

// ✏️ Data que vocês começaram a namorar (ANO, MÊS-1, DIA)
// Exemplo: 14 de fevereiro de 2022 → new Date(2022, 1, 14)
const DATA_INICIO = new Date(2026, 1, 2);

// ✏️ Nome da sua namorada (aparece em alguns momentos)
const NOME_NAMORADA = "Anna Clara";

// ============================================

document.addEventListener("DOMContentLoaded", () => {

  // ---------- ENVELOPE INTRO ----------
  const envelope = document.getElementById("envelope");
  const intro = document.getElementById("intro");
  const mainSite = document.getElementById("main-site");

  if (envelope) {
    envelope.addEventListener("click", () => {
      envelope.style.animation = "none";
      envelope.style.transform = "scale(1.1)";
      envelope.style.boxShadow = "0 0 60px rgba(233,30,140,0.8)";

      setTimeout(() => {
        intro.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        intro.style.opacity = "0";
        intro.style.transform = "scale(1.05)";
      }, 300);

      setTimeout(() => {
        intro.style.display = "none";
        mainSite.classList.remove("hidden");
        mainSite.style.opacity = "0";
        mainSite.style.transition = "opacity 0.8s ease";
        setTimeout(() => { mainSite.style.opacity = "1"; }, 50);

        // Inicia corações no canvas
        iniciarCorações();
        // Inicia contador
        iniciarContador();
        // Inicia revelações ao scroll
        iniciarReveal();
      }, 1100);
    });
  }

  // ---------- MENSAGEM FLIP CARD ----------
  const mensagemCard = document.getElementById("mensagemCard");
  if (mensagemCard) {
    mensagemCard.style.position = "relative";
    mensagemCard.addEventListener("click", () => {
      mensagemCard.classList.toggle("flipped");
    });
  }

  // ---------- EASTER EGGS ----------
  const btnMoonwalk = document.getElementById("btnMoonwalk");
  const btnBTS = document.getElementById("btnBTS");
  const display = document.getElementById("easterDisplay");

  const moonwalkFrames = [
    "🕺", "🕴️", "🎤", "🌟🕺🌟", "🎶🕺🎶",
    "💃🕺💃", "✨🎤✨", "🔥🕺🔥"
  ];

  const btsFrames = [
    "💜", "💜💜", "💜💜💜",
    "💜 BTS 💜",
    "보라해 💜",
    "I Purple You 💜",
    "방탄소년단 💜",
    "💜💜💜💜💜💜💜"
  ];

  let moonInterval = null;
  let btsInterval = null;

  if (btnMoonwalk) {
    btnMoonwalk.addEventListener("click", () => {
      clearInterval(btsInterval);
      let i = 0;
      moonInterval = setInterval(() => {
        display.textContent = moonwalkFrames[i % moonwalkFrames.length];
        i++;
        if (i >= moonwalkFrames.length * 3) {
          clearInterval(moonInterval);
          display.textContent = "🕺 King of Pop! 🎤";
        }
      }, 200);
    });
  }

  if (btnBTS) {
    btnBTS.addEventListener("click", () => {
      clearInterval(moonInterval);
      let i = 0;
      btsInterval = setInterval(() => {
        display.textContent = btsFrames[i % btsFrames.length];
        i++;
        if (i >= btsFrames.length * 2) {
          clearInterval(btsInterval);
          display.textContent = "💜 보라해 • I Purple You 💜";
        }
      }, 300);
    });
  }

  // ---------- CONFETTI ----------
  const btnConfetti = document.getElementById("btnConfetti");
  if (btnConfetti) {
    btnConfetti.addEventListener("click", () => {
      lançarConfetti();
    });
  }

});

// ============================================
// 💜 CORAÇÕES NO CANVAS (HERO)
// ============================================
function iniciarCorações() {
  const canvas = document.getElementById("heartCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particulas = [];
  const cores = ["#9b59b6", "#e91e8c", "#f5c518", "#c9a8e8", "#fff"];

  class Particula {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 20;
      this.tamanho = Math.random() * 14 + 6;
      this.vel = Math.random() * 1.5 + 0.5;
      this.cor = cores[Math.floor(Math.random() * cores.length)];
      this.opacidade = Math.random() * 0.5 + 0.3;
      this.oscilacao = Math.random() * 2 - 1;
      this.angulo = 0;
    }
    update() {
      this.y -= this.vel;
      this.angulo += 0.03;
      this.x += Math.sin(this.angulo) * this.oscilacao;
      this.opacidade -= 0.002;
      if (this.y < -30 || this.opacidade <= 0) this.reset();
    }
    desenhar() {
      ctx.save();
      ctx.globalAlpha = this.opacidade;
      ctx.fillStyle = this.cor;
      ctx.font = `${this.tamanho}px serif`;
      ctx.fillText("💜", this.x, this.y);
      ctx.restore();
    }
  }

  for (let i = 0; i < 25; i++) {
    const p = new Particula();
    p.y = Math.random() * canvas.height; // distribui inicialmente
    particulas.push(p);
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach(p => { p.update(); p.desenhar(); });
    requestAnimationFrame(animar);
  }
  animar();
}

// ============================================
// ⏳ CONTADOR DE TEMPO JUNTOS
// ============================================
function iniciarContador() {
  const grid = document.getElementById("contadorGrid");
  if (!grid) return;

  function atualizar() {
    const agora = new Date();
    const diff = agora - DATA_INICIO;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    const itens = [
      { num: dias, unit: "dias" },
      { num: horas, unit: "horas" },
      { num: minutos, unit: "minutos" },
      { num: segundos, unit: "segundos" },
    ];

    grid.innerHTML = "";
    itens.forEach(item => {
      const div = document.createElement("div");
      div.className = "contador-item";
      div.innerHTML = `
        <div class="contador-num">${String(item.num).padStart(2, "0")}</div>
        <div class="contador-unit">${item.unit}</div>
      `;
      grid.appendChild(div);
    });
  }

  atualizar();
  setInterval(atualizar, 1000);
}

// ============================================
// 🎊 CONFETTI
// ============================================
function lançarConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.pointerEvents = "none";

  const ctx = canvas.getContext("2d");
  const partículas = [];
  const cores = ["#9b59b6", "#e91e8c", "#f5c518", "#ffffff", "#c9a8e8", "#27ae60"];
  const emojis = ["💜", "💛", "🎵", "✨", "🌟", "💕"];

  for (let i = 0; i < 120; i++) {
    partículas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 5 + 3,
      cor: cores[Math.floor(Math.random() * cores.length)],
      emoji: Math.random() > 0.7 ? emojis[Math.floor(Math.random() * emojis.length)] : null,
      vel: Math.random() * 4 + 2,
      swing: Math.random() * 6 - 3,
      rot: Math.random() * 360,
      rotVel: Math.random() * 8 - 4,
      opacidade: 1,
    });
  }

  let frame = 0;
  const maxFrames = 200;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    partículas.forEach(p => {
      p.y += p.vel;
      p.x += p.swing * 0.3;
      p.rot += p.rotVel;
      if (frame > maxFrames * 0.6) p.opacidade -= 0.015;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacidade);

      if (p.emoji) {
        ctx.font = "18px serif";
        ctx.fillText(p.emoji, p.x, p.y);
      } else {
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.cor;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx.restore();
    });

    frame++;
    if (frame < maxFrames) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  draw();
}

// ============================================
// 👁️ REVEAL AO SCROLL
// ============================================
function iniciarReveal() {
  const elementos = document.querySelectorAll(".reveal, section");

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(el => {
    if (!el.classList.contains("reveal")) {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    }
    obs.observe(el);
  });
}

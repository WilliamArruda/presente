/*
 * =============================================
 *  💬 QUIZ DO AMOR — EDITE AS PERGUNTAS AQUI
 * =============================================
 *
 * Estrutura de cada pergunta:
 * {
 *   pergunta: "Texto da pergunta",
 *   opcoes: ["Opção A", "Opção B", "Opção C", "Opção D"],
 *   correta: 0,   ← índice da resposta correta (0 = primeira, 1 = segunda...)
 *   emoji: "😍"  ← emoji que aparece na resposta
 * }
 *
 * ✏️ Personalize com perguntas sobre vocês dois!
 * =============================================
 */

const PERGUNTAS = [
  {
    pergunta: "Qual é a música do BTS que mais faz minha namorada feliz?",
    opcoes: ["Dynamite 💛", "Spring Day 🌸", "Butter 🧈", "Boy With Luv 💜", "Home"],
    correta: 4, // ✏️ Coloque o índice certo aqui!
    emoji: "💜"
  },
  {
    pergunta: "Se Michael Jackson fosse uma dança nossa, seria...",
    opcoes: ["Moonwalk pelo corredor", "Thriller na cozinha", "Smooth Criminal no meio da rua", "Beat It na Matchatchada"],
    correta: 3, 
    emoji: "🕺"
  },
  {
    pergunta: "Qual foi nosso primeiro programa juntos?",
    opcoes: [
      "✏️ Shopping",
      "✏️ Fazer Call Dormindo",
      "✏️ Estúdio e muito sexo",
      "✏️ Esporro da sua mãe e irmã"
    ],
    correta: 1, // ✏️ Coloque o índice correto
    emoji: "🥰"
  },
  {
    pergunta: "O que eu mais amo em você?",
    opcoes: [
      "Sua Matchatchice",
      "Seus Sentimentos por mim",
      "Seu Fedo de Busti",
      "Absolutamente tudo 💜"
    ],
    correta: 4,
    emoji: "💜"
  },
  {
    pergunta: "Se o BTS cantasse uma música sobre nosso amor, o título seria:",
    opcoes: [
      "Our Universe 💜",
      " Forever & Always 🌌",
      "Meu Amor Eterno 💫",
      "Permission to Love 🕺"
    ],
    correta: 1, 
    emoji: "🌟"
  },
];

/* =============================================
   LÓGICA DO QUIZ (não precisa mexer aqui)
   ============================================= */
let perguntaAtual = 0;
let pontos = 0;
let respondidas = 0;

function renderQuiz() {
  const qEl = document.getElementById("quizQuestion");
  const oEl = document.getElementById("quizOptions");
  const numEl = document.getElementById("quizNum");
  const totalEl = document.getElementById("quizTotal");
  const resultEl = document.getElementById("quizResult");

  if (!qEl) return;

  totalEl.textContent = PERGUNTAS.length;
  mostrarPergunta();
}

function mostrarPergunta() {
  const qEl = document.getElementById("quizQuestion");
  const oEl = document.getElementById("quizOptions");
  const numEl = document.getElementById("quizNum");
  const resultEl = document.getElementById("quizResult");

  if (perguntaAtual >= PERGUNTAS.length) {
    mostrarFinal();
    return;
  }

  resultEl.classList.add("hidden");
  const perg = PERGUNTAS[perguntaAtual];
  numEl.textContent = perguntaAtual + 1;
  qEl.textContent = perg.pergunta;
  oEl.innerHTML = "";

  perg.opcoes.forEach((opcao, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-btn";
    btn.textContent = opcao;
    btn.addEventListener("click", () => responder(btn, i, perg.correta, perg.emoji));
    oEl.appendChild(btn);
  });
}

function responder(btnClicado, escolhido, correto, emoji) {
  const oEl = document.getElementById("quizOptions");
  const resultEl = document.getElementById("quizResult");

  // Desativa todos os botões
  oEl.querySelectorAll(".quiz-btn").forEach((btn, i) => {
    btn.disabled = true;
    if (i === correto) btn.classList.add("correto");
    else if (i === escolhido) btn.classList.add("errado");
  });

  if (escolhido === correto) {
    pontos++;
    resultEl.textContent = `${emoji} Acertou! Você me conhece bem!`;
    resultEl.style.color = "#27ae60";
  } else {
    resultEl.textContent = `💜 Quase... mas sei que você me ama!`;
    resultEl.style.color = "#e91e8c";
  }

  resultEl.classList.remove("hidden");

  setTimeout(() => {
    perguntaAtual++;
    mostrarPergunta();
  }, 2200);
}

function mostrarFinal() {
  const qEl = document.getElementById("quizQuestion");
  const oEl = document.getElementById("quizOptions");
  const resultEl = document.getElementById("quizResult");
  const numEl = document.getElementById("quizNum");

  oEl.innerHTML = "";
  numEl.textContent = PERGUNTAS.length;

  const msgs = [
    { min: 0, max: 2, txt: "Ainda temos muito a descobrir juntos 💜" },
    { min: 3, max: 3, txt: "Você me conhece bastante! 😍" },
    { min: 4, max: 4, txt: "Uau! Você me conhece muito bem! 💜✨" },
    { min: 5, max: 5, txt: "PERFEITO! Você é minha alma gêmea! 💜🌟" },
  ];

  const msg = msgs.find(m => pontos >= m.min && pontos <= m.max);

  qEl.textContent = `Você acertou ${pontos} de ${PERGUNTAS.length}!`;
  resultEl.textContent = msg.txt;
  resultEl.style.color = "#e91e8c";
  resultEl.style.fontSize = "1.4rem";
  resultEl.classList.remove("hidden");

  // Botão reiniciar
  const btn = document.createElement("button");
  btn.className = "btn-amor";
  btn.textContent = "🔄 Jogar de novo";
  btn.style.marginTop = "1.5rem";
  btn.style.display = "block";
  btn.style.margin = "1.5rem auto 0";
  btn.addEventListener("click", () => {
    perguntaAtual = 0;
    pontos = 0;
    mostrarPergunta();
  });
  oEl.appendChild(btn);
}

document.addEventListener("DOMContentLoaded", renderQuiz);

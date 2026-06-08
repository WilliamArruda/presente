# 💜 Site de Presente — Dia dos Namorados
**Tema: BTS + Michael Jackson + Amor**

---

## 📂 Estrutura de Arquivos

```
presente-namorada/
│
├── index.html          ← Página principal
├── README.md           ← Este arquivo
│
├── css/
│   └── style.css       ← Todos os estilos e animações
│
├── js/
│   ├── fotos.js        ← ✏️ EDITE AQUI: suas fotos
│   ├── playlist.js     ← ✏️ EDITE AQUI: músicas da playlist
│   ├── quiz.js         ← ✏️ EDITE AQUI: perguntas do quiz
│   └── main.js         ← ✏️ EDITE AQUI: data e nome dela
│
└── fotos/
    └── (coloque suas fotos aqui!)
```

---

## ✏️ O que você precisa personalizar

### 1. 📸 Suas Fotos → `js/fotos.js`
- Coloque as fotos na pasta `/fotos/`
- Substitua os `src` no arquivo pelos nomes dos seus arquivos
- Edite as `legenda` com frases especiais

```js
{ src: "fotos/nossa-foto.jpg", legenda: "Nosso primeiro beijo 💜" }
```

### 2. 💌 Mensagem Secreta → `index.html` (linha ~47)
Procure o trecho com o comentário `✏️ EDITE SUA MENSAGEM AQUI` e substitua o texto.

### 3. 💌 Carta Final → `index.html` (linha ~113)
Procure `✏️ EDITE A CARTA AQUI` e escreva sua carta de amor.

### 4. 🎵 Playlist → `js/playlist.js`
Adicione as músicas favoritas de vocês no array `PLAYLIST`.

### 5. 💬 Quiz → `js/quiz.js`
Personalize as perguntas com coisas sobre vocês dois! Lembre de ajustar o índice `correta`.

### 6. ⏳ Contador → `js/main.js` (linha ~8)
Coloque a data que vocês começaram a namorar:
```js
const DATA_INICIO = new Date(2023, 1, 14); // 14 fev 2023
//                            ANO, MÊS-1, DIA
```
⚠️ O mês começa em 0: janeiro=0, fevereiro=1, ... dezembro=11

### 7. 📝 Nome dela → `js/main.js` (linha ~12)
```js
const NOME_NAMORADA = "Julia"; // coloque o nome dela
```

---

## 🖥️ Como abrir o site

1. Abra o VS Code na pasta `presente-namorada/`
2. Instale a extensão **Live Server** (se ainda não tiver)
3. Clique com o botão direito no `index.html` → **"Open with Live Server"**
4. O site abre no navegador automaticamente!

Ou simplesmente dê duplo clique no `index.html` para abrir no navegador.

---

## 🎮 Funcionalidades do Site

| Seção | Função |
|-------|--------|
| 🎭 Envelope | Clique para "abrir" e entrar no site |
| 💜 Hero | Animação de corações flutuantes |
| 💌 Mensagem Secreta | Card que vira ao clicar, revelando sua mensagem |
| 📸 Galeria | Grade de fotos com lightbox ao clicar |
| 🎵 Playlist | Vinil que gira ao selecionar músicas |
| 💬 Quiz | Perguntas sobre vocês com pontuação |
| 🕺 Easter Eggs | Botões com animações do MJ e BTS |
| ⏳ Contador | Conta o tempo exato do namoro em tempo real |
| 💌 Carta Final | Com confetti ao clicar no botão |

---

## 💜 Feito com amor

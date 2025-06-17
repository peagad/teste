// PNGs da Ladybug e Cat Noir (caindo do topo)
const personagens = [
  'ladybug.png',
  'catnoir.png'
];

// Função para criar queda de personagens
function criarPersonagemCaindo() {
  const img = document.createElement('img');
  img.src = personagens[Math.floor(Math.random() * personagens.length)];
  img.className = 'falling';
  img.style.left = Math.random() * 100 + 'vw';
  img.style.animationDuration = (4 + Math.random() * 4) + 's';
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 10000);
}

// Corações subindo
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.className = 'heart';
  coracao.innerText = '❤️';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (3 + Math.random() * 2) + 's';
  document.getElementById('corações-container').appendChild(coracao);
  setTimeout(() => coracao.remove(), 6000);
}

// Intervalos para animações
setInterval(criarPersonagemCaindo, 600);
setInterval(criarCoracao, 300);

// Abrir carta
function abrirCarta() {
  const carta = document.querySelector('.carta');
  carta.classList.toggle('aberta');
}

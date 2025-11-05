// script.js

// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Exibir curiosidades aleatórias no rodapé
const curiosidades = [
  "O Brasil enviou mais de 25 mil soldados para lutar na Itália.",
  "Hitler sobreviveu a mais de 40 tentativas de assassinato.",
  "A Segunda Guerra estimulou o surgimento da ONU e da OTAN.",
  "Mulheres tiveram papel crucial em fábricas e serviços militares.",
  "A tecnologia de foguetes desenvolvida pelos nazistas inspirou a corrida espacial."
];

function mostrarCuriosidade() {
  const footer = document.querySelector('footer p');
  const curiosidade = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  footer.textContent = curiosidade + " | © 2025 - Projeto Educativo";
}

// Atualiza curiosidade a cada 10 segundos
setInterval(mostrarCuriosidade, 10000);

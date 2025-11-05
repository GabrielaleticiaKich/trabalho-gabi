// script.js

// Selecionar todos os botões de alternância
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Adicionar um ouvinte de evento a cada botão
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Encontrar o parágrafo ou lista associado ao botão
        const sectionContent = button.previousElementSibling;

        // Alternar a visibilidade do conteúdo
        if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
            sectionContent.style.display = 'block';
            button.textContent = 'Ocultar detalhes';
        } else {
            sectionContent.style.display = 'none';
            button.textContent = 'Mostrar detalhes';
        }
    });
});

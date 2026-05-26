// Lógica do Jogo
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-box');

draggables.forEach(drag => {
    drag.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => e.preventDefault());
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggedElement = document.getElementById(id);
        const type = draggedElement.getAttribute('data-type');
        const accept = zone.getAttribute('data-accept');

        if (type === accept) {
            zone.appendChild(draggedElement);
            draggedElement.style.background = "#ccffcc";
            alert("Correto! Isso ajuda na sustentabilidade.");
        } else {
            alert("Ops! Esse não é o lugar certo.");
        }
    });
});

function toggleGame() {
    const game = document.getElementById('game-section');
    game.style.display = game.style.display === 'block' ? 'none' : 'block';
}
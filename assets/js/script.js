// Animasi tambahan, hover effects, dll.
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.fakultas-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transition = 'transform 0.4s ease-in-out';
        });
        card.addEventListener('mouseout', () => {
            card.style.transition = 'transform 0.2s ease-in-out';
        });
    });
});

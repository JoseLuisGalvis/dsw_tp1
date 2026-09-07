document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // LÓGICA DE LA PORTADA: Buscador en tiempo real de Integrantes
    // Requisito: Interactividad dinámica con JavaScript en portada
    // ---------------------------------------------------------
    
    const searchInput = document.getElementById('searchInput');
    const teamCards = document.querySelectorAll('.team-card');

    if (searchInput && teamCards.length > 0) {
        
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();

            teamCards.forEach(card => {
                // Buscamos dentro de los data-skills que agregamos en el HTML
                const skillsContainer = card.querySelector('.skills');
                // También buscamos por el nombre
                const name = card.querySelector('h3').textContent.toLowerCase();
                
                let skillsText = "";
                if (skillsContainer) {
                    skillsText = skillsContainer.getAttribute('data-skills') || "";
                }

                // Si el término de búsqueda está en el nombre o en los skills, mostramos la tarjeta
                if (name.includes(term) || skillsText.includes(term)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});


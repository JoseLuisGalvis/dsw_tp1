// Lógica individual de cada perfil
document.addEventListener('DOMContentLoaded', () => {
    // FASE 3: Aquí cada integrante desarrollará la lógica interactiva de su perfil
    console.log("Script de perfiles cargado correctamente.");

    // --- Lógica del Perfil 3 (Orlando Sposto): Ficha de Películas ---
    const movieItems = document.querySelectorAll('.movie-item');
    const modal = document.getElementById('movieModal');
    
    // Verificamos si estamos en la página del perfil 3 (donde existe el modal y la lista)
    if (modal && movieItems.length > 0) {
        const modalTitle = document.getElementById('modal-title');
        const modalDirector = document.getElementById('modal-director');
        const modalSynopsis = document.getElementById('modal-synopsis');
        const modalQuote = document.getElementById('modal-quote');
        const closeBtn = document.querySelector('.close-btn');

        const movieData = {
            silencio: {
                title: "El Silencio de los Inocentes",
                director: "Jonathan Demme",
                synopsis: "Una joven cadete del FBI debe pedir ayuda a un asesino caníbal encarcelado para atrapar a otro asesino en serie que despelleja a sus víctimas.",
                quote: '"Uno del censo intentó hacerme una encuesta. Me comí su hígado con unos cuantos frijoles y un excelente Chianti."'
            },
            padrino: {
                title: "El Padrino",
                director: "Francis Ford Coppola",
                synopsis: "El envejecido patriarca de una dinastía del crimen organizado en Nueva York transfiere el control de su imperio clandestino a su hijo, desencadenando traiciones y violencia.",
                quote: '"Le haré una oferta que no podrá rechazar."'
            },
            alien: {
                title: "Alien",
                director: "Ridley Scott",
                synopsis: "La tripulación de la nave espacial Nostromo es despertada de su sueño criogénico para investigar una transmisión desconocida proveniente de una luna desolada.",
                quote: '"En el espacio, nadie puede oírte gritar."'
            }
        };

        // Asignar eventos de clic a cada película
        movieItems.forEach(item => {
            item.addEventListener('click', () => {
                const movieId = item.getAttribute('data-movie');
                const data = movieData[movieId];

                if (data) {
                    modalTitle.textContent = data.title;
                    modalDirector.textContent = data.director;
                    modalSynopsis.textContent = data.synopsis;
                    modalQuote.textContent = data.quote;
                    
                    // Mostrar modal
                    modal.classList.remove('modal-hidden');
                    modal.classList.add('modal-active');
                }
            });
        });

        // Cerrar modal al hacer clic en la "X"
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('modal-active');
            modal.classList.add('modal-hidden');
        });

        // Cerrar modal al hacer clic fuera del contenido
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('modal-active');
                modal.classList.add('modal-hidden');
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const carousels = document.querySelectorAll('.events-carousel');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            toggleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            carousels.forEach(carousel => {
                carousel.classList.remove('active');
            });

            const targetCarousel = document.getElementById(targetId);
            if (targetCarousel) targetCarousel.classList.add('active');
        });
    });

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');
        const cards = carousel.querySelectorAll('.event-card');

        if (!track || cards.length === 0) return;

        let currentIndex = 0;

        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth + 20;
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                updateCarousel();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % cards.length;
                updateCarousel();
            });
        }

        window.addEventListener('resize', updateCarousel);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('logo-container-js');
    
    if (container) {
        const items = container.querySelectorAll('.sponsor-logo-item');
        
        for (let i = 0; i < 2; i++) {
            items.forEach(item => {
                const itemClone = item.cloneNode(true); 
                container.appendChild(itemClone);
            });
        }
        
        container.style.width = '300%';
        container.style.animation = 'scroll-logos 20s linear infinite';
    }
});

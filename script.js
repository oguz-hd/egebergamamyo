document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));


    // --- 3D Tilt Effect on Cards ---
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const midX = rect.width / 2;
            const midY = rect.height / 2;

            const rotateX = ((y - midY) / midY) * -5; // Max -5deg to 5deg
            const rotateY = ((x - midX) / midX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // --- Parallax Background Effect ---
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        const orbs = document.querySelectorAll('.background-orb');
        orbs.forEach((orb, index) => {
            const speed = index + 1;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

});

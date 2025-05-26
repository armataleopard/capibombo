document.addEventListener('DOMContentLoaded', () => {
    // Populate meme wall
    const memeGrid = document.querySelector('.meme-grid');
    const memeCaption = [
        "Capibombo when he hits ATH",
        "Brazil can't handle him",
        "Sniffed himself into another dimension",
        "When the pump is too strong",
        "Capibombo's daily routine",
        "Living the meme life",
        "Just another day in crypto",
        "To the moon and beyond",
        "Capibombo's secret technique",
        "Maximum meme power"
    ];

    for (let i = 1; i <= 10; i++) {
        const memeContainer = document.createElement('div');
        memeContainer.className = 'meme-container';
        
        const img = document.createElement('img');
        img.src = `${i}.jpg`;
        img.alt = memeCaption[i-1];
        
        const caption = document.createElement('p');
        caption.className = 'meme-caption';
        caption.textContent = memeCaption[i-1];
        
        memeContainer.appendChild(img);
        memeContainer.appendChild(caption);
        memeGrid.appendChild(memeContainer);
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add animation class
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .meme-container {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }
        
        .meme-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 1rem;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .meme-container:hover .meme-caption {
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}); 
document.addEventListener('DOMContentLoaded', () => {
    const artArchiveData = [
        // SUPERFICIE Y BOSQUES
        {
            id: 'dirtmouth',
            category: 'superficie-verde',
            categoryLabel: 'BIOMA // SUPERFICIE',
            title: 'Bocasucia (Dirtmouth)',
            palette: '#161C28 · #4A5568 · #CBD5E0',
            gradient: 'linear-gradient(135deg, #0b0e14 0%, #243044 65%, #5c6f8c 100%)',
            sigil: '🏚',
            summary: 'Ambientación: Pueblo crepuscular en la cima del reino, azotado por el viento y rodeado de lápidas y faroles tenues.',
            techNote: 'Qué encontrar: El pozo de descenso hacia Hallownest, Elderbug, el puesto de mapas de Iselda, la tienda de Sly y la carpa de la Compañía de Grimm.'
        },
        {
            id: 'greenpath',
            category: 'superficie-verde',
            categoryLabel: 'BIOMA // BOSQUE ONÍRICO',
            title: 'Sendero Verde (Greenpath)',
            palette: '#143628 · #38A169 · #9AE6B4',
            gradient: 'linear-gradient(135deg, #0b2218 0%, #1d5c40 65%, #52b788 100%)',
            sigil: '🌿',
            summary: 'Ambientación: Cavernas exuberantes llenas de vegetación, musgo, cascadas y vida moldeada por Unn.',
            techNote: 'Qué encontrar: Primer encuentro con Hornet, la Capa de Ala de Polilla, el Lago de Unn y enemigos vegetales o de esporas.'
        },
        {
            id: 'queens-gardens',
            category: 'superficie-verde',
            categoryLabel: 'BIOMA // JARDINES REALES',
            title: 'Jardines de la Reina (Queen’s Gardens)',
            palette: '#1B3B2B · #48BB78 · #F6AD55',
            gradient: 'linear-gradient(135deg, #10261c 0%, #2b6447 65%, #8cc69f 100%)',
            sigil: '🌺',
            summary: 'Ambientación: Jardines aristocráticos invadidos por enredaderas, espinas, plataformas aéreas y restos de la corte real.',
            techNote: 'Qué encontrar: La Dama Blanca, desafíos de plataformeo preciso, mantas y el acceso a una de las esencias del Corazón del Aguijón.'
        },

        // RUINAS, AGUA Y SUEÑOS
        {
            id: 'city-of-tears',
            category: 'ruinas-agua',
            categoryLabel: 'BIOMA // CAPITAL LLUVIOSA',
            title: 'Ciudad de Lágrimas',
            palette: '#1E3A5F · #5B8FB9 · #0B132B',
            gradient: 'linear-gradient(135deg, #090f21 0%, #1c3d63 65%, #4d88b8 100%)',
            sigil: '🌧',
            summary: 'Ambientación: Arquitectura gótica y majestuosa bajo una lluvia constante alimentada por el Lago Azul sobre el techo del reino.',
            techNote: 'Qué encontrar: El Aguijón de los Ciudadanos, el Forjaguijones, el Santuario de Almas, el Guardián Lurien y el ascensor a los pisos superiores.'
        },
        {
            id: 'fog-canyon',
            category: 'ruinas-agua',
            categoryLabel: 'BIOMA // NIEBLA Y MEDUSAS',
            title: 'Cañón de la Niebla (Fog Canyon)',
            palette: '#162836 · #38B2AC · #B2F5EA',
            gradient: 'linear-gradient(135deg, #0b1620 0%, #1e4d5c 65%, #5fd3c8 100%)',
            sigil: '🪼',
            summary: 'Ambientación: Aguas tranquilas y brumosas habitadas por medusas bioluminiscentes y burbujas flotantes.',
            techNote: 'Qué encontrar: Los Archivos de la Teacher, Monomon la Soñadora, el jefe Uumuu y rutas conectadas con Sendero Verde y Páramos Fungales.'
        },
        {
            id: 'resting-grounds',
            category: 'ruinas-agua',
            categoryLabel: 'BIOMA // MEMORIA & SUEÑOS',
            title: 'Tierras de Descanso (Resting Grounds)',
            palette: '#1A2035 · #63B3ED · #E2E8F0',
            gradient: 'linear-gradient(135deg, #0d111f 0%, #26385e 65%, #78a5d6 100%)',
            sigil: '🕯',
            summary: 'Ambientación: Cementerio sereno y luminoso de la tribu de las polillas, cargado de lápidas, niebla suave y ecos del pasado.',
            techNote: 'Qué encontrar: El Aguijón Onírico, el Vidente, la zona de los Espíritus Glade y la entrada al Templo del Huevo Negro.'
        },

        // SUBTERRÁNEO, CRISTAL Y ABISMO
        {
            id: 'fungal-wastes',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // HONGOS & MANTIS',
            title: 'Páramos Fungales (Fungal Wastes)',
            palette: '#2A223D · #805AD5 · #F6E05E',
            gradient: 'linear-gradient(135deg, #171224 0%, #3d2c61 65%, #9f7aea 100%)',
            sigil: '🍄',
            summary: 'Ambientación: Cavernas con esporas en suspensión, setas elásticas, túneles de ácido y la aldea disciplinada de las Mantis.',
            techNote: 'Qué encontrar: La Garra de Mantis (salto en pared), la Aldea Mantis, Bretta, Cloth y atajos hacia Ciudad de Lágrimas y Nido Profundo.'
        },
        {
            id: 'crystal-peak',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // MINAS & CRISTALES',
            title: 'Pico de Cristal (Crystal Peak)',
            palette: '#1F293D · #68D391 · #F687B3',
            gradient: 'linear-gradient(135deg, #111827 0%, #2a3f5f 65%, #76b8c4 100%)',
            sigil: '💎',
            summary: 'Ambientación: Canteras y galerías llenas de cristales rosados y cian que refractan la luz, cintas transportadoras y láseres cristalinos.',
            techNote: 'Qué encontrar: El Corazón de Cristal, mineros infectados, el Taller de Hallownest y rutas hacia la Cuenca Antigua y Tierras de Descanso.'
        },
        {
            id: 'deepnest',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // OSCURIDAD ARÁCNIDA',
            title: 'Nido Profundo (Deepnest)',
            palette: '#090A0E · #2D2A32 · #D69E2E',
            gradient: 'linear-gradient(135deg, #050608 0%, #1d1a24 65%, #4a4158 100%)',
            sigil: '🕷',
            summary: 'Ambientación: Laberinto claustrofóbico, oscuro y hostil, dominado por emboscadas, telarañas, trampas y criaturas arácnidas.',
            techNote: 'Qué encontrar: La Soñadora Herrah en el Pueblo Distante, la Linterna Lumafly (imprescindible para ver), tranvías y secretos ocultos.'
        },
        {
            id: 'ancient-basin',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // RUINAS PROFUNDAS',
            title: 'Cuenca Antigua (Ancient Basin)',
            palette: '#0D1117 · #4A5568 · #A0AEC0',
            gradient: 'linear-gradient(135deg, #07090d 0%, #1f2937 65%, #4b5563 100%)',
            sigil: '🏛',
            summary: 'Ambientación: Zona hundida y silenciosa bajo la Ciudad de Lágrimas, repleta de ruinas, restos de vasijas y el Palacio Blanco en los sueños.',
            techNote: 'Qué encontrar: El Monarca de las Almas, el acceso al Abismo, el Tranvía y fragmentos esenciales para desbloquear finales.'
        },
        {
            id: 'the-abyss',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // ORIGEN DEL VACÍO',
            title: 'El Abismo (The Abyss)',
            palette: '#000000 · #0F172A · #E2E8F0',
            gradient: 'linear-gradient(135deg, #000000 0%, #0b1120 75%, #273449 100%)',
            sigil: '◉',
            summary: 'Ambientación: La sima más profunda del mundo, oscura y cargada de historia trágica donde se forjaron las vasijas.',
            techNote: 'Qué encontrar: El Aullido del Abismo, el Corazón del Vacío (con el Amuleto del Rey), el faro y la verdad sobre el origen del Caballero.'
        },
        {
            id: 'kingdoms-edge',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // FRONTERA Y CENIZA',
            title: 'Bordes del Reino (Kingdom’s Edge)',
            palette: '#1E1D1B · #716B5E · #EDF2F7',
            gradient: 'linear-gradient(135deg, #121110 0%, #3b3730 65%, #8a8172 100%)',
            sigil: '❄',
            summary: 'Ambientación: Acantilados escarpados en el límite del reino donde cae ceniza blanca como nieve sobre estructuras abandonadas.',
            techNote: 'Qué encontrar: El Coliseo de los Insensatos, el cadáver del antiguo Wyrm, Hornet Sentinel, la Marca del Rey y el acceso a la Colmena.'
        },
        {
            id: 'the-hive',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // PANAL AISLADO',
            title: 'La Colmena (The Hive)',
            palette: '#241806 · #B7791F · #F6E05E',
            gradient: 'linear-gradient(135deg, #170f03 0%, #6b440a 65%, #d69e2e 100%)',
            sigil: '🐝',
            summary: 'Ambientación: Celdas hexagonales doradas y cálidas que contrastan con el resto de Hallownest, habitadas por abejas aisladas.',
            techNote: 'Qué encontrar: Guardianes colmena, el jefe Caballero Colmena y la Sangre de Colmena (recupera vida dañada si no recibes otro golpe).'
        },

        // PIPELINE & CONCEPT ART
        {
            id: 'sketch-pipeline',
            category: 'concept',
            categoryLabel: 'CONCEPT ART // PIPELINE',
            title: 'Bocetos, Trazo y Animación 2D',
            palette: '#2D3748 · #CBD5E0 · #7CE8FF',
            gradient: 'linear-gradient(135deg, #1a202c 0%, #2d3748 65%, #718096 100%)',
            sigil: '✒',
            summary: 'Ari Gibson desarrolló el arte a partir de bocetos a mano y pintura en Photoshop para conservar una identidad expresiva.',
            techNote: 'Qué destaca: Cada zona tiene una paleta y silueta reconocibles al instante para orientar al jugador sin depender solo del mapa.'
        }
    ];

    const artGrid = document.getElementById('art-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderArtCards(filter = 'all') {
        artGrid.innerHTML = '';
        const filtered = filter === 'all'
            ? artArchiveData
            : artArchiveData.filter(item => item.category === filter);

        filtered.forEach(item => {
            const card = document.createElement('article');
            card.className = 'art-card';
            card.setAttribute('tabindex', '0');
            card.innerHTML = `
                <div class="art-banner" style="background: ${item.gradient};">
                    <span class="mono-tag">${item.categoryLabel}</span>
                    <span class="art-sigil" aria-hidden="true">${item.sigil}</span>
                </div>
                <div class="art-content">
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.summary}</p>
                    </div>
                    <span class="art-inspect">VER QUÉ ENCONTRAR Y DETALLES →</span>
                </div>
            `;

            card.addEventListener('click', () => openModal(item));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(item);
                }
            });

            artGrid.appendChild(card);
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderArtCards(btn.dataset.filter);
        });
    });

    renderArtCards();

    // Modal
    const modal = document.getElementById('art-modal');
    const modalClose = document.getElementById('modal-close');
    const modalVisual = document.getElementById('modal-visual');
    const modalCategory = document.getElementById('modal-category');
    const modalPalette = document.getElementById('modal-palette');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalNote = document.getElementById('modal-note');

    function openModal(item) {
        modalVisual.style.background = item.gradient;
        modalVisual.textContent = item.sigil;
        modalCategory.textContent = item.categoryLabel;
        modalPalette.textContent = `PALETA: ${item.palette}`;
        modalTitle.textContent = item.title;
        modalDesc.textContent = item.summary;
        modalNote.textContent = item.techNote;

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Menú móvil y Scroll
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Reveal seguro: nunca deja contenido atascado en opacity: 0
    const revealElements = document.querySelectorAll('.reveal');
    function showVisibleElements() {
        const triggerBottom = window.innerHeight * 0.96;
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom || window.scrollY === 0) {
                el.classList.remove('pending-reveal');
            }
        });
    }

    if ('IntersectionObserver' in window) {
        revealElements.forEach(el => {
            if (!el.classList.contains('visible')) {
                const rect = el.getBoundingClientRect();
                if (rect.top > window.innerHeight * 0.9) {
                    el.classList.add('pending-reveal');
                }
            }
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('pending-reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.01 });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        showVisibleElements();
    }, { passive: true });

    window.addEventListener('hashchange', () => {
        revealElements.forEach(el => el.classList.remove('pending-reveal'));
    });

    // Partículas ambientales
    const canvas = document.getElementById('soul-particles');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function initParticles() {
        particles = [];
        const count = Math.min(40, Math.floor(window.innerWidth / 30));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.6,
                speedY: -(Math.random() * 0.35 + 0.12),
                speedX: (Math.random() - 0.5) * 0.25,
                alpha: Math.random() * 0.5 + 0.15,
                isInfection: Math.random() > 0.85
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y < -10) {
                p.y = canvas.height + 10;
                p.x = Math.random() * canvas.width;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.isInfection
                ? `rgba(255, 107, 43, ${p.alpha})`
                : `rgba(124, 232, 255, ${p.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
        showVisibleElements();
    });

    resizeCanvas();
    initParticles();
    animateParticles();
});
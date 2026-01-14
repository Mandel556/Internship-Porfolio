// ==================== INITIALIZE AOS ANIMATIONS ====================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ==================== MOBILE MENU TOGGLE ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== PROJECT MODAL DATA ====================
const projectData = {
    project1: {
        title: "Robot de Sondage Twitch",
        description: "Un bot interactif développé en Python qui permet aux streamers de créer et gérer des sondages en temps réel sur Twitch. Les viewers peuvent voter en utilisant des commandes dans le chat, et les résultats sont affichés en direct. Ce projet m'a permis de travailler avec l'API Twitch et d'apprendre à gérer des flux de données en temps réel.",
        images: [
            "assets/projects/twitch1.png",
            "assets/projects/twitch2.png",
            "assets/projects/twitch3.png"
        ],
        video: "", // Add YouTube embed URL here if you have one
        github: "https://github.com/Mandel556/twitch-poll-bot", // Update with real link
        tags: ["Python", "Twitch API", "WebSocket"]
    },
    project2: {
        title: "Visualisateur d'Algorithmes de Tri",
        description: "Une application web interactive qui permet de visualiser le fonctionnement de différents algorithmes de tri (Bubble Sort, Quick Sort, Merge Sort, etc.). L'utilisateur peut ajuster la vitesse d'animation et la taille du tableau pour mieux comprendre comment chaque algorithme fonctionne. Ce projet m'a aidé à approfondir mes connaissances en structures de données et algorithmes.",
        images: [
            "assets/projects/sorting1.png",
            "assets/projects/sorting2.png",
            "assets/projects/sorting3.png"
        ],
        video: "", // Add YouTube embed URL here if you have one
        github: "https://github.com/Mandel556/sorting-visualizer", // Update with real link
        tags: ["JavaScript", "HTML/CSS", "Algorithms"]
    },
    project3: {
        title: "Portfolio Personnel",
        description: "Ce site web portfolio moderne et responsive que vous êtes en train de consulter ! Créé entièrement avec HTML, CSS et JavaScript vanilla, sans framework. Il présente mes compétences, mes projets et permet aux employeurs de visualiser mon CV directement en ligne. Le design met l'accent sur l'expérience utilisateur avec des animations fluides et une navigation intuitive.",
        images: [
            "assets/projects/portfolio1.png",
            "assets/projects/portfolio2.png",
            "assets/projects/portfolio3.png"
        ],
        video: "",
        github: "https://github.com/Mandel556/portfolio", // Update with real link
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
};

// ==================== OPEN PROJECT MODAL ====================
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];

    if (!project) return;

    // Build modal content
    let modalHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
    `;

    // Add images gallery
    if (project.images.length > 0) {
        modalHTML += `<div class="modal-gallery">`;
        project.images.forEach(img => {
            modalHTML += `<img src="${img}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300/667eea/ffffff?text=Image+Non+Disponible'">`;
        });
        modalHTML += `</div>`;
    }

    // Add video if available
    if (project.video) {
        modalHTML += `
            <div class="modal-video">
                <iframe src="${project.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    }

    // Add GitHub link
    modalHTML += `
        <div class="modal-links">
            <a href="${project.github}" target="_blank" class="modal-link">
                <i class="fab fa-github"></i> Voir sur GitHub
            </a>
        </div>
    `;

    modalBody.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ==================== CLOSE PROJECT MODAL ====================
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== SCROLL INDICATOR ====================
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: aboutSection.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
}
// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        contentSections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding section
        const sectionId = link.dataset.section;
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// Mobile toggle functionality
const mobileToggle = document.querySelector('.mobile-toggle');
const sidebar = document.querySelector('.sidebar');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
    });
}

// Project carousel functionality
let currentSlide = 0;
let currentProject = '';

// Sample project screenshots data
const projectScreenshots = {
    project1: [
        {
            src: 'elearn/Login.png',
            caption: 'E-LearnGameZone Login'
        },
        {
            src: 'elearn/Signup.png',
            caption: 'E-LearnGameZone Signup'
        },
        {
            src: 'elearn/Home.png',
            caption: 'E-LearnGameZone Home Page'
        },
        {
            src: 'elearn/Search.png',
            caption: 'Search Bar'
        },
        {
            src: 'elearn/Popup Modal.png',
            caption: 'Pop-up Modal'
        },
        {
            src: 'elearn/Preview.png',
            caption: 'Modal Preview'
        },
        {
            src: 'elearn/Library.png',
            caption: 'E-LearnGameZone Library'
        },
        {
            src: 'elearn/Module.png',
            caption: 'E-LearnGameZone Module'
        },
        {
            src: 'elearn/Video Tutorial.png',
            caption: 'Video Tutorials'
        },
        {
            src: 'elearn/Flashcards.png',
            caption: 'Flashcards Reviewer'
        },
        {
            src: 'elearn/Games.png',
            caption: 'E-LearnGameZone Gamified Quiz'
        },
        {
            src: 'elearn/Profile.png',
            caption: 'Profile View'
        },
        {
            src: 'elearn/Progress.png',
            caption: 'Student Progress Tracking'
        },
    ],
    project2: [
        {
            src: 'bl/Login.png',
            caption: 'Beyond Limits EMS Login Page'
        },
        {
            src: 'bl/Employee Database.png',
            caption: 'Beyond Limits Employee Database'
        },
        {
            src: 'bl/Company Information - Employee.png',
            caption: 'Company Information - Employee Page'
        },
        {
            src: 'bl/Personal Information - Employee.png',
            caption: 'Personal Information - Employee Page'
        },
        {
            src: 'bl/Equipment Accountability.png',
            caption: 'Beyond Limits Equipment Accountability Page'
        },
        {
            src: 'bl/Equipment Modal.png',
            caption: 'Beyond Limits Equipment Modal'
        },
        {
            src: 'bl/Equipment Form.png',
            caption: 'Equipment Form'
        },
        {
            src: 'bl/Financial Tracking.png',
            caption: 'Financial Tracking Page'
        },
        {
            src: 'bl/Financial Modal.png',
            caption: 'Financial Modal'
        },
        {
            src: 'bl/Financial Record.png',
            caption: 'Financial Record Page'
        },
    ]
};

function openCarousel(projectKey) {
    currentProject = projectKey;
    currentSlide = 0;
    const modal = document.getElementById('projectModal');
    const carouselContent = document.getElementById('carousel-content');
    
    // Clear previous content
    carouselContent.innerHTML = '';
    
    // Create slides
    const screenshots = projectScreenshots[projectKey];
    screenshots.forEach((screenshot, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${screenshot.src}" alt="${screenshot.caption}" style="max-width: 800px; max-height: 600px; width: auto; height: auto; object-fit: contain;">
            <p style="color: white; margin-top: 1rem; font-size: 1.5rem; font-weight: 300; font-weight: bold; text-align: center;">${screenshot.caption}</p>
        `;
        carouselContent.appendChild(slide);
    });
    
    modal.classList.add('active');
}

function closeCarousel() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function previousSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    slides[currentSlide].classList.add('active');
}

// Close modal on background click
// document.getElementById('projectModal').addEventListener('click', (e) => {
//     if (e.target.id === 'projectModal') {
//         closeCarousel();
//     }
// });

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('projectModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') previousSlide();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'Escape') closeCarousel();
    }
});

// Fade in animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth hover effects for skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
    });
});

// Add subtle parallax effect to timeline items
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.style.transform = `translateY(${rate * 0.1}px)`;
        }
    });
});

// Console welcome message
console.log('%c Welcome to Aira\'s Portfolio! 🚀', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%c Feel free to explore the code!', 'color: #b3b3b3; font-size: 14px;');

// Initialize first section as active
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }
});

// Video Modal Functions
function openVideoModal(videoSrc, videoTitle) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const titleElement = document.getElementById('videoTitle');
    
    titleElement.textContent = videoTitle;
    videoPlayer.src = videoSrc;
    modal.classList.add('active');
    videoPlayer.play();
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.pause();
    videoPlayer.src = '';
    modal.classList.remove('active');
}

// Close video modal on background click
document.getElementById('videoModal').addEventListener('click', (e) => {
    if (e.target.id === 'videoModal') {
        closeVideoModal();
    }
});

// Add Escape key support for video modal
document.addEventListener('keydown', (e) => {
    const videoModal = document.getElementById('videoModal');
    if (videoModal.classList.contains('active') && e.key === 'Escape') {
        closeVideoModal();
    }
});

// Portfolio Website JavaScript

// Projects data - easily modifiable
const projects = [
    {
        id: 1,
        title: "Enterprise Document Archive System",
        category: "Machine Learning",
        description: "A comprehensive web-based document digitization platform for converting thousands of physical business documents into an intelligent, searchable digital archive.",
        longDescription: "As part of the ML team in a 6-team project, I developed machine learning models integrated with Django to transform physical business documents into an intelligent digital archive system. The platform digitizes thousands of physical documents using advanced OCR technology, extracts structured metadata using ML models, and provides natural language search capabilities. Initially implemented with OpenAI Vision API for OCR and GPT for search, but later migrated to Qwen2-VL for OCR (better document formatting understanding) and Qwen2.5 for metadata extraction to optimize costs while maintaining quality. The system serves as a complete enterprise solution with secure web interface and intelligent document retrieval.",
        image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop",
        technologies: ["Python", "Django", "Qwen2-VL", "Qwen2.5", "OpenAI API", "OCR", "ML"],
        role: "ML Engineer (ML Team)",
        demoUrl: "#",
        githubUrl: "https://github.com/Blaesei/enterprise-document-archive",
        features: [
            "Vision-based OCR with document formatting awareness",
            "Structured metadata extraction using ML models",
            "Natural language search powered by LLM integration",
            "Django-integrated ML pipeline for document processing",
            "Cost-optimized solution (OpenAI → Qwen migration)",
            "Enterprise-grade document digitization system",
            "Secure web interface for document access",
            "Multi-team collaborative architecture"
        ]
    },
    {
        id: 2,
        title: "Pneumonia Detection from Chest X-Rays",
        category: "Deep Learning",
        description: "Deep learning model using MobileNetV2 for automated pneumonia detection from chest X-ray images with 87.66% accuracy.",
        longDescription: "This computer vision project leverages deep learning to assist in medical diagnosis by automatically detecting pneumonia from chest X-ray images. Built using TensorFlow and Keras with MobileNetV2 as the backbone architecture, the model was trained on a comprehensive dataset of chest X-rays. Applied various data augmentation techniques including rotation, zoom, and flip to improve model generalization and reduce overfitting. The model achieved an impressive 87.66% accuracy in distinguishing between pneumonia and normal cases.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
        technologies: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Computer Vision", "Data Augmentation"],
        role: "ML Engineer & Data Scientist",
        demoUrl: "#",
        githubUrl: "https://github.com/Blaesei/pneumonia-detection",
        features: [
            "MobileNetV2-based transfer learning",
            "Advanced data augmentation pipeline",
            "87.66% classification accuracy",
            "Medical image preprocessing",
            "Model evaluation and validation",
            "Confusion matrix analysis"
        ]
    },
    {
        id: 3,
        title: "Air Quality Prediction System",
        category: "Machine Learning",
        description: "ML models predicting Air Quality Index (AQI) for Philippine cities using ensemble methods and advanced preprocessing techniques.",
        longDescription: "This environmental monitoring project focuses on predicting Air Quality Index for various Philippine cities using multiple machine learning algorithms. The system employs comprehensive data preprocessing including normalization and class balancing using RandomUnderSampler. Implemented and compared various ML models including Linear Regression, Decision Tree, Random Forest, XGBoost, and SVM. Achieved an R² score of 0.51 with ensemble models and created comprehensive visualizations using Matplotlib and Seaborn for data analysis and results interpretation.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn"],
        role: "Data Scientist & ML Engineer",
        demoUrl: "#",
        githubUrl: "https://github.com/Blaesei/air-quality-prediction",
        features: [
            "Multiple ML algorithm implementation",
            "Advanced data preprocessing pipeline",
            "Ensemble model optimization",
            "RandomUnderSampler for class balancing",
            "Comprehensive data visualization",
            "Philippine cities AQI focus"
        ]
    },
    {
        id: 4,
        title: "Sniff-My-Fridge IoT System",
        category: "Embedded Systems",
        description: "Smart spoilage detection system using ESP32 with gas and humidity sensors for real-time food safety monitoring.",
        longDescription: "A collaborative IoT project designed to prevent food waste and ensure food safety through automated spoilage detection. The system uses ESP32 microcontroller integrated with MQ135 gas sensors and humidity sensors to detect spoilage indicators. Implemented real-time alert system with buzzer, LCD display, and LED indicators to notify users of potential food spoilage. Calibrated MQ135 sensor to reduce false positives from non-food gases, ensuring accurate detection of food-specific spoilage compounds.",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
        technologies: ["ESP32", "C++", "MQ135 Sensor", "Arduino IDE", "IoT", "Hardware Integration"],
        role: "Embedded Systems Developer",
        demoUrl: "#",
        githubUrl: "https://github.com/Blaesei/sniff-my-fridge",
        features: [
            "Real-time gas and humidity monitoring",
            "Multi-sensor data fusion",
            "Calibrated spoilage detection algorithm",
            "Real-time alert system (buzzer, LCD, LED)",
            "False positive reduction techniques",
            "Team collaboration and integration"
        ]
    },
    {
        id: 5,
        title: "SignalFlux Dynamics Traffic System",
        category: "Embedded Systems",
        description: "Adaptive traffic light system using Arduino and IR sensors to optimize traffic flow based on real-time congestion data.",
        longDescription: "An intelligent traffic management system that dynamically adjusts traffic signal timing based on real-time traffic density. The system uses Arduino microcontroller with IR sensors to detect vehicle congestion at intersections. Implemented adaptive algorithms that prioritize high-density lanes to reduce overall wait times. Integrated hardware feedback mechanisms and safety delays to ensure smooth traffic flow while maintaining safety standards. The project involved extensive team collaboration and simulation testing.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
        technologies: ["Arduino", "C++", "IR Sensors", "Traffic Simulation", "Embedded Systems"],
        role: "Embedded Systems Engineer",
        demoUrl: "#",
        githubUrl: "https://github.com/Blaesei/signalflux-dynamics",
        features: [
            "IR-based congestion detection",
            "Adaptive signal timing algorithms",
            "Priority-based lane management",
            "Hardware feedback integration",
            "Safety delay mechanisms",
            "Traffic flow simulation"
        ]
    },
    {
        id: 6,
        title: "Employee Information System",
        category: "Full Stack",
        description: "Desktop HR management application with secure authentication, salary computation, and complete CRUD operations.",
        longDescription: "A comprehensive desktop application for human resource management built with Java and MySQL. The system features secure user authentication, automated salary computation, and complete CRUD operations for employee data management. Implemented a robust SQL-based user database hosted on localhost with Apache server emulation for testing. The application provides an intuitive interface for HR professionals to manage employee information, calculate payroll, and maintain secure access controls.",
        image: "qn.jpg",
        technologies: ["Java", "MySQL", "Apache Server", "JDBC", "Swing/JavaFX", "SQL"],
        role: "Full Stack Developer",
        demoUrl: "#",
        githubUrl: "https://github.com/Blaesei/employee-info-system",
        features: [
            "Secure user authentication system",
            "Automated salary computation",
            "Complete CRUD operations",
            "MySQL database integration",
            "Desktop GUI application",
            "Apache server testing environment"
        ]
    }
];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const projectsGrid = document.getElementById('projects-grid');
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Navigation
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Smooth scrolling for navigation links
function handleNavigation(e) {
    if (e.target.classList.contains('nav-link') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        closeMobileMenu();
    }
}

// Projects functionality
function renderProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.demoUrl}" class="project-link" target="_blank" onclick="event.stopPropagation()">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a href="${project.githubUrl}" class="project-link" target="_blank" onclick="event.stopPropagation()">
                            <i class="fab fa-github"></i> Code
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Add click listeners to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            showProjectModal(projectId);
        });
    });
}

function showProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    modalBody.innerHTML = `
        <div class="project-modal-content">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 2rem;">
            <div style="padding: 0 1rem;">
                <span class="project-category">${project.category}</span>
                <h2 style="margin: 1rem 0; font-size: 2rem;">${project.title}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">${project.longDescription}</p>
                
                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem; color: var(--primary-color);">My Role</h3>
                    <p style="color: var(--text-secondary);">${project.role}</p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Key Features</h3>
                    <ul style="color: var(--text-secondary); padding-left: 1.5rem;">
                        ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
                    </ul>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Technologies Used</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
                    <a href="${project.demoUrl}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> View Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">
                        <i class="fab fa-github"></i> View Source Code
                    </a>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact form functionality
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="loading"></span> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Download functionality
function handleDownloads() {
    document.getElementById('download-resume')?.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual resume file path
        const link = document.createElement('a');
        link.href = 'Comprehensive_Resume.pdf';
        link.download = 'Quinn Harvey Pineda.pdf';
        link.click();
        
        // For demo purposes, show an alert
        alert('Resume download would start here. Please add your actual resume file path.');
    });

    document.getElementById('download-portfolio')?.addEventListener('click', (e) => {
        e.preventDefault();
        // This would generate or download a portfolio PDF
        alert('Portfolio PDF download would start here. You can integrate with libraries like jsPDF to generate PDFs dynamically.');
    });
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Navbar background on scroll
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Setup event listeners
    themeToggle?.addEventListener('click', toggleTheme);
    hamburger?.addEventListener('click', toggleMobileMenu);
    navMenu?.addEventListener('click', handleNavigation);
    contactForm?.addEventListener('submit', handleContactForm);
    closeModal?.addEventListener('click', hideProjectModal);
    
    // Close modal when clicking outside
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideProjectModal();
        }
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Render projects
    renderProjects();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup active navigation
    updateActiveNav();
    
    // Setup navbar scroll effect
    setupNavbarScroll();
    
    // Setup download handlers
    handleDownloads();
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            hideProjectModal();
        }
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
window.addEventListener('resize', debounce(() => {
    // Handle any resize-specific logic here
    closeMobileMenu();
}, 250));

// Error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Service Worker registration (if you want offline capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
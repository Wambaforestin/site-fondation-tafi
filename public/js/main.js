// Fondation TAFI - Main JavaScript
console.log("Page d'accueil de Fondation TAFI chargée.");

// Mobile Menu Toggle Function
function toggleMobileMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// DOMContentLoaded Event Handler
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    const navLinks = document.querySelectorAll('nav ul li a');
    const navbar = document.getElementById('navbar');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('nav');
        
        if (!mobileToggle.contains(event.target) && !nav.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'linear-gradient(135deg, rgba(0, 51, 102, 0.95) 0%, rgba(20, 93, 160, 0.95) 100%)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #003366 0%, #145DA0 100%)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Initialize Hero Carousel
    initHeroCarousel();

    // Animation on scroll
    initScrollAnimations();

    // Smooth scroll for anchor links
    initSmoothScroll();
});

// Hero Carousel Functionality
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    let autoPlayInterval = null;
    const autoPlayDelay = 4000; // 4 seconds - faster auto rotation

    // Show specific slide
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current slide and indicator
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        currentSlide = index;
    }

    // Go to specific slide
    function goToSlide(index) {
        stopAutoPlay();
        showSlide(index);
        // Restart autoplay immediately after manual navigation
        setTimeout(() => startAutoPlay(), 500);
    }

    // Next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Previous slide
    function previousSlide() {
        const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(prevIndex);
    }

    // Start autoplay
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, autoPlayDelay);
    }

    // Stop autoplay
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    // Initialize carousel
    showSlide(0);

    // Add click handlers to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Start autoplay immediately
    startAutoPlay();

    // Optional: Pause on hover (you can remove this if you want continuous auto-rotation)
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => stopAutoPlay());
        heroSection.addEventListener('mouseleave', () => startAutoPlay());
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            goToSlide((currentSlide + 1) % slides.length);
        }
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .stat-item, .program-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// FAQ Functionality for Admission Page
document.addEventListener('DOMContentLoaded', function() {
    // Existing carousel code...
    
    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Form validation for admission form
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#dc3545';
                    isValid = false;
                } else {
                    field.style.borderColor = '#28a745';
                }
            });
            
            if (isValid) {
                alert('Formulaire soumis avec succès! Nous vous recontacterons bientôt.');
                this.reset();
            } else {
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    }
});

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Gallery Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });
    
    // Load More Functionality
    let visibleItems = 12;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    function showMoreItems() {
        const hiddenItems = Array.from(galleryItems).slice(visibleItems, visibleItems + 6);
        hiddenItems.forEach(item => {
            item.style.display = 'block';
        });
        visibleItems += 6;
        
        if (visibleItems >= galleryItems.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', showMoreItems);
        
        // Initially hide items beyond the first 12
        galleryItems.forEach((item, index) => {
            if (index >= 12) {
                item.style.display = 'none';
            }
        });
    }
});

// Lightbox functionality
let currentImageIndex = 0;
const allImages = [];

// Collect all images for navigation
document.querySelectorAll('.gallery-item img').forEach((img, index) => {
    allImages.push({
        src: img.src,
        alt: img.alt,
        title: img.nextElementSibling?.querySelector('h4')?.textContent || img.alt,
        description: img.nextElementSibling?.querySelector('p')?.textContent || ''
    });
});

function openLightbox(src, title, description = '') {
    const modal = document.getElementById('lightboxModal');
    const image = document.getElementById('lightboxImage');
    const titleElement = document.getElementById('lightboxTitle');
    const descElement = document.getElementById('lightboxDescription');
    
    // Find current image index
    currentImageIndex = allImages.findIndex(img => img.src === src);
    
    image.src = src;
    image.alt = title;
    titleElement.textContent = title;
    descElement.textContent = description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    updateLightboxImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const currentImage = allImages[currentImageIndex];
    const image = document.getElementById('lightboxImage');
    const titleElement = document.getElementById('lightboxTitle');
    const descElement = document.getElementById('lightboxDescription');
    
    image.src = currentImage.src;
    image.alt = currentImage.alt;
    titleElement.textContent = currentImage.title;
    descElement.textContent = currentImage.description;
}

// Close lightbox with escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        previousImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});

// Close lightbox when clicking outside the image
document.getElementById('lightboxModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});
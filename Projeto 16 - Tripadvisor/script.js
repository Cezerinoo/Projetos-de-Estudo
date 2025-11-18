// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Slider totalmente automático
    class AutoSlider {
        constructor() {
            this.slidesContainer = document.getElementById('slides-container');
            this.slides = document.querySelectorAll('.slide-container');
            
            this.currentSlide = 0;
            this.slideCount = this.slides.length;
            this.autoSlideInterval = null;
            
            this.init();
        }
        
        init() {
            // Inicia slide automático
            this.startAutoSlide();
        }
        
        updateSlider() {
            // Move slides container suavemente
            this.slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }
        
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slideCount;
            this.updateSlider();
        }
        
        startAutoSlide() {
            // Muda slide a cada 2 segundos
            this.autoSlideInterval = setInterval(() => {
                this.nextSlide();
            }, 2000);
        }
    }
    
    // Initialize slider
    if (document.getElementById('slides-container')) {
        new AutoSlider();
    }
});

// Lógica para o slider principal
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-container');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove a classe active de todos os slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Adiciona a classe active ao slide atual
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('active');
    
    // Move o container de slides
    const slidesContainer = document.getElementById('slides-container');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-play para o slider principal
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Inicia o auto-play (avança a cada 5 segundos)
setInterval(nextSlide, 5000);

// Lógica para os carrosséis de catálogo
function setupCarousel(carouselId, prevBtnId, nextBtnId) {
    const carousel = document.getElementById(carouselId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    let scrollAmount = 0;
    const scrollStep = 300; // Quantidade de pixels para rolar por clique
    
    prevBtn.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) scrollAmount = 0;
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        scrollAmount += scrollStep;
        // Limita o scroll ao máximo possível
        if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = carousel.scrollWidth - carousel.clientWidth;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}

// Configura todos os carrosséis quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o primeiro slide
    showSlide(0);
    
    // Configura os carrosséis (você precisará adicionar IDs únicos aos elementos)
    setupCarousel('activity-interests', 'prev-catalogue-btn-1', 'next-catalogue-btn-1');
    setupCarousel('near-you', 'prev-catalogue-btn-2', 'next-catalogue-btn-2');
    setupCarousel('inspirations-trip', 'prev-catalogue-btn-3', 'next-catalogue-btn-3');
    setupCarousel('what-to-do-now', 'prev-catalogue-btn-4', 'next-catalogue-btn-4');
    
    // Para a seção de proposta de viagem, você precisará adicionar IDs únicos também
    // setupCarousel('proposal-trip-1', 'prev-catalogue-btn-5', 'next-catalogue-btn-5');
    // setupCarousel('proposal-trip-2', 'prev-catalogue-btn-6', 'next-catalogue-btn-6');
});

// Versão alternativa mais simples para os carrosséis (sem precisar de IDs únicos)
function setupAllCarousels() {
    const allPrevBtns = document.querySelectorAll('#prev-catalogue-btn');
    const allNextBtns = document.querySelectorAll('#next-catalogue-btn');
    
    allPrevBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Encontra o carrossel mais próximo
            const carousel = btn.closest('.catalogue-nav').nextElementSibling;
            if (carousel && carousel.classList.contains('catalogue-options-info')) {
                carousel.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    allNextBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Encontra o carrossel mais próximo
            const carousel = btn.closest('.catalogue-nav').nextElementSibling;
            if (carousel && carousel.classList.contains('catalogue-options-info')) {
                carousel.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicializa a versão simples quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    setupAllCarousels();
});
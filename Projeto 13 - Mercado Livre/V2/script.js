// 1. Primeiro, pegamos todos os elementos que vamos usar
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slideImg');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.querySelector('.dots-container');

// 2. Criamos variáveis para controlar o slider
let slideAtual = 0; // Começa no primeiro slide (índice 0)
const totalSlides = slides.length; // Quantos slides temos

// 3. Função para criar os pontinhos (dots) embaixo do slider
function criarDots() {
    // Para cada slide, criamos um dot
    for (let i = 0; i < totalSlides; i++) {
        // Cria um elemento span
        const dot = document.createElement('span');
        // Adiciona a classe 'dot'
        dot.classList.add('dot');
        
        // Se for o primeiro slide, marca como ativo
        if (i === 0) {
            dot.classList.add('active');
        }
        
        // Quando clicar no dot, vai para o slide correspondente
        dot.addEventListener('click', function() {
            irParaSlide(i);
        });
        
        // Adiciona o dot no container
        dotsContainer.appendChild(dot);
    }
}

// 4. Função para atualizar a posição do slider
function atualizarSlider() {
    // Calcula quanto mover o slider
    // Cada slide tem 100% de largura, então movemos 100% para cada slide
    const mover = slideAtual * 100;
    sliderWrapper.style.transform = `translateX(-${mover}%)`;
    
    // Atualiza os dots
    atualizarDots();
}

// 5. Função para atualizar qual dot está ativo
function atualizarDots() {
    // Pega todos os dots
    const dots = document.querySelectorAll('.dot');
    
    // Remove a classe 'active' de todos os dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Adiciona a classe 'active' apenas no dot atual
    dots[slideAtual].classList.add('active');
}

// 6. Função para ir para o próximo slide
function proximoSlide() {
    // Aumenta o número do slide atual
    slideAtual++;
    
    // Se passou do último slide, volta para o primeiro
    if (slideAtual >= totalSlides) {
        slideAtual = 0;
    }
    
    // Atualiza a posição do slider
    atualizarSlider();
}

// 7. Função para voltar ao slide anterior
function slideAnterior() {
    // Diminui o número do slide atual
    slideAtual--;
    
    // Se foi antes do primeiro slide, vai para o último
    if (slideAtual < 0) {
        slideAtual = totalSlides - 1;
    }
    
    // Atualiza a posição do slider
    atualizarSlider();
}

// 8. Função para ir direto para um slide específico
function irParaSlide(numeroSlide) {
    slideAtual = numeroSlide;
    atualizarSlider();
}

// 9. Função para o slider mudar automaticamente
function iniciarAutoSlide() {
    // A cada 10 segundos, chama a função proximoSlide
    setInterval(proximoSlide, 10000);
}

// 10. AGORA VAMOS CONFIGURAR TUDO:

// Quando a página carregar, fazemos isso:
document.addEventListener('DOMContentLoaded', function() {
    // Cria os dots
    criarDots();
    
    // Configura os botões
    prevBtn.addEventListener('click', slideAnterior);
    nextBtn.addEventListener('click', proximoSlide);
    
    // Inicia o auto slide
    iniciarAutoSlide();
    
    // Posiciona o slider corretamente (só por segurança)
    atualizarSlider();
});

// 11. EXTRA: Fazer o slider funcionar quando a janela mudar de tamanho
window.addEventListener('resize', function() {
    // Quando a tela redimensionar, atualiza o slider
    atualizarSlider();
});

// EXPLICAÇÃO DO QUE ACONTECE:
// - Temos 4 slides (0, 1, 2, 3)
// - Quando slideAtual = 0: translateX(0%) - mostra primeiro slide
// - Quando slideAtual = 1: translateX(-100%) - mostra segundo slide  
// - Quando slideAtual = 2: translateX(-200%) - mostra terceiro slide
// - Quando slideAtual = 3: translateX(-300%) - mostra quarto slide

console.log("Slider configurado! Total de slides: " + totalSlides);
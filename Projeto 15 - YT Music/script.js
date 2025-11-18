function LeftScroll(btn) {
    const musicArea = btn.closest('.music-options-area');
    
    // Tenta encontrar o container de músicas horizontal primeiro
    let container = musicArea.querySelector('.music-content-container');
    
    // Se não encontrar, procura o container de colunas
    if (!container) {
        container = musicArea.querySelector('.choose-finger-music-container');
    }
    
    if (container) {
        container.scrollBy({left: -300, behavior: 'smooth'});
    }
}

function RightScroll(btn) {
    const musicArea = btn.closest('.music-options-area');
    
    // Tenta encontrar o container de músicas horizontal primeiro
    let container = musicArea.querySelector('.music-content-container');
    
    // Se não encontrar, procura o container de colunas
    if (!container) {
        container = musicArea.querySelector('.choose-finger-music-container');
    }
    
    if (container) {
        container.scrollBy({left: 300, behavior: 'smooth'});
    }
}

// function showOrRemoveMenu() {
//     const contentContainer = document.querySelector('.content-container');
//     contentContainer.classList.toggle('hidden-menu-active');
// }

// // Fecha menu ao clicar nos links
// document.querySelectorAll('#hidden-menu a, #new-playlist-btn').forEach(element => {
//     element.addEventListener('click', function() {
//         document.querySelector('.content-container').classList.remove('hidden-menu-active');
//     });
// });
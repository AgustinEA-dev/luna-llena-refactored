function setHeroHeight() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.height = `${window.innerHeight}px`;
    }
}

// Ejecuta al cargar y al redimensionar
window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);
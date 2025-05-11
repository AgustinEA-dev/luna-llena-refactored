// Viewport inner-height function

function setHeroHeight() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.height = `${window.innerHeight}px`;
    }
}

window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);

// Menu dropdown

document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelector('#bars');
    const menuDropDown = document.querySelector('#menu-dropdown');
    const overlay = document.querySelector('#overlay');

    if (bars && menuDropDown && overlay) {
        bars.addEventListener('click', () => {
            menuDropDown.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
});
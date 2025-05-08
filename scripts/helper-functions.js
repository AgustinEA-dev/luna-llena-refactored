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
    const bars = document.querySelector('#bars')
    if (bars) {
        bars.addEventListener('click', () => {
            alert("all good!")
        })
    }
})
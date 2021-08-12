const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body;

// клик по кнопке
navBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    toggleMobilenav()
})


// клик вне мобильной навигации
window.addEventListener('click', function () {

    if(body.classList.contains('no-scroll')) {
        toggleMobilenav()
    }
})

// останавливаем кли внутри открытой навигации

mobileNav.addEventListener('click', function(e) {
    e.stopPropagation();
})

// выносим одинаковые части в одну функцию и потом ее вызываем
function toggleMobilenav() {
    body.classList.toggle('no-scroll')
    navBtn.classList.toggle('nav-button-close')
    mobileNav.classList.toggle('mobile-nav-active')
}
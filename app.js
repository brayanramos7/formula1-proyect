const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

    // Show active menu when scrolling 
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#drivers-page');
    const servicesMenu = document.querySelector('#standing-page');
    let scrollPos = window.scrollY
    //console.log(scrollPos);

    // adds 'highlight' class to my manu items 
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if(window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    } else if(window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on menu 
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
};
// menuLinks.addEventListener('click', hideMobileMenu);
// navLogo.addEventListener('click', hideMobileMenu);


//countdown timer 
const countdown = document.querySelector('.countdown');
const countdownDate = new Date('Jan 1, 2023 00:00:00').getTime();
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <div class="countdown__item">
            <p class="countdown__number">${days}</p>
            <p class="countdown__label">days</p>
        </div>
        <div class="countdown__item">
            <p class="countdown__number">${hours}</p>
            <p class="countdown__label">hours</p>
        </div>
        <div class="countdown__item">
            <p class="countdown__number">${minutes}</p>
            <p class="countdown__label">minutes</p>
        </div>
        <div class="countdown__item">
            <p class="countdown__number">${seconds}</p>
            <p class="countdown__label">seconds</p>
        </div>
    `;

    if(distance < 0) {
        clearInterval(countdownInterval);
        countdown.innerHTML = '<h2>Happy New Year!</h2>';
    }
}, 1000);
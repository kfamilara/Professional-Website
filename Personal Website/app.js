const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector(".navbar__menu");


const mobileMenu = () => {
    menu.classList.toggle('is_active');
    menuLinks.classList.toggle('active');

};

menu.addEventListener('click', mobileMenu);

const carouselSlide = document.querySelector(".carousel_slide");
const carouselImages = document.querySelectorAll(".carousel_slide img");

//Button

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= 4) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

prevBtn.addEventListener('click', () => {
    if (counter <=0) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastcopy") {
        carouselSlide.style.transition = "none";
        counter = 3;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (carouselImages[counter].id === "firstcopy") {
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})

// Education Appear

const educationbox = document.querySelector('.education');
const educationoption = document.querySelector('#education');

const educationboxmove = () => {
educationbox.style.transition = "transform 1s ease-in-out";
educationbox.style.transform = 'translateX(0px)';
};

const educationboxmoveback = () => {
    educationbox.style.transition = "transform 1s ease-in-out";
    educationbox.style.transform = 'translateX(-284.5px)';
    };
    
educationoption.addEventListener('click', educationboxmove);
educationbox.addEventListener('click', educationboxmoveback);




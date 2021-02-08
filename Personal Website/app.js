const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector(".navbar__menu");


const mobileMenu = () => {
    menu.classList.toggle('is_active');
    menuLinks.classList.toggle('active');
    menuLinks.style.transition = "transform 0.4s ease-in-out";

};

menu.addEventListener('click', mobileMenu);

const carouselSlide = document.querySelector(".carousel_slide");
const carouselImages = document.querySelectorAll(".carousel_slide img");

//Button

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter

let counter = 1;
const size = 284.5;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= 4) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

prevBtn.addEventListener('click', () => {
    if (counter <=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastcopy") {
        carouselSlide.style.transition = "none";
        counter = 3;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === "firstcopy") {
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

// Education Appear

const carousel_container = document.querySelector(".carousel_container")
const educationbox = document.querySelector('.education');
const educationoption = document.querySelector('#education');
const skillsoption = document.querySelector('#skills');
const hobbyoption = document.querySelector('#hobbypicture');

let width = carousel_container.clientWidth;

main = document.querySelector(".main")

const educationboxmove = () => {
// let width = carousel_container.clientWidth;
// if (width == 284.5) { 
educationbox.style.transition = "all 0.4s ease-in-out";
carousel_container.classList.toggle('active'); 
educationbox.classList.toggle("active");
main.classList.toggle("active");


};

const educationboxmoveback = () => {
    educationbox.style.transition = "all 0.4s ease-in-out";
    educationbox.classList.toggle("active");
    carousel_container.classList.toggle('active');
    main.classList.toggle("active");


};
    
educationoption.addEventListener('click', educationboxmove);
educationbox.addEventListener('click', educationboxmoveback);
// educationbox.addEventListener('mouseleave', educationboxmoveback);
// Above does not really work on mobile, cuz there is no hover.


const blurb = document.querySelector(".blurb")


blurb.addEventListener("mousemove", (e) => {
    let xAxis = (150 - e.layerX)/5;
    console.log(e);
    let yAxis = (131 - e.layerY)/5;
    blurb.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    blurb.style.transition = "all 0.4s ease"

});

blurb.addEventListener("mouseleave", (e) => {
    blurb.style.transform = `none`;
    blurb.style.transition = "all 0.4s ease"

});

// Why does this not work? Ok now it works


educationoption.addEventListener("mousemove", (e) => {
    let xAxis = (130 -e.layerX)/3;
    console.log(e);
    let yAxis = (143-e.layerY)/3;
    educationoption.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;

});

educationoption.addEventListener("mouseleave", (e) => {

    educationoption.style.transform = `none`;
    educationoption.style.transition = "all 0.4s ease"

});

//Skills Button!
const skills = document.querySelector("#skills");






//slider

// slider= document.querySelector("#sliders");
output =document.querySelector('#demo');
// output.innertext = slider.value;

// slider.addEventListener(oninput, (e) => {
// output.innerhtml = e.value;
// output.innerhtml = e.value; 

// });

// slider.oninput = function() {
//     output.innerHTML = e.value;
// };
graphs = document.querySelector (".graphs")

output = document.querySelector('#demo');
function slider (value) {
graphs.style.transform = 'translateX(' + (-100 * value) + '%)';
}




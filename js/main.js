const slideList = [{
    img: "img/img1.jpg"
    
},
{
    img: "img/img2.jpg"
    
},
{
    img: "img/img3.jpg"
    
}];

const image = document.querySelector('img.slider');
const dots = [...document.querySelectorAll('.dots span')];

// Interfejs

const time = 3000;
let active = 0;

// Implementacja

const changeDot = () => {
    const activeDot = dots.findIndex(dot =>
    dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = ()=> {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    changeDot()
}
let indexInterval = setInterval(changeSlide, time)

const keyChangeSlide = (e) => {
    if(e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;

        if(active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }

        image.src = slideList[active].img;
    changeDot()
    indexInterval = setInterval(changeSlide, time)
    }

}

window.addEventListener('keydown', keyChangeSlide)

//nav mobile

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation-mobile');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation-mobile--active');
}

hamburger.addEventListener('click', handleClick);



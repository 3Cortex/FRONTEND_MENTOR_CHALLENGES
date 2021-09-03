// header/toggler
const Hamburger = document.querySelector('.hamburger');
const Nav = document.querySelector('.nav_items');

const Toggle = function () {
   Hamburger.classList.toggle('on');
   Nav.classList.toggle('on');
};

const ToggleRemove = function () {
   Hamburger.classList.remove('on');
   Nav.classList.remove('on');
};

Hamburger.addEventListener('click', Toggle);
window.addEventListener('resize', () => {
   if (
      Hamburger.classList.contains('on') &&
      Nav.classList.contains('on') &&
      window.innerWidth > 800
   ) {
      ToggleRemove();
   }
});

// slider/carousel
const slideLeft = document.querySelector('.arr-left');
const slideRight = document.querySelector('.arr-right');
const textBox = document.querySelectorAll('.txt-bx');
const imgBox = document.querySelectorAll('.image-bx');
var i = 0;

console.log(imgBox);

const Add = function () {
   imgBox[i].classList.add('on');
   textBox[i].classList.add('on');
};

const Remove = function () {
   imgBox[i].classList.remove('on');
   textBox[i].classList.remove('on');
};

const nextSlide = function () {
   Remove();
   i++;
   if (i > 2) {
      i = 0;
      Add();
   }
   Add();
};

const prevSlide = function () {
   Remove();
   i--;
   if (i < 0) {
      i = 2;
      Add();
   }
   Add();
};

slideRight.onclick = function () {
   nextSlide();
};
slideLeft.onclick = function () {
   prevSlide();
};

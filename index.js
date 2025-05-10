//=========Adding some functioning to the next and previous button on gallery section
let prevButton = document.querySelector('.js-prev-button');
let nextButton = document.querySelector('.js-next-button');
let container = document.querySelector('.gallery-section');

container.addEventListener('wheel', (listener) => {
    listener.preventDefault();
    container.scrollLeft += listener.deltaY;
    container.style = 'scroll-behavior: auto;'
});

prevButton.addEventListener('click', () => {
    container.style = 'scroll-behavior: smooth;'
    container.scrollLeft -= 350;
});

nextButton.addEventListener('click', () => {
    container.style = 'scroll-behavior: smooth;'
    container.scrollLeft += 350;
});

//=========Opening  the side Bar section
let menuButton = document.querySelector('.js-fa-bars');
let bodyTag = document.querySelector('body');
menuButton.addEventListener('click', () => {
    bodyTag.classList.add('open-side');
});

//=========closing the side Bar
let closeIcon = document.querySelector('.js-fa-xmark');
closeIcon.addEventListener('click', () => {
    bodyTag.classList.remove('open-side');
});
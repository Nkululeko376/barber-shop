
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
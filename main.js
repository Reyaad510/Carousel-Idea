
const track = document.querySelector('.carousel-track');
// const slides = Array.from(track.children); same as below
const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotsNavs = document.querySelectorAll('.carousel-nav');
// const dots = Array.from(dotsNav.children) same below
const dots = document.querySelectorAll('.carousel-indicator');


// getBoundingClientRect() gives dimensions of whatever you are looking at. The '.width' we are grabbing width of whatever object we are looking at

const slideWidth = slides[0].getBoundingClientRect().width;




// Arrange slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);



const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// When i click left, move slides to the left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
})

// When i click right, moves slides to the right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
})



// When i click the new indicators, move to that slide





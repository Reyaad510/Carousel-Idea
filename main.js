
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



// When i click left, move slides to the left



// When i click right, moves slides to the right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    
    // move to the next slide
    track.style.transform = `translateX(-${amountToMove})`;
})



// When I click nav indicator, move to that slide
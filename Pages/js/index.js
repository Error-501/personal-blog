function pickColor() {

    // Array containing colors
    var colors = [
        '#ffca28', '#c2185b', '#37474f',
        '#f50057', '#f4511e', '#3f51b5',
        '#ef5350', '#e040fb', '#b388ff'
    ];

    // selecting random color
    var random_color = colors[Math.floor(
        Math.random() * colors.length)];

    const gal = document.querySelector('.gal--grid');
    const lis = Array.from(gal.children);

    for (var i = 0; i < lis.length; i++) {
        random_color = colors[Math.floor(
            Math.random() * colors.length)];
        lis[i].style.backgroundColor = random_color;
    }
}


function carouselControl() {
    const carousel = document.querySelector('.carousel');
    const slides = Array.from(carousel.children);
    const dotsNav = document.querySelector('.carousel__nav');
    const dots = Array.from(dotsNav.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';  
    }
    slides.forEach(setSlidePosition);
    
    // Move slide
    const moveToSlide = (currentSlide, targetSlide, targetDot) => {
      const currentDot = dotsNav.querySelector('.current--slide');
      carousel.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
      currentSlide.classList.remove('current--slide');
      targetSlide.classList.add('current--slide');
      
      currentDot.classList.remove('current--slide');
      targetDot.classList.add('current--slide');
    }
    
    const autoSlide = () =>  {
        const currentSlide = carousel.querySelector('.current--slide');
        let slideIndex =  slides.findIndex(slide => slide === currentSlide);
        slideIndex = (slideIndex+1)%slides.length;
        const targetSlide = slides[slideIndex];
        const targetDot = dots[slideIndex];
        // console.log(slideIndex)
        moveToSlide(currentSlide, targetSlide, targetDot, slideIndex);
        setTimeout(autoSlide,3000);
    }

    setTimeout(autoSlide,3000);
    
    // when I click the nav indicators, move to that slide
    dotsNav.addEventListener('click', e => {
      
      const targetDot = e.target.closest('button');
      if (!targetDot) return;
      
      const currentSlide = carousel.querySelector('.current--slide');
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      const targetSlide = slides[targetIndex];
      
      moveToSlide(currentSlide, targetSlide, targetDot, targetIndex);
    })
}


function fileName() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    if (filename == "" || filename == "Undefined") {
        filename = "index.html";
    }
    return filename;
}


function runFunction() {
    switch (page) {
        case "index.html":
            carouselControl();
            break;
        case "gallery.html":
            pickColor();
            break;
        default:
            break;
    }
}
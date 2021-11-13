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

/* 
=============
Index Page
=============
*/


function indexControl() {
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
    });

    function loginPop(){
        const container=document.querySelector(".login--popup_cont");
        container.style.display="block";
    }

    indexControl.loginPop = loginPop;
    
    $(document).mouseup(function(e){
        var container = $("#loginCont");
     
        // If the target of the click isn't the container
        if(!container.is(e.target) && container.has(e.target).length === 0){
            container.hide();
        }
    });
}



/* 
=============
About Page
=============
*/

function aboutControl() {
    let abtCount = $("#aboutCount");

    function setCookie(cname,cvalue) {
        const d = new Date();
        d.setTime(d.getTime() + 30*1000);
        let expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" +"SameSite=Lax;" + expires + ";";
    }
      
    function getCookie() {
    let deCookie = decodeURIComponent(document.cookie);
    if(deCookie!=""){
        return parseInt(deCookie.split("=")[1]);
    } else {
        return 1;
    }
    }
      
    function checkCookie() {
        let count = getCookie("count");
        let strCount = "" + count;
        console.log(count);
        count+=1;
        if (count >= 10) {
            count = 1;
        }
        abtCount.text(strCount);
        console.log(strCount);
        setCookie("count", parseInt(count));
    }

    aboutControl.checkCookie = checkCookie;
    
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
            indexControl();
            break;
        case "gallery.html":
            pickColor();
            break;
        case "about.html":
            aboutControl();
            aboutControl.checkCookie();
            break;
        default:
            break;
    }
}
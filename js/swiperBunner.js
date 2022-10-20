const images = document.querySelectorAll(".swiper-slide")
const sliderLine = document.querySelector(".swiper-wrapper")
const btn3= document.getElementById("banner-pagination-item3");
const btn2 = document.getElementById("banner-pagination-item2");
const btn1 = document.getElementById("banner-pagination-item1");

let currentSlide = 0;
let width;

function init() {
    console.log('resize');

    width = document.querySelector(".swiper-container").offsetWidth
    sliderLine.style.width = width * images.length + 'px'

    images.forEach(item => {
        item.style.width = width + "px"
        // item.style.height = "auto"

    })
    moveSlider();                                     //щоб під час маштабування розмір картинки був правильний
}

window.addEventListener("resize", init)
init();

    btn1.addEventListener("click", function () {
        currentSlide = 0;
        addClassActiveToPagination();
        if (currentSlide == images.length) {
            currentSlide = 0;
        }
        moveSlider();
    })

    btn2.addEventListener("click", function () {
        currentSlide=1
        addClassActiveToPagination();
        if (currentSlide == images.length) {
            currentSlide = 0
        }
        moveSlider();
    });

    btn3.addEventListener("click", function () {
        currentSlide = 2;
        addClassActiveToPagination();
        if (currentSlide < 0) {
            currentSlide = images.length - 1
        };
        moveSlider();
    });

function moveSlider() {
    sliderLine.style.transform = "translate(-" + currentSlide * width + "px)"
}


// Simple vanilla JS example for horizontal swipe:

let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
    if (touchendX < touchstartX) {
        currentSlide++;

        if (currentSlide == images.length) {
            currentSlide = 0
        }
        moveSlider();
        addClassActiveToPagination();
    };
    if (touchendX > touchstartX){
        currentSlide--

        if (currentSlide < 0) {
            currentSlide = images.length - 1
        };
        moveSlider();
        addClassActiveToPagination();
    };
};

sliderLine.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX

})

sliderLine.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
})


function addClassActiveToPagination(){
    switch (currentSlide){
        case 0:
            btn1.classList.add('active')
            if (btn2.classList.contains('active') || btn3.classList.contains('active')) {
                btn3.classList.remove('active')
                btn2.classList.remove('active')
            };
            break;
        case 1:
            btn2.classList.add('active')
            if (btn1.classList.contains('active') || btn3.classList.contains('active')) {
                btn3.classList.remove('active')
                btn1.classList.remove('active')
            };
            break;
        case 2:
            btn3.classList.add('active')
            if (btn1.classList.contains('active') || btn2.classList.contains('active')) {
                btn1.classList.remove('active')
                btn2.classList.remove('active')
            };
            break
    }
}


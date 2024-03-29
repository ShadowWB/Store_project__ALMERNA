const header = document.getElementById('mobile-header__header');
const burger = document.getElementById('nav__burger');
const mobile_menu = document.getElementById('mobile_menu');
const brgSpan = document.getElementById('brg__span');
const mobileHeaderNav = document.getElementById('mobile-header__nav');

const searchingBlock = document.getElementById('searching-line');
const searchingImg = document.getElementById('searching-img');
const closeSearchBtn = document.getElementById('close-search-btn');

const searchingBlockMobile = document.getElementById('searching-line-mobile');
const searchingImgMobile = document.getElementById('searching-img-mobile');
const closeSearchBtnMobile = document.getElementById('close-search-btn-mobile');

window.addEventListener("scroll", function (e) {
    header.style.display = 'none';
    mobile_menu.style.marginTop = 66 + 'px';
    if (window.scrollY == 0) {
        mobileHeaderNav.style.top = 26+"px";
        mobileHeaderNav.style.position = "unset";
        header.style.display = 'block';
    }
    if (window.scrollY > 0) {
        mobile_menu.style.marginTop = 39 + 'px';
        mobile_menu.style.height = 100 + 'vh';
        mobileHeaderNav.style.position = "fixed";
        mobileHeaderNav.style.top = 0;
    }
});

burger.addEventListener("click", () => {
    mobile_menu.classList.toggle('active__menu');
    brgSpan.classList.toggle('active');
});
mobile_menu.addEventListener("click", () => {
    mobile_menu.classList.toggle('active__menu');
    brgSpan.classList.toggle('active');
});


searchingImg.addEventListener('click', () => {
    searchingBlock.classList.toggle('active');
    mobileHeaderNav.style.position = 'relative'
})
closeSearchBtn.addEventListener('click', () => {
    searchingBlock.classList.toggle('active');
})

searchingImgMobile.addEventListener('click', () => {
    searchingBlockMobile.style.width = 100 + '%';
    mobileHeaderNav.style.position = 'relative'
    searchingBlockMobile.classList.toggle('active');
})
closeSearchBtnMobile.addEventListener('click', () => {

    searchingBlockMobile.classList.toggle('active');
})

// searching data

const searchOpenedBtn = document.querySelectorAll(".searching-line .nav-img"),
    inputSearch = document.querySelectorAll("[name=search-data]");

function showSearchValue() {
    inputSearch.forEach(input => {
        alert(input.value)
        input.value = "";
    })
}

searchOpenedBtn.forEach(btn => {
    btn.addEventListener("click", showSearchValue)
})



$(document).ready(function () {
    $('.nav__burger').click(function (e) {
        $('body').toggleClass('lock');
    });
});

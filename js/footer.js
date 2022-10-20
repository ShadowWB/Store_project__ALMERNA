const footerInfoBlockLinksWrapper1 = document.getElementById('footer-info-block__links-wrapper1');
const footerInfoBlockLinksWrapper2 = document.getElementById('footer-info-block__links-wrapper2');
const footerInfoBlockLinksWrapper3 = document.getElementById('footer-info-block__links-wrapper3');

const footerInfoBlockItemTitle1 = document.getElementById('footer-info-block-item-title1')
const footerInfoBlockItemTitle2 = document.getElementById('footer-info-block-item-title2')
const footerInfoBlockItemTitle3 = document.getElementById('footer-info-block-item-title3')


footerInfoBlockItemTitle1.addEventListener('click',()=>{
    footerInfoBlockLinksWrapper1.classList.toggle('active')
})
footerInfoBlockItemTitle2.addEventListener('click',()=>{
    footerInfoBlockLinksWrapper2.classList.toggle('active')
})
footerInfoBlockItemTitle3.addEventListener('click',()=>{
    footerInfoBlockLinksWrapper3.classList.toggle('active')
})

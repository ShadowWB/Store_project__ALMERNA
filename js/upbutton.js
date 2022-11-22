const upButton = document.querySelector(".up__button");

upButton.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
    console.log('dssds')
})
window.onscroll = function (){
    if (document.documentElement.scrollTop > 20){
        upButton.style.display = "block";
    }else{
        upButton.style.display = "none";
    }
}
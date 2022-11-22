"use strict"

window.addEventListener("DOMContentLoaded",()=>{

    const cardsWrapper = document.querySelectorAll(".trending-card-box"),
        tabsParent = document.querySelector(".trending-buttons"),
        tabs = tabsParent.querySelectorAll(".trending-buttons-item");

    function hideActiveClass(){
        tabs.forEach((item)=>{
            item.firstChild.classList.remove("active")
        });
        cardsWrapper.forEach((item)=>{
            item.classList.remove("display-block")
            item.classList.add("display-none")
        })
    }

    function showActiveClass (i=0){
        tabs[i].firstChild.classList.add("active");
        cardsWrapper[i].classList.add("display-block")
        cardsWrapper[i].classList.remove("display-none")
    }

    hideActiveClass();
    showActiveClass();

    tabsParent.addEventListener("click",(event)=>{
        const target = event.target;
        if(target && target.classList.contains("trending-buttons-item")){
            tabs.forEach((item,i)=>{
                if (item == target){
                    hideActiveClass();
                    showActiveClass(i);
                }
            })
        }
    })
})
const upButton = document.querySelector(".up__button");

upButton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}


// add to favorites


const countFavoriteBtn = document.querySelectorAll(".liked-count"),
    addToFavouriteBtn = document.querySelectorAll(".card-mark-favorite"),
    quickViewAlertFavouriteBtn = document.querySelectorAll(".quickView__addFavoritesBtn"),
    addedBtnColor = "white";
    addedBtnShadow = "inset rgb(170 170 170 / 58%) 0px 9px 7px 1px";
let favoriteCount = 0;

function showCount() {
    countFavoriteBtn.forEach(item => {
        if (favoriteCount <= 0) {
            item.style.display= "none"
            item.innerHTML = ""
        } else {
            item.style.display= "block"
            item.innerHTML = favoriteCount;
            item.style.animation = "2s move infinite"
        }
    });
}

function changeStyles(buttons) {
    buttons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            if (btn.style.backgroundColor !== addedBtnColor) {
                favoriteCount++
                showCount()
                btn.style.boxShadow=addedBtnShadow
                btn.style.backgroundColor = addedBtnColor;
                btn.style.borderColor = "rgb(242 243 216)";
                btn.style.animation = "2s move infinite"
            } else {
                favoriteCount--
                showCount()
                btn.style.backgroundColor = "transparent"
                btn.style.animation = "none"
            }
        })
    })
}

changeStyles(addToFavouriteBtn);
changeStyles(quickViewAlertFavouriteBtn)


// showQuickViewAlert


const btnQuickView = document.querySelectorAll(".btn-quick-view"),
    quickViewAlert = document.querySelector(".quickView__alert-wrapper"),
    closeBtn = document.querySelector(".quickView__alert-close__btn"),
    parentSizes = document.querySelector(".quickView__band-sizes"),
    sizes = document.querySelectorAll(".quickView__band-size");

        btnQuickView.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                quickViewAlert.classList.add("showflex");
                quickViewAlert.style.top = window.scrollY + "px";
                quickViewAlert.style.scale = 1;

            });
        });
        if (closeBtn){
            closeBtn.addEventListener("click", () => {
                quickViewAlert.style.scale = 0;
                quickViewAlert.classList.remove("showflex");
            });
        }



//CHANGE STYLES OF SIZES

function removeSizeSelected() {
    sizes.forEach((item) => {
        item.classList.remove("selected__size");
    });
}
function addSizeSelected(i = 0) {
    if (!sizes[i].classList.contains("no__size")) sizes[i].classList.add("selected__size")
}
        sizes.forEach((item, i) => {
            item.addEventListener("click", (event) => {
                let target = event.target;
                if (item == target) {
                    removeSizeSelected();
                    addSizeSelected(i);
                }
            });
        });


//CHANGE STYLES OF COLORS

const colors = document.querySelectorAll(".colors span"),
    activeColorName = document.querySelector("[data-color]");

let activeColors =["Black","Grey"]

function removeActiveColorClass (){
    colors.forEach((color)=>{
        color.classList.remove("colors__active")
    });
}
function addActiveColorClass (i=0){
    colors[i].classList.add("colors__active")

}

        colors.forEach((color,i)=>{
            color.addEventListener("click",(event)=>{
                let target =event.target;
                if (color==target){
                    removeActiveColorClass ();
                    addActiveColorClass(i);
                    activeColorName.innerText =activeColors[i]
                }
            })
        })








// import _ from 'lodash';
import "./css/style.css"
document.addEventListener('DOMContentLoaded', () => {

//Navigation bar style change on scroll algorythm (optimized)
    var nav = document.getElementById("myNav"),
        scrollDetector = document.getElementById("scroll-start-detector");

    // console.log("nav: ", nav);
    // console.log("scrollDetector: ", scrollDetector);

    //function handles callback when observer fires "observing/notObserving" events
    function handleIntersection(entriesArray) {
        entriesArray.map((entry) => {
            if (entry.isIntersecting) {
                // nav.classList.remove('visible');
                nav.style.padding = "24px 0";

                nav.style.backgroundColor = "rgb(5, 55, 123, 0)";
            } else {
                // nav.classList.add('visible');
                nav.style.padding = "20px 0";

                // nav.style.backgroundColor = "rgb(5, 55, 123, 0.4)";
                nav.style.backgroundColor = "rgb(4, 28, 40, 0.5)";
            }
        });
    }
    //creates new observer with our callback func passed as an argument
    const observer = new IntersectionObserver(handleIntersection);

    //starts observing specified element
    observer.observe(scrollDetector);

//See more butotn for products    
    let seeMore = document.querySelector(".products-heading__more"),
        moreProductNavs = document.querySelector(".more-product-navs");

    seeMore.addEventListener('click', () => {
        seeMore.classList.add('hide');
        moreProductNavs.classList.remove('hide');
    });

//Main Sandwich functionality
    let mainSandwich = document.querySelector(".main-sandwich"),
        mainMenu = document.querySelector(".main-menu"),
        sandwichLine = document.querySelector(".sandwich-line"),
        sandwichX = document.querySelector(".main-sandwich-x");

    mainSandwich.addEventListener('click', () => {
        mainMenu.classList.add('menu-active');
        mainSandwich.style.display = 'none';
        sandwichX.style.display = 'block';
    });

    sandwichX.addEventListener('click', () => {
        mainMenu.classList.remove('menu-active');
        mainSandwich.style.display = 'block';
        sandwichX.style.display = 'none';
    });

//Modal window's functionality
let modalButtons = document.querySelectorAll('.modal-button'),
productModal = document.querySelector('.product-modal'),
modalImage = productModal.querySelector('.product-modal img'),
modalHeader = productModal.querySelector('.modal-content__header'),
modalTxt = productModal.querySelector('.modal content__txt'),
modalWrapper = productModal.querySelector('.modal-wrapper'),
modalOverlay = document.querySelector('.modal-overlay'),
modalCloseBtn = document.querySelector('.modal-close');


function openModal(target){
    let productImage = target.nextElementSibling;
    productModal.classList.add('modal__checked');
    modalWrapper.classList.add('modal-active');
    modalOverlay.classList.add('overlay-active');
    modalImage.src = productImage.src;
    modalHeader.innerText = productImage.nextElementSibling.innerText;
}

let closeModal = ()=> {
    productModal.classList.remove('modal__checked');
    modalWrapper.classList.remove('modal-active');
    modalOverlay.classList.remove('overlay-active');
}

modalButtons.forEach((element)=>{
    console.log(element);
    element.addEventListener('click', (event)=>{
        let trgt = event.target;
        openModal(trgt)
    });
});
modalCloseBtn. addEventListener('click', (event)=>{closeModal()});




// Sorting algorythm for the gallery
    let gallerySortingNames = document.querySelectorAll(".gallery-sorting__name"),
        allItems = document.querySelectorAll(".product-card__size__sm");

        function showHideAll(command) {
        if (command === "show") {
            allItems.forEach( (item) => {
                item.style.display = "block";
                 setTimeout(function () {
                    item.classList.remove("gallery-hide")
                }, 10);
            });
            console.log("show all completed");

        }
        else if (command === "hide") {
            allItems.forEach(async (item) => {
                item.classList.add("gallery-hide")
            });
             setTimeout(function () {
                allItems.forEach((item) => { item.style.display = "none" });
            }, 500);
            console.log("hide all completed");
        }
    }

    function gallerySorting() {
        gallerySortingNames.forEach((element, i) => {
            element.addEventListener("click", async () => {
                if (element.dataset.name === "js-hamisi") {
                    showHideAll("hide");

                    await setTimeout(function () {
                        showHideAll("show");
                    }, 500);
                }
                else {
                    showHideAll("hide");

                    let sorted = document.querySelectorAll("." + element.dataset.name);

                    await setTimeout(function () {
                        sorted.forEach((item) => {
                            item.style.display = "block"
                            setTimeout(function () {
                                item.classList.remove("gallery-hide")
                            }, 10);
                        });
                    }, 500);

                }
            });

        });
    }

    gallerySorting();

});

//should stay at the end of the file
if (module.hot) {
    module.hot.accept();
}
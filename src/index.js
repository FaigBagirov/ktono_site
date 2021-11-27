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
let modalButtons = document.querySelectorAll('.modal__button'),
productModal = document.querySelector('.product-modal'),
modalImage = productModal.querySelector('img'),
modalHeader = productModal.querySelector('.modal-content__header'),
modalTxt = productModal.querySelector('p'),
modalWrapper = productModal.querySelector('.modal-wrapper'),
modalOverlay = document.querySelector('.modal-overlay'),
modalCloseBtn = document.querySelector('.modal-close'),
modalContent = productModal.querySelector('.modal-content'),
theHtml = document.querySelector('html');

function openModal(button, target){
    let showImage;
    if (target instanceof HTMLImageElement){
        showImage = target
    }
    else if(target.previousElementSibling instanceof HTMLImageElement){
        // console.log("it's a figcaption", target.tagName)
        showImage = target.previousElementSibling;
    }
    else{
        showImage = target.parentElement.parentElement.getElementsByTagName('img')[0];
    }
        productModal.style.display = "block";

    setTimeout(() => {
        productModal.classList.add('modal__checked');
        modalWrapper.classList.add('modal-active');
        // modalOverlay.classList.add('overlay-active');
        theHtml.classList.add('hide__scroll');

        //if there's some elements inside figcaptionthen it's a gallery
        if (showImage.nextElementSibling.firstElementChild){
            modalImage.classList.add("gallery__img");
        }

        modalImage.src = showImage.src;

        if (button.dataset.fig !== undefined){
            let content = document.querySelector('#' + button.dataset.fig),
            text = content.querySelector('p');

            // console.log('text', text);
            modalHeader.innerHTML = content.firstElementChild.innerHTML;
            modalTxt.innerHTML = text.innerHTML;
            modalContent.classList.add('show__content');
        }
    }, 100);
 
}

let closeModal = ()=> {
    productModal.classList.remove('modal__checked');
    modalWrapper.classList.remove('modal-active');
    // modalOverlay.classList.remove('overlay-active');
    theHtml.classList.remove('hide__scroll');
    modalContent.classList.remove('show__content');

    if(modalImage.classList.contains('gallery__img')){
        modalImage.classList.remove('gallery__img');
    }
    setTimeout(() => {
        productModal.style.display = "none";
    }, 500);
    
}

modalButtons.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        let trgt = event.target;
        openModal(element, trgt)
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
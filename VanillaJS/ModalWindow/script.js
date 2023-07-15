'use strict';

const buttons = document.getElementsByClassName("show-modal");
const hiddenEl = document.getElementsByClassName("hidden");
const overlayEl = document.querySelector(".overlay");
const closeModelEl = document.querySelector(".close-modal");

let showingContent = false;
const hideTheModal = () => {

        if(showingContent) {
            for(let j =0; j< hiddenEl.length; j++) {
                hiddenEl[j].style.display = "none";
                showingContent = false;
            }
        }
}
const setupButtonsListener = () => {

    for(let i = 0; i < buttons.length; i++) 
    {
        buttons[i].addEventListener("click", ()=> {
            for(let j =0; j< hiddenEl.length; j++) {
                hiddenEl[j].style.display = "block";
                showingContent = true;
            }
        });
    }


    overlayEl.addEventListener("click", ()=>{
        hideTheModal();
    });

    closeModelEl.addEventListener("click", ()=> {
        hideTheModal();
    });
}

setupButtonsListener();
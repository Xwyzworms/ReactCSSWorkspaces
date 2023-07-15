'use script';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const closeModalEl = document.querySelector(".close-modal");
const btnsShowModalEl = document.querySelectorAll(".show-modal");

const openModel = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}


const setupClickListener = () => {

    for(let i = 0 ; i < btnsShowModalEl.length; i++) {
        btnsShowModalEl[i].addEventListener("click", openModel);
    }

    document.addEventListener("keydown", (event) => {
        if(event.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    })

    overlay.addEventListener("click", (event) => {
        closeModal();
    })

    closeModalEl.addEventListener("click", (event) => {
        closeModal();
    })
}

setupClickListener();
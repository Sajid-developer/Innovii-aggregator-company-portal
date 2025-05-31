// console.log("I am working...")

const menu=document.querySelector(".navBar .nav-links");
const hamburger=document.querySelector(".navBar .hamburger-icon");
    hamburger.addEventListener("click", ()=>{
        menu.classList.toggle("showHide");
    });
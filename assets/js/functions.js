const body = document.querySelector("body")
const hamburger = document.getElementById("hamburger");
const mobileUl = document.getElementById("mobile_ul");
let isOpen = true

hamburger.onclick = function(){
    mobileUl.style.display = isOpen ? "flex" : "none";
    isOpen = !isOpen;
    if(!isOpen){
        body.style.overflow = "hidden";
        hamburger.src = "./public/images/close-svgrepo-com.svg";
    }else{
        body.style.overflow = "scroll";
        hamburger.src = "./public/images/Hamburger_icon.svg.png";
    }
}
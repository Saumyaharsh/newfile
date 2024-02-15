const elemToggleFunc=function(elem){
    elem.classList.toggle("active");
}
const navbar= document.querySelector("[data-navbar]");
const navbarToggleBtn =document.querySelector("[ data-navbar-toggle-btn]");
navbarToggleBtn.addEventListener("click",function(){
    elemToggleFunc(navbar);
});

const whistlistBtn = document.querySelectorAll("[data-whistlist-btn]");
for(let i=0;i<whistlistBtn.length;i++){
    whistlistBtn[i].addEventListener("click",function(){elemToggleFunc(this);});
}
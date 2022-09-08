const header = document.querySelector(".navbar");

window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 100 ){
        header.classList.add("fixed");
    }else{
        header.classList.remove("fixed");
    }
    
});

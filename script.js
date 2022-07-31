let header = document.querySelector(".header");
let cardImg = document.querySelector(".card-img");
let cardBtn = document.querySelector(".card-btn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 20){
        header.classList.add("fixed");
    }else{
        header.classList.remove("fixed");
    };
});
function changeLocation(){
    window.location.assign("https://bit.ly/3PUwkCo");
};
cardImg.addEventListener("click", changeLocation);
cardBtn.addEventListener("click", changeLocation);
const dark0 = document.querySelector("#dark0");
const dark1 = document.querySelector("#dark1");
const dark2 = document.querySelector("#dark2");
const dark3 = document.querySelector("#dark3");
const dark4 = document.querySelector("#dark4");
const dark5 = document.querySelector("#dark5");
const dark6 = document.querySelector("#dark6");

function change() {
    if (window.getComputedStyle(document.body).backgroundColor == "rgb(14, 14, 14)") {
        changeImg();
    } else {
        returnImg();
    }
    
    function changeImg() {
        dark0.src = "img/play-dark.svg";
        dark1.src = "img/arrow-dark.svg";
        dark2.src = "img/monitor-dark.svg";
        dark3.src = "img/settings-dark.svg";
        dark4.src = "img/pen-dark.svg";
        dark5.src = "img/tv-dark.svg";
        dark6.src = "img/burger-dark.svg";
    }
    
    function returnImg() {
        dark0.src = "img/play.svg";
        dark1.src = "img/arrow.svg";
        dark2.src = "img/monitor.svg";
        dark3.src = "img/settings.svg";
        dark4.src = "img/pen.svg";
        dark5.src = "img/tv.svg";
        dark6.src = "img/burger.svg";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    change();
    setInterval(change, 2000)
})

const burger = document.querySelector(".burger-btn");
const menu = document.querySelector(".burger-menu");
const body = document.body;

burger.addEventListener("click", burgerHandler);
burger.addEventListener("touch", burgerHandler);
window.addEventListener("resize", closeByWidth);
menu.addEventListener("click", burgerHandler)

function closeByWidth() {
    const width = window.innerWidth;
    if (width > 949) {
        menu.classList.remove("open");
        body.classList.remove("noscroll");
    }
}

function burgerHandler(e) {
    menu.classList.toggle("open");
    body.classList.toggle("noscroll");
}

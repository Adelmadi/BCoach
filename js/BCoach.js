var nav = document.querySelector("nav")
var list = document.querySelector(".fa-bars")
var close = document.querySelector(".fa-circle-xmark ")


list.onclick = function () {
    nav.style.transform = "translateX(0)";
}


close.onclick = function () {
    nav.style.transform = "translateX(-100%)";
}
var event_window_size = window.matchMedia('(min-width: 1024px)');

var mauseOn = document.getElementsByClassName("openAll");
var subMenu = document.getElementsByClassName("submenu_list");

mauseOn[0].addEventListener("mouseover",() => {
    subMenu[0].style.display = "block";
})
mauseOn[0].addEventListener("mouseout",() => {
    subMenu[0].style.display = "none";
})

mauseOn[1].addEventListener("mouseover",() => {
    subMenu[1].style.display = "block";
})
mauseOn[1].addEventListener("mouseout",() => {
    subMenu[1].style.display = "none";
})

mauseOn[2].addEventListener("mouseover",() => {
    subMenu[2].style.display = "block";
})
mauseOn[2].addEventListener("mouseout",() => {
    subMenu[2].style.display = "none";
})

mauseOn[3].addEventListener("mouseover",() => {
    subMenu[3].style.display = "block";
})
mauseOn[3].addEventListener("mouseout",() => {
    subMenu[3].style.display = "none";
})

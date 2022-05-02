const gnb = document.querySelectorAll(".gnb > li")

const cont1 = document.querySelectorAll(".openAll1")
const cont2 = document.querySelectorAll(".openAll2")
const cont3 = document.querySelectorAll(".openAll3")
const cont4 = document.querySelectorAll(".openAll4")

const a1 = document.querySelector(".submenu_list1")
const a2 = document.querySelector(".submenu_list2")
const a3 = document.querySelector(".submenu_list3")
const a4 = document.querySelector(".submenu_list4")

cont1[0].addEventListener("mouseover",() => {
    a1.style.display = "block";
})
cont1[0].addEventListener("mouseout",() => {
    a1.style.display = "none";
})

cont2[0].addEventListener("mouseover",() => {
    a2.style.display = "block";
})
cont2[0].addEventListener("mouseout",() => {
    a2.style.display = "none";
})

cont3[0].addEventListener("mouseover",() => {
    a3.style.display = "block";
})
cont3[0].addEventListener("mouseout",() => {
    a3.style.display = "none";
})

cont4[0].addEventListener("mouseover",() => {
    a4.style.display = "block";
})
cont4[0].addEventListener("mouseout",() => {
    a4.style.display = "none";
})

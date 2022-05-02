let a = document.querySelectorAll(".quick_list > li");
let b = document.querySelector(".test1");
function remove(){
    for(let i=0;i<a.length;i++){
        console.log(a[i])
        a[i].style.display = "none";
    }
    b.style.backgroundImage = "url(./images/ico_totop_close.png)";
}

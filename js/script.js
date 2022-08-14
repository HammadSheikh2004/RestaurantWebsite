let nav = document.querySelector(".header");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}


let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

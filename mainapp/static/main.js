// Hiding header while scrolling down
var prevScrollpos = window.scrollY;
var header = document.getElementById("main-navbar");
if (header) {
    window.onscroll = function () {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            header.style.opacity = "1";
        } else {
            header.style.opacity = "0";
        }
        prevScrollpos = currentScrollPos;
    }
}
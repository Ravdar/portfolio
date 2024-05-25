// Hiding header while scrolling down
var prevScrollpos = window.scrollY;
var header = document.getElementById("main-header");
if (header) {
    window.onscroll = function () {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            header.style.top= "0";
        } else {
            header.style.top = "-350px";
        }
        prevScrollpos = currentScrollPos;
    }
}
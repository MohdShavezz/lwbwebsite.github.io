// pay-aside
let pay = document.getElementById('pay');
let asd = document.getElementById('asd');
pay.addEventListener('click', function () {
    asd.classList.toggle('paycls');
    // pay.innerHTML="CLOSE";
})

// pre-loader
var v = document.getElementById("pre");
window.addEventListener("load", function () {
    v.style.display = "none";
})

// search blur input
function Watermark(input, event) {
    if (event.type == "focus") {
        input.setAttribute("rel", input.getAttribute("placeholder"));
        input.removeAttribute("placeholder");
    }
    if (event.type == "blur") {
        input.setAttribute("placeholder", input.getAttribute("rel"));
        input.removeAttribute("rel");
    }
}
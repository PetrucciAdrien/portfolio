$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1100, function(){
                window.location.hash = hash;
            });
        }
    });
});

let mobile = Boolean("false");
if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    mobile = "true";
}

const scrollToTopButton = document.getElementById('js-top');
const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 150 && mobile !== "true") {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }
};
window.addEventListener("scroll", scrollFunc);
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c);
    }
};
scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
};

AOS.init();

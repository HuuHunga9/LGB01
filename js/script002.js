// Scroll to anchors
(function() {

    const smoothScroll = function(targetEl, duration) {
        const headerElHeight = document.querySelector('.menu, .regist,.siteHeaderLogo,.siteHeaderMain').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function() {
        const links = document.querySelectorAll('.siteHeader__item, .regist a, .siteHeaderLogo a ,.siteHeaderMain a');
        links.forEach(each => {
            each.addEventListener('click', function() {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

// add Img Lazy Demo
addImgDefault('img.lazy', 'src');
addImgDefault('source.lazy', 'srcset');

window.addEventListener("scroll", function() {
    // Add Onscroll .menu a
    // Add Lazy Screen LDP
    myLoad('section', 'loaded');
    myLoad('.slide_run', 'slide');
    myLazy('img.lazy', 'src');
    myLazy('source.lazy', 'srcset');
    myLazy('.lazy-bg', 'img-bg');
});
autoLazy('section', 'loaded');
autoLazy('.slide_run', 'slide');
autoLazy('img.lazy', 'src');
autoLazy('source.lazy', 'srcset');
autoLazy('.lazy-bg', 'img-bg');

let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("menufix")
const remove_class_on_scroll = () => header.classList.remove("menufix")

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() } else { remove_class_on_scroll() }

})
var temp4_slide = tns({
    container: ".temp4_slide",
    items: 1,
    navContainer: "#temp4_tabs",
    navAsThumbnails: true,
    autoplay: false,
    autoplayTimeout: 1000,
    gutter: 10,
    controls: false,
});
var temp4_tabs = tns({
    container: '.temp4_tabs',
    items: 2,
    mouseDrag: true,
    autoplay: false,
    autoplayTimeout: 1000,
    nav: false,
    gutter: 20,
    loop: false,
    navPosition: 'bottom',
    controls: true,
    controlsPosition: 'bottom',
    responsive: {
        0: {
            items: 2,
        },
        360: {
            items: 2,
        },
        414: {
            items: 3,
            gutter: 10,
        },
        768: {
            items: 5,
        }
    },
});

var temp6_box = tns({
    container: '.temp6_box',
    items: 1,
    navContainer: '#temp6_tabs',
    navAsThumbnails: true,
    autoplay: false,
    autoplayTimeout: 1000,
    gutter: 0,
    controls: false,
});

var sliders = [],
    containers = document.querySelectorAll('.temp6_slide');

for (var i = 0, l = containers.length; i < l; i++) {
    sliders.push(tns({
        container: containers[i],
        axis: 'horizontal',
        items: 1,
        gutter: 0,
        slideBy: "page",
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        navPosition: 'bottom',
        controlsPosition: 'bottom',
        responsive: {
            0: {
                items: 1,
                mouseDrag: false,
                touch: true,
            },
            768: {
                items: 1,
            }
        },
    }));
}

// var temp4_slider = tns({
//     container: '.temp4_slider',
//     items: 2,
//     navAsThumbnails: true,
//     mouseDrag: true,
//     autoplay: false,
//     autoplayTimeout: 1000,
//     nav: true,
//     gutter: 20,
//     loop: false,
//     navPosition: 'bottom',
//     controls: true,
//     controlsPosition: 'bottom',
//     responsive: {
//         0: {
//             items: 1,
//         },
//         414: {
//             items: 1,
//         },
//         768: {
//             items: 2,
//         }
//     },
// });

// var temp8_slide = tns({
//     container: '.temp8_slide',
//     items: 1,
//     navContainer: '#temp8_tabs',
//     navAsThumbnails: true,
//     autoplay: false,
//     autoplayTimeout: 1000,
//     gutter: 10,
//     controls: false,
//     responsive: {
//     }
// });

// Add Class : 1. Name Button / 2. Name Object / 3. Name Class Add
addClass('.siteHeaderNav', '.siteHeaderMain', 'active');
addClass('.siteHeaderNav', '.siteHeader-bg', 'active');

// Remove Class : 1. Name Button / 2. Name Object / 3. Name Class Add
removeClass('.siteHeader-bg', '.siteHeaderMain', 'active');
removeClass('.siteHeader-bg', '.siteHeader-bg', 'active');
removeClass('.siteHeader a', '.siteHeaderMain', 'active');
removeClass('.siteHeader a', '.siteHeader-bg', 'active');

const btn_reg = document.getElementsByClassName('reg');
const modal_map = document.getElementById('modal-map');
const btn_call = document.getElementsByClassName('call');
const modal_seo = document.getElementById('modal-Seo');
const btn_regist = document.getElementsByClassName('regsit_btn');

for (const item of btn_regist) {
    item.addEventListener("click", () => {
        modal_seo.style.display = 'none';
    });
}
for (const item of btn_reg) {
    item.addEventListener("click", () => {
        modal_map.style.display = 'none';
    });
}
for (const item of btn_call) {
    item.addEventListener("click", () => {
        modal_map.style.display = 'none';
    });
}

// var numberFormat = function(number, width) {
//     return new Array(width + 1 - (number + '').length).join('0') + number;
// }
// function animateValue(id, start, end) {
//     var current = start;
//     var increment = end > start? 1 : -1;
//     var obj = document.getElementById(id);
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = numberFormat(current, 3);
//         if (current == end) {
//         clearInterval(timer);
//         }
//     }, 10000);
// }

// animateValue("value", 50, 01);
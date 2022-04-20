document.addEventListener("DOMContentLoaded", (function() {
    var e = document.getElementsByClassName("accordions-title");
    for (t = 0; t < e.length; t++)
        e[t].addEventListener("click", (function() {
            this.classList.toggle("active");
            var e = this.nextElementSibling;
            e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
        }));
    var t;
    e = document.getElementsByClassName("accordions_lv-title");
    for (t = 0; t < e.length; t++)
        e[t].addEventListener("click", (function() {
            this.classList.toggle("active");
            var e = this.nextElementSibling;
            "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
        }));
    let l = document.querySelectorAll("ul.tabs li");
    document.querySelectorAll("ul.tabs li.tab-link");
    for (let e of l) e.addEventListener("click", t => {
        let l = t.target.getAttribute("data-tab"),
            s = t.target.parentElement.children;
        for (let e of s) e.classList.remove("current");
        let c = t.target.parentElement.parentElement.children;
        for (let e of c) e.classList.remove("current");
        let n = document.getElementById(l);
        e.classList.add("current"), n.classList.add("current")
    });
    const s = document.querySelectorAll(".tabs .tab");
    for (let e of s) e.addEventListener("click", t => {
        let l = t.target.parentElement.children;
        for (let e of l) e.classList.remove("active");
        e.classList.add("active")
    });
    const c = document.querySelectorAll(".tabs .tab img");
    for (let e of c) e.addEventListener("click", t => {
        let l = t.target.parentElement.parentElement.children;
        for (let e of l) e.classList.remove("active");
        e.classList.add("active")
    });
    let n = document.getElementsByClassName("modal-btn"),
        o = document.getElementsByClassName("modal"),
        a = document.getElementsByClassName("modal-close"),
        i = document.getElementsByClassName("modal-closePic"),
        r = document.getElementsByClassName("modal-bg");
    for (let e = 0; e < n.length; e++)
        for (let t = 0; t < o.length; t++) {
            let l = n[e].getAttribute("data-modal"),
                s = o[t].getAttribute("id"),
                c = function() {
                    if (l == s) return !0
                };
            n[e].addEventListener("click", () => {
                c() && (o[t].style.display = "block")
            });
            let d = function(e) {
                for (let l = 0; l < e.length; l++)
                    e[l].addEventListener("click", () => {
                        c() && (o[t].style.display = "none")
                    })
            };
            d(a), d(r), d(i)
        }
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeEnd",
        '<div class="modal modal-clipBox" id="modal-clip">\n    <div class="modal-closePic">&times;</div>\n    <div class="modal-bg"></div>\n    <div class="modal-box modal-box-video animate-zoom">\n        <div class="modal-video">\n            <iframe id="youtube" src="" frameborder="0" allowfullscreen></iframe>\n        </div>\n    </div>\n</div>');
    let d = document.getElementsByClassName("modal-clip");
    for (let e of d) {
        let t = e.getAttribute("data-video");
        t = `//www.youtube-nocookie.com/embed/${t}?rel=0&controls=1&autoplay=1&nocookie=true`;
        let l = document.getElementsByClassName("modal-clipBox"),
            s = document.getElementById("youtube");
        e.addEventListener("click", () => { s.setAttribute("src", t), setTimeout(() => { l[0].style.display = "block" }, 200) });
        for (let e of i)
            for (let t of l) e.addEventListener("click", () => { t.style.display = "none" });
        for (let e of r)
            for (let t of l) e.addEventListener("click", () => { t.style.display = "none" })
    }
}));
var Accordion = function(e) {
    var t = "string" == typeof e.element ? document.getElementById(e.element) : e.element,
        l = e.openTab,
        s = e.oneOpen || !1,
        c = "accordion-title",
        n = "accordion-content";

    function o(e) {
        var l, n; - 1 !== e.target.className.indexOf(c) && (s ? (a(), [].forEach.call(t.querySelectorAll("." + c), (function(e) { e.classList.remove("active") })), e.target.classList.add("active")) : e.target.classList.toggle("active"), l = e.target.nextElementSibling, n = l.scrollHeight, "0px" === l.style.height || "" === l.style.height ? l.style.height = n + "px" : l.style.height = 0)
    }

    function a() {
        [].forEach.call(t.querySelectorAll("." + n), (function(e) { e.style.height = 0 }))
    }

    function i(e) { return t.querySelectorAll("." + n)[e - 1] }

    function r(e) {
        var t = i(e);
        t && (s && a(), t.style.height = t.scrollHeight + "px")
    }
    return [].forEach.call(t.querySelectorAll("button"), (function(e) { e.classList.add(c), e.nextElementSibling.classList.add(n) })), t.addEventListener("click", o), a(), l && r(l), {
        open: r,
        close: function(e) {
            var t = i(e);
            t && (t.style.height = 0)
        },
        destroy: function() { t.removeEventListener("click", o) }
    }
};

function onScroll() {
    const e = document.querySelectorAll(".menu a");
    let t = document.documentElement.scrollTop,
        l = document.querySelectorAll(".temp"),
        s = 0;
    l.forEach((function(l) {
        let c = l.offsetTop - 70,
            n = document.querySelectorAll(".menu a.active");
        c <= t && (n[0].classList.remove("active"), e[s].classList.add("active")), s < e.length - 1 && s++
    }))
}

function myLoad(e, t) { const l = document.querySelectorAll(e); let s = document.documentElement.scrollTop; for (let e = 0; e < l.length; e++) { l[e].offsetTop < s + 600 && l[e].classList.add(t) } }

function addClass(e, t, l) {
    let s = document.querySelectorAll(e),
        c = document.querySelectorAll(t);
    for (let e = 0; e < s.length; e++) s[e].addEventListener("click", () => { for (let e = 0; e < c.length; e++) c[e].classList.add(l) })
}

function removeClass(e, t, l) {
    let s = document.querySelectorAll(e),
        c = document.querySelectorAll(t);
    for (let e = 0; e < s.length; e++) s[e].addEventListener("click", () => { for (let e = 0; e < c.length; e++) c[e].classList.remove(l) })
}

function addImgDefault(e, t) {
    const l = document.querySelectorAll(e);
    let s = "data:image/gif;base64,R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
    for (let e = 0; e < l.length; e++) switch (t) {
        case "src":
            l[e].src = s;
            break;
        case "srcset":
            l[e].srcset = s;
            break;
        default:
    }
}

function myLazy(e, t) {
    const l = document.querySelectorAll(e);
    let s = window.innerHeight;
    for (let e = 0; e < l.length; e++) {
        let c = l[e].getBoundingClientRect().top,
            n = l[e].getBoundingClientRect().bottom;
        if (c <= s && n >= 0) switch (t) {
            case "src":
                l[e].src = l[e].dataset.src, l[e].classList.remove("lazy");
                break;
            case "srcset":
                l[e].srcset = l[e].dataset.srcset, l[e].classList.remove("lazy");
                break;
            case "img-bg":
                l[e].classList.remove("lazy-bg"), l[e].classList.add("img-bg");
                break;
            default:
        }
    }
}

function autoLazy(e, t) {
    const l = document.querySelectorAll(e);
    for (let e = 0; e < l.length; e++) setTimeout(() => {
        switch (t) {
            case "src":
                l[e].src = l[e].dataset.src, l[e].classList.remove("lazy");
                break;
            case "srcset":
                l[e].srcset = l[e].dataset.srcset, l[e].classList.remove("lazy");
                break;
            case "img-bg":
                l[e].classList.remove("lazy-bg"), l[e].classList.add("img-bg");
                break;
            default:
        }
    }, 5e3)
}
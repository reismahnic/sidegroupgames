(function (w, d) {
    w.addEventListener('LazyLoad::Initialized', function (e) {
        w.lazyLoadInstance = e.detail.instance;
    }, false);
    var b = d.getElementsByTagName('body')[0];
    var s = d.createElement("script"); s.async = true;
    var v = !("IntersectionObserver" in w) ? "8.16.0" : "10.19.0";
    s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
    w.lazyLoadOptions = {};
    b.appendChild(s);
}(window, document));
function C(a) {
    var b = a.target;
    "IMG" === b.nodeName && (b.src = "http://i.imgur.com/AM3Ae.png");
    B();
    a.preventDefault();
    a.stopPropagation();
    return !1
}

function A() {
    d.body.insertBefore(s, d.body.firstChild);
    d.addEventListener("click", C, !1)
}

function B() {
    d.body.removeChild(s);
    d.removeEventListener("click", C, !1)
}
var d = document,
    s = d.createElement("style");
s.textContent = "body * { cursor: crosshair; }";
A();;

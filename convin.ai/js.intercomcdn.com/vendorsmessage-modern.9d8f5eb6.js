/*! For license information please see vendors~message-modern.9d8f5eb6.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [54], {
        1018: function(e, t, n) {
            (function(t) {
                var n;
                n = function() {
                    "use strict";
                    for (var e = "undefined" != typeof window && "undefined" != typeof document, n = ["Edge", "Trident", "Firefox"], o = 0, r = 0; r < n.length; r += 1)
                        if (e && navigator.userAgent.indexOf(n[r]) >= 0) {
                            o = 1;
                            break
                        }
                    var i = e && window.Promise ? function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, window.Promise.resolve().then((function() {
                                t = !1, e()
                            })))
                        }
                    } : function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, setTimeout((function() {
                                t = !1, e()
                            }), o))
                        }
                    };

                    function a(e) {
                        return e && "[object Function]" === {}.toString.call(e)
                    }

                    function f(e, t) {
                        if (1 !== e.nodeType) return [];
                        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                        return t ? n[t] : n
                    }

                    function s(e) {
                        return "HTML" === e.nodeName ? e : e.parentNode || e.host
                    }

                    function u(e) {
                        if (!e) return document.body;
                        switch (e.nodeName) {
                            case "HTML":
                            case "BODY":
                                return e.ownerDocument.body;
                            case "#document":
                                return e.body
                        }
                        var t = f(e),
                            n = t.overflow,
                            o = t.overflowX,
                            r = t.overflowY;
                        return /(auto|scroll|overlay)/.test(n + r + o) ? e : u(s(e))
                    }
                    var l = e && !(!window.MSInputMethodContext || !document.documentMode),
                        d = e && /MSIE 10/.test(navigator.userAgent);

                    function p(e) {
                        return 11 === e ? l : 10 === e ? d : l || d
                    }

                    function c(e) {
                        if (!e) return document.documentElement;
                        for (var t = p(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                        var o = n && n.nodeName;
                        return o && "BODY" !== o && "HTML" !== o ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === f(n, "position") ? c(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                    }

                    function h(e) {
                        return null !== e.parentNode ? h(e.parentNode) : e
                    }

                    function m(e, t) {
                        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                            o = n ? e : t,
                            r = n ? t : e,
                            i = document.createRange();
                        i.setStart(o, 0), i.setEnd(r, 0);
                        var a, f, s = i.commonAncestorContainer;
                        if (e !== s && t !== s || o.contains(r)) return "BODY" === (f = (a = s).nodeName) || "HTML" !== f && c(a.firstElementChild) !== a ? c(s) : s;
                        var u = h(e);
                        return u.host ? m(u.host, t) : m(e, h(t).host)
                    }

                    function g(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                            n = "top" === t ? "scrollTop" : "scrollLeft",
                            o = e.nodeName;
                        if ("BODY" === o || "HTML" === o) {
                            var r = e.ownerDocument.documentElement,
                                i = e.ownerDocument.scrollingElement || r;
                            return i[n]
                        }
                        return e[n]
                    }

                    function v(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = g(t, "top"),
                            r = g(t, "left"),
                            i = n ? -1 : 1;
                        return e.top += o * i, e.bottom += o * i, e.left += r * i, e.right += r * i, e
                    }

                    function w(e, t) {
                        var n = "x" === t ? "Left" : "Top",
                            o = "Left" === n ? "Right" : "Bottom";
                        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + o + "Width"], 10)
                    }

                    function b(e, t, n, o) {
                        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? parseInt(n["offset" + e]) + parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
                    }

                    function y(e) {
                        var t = e.body,
                            n = e.documentElement,
                            o = p(10) && getComputedStyle(n);
                        return {
                            height: b("Height", t, n, o),
                            width: b("Width", t, n, o)
                        }
                    }
                    var E = function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        },
                        O = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var o = t[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                                }
                            }
                            return function(t, n, o) {
                                return n && e(t.prototype, n), o && e(t, o), t
                            }
                        }(),
                        x = function(e, t, n) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n, e
                        },
                        L = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                            }
                            return e
                        };

                    function T(e) {
                        return L({}, e, {
                            right: e.left + e.width,
                            bottom: e.top + e.height
                        })
                    }

                    function M(e) {
                        var t = {};
                        try {
                            if (p(10)) {
                                t = e.getBoundingClientRect();
                                var n = g(e, "top"),
                                    o = g(e, "left");
                                t.top += n, t.left += o, t.bottom += n, t.right += o
                            } else t = e.getBoundingClientRect()
                        } catch (e) {}
                        var r = {
                                left: t.left,
                                top: t.top,
                                width: t.right - t.left,
                                height: t.bottom - t.top
                            },
                            i = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
                            a = i.width || e.clientWidth || r.right - r.left,
                            s = i.height || e.clientHeight || r.bottom - r.top,
                            u = e.offsetWidth - a,
                            l = e.offsetHeight - s;
                        if (u || l) {
                            var d = f(e);
                            u -= w(d, "x"), l -= w(d, "y"), r.width -= u, r.height -= l
                        }
                        return T(r)
                    }

                    function N(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = p(10),
                            r = "HTML" === t.nodeName,
                            i = M(e),
                            a = M(t),
                            s = u(e),
                            l = f(t),
                            d = parseFloat(l.borderTopWidth, 10),
                            c = parseFloat(l.borderLeftWidth, 10);
                        n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                        var h = T({
                            top: i.top - a.top - d,
                            left: i.left - a.left - c,
                            width: i.width,
                            height: i.height
                        });
                        if (h.marginTop = 0, h.marginLeft = 0, !o && r) {
                            var m = parseFloat(l.marginTop, 10),
                                g = parseFloat(l.marginLeft, 10);
                            h.top -= d - m, h.bottom -= d - m, h.left -= c - g, h.right -= c - g, h.marginTop = m, h.marginLeft = g
                        }
                        return (o && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (h = v(h, t)), h
                    }

                    function D(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.ownerDocument.documentElement,
                            o = N(e, n),
                            r = Math.max(n.clientWidth, window.innerWidth || 0),
                            i = Math.max(n.clientHeight, window.innerHeight || 0),
                            a = t ? 0 : g(n),
                            f = t ? 0 : g(n, "left"),
                            s = {
                                top: a - o.top + o.marginTop,
                                left: f - o.left + o.marginLeft,
                                width: r,
                                height: i
                            };
                        return T(s)
                    }

                    function F(e) {
                        var t = e.nodeName;
                        return "BODY" !== t && "HTML" !== t && ("fixed" === f(e, "position") || F(s(e)))
                    }

                    function S(e) {
                        if (!e || !e.parentElement || p()) return document.documentElement;
                        for (var t = e.parentElement; t && "none" === f(t, "transform");) t = t.parentElement;
                        return t || document.documentElement
                    }

                    function B(e, t, n, o) {
                        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            i = {
                                top: 0,
                                left: 0
                            },
                            a = r ? S(e) : m(e, t);
                        if ("viewport" === o) i = D(a, r);
                        else {
                            var f = void 0;
                            "scrollParent" === o ? "BODY" === (f = u(s(t))).nodeName && (f = e.ownerDocument.documentElement) : f = "window" === o ? e.ownerDocument.documentElement : o;
                            var l = N(f, a, r);
                            if ("HTML" !== f.nodeName || F(a)) i = l;
                            else {
                                var d = y(e.ownerDocument),
                                    p = d.height,
                                    c = d.width;
                                i.top += l.top - l.marginTop, i.bottom = p + l.top, i.left += l.left - l.marginLeft, i.right = c + l.left
                            }
                        }
                        var h = "number" == typeof(n = n || 0);
                        return i.left += h ? n : n.left || 0, i.top += h ? n : n.top || 0, i.right -= h ? n : n.right || 0, i.bottom -= h ? n : n.bottom || 0, i
                    }

                    function P(e) {
                        return e.width * e.height
                    }

                    function H(e, t, n, o, r) {
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                        if (-1 === e.indexOf("auto")) return e;
                        var a = B(n, o, i, r),
                            f = {
                                top: {
                                    width: a.width,
                                    height: t.top - a.top
                                },
                                right: {
                                    width: a.right - t.right,
                                    height: a.height
                                },
                                bottom: {
                                    width: a.width,
                                    height: a.bottom - t.bottom
                                },
                                left: {
                                    width: t.left - a.left,
                                    height: a.height
                                }
                            },
                            s = Object.keys(f).map((function(e) {
                                return L({
                                    key: e
                                }, f[e], {
                                    area: P(f[e])
                                })
                            })).sort((function(e, t) {
                                return t.area - e.area
                            })),
                            u = s.filter((function(e) {
                                var t = e.width,
                                    o = e.height;
                                return t >= n.clientWidth && o >= n.clientHeight
                            })),
                            l = u.length > 0 ? u[0].key : s[0].key,
                            d = e.split("-")[1];
                        return l + (d ? "-" + d : "")
                    }

                    function C(e, t, n) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                            r = o ? S(t) : m(t, n);
                        return N(n, r, o)
                    }

                    function W(e) {
                        var t = e.ownerDocument.defaultView.getComputedStyle(e),
                            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                            o = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                        return {
                            width: e.offsetWidth + o,
                            height: e.offsetHeight + n
                        }
                    }

                    function A(e) {
                        var t = {
                            left: "right",
                            right: "left",
                            bottom: "top",
                            top: "bottom"
                        };
                        return e.replace(/left|right|bottom|top/g, (function(e) {
                            return t[e]
                        }))
                    }

                    function k(e, t, n) {
                        n = n.split("-")[0];
                        var o = W(e),
                            r = {
                                width: o.width,
                                height: o.height
                            },
                            i = -1 !== ["right", "left"].indexOf(n),
                            a = i ? "top" : "left",
                            f = i ? "left" : "top",
                            s = i ? "height" : "width",
                            u = i ? "width" : "height";
                        return r[a] = t[a] + t[s] / 2 - o[s] / 2, r[f] = n === f ? t[f] - o[u] : t[A(f)], r
                    }

                    function R(e, t) {
                        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                    }

                    function I(e, t, n) {
                        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                            if (Array.prototype.findIndex) return e.findIndex((function(e) {
                                return e[t] === n
                            }));
                            var o = R(e, (function(e) {
                                return e[t] === n
                            }));
                            return e.indexOf(o)
                        }(e, "name", n))).forEach((function(e) {
                            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                            var n = e.function || e.fn;
                            e.enabled && a(n) && (t.offsets.popper = T(t.offsets.popper), t.offsets.reference = T(t.offsets.reference), t = n(t, e))
                        })), t
                    }

                    function j() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = H(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = k(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = I(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }

                    function Y(e, t) {
                        return e.some((function(e) {
                            var n = e.name;
                            return e.enabled && n === t
                        }))
                    }

                    function z(e) {
                        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
                            var r = t[o],
                                i = r ? "" + r + n : e;
                            if (void 0 !== document.body.style[i]) return i
                        }
                        return null
                    }

                    function U() {
                        return this.state.isDestroyed = !0, Y(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[z("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }

                    function V(e) {
                        var t = e.ownerDocument;
                        return t ? t.defaultView : window
                    }

                    function q(e, t, n, o) {
                        var r = "BODY" === e.nodeName,
                            i = r ? e.ownerDocument.defaultView : e;
                        i.addEventListener(t, n, {
                            passive: !0
                        }), r || q(u(i.parentNode), t, n, o), o.push(i)
                    }

                    function _(e, t, n, o) {
                        n.updateBound = o, V(e).addEventListener("resize", n.updateBound, {
                            passive: !0
                        });
                        var r = u(e);
                        return q(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                    }

                    function G() {
                        this.state.eventsEnabled || (this.state = _(this.reference, this.options, this.state, this.scheduleUpdate))
                    }

                    function J() {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, V(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                            e.removeEventListener("scroll", t.updateBound)
                        })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }

                    function X(e) {
                        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                    }

                    function K(e, t) {
                        Object.keys(t).forEach((function(n) {
                            var o = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(t[n]) && (o = "px"), e.style[n] = t[n] + o
                        }))
                    }
                    var Q = e && /Firefox/i.test(navigator.userAgent);

                    function Z(e, t, n) {
                        var o = R(e, (function(e) {
                                return e.name === t
                            })),
                            r = !!o && e.some((function(e) {
                                return e.name === n && e.enabled && e.order < o.order
                            }));
                        if (!r) {
                            var i = "`" + t + "`",
                                a = "`" + n + "`";
                            console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
                        }
                        return r
                    }
                    var $ = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                        ee = $.slice(3);

                    function te(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = ee.indexOf(e),
                            o = ee.slice(n + 1).concat(ee.slice(0, n));
                        return t ? o.reverse() : o
                    }
                    var ne = "flip",
                        oe = "clockwise",
                        re = "counterclockwise";

                    function ie(e, t, n, o) {
                        var r = [0, 0],
                            i = -1 !== ["right", "left"].indexOf(o),
                            a = e.split(/(\+|\-)/).map((function(e) {
                                return e.trim()
                            })),
                            f = a.indexOf(R(a, (function(e) {
                                return -1 !== e.search(/,|\s/)
                            })));
                        a[f] && -1 === a[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var s = /\s*,\s*|\s+/,
                            u = -1 !== f ? [a.slice(0, f).concat([a[f].split(s)[0]]), [a[f].split(s)[1]].concat(a.slice(f + 1))] : [a];
                        return u = u.map((function(e, o) {
                            var r = (1 === o ? !i : i) ? "height" : "width",
                                a = !1;
                            return e.reduce((function(e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                            }), []).map((function(e) {
                                return function(e, t, n, o) {
                                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                        i = +r[1],
                                        a = r[2];
                                    return i ? 0 === a.indexOf("%") ? T("%p" === a ? n : o)[t] / 100 * i : "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i : i : e
                                }(e, r, t, n)
                            }))
                        })), u.forEach((function(e, t) {
                            e.forEach((function(n, o) {
                                X(n) && (r[t] += n * ("-" === e[o - 1] ? -1 : 1))
                            }))
                        })), r
                    }
                    var ae = {
                            shift: {
                                order: 100,
                                enabled: !0,
                                fn: function(e) {
                                    var t = e.placement,
                                        n = t.split("-")[0],
                                        o = t.split("-")[1];
                                    if (o) {
                                        var r = e.offsets,
                                            i = r.reference,
                                            a = r.popper,
                                            f = -1 !== ["bottom", "top"].indexOf(n),
                                            s = f ? "left" : "top",
                                            u = f ? "width" : "height",
                                            l = {
                                                start: x({}, s, i[s]),
                                                end: x({}, s, i[s] + i[u] - a[u])
                                            };
                                        e.offsets.popper = L({}, a, l[o])
                                    }
                                    return e
                                }
                            },
                            offset: {
                                order: 200,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n = t.offset,
                                        o = e.placement,
                                        r = e.offsets,
                                        i = r.popper,
                                        a = r.reference,
                                        f = o.split("-")[0],
                                        s = void 0;
                                    return s = X(+n) ? [+n, 0] : ie(n, i, a, f), "left" === f ? (i.top += s[0], i.left -= s[1]) : "right" === f ? (i.top += s[0], i.left += s[1]) : "top" === f ? (i.left += s[0], i.top -= s[1]) : "bottom" === f && (i.left += s[0], i.top += s[1]), e.popper = i, e
                                },
                                offset: 0
                            },
                            preventOverflow: {
                                order: 300,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n = t.boundariesElement || c(e.instance.popper);
                                    e.instance.reference === n && (n = c(n));
                                    var o = z("transform"),
                                        r = e.instance.popper.style,
                                        i = r.top,
                                        a = r.left,
                                        f = r[o];
                                    r.top = "", r.left = "", r[o] = "";
                                    var s = B(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                    r.top = i, r.left = a, r[o] = f, t.boundaries = s;
                                    var u = t.priority,
                                        l = e.offsets.popper,
                                        d = {
                                            primary: function(e) {
                                                var n = l[e];
                                                return l[e] < s[e] && !t.escapeWithReference && (n = Math.max(l[e], s[e])), x({}, e, n)
                                            },
                                            secondary: function(e) {
                                                var n = "right" === e ? "left" : "top",
                                                    o = l[n];
                                                return l[e] > s[e] && !t.escapeWithReference && (o = Math.min(l[n], s[e] - ("right" === e ? l.width : l.height))), x({}, n, o)
                                            }
                                        };
                                    return u.forEach((function(e) {
                                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                        l = L({}, l, d[t](e))
                                    })), e.offsets.popper = l, e
                                },
                                priority: ["left", "right", "top", "bottom"],
                                padding: 5,
                                boundariesElement: "scrollParent"
                            },
                            keepTogether: {
                                order: 400,
                                enabled: !0,
                                fn: function(e) {
                                    var t = e.offsets,
                                        n = t.popper,
                                        o = t.reference,
                                        r = e.placement.split("-")[0],
                                        i = Math.floor,
                                        a = -1 !== ["top", "bottom"].indexOf(r),
                                        f = a ? "right" : "bottom",
                                        s = a ? "left" : "top",
                                        u = a ? "width" : "height";
                                    return n[f] < i(o[s]) && (e.offsets.popper[s] = i(o[s]) - n[u]), n[s] > i(o[f]) && (e.offsets.popper[s] = i(o[f])), e
                                }
                            },
                            arrow: {
                                order: 500,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n;
                                    if (!Z(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                    var o = t.element;
                                    if ("string" == typeof o) {
                                        if (!(o = e.instance.popper.querySelector(o))) return e
                                    } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                    var r = e.placement.split("-")[0],
                                        i = e.offsets,
                                        a = i.popper,
                                        s = i.reference,
                                        u = -1 !== ["left", "right"].indexOf(r),
                                        l = u ? "height" : "width",
                                        d = u ? "Top" : "Left",
                                        p = d.toLowerCase(),
                                        c = u ? "left" : "top",
                                        h = u ? "bottom" : "right",
                                        m = W(o)[l];
                                    s[h] - m < a[p] && (e.offsets.popper[p] -= a[p] - (s[h] - m)), s[p] + m > a[h] && (e.offsets.popper[p] += s[p] + m - a[h]), e.offsets.popper = T(e.offsets.popper);
                                    var g = s[p] + s[l] / 2 - m / 2,
                                        v = f(e.instance.popper),
                                        w = parseFloat(v["margin" + d], 10),
                                        b = parseFloat(v["border" + d + "Width"], 10),
                                        y = g - e.offsets.popper[p] - w - b;
                                    return y = Math.max(Math.min(a[l] - m, y), 0), e.arrowElement = o, e.offsets.arrow = (x(n = {}, p, Math.round(y)), x(n, c, ""), n), e
                                },
                                element: "[x-arrow]"
                            },
                            flip: {
                                order: 600,
                                enabled: !0,
                                fn: function(e, t) {
                                    if (Y(e.instance.modifiers, "inner")) return e;
                                    if (e.flipped && e.placement === e.originalPlacement) return e;
                                    var n = B(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                        o = e.placement.split("-")[0],
                                        r = A(o),
                                        i = e.placement.split("-")[1] || "",
                                        a = [];
                                    switch (t.behavior) {
                                        case ne:
                                            a = [o, r];
                                            break;
                                        case oe:
                                            a = te(o);
                                            break;
                                        case re:
                                            a = te(o, !0);
                                            break;
                                        default:
                                            a = t.behavior
                                    }
                                    return a.forEach((function(f, s) {
                                        if (o !== f || a.length === s + 1) return e;
                                        o = e.placement.split("-")[0], r = A(o);
                                        var u = e.offsets.popper,
                                            l = e.offsets.reference,
                                            d = Math.floor,
                                            p = "left" === o && d(u.right) > d(l.left) || "right" === o && d(u.left) < d(l.right) || "top" === o && d(u.bottom) > d(l.top) || "bottom" === o && d(u.top) < d(l.bottom),
                                            c = d(u.left) < d(n.left),
                                            h = d(u.right) > d(n.right),
                                            m = d(u.top) < d(n.top),
                                            g = d(u.bottom) > d(n.bottom),
                                            v = "left" === o && c || "right" === o && h || "top" === o && m || "bottom" === o && g,
                                            w = -1 !== ["top", "bottom"].indexOf(o),
                                            b = !!t.flipVariations && (w && "start" === i && c || w && "end" === i && h || !w && "start" === i && m || !w && "end" === i && g);
                                        (p || v || b) && (e.flipped = !0, (p || v) && (o = a[s + 1]), b && (i = function(e) {
                                            return "end" === e ? "start" : "start" === e ? "end" : e
                                        }(i)), e.placement = o + (i ? "-" + i : ""), e.offsets.popper = L({}, e.offsets.popper, k(e.instance.popper, e.offsets.reference, e.placement)), e = I(e.instance.modifiers, e, "flip"))
                                    })), e
                                },
                                behavior: "flip",
                                padding: 5,
                                boundariesElement: "viewport"
                            },
                            inner: {
                                order: 700,
                                enabled: !1,
                                fn: function(e) {
                                    var t = e.placement,
                                        n = t.split("-")[0],
                                        o = e.offsets,
                                        r = o.popper,
                                        i = o.reference,
                                        a = -1 !== ["left", "right"].indexOf(n),
                                        f = -1 === ["top", "left"].indexOf(n);
                                    return r[a ? "left" : "top"] = i[n] - (f ? r[a ? "width" : "height"] : 0), e.placement = A(t), e.offsets.popper = T(r), e
                                }
                            },
                            hide: {
                                order: 800,
                                enabled: !0,
                                fn: function(e) {
                                    if (!Z(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                    var t = e.offsets.reference,
                                        n = R(e.instance.modifiers, (function(e) {
                                            return "preventOverflow" === e.name
                                        })).boundaries;
                                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                        if (!0 === e.hide) return e;
                                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                    } else {
                                        if (!1 === e.hide) return e;
                                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                    }
                                    return e
                                }
                            },
                            computeStyle: {
                                order: 850,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n = t.x,
                                        o = t.y,
                                        r = e.offsets.popper,
                                        i = R(e.instance.modifiers, (function(e) {
                                            return "applyStyle" === e.name
                                        })).gpuAcceleration;
                                    void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                    var a = void 0 !== i ? i : t.gpuAcceleration,
                                        f = c(e.instance.popper),
                                        s = M(f),
                                        u = {
                                            position: r.position
                                        },
                                        l = function(e, t) {
                                            var n = e.offsets,
                                                o = n.popper,
                                                r = n.reference,
                                                i = -1 !== ["left", "right"].indexOf(e.placement),
                                                a = -1 !== e.placement.indexOf("-"),
                                                f = r.width % 2 == o.width % 2,
                                                s = r.width % 2 == 1 && o.width % 2 == 1,
                                                u = function(e) {
                                                    return e
                                                },
                                                l = t ? i || a || f ? Math.round : Math.floor : u,
                                                d = t ? Math.round : u;
                                            return {
                                                left: l(s && !a && t ? o.left - 1 : o.left),
                                                top: d(o.top),
                                                bottom: d(o.bottom),
                                                right: l(o.right)
                                            }
                                        }(e, window.devicePixelRatio < 2 || !Q),
                                        d = "bottom" === n ? "top" : "bottom",
                                        p = "right" === o ? "left" : "right",
                                        h = z("transform"),
                                        m = void 0,
                                        g = void 0;
                                    if (g = "bottom" === d ? "HTML" === f.nodeName ? -f.clientHeight + l.bottom : -s.height + l.bottom : l.top, m = "right" === p ? "HTML" === f.nodeName ? -f.clientWidth + l.right : -s.width + l.right : l.left, a && h) u[h] = "translate3d(" + m + "px, " + g + "px, 0)", u[d] = 0, u[p] = 0, u.willChange = "transform";
                                    else {
                                        var v = "bottom" === d ? -1 : 1,
                                            w = "right" === p ? -1 : 1;
                                        u[d] = g * v, u[p] = m * w, u.willChange = d + ", " + p
                                    }
                                    var b = {
                                        "x-placement": e.placement
                                    };
                                    return e.attributes = L({}, b, e.attributes), e.styles = L({}, u, e.styles), e.arrowStyles = L({}, e.offsets.arrow, e.arrowStyles), e
                                },
                                gpuAcceleration: !0,
                                x: "bottom",
                                y: "right"
                            },
                            applyStyle: {
                                order: 900,
                                enabled: !0,
                                fn: function(e) {
                                    var t, n;
                                    return K(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                    })), e.arrowElement && Object.keys(e.arrowStyles).length && K(e.arrowElement, e.arrowStyles), e
                                },
                                onLoad: function(e, t, n, o, r) {
                                    var i = C(r, t, e, n.positionFixed),
                                        a = H(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                    return t.setAttribute("x-placement", a), K(t, {
                                        position: n.positionFixed ? "fixed" : "absolute"
                                    }), n
                                },
                                gpuAcceleration: void 0
                            }
                        },
                        fe = {
                            placement: "bottom",
                            positionFixed: !1,
                            eventsEnabled: !0,
                            removeOnDestroy: !1,
                            onCreate: function() {},
                            onUpdate: function() {},
                            modifiers: ae
                        },
                        se = function() {
                            function e(t, n) {
                                var o = this,
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                E(this, e), this.scheduleUpdate = function() {
                                    return requestAnimationFrame(o.update)
                                }, this.update = i(this.update.bind(this)), this.options = L({}, e.Defaults, r), this.state = {
                                    isDestroyed: !1,
                                    isCreated: !1,
                                    scrollParents: []
                                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(L({}, e.Defaults.modifiers, r.modifiers)).forEach((function(t) {
                                    o.options.modifiers[t] = L({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                                })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                                    return L({
                                        name: e
                                    }, o.options.modifiers[e])
                                })).sort((function(e, t) {
                                    return e.order - t.order
                                })), this.modifiers.forEach((function(e) {
                                    e.enabled && a(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
                                })), this.update();
                                var f = this.options.eventsEnabled;
                                f && this.enableEventListeners(), this.state.eventsEnabled = f
                            }
                            return O(e, [{
                                key: "update",
                                value: function() {
                                    return j.call(this)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    return U.call(this)
                                }
                            }, {
                                key: "enableEventListeners",
                                value: function() {
                                    return G.call(this)
                                }
                            }, {
                                key: "disableEventListeners",
                                value: function() {
                                    return J.call(this)
                                }
                            }]), e
                        }();
                    return se.Utils = ("undefined" != typeof window ? window : t).PopperUtils, se.placements = $, se.Defaults = fe, se
                }, e.exports = n()
            }).call(this, n(211))
        },
        1019: function(e, t, n) {
            ! function(e) {
                "use strict";

                function t(e, t) {
                    if (1 !== e.nodeType) return [];
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    return t ? n[t] : n
                }

                function n(e) {
                    return "HTML" === e.nodeName ? e : e.parentNode || e.host
                }

                function o(e) {
                    if (!e) return document.body;
                    switch (e.nodeName) {
                        case "HTML":
                        case "BODY":
                            return e.ownerDocument.body;
                        case "#document":
                            return e.body
                    }
                    var r = t(e),
                        i = r.overflow,
                        a = r.overflowX,
                        f = r.overflowY;
                    return /(auto|scroll|overlay)/.test(i + f + a) ? e : o(n(e))
                }
                var r = "undefined" != typeof window && "undefined" != typeof document,
                    i = r && !(!window.MSInputMethodContext || !document.documentMode),
                    a = r && /MSIE 10/.test(navigator.userAgent);

                function f(e) {
                    return 11 === e ? i : 10 === e ? a : i || a
                }

                function s(e) {
                    if (!e) return document.documentElement;
                    for (var n = f(10) ? document.body : null, o = e.offsetParent || null; o === n && e.nextElementSibling;) o = (e = e.nextElementSibling).offsetParent;
                    var r = o && o.nodeName;
                    return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(o.nodeName) && "static" === t(o, "position") ? s(o) : o : e ? e.ownerDocument.documentElement : document.documentElement
                }

                function u(e) {
                    var t = e.nodeName;
                    return "BODY" !== t && ("HTML" === t || s(e.firstElementChild) === e)
                }

                function l(e) {
                    return null !== e.parentNode ? l(e.parentNode) : e
                }

                function d(e, t) {
                    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                        o = n ? e : t,
                        r = n ? t : e,
                        i = document.createRange();
                    i.setStart(o, 0), i.setEnd(r, 0);
                    var a = i.commonAncestorContainer;
                    if (e !== a && t !== a || o.contains(r)) return u(a) ? a : s(a);
                    var f = l(e);
                    return f.host ? d(f.host, t) : d(e, l(t).host)
                }

                function p(e) {
                    var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                        n = e.nodeName;
                    if ("BODY" === n || "HTML" === n) {
                        var o = e.ownerDocument.documentElement;
                        return (e.ownerDocument.scrollingElement || o)[t]
                    }
                    return e[t]
                }

                function c(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = p(t, "top"),
                        r = p(t, "left"),
                        i = n ? -1 : 1;
                    return e.top += o * i, e.bottom += o * i, e.left += r * i, e.right += r * i, e
                }

                function h(e, t) {
                    var n = "x" === t ? "Left" : "Top",
                        o = "Left" === n ? "Right" : "Bottom";
                    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + o + "Width"], 10)
                }

                function m(e, t, n, o) {
                    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], f(10) ? parseInt(n["offset" + e]) + parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
                }

                function g(e) {
                    var t = e.body,
                        n = e.documentElement,
                        o = f(10) && getComputedStyle(n);
                    return {
                        height: m("Height", t, n, o),
                        width: m("Width", t, n, o)
                    }
                }
                var v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                };

                function w(e) {
                    return v({}, e, {
                        right: e.left + e.width,
                        bottom: e.top + e.height
                    })
                }

                function b(e) {
                    var n = {};
                    try {
                        if (f(10)) {
                            n = e.getBoundingClientRect();
                            var o = p(e, "top"),
                                r = p(e, "left");
                            n.top += o, n.left += r, n.bottom += o, n.right += r
                        } else n = e.getBoundingClientRect()
                    } catch (e) {}
                    var i = {
                            left: n.left,
                            top: n.top,
                            width: n.right - n.left,
                            height: n.bottom - n.top
                        },
                        a = "HTML" === e.nodeName ? g(e.ownerDocument) : {},
                        s = a.width || e.clientWidth || i.right - i.left,
                        u = a.height || e.clientHeight || i.bottom - i.top,
                        l = e.offsetWidth - s,
                        d = e.offsetHeight - u;
                    if (l || d) {
                        var c = t(e);
                        l -= h(c, "x"), d -= h(c, "y"), i.width -= l, i.height -= d
                    }
                    return w(i)
                }

                function y(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = f(10),
                        a = "HTML" === n.nodeName,
                        s = b(e),
                        u = b(n),
                        l = o(e),
                        d = t(n),
                        p = parseFloat(d.borderTopWidth, 10),
                        h = parseFloat(d.borderLeftWidth, 10);
                    r && a && (u.top = Math.max(u.top, 0), u.left = Math.max(u.left, 0));
                    var m = w({
                        top: s.top - u.top - p,
                        left: s.left - u.left - h,
                        width: s.width,
                        height: s.height
                    });
                    if (m.marginTop = 0, m.marginLeft = 0, !i && a) {
                        var g = parseFloat(d.marginTop, 10),
                            v = parseFloat(d.marginLeft, 10);
                        m.top -= p - g, m.bottom -= p - g, m.left -= h - v, m.right -= h - v, m.marginTop = g, m.marginLeft = v
                    }
                    return (i && !r ? n.contains(l) : n === l && "BODY" !== l.nodeName) && (m = c(m, n)), m
                }

                function E(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        o = y(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        i = Math.max(n.clientHeight, window.innerHeight || 0),
                        a = t ? 0 : p(n),
                        f = t ? 0 : p(n, "left");
                    return w({
                        top: a - o.top + o.marginTop,
                        left: f - o.left + o.marginLeft,
                        width: r,
                        height: i
                    })
                }

                function O(e) {
                    var o = e.nodeName;
                    return "BODY" !== o && "HTML" !== o && ("fixed" === t(e, "position") || O(n(e)))
                }

                function x(e) {
                    if (!e || !e.parentElement || f()) return document.documentElement;
                    for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
                    return n || document.documentElement
                }

                function L(e, t, r, i) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        f = {
                            top: 0,
                            left: 0
                        },
                        s = a ? x(e) : d(e, t);
                    if ("viewport" === i) f = E(s, a);
                    else {
                        var u = void 0;
                        "scrollParent" === i ? "BODY" === (u = o(n(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;
                        var l = y(u, s, a);
                        if ("HTML" !== u.nodeName || O(s)) f = l;
                        else {
                            var p = g(e.ownerDocument),
                                c = p.height,
                                h = p.width;
                            f.top += l.top - l.marginTop, f.bottom = c + l.top, f.left += l.left - l.marginLeft, f.right = h + l.left
                        }
                    }
                    var m = "number" == typeof(r = r || 0);
                    return f.left += m ? r : r.left || 0, f.top += m ? r : r.top || 0, f.right -= m ? r : r.right || 0, f.bottom -= m ? r : r.bottom || 0, f
                }

                function T(e) {
                    return e.width * e.height
                }

                function M(e, t, n, o, r) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === e.indexOf("auto")) return e;
                    var a = L(n, o, i, r),
                        f = {
                            top: {
                                width: a.width,
                                height: t.top - a.top
                            },
                            right: {
                                width: a.right - t.right,
                                height: a.height
                            },
                            bottom: {
                                width: a.width,
                                height: a.bottom - t.bottom
                            },
                            left: {
                                width: t.left - a.left,
                                height: a.height
                            }
                        },
                        s = Object.keys(f).map((function(e) {
                            return v({
                                key: e
                            }, f[e], {
                                area: T(f[e])
                            })
                        })).sort((function(e, t) {
                            return t.area - e.area
                        })),
                        u = s.filter((function(e) {
                            var t = e.width,
                                o = e.height;
                            return t >= n.clientWidth && o >= n.clientHeight
                        })),
                        l = u.length > 0 ? u[0].key : s[0].key,
                        d = e.split("-")[1];
                    return l + (d ? "-" + d : "")
                }
                for (var N = ["Edge", "Trident", "Firefox"], D = 0, F = 0; F < N.length; F += 1)
                    if (r && navigator.userAgent.indexOf(N[F]) >= 0) {
                        D = 1;
                        break
                    }
                function S(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, window.Promise.resolve().then((function() {
                            t = !1, e()
                        })))
                    }
                }

                function B(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, setTimeout((function() {
                            t = !1, e()
                        }), D))
                    }
                }
                var P = r && window.Promise ? S : B;

                function H(e, t) {
                    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                }

                function C(e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex((function(e) {
                        return e[t] === n
                    }));
                    var o = H(e, (function(e) {
                        return e[t] === n
                    }));
                    return e.indexOf(o)
                }

                function W(e) {
                    var t = void 0;
                    if ("HTML" === e.nodeName) {
                        var n = g(e.ownerDocument);
                        t = {
                            width: n.width,
                            height: n.height,
                            left: 0,
                            top: 0
                        }
                    } else t = {
                        width: e.offsetWidth,
                        height: e.offsetHeight,
                        left: e.offsetLeft,
                        top: e.offsetTop
                    };
                    return w(t)
                }

                function A(e) {
                    var t = e.ownerDocument.defaultView.getComputedStyle(e),
                        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                        o = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                    return {
                        width: e.offsetWidth + o,
                        height: e.offsetHeight + n
                    }
                }

                function k(e) {
                    var t = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };
                    return e.replace(/left|right|bottom|top/g, (function(e) {
                        return t[e]
                    }))
                }

                function R(e, t, n) {
                    n = n.split("-")[0];
                    var o = A(e),
                        r = {
                            width: o.width,
                            height: o.height
                        },
                        i = -1 !== ["right", "left"].indexOf(n),
                        a = i ? "top" : "left",
                        f = i ? "left" : "top",
                        s = i ? "height" : "width",
                        u = i ? "width" : "height";
                    return r[a] = t[a] + t[s] / 2 - o[s] / 2, r[f] = n === f ? t[f] - o[u] : t[k(f)], r
                }

                function I(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return y(n, o ? x(t) : d(t, n), o)
                }

                function j(e) {
                    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
                        var r = t[o],
                            i = r ? "" + r + n : e;
                        if (void 0 !== document.body.style[i]) return i
                    }
                    return null
                }

                function Y(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }

                function z(e, t) {
                    return e.some((function(e) {
                        var n = e.name;
                        return e.enabled && n === t
                    }))
                }

                function U(e, t, n) {
                    var o = H(e, (function(e) {
                            return e.name === t
                        })),
                        r = !!o && e.some((function(e) {
                            return e.name === n && e.enabled && e.order < o.order
                        }));
                    if (!r) {
                        var i = "`" + t + "`",
                            a = "`" + n + "`";
                        console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
                    }
                    return r
                }

                function V(e) {
                    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                }

                function q(e) {
                    var t = e.ownerDocument;
                    return t ? t.defaultView : window
                }

                function _(e, t) {
                    return q(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
                }

                function G(e, t, n) {
                    return (void 0 === n ? e : e.slice(0, C(e, "name", n))).forEach((function(e) {
                        e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                        var n = e.function || e.fn;
                        e.enabled && Y(n) && (t.offsets.popper = w(t.offsets.popper), t.offsets.reference = w(t.offsets.reference), t = n(t, e))
                    })), t
                }

                function J(e, t) {
                    Object.keys(t).forEach((function(n) {
                        !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
                    }))
                }

                function X(e, t) {
                    Object.keys(t).forEach((function(n) {
                        var o = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && V(t[n]) && (o = "px"), e.style[n] = t[n] + o
                    }))
                }

                function K(e, t, n, r) {
                    var i = "BODY" === e.nodeName,
                        a = i ? e.ownerDocument.defaultView : e;
                    a.addEventListener(t, n, {
                        passive: !0
                    }), i || K(o(a.parentNode), t, n, r), r.push(a)
                }

                function Q(e, t, n, r) {
                    n.updateBound = r, q(e).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                    var i = o(e);
                    return K(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
                }
                var Z = {
                    computeAutoPlacement: M,
                    debounce: P,
                    findIndex: C,
                    getBordersSize: h,
                    getBoundaries: L,
                    getBoundingClientRect: b,
                    getClientRect: w,
                    getOffsetParent: s,
                    getOffsetRect: W,
                    getOffsetRectRelativeToArbitraryNode: y,
                    getOuterSizes: A,
                    getParentNode: n,
                    getPopperOffsets: R,
                    getReferenceOffsets: I,
                    getScroll: p,
                    getScrollParent: o,
                    getStyleComputedProperty: t,
                    getSupportedPropertyName: j,
                    getWindowSizes: g,
                    isFixed: O,
                    isFunction: Y,
                    isModifierEnabled: z,
                    isModifierRequired: U,
                    isNumeric: V,
                    removeEventListeners: _,
                    runModifiers: G,
                    setAttributes: J,
                    setStyles: X,
                    setupEventListeners: Q
                };
                e.computeAutoPlacement = M, e.debounce = P, e.findIndex = C, e.getBordersSize = h, e.getBoundaries = L, e.getBoundingClientRect = b, e.getClientRect = w, e.getOffsetParent = s, e.getOffsetRect = W, e.getOffsetRectRelativeToArbitraryNode = y, e.getOuterSizes = A, e.getParentNode = n, e.getPopperOffsets = R, e.getReferenceOffsets = I, e.getScroll = p, e.getScrollParent = o, e.getStyleComputedProperty = t, e.getSupportedPropertyName = j, e.getWindowSizes = g, e.isFixed = O, e.isFunction = Y, e.isModifierEnabled = z, e.isModifierRequired = U, e.isNumeric = V, e.removeEventListeners = _, e.runModifiers = G, e.setAttributes = J, e.setStyles = X, e.setupEventListeners = Q, e.default = Z, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        }
    }
]);
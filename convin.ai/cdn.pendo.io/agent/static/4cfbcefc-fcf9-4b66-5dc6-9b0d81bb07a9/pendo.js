// Pendo Agent Wrapper
// Copyright 2022 Pendo.io, Inc.
// Environment:    production
// Agent Version:  2.158.0
// Installed:      2022-10-27T18:08:22Z
(function(PendoConfig) {
    ! function(Wv, Jv, qv) {
        ! function() {
            var s = Array.prototype.slice;
            try {
                s.call(Jv.documentElement)
            } catch (Ce) {
                Array.prototype.slice = function(e, t) {
                    if (t = void 0 !== t ? t : this.length, "[object Array]" === Object.prototype.toString.call(this)) return s.call(this, e, t);
                    var n, i = [],
                        r = this.length,
                        o = e || 0,
                        a = (t < 0 ? r + t : t || r) - (o = 0 <= o ? o : r + o);
                    if (0 < a)
                        if (i = new Array(a), this.charAt)
                            for (n = 0; n < a; n++) i[n] = this.charAt(o + n);
                        else
                            for (n = 0; n < a; n++) i[n] = this[o + n];
                    return i
                }
            }
            String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            });
            var _ = function() {
                    "use strict";
                    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
                    return {
                        uint8ToBase64: function(e) {
                            var t, n, i, r = e.length % 3,
                                o = "";
                            for (t = 0, i = e.length - r; t < i; t += 3) n = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2], o += function(e) {
                                return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e]
                            }(n);
                            switch (r) {
                                case 1:
                                    n = e[e.length - 1], o = (o += a[n >> 2]) + a[n << 4 & 63];
                                    break;
                                case 2:
                                    n = (e[e.length - 2] << 8) + e[e.length - 1], o = (o = (o += a[n >> 10]) + a[n >> 4 & 63]) + a[n << 2 & 63]
                            }
                            return o
                        }
                    }
                }(),
                T = "undefined" != typeof globalThis ? globalThis : void 0 !== Wv ? Wv : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

            function e(e) {
                e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") && e["default"]
            }

            function i(e) {
                e && Object.prototype.hasOwnProperty.call(e, "default") && e["default"]
            }

            function o(e) {
                e && Object.prototype.hasOwnProperty.call(e, "default") && 1 === Object.keys(e).length && e["default"]
            }

            function A(n) {
                var i;
                n.__esModule || (i = Object.defineProperty({}, "__esModule", {
                    value: !0
                }), Object.keys(n).forEach(function(e) {
                    var t = Object.getOwnPropertyDescriptor(n, e);
                    Object.defineProperty(i, e, t.get ? t : {
                        enumerable: !0,
                        get: function() {
                            return n[e]
                        }
                    })
                }))
            }

            function R(e) {
                throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
            }
            var k = {
                    exports: {}
                },
                O = (! function(h) {
                    /*
                     * [js-sha1]{@link https://github.com/emn178/js-sha1}
                     *
                     * @version 0.6.0
                     * @author Chen, Yi-Cyuan [emn178@gmail.com]
                     * @copyright Chen, Yi-Cyuan 2014-2017
                     * @license MIT
                     */
                    ! function() {
                        "use strict";
                        var s = "object" == typeof Wv ? Wv : {},
                            i = !s.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node,
                            e = (i && (s = T), !s.JS_SHA1_NO_COMMON_JS && h.exports),
                            t = "function" == typeof qv && qv.amd,
                            o = "0123456789abcdef".split(""),
                            n = [-2147483648, 8388608, 32768, 128],
                            u = [24, 16, 8, 0],
                            r = ["hex", "array", "digest", "arrayBuffer"],
                            a = [],
                            d = function(t) {
                                return function(e) {
                                    return new f(!0).update(e)[t]()
                                }
                            },
                            c = function() {
                                var t = d("hex");
                                (t = i ? l(t) : t).create = function() {
                                    return new f
                                }, t.update = function(e) {
                                    return t.create().update(e)
                                };
                                for (var e = 0; e < r.length; ++e) {
                                    var n = r[e];
                                    t[n] = d(n)
                                }
                                return t
                            },
                            l = function(t) {
                                var n = eval("require('crypto')"),
                                    i = eval("require('buffer').Buffer"),
                                    e = function(e) {
                                        if ("string" == typeof e) return n.createHash("sha1").update(e, "utf8").digest("hex");
                                        if (e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                        else if (e.length === qv) return t(e);
                                        return n.createHash("sha1").update(new i(e)).digest("hex")
                                    };
                                return e
                            };

                        function f(e) {
                            e ? (a[0] = a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0, this.blocks = a) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                        }
                        f.prototype.update = function(e) {
                            if (!this.finalized) {
                                for (var t, n, i = "string" != typeof e, r = 0, o = (e = i && e.constructor === s.ArrayBuffer ? new Uint8Array(e) : e).length || 0, a = this.blocks; r < o;) {
                                    if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), i)
                                        for (n = this.start; r < o && n < 64; ++r) a[n >> 2] |= e[r] << u[3 & n++];
                                    else
                                        for (n = this.start; r < o && n < 64; ++r)(t = e.charCodeAt(r)) < 128 ? a[n >> 2] |= t << u[3 & n++] : (t < 2048 ? a[n >> 2] |= (192 | t >> 6) << u[3 & n++] : (t < 55296 || 57344 <= t ? a[n >> 2] |= (224 | t >> 12) << u[3 & n++] : (t = 65536 + ((1023 & t) << 10 | 1023 & e.charCodeAt(++r)), a[n >> 2] |= (240 | t >> 18) << u[3 & n++], a[n >> 2] |= (128 | t >> 12 & 63) << u[3 & n++]), a[n >> 2] |= (128 | t >> 6 & 63) << u[3 & n++]), a[n >> 2] |= (128 | 63 & t) << u[3 & n++]);
                                    this.lastByteIndex = n, this.bytes += n - this.start, 64 <= n ? (this.block = a[16], this.start = n - 64, this.hash(), this.hashed = !0) : this.start = n
                                }
                                return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                            }
                        }, f.prototype.finalize = function() {
                            var e, t;
                            this.finalized || (this.finalized = !0, e = this.blocks, t = this.lastByteIndex, e[16] = this.block, e[t >> 2] |= n[3 & t], this.block = e[16], 56 <= t && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash())
                        }, f.prototype.hash = function() {
                            for (var e, t = this.h0, n = this.h1, i = this.h2, r = this.h3, o = this.h4, a = this.blocks, s = 16; s < 80; ++s) e = a[s - 3] ^ a[s - 8] ^ a[s - 14] ^ a[s - 16], a[s] = e << 1 | e >>> 31;
                            for (s = 0; s < 20; s += 5) t = (e = (n = (e = (i = (e = (r = (e = (o = (e = t << 5 | t >>> 27) + (n & i | ~n & r) + o + 1518500249 + a[s] << 0) << 5 | o >>> 27) + (t & (n = n << 30 | n >>> 2) | ~t & i) + r + 1518500249 + a[s + 1] << 0) << 5 | r >>> 27) + (o & (t = t << 30 | t >>> 2) | ~o & n) + i + 1518500249 + a[s + 2] << 0) << 5 | i >>> 27) + (r & (o = o << 30 | o >>> 2) | ~r & t) + n + 1518500249 + a[s + 3] << 0) << 5 | n >>> 27) + (i & (r = r << 30 | r >>> 2) | ~i & o) + t + 1518500249 + a[s + 4] << 0, i = i << 30 | i >>> 2;
                            for (; s < 40; s += 5) t = (e = (n = (e = (i = (e = (r = (e = (o = (e = t << 5 | t >>> 27) + (n ^ i ^ r) + o + 1859775393 + a[s] << 0) << 5 | o >>> 27) + (t ^ (n = n << 30 | n >>> 2) ^ i) + r + 1859775393 + a[s + 1] << 0) << 5 | r >>> 27) + (o ^ (t = t << 30 | t >>> 2) ^ n) + i + 1859775393 + a[s + 2] << 0) << 5 | i >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ t) + n + 1859775393 + a[s + 3] << 0) << 5 | n >>> 27) + (i ^ (r = r << 30 | r >>> 2) ^ o) + t + 1859775393 + a[s + 4] << 0, i = i << 30 | i >>> 2;
                            for (; s < 60; s += 5) t = (e = (n = (e = (i = (e = (r = (e = (o = (e = t << 5 | t >>> 27) + (n & i | n & r | i & r) + o - 1894007588 + a[s] << 0) << 5 | o >>> 27) + (t & (n = n << 30 | n >>> 2) | t & i | n & i) + r - 1894007588 + a[s + 1] << 0) << 5 | r >>> 27) + (o & (t = t << 30 | t >>> 2) | o & n | t & n) + i - 1894007588 + a[s + 2] << 0) << 5 | i >>> 27) + (r & (o = o << 30 | o >>> 2) | r & t | o & t) + n - 1894007588 + a[s + 3] << 0) << 5 | n >>> 27) + (i & (r = r << 30 | r >>> 2) | i & o | r & o) + t - 1894007588 + a[s + 4] << 0, i = i << 30 | i >>> 2;
                            for (; s < 80; s += 5) t = (e = (n = (e = (i = (e = (r = (e = (o = (e = t << 5 | t >>> 27) + (n ^ i ^ r) + o - 899497514 + a[s] << 0) << 5 | o >>> 27) + (t ^ (n = n << 30 | n >>> 2) ^ i) + r - 899497514 + a[s + 1] << 0) << 5 | r >>> 27) + (o ^ (t = t << 30 | t >>> 2) ^ n) + i - 899497514 + a[s + 2] << 0) << 5 | i >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ t) + n - 899497514 + a[s + 3] << 0) << 5 | n >>> 27) + (i ^ (r = r << 30 | r >>> 2) ^ o) + t - 899497514 + a[s + 4] << 0, i = i << 30 | i >>> 2;
                            this.h0 = this.h0 + t << 0, this.h1 = this.h1 + n << 0, this.h2 = this.h2 + i << 0, this.h3 = this.h3 + r << 0, this.h4 = this.h4 + o << 0
                        }, f.prototype.hex = function() {
                            this.finalize();
                            var e = this.h0,
                                t = this.h1,
                                n = this.h2,
                                i = this.h3,
                                r = this.h4;
                            return o[e >> 28 & 15] + o[e >> 24 & 15] + o[e >> 20 & 15] + o[e >> 16 & 15] + o[e >> 12 & 15] + o[e >> 8 & 15] + o[e >> 4 & 15] + o[15 & e] + o[t >> 28 & 15] + o[t >> 24 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 4 & 15] + o[15 & t] + o[n >> 28 & 15] + o[n >> 24 & 15] + o[n >> 20 & 15] + o[n >> 16 & 15] + o[n >> 12 & 15] + o[n >> 8 & 15] + o[n >> 4 & 15] + o[15 & n] + o[i >> 28 & 15] + o[i >> 24 & 15] + o[i >> 20 & 15] + o[i >> 16 & 15] + o[i >> 12 & 15] + o[i >> 8 & 15] + o[i >> 4 & 15] + o[15 & i] + o[r >> 28 & 15] + o[r >> 24 & 15] + o[r >> 20 & 15] + o[r >> 16 & 15] + o[r >> 12 & 15] + o[r >> 8 & 15] + o[r >> 4 & 15] + o[15 & r]
                        }, f.prototype.toString = f.prototype.hex, f.prototype.digest = function() {
                            this.finalize();
                            var e = this.h0,
                                t = this.h1,
                                n = this.h2,
                                i = this.h3,
                                r = this.h4;
                            return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
                        }, f.prototype.array = f.prototype.digest, f.prototype.arrayBuffer = function() {
                            this.finalize();
                            var e = new ArrayBuffer(20),
                                t = new DataView(e);
                            return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), e
                        };
                        var p = c();
                        e ? h.exports = p : (s.sha1 = p, t && qv(function() {
                            return p
                        }))
                    }()
                }(k), k.exports),
                N = "stagingServerHashes",
                G, L = {};

            function M(e) {
                return e.loadAsModule
            }

            function F(e) {
                e = M(e) ? {} : Wv;
                return G = e.pendo = e.pendo || {}
            }

            function P(e) {
                return "staging" === e.environmentName
            }

            function B(e) {
                return !e.unminified
            }

            function Y(e) {
                return "extension" === e.installType
            }

            function X(e) {
                return !Y(e) && !P(e) && te(e)
            }

            function Q(e, t) {
                return !Y(e) && B(e) && t
            }

            function ee(e, t, n) {
                e = e.stagingAgentUrl;
                return n && (n = "unminified.js", t && (n = "staging-" + n), e = e && e.replace(/staging\.js$/, n)), e
            }

            function te(e, t) {
                if (P(e = e || he())) return !0;
                if (t = t || Wv.location, ie(e))
                    for (var n = ne(t.host), i = 0, r = e[N].length; i < r; ++i)
                        if (e[N][i] === n) return !0;
                if (re(e))
                    for (var o = 0, a = e.stagingServers.length; o < a; ++o) {
                        var s = e.stagingServers[o];
                        if ((s = "string" == typeof s ? new RegExp("^" + s + "$") : s) instanceof RegExp && s.test(t.host)) return !0
                    }
                return !1
            }

            function ne(e) {
                return _.uint8ToBase64(O.create().update(e).digest())
            }

            function ie(e) {
                return e && e.stagingAgentUrl && e[N]
            }

            function re(e) {
                return e && e.stagingAgentUrl && e.stagingServers
            }
            var oe = ["initialize", "identify", "updateOptions", "pageLoad", "track", "clearSession"];

            function ae(e, t, n) {
                (e._q = e._q || [])["initialize" === t ? "unshift" : "push"]([].concat.apply([t], n))
            }

            function se(e, t) {
                t[e] = t[e] || function() {
                    ae(t, e, arguments)
                }
            }

            function ue(e) {
                if (!e._q)
                    for (var t = oe, n = 0, i = t.length; n < i; ++n) se(t[n], e)
            }

            function de(e, t, n) {
                if (X(e)) {
                    e = ee(e, !0, n);
                    if (e) return ue(t), fe(e), !0
                }
                return !1
            }

            function ce(e, t, n) {
                if (Q(e, n)) {
                    e = ee(e, !1, n);
                    if (e) return ue(t), fe(e), !0
                }
                return !1
            }

            function le(e, t, n) {
                return de(e, t, n) || ce(e, t, n)
            }

            function fe(e) {
                var t = Jv.createElement("script"),
                    e = (t["async"] = !0, t.src = e, Jv.getElementsByTagName("script")[0]);
                e && e.parentNode ? e.parentNode.insertBefore(t, e) : (Jv.head || Jv.body).appendChild(t)
            }

            function pe(e) {
                L = e
            }

            function he() {
                return L
            }

            function ge() {
                return "undefined" == typeof PendoConfig ? {} : PendoConfig
            }

            function me(e) {
                return he()[e]
            }
            var ve = {
                    exports: {}
                },
                U = (
                    /*     Underscore.js 1.7.0
                     *     http://underscorejs.org
                     *     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
                     *     @license Underscore may be freely distributed under the MIT license.
                     */
                    ! function(E, _) {
                        ! function() {
                            var e = this,
                                t = e._,
                                i = Array.prototype,
                                n = Object.prototype,
                                r = Function.prototype,
                                s = i.push,
                                d = i.slice,
                                c = i.concat,
                                f = n.toString,
                                o = n.hasOwnProperty,
                                n = Array.isArray,
                                a = Object.keys,
                                u = r.bind,
                                p = function(e) {
                                    return e instanceof p ? e : this instanceof p ? void(this._wrapped = e) : new p(e)
                                },
                                l = (((_ = E.exports ? E.exports = p : _)._ = p).VERSION = "1.7.0", function(r, o, e) {
                                    if (void 0 === o) return r;
                                    switch (null == e ? 3 : e) {
                                        case 1:
                                            return function(e) {
                                                return r.call(o, e)
                                            };
                                        case 2:
                                            return function(e, t) {
                                                return r.call(o, e, t)
                                            };
                                        case 3:
                                            return function(e, t, n) {
                                                return r.call(o, e, t, n)
                                            };
                                        case 4:
                                            return function(e, t, n, i) {
                                                return r.call(o, e, t, n, i)
                                            }
                                    }
                                    return function() {
                                        return r.apply(o, arguments)
                                    }
                                }),
                                h = (p.iteratee = function(e, t, n) {
                                    return null == e ? p.identity : p.isFunction(e) ? l(e, t, n) : p.isObject(e) ? p.matches(e) : p.property(e)
                                }, p.each = p.forEach = function(e, t, n) {
                                    if (null != e)
                                        if (t = l(t, n), (o = e.length) === +o)
                                            for (r = 0; r < o; r++) t(e[r], r, e);
                                        else
                                            for (var i = p.keys(e), r = 0, o = i.length; r < o; r++) t(e[i[r]], i[r], e);
                                    return e
                                }, p.map = p.collect = function(e, t, n) {
                                    if (null == e) return [];
                                    t = p.iteratee(t, n);
                                    for (var i, r = e.length !== +e.length && p.keys(e), o = (r || e).length, a = Array(o), s = 0; s < o; s++) i = r ? r[s] : s, a[s] = t(e[i], i, e);
                                    return a
                                }, "Reduce of empty array with no initial value"),
                                r = (p.reduce = p.foldl = p.inject = function(e, t, n, i) {
                                    null == e && (e = []), t = l(t, i, 4);
                                    var r, o = e.length !== +e.length && p.keys(e),
                                        a = (o || e).length,
                                        s = 0;
                                    if (arguments.length < 3) {
                                        if (!a) throw new TypeError(h);
                                        n = e[o ? o[s++] : s++]
                                    }
                                    for (; s < a; s++) r = o ? o[s] : s, n = t(n, e[r], r, e);
                                    return n
                                }, p.reduceRight = p.foldr = function(e, t, n, i) {
                                    null == e && (e = []), t = l(t, i, 4);
                                    var r, o = e.length !== +e.length && p.keys(e),
                                        a = (o || e).length;
                                    if (arguments.length < 3) {
                                        if (!a) throw new TypeError(h);
                                        n = e[o ? o[--a] : --a]
                                    }
                                    for (; a--;) r = o ? o[a] : a, n = t(n, e[r], r, e);
                                    return n
                                }, p.find = p.detect = function(e, i, t) {
                                    var r;
                                    return i = p.iteratee(i, t), p.some(e, function(e, t, n) {
                                        if (i(e, t, n)) return r = e, !0
                                    }), r
                                }, p.filter = p.select = function(e, i, t) {
                                    var r = [];
                                    return null != e && (i = p.iteratee(i, t), p.each(e, function(e, t, n) {
                                        i(e, t, n) && r.push(e)
                                    })), r
                                }, p.reject = function(e, t, n) {
                                    return p.filter(e, p.negate(p.iteratee(t)), n)
                                }, p.every = p.all = function(e, t, n) {
                                    if (null != e) {
                                        t = p.iteratee(t, n);
                                        for (var i, r = e.length !== +e.length && p.keys(e), o = (r || e).length, a = 0; a < o; a++)
                                            if (!t(e[i = r ? r[a] : a], i, e)) return !1
                                    }
                                    return !0
                                }, p.some = p.any = function(e, t, n) {
                                    if (null != e) {
                                        t = p.iteratee(t, n);
                                        for (var i, r = e.length !== +e.length && p.keys(e), o = (r || e).length, a = 0; a < o; a++)
                                            if (t(e[i = r ? r[a] : a], i, e)) return !0
                                    }
                                    return !1
                                }, p.contains = p.include = function(e, t) {
                                    return null != e && (e.length !== +e.length && (e = p.values(e)), 0 <= p.indexOf(e, t))
                                }, p.invoke = function(e, t) {
                                    var n = d.call(arguments, 2),
                                        i = p.isFunction(t);
                                    return p.map(e, function(e) {
                                        return (i ? t : e[t]).apply(e, n)
                                    })
                                }, p.pluck = function(e, t) {
                                    return p.map(e, p.property(t))
                                }, p.where = function(e, t) {
                                    return p.filter(e, p.matches(t))
                                }, p.findWhere = function(e, t) {
                                    return p.find(e, p.matches(t))
                                }, p.max = function(e, i, t) {
                                    var n, r, o = -Infinity,
                                        a = -Infinity;
                                    if (null == i && null != e)
                                        for (var s = 0, u = (e = e.length === +e.length ? e : p.values(e)).length; s < u; s++) n = e[s], o < n && (o = n);
                                    else i = p.iteratee(i, t), p.each(e, function(e, t, n) {
                                        r = i(e, t, n), (a < r || r === -Infinity && o === -Infinity) && (o = e, a = r)
                                    });
                                    return o
                                }, p.min = function(e, i, t) {
                                    var n, r, o = Infinity,
                                        a = Infinity;
                                    if (null == i && null != e)
                                        for (var s = 0, u = (e = e.length === +e.length ? e : p.values(e)).length; s < u; s++)(n = e[s]) < o && (o = n);
                                    else i = p.iteratee(i, t), p.each(e, function(e, t, n) {
                                        ((r = i(e, t, n)) < a || r === Infinity && o === Infinity) && (o = e, a = r)
                                    });
                                    return o
                                }, p.shuffle = function(e) {
                                    for (var t, n = e && e.length === +e.length ? e : p.values(e), i = n.length, r = Array(i), o = 0; o < i; o++)(t = p.random(0, o)) !== o && (r[o] = r[t]), r[t] = n[o];
                                    return r
                                }, p.sample = function(e, t, n) {
                                    return null == t || n ? (e = e.length !== +e.length ? p.values(e) : e)[p.random(e.length - 1)] : p.shuffle(e).slice(0, Math.max(0, t))
                                }, p.sortBy = function(e, i, t) {
                                    return i = p.iteratee(i, t), p.pluck(p.map(e, function(e, t, n) {
                                        return {
                                            value: e,
                                            index: t,
                                            criteria: i(e, t, n)
                                        }
                                    }).sort(function(e, t) {
                                        var n = e.criteria,
                                            i = t.criteria;
                                        if (n !== i) {
                                            if (i < n || void 0 === n) return 1;
                                            if (n < i || void 0 === i) return -1
                                        }
                                        return e.index - t.index
                                    }), "value")
                                }, function(o) {
                                    return function(n, i, e) {
                                        var r = {};
                                        return i = p.iteratee(i, e), p.each(n, function(e, t) {
                                            t = i(e, t, n);
                                            o(r, e, t)
                                        }), r
                                    }
                                }),
                                g = (p.groupBy = r(function(e, t, n) {
                                    p.has(e, n) ? e[n].push(t) : e[n] = [t]
                                }), p.indexBy = r(function(e, t, n) {
                                    e[n] = t
                                }), p.countBy = r(function(e, t, n) {
                                    p.has(e, n) ? e[n]++ : e[n] = 1
                                }), p.sortedIndex = function(e, t, n, i) {
                                    for (var r = (n = p.iteratee(n, i, 1))(t), o = 0, a = e.length; o < a;) {
                                        var s = o + a >>> 1;
                                        n(e[s]) < r ? o = 1 + s : a = s
                                    }
                                    return o
                                }, p.toArray = function(e) {
                                    return e ? p.isArray(e) ? d.call(e) : e.length === +e.length ? p.map(e, p.identity) : p.values(e) : []
                                }, p.size = function(e) {
                                    return null == e ? 0 : (e.length === +e.length ? e : p.keys(e)).length
                                }, p.partition = function(e, i, t) {
                                    i = p.iteratee(i, t);
                                    var r = [],
                                        o = [];
                                    return p.each(e, function(e, t, n) {
                                        (i(e, t, n) ? r : o).push(e)
                                    }), [r, o]
                                }, p.first = p.head = p.take = function(e, t, n) {
                                    if (null != e) return null == t || n ? e[0] : t < 0 ? [] : d.call(e, 0, t)
                                }, p.initial = function(e, t, n) {
                                    return d.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
                                }, p.last = function(e, t, n) {
                                    if (null != e) return null == t || n ? e[e.length - 1] : d.call(e, Math.max(e.length - t, 0))
                                }, p.rest = p.tail = p.drop = function(e, t, n) {
                                    return d.call(e, null == t || n ? 1 : t)
                                }, p.compact = function(e) {
                                    return p.filter(e, p.identity)
                                }, function(e, t, n, i) {
                                    if (t && p.every(e, p.isArray)) return c.apply(i, e);
                                    for (var r = 0, o = e.length; r < o; r++) {
                                        var a = e[r];
                                        p.isArray(a) || p.isArguments(a) ? t ? s.apply(i, a) : g(a, t, n, i) : n || i.push(a)
                                    }
                                    return i
                                }),
                                m = (p.flatten = function(e, t) {
                                    return g(e, t, !1, [])
                                }, p.without = function(e) {
                                    return p.difference(e, d.call(arguments, 1))
                                }, p.uniq = p.unique = function(e, t, n, i) {
                                    if (null == e) return [];
                                    p.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = p.iteratee(n, i));
                                    for (var r = [], o = [], a = 0, s = e.length; a < s; a++) {
                                        var u, d = e[a];
                                        t ? (a && o === d || r.push(d), o = d) : n ? (u = n(d, a, e), p.indexOf(o, u) < 0 && (o.push(u), r.push(d))) : p.indexOf(r, d) < 0 && r.push(d)
                                    }
                                    return r
                                }, p.union = function() {
                                    return p.uniq(g(arguments, !0, !0, []))
                                }, p.intersection = function(e) {
                                    if (null == e) return [];
                                    for (var t = [], n = arguments.length, i = 0, r = e.length; i < r; i++) {
                                        var o = e[i];
                                        if (!p.contains(t, o)) {
                                            for (var a = 1; a < n && p.contains(arguments[a], o); a++);
                                            a === n && t.push(o)
                                        }
                                    }
                                    return t
                                }, p.difference = function(e) {
                                    var t = g(d.call(arguments, 1), !0, !0, []);
                                    return p.filter(e, function(e) {
                                        return !p.contains(t, e)
                                    })
                                }, p.zip = function(e) {
                                    if (null == e) return [];
                                    for (var t = p.max(arguments, "length").length, n = Array(t), i = 0; i < t; i++) n[i] = p.pluck(arguments, i);
                                    return n
                                }, p.object = function(e, t) {
                                    if (null == e) return {};
                                    for (var n = {}, i = 0, r = e.length; i < r; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
                                    return n
                                }, p.indexOf = function(e, t, n) {
                                    if (null != e) {
                                        var i = 0,
                                            r = e.length;
                                        if (n) {
                                            if ("number" != typeof n) return e[i = p.sortedIndex(e, t)] === t ? i : -1;
                                            i = n < 0 ? Math.max(0, r + n) : n
                                        }
                                        for (; i < r; i++)
                                            if (e[i] === t) return i
                                    }
                                    return -1
                                }, p.lastIndexOf = function(e, t, n) {
                                    if (null != e) {
                                        var i = e.length;
                                        for ("number" == typeof n && (i = n < 0 ? i + n + 1 : Math.min(i, n + 1)); 0 <= --i;)
                                            if (e[i] === t) return i
                                    }
                                    return -1
                                }, p.range = function(e, t, n) {
                                    arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
                                    for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; o < i; o++, e += n) r[o] = e;
                                    return r
                                }, function() {}),
                                v = (p.bind = function(n, i) {
                                    var r, o;
                                    if (u && n.bind === u) return u.apply(n, d.call(arguments, 1));
                                    if (p.isFunction(n)) return r = d.call(arguments, 2), o = function() {
                                        if (!(this instanceof o)) return n.apply(i, r.concat(d.call(arguments)));
                                        m.prototype = n.prototype;
                                        var e = new m,
                                            t = (m.prototype = null, n.apply(e, r.concat(d.call(arguments))));
                                        return p.isObject(t) ? t : e
                                    };
                                    throw new TypeError("Bind must be called on a function")
                                }, p.partial = function(r) {
                                    var o = d.call(arguments, 1);
                                    return function() {
                                        for (var e = 0, t = o.slice(), n = 0, i = t.length; n < i; n++) t[n] === p && (t[n] = arguments[e++]);
                                        for (; e < arguments.length;) t.push(arguments[e++]);
                                        return r.apply(this, t)
                                    }
                                }, p.bindAll = function(e) {
                                    var t, n, i = arguments.length;
                                    if (i <= 1) throw new Error("bindAll must be passed function names");
                                    for (t = 1; t < i; t++) e[n = arguments[t]] = p.bind(e[n], e);
                                    return e
                                }, p.memoize = function(i, r) {
                                    var o = function(e) {
                                        var t = o.cache,
                                            n = r ? r.apply(this, arguments) : e;
                                        return p.has(t, n) || (t[n] = i.apply(this, arguments)), t[n]
                                    };
                                    return o.cache = {}, o
                                }, p.delay = function(e, t) {
                                    var n = d.call(arguments, 2);
                                    return setTimeout(function() {
                                        return e.apply(null, n)
                                    }, t)
                                }, p.defer = function(e) {
                                    return p.delay.apply(p, [e, 1].concat(d.call(arguments, 1)))
                                }, p.throttle = function(n, i, r) {
                                    var o, a, s, u = null,
                                        d = 0,
                                        c = (r = r || {}, function() {
                                            d = !1 === r.leading ? 0 : p.now(), u = null, s = n.apply(o, a), u || (o = a = null)
                                        });
                                    return function() {
                                        var e = p.now(),
                                            t = (d || !1 !== r.leading || (d = e), i - (e - d));
                                        return o = this, a = arguments, t <= 0 || i < t ? (clearTimeout(u), u = null, d = e, s = n.apply(o, a), u || (o = a = null)) : u || !1 === r.trailing || (u = setTimeout(c, t)), s
                                    }
                                }, p.debounce = function(t, n, i) {
                                    var r, o, a, s, u, d = function() {
                                        var e = p.now() - s;
                                        e < n && 0 < e ? r = setTimeout(d, n - e) : (r = null, i || (u = t.apply(a, o), r || (a = o = null)))
                                    };
                                    return function() {
                                        a = this, o = arguments, s = p.now();
                                        var e = i && !r;
                                        return r = r || setTimeout(d, n), e && (u = t.apply(a, o), a = o = null), u
                                    }
                                }, p.wrap = function(e, t) {
                                    return p.partial(t, e)
                                }, p.negate = function(e) {
                                    return function() {
                                        return !e.apply(this, arguments)
                                    }
                                }, p.compose = function() {
                                    var n = arguments,
                                        i = n.length - 1;
                                    return function() {
                                        for (var e = i, t = n[i].apply(this, arguments); e--;) t = n[e].call(this, t);
                                        return t
                                    }
                                }, p.after = function(e, t) {
                                    return function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                                }, p.before = function(e, t) {
                                    var n;
                                    return function() {
                                        return 0 < --e ? n = t.apply(this, arguments) : t = null, n
                                    }
                                }, p.once = p.partial(p.before, 2), p.keys = function(e) {
                                    if (!p.isObject(e)) return [];
                                    if (a) return a(e);
                                    var t, n = [];
                                    for (t in e) p.has(e, t) && n.push(t);
                                    return n
                                }, p.values = function(e) {
                                    for (var t = p.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = e[t[r]];
                                    return i
                                }, p.pairs = function(e) {
                                    for (var t = p.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = [t[r], e[t[r]]];
                                    return i
                                }, p.invert = function(e) {
                                    for (var t = {}, n = p.keys(e), i = 0, r = n.length; i < r; i++) t[e[n[i]]] = n[i];
                                    return t
                                }, p.functions = p.methods = function(e) {
                                    var t, n = [];
                                    for (t in e) p.isFunction(e[t]) && n.push(t);
                                    return n.sort()
                                }, p.extend = function(e) {
                                    if (p.isObject(e))
                                        for (var t, n, i = 1, r = arguments.length; i < r; i++)
                                            for (n in t = arguments[i]) o.call(t, n) && (e[n] = t[n]);
                                    return e
                                }, p.pick = function(e, t, n) {
                                    var i, r = {};
                                    if (null != e)
                                        if (p.isFunction(t))
                                            for (i in t = l(t, n), e) {
                                                var o = e[i];
                                                t(o, i, e) && (r[i] = o)
                                            } else {
                                                var a = c.apply([], d.call(arguments, 1));
                                                e = new Object(e);
                                                for (var s = 0, u = a.length; s < u; s++)(i = a[s]) in e && (r[i] = e[i])
                                            }
                                    return r
                                }, p.omit = function(e, t, n) {
                                    var i;
                                    return t = p.isFunction(t) ? p.negate(t) : (i = p.map(c.apply([], d.call(arguments, 1)), String), function(e, t) {
                                        return !p.contains(i, t)
                                    }), p.pick(e, t, n)
                                }, p.defaults = function(e) {
                                    if (p.isObject(e))
                                        for (var t = 1, n = arguments.length; t < n; t++) {
                                            var i, r = arguments[t];
                                            for (i in r) void 0 === e[i] && (e[i] = r[i])
                                        }
                                    return e
                                }, p.clone = function(e) {
                                    return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({}, e) : e
                                }, p.tap = function(e, t) {
                                    return t(e), e
                                }, function(e, t, n, i) {
                                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                                    if (null == e || null == t) return e === t;
                                    e instanceof p && (e = e._wrapped), t instanceof p && (t = t._wrapped);
                                    var r = f.call(e);
                                    if (r !== f.call(t)) return !1;
                                    switch (r) {
                                        case "[object RegExp]":
                                        case "[object String]":
                                            return "" + e == "" + t;
                                        case "[object Number]":
                                            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                                        case "[object Date]":
                                        case "[object Boolean]":
                                            return +e == +t
                                    }
                                    if ("object" != typeof e || "object" != typeof t) return !1;
                                    for (var o = n.length; o--;)
                                        if (n[o] === e) return i[o] === t;
                                    var a = e.constructor,
                                        s = t.constructor;
                                    if (a !== s && "constructor" in e && "constructor" in t && !(p.isFunction(a) && a instanceof a && p.isFunction(s) && s instanceof s)) return !1;
                                    if (n.push(e), i.push(t), "[object Array]" === r) {
                                        if (d = (l = e.length) === t.length)
                                            for (; l-- && (d = v(e[l], t[l], n, i)););
                                    } else {
                                        var u, d, c = p.keys(e),
                                            l = c.length;
                                        if (d = p.keys(t).length === l)
                                            for (; l-- && (u = c[l], d = p.has(t, u) && v(e[u], t[u], n, i)););
                                    }
                                    return n.pop(), i.pop(), d
                                }),
                                r = (p.isEqual = function(e, t) {
                                    return v(e, t, [], [])
                                }, p.isEmpty = function(e) {
                                    if (null != e) {
                                        if (p.isArray(e) || p.isString(e) || p.isArguments(e)) return 0 === e.length;
                                        for (var t in e)
                                            if (p.has(e, t)) return !1
                                    }
                                    return !0
                                }, p.isElement = function(e) {
                                    return !(!e || 1 !== e.nodeType)
                                }, p.isArray = n || function(e) {
                                    return "[object Array]" === f.call(e)
                                }, p.isObject = function(e) {
                                    var t = typeof e;
                                    return "function" == t || "object" == t && !!e
                                }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
                                    p["is" + t] = function(e) {
                                        return f.call(e) === "[object " + t + "]"
                                    }
                                }), p.isArguments(arguments) || (p.isArguments = function(e) {
                                    return p.has(e, "callee")
                                }), "function" != typeof /./ && (p.isFunction = function(e) {
                                    return "function" == typeof e || !1
                                }), p.isFinite = function(e) {
                                    return isFinite(e) && !isNaN(parseFloat(e))
                                }, p.isNaN = function(e) {
                                    return p.isNumber(e) && e !== +e
                                }, p.isBoolean = function(e) {
                                    return !0 === e || !1 === e || "[object Boolean]" === f.call(e)
                                }, p.isNull = function(e) {
                                    return null === e
                                }, p.isUndefined = function(e) {
                                    return void 0 === e
                                }, p.has = function(e, t) {
                                    return null != e && o.call(e, t)
                                }, p.noConflict = function() {
                                    return e._ = t, this
                                }, p.identity = function(e) {
                                    return e
                                }, p.constant = function(e) {
                                    return function() {
                                        return e
                                    }
                                }, p.noop = function() {}, p.property = function(t) {
                                    return function(e) {
                                        return e[t]
                                    }
                                }, p.matches = function(e) {
                                    var r = p.pairs(e),
                                        o = r.length;
                                    return function(e) {
                                        if (null == e) return !o;
                                        e = new Object(e);
                                        for (var t = 0; t < o; t++) {
                                            var n = r[t],
                                                i = n[0];
                                            if (n[1] !== e[i] || !(i in e)) return !1
                                        }
                                        return !0
                                    }
                                }, p.times = function(e, t, n) {
                                    var i = Array(Math.max(0, e));
                                    t = l(t, n, 1);
                                    for (var r = 0; r < e; r++) i[r] = t(r);
                                    return i
                                }, p.random = function(e, t) {
                                    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                                }, p.now = Date.now || function() {
                                    return (new Date).getTime()
                                }, {
                                    "&": "&amp;",
                                    "<": "&lt;",
                                    ">": "&gt;",
                                    '"': "&quot;",
                                    "'": "&#x27;",
                                    "`": "&#x60;"
                                }),
                                n = p.invert(r),
                                y = function(t) {
                                    var n = function(e) {
                                            return t[e]
                                        },
                                        e = "(?:" + p.keys(t).join("|") + ")",
                                        i = RegExp(e),
                                        r = RegExp(e, "g");
                                    return function(e) {
                                        return i.test(e = null == e ? "" : "" + e) ? e.replace(r, n) : e
                                    }
                                },
                                b = (p.escape = y(r), p.unescape = y(n), p.result = function(e, t) {
                                    var n;
                                    if (null != e) return n = e[t], p.isFunction(n) ? e[t]() : n
                                }, 0),
                                w = (p.uniqueId = function(e) {
                                    var t = ++b + "";
                                    return e ? e + t : t
                                }, p.templateSettings = {
                                    evaluate: /<%([\s\S]+?)%>/g,
                                    interpolate: /<%=([\s\S]+?)%>/g,
                                    escape: /<%-([\s\S]+?)%>/g
                                }, /(.)^/),
                                I = {
                                    "'": "'",
                                    "\\": "\\",
                                    "\r": "r",
                                    "\n": "n",
                                    "\u2028": "u2028",
                                    "\u2029": "u2029"
                                },
                                S = /\\|'|\r|\n|\u2028|\u2029/g,
                                x = function(e) {
                                    return "\\" + I[e]
                                },
                                C = (p.template = function(o, e, t) {
                                    e = p.defaults({}, e = !e && t ? t : e, p.templateSettings);
                                    var t = RegExp([(e.escape || w).source, (e.interpolate || w).source, (e.evaluate || w).source].join("|") + "|$", "g"),
                                        a = 0,
                                        s = "__p+='";
                                    o.replace(t, function(e, t, n, i, r) {
                                        return s += o.slice(a, r).replace(S, x), a = r + e.length, t ? s += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : n ? s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (s += "';\n" + i + "\n__p+='"), e
                                    }), s += "';\n", s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + (s = e.variable ? s : "with(obj||{}){\n" + s + "}\n") + "return __p;\n";
                                    try {
                                        var n = new Function(e.variable || "obj", "_", s)
                                    } catch (Ce) {
                                        throw Ce.source = s, Ce
                                    }
                                    t = function(e) {
                                        return n.call(this, e, p)
                                    }, e = e.variable || "obj";
                                    return t.source = "function(" + e + "){\n" + s + "}", t
                                }, p.chain = function(e) {
                                    e = p(e);
                                    return e._chain = !0, e
                                }, function(e) {
                                    return this._chain ? p(e).chain() : e
                                });
                            p.mixin = function(n) {
                                p.each(p.functions(n), function(e) {
                                    var t = p[e] = n[e];
                                    p.prototype[e] = function() {
                                        var e = [this._wrapped];
                                        return s.apply(e, arguments), C.call(this, t.apply(p, e))
                                    }
                                })
                            }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                                var n = i[t];
                                p.prototype[t] = function() {
                                    var e = this._wrapped;
                                    return n.apply(e, arguments), "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0], C.call(this, e)
                                }
                            }), p.each(["concat", "join", "slice"], function(e) {
                                var t = i[e];
                                p.prototype[e] = function() {
                                    return C.call(this, t.apply(this._wrapped, arguments))
                                }
                            }), p.prototype.value = function() {
                                return this._wrapped
                            }, "function" == typeof qv && qv.amd && qv("underscore", [], function() {
                                return p
                            })
                        }.call(T)
                    }(ve, ve.exports), ve.exports),
                ye;

            function I(e) {
                return !(null == e)
            }

            function D(e, t, n) {
                if (U.isString(t)) {
                    if (I(e) && I(e[t])) return e[t];
                    for (var i = t.split("."), r = 0, o = i.length; r < o; ++r) {
                        if (!I(e)) return n;
                        e = e[i[r]]
                    }
                    return I(e) ? e : n
                }
                return n
            }

            function be(e) {
                return U.isFunction(e) || U.isRegExp(e) ? e : U.isArray(e) ? U.map(e, be) : U.isObject(e) ? U.reduce(e, function(e, t, n) {
                    return e[n] = be(t), e
                }, {}) : e
            }
            var y = function() {
                    var i = U.all,
                        r = U.each,
                        o = U.filter,
                        a = U.first,
                        s = U.find,
                        n = U.map,
                        u = U.pluck,
                        d = "snippet",
                        c = "pendoconfig",
                        l = "global",
                        f = "default";

                    function e(e, t, n, i) {
                        e = {
                            name: e,
                            defaultValue: n,
                            supportedSources: t = null == t ? [c] : t
                        };
                        return null != i && (e.useAnySource = i), e
                    }
                    var t = [e("preventCodeInjection", [c, d, l], !1), e("pendoCore", [c], !0), e("apiKey", [c, d]), e("additionalApiKeys", [c, d]), e("adoptPrioritizeAdoptGuides", [c], !1), e("enableDesignerKeyboardShortcut", [d]), e("disableDesignerKeyboardShortcut", [c], !1), e("pendoFeedback", [c], !1), e("disableFeedback", [d]), e("disableFeedbackAutoInit"), e("cookieDomain", [d, c]), e("feedbackSettings"), e("htmlAttributes"), e("htmlAttributeBlacklist"), e("eventPropertyConfigurations"), e("xhrTimings"), e("localStorageOnly", [d, c]), e("disableCookies", [d, c]), e("freeNPSData"), e("feedbackSettings", [c], {}), e("contentHost", [d, c]), e("guideSeenTimeoutLength", [c, d], 1e4), e("disableGlobalCSS", [d, c], !1), e("disablePersistence", [c, d]), e("enableSignedMetadata", [c], !1), e("requireSignedMetadata", [c], !1), e("guideValidation", [d, c], !1), e("enableGuideTimeout", [c, d], !1), e("autoFrameInstall", [d, c], !1), e("frameIdentitySync", [d, c], !1), e("blockAgentMetadata", [c], !1), e("promotedAgentMetadataConfigurations", [c]), e("adoptHost"), e("allowedText", [d, c], []), e("excludeAllText", [c, d], !1, !0), e("dataHost", [c, d]), e("ignoreHashRouting", [c, d]), e("xhrWhitelist"), e("preferBroadcastChannel", [d, c], !1), e("preferMutationObserver", [d, c], !1), e("preventUnloadListener", [d, c], !1), e("guideValidation", [d, c], !1), e("disableGuidePseudoStyles", [d, c], !1), e("annotateUrl", [d]), e("sanitizeUrl", [d]), e("queryStringWhitelist", [d]), e("delayGuides", [d]), e("guides.delay", [d]), e("guideTimeout", [d]), e("guides.timeout", [d]), e("disableGuides", [d]), e("guides.disabled", [d]), e("guides.tooltip.arrowSize", [d]), e("guides.attachPoint", [d]), e("guides.globalScripts", [d, c]), e("disablePrefetch", [d, c]), e("initializeImmediately", [d, c], !1), e("disableAutoInitialize"), e("enableDebugEvents", [d, c]), e("previewModeAssetPath"), e("installType"), e("designerAgentPluginsLoader"), e("trainingPartner"), e("guideCssAssetPath"), e("forceParentDesigner", [d]), e("siblingSelectors"), e("allowedOriginServers"), e("selfHosted"), e("selfHostedAgentUrl", [d, c]), e("interceptElementRemoval", [c, d], !1), e("excludeNonGuideAnalytics", [c], !1), e("eventPropertyMatchParents", [d, c], !0)],
                        p = {
                            snippet: function() {
                                return {
                                    lookup: ye || Wv.pendo_options,
                                    name: d
                                }
                            },
                            pendoconfig: function() {
                                return {
                                    lookup: he(),
                                    name: c
                                }
                            },
                            global: function() {
                                return {
                                    lookup: G,
                                    name: l
                                }
                            }
                        },
                        h = U.partial(function(e, t) {
                            return t[e] || {
                                name: e
                            }
                        }, U, U.indexBy(t, "name"));

                    function g(e, t) {
                        if (t) return I(e = D(t().lookup, D(t = e, "key") || D(t, "name"))) ? e : qv
                    }

                    function m(e, t) {
                        var n = g(e, p[t]);
                        return new b(e.name, n, t)
                    }

                    function v(e, t) {
                        return t = t || D(e, "supportedSources", [d, c, l]), o(n(t, U.partial(m, e)), function(e) {
                            return I(e.value)
                        })
                    }

                    function y(e, t, n) {
                        var i = h(e),
                            e = new b(e, t = t || D(i, "defaultValue", null), f),
                            n = v(i, n);
                        return i.useAnySource && I(t) ? s(n, function(e) {
                            return e.value !== t
                        }) || e : a(n) || e
                    }

                    function b(e, t, n) {
                        this.name = e, this.value = t, this.source = n
                    }

                    function w() {
                        var n = [];
                        return r(t, function(e) {
                            var t;
                            n.push({
                                name: e.name,
                                active: y(e.name),
                                conflicts: (e = e.name, e = h(e), (t = o(v(e), function(e) {
                                    return e.source !== f
                                })).length < 2 || i(u(t, "value"), function(e) {
                                    return e === t[0].value
                                }) ? [] : t)
                            })
                        }), n
                    }
                    return b.prototype.toString = function() {
                        return "Config option `" + this.name + "` with value `" + this.value + "` from source `" + this.source + "`"
                    }, {
                        audit: w,
                        get: function(e, t) {
                            return y(e, t).value
                        },
                        getLocalConfig: function(e, t) {
                            return arguments.length ? y(e, t, [d]).value : be(ye)
                        },
                        getHostedConfig: function(e, t) {
                            return y(e, t, [c]).value
                        },
                        setLocalConfig: function(e) {
                            ye = e
                        },
                        options: u(t, "name"),
                        validate: function(t) {
                            t.groupCollapsed("Validate Config options"), r(w(), function(e) {
                                t.log(String(e.active)), 0 < e.conflicts.length && (t.warn("Multiple sources found with values for " + e.name), r(e.conflicts, function(e) {
                                    t.warn(String(e))
                                }))
                            }), t.groupEnd()
                        }
                    }
                }(),
                we = "prod",
                Ie = "extension",
                Se = "native";

            function xe() {
                return y.get("installType") || Se
            }

            function Ee(e) {
                return e === we ? "pendo-static" : _e(e)
            }

            function _e(e) {
                var t;
                return e === we ? "pendo-io-static" : "pendo-" + ((t = /^prod-(.+)$/.exec(e)) && 1 < t.length ? t[1] : e) + "-static"
            }
            var Te = function(e, t) {
                    return e = e || 10, (t = !isNaN(Ae) && (!t || Ae < t)) && u < e
                },
                u, Ae;

            function Re(e) {
                return parseInt(e, 10)
            }
            var ke = function(e) {
                return U.isString(e) ? e.toLowerCase() : e
            };

            function Oe(e) {
                return !(!isNaN(this.msie) && null != this.msie) || this.msie >= e
            }

            function Ne() {
                return (Wv.navigator || {}).userAgent
            }
            var Le = function(e) {
                    var t = Re((/msie (\d+)/.exec(ke(e)) || [])[1]);
                    return t = isNaN(t) ? Re((/trident\/.*; rv:(\d+)/.exec(ke(e)) || [])[1]) : t
                },
                u = Le(Ne()),
                Me = function(e, t) {
                    e = Re((/trident\/(\d+)/.exec(ke(e)) || [])[1]);
                    return e = isNaN(e) && 7 == t ? 3 : e
                };

            function Fe(e) {
                return /native/.test(e)
            }
            var Ae = Me(Ne(), u),
                Pe = {},
                Be = Re((/android (\d+)/.exec(ke(Ne())) || [])[1]),
                Ge = /Boxee/i.test(Ne()),
                Ue = Wv.document || {},
                De = Ue.documentMode,
                He, ze = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                je = Ue.body && Ue.body.style,
                We = !1,
                Je = !1,
                qe;
            if (je) {
                for (var Ke in je)
                    if (qe = ze.exec(Ke), qe) {
                        He = qe[0], He = He.substr(0, 1).toUpperCase() + He.substr(1);
                        break
                    }
                He = He || "WebkitOpacity" in je && "webkit", We = !!("transition" in je || He + "Transition" in je), Je = !!("animation" in je || He + "Animation" in je), !Be || We && Je || (We = U.isString(Ue.body.style.webkitTransition), Je = U.isString(Ue.body.style.webkitAnimation))
            }
            var Ve = U.memoize(function Ve() {
                var e = Wv.history && Wv.history.pushState && Wv.history.replaceState,
                    t = !(Be < 4),
                    n = xe() === Ie;
                return !(!e || !t || Ge || n)
            });

            function Ze() {
                var e = "onhashchange" in Wv,
                    t = !De || 7 < De,
                    n = xe() === Ie;
                return !(!e || !t || n)
            }

            function $e() {
                return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(Ne())
            }
            var b = {
                    supportsHistoryApi: Ve,
                    supportsHashChange: Ze,
                    hasEvent: function(e) {
                        var t;
                        return ("input" != e || 9 != u) && (U.isUndefined(Pe[e]) && (t = Ue.createElement("div"), Pe[e] = "on" + e in t), Pe[e])
                    },
                    vendorPrefix: He,
                    transitions: We,
                    animations: Je,
                    android: Be,
                    msie: u,
                    msieDocumentMode: De,
                    safari: /apple/i.test(navigator.vendor),
                    sri: "integrity" in Jv.createElement("script"),
                    addEventListener: U.isFunction(Wv.addEventListener),
                    MutationObserver: Fe(Wv.MutationObserver),
                    isMinimumIEVersion: Oe,
                    isMobileUserAgent: $e
                },
                Ye = function() {
                    return !isNaN(u) && (11 != u && "CSS1Compat" !== Jv.compatMode)
                },
                Xe = function(e, t) {
                    var n, i = e.height,
                        r = e.width;
                    return "top" == e.arrowPosition || "bottom" == e.arrowPosition ? (n = 0, "top" == e.arrowPosition ? (e.top = t.top + t.height, n = -1, e.arrow.top = 3, u <= 9 && (e.arrow.top = 6)) : "bottom" == e.arrowPosition && (e.top = t.top - (i + G.TOOLTIP_ARROW_SIZE), e.arrow.top = i - G.TOOLTIP_ARROW_SIZE, 10 == u ? e.arrow.top-- : u <= 9 && (e.arrow.top += 4), n = 1), "left" == e.arrow.hbias ? (e.left = t.left + t.width / 2 - (10 + 2 * G.TOOLTIP_ARROW_SIZE), e.arrow.left = 10 + G.TOOLTIP_ARROW_SIZE) : "right" == e.arrow.hbias ? (e.left = t.left - r + t.width / 2 + (10 + 2 * G.TOOLTIP_ARROW_SIZE), e.arrow.left = r - 3 * G.TOOLTIP_ARROW_SIZE - 10) : (e.left = t.left + t.width / 2 - r / 2, e.arrow.left = r / 2 - G.TOOLTIP_ARROW_SIZE), e.arrow.border.top = e.arrow.top + n, e.arrow.border.left = e.arrow.left) : ("left" == e.arrow.hbias ? (e.left = t.left + t.width, e.arrow.left = 1, e.arrow.left += 5, e.arrow.border.left = e.arrow.left - 1) : "right" == e.arrow.hbias && (e.left = Math.max(0, t.left - r - G.TOOLTIP_ARROW_SIZE), e.arrow.left = r - G.TOOLTIP_ARROW_SIZE - 1, e.arrow.left += 5, e.arrow.border.left = e.arrow.left + 1), e.top = t.top + t.height / 2 - i / 2, e.arrow.top = i / 2 - G.TOOLTIP_ARROW_SIZE, e.arrow.border.top = e.arrow.top), e
                },
                Qe = "prod",
                et = "https://app.pendo.io",
                tt = "cdn.pendo.io",
                nt = "prod",
                it = "2.158.0_prod",
                rt = "2.158.0",
                ot = function() {
                    return Ye() ? it + "+quirksmode" : it
                },
                at = function() {
                    Qe = me("env") || Qe, et = me("server") || et, tt = me("assetHost") || tt, nt = me("designerEnv") || nt, it = rt + "_" + Qe
                };

            function st() {
                return -1 !== Qe.indexOf("prod")
            }

            function ut(e, t) {
                return !/prod/.test(e) || te(t)
            }
            var w = Wv.JSON;

            function dt(e, n) {
                var i = -1;
                return U.find(e, function(e, t) {
                    if (n(e, t)) return i = t, !0
                }), i
            }
            w && "function" == typeof w.stringify && '{"props":{}}' === w.stringify({
                props: {}
            }) || (w = {}), ! function() {
                function t(e) {
                    return e < 10 ? "0" + e : e
                }
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + t(this.getUTCMonth() + 1) + "-" + t(this.getUTCDate()) + "T" + t(this.getUTCHours()) + ":" + t(this.getUTCMinutes()) + ":" + t(this.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
                    return this.valueOf()
                });
                var n = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    d, c, r = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    l;

                function f(e) {
                    return i.lastIndex = 0, i.test(e) ? '"' + e.replace(i, function(e) {
                        var t = r[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function p(e, t) {
                    var n, i, r, o, a, s = d,
                        u = t[e];
                    switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)), typeof(u = "function" == typeof l ? l.call(t, e, u) : u)) {
                        case "string":
                            return f(u);
                        case "number":
                            return isFinite(u) ? String(u) : "null";
                        case "boolean":
                        case "null":
                            return String(u);
                        case "object":
                            if (!u) return "null";
                            if (d += c, a = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                                for (o = u.length, n = 0; n < o; n += 1) a[n] = p(n, u) || "null";
                                r = 0 === a.length ? "[]" : d ? "[\n" + d + a.join(",\n" + d) + "\n" + s + "]" : "[" + a.join(",") + "]"
                            } else {
                                if (l && "object" == typeof l)
                                    for (o = l.length, n = 0; n < o; n += 1) "string" == typeof l[n] && (r = p(i = l[n], u)) && a.push(f(i) + (d ? ": " : ":") + r);
                                else
                                    for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (r = p(i, u)) && a.push(f(i) + (d ? ": " : ":") + r);
                                r = 0 === a.length ? "{}" : d ? "{\n" + d + a.join(",\n" + d) + "\n" + s + "}" : "{" + a.join(",") + "}"
                            }
                            return d = s, r
                    }
                }
                "function" != typeof w.stringify && (w.stringify = function(e, t, n) {
                    var i;
                    if (c = d = "", "number" == typeof n)
                        for (i = 0; i < n; i += 1) c += " ";
                    else "string" == typeof n && (c = n);
                    if (!(l = t) || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return p("", {
                        "": e
                    });
                    throw new Error("JSON.stringify")
                }), "function" != typeof w.parse && (w.parse = function(e, o) {
                    var t;

                    function a(e, t) {
                        var n, i, r = e[t];
                        if (r && "object" == typeof r)
                            for (n in r) Object.prototype.hasOwnProperty.call(r, n) && ((i = a(r, n)) !== qv ? r[n] = i : delete r[n]);
                        return o.call(e, t, r)
                    }
                    if (e = String(e), n.lastIndex = 0, n.test(e) && (e = e.replace(n, function(e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })), /^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return t = eval("(" + e + ")"), "function" == typeof o ? a({
                        "": t
                    }, "") : t;
                    throw new SyntaxError("JSON.parse")
                })
            }();
            var ct = /^\s+|\s+$/g,
                lt = String.prototype.trim,
                lt = lt || function() {
                    return this.replace(ct, "")
                },
                ft = {
                    exports: {}
                },
                pt = (! function() {
                    "use strict";
                    var X = void 0,
                        Q = !0,
                        o = this;

                    function e(e, t) {
                        var n, i = e.split("."),
                            r = o;
                        i[0] in r || !r.execScript || r.execScript("var " + i[0]);
                        for (; i.length && (n = i.shift());) i.length || t === X ? r = r[n] || (r[n] = {}) : r[n] = t
                    }
                    var ee = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;

                    function te(e, t) {
                        if (this.index = "number" == typeof t ? t : 0, this.e = 0, this.buffer = e instanceof(ee ? Uint8Array : Array) ? e : new(ee ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index) throw Error("invalid index");
                        this.buffer.length <= this.index && u(this)
                    }

                    function u(e) {
                        var t, n = e.buffer,
                            i = n.length,
                            r = new(ee ? Uint8Array : Array)(i << 1);
                        if (ee) r.set(n);
                        else
                            for (t = 0; t < i; ++t) r[t] = n[t];
                        return e.buffer = r
                    }
                    te.prototype.b = function(e, t, n) {
                        var i, r = this.buffer,
                            o = this.index,
                            a = this.e,
                            s = r[o];
                        if (n && 1 < t && (e = 8 < t ? (d[255 & e] << 24 | d[e >>> 8 & 255] << 16 | d[e >>> 16 & 255] << 8 | d[e >>> 24 & 255]) >> 32 - t : d[e] >> 8 - t), t + a < 8) s = s << t | e, a += t;
                        else
                            for (i = 0; i < t; ++i) s = s << 1 | e >> t - i - 1 & 1, 8 == ++a && (a = 0, r[o++] = d[s], s = 0, o === r.length && (r = u(this)));
                        r[o] = s, this.buffer = r, this.e = a, this.index = o
                    }, te.prototype.finish = function() {
                        var e = this.buffer,
                            t = this.index;
                        return 0 < this.e && (e[t] <<= 8 - this.e, e[t] = d[e[t]], t++), ee ? e.subarray(0, t) : (e.length = t, e)
                    };
                    for (var t = new(ee ? Uint8Array : Array)(256), n = 0; n < 256; ++n) {
                        for (var i = a = n, r = 7, a = a >>> 1; a; a >>>= 1) i = i << 1 | 1 & a, --r;
                        t[n] = (i << r & 255) >>> 0
                    }
                    var d = t;

                    function c(e) {
                        this.buffer = new(ee ? Uint16Array : Array)(2 * e), this.length = 0
                    }

                    function s(e, t) {
                        this.d = ne, this.i = 0, this.input = ee && e instanceof Array ? new Uint8Array(e) : e, this.c = 0, t && (t.lazy && (this.i = t.lazy), "number" == typeof t.compressionType && (this.d = t.compressionType), t.outputBuffer && (this.a = ee && t.outputBuffer instanceof Array ? new Uint8Array(t.outputBuffer) : t.outputBuffer), "number" == typeof t.outputIndex && (this.c = t.outputIndex)), this.a || (this.a = new(ee ? Uint8Array : Array)(32768))
                    }
                    c.prototype.getParent = function(e) {
                        return 2 * ((e - 2) / 4 | 0)
                    }, c.prototype.push = function(e, t) {
                        var n, i, r = this.buffer,
                            o = this.length;
                        for (r[this.length++] = t, r[this.length++] = e; 0 < o && (n = this.getParent(o), r[o] > r[n]);) i = r[o], r[o] = r[n], r[n] = i, i = r[o + 1], r[o + 1] = r[n + 1], r[n + 1] = i, o = n;
                        return this.length
                    }, c.prototype.pop = function() {
                        var e, t, n, i = this.buffer,
                            r = i[0],
                            o = i[1];
                        for (this.length -= 2, i[0] = i[this.length], i[1] = i[this.length + 1], n = 0; !((t = 2 * n + 2) >= this.length) && (t + 2 < this.length && i[t + 2] > i[t] && (t += 2), i[t] > i[n]);) e = i[n], i[n] = i[t], i[t] = e, e = i[n + 1], i[n + 1] = i[t + 1], i[t + 1] = e, n = t;
                        return {
                            index: o,
                            value: r,
                            length: this.length
                        }
                    };
                    for (var ne = 2, l = {
                            NONE: 0,
                            h: 1,
                            g: ne,
                            n: 3
                        }, ie = [], f = 0; f < 288; f++) switch (Q) {
                        case f <= 143:
                            ie.push([f + 48, 8]);
                            break;
                        case f <= 255:
                            ie.push([f - 144 + 400, 9]);
                            break;
                        case f <= 279:
                            ie.push([f - 256, 7]);
                            break;
                        case f <= 287:
                            ie.push([f - 280 + 192, 8]);
                            break;
                        default:
                            throw "invalid literal: " + f
                    }

                    function b(e, t) {
                        this.length = e, this.k = t
                    }
                    s.prototype.f = function() {
                        var e, t, P, n = this.input;
                        switch (this.d) {
                            case 0:
                                for (t = 0, P = n.length; t < P;) {
                                    var B, G, i = r = ee ? n.subarray(t, t + 65535) : n.slice(t, t + 65535),
                                        r = (t += r.length) === P,
                                        o = X,
                                        a = this.a,
                                        s = this.c;
                                    if (ee) {
                                        for (a = new Uint8Array(this.a.buffer); a.length <= s + i.length + 5;) a = new Uint8Array(a.length << 1);
                                        a.set(this.a)
                                    }
                                    if (a[s++] = 0 | (r ? 1 : 0), B = 65536 + ~(r = i.length) & 65535, a[s++] = 255 & r, a[s++] = r >>> 8 & 255, a[s++] = 255 & B, a[s++] = B >>> 8 & 255, ee) a.set(i, s), s += i.length, a = a.subarray(0, s);
                                    else {
                                        for (o = 0, G = i.length; o < G; ++o) a[s++] = i[o];
                                        a.length = s
                                    }
                                    this.c = s, this.a = a
                                }
                                break;
                            case 1:
                                for (var u, d = new te(ee ? new Uint8Array(this.a.buffer) : this.a, this.c), c = (d.b(1, 1, Q), d.b(1, 2, Q), re(this, n)), l = 0, U = c.length; l < U; l++)
                                    if (u = c[l], te.prototype.b.apply(d, ie[u]), 256 < u) d.b(c[++l], c[++l], Q), d.b(c[++l], 5), d.b(c[++l], c[++l], Q);
                                    else if (256 === u) break;
                                this.a = d.finish(), this.c = this.a.length;
                                break;
                            case ne:
                                var f, p, h, g, m, v, y, D, b, w, I, H, S = new te(ee ? new Uint8Array(this.a.buffer) : this.a, this.c),
                                    z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                    j = Array(19),
                                    x = ne;
                                for (S.b(1, 1, Q), S.b(x, 2, Q), f = re(this, n), x = ae(m = oe(this.m, 15)), M = ae(v = oe(this.l, 7)), p = 286; 257 < p && 0 === m[p - 1]; p--);
                                for (h = 30; 1 < h && 0 === v[h - 1]; h--);
                                for (var C, E, _, T, A, W = p, J = h, R = new(ee ? Uint32Array : Array)(W + J), k = new(ee ? Uint32Array : Array)(316), O = new(ee ? Uint8Array : Array)(19), N = C = 0; N < W; N++) R[C++] = m[N];
                                for (N = 0; N < J; N++) R[C++] = v[N];
                                if (!ee)
                                    for (N = 0, _ = O.length; N < _; ++N) O[N] = 0;
                                for (N = T = 0, _ = R.length; N < _; N += C) {
                                    for (C = 1; N + C < _ && R[N + C] === R[N]; ++C);
                                    if (E = C, 0 === R[N])
                                        if (E < 3)
                                            for (; 0 < E--;) O[k[T++] = 0]++;
                                        else
                                            for (; 0 < E;)(A = E - 3 < (A = E < 138 ? E : 138) && A < E ? E - 3 : A) <= 10 ? (k[T++] = 17, k[T++] = A - 3, O[17]++) : (k[T++] = 18, k[T++] = A - 11, O[18]++), E -= A;
                                    else if (k[T++] = R[N], O[R[N]]++, --E < 3)
                                        for (; 0 < E--;) k[T++] = R[N], O[R[N]]++;
                                    else
                                        for (; 0 < E;) E - 3 < (A = E < 6 ? E : 6) && A < E && (A = E - 3), k[T++] = 16, k[T++] = A - 3, O[16]++, E -= A
                                }
                                for (e = ee ? k.subarray(0, T) : k.slice(0, T), y = oe(O, 7), I = 0; I < 19; I++) j[I] = y[z[I]];
                                for (g = 19; 4 < g && 0 === j[g - 1]; g--);
                                for (D = ae(y), S.b(p - 257, 5, Q), S.b(h - 1, 5, Q), S.b(g - 4, 4, Q), I = 0; I < g; I++) S.b(j[I], 3, Q);
                                for (I = 0, H = e.length; I < H; I++)
                                    if (b = e[I], S.b(D[b], y[b], Q), 16 <= b) {
                                        switch (I++, b) {
                                            case 16:
                                                w = 2;
                                                break;
                                            case 17:
                                                w = 3;
                                                break;
                                            case 18:
                                                w = 7;
                                                break;
                                            default:
                                                throw "invalid code: " + b
                                        }
                                        S.b(e[I], w, Q)
                                    }
                                for (var L, q, x = [x, m], M = [M, v], K = x[0], V = x[1], Z = M[0], $ = M[1], F = 0, Y = f.length; F < Y; ++F)
                                    if (L = f[F], S.b(K[L], V[L], Q), 256 < L) S.b(f[++F], f[++F], Q), q = f[++F], S.b(Z[q], $[q], Q), S.b(f[++F], f[++F], Q);
                                    else if (256 === L) break;
                                this.a = S.finish(), this.c = this.a.length;
                                break;
                            default:
                                throw "invalid compression type"
                        }
                        return this.a
                    };
                    var p = function() {
                            for (var e, t = [], n = 3; n <= 258; n++) e = function(e) {
                                switch (Q) {
                                    case 3 === e:
                                        return [257, e - 3, 0];
                                    case 4 === e:
                                        return [258, e - 4, 0];
                                    case 5 === e:
                                        return [259, e - 5, 0];
                                    case 6 === e:
                                        return [260, e - 6, 0];
                                    case 7 === e:
                                        return [261, e - 7, 0];
                                    case 8 === e:
                                        return [262, e - 8, 0];
                                    case 9 === e:
                                        return [263, e - 9, 0];
                                    case 10 === e:
                                        return [264, e - 10, 0];
                                    case e <= 12:
                                        return [265, e - 11, 1];
                                    case e <= 14:
                                        return [266, e - 13, 1];
                                    case e <= 16:
                                        return [267, e - 15, 1];
                                    case e <= 18:
                                        return [268, e - 17, 1];
                                    case e <= 22:
                                        return [269, e - 19, 2];
                                    case e <= 26:
                                        return [270, e - 23, 2];
                                    case e <= 30:
                                        return [271, e - 27, 2];
                                    case e <= 34:
                                        return [272, e - 31, 2];
                                    case e <= 42:
                                        return [273, e - 35, 3];
                                    case e <= 50:
                                        return [274, e - 43, 3];
                                    case e <= 58:
                                        return [275, e - 51, 3];
                                    case e <= 66:
                                        return [276, e - 59, 3];
                                    case e <= 82:
                                        return [277, e - 67, 4];
                                    case e <= 98:
                                        return [278, e - 83, 4];
                                    case e <= 114:
                                        return [279, e - 99, 4];
                                    case e <= 130:
                                        return [280, e - 115, 4];
                                    case e <= 162:
                                        return [281, e - 131, 5];
                                    case e <= 194:
                                        return [282, e - 163, 5];
                                    case e <= 226:
                                        return [283, e - 195, 5];
                                    case e <= 257:
                                        return [284, e - 227, 5];
                                    case 258 === e:
                                        return [285, e - 258, 0];
                                    default:
                                        throw "invalid length: " + e
                                }
                            }(n), t[n] = e[2] << 24 | e[1] << 16 | e[0];
                            return t
                        }(),
                        w = ee ? new Uint32Array(p) : p;

                    function re(e, t) {
                        function n(e, t) {
                            var n, i, r, o = e.k,
                                a = [],
                                s = 0,
                                u = w[e.length];
                            switch (a[s++] = 65535 & u, a[s++] = u >> 16 & 255, a[s++] = u >> 24, Q) {
                                case 1 === o:
                                    n = [0, o - 1, 0];
                                    break;
                                case 2 === o:
                                    n = [1, o - 2, 0];
                                    break;
                                case 3 === o:
                                    n = [2, o - 3, 0];
                                    break;
                                case 4 === o:
                                    n = [3, o - 4, 0];
                                    break;
                                case o <= 6:
                                    n = [4, o - 5, 1];
                                    break;
                                case o <= 8:
                                    n = [5, o - 7, 1];
                                    break;
                                case o <= 12:
                                    n = [6, o - 9, 2];
                                    break;
                                case o <= 16:
                                    n = [7, o - 13, 2];
                                    break;
                                case o <= 24:
                                    n = [8, o - 17, 3];
                                    break;
                                case o <= 32:
                                    n = [9, o - 25, 3];
                                    break;
                                case o <= 48:
                                    n = [10, o - 33, 4];
                                    break;
                                case o <= 64:
                                    n = [11, o - 49, 4];
                                    break;
                                case o <= 96:
                                    n = [12, o - 65, 5];
                                    break;
                                case o <= 128:
                                    n = [13, o - 97, 5];
                                    break;
                                case o <= 192:
                                    n = [14, o - 129, 6];
                                    break;
                                case o <= 256:
                                    n = [15, o - 193, 6];
                                    break;
                                case o <= 384:
                                    n = [16, o - 257, 7];
                                    break;
                                case o <= 512:
                                    n = [17, o - 385, 7];
                                    break;
                                case o <= 768:
                                    n = [18, o - 513, 8];
                                    break;
                                case o <= 1024:
                                    n = [19, o - 769, 8];
                                    break;
                                case o <= 1536:
                                    n = [20, o - 1025, 9];
                                    break;
                                case o <= 2048:
                                    n = [21, o - 1537, 9];
                                    break;
                                case o <= 3072:
                                    n = [22, o - 2049, 10];
                                    break;
                                case o <= 4096:
                                    n = [23, o - 3073, 10];
                                    break;
                                case o <= 6144:
                                    n = [24, o - 4097, 11];
                                    break;
                                case o <= 8192:
                                    n = [25, o - 6145, 11];
                                    break;
                                case o <= 12288:
                                    n = [26, o - 8193, 12];
                                    break;
                                case o <= 16384:
                                    n = [27, o - 12289, 12];
                                    break;
                                case o <= 24576:
                                    n = [28, o - 16385, 13];
                                    break;
                                case o <= 32768:
                                    n = [29, o - 24577, 13];
                                    break;
                                default:
                                    throw "invalid distance"
                            }
                            for (u = n, a[s++] = u[0], a[+s] = u[1], a[5] = u[2], i = 0, r = a.length; i < r; ++i) p[h++] = a[i];
                            m[a[0]]++, v[a[3]]++, g = e.length + t - 1, c = null
                        }
                        var i, r, o, a, s, u, d, c, l, f = {},
                            p = ee ? new Uint16Array(2 * t.length) : [],
                            h = 0,
                            g = 0,
                            m = new(ee ? Uint32Array : Array)(286),
                            v = new(ee ? Uint32Array : Array)(30),
                            y = e.i;
                        if (!ee) {
                            for (o = 0; o <= 285;) m[o++] = 0;
                            for (o = 0; o <= 29;) v[o++] = 0
                        }
                        for (m[256] = 1, i = 0, r = t.length; i < r; ++i) {
                            for (o = s = 0, a = 3; o < a && i + o !== r; ++o) s = s << 8 | t[i + o];
                            if (f[s] === X && (f[s] = []), u = f[s], !(0 < g--)) {
                                for (; 0 < u.length && 32768 < i - u[0];) u.shift();
                                if (r <= i + 3) {
                                    for (c && n(c, -1), o = 0, a = r - i; o < a; ++o) l = t[i + o], p[h++] = l, ++m[l];
                                    break
                                }
                                0 < u.length ? (d = function(e, t, n) {
                                    var i, r, o, a, s, u, d = 0,
                                        c = e.length;
                                    a = 0, u = n.length;
                                    e: for (; a < u; a++) {
                                        if (i = n[u - a - 1], (o = 3) < d) {
                                            for (s = d; 3 < s; s--)
                                                if (e[i + s - 1] !== e[t + s - 1]) continue e;
                                            o = d
                                        }
                                        for (; o < 258 && t + o < c && e[i + o] === e[t + o];) ++o;
                                        if (d < o && (r = i, d = o), 258 === o) break
                                    }
                                    return new b(d, t - r)
                                }(t, i, u), c ? c.length < d.length ? (l = t[i - 1], p[h++] = l, ++m[l], n(d, 0)) : n(c, -1) : d.length < y ? c = d : n(d, 0)) : c ? n(c, -1) : (l = t[i], p[h++] = l, ++m[l])
                            }
                            u.push(i)
                        }
                        return p[h++] = 256, m[256]++, e.m = m, e.l = v, ee ? p.subarray(0, h) : p
                    }

                    function oe(e, t) {
                        var n, i, r, o, a, s = e.length,
                            u = new c(572),
                            d = new(ee ? Uint8Array : Array)(s);
                        if (!ee)
                            for (o = 0; o < s; o++) d[o] = 0;
                        for (o = 0; o < s; ++o) 0 < e[o] && u.push(o, e[o]);
                        if (n = Array(u.length / 2), i = new(ee ? Uint32Array : Array)(u.length / 2), 1 === n.length) d[u.pop().index] = 1;
                        else {
                            for (o = 0, a = u.length / 2; o < a; ++o) n[o] = u.pop(), i[o] = n[o].value;
                            for (r = function(e, n, t) {
                                    var i, r, o, a, s, u = new(ee ? Uint16Array : Array)(t),
                                        d = new(ee ? Uint8Array : Array)(t),
                                        c = new(ee ? Uint8Array : Array)(n),
                                        l = Array(t),
                                        f = Array(t),
                                        p = Array(t),
                                        h = (1 << t) - n,
                                        g = 1 << t - 1;
                                    for (u[t - 1] = n, r = 0; r < t; ++r) h < g ? d[r] = 0 : (d[r] = 1, h -= g), h <<= 1, u[t - 2 - r] = (u[t - 1 - r] / 2 | 0) + n;
                                    for (u[0] = d[0], l[0] = Array(u[0]), f[0] = Array(u[0]), r = 1; r < t; ++r) u[r] > 2 * u[r - 1] + d[r] && (u[r] = 2 * u[r - 1] + d[r]), l[r] = Array(u[r]), f[r] = Array(u[r]);
                                    for (i = 0; i < n; ++i) c[i] = t;
                                    for (o = 0; o < u[t - 1]; ++o) l[t - 1][o] = e[o], f[t - 1][o] = o;
                                    for (i = 0; i < t; ++i) p[i] = 0;
                                    for (1 === d[t - 1] && (--c[0], ++p[t - 1]), r = t - 2; 0 <= r; --r) {
                                        for (a = i = 0, s = p[r + 1], o = 0; o < u[r]; o++)(a = l[r + 1][s] + l[r + 1][s + 1]) > e[i] ? (l[r][o] = a, f[r][o] = n, s += 2) : (l[r][o] = e[i], f[r][o] = i, ++i);
                                        p[r] = 0, 1 === d[r] && function m(e) {
                                            var t = f[e][p[e]];
                                            t === n ? (m(e + 1), m(e + 1)) : --c[t], ++p[e]
                                        }(r)
                                    }
                                    return c
                                }(i, i.length, t), o = 0, a = n.length; o < a; ++o) d[n[o].index] = r[o]
                        }
                        return d
                    }

                    function ae(e) {
                        for (var t, n, i = new(ee ? Uint16Array : Array)(e.length), r = [], o = [], a = 0, s = 0, u = e.length; s < u; s++) r[e[s]] = 1 + (0 | r[e[s]]);
                        for (s = 1, u = 16; s <= u; s++) a = (o[s] = a) + (0 | r[s]) << 1;
                        for (s = 0, u = e.length; s < u; s++)
                            for (a = o[e[s]], o[e[s]] += 1, t = i[s] = 0, n = e[s]; t < n; t++) i[s] = i[s] << 1 | 1 & a, a >>>= 1;
                        return i
                    }

                    function h(e, t) {
                        this.input = e, this.a = new(ee ? Uint8Array : Array)(32768), this.d = I.g;
                        var n, i = {};
                        for (n in (t ? "number" == typeof t.compressionType : (t = {}, 0)) && (this.d = t.compressionType), t) i[n] = t[n];
                        i.outputBuffer = this.a, this.j = new s(this.input, i)
                    }
                    var g, m, v, y, I = l,
                        S = (h.prototype.f = function() {
                            var e, t, n = 0,
                                i = this.a,
                                r = Math.LOG2E * Math.log(32768) - 8 << 4 | 8;
                            switch (i[n++] = r, 8, this.d) {
                                case I.NONE:
                                    t = 0;
                                    break;
                                case I.h:
                                    t = 1;
                                    break;
                                case I.g:
                                    t = 2;
                                    break;
                                default:
                                    throw Error("unsupported compression type")
                            }
                            i[+n] = (e = t << 6 | 0) | 31 - (256 * r + e) % 31;
                            var o = this.input;
                            if ("string" == typeof o) {
                                for (var a = o.split(""), s = 0, u = a.length; s < u; s++) a[s] = (255 & a[s].charCodeAt(0)) >>> 0;
                                o = a
                            }
                            for (var d, c = 1, l = 0, f = o.length, p = 0; 0 < f;) {
                                for (f -= d = 1024 < f ? 1024 : f; l += c += o[p++], --d;);
                                c %= 65521, l %= 65521
                            }
                            return r = (l << 16 | c) >>> 0, this.j.c = 2, n = (i = this.j.f()).length, ee && ((i = new Uint8Array(i.buffer)).length <= n + 4 && (this.a = new Uint8Array(i.length + 4), this.a.set(i), i = this.a), i = i.subarray(0, n + 4)), i[n++] = r >> 24 & 255, i[n++] = r >> 16 & 255, i[n++] = r >> 8 & 255, i[+n] = 255 & r, i
                        }, e("Zlib.Deflate", h), e("Zlib.Deflate.compress", function(e, t) {
                            return new h(e, t).f()
                        }), e("Zlib.Deflate.prototype.compress", h.prototype.f), {
                            NONE: I.NONE,
                            FIXED: I.h,
                            DYNAMIC: I.g
                        });
                    if (Object.keys) g = Object.keys(S);
                    else
                        for (m in g = [], v = 0, S) g[v++] = m;
                    for (v = 0, y = g.length; v < y; ++v) e("Zlib.Deflate.CompressionType." + (m = g[v]), S[m])
                }.call(ft.exports), ft.exports),
                ht = {
                    exports: {}
                },
                gt = (! function() {
                    "use strict";
                    var o = this;

                    function e(e, t) {
                        var n, i = e.split("."),
                            r = o;
                        i[0] in r || !r.execScript || r.execScript("var " + i[0]);
                        for (; i.length && (n = i.shift());) i.length || void 0 === t ? r = r[n] || (r[n] = {}) : r[n] = t
                    }
                    var a = {
                        c: function(e, t, n) {
                            return a.update(e, 0, t, n)
                        },
                        update: function(e, t, n, i) {
                            var r = a.a,
                                o = "number" == typeof n ? n : n = 0,
                                i = "number" == typeof i ? i : e.length;
                            for (t ^= 4294967295, o = 7 & i; o--; ++n) t = t >>> 8 ^ r[255 & (t ^ e[n])];
                            for (o = i >> 3; o--; n += 8) t = (t = (t = (t = (t = (t = (t = (t = t >>> 8 ^ r[255 & (t ^ e[n])]) >>> 8 ^ r[255 & (t ^ e[n + 1])]) >>> 8 ^ r[255 & (t ^ e[n + 2])]) >>> 8 ^ r[255 & (t ^ e[n + 3])]) >>> 8 ^ r[255 & (t ^ e[n + 4])]) >>> 8 ^ r[255 & (t ^ e[n + 5])]) >>> 8 ^ r[255 & (t ^ e[n + 6])]) >>> 8 ^ r[255 & (t ^ e[n + 7])];
                            return (4294967295 ^ t) >>> 0
                        },
                        d: function(e, t) {
                            return (a.a[255 & (e ^ t)] ^ e >>> 8) >>> 0
                        },
                        b: [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
                    };
                    a.a = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array ? new Uint32Array(a.b) : a.b, e("Zlib.CRC32", a), e("Zlib.CRC32.calc", a.c), e("Zlib.CRC32.update", a.update)
                }.call(ht.exports), ht.exports),
                mt = {
                    Deflate: pt.Zlib.Deflate,
                    CRC32: gt.Zlib.CRC32
                },
                vt = {
                    base64Url: "base64url",
                    binary: "binary"
                },
                yt = function(e, n) {
                    var i;
                    return 200 <= (n = n || 0) ? e : U.isArray(e) ? U.map(e, function(e) {
                        return yt(e, n + 1)
                    }) : !U.isObject(e) || U.isDate(e) || U.isRegExp(e) || U.isElement(e) ? U.isString(e) ? U.escape(e) : e : (i = {}, U.each(e, function(e, t) {
                        i[t] = yt(e, n + 1)
                    }), i)
                };

            function bt(e, t) {
                t = t || vt.base64Url;
                e = Ct(w.stringify(e)), e = new mt.Deflate(e).compress();
                return t === vt.base64Url ? _.uint8ToBase64(e) : e
            }
            var wt = function(e) {
                    e = Ct(e);
                    return _.uint8ToBase64(e)
                },
                It = function(e) {
                    if (void 0 !== e) return U.isString(e) || (e = w.stringify(e)), e = Ct(e), mt.CRC32.calc(e, 0, e.length)
                };

            function St(e) {
                return e[Math.floor(Math.random() * e.length)]
            }

            function xt(e) {
                for (var t = "abcdefghijklmnopqrstuvwxyz", n = "", i = (t + t.toUpperCase() + "1234567890").split(""), r = 0; r < e; r++) n += St(i);
                return n
            }
            var Ct = function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n);
                        i < 128 ? t.push(i) : i < 2048 ? t.push(192 | i >> 6, 128 | 63 & i) : i < 55296 || 57344 <= i ? t.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : (n++, i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(n)), t.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i))
                    }
                    return t
                },
                Et = function(e, t, n) {
                    return !(!I(e) || !I(t)) && (n && (e = e.toLowerCase(), t = t.toLowerCase()), -1 < e.indexOf(t))
                };

            function v() {
                return (new Date).getTime()
            }

            function _t() {
                return "undefined" != typeof $A && U.isFunction($A.get) && U.isString($A.get("$Browser.formFactor"))
            }

            function Tt(o) {
                U.isFunction(o) || (o = function(e, t) {
                    return t
                });
                var a = {
                    circular: !0,
                    lastKey: null,
                    eachUntil: function(e, t) {
                        if (e && e.length) {
                            e = function(e, t) {
                                if (null == t) return e;
                                for (var n = 0, i = e.length; n < i; ++n) {
                                    var r;
                                    if (o(e[n], n) === t) return r = e.slice(n + 1), a.circular ? r.concat(e.slice(0, n + 1)) : r
                                }
                                return a.circular ? e : []
                            }(e, this.lastKey);
                            for (var n = 0; n < e.length; ++n)
                                if (t(e[n], n)) return this.lastKey = o(e[n], n), a.circular
                        }
                        return this.lastKey = null, !0
                    },
                    reset: function() {
                        this.lastKey = null
                    }
                };
                return a
            }

            function At(r, e) {
                return e.eachUntil = U.wrap(e.eachUntil, function(e, t, n) {
                    var i = v();
                    return e.call(this, t, function() {
                        return n.apply(this, arguments) || Math.abs(v() - i) >= r
                    })
                }), e
            }

            function Rt(e) {
                var t = "__symbol__";
                if ("undefined" != typeof Zone && U.isFunction(Zone[t])) {
                    t = Wv[Zone[t](e)];
                    if (U.isFunction(t)) return t
                }
                return Wv[e]
            }

            function kt(e) {
                return U.isFunction(e.isFinite) ? e.isFinite : e.Number && U.isFunction(e.Number.isFinite) ? e.Number.isFinite : function(e) {
                    return e != Infinity && e != -Infinity && !isNaN(e)
                }
            }
            var Ot = kt(Wv);

            function Nt(e) {
                return "number" == typeof e && Ot(e) && Math.floor(e) === e
            }

            function Lt(e, t, n, i) {
                (t = t || {}).maxRetries = Nt(t.maxRetries) ? t.maxRetries : 10, t.delay = Nt(t.delay) ? t.delay : 50, t.exponentialBackoff = t.exponentialBackoff || !1;
                var r = function(e) {
                        return e && "[object Function]" === {}.toString.call(e)
                    },
                    o = r(n) ? n : function() {},
                    a = r(i) ? i : function() {},
                    n = e();
                n ? o(n) : 0 < t.maxRetries ? setTimeout(function() {
                    t.maxRetries = --t.maxRetries, t.delay = t.exponentialBackoff ? 2 * t.delay : t.delay, Lt(e, t, o, a)
                }, t.delay) : (a || function() {})()
            }
            var Mt = function(e) {
                    e = e.match(/-?[\d,]+\.?([\d,]+)*/);
                    return e ? parseFloat(e[0].replace(/,/g, "")) : null
                },
                Ft = U.isFunction(Wv.decodeURIComponent) ? Wv.decodeURIComponent : U.identity,
                Pt = U.isFunction(Wv.encodeURIComponent) ? Wv.encodeURIComponent : U.identity,
                Bt = {},
                Gt, Ut = !0,
                Dt = function() {
                    return y.get("localStorageOnly")
                },
                Ht = function() {
                    return !!y.get("disableCookies")
                };

            function zt(e) {
                Ut = e
            }
            var jt = function(e) {
                    var t = Ht() || Dt() ? Bt[e] : Jv.cookie;
                    return (e = new RegExp("(^|; )" + e + "=([^;]*)").exec(t)) ? Ft(e[2]) : null
                },
                Wt = function(e, t, n, i) {
                    var r;
                    Ut && ((r = new Date).setTime(r.getTime() + n), t = e + "=" + Pt(t) + (n ? ";expires=" + r.toUTCString() : "") + "; path=/" + ("https:" === Jv.location.protocol || i ? ";secure" : "") + "; SameSite=Strict", Gt && (t += ";domain=" + Gt), Ht() || Dt() ? Bt[e] = t : Jv.cookie = t)
                };

            function Jt(e, t) {
                var n, i;
                e ? U.isString(e) && (t = t.replace(/:\d+$/, ""), e = e.replace(/^\./, ""), n = new RegExp("\\." + e.replace(/\./g, "\\.") + "$"), i = new RegExp("^" + e.replace(/\./g, "\\.") + "$"), (n.test(t) || i.test(t)) && (Gt = "." + e)) : Gt = e
            }

            function qt() {
                return Gt
            }

            function Kt(e) {
                qt() ? Wt(e, "") : Jv.cookie = e + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
            }
            var Vt = function(e) {
                    return "_pendo_" + e + "." + G.apiKey
                },
                Zt = function(e) {
                    return jt(Vt(e))
                },
                $t = 864e7,
                Yt = function(e, t, n, i) {
                    n = n || $t, Wt(Vt(e), t, n, i)
                },
                d = function() {
                    function u() {
                        return !Ht() && (!qt() && d("localStorage"))
                    }
                    var d = U.memoize(function(e) {
                        try {
                            var t = Wv[e],
                                n = "__storage_test__";
                            return t.setItem(n, n), t.removeItem(n), !0
                        } catch (Ce) {
                            return Ce instanceof DOMException && (22 === Ce.code || 1014 === Ce.code || "QuotaExceededError" === Ce.name || "NS_ERROR_DOM_QUOTA_REACHED" === Ce.name) && t && 0 !== t.length
                        }
                    });

                    function c(e) {
                        e.cache && (e.cache = {})
                    }

                    function i(e, t) {
                        t = t ? e : Vt(e);
                        if (u()) return localStorage.removeItem(t);
                        Kt(t)
                    }
                    return {
                        read: function(e, t) {
                            var n;
                            return u() ? (n = t ? e : Vt(e), null === (n = function(e) {
                                if (null === e) return null;
                                try {
                                    var t = w.parse(e);
                                    return t.ttl && t.ttl < (new Date).getTime() ? null : String(t.value || t)
                                } catch (Ce) {
                                    return e
                                }
                            }(localStorage.getItem(n))) && i(e), n) : (t ? jt : Zt)(e)
                        },
                        write: function(e, t, n, i, r) {
                            if (c(d), u()) try {
                                var o = i ? e : Vt(e);
                                return localStorage.setItem(o, (a = t, (s = n) ? (s = (new Date).getTime() + s, w.stringify({
                                    ttl: s,
                                    value: a
                                })) : a)), void c(d)
                            } catch (Ce) {}
                            var a, s;
                            if (!i) return Yt(e, t, n, r);
                            Wt(e, t, n, r)
                        },
                        clear: i
                    }
                }(),
                Xt = "debug-enabled",
                Qt, en;

            function tn(e) {
                e = e || !1;
                var t = "true" === d.read(Xt, !0);
                return e ? t : t ? "Yes" : "No"
            }
            var nn = 100,
                rn = [],
                on = function(e) {
                    var t = d.read("log-enabled", !0);
                    return null !== t ? "true" == t : !U.contains(["prod", "prod-eu", "prod-us1", "gov-prod", "rc"], e)
                },
                an = function() {
                    var e = d.read("active-contexts", !0);
                    return e ? e.split(",") : []
                },
                sn = function() {
                    return ln() ? en ? "logging already enabled" : (d.write("log-enabled", "true", null, !0), en = !0, "logging enabled") : "logging unavailable"
                },
                un = function() {
                    return en ? (d.write("log-enabled", "false", null, !0), en = !1, "logging disabled") : "logging already disabled"
                };

            function dn() {
                Qt = an(), en = on(Qe)
            }
            var cn = function(e, t) {
                    return U.compact([].concat(e, t))
                },
                ln = function(e) {
                    return e = e || "log", "undefined" != typeof console && U.isFunction(console[e])
                },
                fn = function(e) {
                    return e = cn(e), 0 < Qt.length ? 0 < U.intersection(Qt, e).length : !!en || !!tn(!0)
                },
                H = function(e, t) {
                    t = cn(t, U.tail(arguments, 2)), ln() && (fn(t) && bn(e), hn(e, t))
                };

            function pn() {
                ln("error") && console.error.apply(console, arguments)
            }
            var hn = function(e, t) {
                    U.contains(t, "debug") || (rn.length == nn && rn.shift(), rn.push([e, t]))
                },
                gn = function(t) {
                    t = cn(t), U.each(U.map(U.filter(rn, function(e) {
                        return 0 === t.length || 0 < U.intersection(t, e[1]).length
                    }), function(e) {
                        return e[0]
                    }), function(e) {
                        bn(e, "[Pendo-History] ")
                    })
                },
                mn = function() {
                    return U.union.apply(U, U.map(rn, function(e) {
                        return e[1]
                    }))
                },
                vn = function() {
                    return Qt
                },
                yn = function(e) {
                    Qt = cn(e), d.write("active-contexts", Qt.join(","), null, !0)
                },
                bn = function(e, t) {
                    var n;
                    ln() && (t = t || "[Agent] ", e && e.length ? ((n = 1e3 < e.length ? e.length - 1e3 : 0) && (t += "..."), console.log(t + e.substring(n))) : console.log(t + e))
                };

            function r(e) {
                H(e, "debug")
            }
            H.init = dn, H.enableLogging = sn, H.disableLogging = un, H.getActiveContexts = vn, H.setActiveContexts = yn, H.showLogHistory = gn, H.getLoggedContexts = mn;
            /*
             * @license  MIT - https://github.com/taylorhakes/promise-polyfill
             */
            var wn = Wv.Promise,
                wn = function(e) {
                    var t = Wv.Promise;
                    return "function" == typeof t && /native/.test(t) ? t : e()
                }(function() {
                    "use strict";
                    var t = setTimeout;

                    function d(e) {
                        return Boolean(e && "undefined" != typeof e.length)
                    }

                    function i() {}

                    function o(e) {
                        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof e) throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = qv, this._deferreds = [], l(e, this)
                    }

                    function r(n, i) {
                        for (; 3 === n._state;) n = n._value;
                        0 === n._state ? n._deferreds.push(i) : (n._handled = !0, o._immediateFn(function() {
                            var e, t = 1 === n._state ? i.onFulfilled : i.onRejected;
                            if (null === t)(1 === n._state ? a : s)(i.promise, n._value);
                            else {
                                try {
                                    e = t(n._value)
                                } catch (Ce) {
                                    return void s(i.promise, Ce)
                                }
                                a(i.promise, e)
                            }
                        }))
                    }

                    function a(e, t) {
                        try {
                            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                var n = t.then;
                                if (t instanceof o) return e._state = 3, e._value = t, void u(e);
                                if ("function" == typeof n) return void l((i = n, r = t, function() {
                                    i.apply(r, arguments)
                                }), e)
                            }
                            e._state = 1, e._value = t, u(e)
                        } catch (Ce) {
                            s(e, Ce)
                        }
                        var i, r
                    }

                    function s(e, t) {
                        e._state = 2, e._value = t, u(e)
                    }

                    function u(e) {
                        2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                            e._handled || o._unhandledRejectionFn(e._value)
                        });
                        for (var t = 0, n = e._deferreds.length; t < n; t++) r(e, e._deferreds[t]);
                        e._deferreds = null
                    }

                    function c(e, t, n) {
                        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                    }

                    function l(e, t) {
                        var n = !1;
                        try {
                            e(function(e) {
                                n || (n = !0, a(t, e))
                            }, function(e) {
                                n || (n = !0, s(t, e))
                            })
                        } catch (i) {
                            n || (n = !0, s(t, i))
                        }
                    }
                    return o.prototype["catch"] = function(e) {
                        return this.then(null, e)
                    }, o.prototype.then = function(e, t) {
                        var n = new this.constructor(i);
                        return r(this, new c(e, t, n)), n
                    }, o.prototype["finally"] = function(t) {
                        var n = this.constructor;
                        return this.then(function(e) {
                            return n.resolve(t()).then(function() {
                                return e
                            })
                        }, function(e) {
                            return n.resolve(t()).then(function() {
                                return n.reject(e)
                            })
                        })
                    }, o.all = function(t) {
                        return new o(function(r, o) {
                            if (!d(t)) return o(new TypeError("Promise.all accepts an array"));
                            var a = Array.prototype.slice.call(t);
                            if (0 === a.length) return r([]);
                            var s = a.length;

                            function u(t, e) {
                                try {
                                    if (e && ("object" == typeof e || "function" == typeof e)) {
                                        var n = e.then;
                                        if ("function" == typeof n) return void n.call(e, function(e) {
                                            u(t, e)
                                        }, o)
                                    }
                                    a[t] = e, 0 == --s && r(a)
                                } catch (i) {
                                    o(i)
                                }
                            }
                            for (var e = 0; e < a.length; e++) u(e, a[e])
                        })
                    }, o.allSettled = function(n) {
                        return new this(function(i, e) {
                            if (!n || "undefined" == typeof n.length) return e(new TypeError(typeof n + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                            var r = Array.prototype.slice.call(n);
                            if (0 === r.length) return i([]);
                            var o = r.length;
                            for (var t = 0; t < r.length; t++) ! function a(t, e) {
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var n = e.then;
                                    if ("function" == typeof n) return void n.call(e, function(e) {
                                        a(t, e)
                                    }, function(e) {
                                        r[t] = {
                                            status: "rejected",
                                            reason: e
                                        }, 0 == --o && i(r)
                                    })
                                }
                                r[t] = {
                                    status: "fulfilled",
                                    value: e
                                }, 0 == --o && i(r)
                            }(t, r[t])
                        })
                    }, o.resolve = function(t) {
                        return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                            e(t)
                        })
                    }, o.reject = function(n) {
                        return new o(function(e, t) {
                            t(n)
                        })
                    }, o.race = function(r) {
                        return new o(function(e, t) {
                            if (!d(r)) return t(new TypeError("Promise.race accepts an array"));
                            for (var n = 0, i = r.length; n < i; n++) o.resolve(r[n]).then(e, t)
                        })
                    }, o._immediateFn = "function" == typeof setImmediate ? function(e) {
                        setImmediate(e)
                    } : function(e) {
                        t(e, 0)
                    }, o._unhandledRejectionFn = function(e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                    }, o
                }),
                In = function() {
                    "use strict";
                    var e = {},
                        d = function() {
                            var t = !1;
                            return function(e) {
                                return function() {
                                    t || (t = !0, e.apply(null, arguments))
                                }
                            }
                        },
                        c = function(n, i) {
                            var r = e.defer(),
                                o = function(t, n) {
                                    setTimeout(function() {
                                        var e;
                                        try {
                                            e = t(n)
                                        } catch (Ce) {
                                            return void r.reject(Ce)
                                        }
                                        e === r.promise ? r.reject(new TypeError("Cannot resolve promise with itself")) : r.resolve(e)
                                    }, 1)
                                };
                            return {
                                promise: r.promise,
                                handle: function(e, t) {
                                    e === l ? (e = t, n && n.call ? o(n, e) : r.resolve(e)) : (e = t, i && i.call ? o(i, e) : r.reject(e))
                                }
                            }
                        },
                        l = 1;
                    return e.defer = function() {
                        var n, i = 0,
                            r = [],
                            o = function(e, t) {
                                i = e, n = t, U.each(r, function(e) {
                                    e.handle(i, n)
                                }), r = null
                            },
                            a = function(e) {
                                o(2, e)
                            },
                            t = function(e, t) {
                                e = c(e, t);
                                return 0 === i ? r.push(e) : e.handle(i, n), e.promise
                            },
                            s = function(e) {
                                var t = d();
                                try {
                                    e(t(u), t(a))
                                } catch (Ce) {
                                    t(a)(Ce)
                                }
                            },
                            u = function(e) {
                                var t;
                                try {
                                    t = function(e) {
                                        var t = e && e.then;
                                        if ("object" == typeof e && "function" == typeof t) return function() {
                                            return t.apply(e, arguments)
                                        }
                                    }(e)
                                } catch (Ce) {
                                    return void a(Ce)
                                }
                                t ? s(t) : o(l, e)
                            },
                            e = d();
                        return {
                            resolve: e(u),
                            reject: e(a),
                            promise: {
                                then: t,
                                "catch": function(e) {
                                    return t(null, e)
                                }
                            }
                        }
                    }, e
                }(),
                z;

            function Sn(e) {
                var n, i = z.defer(),
                    r = U.isArray(e) ? [] : {},
                    o = U.size(e);
                return o ? (n = !1, U.each(e, function(e, t) {
                    z.resolve(e).then(function(e) {
                        r[t] = e, 0 != --o || n || i.resolve(r)
                    }, function(e) {
                        n || (n = !0, i.reject(e))
                    })
                }), i.promise) : z.resolve(e)
            }

            function xn(e, t) {
                return function() {
                    try {
                        return t.apply(e, arguments)
                    } catch (Ce) {}
                }
            }

            function Cn(e) {
                return {
                    getItem: xn(e, e.getItem),
                    setItem: xn(e, e.setItem),
                    removeItem: xn(e, e.removeItem)
                }
            }

            function En(e) {
                var t = U.noop,
                    t = {
                        getItem: t,
                        setItem: t,
                        removeItem: t
                    };
                try {
                    var n = e();
                    return n ? Cn(n) : t
                } catch (Ce) {
                    return t
                }
            }
            ut(Qe, he()) && b.isMinimumIEVersion(11) ? z = {
                all: function(e) {
                    return U.isArray(e) ? wn.all.apply(wn, arguments) : Sn(e)
                },
                reject: function() {
                    return wn.reject.apply(wn, arguments)
                },
                resolve: function() {
                    return wn.resolve.apply(wn, arguments)
                },
                defer: function() {
                    var n = {};
                    return n.promise = new wn(function(e, t) {
                        n.resolve = e, n.reject = t
                    }), n
                }
            } : (z = In, z.all = Sn, z.reject = function(e) {
                var t = z.defer();
                return t.reject(e), t.promise
            }, z.resolve = function(e) {
                var t = z.defer();
                return t.resolve(e), t.promise
            });
            var _n = En(function() {
                    return Wv.localStorage
                }),
                Tn = En(function() {
                    return Wv.sessionStorage
                });

            function An(n) {
                var e = U.partial,
                    t = U.compose,
                    i = U.extend,
                    r = U.omit,
                    o = "pendo_sessionId",
                    a = "pendo_tabId",
                    s = "pendo_parentTabId",
                    u = "pendo_cd",
                    d = {
                        data: {},
                        getItem: function(e) {
                            return d.data[e]
                        },
                        setItem: function(e, t) {
                            d.data[e] = t
                        },
                        clear: function(e) {
                            d.data[e] = null, delete d.data[e]
                        }
                    },
                    c = null,
                    l = e(g, a, m),
                    f = e(g, "pendo_frameId", d);

                function p(e, t) {
                    return (U.isFunction(t) ? t() : t).getItem(e)
                }

                function h(e, t, n) {
                    (U.isFunction(n) ? n() : n).setItem(e, t)
                }

                function g(e, t) {
                    var n = p(e, t);
                    return n || h(e, n = xt(16), t), n
                }

                function m() {
                    return Tn
                }

                function v() {
                    Tn.removeItem(u), c = null
                }

                function y() {
                    c && (clearTimeout(c), c = null)
                }
                e = t(e(g, o, d), e(function(e, t) {
                    t.clear(e)
                }, o, d));
                return {
                    addTracerIds: function(e) {
                        return r(i(e, {
                            parentTabId: p(s, m),
                            tabId: l(),
                            frameId: f(),
                            sessionId: d.getItem(o)
                        }), function(e) {
                            return e === qv
                        })
                    },
                    setParentTabId: function(e) {
                        h(s, e, m)
                    },
                    newTabId: function() {
                        var e = xt(16);
                        return h(a, e, m), e
                    },
                    getTabId: l,
                    detectClonedSession: function(e) {
                        var t = Tn.getItem(u) || ""; - 1 === t.indexOf(e) && (t += "-" + e), Tn.setItem(u, t)
                    },
                    isClonedSession: function(e) {
                        return y(), c = setTimeout(v, 1e4), -1 === (Tn.getItem(u) || "").indexOf(e)
                    },
                    stopCloneDetectionTimer: y,
                    tabIdChanged: function(t) {
                        var e;
                        if (b.addEventListener) return n.addEventListener("storage", e = function(e) {
                                e.key === a && t()
                            }),
                            function() {
                                n.removeEventListener("storage", e)
                            }
                    },
                    changeSessionId: e
                }
            }
            var Rn = An(Wv);

            function kn() {
                var i = this._handlers = {};
                return this.on = function(e, t) {
                    var n;
                    return (U.isString(e) || U.isFunction(t)) && (n = (n = i[e]) || (i[e] = []), U.indexOf(n, t) < 0 && n.push(t)), this
                }, this.one = function(e, t) {
                    var n = this,
                        i = function() {
                            n.off(e, i), t.apply(this, arguments)
                        };
                    return this.on(e, i)
                }, this.off = function(e, t) {
                    var n, e = i[e];
                    return U.isFunction(t) ? (n = U.indexOf(e, t), e && 0 <= n && e.splice(n, 1)) : e && t === qv && (e.length = 0), this
                }, this.trigger = function(e) {
                    var t = i[e] ? i[e].slice() : [],
                        n = U.toArray(arguments).slice(1);
                    return U.map(t, function(e) {
                        return e.apply(G, n)
                    })
                }, this.triggerCancelable = function(e, t) {
                    e = i[e] ? i[e].slice() : [];
                    return U.map(e, function(e) {
                        if (!t.cancel) return e.apply(G, [t])
                    })
                }, this.triggerAsync = function() {
                    var e = U.map(this.trigger.apply(this, arguments), function(e) {
                        return !1 === e ? z.reject() : e
                    });
                    return z.all(e)
                }, this
            }
            var S = function() {
                    function e(e, t) {
                        this.name = e, this.groups = t || []
                    }
                    var t = "debug",
                        n = "lifecycle",
                        i = "runtime",
                        r = {
                            DEBUG: t,
                            LIFECYCLE: n,
                            RUNTIME: i
                        },
                        o = [new e("ready", [t, n]), new e("deliverablesLoaded", [t, n]), new e("guidesFailed", [t, n]), new e("guidesLoaded", [t, n]), new e("guideListChanged", [t, n]), new e("guideSeen", [t, n]), new e("guideAdvanced", [t, n]), new e("guideDismissed", [t, n]), new e("guideSnoozed", [t, n]), new e("beforeGuideShow", [n]), new e("beforeAdvance", [i]), new e("beforePrevious", [i]), new e("beforeSnooze", [i]), new e("beforeDismiss", [i]), new e("beforeUnmount", [i]), new e("unmounted", [i]), new e("beforeUpdate", [i]), new e("updated", [i]), new e("guideSnoozeCancelled", [t, n]), new e("guideTimeout", [t, n]), new e("guideLoopStarted", [t, n]), new e("guideLoopStopped", [t, n]), new e("identify", [t, n]), new e("metadata", [t, n]), new e("appUnloaded", [t, n]), new e("startPreview", [t]), new e("resourceFetchFail", [t]), new e("contentVerificationFail", [t]), new e("contentValidationFail", [t]), new e("renderFail", [t]), new e("appUsage", [n]), new e("eventCaptured", [t]), new e("error", [t, n]), new e("urlChanged", [n]), new e("leaderChanged", [n]), new e("transmit:locked", [n]), new e("transmit:unlocked", [n])],
                        a = kn.call({});

                    function s(e, t) {
                        e = {
                            type: e,
                            ts: v()
                        };
                        return I(t) && U.isObject(t) && (e.data = t), e
                    }
                    var u = {
                        debug: function() {
                            return Rn.addTracerIds(s.apply(null, arguments))
                        },
                        lifecycle: s,
                        runtime: s
                    };
                    var d = a.trigger;

                    function c(t) {
                        var e = U.findWhere(o, {
                                name: t
                            }),
                            n = U.toArray(arguments).slice(1),
                            i = {};
                        return U.each(e.groups, function(e) {
                            i.cancel || (i = u[e](t, n), d.apply(a, [e].concat(i)))
                        }), i.cancel || (i = s(t, n), d.apply(a, [t].concat(i))), i
                    }
                    return a.trigger = c, U.each(U.values(r), function(e) {
                        a[e] = {
                            on: U.partial(a.on, e),
                            one: U.partial(a.one, e),
                            off: U.partial(a.off, e)
                        }
                    }), U.each(o, function(e) {
                        e = e.name, a[e] = {
                            on: U.partial(a.on, e),
                            one: U.partial(a.one, e),
                            off: U.partial(a.off, e),
                            trigger: U.partial(c, e)
                        }
                    }), a
                }(),
                On = "_PENDO_T_",
                Nn = 11,
                Ln = function(e) {
                    return e + xt(Nn)
                };

            function Mn(e) {
                return e && "string" == typeof e && 0 === lt.call(e).length
            }
            var Fn = function(e) {
                    return I(e) && "" !== e && e !== Hn && "boolean" != typeof e && "object" != typeof e && !Mn(e)
                },
                Pn = function(e) {
                    return !(!e || "number" == typeof e) && e.substring(0, On.length) === On
                },
                Bn = function() {
                    return !y.get("disablePersistence")
                },
                Gn = function(e) {
                    U.each(e = e || ["visitorId", "accountId"], function(e) {
                        Kt(Vt(e)), d.clear(e)
                    })
                },
                Un = "VISITOR-UNIQUE-ID",
                Dn = function(e) {
                    return Un === e
                },
                Hn = "::",
                zn = function(e) {
                    return new RegExp(Hn).test(e)
                },
                jn = function(e, t) {
                    return Pn(e) ? Fn(t) ? Pn(t) ? (H("visitor is anonymous: " + t), !1) : Dn(t) ? (H("visitor id is the default: " + t), !1) : (H("Re-mapping visitor identity from " + e + " to " + t), !0) : (H("Not valid visitor id: " + t), !1) : (H("Not change an old, non-anonymous visitor id: " + e), !1)
                },
                Wn = function(e, t) {
                    return Fn(t) ? (H("Re-mapping account identity from " + e + " to " + t), e != t) : (H("Not valid account id: " + t), !1)
                },
                Jn = function(e, t) {
                    var n = {
                        old_visitor_id: j(),
                        old_account_id: Kn()
                    };
                    Fn(e) ? (qn(e), Fn(t) ? Vn(t) : (t = Kn(), Fn(t) || (d.clear("accountId"), t = null)), n.visitor_id = j(), n.account_id = Kn(), n.new_visitor = jn(n.old_visitor_id, e), n.new_account = Wn(n.old_account_id, t), n.old_visitor_id === e && n.old_account_id === t || S.identify.trigger(n)) : H("Invalid visitor id " + e)
                },
                j = function() {
                    var e, t = G.visitorId;
                    return Fn(t) || (Bn() ? (e = d.read("visitorId"), Fn(e) || (e = Ln(On), d.write("visitorId", e))) : e = Ln(On), G.visitorId = e), G.visitorId
                },
                qn = function(e) {
                    Fn(e) ? (G.visitorId = "" + e, Bn() && d.write("visitorId", G.visitorId, $t, !1, !0)) : H("Invalid visitor id " + e)
                },
                Kn = function() {
                    var e;
                    return !Fn(G.accountId) && Bn() && (e = d.read("accountId"), G.accountId = e), G.accountId
                },
                Vn = function(e) {
                    Fn(e) ? (G.accountId = "" + e, Bn() && d.write("accountId", G.accountId, null, !1, !0)) : H("Invalid account id " + e)
                };

            function Zn() {
                var e = {
                    old_visitor_id: j(),
                    old_account_id: Kn(),
                    wasCleared: !0
                };
                Gn(), delete G.visitorId, delete G.accountId, j(), U.extend(e, {
                    visitor_id: j(),
                    account_id: Kn()
                }), S.identify.trigger(e)
            }

            function $n(e) {
                return D(e.data[0], "wasCleared")
            }

            function c(e, t, n) {
                S.error.trigger(e, t, n)
            }
            var Yn = function(e, t) {
                    return t = !!t,
                        function() {
                            try {
                                return e.apply(this, arguments)
                            } catch (Ce) {
                                t || c(Ce)
                            }
                        }
                },
                Xn = Wv.URL,
                Qn = (Xn = function() {
                    var n, e = Wv.URL;
                    return "function" == typeof e && /native/.test(e) ? e : (n = Jv, function Xn(e) {
                        var t = n.createElement("a");
                        if (t.href = e, ":" === t.protocol) throw new Error("Uncaught TypeError: Failed to construct 'URL': Invalid URL");
                        if (t.href !== e && t.href !== encodeURI(e)) throw new Error("Uncaught TypeError: Failed to construct 'URL': Invalid URL");
                        return t.toString || (t.toString = function() {
                            return t.href
                        }), t
                    })
                }(), Xn);

            function ei(e) {
                var i = [],
                    r = [],
                    o = {},
                    a = {},
                    s = {
                        state: {},
                        commit: function(t, n) {
                            var e = o[t];
                            if (!e) throw new Error("mutation " + t + " not found");
                            e(n), U.each(i, function(e) {
                                e({
                                    type: t,
                                    payload: n
                                }, s.state)
                            })
                        },
                        dispatch: function(t, n) {
                            var e = a[t];
                            if (e) return e = e(n), U.each(r, function(e) {
                                e({
                                    type: t,
                                    payload: n
                                }, s.state)
                            }), e;
                            throw new Error("action " + t + " not found")
                        },
                        subscribe: U.partial(t, i),
                        subscribeAction: U.partial(t, r),
                        registerModule: function p(n, e) {
                            U.isString(n) && (n = [n]);
                            var t = d(s.state, e, n);
                            U.extend(s.getters, f(e, t, s, n));
                            U.extend(o, c(e, t, n));
                            U.extend(a, l(e, t, s, n));
                            U.each(e.modules, function(e, t) {
                                p(n.concat([t]), e)
                            })
                        },
                        getters: {}
                    };
                return e && s.registerModule([], e), s;

                function t(e, t) {
                    return U.isFunction(t) ? (e.push(t), n = e, i = t, function() {
                        var e = n.indexOf(i);
                        0 <= e && n.splice(e, 1)
                    }) : U.noop;
                    var n, i
                }

                function u(e, t) {
                    return (e = t ? e.concat([t]) : e).join("/")
                }

                function d(e, t, n) {
                    var i = e;
                    return U.each(n, function(e) {
                        i[e] || (i[e] = {}), i = i[e]
                    }), U.extend(i, be(t.state || {}))
                }

                function c(e, n, i) {
                    var r = {};
                    return U.each(e.mutations, function(e, t) {
                        r[u(i, t)] = U.partial(e, n)
                    }), r
                }

                function l(e, t, i, r) {
                    var n = {},
                        o = {
                            state: t,
                            rootState: i.state,
                            commit: function(e, t, n) {
                                n = n && n.root ? e : u(r, e);
                                i.commit(n, t)
                            },
                            dispatch: function(e, t, n) {
                                n = n && n.root ? e : u(r, e);
                                return i.dispatch(n, t)
                            },
                            getters: function(e, t) {
                                var i = u(t);
                                i && (i += "/");
                                return U.reduce(e, function(e, t, n) {
                                    return 0 === n.indexOf(i) && (e[n.replace(i, "")] = t), e
                                }, {})
                            }(i.getters, r),
                            rootGetters: i.getters
                        };
                    return U.each(e.actions, function(e, t) {
                        n[u(r, t)] = U.partial(e, o)
                    }), n
                }

                function f(e, n, i, r) {
                    var o = {},
                        a = {};
                    return U.each(e.getters, function(e, t) {
                        a[t] = o[u(r, t)] = function() {
                            return e(n, a, i.state, i.getters)
                        }
                    }), o
                }
            }

            function ti() {
                return ei()
            }
            var W = ti();

            function ni(e) {
                return e && U.isFunction(e.composedPath)
            }

            function ii(e) {
                if (ni(e)) try {
                    return e.composedPath()
                } catch (Ce) {
                    return e.path
                }
                return null
            }

            function ri(e) {
                return e.shadowRoot
            }

            function oi(e, t) {
                return "undefined" != typeof(t = t || Wv).ShadowRoot && e instanceof t.ShadowRoot && e.host
            }

            function ai(e, t) {
                return oi(e, t) ? e.host : e.parentNode
            }

            function si(e, t) {
                e.assignedSlot || ai(e, t)
            }
            W.subscribe(function(e, t) {});
            var l = function() {
                    function u(e) {
                        return !!e && -1 < e.indexOf(l.PSEUDO_ELEMENT)
                    }
                    return {
                        PSEUDO_ELEMENT: "::shadow",
                        getComposedPath: ii,
                        getShadowRoot: ri,
                        isElementShadowRoot: oi,
                        getParent: ai,
                        isShadowSelector: u,
                        wrapSizzle: function(a) {
                            var i = U.extend(function s(e, t, n, i) {
                                var r, o;
                                return u(e) && !U.isFunction(Jv.documentElement.attachShadow) ? a(e.replace(new RegExp(l.PSEUDO_ELEMENT, "g"), ""), t, n, i) : u(e) ? (r = {
                                    baseCss: (o = (o = e).split(l.PSEUDO_ELEMENT)).splice(0, 1)[0],
                                    shadowCss: o.join(l.PSEUDO_ELEMENT)
                                }, o = s(r.baseCss, t), U.reduce(o, function(e, t) {
                                    return l.getShadowRoot(t) ? e.concat(s(r.shadowCss, l.getShadowRoot(t), n, i)) : e
                                }, [])) : a(e, t, n, i)
                            }, a);
                            return i.matchesSelector = U.wrap(i.matchesSelector, function(e, t, n) {
                                return !l.isElementShadowRoot(t) && (u(n) ? 0 < i(n, Jv, null, [t]).length : e(t, n))
                            }), i
                        }
                    }
                }(),
                ui = {
                    exports: {}
                },
                di = (
                    /*!
                     * Sizzle CSS Selector Engine v2.3.5
                     * https://sizzlejs.com/
                     *
                     * @license
                     * Copyright JS Foundation and other contributors
                     * Released under the MIT license
                     * https://js.foundation/
                     *
                     * Date: 2020-03-14
                     */
                    ! function(P) {
                        var e, p, w, o, B, h, G, U, I, u, d, S, x, n, C, g, i, r, m, a = Wv,
                            E = "sizzle" + +new Date,
                            c = a.document,
                            _ = 0,
                            D = 0,
                            H = N(),
                            z = N(),
                            j = N(),
                            v = N(),
                            W = function(e, t) {
                                return e === t && (d = !0), 0
                            },
                            J = {}.hasOwnProperty,
                            t = [],
                            q = t.pop,
                            K = t.push,
                            T = t.push,
                            V = t.slice,
                            A = function(e, t) {
                                for (var n = 0, i = e.length; n < i; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            s = "[\\x20\\t\\r\\n\\f]",
                            l = "(?:\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            $ = "\\[" + s + "*(" + l + ")(?:" + s + "*([*^$|!~]?=)" + s + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + l + "))|)" + s + "*\\]",
                            Y = ":(" + l + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                            X = new RegExp(s + "+", "g"),
                            R = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$", "g"),
                            Q = new RegExp("^" + s + "*," + s + "*"),
                            ee = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"),
                            te = new RegExp(s + "|>"),
                            ne = new RegExp(Y),
                            ie = new RegExp("^" + l + "$"),
                            f = {
                                ID: new RegExp("^#(" + l + ")"),
                                CLASS: new RegExp("^\\.(" + l + ")"),
                                TAG: new RegExp("^(" + l + "|[*])"),
                                ATTR: new RegExp("^" + $),
                                PSEUDO: new RegExp("^" + Y),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + s + "*(even|odd|(([+-]|)(\\d*)n|)" + s + "*(?:([+-]|)" + s + "*(\\d+)|))" + s + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + Z + ")$", "i"),
                                needsContext: new RegExp("^" + s + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + s + "*((?:-\\d)?\\d*)" + s + "*\\)|)(?=[^-]|$)", "i")
                            },
                            re = /HTML$/i,
                            oe = /^(?:input|select|textarea|button)$/i,
                            ae = /^h\d$/i,
                            y = function(e) {
                                return !/native code/.test(a.ShadowRoot) && "function" == typeof e || /^[^{]+\{\s*\[native \w/.test(e)
                            },
                            se = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ue = /[+~]/,
                            b = new RegExp("\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\([^\\r\\n\\f])", "g"),
                            k = function(e, t) {
                                e = "0x" + e.slice(1) - 65536;
                                return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
                            },
                            de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ce = function(e, t) {
                                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                            },
                            le = function() {
                                S()
                            },
                            fe = be(function(e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                            }, {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            T.apply(t = V.call(c.childNodes), c.childNodes), t[c.childNodes.length].nodeType
                        } catch (Ce) {
                            T = {
                                apply: t.length ? function(e, t) {
                                    K.apply(e, V.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                                    e.length = n - 1
                                }
                            }
                        }

                        function O(e, t, n, i) {
                            var r, o, a, s, u, d, c = t && t.ownerDocument,
                                l = t ? t.nodeType : 9;
                            if (n = n || [], "string" != typeof e || !e || 1 !== l && 9 !== l && 11 !== l) return n;
                            if (!i && (S(t), t = t || x, C)) {
                                if (11 !== l && (s = se.exec(e)))
                                    if (r = s[1]) {
                                        if (9 === l) {
                                            if (!(d = t.getElementById(r))) return n;
                                            if (d.id === r) return n.push(d), n
                                        } else if (c && (d = c.getElementById(r)) && m(t, d) && d.id === r) return n.push(d), n
                                    } else {
                                        if (s[2]) return T.apply(n, t.getElementsByTagName(e)), n;
                                        if ((r = s[3]) && p.getElementsByClassName && t.getElementsByClassName) return T.apply(n, t.getElementsByClassName(r)), n
                                    }
                                if (p.qsa && !v[e + " "] && (!g || !g.test(e)) && (1 !== l || "object" !== t.nodeName.toLowerCase())) {
                                    if (d = e, c = t, 1 === l && (te.test(e) || ee.test(e))) {
                                        for ((c = ue.test(e) && me(t.parentNode) || t) === t && p.scope || ((a = t.getAttribute("id")) ? a = a.replace(de, ce) : t.setAttribute("id", a = E)), o = (u = h(e)).length; o--;) u[o] = (a ? "#" + a : ":scope") + " " + ye(u[o]);
                                        d = u.join(",")
                                    }
                                    try {
                                        return T.apply(n, c.querySelectorAll(d)), n
                                    } catch (f) {
                                        v(e, !0)
                                    } finally {
                                        a === E && t.removeAttribute("id")
                                    }
                                }
                            }
                            return U(e.replace(R, "$1"), t, n, i)
                        }

                        function N() {
                            var n = [];

                            function i(e, t) {
                                return n.push(e + " ") > w.cacheLength && delete i[n.shift()], i[e + " "] = t
                            }
                            return i
                        }

                        function L(e) {
                            return e[E] = !0, e
                        }

                        function M(e) {
                            var t = x.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (Ce) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t)
                            }
                        }

                        function pe(e, t) {
                            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
                        }

                        function he(e, t) {
                            var n = t && e,
                                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (i) return i;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function ge(t) {
                            return function(e) {
                                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && fe(e) === t : e.disabled === t : "label" in e && e.disabled === t
                            }
                        }

                        function F(a) {
                            return L(function(o) {
                                return o = +o, L(function(e, t) {
                                    for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                                })
                            })
                        }

                        function me(e) {
                            return e && "undefined" != typeof e.getElementsByTagName && e
                        }
                        for (e in p = O.support = {}, B = O.isXML = function(e) {
                                var t = e.namespaceURI,
                                    e = (e.ownerDocument || e).documentElement;
                                return !re.test(t || e && e.nodeName || "HTML")
                            }, S = O.setDocument = function(e) {
                                var e = e ? e.ownerDocument || e : c;
                                return e != x && 9 === e.nodeType && e.documentElement && (n = (x = e).documentElement, C = !B(x), c != x && (e = x.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", le, !1) : e.attachEvent && e.attachEvent("onunload", le)), p.scope = M(function(e) {
                                    return n.appendChild(e).appendChild(x.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                }), p.attributes = M(function(e) {
                                    return e.className = "i", !e.getAttribute("className")
                                }), p.getElementsByTagName = M(function(e) {
                                    return e.appendChild(x.createComment("")), !e.getElementsByTagName("*").length
                                }), p.getElementsByClassName = y(x.getElementsByClassName), p.getById = M(function(e) {
                                    return n.appendChild(e).id = E, !x.getElementsByName || !x.getElementsByName(E).length
                                }), p.getById ? (w.filter.ID = function(e) {
                                    var t = e.replace(b, k);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }, w.find.ID = function(e, t) {
                                    if ("undefined" != typeof t.getElementById && C) return (e = t.getElementById(e)) ? [e] : []
                                }) : (w.filter.ID = function(e) {
                                    var t = e.replace(b, k);
                                    return function(e) {
                                        e = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                        return e && e.value === t
                                    }
                                }, w.find.ID = function(e, t) {
                                    if ("undefined" != typeof t.getElementById && C) {
                                        var n, i, r, o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                        }
                                        return []
                                    }
                                }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                                } : function(e, t) {
                                    var n, i = [],
                                        r = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" !== e) return o;
                                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                    return i
                                }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                                    if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
                                }, i = [], g = [], (p.qsa = y(x.querySelectorAll)) && (M(function(e) {
                                    var t;
                                    n.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + s + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + s + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + E + "-]").length || g.push("~="), (t = x.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + s + "*name" + s + "*=" + s + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                                }), M(function(e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = x.createElement("input");
                                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + s + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), n.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                                })), (p.matchesSelector = y(r = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && M(function(e) {
                                    p.disconnectedMatch = r.call(e, "*"), r.call(e, "[s!='']:x"), i.push("!=", Y)
                                }), g = g.length && new RegExp(g.join("|")), i = i.length && new RegExp(i.join("|")), e = y(n.compareDocumentPosition), m = e || y(n.contains) ? function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        t = t && t.parentNode;
                                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                                } : function(e, t) {
                                    if (t)
                                        for (; t = t.parentNode;)
                                            if (t === e) return !0;
                                    return !1
                                }, W = e ? function(e, t) {
                                    var n;
                                    return e === t ? (d = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == x || e.ownerDocument == c && m(c, e) ? -1 : t == x || t.ownerDocument == c && m(c, t) ? 1 : u ? A(u, e) - A(u, t) : 0 : 4 & n ? -1 : 1)
                                } : function(e, t) {
                                    if (e === t) return d = !0, 0;
                                    var n, i = 0,
                                        r = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!r || !o) return e == x ? -1 : t == x ? 1 : r ? -1 : o ? 1 : u ? A(u, e) - A(u, t) : 0;
                                    if (r === o) return he(e, t);
                                    for (n = e; n = n.parentNode;) a.unshift(n);
                                    for (n = t; n = n.parentNode;) s.unshift(n);
                                    for (; a[i] === s[i];) i++;
                                    return i ? he(a[i], s[i]) : a[i] == c ? -1 : s[i] == c ? 1 : 0
                                }), x
                            }, O.matches = function(e, t) {
                                return O(e, null, null, t)
                            }, O.matchesSelector = function(e, t) {
                                if (S(e), p.matchesSelector && C && !v[t + " "] && (!i || !i.test(t)) && (!g || !g.test(t))) try {
                                    var n = r.call(e, t);
                                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                                } catch (Ce) {
                                    v(t, !0)
                                }
                                return 0 < O(t, x, null, [e]).length
                            }, O.contains = function(e, t) {
                                return (e.ownerDocument || e) != x && S(e), m(e, t)
                            }, O.attr = function(e, t) {
                                (e.ownerDocument || e) != x && S(e);
                                var n = w.attrHandle[t.toLowerCase()],
                                    n = n && J.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : qv;
                                return n !== qv ? n : p.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                            }, O.escape = function(e) {
                                return (e + "").replace(de, ce)
                            }, O.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, O.uniqueSort = function(e) {
                                var t, n = [],
                                    i = 0,
                                    r = 0;
                                if (d = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(W), d) {
                                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                                    for (; i--;) e.splice(n[i], 1)
                                }
                                return u = null, e
                            }, o = O.getText = function(e) {
                                var t, n = "",
                                    i = 0,
                                    r = e.nodeType;
                                if (r) {
                                    if (1 === r || 9 === r || 11 === r) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                                    } else if (3 === r || 4 === r) return e.nodeValue
                                } else
                                    for (; t = e[i++];) n += o(t);
                                return n
                            }, (w = O.selectors = {
                                cacheLength: 50,
                                createPseudo: L,
                                match: f,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(e) {
                                        return e[1] = e[1].replace(b, k), e[3] = (e[3] || e[4] || e[5] || "").replace(b, k), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || O.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && O.error(e[0]), e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return f.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ne.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(b, k).toLowerCase();
                                        return "*" === e ? function() {
                                            return !0
                                        } : function(e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                    },
                                    CLASS: function(e) {
                                        var t = H[e + " "];
                                        return t || (t = new RegExp("(^|" + s + ")" + e + "(" + s + "|$)")) && H(e, function(e) {
                                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                        })
                                    },
                                    ATTR: function(t, n, i) {
                                        return function(e) {
                                            e = O.attr(e, t);
                                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(X, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                                        }
                                    },
                                    CHILD: function(h, e, t, g, m) {
                                        var v = "nth" !== h.slice(0, 3),
                                            y = "last" !== h.slice(-4),
                                            b = "of-type" === e;
                                        return 1 === g && 0 === m ? function(e) {
                                            return !!e.parentNode
                                        } : function(e, t, n) {
                                            var i, r, o, a, s, u, d = v != y ? "nextSibling" : "previousSibling",
                                                c = e.parentNode,
                                                l = b && e.nodeName.toLowerCase(),
                                                f = !n && !b,
                                                p = !1;
                                            if (c) {
                                                if (v) {
                                                    for (; d;) {
                                                        for (a = e; a = a[d];)
                                                            if (b ? a.nodeName.toLowerCase() === l : 1 === a.nodeType) return !1;
                                                        u = d = "only" === h && !u && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (u = [y ? c.firstChild : c.lastChild], y && f) {
                                                    for (p = (s = (i = (r = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === _ && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[d] || (p = s = 0) || u.pop();)
                                                        if (1 === a.nodeType && ++p && a === e) {
                                                            r[h] = [_, s, p];
                                                            break
                                                        }
                                                } else if (!1 === (p = f ? s = (i = (r = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === _ && i[1] : p))
                                                    for (;
                                                        (a = ++s && a && a[d] || (p = s = 0) || u.pop()) && ((b ? a.nodeName.toLowerCase() !== l : 1 !== a.nodeType) || !++p || (f && ((r = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [_, p]), a !== e)););
                                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                                            }
                                        }
                                    },
                                    PSEUDO: function(e, o) {
                                        var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || O.error("unsupported pseudo: " + e);
                                        return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? L(function(e, t) {
                                            for (var n, i = a(e, o), r = i.length; r--;) e[n = A(e, i[r])] = !(t[n] = i[r])
                                        }) : function(e) {
                                            return a(e, 0, t)
                                        }) : a
                                    }
                                },
                                pseudos: {
                                    not: L(function(e) {
                                        var i = [],
                                            r = [],
                                            s = G(e.replace(R, "$1"));
                                        return s[E] ? L(function(e, t, n, i) {
                                            for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                                        }) : function(e, t, n) {
                                            return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
                                        }
                                    }),
                                    has: L(function(t) {
                                        return function(e) {
                                            return 0 < O(t, e).length
                                        }
                                    }),
                                    contains: L(function(t) {
                                        return t = t.replace(b, k),
                                            function(e) {
                                                return -1 < (e.textContent || o(e)).indexOf(t)
                                            }
                                    }),
                                    lang: L(function(n) {
                                        return ie.test(n || "") || O.error("unsupported lang: " + n), n = n.replace(b, k).toLowerCase(),
                                            function(e) {
                                                var t;
                                                do {
                                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                                return !1
                                            }
                                    }),
                                    target: function(e) {
                                        var t = a.location && a.location.hash;
                                        return t && t.slice(1) === e.id
                                    },
                                    root: function(e) {
                                        return e === n
                                    },
                                    focus: function(e) {
                                        return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: ge(!1),
                                    disabled: ge(!0),
                                    checked: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                                    },
                                    selected: function(e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !w.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return ae.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return oe.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && "button" === e.type || "button" === t
                                    },
                                    text: function(e) {
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                                    },
                                    first: F(function() {
                                        return [0]
                                    }),
                                    last: F(function(e, t) {
                                        return [t - 1]
                                    }),
                                    eq: F(function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    }),
                                    even: F(function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    }),
                                    odd: F(function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    }),
                                    lt: F(function(e, t, n) {
                                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                                        return e
                                    }),
                                    gt: F(function(e, t, n) {
                                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                        return e
                                    })
                                }
                            }).pseudos.nth = w.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) w.pseudos[e] = function(t) {
                            return function(e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t
                            }
                        }(e);
                        for (e in {
                                submit: !0,
                                reset: !0
                            }) w.pseudos[e] = function(n) {
                            return function(e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t || "button" === t) && e.type === n
                            }
                        }(e);

                        function ve() {}

                        function ye(e) {
                            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                            return i
                        }

                        function be(a, e, t) {
                            var s = e.dir,
                                u = e.next,
                                d = u || s,
                                c = t && "parentNode" === d,
                                l = D++;
                            return e.first ? function(e, t, n) {
                                for (; e = e[s];)
                                    if (1 === e.nodeType || c) return a(e, t, n);
                                return !1
                            } : function(e, t, n) {
                                var i, r, o = [_, l];
                                if (n) {
                                    for (; e = e[s];)
                                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                                } else
                                    for (; e = e[s];)
                                        if (1 === e.nodeType || c)
                                            if (r = (r = e[E] || (e[E] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[s] || e;
                                            else {
                                                if ((i = r[d]) && i[0] === _ && i[1] === l) return o[2] = i[2];
                                                if ((r[d] = o)[2] = a(e, t, n)) return !0
                                            } return !1
                            }
                        }

                        function we(r) {
                            return 1 < r.length ? function(e, t, n) {
                                for (var i = r.length; i--;)
                                    if (!r[i](e, t, n)) return !1;
                                return !0
                            } : r[0]
                        }

                        function Ie(e, t, n, i, r) {
                            for (var o, a = [], s = 0, u = e.length, d = null != t; s < u; s++) !(o = e[s]) || n && !n(o, i, r) || (a.push(o), d && t.push(s));
                            return a
                        }

                        function Se(p, h, g, m, v, e) {
                            return m && !m[E] && (m = Se(m)), v && !v[E] && (v = Se(v, e)), L(function(e, t, n, i) {
                                var r, o, a, s = [],
                                    u = [],
                                    d = t.length,
                                    c = e || function(e, t, n) {
                                        for (var i = 0, r = t.length; i < r; i++) O(e, t[i], n);
                                        return n
                                    }(h || "*", n.nodeType ? [n] : n, []),
                                    l = !p || !e && h ? c : Ie(c, s, p, n, i),
                                    f = g ? v || (e ? p : d || m) ? [] : t : l;
                                if (g && g(l, f, n, i), m)
                                    for (r = Ie(f, u), m(r, [], n, i), o = r.length; o--;)(a = r[o]) && (f[u[o]] = !(l[u[o]] = a));
                                if (e) {
                                    if (v || p) {
                                        if (v) {
                                            for (r = [], o = f.length; o--;)(a = f[o]) && r.push(l[o] = a);
                                            v(null, f = [], r, i)
                                        }
                                        for (o = f.length; o--;)(a = f[o]) && -1 < (r = v ? A(e, a) : s[o]) && (e[r] = !(t[r] = a))
                                    }
                                } else f = Ie(f === t ? f.splice(d, f.length) : f), v ? v(null, t, f, i) : T.apply(t, f)
                            })
                        }
                        ve.prototype = w.filters = w.pseudos, w.setFilters = new ve, h = O.tokenize = function(e, t) {
                            var n, i, r, o, a, s, u, d = z[e + " "];
                            if (d) return t ? 0 : d.slice(0);
                            for (a = e, s = [], u = w.preFilter; a;) {
                                for (o in n && !(i = Q.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = ee.exec(a)) && (n = i.shift(), r.push({
                                        value: n,
                                        type: i[0].replace(R, " ")
                                    }), a = a.slice(n.length)), w.filter) w.filter.hasOwnProperty(o) && (i = f[o].exec(a)) && (!u[o] || (i = u[o](i))) && (n = i.shift(), r.push({
                                    value: n,
                                    type: o,
                                    matches: i
                                }), a = a.slice(n.length));
                                if (!n) break
                            }
                            return t ? a.length : a ? O.error(e) : z(e, s).slice(0)
                        }, G = O.compile = function(e, t) {
                            var n, m, v, y, b, i, r = [],
                                o = [],
                                a = j[e + " "];
                            if (!a) {
                                for (n = (t = t || h(e)).length; n--;)((a = function l(e) {
                                    for (var i, t, n, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                                            return e === i
                                        }, a, !0), d = be(function(e) {
                                            return -1 < A(i, e)
                                        }, a, !0), c = [function(e, t, n) {
                                            return e = !o && (n || t !== I) || ((i = t).nodeType ? u : d)(e, t, n), i = null, e
                                        }]; s < r; s++)
                                        if (t = w.relative[e[s].type]) c = [be(we(c), t)];
                                        else {
                                            if ((t = w.filter[e[s].type].apply(null, e[s].matches))[E]) {
                                                for (n = ++s; n < r && !w.relative[e[n].type]; n++);
                                                return Se(1 < s && we(c), 1 < s && ye(e.slice(0, s - 1).concat({
                                                    value: " " === e[s - 2].type ? "*" : ""
                                                })).replace(R, "$1"), t, s < n && l(e.slice(s, n)), n < r && l(e = e.slice(n)), n < r && ye(e))
                                            }
                                            c.push(t)
                                        }
                                    return we(c)
                                }(t[n]))[E] ? r : o).push(a);
                                (a = j(e, (m = o, y = 0 < (v = r).length, b = 0 < m.length, i = function(e, t, n, i, r) {
                                    var o, a, s, u = 0,
                                        d = "0",
                                        c = e && [],
                                        l = [],
                                        f = I,
                                        p = e || b && w.find.TAG("*", r),
                                        h = _ += null == f ? 1 : Math.random() || .1,
                                        g = p.length;
                                    for (r && (I = t == x || t || r); d !== g && null != (o = p[d]); d++) {
                                        if (b && o) {
                                            for (a = 0, t || o.ownerDocument == x || (S(o), n = !C); s = m[a++];)
                                                if (s(o, t || x, n)) {
                                                    i.push(o);
                                                    break
                                                }
                                            r && (_ = h)
                                        }
                                        y && ((o = !s && o) && u--, e && c.push(o))
                                    }
                                    if (u += d, y && d !== u) {
                                        for (a = 0; s = v[a++];) s(c, l, t, n);
                                        if (e) {
                                            if (0 < u)
                                                for (; d--;) c[d] || l[d] || (l[d] = q.call(i));
                                            l = Ie(l)
                                        }
                                        T.apply(i, l), r && !e && 0 < l.length && 1 < u + v.length && O.uniqueSort(i)
                                    }
                                    return r && (_ = h, I = f), c
                                }, y ? L(i) : i))).selector = e
                            }
                            return a
                        }, U = O.select = function(e, t, n, i) {
                            var r, o, a, s, u, d = "function" == typeof e && e,
                                c = !i && h(e = d.selector || e);
                            if (n = n || [], 1 === c.length) {
                                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && w.relative[o[1].type]) {
                                    if (!(t = (w.find.ID(a.matches[0].replace(b, k), t) || [])[0])) return n;
                                    d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                                }
                                for (r = f.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
                                    if ((u = w.find[s]) && (i = u(a.matches[0].replace(b, k), ue.test(o[0].type) && me(t.parentNode) || t))) {
                                        if (o.splice(r, 1), e = i.length && ye(o)) break;
                                        return T.apply(n, i), n
                                    }
                            }
                            return (d || G(e, c))(i, t, !C, n, !t || ue.test(e) && me(t.parentNode) || t), n
                        }, p.sortStable = E.split("").sort(W).join("") === E, p.detectDuplicates = !!d, S(), p.sortDetached = M(function(e) {
                            return 1 & e.compareDocumentPosition(x.createElement("fieldset"))
                        }), M(function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        }) || pe("type|href|height|width", function(e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }), p.attributes && M(function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        }) || pe("value", function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                        }), M(function(e) {
                            return null == e.getAttribute("disabled")
                        }) || pe(Z, function(e, t, n) {
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                        });
                        var xe = a.Sizzle;
                        O.noConflict = function() {
                            return a.Sizzle === O && (a.Sizzle = xe), O
                        }, "function" == typeof qv && qv.amd ? qv(function() {
                            return O
                        }) : P.exports ? P.exports = O : a.Sizzle = O
                    }(ui), ui.exports),
                ci = l.wrapSizzle(di);

            function J(e, t) {
                var n, i = this;
                if (e && e instanceof J) return e;
                if (!(i instanceof J)) return new J(e, t);
                if (e)
                    if (e.nodeType) n = [e];
                    else if (r = /^<(\w+)\/?>$/.exec(e)) n = [Jv.createElement(r[1])];
                else if (/^<[\w\W]+>$/.test(e)) {
                    var r = Jv.createElement("div");
                    r.innerHTML = e, n = U.toArray(r.childNodes)
                } else if (U.isString(e)) {
                    t instanceof J && (t = 0 < t.length ? t[0] : null);
                    try {
                        n = ci(e, t)
                    } catch (Ce) {
                        n = []
                    }
                } else n = [e];
                else n = [];
                return U.each(n, function(e, t) {
                    i[t] = e
                }), i.context = t, i.length = n.length, i
            }

            function li() {
                this.ownerKey = "_pendo_" + xt(8)
            }
            U.extend(li.prototype, {
                cache: function(e) {
                    var t;
                    return U.isObject(e) ? ((t = e[this.ownerKey]) || (e[this.ownerKey] = t = {}), t) : {}
                },
                set: function(e, t, n) {
                    e = this.cache(e);
                    return e[t] = n, e
                },
                get: function(e, t) {
                    return t === qv ? this.cache(e) : e[this.ownerKey] && e[this.ownerKey][t]
                },
                remove: function(e, t) {
                    var n = this.cache(e);
                    delete n[t], t !== qv && !U.isEmpty(n) || (e[this.ownerKey] = qv)
                }
            });
            var fi = new li,
                pi = 1,
                hi = 2,
                gi = 3;

            function mi(e) {
                return U.isNumber(e.eventPhase) && e.eventPhase === pi
            }

            function vi(e) {
                return U.isNumber(e.eventPhase) && e.eventPhase === hi
            }

            function q(e, t, n, i) {
                e && t && n && (e === Wv && "error" === t || (i = i || !1, e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent("on" + t, n)))
            }

            function yi(e, t, n, i) {
                e && t && n && (i = i || !1, e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent("on" + t, n))
            }
            var bi = function(e) {
                    var t = l.getComposedPath(e);
                    return t && 0 < t.length ? t[0] : e.target || e.srcElement
                },
                wi = {
                    add: function(t, e) {
                        var n = fi.get(t),
                            i = (n.handle || (n.handle = function(e) {
                                wi.dispatch(t, e)
                            }), e.id = U.uniqueId(), e.capture ? "captureEvents" : "bubbleEvents"),
                            i = n[i] = n[i] || {},
                            i = i[e.type] = i[e.type] || [];
                        i.length || q(t, e.type, n.handle, e.capture), i.push(e)
                    },
                    dispatch: function(i, r) {
                        var e, t, o;
                        i && (e = (fi.get(i, "captureEvents") || {})[r.type] || [], t = (fi.get(i, "bubbleEvents") || {})[r.type] || [], (t = e.concat(t)).length && !(o = fi.get(r)).ignore && (o.handled = o.handled || {}, U.each(t.slice(), function(e) {
                            var t = !!e.capture === mi(r),
                                n = vi(r),
                                t = !t && !n;
                            if (!(bi(r) !== i && t || o.handled[e.id])) {
                                o.handled[e.id] = !0;
                                try {
                                    (!I(e.selector) || 0 < J(bi(r)).closest(e.selector).length) && e.handler.call(i, r)
                                } catch (Ce) {
                                    pn(Ce)
                                }
                            }
                        })))
                    },
                    remove: function(e, t, n, i) {
                        var r = fi.get(e);
                        if (r) {
                            if (U.isFunction(n)) {
                                var o = i ? r.captureEvents : r.bubbleEvents;
                                if (!o) return;
                                var a = o[t];
                                if (!a) return;
                                var s = dt(a, function(e) {
                                    return e.handler === n
                                });
                                0 <= s && a.splice(s, 1), a.length || (delete o[t], yi(e, t, r.handle, i))
                            } else n === qv && (r.captureEvents && r.captureEvents[t] && (delete r.captureEvents[t], yi(e, t, r.handle, !0)), r.bubbleEvents && r.bubbleEvents[t] && (delete r.bubbleEvents[t], yi(e, t, r.handle)));
                            U.isEmpty(r.captureEvents) && U.isEmpty(r.bubbleEvents) && (fi.remove(e, "captureEvents"), fi.remove(e, "bubbleEvents"), fi.remove(e, "handle"))
                        }
                    },
                    trigger: function(e) {
                        var t = fi.get(e);
                        if (!t.pendoStopped)
                            if (e.bubbles) {
                                var n = bi(e);
                                if (n) {
                                    for (var i, r = n, o = []; r;) o.unshift(r), r = l.isElementShadowRoot(r) ? r.host : r.parentNode;
                                    if (o.unshift(Wv), mi(e)) {
                                        for (i = 0; i < o.length - 1 && !t.pendoStopped; ++i) wi.dispatch(o[i], e);
                                        (e = wi.clone(e)).eventPhase = hi
                                    }
                                    for (e.eventPhase !== hi || t.pendoStopped || (wi.dispatch(n, e), (e = wi.clone(e)).eventPhase = gi), i = o.length - (null == e.eventPhase ? 1 : 2); 0 <= i && !t.pendoStopped; --i) wi.dispatch(o[i], e)
                                }
                            } else wi.dispatch(bi(e), e)
                    },
                    clone: function(e) {
                        var t = U.pick(e, ["type", "target", "srcElement", "altKey", "ctrlKey", "shiftKey", "metaKey", "button", "which", "eventPhase", "bubbles", fi.ownerKey]),
                            e = l.getComposedPath(e);
                        return e && (t.composedPath = U.constant(e)), t
                    },
                    $: {
                        on: function(e, n, i, r) {
                            return U.isFunction(n) && (r = i, i = n, n = null), e = e.split(" "), this.each(function(t) {
                                U.each(e, function(e) {
                                    wi.add(t, {
                                        type: e,
                                        selector: n,
                                        handler: i,
                                        capture: r
                                    })
                                })
                            })
                        }
                    }
                },
                Ii = function() {
                    "use strict";

                    function r() {
                        return Wv.XMLHttpRequest || ActiveXObject
                    }

                    function i(e) {
                        var t = z.defer(),
                            n = new(r())("MSXML2.XMLHTTP.3.0");
                        return n.open(e.method || "GET", e.url, !e.sync), U.each(e.headers, function(e, t) {
                                n.setRequestHeader(t.toLowerCase(), e)
                            }), n.onreadystatechange = function() {
                                var e;
                                4 === n.readyState && (e = function(e) {
                                    var t = {
                                        status: e.status
                                    };
                                    try {
                                        t.data = w.parse(e.responseText)
                                    } catch (Ce) {
                                        t.data = e.responseText
                                    }
                                    return t
                                }(n), 200 <= n.status && n.status < 300 ? t.resolve(e) : t.reject(e))
                            }, e.withCredentials && (n.withCredentials = !0), e.data ? n.send(e.data) : n.send(),
                            function i(e) {
                                var t = e.then;
                                var n = e["catch"];
                                e.then = function() {
                                    return i(t.apply(this, arguments))
                                };
                                e["catch"] = function() {
                                    return i(n.apply(this, arguments))
                                };
                                e.fail = e["catch"];
                                return e
                            }(t.promise)
                    }

                    function o(e, t, n) {
                        return i({
                            method: "POST",
                            url: e,
                            data: t,
                            headers: n
                        })
                    }
                    return U.extend(i, {
                        get: function(e, t) {
                            return i({
                                method: "GET",
                                url: e,
                                headers: t
                            })
                        },
                        post: o,
                        postJSON: function(e, t, n) {
                            return (n = n || {})["content-type"] = "application/json", o(e, t = w.stringify(t), n)
                        },
                        urlFor: function(e, t, n) {
                            if (U.isArray(t)) i = t;
                            else {
                                if (!U.isObject(t)) return e || "";
                                i = U.keys(t)
                            }
                            var i = U.map(i, function(e) {
                                    return U.isArray(t) ? Pt(e) : Pt(e) + "=" + Pt(t[e])
                                }).join("&"),
                                r = (e = e.split("#", 2))[0],
                                o = U.contains(r, "?");
                            return n = void 0 !== n ? n : e[1], [encodeURI(r), i ? (o ? "&" : "?") + i : "", n ? "#" + n : ""].join("")
                        },
                        supported: function() {
                            return void 0 !== r()
                        }
                    })
                }(),
                Si = function() {
                    return Wv && Wv.process && Wv.process.versions && Wv.process.versions.electron
                },
                xi = function() {
                    return Wv.process.resourcesPath || ""
                },
                Ci = function() {
                    return Wv.process.env.PWD || ""
                },
                Ei = function() {
                    return Wv.process.env.HOME || ""
                },
                _i = function() {
                    return Wv.process.env.npm_package_name || ""
                },
                Ti = function() {
                    return y.get("annotateUrl") || Ni() || y.get("sanitizeUrl") || y.get(ji) || y.get("xhrWhitelist")
                },
                Ai = function() {
                    return Ni() ? {
                        href: Oi(location.href),
                        origin: location.origin
                    } : W.getters["location/url"]()
                },
                Ri = function() {
                    return new Qn(Wv.location.href)
                },
                ki = function() {
                    var e, t, n, i;
                    return Ti() ? (e = Ri(), Ni() && (e.href = Oi(e.href)), Si() ? (t = f.electronResourcesPath(), n = f.electronUserDirectory(), i = f.electronAppName(), ("https://" + e.href.replace(t, i)).replace(e.origin + n, i).replace(f.electronUserHomeDirectory(), "").replace("file:///", "")) : Ji(e.href)) : W.getters["location/href"]()
                },
                Oi = function(e) {
                    return e.match(/(.+?)(?:#|$)/)[1]
                },
                Ni = function() {
                    return !0 === y.get("ignoreHashRouting")
                },
                Li, Mi = 500;

            function Fi() {
                U.isUndefined(Li) && ! function e() {
                    Di(), Li = setTimeout(e, Mi)
                }()
            }
            var Pi = function(e) {
                    var t;
                    try {
                        t = ki()
                    } catch (Ce) {}
                    return t
                },
                Bi = [],
                Gi = !1,
                Ui = null;

            function Di() {
                var e = Pi();
                Ui != e && (Ui = e, U.map(Bi, function(e) {
                    e(Pi())
                }))
            }
            var Hi = function(e) {
                    var n;
                    return H("Initializing Pendo URL Watcher"), Gi || (b.supportsHistoryApi() && (n = Wv.history, U.each(["pushState", "replaceState"], function(e) {
                        n[e] = U.wrap(n[e], function(e) {
                            var t = e.apply(n, U.toArray(arguments).slice(1));
                            return Rt("setTimeout")(Di, 0), t
                        })
                    }), q(Wv, "popstate", Di)), b.supportsHashChange() && q(Wv, "hashchange", Di), b.supportsHistoryApi() && b.supportsHashChange() || Fi(), Gi = !0), Bi.push(e), e
                },
                zi = function() {
                    Bi = []
                },
                ji = "queryStringWhitelist";

            function Wi(e) {
                var t = y.get("sanitizeUrl");
                return U.isFunction(t) ? t(e) : e
            }

            function Ji(e) {
                e = e || Ai().href;
                var t, n, i, r = y.get("annotateUrl");
                if (r) {
                    if (U.isFunction(r)) return (r = r()) && (U.isObject(r) || U.isArray(r)) ? (t = r.exclude, n = r.include, i = r.fragment, delete r.fragment, (t && U.isArray(t) || n && (U.isArray(n) || U.isObject(n))) && (t && (e = Ki(e, null, t, !0)), r = n || {}), Ii.urlFor(e, r, i)) : e;
                    H("customer-provided `annotateUrl` must be of type: function")
                }
                return e
            }

            function qi(e) {
                var t, n;
                return !e || (t = e.indexOf("?")) < 0 ? "" : (n = e.indexOf("#")) < 0 ? e.substring(t) : n < t ? "" : e.substring(t, n)
            }

            function Ki(e, t, n, i) {
                e = e || Pi(), t = t || qi(e).substring(1), o = (r = e.indexOf(t)) + t.length;
                var r = e.substring(0, r),
                    o = e.substring(o);
                return (r = (t = U.isArray(n) ? Zi(t, n, i) : t).length || "?" !== r.charAt(r.length - 1) ? r : r.substr(0, r.length - 1)) + t + o
            }
            var Vi = function(e, t, n) {
                    n = n || y.get(ji);
                    return Wi(Ki(e, t, n = U.isFunction(n) ? n() : n, !1))
                },
                Zi = function(e, t, n) {
                    return n && U.contains(t, "*") ? "" : (e = $i(e), e = n ? U.omit(e, t) : U.pick(e, t), Yi(e))
                },
                $i = function(e) {
                    e = e.split("&");
                    return U.reduce(e, function(e, t) {
                        return e[(t = t.split("="))[0]] = t[1], e
                    }, {})
                },
                Yi = function(e) {
                    return U.reduce(e, function(e, t, n) {
                        return t && (n += "=" + t), e && (e += "&"), e + n
                    }, "")
                },
                f = {
                    watch: Hi,
                    get: Pi,
                    externalizeURL: Vi,
                    startPoller: Fi,
                    getWindowLocation: Ai,
                    clear: zi,
                    isElectron: Si,
                    electronUserDirectory: Ci,
                    electronAppName: _i,
                    electronUserHomeDirectory: Ei,
                    electronResourcesPath: xi
                },
                Xi = [],
                Qi = [],
                er = 12e4,
                tr = 16,
                nr = 1900,
                ir = 65536,
                rr = function(e) {
                    return !(!e || "" === e)
                },
                or = function() {
                    return f.get()
                },
                ar = [],
                sr = [],
                ur = {},
                dr;

            function cr(e) {
                ur = e
            }

            function g() {
                return ar
            }

            function lr(e) {
                U.isArray(e) ? (ar = e, S.guideListChanged.trigger({
                    guideIds: U.pluck(e, "id")
                })) : H("bad guide array iput to `setActiveGuides`")
            }

            function fr(t, n) {
                return U.find(g(), function(e) {
                    return D(e, t) === n
                }) || null
            }

            function x(e) {
                return fr("id", e)
            }

            function pr(e) {
                return fr("name", e)
            }

            function hr(e, t) {
                return e && e.id ? (e = x(e.id)).findStepById(t) : null
            }

            function gr() {
                var e = y.getLocalConfig("dataHost");
                return e || ((e = y.getHostedConfig("dataHost")) ? "https://" + e : et)
            }

            function mr() {
                dr = gr()
            }

            function vr(e) {
                e.HOST = dr
            }

            function yr() {
                var e = "https://",
                    t = y.getLocalConfig("contentHost");
                return t || ((t = y.getHostedConfig("contentHost")) ? e + t : e + tt)
            }
            var br = 3,
                wr = 1,
                Ir = 9,
                Sr = 11,
                xr = 4;

            function Cr(e) {
                return e && e.nodeType === wr
            }

            function K(e) {
                if (Cr(e)) try {
                    return Wv.getComputedStyle ? getComputedStyle(e) : e.currentStyle || void 0
                } catch (Ce) {}
            }

            function Er(e, t) {
                var n;
                return !(!e || !U.isFunction(e.getPropertyValue)) && (n = [e.getPropertyValue("transform")], void 0 !== t && U.isString(t) && n.push(e.getPropertyValue("-" + t.toLowerCase() + "-transform")), U.any(n, function(e) {
                    return e && "none" !== e
                }))
            }

            function _r(e) {
                var t = (e = e || Wv).document.documentElement;
                return e.pageYOffset || t.scrollTop
            }

            function Tr(e) {
                var t = (e = e || Wv).document.documentElement;
                return e.pageXOffset || t.scrollLeft
            }

            function Ar(e) {
                return U.isNumber(e) ? e : 0
            }

            function Rr(e, t) {
                e = e.offsetParent;
                return t = t || Wv, e = e && e.parentElement === t.document.documentElement && !Or(e) ? null : e
            }

            function kr(e) {
                return Er(K(e), He) && isNaN(u)
            }

            function Or(e) {
                if (e) return (e = K(e)) && (U.contains(["relative", "absolute", "fixed"], e.position) || Er(e, He))
            }

            function Nr(e, t, n) {
                if (!e) return {
                    width: 0,
                    height: 0
                };
                n = n || Wv;
                var t = Or(t) ? t : Rr(t, n),
                    i = t ? Lr(t) : {
                        top: 0,
                        left: 0
                    },
                    e = Lr(e),
                    i = {
                        top: e.top - i.top,
                        left: e.left - i.left,
                        width: e.width,
                        height: e.height
                    };
                return t ? (t !== n.document.scrollingElement && (i.top += Ar(t.scrollTop), i.left += Ar(t.scrollLeft)), i.top -= Ar(t.clientTop), i.left -= Ar(t.clientLeft)) : (i.top += _r(n), i.left += Tr(n)), i.bottom = i.top + i.height, i.right = i.left + i.width, i
            }

            function Lr(e) {
                var t;
                return e ? e.getBoundingClientRect ? {
                    top: (t = e.getBoundingClientRect()).top,
                    left: t.left,
                    bottom: t.bottom,
                    right: t.right,
                    width: t.width || Math.abs(t.right - t.left),
                    height: t.height || Math.abs(t.bottom - t.top)
                } : {
                    top: 0,
                    left: 0,
                    width: e.offsetWidth,
                    height: e.offsetHeight,
                    right: e.offsetWidth,
                    bottom: e.offsetHeight
                } : {
                    width: 0,
                    height: 0
                }
            }

            function Mr() {
                var e = y.get("pendoCore");
                return void 0 === e || e
            }
            var Fr = Mr(),
                Pr = function(e, t, n) {
                    e = dr + "/data/" + e + "/" + t, t = U.map(n, function(e, t) {
                        return t + "=" + e
                    });
                    return 0 < t.length && (e += "?" + t.join("&")), e
                };

            function Br() {
                return U.compact([G.apiKey].concat(G.additionalApiKeys))
            }
            var Gr = function(e) {
                return e += "v" + it, Dr(Pr("log.gif", G.apiKey, {
                    msg: e,
                    version: it
                }))
            };

            function Ur(e) {
                try {
                    var t = dr + "/data/errorlog?apiKey=" + G.apiKey,
                        n = {
                            error: e,
                            version: "v" + it,
                            visitorId: j()
                        },
                        i = Hr.supported() ? fetch(t, {
                            method: "POST",
                            keepalive: !0,
                            body: w.stringify(n),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }) : Ii.postJSON(t, n);
                    return i.then(function() {
                        H("successfully wrote error")
                    }, function(e) {
                        H("error writing error:" + e)
                    })
                } catch (Ce) {
                    return H("Failed to write error to server using POST endpoint: " + Ce), Gr("Failed to write error to server using POST endpoint: " + Ce)
                }
            }

            function Dr(e) {
                var t, n;
                return qr() ? (t = z.defer(), q(n = new Image, "load", t.resolve), q(n, "error", t.reject), n.src = e, t.promise) : z.resolve()
            }

            function Hr(e) {
                return fetch(e, {
                    method: "GET",
                    keepalive: !0
                })
            }

            function zr(e, t) {
                return navigator.sendBeacon(e, w.stringify(t))
            }
            Hr.supported = function() {
                return U.isFunction(Wv.fetch) && "undefined" != typeof Request && "keepalive" in new Request("")
            }, zr.supported = function() {
                return U.isFunction(navigator.sendBeacon)
            };
            var jr = !1,
                Wr = function() {
                    var e = qr();
                    return jr = !0, e && S["transmit:locked"].trigger(), "Pendo Agent locked.  No more events will be written."
                },
                Jr = function() {
                    var e = !qr();
                    return jr = !1, e && S["transmit:unlocked"].trigger(), "Pendo Agent unlocked.  Events will be written."
                },
                qr = function() {
                    return !jr && Fr
                },
                Kr = function(e, t) {
                    try {
                        return new RegExp("(\\s|^)" + t + "(\\s|$)").test(Yr(e))
                    } catch (Ce) {
                        return !1
                    }
                },
                Vr = function(e, t) {
                    try {
                        var n;
                        Kr(e, t) || (n = lt.call(Yr(e)) + " " + t, $r(e, n))
                    } catch (Ce) {}
                },
                Zr = function(e, t) {
                    try {
                        var n, i;
                        Kr(e, t) && (n = new RegExp("(\\s|^)" + t + "(\\s|$)"), i = Yr(e).replace(n, " "), $r(e, i))
                    } catch (Ce) {}
                },
                $r = function(e, t) {
                    U.isString(e.className) ? e.className = t : e.setAttribute("class", t)
                },
                Yr = function(e) {
                    try {
                        var t = e.className;
                        return (U.isString(t) || !I(t) ? t : e.getAttribute("class")) || ""
                    } catch (Ce) {
                        return ""
                    }
                },
                Xr = function(e) {
                    e = e.replace(/-([a-z])/gi, function(e, t) {
                        return t.toUpperCase()
                    });
                    return e = e.substr(0, 1).toLowerCase() + e.substr(1)
                },
                Qr = {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                eo = function(e, t) {
                    t = to(t);
                    no(e, t)
                },
                to = function(e) {
                    if (U.isString(e)) {
                        var t, n, i, r = e.split(";");
                        for (e = {}, n = 0; n < r.length; n++) i = (t = r[n]).indexOf(":"), e[t.substring(0, i)] = t.substring(i + 1)
                    }
                    return e
                },
                no = function(o, e) {
                    U.each(e, function(e, t) {
                        if ("" !== (t = lt.call(t))) {
                            var n = Xr(t),
                                i = (!U.isNumber(e) || isNaN(e) || Qr[n] ? U.isString(e) || (e = "" + e) : e += "px", e.indexOf("!important"));
                            if (-1 !== i) try {
                                var r = lt.call(r.substring(0, i));
                                o.style.setProperty(t, r, "important")
                            } catch (Ce) {
                                o.style.cssText += ";" + t + ":" + e
                            } else try {
                                o.style[n] = lt.call(e)
                            } catch (Ce) {
                                H("failed to set style: " + t + " with value " + e)
                            }
                        }
                    })
                },
                io = function() {
                    return Ye() ? {
                        width: Jv.documentElement.offsetWidth || 0,
                        height: Jv.documentElement.offsetHeight || 0
                    } : {
                        width: Wv.innerWidth || Jv.documentElement.clientWidth,
                        height: Wv.innerHeight || Jv.documentElement.clientHeight
                    }
                },
                ro = function(e) {
                    var t = io(),
                        n = _r(),
                        i = Tr();
                    return e.top >= n && e.left >= i && e.top + e.height <= n + t.height && e.left + e.width <= i + t.width
                };

            function oo(t) {
                return U.each(["left", "top", "width", "height"], function(e) {
                    t[e] = Math.round(t[e])
                }), t
            }

            function ao(e) {
                var t;
                return vo(e) ? ((t = Lr(e)).fixed = !0, oo(t)) : oo(Nr(e, po()))
            }
            var so = function(e, t) {
                    var n;
                    "string" == typeof e ? (n = J(e), U.map(n, function(e) {
                        Zr(e, t)
                    })) : Zr(e, t)
                },
                uo = function(e, t) {
                    var n;
                    "string" == typeof e ? (n = J(e), U.map(n, function(e) {
                        Vr(e, t)
                    })) : Vr(e, t)
                },
                co = function(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                },
                lo = U.compose(function(e) {
                    return Array.prototype.slice.call(e)
                }, function(e, t) {
                    try {
                        return ci(e, t)
                    } catch (Ce) {
                        return Gr("error using sizzle: " + Ce), t.getElementsByTagName(e)
                    }
                }),
                fo = function(e, t) {
                    try {
                        return t.children.length + t.offsetHeight + t.offsetWidth - (e.children.length + e.offsetHeight + e.offsetWidth)
                    } catch (Ce) {
                        return H("error interrogating body elements: " + Ce), Gr("error picking best body:" + Ce), 0
                    }
                },
                po = function(e) {
                    e = e || Jv;
                    try {
                        var t = lo("body");
                        return t && 1 < t.length ? (t.sort(fo), t[0] || e.body) : e.body && e.body.tagName && "body" !== e.body.tagName.toLowerCase() ? e.documentElement : e.body
                    } catch (Ce) {
                        return Gr("Error getting body element: " + Ce), e.body
                    }
                };

            function ho(e) {
                if (ci.contains(Jv, e)) return !0;
                for (; e && e.parentNode || l.isElementShadowRoot(e);) e = l.getParent(e);
                return e === Jv
            }
            var V = function(e) {
                    var t = po();
                    if (null !== e) return e === Jv || e === Wv ? ((t = {
                        left: Wv.pageXOffset || t.scrollLeft,
                        top: Wv.pageYOffset || t.scrollTop,
                        width: Wv.innerWidth,
                        height: Wv.innerHeight
                    }).right = t.left + t.width, t.bottom = t.top + t.height, t) : ((t = ao(e)).right = t.left + t.width, t.bottom = t.top + t.height, t)
                },
                go = function(e, t) {
                    return !(e.top >= t.bottom) && (!(e.bottom <= t.top) && (!(e.left >= t.right) && !(e.right <= t.left)))
                };

            function mo(e) {
                for (var t = e && e.parentNode; t;) {
                    if (Er(K(t), He)) return 1;
                    t = t.parentNode
                }
            }

            function vo(e) {
                for (var t, n = e; n;) {
                    if (!(t = K(n))) return;
                    if ("fixed" === t.position) return !isNaN(u) || !mo(n);
                    n = n.parentNode
                }
            }
            var yo = function(e, t, n) {
                t = t || /(auto|scroll|hidden)/;
                var i, r = (n = n || Wv).document.documentElement;
                if (ho(e))
                    for (i = e; i;)
                        if (i.assignedSlot && (i = i.assignedSlot), l.isElementShadowRoot(i)) i = i.host;
                        else {
                            if (i === r) return null;
                            if (!(o = K(i))) return null;
                            var o, a = o.position;
                            if (i !== e && t.test(o.overflow + o.overflowY + o.overflowX)) return i.parentNode !== r || (o = K(r)) && !U.contains([o.overflow, o.overflowY, o.overflowX], "visible") ? i : null;
                            if ("absolute" === a || "fixed" === a && mo(i)) i = Rr(i);
                            else {
                                if ("fixed" === a) return null;
                                i = i.parentNode
                            }
                        }
                return null
            };

            function bo(e, t) {
                e = K(e);
                return t = t || /(auto|scroll|hidden)/, !e || "inline" === e.display ? p.NONE : t.test(e.overflowY) && t.test(e.overflowX) ? p.BOTH : t.test(e.overflowY) ? p.Y : t.test(e.overflowX) ? p.X : t.test(e.overflow) ? p.BOTH : p.NONE
            }
            var p = {
                X: "x",
                Y: "y",
                BOTH: "both",
                NONE: "none"
            };

            function wo(e, t, n) {
                var i = V(t),
                    t = bo(t, n);
                if (t !== p.BOTH || go(e, i)) {
                    if (t === p.Y) {
                        if (e.top >= i.bottom) return;
                        if (e.bottom <= i.top) return
                    }
                    if (t === p.X) {
                        if (e.left >= i.right) return;
                        if (e.right <= i.left) return
                    }
                    return 1
                }
            }

            function Io(e) {
                return e && e.nodeName && "body" === e.nodeName.toLowerCase() && ho(e)
            }

            function So(e) {
                if (e) {
                    if (Io(e)) return 1;
                    var t = V(e);
                    if (0 !== t.width && 0 !== t.height) {
                        var n = K(e);
                        if (!n || "hidden" !== n.visibility) {
                            for (var i = e; i && n;) {
                                if ("none" === n.display) return;
                                if (parseFloat(n.opacity) <= 0) return;
                                n = K(i = i.parentNode)
                            }
                            return 1
                        }
                    }
                }
            }

            function xo(e, t) {
                if (!So(e)) return !1;
                if (!Io(e)) {
                    for (var n = V(e), i = yo(e, t = t || /hidden/), r = null; i && i !== Jv && i !== r;) {
                        if (!wo(n, i, t)) return !1;
                        i = yo(r = i, t)
                    }
                    if (e.getBoundingClientRect) {
                        var e = e.getBoundingClientRect(),
                            o = e.right,
                            e = e.bottom;
                        if (n.fixed || (o += Tr(), e += _r()), o <= 0 || e <= 0) return !1
                    }
                }
                return !0
            }

            function Co(e) {
                for (var t, n, i, r, o, a = /(auto|scroll)/, s = po(), u = yo(e, a); u && u !== s;) t = V(e), n = V(u), r = i = 0, t.bottom > n.bottom && (i += t.bottom - n.bottom, t.top -= i, t.bottom -= i), t.top < n.top && (i -= o = n.top - t.top, t.top += o, t.bottom += o), t.right > n.right && (r += t.right - n.right, t.left -= r, t.right -= r), t.left < n.left && (r -= o = n.left - t.left, t.left += o, t.right += o), U.isFunction(u.scrollBy) ? u.scrollBy(r, i) : (u.scrollTop += i, u.scrollLeft += r), u = yo(u, a)
            }

            function Eo(e) {
                var t = Jv.createElement("script"),
                    n = Jv.head || Jv.getElementsByTagName("head")[0] || Jv.body;
                t.type = "text/javascript", e.src ? t.src = e.src : t.text = e.text || e.textContent || e.innerHTML || "", n.appendChild(t), n.removeChild(t)
            }

            function _o(e) {
                var e = Lr(e),
                    t = io();
                return U.extend(t, {
                    top: 0,
                    left: 0,
                    bottom: t.height,
                    right: t.width
                }), go(t, e)
            }

            function To(e) {
                var t = U.contains(["A", "INPUT", "LABEL", "SELECT", "TEXTAREA", "BUTTON", "FIELDSET", "LEGEND", "DATALIST", "OUTPUT", "OPTION", "OPTGROUP"], e.nodeName),
                    n = !!e.tabIndex,
                    i = !e.hidden,
                    e = !e.disabled;
                return (t || n) && i && e
            }
            var Ao = {};

            function Ro(t) {
                if (!t) return !1;
                if (t === Wv.location.origin) return !0;
                if (t === gr()) return !0;
                if (t === yr()) return !0;
                var e = [/^https:\/\/(app|via|adopt)(\.eu|\.us)?\.pendo\.io$/, /^https:\/\/(us1\.|gov\.)?(app|via|adopt)\.pendo\.io$/, /^https:\/\/([0-9]{8}t[0-9]{4}-dot-)pendo-(io|eu|us1)\.appspot\.com$/, /^https:\/\/hotfix-(ops|app)-([0-9]+-dot-)pendo-(io|eu|us1)\.appspot\.com$/, /^https:\/\/pendo-(io|eu|us1)-static\.storage\.googleapis\.com$/],
                    n = (st() || (e = e.concat([/^https:\/\/([a-zA-Z0-9-]+\.)*pendo-dev\.com$/, /^https:\/\/([a-zA-Z0-9-]+-dot-)?pendo-(dev|test|io|gov-prod|batman|magic|atlas|wildlings|ionchef|mobile-guides|mobile-hummus|mobile-plat|eu|eu-dev|apollo|security|perfserf|freeze|armada|voc|mcfly|calypso|dap|scrum-ops|ml|helix)\.appspot\.com$/, /^https:\/\/via\.pendo\.local:\d{4}$/, /^https:\/\/adopt\.pendo\.local:\d{4}$/, /^https:\/\/local\.pendo\.io:\d{4}$/, new RegExp("^https://pendo-" + Qe + "-static\\.storage\\.googleapis\\.com$")])), y.get("adoptHost"));
                if (n && t === "https://" + n) return !0;
                return !!U.contains(y.get("allowedOriginServers", []), t) || U.any(e, function(e) {
                    return e.test(t)
                })
            }

            function ko(e) {
                var t;
                if (U.isString(e)) return t = (t = qi(e).substring(1)) && t.length ? $i(t) : {}, e = U.last(U.first(e.split("?")).split("/")).split("."), {
                    filename: U.first(e),
                    extension: e.slice(1).join("."),
                    query: t
                }
            }

            function Oo(e) {
                return U.isString ? e.replace(/-/g, "+").replace(/_/g, "/") : e
            }

            function No(e, t) {
                var n;
                y.get("guideValidation") && b.sri && (n = ko(t), (t = U.find(["sha512", "sha384", "sha256"], function(e) {
                    return !!n.query[e]
                })) && (e.integrity = t + "-" + Oo(n.query[t]), e.setAttribute("crossorigin", "anonymous")))
            }
            Ao.$ = {
                findOrCreate: function(e) {
                    return 0 < this.length ? this : J(e)
                },
                find: function(e) {
                    var t = J();
                    return t.context = this.context, this.each(function() {
                        J(e, this).each(function() {
                            t[t.length++] = this
                        })
                    }), t
                },
                each: function(e) {
                    for (var t = 0, n = this.length; t < n; ++t) e.call(this[t], this[t], t);
                    return this
                },
                html: function(e) {
                    return e === qv ? this.length ? this[0].innerHTML : this : this.each(function() {
                        this.innerHTML = e
                    })
                },
                text: function(e) {
                    var t = "innerText" in Jv.body;
                    return e === qv ? t ? this.length ? this[0].innerText : this : this.length ? this[0].textContent : this : this.each(function() {
                        eo(this, {
                            "white-space": "pre-wrap"
                        }), t ? this.innerText = e : this.textContent = e
                    })
                },
                addClass: function(e) {
                    return e = e.split(/\s+/), this.each(function(t) {
                        U.each(e, function(e) {
                            Vr(t, e)
                        })
                    })
                },
                removeClass: function(e) {
                    return e = e.split(/\s+/), this.each(function(t) {
                        U.each(e, function(e) {
                            Zr(t, e)
                        })
                    })
                },
                hasClass: function(e) {
                    e = e.split(/\s+/);
                    var n = !0;
                    return 0 !== this.length && (this.each(function(t) {
                        U.each(e, function(e) {
                            n = n && Kr(t, e)
                        })
                    }), n)
                },
                toggleClass: function(e) {
                    return e = e.split(/\s+/), this.each(function(t) {
                        U.each(e, function(e) {
                            (Kr(t, e) ? Zr : Vr)(t, e)
                        })
                    })
                },
                css: function(e) {
                    return this.each(function() {
                        eo(this, e)
                    }), this
                },
                appendTo: function(e) {
                    return J(e).append(this), this
                },
                append: function(e) {
                    var t = this;
                    return J(e).each(function() {
                        t.length && t[0].appendChild(this), ho(this) && U.each(ci("script", this), Eo)
                    }), t
                },
                prependTo: function(e) {
                    return J(e).prepend(this), this
                },
                prepend: function(e) {
                    var t, n;
                    return this.length && (t = this[0], n = t.childNodes[0], J(e).each(function() {
                        n ? J(this).insertBefore(n) : J(this).appendTo(t)
                    })), this
                },
                getParent: function() {
                    var e = J(this)[0];
                    if (e && e.parentNode) return J(e.parentNode)
                },
                insertBefore: function(e) {
                    e = J(e)[0];
                    e && e.parentNode && (e.parentNode.insertBefore(this[0], e), ho(Jv, this) && U.each(ci("script", this), Eo))
                },
                remove: function() {
                    return this.each(function() {
                        this.parentNode && this.parentNode.removeChild(this)
                    }), this
                },
                attr: function(e, t) {
                    return U.isObject(e) ? (this.each(function() {
                        U.each(e, function(e, t) {
                            this.setAttribute(t, e)
                        }, this)
                    }), this) : t !== qv ? (this.each(function() {
                        this.setAttribute(e, t)
                    }), this) : 0 < this.length ? this[0].getAttribute(e) : void 0
                },
                closest: function(e, t) {
                    for (var n = this[0]; n && !ci.matchesSelector(n, e);)
                        if ((n = n.parentNode) === Jv || t && ci.matchesSelector(n, t)) return J();
                    return J(n)
                },
                eq: function(e) {
                    return J(this[e])
                },
                height: function(e) {
                    if (this.length) return e === qv ? this[0].offsetHeight : (this[0].style.height = e + "px", this)
                },
                width: function(e) {
                    if (this.length) return e === qv ? this[0].offsetWidth : (this[0].style.width = e + "px", this)
                },
                focus: function() {
                    return this.each(function() {
                        U.isFunction(this.focus) && this.focus()
                    })
                }
            }, U.extend(J, {
                data: fi,
                event: wi,
                removeNode: co,
                getClass: Yr,
                hasClass: Kr,
                addClass: uo,
                removeClass: so,
                getBody: po,
                getComputedStyle: K,
                getClientRect: V,
                intersectRect: go,
                getScrollParent: yo,
                isElementVisible: xo,
                scrollIntoView: Co
            }), U.extend(J.prototype, wi.$, Ao.$);
            var Lo = function(e) {
                    return !(0 !== y.get("allowedOriginServers", []).length && !y.get("trainingPartner", !1) && ut(Qe, he())) || Ro(e)
                },
                Mo = function(e) {
                    return new Qn(e).origin
                },
                Fo = function(e, t) {
                    try {
                        var n, i = "text/css",
                            r = "text/javascript";
                        if (U.isString(e) && (e = {
                                url: e
                            }), !Lo(Mo(e.url))) throw new Error;
                        e.type = e.type || /\.css/.test(e.url) ? i : r;
                        var o = null,
                            a = Jv.getElementsByTagName("head")[0] || Jv.getElementsByTagName("body")[0];
                        if (e.type === i) {
                            var s = Jv.createElement("link");
                            s.type = i, s.rel = "stylesheet", s.href = e.url, No(s, e.url), o = s
                        } else {
                            if (_t()) return (n = Jv.createElement("script")).addEventListener("load", function() {
                                t(), co(n)
                            }), n.type = r, n.src = e.url, No(n, e.url), Jv.body.appendChild(n), {};
                            (n = Jv.createElement("script")).type = r, n["async"] = !0, n.src = e.url, No(n, e.url), o = n, t = U.wrap(t, function(e, t) {
                                J.removeNode(n), t || e.apply(this, U.toArray(arguments).slice(1))
                            })
                        }
                        return a.appendChild(o), Po(o, e.url, t), o
                    } catch (Ce) {
                        return {}
                    }
                },
                Po = function(e, t, n) {
                    var i = !1;
                    I(n) && (e.onload = function() {
                        !0 !== i && (i = !0, n(null, t))
                    }, e.onerror = function() {
                        !0 !== i && (i = !0, n(new Error("Failed to load script"), t))
                    }, e.onreadystatechange = function() {
                        i || e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (i = !0, n(null, t))
                    }, "link" === e.tagName.toLowerCase() && (setTimeout(function() {
                        var e;
                        i || ((e = new Image).onload = e.onerror = function() {
                            !0 !== i && (i = !0, n(null, t))
                        }, e.src = t)
                    }, 500), setTimeout(function() {
                        i || Gr("Failed to load " + t + " within 10 seconds")
                    }, 1e4)))
                },
                Bo = function(e) {
                    var t = w.parse(e.data),
                        n = e.origin;
                    r(G.app_name + ": Message: " + w.stringify(t) + " from " + n), ia(e.source, {
                        status: "success",
                        msg: "ack",
                        originator: "messageLogger"
                    }, n)
                },
                Go = function(e) {
                    Ho(Ko)(Uo(e))
                },
                Uo = function(e) {
                    if (e.data) try {
                        var t = "string" == typeof e.data ? w.parse(e.data) : e.data,
                            n = e.origin,
                            i = e.source;
                        if (!t.action) {
                            if (t.type && "string" == typeof t.type) return {
                                data: t,
                                origin: n,
                                source: i
                            };
                            r("Invalid Message: Missing 'type' in data format")
                        }
                    } catch (Ce) {
                        r("Failed to parse message data", e.data)
                    } else r("Invalid Message: Missing or empty 'data' in message")
                },
                Do;

            function Ho(t) {
                return function(e) {
                    if (e && Ro(e.origin)) return t.apply(this, arguments)
                }
            }

            function zo(e) {
                Do = e
            }
            var jo = function(e) {
                    na(e.moduleURL)
                },
                Wo = function(e) {
                    sa(Bo)
                },
                Jo = {
                    disconnect: function(e) {},
                    module: jo,
                    debug: Wo
                },
                qo = function(e, t) {
                    Jo[e] = t
                },
                Ko = function(e) {
                    var t;
                    !e || (t = e.data) && I(Jo[t.type]) && Jo[t.type](t, e)
                },
                Vo = {},
                Zo = function(e) {
                    if (Vo[e] = {}, "undefined" != typeof CKEDITOR) try {
                        CKEDITOR.config.customConfig = ""
                    } catch (Ce) {}
                },
                $o = function(e) {
                    return I(Vo[e])
                },
                Yo = function(e) {
                    if (Vo)
                        for (var t in Vo)
                            if (0 <= t.indexOf(e)) return t;
                    return null
                },
                Xo = [],
                Qo = function() {
                    var e;
                    Xo.length < 1 || (e = Xo.shift(), $o(e) || Fo(e, function() {
                        Zo(e), Qo()
                    }))
                };

            function ea(e) {
                var t = {
                        "/js/lib/ckeditor/ckeditor.js": 1
                    },
                    n = (U.each(["depres.js", "tether.js", "sortable.js", "selection.js", "selection.css", "html2canvas.js"], function(e) {
                        t["/modules/pendo.designer/plugins/" + e] = 1
                    }), (e = e.replace(/^https:\/\//, "")).substring(0, e.indexOf("/"))),
                    e = e.substring(e.indexOf("/"));
                return Ro("https://" + n) && t[e]
            }

            function ta(e) {
                return e.replace(/^[a-zA-Z-:]*\/\//, "https://")
            }
            var na = function(e) {
                    ea(e = ta(e)) && (Xo.push(e), 1 < Xo.length || Qo())
                },
                ia = function(e, t, n) {
                    var i, r = U.uniqueId("pendo-");
                    try {
                        void 0 === t && void 0 === n && (t = e, e = Do || oa(), n = "*"), t.guid = r, e && U.isFunction(e.postMessage) && (i = w.stringify(t), e.postMessage(i, n))
                    } catch (Ce) {
                        t = Ce && Ce.message || "";
                        H("Failed to postMessage: " + t)
                    }
                    return r
                },
                ra = function() {
                    return Wv != Wv.top
                },
                oa = function() {
                    var e = new RegExp("^" + dr.replace(/^https?:/, "https?:")),
                        t = y.get("forceParentDesigner");
                    return !st() && t || e.test(location.href) ? Wv.parent : Wv.top
                },
                aa = function() {
                    var e;
                    ra() && (e = oa(), ia(e, {
                        type: "load",
                        url: location.toString()
                    }, "*"))
                },
                sa = function(e) {
                    var t;
                    return I(Wv.addEventListener) && U.isFunction(Wv.addEventListener) && (t = Ho(e), Wv.addEventListener("message", t, !1)),
                        function() {
                            I(Wv.removeEventListener) && U.isFunction(Wv.removeEventListener) && t && Wv.removeEventListener("message", t, !1)
                        }
                },
                ua = U.memoize(function() {
                    return y.get("restrictP1Access")
                }),
                da = function() {
                    var n = kn.call({}),
                        i = {
                            validateGuide: 1,
                            validateLauncher: 1,
                            validateGlobalScript: 1
                        },
                        e = {
                            ready: 1,
                            deliverablesLoaded: 1,
                            guidesFailed: 1,
                            guidesLoaded: 1
                        };
                    return U.each(["ready", "onClickCaptured", "deliverablesLoaded", "guidesFailed", "guidesLoaded", "validateGuide", "validateLauncher", "validateGlobalScript"], function(t) {
                        e[t] && S[t].on(function(e) {
                            return da[t].apply(da[t], e.data)
                        }), n[t] = function(e) {
                            return U.isFunction(e) ? n.on(t, e) : n[i[t] ? "triggerAsync" : "trigger"].apply(n, [t].concat(U.toArray(arguments)))
                        }
                    }), n
                }(),
                ca = {
                    flush: U.noop,
                    flushBy: U.noop,
                    flushEvents: ha,
                    flushTrackEvents: ha,
                    flushSilos: ha,
                    flushTrackEventSilos: ha,
                    flushBeacons: ha,
                    flushNow: ha,
                    flushLater: ga,
                    flushEvery: ma,
                    flushStop: va,
                    beacons: [],
                    silos: [],
                    trackEventSilos: [],
                    lock: Wr,
                    unlock: ba
                },
                la = [];

            function fa(e) {
                la.push(e)
            }

            function pa(e, t) {
                var n;
                return t = parseInt(t, 10) || 0, e[t] || (n = Wv.setTimeout(function() {
                    e(), e[t]()
                }, t), e[t] = function() {
                    Wv.clearTimeout(n), delete e[t]
                })
            }

            function ha(e, t) {
                try {
                    U.each(la, function(e) {
                        e.flush && e.flush(t)
                    })
                } catch (Ce) {
                    c(Ce, "unhandled error while flushing event cache")
                }
            }

            function ga(e) {
                return pa(U.partial(ha, !0), e)
            }

            function ma(e) {
                var t;
                if (e = parseInt(e, 10) || 0, U.isObject(ma.intervals) || (ma.intervals = {}), !ma.intervals[e]) return t = Wv.setInterval(ha, e), ma.intervals[e] = function() {
                    clearInterval(t), delete ma.intervals[e]
                }
            }

            function va() {
                var e = U.values(ma.intervals).concat([ha]);
                U.map(e, function(e) {
                    U.isFunction(e) && e()
                })
            }

            function ya() {
                U.each(la, function(e) {
                    e.clear && e.clear()
                }), va()
            }

            function ba() {
                return ya(), Jr()
            }
            var wa = function() {
                    var t = null;

                    function i(e, t) {
                        return t = t ? t + ": " : "", e.jwt || e.signingKeyName ? e.jwt && !e.signingKeyName ? (r(t + "The jwt is supplied but missing signingKeyName."), !1) : e.signingKeyName && !e.jwt ? (r(t + "The signingKeyName is supplied but missing jwt."), !1) : (e = e.jwt, !(!U.isString(e) || !/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/.test(e)) || (r(t + "The jwt is invalid."), !1)) : (r(t + "Missing jwt and signingKeyName."), !1)
                    }
                    return {
                        set: function(e) {
                            t = w.parse(w.stringify(e || {}))
                        },
                        get: function() {
                            return null !== t ? t : {}
                        },
                        getJwtOptions: function(e, t) {
                            if (t = t || "", !y.get("enableSignedMetadata")) return !1;
                            var n = i(e, t);
                            if (y.get("requireSignedMetadata") && !n) return r("Pendo will not " + t + "."), !1;
                            if (n) {
                                t = e.jwt;
                                try {
                                    return w.parse(atob(t.split(".")[1]))
                                } catch (Ce) {
                                    return null
                                }
                            } else r("JWT is enabled but not being used, falling back to unsigned metadata.")
                        }
                    }
                }(),
                Ia = "_PENDO_UNNAMED_",
                Sa = 5;

            function xa(e, t, n, i, r) {
                n = {
                    type: e,
                    browser_time: v(),
                    visitor_id: j(),
                    account_id: Kn(),
                    url: f.externalizeURL(n),
                    props: t,
                    eventProperties: r
                }, n = Rn.addTracerIds(n);
                return "track" === e ? n.track_event_name = i || Ia : "click" === e && 0 < U.size(da._handlers.onClickCaptured) && (t = Ca(r), da.onClickCaptured(t), i = t.getEventProperties(), U.isEmpty(i) || (n.eventProperties = U.extend({}, n.eventProperties, i))), S.eventCaptured.trigger(n), n
            }

            function Ca(n) {
                return n = n || {}, {
                    getEventProperties: function() {
                        return n
                    },
                    addEventProperty: function(e, t) {
                        U.isString(e) && !U.isUndefined(t) ? n[e] = t : pn("Failed to add click event property")
                    }
                }
            }
            var Ea = ca.events = Xi,
                _a = ca.trackEvents = Qi,
                Ta = gs({
                    cache: Ea,
                    silos: ca.silos,
                    apiKey: Br,
                    beacon: "ptm",
                    allowPost: !0
                }),
                Aa = gs({
                    cache: _a,
                    silos: ca.trackEventSilos,
                    apiKey: Br,
                    beacon: "ptm",
                    allowPost: !0,
                    params: {
                        type: "track"
                    }
                });

            function Ra(e, t, n, i, r) {
                Fr && (t = xa(e, t, n, i, r), rr(t.url) && Na(t) && ("track" === e ? Aa.push(t) : Ta.push(ka(W, t))))
            }

            function ka(e, t) {
                try {
                    if (!e.getters["monitoring/shouldFlush"]()) return t;
                    var n = e.getters["monitoring/payload"]();
                    e.dispatch("monitoring/flush"), U.isEmpty(n) || (t.ops = n)
                } catch (Ce) {}
                return t
            }
            fa(Ta), fa(Aa);
            var Oa = ["load", "meta", "identify"];

            function Na(e) {
                return !y.get("freeNPSData") || U.contains(Oa, e.type)
            }

            function La() {
                var r = U.toArray(arguments);
                return function(e, t) {
                    var n = r.concat([t]);
                    ! function i(t, e) {
                        t < n.length && n[t](e, function(e) {
                            i(t + 1, e)
                        })
                    }(0, e)
                }
            }

            function Ma(n, e) {
                var i = e;
                return function(e, t) {
                    t(i = n(i, e))
                }
            }

            function Fa(e) {
                return Ma(function(e, t) {
                    return e.push(t), e
                }, e)
            }

            function Pa(e, t) {
                return y.get("trainingPartner") ? Ba("account_id")(e, t) : t(e)
            }

            function Ba(s) {
                return function(e, t) {
                    if (!e.length) return t(e);
                    for (var n = D(e[0], s), i = !0, r = 1; r < e.length; r++)
                        if (n !== D(e[r], s)) {
                            i = !1;
                            break
                        }
                    if (i) return t(e);
                    var o = e.slice(0, r),
                        a = e.slice(r);
                    t(o), t(a)
                }
            }

            function Ga(e) {
                return null == e.bytes && (e.bytes = w.stringify(e).length), e
            }

            function Ua(e, t, n) {
                t = n[t - 1] || U.last(n);
                return Math.ceil(e / t)
            }

            function Da(e, t) {
                for (var n, i = 0, r = (U.isFunction(t.overhead) ? t.overhead : U.constant(0))(), o = 0; o < e.length; ++o) {
                    if (Ua(n = Ga(e[o]).bytes, 1, t.compressionRatio) + r <= t.lower) {
                        if (0 < o) return o;
                        break
                    }
                    if (Ua(i + n, o + 1, t.compressionRatio) + r > t.upper) return o;
                    i += n
                }
                if (!(0 < o))
                    for (o = i = 0; o < e.length; ++o) {
                        if (Ua(i + (n = Ga(e[o]).bytes), o + 1, t.compressionRatio) + r > t.lower) return o;
                        i += n
                    }
                return -1
            }

            function Ha() {
                var e = wa.get();
                return U.isEmpty(e) ? 0 : e.jwt.length + e.signingKeyName.length
            }

            function za(i) {
                return function(e, t) {
                    for (var n = Da(e, i); 0 <= n;) t(e.splice(0, Math.max(n, 1))), n = Da(e, i)
                }
            }

            function ja(e, t) {
                var n;
                e.length > tr && (n = e.slice(), e.length = 0, t(n))
            }
            var Wa = 2e3;

            function Ja(t) {
                return t = U.defaults(t || {}, {
                        fields: [],
                        siloMaxLength: ir
                    }),
                    function(n, e) {
                        var i;
                        1 === n.length && n.JZB.length > t.siloMaxLength && (i = n[0], r("Max length exceeded for an event"), U.each(t.fields, function(e) {
                            var t = i[e];
                            t && t.length > Wa && (r("shortening " + t + " and retrying"), i[e] = t.substring(0, Wa), delete n.JZB)
                        })), e(n)
                    }
            }

            function qa(e, t) {
                var n;
                if (0 !== e.length) return e.JZB || (e.JZB = G.squeezeAndCompress(e.slice()), e.JZB.length <= ir || 1 === e.length) ? t(e) : (n = e.length / 2, qa(e.slice(0, n), t), void qa(e.slice(n), t))
            }

            function Ka(e, t) {
                qr() && t(e)
            }

            function Va(n) {
                return function(e, t) {
                    1 === e.length && e.JZB.length > nr ? (r("Couldn't write event"), Gr("Single item is: " + e.JZB.length + ". Dropping."), Ur(e.JZB)) : W.commit("monitoring/incrementCounter", n.beacon + "GifFailures")
                }
            }

            function Za(e) {
                return U.isFunction(e.apiKey) ? [].concat(e.apiKey()) : [].concat(e.apiKey)
            }

            function $a(t) {
                return U.map(t.apiKeys, function(e) {
                    return Pr(t.beacon + ".gif", e, U.extend({
                        v: it,
                        ct: v(),
                        jzb: t.JZB
                    }, t.params, t.auth))
                })
            }

            function Ya(t) {
                return U.map(t.apiKeys, function(e) {
                    return Pr(t.beacon + ".gif", e, U.extend({
                        v: it,
                        ct: v(),
                        s: t.JZB.length
                    }, t.params))
                })
            }

            function Xa(i) {
                return function(e, t) {
                    e.apiKeys = Za(i), e.params = U.extend({}, e.params, i.params), e.beacon = i.beacon, e.eventLength = e.JZB.length;
                    var n = wa.get();
                    U.isEmpty(n) || (e.auth = n, e.eventLength += n.jwt.length, e.eventLength += n.signingKeyName.length), t(e)
                }
            }

            function Qa(e, t) {
                var n = y.get("trainingPartner"),
                    i = D(U.first(e), "account_id");
                n && i && (e.params = U.extend({}, e.params, {
                    acc: wt(i)
                })), t(e)
            }

            function es(e, t) {
                var n = D(U.first(e), "props.source");
                n && (e.params = U.extend({}, e.params, {
                    source: n
                })), t(e)
            }

            function ts(e) {
                return U.extend({
                    events: e.JZB
                }, e.auth)
            }

            function ns(t, n) {
                return t.failed || t.eventLength > nr ? n(t) : void(t.auth ? n(t) : U.each($a(t), function(e) {
                    Dr(e)["catch"](us(t, n))
                }))
            }

            function is(t, n) {
                return t.failed || t.eventLength > nr ? n(t) : void(!t.auth && Hr.supported() ? U.each($a(t), function(e) {
                    Hr(e)["catch"](us(t, n))
                }) : n(t))
            }

            function rs(t, n) {
                return t.failed || t.eventLength > ir ? n(t) : void(Hr.supported() ? U.each(Ya(t), function(e) {
                    fetch(e, {
                        method: "POST",
                        keepalive: !0,
                        body: w.stringify(ts(t)),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })["catch"](us(t, n))
                }) : n(t))
            }

            function os(t, n) {
                return t.failed || t.eventLength > ir ? n(t) : void(zr.supported() ? U.each(Ya(t), function(e) {
                    zr(e, ts(t)) || us(t, n)()
                }) : n(t))
            }

            function as(t, n) {
                return t.failed || t.eventLength > nr ? n(t) : void U.each($a(t), function(e) {
                    Ii({
                        method: "GET",
                        url: e
                    })["catch"](us(t, n))
                })
            }

            function ss(t, n) {
                return t.failed || t.eventLength > ir ? n(t) : void U.each(Ya(t), function(e) {
                    Ii({
                        method: "POST",
                        url: e,
                        data: w.stringify(ts(t)),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })["catch"](us(t, n))
                })
            }

            function us(e, t) {
                return function() {
                    e.failed = !0, t(e)
                }
            }

            function ds(t, n) {
                return t.failed || t.eventLength > nr ? n(t) : void(b.msie <= 11 ? U.each($a(t), function(e) {
                    Ii({
                        method: "GET",
                        url: e,
                        sync: !0
                    })["catch"](us(t, n))
                }) : n(t))
            }

            function cs(t, n) {
                return t.failed || t.eventLength > ir ? n(t) : void(b.msie <= 11 ? U.each(Ya(t), function(e) {
                    Ii({
                        method: "POST",
                        url: e,
                        data: w.stringify(ts(t)),
                        sync: !0,
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })["catch"](us(t, n))
                }) : n(t))
            }

            function ls(i) {
                return function(e, t) {
                    var n;
                    return !e.JZB || e.failed ? t(e) : (n = [Xa(i), Qa, es], i.preferFetch && n.push(is), n.push(ns, as), i.allowPost && (i.preferFetch && n.push(rs), n.push(os, ss)), void La.apply(null, n)(e, function(e) {
                        t(e)
                    }))
                }
            }

            function fs(i) {
                return function(e, t) {
                    var n;
                    return !e.JZB || e.failed ? t(e) : (n = [Xa(i), Qa, es, is, ds], i.allowPost && n.push(rs, os, cs), void La.apply(null, n)(e, function(e) {
                        t(e)
                    }))
                }
            }

            function ps(e, t) {
                return La(Ka, Pa, qa, Ja(e.shorten), qa, t(e), Va(e))
            }

            function hs(i) {
                return function(e, t) {
                    var n = y.get("excludeNonGuideAnalytics");
                    "ptm" === i && n || t(e)
                }
            }

            function gs(e) {
                var i = e.cache,
                    r = e.silos,
                    o = ps(e, ls),
                    a = ps(e, fs),
                    t = La(hs(e.beacon), Fa(i), za({
                        overhead: Ha,
                        lower: nr,
                        upper: ir,
                        compressionRatio: [.5 * Sa, .75 * Sa, Sa]
                    }), function(e) {
                        r.push(e)
                    });
                return {
                    push: function(e) {
                        t(e, U.noop)
                    },
                    clear: function() {
                        i.length = 0, r.length = 0
                    },
                    flush: function(e) {
                        var t, n;
                        0 === i.length && 0 === r.length || (r.push(i.slice()), i.length = 0, t = r.slice(), r.length = 0, n = (e || {}).guaranteed ? a : o, U.each(t, function(e) {
                            n(e, U.noop)
                        }))
                    }
                }
            }
            var ms = Yn(function(e) {
                    var t, n;
                    if ((e = e || f.get()) && e !== ms.lastUrl) return ms.lastUrl = e, t = -1, ua() || aa(), r("sending load event for url " + e), n = {
                        load_time: t = "undefined" != typeof performance && U.isFunction(performance.getEntriesByType) && !U.isEmpty(performance.getEntriesByType("navigation")) ? (n = performance.getEntriesByType("navigation")[0]).loadEventStart - n.fetchStart : t
                    }, ra() && (n.is_frame = !0), Ra("load", n, e), ga(), S.urlChanged.trigger(), !0
                }),
                vs = [],
                ys = ws({
                    cache: vs,
                    apiKey: function() {
                        return G.apiKey
                    },
                    beacon: "xhr",
                    shorten: {
                        fields: ["request_url", "browser_url"],
                        siloMaxLength: nr
                    }
                });

            function bs(e, t) {
                var n = dr.replace(/\./g, "\\.").replace(/\//g, "\\/"),
                    n = new RegExp("^" + n + "\\/data\\/"),
                    i = D(e, "request_url", "");
                n.test(i) || t(e)
            }

            function ws(e) {
                var n = e.cache,
                    i = ps(e, ls),
                    r = ps(e, fs),
                    t = La(bs, Fa(n), ja, i);
                return {
                    push: function(e) {
                        t(e, U.noop)
                    },
                    clear: function() {
                        n.length = 0
                    },
                    flush: function(e) {
                        var t;
                        0 !== n.length && (t = n.slice(), n.length = 0, ((e || {}).guaranteed ? r : i)(t, U.noop))
                    }
                }
            }
            fa(ys);
            var Is = function() {
                    var a;
                    S.appUnloaded.on(function() {
                        Cs({
                            guaranteed: !0
                        })
                    }), a = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function(t, n, e, i, r) {
                        var o = {};
                        this.addEventListener("readystatechange", function() {
                            var e = arguments[0].target || arguments[0].srcElement || arguments[0].currentTarget;
                            Ss(o, this.readyState, n, t, e)
                        }, !1), a.apply(this, arguments)
                    }
                },
                Ss = function(e, t, n, i, r) {
                    var o;
                    1 === t ? (o = j(), e.visitor_id = o, o = Kn(), e.account_id = o, e.browser_url = xs(ki()), e.browser_time = (new Date).getTime(), e.request_method = i, e.type = "xhr") : 4 === t && (e.request_url = xs(r.responseURL), e.response_status = r.status, e.duration = (new Date).getTime() - e.browser_time, ys.push(e))
                },
                xs = function(e) {
                    var t = e ? e.indexOf("?") : -1,
                        t = -1 === t ? "" : e.slice(t + 1, e.length);
                    return Vi(e, t, y.get("xhrWhitelist"))
                },
                Cs = function(e) {
                    try {
                        ys.flush(e)
                    } catch (Ce) {
                        c(Ce, "error while flushing xhr cache")
                    }
                },
                Es = function() {
                    var n, i;
                    return {
                        flush: r,
                        run: function(e) {
                            y.get("enableDebugEvents") && ! function(e, t) {
                                n = [], e.on(function(e) {
                                    e = w.stringify(e), n.push(e)
                                }), i = setInterval(r, t || 5e3)
                            }(S.debug, e)
                        },
                        stop: function() {
                            clearInterval(i)
                        }
                    };

                    function r() {
                        var e;
                        n && 0 !== n.length && (e = n, n = [], Ur("[" + e.join(",") + "]"))
                    }
                }(),
                _s = "visibilitychange",
                Ts = "unload";

            function As(e, t) {
                t ? q(Jv, _s, function() {
                    "hidden" === Jv.visibilityState && e()
                }) : q(Wv, Ts, e)
            }

            function Rs(e, i) {
                return "undefined" != typeof Proxy && U.isFunction(i) ? new Proxy(e, {
                    get: function(e, t) {
                        if ("textContent" === t) return i(e);
                        if ("parentNode" === t) {
                            var n = e[t];
                            if (e.ownerDocument !== n) return Rs(e[t], i)
                        }
                        return e[t]
                    }
                }) : e
            }
            var ks = !1,
                Os = U.identity;

            function Ns(e, n) {
                return e ? function(e, t) {
                    return 0 < J(n(e)).closest(t).length
                } : function(e, t) {
                    return ci.matchesSelector(e, t)
                }
            }

            function Ls(e) {
                if (G.eventProperties && G.eventProperties.length && (e = Gs(e), !U.isEmpty(e))) return e
            }

            function Ms() {
                var e;
                return ks || !(e = y.get("eventPropertyConfigurations")) || U.isEmpty(e) || (e = Bs(e), U.isEmpty(e)) ? {} : e
            }
            var Fs = Yn(Ls),
                Ps = Yn(Ms);

            function Bs(e) {
                for (var t, n = v(), i = {}, r = 0; r < e.length && v() - n < 50; r++) {
                    if (!(t = e[r]).name) return;
                    var o = Ds(t);
                    o && (i["_pendo_" + t.name] = o)
                }
                return 50 < v() - n && Us(50, t), i
            }

            function Gs(n) {
                for (var i = y.get("eventPropertyMatchParents"), e = v(), t = {}, r = 0; r < G.eventProperties.length && v() - e < 50; r++) {
                    var o = G.eventProperties[r];
                    if (U.any(o.featureRules, function(e) {
                            try {
                                return Ns(i, Os)(n, e)
                            } catch (t) {
                                return !1
                            }
                        }))
                        for (var a = 0; a < o.eventPropertyRules.length && v() - e < 50; a++) {
                            var s = o.eventPropertyRules[a];
                            if (!s.name) return;
                            t[s.name] = Ds(s, n)
                        }
                }
                if (50 < v() - e) {
                    if (i && Os === U.identity && U.isFunction(G.getText)) return H("switching event property collection to fast text implementation"), Os = function(e) {
                        return Rs(e, function(e) {
                            return G.getText(e, 128)
                        })
                    }, Gs(n);
                    Us(50, o)
                }
                return t
            }

            function Us(e, t) {
                H("event property collection disabled; collection took greater than " + e + " milliseconds.");
                e = "ERROR event property collection exceeded time limit.";
                t.featureId ? e += "\n For feature with id: " + t.featureId : e += "\n For page event with name: " + t.name, c({}, e), t.featureId ? G.eventProperties = [] : ks = !0
            }

            function Ds(e, t) {
                if (e.path) return D(Hs(e, t), e.path, qv)
            }

            function Hs(e, t) {
                e = e.source || e.selector;
                return e && t ? zs(e, t) : e ? !(t = J(e)[0]) || "password" !== t.type && "hidden" !== t.type ? t : void 0 : Wv
            }

            function zs(e, t) {
                for (var n, i = t; !n && i;) {
                    try {
                        if ((n = J(e, i)[0]) && ("password" === n.type || "hidden" === n.type)) return
                    } catch (r) {
                        return
                    }
                    i = l.getParent(i)
                }
                return n
            }

            function js() {
                this.serializers = U.toArray(arguments)
            }

            function Ws(e, t) {
                return e.tag = l.isElementShadowRoot(t) ? "#shadow-root" : t.nodeName || "", e
            }

            function Js(e) {
                return I(e) ? "" + e : ""
            }

            function qs(e, t) {
                return e.id = Js(t.id), e
            }

            function Ks(e, t) {
                return e.cls = Js(J.getClass(t)), e
            }
            U.extend(js.prototype, {
                add: function(e) {
                    this.serializers.push(e)
                },
                remove: function(e) {
                    e = U.indexOf(this.serializers, e);
                    0 <= e && this.serializers.splice(e, 1)
                },
                serialize: function(n, i) {
                    return n ? (i = i || n, U.reduce(this.serializers, function(e, t) {
                        return t.call(this, e, n, i)
                    }, {}, this)) : {}
                }
            });
            var Vs = 256,
                Zs = 64,
                $s = {
                    a: {
                        events: ["click"],
                        attr: ["href"]
                    },
                    button: {
                        events: ["click"],
                        attr: ["value", "name"]
                    },
                    img: {
                        events: ["click"],
                        attr: ["src", "alt"]
                    },
                    select: {
                        events: ["mouseup"],
                        attr: ["name", "type", "selectedIndex"]
                    },
                    textarea: {
                        events: ["mouseup"],
                        attr: ["name"]
                    },
                    'input[type="submit"]': {
                        events: ["click"],
                        attr: ["name", "type", "value"]
                    },
                    'input[type="button"]': {
                        events: ["click"],
                        attr: ["name", "type", "value"]
                    },
                    'input[type="radio"]': {
                        events: ["click"],
                        attr: ["name", "type"]
                    },
                    'input[type="checkbox"]': {
                        events: ["click"],
                        attr: ["name", "type"]
                    },
                    'input[type="password"]': {
                        events: ["click"],
                        attr: ["name", "type"]
                    },
                    'input[type="text"]': {
                        events: ["click"],
                        attr: ["name", "type"]
                    }
                },
                Ys = function(e) {
                    return e && 0 === e.indexOf("data:") ? (r("Embedded data provided in URI."), e.substring(0, e.indexOf(","))) : e + ""
                };

            function Xs(e, t) {
                return e.getAttribute ? e.getAttribute(t) : e[t]
            }
            var Qs = function(e, t, n) {
                var i;
                return e && e.nodeName ? "img" == (i = e.nodeName.toLowerCase()) && "src" == t || "a" == i && "href" == t ? (i = e.getAttribute(t), Wi(Ys(i))) : (i = Xs(e, t), (!n || typeof i === n) && i ? U.isString(i) ? lt.call(i).substring(0, Vs) : i : null) : null
            };

            function eu(t) {
                var e, n, i;
                return U.isRegExp(t) && U.isFunction(t.test) ? function(e) {
                    return t.test(e)
                } : U.isArray(t) ? (e = U.map(U.filter(t, U.isObject), function(e) {
                    var t;
                    return e.regexp ? (t = (t = /\/([a-z]*)$/.exec(e.value)) && t[1] || "", new RegExp(e.value.replace(/^\//, "").replace(/\/[a-z]*$/, ""), t)) : new RegExp("^" + e.value + "$", "i")
                }), function(t) {
                    return U.any(e, function(e) {
                        return e.test(t)
                    })
                }) : U.isObject(t) && t.regexp ? (n = (n = /\/([a-z]*)$/.exec(t.value)) && n[1] || "", i = new RegExp(t.value.replace(/^\//, "").replace(/\/[a-z]*$/, ""), n), function(e) {
                    return i.test(e)
                }) : U.constant(!1)
            }

            function tu(e, t, n, i) {
                var r = U.indexBy(t),
                    t = U.filter(U.filter(e, function(e) {
                        return n(e.nodeName) || r[e.nodeName]
                    }), function(e) {
                        return !i(e.nodeName)
                    });
                return t.length <= Zs ? U.pluck(t, "nodeName") : (t = U.groupBy(e, function(e) {
                    return r[e.nodeName] ? "defaults" : U.isString(e.value) && e.value.length > Vs ? "large" : "small"
                }), U.pluck([].concat(U.sortBy(t.defaults, "nodeName")).concat(U.sortBy(t.small, "nodeName")).concat(U.sortBy(t.large, "nodeName")).slice(0, Zs), "nodeName"))
            }

            function nu(t, n) {
                var e = eu(y.get("htmlAttributes")),
                    i = eu(y.get("htmlAttributeBlacklist")),
                    r = (i("title") || (t.title = Qs(n, "title", "string")), (t.tag || "").toLowerCase()),
                    r = ("input" === r && (r += '[type="' + n.type + '"]'), t.attrs = {}, tu(n.attributes, $s[r] && $s[r].attr, e, i));
                return U.each(r, function(e) {
                    t.attrs[e.toLowerCase()] = Qs(n, e)
                }), t
            }

            function iu(e, t) {
                var n;
                return t.parentNode && t.parentNode.childNodes && (n = U.chain(t.parentNode.childNodes), e.myIndex = n.indexOf(t).value(), e.childIndex = n.filter(function(e) {
                    return e.nodeType == wr
                }).indexOf(t).value()), e
            }

            function ru(i, e) {
                var r;
                return y.get("siblingSelectors") && e.previousElementSibling && (r = "_pendo_sibling_", this.remove(ru), e = this.serialize(e.previousElementSibling), this.add(ru), i.attrs = i.attrs || {}, U.each(e, function(e, t) {
                    var n = {
                        cls: "class",
                        txt: "pendo_text"
                    }[t] || t;
                    U.isEmpty(e) || (U.isObject(e) ? U.each(e, function(e, t) {
                        e && !U.isEmpty(e) && (i.attrs[r + n + "_" + t] = e)
                    }) : i.attrs[r + n] = e)
                })), i
            }

            function ou() {
                return new js(Ws, qs, Ks, nu, iu, ru)
            }
            var au = ou(),
                su = function(e) {
                    return "BODY" === e.nodeName || null === e.parentNode && !l.isElementShadowRoot(e)
                },
                uu = "pendo-ignore",
                du = function(e) {
                    var t = {},
                        n = t,
                        i = e,
                        r = !1;
                    if (!e) return t;
                    do {
                        var o = i,
                            a = au.serialize(o, e)
                    } while (!r && Et(a.cls, uu) && (r = !0), n.parentElem = a, n = a, (i = l.getParent(o)) && !su(o));
                    return r && (t.parentElem.ignore = !0), t.parentElem
                },
                cu = ["", "left", "right", "middle"],
                lu = function(e, t) {
                    return cu[t]
                },
                fu = function() {
                    return !0
                },
                pu = function(e) {
                    return e.which || e.button
                },
                hu = function(e) {
                    return e
                },
                gu = function(e, t) {
                    return e[t]
                },
                mu = [
                    ["button", pu, fu, lu],
                    ["altKey", gu, hu, hu],
                    ["ctrlKey", gu, hu, hu],
                    ["metaKey", gu, hu, hu],
                    ["shiftKey", gu, hu, hu]
                ],
                vu = function(e, t) {
                    for (var n = [], i = 0; i < mu.length; i++) {
                        var r = mu[i],
                            o = r[0],
                            a = r[1],
                            s = r[2],
                            r = r[3],
                            a = a(e, o);
                        s(a) && n.push(r(o, a))
                    }
                    return t.flags = n, t
                },
                yu = {
                    click: vu
                },
                bu = function(e) {
                    return e.nodeType === br ? e.parentNode : e.nodeType === xr ? null : e.correspondingUseElement || e
                },
                wu = function(e) {
                    try {
                        var t, n, i, r, o, a;
                        J.data.get(e, "counted") || (J.data.set(e, "counted", !0), t = bi(e), n = e.type, i = {}, (r = yu[n]) && (i = r(e, i)), J.data.get(e, "stopped") && (i.stopped = !0), e.from && (i.from = e.from), (t = bu(t)) ? (o = du(t), U.extend(o, i), ms() && f.startPoller(), o.ignore || ("click" === n ? (a = Fs(t), Ra(n, {
                            target: o
                        }, qv, qv, a)) : Ra(n, {
                            target: o
                        }), S.trigger("appUsage", o, e))) : H("Invalid HTML target", "event", "dom", "processing"))
                    } catch (Ce) {
                        c(Ce, "pendo.io while handling event")
                    }
                },
                Iu = function(e) {
                    U.each(e, function(e) {
                        C(Jv, e, wu, !0)
                    })
                },
                Su = 5e3,
                xu = U.debounce(wu, Su, !0),
                Cu = function(e) {
                    U.contains(e = e || ["click", "focus", "submit", "change"], "change") && (e = U.without(e, "change"), q(Jv, "change", xu, !0));
                    var t = y.get("interceptElementRemoval");
                    Eu(J.event.trigger, b.addEventListener, t), Iu(e), y.get("xhrTimings") && Is(), As(function() {
                        ha(!0, {
                            guaranteed: !0
                        }), S.appUnloaded.trigger(), Es.flush()
                    }, y.get("preventUnloadListener")), Au(Wv.Event, e), Ru(Wv.Event, ["touchend"])
                };

            function Eu(t, e, n) {
                var i, r, o = [],
                    a = b.hasEvent("pointerdown"),
                    s = a ? "pointerdown" : "mousedown",
                    a = a ? "pointerup" : "mouseup",
                    u = {
                        cloneEvent: function(e) {
                            e = J.event.clone(e);
                            return e.type = "click", e.from = s, e.bubbles = !0, e
                        },
                        down: function(e) {
                            r = !1, e && (i = u.cloneEvent(e), n && u.intercept(e))
                        },
                        up: function(e) {
                            r = !1, e && i && bi(i) !== bi(e) && (r = !0, t(i))
                        },
                        click: function(e) {
                            i = null, r && J.data.set(e, "ignore", !0), r = !1, n && u.unwrap()
                        },
                        intercept: function(e) {
                            e = _u(bi(e));
                            U.each(e, function(e) {
                                e = Tu(e, u.remove);
                                o.push(e)
                            })
                        },
                        remove: function() {
                            i && (t(i), i = null), u.unwrap()
                        },
                        unwrap: function() {
                            0 < o.length && (U.each(o, function(e) {
                                e()
                            }), o = [])
                        }
                    };
                e && (q(Jv, s, u.down, !0), q(Jv, a, u.up, !0), q(Jv, "click", u.click, !0))
            }

            function _u(e) {
                for (var t = []; e && !su(e);) t.push(e), e = e.parentNode;
                return t
            }

            function Tu(n, i) {
                var e = ["remove", "removeChild"];
                try {
                    if (!n) return U.noop;
                    U.each(e, function(e) {
                        var t = n[e];
                        if (!t) return U.noop;
                        n[e] = U.wrap(t, function(e) {
                            return i && i(), e.apply(this, U.toArray(arguments).slice(1))
                        }), n[e]._pendoUnwrap = function() {
                            if (!n) return U.noop;
                            n[e] = t, delete n[e]._pendoUnwrap
                        }
                    })
                } catch (Ce) {
                    c(Ce, "ERROR in interceptRemove")
                }
                return function() {
                    U.each(e, function(e) {
                        if (!n[e]) return U.noop;
                        e = n[e]._pendoUnwrap;
                        U.isFunction(e) && e()
                    })
                }
            }

            function Au(n, e) {
                var t = ["stopPropagation", "stopImmediatePropagation"];
                try {
                    if (!n || !n.prototype) return U.noop;
                    var i = U.indexBy(e);
                    U.each(t, function(e) {
                        var t = n.prototype[e];
                        t && (n.prototype[e] = U.wrap(t, function(e) {
                            var t = e.apply(this, arguments);
                            return i[this.type] && (J.data.set(this, "stopped", !0), J.event.trigger(this)), t
                        }), n.prototype[e]._pendoUnwrap = function() {
                            n.prototype[e] = t, delete n.prototype[e]._pendoUnwrap
                        })
                    })
                } catch (Ce) {
                    c(Ce, "ERROR in interceptStopPropagation")
                }
            }

            function Ru(e, t) {
                try {
                    if (!e || !e.prototype) return U.noop;
                    var i = U.indexBy(t),
                        n = e.prototype.preventDefault;
                    if (!n) return U.noop;
                    e.prototype.preventDefault = U.wrap(n, function(e) {
                        var t, n = e.apply(this, arguments);
                        return i[this.type] && ((t = J.event.clone(this)).type = "click", t.from = this.type, t.bubbles = !0, t.eventPhase = pi, J.event.trigger(t)), n
                    }), e.prototype.preventDefault._pendoUnwrap = function() {
                        e.prototype.preventDefault = n, delete e.prototype.preventDefault._pendoUnwrap
                    }
                } catch (Ce) {
                    c(Ce, "ERROR in interceptPreventDefault")
                }
            }

            function C(e, t, n, i) {
                e && t && n && (e === Wv && "error" === t || (i && !b.addEventListener && (i = !1), J.event.add(e, {
                    type: t,
                    handler: n,
                    capture: i
                })))
            }

            function m(e, t, n, i) {
                e && t && n && (i && !b.addEventListener && (i = !1), J.event.remove(e, t, n, i))
            }
            var ku = function(e) {
                    J.data.set(e, "pendoStopped", !0), e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                Ou = function(e, t) {
                    "complete" === (t = t || Wv).document.readyState ? e() : q(t, "load", e)
                },
                Nu = function() {
                    var a = At(50, Tt(function(e) {
                        return e.id
                    }));
                    return {
                        reset: function() {
                            a.reset()
                        },
                        canDisplay: function(e, t, n) {
                            if (n && n.enabled && U.isFinite(t)) {
                                t = i(t, n);
                                if (U.isNumber(t) && !isNaN(t)) return t <= e
                            }
                            return !0
                        },
                        lastDismissedTime: function(e) {
                            return Math.max(e.latestDismissedAutoAt || -Infinity, e.finalAdvancedAutoAt || -Infinity, e.latestSnoozedAutoAt || -Infinity)
                        },
                        sortAndFilter: function(e, t) {
                            var n, i, t = function(e) {
                                e = U.defaults(U.groupBy(e, function(e) {
                                    return s(e) ? "override" : "auto"
                                }), {
                                    override: [],
                                    auto: []
                                });
                                return e.override.concat(e.auto)
                            }(function(e, t) {
                                var n;
                                return U.isArray(t) && t.length ? (n = U.indexBy(e, "id"), t = U.reduce(t, i, []), U.chain(e).pluck("id").reduce(i, t).value()) : e;

                                function i(e, t) {
                                    return n[t] && (e.push(n[t]), delete n[t]), e
                                }
                            }(U.filter(e, r), t));
                            return U.find(e, function(e) {
                                return e.isTraining
                            }) ? (e = y.get("adoptPrioritizeAdoptGuides"), e = e, n = [], i = [], U.each(t, function(e) {
                                (e.isTraining ? n : i).push(e)
                            }), e ? n.concat(i) : i.concat(n)) : t
                        },
                        tryDisplay: function(e, t, n) {
                            var i, r = Nu.lastDismissedTime(t),
                                e = Nu.sortAndFilter(e, t.autoOrdering),
                                o = Nu.canDisplay(v(), r, t.throttling);
                            (a.eachUntil(e, function(e) {
                                if (s(e) || o) return e.shouldAutoDisplay() && e.autoDisplay(), e.isShown() ? (i = e, !0) : void 0
                            }) || i) && n();
                            return i
                        },
                        getNextAutoDisplayTime: i,
                        iterator: a
                    };

                    function r(e) {
                        return e && /auto/.test(e.launchMethod)
                    }

                    function s(e) {
                        return (t = e).attributes && t.attributes.overrideAutoThrottling || U.isFunction(e.shouldShowSnoozedGuide) && e.shouldShowSnoozedGuide();
                        var t
                    }

                    function i(e, t) {
                        var n = t.interval,
                            t = (t.unit || "").toLowerCase();
                        return U.isNumber(n) && Ot(e) ? "minute" === t ? 6e4 * n + e + 1 : "hour" === t ? 36e5 * n + e + 1 : "day" === t ? (t = e, e = n, (t = new Date(Math.max(t, 0))).setHours(0, 0, 0, 0), t.setDate(t.getDate() + e), t.getTime()) : void 0 : U.isNumber(n) ? (new Date).getTime() : void 0
                    }
                }(),
                Lu = function(e) {
                    return e && e.launchMethod && 0 <= e.launchMethod.indexOf("badge")
                },
                Mu = function(e) {
                    return e && e.isMultiStep && !(e.attributes && "group" === e.attributes.type)
                };

            function Fu() {
                return "undefined" != typeof selmo && selmo.isPreviewing
            }

            function Pu() {
                var e = Pu.attachPoint;
                if (null == e) {
                    var t = y.get("guides.attachPoint");
                    if (t) {
                        try {
                            e = J(t)[0]
                        } catch (Ce) {
                            H('Error finding guide attach point "' + t + '"')
                        }
                        e = e || Jv.createElement("div")
                    } else e = !1;
                    Pu.attachPoint = e
                }
                return e || po()
            }
            var Bu = function(e) {
                    var t = ur[e.guideId];
                    if (t) {
                        t = t.element();
                        if (ho(t) && t.id === "_pendo-badge_" + e.id) return t
                    }
                },
                Gu = function(e) {
                    var t;
                    return e ? (t = "building-block" === D(t = e.getGuide(), "attributes.type") || !Mu(t), !e.overrideElement && t && (e.overrideElement = Bu(e)), e.targetElement = Uu(e), e.overrideElement || e.targetElement) : (H("Can't get element for null step"), null)
                },
                Uu = function(e) {
                    e = e.elementPathRule || null, e = e ? J(e) : [po()];
                    return 0 === e.length ? null : U.first(e)
                },
                Du;

            function Hu(e) {
                var t = D(e, "attributes.activation.selector");
                return t || e.steps[0].elementPathRule
            }
            var zu = function() {
                    var e = Wv.navigator;
                    return ((U.isArray(e.languages) ? e.languages[0] : e.language || e.browserLanguage || e.systemLanguage || e.userLanguage) || "").split("-").join("_")
                },
                ju = "meta",
                Wu = function(e) {
                    return void 0 !== (e = "object" == typeof e ? It(e) : e) && e.toString && (e = e.toString()), "" + (U.isNumber(Du) ? Du : d.read(ju)) !== e
                },
                Ju = function(e) {
                    return !(e === qv || e instanceof Function || "symbol" == typeof e)
                },
                qu = function(n) {
                    var i = {};
                    return U.each(U.keys(n), function(e) {
                        var t = n[e];
                        U.isArray(t) ? i[e] = U.filter(t, Ju) : Ju(t) && (i[e] = t)
                    }), i
                },
                Ku = function(e) {
                    return U.isObject(e) || (e = {}), U.isObject(e.visitor) || (e.visitor = {}), U.isObject(e.account) || (e.account = {}), U.isObject(e.parentAccount) || (e.parentAccount = {}), e.visitor.id === Un && (H("Missing visitor id."), delete e.visitor.id), Fn(e.account.id) && Fn(e.parentAccount.id) && (zn(e.account.id) ? e.parentAccount.id = e.account.id.split(Hn)[0] : e.account.id = "" + e.parentAccount.id + Hn + e.account.id), Fn(e.account.id) && (Vn(e.account.id), e.account.id = Kn()), Fn(e.visitor.id) && G.identify(e.visitor.id, e.account.id), e.visitor.id = j(), e.visitor.language = zu(), {
                        visitor: qu(e.visitor),
                        account: qu(e.account),
                        parentAccount: qu(e.parentAccount),
                        date: Vu(),
                        version: G.VERSION
                    }
                },
                Vu = function() {
                    var e = new Date,
                        t = e.getDate(),
                        n = e.getMonth() + 1;
                    return e = (t = t < 10 ? "0" + t : t) + "/" + (n = n < 10 ? "0" + n : n) + "/" + e.getFullYear()
                },
                Zu = function(e) {
                    return e && 0 < U.keys(e).length
                },
                $u = function(e) {
                    var t, n;
                    if (Zu(e)) return e.jwt && e.signingKeyName && ((t = wa.getJwtOptions(e, "updateOptions")) && (wa.set(U.pick(e, "jwt", "signingKeyName")), e = t)), e = Ku(e), W.getters["metadata/selfHosted"]() && (e.selfHosted = !0), y.setLocalConfig(U.extend({}, y.getLocalConfig(), e)), W.commit("metadata/setMetadata", e), t = It(e), n = Wu(t), Du = t, n ? (d.write(ju, t), e) : void 0
                },
                Yu = Yn(function(e) {
                    e = $u(e);
                    e && S.metadata.trigger(e)
                }),
                Xu = Yn(function(e, t) {
                    U.isObject(e) ? Yu(e) : Jn(e, t)
                }),
                Qu = function() {
                    var e = J("script");
                    return ed(e) && "extension" !== xe()
                },
                ed = function(e) {
                    var t = new RegExp("/agent/static/" + G.apiKey + "/pendo\\.js$");
                    return !U.any(e, function(e) {
                        return t.test(e.src)
                    })
                },
                td = function() {
                    var e = y.get("blockAgentMetadata");
                    return e !== qv && e
                };

            function nd() {
                return W.getters["metadata/metadata"]()
            }

            function id() {
                return w.parse(w.stringify(nd()))
            }

            function rd(e) {
                var t = e.data[0],
                    n = y.getLocalConfig();
                $n(e) ? (Gn([ju]), W.commit("metadata/reset")) : (n.visitor = U.extend({}, n.visitor, {
                    id: t.visitor_id
                }), n.account = U.extend({}, n.account, {
                    id: t.account_id
                }), y.setLocalConfig(n), W.commit("metadata/setMetadata", n))
            }

            function od(e, t, n) {
                return Ii.postJSON(e.replace(/\/guides\.js\//, "/guides.json/"), t).then(function(e) {
                    G.guidesPayload(e.data), n()
                })
            }
            S.identify.on(rd);
            var ad = {
                post: od,
                load: function(e, t) {
                    return z.resolve(G.loadResource(e, t))
                },
                endpoint: function() {
                    return "guide.js"
                },
                usesXhr: function() {
                    return !1
                }
            };

            function sd(e) {
                e = ko(e);
                if (e) return e.filename
            }
            var ud = function() {
                    var t, n, e, i, r, o = {
                        failed: {},
                        verified: {}
                    };
                    return n = o, i = Ur, r = function(e) {
                        try {
                            var t = [];
                            return !ad.usesXhr() && e.domJsonpUrl ? t.push(s(e, "domJsonpUrl")) : ad.usesXhr() && e.domUrl && t.push(a(e, "domUrl")), e.contentUrlJs ? t.push(s(e, "contentUrlJs")) : e.contentUrl && t.push(s(e, "contentUrl")), z.all(t)
                        } catch (Ce) {
                            throw S.contentVerificatonFail.trigger(e, Ce), Ce
                        }
                    }, e = function(e) {
                        return r(e).then(U.noop, function(e) {
                            return /verify/.test(e) && i(e), z.reject(e)
                        })
                    }, t = function(t) {
                        return n.failed[t.id] ? z.reject() : n.verified[t.id] ? z.resolve() : e(t).then(function() {
                            n.verified[t.id] = !0
                        }, function(e) {
                            return n.failed[t.id] = !0, z.reject(e)
                        })
                    }, {
                        verify: function(e) {
                            return y.get("guideValidation") ? t(e) : z.resolve()
                        },
                        reset: function() {
                            o.failed = {}, o.verified = {}
                        }
                    };

                    function a(e, t) {
                        var n, i = e[t];
                        return U.isString(i) ? (n = (e = e)[{
                            domUrl: "domHash",
                            domJsonpUrl: "domJsonpHash"
                        }[t = t]] || sd(e[t]), Ii.get(i).then(function(e) {
                            var t;
                            if ("object" == typeof(e = e.data) && (e = w.stringify(e)), (t = O.create()).update(e), _.uint8ToBase64(t.digest()) !== n) return z.reject('Unable to verify content at "' + i + '"')
                        })) : z.reject('unable to parse "' + i + '"')
                    }

                    function s(e, t) {
                        var n = e[t];
                        return b.sri && /[?&]sha(256|384|512)=/.test(n) ? z.resolve() : a(e, t)
                    }
                }(),
                dd = function() {
                    var o = "allow",
                        a = "deny",
                        s = "pending",
                        u = {},
                        i = function() {
                            return 0 < U.size(da._handlers.validateGuide)
                        };

                    function r(i) {
                        var r = u[i.id];
                        return r || (r = {}, u[i.id] = r), r.contentPromise || (r.contentPromise = i.fetchContent()), r.contentPromise.then(function() {
                            var e = w.stringify(i.signature()),
                                t = i.id + "-" + It(e),
                                n = (r[t] || (r[t] = {
                                    status: s
                                }, r.status = s), r[t].promise);
                            return n || (n = da.validateGuide(e, i).then(function() {
                                r[t].status = o, r.status = o
                            }, function(e) {
                                return r[t].status = a, r.status = a, z.reject(e)
                            }), r[t].promise = n), n
                        })
                    }
                    var d = function(e, n) {
                        var i = [];
                        return U.each(e, function(e, t) {
                            n && (t = n + "." + t), U.isObject(e) ? U.each(d(e, t), function(e) {
                                i.push(e)
                            }) : i.push([t, e])
                        }), i
                    };
                    return {
                        state: u,
                        Step: function(e) {
                            var i = this;

                            function r(e) {
                                return U.filter([
                                    ["content", sd(e.contentUrl)],
                                    ["contentCss", sd(e.contentUrlCss)],
                                    ["contentJs", sd(e.contentUrlJs)],
                                    ["dom", D(e, "domHash", sd(e.domUrl))],
                                    ["domJsonp", D(e, "domJsonpHash", sd(e.domJsonpUrl))]
                                ], function(e) {
                                    return e[1]
                                })
                            }
                            return this.signature = function() {
                                var e, t, n;
                                return this.domUrl ? this.guide.authoredLanguage === this.language ? r(this) : (t = D(e = i, "guide.translationStates." + e.language + ".stepTranslations." + e.id), r({
                                    contentUrl: e.contentUrl,
                                    contentUrlCss: e.contentUrlCss,
                                    contentUrlJs: e.contentUrlJs,
                                    domUrl: e.domUrl,
                                    domJsonpUrl: e.domJsonpUrl,
                                    domHash: t && t.domHash,
                                    domJsonpHash: t && t.domJsonpHash
                                })) : (e = [
                                    ["content", this.content]
                                ], (t = this.attributes && this.attributes.variables) && (n = d(t)).length && (n = U.sortBy(n, function(e) {
                                    return e[0]
                                }), e.push(["variables", n])), e)
                            }, i
                        },
                        Guide: function() {
                            return this.signature = function() {
                                return U.map(this.steps, function(e) {
                                    return e.signature()
                                })
                            }, this
                        },
                        Launcher: function() {
                            var n = this,
                                i = !1,
                                r = function() {
                                    return 0 < U.size(da._handlers.validateLauncher) && n.data.template
                                };
                            return n.before("update", function() {
                                if (r() && i) return !1
                            }), n.before("render", function() {
                                var e, t;
                                if (r()) return !i && (t = "launcher-" + It(n.signature()), (t = u[t]) !== a && (t !== o ? (i = !0, t = w.stringify(n.signature()), e = "launcher-" + It(t), da.validateLauncher(t).then(function() {
                                    u[e] = o
                                }, function() {
                                    u[e] = a
                                }).then(function() {
                                    i = !1, n.render(), n.update(g())
                                }, function() {
                                    i = !1
                                }), !1) : void 0))
                            }), n.signature = function() {
                                var e = [],
                                    t = d(this.data);
                                return t.length && (t = U.chain(t).filter(function(e) {
                                    return !/^contentUrl/.test(e[0])
                                }).sortBy(function(e) {
                                    return e[0]
                                }).value(), e.push(["variables", t])), e
                            }, n
                        },
                        validate: function(e) {
                            if (!i()) return z.resolve();
                            try {
                                return D(e, "attributes.resourceCenter.isTopLevel", !1) ? (t = e, n = $.findResourceCenterModules(t, g()), t = [t].concat(n), z.all(U.map(t, r))) : r(e)
                            } catch (Ce) {
                                throw S.contentValidationFail.trigger(e, Ce), Ce
                            }
                            var t, n
                        },
                        valid: function(e) {
                            return !i() || !!(e = u[e.guideId]) && e.status === o
                        },
                        invalid: function(e) {
                            return !!i() && (!!(e = u[e.guideId]) && e.status === a)
                        },
                        reset: function() {
                            u = {}
                        }
                    }
                }(),
                cd = {
                    initializeWatermark: function(e) {
                        e = U.filter(e, function(e) {
                            return e && e.attributes && e.attributes.isWatermark
                        }), cd.watermarkGuides = e, e = U.map(e, function(e) {
                            return e.fetchContent()
                        });
                        return z.all(e)
                    },
                    buildWatermark: function(e, t) {
                        if ((e = e || {}).isTraining) {
                            var n = e.targetAccount ? function(t) {
                                return U.find(cd.watermarkGuides, function(e) {
                                    return t === e.targetAccount
                                })
                            }(e.targetAccount) : function(t) {
                                return U.find(cd.watermarkGuides, function(e) {
                                    return t === e.appId
                                })
                            }(e.appId);
                            if (n && n.steps) {
                                var i, n = n.steps[0];
                                if (n && n.domJson) return i = n.domJson, (i = t(i, n)).css({
                                    position: "absolute",
                                    left: "auto",
                                    top: e.isBottomAligned ? "auto" : "100%",
                                    bottom: e.isBottomAligned ? "100%" : "auto",
                                    right: "0"
                                }), i
                            }
                        }
                    }
                };

            function ld() {
                return !!(Fu() && io().width <= 320) || b.isMobileUserAgent()
            }
            var fd = "top",
                pd = "bottom",
                hd = "left",
                gd = "right",
                md = "center";

            function vd(e, t, n) {
                return n === gd || n === hd ? n : (n = e.left, (t = (e = t.width) / 3) < n && n < 2 * t ? md : n < e / 2 ? gd : hd)
            }

            function yd(e, t, n) {
                return n === fd || n === pd ? n : (n = e.top, (t = (e = t.height) / 3) < n && n < 2 * t ? md : n < e / 2 ? pd : fd)
            }
            var bd = function(e, t) {
                    return e < t
                },
                wd = U.negate(bd);

            function Id(e) {
                return {
                    top: 0,
                    left: 0,
                    right: e.width,
                    bottom: e.height,
                    width: 0,
                    height: 0
                }
            }

            function Sd() {
                var e = po();
                return kr(e) ? V(e) : ((e = io()).left = 0, e.top = 0, e.right = e.width, e.bottom = e.height, e)
            }

            function xd(e, t, n) {
                var i = {},
                    r = t.top - e.top,
                    e = t.left - e.left;
                return i.top = r - n.top, i.left = e - n.left, i.height = t.height + n.top + n.bottom, i.width = t.width + n.left + n.right, i.bottom = i.top + i.height, i.right = i.left + i.width, {
                    top: {
                        top: 0,
                        height: Math.max(i.top, 0),
                        left: i.left,
                        width: i.width
                    },
                    left: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: i.left
                    },
                    bottom: {
                        top: i.bottom,
                        width: i.width,
                        bottom: 0,
                        left: i.left
                    },
                    right: {
                        top: 0,
                        bottom: 0,
                        left: i.right,
                        right: 0
                    }
                }
            }

            function Cd(e) {
                var t;
                if (e && e.length) return t = kr(po()) ? V : Lr, (e = U.reduce(e, function(n, e) {
                    var i;
                    return xo(e) ? (i = t(e)) ? (U.each([
                        ["top", bd],
                        ["right", wd],
                        ["bottom", wd],
                        ["left", bd]
                    ], function(e) {
                        var t = e[0],
                            e = e[1];
                        n[t] && !e(i[t], n[t]) || (n[t] = i[t])
                    }), n) : void 0 : n
                }, {})).height = e.bottom - e.top, e.width = e.right - e.left, e
            }

            function Ed(e, t) {
                var n = Sd(),
                    e = Cd(e) || Id(n);
                return {
                    viewport: n,
                    box: e,
                    overlays: xd(n, e, t)
                }
            }
            var _d = 430,
                Td = 200,
                Ad = 15,
                Rd = "_pendo-guide-tt_",
                kd = "_pendo-guide-mobile-tt_",
                Od = null,
                Nd = function() {
                    return ld() ? kd : Rd
                },
                Ld = function(e) {
                    return "#_pendo_g_" + e.id
                },
                Md = function(e, t) {
                    Od = null;
                    var n, i, r, o, e = ao(e);
                    return 0 === e.height && 0 === e.width ? null : (n = t.guideElement, o = t.attributes.height, i = t.attributes.width, r = t.attributes.layoutDir, n.addClass(Nd()), o = Qd(e, o, i, r), t && (t.dim = o), n.css({
                        width: o.width,
                        height: o.height,
                        left: o.left,
                        top: o.top
                    }), e.fixed && n.css({
                        position: "fixed"
                    }), J("._pendo-guide-container_", n).addClass(o.arrowPosition).css({
                        top: o.content.top,
                        left: o.content.left,
                        width: o.content.width,
                        height: o.content.height
                    }), Fd(n[0], o), n[0])
                },
                Fd = function(e, t) {
                    var n = ["top", "right", "bottom", "left"],
                        i = "_pendo-guide-arrow-",
                        r = i + "border-",
                        o = t.arrowPosition,
                        a = U.chain(n).filter(function(e) {
                            return e !== o
                        }).map(function(e) {
                            return "border-" + e + "-width:" + G.TOOLTIP_ARROW_SIZE + "px;"
                        }).value().join(""),
                        s = J("div._pendo-guide-arrow_", e).remove().findOrCreate("<div class='_pendo-guide-arrow_'></div>"),
                        u = J("div._pendo-guide-arrow-border_ ", e).remove().findOrCreate("<div class='_pendo-guide-arrow-border_'></div>");
                    U.each(n, function(e) {
                        s.removeClass(i + e + "_").removeClass(e), u.removeClass(r + e + "_").removeClass(e)
                    }), s.addClass(i + o + "_").addClass(o).css(a + "top:" + t.arrow.top + "px;left:" + t.arrow.left + "px;"), u.addClass(r + o + "_").addClass(o).css(a + "top:" + t.arrow.border.top + "px;left:" + t.arrow.border.left + "px;"), J(e).append(s).append(u)
                };

            function Pd(e, t, n) {
                var i, r, o, e = ao(e),
                    t = ao(t),
                    a = (e = e, a = t, i = Math.min(e.top, a.top), r = Math.min(e.left, a.left), o = Math.max(e.top + e.height, a.top + a.height), e = Math.max(e.left + e.width, a.left + a.width), {
                        height: Math.abs(o - i),
                        width: Math.abs(e - r),
                        top: i,
                        left: r
                    });
                !1 !== ro(a) || t.fixed || (o = Bd(a, io(), n, bo(po(), /hidden/)), Wv.scrollTo(o.x, o.y))
            }

            function Bd(e, t, n, i) {
                var r = {
                    x: e.left + e.width - t.width,
                    y: 0
                };
                return r.y = "top" === n ? e.top : e.top + e.height - t.height, r.y = Math.max(r.y, 0), r.x = Math.max(r.x, 0), U.contains([p.X, p.BOTH], i) && (r.x = 0), U.contains([p.Y, p.BOTH], i) && (r.y = 0), r
            }
            var Gd = function(e, t) {
                    t === qv && (t = sr), e.element = Gu(e);
                    var n = e.element;
                    if (!n) return H("No element found for step: " + e.id), null;
                    Co(n);
                    var i = Md(n, e);
                    return null === i ? null : (i.id = G.getTooltipDivId(e), J(i).appendTo(Pu()), t.push(i), C(i, "mouseover", U.partial(J.addClass, i, "mouseover")), C(i, "mouseout", U.partial(J.removeClass, i, "mouseover")), Pd(n, i), Kd(e), n)
                },
                Ud = null,
                Dd = function(e) {
                    var t = !U.isEqual(e, Ud);
                    return Ud = e, t
                },
                Hd = null,
                zd = function(e) {
                    var t = !U.isEqual(e, Hd);
                    return Hd = e, t
                };

            function jd() {
                Wd = Hd = Ud = null
            }
            var Wd = null,
                Jd = function(e) {
                    var t = !U.isEqual(e, Wd);
                    return Wd = e, t
                },
                qd = {
                    top: "north",
                    left: "east",
                    bottom: "south",
                    right: "west"
                },
                Kd = function(e) {
                    try {
                        var t, n, i, r, o, a, s, u;
                        e.attributes && e.attributes.blockOutUI && e.attributes.blockOutUI.enabled && (t = e.attributes.blockOutUI, (n = []).push(e.element), i = Cd(n = n.concat(U.compact(U.flatten(U.map(t.additionalElements, function(e) {
                            return U.toArray(J(e))
                        }))))), o = {
                            top: r = t.padding || 0,
                            left: r,
                            bottom: r,
                            right: r
                        }, s = xd(a = Sd(), i, o), (Dd(i) || zd(a) || Jd(s)) && (u = {
                            "z-index": t.zindex || 1e4,
                            position: "fixed"
                        }, t.bgColor && (u["background-color"] = t.bgColor), t.opacity && (u.opacity = t.opacity), U.each(s, function(e, t) {
                            Vd(qd[t], U.extend({}, e, u))
                        })))
                    } catch (Ce) {
                        H("Failed to add BlockOut ui", "error")
                    }
                },
                Vd = function(e, t) {
                    e = J("div._pendo-guide-tt-region-block_._pendo-region-" + e + "_")[0] || Zd(e);
                    J(e).css(t)
                },
                Zd = function(e) {
                    e = J('<div class="_pendo-guide-tt-region-block_ _pendo-region-' + e + '_"></div>');
                    J("body").append(e)
                },
                $d = function(e) {
                    var t = U.isEqual(e, Od);
                    return Od = e, !t
                },
                Yd = function(e) {
                    var t, n, i, r = ao(e.element || Gu(e));
                    Kd(e), $d(r) && (n = e.attributes.height, i = e.attributes.width, t = e.attributes.layoutDir, n = Qd(r, n, i, t), (i = J(Ld(e))).css({
                        top: n.top,
                        left: n.left,
                        position: r.fixed ? "fixed" : ""
                    }), Fd(i, n))
                };

            function Xd(e) {
                var t, n, i, r, o, a = /(auto|scroll)/,
                    s = /(auto|scroll|hidden)/,
                    u = V(e),
                    d = yo(e, s);
                if (!So(e)) return !1;
                for (; d;) {
                    if (t = V(d), (o = bo(d, a)) !== p.NONE && (i = n = 0, o !== p.Y && o !== p.BOTH || (u.bottom > t.bottom && (n += u.bottom - t.bottom, u.top -= n, u.bottom -= n), u.top < t.top && (n -= r = t.top - u.top, u.top += r, u.bottom += r)), o !== p.X && o !== p.BOTH || (u.right > t.right && (i += u.right - t.right, u.left -= i, u.right -= i), u.left < t.left && (i -= r = t.left - u.left, u.left += r, u.right += r))), !wo(u, d, s)) return !1;
                    d = yo(d, s)
                }
                return !0
            }
            var Qd = function(e, t, n, i) {
                    var r = G.TOOLTIP_ARROW_SIZE,
                        o = {
                            arrow: {
                                border: {}
                            },
                            content: {
                                top: r,
                                left: r
                            }
                        },
                        a = io();
                    return o.width = Math.min(n, a.width), o.height = t, o.content.width = o.width - 2 * r, o.content.height = o.height - 2 * r, o = ec(o, e, a, i = i || "auto"), o = tc(o, e, a, i), o = nc(o, e, a)
                },
                ec = function(e, t, n, i) {
                    return e.arrow.hbias = vd(t, n, i), e
                },
                tc = function(e, t, n, i) {
                    var r;
                    return i && "DEFAULT" != i && "auto" != i && (e.arrowPosition = i), e.arrowPosition || (i = t.top - _r(), t = (r = t.left - Tr()) + t.width, i < n.height / 3 ? e.arrowPosition = "top" : i > 2 * n.height / 3 || "center" == e.arrow.hbias ? e.arrowPosition = "bottom" : r < e.width && n.width - t < e.width ? e.arrowPosition = "top" : e.arrowPosition = e.arrow.hbias), e
                },
                nc = function(e, t, n) {
                    var i, r, o, a = e.height,
                        s = e.width;
                    return Ye() ? Xe(e, t, n) : ("top" == e.arrowPosition || "bottom" == e.arrowPosition ? (i = 0, "top" == e.arrowPosition ? (e.top = t.top + t.height, e.arrow.top = Te(9, 6) ? 6 : 2, i = -1) : "bottom" == e.arrowPosition && (e.top = t.top - a, e.arrow.top = a - G.TOOLTIP_ARROW_SIZE - 1, e.arrow.top += Te(9, 6) ? 6 : 0, e.arrow.top += 8 == u ? -1 : 0, i = 1), r = 10 + G.TOOLTIP_ARROW_SIZE, o = s - 3 * G.TOOLTIP_ARROW_SIZE - 10, e.arrow.hbias == hd ? (e.left = t.left + t.width / 2 - (10 + 2 * G.TOOLTIP_ARROW_SIZE), e.arrow.left = r) : e.arrow.hbias == gd ? (e.left = t.left - s + t.width / 2 + (10 + 2 * G.TOOLTIP_ARROW_SIZE), e.arrow.left = o) : (e.left = t.left + t.width / 2 - s / 2, e.arrow.left = s / 2 - G.TOOLTIP_ARROW_SIZE), !1 !== e.arrow.floating && (n = e.left + s - n.width, 0 < (n -= Math.max(0, e.arrow.left + n - o)) && (e.left -= n, e.arrow.left += n), o = -e.left, 0 < (o -= Math.max(0, r - (e.arrow.left - o))) && (e.left += o, e.arrow.left -= o)), e.arrow.border.top = e.arrow.top + i, e.arrow.border.left = e.arrow.left) : (e.arrow.hbias == hd ? (e.left = t.left + t.width, e.arrow.left = 1, e.arrow.left += Te(10, 6) ? 5 : 0, e.arrow.border.left = e.arrow.left - 1) : e.arrow.hbias == gd && (e.left = Math.max(0, t.left - s), e.arrow.left = s - G.TOOLTIP_ARROW_SIZE - 1, e.arrow.left += Te(10, 6) ? 5 : 0, e.arrow.left += 7 == u && 6 <= Ae ? 1 : 0, e.arrow.border.left = e.arrow.left + 1), e.top = t.top - a / 2 + t.height / 2, e.arrow.top = a / 2 - G.TOOLTIP_ARROW_SIZE, e.arrow.border.top = e.arrow.top), e)
                },
                ic = function() {
                    return G.TOOLTIP_ARROW_SIZE
                },
                rc = {
                    width: _d,
                    height: Td,
                    arrowSize: Ad
                },
                oc = function() {
                    return {
                        createBBTooltip: function(e, t, n, i) {
                            var r, o, a, s, u, d;
                            if (n.guideElement) return (r = n.guideElement).addClass(Nd()), 0 === (o = ao(t)).height && 0 === o.width ? null : (t = Lr(t), (e = Z.findDomBlockInDomJson(e, function(e) {
                                return "pendo-guide-container" === e.props.id
                            })) ? (d = n.attributes.layoutDir, u = {
                                height: i.offsetHeight,
                                width: i.offsetWidth
                            }, a = {
                                height: parseInt(e.props["data-caret-height"], 10) || 0,
                                width: parseInt(e.props["data-caret-width"], 10) || 0,
                                backgroundColor: e.props.style["background-color"],
                                offset: 10
                            }, l(n), e.props.style.border && (e = e.props.style.border.split(" "), a.borderColor = e[2], a.borderWidth = parseInt(e[0], 10)), e = f(o, u, a, d, t), n && (n.dim = e), u = D(s = n && U.isFunction(n.getGuide) ? n.getGuide() : s, "attributes.resourceCenter"), o.fixed ? (r.css({
                                position: "fixed"
                            }), i.style.position = "absolute") : n && u || (i.style.position = "absolute"), a.height && a.width && p(r, e, a), d = "300000", i && i.style && i.style["z-index"] && (d = i.style["z-index"]), r.css({
                                "z-index": d
                            }), u || r.css({
                                height: "auto",
                                width: "auto",
                                overflow: "visible"
                            }), n.elementPathRule && r.css({
                                left: e.left,
                                top: e.top,
                                position: o.fixed ? "fixed" : "absolute"
                            }), "top" === e.layoutDir && e.hbias === hd && r.find("#pendo-watermark").css({
                                top: "auto",
                                bottom: "100%"
                            }), c(n, v), r[0]) : void 0)
                        },
                        getBBTooltipDimensions: f,
                        determineBBHorizontalBias: vd,
                        determineTooltipPosition: a,
                        positionBBTooltipWithBias: s,
                        calculateToolTipPositionForTopBottom: i,
                        calculateToolTipPositionForLeftRight: r,
                        buildTooltipCaret: p,
                        styleTopOrBottomCaret: o,
                        styleLeftOrRightCaret: d,
                        buildBorderCaret: h,
                        determineBorderCaretColor: m,
                        placeBBTooltip: function(e, t) {
                            var n, i, r, o, a, t = t || function(e) {
                                var t, n;
                                if (e.guideElement) return t = "pendo-resource-center-container" === e.guideElement.attr("id"), n = Z.findGuideContainerJSON(e.domJson), (t ? e.guideElement : e.guideElement.find("#" + n.props.id))[0]
                            }(e);
                            t && (i = e.element || Gu(e), n = ao(i), "none" !== K(e.elements[0]).display && (i = Lr(i), a = e.attributes.layoutDir, e = e.guideElement, r = J(t).find("#pendo-guide-container"), o = r[0].style, t = K(t), t = {
                                height: parseInt(t.height, 10),
                                width: parseInt(t.width, 10)
                            }, r = {
                                height: parseInt(r[0].getAttribute("data-caret-height"), 10) || 0,
                                width: parseInt(r[0].getAttribute("data-caret-width"), 10) || 0,
                                backgroundColor: r[0].style["background-color"],
                                offset: 10,
                                borderColor: o.borderColor,
                                borderWidth: parseInt(o.borderWidth, 10)
                            }, o = this.getBBTooltipDimensions(n, t, r, a, i), r.height && r.width && (t = e.find(".pendo-tooltip-caret")[0], a = e.find(".pendo-tooltip-caret-border")[0], t && u(t, o, r), a && g(a, r, o.layoutDir, t)), e.css({
                                top: o.top,
                                left: o.left,
                                position: n.fixed ? "fixed" : "absolute"
                            })))
                        },
                        attachBBAdvanceActions: l,
                        attachScrollHandlers: c
                    };

                    function c(e, t) {
                        e && U.isFunction(e.attachEvent) && (Fu() && e.element === J.getBody() || e.attachEvent(Wv, "scroll", U.throttle(U.bind(t, e, e), 10), !0))
                    }

                    function t(t, n) {
                        var e = J(n.elementPathRule)[0];
                        n.attachEvent(e, t, function(e) {
                            J.data.set(e, "advanced", !0), kh(t, n)
                        })
                    }

                    function l(e) {
                        e.attributes && e.attributes.advanceActions && e.elementPathRule && (e.attributes.advanceActions.elementHover ? t("mouseover", e) : e.attributes.advanceActions.elementClick && t("click", e))
                    }

                    function f(e, t, n, i, r) {
                        var o = io(),
                            i = i || "auto",
                            t = {
                                width: Math.min(t.width, o.width),
                                height: t.height
                            },
                            r = (t.layoutDir = i, t.hbias = vd(e, o, i), t.vbias = yd(e, o, i), t.layoutDir = a(t, o, r, i), s(t, e, o));
                        return t.top = r.top, t.left = r.left, "top" === t.layoutDir ? t.top -= n.height : "bottom" === t.layoutDir ? t.top += n.height : "right" === t.layoutDir ? t.left += n.height : "left" === t.layoutDir && (t.left -= n.height), t
                    }

                    function a(e, t, n, i) {
                        var r, o, a, s, u, d, c;
                        return i && "auto" !== i ? i : (i = n.top, o = (r = n.left) + n.width, a = n.top - e.height < 0, s = n.top + n.height + e.height > t.height, u = n.left - e.width < 0, d = n.left + n.width + e.width > t.width, s && a && u && d ? "bottom" : (i < t.height / 3 && (c = "bottom"), (i > 2 * t.height / 3 || e.hbias === md) && (c = "top"), "top" === (c = r < e.width && t.width - o < e.width ? "bottom" : c) && n.top - e.height < 0 && (c = "bottom"), s && a && (e.hbias !== md && (c = e.hbias), u && d || (d || (c = "right"), u || (c = "left"))), (c = c && "bottom" !== c || !s || a ? c : "top") ? c : e.hbias || "bottom"))
                    }

                    function s(e, t, n) {
                        return "top" === e.layoutDir || "bottom" === e.layoutDir ? i(e, n, t, e.layoutDir, e.hbias) : r(e, n, t, e.vbias)
                    }

                    function i(e, t, n, i, r) {
                        var o = e.height,
                            a = e.width,
                            s = {
                                top: null,
                                left: null
                            };
                        return "bottom" === i ? s.top = n.top + n.height : "top" === i && (s.top = n.top - o), "right" === r ? ((i = n.left + n.width / 2) + e.width > t.width && (i -= i + e.width - t.width), s.left = i) : s.left = "left" === r ? n.left - a + n.width / 2 : n.left + n.width / 2 - a / 2, s
                    }

                    function r(e, t, n, i) {
                        var r = e.height,
                            o = e.width,
                            a = {
                                top: null,
                                left: null
                            };
                        return "right" === e.layoutDir ? a.left = n.left + n.width : "left" === e.layoutDir && (a.left = Math.max(0, n.left - o)), "bottom" === i ? ((o = n.top + n.height / 2) + e.height > t.height && (o -= o + e.height - t.height), a.top = o) : a.top = "top" === i ? n.top - r + n.height / 2 : n.top - r / 2 + n.height / 2, a
                    }

                    function p(e, t, n) {
                        var i = Jv.createElement("div"),
                            e = (i.setAttribute("class", "pendo-tooltip-caret"), i.style.position = "absolute", i.style.zIndex = 11, u(i, t, n), e.find("#pendo-guide-container")[0].parentNode);
                        e.appendChild(i), n.borderWidth && (i = h(i, n, t.layoutDir), e.appendChild(i))
                    }

                    function u(e, t, n) {
                        "top" !== t.layoutDir && "bottom" !== t.layoutDir || o(e, t, n), "left" !== t.layoutDir && "right" !== t.layoutDir || d(e, t, n)
                    }

                    function o(e, t, n) {
                        var i, r = io();
                        return e.style["border-left"] = n.width + "px solid transparent", e.style["border-right"] = n.width + "px solid transparent", e.style.right = "", t.hbias === hd ? (i = t.width - 2 * n.width - n.offset - n.borderWidth, e.style.left = i + "px", t.left += n.offset + n.width + n.borderWidth) : t.hbias === gd ? (e.style.left = n.offset + n.borderWidth + "px", t.left -= n.offset + n.width + n.borderWidth, t.left + t.width > r.width && (t.left = t.left - (t.left + t.width - r.width)), t.left = Math.max(0, t.left)) : e.style.left = t.width / 2 - n.width + "px", "bottom" === t.layoutDir && (e.style["border-bottom"] = n.height + "px solid " + n.backgroundColor, e.style["border-top"] = "", i = -1 * n.height, n.borderWidth && (i += n.borderWidth), e.style.top = i + "px", e.style.bottom = ""), "top" === t.layoutDir && (e.style["border-top"] = n.height + "px solid " + n.backgroundColor, e.style["border-bottom"] = "", r = -1 * n.height, n.borderWidth && (r += n.borderWidth), e.style.bottom = r + "px", e.style.top = ""), e
                    }

                    function d(e, t, n) {
                        var i, r = io();
                        return e.style["border-top"] = n.width + "px solid transparent", e.style["border-bottom"] = n.width + "px solid transparent", e.style.bottom = "", t.vbias === fd ? (i = t.height - 2 * n.width - n.offset - n.borderWidth, e.style.top = i + "px", t.top += n.offset + n.width + n.borderWidth) : t.vbias === pd ? (e.style.top = n.offset + n.borderWidth + "px", t.top -= n.offset + n.width + n.borderWidth, t.top + t.height > r.height && (t.top = t.top - (t.top + t.height - r.height)), t.top = Math.max(0, t.top)) : e.style.top = t.height / 2 - n.width + "px", "left" === t.layoutDir && (e.style["border-left"] = n.height + "px solid " + n.backgroundColor, e.style["border-right"] = "", i = -1 * n.height, n.borderWidth && (i += n.borderWidth), e.style.right = i + "px", e.style.left = ""), "right" === t.layoutDir && (e.style["border-right"] = n.height + "px solid " + n.backgroundColor, e.style["border-left"] = "", r = -1 * n.height, n.borderWidth && (r += n.borderWidth), e.style.left = r + "px", e.style.right = ""), e
                    }

                    function h(e, t, n) {
                        var i = e.cloneNode();
                        return i.setAttribute("class", "pendo-tooltip-caret-border"), i.style.zIndex = 10, g(i, t, n, e), i
                    }

                    function g(e, t, n, i) {
                        for (var r = {
                                top: "",
                                right: "",
                                bottom: "",
                                left: ""
                            }, o = ["Top", "Right", "Bottom", "Left"], a = 0; a < o.length; a++) {
                            var s = "border" + o[a] + "Width",
                                u = "border" + o[a] + "Color",
                                d = "border" + o[a] + "Style";
                            i.style[s] ? (r[s] = parseInt(i.style[s], 10) + t.borderWidth + "px", r[u] = m(i.style[u], t.borderColor), r[d] = "solid") : (r[s] = "", r[u] = "", r[d] = "")
                        }
                        "top" === n && (r.left = parseInt(i.style.left, 10) - t.borderWidth + "px", r.bottom = parseInt(i.style.bottom, 10) - t.borderWidth + "px"), "bottom" === n && (r.left = parseInt(i.style.left, 10) - t.borderWidth + "px", r.top = parseInt(i.style.top, 10) - t.borderWidth + "px"), "right" === n && (r.top = parseInt(i.style.top, 10) - t.borderWidth + "px", r.left = parseInt(i.style.left, 10) - t.borderWidth + "px"), "left" === n && (r.top = parseInt(i.style.top, 10) - t.borderWidth + "px", r.right = parseInt(i.style.right, 10) - t.borderWidth + "px"), U.extend(e.style, r)
                    }

                    function m(e, t) {
                        return "transparent" === e ? e : t
                    }

                    function v(e) {
                        xo(e.element) ? (oc.placeBBTooltip(e), J(e.elements[0]).css({
                            display: "block"
                        })) : J(e.elements[0]).css({
                            display: "none"
                        })
                    }
                }();

            function ac(e) {
                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", n = e.length, i = 0, r = 0, o = "", a = 0; a < n; a++)
                    for (r = r << 8 | e[a], i += 8; 5 <= i;) o += t[r >>> i - 5 & 31], i -= 5;
                return 0 < i && (o += t[r << 5 - i & 31]), o
            }

            function sc(e) {
                var t, n, i = y.getLocalConfig("contentHost");
                return i && e ? (t = new RegExp("(https:)?\\/\\/" + Ee(Qe) + "-\\d+\\.storage\\.googleapis\\.com", "g"), n = new RegExp("(https:)?\\/\\/" + _e(Qe) + "\\.storage\\.googleapis\\.com", "g"), e.replace(t, i).replace(n, i).replace(new RegExp("(https:)?\\/\\/" + cc(tt), "g"), i)) : e
            }

            function uc(e) {
                return y.getLocalConfig("contentHost") ? w.parse(sc(w.stringify(e))) : e
            }

            function dc() {
                var e = cc(y.getHostedConfig("contentHost"));
                if (e) return e + "*"
            }

            function cc(e) {
                if (e) return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }

            function lc(e) {
                return !!(U.isObject(e) && e.hasOwnProperty("type") && e.hasOwnProperty("children") && e.hasOwnProperty("props"))
            }
            var fc = function() {
                    var u = {},
                        d = U.compose(function(e) {
                            var t = dc();
                            return t && !new RegExp(t).test(e) && c(new Error("Failed to verify URL: " + e + " vs " + t), "cname contentHost verification"), e
                        }, sc);
                    return {
                        load: function(e) {
                            try {
                                var t = u[e.id];
                                if (t && t.language !== e.language && delete u[e.id], !u[e.id]) {
                                    var n, i = [],
                                        r = {
                                            deferred: {},
                                            language: e.language
                                        },
                                        o = !1;
                                    if (u[e.id] = r, ad.usesXhr() && e.domUrl ? (r.deferred.domJson = z.defer(), Ii.get(d(e.domUrl)).then(function(e) {
                                            r.domJson = uc(e.data), lc(e.data) ? r.deferred.domJson.resolve() : (c(new Error("Response from the guide was not in proper JSON format")), r.deferred.domJson.reject())
                                        }), i.push(r.deferred.domJson.promise), o = !0) : e.domJsonpUrl && (r.deferred.domJson = z.defer(), n = Fo(d(e.domJsonpUrl), function() {
                                            J.removeNode(n)
                                        }), i.push(r.deferred.domJson.promise), o = !0), e.contentUrlJs && !y.get("preventCodeInjection")) {
                                        r.deferred.content = z.defer();
                                        var a = Fo(d(function(e) {
                                            if (_t()) {
                                                var t = e.replace(/^https?:\/\/[^/]+\/guide-content\//, "").split("/"),
                                                    n = t[0],
                                                    n = $A.get("$Resource.pendoGuide" + ac(Ct(n)));
                                                if (U.isString(n)) return n + "/" + t.join("/")
                                            }
                                            return e
                                        }(e.contentUrlJs)), function() {
                                            J.removeNode(a)
                                        });
                                        i.push(r.deferred.content.promise), e.contentUrlCss && (r.deferred.css = z.defer(), Fo({
                                            url: d(e.contentUrlCss),
                                            type: "text/css"
                                        }, function() {
                                            r.deferred.css.resolve()
                                        }), i.push(r.deferred.css.promise))
                                    } else if (e.contentUrl && !y.get("preventCodeInjection")) {
                                        r.deferred.content = z.defer();
                                        var s = Fo(function(e, t) {
                                            if (!U.isString(e)) return e;
                                            var n = U.indexOf(e, "?");
                                            return n < 0 ? e + t : e.substring(0, n) + t + e.substring(n)
                                        }(d(e.contentUrl), ".js"), function() {
                                            J.removeNode(s)
                                        });
                                        i.push(r.deferred.content.promise)
                                    } else if (!o) return z.reject();
                                    r.deferred.promise = z.all(i).then(function() {
                                        return U.omit(r, "deferred")
                                    })
                                }
                                return u[e.id].deferred.promise
                            } catch (Ce) {
                                throw S.resourceFetchFail.trigger(e, Ce), Ce
                            }
                        },
                        reset: function() {
                            u = {}
                        },
                        guideContent: function(e, t, n, i, r) {
                            var o;
                            U.isString(n) && (U.isFunction(i) || (i = /<%/.test(o = n) && /%>/.test(o) ? U.template(n) : U.constant(n)), (o = u[e + t]) && o.deferred.content && (o.content = n, o.template = i, o.script = r, o.deferred.content.resolve()))
                        },
                        receiveDomStructureJson: function(e, t, n) {
                            (e = u[e + t]) && e.deferred.domJson && (e.domJson = uc(n), e.deferred.domJson.resolve())
                        }
                    }
                }(),
                pc = function() {
                    function u(n) {
                        var i = this,
                            t = 1;
                        return (i.contentUrl || i.domJsonpUrl) && (U.extend(i, {
                            fetchContent: function() {
                                return u.fetchContent(i)
                            }
                        }), i.after("render", function(e) {
                            ! function(e) {
                                var t = U.indexOf(n.steps, i);
                                U.chain(n.steps).rest(t + 1).first(e).each(function(e) {
                                    e.fetchContent()
                                }).value()
                            }(t)
                        })), i
                    }
                    return u.state = {}, u.reset = function() {
                        fc.reset(), u.state = {}
                    }, u.fetchContent = function(t) {
                        a = (a = (e = t).getGuide()) && a.language ? a.language : "default";
                        var e = e.id + "." + a;
                        if (!(o = u.state[e])) {
                            var n, i, r, o = {},
                                a = t.getGuide();
                            if (a.control) return;
                            a && a.language && (n = a.language) !== a.authoredLanguage && (i = D(a, "translationStates." + n + ".stepTranslations." + t.id + ".domHash"), r = D(a, "translationStates." + n + ".stepTranslations." + t.id + ".domJsonpHash"));
                            var a = t.guideId + t.id,
                                s = U.extend({
                                    id: a,
                                    language: n,
                                    domHash: i,
                                    domJsonpHash: r
                                }, U.pick(t, "contentUrl", "contentUrlCss", "contentUrlJs", "domJsonpUrl", "domUrl"));
                            o.promise = ud.verify(s).then(function() {
                                return o.verified = !0, fc.load(s)
                            }).then(function(e) {
                                return o.loaded = !0, e
                            }), u.state[e] = o
                        }
                        return o.promise.then(function(e) {
                            U.extend(t, e)
                        })
                    }, u.hasContent = function(e) {
                        return I(e.content) || I(e.domJson)
                    }, u
                }(),
                hc = 1e4,
                gc = "lastStepAdvanced";

            function mc(e) {
                W.dispatch("guideState/updateLastGuideStepSeen", e), W.dispatch("guideState/write"), W.dispatch("frames/changeLastGuideStepSeen", e)
            }

            function vc() {
                W.dispatch("guideState/init"), q(Wv, "focus", yc), b.addEventListener && Wv.addEventListener("storage", function(e) {
                    W.dispatch("guideState/storageChanged", e)
                })
            }

            function yc() {
                W.dispatch("guideState/regainFocus")
            }

            function bc() {
                return W.state.guideState.lastGuideStepSeen
            }
            var wc = {
                    actions: {
                        init: function(e) {
                            e.commit("setScopedStorageKey", Vt(e.state.storageKey)), S.identify.on(function(e) {
                                $n(e) && Gn([gc])
                            })
                        },
                        load: function(t, e) {
                            if (e) {
                                var n;
                                try {
                                    n = w.parse(e)
                                } catch (Ce) {}
                                n && U.each([].concat(n), function(e) {
                                    t.commit("setStepState", e)
                                })
                            }
                        },
                        forceExpire: function(n) {
                            U.each(n.state.steps, function(e, t) {
                                n.commit("expireStepState", t)
                            })
                        },
                        expire: function(n) {
                            var i = n.getters.now();
                            U.each(n.state.steps, function(e, t) {
                                i - e.time > n.state.ttl && n.commit("expireStepState", t)
                            })
                        },
                        apply: function(o) {
                            var a, s = U.indexBy(o.getters.guideList(), "id");
                            o.dispatch("expire"), U.each(o.state.steps, function(e) {
                                var t, n, i = e.guideId,
                                    r = e.guideStepId;
                                e.visitorId && e.visitorId !== o.getters.visitorId() || ((!a || e.time > a.time) && (a = e), (i = s[i]) && ((t = U.first(i.steps)) && e.seenReason && (t.seenReason = e.seenReason), (t = U.findWhere(i.steps, {
                                    id: r
                                })) && (n = o.state.storageKey, t.seenState != e.state && (H("making sure that seenState = '" + e.state + "' for " + n + ": " + r), t.seenState = e.state), t.snoozeEndTime != e.snoozeEndTime && (H("making sure that snoozeEndTime = '" + e.snoozeEndTime + "' for " + n + ": " + r), t.snoozeEndTime = e.snoozeEndTime), e.dismissCount !== qv && t.dismissCount != e.dismissCount && (t.dismissCount === qv ? t.dismissCount = e.dismissCount : t.dismissCount = Math.max(e.dismissCount, t.dismissCount), H("making sure that dismissCount = '" + t.dismissCount + "' for " + n + ": " + r)), e = U.indexOf(i.steps, t), U.each(i.steps.slice(0, e), function(e) {
                                    U.contains(["advanced", "dismissed"], e.seenState) || (e.seenState = "advanced")
                                }))))
                            }), a && o.dispatch("updateLastGuideStepSeen", U.extend({}, o.state.lastGuideStepSeen, a))
                        },
                        receiveLastGuideStepSeen: function(e, t) {
                            e.commit("setReceivedLastGuideStepSeen", t), e.commit("setLastGuideStepSeen", t)
                        },
                        updateLastGuideStepSeen: function(e, t) {
                            t.visitorId && t.visitorId !== e.getters.visitorId() || (t.guideStepId && e.commit("setStepState", t), e.commit("setLastGuideStepSeen", t), G.lastGuideStepSeen = t)
                        },
                        write: function(e) {
                            e.dispatch("expire");
                            var t = e.rootState.frames.tabId,
                                n = e.state.storageKey,
                                i = e.state.ttl,
                                r = e.getters.storage(),
                                o = w.stringify(U.map(e.state.steps, function(e) {
                                    return U.extend({
                                        tabId: t
                                    }, e)
                                }));
                            H("writing " + o + " to a cookie named " + n + " for " + i), r.write(n, o, i), e.dispatch("preview/update", e.state.lastGuideStepSeen, {
                                root: !0
                            })
                        },
                        storageChanged: function(e, t) {
                            if (t.key === e.state.scopedStorageKey) {
                                try {
                                    var n = e.getters.storage().read(e.state.storageKey),
                                        i = [].concat(w.parse(n))
                                } catch (Ce) {}
                                e.getters.storageChangedInOtherTab()(i) && (Xf(), e.dispatch("load", n), e.dispatch("apply"), e.state.receivedStateChangeAt || e.commit("setReceivedStateChange", e.getters.now()))
                            }
                        },
                        regainFocus: function(e) {
                            var t = e.getters.tabLostFocus(),
                                n = e.getters.isGuideRequestStale();
                            t && (e.commit("setReceivedStateChange", null), n || (Qf(), ap())), n && $g()
                        }
                    },
                    mutations: {
                        expireStepState: function(e, t) {
                            e.expired[t] = e.steps[t], delete e.steps[t]
                        },
                        setStepState: function(e, t) {
                            e.steps[t.guideStepId] = t
                        },
                        setScopedStorageKey: function(e, t) {
                            e.scopedStorageKey = t
                        },
                        setLastGuideStepSeen: function(e, t) {
                            e.lastGuideStepSeen = t
                        },
                        setReceivedLastGuideStepSeen: function(e, t) {
                            e.receivedLastGuideStepSeen = t
                        },
                        setReceivedStateChange: function(e, t) {
                            e.receivedStateChangeAt = t
                        },
                        setLastGuideRequestAt: function(e, t) {
                            e.lastGuideRequestAt = t
                        }
                    },
                    state: {
                        steps: {},
                        expired: {},
                        ttl: hc,
                        storageKey: gc,
                        guideRequestExpiration: 36e5,
                        scopedStorageKey: null,
                        receivedStateChangeAt: null,
                        receivedLastGuideStepSeen: null,
                        lastGuideStepSeen: null,
                        lastGuideRequestAt: null
                    },
                    getters: {
                        now: function() {
                            return v()
                        },
                        storage: function() {
                            return d
                        },
                        guideList: function() {
                            return g()
                        },
                        tabLostFocus: function(e) {
                            return !!e.receivedStateChangeAt
                        },
                        isGuideRequestStale: function(e, t) {
                            return null != e.lastGuideRequestAt && t.now() - e.lastGuideRequestAt > e.guideRequestExpiration
                        },
                        storageChangedInOtherTab: function(n, e, i) {
                            return function(e) {
                                var t = D(i, "frames.tabId");
                                return !!e && (!!((e = U.max(U.compact(e), "time")) && e.tabId && t && e.tabId !== t) && (!n.lastGuideStepSeen || !n.lastGuideStepSeen.time || e.time > n.lastGuideStepSeen.time))
                            }
                        },
                        visitorId: function() {
                            return j()
                        }
                    }
                },
                Ic = function() {
                    var a = et,
                        n = "in-app-designer",
                        i = "latest";

                    function e(e) {
                        if (!e.ignoreLocalStorageNavigation) {
                            var t, e = _n.getItem("pendo-navigation-state");
                            if (e && W.getters["frames/isLeader"]()) {
                                try {
                                    t = w.parse(e)
                                } catch (n) {
                                    return
                                }
                                var e = !0;
                                if (e = t.agentInstallType ? t.agentInstallType === xe() : e) return e = t.isDADesigner ? "da-designer" : "in-app-designer", e = {
                                    target: t.baseUrl,
                                    preloader: !0,
                                    host: t.host,
                                    gcsBucket: t.gcsBucket || e,
                                    DADesigner: t.isDADesigner
                                }, Ic.launchInAppDesigner(e), !0
                            }
                        }
                    }
                    return "local" === nt && (a = "https://local.pendo.io:8080"), S.leaderChanged.on(function() {
                        e({
                            ignoreLocalStorageNavigation: /pendo-/.test(Wv.name) || Lc()
                        })
                    }), {
                        launchDesigner: function(e) {
                            0;
                            var t, n = "latest",
                                i = "designer";
                            p("designer-styles", "@keyframes pendoExtensionSlideIn{from{transform:translate3d(-300px,0,0)}to{transform:translate3d(0,0,0);}}#pendo-draggable-handle{z-index:11;line-height: 15px;text-align:center;font-size:20px;letter-spacing:1.5px;position:absolute;width:100%;height:65px;font-size:16px;background-color:transparent;color:#ABE7DB;user-select:none;cursor: move;cursor: grab;cursor: -moz-grab;cursor: -webkit-grab;}#pendo-draggable-handle:active{cursor: grabbing;cursor: -moz-grabbing;cursor: -webkit-grabbing !important;}#pendo-draggable-handle.hidden{display:none;}#pendo-draggable-handle:hover{color:#2EA2A0;}#pendo-designer-container{animation-duration:375ms;animation-name:pendoExtensionSlideIn;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1); box-shadow: 0px 2px 10px rgba(0,0,0,0.15);height:100vh;width:400px;position:fixed;top:0;left:0;overflow:hidden;border-radius:3px;z-index:1000000;}#pendo-mousemove-cover{position:absolute;height:100%;width:100%;top:0;left:0;z-index:9999999999;display:none;}#pendo-designer-container.fullscreen{width:100%;opacity:0.98;}#pendo-designer-container.closed{left:-400px;}#pendo-designer-iframe{background:#3a3c45;border:0px;height:100%;left:0;z-index:10;top:0;width:100%;}"), h("designer-shims", a + "/" + i + "/" + n + "/plugin.js"), G.DESIGNER_VERSION ? l(n, i) : t = Wv.setInterval(function() {
                                G.DESIGNER_VERSION && (l(n, i), clearInterval(t))
                            }, 100)
                        },
                        launchInAppDesigner: c,
                        localStorageNavigation: e,
                        launchOnToken: function(e) {
                            if (!g(Wv.name)) {
                                var t = /pendo-designer=([A-Za-z0-9-]+)/;
                                if (t.test(e)) {
                                    var e = t.exec(e);
                                    if (e) return t = function(e) {
                                        try {
                                            return w.parse(atob(Ft(e))) || {}
                                        } catch (Ce) {
                                            return {}
                                        }
                                    }(e[1]), e = s(t), t = d(t), Wv.localStorage.removeItem("pendo-navigation-state"), Wv.localStorage.removeItem("pendo-designer-mode"), c({
                                        target: t,
                                        host: e,
                                        preloader: !1
                                    }), !0
                                }
                            }
                        },
                        sendMessageToLocalStorage: function(e) {
                            var t = Jv.getElementById("pendo-designer-communication-iframe");
                            t && t.contentWindow.postMessage(e.data, Ic.hostConfig.host)
                        },
                        isValidDesignerHost: r,
                        isValidTarget: o,
                        addCommunicationIframe: function(e, t) {
                            e = e || {};
                            U.isFunction(t) || (t = U.noop);
                            var n = d(e),
                                e = u(e),
                                i = (new Date).getTime(),
                                r = (Ic.windowCommunicationId = i, "pendo-designer-communication-iframe");
                            if (Jv.getElementById(r)) return t(), Jv.getElementById(r);
                            var o = "pendo-designer-communication-embedded";
                            o += "__" + i;
                            i = f(r, a + "/" + e + "/" + n + "/communication.html", "border-width:0;height:0;width:0;");
                            return i.setAttribute("name", o), i.onload = t, Jv.body.appendChild(i), i
                        },
                        addStylesToPage: p,
                        hostConfig: {
                            host: a
                        },
                        isDesignerFrame: g
                    };

                    function r(e) {
                        return !!e && Ro(e)
                    }

                    function s(e) {
                        var e = (e = e || {}).host || a,
                            t = r(e),
                            e = t ? e : et;
                        return t || H("Invalid host, falling back to " + et), e
                    }

                    function u(e) {
                        var e = (e = e || {}).gcsBucket || n,
                            t = "in-app-designer" === (t = e) || "da-designer" === t || "adopt-studio" === t,
                            e = t ? e : n;
                        return t || H("Invalid bucket, falling back to " + n), e
                    }

                    function o(e) {
                        return "latest" === e || "beta" === e || "via" === e || "mobile" === e || new RegExp("^[0-9]+.[0-9]+.[0-9]+(-[a-z0-9-]+[a-z0-9]+)?$").test(e)
                    }

                    function d(e) {
                        var e = (e = e || {}).target || e.baseFolder || i,
                            t = o(e),
                            e = t ? e : i;
                        return t || H("Invalid target, falling back to " + i), e
                    }

                    function c(e) {
                        if (!g(Wv.name) && !G.designerLaunched) {
                            var t, n, i, r, o = !1;
                            try {
                                o = !!Wv.top.pendo
                            } catch (a) {}
                            Ic.crossFrameChannel === qv && (Ic.crossFrameChannel = E, Ic.useCrossFrameChannel = !0), ra() && o && !e.allowChildFrame && !e.selectionOnly ? H("skipping designer launch from a child frame. pass `allowChildFrame: true` to override") : G.isReady() ? (G.designerLaunchTime = (new Date).getTime(), o = s(e = e || {}), i = u(e), r = d(e), n = e.preloader ? "preloader.js" : "plugin.js", t = e.preloader ? "preloader-shims" : "designer-shims", n = o + "/" + i + "/" + r + "/" + n, Ic.hostConfig = {
                                gcsBucket: i,
                                baseFolder: r,
                                uniqueWindowId: e.uniqueWindowId,
                                host: o,
                                adoptv2: e.adoptv2,
                                DADesigner: e.DADesigner,
                                agentInstallType: xe()
                            }, i = {}, e.selectionOnly && (i["selection-only"] = !0), r = y.get("designerAgentPluginsLoader"), (U.isFunction(r) ? r : h)(t, n, i), G.designerLaunched = !0) : pn("Unable to launch the designer, the agent has not been initialized. Please use `pendo.initialize` prior to launching the designer")
                        }
                    }

                    function l(e, t) {
                        Wv.postMessage({
                            type: "connect",
                            source: "pendo-designer-content-script",
                            destination: "pendo-designer-agent"
                        }, location.origin);
                        var n;
                        Jv.getElementById("pendo-designer-container") || (n = "pendo-designer-embedded", n += "__" + Ic.windowCommunicationId, (t = f("pendo-designer-iframe", a + "/" + t + "/" + e + "/designer.html")).setAttribute("name", n), e = function(e) {
                            var t = Jv.createElement("div");
                            return t.setAttribute("id", "pendo-designer-container"), t.appendChild(e), t
                        }(t), Jv.body.appendChild(e))
                    }

                    function f(e, t, n) {
                        var i = Jv.createElement("iframe");
                        return i.setAttribute("id", e), n && eo(i, n), i.setAttribute("sandbox", "allow-scripts allow-same-origin allow-top-navigation allow-forms allow-pointer-lock allow-popups"), i.src = t, i
                    }

                    function p(e, t) {
                        var n;
                        Jv.getElementById(e) || ((n = Jv.createElement("style")).setAttribute("id", e), n.type = "text/css", e = Jv.createTextNode(t), n.appendChild(e), Jv.getElementsByTagName("head")[0].appendChild(n))
                    }

                    function h(e, t, n) {
                        var i;
                        Jv.getElementById(e) || ((i = Jv.createElement("script")).setAttribute("charset", "utf-8"), i.setAttribute("id", e), i.src = t, n && U.forEach(n, function(e, t) {
                            i.setAttribute(t, e)
                        }), Jv.body.appendChild(i))
                    }

                    function g(e) {
                        try {
                            var t = w.parse(e);
                            return /^pendo-/.test(t.frameName) || /^pendo-/.test(t.frame)
                        } catch (Ce) {
                            return !1
                        }
                    }
                }(),
                Sc = "pendo-preview",
                xc = "current-guide-preview";

            function Cc(e) {
                return W.dispatch("preview/load"), Ec(e)
            }

            function Ec(e) {
                var t = Zc();
                if (t) return Tc(e), W.dispatch("preview/start", U.extend(t, {
                    apiKey: G.apiKey
                })), d.clear(gc), zt(!1), ca.lock(), vg(Qc), S.startPreview.trigger(), S.leaderChanged.on(function() {
                    W.dispatch("preview/write")
                }), Ep(_c), !0
            }

            function _c() {
                return jc(Jv, g(), bc()), !0
            }

            function Tc(e) {
                if (ra()) {
                    if (!W.getters["frames/leaderExists"]()) return void S.one("leaderChanged", U.partial(Tc, e));
                    if (W.getters["frames/isFollower"]()) return
                }
                if (Jv.getElementById(Sc)) return !0;
                U.isFunction(e.addEventListener) && e.addEventListener("message", kc), po().appendChild(Pc())
            }

            function Ac(e, t, n) {
                bh(), W.commit("healthCheck/resetStepStatus", null, {
                    root: !0
                }), pc.reset(), $g();
                var i = e[0],
                    i = (i && U.each(i.steps, function(e) {
                        e.seenState = null
                    }), d.clear(gc), Mc(null), Zc());
                return i && (i = U.findWhere(e, {
                    id: i.guideId
                })) && (i = {
                    stepId: i.steps[0].id
                }, n && (i.language = n), W.dispatch("preview/restart", i)), Hc(e, t)
            }

            function Rc(e) {
                var t = Jv.getElementById(Sc);
                t && (t.style.height = e)
            }

            function kc(e) {
                var t, n;
                e.origin === location.origin && (t = e.data.type, n = !!e.data.preventWindowClose, t === Sc + "::exit" ? (qc({
                    preventWindowClose: n
                }), W.dispatch("frames/stopPreview", {
                    preventWindowClose: n
                })) : t === Sc + "::restart" ? (n = Ac(g(), bc(), e.data.language), W.dispatch("guideState/forceExpire"), W.dispatch("guideState/updateLastGuideStepSeen", n), W.dispatch("frames/restartPreview")) : t === Sc + "::resize" ? Rc(e.data.height) : t === Sc + "::request-preview-mode-type" && (n = Jv.getElementById(Sc), e = $c(), n && e && n.contentWindow.postMessage({
                    mutation: "preview/setPreviewModeType",
                    payload: {
                        previewModeType: e.previewModeType || "NEW_TAB"
                    }
                }, location.origin)))
            }

            function Oc() {
                return W.getters["preview/isInPreviewMode"]()
            }

            function Nc() {
                var e = $c();
                return e ? Lc() ? [e.guide] : void 0 : []
            }

            function Lc() {
                return W.getters["preview/isInDesignerPreviewMode"]()
            }

            function Mc(e) {
                W.dispatch("preview/update", e)
            }

            function Fc(e) {
                e = Zc(e);
                e && e.state
            }

            function Pc() {
                var t = Jv.createElement("iframe");
                t.id = Sc, t.src = "about:blank";
                return no(t, {
                    border: "none",
                    display: "block !important",
                    height: "70px",
                    "min-height": "70px",
                    left: 0,
                    position: "fixed",
                    right: 0,
                    top: 0,
                    visibility: "visible !important",
                    width: "100%",
                    "z-index": 4e5
                }), t.onload = function() {
                    var e = Jv.createElement("script");
                    e.src = sh(), t.contentDocument.body.appendChild(e)
                }, t
            }

            function Bc(e) {
                var t = Zc();
                return t ? (t.isResourceCenter ? Gc : Uc)(e, t) : e
            }

            function Gc(e, t) {
                var n = $.findResourceCenterHomeView(e),
                    e = U.filter(e, function(e) {
                        return e.id !== n.id
                    }),
                    t = (Dc(n, t.stepId), U.map(e, function(e) {
                        return e.launchMethod = "launcher", e
                    }));
                return [n].concat(t)
            }

            function Uc(e, t) {
                e = U.find(e, function(e) {
                    return e.id === t.guideId
                });
                return "launcher" === e.launchMethod && (e.launchMethod = "auto-launcher"), "api" === e.launchMethod && (e.launchMethod = "auto"), Dc(e, t.stepId), [e]
            }

            function Dc(e, t) {
                for (var n = U.find(e.steps, function(e) {
                        return e.id === t
                    }), i = n ? e.steps.indexOf(n) : 0, r = 0; r < e.steps.length; r++) r < i ? (e.steps[r].seenState = "advanced", e.steps[r].seenReason = "continue") : (e.steps[r].seenState = null, e.steps[r].seenReason = null)
            }

            function Hc(e, t) {
                null == t && (t = {});
                var n, i = Zc();
                return i && (e = U.findWhere(e, {
                    id: i.guideId
                })) ? i.state || (n = -1 < e.launchMethod.indexOf("auto"), i.stepId === e.steps[0].id && !n ? {} : {
                    guideId: i.guideId,
                    guideStepId: i.stepId,
                    state: "active"
                }) : t
            }

            function zc(e, t) {
                e = e.getElementById(Sc);
                e && e.contentWindow.postMessage({
                    mutation: "preview/setGuideLoadError",
                    payload: {
                        guideLoadError: t
                    }
                }, location.origin)
            }

            function jc(e, t, n) {
                var i, r, o, a, s, u, d;
                Oc() && (i = Zc()) && (r = e.getElementById(Sc)) && r.contentWindow && (t && t.length ? (r.contentWindow.postMessage({
                    mutation: "preview/setGuideLoaded",
                    payload: {
                        guideLoaded: !0
                    }
                }, location.origin), o = U.find(t, function(e) {
                    return e.id === i.guideId
                }), a = 0, s = o.steps.length, u = n || {}, U.find(o.steps, function(e, t) {
                    return u.guideStepId === e.id && ("dismissed" === u.state || "active" === u.state ? a = t : "advanced" === u.state && u.destinationStepId ? a = U.indexOf(o.steps, U.find(o.steps, function(e) {
                        return e.id === u.destinationStepId
                    })) : "advanced" === u.state && t === s - 1 && (a = s), !0)
                }), t = "dismissed" === u.state, n = s - 1 <= a, t = t || n, n = n ? s - 1 : a, d = o.steps[n], r.contentWindow.postMessage({
                    mutation: "preview/setHostname",
                    payload: {
                        hostname: et
                    }
                }, location.origin), r.contentWindow.postMessage({
                    mutation: "preview/setGuidePages",
                    payload: {
                        guidePages: o.previewPages
                    }
                }, location.origin), r.contentWindow.postMessage({
                    mutation: "preview/setGuideProgress",
                    payload: {
                        guideName: o.name,
                        guideAttributes: w.stringify(o.attributes),
                        guideLaunchMethod: o.launchMethod,
                        guideActivationSelector: Hu(o),
                        isAdoptGuide: o.isTraining,
                        isResourceCenter: i.isResourceCenter,
                        stepId: d && d.id,
                        currentStepIndex: n,
                        stepCount: s,
                        elementPathRule: d.elementPathRule,
                        elementContainsRulesList: d.elementContainsRulesList,
                        pageId: d.pageId,
                        completed: t,
                        languageOptions: D(i, "languageOptions", []),
                        currentLanguage: i.language
                    }
                }, location.origin), Jc(d, n, r)) : zc(e, {
                    status: 404,
                    data: "Guide not found"
                }))
            }

            function Wc(e) {
                var t, n, e = e.getElementById(Sc);
                e && (t = U.first(J('#pendo-resource-center-container, [id^="pendo-g-"]'))) && (t = K(t)) && (n = {
                    mutation: "preview/setIsPreviewBarTop",
                    payload: {
                        isPreviewBarTop: !1
                    }
                }, "0px" === t.top ? (e.style.top = "auto", e.style.bottom = "0px", e.contentWindow.postMessage(n, location.origin)) : "0px" !== t.bottom && e.style.top || (e.style.top = "0px", e.style.bottom = "auto", n.payload.isPreviewBarTop = !0, e.contentWindow.postMessage(n, location.origin)))
            }

            function Jc(e, t, n) {
                var i;
                e && (i = [], 0 === t && (t = Hu(e.getGuide())) && ((t = U.first(J(t))) ? xo(t) || i.push("ACTIVATION:elementNotVisible") : i.push("ACTIVATION:elementNotFound")), U.isFunction(e.canShowOnPage) && !e.canShowOnPage(og()) && i.push("PAGE:pageMismatch"), e.elementPathRule && ((t = U.first(J(e.elementPathRule))) ? xo(t) ? e.elementContainsRulesList && !Ph(t, e.elementContainsRulesList) && i.push("ELEMENT:elementContainsRulesDoNotMatch") : i.push("ELEMENT:elementNotVisible") : i.push("ELEMENT:elementNotFound")), n.contentWindow.postMessage({
                    mutation: "preview/setErrors",
                    payload: {
                        errors: i
                    }
                }, location.origin))
            }

            function qc(e) {
                var t = $c(),
                    n = !1,
                    i = (t && (n = "SAME_TAB" === t.previewModeType), _n.getItem("pendo-navigation-state"));
                if (W.dispatch("preview/exit"), ca.unlock(), J("#" + Sc).remove(), yg(), $g(), _p(_c), zt(!0), n && i) {
                    _n.setItem(xc, w.stringify(U.extend(t, {
                        isExitBackToDesigner: !0
                    })));
                    try {
                        var r = w.parse(i),
                            o = {
                                target: r.baseUrl,
                                gcsBucket: r.gcsBucket,
                                preloader: !0,
                                DADesigner: r.isDADesigner,
                                host: r.host
                            };
                        Ic.launchInAppDesigner(o)
                    } catch (a) {
                        W.dispatch("preview/exitDesignerPreview")
                    }
                } else e && !e.preventWindowClose && Wv.close()
            }

            function Kc(e, t) {
                e = D(e(), t);
                if (e) return w.parse(w.stringify(e))
            }

            function Vc() {
                return W
            }
            var Zc = U.partial(Kc, Vc, "state.preview.preview"),
                $c = U.partial(Kc, Vc, "state.preview.designerPreview");

            function Yc(e) {
                var t;
                if (e.subscriptionId && e.guideId) return t = e.isResourceCenter ? "/resourcecenter/" : "/guide/", "/api/s/" + Pt(e.subscriptionId) + t + Pt(e.guideId) + "/preview"
            }
            var Xc = function(e) {
                    var t;
                    return Ro(e.origin) ? (t = Yc(e)) ? (t = {
                        url: e.origin + t + "?url=" + Pt(f.get()),
                        withCredentials: !0
                    }, e.headers && (t.headers = e.headers), Ii(t).then(function(e) {
                        return e.data.guide
                    })) : (H("Invalid guide url, exiting preview"), z.reject("invalid guide url")) : (H("Invalid origin, exiting preview"), z.reject("invalid origin"))
                },
                Qc = {
                    load: function(e, t) {
                        return tl(e, t)
                    },
                    post: function(e, t, n) {
                        return tl(e, n)
                    },
                    endpoint: function() {
                        return ""
                    },
                    usesXhr: function() {
                        return !1
                    }
                };

            function el(n, t) {
                var e, i;
                return Ro(n.origin) ? (e = Yc(n)) ? Lc() ? (G.guidesPayload({
                    id: t,
                    lastGuideStepSeen: Hc(G.guides, G.lastGuideStepSeen),
                    guides: Nc()
                }), z.resolve()) : (e = {
                    url: n.origin + e + "?url=" + Pt(f.get()),
                    withCredentials: !0
                }, n.headers && (e.headers = n.headers), i = [], Ii(e).then(function(e) {
                    e = e.data;
                    return Lc() || (i = n.isResourceCenter ? e.guide : (e.guide.previewPages = e.pages, [e.guide])), n.language && n.language !== D(i, "[0].authoredLanguage") && nl(i, n.language.value), n.watermarkConfig && (e.guide.isTraining = !0), G.guideWidget = {
                        enabled: !1,
                        data: {
                            guideCssUrl: e.guideCssUrl
                        }
                    }, G.guideCssUrl = e.guideCssUrl, G.normalizedUrl = e.normalizedUrl, G.throttling = qv, e.guide
                }).then(function(e) {
                    var t;
                    return n.watermarkConfig ? (t = w.parse(w.stringify(n)), t = Object.assign(t, n.watermarkConfig), Xc(t)) : e
                }).then(function(e) {
                    e.attributes && e.attributes.isWatermark && i.push(e), Lc() || G.guidesPayload({
                        id: t,
                        lastGuideStepSeen: Hc(i, G.lastGuideStepSeen),
                        guides: Bc(i)
                    })
                })["catch"](function(e) {
                    return zc(Jv, e), z.reject(e)
                })) : (H("Invalid guide url, exiting preview"), z.reject("invalid guide url")) : (H("Invalid origin, exiting preview"), z.reject("invalid origin"))
            }

            function tl(e, t) {
                var n = Zc();
                return !n || !Yc(n) || !(e = /[?&]id=(\d+)/.exec(e)) || e.length < 1 ? z.reject() : el(n, e[1]).then(t)
            }

            function nl(e, o) {
                U.forEach(e, function(r) {
                    U.forEach(r.steps, function(e) {
                        var t = D(r, "translationStates." + o + ".stepTranslations." + e.id + ".domHash"),
                            n = D(r, "translationStates." + o + ".stepTranslations." + e.id + ".domJsonpHash"),
                            i = D(r, "translationStates." + o + ".stepTranslations." + e.id + ".translationHash");
                        t && n && i && (e.domUrl = e.domUrl.replace(".dom.json", "-" + t + "-" + o + ".dom.json"), e.domJsonpUrl = e.domJsonpUrl.replace(".dom.jsonp", "-" + n + "-" + o + ".dom.jsonp"), e.buildingBlocksUrl = e.buildingBlocksUrl.replace(".buildingBlocks.json", "-" + i + "-" + o + ".buildingBlocks.json"))
                    })
                })
            }
            var il = function() {
                var e = S.runtime;

                function a(e, t, n) {
                    return U.filter(e, function(e) {
                        if (U.isFunction(e.script)) {
                            if (U.isFunction(e.test)) try {
                                return e.test(t, n)
                            } catch (Ce) {
                                return c(Ce, "Error in global script test code block"), !1
                            }
                            return U.isRegExp(e.regex) ? e.regex.test(n.name) || e.regex.test(t.name) : !0
                        }
                    })
                }
                var i = kn.call({}),
                    n = {
                        beforeUnmount: "trigger",
                        beforeUpdate: "trigger",
                        unmounted: "trigger",
                        updated: "trigger",
                        advanced: "trigger",
                        dismissed: "trigger",
                        snoozed: "trigger",
                        hidden: "trigger",
                        beforeAdvance: "triggerCancelable",
                        beforePrevious: "triggerCancelable",
                        beforeDismiss: "triggerCancelable",
                        beforeSnooze: "triggerCancelable"
                    };

                function t(n, e) {
                    this.step = n, U.each(["read", "write", "clear"], function(t) {
                        this[t] = d[t], this[t + "ByGuide"] = function() {
                            var e = U.first(arguments) + ":" + D(n, "guide.id");
                            return d[t].apply(this, [e].concat(U.rest(arguments)))
                        }
                    }, this);
                    var t = U.bind(function() {
                        this.purge()
                    }, this);
                    this.purge = U.partial(i.off, "afterUnmounted", t), i.on("afterUnmounted", t)
                }
                return e.on(function(e) {
                    var t = e.data[0],
                        t = (e.step = t, delete e.data, -1 < ["beforeUnmount", "unmounted"].indexOf(e.type) && (t = "active" === (t = t).seenState ? "hidden" : t.seenState, e.reason = t, "unmounted" === e.type && i.trigger(t, e)), n[e.type]);
                    return i[t](e.type, e), "unmounted" === e.type && i.trigger("afterUnmounted"), "triggerCancelable" !== t && e.cancel && delete e.cancel, e
                }), t.prototype.on = function(e, t) {
                    n[e] ? (t = Yn(t), i.on(e, t), this.purge = U.compose(this.purge, U.partial(i.off, e, t))) : H("GUIDE-RUNTIME: Warning! Unregisterable event type " + e)
                }, {
                    getContext: function(e) {
                        return new t(e)
                    },
                    runCustomScripts: function(n, i) {
                        var e, t, r, o;
                        U.each((e = n, t = i, r = [], U.isFunction(e.script) && r.push(e.script), (o = y.get("guides.globalScripts")) && (o = a(o, e, t), U.each(o, function(e) {
                            r.push(e.script)
                        })), r), function(e) {
                            try {
                                e.call(il.getContext(n), n, i)
                            } catch (t) {
                                c(t, "Exception thrown running code block for: " + w.stringify({
                                    guideId: i.id,
                                    stepId: n.id
                                }))
                            }
                        })
                    }
                }
            }();

            function rl() {
                var s = {};
                return U.each(["after", "before"], function(i) {
                    this[i] = function(e, t) {
                        var n, r, o, a;
                        this[e] && ((n = s[e]) || (n = s[e] = {
                            before: [],
                            after: []
                        }, this[e] = (r = this[e], o = n.before, a = n.after, function() {
                            for (var e = U.toArray(arguments), t = 0, n = o.length; t < n; ++t)
                                if (!1 === o[t].apply(this, e)) return;
                            var i = r.apply(this, e);
                            for (t = 0, n = a.length; t < n && !1 !== a[t].apply(this, e); ++t);
                            return i
                        })), n[i].push(t))
                    }
                }, this), this
            }

            function ol() {
                return U.isFunction(this.isAnnouncement) && this.isAnnouncement() || (this.shouldBeAddedToLauncher = U.wrap(this.shouldBeAddedToLauncher, function(e) {
                    return W.getters["frames/hasFrames"]() ? !(!W.getters["frames/isGuideInThisFrame"]()(this) || !e.apply(this, arguments)) || !!W.getters["frames/isGuideInDifferentFrame"]()(this) && W.getters["frames/shouldBeAddedToLauncher"]()(this) : e.apply(this, arguments)
                }), this.shouldBeAddedToResourceCenter = U.wrap(this.shouldBeAddedToResourceCenter, function(e) {
                    return W.getters["frames/hasFrames"]() ? !(!W.getters["frames/isGuideInThisFrame"]()(this) || !e.apply(this, arguments)) || !!W.getters["frames/isGuideInDifferentFrame"]()(this) && W.getters["frames/shouldBeAddedToResourceCenter"]()(this) : e.apply(this, arguments)
                })), this
            }

            function al(e) {
                var t = this;
                return "whatsnew" === t.type || U.isFunction(e.isAnnouncement) && e.isAnnouncement() || (t.isShown = U.wrap(t.isShown, function(e) {
                    return e.apply(this, arguments) || W.getters["frames/isShownInAnotherFrame"]()(t)
                })), t
            }

            function sl(o) {
                var a, t, i, s, r, n, u, d = this;
                return d.pollIds && d.pollIds.length && (a = "_pendo-poll-selected_", t = U.indexBy(o.polls, "id"), i = U.map(d.pollIds, function(e) {
                    return t[e]
                }), r = function(e, t) {
                    if (e && t !== qv) return e.numericResponses ? parseInt(t, 10) : t
                }, n = function() {
                    var e = o.id,
                        t = d.id,
                        n = v();
                    Vh(e, t, j(), d.seenReason, o.language), vh(e, t, "advanced", n), mc({
                        guideId: e,
                        guideStepId: t,
                        time: n,
                        state: "advanced"
                    })
                }, u = function() {
                    var e = J("._pendo-poll_"),
                        t = J("._pendo-poll-message_");
                    t.length ? (e.addClass("_pendo-poll-submitted_"), t.css("margin-top:-" + t.height() / 2 + "px"), n()) : d.advance()
                }, d.after("render", function() {
                    var n = J("._pendo-poll_")[0],
                        e = J("._pendo-poll-submit_", n)[0];
                    e ? d.attachEvent(e, "click", function(e) {
                        var t = J("._pendo-poll-question_", n),
                            t = U.map(t, function(e, t) {
                                e = J("textarea,input:text,select,input:radio:checked", e);
                                if (e && e.length && e[0].value) return {
                                    pollId: (t = i[t]).id,
                                    value: r(t, e[0].value)
                                }
                            });
                        d.response(U.compact(t)), u()
                    }) : d.attachEvent(n, "click", function(e) {
                        var t, e = J(bi(e)).closest("._pendo-poll-question_ :button,._pendo-poll-question_ :radio");
                        e.length && (t = i[0], e = r(t, e.attr("data-pendo-poll-value") || e.attr("value")), d.response([{
                            pollId: t.id,
                            value: e
                        }]), u())
                    })
                }), d.after("render", function() {
                    var i = J("._pendo-poll_ ._pendo-poll-npsrating_")[0],
                        r = J("._pendo-poll_ ._pendo-poll-submit_"),
                        o = "_pendo-poll-npsrating-selected_";
                    i && (r.css({
                        display: "none"
                    }), d.attachEvent(i, "click", function(e) {
                        var t = J(":radio:checked", i)[0],
                            n = J("._pendo-poll_");
                        J("label", i).removeClass(a), n.removeClass(o), t && (J('label[for="' + t.id + '"]').addClass(a), n.addClass(o), r.css({
                            display: ""
                        })), U.isFunction(d.resize) && d.resize()
                    }))
                }), d.after("show", function() {
                    s = (new Date).getTime()
                }), d.response = function(e, r) {
                    e && e.length && (U.each(e, function(e, t) {
                        var n = function(t, e) {
                                if (e && e.polls && e.polls.length) return U.find(e.polls, function(e) {
                                    return e.id === t
                                })
                            }(e.pollId, o),
                            i = eg("pollResponse", d.guideId, d.id, j(), qv, o.language);
                        U.extend(i.props, {
                            poll_id: e.pollId,
                            poll_response: e.value,
                            duration: (new Date).getTime() - s
                        }, r), n && n.attributes && n.attributes.type && U.extend(i.props, {
                            poll_type: n.attributes.type
                        }), Ng.push(i)
                    }), Ng.flush())
                }), d
            }

            function ul(u) {
                var e = !1,
                    t = !1;
                return this.guide = u, this.elements = [], this.handlers = [], this.attributes = this.attributes || {}, this.getGuide = function() {
                    return this.guide
                }, this.getContent = function() {
                    var e = this.getGuide(),
                        t = e && e.steps || [],
                        n = U.indexOf(t, this),
                        i = nd();
                    U.isObject(i) || (i = Ku());
                    try {
                        var r = this.attributes.variables || {},
                            o = {
                                step: {
                                    id: this.id,
                                    isFirst: 0 === n,
                                    isLast: n === t.length - 1,
                                    index: n,
                                    number: n + 1
                                },
                                guide: {
                                    id: e.id,
                                    name: e.name,
                                    publishedAt: e.publishedAt,
                                    showsAfter: e.showsAfter,
                                    percentComplete: t.length ? Math.round((n + 1) / t.length * 100) : 0,
                                    stepCount: t.length
                                },
                                metadata: yt(i),
                                template: r
                            };
                        return this.template || (this.template = U.template(this.content || "")), sc(this.template(o).replace(/#_pendo_g_undefined/g, "#_pendo_g_" + this.id).replace(/pendo-src="([^"]+)"/g, function(e, t) {
                            return /<%=[^>]+>/.test(t) ? e : 'src="' + t + '"'
                        }))
                    } catch (Ce) {
                        return this.content
                    }
                }, this.isLocked = function() {
                    return e
                }, this.lock = function() {
                    e = !0
                }, this.unlock = function() {
                    e = !1
                }, this.isTimedOut = function() {
                    return t
                }, this.timeout = function() {
                    t = !0
                }, this.isRendered = function() {
                    return this.elements && 0 < this.elements.length
                }, this.isShown = function() {
                    return this.isRendered() || this.isLocked()
                }, this.canShow = function() {
                    return !D(this, "guide.attributes.isAnnouncement") && (!!u.canShowOnDevice() && (!this.isShown() && (!D(this, "stepIneligibleForApp") && (this.canShowOnPage(og()) && Mh(this)))))
                }, this.canShowOnPage = function(e) {
                    return sg(this.regexUrlRule, e)
                }, this.shouldAutoDisplay = function() {
                    return this.shouldRepeat() || !this.hasBeenControlled() && !this.isSnoozed() && !U.contains(["dismissed", "advanced"], this.seenState)
                }, this.autoDisplay = function() {
                    var e;
                    this.shouldAutoDisplay() && (e = this.shouldRepeat() ? "repeatGuide" : "auto", this.show(e))
                }, this._preRenderHealthCheck = function() {
                    var e, t;
                    return !!(G.designer || Fu() || Oc()) || (e = og(), t = {
                        guideId: this.guideId,
                        stepId: this.id
                    }, this.regexUrlRule && !sg(this.regexUrlRule, e) ? (uh.addGuide(u), c(new Error('attempted display on page "' + e + '"'), "pendo.io page rule exception", t), !1) : W.getters["healthCheck/isMissingPageRule"]()(this) ? (uh.addGuide(u), c(new Error('missing regexUrlRule"'), "pendo.io page rule exception", t), !1) : !(this.pageId && !this.regexUrlRule) || (uh.addGuide(u), c(new Error("missing regexUrlRule for page " + this.pageId + '"'), "pendo.io page rule exception", t), !1))
                }, this.render = function() {
                    var e = this;
                    if (this._preRenderHealthCheck()) {
                        if (e.domJson) return e.eventRouter = new Nl, u.skipResourceCenterHomeView && u.moduleIdToReplaceHomeViewWith && u.hasEligibleNativeIntegrationModule ? (n = D(t = U.find(G.guides, function(e) {
                            return e.id === u.moduleIdToReplaceHomeViewWith
                        }), "attributes.resourceCenter.integrationProvider"), $.renderNativeIntegration(n, t)) : u.continueToNativeModule ? $.handleNativeIntegrationContinuation(u) : (D(u, "attributes.resourceCenter") && yp($.getResourceCenter(), wp), u.isModule ? Z.renderResourceCenterModule(u) : (n = Z.renderGuideFromJSON(e.domJson, e), D(u, "attributes.resourceCenter") && $.adjustResourceCenterWidth(), n));
                        var t = e.attributes.width,
                            n = e.attributes.height,
                            i = G.TOOLTIP_ARROW_SIZE,
                            r = "_pendo-group-id-" + u.id + "_",
                            r = J("<div>").attr("id", Gh(e)).addClass(dh + " " + r),
                            o = J("<div/>").addClass("_pendo-guide-content_").html(e.getContent()),
                            a = J("<div/>").addClass("_pendo-guide-container_"),
                            s = J("<div/>").addClass("_pendo-backdrop_");
                        r.width(t), r.height(n), a.css({
                            left: i,
                            top: i
                        }), e.isEditable && o.attr("contenteditable", "true"), o.appendTo(a), a.appendTo(r), u && U.isFunction(u.isOnboarding) && u.isOnboarding() && r.addClass("_pendo-onboarding_"), e.overlayDiv = s, e.guideElement = r
                    }
                }, this.teardown = function() {
                    H("guide step teardown", "guide", "render"), U.each(this.handlers, function(e) {
                        m(e.element, e.type, e.fn, !0)
                    }), this.hasBeenScrolledTo = !1, this.handlers.length = 0, this.attributes.imgCount = 0
                }, this.show = function(e) {
                    U.contains(["auto", "continue"], e) && W.getters["healthCheck/isRedisplay"]()(this) ? W.dispatch("healthCheck/fixSeenStateAndLogError", {
                        step: this,
                        reason: e
                    }) : !Fu() && u.control ? this.hasBeenControlled() || this.onControlGuide("control") : (e = Lf.show(this, e)) && e["catch"] && e["catch"](U.noop)
                }, this.redraw = function() {
                    var e, t, n, i, r;
                    this.guideElement && !G.designer && (t = (e = D(u, "attributes.resourceCenter")) && $.isFullyCustom(u), n = u.activeModule ? u.activeModule.activeStep().domJson.props.id : this.containerId, i = this.guideElement.find("#" + n), r = u.activeModule && "AnnouncementsModule" === D(u.activeModule, "attributes.resourceCenter.moduleId"), S.beforeUpdate.trigger(this), t || r || (Z.recalculateGuideWidth(n), Z.adjustGuideContentWidth(n)), e ? ($.adjustResourceCenterWidth(), r && u.activeModule.guidesInModule ? U.forEach(u.activeModule.guidesInModule, function(e) {
                        var t;
                        !U.isUndefined(e.steps[0].attributes.imgCount) && 0 !== D(e.steps[0], "attributes.imgCount") || (t = e.steps[0].id, t = J(i).find("#pendo-g-" + t)[0] ? t : e.id, Z.adjustGuideContentWidth("pendo-g-" + t), Z.flexAllThings("pendo-g-" + t))
                    }) : Z.flexAllThings("pendo-resource-center-container")) : Z.flexAllThings(n), t || Z.recalculateGuideHeight(n), S.updated.trigger(this))
                }, this._show = function(e) {
                    S.beforeGuideShow.trigger(this, e), this.canShow() && (this.render(), this.isShown() && this.onShown(e))
                }, this.shouldStartTimer = function() {
                    return u.canShowOnDevice() && !u.attributes.isAnnouncement && !Lh(this)
                }, this.getStepPollTypes = function(n, e) {
                    var i;
                    if (e.pollIds && e.pollIds.length) return i = [], U.forEach(e.pollIds, function(t) {
                        var e = U.find(n.polls, function(e) {
                            return e.id === t
                        });
                        e && e.attributes && e.attributes.type && i.push(e.attributes.type)
                    }), i
                }, this.onControlGuide = function(e) {
                    var t;
                    Fu() || (this.seenReason = e, fh(v()), t = this.getStepPollTypes(u, this), this.hasBeenControlled() || (jh(this.guideId, this.id, j(), e, u.language, t), U.each(u.steps, function(e) {
                        e.seenState = "notSeen"
                    })))
                }, this.onShown = function(t) {
                    var e, n, i = this;
                    i.overrideElement && (J.addClass(i.overrideElement, "triggered"), i.overrideElement.checkAriaExpanded && i.overrideElement.checkAriaExpanded()), Fu() || (i.seenReason = t, i.seenState = "active", fh(v()), e = {
                        last_updated_at: i.lastUpdatedAt
                    }, (n = this.getStepPollTypes(u, i)) && (e.step_poll_types = n), Jh(i.guideId, i.id, j(), t, u.language, e), W.dispatch("guideState/updateLastGuideStepSeen", {
                        guideId: u.id,
                        guideStepId: i.id,
                        time: ph(),
                        state: i.seenState,
                        seenReason: t,
                        visitorId: j()
                    }), U.each(u.steps, function(e) {
                        "snoozed" === e.seenState && (e.snoozeEndTime = 0, $h(u.id, e.id, j(), t, u.language))
                    }), il.runCustomScripts(i, u)), W.dispatch("frames/guideStepShownInFrame", {
                        guideId: u.id,
                        stepId: i.id,
                        isShown: i.isShown()
                    }), i.guideElement && i.guideElement[0] && i.attachEvent(i.guideElement[0], "focusin", function(e) {
                        "TEXTAREA" !== e.target.tagName && "INPUT" !== e.target.tagName || (G.ignoreResize = !0, setTimeout(function() {
                            G.ignoreResize = !1
                        }, 1e3))
                    })
                }, this.hide = function(e) {
                    var t = this;
                    t.unlock(), S.beforeUnmount.trigger(t), t.teardown(), U.each(t.elements, function(e) {
                        co(e)
                    }), S.unmounted.trigger(t), t.attributes && e && e.stayHidden && (t.attributes.stayHidden = e.stayHidden), t.elements.length = 0, t.element = null, t.guideElement = null, t.overrideElement && (J.removeClass(t.overrideElement, "triggered"), t.overrideElement.checkAriaExpanded && t.overrideElement.checkAriaExpanded()), W.dispatch("frames/guideStepHiddenInFrame", {
                        guideId: u.id,
                        stepId: t.id
                    })
                }, this.advance = function() {
                    "advanced" === this.seenState && !this.isRendered() || kh(this)
                }, this.dismiss = function() {
                    "dismissed" === this.seenState && !this.isRendered() || _h(this)
                }, this.isPoweredByEnabled = function() {
                    return !0 !== this.hideCredits
                }, this.isSnoozed = function() {
                    var e = "snoozed" === this.seenState,
                        t = !this.snoozeEndTime || (new Date).getTime() > this.snoozeEndTime;
                    return e && !t
                }, this.shouldRepeat = function() {
                    return !!this.lastSeenAt && u.redisplay && !u.isExpired() && !this.isSnoozed() && v() - this.lastSeenAt >= u.redisplay.interval && !u.hasReachedMaxDismissals()
                }, this.hasBeenControlled = function() {
                    return u.isControlGroup() && "notSeen" === this.seenState
                }, this.attachEvent = function(e, t, n) {
                    var i = {
                        element: e,
                        type: t,
                        fn: n
                    };
                    C(e, t, n, !0), this.handlers.push(i)
                }, this.searchFor = function(e) {
                    return !(e.length < 3) && Et(this.content, e, !0)
                }, this.hasBeenSeen = function() {
                    return "advanced" == this.seenState || "dismissed" == this.seenState
                }, this.reposition = function() {}, this
            }

            function dl() {
                return this.after("render", function() {
                    Wc(Jv)
                }), this
            }
            ul.create = function(e, n) {
                return U.reduce(ul.behaviors, function(e, t) {
                    return t.call(e, n)
                }, e)
            }, ul.isGuideStep = function(e) {
                return !!e && U.isFunction(e.render)
            }, ul.init = function() {
                ul.behaviors = [rl, ul, al, pc, dd.Step, sl, dl]
            };
            var cl = "_pendo-badge_";

            function ll(e, t) {
                var n;
                y.get("disablePrefetch") || (t = U.keys(t)).length && (n = U.indexBy(e, "id"), U.each(t, function(e) {
                    var e = n[e];
                    !e || (e = U.first(e.steps)) && U.isFunction(e.fetchContent) && e.fetchContent()
                }))
            }

            function fl(e) {
                var t;
                return e && ((t = (t = e.props = e.props || {}).style = t.style || {}).cursor = t.cursor || "pointer"), e
            }

            function pl(e, n) {
                var t, i, r, o = Uu(n);
                return "building-block" === e.attributes.type ? (i = Z.buildNodeFromJSON(uc(fl(this.domJson)))[0], -1 === (t = i.parentNode.removeChild(i)).className.indexOf("_pendo-badge_") && (t.className += " _pendo-badge_"), this.isP2Badge = !0) : ((t = Jv.createElement("img")).src = sc(this.imageUrl), t.className = "_pendo-badge " + cl, i = this.width || 13, r = this.height || 13, eo(t, "width:" + i + "px;height:" + r + "px;")), t.id = "_pendo-badge_" + n.id, this.activate = function() {
                    var e = U.isFunction(n.getGuide) && n.getGuide(),
                        t = Hh(e);
                    !e.isShown() || W.getters["frames/isShownInAnotherFrame"]()(n) ? zh(n, "badge") : t ? n.eventRouter.eventable.trigger("pendoEvent", {
                        step: n,
                        action: "dismissGuide"
                    }) : (t = U.find(e.steps, function(e) {
                        return e.isShown()
                    }), _h(t))
                }, this.show = function() {}, this.hide = function() {
                    t && t.parentNode && t.parentNode.removeChild(t)
                }, Hh(e) && (this.toggleAriaExpanded = function() {
                    var e = !!J("#pendo-resource-center-container")[0],
                        t = J("button._pendo-resource-center-badge-container")[0] || J('._pendo-resource-center-badge-container [id^="pendo-image-badge-"]')[0];
                    t && t.setAttribute("aria-expanded", e)
                }, t.checkAriaExpanded = this.toggleAriaExpanded), this.step = U.constant(n), this.target = U.constant(o), this.element = U.constant(t), this
            }

            function hl() {
                return "inline" !== this.position && "inline-right" !== this.position && "inline-left" !== this.position || this.before("show", function() {
                    var e, t = this.target(),
                        n = this.element();
                    this.isP2Badge && eo(n, "display:inline-block;vertical-align:text-bottom;"), this.css && eo(n, this.css), t && t.tagName && (e = t.tagName.toLowerCase(), /br|input|img|select|textarea/.test(e) ? n.parentNode !== t.parentNode && t.parentNode.insertBefore(n, t.nextSibling) : n.parentNode !== t && ("inline" === this.position || "inline-right" === this.position ? t.appendChild(n) : "inline-left" === this.position && t.prepend(n)))
                }), this
            }

            function gl() {
                return this.position && "top-right" !== this.position && "top-left" !== this.position || this.before("show", function() {
                    var e = this.element(),
                        t = ao(this.target()),
                        n = 0,
                        i = 0,
                        r = 0,
                        o = (this.offsets && (n = this.offsets.top || 0, i = this.offsets.right || 0, r = this.offsets.left || 0), "position:" + (t.fixed ? "fixed" : "absolute") + ";top:" + (t.top + n) + "px;");
                    switch (this.position) {
                        case "top-right":
                            o += "left:" + (t.left + t.width - i) + "px";
                            break;
                        case "top-left":
                            o += "left:" + (t.left + r) + "px"
                    }
                    eo(e, o), e.parentNode || Pu().appendChild(e)
                }), this
            }

            function ml() {
                var t = this,
                    e = t.element(),
                    n = !1,
                    i = function(e) {
                        t.activate(), t.toggleAriaExpanded && t.toggleAriaExpanded(), ku(e)
                    };
                return t.after("show", function() {
                    n || (C(e, "click", i), n = !0)
                }), t.after("hide", function() {
                    m(e, "click", i), n = !1
                }), t
            }

            function vl() {
                var t, e, n, i = this.element(),
                    r = this.step(),
                    o = !1;
                return "yes" !== this.useHover && !this.showGuideOnBadgeHover || (t = U.throttle(function(e) {
                    bi(e) === i || function(e) {
                        for (; e;) {
                            if (/_pendo-guide_|_pendo-guide-tt_|_pendo-backdrop_|_pendo-badge_/.test(e.className)) return !0;
                            if (/pendo-guide-container/.test(e.id)) return !0;
                            e = e.parentNode
                        }
                        return !1
                    }(bi(e)) || n()
                }, 50, {
                    trailing: !1
                }), e = function(e) {
                    r.isShown() || zh(r, "badge"), C(Jv, "mousemove", t), ku(e)
                }, n = function(e) {
                    m(Jv, "mousemove", t), Fu() || _h(r)
                }, this.after("show", function() {
                    o || (C(i, "mouseover", e), o = !0)
                }), this.after("hide", function() {
                    m(i, "mouseover", e), m(Jv, "mousemove", t), o = !1
                })), this
            }

            function yl() {
                var e, t, n, i, s, u = this.element(),
                    d = this.target(),
                    r = !1;
                return (this.showBadgeOnlyOnElementHover || /hover/.test(this.showOnEvent)) && !Fu() && (e = "inline" === this.position ? "visibility:visible;" : "display:inline;", t = "inline" === this.position ? "visibility:hidden;" : "display:none;", n = U.throttle(function(e) {
                    var t, n, i, r, o, a;
                    bi(e) === d || bi(e) === u || Kr(u, "triggered") || (t = e.clientX, e = e.clientY, n = V(d), i = V(u), r = Math.min(n.left, i.left), o = Math.min(n.top, i.top), a = Math.max(n.right, i.right), n = Math.max(n.bottom, i.bottom), i = e + Jv.documentElement.scrollTop, r <= t && t <= a && o <= i && i <= n) || s()
                }, 50, {
                    trailing: !1
                }), i = function() {
                    eo(u, e), C(Jv, "mousemove", n)
                }, s = function() {
                    m(Jv, "mousemove", n), eo(u, t)
                }, this.after("show", function() {
                    r || (C(d, "mouseover", i), r = !0, s())
                }), this.after("hide", function() {
                    r && (m(d, "mouseover", i), r = !1), s()
                })), this
            }
            pl.create = function(n) {
                var i = pl.findStep(n);
                if (i) return U.reduce(pl.behaviors, function(e, t) {
                    return t.call(e, n, i)
                }, n.attributes.badge)
            }, pl.findStep = function(e) {
                var t = U.find(e.steps, function(e) {
                    return !!e.elementPathRule
                });
                if (t && e.attributes && e.attributes.badge) return t
            }, pl.behaviors = [rl, pl, hl, gl, ml, vl, yl];
            var bl = function(e, t) {
                    var n, i, r = (t = t || ur)[e.id],
                        o = r ? r.step() : pl.findStep(e);
                    o && (n = r ? r.target() : Uu(o), (i = D(e, "attributes.resourceCenter")) && !W.getters["frames/canShowRCBadge"]() ? r && U.isFunction(r.hide) && (o.overrideElement = qv, t[e.id] = qv, r.hide()) : i && !e.hasResourceCenterContent || ($.updateNotificationBubbles(), i = !0, o.elementContainsRulesList && (i = n && Ph(n, o.elementContainsRulesList)), o.elementPathRule && xo(n) && ci.matchesSelector(n, o.elementPathRule) && i ? ((r = r || pl.create(e)).show(), t[e.id] = r) : r && !o.isShown() && (o.overrideElement = qv, t[e.id] = qv, r.hide()), $.repositionDoubleResourceCenterBadge()))
                },
                wl = function() {
                    U.map(ur, Il), cr({})
                },
                Il = function(e) {
                    e && U.isFunction(e.hide) && e.hide()
                },
                Sl = function(e) {
                    e = ur[e.id];
                    e && Il(e)
                },
                xl = function() {
                    r("adjustBadgesForResize firing"), U.map(ur, function(e) {
                        e && e.show()
                    })
                };

            function Cl() {
                var e = this;
                return e.attributes && "group" == e.attributes.type && (e.checkForHiddenGroupSteps = function() {
                    U.each(e.steps, function(e) {
                        e.isShown() || e.autoDisplay()
                    })
                }), e
            }
            var El = function(e) {
                return e && e.attributes && !!e.attributes.isOnboarding
            };

            function _l() {
                var r, o = !1;
                return (this.isMultiStep || this.isModule || this.isTopLevel) && (U.each(this.steps, function(e) {
                    e.after("render", function() {
                        U.each(e.elements, function(e) {
                            J(e).addClass("_pendo-guide-walkthrough_")
                        })
                    })
                }), r = null, this.sections = U.reduce(this.steps, function(e, t) {
                    var n, i;
                    return i = t, !(n = r) || (n = U.last(n)).attributes.isRequired != i.attributes.isRequired && n.attributes.isRequired ? (e.push(r), r = [t]) : r.push(t), e
                }, []), this.sections = U.compact(this.sections.concat([r])), this.findSectionForStep = function(t) {
                    return U.find(this.sections, function(e) {
                        return U.contains(e, t)
                    })
                }, this.getSubSection = function(e, t) {
                    t = U.indexOf(e, t);
                    return e.slice(t + 1)
                }, this.isContinuation = function(e) {
                    var t = this.isTopLevel || this.isModule,
                        n = this.hasResourceCenterContent;
                    return (!t || n) && !!this.nextStep(e)
                }, this.nextStep = function(t) {
                    var e = null;
                    if (this.isGuideSnoozed()) return null;
                    t = t || {};
                    for (var n, i, r = 0; r < this.steps.length; r++)
                        if (this.steps[r].id === t.guideStepId) {
                            if ("dismissed" === t.state) break;
                            if ("active" === t.state || "snoozed" === t.state) {
                                e = this.steps[r];
                                break
                            }
                            if ("advanced" === t.state && t.destinationStepId) {
                                e = U.find(this.steps, function(e) {
                                    return e.id === t.destinationStepId
                                });
                                break
                            }
                            if (r + 1 < this.steps.length) {
                                e = this.steps[r + 1];
                                break
                            }
                        }
                    return e ? (n = (new Date).getTime(), (i = t.time) && 432e5 < n - i && !El(this) ? (o || (H("Multi-step continuation has expired", "guides", "info"), o = !0), null) : e) : null
                }, this.shouldAutoDisplay = function() {
                    return this.hasLaunchMethod("auto") && (this.shouldShowSnoozedGuide() || this.shouldRepeatGuide() || U.all(this.steps, function(e) {
                        return e.shouldAutoDisplay()
                    }))
                }, this.autoDisplay = function() {
                    var e, t, n;
                    this.shouldAutoDisplay() && (e = this.shouldRepeatGuide(), t = U.first(this.steps), n = this.nextStep(bc()) || t, this.shouldShowSnoozedGuide() || e ? n.show(e ? "repeatGuide" : "auto") : t.autoDisplay())
                }, this.launch = function(e) {
                    U.first(this.steps).show(e)
                }, this.show = function(e) {
                    var t = bc(),
                        n = U.first(this.steps),
                        t = this.nextStep(t) || n;
                    t.show("continue" === e && t === n && "auto" === n.seenReason ? "auto" : e)
                }, this.isComplete = function() {
                    var e = U.last(this.steps);
                    return !!e && U.contains(["advanced", "dismissed"], e.seenState)
                }, this.activeStep = function() {
                    var e = [].concat(this.steps).reverse();
                    return U.findWhere(e, {
                        seenState: "active"
                    })
                }), this
            }

            function Tl() {
                var o = this;

                function t(i) {
                    var r = [];
                    return function(e) {
                        try {
                            return e.apply(o, U.toArray(arguments).slice(1))
                        } catch (Ce) {
                            var t, n = "ERROR in guide " + i + ' (ID="' + o.id + '")';
                            throw r.push(v()), 5 <= r.length && ((0 < (t = U.last(r) - U.first(r)) ? (r.length - 1) / (t / 6e4) : Infinity) >= Tl.MAX_ERRORS_PER_MINUTE && (n = "Exceeded error rate limit, dropping guide.\n" + n, uh.addGuide(o), S.trigger("renderFail", o)), r.shift()), c(Ce, n), Ce
                        }
                    }
                }
                return U.each(["canShow", "placeBadge", "show"], function(e) {
                    o[e] = U.wrap(o[e], t(e))
                }), o
            }

            function Al() {
                this.elements = [], this.attributes = this.attributes || {}, this.attributes.device && this.attributes.device.type ? "all" == this.attributes.device.type ? this.attributes.device = {
                    desktop: !0,
                    mobile: !0
                } : (e = this.attributes.device.type, this.attributes.device = {
                    mobile: !1,
                    desktop: !1
                }, this.attributes.device[e] = !0) : this.attributes.device = this.attributes.device || {}, U.each(this.steps, function(e) {
                    "mobile-lightbox" === e.type && (this.attributes.device.desktop = !1, this.attributes.device.mobile = !0), ul.create(e, this)
                }, this), this.isActivatedByEvent = function(e) {
                    return !!(this.hasLaunchMethod("dom") && this.attributes && this.attributes.activation && U.contains(this.attributes.activation.event, e) && this.canEventActivatedGuideBeShown())
                }, this.isContinuation = function(e) {
                    return !1
                }, this.isGuideWidget = function() {
                    return this.attributes && "launcher" === this.attributes.type
                }, this.isOnboarding = function() {
                    return this.attributes && !!this.attributes.isOnboarding
                }, this.isWhatsNew = function() {
                    var e = U.first(this.steps);
                    return e && "whatsnew" === e.type
                }, this.isAnnouncement = function() {
                    return D(this, "attributes.isAnnouncement")
                }, this.isHelpGuide = function() {
                    return !this.isOnboarding() && !this.isWhatsNew() && !this.isGuideWidget()
                }, this.nextStep = function(e) {
                    return null
                }, this.hasLaunchMethod = function(e) {
                    return this.launchMethod && 0 <= this.launchMethod.indexOf(e)
                }, this.shouldAutoDisplay = function() {
                    return !this.isExpired() && this.hasLaunchMethod("auto") && U.any(this.steps, function(e) {
                        return e.shouldAutoDisplay()
                    })
                }, this.autoDisplay = function() {
                    this.shouldAutoDisplay() && U.each(this.steps, function(e) {
                        e.autoDisplay()
                    })
                }, this.isShown = function() {
                    return U.any(this.steps, function(e) {
                        return e.isShown()
                    })
                }, this.canShowOnDevice = function() {
                    if (!Fu()) {
                        var e = ld(),
                            t = this.attributes && this.attributes.device || {};
                        if (!e && !1 === t.desktop) return !1;
                        if (e && !0 !== t.mobile) return !1
                    }
                    return !0
                }, this.canShow = function() {
                    return this.canShowOnDevice() && U.any(this.steps, function(e) {
                        return e.canShow()
                    })
                }, this.launch = function(e) {
                    this.hasGuideBeenControlled() || this.show(e), this.isShown() ? U.each(this.steps, function(e) {
                        e.seenState = "active"
                    }) : !this.isShown() && this.isControlGroup() && U.each(this.steps, function(e) {
                        e.seenState = "notSeen"
                    })
                }, this.show = function(t) {
                    U.each(this.steps, function(e) {
                        e.show(t)
                    })
                }, this.checkForHiddenGroupSteps = function() {}, this.hide = function(t) {
                    U.each(this.steps, function(e) {
                        e.hide(t)
                    })
                }, this.hasBeenSeen = function() {
                    return U.all(this.steps, function(e) {
                        return e.hasBeenSeen()
                    })
                }, this.canBadgeBeShown = function() {
                    var e = this.attributes.badge;
                    return !(e && e.isOnlyShowOnce && this.steps[0].hasBeenSeen())
                }, this.placeBadge = function() {
                    var e;
                    this.canShowOnDevice() && this.hasLaunchMethod("badge") && this.canBadgeBeShown() ? (e = D(this, "attributes.resourceCenter"), this.isControlGroup() && !e ? this.hasGuideBeenControlled() || this.steps[0].onControlGuide("control") : (e = U.first(this.steps)) && U.isFunction(e.canShowOnPage) && e.canShowOnPage(og()) && bl(this)) : Sl(this)
                }, this.findStepById = function(t) {
                    return U.find(this.steps, function(e) {
                        return e.id === t
                    })
                }, this.isPoweredByEnabled = function() {
                    return !!U.find(this.steps, function(e) {
                        return e.isPoweredByEnabled()
                    })
                }, this.searchFor = function(t) {
                    var e, n, i = null;
                    return Et(this.name, t, !0) ? i = "name" : (e = !(n = []), (e = 0 < (n = this.attributes && this.attributes.launcher && this.attributes.launcher.keywords ? this.attributes.launcher.keywords : n).length ? U.find(n, function(e) {
                        return Et(e.text, t, !0)
                    }) : e) ? i = "tag" : (n = U.map(this.steps, function(e) {
                        return e.searchFor(t)
                    }), 0 < U.compact(n).length && (i = "content"))), !!i && {
                        guide: this,
                        field: i
                    }
                }, this.shouldBeAddedToResourceCenter = function() {
                    var e, t = this;
                    return !(!t.steps || !t.steps.length) && (!t.control && (!!t.eligibleInFrame || !(!t.steps[0].content && !U.isFunction(t.steps[0].fetchContent)) && (e = t.steps[0], !(!t.hasLaunchMethod("launcher") && !t.isWhatsNew()) && (!!e.canShowOnPage(og()) && (!!t.canShowOnDevice() && !!Mh(e))))))
                }, this.shouldBeAddedToLauncher = function() {
                    var e;
                    return !(!this.steps || !this.steps.length) && (e = this.steps[0], !(!this.hasLaunchMethod("launcher") && !this.isWhatsNew()) && (!!e.canShowOnPage(og()) && (!!this.canShowOnDevice() && !!Mh(e))))
                };
                var e, n = "PENDO_HELPER_STEP";
                return this.getPositionOfStep = function(e) {
                    var t = U.reject(this.steps, function(e) {
                        return Et(e.content, n)
                    });
                    return U.indexOf(t, e) + 1
                }, this.getTotalSteps = function() {
                    return U.reject(this.steps, function(e) {
                        return Et(e.content, n)
                    }).length
                }, this.getSeenSteps = function() {
                    return U.size(U.filter(this.steps, function(e) {
                        return e.hasBeenSeen()
                    }))
                }, this.isComplete = function() {
                    var t = ["advanced", "dismissed"];
                    return U.all(this.steps, function(e) {
                        return U.contains(t, e.seenState)
                    })
                }, this.isInProgress = function() {
                    var t = ["active", "advanced", "dismissed"];
                    return !this.isComplete() && U.any(this.steps, function(e) {
                        return U.contains(t, e.seenState)
                    })
                }, this.isNotStarted = function() {
                    return !this.isInProgress() && !this.isComplete()
                }, this.fetchContent = function() {
                    return z.all(U.map(this.steps, function(e) {
                        if (U.isFunction(e.fetchContent)) return e.fetchContent()
                    }))
                }, this.canEventActivatedGuideBeShown = function() {
                    return !(this.attributes.dom && this.attributes.dom.isOnlyShowOnce && this.steps[0].hasBeenSeen())
                }, this.isGuideSnoozed = function() {
                    return U.any(this.steps, function(e) {
                        return e.isSnoozed()
                    })
                }, this.hasGuideBeenControlled = function() {
                    return U.any(this.steps, function(e) {
                        return e.hasBeenControlled()
                    })
                }, this.isControlGroup = function() {
                    return this.control
                }, this.shouldShowSnoozedGuide = function() {
                    var t = !1;
                    return !this.isExpired() && U.any(this.steps, function(e) {
                        return !(t = "dismissed" === e.seenState ? !0 : t) && "snoozed" === e.seenState && e.snoozeEndTime && (new Date).getTime() > e.snoozeEndTime
                    })
                }, this.shouldRepeatGuide = function() {
                    var t;
                    return !(!this.redisplay || this.isExpired() || this.isGuideSnoozed() || this.hasReachedMaxDismissals()) && (t = 0, U.forEach(this.steps, function(e) {
                        t = Math.max(t, e.lastSeenAt || 0)
                    }), !!t && v() - t >= this.redisplay.interval)
                }, this.isExpired = function() {
                    return !!this.expiresAfter && v() > this.expiresAfter
                }, this.calculateDismissCountFromSteps = function() {
                    var t = 0;
                    return U.forEach(this.steps, function(e) {
                        e.dismissCount && (t += e.dismissCount)
                    }), t
                }, this.hasReachedMaxDismissals = function() {
                    return this.redisplay && 0 !== this.redisplay.maxDismissals && this.calculateDismissCountFromSteps() >= this.redisplay.maxDismissals
                }, this
            }

            function Rl(e) {
                return Al.create(e)
            }
            Tl.MAX_ERRORS_PER_MINUTE = 30, Al.create = function(e) {
                return U.reduce(Al.behaviors, function(e, t) {
                    return t.call(e)
                }, e)
            }, Al.init = function() {
                Al.behaviors = [rl, Al, dd.Guide, Cl, _l, Tl, ol]
            };
            var kl = function() {
                    return {
                        buildNodesFromTemplate: function(e, t, n, i) {
                            var r = i || g();
                            switch (e) {
                                case "pendo_resource_center_module_list_item":
                                    return function(l, f, p) {
                                        var e = l.templateChildren;
                                        return U.reduce(e, function(e, t, n) {
                                            var i = $.findResourceCenterHomeView(p),
                                                r = U.find(p, function(e) {
                                                    return e.id === t.id
                                                });
                                            if (G.designer) r = t, i = U.find(p, function(e) {
                                                return D(e, "attributes.resourceCenter.isTopLevel")
                                            });
                                            else {
                                                if (!r) return e;
                                                if (!r.hasResourceCenterContent) return U.each(r.children, function(e) {
                                                    e = x(e);
                                                    e && e.control && e.steps[0].onControlGuide("control")
                                                }), e
                                            }
                                            var o, a, s, u, d = w.parse(w.stringify(l)),
                                                n = (delete d.templateChildren, d.props.id = d.props.id + "-" + n, d.props["data-pendo-module-guide-id"] = r.id, d.actions || (d.actions = []), {
                                                    action: "renderResourceCenterModule",
                                                    source: d.props.id,
                                                    destination: "EventRouter",
                                                    parameters: [{
                                                        name: "guideId",
                                                        type: "string",
                                                        value: r.id
                                                    }],
                                                    uiMetadata: {},
                                                    eventType: "click"
                                                }),
                                                n = (G.designer || d.actions.push(n), D(i, "attributes.notificationBubble")),
                                                c = D(i, "attributes.notifications");
                                            return n && c && ("AnnouncementsModule" === D(r, "attributes.resourceCenter.moduleId") && (o = r.id), (o = "chat" === D(r, "attributes.resourceCenter.integrationName") ? "chat" : o) && (d.props["data-pendo-notification-id"] = o, c = d, r = n, n = o, o = (i = i).attributes.notifications.individualCounts[o], (c = Z.findDomBlockInDomJson(c, function(e) {
                                                return e && e.props && e.props.id && -1 !== e.props.id.indexOf("pendo-row")
                                            })) && (a = U.find(c.children, function(e) {
                                                return e && e.props && e.props.id && -1 !== e.props.id.indexOf("pendo-text")
                                            })) && a.props && a.props.style && (u = parseInt(a.props.style.width, 10)) && !isNaN(u) && (s = c.children.indexOf(a), u = u - 40 + "px", "100%" !== a.props.style.width && (a.props.style.width = u), a.props.style["padding-right"] = "40px", a.props.style["box-sizing"] = "content-box", u = {
                                                type: "div",
                                                children: [{
                                                    type: "div",
                                                    content: String(i.attributes.notifications.individualCounts[n]),
                                                    props: {
                                                        style: {
                                                            position: "relative",
                                                            top: "50%",
                                                            "font-weight": r["font-weight"],
                                                            "font-family": r["font-family"],
                                                            color: r.color
                                                        }
                                                    }
                                                }],
                                                props: {
                                                    "class": "_pendo-home-view-bubble",
                                                    style: {
                                                        position: "absolute",
                                                        "border-radius": "20px",
                                                        height: "26px",
                                                        "line-height": "0px",
                                                        padding: "0px 10px",
                                                        right: "20px",
                                                        top: "50%",
                                                        "margin-top": "-14px",
                                                        "box-sizing": "content-box",
                                                        "background-color": r["background-color"],
                                                        display: o ? "block" : "none"
                                                    }
                                                }
                                            }, c.children.splice(s + 1, 0, u)))), d = h(d, t, d.props.id), e.concat(Z.buildNodeFromJSON(d, f, p))
                                        }, [])
                                    }(t, n, r);
                                case "pendo_resource_center_guide_list_item":
                                    return function(o, a, s) {
                                        var e = o.templateChildren;
                                        return U.reduce(e, function(e, t, n) {
                                            var i, r = f(s, t);
                                            return r ? (i = w.parse(w.stringify(o)), t.keywords && (i.props["data-_pendo-text-list-item-1"] = t.keywords), delete i.templateChildren, i.props.id = i.props.id + "-" + n, i.actions || (i.actions = []), n = {
                                                action: "showGuide",
                                                source: i.props.id,
                                                destination: "EventRouter",
                                                parameters: [{
                                                    name: "guideId",
                                                    type: "string",
                                                    value: r.id
                                                }, {
                                                    name: "reason",
                                                    type: "string",
                                                    value: "launcher"
                                                }],
                                                uiMetadata: {},
                                                eventType: "click"
                                            }, G.designer || i.actions.push(n), i = h(i, t), e.concat(Z.buildNodeFromJSON(i, a, s))) : e
                                        }, [])
                                    }(t, n, r);
                                case "pendo_resource_center_onboarding_item":
                                    return function(a, s, u) {
                                        var e = a.templateChildren;
                                        return U.reduce(e, function(e, t, n) {
                                            var i, r, o = f(u, t);
                                            return o ? (delete(i = w.parse(w.stringify(a))).templateChildren, i.props.id = i.props.id + "-" + n, i.actions || (i.actions = []), n = {
                                                action: "showGuide",
                                                source: i.props.id,
                                                destination: "EventRouter",
                                                parameters: [{
                                                    name: "guideId",
                                                    type: "string",
                                                    value: o.id
                                                }, {
                                                    name: "reason",
                                                    type: "string",
                                                    value: "launcher"
                                                }],
                                                uiMetadata: {},
                                                eventType: "click"
                                            }, G.designer || i.actions.push(n), n = o.getTotalSteps(), r = o.getSeenSteps(), o.isComplete() && (r = n), o = parseInt(r / n * 100, 10), Z.findDomBlockInDomJson(i, function(e) {
                                                return e.svgWidgetId
                                            }).svgAttributes.fillCircle.percentComplete = o, t.hasOwnProperty("subtitle") ? t.stepProgress = d(t.subtitle, {
                                                currentStep: r,
                                                totalSteps: n
                                            }) : t.stepProgress = "Step " + r + " of " + n, i = h(i, t), e.concat(Z.buildNodeFromJSON(i, s, u))) : e
                                        }, [])
                                    }(t, n, r);
                                case "pendo_resource_center_onboarding_progress_bar":
                                    return function(e, t, n) {
                                        var i = t.getGuide().attributes.resourceCenter.children,
                                            r = 0,
                                            o = 0,
                                            i = (U.forEach(i, function(e) {
                                                e = f(n, e);
                                                e && (e.isComplete() ? (r += e.getTotalSteps(), o += e.getTotalSteps()) : (r += e.getTotalSteps(), o += e.getSeenSteps()))
                                            }), parseInt(o / r * 100, 10));
                                        isNaN(i) && (i = 0);
                                        i = {
                                            totalPercentComplete: i + "%"
                                        };
                                        return e = h(e = w.parse(w.stringify(e)), i), Z.findDomBlockInDomJson(e, function(e) {
                                            return e.props && e.props.id && -1 !== e.props.id.indexOf("pendo-progress-bar-fill")
                                        }).props.style.width = i.totalPercentComplete, [Z.buildNodeFromJSON(e, t, n)]
                                    }(t, n, r);
                                case "pendo_resource_center_announcement_item":
                                    return function(c, e, n) {
                                        var l, e = e.getGuide().attributes.resourceCenter.children,
                                            e = U.reduce(e, function(e, t) {
                                                t = f(n, t);
                                                return t && t.steps && t.steps.length ? e.concat(t) : e
                                            }, []);
                                        return U.every(e, function(e) {
                                            e = e.steps[0];
                                            return !!pc.hasContent(e)
                                        }) ? (l = D($.getResourceCenter(), "attributes.notificationBubble"), U.map(e, function(e, t) {
                                            var n, i, r, o, a, s, u = "whatsnew" === D(e, "attributes.type"),
                                                d = w.parse(w.stringify(c));
                                            return e.steps[0].eventRouter = new Nl, d.props.id = d.props.id + "-" + t, d.props["data-pendo-announcement-guide-id"] = e.id, u ? (t = d, u = l, n = Rl(o = e), (s = n.steps[0]).render(), il.runCustomScripts(s, n), i = "#" + (n = s.guideElement)[0].id + " h1::after { display:none; }", n[0].appendChild(Jv.createElement("style")).innerHTML = i, u && ((r = p(u)).props.style.top = "20px"), !$.hasAnnouncementBeenSeen(o) && r && (t.props["class"] += " pendo-unseen-announcement", t.children = [r]), i = Z.buildNodeFromJSON(t, s), n.appendTo(i), i) : (u = d, o = l, t = Rl(r = e), s = r.steps[0], il.runCustomScripts(s, t), t = s.domJson, u.children = [t], o && (a = p(o), t = Z.findDomBlockInDomJson(u, function(e) {
                                                return "pendo-guide-container" === e.props.id
                                            }), o = parseInt(u.props.style["padding-top"], 10), t = parseInt(t.props.style["padding-top"], 10), a.props.style.top = t + o + 5 + "px"), !$.hasAnnouncementBeenSeen(r) && a && (u.props["class"] += " pendo-unseen-announcement", u.children.unshift(a)), delete u.templateName, Z.buildNodeFromJSON(u, s))
                                        })) : []
                                    }(t, n, r);
                                case "pendo_guide_data_text_block":
                                    return function(e, t, n) {
                                        var i = t.getGuide ? t.getGuide() : U.find(n, function(e) {
                                                return e.id === t.guideId
                                            }),
                                            r = D(i, "attributes.dates." + i.language, !1);
                                        r = r ? {
                                            showsAfter: r
                                        } : (r = D(i, "showsAfter") || D(i, "publishedAt"), r = r ? new Date(r) : new Date, i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][r.getMonth()] + " " + r.getDate() + ", " + r.getFullYear(), {
                                            showsAfter: i
                                        });
                                        return i = h(i = w.parse(w.stringify(e)), r), [Z.buildNodeFromJSON(i, t, n)]
                                    }(t, n, r);
                                default:
                                    return []
                            }
                        },
                        generateUnreadAnnouncementMiniBubble: p,
                        getGuidesInResourceCenterModule: function(e, i) {
                            e = e.attributes.resourceCenter.children;
                            return U.reduce(e, function(e, t, n) {
                                t = f(i, t);
                                return t && e.push(t), e
                            }, [])
                        }
                    };

                    function d(e, n) {
                        return e.replace(/<%=\s*([A-Za-z_0-9$]+)\s*%>/gi, function(e, t) {
                            return U.isNull(n[t]) || U.isUndefined(n[t]) ? e : n[t]
                        })
                    }

                    function h(e, t, n) {
                        if (e.content && (e.content = d(e.content, t)), e.props && e.props.id && 0 <= e.props.id.indexOf("pendo-right-caret") && (e.props["aria-labelledby"] = n), e.children)
                            for (var i = 0; i < e.children.length; i++) h(e.children[i], t, n);
                        return e
                    }

                    function f(e, t) {
                        e = U.find(e, function(e) {
                            return e.id === (t.id || t)
                        });
                        if (G.designer) return t;
                        if (e) {
                            if (!e.ineligibleForRC) return e;
                            e.control && e.steps[0].onControlGuide("control")
                        }
                    }

                    function p(e) {
                        return {
                            type: "div",
                            children: [],
                            props: {
                                "class": "pendo-unread-announcement-mini-bubble",
                                style: {
                                    position: "absolute",
                                    "border-radius": "5px",
                                    height: "10px",
                                    width: "10px",
                                    "line-height": "0px",
                                    left: "0px",
                                    top: "30px",
                                    "box-sizing": "content-box",
                                    "background-color": e["background-color"],
                                    "z-index": "10"
                                }
                            }
                        }
                    }
                }(),
                Ol = function() {
                    return {
                        buildSvgNode: function(e, t) {
                            if ("onboardingProgressCircle" === e) return n(t)
                        },
                        createProgressCircleSvg: n
                    };

                    function n(e) {
                        var t, n, i, r, o, a, s;
                        return Te(9) ? (n = (t = (t = e).svgAttributes).fillCircle.stroke, i = t.backgroundCircle.stroke, t = 100 <= (t.fillCircle.percentComplete || 0), r = J('<div aria-hidden="true" focusable="false" class="pendo-progress-circle-ie"><div class="pendo-progress-circle-fill"></div></div>'), o = r.find(".pendo-progress-circle-fill"), t ? o.css({
                            border: "3px solid " + n,
                            height: "10px",
                            width: "10px"
                        }) : o.css({
                            border: "3px solid " + i,
                            height: "10px",
                            width: "10px"
                        }), r) : 100 <= ((t = e.svgAttributes).fillCircle.percentComplete || 0) ? (n = (n = t).fillCircle.stroke, (i = J('<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="pendo-progress-circle-fill" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'))[0].setAttributeNS(null, "stroke", n), i) : (r = (o = t).fillCircle.stroke, e = o.backgroundCircle.stroke, o = o.fillCircle.percentComplete || 0, a = 100 / (2 * Math.PI), s = (a = J('<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" version="1.1" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid"><circle class="pendo-progress-circle-background" cx="20" cy="20" r="' + a + '" stroke-width="6px" stroke-linecap="round" fill="none"></circle><circle class="pendo-progress-circle-fill" cx="20" cy="20" r="' + a + '" stroke-width="6px" stroke-linecap="round" transform="rotate(-90 20 20)" fill="none"></circle></svg>')).find(".pendo-progress-circle-fill")[0], a.find(".pendo-progress-circle-background")[0].setAttributeNS(null, "stroke", e), o <= 0 ? s.setAttributeNS(null, "stroke-width", "0px") : (s.setAttributeNS(null, "stroke", r), s.setAttributeNS(null, "stroke-dasharray", o + ", 100")), a)
                    }
                }(),
                h = function() {
                    return {
                        calculateTotalOffsetWidth: s,
                        center: function(e, t) {
                            for (var n = t / 2, t = e[0], i = e[e.length - 1], r = 1; r < e.length - 1; r++) {
                                var o = s(e, r);
                                e[r].style.left = n + o + "px"
                            }
                            1 < e.length && (i.style.right = n + "px");
                            t.style.left = n + "px"
                        },
                        createFlexContainer: function(e) {
                            var t = Jv.createElement("div");
                            t.style.display = "inline-block", e || (t.style.position = "absolute");
                            return t.style["vertical-align"] = "top", t.setAttribute("class", "pendo-mock-flexbox-element"), t
                        },
                        createFlexRow: function() {
                            var e = Jv.createElement("div");
                            return e.setAttribute("class", "pendo-mock-flexbox-row"), e.style.display = "block", e.style.position = "relative", e.style.width = "100%", e
                        },
                        findMaxChildHeight: function(e, t) {
                            for (var n = [], i = 0; i < e.length; i++) {
                                var r;
                                t && -1 !== (e[i].children[0].children[0].getAttribute("class") || "").indexOf("pendo-block-wrapper") && (r = e[i].children[0].offsetHeight + "px", e[i].style.height = r), n.push(e[i].offsetHeight)
                            }
                            return U.reduce(n, function(e, t) {
                                return Math.max(e, t)
                            }, 20)
                        },
                        flexEnd: function(e, t) {
                            for (var n = t, t = e[0], i = e[e.length - 1], r = 1; r < e.length - 1; r++) {
                                var o = s(e, r);
                                e[r].style.left = n + o + "px"
                            }
                            1 < e.length && (t.style.left = n + "px");
                            i.style.right = "0px"
                        },
                        flexStart: function(e) {
                            e[0].style.left = "0px";
                            for (var t = 1; t < e.length; t++) {
                                var n = s(e, t);
                                e[t].style.left = n + "px"
                            }
                        },
                        getPendoInlineUIElements: function(e) {
                            return U.filter(e, t)
                        },
                        getPendoVisualElements: function(e) {
                            return U.filter(e, function(e) {
                                return !t(e)
                            })
                        },
                        initializeFlexElements: function(e) {
                            var t = e.cloneNode(),
                                n = a(e),
                                i = h.getPendoInlineUIElements(e.children);
                            if (1 === n.length && 0 === n[0].id.indexOf("pendo-text")) return e;
                            t.innerHTML = "";
                            for (var r = 0; r < n.length; r++) Z.isElementHiddenInGuide(n[r]) ? t.appendChild(n[r]) : t.appendChild(h.wrapElementInMockFlexboxContainer(n[r], e));
                            for (var o = 0; o < i.length; o++) t.appendChild(i[o]);
                            return e.parentNode.replaceChild(t, e), t
                        },
                        isPendoInlineUIElement: t,
                        setElementHorizontalAlignment: function(e, t, n) {
                            if (!(e.length < 1)) switch (n) {
                                case "space-between":
                                    h.spaceBetween(e, t);
                                    break;
                                case "space-around":
                                    h.spaceAround(e, t);
                                    break;
                                case "space-evenly":
                                    h.spaceEvenly(e, t);
                                    break;
                                case "center":
                                    h.center(e, t);
                                    break;
                                case "flex-start":
                                    h.flexStart(e);
                                    break;
                                case "flex-end":
                                    h.flexEnd(e, t)
                            }
                        },
                        setElementVerticalAlignment: function(e, t, n) {
                            switch (n) {
                                case "top":
                                    h.topAlignment(e);
                                    break;
                                case "center":
                                    h.centerAlignment(e, t);
                                    break;
                                case "bottom":
                                    h.bottomAlignment(e)
                            }
                        },
                        spaceAround: function(e, t) {
                            for (var n = t / (2 * e.length), t = e[0], i = e[e.length - 1], r = 1; r < e.length - 1; r++) {
                                var o = s(e, r);
                                e[r].style.left = 2 * n + o + "px"
                            }
                            t.style.left = n + "px", i.style.right = n + "px"
                        },
                        spaceBetween: function(e, t) {
                            for (var n = t / Math.max(e.length - 1, 1), t = e[0], i = e[e.length - 1], r = 1; r < e.length - 1; r++) {
                                var o = s(e, r);
                                e[r].style.left = r * n + o + "px"
                            }
                            t.style.left = "0px", i.style.right = "0px"
                        },
                        spaceEvenly: function(e, t) {
                            for (var n = t / (e.length + 1), t = e[0], i = e[e.length - 1], r = 1; r < e.length - 1; r++) {
                                var o = s(e, r);
                                e[r].style.left = n + o + "px"
                            }
                            t.style.left = n + "px", i.style.right = n + "px"
                        },
                        topAlignment: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].style.top = "0px"
                        },
                        centerAlignment: function(e, t) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n],
                                    r = i.offsetHeight,
                                    o = t / 2,
                                    o = Math.round(o - r / 2);
                                i.style.top = o + "px"
                            }
                        },
                        bottomAlignment: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].style.bottom = "0px"
                        },
                        wrapElementInMockFlexboxContainer: function(e, t) {
                            var n = e.getAttribute("class") || "",
                                i = -1 !== n.indexOf("pendo-block-wrapper"),
                                r = e.style && "absolute" === e.style.position,
                                o = D(e.style, "width", ""),
                                a = K(e).width,
                                s = -1 !== n.indexOf("_pendo-open-text-poll-wrapper") || -1 !== n.indexOf("_pendo-image-wrapper") || -1 !== n.indexOf("pendo-video-wrapper") || -1 !== n.indexOf("_pendo-number-scale-poll-wrapper");
                            i && !s && (o = (o ? a : null) || K(e.children[0]).width);
                            n && 0 <= n.indexOf("_pendo-resource-center-onboarding-module-guide-complete-circle-container") && (a = parseInt(K(t).width, 10), u = parseInt(K(e).width, 10) + parseInt(e.style.marginRight || 0, 10) + parseInt(e.style.marginLeft || 0, 10), t = J(t).find("._pendo-simple-text").getParent()[0], a = a - u, "border-box" !== D(t, "style.boxSizing") && (a = a - parseInt(t.style.paddingLeft || 0, 10) - parseInt(t.style.paddingRight || 0, 10)), t.style.width = a.toString() + "px"); {
                                var u;
                                if (!n || n.indexOf("pendo-mock-flexbox-element") < 0) return (u = h.createFlexContainer(r)).appendChild(e), t = D(e, "children")[0], i && t && -1 !== (t.getAttribute("class") || "").indexOf("image-preview-placeholder") && (u.children[0].style.width = o), !i || s || e.style.width || (u.children[0].children[0].style.width = o), u
                            }
                            return e
                        },
                        getVisualElementsWrappedInFlexElements: a,
                        initializeFlexRows: function(e, t, n) {
                            var i = function(e) {
                                return U.filter(e, function(e) {
                                    e = e.getAttribute("class") || "";
                                    return e && -1 < e.indexOf("pendo-mock-flexbox-element")
                                })
                            }(e.children);
                            0 !== i.length && (i = h.wrapFlexElementsInFlexRows(i, e), h.formatFlexRows(i, e, t, n))
                        },
                        wrapFlexElementsInFlexRows: function(e, t) {
                            for (var n = d(t), i = h.createFlexRow(), r = {
                                    row: i,
                                    rowWidthUsed: 0
                                }, o = [r], a = 0; a < e.length; a++) {
                                var s = e[a],
                                    u = parseInt(K(s).width, 10);
                                r.rowWidthUsed += u, r.rowWidthUsed > n && 0 !== U.indexOf(e, s) && (r.rowWidthUsed -= u, (i = h.createFlexRow()).appendChild(s), o.push(r = {
                                    row: i,
                                    rowWidthUsed: u
                                })), r.row.appendChild(s)
                            }
                            return o
                        },
                        formatFlexRows: function(e, t, n, i) {
                            for (var r = d(t), o = 0; o < e.length; o++) {
                                var a = e[o],
                                    s = (t.appendChild(a.row), h.findMaxChildHeight(a.row.children, !1)),
                                    u = (a.row.style["min-height"] = s + "px", r - parseInt(a.rowWidthUsed, 10));
                                h.setElementHorizontalAlignment(a.row.children, u, n), h.setElementVerticalAlignment(a.row.children, s, i)
                            }
                        }
                    };

                    function a(e) {
                        return J(["._pendo-button", ".pendo-block-wrapper", "._pendo-multi-choice-poll-select-border", "._pendo-text-subTitle", "._pendo-text-paragraph", "._pendo-text-title", "._pendo-text-custom", "._pendo-close-guide", "> ._pendo-simple-text", "div._pendo-resource-center-module-list-item-text-container", "._pendo-resource-center-right-caret", '[id^="pendo-onboarding-guide-progress-circle"]', "button#pendo-a11y-list-item-button-block", "._pendo-resource-center-onboarding-module-listed-guide-link", "._pendo-home-view-bubble"].join(","), e)
                    }

                    function t(e) {
                        e = e.getAttribute("class");
                        return !!(e && -1 < e.indexOf("pendo-inline-ui"))
                    }

                    function s(e, t) {
                        for (var n = (e = Array.prototype.slice.call(e)).slice(0, t), i = 0, r = 0; r < n.length; r++) i += n[r].offsetWidth;
                        return i
                    }

                    function d(e) {
                        e = K(e);
                        return parseInt(e.width, 10) - parseInt(e.paddingLeft, 10) - parseInt(e.paddingRight, 10)
                    }
                }(),
                Z = function() {
                    return {
                        renderGuideFromJSON: function(e, n, t, i) {
                            0;
                            var r = n.getGuide(),
                                o = Z.findGuideContainerJSON(e),
                                a = D(r, "attributes.resourceCenter"),
                                s = a && $.isFullyCustom(r),
                                u = "AnnouncementsModule" === D(r, "attributes.resourceCenter.moduleId"),
                                o = (n.hasEscapeListener = !1, n.containerId = o && o.props && o.props.id, n.element = Gu(n), Z.buildNodeFromJSON(e, n, t)),
                                t = (n.guideElement = o).find("#" + n.containerId),
                                d = "data-vertical-alignment",
                                c = "Relative to Element" === t.attr(d);
                            c && !a && J(n.guideElement).css({
                                overflow: "hidden",
                                height: "0",
                                width: "0"
                            });
                            t.css({
                                visibility: "hidden"
                            });
                            d = cd.buildWatermark({
                                appId: r.appId,
                                targetAccount: r.targetAccount,
                                isTraining: r.isTraining,
                                isBottomAligned: "Bottom Aligned" === t.attr(d)
                            }, Z.buildNodeFromJSON);
                            d && t.append(d);
                            var d = n && n.attributes && n.attributes.imgCount,
                                l = (o.appendTo(Pu()), t.find('[data-pendo-grow-height="true"]')[0]);
                            l && f(l, o[0]);
                            s || u || (Z.recalculateGuideWidth(n.containerId), Z.adjustGuideContentWidth(n.containerId));
                            d || a || Z.flexAllThings(n.containerId);
                            s || Z.recalculateGuideHeight(n.containerId);
                            c ? n.attributes.calculatedType = "tooltip" : oc.attachBBAdvanceActions(n);
                            c && !d && p(n, e, t[0]);
                            a && ($.showHomeViewOrEmptyState(r), l = [], u ? l = [r.attributes.resourceCenter] : Z.flexAllThings(n.containerId), l.length && U.forEach(l, function(e) {
                                e = D(e, "children", []);
                                U.forEach(e, function(e) {
                                    var t;
                                    e && (t = e.steps[0], U.isUndefined(t.attributes.imgCount) && (t = D(t, "id", n.id), e = D(e, "id", r.id), t = J("#pendo-g-" + t).length ? t : e, Z.flexAllThings("pendo-g-" + t)))
                                })
                            }));
                            d || t.css({
                                visibility: "visible"
                            });
                            return n.elements.push(n.guideElement[0]), Z.autofocusStep(n, t), Z.trapFocusStep(n, t), o
                        },
                        autofocusStep: function(e, t) {
                            var n, i;
                            G.designer || D(e, "attributes.isAutoFocus") && (n = "autofocus for guide id: " + e.getGuide().id + " step id: " + e.id + " ", Lt(function() {
                                var e = J(t).find("#pendo-guide-container");
                                return (e = e[0] || e) && xo(e) && _o(e) && To(e) ? e : null
                            }, i = {
                                maxRetries: 100,
                                delay: 50,
                                exponentialBackoff: !1
                            }, function(t) {
                                Lt(function() {
                                    return (e = t) && e.focus(), e === Jv.activeElement;
                                    var e
                                }, i, function() {}, function() {
                                    Ur(n + "#pendo-guide-container is available on page but could not capture focus")
                                })
                            }, function() {
                                Ur(n + "#pendo-guide-container did not render or become visible in time to focus")
                            }))
                        },
                        trapFocusStep: function(e, t) {
                            var i, r, o, a, s;
                            G.designer || D(e, "attributes.isAutoFocus") && (e = t.find("#pendo-guide-container"), (s = e[0]) && (t = ["a[href]:not([disabled])", "button:not([disabled])", "textarea:not([disabled])", 'input[type="text"]:not([disabled])', 'input[type="radio"]:not([disabled])', 'input[type="checkbox"]:not([disabled])', "select:not([disabled])", "[tabindex]", "iframe"].join(", "), (t = e.find(t)).length && (i = t[0], r = t[t.length - 1], t = function(e) {
                                var t = {
                                        margin: 0,
                                        padding: 0,
                                        outline: "none",
                                        border: "none",
                                        "box-shadow": "none",
                                        shadow: "none"
                                    },
                                    t = {
                                        type: "style",
                                        props: {
                                            type: "text/css",
                                            scoped: "scoped",
                                            id: "pendo-focus-bumper-styles" + Date.now()
                                        },
                                        css: [{
                                            selector: ".pendo-start-focus-bumper",
                                            styles: U.extend({}, t, {
                                                tabIndex: 0
                                            })
                                        }, {
                                            selector: ".pendo-start-focus-bumper:hover",
                                            styles: t
                                        }, {
                                            selector: ".pendo-start-focus-bumper:focus",
                                            styles: t
                                        }, {
                                            selector: ".pendo-end-focus-bumper",
                                            styles: U.extend({}, t, {
                                                tabIndex: 0
                                            })
                                        }, {
                                            selector: ".pendo-end-focus-bumper:hover",
                                            styles: t
                                        }, {
                                            selector: ".pendo-end-focus-bumper:focus",
                                            styles: t
                                        }]
                                    },
                                    t = Z.buildNodeFromJSON(t),
                                    t = (e.prepend(t), Jv.createElement("div")),
                                    n = (t.setAttribute("id", "pendo-start-focus-bumper-" + Date.now()), t.setAttribute("class", "pendo-start-focus-bumper"), t.setAttribute("tabIndex", 0), e.prepend(t), Jv.createElement("div"));
                                return n.setAttribute("id", "pendo-end-focus-bumper-" + Date.now()), n.setAttribute("class", "pendo-end-focus-bumper"), n.setAttribute("tabIndex", 0), e.append(n), [t, n]
                            }(e), o = t[0], a = t[1], C(s, "keyup", e = function(e) {
                                var t = "Tab" === e.key || 9 === e.keyCode,
                                    n = e.shiftKey;
                                t && (n ? Jv.activeElement === o && (r.focus(), e.preventDefault()) : (Jv.activeElement === s && (i.focus(), e.preventDefault()), Jv.activeElement === a && (i.focus(), e.preventDefault())))
                            }), C(s, "keydown", e))))
                        },
                        renderResourceCenterModule: function(e) {
                            $.replaceResourceCenterContent(e.id, qv, !0)
                        },
                        buildNodeFromJSON: i,
                        attachImgLoadHandlers: function(e, t) {
                            var n = e.id && -1 !== e.id.indexOf("badge"),
                                i = !!e.getAttribute("src"),
                                r = e.className && 0 <= e.className.indexOf("bb-control"),
                                o = e.tagName && e.tagName.toLowerCase();
                            ("img" === o && i && !n && !r || "iframe" === o && t) && (t.attributes && !t.attributes.imgCount ? t.attributes.imgCount = 1 : t.attributes && t.attributes.imgCount && t.attributes.imgCount++, Z.recalculateGuideHeightOnImgLoad(J(e), t))
                        },
                        recalculateGuideHeightOnImgLoad: function(e, i) {
                            e.on("load", function() {
                                var e, t = {},
                                    t = (!i.containerId && i.domJson && (t = r(i.domJson)), i.containerId || t.props && t.props.id || ""),
                                    n = t && Jv.getElementById(t);
                                i && i.attributes && i.attributes.imgCount && (i.attributes.imgCount--, n && i.attributes.imgCount <= 0 && (Z.recalculateGuideWidth(t), Z.adjustGuideContentWidth(t), Z.flexAllThings(t), D(e = i.getGuide(), "attributes.isAnnouncement") || "AnnouncementsModule" === D(e, "attributes.resourceCenter.moduleId") || Z.recalculateGuideHeight(t), n.style.visibility = "visible", "tooltip" === i.attributes.calculatedType && Z.positionStepForTooltip(i, i.domJson, n)))
                            }), e.on("error", function() {
                                var e = Jv.getElementById(i.containerId);
                                e ? e.style.visibility = "visible" : H("Failed to find guideContainer for id: " + i.containerId)
                            })
                        },
                        buildStyleString: function(e) {
                            var n = "";
                            return U.each(e, function(e, t) {
                                n = n + t + ":" + e + ";"
                            }), n
                        },
                        buildStyleTagContent: function(e) {
                            for (var n = "", t = 0; t < e.length; t++) n += e[t].selector + "{", U.each(e[t].styles, function(e, t) {
                                n = n + (t + ":") + e + "!important;"
                            }), n += "}";
                            return n
                        },
                        bindActionToNode: function(n, i, r) {
                            n.on(i.eventType, function(e) {
                                var t;
                                i.designerAction ? Ic.designerActions[i.action](n, i.parameters) : (t = {
                                    action: i.action,
                                    params: i.parameters,
                                    step: r,
                                    ignore: !!i.ignore,
                                    srcElement: e.srcElement
                                }, ("showElements" !== i.action && "hideElements" !== i.action || e.srcElement && e.srcElement.getAttribute("id") === i.source || e.target && e.target.getAttribute("id") === i.source) && r.eventRouter.eventable.trigger("pendoEvent", t))
                            })
                        },
                        recalculateGuideHeight: function(e) {
                            var t, n, i, r, o, a, s, u, d, e = Jv.getElementById(e);
                            e && (t = J(e), d = J(t.find("#pendo-guide-container")[0]), n = e.style.height, i = parseInt(n, 10), r = e.getAttribute("data-pendo-static-height"), t.css({
                                height: "auto"
                            }), r || d.css({
                                "max-height": "none"
                            }), o = parseInt(K(e).height, 10), a = io().height, s = parseInt(e.style.top, 10), s = isNaN(s) ? 0 : s, u = parseInt(e.style.bottom, 10), u = isNaN(u) ? 0 : u, (a = a - s - u) < o && (d.css({
                                "max-height": a + "px",
                                overflow: "auto"
                            }), o = a), o !== i ? (s = r && i ? i : o, t.css({
                                height: s + "px"
                            }), "Centered" !== (u = e.getAttribute("data-vertical-alignment")) && "Left Aligned" !== u && "Right Aligned" !== u || (d = a < o ? a : s, t.css({
                                "margin-top": "-" + d / 2 + "px"
                            }))) : t.css({
                                height: n
                            }))
                        },
                        recalculateGuideWidth: function(e) {
                            e = Jv.getElementById(e);
                            if (e) {
                                var t = e.getAttribute("data-pendo-mobile-layout");
                                if (!t) {
                                    var n = J(e),
                                        t = J(n.find("#pendo-guide-container")[0]),
                                        i = parseInt(e.style.width, 10),
                                        r = (t.css({
                                            "max-width": "none"
                                        }), n.css({
                                            "margin-right": "0px"
                                        }), parseInt(K(e).width, 10)),
                                        o = io().width,
                                        a = parseInt(e.style.left || 0, 10),
                                        s = parseInt(e.style.right || 0, 10),
                                        o = o - a - s;
                                    if (o < r && (t.css({
                                            "max-width": o + "px"
                                        }), r = o), !isNaN(i)) switch (e.getAttribute("data-vertical-alignment")) {
                                        case "Centered":
                                        case "Top Aligned":
                                        case "Bottom Aligned":
                                            var u = parseInt(n.css("margin-left"), 10),
                                                d = r / 2;
                                            u !== d && n.css({
                                                "margin-left": "-" + d + "px"
                                            });
                                            break;
                                        case "Right Aligned":
                                        case "Top Right Aligned":
                                        case "Bottom Right Aligned":
                                            u = parseInt(n.css("margin-right"), 10), d = i - r;
                                            u !== d && n.css({
                                                "margin-right": "-" + d + "px"
                                            })
                                    }
                                }
                            }
                        },
                        adjustGuideContentWidth: function(e) {
                            var t, e = Jv.getElementById(e);
                            e && !e.getAttribute("data-pendo-mobile-layout") && (t = e = J(e).find("#pendo-guide-container")[0], (t = J(['[class*="_pendo-text-"]:not([class*="_pendo-resource-center-"])', '.pendo-mock-flexbox-element > [class*="_pendo-button-"]', "._pendo-multi-choice-poll-select"].join(","), t)) && t.length && U.each(t, function(e) {
                                var t, e = J(e),
                                    n = l(e[0]),
                                    n = n.marginLeft + n.marginRight,
                                    i = d(e);
                                i && (t = i.paddingLeft + i.paddingRight, s(e, i.width - n - t))
                            }), (t = J("._pendo-open-text-poll-input", t = e)) && t.length && U.each(t, function(e) {
                                var t, n = J(e),
                                    i = n.attr("data-_pendo-open-text-poll-resize-base-width"),
                                    e = (i || (i = e.style.width, n.attr("data-_pendo-open-text-poll-resize-base-width", i)), l(n[0])),
                                    r = e.marginLeft + e.marginRight,
                                    o = d(n);
                                o && (t = o.paddingLeft + o.paddingRight, o = o.width - r - t, -1 !== i.indexOf("%") && u(n, e.width, i, o), -1 === i.indexOf("%") && (i = parseInt(i, 10)) < o && n.css({
                                    width: i
                                }), s(n, o))
                            }), t = e, (t = J(["._pendo-video", "._pendo-image"].join(","), t)) && t.length && U.each(t, function(e) {
                                var t = J(e),
                                    n = l(t[0]),
                                    i = n.width,
                                    n = n.marginLeft + n.marginRight,
                                    r = t.attr("data-_pendo-media-resize-base-width"),
                                    e = (r || (r = e.style.width, t.attr("data-_pendo-media-resize-base-width", r)), -1 !== r.indexOf("%"));
                                if (t.hasClass("_pendo-image")) {
                                    var o = e && 100 < parseInt(r, 10),
                                        a = t.attr("data-pendo-accessible-element");
                                    if (o || !a) return void t.css({
                                        width: i
                                    });
                                    t.css({
                                        height: "auto"
                                    })
                                }
                                o = d(t);
                                o && (a = o.width - (o.paddingLeft + o.paddingRight) - n, e && u(t, i, r, a), s(t, a))
                            }))
                        },
                        findDomBlockInDomJson: function a(e, t) {
                            if (t(e)) return e;
                            if (!e.children) return !1;
                            for (var n = 0; n < e.children.length; n++) {
                                var i = a(e.children[n], t);
                                if (i) return i
                            }
                            return !1
                        },
                        isElementHiddenInGuide: function(e) {
                            o(e);
                            var t = V(e);
                            if (0 === t.width || 0 === t.height) return !0;
                            if (!e.style || "visible" !== e.style.visibility)
                                for (var n = e, i = e.id || "", r = 0; 0 !== i.indexOf("pendo-g-") && (o(n), n = n.parentNode, i = n.id || "", !(10 < ++r)););
                            return !1
                        },
                        positionStepForTooltip: p,
                        flexAllThings: function(e) {
                            e = Jv.getElementById(e);
                            e && (t(e), Z.flexElement(e))
                        },
                        flexElement: function(e) {
                            e = J("[data-pendo-display-flex]", e);
                            U.each(e, function(e) {
                                var t = h.initializeFlexElements(e),
                                    n = e.getAttribute("data-pendo-justify-content"),
                                    e = e.getAttribute("data-row-vertical-alignment");
                                h.initializeFlexRows(t, n, e)
                            })
                        },
                        findTopLevelContainer: function(t) {
                            for (var e = ["pendo-base", "pendo-resource-center-container"], n = 0; n < 20; n++) {
                                if (U.find(e, function(e) {
                                        return t.id === e
                                    })) return t;
                                if (t === Jv.body) return Jv.body;
                                t.parentNode && (t = t.parentNode)
                            }
                            return Jv.body
                        },
                        updateBackdrop: v,
                        buildNodesFromJSON: function(e, t, n) {
                            if (e && e.templateName) return kl.buildNodesFromTemplate(e.templateName, e, t, n);
                            return G.designer || "style" !== e.type || !y.get("disableGuidePseudoStyles") ? [i(e, t, n)] : []
                        },
                        findGuideContainerJSON: r,
                        maintainAspectRatios: t,
                        sizeElement: f,
                        getAllowedAttributes: g,
                        repositionFlexElementsInFullWidthGuides: function() {},
                        isBuildingBlockGuideRelativeToElement: function(e) {
                            return !(!e.domJson || !U.isObject(e.domJson)) && (!!(e = r(e.domJson)) && "Relative to Element" === e.props["data-vertical-alignment"])
                        },
                        updateAriaLabelledbyForActiveFollowupQuestion: function(e) {
                            var t = D(e, "value", ""); {
                                var n; - 1 !== D(e, "parentElement.className", "").indexOf("_pendo-nps-poll-" + t + "-wrapper") && (e = J("._pendo-nps-open-text-poll-question"), n = J("._pendo-nps-open-text-poll-input")[0], U.forEach(e, function(e) {
                                    "none" !== D(e, "style.display", "none") && n && n.setAttribute("aria-labelledby", e.id)
                                }))
                            }
                        }
                    };

                    function r(e) {
                        return e.props && e.props.id && 0 === e.props.id.indexOf("pendo-g-") ? e : e.children ? U.find(e.children, r) : void 0
                    }

                    function f(e, t) {
                        for (var n = e.parentNode.children, i = 0, r = 0; r < n.length; r++) n[r] !== e && (i += n[r].offsetHeight);
                        t = t.offsetHeight, t = Math.max(t - i, 0);
                        e.style.height = t + "px"
                    }

                    function c(e, t, n, i) {
                        e = 'illegal building block key "' + e + '" found on guide "' + t + '" step "' + n + '"';
                        throw i && (e += ' for node type "' + i + '"'), H(e), new Error(e)
                    }

                    function g(n, i, r, o) {
                        var a = {
                                allow: !0,
                                allowfullscreen: !0,
                                alt: !0,
                                "alt-text": !0,
                                autofocus: !0,
                                "class": !0,
                                cols: !0,
                                contenteditable: !0,
                                dir: !0,
                                "for": !0,
                                frameborder: !0,
                                href: !0,
                                id: !0,
                                name: !0,
                                placeholder: !0,
                                placement: !0,
                                rows: !0,
                                role: !0,
                                sandbox: !0,
                                scoped: !0,
                                src: !0,
                                start: !0,
                                style: !0,
                                tabindex: !0,
                                target: !0,
                                title: !0,
                                type: !0,
                                value: !0
                            },
                            s = {
                                embed: {
                                    src: !0
                                }
                            },
                            u = /^data-/,
                            d = /^aria-/,
                            e = U.keys(n);
                        return U.reduce(e, function(e, t) {
                            return s[o] && s[o][t] && c(t, r, i, o), a[t] || u.test(t) || d.test(t) || c(t, r, i), e[t] = n[t], e
                        }, {})
                    }

                    function i(n, i, e) {
                        i = i || {
                            id: "unknown",
                            guideId: "unknown"
                        }, n.props = g(n.props, i.id, i.guideId, n.type);
                        var r = J("<" + n.type + "></" + n.type + ">");
                        if ("pendo-backdrop" !== (n.props && n.props.id)) {
                            if (U.each(n.props, function(e, t) {
                                    "style" === t ? r.css(n.props.style) : "data-pendo-code-block" !== t || !0 !== e || y.get("preventCodeInjection") ? r.attr(t, e) : r.addClass("pendo-code-block").html(i.getContent())
                                }), n.content && r.text(n.content), "style" === n.type && (G.designer || (n.css = function(e) {
                                    for (var t = ["button:focus"], n = [], i = 0; i < e.length; i++) U.contains(t, e[i].selector) || n.push(e[i]);
                                    return n
                                }(n.css)), r.styleSheet ? r.styleSheet.cssText = Z.buildStyleTagContent(n.css) : r.text(Z.buildStyleTagContent(n.css))), n.svgWidgetId && Ol.buildSvgNode(n.svgWidgetId, n).appendTo(r), n.actions && n.actions.length)
                                for (var t, o = 0; o < n.actions.length; o++) Z.bindActionToNode(r, n.actions[o], i), "renderGuidesListItem" === n.actions[o].action && ((t = x(n.actions[o].parameters[0])) ? r.text(t.name) : r.attr("style", "display: none;"));
                            if (U.find(n.actions, function(e) {
                                    return "dismissGuide" === e.action
                                }) && !i.hasEscapeListener && (i.hasEscapeListener = !0, i.attachEvent(Wv, "keyup", function(e) {
                                    27 === e.keyCode && i.eventRouter.eventable.trigger("pendoEvent", {
                                        step: i,
                                        action: "dismissGuide"
                                    })
                                }, !0)), n.children)
                                for (var a = 0; a < n.children.length; a++) {
                                    var s = Z.buildNodesFromJSON(n.children[a], i, e);
                                    U.each(s, function(e) {
                                        e && e.appendTo(r)
                                    })
                                }
                            return r.hasClass("pendo-code-block") ? r.find("img,iframe").each(function(e) {
                                Z.attachImgLoadHandlers(e, i)
                            }) : Z.attachImgLoadHandlers(r[0], i), r
                        }
                        i.attributes && i.attributes.blockOutUI && i.attributes.blockOutUI.enabled && (h = U.throttle(U.partial(v, i), 10), i.attachEvent(Wv, "scroll", h, !0));
                        var u, d, c, l, f, p, h = i;
                        try {
                            if (!(0 < J("._pendo-guide-backdrop_").length)) return u = m(h), d = D(h, "attributes.blockOutUI.padding", {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }), c = Ed(u, d), l = {
                                "z-index": 1e4,
                                position: "fixed"
                            }, f = [], U.each(c.overlays, function(e, t) {
                                t = function(e, t) {
                                    var n = J("div.pendo-backdrop-region-" + e);
                                    n.length || (n = J('<div class="pendo-backdrop-region-' + e + '"></div>'));
                                    return J(n).css(t).attr("pendo-region", e), n
                                }(t, U.extend({}, e, l));
                                f.push(t)
                            }), p = function(e, t) {
                                var i = function o(e, t) {
                                        if (t.props && t.props.id === e) return t;
                                        if (t.children)
                                            for (var n = 0; n < t.children.length; n++) {
                                                var i = o(e, t.children[n]);
                                                if (i) return i
                                            }
                                    }("pendo-backdrop", t.domJson),
                                    r = (U.each(["left", "right", "width", "height", "bottom", "top"], function(e) {
                                        delete i.props.style[e]
                                    }), J('<div class="_pendo-guide-backdrop_">'));
                                return U.each(i.props, function(t, n) {
                                    U.each(e, function(e) {
                                        "style" === n ? e.css(i.props.style) : "class" === n ? e.addClass(t) : e.attr(n, t), r.append(e)
                                    })
                                }), r
                            }(f, h), h.backdrop = p[0], p
                        } catch (Ce) {
                            H("Failed to add BlockOut ui", "error")
                        }
                    }

                    function p(e, t, n) {
                        oc.createBBTooltip(t, e.element, e, n), e.hasBeenScrolledTo || (Co(e.element), Pd(e.element, n, e.attributes.layoutDir), e.hasBeenScrolledTo = !0)
                    }

                    function t(e) {
                        var n = "data-aspect-ratio",
                            e = J("[" + n + "]", e);
                        U.each(e, function(e) {
                            var t = e.getAttribute(n).split(":"),
                                t = 1 < t.length ? parseInt(t[0], 10) / parseInt(t[1], 10) : parseFloat(t[0]);
                            isNaN(t) || (e.style.height = e.offsetWidth / t + "px")
                        })
                    }

                    function o(e) {
                        e.style && "none" === e.style.display || e.style && "0" === e.style.opacity || e.style && e.style.visibility
                    }

                    function s(e, t) {
                        e.css({
                            "max-width": "none"
                        }), t <= l(e[0]).width && e.css({
                            "max-width": t
                        })
                    }

                    function u(e, t, n, i) {
                        var r = -1 !== e[0].style.width.indexOf("%"),
                            i = i * (parseInt(n, 10) / 100);
                        (r || t < i) && e.css({
                            width: i < 0 ? 0 : i
                        })
                    }

                    function d(e) {
                        e = e.closest("._pendo-row");
                        if (e) {
                            e = K(e[0]);
                            if (e) return {
                                width: parseFloat(e.width),
                                paddingLeft: parseInt(e.paddingLeft, 10),
                                paddingRight: parseInt(e.paddingRight, 10)
                            }
                        }
                    }

                    function l(e) {
                        e = K(e);
                        return {
                            width: parseFloat(e.width),
                            marginLeft: parseInt(e.marginLeft || 0, 10),
                            marginRight: parseInt(e.marginRight || 0, 10)
                        }
                    }

                    function m(e) {
                        var t = [],
                            n = D(e, "attributes.blockOutUI", {});
                        if (n.additionalElements = n.additionalElements || "", n.enabled && e.element !== po()) {
                            t.push(e.element);
                            for (var i = n.additionalElements.replace(/\s/g, "").split(","), r = 0; r < n.additionalElements.length; r++) try {
                                var o = J(i[r]);
                                o && U.each(o, function(e) {
                                    t.push(e)
                                })
                            } catch (Ce) {
                                H("Additional element for blockOutUI is invalid selector", "error")
                            }
                        }
                        return t
                    }

                    function v(e) {
                        try {
                            var t = Ed(m(e), D(e, "attributes.blockOutUI.padding", {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }));
                            (zd(t.viewport) || Dd(t.box) || Jd(t.overlays)) && U.each(e.backdrop.children, function(n) {
                                var e = n.getAttribute("pendo-region"),
                                    e = t.overlays[e];
                                U.each(e, function(e, t) {
                                    n.style[t] = e + "px"
                                })
                            })
                        } catch (Ce) {
                            H("Failed to update BlockOut ui", "error")
                        }
                    }
                }(),
                Nl = function() {
                    var n = this,
                        o = (this.eventable = kn.call({}), this.eventable.on("pendoEvent", function(e) {
                            try {
                                n.eventHandler(e)
                            } catch (t) {
                                c(t, "Error in Action " + (e && e.action || "NO ACTION DEFINED"))
                            }
                        }), this.eventHandler = function(e) {
                            if (!e.ignore) switch (e.action) {
                                case o.advanceGuide:
                                    kh(e, e.step);
                                    break;
                                case o.previousStep:
                                    Oh(e, e.step);
                                    break;
                                case o.goToStep:
                                    Rh(e);
                                    break;
                                case o.submitPoll:
                                    this.submitPoll(e);
                                    break;
                                case o.guideSnoozed:
                                    var t = e && e.params && e.params[0] && e.params[0].value;
                                    Th(e, e.step, t);
                                    break;
                                case o.dismissGuide:
                                    $.attemptToPreserveIntegrationIframes(e), ! function(e) {
                                        if (!e || !e.step) return _h();
                                        var t = e.step.getGuide();
                                        if (t && t.attributes && t.attributes.resourceCenter) return $.dismissResourceCenter(t);
                                        _h(e, e.step)
                                    }(e);
                                    break;
                                case o.showElements:
                                    this.setElementDisplay(e, "block"), e.srcElement && Z.updateAriaLabelledbyForActiveFollowupQuestion(e.srcElement), n = Z.findGuideContainerJSON(e.step.domJson), Z.recalculateGuideWidth(n.props.id), Z.adjustGuideContentWidth(n.props.id), Z.flexAllThings(n.props.id), Z.recalculateGuideHeight(n.props.id);
                                    break;
                                case o.hideElements:
                                    this.setElementDisplay(e, "none"), n = Z.findGuideContainerJSON(e.step.domJson), Z.recalculateGuideWidth(n.props.id), Z.adjustGuideContentWidth(n.props.id), Z.flexAllThings(n.props.id), Z.recalculateGuideHeight(n.props.id);
                                    break;
                                case o.slideElement:
                                    this.setElementAnimation(e);
                                    break;
                                case o.showGuide:
                                    t = U.find(e.params, function(e) {
                                        return "reason" === e.name
                                    });
                                    dg(e.params[0].value, t && t.value);
                                    break;
                                case o.launchGuide:
                                    G.designer || (_h(e, e.step), e && e.params && e.params[0] && e.params[0].value && dg(e.params[0].value));
                                    break;
                                case o.renderResourceCenterModule:
                                    $.replaceResourceCenterContent(e.params[0].value);
                                    break;
                                case o.returnToResourceCenterHome:
                                    var n = $.findResourceCenterHomeView(G.guides);
                                    n && ($.attemptToPreserveIntegrationIframes(e), $.replaceResourceCenterContent(n.id, e.params));
                                    break;
                                case o.openLink:
                                    G.designer || this.openLink(e);
                                    break;
                                case o.searchGuides:
                                    this.searchGuides(e);
                                    break;
                                case o.submitPollAndGoToStep:
                                    this.submitPoll(e), Rh(e)
                            }
                        }, this.submitPoll = function(e) {
                            var t = e && e.action,
                                i = e.step,
                                n = [];
                            e.srcElement && e.srcElement.getAttribute("data-pendo-poll-type") && "yesNo" === e.srcElement.getAttribute("data-pendo-poll-type") && (r = e.srcElement.getAttribute("data-pendo-poll-id"), e = e.srcElement.value, n.push({
                                pollId: r,
                                value: parseInt(e, 10)
                            }));
                            var r = J("[data-pendo-poll-id]", i.guideElement[0]);
                            n = n.concat(U.map(r, function(e) {
                                var t, n = J("textarea,input:text,select,input:radio:checked", e);
                                if (n && n.length && n[0].value) return t = e.getAttribute("data-pendo-poll-id"), e = U.find(i.guide.polls, function(e) {
                                    return e.id === t
                                }), n = n[0].value, e && e.numericResponses && (n = parseInt(n, 10)), {
                                    pollId: t,
                                    value: n
                                }
                            })), i.response && n ? i.response(U.compact(n)) : H("[Agent] Error! Trying to submit a poll response but step does not have response function!");
                            t !== o.submitPollAndGoToStep && i.advance()
                        }, this.setElementDisplay = function(e, t) {
                            var n = e.step,
                                e = J(U.find(e.params, function(e) {
                                    return "selectors" === e.name
                                }).value, n.guideElement[0]);
                            U.each(e, function(e) {
                                e.style.display = t
                            })
                        }, this.setElementAnimation = function(e) {
                            var t = J(U.find(e.params, function(e) {
                                    return "selector" === e.name
                                }).value, e.step.guideElement[0])[0],
                                n = U.find(e.params, function(e) {
                                    return "transition" === e.name
                                }).value,
                                e = U.find(e.params, function(e) {
                                    return "left" === e.name
                                }).value;
                            t.style.transition = n, t.style.left = e
                        }, this.openLink = function(e) {
                            var t = U.find(e.params, function(e) {
                                    return "url" === e.name
                                }).value,
                                e = U.find(e.params, function(e) {
                                    return "target" === e.name
                                }).value;
                            "_self" === e && ra() && (e = "_top");
                            Wv.open(t, e)
                        }, this.goToStep = Rh, this.searchGuides = function(e) {
                            var t = "",
                                n = e.srcElement.value,
                                i = J("#pendo-resource-center-container")[0],
                                r = J(i).find('[id^="pendo-list-item-"]'),
                                i = J(i).find('[id^="pendo-no-matches-container"]'),
                                o = [],
                                e = U.find(e.params, function(e) {
                                    return "searchTextInfo" === e.name
                                }),
                                a = (J(i[0].childNodes[0]).text(e.value), !0);
                            if (r)
                                for (var s in r) s && r[s] && (J(r[s]).text() && (-1 !== J(r[s]).text().toLowerCase().indexOf(n.toLowerCase()) ? (J(r[s]).css({
                                    display: "list-item"
                                }), a = !1) : J(r[s]).css({
                                    display: "none"
                                })), U.isFunction(r[s].getAttribute) && (t = r[s].getAttribute("data-_pendo-text-list-item-1").split(","), U.forEach(t, function(e) {
                                    U.contains(o, e) || o.push(e)
                                })), this.searchAllTerms(o, t, n) && r[s] && (J(r[s]).css({
                                    display: "list-item"
                                }), a = !1), t = "");
                            a ? J(i[0]).css({
                                display: "block"
                            }) : J(i[0]).css({
                                display: "none"
                            })
                        }, this.searchAllTerms = function(t, e, n) {
                            return !!e && e.some(function(e) {
                                return U.contains(t, e) && e === n
                            })
                        }, {
                            advanceGuide: "advanceGuide",
                            previousStep: "previousStep",
                            goToStep: "goToStep",
                            submitPoll: "submitPoll",
                            guideSnoozed: "guideSnoozed",
                            dismissGuide: "dismissGuide",
                            showElements: "showElements",
                            hideElements: "hideElements",
                            slideElement: "slideElement",
                            showGuide: "showGuide",
                            launchGuide: "launchGuide",
                            renderResourceCenterModule: "renderResourceCenterModule",
                            returnToResourceCenterHome: "returnToResourceCenterHome",
                            openLink: "openLink",
                            searchGuides: "searchGuides",
                            submitPollAndGoToStep: "submitPollAndGoToStep"
                        });
                    return this
                },
                Ll = "_pendo-launcher-searching_";

            function Ml() {
                var t = {
                    text: "",
                    highlight: function(e) {
                        return t.text ? (e || "").replace(new RegExp(t.text, "gi"), "<strong>$&</strong>") : e
                    },
                    clear: function() {
                        J(zl).each(function() {
                            this.value = ""
                        })
                    }
                };
                return this.data && this.data.enableSearch && this.data.enableSearch && (this.data.search = t, G.disableGuideCenterContentSearch || this.before("update", Gl), this.before("update", function() {
                    t.text = Bl().join(" ");
                    var e = J("._pendo-launcher_");
                    t.text ? e.addClass(Ll) : e.removeClass(Ll)
                })), this
            }

            function Fl() {
                var e;
                if (G.guideWidget) return (e = G.guideWidget.data) && e.enableSearch
            }

            function Pl() {
                return 0 < Bl().length
            }

            function Bl() {
                var e;
                return Fl() && (e = J(zl)[0]) && 0 < (e = e.value).length ? (e = lt.call(e), [].concat(U.compact(e.split(" ")))) : []
            }

            function Gl(e) {
                if (!y.get("disablePrefetch")) return z.all(U.map(e, function(e) {
                    return e.fetchContent()
                }))
            }

            function Ul(e) {
                var t = Bl();
                return 0 === t.length ? e : (t = U.map(t, U.partial(Dl, e)), U.union.apply(U, t))
            }

            function Dl(e, t) {
                return H("doing search on " + t, "launcher", "search", "guides"), e = e || g(), t && 0 !== t.length ? U.chain(e).filter(gf).map(function(e) {
                    return e.searchFor(t)
                }).compact().sortBy(function(e) {
                    return U.indexOf(["tag", "name", "content"], e.field)
                }).pluck("guide").value() : e
            }
            var Hl = "_pendo-launcher-search-box_",
                zl = "." + Hl + " input",
                jl = 330,
                Wl = 310,
                a = null,
                Jl = null,
                ql = !1,
                Kl = null,
                Vl = "_pendo-launcher-active_",
                Zl = null,
                $l = function() {
                    return ""
                };

            function Yl(e, t) {
                $l = t
            }

            function Xl(e) {
                return Ul(U.filter(e || g(), gf))
            }

            function Ql(e) {
                return It(U.map(e, function(e) {
                    var t = e.isWhatsNew() ? [] : U.pluck(e.steps, "seenState");
                    return {
                        id: e.id,
                        seenState: t
                    }
                }))
            }

            function ef(e) {
                var n = this,
                    t = e.launchType || "badge",
                    i = (U.extend(n, {
                        show: function() {
                            "badge" === t && J(n.element).css("display: ;")
                        },
                        hide: function() {
                            J(n.element).css("display: none;")
                        },
                        wrap: function() {
                            var e = n.element; {
                                var t;
                                e && /^img$/i.test(e.nodeName) && (t = J("<div>").addClass(e.className).append(e).appendTo(Pu()), e.className = "", n.element = t[0])
                            }
                        },
                        dispose: function() {
                            J.removeNode(n.element)
                        },
                        setActive: function(e) {
                            e ? J(n.element).addClass(Vl) : J(n.element).removeClass(Vl)
                        }
                    }), e),
                    e = i.position || "bottom-right",
                    r = Jv.createElement("img");
                J(n.element = r).addClass("_pendo-launcher-badge_").addClass("_pendo-launcher-badge-" + e + "_"), i.launcherBadgeUrl && (r.src = sc(i.launcherBadgeUrl)), r.onerror = function(e) {
                    H("[Agent] Error! Unable to load guide center image " + i.launcherBadgeUrl), c({
                        imgSrc: i.launcherBadgeUrl
                    }, "ERROR in when attempting to render guide center badge image")
                }, Ye() && (C(r, "mouseover", function(e) {
                    J(r).addClass("_pendo-launcher-badge-active_")
                }), C(r, "mouseout", function(e) {
                    J(r).removeClass("_pendo-launcher-badge-active_")
                }), J(r).css({
                    position: "absolute"
                })), Pu().appendChild(r)
            }

            function tf(e) {
                function n() {
                    return "element" === e.launchType && e.launchElement ? e.launchElement : "._pendo-launcher-badge_"
                }

                function t(e) {
                    var e = bi(e),
                        t = n();
                    J(e).closest(t).length && (xf() ? d.write("launcher-closed", "yes", 864e6) : G.guideWidget.position(e), Tf())
                }
                G.guideWidget.removeCountBadge = function() {
                    J("._pendo-launcher-whatsnew-count_").remove()
                }, e && e.elementMatch && (e.launchElement = e.elementMatch.selection), U.extend(this, {
                    getLauncherTarget: function() {
                        return J(n())[0]
                    },
                    dispose: function() {
                        m(Jv, "click", t), e && e.whatsnew && e.whatsnew.enabled && Af()
                    }
                }), C(Jv, "click", t)
            }

            function nf() {
                var n, s = "bottom-right",
                    u = "bottom-left";
                return this.update = function(e, t) {
                    t = t ? e : Xl(e), e = Ql(t) + It(Bl());
                    return e !== n && (n = e, this.updateLauncherContent(t)), ff(), 0 < t.length
                }, this.updateLauncherContent = bf, this.guideStatus = function(e) {
                    return e.isComplete() ? "complete" : e.isInProgress() ? "in-progress" : "not-started"
                }, this.render = function() {
                    var e = this.data || {},
                        t = (a = new ef(e), e.height || Wl),
                        n = (e.enableSearch && (t += Ye() ? 50 : 39), this && !this.hidePoweredBy && (t += 40), e.addHeight && (t += e.addHeight), this.height = t, e.width || jl),
                        i = (e.addWidth && (n += e.addWidth), this.width = n, J("<div>").addClass("_pendo-launcher_")),
                        r = (Jl = i[0], ao(a.element)),
                        r = Qd(r, t, n),
                        o = (i.css({
                            width: n,
                            height: t
                        }), G.TOOLTIP_ARROW_SIZE),
                        n = J("<div/>").addClass("_pendo-guide-container_ " + r.arrowPosition).addClass("_pendo-guide-container-" + r.arrowPosition + "_").css({
                            top: o,
                            left: o,
                            width: n - 2 * o,
                            height: t - 2 * o
                        }).appendTo(i),
                        t = yf(),
                        o = sc(af(this.template(t))),
                        t = J("<div/>").addClass("_pendo-guide-content_").html(o).appendTo(n);
                    e.addUISection && e.addUISection(i[0]), gh(i[0], function() {
                        Tf(), d.write("launcher-closed", "yes", 288e5)
                    }), t.on("click", function(e) {
                        var t = J(bi(e)).closest("._pendo-launcher-item_");
                        t && t.length && ((t = x((t = /^launcher-(.+)$/.exec(lt.call(t.attr("id")))) && t[1])) && !t.isWhatsNew() && (zh(t.steps[0], "launcher"), Tf(), ku(e)))
                    }), Ye() && (J("._pendo-launcher-header_", i).css({
                        padding: "10px",
                        "margin-right": "10px",
                        "margin-left": "10px"
                    }), J("._pendo-launcher-footer_", i).css({
                        "border-top": "1px solid #bbb"
                    }), i.css({
                        position: "absolute"
                    })), i.find("[pendo-style]").each(function() {
                        var e = this.getAttribute("pendo-style");
                        J(this).css(e)
                    }), i.appendTo(Pu()), U.isFunction(this.script) && this.script(this), e.autoHeight && e.autoHeight.enabled && !Te(9, 6) && (o = e.autoHeight.offset || 100, i.css({
                        height: "calc(100% - " + o + "px)",
                        maxHeight: e.height,
                        minHeight: e.height / 2
                    }), J("._pendo-guide-container_." + r.arrowPosition).css({
                        maxHeight: e.height - 30,
                        minHeight: e.height / 2 - 30,
                        height: "calc(100% - 30px)"
                    }))
                }, this.position = function(e) {
                    var t, n, i, r, o, a;
                    e && (t = this.data, e = ao(e), n = Qd(e, this.height, this.width), i = J(Jl), "badge" === (r = t.launchType || "badge") ? (o = t.position, U.indexOf(a = [s, u, "top-left", "top-right"], t.position) < 0 && (o = s), U.each(a, function(e) {
                        i.removeClass("_pendo-launcher-" + e + "_")
                    }), i.addClass("_pendo-launcher-" + o + "_"), n.arrow = n.arrow || {}, n.arrowPosition = U.contains([s, u], o) ? "bottom" : "top", n.arrow.hbias = U.contains([u, "top-left"], o) ? "left" : "right", n.arrow.floating = !1) : "element" === r && i.css({
                        top: n.top,
                        left: n.left,
                        height: n.height,
                        width: n.width,
                        position: e.fixed ? "fixed" : "absolute"
                    }), J("._pendo-guide-arrow_,._pendo-guide-arrow-border_", i).remove(), nc(n, e, {
                        width: Infinity,
                        height: Infinity
                    }), Fd(i[0], n), i.find("._pendo-guide-container_").removeClass("top left bottom right").addClass(n.arrowPosition))
                }, this.toggle = Tf, this
            }

            function rf() {
                var n, i = this;
                return i.data && i.data.onboarding && (n = i.onboarding = i.onboarding || {}, i.before("update", function(e) {
                    var e = U.filter(e, El),
                        t = U.filter(e, function(e) {
                            return "complete" == i.guideStatus(e)
                        }),
                        e = n.total = e.length,
                        t = (n.percentComplete = 0 < e ? Math.round(t.length / e * 100) : 0, J("._pendo-launcher_,._pendo-launcher-badge_"));
                    e ? (t.addClass("onboarding"), t.addClass("_pendo-launcher-onboarding_")) : (t.removeClass("onboarding"), t.removeClass("_pendo-launcher-onboarding_"))
                }), i.getOnboardingState = function(e) {
                    return e.isComplete() ? "complete" : e.isInProgress() ? "in-progress" : e.isNotStarted() ? "not-started" : null
                }), i
            }

            function of () {
                var n = this,
                    i = J("<div>").addClass("_pendo-launcher-whatsnew-count_");
                return n.data && n.data.whatsnew && n.data.whatsnew.enabled && (n.before("updateLauncherContent", function(e) {
                    e = U.filter(e, function(e) {
                        return e.isWhatsNew()
                    });
                    e.sort(t), n.data.whatsnew.total = e.length, n.data.whatsnew.guides = e
                }), n.after("update", function(e) {
                    var t = n.data.whatsnew.guides,
                        t = (U.each(t, function(e) {
                            e.show()
                        }), U.find(t, function(e) {
                            if (!e.isReady()) return !0;
                            e.addToLauncher()
                        }), U.filter(t, function(e) {
                            return "active" !== e.steps[0].seenState
                        }).length);
                    t !== n.data.whatsnew.unseenCount && (i.html(t).css({
                        display: t ? "" : "none"
                    }), n.data.whatsnew.unseenCount = t, J("span._pendo-launcher-whatsnew-count_").text(n.data.whatsnew.unseenCount))
                }), n.after("render", function() {
                    mf() ? i.appendTo(this.data.launchElement) : (a.wrap(), i.appendTo(a.element))
                })), n;

                function t(e, t) {
                    var n = function(e, t) {
                        e = e.showsAfter || e.publishedAt || 0;
                        return (t.showsAfter || t.publishedAt || 0) - e
                    }(e, t);
                    return 0 === n ? (t = t, e = (e = e).name.toLowerCase(), (t = t.name.toLowerCase()) < e ? 1 : e < t ? -1 : 0) : n
                }
            }

            function af(e) {
                return e = U.isString(e) ? e.replace(/\s+(style)=/gi, " pendo-style=") : e
            }

            function sf(e, t) {
                var n = e && e.data,
                    t = U.filter(t, function(e) {
                        e = U.first(e.steps);
                        return e && "launcher" === e.type
                    }),
                    t = U.first(U.sortBy(t, function(e) {
                        return -e.lastUpdatedAt
                    }));
                return t && n && (t = U.first(t.steps), U.extend(n, U.pick(t, "contentUrl", "contentUrlCss", "contentUrlJs"), t.attributes), U.defaults(n, {
                    whatsnew: {},
                    knowledgebase: {}
                }), n.id = t.guideId + t.id), e
            }

            function uf(t) {
                var n = t && t.data || {};
                return !0 !== y.get("preventCodeInjection") && (n.contentUrlJs || n.contentUrl) ? ud.verify(n).then(function() {
                    return fc.load(n)
                }).then(function(e) {
                    return n.template = e.content, U.extend(t, e)
                }) : z.resolve()
            }

            function df(e, t) {
                var n = y.getLocalConfig("contentHost");
                return n && (e = (e = e.replace(/^pendo-static-\d+\.storage\.googleapis\.com$/, n).replace(/^pendo-\w+-static\.storage\.googleapis\.com$/, n).replace(/^cdn\.pendo\.io$/, n)).replace(/^https?:/, "").replace(/^\/\//, ""), !/\./.test(e) && !/^localhost/.test(e) && /^\//.test(e)) ? t.host + e : e
            }

            function cf(e, t) {
                var n;
                if (!ql) return e.contentHostUrl && (e.contentHostUrl = df(e.contentHostUrl, location)), Zl = new tf(e), n = nf.create(G.guideWidget), U.isFunction(n.template) || (n.template = e.template ? U.template(e.template) : $l), n.render(), n.position(Zl.getLauncherTarget()), t && n.toggle(), n
            }
            nf.create = function(e) {
                return U.reduce(nf.behaviors, function(e, t) {
                    return t.call(e)
                }, e)
            }, nf.behaviors = [rl, nf, dd.Launcher, Ml, rf, of ];
            var lf = function() {
                    Jl && (J.removeNode(Jl), Jl = null), Zl && (Zl.dispose(), Zl = null), a && (a.dispose(), a = null)
                },
                ff = function() {
                    (mf() || !Cf() && !Pl() ? hf : pf)()
                },
                pf = function() {
                    a && a.show()
                },
                hf = function() {
                    mf() || Ef(), a && a.hide()
                },
                gf = function(e) {
                    return e && U.isFunction(e.shouldBeAddedToLauncher) ? e.shouldBeAddedToLauncher() : e && e.launchMethod && 0 <= e.launchMethod.indexOf("launcher")
                },
                mf = function() {
                    return !(!G.guideWidget || !G.guideWidget.data || "element" !== G.guideWidget.data.launchType)
                },
                vf = function(e, t) {
                    if (G.guideWidget && U.isFunction(G.guideWidget.update)) return G.guideWidget.update(e, t)
                },
                yf = function(e) {
                    var t = nd(),
                        t = (U.isObject(t) || (t = Ku()), U.extend({
                            hidePoweredBy: !1,
                            guides: [],
                            guide: {},
                            step: {},
                            metadata: yt(t)
                        }, G.guideWidget));
                    return t.data = U.extend({}, t.data), e && (t.guides = e), t
                };

            function bf(e) {
                var t = G.guideWidget.template || $l,
                    e = yf(e),
                    e = J("<div>").html(af(t(e))),
                    n = e.find("._pendo-launcher-guide-listing_"),
                    t = e.find("._pendo-launcher-footer_").html(),
                    e = e.find("._pendo-launcher-search-results_").html();
                J("._pendo-launcher_ ._pendo-launcher-guide-listing_").each(function(e, t) {
                    J(e).html(n.eq(t).html())
                }), J("._pendo-launcher_ ._pendo-launcher-footer_").html(t), J("._pendo-launcher_ ._pendo-launcher-search-results_").html(e)
            }
            var wf = function(e) {
                    var t = Jv.createElement("div"),
                        n = (J(t).addClass("_pendo-launcher-item_"), J(t).attr("id", "launcher-" + e.id), Jv.createElement("a"));
                    return n.href = "#", n.innerHTML = e.name, t.appendChild(n), t
                },
                If = U.compose(ff, function(e, t) {
                    var n, i;
                    !gf(e) || (n = J("._pendo-launcher_ ._pendo-launcher-guide-listing_")[0]) && (e = (i = J("#launcher-" + e.id)).length ? i[0] : wf(e), i = 0 < i.length, U.isNumber(t) && (i = J("._pendo-launcher-item_"))[t] ? e.id != i[t].id && n.insertBefore(e, i[t]) : n.appendChild(e))
                }),
                Sf = function() {
                    return !!Jl && !ql
                },
                xf = function() {
                    return J(Jl).hasClass(Vl)
                },
                Cf = function() {
                    return 0 < J("._pendo-launcher-item_").length
                },
                Ef = function() {
                    var e = J(Jl);
                    e.hasClass(Vl) && (e.removeClass(Vl), a && a.setActive(!1))
                },
                _f = function() {
                    var e = J(Jl);
                    e.hasClass(Vl) || (e.addClass(Vl), a && a.setActive(!0))
                },
                Tf = function() {
                    Sf() && (xf() ? Ef : _f)()
                };

            function Af() {
                J("._pendo-launcher-whatsnew-count_").remove()
            }
            var Rf = function() {
                    try {
                        var e = G.guideWidget || {},
                            t = e.data || {},
                            n = t.device || {
                                desktop: !0,
                                mobile: !1,
                                iframe: !1
                            };
                        lf(), !ld() && !n.desktop || ld() && !n.mobile || ra() && !n.iframe || e.enabled && (cf(t), hf())
                    } catch (Ce) {
                        c(Ce, "ERROR while initializing launcher")
                    }
                },
                kf = {
                    Launcher: {
                        addBehavior: function(e) {
                            nf.behaviors.push(e)
                        }
                    },
                    Metadata: {
                        getMetadata: nd
                    },
                    Util: {
                        documentScrollTop: _r,
                        documentScrollLeft: Tr,
                        getOffsetPosition: ao
                    },
                    Events: S
                },
                Of = {},
                Nf = function(n) {
                    var t = [],
                        i = [],
                        r = {};

                    function o(t) {
                        var e;
                        return !!U.every(["name", "version", "use", "type", "uri"], U.partial(U.has, t)) && (e = t.use, e = r[e] ? r[e].validators : [], U.every(U.map(e, function(e) {
                            return e(t)
                        })))
                    }

                    function a(e) {
                        var t;
                        return "behavior" === e.use ? !!e.uri(n, kf) && (i.push(e), !0) : (t = e.use, !!(t = r[t] ? r[t].handler || U.identity : null) && ((e = t(e)) && i.push(e), !!e))
                    }
                    return n.tagExtension = function(e, t) {
                            e = n.findExtensionByName(e);
                            e.tags = [].concat(e.tags || [], t)
                        }, n.findExtensionByTag = function(t) {
                            return U.find(i, function(e) {
                                return U.contains(e.tags, t)
                            })
                        }, n.findExtensionByName = function(e) {
                            return U.findWhere(i, {
                                name: e
                            })
                        }, n.filterExtensionsByUse = function(t) {
                            return U.filter(i, function(e) {
                                return e.use === t
                            })
                        }, n.findExtensionByNameAndProvider = function(t, n) {
                            return U.find(i, function(e) {
                                e = e.data;
                                return !!e && (e.name === t && e.provider && e.provider.name === n)
                            })
                        }, n.registerExtensionsByUse = function(e, t, n) {
                            n = n ? [].concat(n) : [], r[e] = {
                                handler: t,
                                validators: n
                            }
                        }, n.getExtensionFrames = function() {
                            return U.reduce(i, function(e, t) {
                                return t.frame && t.frame[0] && e.push(t.frame[0]), e
                            }, [])
                        },
                        function(e) {
                            e = [].concat(e), (e = U.filter(e, o)).length && (t = function n(e) {
                                if (!e.length) return e;
                                var t = U.filter(e, a);
                                if (t.length) return n(U.difference(e, t));
                                return e
                            }(t.concat(e)))
                        }
                }(Of),
                $ = function() {
                    return {
                        initializeResourceCenter: function(r) {
                            if (!(f = a(r))) return z.resolve();
                            if (W.getters["frames/isShownInAnotherFrame"]()(f.steps[0])) return z.resolve();
                            if ($.isFullyCustom(f)) return f.hasResourceCenterContent = !0, z.resolve();
                            var e = u(f, r),
                                t = U.reduce(e, function(e, t) {
                                    return o(t) ? e.concat(t.steps[0].fetchContent()) : e
                                }, []);
                            return t.push(dd.validate(f).then(U.noop, function() {
                                f.launchMethod = "api"
                            })), f.attributes.notifications = {
                                totalUnseenCount: 0,
                                individualCounts: {
                                    chat: 0
                                }
                            }, U.forEach(n(), function(e) {
                                var t = Of.findExtensionByNameAndProvider("chat", e),
                                    n = Of.findExtensionByNameAndProvider("helpcenter", e);
                                i(e) && (t && m(e, t), n && m(e, n))
                            }), U.forEach(e, function(t) {
                                var e = t.attributes.resourceCenter,
                                    n = e.children,
                                    i = e.moduleId,
                                    e = ("IframeModule" === i && (t.hasResourceCenterContent = !0), "SandboxModule" === i && (t.hasResourceCenterContent = !0), "IntegrationModule" === i && (t.integrationConfig = d(e.integrationName, e.integrationProvider), t.hasResourceCenterContent = !!t.integrationConfig, t.integrationConfig && "chat" === t.integrationConfig.name && c(e.integrationName, e.integrationProvider)), U.reduce(n, function(e, t) {
                                        var n = U.find(r, function(e) {
                                            return e.id === t
                                        });
                                        return n ? e.concat(n) : e
                                    }, []));
                                "AnnouncementsModule" === i && (f.attributes.notifications.individualCounts[t.id] = 0, U.forEach(e, function(e) {
                                    F(e) || e.isControlGroup() || f.attributes.notifications.individualCounts[t.id]++
                                })); - 1 < U.indexOf(["GuideListModule", "OnboardingModule", "AnnouncementsModule"], i) && U.filter(e, function(e) {
                                    return e.shouldBeAddedToResourceCenter() ? !(e.ineligibleForRC = !1) : !(e.ineligibleForRC = !0)
                                }).length && (t.hasResourceCenterContent = !0), t.guidesInModule = e
                            }), f.modules = e, f.badgeHidden = !0, z.all(t)
                        },
                        findResourceCenterHomeView: a,
                        findResourceCenterModules: u,
                        replaceResourceCenterContent: function(t, e, n) {
                            if (!p) {
                                var i = "left 200ms",
                                    r = "left",
                                    e = (e && (i = e[0].value, r = e[1].value), b());
                                if (e) {
                                    var o = J(e).find('[id^="pendo-g-"]')[0];
                                    if (o) {
                                        var a, s = o.getAttribute("data-pendo-guide-id"),
                                            u = U.find(G.guides, function(e) {
                                                return e.id === t
                                            }),
                                            d = (t !== f.id ? f.activeModule = u : (a = f.activeModule, delete f.activeModule), D(u, "attributes.resourceCenter.integrationProvider")),
                                            d = (g(d) && y(d), u.steps[0]),
                                            c = (d.eventRouter = new Nl, d.domJson),
                                            c = (c.props["data-pendo-guide-id"] = u.id, Z.buildNodeFromJSON(c, d)),
                                            l = c[0],
                                            i = (-1 === l.id.indexOf("pendo-g-") && (l = c.find('[id^="pendo-g-"]')[0]), n || (l.style.transition = i, o.style.transition = i, "left" === r ? l.style.left = e.offsetWidth + "px" : "right" === r && (l.style.left = -1 * e.offsetWidth + "px")), n && (J(o).remove(), a && a.steps && a.steps.length && (a.steps[0].elements.length = 0)), J(l).appendTo(e), d.guideElement = J(e), d.elements.push(d.guideElement[0]), $.adjustResourceCenterWidth(l), "AnnouncementsModule" === P(u) && d.guide.guidesInModule ? U.forEach(d.guide.guidesInModule, function(e) {
                                                var t;
                                                U.isUndefined(e.steps[0].attributes.imgCount) && (t = e.steps[0].id, t = J(l).find("#pendo-g-" + t)[0] ? t : e.id, Z.adjustGuideContentWidth("pendo-g-" + t), Z.flexAllThings("pendo-g-" + t))
                                            }) : Z.flexAllThings("pendo-resource-center-container"), J(l).find('[data-pendo-grow-height="true"]')[0]);
                                        if (i && Z.sizeElement(i, e), l.style.left = "0px", !n) {
                                            p = !0;
                                            try {
                                                "left" === r ? o.style.left = -1 * e.offsetWidth + "px" : "right" === r && (o.style.left = e.offsetWidth + "px"), Wv.setTimeout(function() {
                                                    J(o).remove(), a && a.steps && a.steps.length && (a.steps[0].elements.length = 0), p = !1
                                                }, 200)
                                            } catch (Ce) {
                                                throw p = !1, Ce
                                            }
                                        }
                                        return "AnnouncementsModule" === P(u) && (h(), i = kl.getGuidesInResourceCenterModule(u, G.guides), (n = U.reduce(i, function(e, t) {
                                            return t.steps && t.steps.length && pc.hasContent(t.steps[0]) || e.push(t.fetchContent()), e
                                        }, [])).length && ((r = function() {
                                            var i, e, t;
                                            if (U.isFunction(Jv.createElementNS)) return i = "http://www.w3.org/2000/svg", e = function(e, t) {
                                                var n = J(Jv.createElementNS(i, "circle")).attr({
                                                    cx: e,
                                                    cy: t,
                                                    fill: "#9a9ca5",
                                                    r: 5
                                                });
                                                return U.each(U.toArray(arguments).slice(2), function(e) {
                                                    n.append(e)
                                                }), n
                                            }, t = function(e) {
                                                return J(Jv.createElementNS(i, "animate")).attr({
                                                    attributeName: "fill-opacity",
                                                    values: "0;1;0;0",
                                                    keyTimes: "0;0.4;0.8;1",
                                                    dur: "1.4s",
                                                    repeatCount: "indefinite",
                                                    calcMode: "spline",
                                                    keySplines: "0 0 0.58 1; 0 0 0.58 1; 0 0 0.58 1",
                                                    begin: e
                                                })
                                            }, t = J(Jv.createElementNS(i, "svg")).attr({
                                                viewBox: "0 0 70 20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "70",
                                                height: "20"
                                            }).append(e(21, 10, t("-0.32s"))).append(e(35, 10, t("-0.16s"))).append(e(49, 10, t("0s"))), J("<li>").css({
                                                padding: "5px 20px",
                                                "list-style-type": "none",
                                                "list-style-position": "inside",
                                                position: "relative",
                                                "margin-left": "0em",
                                                "border-width": "0px",
                                                "border-style": "solid",
                                                "border-color": "rgb(255, 255, 255)",
                                                "float": "none",
                                                "vertical-align": "baseline",
                                                "text-align": "center"
                                            }).append(t)
                                        }()) && c.find("ol").append(r), z.all(n).then(function() {
                                            var e = z.defer();
                                            return setTimeout(e.resolve, 500), e.promise
                                        }).then(function() {
                                            f.activeModule === u && Z.renderResourceCenterModule(u)
                                        }))), $.setFocusForResoureCenterModule(c, s), d.onShown("launcher"), c
                                    }
                                }
                            }
                        },
                        showHomeViewOrEmptyState: function(e) {
                            J("#pendo-resource-center-container._pendo-guide-walkthrough_").remove(), delete e.activeModule, e.hasResourceCenterContent && e.skipResourceCenterHomeView ? $.replaceResourceCenterContent(e.moduleIdToReplaceHomeViewWith, [{
                                value: "none"
                            }, {
                                value: "left"
                            }]) : e.showEmptyState && ($.showResourceCenterEmptyState(), U.each(e.controlGuidesInAllModules, function(e) {
                                e.hasGuideBeenControlled() || e.steps[0].onControlGuide("control")
                            }))
                        },
                        showResourceCenterEmptyState: function() {
                            var e = J("#pendo-resource-center-empty-state-container");
                            e && e.length && J(e[0]).css({
                                display: "block"
                            })
                        },
                        launchIntegrationByNameAndProvider: function(e, t, n) {
                            var e = Of.findExtensionByNameAndProvider(e, t);
                            return e ? (n = J(n)) ? ((e = e.getFrame()).appendTo(n), void e.css({
                                display: "block"
                            })) : H("could not find target element for " + t + " integration") : H(t + " integration has not been loaded into the agent")
                        },
                        appendIntegrationToBodyByNameAndProvider: c,
                        attemptToPreserveIntegrationIframes: function(e) {
                            !e.step || (e = e.step.getGuide()).attributes && e.attributes.resourceCenter && (e = $.getResourceCenterContainer()) && (e = J(e).find('iframe[id^="_pendo-launcher-ext-frame-chat"]')) && e.length && e.each(function(e) {
                                e = J(e);
                                e.css({
                                    display: "none"
                                }), e.appendTo(Pu())
                            })
                        },
                        getResourceCenter: t,
                        getResourceCenterContainer: b,
                        getResourceCenterBadge: w,
                        addNotificationBubbleToResourceCenterBadge: T,
                        addNotificationBubbleToTargetElement: A,
                        updateNotificationBubbles: function() {
                            var e = f,
                                t = D(e, "attributes.notifications");
                            if (t) {
                                var n = C(t.individualCounts);
                                if (n <= 0) n !== t.totalUnseenCount && L(), t.totalUnseenCount = n;
                                else {
                                    E();
                                    var i = n !== t.totalUnseenCount;
                                    if (i || !S(s)) {
                                        if ("badge" === e.launchMethod) {
                                            i = w();
                                            if (!i) return;
                                            T(i.element(), e.attributes.notificationBubble, n)
                                        }
                                        if ("dom" === e.launchMethod && D(e, "attributes.activation.selector")) {
                                            i = J(e.attributes.activation.selector);
                                            if (!i.length) return;
                                            A(i[0], e.attributes.notificationBubble, n), q(Wv, "resize", U.debounce(x, 50))
                                        }
                                        t.totalUnseenCount = n
                                    }
                                }
                            }
                        },
                        removeNotificationBubble: L,
                        updateNotificationBubbleCount: M,
                        updateNotificationBubbleOnHomeView: _,
                        updateOrCreateNotificationBubble: R,
                        hexToRgb: I,
                        doesIntegrationExist: d,
                        calculateTotalNotificationCount: C,
                        updateNotificationBubblesOnHomeView: E,
                        createNotification: O,
                        appendNotificationBubble: N,
                        hasAnnouncementBeenSeen: F,
                        clearAnnouncementUnseenInterval: l,
                        createAnnouncementUnseenInterval: h,
                        findShownResourceCenterModule: function() {
                            var e = $.getResourceCenterContainer();
                            if (e) {
                                e = J(e).find('[id^="pendo-g-"]');
                                if (e) {
                                    var t = e.attr("data-pendo-guide-id"),
                                        e = U.find(G.guides, function(e) {
                                            return e.id === t
                                        });
                                    if (D(e, "attributes.resourceCenter.isModule", !1)) return e
                                }
                            }
                        },
                        dismissResourceCenter: B,
                        repositionResourceCenter: function() {
                            var e = $.getResourceCenterContainer(),
                                t = $.getResourceCenterBadge(); {
                                var n;
                                e && t && (t = $.findResourceCenterHomeView(G.guides).steps[0], n = D(t, "domJson.props.style.height"), n = parseInt(n, 10), n = isNaN(n) ? 0 : n, i = parseInt(D(t, "domJson.props.style.bottom", 0), 10), t = parseInt(D(t, "domJson.props.style.top", 0), 10), i = isNaN(i) ? 0 : i, t = isNaN(t) ? 0 : t, (i = io().height - i - t) <= n && (e.style.height = (i - 10).toString() + "px"), t = parseInt(e.style.height, 10), t = isNaN(t) ? 0 : t, n < i && n !== t && (e.style.height = n.toString() + "px"))
                            }
                            var i = J(e).find('[data-pendo-grow-height="true"]')[0];
                            i && Z.sizeElement(i, e)
                        },
                        repositionDoubleResourceCenterBadge: function() {
                            var e, t, n;
                            !W.getters["frames/isLeader"]() || 1 < (e = J("._pendo-resource-center-badge-container")).length && function(e) {
                                var t = V(e[0]),
                                    e = V(e[1]);
                                return go(t, e)
                            }(e) && (t = ao(e[0]).width + 5, n = ao(e[1]).left - t < 0 ? "" : "-", e[1].style.transform = "translateX(" + n + t + "px)")
                        },
                        adjustResourceCenterWidth: function(e) {
                            var t = b();
                            if (t) {
                                r = io().width, o = J(t), e = J(e || o.find('[id^="pendo-g-"]')[0]), o.css({
                                    "max-width": "none"
                                }), e.css({
                                    "max-width": "none"
                                }), i = parseInt(K(o[0]).width, 10), r < i && (i = parseInt(t.style.left, 10), i = isNaN(i) ? 0 : i, t = parseInt(t.style.right, 10), t = isNaN(t) ? 0 : t, r = r - t - i, o.css({
                                    "max-width": r + "px"
                                }), e.css({
                                    "max-width": r + "px"
                                }));
                                var t = o,
                                    n = J("button#pendo-a11y-list-item-button-block");
                                if (n && n.length)
                                    for (var i = J("ol._pendo-text-list-ordered")[0], r = 0, e = 0, i = (i && (i = K(i), e = parseInt(i.paddingLeft, 10), r = parseInt(i.paddingRight, 10)), J('[id^="pendo-onboarding-guide-progress-circle"]')[0]), o = 0, a = 0, s = 0, u = (i && (i = K(i), o = parseInt(i.width, 10), a = parseInt(i.marginRight, 10), s = parseInt(i.marginLeft, 10)), e + r + o + s + a), d = parseInt(K(t[0]).width, 10), c = 0; c < n.length; c++) {
                                        var l = n[c],
                                            f = J(l),
                                            l = (f.css({
                                                "max-width": "none"
                                            }), K(l)),
                                            p = parseInt(l.width, 10),
                                            l = d - u - (parseInt(l.paddingLeft, 10) + parseInt(l.paddingRight, 10));
                                        l <= p && f.css({
                                            "max-width": l
                                        })
                                    }
                            }
                        },
                        setNativeIntegrationDefaults: m,
                        renderNativeIntegration: y,
                        isSupportedNativeIntegration: g,
                        handleNativeIntegrationContinuation: function(e) {
                            e && !e.isTopLevel && (y(D(e, "attributes.resourceCenter.integrationProvider")), f.activeModule || (f.activeModule = e), e.steps[0].onShown("continue"), e.attributes.doNotResume = !0)
                        },
                        isProviderInstalled: i,
                        adjustNotificationBubbleForResize: x,
                        getNotificationBubbleDefaultCss: k,
                        getModuleId: P,
                        isIframeModule: function(e) {
                            return "IframeModule" === P(e) && e.hasResourceCenterContent
                        },
                        isSandboxModule: function(e) {
                            return "SandboxModule" === P(e) && e.hasResourceCenterContent
                        },
                        isIntegrationModule: function(e) {
                            return "IntegrationModule" === P(e) && e.hasResourceCenterContent
                        },
                        isFullyCustom: function(e) {
                            return "FullyCustomModule" === P(e)
                        },
                        integrationModuleHasContent: function(e) {
                            e = e.attributes.resourceCenter;
                            return !$.isSupportedNativeIntegration(e.integrationProvider) || $.isProviderInstalled(e.integrationProvider)
                        },
                        fetchAnnouncementGuidesContent: function(e, t) {
                            var n = a(e);
                            if (!n) return z.resolve();
                            if (t.getters["frames/isShownInAnotherFrame"]()(n.steps[0])) return z.resolve();
                            if ($.isFullyCustom(n)) return z.resolve();
                            var t = u(n, e),
                                i = [],
                                r = U.indexBy(e, "id");
                            return U.each(t, function(e) {
                                var e = e.attributes.resourceCenter;
                                "AnnouncementsModule" === e.moduleId && (e = e.children, e = U.reduce(e, function(e, t) {
                                    t = r[t];
                                    return t ? e.concat(t) : e
                                }, []), U.each(e, function(e) {
                                    o(e) && i.push(e.steps[0].fetchContent())
                                }))
                            }), z.all(i)
                        },
                        setFocusForResoureCenterModule: function(e, t) {
                            var n;
                            "HomeViewModule" === e[0].getAttribute("data-layout") ? t && (e = J('[data-pendo-module-guide-id="' + t + '"]'), n = e.find('button[id^="pendo-right-caret-"]')[0]) : (t = J('[id="pendo-resource-center-module-title-container"]'), n = t.find('button[id^="pendo-left-caret-"')[0]);
                            n && n.focus()
                        }
                    };
                    var f, e, p, s;

                    function o(e) {
                        return e.steps && e.steps.length && U.isFunction(e.steps[0].fetchContent)
                    }

                    function a(e) {
                        var e = U.filter(e, function(e) {
                                return D(e, "attributes.resourceCenter.isTopLevel") && !e.isFrameProxy
                            }),
                            t = U.find(e, function(e) {
                                return "staged" === e.state
                            });
                        return t || e[0]
                    }

                    function u(t, e) {
                        return U.filter(e, function(e) {
                            return e && D(e, "attributes.resourceCenter.isModule", !1) && e.state === t.state
                        })
                    }

                    function l() {
                        Wv.clearInterval(e), e = null
                    }

                    function h() {
                        e = e || Wv.setInterval(function() {
                            var e = b();
                            if (!e) return l();
                            e = J(e).find('[data-layout="AnnouncementsModule"]');
                            if (!e.length) return l();
                            var t = J(e).find('ol[id^="pendo-list"]');
                            if (!t.length) return l();
                            var n = V(t[0]),
                                i = J(t).find("li.pendo-unseen-announcement");
                            if (!i.length) return l();
                            for (var t = e.attr("data-pendo-guide-id"), r = f.attributes.notifications.individualCounts[t], o = n.height / 3, a = V(i[i.length - 1]).bottom - 30 < n.top + n.height, s = 0; s < i.length; s++) {
                                var u = i[s];
                                if (V(u).top - n.top > n.height - o && !a) break;
                                J(u).removeClass("pendo-unseen-announcement");
                                var d = J(u).find(".pendo-unread-announcement-mini-bubble"),
                                    c = (Te(10) ? J(u).find(".pendo-unread-announcement-mini-bubble").remove() : (d[0].style.visibility = "hidden", d[0].style.opacity = "0", d[0].style.transition = "visibility 0s 2s, opacity 2s linear"), J(u).attr("data-pendo-announcement-guide-id")),
                                    d = U.find(G.guides, function(e) {
                                        return e.id === c
                                    });
                                if (!d) break;
                                F(d) || r--, d.steps[0].seenState = "advanced", Jh(d.id, d.steps[0].id, j(), "whatsnew", d.language, {
                                    last_updated_at: d.steps[0].lastUpdatedAt
                                }), Vh(d.id, d.steps[0].id, j(), "advanced", d.language)
                            }
                            M(r, t)
                        }, 500)
                    }

                    function d(e, t) {
                        return Of.findExtensionByNameAndProvider(e, t)
                    }

                    function c(e, t) {
                        e = Of.findExtensionByNameAndProvider(e, t);
                        if (!e) return H(t + " integration has not been loaded into the agent");
                        g(t) && i(t) ? f.hasEligibleNativeIntegrationModule = !0 : (ho((t = e.getFrame())[0]) || t.appendTo(Pu()), t.css({
                            display: "none"
                        }))
                    }

                    function n() {
                        return ["zendesk-chat", "intercom-chat", "zendesk-native-kb"]
                    }

                    function g(e) {
                        return !!e && 0 <= n().indexOf(e)
                    }

                    function i(e) {
                        if (!e) return !1;
                        switch (e) {
                            case "zendesk-chat":
                            case "zendesk-native-kb":
                                return U.isFunction(Wv.zE);
                            case "intercom-chat":
                                return U.isFunction(Wv.Intercom);
                            default:
                                return !1
                        }
                    }

                    function m(e, t) {
                        if (e && i(e)) switch (e) {
                            case "zendesk-chat":
                            case "zendesk-native-kb":
                                var n = t;
                                n = r(n), Wv.zE("webWidget", "hide"), Wv.zE("webWidget", "updateSettings", {
                                    webWidget: {
                                        navigation: {
                                            popoutButton: {
                                                enabled: !1
                                            }
                                        },
                                        position: {
                                            vertical: n ? n[0] : "bottom",
                                            horizontal: n ? n[1] : "right"
                                        }
                                    }
                                }), Wv.zE("webWidget:on", "close", function() {
                                    Wv.zE("webWidget", "hide"), v()
                                }), Wv.zE("webWidget:on", "chat:unreadMessages", function(e) {
                                    M(e, "chat")
                                });
                                break;
                            case "intercom-chat":
                                n = t;
                                n = r(n), Wv.Intercom("update", {
                                    hide_default_launcher: !0,
                                    alignment: n ? n[1] : "right"
                                }), Wv.Intercom("onHide", function() {
                                    v()
                                })
                        }
                    }

                    function r(e) {
                        e = D(e, "data.options.labels.position");
                        return e = e && e.split("-")
                    }

                    function v() {
                        B(f.activeModule), delete f.activeModule, f.continueToNativeModule = !1
                    }

                    function y(e, t) {
                        if (e) {
                            var n = nd(),
                                i = (f.isShown() && f.hide(), w());
                            switch (i && i.hide(), e) {
                                case "zendesk-native-kb":
                                    Wv.zE("webWidget", "updateSettings", {
                                        webWidget: {
                                            helpCenter: {
                                                suppress: !1
                                            },
                                            chat: {
                                                suppress: !0
                                            }
                                        }
                                    }), Wv.zE("webWidget", "show"), Wv.zE("webWidget", "open");
                                    break;
                                case "zendesk-chat":
                                    Wv.zE("webWidget", "updateSettings", {
                                        webWidget: {
                                            chat: {
                                                suppress: !1
                                            },
                                            helpCenter: {
                                                suppress: !0
                                            }
                                        }
                                    }), Wv.$zopim.livechat.window.show(), n && n.visitor && n.visitor.email && Wv.zE("webWidget", "prefill", {
                                        email: {
                                            value: n.visitor.email
                                        }
                                    });
                                    break;
                                case "intercom-chat":
                                    Wv.Intercom("show"), n && n.visitor && n.visitor.email && Wv.Intercom("update", {
                                        email: n.visitor.email
                                    })
                            }
                            M(0, "chat"), !f.activeModule && t && (f.activeModule = t).steps[0].onShown("launcher")
                        }
                    }

                    function t() {
                        return f
                    }

                    function b() {
                        return D(f, "steps.0.guideElement.0")
                    }

                    function w() {
                        if (f && f.id) return ur[f.id]
                    }

                    function I(e) {
                        e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return e ? {
                            r: parseInt(e[1], 16),
                            g: parseInt(e[2], 16),
                            b: parseInt(e[3], 16)
                        } : null
                    }

                    function S(e) {
                        return e && U.all(e, function(e) {
                            return ho(e && e.length ? e[0] : e)
                        })
                    }

                    function x() {
                        var e, t = $.getResourceCenter(),
                            n = D(t, "attributes.notifications");
                        n && (n = $.calculateTotalNotificationCount(n.individualCounts), "dom" === t.launchMethod && D(t, "attributes.activation.selector") && (e = J(t.attributes.activation.selector)).length && $.addNotificationBubbleToTargetElement(e[0], t.attributes.notificationBubble, n))
                    }

                    function C(e) {
                        return U.reduce(e, function(e, t) {
                            return e + t
                        }, 0)
                    }

                    function E() {
                        var e, t;
                        f && (e = D(f, "attributes.notifications")) && (t = b()) && J(t).find("._pendo-resource-center-home-list").length && U.each(e.individualCounts, function(e, t) {
                            _(e, t)
                        })
                    }

                    function _(e, t) {
                        var n = $.getResourceCenterContainer();
                        !n || (n = J(n).find('[data-pendo-notification-id="' + t + '"]')).length && (t = J(n[0]).find("._pendo-home-view-bubble"), n = J(t[0].children[0]), e !== parseInt(n.text(), 10) && (0 < e ? (n.text(e), J(t[0]).css({
                            display: "block",
                            "margin-right": "0"
                        })) : J(t[0]).css({
                            display: "none"
                        })))
                    }

                    function T(e, t, n) {
                        var i = D(t, "position", "top-left"),
                            r = K(e),
                            r = (parseInt(r.width, 10) || 56) / 2,
                            o = r / Math.sqrt(2),
                            r = Math.round(r - o) - 10,
                            a = r - 10,
                            o = Math.round(2 * o);
                        R(e, t, n, {
                            "top-left": {
                                top: r + "px",
                                left: a + "px",
                                padding: "0px 10px",
                                "margin-left": "0px",
                                "margin-top": "0px"
                            },
                            "top-right": {
                                top: r + "px",
                                left: a + o + 10 + "px",
                                padding: "0px 10px",
                                "margin-left": "0px",
                                "margin-top": "0px"
                            },
                            "bottom-left": {
                                top: r + o,
                                left: a + "px",
                                padding: "0px 10px",
                                "margin-left": "0px",
                                "margin-top": "0px"
                            },
                            "bottom-right": {
                                top: r + o,
                                left: a + o + 10 + "px",
                                padding: "0px 10px",
                                "margin-left": "0px",
                                "margin-top": "0px"
                            }
                        }[i])
                    }

                    function A(e, t, n) {
                        var i = Nr(e, e),
                            r = Nr(e, po());
                        R(e, t, n, {
                            width: "28px",
                            top: i.top - Math.min(r.top, 14) + "px",
                            left: i.left - Math.min(r.left, 14) + "px",
                            position: "absolute"
                        }, {
                            width: "28px",
                            "font-size": "16px",
                            "text-align": "center",
                            position: "absolute",
                            right: "0px"
                        })
                    }

                    function R(e, t, n, i, r) {
                        var o, a;
                        S(s) ? (a = (o = k(t)).defaultBubbleCss, o = o.defaultUnseenCountCss, a = U.extend(a, i), o = U.extend(o, r), s.bubbleEle.css(a), s.unseenCountEle.css(o), s.unseenCountEle.text() != "" + n && s.unseenCountEle.text(n)) : (a = Jv.getElementsByClassName("pendo-resource-center-badge-notification-bubble")).length ? a[0].getElementsByClassName("pendo-notification-bubble-unread-count")[0].textContent = n : n && N(s = O(t, n, i, r), e)
                    }

                    function k(e) {
                        return {
                            defaultBubbleCss: {
                                position: "absolute",
                                "border-radius": "20px",
                                "line-height": "0px",
                                height: "26px",
                                "box-sizing": "content-box",
                                "background-color": e["background-color"]
                            },
                            defaultUnseenCountCss: {
                                "font-weight": e["font-weight"],
                                "font-family": e["font-family"],
                                height: "100%",
                                position: "relative",
                                top: "50%",
                                color: e.color
                            }
                        }
                    }

                    function O(e, t, n, i) {
                        var r = k(e),
                            o = r.defaultBubbleCss,
                            r = r.defaultUnseenCountCss,
                            a = (t = t || 0, J('<div class="pendo-resource-center-badge-notification-bubble"></div>')),
                            s = J('<div class="pendo-notification-bubble-unread-count"></div>'),
                            o = U.extend(o, n),
                            n = U.extend(r, i),
                            r = (a.css(o), s.css(n), J('<style id="pendo-resource-center-bubble-animation"></style>'));
                        return Te(10) || (o = "@keyframes pulse { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(1.6) } } " + ('.pendo-resource-center-badge-notification-bubble::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: ' + ("rgb(" + (i = I(e["background-color"])).r + ", " + i.g + ", " + i.b + ")") + "; border-radius: 100%; z-index: -1; animation: pulse 2s infinite; will-change: transform; }"), r.styleSheet ? r.styleSheet.cssText = o : r[0].innerHTML = o), s.text(t), {
                            bubbleEle: a,
                            unseenCountEle: s,
                            styleEle: r
                        }
                    }

                    function N(e, t) {
                        e.styleEle.appendTo(t), e.unseenCountEle.appendTo(e.bubbleEle), e.bubbleEle.appendTo(t)
                    }

                    function L() {
                        var n = s ? s.bubbleEle : J(".pendo-resource-center-badge-notification-bubble"),
                            i = s ? s.styleEle : J("#pendo-resource-center-bubble-animation");
                        n && U.each(n, function(e, t) {
                            n[t] && (t = n[t]) && t.parentNode && t.parentNode.removeChild(t)
                        }), i && U.each(i, function(e, t) {
                            i[t] && (t = i[t]) && t.parentNode && t.parentNode.removeChild(t)
                        }), s = null
                    }

                    function M(e, t) {
                        var n;
                        !f || (n = D(f, "attributes.notifications")) && n.individualCounts[t] !== e && (n.individualCounts[t] = e, $.updateNotificationBubbles())
                    }

                    function F(e) {
                        return !(!U.isFunction(e.hasBeenSeen) || !e.hasBeenSeen()) || "active" === e.steps[0].seenState
                    }

                    function B(e) {
                        var t = D(e, "attributes.resourceCenter.isModule", !1) ? e : $.findShownResourceCenterModule();
                        t && (t = U.first(t.steps), _h(t));
                        t = (D(e, "attributes.resourceCenter.isTopLevel", !1) ? e : $.findResourceCenterHomeView(G.guides)).steps[0];
                        return _h(t)
                    }

                    function P(e) {
                        return D(e, "attributes.resourceCenter.moduleId")
                    }
                }(),
                Lf = function() {
                    return {
                        show: function(t, n) {
                            if (Fu() && U.isFunction(t._show)) return t._show(n), i(t.isShown());
                            var e = t.getGuide();
                            return "whatsnew" !== t.type ? W.getters["frames/hasFrames"]() && !W.getters["frames/isGuideInThisFrame"]()(e) ? o(t, n) : function(e) {
                                return e.getGuide().isModule && (e = $.getResourceCenter()) ? r(e.steps[0], "badge") : i()
                            }(t).then(function() {
                                return r(t, n)
                            }).then(function(e) {
                                return !!e || o(t, n)
                            }) : r(t, n)
                        },
                        showLocal: r
                    };

                    function i(t) {
                        return {
                            then: function(e) {
                                return e(t)
                            }
                        }
                    }

                    function r(e, t) {
                        return pc.hasContent(e) && dd.valid(e) ? (e._show(t), i(e.isShown())) : (!pc.hasContent(e) || !dd.invalid(e)) && e.getGuide().canShowOnDevice() && e.canShowOnPage(og()) ? (e.lock(), pc.fetchContent(e).then(function() {
                            return !("whatsnew" !== e.type && !e.isShown()) && dd.validate(e.getGuide())
                        }).then(function() {
                            return !("whatsnew" !== e.type && !e.isShown()) && (e.unlock(), e._show(t), e.isShown())
                        })) : i(!1)
                    }

                    function o(t, e) {
                        var n = t.getGuide();
                        return W.getters["frames/hasFrames"]() && W.getters["frames/isGuideInDifferentFrame"]()(n) ? (t.lock(), W.dispatch("frames/showGuideStep", {
                            guideId: t.guideId,
                            stepId: t.id,
                            reason: e
                        }).then(function(e) {
                            return t.unlock(), e.isShown
                        }, function() {
                            return t.unlock(), !1
                        }).then(function(e) {
                            return e && (clearInterval(t.timeoutTimer), delete t.timeoutTimer), e
                        })) : i(!1)
                    }
                }(),
                Mf = function() {
                    var t, n, a = "pendoTargetId",
                        i = [],
                        r = {};
                    return {
                        circular: !0,
                        key: a,
                        guides: i,
                        targets: r,
                        reset: d,
                        resetIterator: c,
                        init: f,
                        update: p,
                        attach: o,
                        detach: s,
                        handler: u,
                        activates: l,
                        prefetch: h,
                        initialize: function(e, t) {
                            t.Events.on("deliverablesLoaded", d), t.Events.on("guideListChanged", function() {
                                f(g())
                            }), t.Events.on("guideLoopStarted", function() {
                                n = setTimeout(function() {
                                    h(g()), n = null
                                }, 0)
                            }), t.Events.on("guideLoopStopped", function() {
                                c(), clearTimeout(n), n = null
                            }), Ep(function() {
                                if (p(g())) return !0
                            }, "dom"), t.ConfigReader.get("preferMutationObserver") && b.MutationObserver && (Mf.circular = !1)
                        }
                    };

                    function o(n, i, e) {
                        var t = n[a],
                            r = t ? e[t] : null,
                            o = (r || (t = t || "target" + U.uniqueId(), r = {
                                target: n,
                                events: {}
                            }, e[t] = r, n[a] = t), e[i.id] || []);
                        o.push(t), e[i.id] = o, U.each(i.events, function(e) {
                            var t = r.events[e];
                            t || ((t = {
                                guideIds: {}
                            }).fn = U.partial(u, U, t.guideIds), C(n, e = "mouseover" === e ? "mouseenter" : e, t.fn), r.events[e] = t), t.guideIds[i.id] = 1
                        })
                    }

                    function s(i, t) {
                        U.each(t[i.id], function(e) {
                            var n = e ? t[e] : null;
                            n && (U.each(n.events, function(e, t) {
                                e && e.guideIds && (delete e.guideIds[i.id], U.size(e.guideIds) <= 0 && (m(n.target, t = "mouseover" === t ? "mouseenter" : t, e.fn), delete n.events[t]))
                            }), U.size(n.events) <= 0 && (delete n.target[a], n.target = null, delete t[e]))
                        }), delete t[i.id]
                    }

                    function u(e, t) {
                        var n;
                        e.pendoActivatedGuide || J.data.get(e, "advanced") || (n = y.get("adoptPrioritizeAdoptGuides"), t = U.compact(U.map(U.keys(t), function(e) {
                            return x(e)
                        })), t = U.filter(t, function(e) {
                            return !(!e.steps || !e.steps.length) && (!D(e, "attributes.dom.isOnlyShowOnce") || !e.steps[0].hasBeenSeen())
                        }), t = U(t).chain().sortBy(function(e) {
                            return "staged" === e.state ? 0 : 1
                        }).sortBy(function(e) {
                            e = e.isTraining;
                            return n ? e ? 0 : 1 : e ? 1 : 0
                        }).value(), (t = U.find(t, function(e) {
                            var t = U.first(e.steps);
                            return D(e, "attributes.resourceCenter", !1) && e.isShown() ? $.dismissResourceCenter() : !!t.canShow() && (!!e.isShown() || zh(t, "dom"))
                        })) && (e.pendoActivatedGuide = t.id))
                    }

                    function d() {
                        U.each(i, function(e) {
                            s(e, r), e.targets = []
                        }), i.length = 0, t = null
                    }

                    function c() {
                        t && t.reset()
                    }

                    function l(e) {
                        if (e.id && e.steps && e.steps.length && e.hasLaunchMethod("dom") && e.steps[0].canShowOnPage(og())) {
                            var t = D(e, "attributes.activation.event", []);
                            if (t && t.length) {
                                var n = Hu(e);
                                if (n) return {
                                    id: e.id,
                                    events: t,
                                    selector: n,
                                    targets: []
                                }
                            }
                        }
                    }

                    function f(e) {
                        t || (U.each(e, function(e) {
                            e = l(e);
                            e && i.push(e)
                        }), (t = At(50, Tt())).circular = Mf.circular)
                    }

                    function p(e) {
                        return f(e), t.eachUntil(i, function(t) {
                            var e, n, i = J(t.selector);
                            50 < i.length && (i.length = 50), e = i, n = t.targets, e.length == n.length && U.all(e, function(e, t) {
                                return e === n[t]
                            }) || (t.targets = i, s(t, r), U.each(i, function(e) {
                                o(e, t, r)
                            }))
                        })
                    }

                    function h(e) {
                        y.get("disablePrefetch") || U.each(e, function(e) {
                            U.isFunction(e.hasLaunchMethod) && e.hasLaunchMethod("dom") && e.steps && e.steps.length && U.isFunction(e.steps[0].fetchContent) && e.steps[0].fetchContent()
                        })
                    }
                }(),
                Ff = "passive",
                Pf = "paused";

            function Bf() {
                Rn.tabIdChanged(function() {
                    var e = Rn.getTabId();
                    W.commit("frames/setTabId", e), W.dispatch("frames/join")
                })
            }

            function Gf(e) {
                var e = e.data[0];
                e && (e = Uf(e), W.dispatch("frames/updateMetadata", e))
            }

            function Uf(e) {
                var t;
                if (e = e || y.getLocalConfig()) return t = {
                    visitor: e.visitor || {},
                    account: e.account || {}
                }, e.visitor_id && (t.visitor = {
                    id: e.visitor_id
                }), e.account_id && (t.account = {
                    id: e.account_id
                }), e.apiKey && (t.apiKey = e.apiKey), t
            }
            var Df = function() {
                    var r = {};
                    return {
                        actions: {
                            init: function(e) {
                                var t, n, i = e.state;
                                i.initialized || (t = Rn.addTracerIds({}), n = xe(), e.commit("setFrameId", t.frameId), e.commit("setTabId", t.tabId), e.commit("setAgentInstallType", n), e.commit("setLeadershipMode", n), Bf(), S.metadata.on(Gf), S.identify.on(Gf), S.guideSeen.on(function(e) {
                                    e = e.data[0];
                                    e && e.frameId === i.frameId && E.postMessage({
                                        action: "frames/receiveGuideSeen",
                                        frameId: i.frameId,
                                        guideSeen: e
                                    })
                                }), e.commit("setInitialized", !0))
                            },
                            changeGuideList: function(e, t) {
                                e = e.state, t = a(t);
                                E.postMessage({
                                    action: "frames/receiveGuideList",
                                    frameId: e.frameId,
                                    guides: t
                                })
                            },
                            receiveGuideList: function(e, t) {
                                e.commit("setGuideList", t), t.frameId === e.state.frameId && e.commit("setGuidesLoaded"), zf(e.state)
                            },
                            join: function(e) {
                                var t, n, i, r, o;
                                e.state.disabled || (Qf(), np(Ff, jf), np(Pf, U.noop), ip(Pf), t = e.state, n = Wv.top == Wv, i = t.frames[t.frameId], e.commit("removeFrame", t.frameId), e.commit("setGuideList", {
                                    frameId: t.frameId,
                                    guides: a(g())
                                }), r = t.frameId, Rn.detectClonedSession(r), (o = Uf()) && e.dispatch("receiveFrame", {
                                    cd: r,
                                    frame: U.extend({
                                        agentInstallType: t.agentInstallType,
                                        id: t.frameId,
                                        joinedAt: v(),
                                        isTop: n,
                                        visibility: n ? "visible" : "unknown",
                                        metadata: o
                                    }, i)
                                }))
                            },
                            receiveFrame: function(e, t) {
                                var n, i, r = e.state;
                                r.frames[t.frame.id] && r.frames[t.frame.id].id || (e.getters.isBroadcastChannel() && t.cd && Rn.isClonedSession(t.cd) ? E.postMessage({
                                    action: "frames/changeTabId",
                                    cd: t.cd
                                }) : (e.commit("addFrame", t.frame), e.commit("setGuideList", {
                                    frameId: t.frame.id,
                                    guides: U.toArray(D(t, "frame.guides", []))
                                }), i = e.getters.inExtensionLeadershipMode(), n = t.frame.agentInstallType === Ie, n = i && n && t.frame.isTop, i = !i && t.frame.isTop, (n || i) && e.commit("setTopId", t.frame.id), e.commit("setLeadershipMode", t.frame.agentInstallType), t[Sc] && e.dispatch("receiveStartPreview", t), E.postMessage({
                                    action: "frames/receiveFrame",
                                    frame: r.frames[r.frameId],
                                    cd: t.cd,
                                    "pendo-preview": e.rootState.preview.preview
                                }), e.dispatch("waitThenElectLeader")))
                            },
                            changeTabId: function(e, t) {
                                t.cd === e.state.frameId && ((t = e.state.tabId) === Rn.getTabId() && (Rn.setParentTabId(t), Rn.newTabId()), e.commit("setTabId", Rn.getTabId()))
                            },
                            leave: function(t) {
                                var e = t.state;
                                E.postMessage({
                                    action: "frames/removeFrame",
                                    frameId: e.frameId
                                }), U.each(e.frames, function(e) {
                                    t.commit("removeFrame", e.id)
                                }), E.close(), op()
                            },
                            removeFrame: function(e, n) {
                                e.getters.hasFrame()(n.frameId) && (e.commit("removeFrame", n.frameId), U.each(r, function(e, t) {
                                    0 === t.indexOf(n.frameId + "/") && (e.reject(), delete r[t])
                                }), e.dispatch("electLeader"))
                            },
                            waitThenElectLeader: U.debounce(function(e) {
                                e.dispatch("electLeader")
                            }, 50),
                            electLeader: function(e) {
                                var t = e.state;
                                t.topId ? e.dispatch("followLeader", {
                                    leaderId: t.topId
                                }) : (t = U.min(t.frames, "joinedAt"), e.dispatch("followLeader", {
                                    leaderId: t.id
                                })), zf(e.state)
                            },
                            followLeader: function(e, t) {
                                var n = e.state,
                                    i = n.leaderId,
                                    r = t.leaderId;
                                e.commit("setLeaderId", t.leaderId), e.dispatch("setRenderMode"), i !== r && S.leaderChanged.trigger({
                                    frameId: n.frameId,
                                    oldLeaderId: i,
                                    newLeaderId: r
                                }), r !== n.frameId && Rn.stopCloneDetectionTimer()
                            },
                            setRenderMode: function(e) {
                                e.getters.isLeader() ? ip("default") : ip(Ff)
                            },
                            showGuideStep: function(t, n) {
                                var i = U.filter(t.state.frames, function(e) {
                                    return e.id !== t.state.frameId && "hidden" !== e.visibility && e.guides && e.guides[n.guideId]
                                });
                                return function r() {
                                    var e = i.shift();
                                    return e ? t.dispatch("requestShowGuideStepInFrame", U.extend({
                                        frameId: e.id
                                    }, n)).then(function(e) {
                                        return e.error ? z.reject(e.error) : e.isShown ? e : r()
                                    }) : z.resolve({
                                        isShown: !1
                                    })
                                }()
                            },
                            requestShowGuideStepInFrame: function(e, t) {
                                var n = t.frameId + "/" + xt(32),
                                    i = z.defer();
                                return r[n] = i, E.postMessage(U.extend({
                                    action: "frames/showGuideStepInFrame",
                                    requestId: n
                                }, t)), i.promise
                            },
                            showGuideStepInFrame: function(t, n) {
                                var e;
                                t.state.frameId === n.frameId && ((e = (e = x(n.guideId)) && e.findStepById(n.stepId)) ? (e = Lf.showLocal(e, n.reason).then(function(e) {
                                    t.dispatch("guideStepShownInFrame", {
                                        action: "frames/receiveGuideStepShownInFrame",
                                        requestId: n.requestId,
                                        guideId: n.guideId,
                                        stepId: n.stepId,
                                        isShown: e
                                    })
                                })) && e["catch"] && e["catch"](U.noop) : t.dispatch("guideStepShownInFrame", {
                                    action: "frames/receiveGuideStepShownInFrame",
                                    requestId: n.requestId,
                                    guideId: n.guideId,
                                    stepId: n.stepId,
                                    isShown: !1
                                }))
                            },
                            guideStepShownInFrame: function(e, t) {
                                e.commit("setStepShown", {
                                    frameId: e.state.frameId,
                                    stepId: t.stepId,
                                    shown: t.isShown
                                }), E.postMessage(U.extend({
                                    action: "frames/receiveGuideStepShownInFrame",
                                    frameId: e.state.frameId
                                }, t))
                            },
                            receiveGuideStepShownInFrame: function(e, t) {
                                var n = r[t.requestId];
                                n && (n.resolve(t), delete r[t.requestId]), e.getters.isShownInFrame()(t.frameId, {
                                    id: t.stepId
                                }) !== t.isShown && e.commit("setStepShown", {
                                    frameId: t.frameId,
                                    stepId: t.stepId,
                                    shown: t.isShown
                                })
                            },
                            hideGuides: function(e, t) {
                                t = U.isArray(t) ? t : [], E.postMessage({
                                    action: "frames/receiveHideGuides",
                                    frameId: e.state.frameId,
                                    guideIds: t
                                }), e.commit("hideGuides")
                            },
                            receiveHideGuides: function(e, t) {
                                e.state.frameId !== t.frameId && (t.guideIds.length ? U.each(U.compact(U.map(t.guideIds, x)), function(e) {
                                    e.hide()
                                }) : bh(), e.commit("hideGuides"))
                            },
                            guideStepHiddenInFrame: function(e, t) {
                                var n = e.getters.isShownInFrame()(e.state.frameId, {
                                    id: t.stepId
                                });
                                e.commit("setStepShown", {
                                    frameId: e.state.frameId,
                                    stepId: t.stepId,
                                    shown: !1
                                }), E.postMessage(U.extend({
                                    action: "frames/receiveGuideStepHiddenInFrame",
                                    frameId: e.state.frameId
                                }, t)), n && e.dispatch("fixDoubleDisplay", t)
                            },
                            receiveGuideStepHiddenInFrame: function(e, t) {
                                e.state.frameId !== t.frameId && e.getters.isShownInFrame()(t.frameId, {
                                    id: t.stepId
                                }) && e.commit("setStepShown", {
                                    frameId: t.frameId,
                                    stepId: t.stepId,
                                    shown: !1
                                })
                            },
                            fixDoubleDisplay: function(n, i) {
                                U.each(n.state.frames, function(e, t) {
                                    t !== n.state.frameId && n.getters.isShownInFrame()(t, {
                                        id: i.stepId
                                    }) && E.postMessage(U.extend({
                                        action: "frames/receiveHideGuideInFrame",
                                        frameId: t,
                                        guideId: i.guideId,
                                        stepId: i.stepId
                                    }, i))
                                })
                            },
                            receiveHideGuideInFrame: function(e, t) {
                                e.state.frameId === t.frameId && (t = (e = x(t.guideId)) && e.findStepById(t.stepId)) && t.hide()
                            },
                            changeLastGuideStepSeen: function(e, t) {
                                E.postMessage({
                                    action: "frames/receiveLastGuideStepSeen",
                                    frameId: e.state.frameId,
                                    lastGuideStepSeen: t
                                }), e.commit("updateLastGuideStepSeen", t), e.commit("healthCheck/updateStepState", {
                                    id: t.guideStepId,
                                    seenState: t.state
                                }, {
                                    root: !0
                                })
                            },
                            receiveLastGuideStepSeen: function(e, t) {
                                var n;
                                t.frameId !== e.state.frameId && ((n = D(e.state.frames[t.frameId], "agentInstallType")) && n !== e.state.agentInstallType && delete t.lastGuideStepSeen.visitorId, e.dispatch("guideState/updateLastGuideStepSeen", t.lastGuideStepSeen, {
                                    root: !0
                                }), e.dispatch("guideState/write", null, {
                                    root: !0
                                }), (t = (t = x((n = e.rootState.guideState.lastGuideStepSeen).guideId)) && t.findStepById(n.guideStepId)) && (t.seenState = n.state, t.seenReason = n.seenReason, t.lastSeenAt = n.time, n.dismissCount && (t.dismissCount = n.dismissCount), n.snoozeEndTime && (t.snoozeEndTime = n.snoozeEndTime), e.commit("updateLastGuideStepSeen", n), e.commit("healthCheck/updateStepState", t, {
                                    root: !0
                                })))
                            },
                            changeThrottlingState: function(e, t) {
                                E.postMessage(U.extend({
                                    action: "frames/receiveThrottlingState",
                                    frameId: e.state.frameId
                                }, t))
                            },
                            receiveThrottlingState: function(e, t) {
                                t.frameId !== e.state.frameId && U.each(Yh, function(e) {
                                    t[e] && Qh(t[e], e)
                                })
                            },
                            startPreview: function(e) {
                                E.postMessage({
                                    action: "frames/receiveStartPreview",
                                    "pendo-preview": e.rootState.preview.preview
                                })
                            },
                            restartPreview: function(e) {
                                E.postMessage({
                                    action: "frames/receiveRestartPreview",
                                    "pendo-preview": e.rootState.preview.preview
                                })
                            },
                            stopPreview: function(e, t) {
                                E.postMessage(U.extend({
                                    action: "frames/receiveStopPreview"
                                }, t))
                            },
                            receiveStartPreview: function(e, t) {
                                e.dispatch("preview/start", t[Sc], {
                                    root: !0
                                }), Ec(Wv), $g()
                            },
                            receiveRestartPreview: function() {
                                var e = Ac(g(), bc());
                                W.dispatch("guideState/updateLastGuideStepSeen", e, {
                                    root: !0
                                })
                            },
                            receiveStopPreview: function(e, t) {
                                qc({
                                    preventWindowClose: !!t.preventWindowClose
                                })
                            },
                            updateFrameVisibility: function(e, t) {
                                if (!e.getters.isTop() && !e.state.disableFrameVisibilityCheck) try {
                                    var n = "unknown",
                                        i = (t = null == t ? Wv : t).frameElement;
                                    i ? (n = xo(i) ? "visible" : "hidden", e.getters.frameVisibility() !== n && (e.commit("setFrameVisibility", {
                                        frameId: e.state.frameId,
                                        visibility: n
                                    }), E.postMessage({
                                        action: "frames/receiveFrameVisibility",
                                        frameId: e.state.frameId,
                                        visibility: n
                                    }))) : e.commit("disableFrameVisibilityCheck")
                                } catch (Ce) {
                                    e.commit("disableFrameVisibilityCheck")
                                }
                            },
                            receiveFrameVisibility: function(e, t) {
                                e.commit("setFrameVisibility", t)
                            },
                            addSelectionModeToFrames: function(e, t) {
                                t = t.options;
                                Ic.launchInAppDesigner(t)
                            },
                            syncOptions: function(e, t) {
                                t.options && E.postMessage({
                                    action: "frames/receiveOptions",
                                    options: t.options
                                })
                            },
                            receiveOptions: function(e, t) {
                                t.options && $u(t.options)
                            },
                            syncIdentity: function(e, t) {
                                (t.visitorId || t.accountId) && E.postMessage({
                                    action: "frames/receiveIdentity",
                                    visitorId: t.visitorId,
                                    accountId: t.accountId
                                })
                            },
                            receiveIdentity: function(e, t) {
                                (t.visitorId || t.accountId) && Jn(t.visitorId, t.accountId)
                            },
                            updateMetadata: function(e, t) {
                                t && tn(!0) && (t.frameId = e.state.frameId, E.postMessage({
                                    action: "frames/receiveMetadata",
                                    metadata: t
                                }))
                            },
                            receiveMetadata: function(e, t) {
                                e.commit("setMetadata", t.metadata)
                            },
                            receiveGuideSeen: function(e, t) {
                                t.frameId !== e.state.frameId && S.guideSeen.trigger(t.guideSeen)
                            }
                        },
                        mutations: {
                            addFrame: function(e, t) {
                                var n = t.id;
                                e.frames[n] = U.extend({}, e.frames[n], t)
                            },
                            removeFrame: function(e, t) {
                                delete e.frames[t]
                            },
                            setGuideList: function(e, t) {
                                var n = t.frameId;
                                e.frames[n] = U.extend({}, e.frames[n], {
                                    guides: U.indexBy(a(t.guides), "id")
                                })
                            },
                            setStepShown: function(e, t) {
                                var n = t.frameId,
                                    n = e.frames[n] = U.extend({}, e.frames[n]);
                                n.shown = U.extend({}, n.shown), n.shown[t.stepId] = t.shown
                            },
                            setInitialized: function(e, t) {
                                e.initialized = t
                            },
                            setLeaderId: function(e, t) {
                                e.leaderId = t
                            },
                            setFrameId: function(e, t) {
                                e.frameId = t
                            },
                            setTabId: function(e, t) {
                                e.tabId = t
                            },
                            setTopId: function(e, t) {
                                e.topId = t
                            },
                            setAgentInstallType: function(e, t) {
                                e.agentInstallType = t
                            },
                            setLeadershipMode: function(e, t) {
                                e.leadershipMode !== Ie && (e.leadershipMode = t)
                            },
                            setFrameVisibility: function(e, t) {
                                var n = t.frameId;
                                e.frames[n] = U.extend({}, e.frames[n], {
                                    visibility: t.visibility
                                })
                            },
                            disableFrameVisibilityCheck: function(e) {
                                e.disableFrameVisibilityCheck = !0
                            },
                            hideGuides: function(e) {
                                U.each(e.frames, function(n) {
                                    U.each(n.shown, function(e, t) {
                                        n.shown[t] = !1
                                    })
                                })
                            },
                            setChannelType: function(e, t) {
                                e.channelType = t
                            },
                            setGuidesLoaded: function(e) {
                                e.guidesLoaded = !0
                            },
                            setConnectFailed: function(e) {
                                e.connectFailed = !0
                            },
                            updateLastGuideStepSeen: function(e, t) {
                                t && U.each(e.frames, function(e) {
                                    e.guides && (e = e.guides[t.guideId]) && (e = U.findWhere(e.steps, {
                                        id: t.guideStepId
                                    })) && (e.seenState = t.state, e.lastSeenAt = t.time, e.seenReason = t.seenReason, t.dismissCount && (e.dismissCount = t.dismissCount), t.snoozeEndTime && (e.snoozeEndTime = t.snoozeEndTime))
                                })
                            },
                            setMetadata: function(e, t) {
                                var n = t.frameId;
                                delete t.frameId, e.frames[n].metadata = U.extend({}, e.frames[n].metadata, t)
                            }
                        },
                        getters: {
                            allFrames: function(e) {
                                return e.frames
                            },
                            leaderExists: function(e) {
                                return !!e.leaderId
                            },
                            isLeader: function(e) {
                                return e.leaderId === e.frameId
                            },
                            isFollower: function(e) {
                                return !!e.leaderId && e.leaderId !== e.frameId
                            },
                            inExtensionLeadershipMode: function(e) {
                                return e.leadershipMode === Ie
                            },
                            isTop: function(e) {
                                return e.topId === e.frameId || Wv == Wv.top
                            },
                            frameVisibility: function(e) {
                                return (e.frames ? e.frames[e.frameId] : {}).visibility || "unknown"
                            },
                            isGuideInThisFrame: function(n) {
                                return function(e) {
                                    var t = n.frames && n.frames[n.frameId];
                                    return !!(t && t.guides || {})[e.id]
                                }
                            },
                            isGuideInDifferentFrame: function(i) {
                                return function(n) {
                                    return U.any(i.frames, function(e, t) {
                                        return t !== i.frameId && (e.guides && e.guides[n.id])
                                    })
                                }
                            },
                            isShownInAnotherFrame: function(i) {
                                return function(n) {
                                    return U.any(i.frames, function(e, t) {
                                        return t !== i.frameId && (e.shown && e.shown[n.id])
                                    })
                                }
                            },
                            isShownInFrame: function(n) {
                                return function(e, t) {
                                    e = n.frames && n.frames[e], e = e && e.shown || {};
                                    return !(!e || !e[t.id])
                                }
                            },
                            hasFrame: function(t) {
                                return function(e) {
                                    return t.frames && t.frames[e]
                                }
                            },
                            hasFrames: function(e) {
                                return 1 < U.size(e.frames)
                            },
                            shouldBeAddedToLauncher: function(i, e) {
                                return function(n) {
                                    return e.canShowRCBadge() && U.any(i.frames, function(e, t) {
                                        return t !== i.frameId && ((t = e.guides && e.guides[n.id]) && t._shouldBeAddedToLauncher)
                                    })
                                }
                            },
                            shouldBeAddedToResourceCenter: function(i, e) {
                                return function(n) {
                                    return e.canShowRCBadge() && U.any(i.frames, function(e, t) {
                                        return t !== i.frameId && ((t = e.guides && e.guides[n.id]) && t._shouldBeAddedToResourceCenter)
                                    })
                                }
                            },
                            isBroadcastChannel: function(e) {
                                return "BroadcastChannel" === e.channelType
                            },
                            channelType: function(e) {
                                return e.channelType
                            },
                            canShowRCBadge: function(e, t) {
                                return U.any(e.frames, function(e) {
                                    return e.isTop
                                }) ? t.isTop() : t.isLeader()
                            }
                        },
                        state: {
                            initialized: !1,
                            frameId: null,
                            leaderId: null,
                            tabId: null,
                            agentInstallType: null,
                            leadershipMode: null,
                            topId: null,
                            frames: {},
                            guidesLoaded: !1,
                            channelType: null
                        },
                        requests: r
                    };

                    function t(e) {
                        var t = U.pick(e, "id", "name", "launchMethod", "isMultiStep", "steps", "control");
                        return t.attributes = U.pick(e.attributes, "overrideAutoThrottling", "priority", "isAnnouncement", "resourceCenter"), t._shouldBeAddedToLauncher = U.isFunction(e.shouldBeAddedToLauncher) ? e.shouldBeAddedToLauncher() : e._shouldBeAddedToLauncher || !1, t._shouldBeAddedToResourceCenter = U.isFunction(e.shouldBeAddedToResourceCenter) ? e.shouldBeAddedToResourceCenter() : e._shouldBeAddedToLauncher || !1, t.steps = U.map(e.steps, function(e) {
                            return U.pick(e, "id", "guideId", "type", "seenReason", "seenState", "lastSeenAt", "dismissCount", "snoozeEndTime", "regexUrlRule", "elementPathRule")
                        }), t
                    }

                    function a(e) {
                        return U.map(e, t)
                    }
                }(),
                Hf;

            function zf(t) {
                var n = U.indexBy(U.filter(g(), function(e) {
                        return !e.isFrameProxy
                    }), "id"),
                    e = U.chain(t.frames).filter(function(e) {
                        return e.id !== t.frameId
                    }).map(function(e) {
                        return U.toArray(D(e, "guides", []))
                    }).flatten(!0).unique("id").filter(function(e) {
                        return !n[e.id]
                    }).map(function(e) {
                        return U.extend(w.parse(w.stringify(e)), {
                            isFrameProxy: !0
                        })
                    }).map(Rl).value(),
                    e = U.toArray(n).concat(e);
                bg(e), Lg(e), lr(e), t.guidesLoaded && 0 === U.size(D(t, "frames." + t.frameId + ".guides", [])) && ap()
            }

            function jf(e) {
                var t;
                (e = e.filter(function(e) {
                    return !e.isFrameProxy
                })).length && (mp(e), Mf.update(e), hh() && pp(), hf(), (t = Ql(Xl(e))) !== Hf && W.dispatch("frames/changeGuideList", e), Hf = t, W.dispatch("frames/updateFrameVisibility"), ll(g(), ur), Ip($.getResourceCenter()))
            }

            function Wf() {
                return W.getters["frames/isLeader"]()
            }

            function Jf() {
                return W.getters["frames/allFrames"]()
            }

            function qf() {
                return W.getters["frames/channelType"]()
            }

            function Kf(i) {
                return S.guideSeen.on(function(e) {
                    var e = e.data[0].props || {};
                    "permalink" === e.reason && (e = i(e.guide_id)) && (e.shownFromPermalink = !0)
                }), {
                    tryDisplay: function() {
                        var e = this.getGuideFromUrl();
                        if (e && this.shouldShowPermalinkGuide(e)) return this.showPermalinkGuide(e), !0;
                        return !1
                    },
                    getGuideFromUrl: function() {
                        var e = f.get(),
                            t = qi(e).substring(1),
                            t = $i(t),
                            n = e.indexOf("#");
                        !t.pendo && 0 <= n && (n = qi(e.substring(n + 1)).substring(1), U.extend(t, $i(n)));
                        e = t.pendo || t.c__pendo;
                        return e ? i(e) : null
                    },
                    showPermalinkGuide: function(e) {
                        e.show("permalink")
                    },
                    shouldShowPermalinkGuide: function(e) {
                        return !e.shownFromPermalink
                    }
                }
            }
            var Vf = U.memoize(function() {
                    return Kf(x)
                }),
                Zf = null,
                $f = 500,
                Yf = function(e) {
                    Zf = U.delay(function() {
                        Zf = null, ap()
                    }, e = e || $f), G.guidesProcessingThreadHandle = Zf
                },
                Xf = function() {
                    Zf && (clearTimeout(Zf), Zf = null, G.guidesProcessingThreadHandle = Zf), W.dispatch("guideUpdate/stopScheduledUpdate")
                },
                Qf = function() {
                    Nu.reset(), gp.reset(), bh(), W.commit("guideUpdate/completeUpdate", v());
                    for (var e = 0; e < sr.length; e++) {
                        var t = sr[e];
                        t.parentNode.removeChild(t)
                    }
                    sr.length = 0, W.dispatch("guideUpdate/stopObserver"), S.guideLoopStopped.trigger()
                },
                ep = "default",
                tp = {},
                np = function(e, t) {
                    tp[e] = t
                },
                ip = function(e) {
                    e && "default" != e ? tp[e] ? ep = e : alert("Bad Mode: " + e) : ep = "default"
                },
                rp = function() {
                    return ep
                };

            function op() {
                W.getters["frames/isFollower"]() ? ip(Ff) : ip(ep === Pf ? Pf : "default")
            }
            var ap = function() {
                if (Xf(), Fg()) H("guides are disabled.", "guides", "disabled");
                else if (Pg()) H("guides are delayed.", "guides", "delayed");
                else if (!W.getters["guideState/tabLostFocus"]()) try {
                    var e = g();
                    e && 0 !== e.length && (W.dispatch("guideUpdate/startObserverIfNeeded"), W.dispatch("guideUpdate/startIteration", v()), cp()(e))
                } catch (Ce) {
                    W.commit("guideUpdate/completeUpdate", v()), c(Ce, "ERROR in guide-loop")
                } finally {
                    W.dispatch("guideUpdate/completeIteration", v()), sp()
                }
            };

            function sp() {
                W.getters["guideUpdate/isUpdating"]() ? Yf(50) : W.state.guideUpdate.useObserver && !W.state.guideUpdate.needsUpdate || Yf()
            }
            var up = function() {
                    var e = y.getLocalConfig();
                    y.get("delayGuides") && (delete e.delayGuides, y.setLocalConfig(e)), y.get("guides.delay") && (delete e.guides.delay, y.setLocalConfig(e)), ap()
                },
                dp = function() {
                    Fg() || Gg(!0), Qf(), lg()
                },
                cp = function() {
                    return tp[ep] || fp
                };

            function lp(e, t) {
                var n;
                W.getters["guideUpdate/isPhaseComplete"]()(e) || (W.dispatch("guideUpdate/startPhase", e), W.getters["guideUpdate/exceededIterationTime"]() || (t = t(n = W.getters["guideUpdate/clonePhaseState"]()(e)), W.commit("guideUpdate/updatePhaseState", {
                    phase: e,
                    state: n
                }), t && W.commit("guideUpdate/completePhase", {
                    phase: e,
                    time: v()
                })))
            }
            var fp = function(e) {
                lp("badge", function() {
                    if (mp(e)) return !0
                }), lp("guideCenter", function() {
                    return vp(e), !0
                }), lp("resourceCenter", function() {
                    return Ip($.getResourceCenter()), !0
                }), lp("frameVisibility", function() {
                    return W.dispatch("frames/updateFrameVisibility"), !0
                }), hh() ? lp("guideShowing", function() {
                    return pp(), !0
                }) : xp(e), Tp(), ll(g(), ur)
            };

            function pp() {
                var t = Yg();
                t && (U.each(t.steps, function(e) {
                    hp(t.guide, e)
                }), t.guide.checkForHiddenGroupSteps())
            }

            function hp(e, t) {
                var n, i, r, o, a;
                t.isLocked() || W.getters["frames/isShownInAnotherFrame"]()(t) || (n = t.element, i = t.targetElement, o = t.guideElement, r = J("." + dh), (o = o.find("#pendo-guide-container")[0]) && o.textContent && (o = K(o).fontSize, t.attributes.currentTextZoomFontSize !== o && (t.attributes.currentTextZoomFontSize && t.redraw(), t.attributes.currentTextZoomFontSize = o)), t.elementPathRule && i && !ci.matchesSelector(i, t.elementPathRule) ? t.hide() : (o = xo(n), a = !0, i && o && t.elementContainsRulesList && (o = a = Ph(i, t.elementContainsRulesList)), n && (o || r.hasClass("mouseover")) ? ("tooltip" == t.type && Yd(t), t.domJson && ("tooltip" === t.attributes.calculatedType && oc.placeBBTooltip(t), t.attributes.blockOutUI && t.attributes.blockOutUI.enabled && Z.updateBackdrop(t))) : ("tooltip" === t.type || "tooltip" === t.attributes.calculatedType) && Xd(n) && a || t.hide()))
            }
            var gp = At(50, Tt(function(e) {
                    return e.id
                })),
                mp = function(e) {
                    e = U.filter(e, Lu);
                    return gp.eachUntil(e, function(e) {
                        e.placeBadge()
                    })
                },
                vp = function(e) {
                    G.guideWidget && G.guideWidget.enabled && (e = Xl(e), vf(e, !0))
                };

            function yp(i, e) {
                var r, o, t, n, a;
                $.isFullyCustom(i) || (r = !1, o = [], t = U.filter(i.modules, function(e) {
                    var t, n;
                    return !!e && (!!$.isIframeModule(e) || (!!$.isSandboxModule(e) || ($.isIntegrationModule(e) ? !!$.integrationModuleHasContent(e) || (e.hasResourceCenterContent = !1) : (t = (n = U.filter(e.guidesInModule, function(e) {
                        return e.shouldBeAddedToResourceCenter() ? !(e.ineligibleForRC = !1) : (e.ineligibleForRC = !0, e.control && o.push(e), !1)
                    })).length, e.hasResourceCenterContent = !!t, i.activeModule && e.id === i.activeModule.id && (n = It(U.map(n, function(e) {
                        var t = e.isAnnouncement() || e.isWhatsNew() ? null : U.pluck(e.steps, "seenState");
                        return {
                            id: e.id,
                            seenState: t
                        }
                    })), e.eligibleGuidesInModuleHash && n !== e.eligibleGuidesInModuleHash && (r = !0), e.eligibleGuidesInModuleHash = n), t))))
                }), n = !1, i.activeModule || (a = It(U.map(t, function(e) {
                    return {
                        id: e.id
                    }
                })), i.eligibleModulesHash && i.eligibleModulesHash !== a && $.replaceResourceCenterContent(i.id, qv, n = !0), i.eligibleModulesHash = a), e(i, t, o), 1 === t.length && (i.skipResourceCenterHomeView = !0, i.moduleIdToReplaceHomeViewWith = t[0].id, a = !i.activeModule && n, e = i.activeModule && i.activeModule.id !== t[0].id, (a || e || r) && $.replaceResourceCenterContent(i.moduleIdToReplaceHomeViewWith, qv, !0)), t && (a = D(n = U.find(t, function(e) {
                    return e.isContinuation(bc())
                }), "attributes.doNotResume"), e = D(n, "attributes.resourceCenter.integrationProvider"), $.isSupportedNativeIntegration(e) && !a && i && (i.continueToNativeModule = !0, n.continueToNativeModule = !0)), i.activeModule && ((e = U.find(t, function(e) {
                    return e.id === i.activeModule.id
                })) && r && $.replaceResourceCenterContent(i.activeModule.id, qv, !0), e || $.replaceResourceCenterContent(i.id)), $.repositionResourceCenter())
            }

            function bp(e, t) {
                var n, i, r, o;
                $.isFullyCustom(e) || (n = [], o = [], (r = U.find(e.modules, function(e) {
                    return !!$.isIframeModule(e) || (!!$.isSandboxModule(e) || !!$.isIntegrationModule(e) && (!!$.integrationModuleHasContent(e) || (e.hasResourceCenterContent = !1)))
                })) && n.push(r), r = U.flatten(U.pluck(e.modules, "guidesInModule")), o = U.filter(U.compact(r), function(e) {
                    return e.control
                }), n.length || (i = U.reduce(e.modules, function(t, n) {
                    return U.each(n.guidesInModule, function(e) {
                        t[e.id] = n
                    }), t
                }, {}), r = U.filter(r, function(e) {
                    return e && e.steps && e.steps.length
                }), r = U.sortBy(r, function(e) {
                    return e.steps[0].elementPathRule ? 1 : 0
                }), (r = i[(r = U.find(r, function(e) {
                    return e.shouldBeAddedToResourceCenter()
                })) && r.id]) && n.push(r)), t(e, n, o))
            }

            function wp(e, t, n) {
                var i, r, o = ur[e.id];
                t && t.length || (t = -1 !== e.launchMethod.indexOf("badge"), i = -1 !== e.launchMethod.indexOf("dom"), r = -1 !== e.launchMethod.indexOf("extensionIcon"), e.hasResourceCenterContent = !1, t ? (e.isShown() && e.hide(), o && o.hide(), U.each(n, function(e) {
                    e.hasGuideBeenControlled() || e.steps[0].onControlGuide("control")
                }), e.badgeHidden = !0, delete e.activeModule) : (i || r) && (e.showEmptyState = !0, e.controlGuidesInAllModules = n)), e.badgeHidden && e.hasResourceCenterContent && !e.isNativeModuleActive && (o || (U.isFunction(e.placeBadge) && e.placeBadge(), o = ur[e.id]), o && o.show(), e.badgeHidden = !1)
            }

            function Ip(e) {
                var t, n;
                e && (e.skipResourceCenterHomeView = !1, e.hasResourceCenterContent = !0, delete e.moduleIdToReplaceHomeViewWith, t = D(n = e.activeModule, "attributes.resourceCenter.integrationProvider"), e.isNativeModuleActive = n && $.isSupportedNativeIntegration(t), $.isFullyCustom(e) ? e.hasResourceCenterContent = !0 : ((e.isShown() || !W.getters["frames/isLeader"]() ? yp : bp)(e, wp), e.isNativeModuleActive && (e.isShown() && e.hide(), (n = ur[e.id]) && n.hide()), "dom" === e.launchMethod && ($.updateNotificationBubbles(), $.adjustNotificationBubbleForResize())))
            }

            function Sp(e, t) {
                var e = U.find(e, function(e) {
                        return e.isContinuation(t)
                    }),
                    n = e && e.attributes && e.attributes.doNotResume;
                if (e && !n) return e
            }
            var xp = function(n) {
                    U.each([function() {
                        lp("permalink", function() {
                            return hh() || Vf().tryDisplay(G), !0
                        })
                    }, function() {
                        lp("walkthrough", function() {
                            var e;
                            return hh() || (e = Sp(n, bc())) && e.show("continue"), !0
                        })
                    }, function() {
                        lp("autoDisplay", function() {
                            var e, t;
                            return !!hh() || (!!Sp(n, bc()) || (e = !1, t = Nu.tryDisplay(n, G, function() {
                                e = !0
                            }), e || t))
                        })
                    }], function(e) {
                        return !!e()
                    })
                },
                Cp = [];

            function Ep(e, t) {
                t = t || e.name || Cp.length, Cp.push([t, e])
            }

            function _p(t) {
                var e = dt(Cp, function(e) {
                    return e[1] === t || e[0] === t
                });
                0 <= e && Cp.splice(e, 1)
            }

            function Tp() {
                U.each(Cp, function(e) {
                    lp(e[0], e[1])
                })
            }
            var Ap = function() {
                var a = {
                        body: "pendo-launch-modal-body",
                        closeButton: "pendo-launch-modal-close-button",
                        container: "pendo-launch-modal",
                        footer: "pendo-launch-modal-footer",
                        header: "pendo-launch-modal-header",
                        launchButton: "pendo-launch-modal-launch-button",
                        title: "pendo-launch-modal-title",
                        logoContainer: "pendo-launch-modal-logo-container",
                        style: "pendo-launch-modal-style",
                        commIframeId: "pendo-designer-communication-iframe"
                    },
                    s = {
                        GRAY_LIGHTER_6: "#EAECF1",
                        GRAY_PRIMARY: "#2A2C35",
                        PENDO_PINK: "#FF4876",
                        TEAL_DARKER: "#036463",
                        TEAL_PRIMARY: "#008180",
                        WHITE: "#FFFFFF"
                    },
                    u = {
                        BUTTON_HEIGHT: 35,
                        HEADER_HEIGHT: 60,
                        MODAL_HEIGHT: 235,
                        MODAL_TOP_OFFSET: 150,
                        MODAL_WIDTH: 370
                    },
                    d = (u.FOOTER_HEIGHT = 1.25 * u.HEADER_HEIGHT, u.BODY_HEIGHT = "calc(100% - " + u.HEADER_HEIGHT + "px - " + u.FOOTER_HEIGHT + "px)", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.12 164.12"><defs><style>.cls-1{fill:#fff;}</style></defs><title>chevron</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="82.06 0 0 82.06 82.06 82.06 82.06 164.13 164.13 82.06 164.13 0 82.06 0"/></g></g></svg>'),
                    c = {},
                    l = (c["#" + a.closeButton + ":hover"] = {
                        "background-color": s.GRAY_LIGHTER_6
                    }, c["#" + a.launchButton + ":hover"] = {
                        "background-color": s.TEAL_DARKER + " !important"
                    }, {
                        PRIMARY_FONT: "Helvetica Neue"
                    });
                return {
                    listen: function() {
                        U.isFunction(Jv.addEventListener) && Jv.addEventListener("keyup", function(e) {
                            e.shiftKey && e.altKey && "Digit7" === e.code && t(!0), e.shiftKey && e.altKey && "Digit8" === e.code && t(!1, !0)
                        }, !1)
                    },
                    launchOnLocalStorageToken: v,
                    ids: a,
                    removeElement: h,
                    attemptToLaunch: t,
                    loadPluginJs: function() {
                        var t;
                        G.designerLaunched || (t = U.once(function(e) {
                            v(e, !0)
                        }), sa(function(e) {
                            "pendo-designer-launch-modal" === e.data.destination && e.data.token && t(e.data.token)
                        }))
                    }
                };

                function f(e, t) {
                    var n, i, r, o = {
                            "background-color": s.WHITE,
                            height: u.MODAL_HEIGHT + "px",
                            "min-height": u.MODAL_HEIGHT + "px",
                            width: u.MODAL_WIDTH + "px",
                            position: "fixed",
                            top: u.MODAL_TOP_OFFSET + "px",
                            left: "50%",
                            "margin-left": -u.MODAL_WIDTH / 2 + "px",
                            "border-radius": "4px",
                            "box-shadow": "0px 13px 28px rgba(0, 0, 0, 0.17)",
                            overflow: "hidden",
                            "z-index": "300000",
                            "box-sizing": "border-box"
                        },
                        o = p("div", a.container, o);
                    o.appendChild(((i = Jv.createElement("style")).setAttribute("id", a.style), i.type = "text/css", r = Jv.createTextNode(function(e) {
                        return U.reduce(U.pairs(e), function(e, t) {
                            var n = t[0],
                                t = t[1];
                            return e + n + "{" + U.reduce(U.pairs(t), function(e, t) {
                                return e + t[0] + ":" + t[1] + ";"
                            }, "") + "} "
                        }, "")
                    }(c)), i.appendChild(r), i)), o.appendChild((r = t, i = p("div", a.header, {
                        "background-color": s.GRAY_PRIMARY,
                        height: u.HEADER_HEIGHT + "px",
                        "min-height": u.HEADER_HEIGHT + "px",
                        width: "100%",
                        padding: "10px 20px",
                        display: "flex",
                        "align-items": "center",
                        "box-sizing": "border-box"
                    }), (t = p("div", a.logoContainer, {
                        height: "38px",
                        width: "44px",
                        "background-color": s.PENDO_PINK,
                        padding: "8px",
                        "border-radius": "3px",
                        "box-sizing": "border-box"
                    })).innerHTML = d, i.appendChild(t), (t = p("div", a.title, {
                        width: "100%",
                        display: "flex",
                        "align-items": "center",
                        "font-family": l.PRIMARY_FONT,
                        "font-size": "18px",
                        color: s.WHITE,
                        "margin-left": "10px",
                        "box-sizing": "border-box"
                    })).innerText = r ? "VIA Designer" : "Pendo Designer", i.appendChild(t), i)), o.appendChild(((r = p("div", a.body, {
                        height: u.BODY_HEIGHT,
                        "min-height": u.BODY_HEIGHT,
                        width: "100%",
                        display: "flex",
                        padding: "32px 20px",
                        "font-family": l.PRIMARY_FONT,
                        "font-size": "14px",
                        "box-sizing": "border-box"
                    })).innerText = "Thanks for letting us know you're here. We're ready to try this again. Launch Designer below to begin.", r)), o.appendChild((n = e, t = p("div", a.footer, {
                        "align-items": "center",
                        "border-top": "1px solid" + s.GRAY_LIGHTER_6,
                        display: "flex",
                        height: u.FOOTER_HEIGHT + "px",
                        "justify-content": "flex-end",
                        "min-height": u.FOOTER_HEIGHT + "px",
                        padding: "10px",
                        width: "100%",
                        "box-sizing": "border-box"
                    }), (i = p("button", a.closeButton, {
                        "border-radius": "3px",
                        border: "none",
                        height: u.BUTTON_HEIGHT + "px",
                        "padding-right": "10px",
                        "padding-left": "10px",
                        "font-family": l.PRIMARY_FONT,
                        "font-size": "14px",
                        display: "flex",
                        "line-height": "120%",
                        "margin-right": "10px",
                        "min-width": "90px",
                        "justify-content": "center",
                        "box-sizing": "border-box"
                    })).innerHTML = "Close", i.onclick = function() {
                        h(a.container), h(a.commIframeId)
                    }, (r = p("button", a.launchButton, {
                        "background-color": s.TEAL_PRIMARY,
                        "border-radius": "3px",
                        color: s.WHITE,
                        border: "none",
                        height: u.BUTTON_HEIGHT + "px",
                        "padding-right": "10px",
                        "padding-left": "10px",
                        "font-family": l.PRIMARY_FONT,
                        "font-size": "14px",
                        display: "flex",
                        "line-height": "120%",
                        "min-width": "90px",
                        "justify-content": "center",
                        "box-sizing": "border-box"
                    })).innerHTML = "Launch Designer", r.onclick = function() {
                        v(n)
                    }, t.appendChild(i), t.appendChild(r), t)), Jv.body.appendChild(o)
                }

                function p(e, t, n) {
                    e = Jv.createElement(e);
                    return e.setAttribute("id", t), U.extend(e.style, n), e
                }

                function t(t, n) {
                    var i, r, o;
                    G.designerLaunched || (o = U.once(function(e) {
                        t || !n ? v(e) : f(e, t), g()
                    }), sa(function(e) {
                        "pendo-designer-launch-modal" === e.data.destination && (clearInterval(i), e.data.viaconfirmed ? clearInterval(r) : e.data.token ? (o(e.data.token), e = w.parse(e.data.token), U.contains(e.host, "via") && !e.visitorId && (r = r || setInterval(function() {
                            Jv.getElementById(a.commIframeId) && m()
                        }, 100))) : g())
                    }), Ic.addCommunicationIframe({
                        defaultBucket: "in-app-designer"
                    }, function() {
                        m(), i = Wv.setInterval(m, 50)
                    }))
                }

                function h(e) {
                    Jv.getElementById(e) && Jv.getElementById(e).remove()
                }

                function g() {
                    var e = Jv.querySelector("#" + a.commIframeId + '[src*="pendo"]');
                    e && e.remove()
                }

                function m() {
                    var e = Jv.getElementById(a.commIframeId);
                    e && e.contentWindow && U.isFunction(e.contentWindow.postMessage) && e.contentWindow.postMessage({
                        destination: "pendo-designer-ls",
                        source: "pendo-designer-launch-modal",
                        visitorId: G.visitorId
                    }, D(G, "designerv2.hostConfig.host", et))
                }

                function v(e, t) {
                    var n = {},
                        e = w.parse(e);
                    n.target = e.target || "latest", e.host && (n.host = e.host), e.lookaside && (n.lookaside = e.lookaside), t && (n.selectionOnly = t), h(a.container), Ic.launchInAppDesigner(n)
                }
            }();

            function Rp(e) {
                var t = z.defer();
                return Fo(e, function() {
                    t.resolve()
                }), t.promise
            }

            function kp(e, t) {
                return 0 < U.size(da._handlers.validateGlobalScript) ? Ii.get(t).then(function(e) {
                    return da.validateGlobalScript(e.data)
                }).then(function() {
                    return e(t)
                }) : e(t)
            }

            function Op(e, t) {
                return t ? e(t) : z.resolve()
            }
            var Np = U.wrap(U.once(U.wrap(Rp, kp)), Op);

            function Lp(n, r) {
                var o = !1;
                return n.addEventListener("message", function(e) {
                    i(e.data), r.state.guideUpdate.useObserver && r.dispatch("guideUpdate/documentChanged")
                }), {
                    postMessage: function(e) {
                        var t;
                        o || (t = U.extend({
                            apiKey: G.apiKey,
                            agentInstallType: xe()
                        }, e), n.postMessage(t), setTimeout(function() {
                            i(t)
                        }, 0))
                    },
                    close: function() {
                        o = !0, U.isFunction(n.close) && n.close()
                    }
                };

                function i(e) {
                    try {
                        var t, n, i;
                        !e.action || o || (t = e.agentInstallType === Ie, n = r.getters["frames/inExtensionLeadershipMode"](), i = t || n, (e.apiKey === G.apiKey || i) && /^frames\//.test(e.action) && r.dispatch(e.action, e))
                    } catch (Ce) {
                        c(Ce, "ERROR in cross frame channel")
                    }
                }
            }
            var Mp = "frames/removeFrame";

            function Fp(e) {
                if (!U.isString(e)) return e;
                try {
                    return w.parse(e)
                } catch (Ce) {
                    return e
                }
            }

            function Pp(e, t) {
                return new(U.isFunction(e.MessageChannel) ? Hp : zp)(e, t)
            }

            function Bp(e, t, n) {
                return new Gp(e, t, n, Pp(t, n))
            }

            function Gp(e, t, n, i) {
                this.init(e, t, n, i)
            }
            U.extend(Gp.prototype, {
                init: function(e, t, n, i) {
                    this._store = e, this._window = t, this._singletonMessageHandler = n, this._listeners = [], this._targetOrigin = n.targetOrigin(), this._impl = i, this._impl.onconnect = U.bind(this._frameConnectHandler, this), this._impl.onmessage = U.bind(this._fireMessageListeners, this), this._impl.onrelay = U.bind(this._topMessageHandler, this), this._connectToTop(10, 0, function() {
                        this._addControlMessageHandler(), this._connectToTop(250, 21, function() {
                            this.close(), this._store.commit("frames/setConnectFailed")
                        })
                    })
                },
                _fireMessageListeners: function(t) {
                    U.each(this._listeners, function(e) {
                        e(t)
                    })
                },
                _controlMessageHandler: function(e) {
                    e = this._impl._parseMessage(e);
                    e.data && ("pendo::connect" === e.data.action && this._impl.frameConnect(e), e.data.action === Mp && this._topMessageHandler(e))
                },
                _topMessageHandler: function(e) {
                    !e.data || /^pendo::/.test(e.data.action) || this._closed || (e.data.action === Mp && this._impl.frameDisconnect(e), this._impl.broadcast(e))
                },
                _connectToTop: function(e, t, n) {
                    this._impl.connectToTop({
                        action: "pendo::connect",
                        frameId: this._store.state.frames.frameId
                    }, this._targetOrigin), setTimeout(U.bind(function() {
                        this._connected || (0 === t ? U.isFunction(n) && n.call(this) : 0 < t && this._connectToTop(Math.min(2 * e, 1e4), t - 1, n))
                    }, this), e)
                },
                _addControlMessageHandler: function() {
                    this._singletonMessageHandler.addEventListener(U.bind(this._controlMessageHandler, this))
                },
                _frameConnectHandler: function(e) {
                    e.data && "pendo::connectSuccess" === e.data.action && (this._connected = !0, this._impl.connectSuccess(e), this._store.dispatch("frames/join"))
                },
                addEventListener: function(e, t) {
                    "message" === e && this._listeners.push(t)
                },
                postMessage: function(e) {
                    this._closed || this._impl.postMessage(e)
                },
                close: function() {
                    this._closed = !0, this._listeners.length = 0, this._impl.close()
                }
            });
            var Up = {
                _frameConnectHandler: function(e) {
                    U.isFunction(this.onconnect) && this.onconnect(this._parseMessage(e))
                },
                _messageReceived: function(e) {
                    U.isFunction(this.onmessage) && this.onmessage(this._parseMessage(e))
                },
                _relayMessage: function(e) {
                    U.isFunction(this.onrelay) && this.onrelay(this._parseMessage(e))
                },
                _parseMessage: function(e) {
                    var t;
                    return U.isString(e.data) ? ((t = U.pick(e, "type", "origin", "source", "ports", "lastEventId", "target")).data = Fp(e.data), t) : e
                }
            };

            function Dp(t) {
                return t && U.all(["addEventListener", "start"], function(e) {
                    return U.isFunction(t[e])
                })
            }

            function Hp(e, t) {
                this._window = e, this._ports = {}, this._singletonMessageHandler = t, this._targetOrigin = t.targetOrigin()
            }

            function zp(e, t) {
                this._window = e, this._frames = {}, this._isTop = e == e.top, this._singletonMessageHandler = t, this._boundMessageReceived = U.bind(this._messageReceived, this), this._isTop || (this._boundFrameConnectHandler = U.bind(this._frameConnectHandler, this), t.addEventListener(this._boundFrameConnectHandler))
            }

            function jp(t, e) {
                var n = [],
                    i = !1;
                return {
                    targetOrigin: function() {
                        return i ? location.origin : "*"
                    },
                    secure: function(e) {
                        i = e
                    },
                    addEventListener: function(e) {
                        0 === n.length && t.addEventListener("message", r), n.push(e)
                    },
                    removeEventListener: function(e) {
                        e = n.indexOf(e);
                        0 <= e && n.splice(e, 1), 0 === n.length && t.removeEventListener("message", r)
                    }
                };

                function r(t) {
                    i && !e(t.origin) || U.each(n, function(e) {
                        U.isFunction(e) && e(t)
                    })
                }
            }
            U.extend(Hp.prototype, Up, {
                connectToTop: function(e, t) {
                    this._closeChannel(), this._openChannel();
                    var n = [];
                    this._channel.port2 && n.push(this._channel.port2), this._window.top.postMessage(e, t, n)
                },
                frameConnect: function(e) {
                    var t = e.ports[0];
                    Dp(t) && ((this._ports[e.data.frameId] = t).addEventListener("message", U.bind(this._relayMessage, this)), t.start(), t.postMessage({
                        action: "pendo::connectSuccess"
                    }))
                },
                frameDisconnect: function(e) {
                    delete this._ports[e.data.frameId]
                },
                connectSuccess: function() {
                    this._port.removeEventListener("message", this._boundFrameConnectHandler), this._port.addEventListener("message", U.bind(this._messageReceived, this))
                },
                broadcast: function(t) {
                    U.each(this._ports, function(e) {
                        t.target !== e && e.postMessage(t.data)
                    })
                },
                postMessage: function(e) {
                    this._port && this._port.postMessage(e), e.action === Mp && this._window.top.postMessage(e, this._targetOrigin)
                },
                close: function() {
                    U.each(this._ports, function(e) {
                        e.close()
                    }), this._ports = {}, this._closeChannel()
                },
                _openChannel: function() {
                    this._channel = new this._window.MessageChannel, this._port = this._channel.port1, this._boundFrameConnectHandler = U.bind(this._frameConnectHandler, this), this._port.addEventListener("message", this._boundFrameConnectHandler), this._port.start()
                },
                _closeChannel: function() {
                    this._port && U.isFunction(this._port.close) && (this._port.close(), this._port = null, this._channel = null)
                }
            }), U.extend(zp.prototype, Up, {
                connectToTop: function(e, t) {
                    this._isTop || this._window.top.postMessage(w.stringify(e), t)
                },
                frameConnect: function(e) {
                    this._frames[e.data.frameId] = e.source, this._relayHandlerAdded || (this._relayHandlerAdded = !0, this._boundRelayMessage = U.bind(this._relayMessage, this), this._singletonMessageHandler.addEventListener(this._boundRelayMessage)), e.source.postMessage(w.stringify({
                        action: "pendo::connectSuccess"
                    }))
                },
                frameDisconnect: function(e) {
                    delete this._frames[e.data.frameId]
                },
                connectSuccess: function() {
                    this._singletonMessageHandler.removeEventListener(this._boundFrameConnectHandler), this._singletonMessageHandler.addEventListener(this._boundMessageReceived)
                },
                broadcast: function(t) {
                    var n = this._singletonMessageHandler.targetOrigin();
                    U.each(this._frames, function(e) {
                        t.source != e && e.postMessage(w.stringify(t.data), n)
                    }), t.source != this._window && this._messageReceived(t)
                },
                postMessage: function(e) {
                    this._isTop ? this._relayMessage({
                        data: e,
                        source: this._window
                    }) : this._window.top.postMessage(w.stringify(e), this._singletonMessageHandler.targetOrigin())
                },
                close: function() {
                    var e = this._singletonMessageHandler;
                    e.removeEventListener(this._boundFrameConnectHandler), e.removeEventListener(this._boundMessageReceived), e.removeEventListener(this._boundRelayMessage)
                }
            });
            var Wp = jp(Wv, Ro);

            function Jp(e, r) {
                return e.removeEventListener = U.wrap(e.removeEventListener, function() {
                    throw new Error("Needs implementation")
                }), e.addEventListener = U.wrap(e.addEventListener, function(e, t, n) {
                    var i = U.toArray(arguments).slice(1);
                    return "message" === t && (i[1] = function(e) {
                        if (e.data.tabId === r.getTabId()) return n.apply(this, arguments)
                    }), e.apply(this, i)
                }), e.postMessage = U.wrap(e.postMessage, function(e, t) {
                    return t.tabId = r.getTabId(), e.apply(this, U.toArray(arguments).slice(1))
                }), e
            }

            function qp(e) {
                if (!b.addEventListener) return {
                    addEventListener: U.noop,
                    postMessage: U.noop,
                    close: U.noop
                };
                var t = !!Wv.__pendoExtensions;
                if (y.get("preferBroadcastChannel") && !t && U.isFunction(Wv.BroadcastChannel)) {
                    e.commit("frames/setChannelType", "BroadcastChannel");
                    t = Jp(new BroadcastChannel("pendo"), Rn);
                    if (t && U.isFunction(t.postMessage)) return t
                }
                return e.commit("frames/setChannelType", "TopFrameRelay"), Bp(e, Wv, Wp)
            }

            function Kp(e, t) {
                if ("undefined" != typeof Turbolinks) {
                    var n = Turbolinks && Turbolinks.EVENTS && Turbolinks.EVENTS.LOAD;
                    if (n) return void q(e, n, t)
                }
            }
            var Vp = "eJwFwIEIAAAAwDDQd3-N1QABFQC5",
                Zp = "guides_blocked",
                $p = 18e5,
                Yp = 144e5,
                Xp = "1",
                Qp = "0",
                eh = "Guides disabled: unreachable endpoint guide.gif";

            function th() {
                return d.read(Zp) === Xp
            }

            function nh(e) {
                var t = d.read(Zp);
                return t === Xp ? (H(eh), z.reject()) : t === Qp ? z.resolve() : Dr(Pr("guide.gif", e, {
                    jzb: Vp,
                    ct: v(),
                    v: it
                })).then(function() {
                    d.write(Zp, Qp, Yp)
                }, function(e) {
                    return H(eh), d.write(Zp, Xp, $p), z.reject(e)
                })
            }
            var ih = [],
                rh = "Guide was not shown because this visitor is in a control group of an active experiment for the guide";

            function oh() {
                var e = yr(),
                    t = y.get("guideCssAssetPath");
                return t || (/local\.pendo\.io/.test(e) ? e + "/dist/guide.css" : e + "/agent/releases/" + rt + "/guide.css")
            }

            function ah() {
                var e = yr();
                return /local\.pendo\.io/.test(e) ? e + "/dist/pendo.debugger.min.js" : e + "/agent/releases/" + rt + "/pendo.debugger.min.js"
            }

            function sh() {
                var e = yr(),
                    t = y.get("previewModeAssetPath");
                return t || (/local\.pendo\.io/.test(e) ? e + "/dist/pendo.preview.min.js" : e + "/agent/releases/" + rt + "/pendo.preview.min.js")
            }
            var uh = function() {
                    var t = [];
                    return {
                        addGuide: function(e) {
                            return t.push(e), lr(U.difference(g(), t)), t
                        }
                    }
                }(),
                dh = "_pendo-guide_",
                ch = "_pendo_g_",
                lh = 0;

            function fh(e) {
                lh = e
            }

            function ph() {
                return lh
            }
            var hh = function() {
                    return U.any(g(), function(e) {
                        return e.isShown()
                    })
                },
                gh = function(e, t) {
                    var n = J("._pendo-close-guide_", e);
                    return n.length || (n = J("<button>").attr("id", "_pendo-close-guide_").attr("aria-label", "close").addClass("_pendo-close-guide_").html("&times;"), Ye() ? 9 < u && n.css({
                        top: 3
                    }) : 8 === u ? n.css({
                        top: 9,
                        right: 2
                    }) : 9 === u ? n.css({
                        right: 2,
                        top: 3
                    }) : 9 < u && n.css({
                        top: 3
                    }), e = J("._pendo-guide-container_", e)[0] || e, n.appendTo(e), n[0].onclick = function() {
                        t()
                    }), n[0]
                },
                mh = function(n) {
                    return U.reduce(g(), function(e, t) {
                        return n(t) && e.push(t), e
                    }, [])
                },
                vh = function(e, t, n, i, r) {
                    e = hr(x(e), t);
                    e && (e.seenState = n, e.lastSeenAt = i, r !== qv && (e.dismissCount = r))
                },
                yh = function(e) {
                    for (var t = new RegExp("^" + ch); e;) {
                        if (U.isString(e.id) && t.test(e.id)) return e.id.replace(t, "");
                        e = e.parentNode
                    }
                    return null
                };

            function bh(t) {
                U.each(g(), function(e) {
                    U.isFunction(e.isShown) && e.isShown() && e.hide(t)
                })
            }
            var wh = function(e) {
                return e && e.guideId
            };

            function Ih(e) {
                return e && U.isFunction(e.render)
            }
            var Sh = function(e, t) {
                    var n, i;
                    return wh(e) && (t = e, e = null), Ih(t) ? t : t ? (n = x(t.guideId)) && n.findStepById(t.id) : (n = U.find(g(), function(e) {
                        return e.isShown()
                    })) ? ((i = e ? yh(e.target || e.srcElement || e) : i) ? (t = n.findStepById(i)) || Gr("findStepForGuideEvent: step with id " + i) : (t = U.find(n.steps, function(e) {
                        return e.isShown()
                    })) || Gr("findStepForGuideEvent: no step shown"), t) : void 0
                },
                xh = function(e) {
                    var t = "element" === e.advanceMethod ? "click" : "mouseover",
                        n = Gu(e);
                    "tooltip" === e.type && U.isFunction(e.teardownElementEvent) ? e.teardownElementEvent(n, t) : m(n, t, kh, !0)
                };

            function Ch(e) {
                return e.isLocked() && (!e.elements || !e.elements.length || void Ur('guide "' + e.guideId + '", step "' + e.id + '" locked and rendered', "pendo.io locked step exception"))
            }
            var Eh = function(e) {
                    if (!G.designer && e && "building-block" === D(e, "attributes.type", "")) {
                        var t = e.steps[0],
                            n = D(e, "launchMethod", "").split("-"),
                            i = U.contains(n, "dom"),
                            n = U.contains(n, "badge");
                        if ("badge" === t.seenReason && n) {
                            var n = J("#_pendo-badge_" + t.id),
                                r = n.find("input"),
                                r = 0 < r.length ? r : n;
                            if (r.length < 1) return;
                            r[0].focus()
                        }
                        "dom" !== t.seenReason || !i || (n = J(D(e, "attributes.activation.selector", ""))).length < 1 || n[0].focus()
                    }
                },
                _h = function(e, t) {
                    var n, i, r, o, a = null;
                    e && e instanceof Object && e.until && (a = e.until), (t = Sh(e, t)) && t.id ? Ch(t) || ("dismissed" === t.seenState ? H("step already dismissed.  can't dismiss again", ["guides", "error"]) : (H("onGuideDismissed called", "guides"), S.beforeDismiss.trigger(t).cancel ? H("Guide dismiss canceled during runtime in step: " + t.id) : a ? t.hide({
                        stayHidden: !0
                    }) : (xh(t), e = t.id, r = x(a = t.guideId), n = (n = U.first(r && r.steps)) && n.seenReason, r = r && r.language, i = D(t, "dismissCount", 0) + 1, qh(a, e, j(), n, r), r = v(), vh(a, e, "dismissed", r, i), (o = U.isFunction(t.getGuide) && t.getGuide()) && o.attributes && o.attributes.doNotResume || mc({
                        guideId: a,
                        guideStepId: e,
                        time: r,
                        state: "dismissed",
                        seenReason: n,
                        visitorId: j(),
                        dismissCount: i
                    }), "auto" !== n && "repeatGuide" !== n || Xh(r, Yh.DISMISSED), t.hide(), Eh(o), hh() || (Qf(), ap())))) : Qf()
                },
                Th = function(e, t, n) {
                    var i, r, o, a, s, u, d;
                    H("onGuideSnoozed called", "guides"), (t = Sh(e, t)) ? "snoozed" === t.seenState ? H("step already snoozed.  can't snooze again", ["guides", "error"]) : S.beforeSnooze.trigger(t).cancel ? H("Guide snooze canceled during runtime in step: " + t.id) : (n || (n = 864e5, H("no snooze duration provided, defaulting to 1 day")), Ch(t) || (xh(t), e = t.id, i = t.guideId, r = j(), a = (o = x(i)) && o.language, s = (s = U.first(o && o.steps)) && s.seenReason, u = v(), H("snoozing guide for " + n + " ms"), t.snoozeEndTime = d = u + n, Kh(i, e, r, s, a, n), vh(i, e, "snoozed", u), o && o.attributes && o.attributes.doNotResume || mc({
                        guideId: i,
                        guideStepId: e,
                        time: u,
                        state: "snoozed",
                        seenReason: s,
                        visitorId: j(),
                        snoozeEndTime: d
                    }), "auto" !== s && "repeatGuide" !== s || Xh(u, Yh.SNOOZED), t.hide(), Eh(o), hh() || (Qf(), ap()))) : (H("missing step.  can't snooze", ["guides", "error"]), Qf(), Gr("onGuideSnoozed: missing step"))
                },
                Ah = function() {
                    var e = Yg();
                    e && U.each(e.steps, function(e) {
                        var t = "element" == e.advanceMethod ? "click" : "mouseover",
                            n = Gu(e);
                        "tooltip" === e.type && U.isFunction(e.teardownElementEvent) ? e.teardownElementEvent(n, t) : m(n, t, kh, !0)
                    })
                },
                Rh = function(e) {
                    var t, n, i, r = (r = e && e.step) || Sh(e);
                    r ? (i = e && e.params, i = U.find(i, function(e) {
                        return "goToStepId" === e.name
                    }), t = i && i.value, (t = e && e.destinationStepId ? e.destinationStepId : t) ? t === r.id ? H("[goToStep] step id matches the current step", ["guides", "error"]) : (i = x(r.guideId), (n = U.find(i.steps, function(e) {
                        return e.id === t
                    })) ? (n = U.indexOf(i.steps, n), i = U.indexOf(i.steps, r), e.steps = Math.abs(n - i), e.action = e.action || "goToStep", e.destinationStepId = t, i < n ? kh(e, r, !1) : Oh(e, r)) : H("[goToStep] guide has no step matching the step id", ["guides", "error"])) : H("[goToStep] missing step id to go to", ["guides", "error"])) : H("[goToStep] missing current step", ["guides", "error"])
                },
                kh = function(e, t, n) {
                    if (Ah(), 1 === arguments.length && wh(e) && (s = fr(e.guideId), i = Sh(), s && i && U.first(s.steps).id === i.id && U.last(s.steps).id === e.id && (H("Cannot skip to last step from first step"), e = null)), H("onGuideAdvanced called", "guides"), t = Sh(e, t)) {
                        if (!Ch(t))
                            if ("advanced" !== t.seenState || n)
                                if (S.beforeAdvance.trigger(t).cancel) H("Guide advance canceled during runtime in step: " + t.id);
                                else {
                                    var i = e && e.action && "goToStep" === e.action || !1,
                                        r = x(t.guideId),
                                        o = r && r.language,
                                        a = r && r.steps && U.indexOf(r.steps, t);
                                    if (e && U.isNumber(e.steps) && 1 < e.steps && !i) {
                                        var s = a + (e.steps - 1),
                                            u = s = s >= r.steps.length ? r.steps.length - 1 : s;
                                        !0 === e.skip && (u = a + 1);
                                        for (var d = a; d < u; ++d) {
                                            t = r.steps[d], Vh(r.id, t.id, j(), t.seenReason, o, d !== a);
                                            var c = v();
                                            mc({
                                                guideId: t.guideId,
                                                guideStepId: t.id,
                                                time: c,
                                                state: "advanced",
                                                seenReason: t.seenReason,
                                                visitorId: j()
                                            }), vh(r.id, t.id, "advanced", c)
                                        }
                                        return kh(r.steps[s], t, !0)
                                    }
                                    var l, i = t.id,
                                        s = t.guideId,
                                        f = U.first(r && r.steps),
                                        p = f && f.seenReason,
                                        h = e && e.destinationStepId,
                                        g = (h || (g = e && U.isNumber(e.steps) && 1 < e.steps ? e.steps : 1, h = (g = U.isNumber(a) && r && r.steps && r.steps[a + g]) && g.id || null), h || H("missing destination step id"), H("advancing guide"), Vh(s, i, j(), p, o, n, h), H("update guide status"), r && U.last(r.steps).id === i && (l = D(t, "dismissCount", 0) + 1), (new Date).getTime()),
                                        m = (vh(s, i, "advanced", g, l), U.isFunction(t.getGuide) && t.getGuide());
                                    m && m.attributes && m.attributes.doNotResume || mc({
                                        guideId: s,
                                        guideStepId: i,
                                        time: g,
                                        state: "advanced",
                                        seenReason: p,
                                        visitorId: j(),
                                        destinationStepId: h,
                                        dismissCount: l
                                    }), !f || "auto" !== f.seenReason && "repeatGuide" !== f.seenReason || Xh(g, Yh.ADVANCED), H("stop guide"), Qf(), H("start guides"), ap()
                                }
                        else H("step already advanced.  can't advance again", ["guides", "error"])
                    } else H("missing step.  can't advance", ["guides", "error"]), Qf(), Gr("onGuideAdvanced: missing step")
                },
                Oh = function(e, t) {
                    var n, i, r, o, a, s;
                    H("onGuidePrevious called", "guides"), (t = Sh(e, t)) ? "advanced" === t.seenState ? H("step already advanced.  can't go to previous again", ["guides", "error"]) : S.beforePrevious.trigger(t).cancel ? H("Guide previous canceled during runtime in step: " + t.id) : (o = x(n = t.guideId), s = e && e.action && "goToStep" === e.action || !1, 0 !== (i = U.indexOf(o.steps, t)) && (r = "element" == t.advanceMethod ? "click" : "mouseover", a = Gu(t), "tooltip" === t.type && U.isFunction(t.teardownElementEvent) ? t.teardownElementEvent(a, r) : m(a, r, kh, !0), a = e && U.isNumber(e.steps) ? e.steps : 1, r = U.first(o && o.steps), a = 0 <= (i = i - a) ? o.steps[i] : r, i = r && r.seenReason, r = o && o.language, o = a.id, (o = s && e && e.destinationStepId ? e.destinationStepId : o) || H("missing destination step id"), H("advancing guide"), Vh(n, t.id, j(), i, r, !1, o), H("update guide status"), a = (new Date).getTime(), vh(t.guideId, t.id, "advanced", a), (s = U.isFunction(t.getGuide) && t.getGuide()) && s.attributes && s.attributes.doNotResume || mc({
                        guideId: t.guideId,
                        guideStepId: t.id,
                        time: a,
                        state: "advanced",
                        seenReason: i,
                        visitorId: j(),
                        destinationStepId: o
                    }), Qf(), ap())) : (Qf(), Gr("onGuidePrevious: missing step"))
                },
                Nh = function(e) {
                    var t;
                    J("._pendo-credits_", e).length || (t = J("<div>").addClass("_pendo-credits_").html('<img src="' + yr() + '/img/tiny-logo.png" />').css({
                        bottom: 0,
                        right: G.TOOLTIP_ARROW_SIZE
                    }), sr.push(t[0]), t.appendTo(e))
                };

            function Lh(e) {
                return e && e.attributes && e.attributes.stayHidden
            }
            var Mh = function(e) {
                var t, n, i;
                return !Lh(e) && (!(e.elementPathRule || "lightbox" !== e.type && "whatsnew" !== e.type) || (t = Gu(e), !((n = e.targetElement) && e.elementContainsRulesList && !Ph(n, e.elementContainsRulesList)) && (n = "tooltip" === e.type || Z.isBuildingBlockGuideRelativeToElement(e), i = xo(t), !n || e.hasBeenScrolledTo ? i : i || Xd(t))))
            };

            function Fh(e) {
                var t = (J(e).text() || "").trim().toLowerCase(),
                    e = e.value;
                return t || e
            }

            function Ph(e, t) {
                for (var n = Fh(e), i = 0; i < t.length; i++)
                    if (!Bh(n, t[i])) return !1;
                return !0
            }

            function Bh(e, t) {
                var n = t.matchType,
                    i = t.matchValue,
                    t = t.dataType,
                    e = e || "";
                if ("number" === t) {
                    var r = Mt(e);
                    if (null == r) return !1;
                    e = parseFloat(r), i = parseFloat(i);
                    if (isNaN(e) || isNaN(i)) return !1
                } else "string" === t && (e = e.toLowerCase(), i = i.toLowerCase());
                return "equal" === n ? e === i : "notEqual" === n ? e !== i : "contains" === n ? -1 < String(e).indexOf(i) : "notContains" === n ? -1 === String(e).indexOf(i) : "greaterThan" === n ? i < e : "lessThan" === n && e < i
            }
            var Gh = function(e) {
                    return ch + e.id
                },
                Uh = function(e) {
                    var t = e.element,
                        n = U.first(J("#" + Gh(e)));
                    t && n ? xo(t) || J.hasClass(n, "mouseover") ? setTimeout(function() {
                        Uh(e)
                    }, $f) : e.hide && (e.hide(), hh()) || (Qf(), ap()) : t || !n || e.hide && (e.hide(), hh()) || (Qf(), ap())
                },
                Dh = function() {
                    return !1
                },
                Hh = U.partial(D, U, "attributes.resourceCenter"),
                zh = function(e, t) {
                    var n;
                    return !(!e || !e.guideId) && (!!(n = x(e.guideId)) && (hh() && (e = Sh(), xh(e), Hh(n) ? (e = mh(Hh), (e = U.filter(e, function(e) {
                        return e.id !== n.id
                    })).length && W.dispatch("frames/hideGuides", U.pluck(e, "id"))) : (bh(), W.dispatch("frames/hideGuides"))), n.launch(t), n.isShown()))
                },
                jh = function(e, t, n, i, r, o) {
                    e = eg({
                        type: "guideNotSeen",
                        guideId: e,
                        stepId: t,
                        visitorId: n,
                        reason: i,
                        language: r
                    });
                    o && U.extend(e.props, {
                        step_poll_types: o
                    }), ig(e)
                };

            function Wh(e) {
                var t = "auto";
                return e && (e = (e.launchMethod || t).split("-"), !U.contains(e, t) && e.length) ? U.first(e) : t
            }
            var Jh = function(e, t, n, i, r, o) {
                i || (c(new Error("seenGuide called without seen reason"), "pendo.io guideSeen exception", {
                    guideId: e,
                    stepId: t
                }), i = Wh(x(e)));
                n = eg({
                    type: "guideSeen",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    reason: i,
                    language: r
                });
                U.extend(n.props, o), ig(n), mc({
                    guideId: e,
                    guideStepId: t,
                    time: v(),
                    state: "active",
                    seenReason: i,
                    visitorId: j()
                }), S.guideSeen.trigger(n)
            };

            function qh(e, t, n, i, r) {
                e = eg({
                    type: "guideDismissed",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r
                });
                ig(e), S.guideDismissed.trigger(e)
            }

            function Kh(e, t, n, i, r, o) {
                e = eg({
                    type: "guideSnoozed",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r,
                    snooze_duration: o
                });
                ig(e), S.guideSnoozed.trigger(e)
            }

            function Vh(e, t, n, i, r, o, a) {
                e = {
                    type: "guideAdvanced",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r
                }, a && (e.destination_step_id = a), t = eg(e);
                ig(t, null, o), S.guideAdvanced.trigger(t)
            }

            function Zh(e, t, n, i, r, o) {
                e = eg({
                    type: "guideTimeout",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r,
                    guideSeenTimeoutLength: o
                });
                ig(e), S.guideTimeout.trigger(e)
            }

            function $h(e, t, n, i, r) {
                e = eg({
                    type: "guideSnoozeCanceled",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r
                });
                ig(e, null, !0), S.guideSnoozeCancelled.trigger(e)
            }
            var Yh = {
                DISMISSED: "latestDismissedAutoAt",
                SNOOZED: "latestSnoozedAutoAt",
                ADVANCED: "finalAdvancedAutoAt"
            };

            function Xh(e, t) {
                Qh(e, t);
                var n = {};
                n[t] = e, W.dispatch("frames/changeThrottlingState", n)
            }

            function Qh(e, t) {
                U.contains(U.values(Yh), t) && (U.isFunction(e.getTime) && (e = e.getTime()), G[t] = e, d.write(t, e, hc))
            }

            function eg(e, t, n, i, r, o) {
                var a = e,
                    e = ("object" != typeof a && (a = {
                        type: e,
                        guideId: t,
                        stepId: n,
                        visitorId: i,
                        language: o
                    }), r && (a.reason = r), U.isString(a.language) || delete a.language, U.extend({
                        guide_id: a.guideId,
                        guide_step_id: a.stepId
                    }, U.omit(a, "type", "guideId", "stepId", "visitorId"))),
                    t = Rn.addTracerIds({
                        type: a.type,
                        visitor_id: a.visitorId,
                        account_id: Kn(),
                        browser_time: (new Date).getTime(),
                        url: f.externalizeURL(),
                        props: e
                    });
                return S.eventCaptured.trigger(t), t
            }
            var tg = null,
                ng = function(e) {
                    Wv.clearTimeout(tg), tg = Wv.setTimeout(Ag, e)
                },
                ig = function(e, t, n) {
                    t = t || 500, e.props.duration = n ? 0 : (new Date).getTime() - ph(), Og.push(e), ng(t)
                },
                rg = function(e, t) {
                    return "dismissed" === e.state ? null : x(e.guideId).nextStep(e, t || og())
                },
                og = function() {
                    return G.normalizedUrl || ag(f.get())
                },
                ag = function(e) {
                    try {
                        var t = new Qn(e),
                            n = U.tail(t.search).join("").split("&");
                        return t.search = n.sort().join("&"), t.href
                    } catch (Ce) {
                        return pn("Invalid URL provided to normalize"), e
                    }
                },
                sg = function(e, t) {
                    return !I(e) || new RegExp(e).test(t)
                },
                ug = function(e, t) {
                    e = pr(e);
                    return !!e && (!(t = zh(U.first(e.steps), t || "api")) && e.control && H(rh), t)
                },
                dg = function(e, t) {
                    e = x(e);
                    return !!e && (!(t = zh(U.first(e.steps), t || "api")) && e.control && H(rh), t)
                };

            function cg(e, t) {
                return t = parseInt(t, 10), isNaN(t) || !U.isNumber(t) || !(U.isNumber(e) && e < t) && U.isNumber(e) ? e : t
            }
            var lg = function() {
                    Qf(), Xf(), $.removeNotificationBubble(), wl(), hf(), ga()
                },
                fg = function() {
                    op()
                },
                pg;

            function hg(e) {
                !pg || U.isString(e.id) && e.id !== pg.id || (U.extend(G, e), pg.deferred && pg.deferred.resolve(), pg = null)
            }
            var gg = function(e, t) {
                    var n = y.get("trainingPartner"),
                        i = U.uniqueId(),
                        r = z.defer(),
                        o = (pg = {
                            id: i,
                            deferred: r
                        }, td() || ((o = nd()) ? (H("sending metadata: " + w.stringify(o), ["guides", "metadata"]), t.metadata = o) : H("no metadata to send", ["guides", "metadata"])), bt(t)),
                        i = {
                            id: i,
                            jzb: o,
                            v: it,
                            ct: (new Date).getTime()
                        },
                        n = (n && t.accountId && "ACCOUNT-UNIQUE-ID" !== t.accountId && (i.acc = wt(t.accountId)), tn(!0) && (i.debug = !0), Pr(mg.endpoint(), e, i)),
                        t = wa.get();
                    return o = n.length > Wa || !U.isEmpty(t) ? (delete i.jzb, n = Pr("guide.json", e, i), i = U.extend({
                        events: o
                    }, t), mg.post(n, i, U.noop)) : mg.load(n, U.noop), z.all([o["catch"](function(e) {
                        return 451 === e.status && (Qf(), Wr(), H("not tracking visitor due to 451 response")), z.reject(e)
                    }), r.promise, nh(e)])
                },
                mg = ad;

            function vg(e) {
                mg = e
            }

            function yg() {
                mg = ad
            }

            function bg(e) {
                return U.each(e, function(e, t) {
                    e.attributes || (e.attributes = {}), !isNaN(e.attributes.priority) && U.isNumber(e.attributes.priority) || (e.attributes.priority = t)
                }), e.sort(function(e, t) {
                    return t.attributes.priority - e.attributes.priority
                }), e
            }

            function wg(e) {
                var n, t = U.find(e, function(e) {
                    return U.isFunction(e.isShown) && e.isShown() && !e.isTopLevel
                });
                return t ? (n = U.chain(t.steps).filter(function(e) {
                    return e.isShown()
                }).indexBy("id").value(), function(e) {
                    e = U.findWhere(e, {
                        id: t.id
                    });
                    e && !D(e, "attributes.doNotResume") && U.each(e.steps, function(e) {
                        var t = n[e.id];
                        !t || e.seenState && "active" !== e.seenState || e.show(t.seenReason)
                    })
                }) : function() {}
            }
            var Ig = function() {
                    return !y.get("disableGlobalCSS")
                },
                Sg = function(e, n, i, r) {
                    var o, a, t, s = z.defer(),
                        u = !1;
                    return th() ? (H("guide events are blocked, load guides cancelled"), U.isFunction(r) && r("error: guides are blocked"), s.reject()) : (H("loading guides for " + i + "...", "guides"), e = e || G.apiKey, n = n || j(), i = f.externalizeURL(i), a = Sg.lastVisitorId === n ? wg(g()) : U.noop, Sg.lastVisitorId = n, W.commit("guideState/setLastGuideRequestAt", v()), rr(or()) ? (t = {
                        visitorId: n,
                        accountId: Kn(),
                        url: i
                    }, gg(e, t).then(function() {
                        var e, t;
                        u || G.designer || (S.deliverablesLoaded.trigger(), H("successfully loaded guides for " + i, "guides"), G.designerEnabled && "true" !== _n.getItem("pendo-designer-mode") && Ap.loadPluginJs(), lg(), fg(), e = G.lastGuideStepSeen, W.dispatch("guideState/receiveLastGuideStepSeen", e), e.visitorId = n, W.dispatch("guideState/updateLastGuideStepSeen", e), W.commit("guideState/setLastGuideRequestAt", v()), lr(t = bg(U.map(G.guides, Rl))), W.dispatch("guideState/load", d.read(gc)), W.dispatch("guideState/apply"), G.latestDismissedAutoAt = cg(G.latestDismissedAutoAt, d.read("latestDismissedAutoAt")), G.finalAdvancedAutoAt = cg(G.finalAdvancedAutoAt, d.read("finalAdvancedAutoAt")), G.latestSnoozedAutoAt = cg(G.latestSnoozedAutoAt, d.read("latestSnoozedAutoAt")), W.dispatch("healthCheck/init", t), W.dispatch("frames/changeGuideList", t), G.eventProperties = Ug(G.features), t.length ? z.all([Tg(), Np(sc(G.globalJsUrl)), uf(sf(G.guideWidget, t)), Lg(G.guides), cd.initializeWatermark(G.guides), Cg(5e3)]).then(function() {
                            Rf(), W.getters["frames/isLeader"]() && a(t), S.guidesLoaded.trigger(), S.guideLoopStarted.trigger(), ap(), $.fetchAnnouncementGuidesContent(t, W), clearTimeout(o), U.isFunction(r) && r(), s.resolve()
                        }, function() {
                            S.guidesFailed.trigger(), s.reject()
                        }) : (S.guidesLoaded.trigger(), s.resolve()))
                    }, function(e) {
                        s.reject(e)
                    }), e = y.get("guideTimeout") || y.get("guides.timeout"), U.isNumber(e) && (o = setTimeout(function() {
                        lg(), fg(), u = !0, s.reject()
                    }, e))) : (H("bad url:  probably local file system", "guides", "error"), U.isFunction(r) && r("error: invalid url"), s.reject())), s.promise
                };

            function xg(e, t) {
                var n, i = Jv.getElementById(e);
                return i && i.href && 0 <= i.href.indexOf(t) ? z.resolve() : (n = z.defer(), J(i).remove(), G.loadResource(t, function() {
                    n.resolve()
                }).id = e, n.promise)
            }
            var Cg = U.memoize(Eg);

            function Eg(t, n, e) {
                if (!Ig() || !_g(g())) return z.resolve();
                n = n || v, e = e || "_pendo-hidden_";
                var i = J("<div>").addClass(e).css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px",
                        width: "0px",
                        height: "0px",
                        visibility: "hidden"
                    }).appendTo(Pu()),
                    r = n(),
                    o = z.defer();
                return function s(e) {
                    setTimeout(function() {
                        a(i[0]) ? (i.remove(), o.resolve()) : n() - r > t ? (i.remove(), o.reject()) : s(100)
                    }, e)
                }(0), o.promise;

                function a(e) {
                    e = K(e);
                    if (e) return "none" === e.display
                }
            }

            function _g(e, t) {
                return t && t.designer || U.any(e, function(e) {
                    return U.any(e.steps, function(e) {
                        return !(e.domUrl || e.domJsonpUrl)
                    })
                })
            }

            function Tg() {
                var e = [];
                if (!Ig()) return z.resolve();
                _g(g(), G) && e.push(xg("_pendo-default-css_", oh()));
                var t = ((G.guideWidget || {}).data || {}).guideCssUrl,
                    n = "_pendo-css_";
                return t ? e.push(xg(n, sc(t))) : J("#" + n).remove(), z.all(e)
            }
            var Ag = function(e) {
                    Og.flush(e)
                },
                Rg = function() {
                    return ih
                };

            function kg(e) {
                var n = e.cache,
                    i = o(e, ls),
                    r = o(e, fs),
                    t = Fa(n);
                return {
                    push: function(e) {
                        t(e, U.noop)
                    },
                    clear: function() {
                        n.length = 0
                    },
                    flush: function(e) {
                        var t;
                        0 !== n.length && (t = n.slice(), n.length = 0, ((e || {}).guaranteed ? r : i)(t, U.noop))
                    }
                };

                function o(e, t) {
                    return La(Ka, Ba("visitor_id"), Ba("props.guide_id"), Ba("props.source"), qa, t(e), Va(e))
                }
            }
            var Og = kg({
                    cache: ih,
                    apiKey: function() {
                        return G.apiKey
                    },
                    beacon: "guide",
                    allowPost: !0,
                    preferFetch: b.safari
                }),
                Ng = kg({
                    cache: [],
                    apiKey: function() {
                        return G.apiKey
                    },
                    beacon: "poll",
                    allowPost: !0,
                    preferFetch: b.safari
                }),
                Lg = function(e) {
                    return $.initializeResourceCenter(e)
                },
                E = {
                    postMessage: U.noop,
                    close: U.noop
                },
                Mg = function() {
                    Og.clear(), S.appUnloaded.on(function() {
                        Ag({
                            guaranteed: !0
                        }), W.dispatch("frames/leave")
                    }), S.metadata.on(function() {
                        td() || Vg()
                    }), S.identify.on(function() {
                        Vg()
                    }), S.urlChanged.on(function() {
                        Vg(f.get())
                    }), Kp(Jv, function() {
                        f.get() === Kg.lastUrl && $g()
                    });
                    var e = y.get("guides.tooltip.arrowSize");
                    U.isNumber(e) && (G.TOOLTIP_ARROW_SIZE = e), E = Lp(qp(W), W), W.dispatch("frames/init"), W.dispatch("frames/join"), vc(), q(Wv, "resize", U.debounce(jg, 50)), Wg(), y.get("preferMutationObserver") && b.MutationObserver && (C(Wv, "animationend", e = function() {
                        W.dispatch("guideUpdate/documentChanged")
                    }), C(Wv, "transitionend", e), C(Wv, "mouseover", U.debounce(e, 50)), Nu.iterator.circular = !1, gp.circular = !1, W.commit("guideUpdate/setUseObserver"), W.commit("guideUpdate/setIterationTimeLimit", 50))
                },
                Fg = function() {
                    return y.get("guides.disabled", !1) || y.get("disableGuides", !1) || !Fr
                },
                Pg = function() {
                    return y.get("guides.delay", !1) || y.get("delayGuides", !1)
                },
                Bg = function(e) {
                    var t = y.getLocalConfig();
                    t.disableGuides = e, y.setLocalConfig(t)
                },
                Gg = function(e) {
                    var t = y.getLocalConfig();
                    t.delayGuides = e, y.setLocalConfig(t)
                },
                Ug = Yn(function(e) {
                    if (e && e.length) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var i = e[n].featureRule,
                                r = U.map(e[n].eventProperties, function(e) {
                                    return e.selector ? e : w && w.parse && e.rule ? w.parse(e.rule) : void 0
                                });
                            t.push({
                                featureRules: i,
                                eventPropertyRules: r,
                                featureId: e[n].featureId
                            })
                        }
                        return t
                    }
                }),
                Dg = function() {
                    return Jv.fullscreenElement || Jv.webkitFullscreenElement || Jv.msFullscreenElement
                },
                Hg = function() {
                    r("adjustActiveGuideOnResize firing");
                    var e = Yg();
                    e && e.step && !G.ignoreResize && e.step.redraw()
                },
                zg = function() {
                    var e; - 1 < D(Jv, "activeElement.id", "").indexOf("pendo-video-") ? (!(e = Dg()) || e.id.indexOf("pendo-video-") < 0) && setTimeout(function() {
                        Hg()
                    }, 150) : Hg()
                },
                jg = function() {
                    zg(), xl()
                },
                Wg = function() {
                    for (var e = ["fullscreenchange", "webkitfullscreenchange", "MSFullscreenChange"], t = 0; t < e.length; t++) q(Jv, e[t], Jg)
                },
                Jg = function() {
                    -1 < D(Jv, "activeElement.id", "").indexOf("pendo-video-") && (Dg() ? G.ignoreResize = !0 : setTimeout(function() {
                        G.ignoreResize = !1
                    }, 1e3))
                };

            function qg(e, t, n, i) {
                return e && G.apiKey && ((!Fg() || "true" === _n.getItem("pendo-designer-mode")) && (e !== Kg.lastUrl || t !== Kg.lastVisitorId || n !== Kg.lastAccountId || i !== Kg.lastMetadataHash))
            }

            function Kg(e) {
                var t = j(),
                    n = Kn();
                qg(e = e || f.get(), t, n, Du) && (Kg.lastUrl = e, Kg.lastVisitorId = t, Kg.lastAccountId = n, Kg.lastMetadataHash = Du, Sg(G.apiKey, t, e)["catch"](U.noop))
            }
            var Vg = function(e) {
                    Fr && (Vg.pending && clearTimeout(Vg.pending), Vg.pending = setTimeout(function() {
                        delete Vg.pending, Kg(e)
                    }, 0))
                },
                Zg;

            function $g() {
                Kg.lastUrl = null, Vg()
            }

            function Yg() {
                var e, n, t = U.find(g(), function(e) {
                    return e.isShown()
                });
                return t ? (D(t, "attributes.resourceCenter.isModule") && (t = $.getResourceCenter()), e = U.find(t.steps, function(e, t) {
                    return n = t, e.isShown()
                }), {
                    guide: t,
                    steps: U.filter(t.steps, function(e, t) {
                        return e.isShown()
                    }),
                    step: e,
                    stepIndex: n
                }) : null
            }

            function Xg() {
                return {
                    store: W,
                    ConfigReader: y,
                    getState: function() {
                        return w.stringify(W.state)
                    },
                    getEventCache: function() {
                        return [].concat(Xi)
                    },
                    getAllGuides: function() {
                        return [].concat(g())
                    },
                    getAutoGuides: function() {
                        return Nu.sortAndFilter(g(), G.autoOrdering)
                    },
                    getBadgeGuides: function() {
                        return U.filter(g(), Lu)
                    },
                    getLauncherGuides: function() {
                        return U.filter(g(), gf)
                    },
                    getEventHistory: function() {
                        return []
                    },
                    getAllFrames: Jf,
                    getChannelType: qf,
                    setActiveGuides: lr,
                    getBody: J.getBody,
                    isMobileUserAgent: b.isMobileUserAgent,
                    areGuidesDelayed: Pg,
                    doesElementMatchContainsRules: Ph,
                    getMetadata: nd,
                    isStagingServer: te,
                    AutoDisplay: Nu,
                    isLeader: Wf,
                    Events: S
                }
            }

            function Qg() {
                var e;
                tn(!0) && (em(), J("#pendo-client-debugger").length || (e = !st() && y.get("forceParentDesigner"), ra() && !e || Fo(ah(), function() {
                    H("Debug module loaded")
                })))
            }

            function em() {
                Zg = Zg || Xg(), G.debugging = Zg
            }

            function tm(e) {
                return tn(!0) ? e ? Zg : "debugging already enabled" : (d.write(Xt, "true", null, !0), Qg(), e ? Zg : "debugging enabled")
            }

            function nm() {
                return tn(!0) ? (d.write(Xt, "false", null, !0), G.debugging = null, delete G.debugging, "debugging disabled") : "debugging already disabled"
            }
            U.extend(r, Zg);
            var im = {
                    BuildingBlockGuides: Z,
                    BuildingBlockResourceCenter: $,
                    BuildingBlockTemplates: kl,
                    BuildingBlockTooltips: oc,
                    BuildingBlockSvgs: Ol
                },
                rm = [],
                om = !1,
                am = {
                    agent: {
                        getJwtInfoCopy: wa.get
                    },
                    agentStorage: d,
                    attachEvent: C,
                    BuildingBlocks: im,
                    ConfigReader: y,
                    Events: S,
                    EventTracer: Rn,
                    NodeSerializer: au,
                    q: z,
                    store: W,
                    util: {
                        get: D
                    }
                };

            function sm(e) {
                rm.push(e), om && e.initialize(G, am)
            }

            function um() {
                U.each(rm, function(e) {
                    e.initialize(G, am)
                }), om = !0
            }

            function dm(t) {
                U.each(rm, function(e) {
                    e.validate && e.validate(G, am, t)
                })
            }

            function cm(e) {
                return sm(e.uri), e
            }

            function lm(e) {
                return !!e.uri.initialize
            }
            Of.registerExtensionsByUse("plugin", cm, lm);
            var fm = !1;

            function pm() {
                fm || (S.identify.on(function(e) {
                    e = e.data[0];
                    (e.new_visitor || e.new_account) && (delete e.new_visitor, delete e.new_account, Ra("identify", e), ga())
                }), S.metadata.on(function(e) {
                    td() || (Ra("meta", e.data[0]), ga())
                }), fm = !0)
            }

            function hm(e) {
                var e = e.apiKey,
                    t = y.get("apiKey");
                return t || e || void 0
            }

            function gm(e) {
                var e = e.additionalApiKeys,
                    e = void 0 === e ? [] : e,
                    t = y.get("additionalApiKeys");
                return e = (e = t ? t : e) && !U.isArray(e) ? [e] : e
            }

            function mm(e) {
                e = e.events;
                U.each(void 0 === e ? [] : e, function(e, t) {
                    da[t] && da[t](e)
                })
            }

            function vm(e) {
                U.find([U.partial(Ic.launchOnToken, Wv.location), U.partial(Cc, Wv), U.partial(Ic.localStorageNavigation, e)], function(e) {
                    return e()
                }), !e.enableDesignerKeyboardShortcut && y.get("disableDesignerKeyboardShortcut") || Ap.listen()
            }
            var ym = 0,
                bm = "initializeImmediately",
                wm = Yn(function(e) {
                    if ("complete" === Jv.readyState || D(e, bm) || y.get(bm))
                        if (H("pendo.initialize called with " + w.stringify(e)), G.apiKey) 1 == ym++ && H(["pendo.initialize only needs to be called once", _t() ? " per namespace" : "", ". Use pendo.updateOptions to update metadata after the agent has initialized."].join(""));
                        else {
                            if (e = e || {}, !U.isEmpty(wa.get()) || (t = wa.getJwtOptions(e, "initialize")) && (wa.set(U.pick(e, "jwt", "signingKeyName")), U.extend(e, t)), U.isString(e)) return Ii.get(e).then(function(e) {
                                return wm(PendoConfig = e.data)
                            });
                            Es.run(), W.dispatch("location/init", e.location || {}), y.setLocalConfig(e), mr(), vr(G);
                            var t = y.get("cookieDomain");
                            if (t && Jt(t, location.host), G.apiKey = hm(e), G.additionalApiKeys = gm(e), !G.apiKey && G.additionalApiKeys && G.additionalApiKeys.length && (G.apiKey = G.additionalApiKeys[0]), G.apiKey) {
                                G.apiKey = "" + G.apiKey;
                                for (var n = 0; n < G.additionalApiKeys.length; n++) G.additionalApiKeys[n] = "" + G.additionalApiKeys[n];
                                W.commit("metadata/setMetadata", {
                                    selfHosted: Qu()
                                }), e.logStackTraces && (G.logStackTraces = e.logStackTraces), y.get("preferBroadcastChannel") && Wp.secure(!0), Fr && (G.disableGuideCenterContentSearch = e.disableGuideCenterContentSearch, mm(e), Mg(), pm(), Cu(), um(), Qg(), vm(e)), Bn() || Gn(), !0 !== e.usePendoAgentAPI && G.updateOptions(e), e.visitorId && e.visitorId != Un ? G.identify(e.visitorId) : e.visitor && e.visitor.id && e.visitor.id != Un && (t = null, e.account && e.account.id && (t = e.account.id), G.identify(e.visitor.id, t)), f.watch(G.pageLoad), ms(f.get()), Fr && S.ready.trigger(), ym++, Im(), Cm()
                            } else r("API key is not set, Pendo will not initialize.")
                        }
                    else ae(G, "initialize", arguments)
                });

            function Im() {
                Wv.parent && Wv.parent.postMessage && "function" == typeof Wv.parent.postMessage && Wv.parent.postMessage({
                    type: "announce-frame-initialized",
                    destination: "pendo-designer-agent",
                    source: "pendo-designer-agent",
                    localStorageRouter: !0
                }, Wp.targetOrigin())
            }

            function Sm(e) {
                return !U.isArray(e) || U.isEmpty(e)
            }

            function xm(e) {
                if (!Sm(e)) return U.find(e, function(e) {
                    return "initialize" === e[0]
                })
            }

            function Cm(i) {
                var e;
                return !Sm((i = i || G)._q) && (e = !!xm(i._q), Em(i) || e) ? (e = i._q.splice(0, i._q.length), U.reduce(e, function(e, t) {
                    var n;
                    return U.isArray(t) && (n = i[t.shift()], U.isFunction(n)) ? e.then(function() {
                        return n.apply(i, t)
                    }) : e
                }, z.resolve()).then(Cm)) : z.resolve()
            }
            var Em = function(e) {
                return (e = e || G).doesExist(e.apiKey)
            };

            function _m() {
                Em() ? H("already running") : (Wv.pendo_options && wm(Wv.pendo_options), Cm(), ma(er))
            }

            function Tm(e, t, n) {
                y.get("disableAutoInitialize") || (D((e = xm(e)) && 1 < e.length ? e[1] : {}, bm) || y.get(bm) ? t() : n(t))
            }
            var Am = function(e) {
                    var t, n = Yg();
                    n && (t = n.guide.steps[n.stepIndex + 1], e = e || 0, setTimeout(function() {
                        var e = J(t.elementPathRule);
                        0 !== e.length && U.some(e, xo) ? kh(n.step) : kh(t)
                    }, e))
                },
                Rm = function(e, t) {
                    var n = Yg(),
                        i = J(t = t || n.step.elementPathRule)[0],
                        r = function() {
                            kh(), m(i, e, r, !0)
                        };
                    C(i, e, r, !0)
                },
                km = function() {
                    J("._pendo-guide_").css("display:none;");
                    var t = og(),
                        e = Yg().guide.steps,
                        n = U.filter(U.rest(e), function(e) {
                            return !!e.pageId
                        }),
                        n = U.indexOf(e, U.find(n, function(e) {
                            return sg(e.regexUrlRule, t)
                        }));
                    H("startingPoint is " + n), -1 == n ? J("._pendo-guide_").css("display:block;") : (n = e[Math.max(0, n - 1)], H("found starting step to be " + n.id), kh(n))
                },
                Om = function(e, t, n) {
                    if (t) n || (i = [].concat(t.steps).reverse(), n = U.findWhere(i, {
                        seenState: "active"
                    }));
                    else {
                        var i = Yg();
                        if (!i) return;
                        t = i.guide, n = i.step
                    }
                    return (e = U.template(e = e || "Step <%= currPos %> of <%= total %>"))({
                        currPos: t.getPositionOfStep(n),
                        total: t.getTotalSteps()
                    })
                },
                Nm = {
                    getActiveGuide: Yg,
                    smartNextStep: Am,
                    smartFirstStep: km,
                    advanceOn: Rm,
                    renderStepPosition: Om
                };

            function Lm(e, t) {
                e && U.isString(e) ? Ra("track", t, f.get(), e) : pn("Must provide valid name string for event tracking")
            }
            var Mm = function Mm(r) {
                    var o = [];

                    function a(e, t, n, i) {
                        r ? o.push({
                            type: n,
                            message: t,
                            value: i
                        }) : I(i) ? console[e](t, i) : console[e](t)
                    }
                    if ("undefined" == typeof console || !console.group) return "Please run this test in the latest version of Chrome, Firefox, Safari, or Internet Explorer";
                    r || console.group("Pendo Install Validation"), G.apiKey || a("error", "No Pendo API key configured. Make sure to call pendo.initialize() with a valid Pendo API key.", "apiKey");
                    var e = j(),
                        e = (Pn(e) && a("warn", 'The current visitor is not identified and will be treated as "anonymous". Is this expected? (You might have used "VISITOR-UNIQUE-ID" as the visitor ID)', "isAnonymousVisitor"), Dn(e) && a("error", "The current visitor ID matches the example visitor ID from the Pendo installation instructions.", "isDefaultVisitor"), Kn()),
                        t = (e || a("warn", "The current visitor is not associated with an account. Is this expected?", "noVisitorInAccount"), "ACCOUNT-UNIQUE-ID" === e && a("error", "The current account ID matches the example account ID from the Pendo installation instructions.", "exampleAccountId"), dm(a), y.get("disableCookies") && a("warn", "Cookies are disabled in Pendo config. Is this expected?", "disableCookies"), nd());
                    if (U.each(["visitor", "account", "parentAccount"], function(n) {
                            var i = t && t[n],
                                e = U.chain(i).keys().value();
                            0 < e.length ? (r || console.group(n + " metadata (does this look right?):"), 0 < (e = U.chain(e).map(function(e) {
                                return e.toLowerCase()
                            }).countBy().pick(function(e) {
                                return 1 < e
                            }).keys().value()).length && U.each(e, function(e) {
                                a("warn", "Keys will be lowercased and any duplicates overwritten. Please choose unique key names for:", n + "MetadataConflict", e)
                            }), U.each(U.keys(i), function(e) {
                                var t = i[e];
                                U.isObject(t) && !U.isArray(t) ? a("warn", e + " is an object and will be ignored.", n + "Metadata", t) : U.isArray(t) && U.any(t, U.isObject) ? a("warn", e + " contains object values. The objects will be ignored.", n + "Metadata", t) : a("log", e + ":", n + "Metadata", t)
                            }), r || console.groupEnd()) : "parentAccount" !== n && a("warn", "No " + n + " metadata found. Learn more about metadata here: http://help.pendo.io/resources/support-library/installation/metadata.html", n + "MetaData")
                        }), r) return o;
                    console.groupEnd()
                },
                Fm = function(n) {
                    var e = [{
                            nativeType: Object.prototype,
                            displayName: "Object | Prototype "
                        }, {
                            nativeType: Object,
                            displayName: "Object  ",
                            propsToCheck: ["create"]
                        }, {
                            nativeType: Number.prototype,
                            displayName: "Number  "
                        }, {
                            nativeType: String.prototype,
                            displayName: "String  "
                        }, {
                            nativeType: Function.prototype,
                            displayName: "Function"
                        }, {
                            nativeType: Boolean.prototype,
                            displayName: "Boolean "
                        }, {
                            nativeType: Array.prototype,
                            displayName: "Array   "
                        }, {
                            nativeType: Date.prototype,
                            displayName: "Date    "
                        }, {
                            nativeType: RegExp.prototype,
                            displayName: "RegExp  "
                        }, {
                            nativeType: w,
                            displayName: "JSON    ",
                            propsToCheck: ["parse", "stringify"]
                        }, {
                            nativeType: Math,
                            displayName: "Math    "
                        }, {
                            nativeType: wn.prototype,
                            displayName: "Promise "
                        }, {
                            nativeType: Wv,
                            displayName: "Window ",
                            propsToCheck: ["alert", "asap", "atob", "btoa", "cancelAnimationFrame", "clearImmediate", "clearInterval", "clearTimeout", "close", "confirm", "getComputedStyle", "getSelection", "open", "postMessage", "prompt", "requestAnimationFrame", "scroll", "scrollBy", "scrollTo", "setImmediate", "setInterval", "setTimeout", "stop", "XMLHttpRequest", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent"]
                        }],
                        r = !1,
                        i = (U.each(e, function(e) {
                            var t = e.nativeType,
                                n = [],
                                i = e.propsToCheck || Object.getOwnPropertyNames(t);
                            U.each(i, function(e) {
                                try {
                                    e && t[e] && "function" == typeof t[e] && (t[e].toString().includes("[native code]") || n.push(e))
                                } catch (Ce) {}
                            }), n.length && (e.nonNativeImplementations = n, r = !0)
                        }), {
                            hasNonNativeMethods: r,
                            implementations: []
                        });
                    return n || console.group("Native javascript method check:"), r ? (n || console.warn("Pendo has detected that your application may be changing native javascript functionality. We suggest consulting an engineer or your CSM to better understand if these changes will negatively impact Pendo's ability to function properly"), U.each(e, function(e) {
                        var t;
                        e.nonNativeImplementations && (t = e.displayName.trim(), n ? i.implementations.push({
                            nativeType: t,
                            nonNativeImplementations: e.nonNativeImplementations
                        }) : console.warn(t + " | Contains the following non-native implementations:", e.nonNativeImplementations.sort().join(", ")))
                    }), n ? i : void console.groupEnd()) : n ? i : (console.log("Environment uses native javascript implementations"), console.groupEnd())
                },
                Pm = function(e) {
                    var t = [];
                    if (U.isNumber(Wv.frames.length) && U.isFinite(Wv.frames.length) && J("iframe").length + J("frame").length === Wv.frames.length || t.push("Pendo has detected that window.frames.length has been modified"), Wv.Event && Wv.Event.prototype || t.push("Pendo has detected that window.Event has been modified"), t.length) {
                        if (e) return t;
                        console.group("Global variables:"), U.each(t, function(e) {
                            console.warn(e)
                        }), console.groupEnd()
                    }
                },
                Bm = function(e) {
                    var t, n = Wv.location.href,
                        i = [];
                    try {
                        (t = ki()) !== n && i.push({
                            type: "customizedUrl",
                            msg: "URL has been customized. This will affect data collection, guide requests, and reload tests.",
                            value: t
                        })
                    } catch (Ce) {
                        i.push({
                            method: "error",
                            msg: "Error getting Custom URL",
                            value: Ce
                        })
                    }
                    try {
                        var r = f.externalizeURL();
                        r !== t && i.push({
                            type: "sanitizedUrl",
                            msg: "URL has been sanitized. This will affect sending data and guides requests.",
                            value: r
                        })
                    } catch (Ce) {
                        i.push({
                            method: "error",
                            msg: "Error getting Externalized URL",
                            value: Ce
                        })
                    }
                    if (e) return i;
                    console.group("URL Validation"), console.log("Browser URL:", n), U.each(i, function(e) {
                        e.method ? console[e.method](e.msg + "\n" + e.value) : console.warn(e.msg + "\n" + e.value)
                    }), console.groupEnd()
                },
                Gm = function() {
                    Mm(), Fm(), Pm(), Bm(), y.validate(console)
                },
                Um = 500,
                Dm = 500,
                Hm = "_pendo-guide-lb_",
                zm = function(e, t) {
                    var n = !!J("._pendo-backdrop_")[0];
                    return D(t, "overlayDiv[0]") || (t.overlayDiv = J("<div/>").addClass("_pendo-backdrop_")), !1 == n && (t.elements.push(t.overlayDiv[0]), t.overlayDiv.appendTo(Pu())), Ye() && t.overlayDiv.css({
                        height: "100%",
                        width: "100%",
                        position: "absolute"
                    }), e && J(t.overlayDiv).addClass("_pendo-onboarding_"), t.overlayDiv
                },
                jm = function(e) {
                    var t = e.guideElement,
                        n = G.TOOLTIP_ARROW_SIZE,
                        i = e.attributes.height,
                        e = e.attributes.width,
                        e = Math.floor(e / 2),
                        i = Math.floor(i / 2);
                    t.addClass(Hm).css({
                        top: "50%",
                        left: "50%",
                        "margin-top": -i,
                        "margin-left": -e
                    }), J("._pendo-guide-container_", t).css({
                        bottom: n,
                        right: n
                    }), Ye() && t.css({
                        position: "absolute"
                    })
                },
                Wm = function(e, t) {
                    t === qv && (t = sr), e.element = Gu(e), jm(e);
                    var n = !!e.getGuide() && e.getGuide().isOnboarding(),
                        n = (zm(n, e), e.guideElement);
                    t.push(n[0]), n.appendTo(Pu())
                };

            function Jm(e, t) {
                this.state = {
                    duration: e,
                    isPaused: !1,
                    handle: null,
                    cb: t
                }
            }
            Jm.prototype.start = function() {
                this.state.isPaused = !1;
                var e = U.bind(function() {
                    this.state.isPaused || (this.state.cb(this), this.state.handle = setTimeout(e, this.state.duration))
                }, this);
                e()
            }, Jm.prototype.stop = function() {
                clearTimeout(this.state.handle), this.state.isPaused = !0
            };
            var qm = Ii.urlFor;

            function Km(e, t, n) {
                var i = {
                    search: ["AllowOnlyKeys", "ExcludeKeys", "AddTo", "Replace", "Clear"],
                    hash: ["Replace", "Clear"],
                    pathname: ["Replace"],
                    hostname: ["Replace"],
                    href: ["Replace", "ForceSecure"],
                    protocol: ["ForceSecure"]
                };
                if (U.isObject(e) && (t = e.action, n = e.data, e = e.attr), !i[e]) throw new Error("Invalid URL attribute type: " + e);
                if (!U.contains(i[e], t)) throw new Error("Invalid transform (" + t + ") for attribute (" + e + ")");
                this.attr = e, this.action = t, this.data = n
            }

            function Vm(e) {
                return e instanceof Qn || e instanceof HTMLAnchorElement
            }
            Km.prototype.applyToURL = function(e) {
                return {
                    AllowOnlyKeys: function(e, t, n) {
                        U.isFunction(n) && (n = n(e[t], e));
                        t = e.href;
                        return new Qn(Ki(t, null, n, !1))
                    },
                    ExcludeKeys: function(e, t, n) {
                        U.isFunction(n) && (n = n(e[t], e));
                        t = e.href;
                        return new Qn(Ki(t, null, n, !0))
                    },
                    AddTo: function(e, t, n) {
                        U.isFunction(n) && (n = n(e[t], e));
                        t = e.href;
                        return new Qn(qm(t, n))
                    },
                    Clear: function(e, t) {
                        return e[t] = "", e
                    },
                    Replace: function(e, t, n) {
                        return U.isFunction(n) && (n = n(e[t], e)), "href" === t ? new Qn(n) : (e[t] = n, e)
                    },
                    ForceSecure: function(e, t) {
                        return "protocol" === t ? e.protocol = "https" : e.href = e.href.replace(/^(.*:\/\/\/)/, "https://"), e
                    }
                }[this.action](e, this.attr, this.data)
            }, Km.prototype.toString = function() {
                return this.attr + " - " + this.action + " - " + w.stringify(this.data)
            }, Km.fromJSON = function(e) {
                return new Km(e.attr, e.action, e.data)
            };
            var Zm = function() {
                var i = function() {
                        var t, n, i, r, e = Ri(),
                            o = f.isElectron() ? (t = f.electronAppName(), n = f.electronResourcesPath(), i = f.electronUserDirectory(), r = f.electronUserHomeDirectory(), [new Km("pathname", "Replace", function(e) {
                                e = e.replace(n, t);
                                return e = (e = e.replace(i, t)).replace(r, "")
                            }), new Km("href", "ForceSecure")]) : [],
                            a = !(a = y.get("eventPropertyConfigurations")) || U.isEmpty(a) ? [] : [new Km("search", "AddTo", function() {
                                return Ps()
                            })];
                        return s([].concat(o, a), e)
                    },
                    e = {
                        transforms: [],
                        electronTransforms: [],
                        currentSrcFn: i
                    },
                    r = new Jm(500, function(e) {
                        ms()
                    }),
                    n = function(e) {
                        if ("string" == typeof e) return new Qn(e);
                        if (Vm(e)) return e;
                        throw new Error("Invalid type from custom URL source. Must be either an URL or a String of a valid url.")
                    },
                    s = function(e, t) {
                        return U.reduce(e, function(e, t) {
                            return t.applyToURL(e)
                        }, t)
                    },
                    t = function(e) {
                        try {
                            var t = U.reduce([e.currentSrcFn, n, function(e) {
                                return t = e
                            }, U.partial(s, e.transforms), n], function(e, t) {
                                return t(e)
                            }, null)
                        } catch (Ce) {
                            c(Ce), t = t || Wv.location
                        }
                        return t
                    };
                return {
                    state: e,
                    actions: {
                        init: function(e, t) {
                            e.commit("clearTransforms"), e.commit("changeUrlSource"), t.transforms && e.dispatch("addTransforms", t.transforms), t.setUrl && e.dispatch("changeUrlSource", t.setUrl)
                        },
                        addTransforms: function(t, e) {
                            U.each(e, function(e) {
                                t.commit("addTransform", Km.fromJSON(e))
                            })
                        },
                        changeUrlSource: function(e, t) {
                            e.commit("changeUrlSource", t)
                        }
                    },
                    mutations: {
                        addTransform: function(e, t) {
                            e.transforms.push(t)
                        },
                        clearTransforms: function(e) {
                            e.transforms = []
                        },
                        changeUrlSource: function(e, t) {
                            if (t) {
                                if ("string" == typeof t) var n = new Qn(t),
                                    n = U.partial(U.identity, n);
                                else if (Vm(t)) n = U.partial(U.identity, t);
                                else {
                                    if ("function" != typeof t) throw new Error("URL Source must be either a Function that returns a URL or String that is a valid URL. Or, it may be a static URL or String.");
                                    n = t
                                }
                                e.currentSrcFn = n, r.start()
                            } else e.currentSrcFn = i, r.stop()
                        }
                    },
                    getters: {
                        url: t,
                        href: function(e) {
                            return t(e).href
                        }
                    }
                }
            }();

            function $m(e) {
                var t;
                if ("function" == typeof $m[e]) return t = U.toArray(arguments).slice(1), $m[e].apply($m, t)
            }

            function Ym() {
                return y.get("guideSeenTimeoutLength")
            }
            U.extend($m, {
                getHref: function() {
                    return W.getters["location/href"]()
                },
                clearTransforms: function() {
                    W.commit("location/clearTransforms")
                },
                addTransforms: function(e) {
                    W.dispatch("location/addTransforms", e)
                },
                setUrl: function(e) {
                    W.dispatch("location/changeUrlSource", e)
                },
                useBrowserUrl: function() {
                    W.dispatch("location/changeUrlSource"), ms()
                }
            });
            var Xm = function() {
                var i = [];
                return S.beforeGuideShow.on(function(e) {
                    var t = e.data[0],
                        e = e.data[1],
                        n = t.guide;
                    y.get("enableGuideTimeout") && (e = -1 < U.indexOf(["dom", "launcher", "badge", "api"], e), "active" === t.seenState || t.isTimedOut() || (n = n && n.steps) && (0 !== U.indexOf(n, t) || e) && Xm.start(t))
                }), S.guideSeen.on(function() {
                    Xm.stop()
                }), {
                    start: function(e) {
                        var o, t, n = i[0];
                        n && n !== e.id && (n = i[1], U.isFunction(n) && n()), e.shouldStartTimer() && (o = Ym(), n = U.partial(function(e, t) {
                            var n, i, r = x(t);
                            r && (n = r.findStepById(e)) && !r.isShown() && (i = n.canShowOnPage(og()) ? Mh(n) ? "other" : "element" : "page", Zh(t, e, j(), i, r.language, o), H("Guide", t, "timed out showing Step", e), n.timeout()), Xm.stop()
                        }, e.id, e.guide.id), t = setTimeout(n, o), i = [e.id, n, t])
                    },
                    stop: function() {
                        var e = i[2];
                        e && clearTimeout(e), i = []
                    },
                    getGuideSeenTimeoutLength: Ym
                }
            }();

            function Qm() {
                console.warn("This functionality is not supported by your subscription.")
            }

            function t(e) {
                return Fr ? e : Qm
            }

            function ev(e) {
                e.getVersion = ot, e.isReady = Em, e.pageLoad = ms, e.getVisitorId = j, e.getAccountId = Kn, e.clearSession = Zn, e.VERSION = it, e.flushNow = t(function() {
                    return ha(!0)
                }), e.initGuides = t(Mg), e.loadGuides = t(Sg), e.findGuideByName = t(pr), e.hideGuides = t(bh), e.onGuideDismissed = t(_h), e.goToStep = Rh, e.onGuideAdvanced = t(kh), e.onGuidePrevious = t(Oh), e.onGuideSnoozed = Th, e.startGuides = t(up), e.stopGuides = t(dp), e.toggleLauncher = t(Tf), e.showLauncher = t(_f), e.hideLauncher = t(Ef), e.removeLauncher = t(lf), e.defaultCssUrl = t(oh()), e.getActiveGuides = g, e.getActiveGuide = Yg, e.guideSeenTimeoutLength = Xm.getGuideSeenTimeoutLength(), e.guidesPayload = hg, e.areGuidesDisabled = t(Fg), e.setGuidesDisabled = t(Bg), e.buildNodeFromJSON = Z.buildNodeFromJSON, e.flexElement = t(Z.flexElement), e.GuideFactory = t(Rl), e.dom = J, e.attachEvent = t(C), e.detactEvent = t(m), e.getEventPropertyTarget = Hs, e.previewEventProperty = Ds, e.log = H, e.enableLogging = sn, e.disableLogging = un, e.setActiveContexts = yn, e.showLogHistory = gn, e.getLoggedContexts = mn, e.isDebuggingEnabled = tn, e.enableDebugging = tm, e.disableDebugging = nm, e.addDebuggingFunctions = em, e.stopSendingEvents = t(ca.lock), e.startSendingEvents = t(ca.unlock), e.isSendingEvents = t(qr), e.fromByteArray = _.uint8ToBase64, e.getMode = rp, e.events = t(da), e.track = t(Lm), e.validateInstall = Mm, e.validateNativeMethods = Fm, e.validateBuiltInGlobals = Pm, e.validateUrl = Bm, e.validateEnvironment = Gm, e.doesExist = I, e.generate_unique_id = Ln, e.TEMP_PREFIX = On, e.SIZE_UNIQUE_ID = Nn, e.defaultLauncher = Yl, e.identify = Xu, e.get_visitor_id = j, e.set_visitor_id = qn, e.get_account_id = Kn, e.set_account_id = Vn, e.getSerializedMetadata = id, e.compress = bt, e.squeezeAndCompress = bt, e.randomElement = St, e.randomString = xt, e.toUTF8Array = Ct, e.getNumberFromText = Mt, e._addCredits = t(Nh), e.getCurrentUrl = og, e.getNormalizedUrl = og, e.testUrlForStep = t(sg), e.showGuideByName = t(ug), e.showGuideById = t(dg), e.designerv2 = Ic, e.P2AutoLaunch = t(Ap), e.BuildingBlocks = t(im), e.buffers = ca, e.guideDev = t(Nm), e.badgesShown = t(ur), e.get_pendo_cookie = Zt, e.DEFAULT_EXPIRE_LEN = $t, e.set_pendo_cookie = Yt, e.loadResource = Fo, e.loadWatcher = Po, e.messageLogger = Bo, e.messageReceiver = Go, e.messageValidator = Uo, e.MESSAGE_TYPES = Jo, e.messageDispatcher = Ko, e.moduleRegistry = Vo, e.addModule = Zo, e.hasModule = t($o), e.findModuleByName = t(Yo), e.modulesWaiting = Xo, e.loadModules = Qo, e.moduleLoader = na, e.TOOLTIP_DEFAULT_WIDTH = rc.width, e.TOOLTIP_DEFAULT_HEIGHT = rc.height, e.TOOLTIP_ARROW_SIZE = rc.arrowSize, e.LB_DEFAULT_WIDTH = Um, e.LB_DEFAULT_HEIGHT = Dm, e.sniffer = b, e.url = f, e.location = $m, e.Sizzle = ci, e._ = U, e.ajax = Ii, e.Zlib = mt, e.guideContent = t(fc.guideContent), e.receiveDomStructureJson = t(fc.receiveDomStructureJson), e.addExtension = Nf
            }
            var tv = "is going away",
                nv = "is gone",
                iv = U.memoize(function(e, t) {
                    e = (e = e || "Function") + " deprecated" + (t = t ? " and " + t : "");
                    return H(e), e
                });

            function n(e, t, n) {
                return function() {
                    return iv("pendo." + t, n), (e || U.noop).apply(null, arguments)
                }
            }

            function rv(e) {
                e.SHADOW_STYLE = "", U.extend(e, {
                    _showElementGuide: t(n(Gd, "_showElementGuide", tv)),
                    flushEventCache: n(null, "flushEventCache", nv),
                    HOST: dr,
                    MAX_LENGTH: nr,
                    MAX_NUM_EVENTS: tr,
                    _createToolTip: t(n(Md, "_createToolTip", tv)),
                    _get_tooltip_dimensions: t(n(Qd, "_get_tooltip_dimensions", tv)),
                    _isOldIE: t(n(Te, "_isOldIE", tv)),
                    _logMessage: n(Gr, "_logMessage", tv),
                    _sendEvent: n(null, "_sendEvent", nv),
                    _sendGuideEvent: n(null, "_sendGuideEvent", nv),
                    _stopEvents: !1,
                    _storeInCache: n(null, "_storeInCache", nv),
                    _writeEventImgTag: n(null, "_writeEventImgTag", nv),
                    _writeImgTag: t(n(Dr, "_writeImgTag", tv)),
                    getUA: n(Ne, "getUA", tv),
                    ifDebugThen: n(null, "ifDebugThen", nv),
                    send_event: t(n(Ra, "send_event", "has changed to pendo.cache.createEvent")),
                    wire_page: n(Cu, "wire_page", tv),
                    messageOriginTester: n(null, "messageOriginTester", nv),
                    findGuideBy: t(fr),
                    findGuideById: t(x),
                    findStepInGuide: t(hr),
                    _updateGuideStepStatus: t(vh),
                    _addCloseButton: t(gh),
                    initialize: wm,
                    getEventCache: t(Rg),
                    processEventCache: t(Ag),
                    isGuideShown: t(hh),
                    _getNextStepInMultistep: t(rg),
                    badgeDiv: a && a.element,
                    launcherToolTipDiv: Jl,
                    attachEvent: C,
                    detachEvent: m,
                    updateOptions: Yu,
                    createLauncher: cf,
                    initLauncher: t(Rf),
                    _addGuideToLauncher: t(If),
                    isAnonymousVisitor: Pn,
                    DEFAULT_VISITOR_ID: Un,
                    shouldIdentityChange: U.constant(!1),
                    read: d.read,
                    write: d.write,
                    _delete_cookie: d.clear,
                    _set_cookie: Wt,
                    _get_cookie: jt,
                    get_cookie_key: Vt,
                    ENV: Qe,
                    eventCache: t(Xi),
                    _getOpacityStyles: n(null, "_getOpacityStyles", tv),
                    setStyle: eo,
                    _createGuideEvent: t(eg),
                    seenGuide: t(Jh),
                    dismissedGuide: t(qh),
                    advancedGuide: t(Vh),
                    seenTime: 0,
                    placeBadge: t(bl),
                    isBadge: t(Lu),
                    showPreview: t(n(Dh, "showPreview", tv)),
                    removeAllBadges: t(wl),
                    tellMaster: ia,
                    DEFAULT_TIMER_LENGTH: $f,
                    registerMessageHandler: qo,
                    _get_offset: t(ao),
                    _shouldAutoDisplayGuide: U.constant(!1),
                    removeBadge: Il,
                    _showLightboxGuide: t(Wm),
                    _showGuide: t(zh),
                    getElementForGuideStep: t(Gu),
                    isElementVisible: xo,
                    getTooltipDivId: t(Gh),
                    setupWatchOnTooltip: t(Uh),
                    letters: "",
                    charset: "",
                    detectMaster: ra,
                    listenToMaster: n(null, "listenToMaster", nv),
                    start: Ou,
                    SEND_INTERVAL: er,
                    stageGuideEvent: t(ig),
                    startStagedTimer: ng,
                    isURLValid: rr,
                    getURL: or,
                    _get_screen_dim: t(io),
                    _isInViewport: t(ro),
                    _getCss3Prop: Xr,
                    waitThenStartGuides: t(Yf),
                    guidesProcessingThreadHandle: Zf
                })
            }
            var ov = function() {
                    Al.init(), ul.init()
                },
                av = {
                    state: {
                        errorCount: 0,
                        errors: {}
                    },
                    actions: {
                        write: function(e, t) {
                            var n = t.data[0],
                                i = t.data[1],
                                t = t.data[2];
                            if (n && !n.logged) {
                                var r = e.getters.hasLogged()(n);
                                if (e.dispatch("update", n), !r) {
                                    i = i || "pendo.io unhandled exception", e = "";
                                    t && (e = " " + U.map(t, function(e, t) {
                                        return t + "=" + e
                                    }).join(", "));
                                    try {
                                        n.logged = !0
                                    } catch (o) {}
                                    r = "[" + i + ": " + n.message + e + "]", t = (H(r), Wv.pendo_options || {});
                                    n.stack && !1 !== G.logStackTraces && !1 !== t.logStackTraces ? Ur(r + "\n" + n.stack) : Gr(r)
                                }
                            }
                        },
                        update: function(e, t) {
                            t && t.message && (e.getters.hasLogged()(t) || e.commit("addError", t), e.commit("incrementError", t))
                        }
                    },
                    mutations: {
                        addError: function(e, t) {
                            e.errors[t.message] = {
                                count: 0,
                                stack: t.stack
                            }
                        },
                        incrementError: function(e, t) {
                            e.errors[t.message].count++, e.errorCount++
                        }
                    },
                    getters: {
                        hasLogged: function(t) {
                            return function(e) {
                                return !!t.errors[e.message]
                            }
                        }
                    }
                },
                sv = function() {
                    var i;

                    function r() {
                        W.dispatch("guideUpdate/documentChanged")
                    }

                    function n() {
                        W.dispatch("guideUpdate/handleScheduledUpdate")
                    }
                    return {
                        actions: {
                            documentChanged: function(e) {
                                var t;
                                e.getters.isUpdating() ? e.commit("setNeedsUpdate") : e.state.scheduledUpdate || (t = e.getters.now() - e.state.updateCompleteTime, t = Math.min(Math.max(0, $f - t), $f), t = setTimeout(n, t), e.commit("setScheduledUpdate", t))
                            },
                            handleScheduledUpdate: function(e) {
                                e.dispatch("stopScheduledUpdate"), ap()
                            },
                            stopScheduledUpdate: function(e) {
                                e.state.scheduledUpdate && (clearTimeout(e.state.scheduledUpdate), e.commit("setScheduledUpdate", null))
                            },
                            startObserverIfNeeded: function(e, t) {
                                var n;
                                e.state.useObserver && ((n = e.getters.observer()) || (n = new(t || MutationObserver)(r), i = n), e.state.observing || (n.observe(Jv.documentElement, {
                                    subtree: !0,
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0
                                }), e.commit("setObserving", !0)))
                            },
                            stopObserver: function(e) {
                                var t = e.getters.observer();
                                t && U.isFunction(t.disconnect) && t.disconnect(), e.commit("setObserving", !1), e.dispatch("stopScheduledUpdate")
                            },
                            startIteration: function(e, t) {
                                e.getters.isUpdating() || e.commit("startUpdate", t), e.commit("startIteration", t)
                            },
                            completeIteration: function(e, t) {
                                e.commit("completeIteration", t), e.getters.isUpdateComplete() && e.commit("completeUpdate", t)
                            },
                            startPhase: function(e, t) {
                                e.getters.isPhaseInProgress()(t) || e.commit("startPhase", t)
                            }
                        },
                        mutations: {
                            setUseObserver: function(e) {
                                e.useObserver = !0
                            },
                            setObserving: function(e, t) {
                                e.observing = t
                            },
                            setIterationTimeLimit: function(e, t) {
                                e.iterationTimeLimit = t
                            },
                            setNeedsUpdate: function(e) {
                                e.needsUpdate = !0
                            },
                            setScheduledUpdate: function(e, t) {
                                e.scheduledUpdate = t
                            },
                            startUpdate: function(e, t) {
                                e.needsUpdate = !1, e.updateId = xt(16), e.updateStartTime = t
                            },
                            completeUpdate: function(e, t) {
                                e.updateId = null, e.updateStartTime = null, e.updateTotalTime = 0, e.iterationCount = 0, e.phases = {}, e.updateCompleteTime = t
                            },
                            startIteration: function(e, t) {
                                e.iterationStartTime = t, e.iterationCount++
                            },
                            completeIteration: function(e, t) {
                                e.updateTotalTime += t - e.iterationStartTime, e.iterationStartTime = null
                            },
                            startPhase: function(e, t) {
                                var n = {};
                                n[t] = {
                                    updateId: e.updateId
                                }, U.extend(e.phases, n)
                            },
                            completePhase: function(e, t) {
                                e = e.phases[t.phase];
                                e && (e.completedTime = t.time)
                            },
                            updatePhaseState: function(e, t) {
                                e = e.phases[t.phase];
                                e && U.extend(e, t.state, {
                                    updateId: e.updateId
                                })
                            }
                        },
                        getters: {
                            exceededIterationTime: function(e, t) {
                                return t.iterationTimeElapsed() > e.iterationTimeLimit
                            },
                            iterationTimeElapsed: function(e, t) {
                                return e.iterationStartTime ? t.now() - e.iterationStartTime : null
                            },
                            isUpdateComplete: function(e, t) {
                                return U.all(U.keys(e.phases), t.isPhaseComplete())
                            },
                            isUpdating: function(e) {
                                return !!e.updateId
                            },
                            isPhaseInProgress: function(e, t) {
                                return function(e) {
                                    return !t.isPhaseComplete()(e)
                                }
                            },
                            isPhaseComplete: function(t) {
                                return function(e) {
                                    e = t.phases[e];
                                    return !(!e || !e.completedTime)
                                }
                            },
                            now: function() {
                                return v()
                            },
                            observer: function() {
                                return i
                            },
                            clonePhaseState: function(t) {
                                return function(e) {
                                    return U.extend({}, t.phases[e])
                                }
                            }
                        },
                        state: {
                            useObserver: !1,
                            observing: !1,
                            needsUpdate: !1,
                            scheduledUpdate: null,
                            updateId: null,
                            updateStartTime: null,
                            updateTotalTime: 0,
                            updateCompleteTime: 0,
                            iterationCount: 0,
                            iterationStartTime: null,
                            iterationTimeLimit: Infinity,
                            phases: {}
                        }
                    }
                }(),
                uv = function() {
                    var i = ["advanced", "dismissed", "snoozed"];
                    return {
                        actions: {
                            init: function(t, e) {
                                U.each(e, function(e) {
                                    U.each(e.steps, function(e) {
                                        t.commit("updateStepState", e)
                                    })
                                })
                            },
                            fixSeenStateAndLogError: function(e, t) {
                                var n, i, r = t.step,
                                    t = t.reason;
                                e.state.exceptions[r.id] || (n = r.seenState, (i = e.state.steps[r.id]) && i.seenState && (r.seenState = i.seenState), e.state.exceptions[r.id] = !0, e.dispatch("logRedisplayError", {
                                    id: r.id,
                                    guideId: r.guideId,
                                    reason: t,
                                    seenState: i.seenState,
                                    previousSeenState: n
                                }))
                            },
                            logRedisplayError: function(e, t) {
                                Ur(['Attempted redisplay of guide="', t.guideId, '" step="', t.id, '" reason="', t.reason, '" seenState="', t.seenState, '" previousSeenState="', t.previousSeenState, '"'].join())
                            }
                        },
                        mutations: {
                            updateStepState: function(e, t) {
                                var n = v();
                                e.steps[t.id] = U.extend({}, e.steps[t.id], {
                                    pageId: t.pageId,
                                    regexUrlRule: t.regexUrlRule,
                                    seenState: t.seenState,
                                    updatedAt: n,
                                    allowedAt: n + 6e4
                                })
                            },
                            resetStepStatus: function(e) {
                                e.steps = {}
                            }
                        },
                        getters: {
                            isRedisplay: function(n) {
                                return function(e) {
                                    var t = n.steps[e.id];
                                    return !!t && (!(e.resetAt > t.updatedAt) && (!(v() >= t.allowedAt) && (U.contains(i, t.seenState) && !U.contains(i, e.seenState))))
                                }
                            },
                            isMissingPageRule: function(n) {
                                return function(e) {
                                    var t = n.steps[e.id];
                                    return !!t && !(!t.regexUrlRule || e.regexUrlRule)
                                }
                            }
                        },
                        state: {
                            steps: {},
                            exceptions: {}
                        }
                    }
                }(),
                dv = {
                    state: {
                        lastFlush: v(),
                        flushInterval: 3e5,
                        counters: {
                            ptmGifFailures: 0,
                            guideGifFailures: 0
                        }
                    },
                    actions: {
                        flush: function(n) {
                            U.each(n.state.counters, function(e, t) {
                                n.commit("resetCounter", t)
                            }), n.commit("setLastFlush", n.getters.now())
                        }
                    },
                    mutations: {
                        setLastFlush: function(e, t) {
                            e.lastFlush = t
                        },
                        incrementCounter: function(e, t) {
                            e.counters[t] !== qv && e.counters[t]++
                        },
                        resetCounter: function(e, t) {
                            e.counters[t] !== qv && (e.counters[t] = 0)
                        }
                    },
                    getters: {
                        shouldFlush: function(e, t) {
                            return t.now() - e.lastFlush >= e.flushInterval
                        },
                        payload: function(e) {
                            e = U.reduce(e.counters, function(e, t, n) {
                                return 0 < t && (e[n] = t), e
                            }, {});
                            return U.extend({}, e)
                        },
                        now: function() {
                            return v()
                        }
                    }
                },
                cv = {
                    state: {
                        visitor: {},
                        account: {},
                        parentAccount: {},
                        date: null,
                        version: null,
                        selfHosted: null
                    },
                    actions: {},
                    mutations: {
                        setMetadata: function(e, t) {
                            t && (t.visitor && (e.visitor = t.visitor), t.account && (e.account = t.account), t.parentAccount && (e.parentAccount = t.parentAccount), t.date && (e.date = t.date), t.version && (e.version = t.version), null !== t.selfHosted && (e.selfHosted = t.selfHosted))
                        },
                        reset: function(e) {
                            e.visitor = {}, e.account = {}, e.parentAccount = {}, e.date = null, e.version = null, e.selfHosted = null
                        }
                    },
                    getters: {
                        metadata: function(e) {
                            return e
                        },
                        visitor: function(e) {
                            return e.visitor
                        },
                        account: function(e) {
                            return e.account
                        },
                        parentAccount: function(e) {
                            return e.parentAccount
                        },
                        selfHosted: function(e) {
                            return e.selfHosted
                        }
                    }
                },
                lv = "pendo-preview",
                fv = "current-guide-preview",
                pv = {
                    state: {
                        preview: null,
                        designerPreview: null
                    },
                    actions: {
                        start: function(e, t) {
                            e.commit("setPreview", t), e.dispatch("write")
                        },
                        restart: function(e, t) {
                            e.commit("updatePreview", {
                                state: null
                            }), e.commit("updatePreview", t)
                        },
                        update: function(e, t) {
                            e.commit("updatePreview", {
                                state: t
                            }), e.dispatch("write")
                        },
                        load: function(e) {
                            try {
                                var t = e.getters.storage(),
                                    n = w.parse(t.getItem(lv)),
                                    i = (n.apiKey === G.apiKey && e.commit("setPreview", n), t.getItem(fv));
                                i && e.commit("setDesignerPreview", w.parse(i))
                            } catch (Ce) {}
                        },
                        write: function(e) {
                            try {
                                var t = e.getters.storage();
                                e.rootGetters["frames/isLeader"]() && (e.state.preview ? t.setItem(lv, w.stringify(e.state.preview)) : t.removeItem(lv))
                            } catch (Ce) {}
                        },
                        exit: function(e) {
                            e.commit("setPreview", null), e.dispatch("write")
                        },
                        exitDesignerPreview: function(e) {
                            e.commit("setDesignerPreview", null), e.getters.storage().removeItem(fv)
                        }
                    },
                    mutations: {
                        updatePreview: function(e, t) {
                            e.preview && U.extend(e.preview, t)
                        },
                        setPreview: function(e, t) {
                            e.preview = t
                        },
                        setDesignerPreview: function(e, t) {
                            e.designerPreview = t
                        }
                    },
                    getters: {
                        isInPreviewMode: function(e) {
                            return !!e.preview
                        },
                        isInDesignerPreviewMode: function(e, t) {
                            return !!e.designerPreview && t.isInPreviewMode()
                        },
                        storage: function() {
                            return _n
                        }
                    }
                };

            function hv(e) {
                e.registerModule("errorLog", av), e.registerModule("frames", Df), e.registerModule("guideUpdate", sv), e.registerModule("guideState", wc), e.registerModule("healthCheck", uv), e.registerModule("location", Zm), e.registerModule("monitoring", dv), e.registerModule("metadata", cv), e.registerModule("preview", pv)
            }
            var gv = function() {
                    var o = "guideActivity",
                        r = U.isObject,
                        a = U.findWhere;
                    return {
                        type: o,
                        handler: function(e) {
                            var t, n = e.data[0],
                                e = e.data[1];
                            e = e, r(t = n) && function(e) {
                                return e && "click" === e.type
                            }(e) && function i(e) {
                                if ("pendo-base" == e.id) return !0;
                                if (r(e.parentElem)) return i(e.parentElem);
                                return !1
                            }(t) && (function(e) {
                                return s(e)
                            }(t) || function(e) {
                                return u(e)
                            }(t)) && (e = function(e) {
                                var t = Yg();
                                if (t && (! function(e) {
                                        e = e.guide.activeModule;
                                        return e && e.attributes && e.attributes.resourceCenter && "AnnouncementsModule" === e.attributes.resourceCenter.moduleId
                                    }(t) || (t = function(e) {
                                        var t = J("#" + e).closest("[data-pendo-announcement-guide-id]").attr("data-pendo-announcement-guide-id"),
                                            e = U.find(G.guides, function(e) {
                                                return e.id === t
                                            });
                                        return e ? {
                                            guide: e,
                                            step: e.steps[0]
                                        } : qv
                                    }(e.id))) && t.step && t.step.domJson) {
                                    var e = u(e) || s(e) || {
                                            type: e.tag,
                                            id: e.id
                                        },
                                        n = function r(e, t) {
                                            if (t.props && t.props.id && t.props.id === e) return t;
                                            if (t.children !== qv)
                                                for (var n = 0; n < t.children.length; n++) {
                                                    var i = r(e, t.children[n]);
                                                    if (i !== qv) return i
                                                }
                                            return qv
                                        }(e.id, t.step.domJson);
                                    if (n) return n = function(e) {
                                        if (e !== qv) {
                                            if ("a" === e.type) return [{
                                                action: "openLink",
                                                url: Wi(e.props.href),
                                                target: e.props.target
                                            }];
                                            if (e.actions !== qv) return U.map(e.actions, function(e) {
                                                switch (e.action) {
                                                    case "openLink":
                                                        var t = a(e.parameters, {
                                                                name: "url"
                                                            }),
                                                            n = a(e.parameters, {
                                                                name: "target"
                                                            });
                                                        return {
                                                            action: e.action,
                                                            url: Wi(t.value),
                                                            target: n.value
                                                        };
                                                    case "submitPollAndGoToStep":
                                                    case "goToStep":
                                                        t = a(e.parameters, {
                                                            name: "goToStepId"
                                                        });
                                                        return {
                                                            action: e.action,
                                                            guideStepId: t.value
                                                        };
                                                    case "guideSnoozed":
                                                        n = a(e.parameters, {
                                                            name: "snooze_duration"
                                                        }), t = a(e.parameters, {
                                                            name: "time_unit"
                                                        });
                                                        return {
                                                            action: e.action,
                                                            duration: n.value,
                                                            timeUnit: t.value
                                                        };
                                                    case "showGuide":
                                                    case "launchGuide":
                                                        n = e.parameters[0];
                                                        return {
                                                            action: e.action,
                                                            guideId: n.value
                                                        };
                                                    case "advanceGuide":
                                                    case "previousStep":
                                                    case "submitPoll":
                                                    case "dismissGuide":
                                                        return {
                                                            action: e.action
                                                        };
                                                    default:
                                                        return {}
                                                }
                                            })
                                        }
                                        return []
                                    }(n), eg({
                                        type: o,
                                        visitorId: j(),
                                        ui_element_id: e.id,
                                        ui_element_type: e.type,
                                        ui_element_actions: n,
                                        guideId: t.guide.id,
                                        stepId: t.step.id,
                                        duration: (new Date).getTime() - ph(),
                                        language: t.guide.language
                                    })
                                }
                            }(n)) && ig(e)
                        }
                    };

                    function s(e) {
                        return "BUTTON" === e.tag && (/^pendo-close-guide/.test(e.id) || /^pendo-button/.test(e.id)) ? {
                            type: e.tag,
                            id: e.id
                        } : "pendo-guide-container" !== e.id && r(e.parentElem) ? s(e.parentElem) : null
                    }

                    function u(e) {
                        return "A" === e.tag ? {
                            type: e.tag,
                            id: e.id
                        } : "pendo-guide-container" !== e.id && r(e.parentElem) ? u(e.parentElem) : null
                    }
                }(),
                mv = function() {
                    var r = "guideActivity",
                        o = U.isObject;
                    return {
                        type: r,
                        handler: function(e) {
                            var t, n = e.data[0],
                                e = e.data[1];
                            e = e, o(t = n) && function(e) {
                                return e && "click" === e.type
                            }(e) && function i(e) {
                                if ("pendo-resource-center-container" == e.id) return !0;
                                if (o(e.parentElem)) return i(e.parentElem);
                                return !1
                            }(t) && (function(e) {
                                return u(e)
                            }(t) || function(e) {
                                return a(e)
                            }(t) || function(e) {
                                return s(e)
                            }(t)) && (e = function(e) {
                                var t = Yg();
                                if (t) {
                                    var n = t.guide.activeModule,
                                        i = u(e);
                                    if (i ? (i = {
                                            elementId: i.id
                                        }, /^pendo-close-guide/.test(i.id) ? i.actions = [{
                                            action: "dismissGuide"
                                        }] : /^pendo-left-caret/.test(i.id) && (i.actions = [{
                                            action: "showGuide",
                                            guideId: t.guide.id
                                        }])) : i = a(e) || s(e), i) return i.guideId || (i.guideId = (n || t.guide).id), i.stepId || (i.stepId = (n ? n.steps[0] : t.step).id), i.actions || (i.actions = [{
                                        action: "showGuide",
                                        guideId: i.elementId
                                    }]), i.language || (i.language = (n || t.guide).language), eg({
                                        type: r,
                                        visitorId: j(),
                                        ui_element_id: i.elementId,
                                        ui_element_type: i.type,
                                        ui_element_actions: i.actions,
                                        guideId: i.guideId,
                                        stepId: i.stepId,
                                        duration: (new Date).getTime() - ph(),
                                        language: i.language
                                    })
                                }
                            }(n)) && ig(e)
                        }
                    };

                    function a(e) {
                        return -1 !== e.cls.split(" ").indexOf("_pendo-resource-center-module-list-item") ? {
                            type: "BUTTON",
                            elementId: J("#" + e.id).closest("[data-pendo-module-guide-id]").attr("data-pendo-module-guide-id")
                        } : "pendo-resource-center-container" !== e.id && o(e.parentElem) ? a(e.parentElem) : null
                    }

                    function s(e) {
                        var t = e.cls.split(" ");
                        if (-1 === t.indexOf("_pendo-resource-center-guidelist-module-listed-guide") && -1 === t.indexOf("_pendo-resource-center-onboarding-module-listed-guide")) return "pendo-resource-center-container" !== e.id && o(e.parentElem) ? s(e.parentElem) : null;
                        t = Yg();
                        if (t) {
                            e = e.id.split("-").pop(), t = t.guide.activeModule;
                            if (t && t.attributes && t.attributes.resourceCenter) return {
                                type: "BUTTON",
                                elementId: t.attributes.resourceCenter.children[e]
                            }
                        }
                        return null
                    }

                    function u(e) {
                        return "BUTTON" === e.tag && (/^pendo-close-guide/.test(e.id) || /^pendo-left-caret/.test(e.id)) ? {
                            type: e.tag,
                            id: e.id
                        } : "pendo-guide-container" !== e.id && o(e.parentElem) ? u(e.parentElem) : null
                    }
                }(),
                vv = function() {
                    var i, r, n = 250;
                    return {
                        initialize: function(e, t) {
                            i = e, r = t,
                                function() {
                                    r.ConfigReader.get("autoFrameInstall") && r.Events.ready.on(function() {
                                        s()
                                    });
                                    r.ConfigReader.get("frameIdentitySync") && (r.Events.metadata.on(function(e) {
                                        r.store.dispatch("frames/syncOptions", {
                                            options: null == (e = e.data) ? void 0 : e[0]
                                        })
                                    }), r.Events.identify.on(function(e) {
                                        var t;
                                        r.store.dispatch("frames/syncIdentity", {
                                            visitorId: null == (t = e.data) ? void 0 : t[0].visitor_id,
                                            accountId: null == (t = e.data) ? void 0 : t[0].account_id
                                        })
                                    }))
                                }()
                        }
                    };

                    function o(e, t) {
                        var n = r.ConfigReader.getLocalConfig(),
                            n = (n.apiKey || (n.apiKey = i.apiKey), e.pendo = {
                                _q: [
                                    ["initialize", n]
                                ]
                            }, e.document.createElement("script"));
                        n.src = t, e.document.getElementsByTagName("head")[0].appendChild(n)
                    }

                    function a(e) {
                        try {
                            if (e.pendo) return
                        } catch (Ce) {
                            return
                        }
                        var t, n = (n = r.ConfigReader.get("selfHostedAgentUrl")) || (n = i.dom("script"), t = /\/pendo\.js$/, (n = i._.find(n, function(e) {
                            return t.test(e.src)
                        })) && n.src);
                        n ? "complete" === e.document.readyState ? o(e, n) : (e.pendo = {}, Jv.addEventListener("DOMContentLoaded", i._.partial(o, e, n))) : i.log("Unable to find agent url to install agent in frames", "debug")
                    }

                    function s() {
                        for (var e = i.dom("iframe").length, t = 0; t < e; t++) a(Wv.frames[t]);
                        setTimeout(s, n)
                    }
                }(),
                yv = function() {
                    var i, r = {},
                        n = U.has,
                        o = U.isString,
                        a = U.reduce,
                        e = U.size;
                    return {
                        initialize: function(e, t) {
                            (i = e).getText = c, e.excludeAllText = t.ConfigReader.get("excludeAllText");
                            var n = t.ConfigReader.get("allowedText");
                            r = a(n, function(e, t) {
                                return o(t) && (e[t] = !0), e
                            }, {}), t.NodeSerializer.add(s), t.Events.on("eventCaptured", U.partial(u, e))
                        },
                        isEnabled: d,
                        isTextCapturable: function(e) {
                            var t = lt.call(e);
                            return d() || n(r, t) || n(r, e)
                        },
                        hasWhitelist: function() {
                            return 0 < e(r)
                        },
                        getText: c,
                        serializer: s
                    };

                    function s(e, t, n) {
                        return t === n && (yv.isEnabled() || !yv.isEnabled() && yv.hasWhitelist()) && (t = yv.getText(n, 128), yv.isTextCapturable(t) && (e.txt = yv.hasWhitelist() ? lt.call(t) : t)), e
                    }

                    function u(e, t) {
                        var n;
                        !d() || (n = t.data[0]) && "guideActivity" === n.type && (t = e.getActiveGuide()) && (e = (0, e.BuildingBlocks.BuildingBlockGuides.findDomBlockInDomJson)(t.step.domJson, function(e) {
                            return e.props && e.props.id && e.props.id === n.props.ui_element_id
                        })) && (n.props.ui_element_text = e.content)
                    }

                    function d() {
                        return !i.excludeAllText
                    }

                    function c(e, t) {
                        var n, i, r = "",
                            o = e.nodeType;
                        if (t = t || 128, o === br || o === xr) return e.nodeValue;
                        if ((i = e).tagName && "textarea" != i.tagName.toLowerCase() && (o === wr || o === Ir || o === Sr))
                            for (e = e.firstChild; e; e = e.nextSibling) {
                                if (t <= (r + (n = c(e, t - r.length))).length) return r + function(e) {
                                    if (!(e.length < 1)) {
                                        var t = e.slice(-1).charCodeAt(0);
                                        if (l(t) || f(t)) {
                                            if (1 === e.length) return e.slice(0, -1);
                                            if (l(t)) return e.slice(0, -1);
                                            if (f(t))
                                                if (!l(e.slice(-2).charCodeAt(0))) return e.slice(0, -1)
                                        }
                                    }
                                    return e
                                }(n.substring(0, t - r.length));
                                r += n
                            }
                        return r
                    }

                    function l(e) {
                        return 55296 <= e && e <= 56319
                    }

                    function f(e) {
                        return 56320 <= e && e <= 57343
                    }
                }(),
                bv;

            function wv() {
                return {
                    dom: J,
                    placeBadge: bl,
                    showPreview: Dh,
                    stopGuides: Qf,
                    removeAllBadges: wl,
                    _: U,
                    sizzle: ci,
                    tellMaster: ia,
                    tell: ia,
                    log: H,
                    attachEvent: C,
                    createLauncher: cf,
                    removeLauncher: lf,
                    addGuideToLauncher: If,
                    updateLauncherContent: bf,
                    DEFAULT_TIMER_LENGTH: $f,
                    getOffsetPosition: ao,
                    getScreenDimensions: io,
                    registerMessageHandler: qo,
                    whenLoadedCall: Ou,
                    loadResource: Fo,
                    loadGuideCss: Tg,
                    GuideFactory: Rl,
                    GuideStep: ul,
                    extractElementTreeContext: du,
                    previewGuideFromJSON: Z.previewGuideFromJSON,
                    hidePreviewedGuide: Z.hidePreviewedGuide,
                    shadowAPI: l,
                    getTarget: bi,
                    pullContentsFromTargetElement: Fh,
                    doesElementMatchContainsRules: Ph,
                    doesElementContentMatchRule: Bh
                }
            }
            var Iv = function() {
                    (bv = bv || wv()).areGuidesEnabled = !Fg(), G.designer || (G.designer = bv)
                },
                Sv = function() {
                    G.designer && (G.designer = null, delete G.designer)
                },
                xv = function() {
                    var r, o;
                    return {
                        initialize: function(e, t) {
                            r = e, o = t, ua() || qo("connect", n);
                            qo("pendo-designer-launch::launch", i), qo("pendo-preview::launch", s), e.app_name = Jv.title, (ra() || Wv.opener) && Wv.addEventListener && (r.log(e.app_name + ": listening to messages"), Wv.addEventListener("message", Go, !1));
                            Wv.opener && r._.isFunction(Wv.opener.postMessage) && Wv.opener.postMessage({
                                type: "pendo::ready"
                            }, "*");
                            r.onConnectMessage = n, o.Events.appUnloaded.on(u)
                        },
                        onConnectMessage: n,
                        disconnectDesigner: a,
                        launchDesignerListener: i,
                        launchPreviewListener: s
                    };

                    function n(e, t) {
                        var n, i;
                        r.isSendingEvents() && (n = t.origin, r.stopGuides(), r.buffers.lock(), r.designerv2.hostConfig || o.store.dispatch("frames/leave"), zo(i = t.source), o.Events.appUnloaded.on(r._.partial(a, i, n)), Iv(), ia(t.source, {
                            status: "success",
                            type: "connect"
                        }, n), Yo("selection.js") && (r.log("Designer Modules already loaded."), ia({
                            type: "ready"
                        }, n)))
                    }

                    function a(e, t) {
                        r.buffers.unlock(), Sv(), e && ia(e, {
                            type: "unload"
                        }, t)
                    }

                    function i(e, t) {
                        var n, t = t.data.token;
                        t && (n = t.DADesigner ? "da-designer" : "in-app-designer", t = {
                            lookaside: t.baseUrl,
                            host: t.host,
                            target: t.target || "latest",
                            DADesigner: !!t.DADesigner,
                            gcsBucket: t.gcsBucket || n
                        }, r.designerv2.launchInAppDesigner(t))
                    }

                    function s(e, t) {
                        o.store.dispatch("preview/exitDesignerPreview"), o.store.dispatch("preview/start", r._.extend({}, t.data.config, {
                            apiKey: r.apiKey,
                            origin: t.origin
                        })), Ec(Wv) && (t.source.postMessage({
                            type: "pendo-preview::ready",
                            apiKey: r.apiKey,
                            accountId: r.accountId
                        }, t.origin), $g(), o.store.dispatch("frames/startPreview"))
                    }

                    function u() {
                        Wv.removeEventListener && Wv.removeEventListener("message", Go, !1)
                    }
                }(),
                Cv = function() {
                    var r = [],
                        t = {};
                    return {
                        initialize: function(e, t) {
                            (r = t.ConfigReader.get("promotedAgentMetadataConfigurations")) && r.length && (t.Events.on("metadata", n), t.Events.on("eventCaptured", i))
                        },
                        getPromotedMetadata: function() {
                            return r
                        },
                        hasPromotedMetadataKind: o,
                        setSchemaGroup: n,
                        getSchemaGroup: function() {
                            return t
                        },
                        resetSchemaGroup: function() {
                            t = {}
                        }
                    };

                    function o(t) {
                        return U.some(r, function(e) {
                            return e.kind === t
                        })
                    }

                    function n(e) {
                        var n, i, e = e ? e.data[0] : nd();
                        n = e, i = {}, U.each(["visitor", "account", "parentAccount"], function(e) {
                            var t = o(e);
                            !U.isEmpty(n[e]) && t && (t = e.toLowerCase() + "metadata", e = function(e, n) {
                                var i = {};
                                e && U.each(e, function(e, t) {
                                    Boolean(U.find(r, function(e) {
                                        return e.fieldName === t && e.kind === n
                                    })) && (i["agent__" + t] = e)
                                });
                                return i
                            }(n[e], e), U.isEmpty(e) || (i[t] = e))
                        }), t = i
                    }

                    function i(e) {
                        e = e.data[0];
                        U.isEmpty(t) && n(), U.isEmpty(t) || ("track" === e.type ? e.props.__sg__ = t : (e.hasOwnProperty("eventProperties") || (e.eventProperties = {}), e.eventProperties.__sg__ = t))
                    }
                }();

            function Ev(e, t, n) {
                this.element = e, this.method = "element" == t ? "click" : "hover" == t ? "mouseover" : t, this.step = n, this.guide = n.getGuide()
            }

            function _v(e) {
                var t;
                return "tooltip" === this.type && ((t = this).attributes.height = t.attributes.height || G.TOOLTIP_DEFAULT_HEIGHT, t.attributes.width = t.attributes.width || G.TOOLTIP_DEFAULT_WIDTH, t.attributes.layoutDir = t.attributes.layoutDir || "DEFAULT", this.getTriggers = function(e) {
                    var t = this,
                        n = t.element || Gu(t);
                    return !n && e ? [] : (e = (t.advanceMethod || "").split(","), this.triggers = U.map(e, function(e) {
                        return new Ev(n, e, t)
                    }), this.triggers)
                }, this.removeTrigger = function(e) {
                    this.triggers = U.without(this.triggers, e), 0 === this.triggers.length && (this.triggers = null)
                }, this.canShow = function() {
                    return !Lh(t) && (!!e.canShowOnDevice() && (!t.isShown() && t.canShowOnPage(og()) && Mh(t)))
                }, this.after("render", function() {
                    Gd(this, this.elements) && (U.each(this.getTriggers(), function(e) {
                        e.add()
                    }), oc.attachScrollHandlers(this, this.onscroll))
                }), this.reposition = function() {
                    var e = this.attributes.width,
                        t = this.attributes.height,
                        n = this.attributes.layoutDir,
                        i = this.guideElement,
                        r = J("._pendo-guide-container_", i),
                        o = ao(this.element),
                        t = Qd(o, t, e, n);
                    r.removeClass("top right bottom left").removeClass("_pendo-guide-container-top_ _pendo-guide-container-right_ _pendo-guide-container-bottom_ _pendo-guide-container-left_").addClass(t.arrowPosition).addClass("_pendo-guide-container-" + t.arrowPosition + "_"), J("._pendo-guide-arrow_,._pendo-guide-arrow-border_", i).remove(), Fd(i, t), i.css({
                        top: t.top,
                        left: t.left,
                        height: t.height,
                        width: t.width,
                        position: o.fixed ? "fixed" : ""
                    }), this.dim = t, Kd(this)
                }, this.onscroll = function(e) {
                    xo(e.element) ? (e.reposition(), eo(e.elements[0], "display:block")) : eo(e.elements[0], "display:none")
                }, this.teardownElementEvent = function() {
                    U.each(this.triggers, function(e) {
                        e.remove()
                    })
                }, this.after("hide", function() {
                    J("._pendo-guide-tt-region-block_").remove(), jd()
                })), this
            }
            Ev.prototype.add = function() {
                0 === U.indexOf(this.guide.steps, this.step) && !Ev.shouldAttachHandler(this.guide, this.method) || Lu(this.guide) && !Mu(this.guide) || this.setupElementEvent(this.element, this.method)
            }, Ev.prototype.remove = function() {
                this.teardownElementEvent(this.element, this.method)
            }, Ev.prototype.setupElementEvent = function(e, t) {
                this.advanceFn || (this.advanceFn = U.compose(U.bind(this.teardownElementEvent, this, e, t), U.bind(this.step.advance, this.step))), Ev.attach(this.step, e, t, this.advanceFn)
            }, Ev.prototype.teardownElementEvent = function(e, t) {
                H("detach onGuideAdvanced", "guide"), m(e, t, this.advanceFn, !0), this.step.removeTrigger(this)
            }, Ev.shouldAttachHandler = function(e, t) {
                return !e.isActivatedByEvent(t) || Mf.activates(e) || e.attributes.activation.selector !== e.steps[0].elementPathRule && !!e.attributes.activation.selector
            }, Ev.attach = function(e, t, n, i) {
                if (e) {
                    for (var r = Ev.handlers = Ev.handlers || {}, o = r[e.id] = r[e.id] || [], a = 0; a < o.length; ++a) {
                        var s = o[a];
                        t === s[0] && n === s[1] && (m(t, n, s[2], !0), o.splice(U.indexOf(o, s), 1), a--)
                    }
                    o.push([t, n, i]), m(t, n, i, !0), C(t, n, i, !0)
                }
            };
            var Tv = "_pendo-guide-mobile-lb_",
                Av = function(e) {
                    e.guideElement.addClass(Tv)
                },
                Rv = function(e, t) {
                    t === qv && (t = sr), e.element = Gu(e), Av(e);
                    var n = !!e.getGuide() && e.getGuide().isOnboarding(),
                        n = zm(n, e),
                        e = e.guideElement,
                        i = G.TOOLTIP_ARROW_SIZE,
                        i = (e.css({
                            width: "",
                            height: ""
                        }), J("._pendo-guide-container_", e).css({
                            bottom: i,
                            right: i
                        }));

                    function r(e) {
                        e.preventDefault()
                    }
                    J("._pendo-close-guide_", e).remove().prependTo(i), e.appendTo(Pu()), t.push(e[0]), C(n[0], "touchmove", r), C(e[0], "touchmove", r)
                };

            function kv() {
                var e = this;
                return /lightbox/i.test(e.type) && (e.attributes.height = e.attributes.height || G.LB_DEFAULT_HEIGHT, e.attributes.width = e.attributes.width || G.LB_DEFAULT_WIDTH, e.after("render", function() {
                    (ld() ? Rv : Wm)(e, e.elements)
                }), e.reposition = function() {
                    ld() || e.guideElement.css({
                        "margin-left": -Math.floor(e.attributes.width / 2),
                        "margin-top": -Math.floor(e.attributes.height / 2)
                    })
                }), e
            }
            var Ov = 500,
                Nv = "_pendo-guide-banner_";

            function Lv() {
                var n = this;
                return "banner" === n.type && (n.attributes.height = n.attributes.height || Ov, n.attributes.position = n.attributes.position || "top", n.after("render", function() {
                    var e = n.guideElement,
                        t = G.TOOLTIP_ARROW_SIZE;
                    e.css({
                        width: ""
                    }).addClass(Nv).addClass("_pendo-guide-banner-" + n.attributes.position + "_"), Fu() || e.addClass("_pendo-in_"), J("._pendo-guide-container_", e).css({
                        bottom: t,
                        right: t
                    }), n.element = Gu(n), n.elements.push(e[0]), e.appendTo(Pu())
                })), n
            }

            function Mv(t) {
                var n = this,
                    e = "whatsnew",
                    i = "_pendo-guide-whatsnew-seen_",
                    r = "active",
                    o = 1e3;
                return n.type === e && (U.extend(n, {
                    isShown: U.constant(!1),
                    launch: u,
                    onShown: u,
                    render: function() {
                        var e = n.guideElement,
                            t = n.attributes.height;
                        e && e.html() || (e = J("<div>").attr("id", Gh(n)).addClass("_pendo-guide-whatsnew_").html(n.getContent()), U.isNumber(t) && !n.attributes.autoHeight && e.height(t), n.seenState === r && e.addClass(i), n.guideElement = e)
                    },
                    seen: s
                }), U.extend(t, {
                    addToLauncher: function() {
                        var e = n.guideElement;
                        e && !ho(e[0]) && (J("._pendo-launcher_ #launcher-" + n.guideId).html("").append(e), il.runCustomScripts(n, t))
                    },
                    isReady: a
                }), n.after("show", s)), n;

                function a() {
                    return !!n.guideElement
                }

                function s() {
                    Fu() || a() && n.seenState !== r && function(e) {
                        {
                            var t, n;
                            if (xo(e, /(auto|scroll|hidden)/)) return (t = yo(e)) ? (t = V(t), e = V(e), n = t.top + Math.floor(t.height / 3), e.bottom <= t.bottom || e.top <= n) : 1
                        }
                    }(n.guideElement[0]) && (Jh(n.guideId, n.id, j(), e, t.language, {
                        last_updated_at: n.lastUpdatedAt
                    }), n.seenState = r, U.delay(function() {
                        n.guideElement.addClass(i + " out")
                    }, U.isNumber(n.attributes.seenDelay) ? n.attributes.seenDelay : o))
                }

                function u() {}
            }
            var Fv = function() {
                return {
                    initialize: function(e, t) {
                        var n, i = [_v, kv, Lv, Mv, o, a, r]; - 1 < U.indexOf(ul.behaviors, _v) || (n = U.indexOf(ul.behaviors, sl), ul.behaviors.splice.apply(ul.behaviors, [n, 0].concat(i)))
                    }
                };

                function r() {
                    var i = this;
                    return i.attributes && i.attributes.autoHeight && (i.after("render", function() {
                        i.resize(), i.attachEvent(i.guideElement[0], "load", function() {
                            i.resize()
                        })
                    }), i.resize = function() {
                        var e = ic(),
                            t = i.guideElement,
                            n = J("._pendo-guide-container_", t);
                        "tooltip" == i.type || Ye() && "lightbox" == i.type ? n.css({
                            width: i.attributes.width - 2 * e,
                            height: ""
                        }) : n.css({
                            right: e,
                            bottom: ""
                        }), i.attributes.height = n.height() + 2 * e, t.height(i.attributes.height), i.reposition()
                    }), i
                }

                function o(e) {
                    var t = this;
                    return t.domJson || t.domJsonpUrl || t.after("render", function() {
                        gh(t.guideElement[0], function() {
                            e.isOnboarding() && !confirm("Are you sure you want to stop this tutorial?") || _h(t)
                        })
                    }), t
                }

                function a() {
                    var e = this;
                    return e.hideCredits || e.domJson || e.domJsonpUrl || e.after("render", function() {
                        Nh(e.guideElement[0])
                    }), e
                }
            }();

            function Pv() {
                sm(vv), sm(yv), sm(Mf), sm(xv), sm(Cv), sm(Fv)
            }

            function Bv(n) {
                ev(n), rv(n), U.each(["identify", "updateOptions", "pageLoad"], function(e) {
                    var t = n[e];
                    n[e] = function() {
                        try {
                            Em() ? t.apply(this, arguments) : ae(n, e, arguments)
                        } catch (Ce) {
                            c(Ce)
                        }
                    }
                })
            }

            function Gv(e, t) {
                return pe(t), at(), (M(t) || !le(t, e, tn(!0))) && ((!e || !e.VERSION) && (hv(W), mr(), ov(), pc.reset(), W.dispatch("frames/init"), H.init(), Bv(e), S.appUsage.on(gv.handler), S.appUsage.on(mv.handler), S.error.on(U.partial(W.dispatch, "errorLog/write")), S.guideListChanged.on(Rn.changeSessionId), Pv(), Tm(e._q, _m, Ou), 1))
            }

            function Uv() {
                var r = w.stringify;
                w.stringify = function(e, t, n) {
                    var i = Array.prototype.toJSON,
                        e = (delete Array.prototype.toJSON, r(e, t, n));
                    return Array.prototype.toJSON = i, e
                }
            }

            function Dv(e) {
                return "undefined" != typeof Prototype && parseFloat(Prototype.Version.substr(0, 3)) < e && "undefined" != typeof Array.prototype.toJSON
            }

            function Hv() {
                Dv(1.7) && Uv()
            }
            var zv = ge(),
                jv = F(zv);
            Gv(jv, zv) && Hv()
        }()
    }(window, document), pendo.defaultLauncher && pendo.defaultLauncher('<div class="_pendo-launcher-content_" style="border-color:<%= data.color %>">\n    <div class="_pendo-launcher-header_">\n        <img src="<%= data.launcherBadgeUrl %>"/>\n        <div class="_pendo-launcher-title_"><%= data.title %></div>\n        <% if (data.enableSearch) { %>\n        <div class="_pendo-launcher-search-box_">\n        <input type="text" placeholder="Type here to start looking..." />\n        </div>\n        <% } %>\n    </div>\n    <div class="_pendo-launcher-guide-listing_">\n    <% _.each(guides, function(guide) { %>\n        <div class="_pendo-launcher-item_" id="launcher-<%= guide.id %>">\n            <a href="javascript:void(0);"><%= guide.name %></a>\n        </div>\n    <% }) %>\n    </div>\n    <% if (hidePoweredBy) { %>\n    <div class="_pendo-launcher-footer_"></div>\n    <% } else { %>\n    <div class="_pendo-launcher-footer_ _pendo-launcher-footer-credits_">\n        <span>powered by pendo</span>\n    </div>\n    <% } %>\n</div>\n', function(e) {
        e = e || {};
        var t, n = "",
            i = Array.prototype.join;

        function r() {
            n += i.call(arguments, "")
        }
        with(e) n += '<div class="_pendo-launcher-content_" style="border-color:' + (null == (t = data.color) ? "" : t) + '">\n    <div class="_pendo-launcher-header_">\n        <img src="' + (null == (t = data.launcherBadgeUrl) ? "" : t) + '"/>\n        <div class="_pendo-launcher-title_">' + (null == (t = data.title) ? "" : t) + "</div>\n        ", data.enableSearch && (n += '\n        <div class="_pendo-launcher-search-box_">\n        <input type="text" placeholder="Type here to start looking..." />\n        </div>\n        '), n += '\n    </div>\n    <div class="_pendo-launcher-guide-listing_">\n    ', _.each(guides, function(e) {
            n += '\n        <div class="_pendo-launcher-item_" id="launcher-' + (null == (t = e.id) ? "" : t) + '">\n            <a href="javascript:void(0);">' + (null == (t = e.name) ? "" : t) + "</a>\n        </div>\n    "
        }), n += "\n    </div>\n    ", hidePoweredBy ? n += '\n    <div class="_pendo-launcher-footer_"></div>\n    ' : n += '\n    <div class="_pendo-launcher-footer_ _pendo-launcher-footer-credits_">\n        <span>powered by pendo</span>\n    </div>\n    ', n += "\n</div>\n";
        return n
    });
})({
    environmentName: "production",
    blockAgentMetadata: false,

    blockLogRemoteAddress: true,


    dataHost: "data.pendo.io",


    stagingServers: [/review25\.calendly\.com/, /staging\.calendly\.com/],
    stagingAgentUrl: "https://pendo-io-static.storage.googleapis.com/agent/static/4cfbcefc-fcf9-4b66-5dc6-9b0d81bb07a9/pendo-staging.js",

    allowedOriginServers: ["https://pendo-static-5885846602252288.storage.googleapis.com"],


    adoptPrioritizeAdoptGuides: false,
    allowCrossOriginFrames: false,
    disableCookies: false,
    disableDesignerKeyboardShortcut: false,
    disableFeedbackAutoInit: false,
    disableGlobalCSS: false,
    disableGuidePseudoStyles: false,
    disablePersistence: false,
    enableDebugEvents: false,
    enableGuideTimeout: true,
    enableSessionReplay: false,
    enableSignedMetadata: false,
    eventPropertyConfigurations: [],
    excludeAllText: false,
    frameIdentitySync: false,
    freeNPSData: false,
    guideValidation: false,
    interceptElementRemoval: false,
    localStorageOnly: true,
    pendoCore: true,
    pendoFeedback: false,
    preferBroadcastChannel: true,
    preferMutationObserver: false,
    preventCodeInjection: false,
    promotedAgentMetadataConfigurations: [],
    requireHTTPS: true,
    requireSignedMetadata: false,
    restrictP1Access: true,
    siblingSelectors: false,
    trainingPartner: false,
    guideSeenTimeoutLength: 0,
    xhrTimings: false,
    xhrWhitelist: null,
    htmlAttributeBlacklist: null,
    htmlAttributes: /^(tabindex)$/i,
    apiKey: "4cfbcefc-fcf9-4b66-5dc6-9b0d81bb07a9"
});
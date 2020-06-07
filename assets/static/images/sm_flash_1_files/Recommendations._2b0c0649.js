(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 0 ], {
    1577: function(e, t, r) {
        var n = r(77), a = r(137), s = r(328), i = a("iterator");
        e.exports = !n(function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, r = "";
            return e.pathname = "c%20d", t.forEach(function(e, n) {
                t.delete("b"), r += n + e;
            }), s && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[i] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host;
        });
    },
    1636: function(e, t, r) {
        "use strict";
        var n = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g, s = "Overflow: input needs wider integers to process", i = Math.floor, o = String.fromCharCode, u = function(e) {
            return e + 22 + 75 * (e < 26);
        }, h = function(e, t, r) {
            var n = 0;
            for (e = r ? i(e / 700) : e >> 1, e += i(e / t); e > 455; n += 36) e = i(e / 35);
            return i(n + 36 * e / (e + 38));
        }, l = function(e) {
            var t, r, n = [], a = (e = function(e) {
                for (var t = [], r = 0, n = e.length; r < n; ) {
                    var a = e.charCodeAt(r++);
                    if (a >= 55296 && a <= 56319 && r < n) {
                        var s = e.charCodeAt(r++);
                        56320 == (64512 & s) ? t.push(((1023 & a) << 10) + (1023 & s) + 65536) : (t.push(a), 
                        r--);
                    } else t.push(a);
                }
                return t;
            }(e)).length, l = 128, f = 0, c = 72;
            for (t = 0; t < e.length; t++) (r = e[t]) < 128 && n.push(o(r));
            var p = n.length, g = p;
            for (p && n.push("-"); g < a; ) {
                var v = 2147483647;
                for (t = 0; t < e.length; t++) (r = e[t]) >= l && r < v && (v = r);
                var m = g + 1;
                if (v - l > i((2147483647 - f) / m)) throw RangeError(s);
                for (f += (v - l) * m, l = v, t = 0; t < e.length; t++) {
                    if ((r = e[t]) < l && ++f > 2147483647) throw RangeError(s);
                    if (r == l) {
                        for (var d = f, y = 36; ;y += 36) {
                            var w = y <= c ? 1 : y >= c + 26 ? 26 : y - c;
                            if (d < w) break;
                            var b = d - w, R = 36 - w;
                            n.push(o(u(w + b % R))), d = i(b / R);
                        }
                        n.push(o(u(d))), c = h(f, m, g == p), f = 0, ++g;
                    }
                }
                ++f, ++l;
            }
            return n.join("");
        };
        e.exports = function(e) {
            var t, r, s = [], i = e.toLowerCase().replace(a, ".").split(".");
            for (t = 0; t < i.length; t++) r = i[t], s.push(n.test(r) ? "xn--" + l(r) : r);
            return s.join(".");
        };
    },
    1637: function(e, t, r) {
        "use strict";
        r(36);
        var n = r(50), a = r(361), s = r(1577), i = r(135), o = r(152), u = r(146), h = r(411), l = r(136), f = r(95), c = r(143), p = r(153), g = r(362), v = r(239), m = r(101), d = r(151), y = r(372), w = r(1638), b = r(363), R = r(137), L = a("fetch"), U = a("Headers"), k = R("iterator"), S = l.set, A = l.getterFor("URLSearchParams"), q = l.getterFor("URLSearchParamsIterator"), I = /\+/g, P = Array(4), B = function(e) {
            return P[e - 1] || (P[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
        }, x = function(e) {
            try {
                return decodeURIComponent(e);
            } catch (t) {
                return e;
            }
        }, E = function(e) {
            var t = e.replace(I, " "), r = 4;
            try {
                return decodeURIComponent(t);
            } catch (e) {
                for (;r; ) t = t.replace(B(r--), x);
                return t;
            }
        }, j = /[!'()~]|%20/g, C = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        }, F = function(e) {
            return C[e];
        }, O = function(e) {
            return encodeURIComponent(e).replace(j, F);
        }, T = function(e, t) {
            if (t) for (var r, n, a = t.split("&"), s = 0; s < a.length; ) (r = a[s++]).length && (n = r.split("="), 
            e.push({
                key: E(n.shift()),
                value: E(n.join("="))
            }));
        }, D = function(e) {
            this.entries.length = 0, T(this.entries, e);
        }, J = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments");
        }, $ = h(function(e, t) {
            S(this, {
                type: "URLSearchParamsIterator",
                iterator: w(A(e).entries),
                kind: t
            });
        }, "Iterator", function() {
            var e = q(this), t = e.kind, r = e.iterator.next(), n = r.value;
            return r.done || (r.value = "keys" === t ? n.key : "values" === t ? n.value : [ n.key, n.value ]), 
            r;
        }), M = function() {
            f(this, M, "URLSearchParams");
            var e, t, r, n, a, s, i, o, u, h = arguments.length > 0 ? arguments[0] : void 0, l = [];
            if (S(this, {
                type: "URLSearchParams",
                entries: l,
                updateURL: function() {},
                updateSearchParams: D
            }), void 0 !== h) if (m(h)) if ("function" == typeof (e = b(h))) for (r = (t = e.call(h)).next; !(n = r.call(t)).done; ) {
                if ((i = (s = (a = w(v(n.value))).next).call(a)).done || (o = s.call(a)).done || !s.call(a).done) throw TypeError("Expected sequence with length 2");
                l.push({
                    key: i.value + "",
                    value: o.value + ""
                });
            } else for (u in h) c(h, u) && l.push({
                key: u,
                value: h[u] + ""
            }); else T(l, "string" == typeof h ? "?" === h.charAt(0) ? h.slice(1) : h : h + "");
        }, N = M.prototype;
        o(N, {
            append: function(e, t) {
                J(arguments.length, 2);
                var r = A(this);
                r.entries.push({
                    key: e + "",
                    value: t + ""
                }), r.updateURL();
            },
            delete: function(e) {
                J(arguments.length, 1);
                for (var t = A(this), r = t.entries, n = e + "", a = 0; a < r.length; ) r[a].key === n ? r.splice(a, 1) : a++;
                t.updateURL();
            },
            get: function(e) {
                J(arguments.length, 1);
                for (var t = A(this).entries, r = e + "", n = 0; n < t.length; n++) if (t[n].key === r) return t[n].value;
                return null;
            },
            getAll: function(e) {
                J(arguments.length, 1);
                for (var t = A(this).entries, r = e + "", n = [], a = 0; a < t.length; a++) t[a].key === r && n.push(t[a].value);
                return n;
            },
            has: function(e) {
                J(arguments.length, 1);
                for (var t = A(this).entries, r = e + "", n = 0; n < t.length; ) if (t[n++].key === r) return !0;
                return !1;
            },
            set: function(e, t) {
                J(arguments.length, 1);
                for (var r, n = A(this), a = n.entries, s = !1, i = e + "", o = t + "", u = 0; u < a.length; u++) (r = a[u]).key === i && (s ? a.splice(u--, 1) : (s = !0, 
                r.value = o));
                s || a.push({
                    key: i,
                    value: o
                }), n.updateURL();
            },
            sort: function() {
                var e, t, r, n = A(this), a = n.entries, s = a.slice();
                for (a.length = 0, r = 0; r < s.length; r++) {
                    for (e = s[r], t = 0; t < r; t++) if (a[t].key > e.key) {
                        a.splice(t, 0, e);
                        break;
                    }
                    t === r && a.push(e);
                }
                n.updateURL();
            },
            forEach: function(e) {
                for (var t, r = A(this).entries, n = p(e, arguments.length > 1 ? arguments[1] : void 0, 3), a = 0; a < r.length; ) n((t = r[a++]).value, t.key, this);
            },
            keys: function() {
                return new $(this, "keys");
            },
            values: function() {
                return new $(this, "values");
            },
            entries: function() {
                return new $(this, "entries");
            }
        }, {
            enumerable: !0
        }), i(N, k, N.entries), i(N, "toString", function() {
            for (var e, t = A(this).entries, r = [], n = 0; n < t.length; ) e = t[n++], r.push(O(e.key) + "=" + O(e.value));
            return r.join("&");
        }, {
            enumerable: !0
        }), u(M, "URLSearchParams"), n({
            global: !0,
            forced: !s
        }, {
            URLSearchParams: M
        }), s || "function" != typeof L || "function" != typeof U || n({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function(e) {
                var t, r, n, a = [ e ];
                return arguments.length > 1 && (t = arguments[1], m(t) && (r = t.body, "URLSearchParams" === g(r) && ((n = t.headers ? new U(t.headers) : new U()).has("content-type") || n.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), 
                t = d(t, {
                    body: y(0, String(r)),
                    headers: y(0, n)
                }))), a.push(t)), L.apply(this, a);
            }
        }), e.exports = {
            URLSearchParams: M,
            getState: A
        };
    },
    1638: function(e, t, r) {
        var n = r(239), a = r(363);
        e.exports = function(e) {
            var t = a(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return n(t.call(e));
        };
    },
    324: function(e, t, r) {
        "use strict";
        r(37);
        var n, a = r(50), s = r(87), i = r(1577), o = r(134), u = r(407), h = r(135), l = r(95), f = r(143), c = r(408), p = r(409), g = r(410).codeAt, v = r(1636), m = r(146), d = r(1637), y = r(136), w = o.URL, b = d.URLSearchParams, R = d.getState, L = y.set, U = y.getterFor("URL"), k = Math.floor, S = Math.pow, A = /[A-Za-z]/, q = /[\d+\-.A-Za-z]/, I = /\d/, P = /^(0x|0X)/, B = /^[0-7]+$/, x = /^\d+$/, E = /^[\dA-Fa-f]+$/, j = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, C = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, F = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, O = /[\u0009\u000A\u000D]/g, T = function(e, t) {
            var r, n, a;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return "Invalid host";
                if (!(r = J(t.slice(1, -1)))) return "Invalid host";
                e.host = r;
            } else if (G(e)) {
                if (t = v(t), j.test(t)) return "Invalid host";
                if (null === (r = D(t))) return "Invalid host";
                e.host = r;
            } else {
                if (C.test(t)) return "Invalid host";
                for (r = "", n = p(t), a = 0; a < n.length; a++) r += H(n[a], M);
                e.host = r;
            }
        }, D = function(e) {
            var t, r, n, a, s, i, o, u = e.split(".");
            if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4) return e;
            for (r = [], n = 0; n < t; n++) {
                if ("" == (a = u[n])) return e;
                if (s = 10, a.length > 1 && "0" == a.charAt(0) && (s = P.test(a) ? 16 : 8, a = a.slice(8 == s ? 1 : 2)), 
                "" === a) i = 0; else {
                    if (!(10 == s ? x : 8 == s ? B : E).test(a)) return e;
                    i = parseInt(a, s);
                }
                r.push(i);
            }
            for (n = 0; n < t; n++) if (i = r[n], n == t - 1) {
                if (i >= S(256, 5 - t)) return null;
            } else if (i > 255) return null;
            for (o = r.pop(), n = 0; n < r.length; n++) o += r[n] * S(256, 3 - n);
            return o;
        }, J = function(e) {
            var t, r, n, a, s, i, o, u = [ 0, 0, 0, 0, 0, 0, 0, 0 ], h = 0, l = null, f = 0, c = function() {
                return e.charAt(f);
            };
            if (":" == c()) {
                if (":" != e.charAt(1)) return;
                f += 2, l = ++h;
            }
            for (;c(); ) {
                if (8 == h) return;
                if (":" != c()) {
                    for (t = r = 0; r < 4 && E.test(c()); ) t = 16 * t + parseInt(c(), 16), f++, r++;
                    if ("." == c()) {
                        if (0 == r) return;
                        if (f -= r, h > 6) return;
                        for (n = 0; c(); ) {
                            if (a = null, n > 0) {
                                if (!("." == c() && n < 4)) return;
                                f++;
                            }
                            if (!I.test(c())) return;
                            for (;I.test(c()); ) {
                                if (s = parseInt(c(), 10), null === a) a = s; else {
                                    if (0 == a) return;
                                    a = 10 * a + s;
                                }
                                if (a > 255) return;
                                f++;
                            }
                            u[h] = 256 * u[h] + a, 2 != ++n && 4 != n || h++;
                        }
                        if (4 != n) return;
                        break;
                    }
                    if (":" == c()) {
                        if (f++, !c()) return;
                    } else if (c()) return;
                    u[h++] = t;
                } else {
                    if (null !== l) return;
                    f++, l = ++h;
                }
            }
            if (null !== l) for (i = h - l, h = 7; 0 != h && i > 0; ) o = u[h], u[h--] = u[l + i - 1], 
            u[l + --i] = o; else if (8 != h) return;
            return u;
        }, $ = function(e) {
            var t, r, n, a;
            if ("number" == typeof e) {
                for (t = [], r = 0; r < 4; r++) t.unshift(e % 256), e = k(e / 256);
                return t.join(".");
            }
            if ("object" == typeof e) {
                for (t = "", n = function(e) {
                    for (var t = null, r = 1, n = null, a = 0, s = 0; s < 8; s++) 0 !== e[s] ? (a > r && (t = n, 
                    r = a), n = null, a = 0) : (null === n && (n = s), ++a);
                    return a > r && (t = n, r = a), t;
                }(e), r = 0; r < 8; r++) a && 0 === e[r] || (a && (a = !1), n === r ? (t += r ? ":" : "::", 
                a = !0) : (t += e[r].toString(16), r < 7 && (t += ":")));
                return "[" + t + "]";
            }
            return e;
        }, M = {}, N = c({}, M, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }), z = c({}, N, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }), Z = c({}, z, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }), H = function(e, t) {
            var r = g(e, 0);
            return r > 32 && r < 127 && !f(t, e) ? e : encodeURIComponent(e);
        }, X = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        }, G = function(e) {
            return f(X, e.scheme);
        }, K = function(e) {
            return "" != e.username || "" != e.password;
        }, Q = function(e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
        }, V = function(e, t) {
            var r;
            return 2 == e.length && A.test(e.charAt(0)) && (":" == (r = e.charAt(1)) || !t && "|" == r);
        }, W = function(e) {
            var t;
            return e.length > 1 && V(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t);
        }, Y = function(e) {
            var t = e.path, r = t.length;
            !r || "file" == e.scheme && 1 == r && V(t[0], !0) || t.pop();
        }, _ = function(e) {
            return "." === e || "%2e" === e.toLowerCase();
        }, ee = {}, te = {}, re = {}, ne = {}, ae = {}, se = {}, ie = {}, oe = {}, ue = {}, he = {}, le = {}, fe = {}, ce = {}, pe = {}, ge = {}, ve = {}, me = {}, de = {}, ye = {}, we = {}, be = {}, Re = function(e, t, r, a) {
            var s, i, o, u, h, l = r || ee, c = 0, g = "", v = !1, m = !1, d = !1;
            for (r || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, 
            e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(F, "")), 
            t = t.replace(O, ""), s = p(t); c <= s.length; ) {
                switch (i = s[c], l) {
                  case ee:
                    if (!i || !A.test(i)) {
                        if (r) return "Invalid scheme";
                        l = re;
                        continue;
                    }
                    g += i.toLowerCase(), l = te;
                    break;

                  case te:
                    if (i && (q.test(i) || "+" == i || "-" == i || "." == i)) g += i.toLowerCase(); else {
                        if (":" != i) {
                            if (r) return "Invalid scheme";
                            g = "", l = re, c = 0;
                            continue;
                        }
                        if (r && (G(e) != f(X, g) || "file" == g && (K(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                        if (e.scheme = g, r) return void (G(e) && X[e.scheme] == e.port && (e.port = null));
                        g = "", "file" == e.scheme ? l = pe : G(e) && a && a.scheme == e.scheme ? l = ne : G(e) ? l = oe : "/" == s[c + 1] ? (l = ae, 
                        c++) : (e.cannotBeABaseURL = !0, e.path.push(""), l = ye);
                    }
                    break;

                  case re:
                    if (!a || a.cannotBeABaseURL && "#" != i) return "Invalid scheme";
                    if (a.cannotBeABaseURL && "#" == i) {
                        e.scheme = a.scheme, e.path = a.path.slice(), e.query = a.query, e.fragment = "", 
                        e.cannotBeABaseURL = !0, l = be;
                        break;
                    }
                    l = "file" == a.scheme ? pe : se;
                    continue;

                  case ne:
                    if ("/" != i || "/" != s[c + 1]) {
                        l = se;
                        continue;
                    }
                    l = ue, c++;
                    break;

                  case ae:
                    if ("/" == i) {
                        l = he;
                        break;
                    }
                    l = de;
                    continue;

                  case se:
                    if (e.scheme = a.scheme, i == n) e.username = a.username, e.password = a.password, 
                    e.host = a.host, e.port = a.port, e.path = a.path.slice(), e.query = a.query; else if ("/" == i || "\\" == i && G(e)) l = ie; else if ("?" == i) e.username = a.username, 
                    e.password = a.password, e.host = a.host, e.port = a.port, e.path = a.path.slice(), 
                    e.query = "", l = we; else {
                        if ("#" != i) {
                            e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                            e.path = a.path.slice(), e.path.pop(), l = de;
                            continue;
                        }
                        e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                        e.path = a.path.slice(), e.query = a.query, e.fragment = "", l = be;
                    }
                    break;

                  case ie:
                    if (!G(e) || "/" != i && "\\" != i) {
                        if ("/" != i) {
                            e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                            l = de;
                            continue;
                        }
                        l = he;
                    } else l = ue;
                    break;

                  case oe:
                    if (l = ue, "/" != i || "/" != g.charAt(c + 1)) continue;
                    c++;
                    break;

                  case ue:
                    if ("/" != i && "\\" != i) {
                        l = he;
                        continue;
                    }
                    break;

                  case he:
                    if ("@" == i) {
                        v && (g = "%40" + g), v = !0, o = p(g);
                        for (var y = 0; y < o.length; y++) {
                            var w = o[y];
                            if (":" != w || d) {
                                var b = H(w, Z);
                                d ? e.password += b : e.username += b;
                            } else d = !0;
                        }
                        g = "";
                    } else if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && G(e)) {
                        if (v && "" == g) return "Invalid authority";
                        c -= p(g).length + 1, g = "", l = le;
                    } else g += i;
                    break;

                  case le:
                  case fe:
                    if (r && "file" == e.scheme) {
                        l = ve;
                        continue;
                    }
                    if (":" != i || m) {
                        if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && G(e)) {
                            if (G(e) && "" == g) return "Invalid host";
                            if (r && "" == g && (K(e) || null !== e.port)) return;
                            if (u = T(e, g)) return u;
                            if (g = "", l = me, r) return;
                            continue;
                        }
                        "[" == i ? m = !0 : "]" == i && (m = !1), g += i;
                    } else {
                        if ("" == g) return "Invalid host";
                        if (u = T(e, g)) return u;
                        if (g = "", l = ce, r == fe) return;
                    }
                    break;

                  case ce:
                    if (!I.test(i)) {
                        if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && G(e) || r) {
                            if ("" != g) {
                                var R = parseInt(g, 10);
                                if (R > 65535) return "Invalid port";
                                e.port = G(e) && R === X[e.scheme] ? null : R, g = "";
                            }
                            if (r) return;
                            l = me;
                            continue;
                        }
                        return "Invalid port";
                    }
                    g += i;
                    break;

                  case pe:
                    if (e.scheme = "file", "/" == i || "\\" == i) l = ge; else {
                        if (!a || "file" != a.scheme) {
                            l = de;
                            continue;
                        }
                        if (i == n) e.host = a.host, e.path = a.path.slice(), e.query = a.query; else if ("?" == i) e.host = a.host, 
                        e.path = a.path.slice(), e.query = "", l = we; else {
                            if ("#" != i) {
                                W(s.slice(c).join("")) || (e.host = a.host, e.path = a.path.slice(), Y(e)), l = de;
                                continue;
                            }
                            e.host = a.host, e.path = a.path.slice(), e.query = a.query, e.fragment = "", l = be;
                        }
                    }
                    break;

                  case ge:
                    if ("/" == i || "\\" == i) {
                        l = ve;
                        break;
                    }
                    a && "file" == a.scheme && !W(s.slice(c).join("")) && (V(a.path[0], !0) ? e.path.push(a.path[0]) : e.host = a.host), 
                    l = de;
                    continue;

                  case ve:
                    if (i == n || "/" == i || "\\" == i || "?" == i || "#" == i) {
                        if (!r && V(g)) l = de; else if ("" == g) {
                            if (e.host = "", r) return;
                            l = me;
                        } else {
                            if (u = T(e, g)) return u;
                            if ("localhost" == e.host && (e.host = ""), r) return;
                            g = "", l = me;
                        }
                        continue;
                    }
                    g += i;
                    break;

                  case me:
                    if (G(e)) {
                        if (l = de, "/" != i && "\\" != i) continue;
                    } else if (r || "?" != i) if (r || "#" != i) {
                        if (i != n && (l = de, "/" != i)) continue;
                    } else e.fragment = "", l = be; else e.query = "", l = we;
                    break;

                  case de:
                    if (i == n || "/" == i || "\\" == i && G(e) || !r && ("?" == i || "#" == i)) {
                        if (".." === (h = (h = g).toLowerCase()) || "%2e." === h || ".%2e" === h || "%2e%2e" === h ? (Y(e), 
                        "/" == i || "\\" == i && G(e) || e.path.push("")) : _(g) ? "/" == i || "\\" == i && G(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && V(g) && (e.host && (e.host = ""), 
                        g = g.charAt(0) + ":"), e.path.push(g)), g = "", "file" == e.scheme && (i == n || "?" == i || "#" == i)) for (;e.path.length > 1 && "" === e.path[0]; ) e.path.shift();
                        "?" == i ? (e.query = "", l = we) : "#" == i && (e.fragment = "", l = be);
                    } else g += H(i, z);
                    break;

                  case ye:
                    "?" == i ? (e.query = "", l = we) : "#" == i ? (e.fragment = "", l = be) : i != n && (e.path[0] += H(i, M));
                    break;

                  case we:
                    r || "#" != i ? i != n && ("'" == i && G(e) ? e.query += "%27" : e.query += "#" == i ? "%23" : H(i, M)) : (e.fragment = "", 
                    l = be);
                    break;

                  case be:
                    i != n && (e.fragment += H(i, N));
                }
                c++;
            }
        }, Le = function(e) {
            var t, r, n = l(this, Le, "URL"), a = arguments.length > 1 ? arguments[1] : void 0, i = String(e), o = L(n, {
                type: "URL"
            });
            if (void 0 !== a) if (a instanceof Le) t = U(a); else if (r = Re(t = {}, String(a))) throw TypeError(r);
            if (r = Re(o, i, null, t)) throw TypeError(r);
            var u = o.searchParams = new b(), h = R(u);
            h.updateSearchParams(o.query), h.updateURL = function() {
                o.query = String(u) || null;
            }, s || (n.href = ke.call(n), n.origin = Se.call(n), n.protocol = Ae.call(n), n.username = qe.call(n), 
            n.password = Ie.call(n), n.host = Pe.call(n), n.hostname = Be.call(n), n.port = xe.call(n), 
            n.pathname = Ee.call(n), n.search = je.call(n), n.searchParams = Ce.call(n), n.hash = Fe.call(n));
        }, Ue = Le.prototype, ke = function() {
            var e = U(this), t = e.scheme, r = e.username, n = e.password, a = e.host, s = e.port, i = e.path, o = e.query, u = e.fragment, h = t + ":";
            return null !== a ? (h += "//", K(e) && (h += r + (n ? ":" + n : "") + "@"), h += $(a), 
            null !== s && (h += ":" + s)) : "file" == t && (h += "//"), h += e.cannotBeABaseURL ? i[0] : i.length ? "/" + i.join("/") : "", 
            null !== o && (h += "?" + o), null !== u && (h += "#" + u), h;
        }, Se = function() {
            var e = U(this), t = e.scheme, r = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin;
            } catch (e) {
                return "null";
            }
            return "file" != t && G(e) ? t + "://" + $(e.host) + (null !== r ? ":" + r : "") : "null";
        }, Ae = function() {
            return U(this).scheme + ":";
        }, qe = function() {
            return U(this).username;
        }, Ie = function() {
            return U(this).password;
        }, Pe = function() {
            var e = U(this), t = e.host, r = e.port;
            return null === t ? "" : null === r ? $(t) : $(t) + ":" + r;
        }, Be = function() {
            var e = U(this).host;
            return null === e ? "" : $(e);
        }, xe = function() {
            var e = U(this).port;
            return null === e ? "" : String(e);
        }, Ee = function() {
            var e = U(this), t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
        }, je = function() {
            var e = U(this).query;
            return e ? "?" + e : "";
        }, Ce = function() {
            return U(this).searchParams;
        }, Fe = function() {
            var e = U(this).fragment;
            return e ? "#" + e : "";
        }, Oe = function(e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            };
        };
        if (s && u(Ue, {
            href: Oe(ke, function(e) {
                var t = U(this), r = String(e), n = Re(t, r);
                if (n) throw TypeError(n);
                R(t.searchParams).updateSearchParams(t.query);
            }),
            origin: Oe(Se),
            protocol: Oe(Ae, function(e) {
                var t = U(this);
                Re(t, String(e) + ":", ee);
            }),
            username: Oe(qe, function(e) {
                var t = U(this), r = p(String(e));
                if (!Q(t)) {
                    t.username = "";
                    for (var n = 0; n < r.length; n++) t.username += H(r[n], Z);
                }
            }),
            password: Oe(Ie, function(e) {
                var t = U(this), r = p(String(e));
                if (!Q(t)) {
                    t.password = "";
                    for (var n = 0; n < r.length; n++) t.password += H(r[n], Z);
                }
            }),
            host: Oe(Pe, function(e) {
                var t = U(this);
                t.cannotBeABaseURL || Re(t, String(e), le);
            }),
            hostname: Oe(Be, function(e) {
                var t = U(this);
                t.cannotBeABaseURL || Re(t, String(e), fe);
            }),
            port: Oe(xe, function(e) {
                var t = U(this);
                Q(t) || ("" == (e = String(e)) ? t.port = null : Re(t, e, ce));
            }),
            pathname: Oe(Ee, function(e) {
                var t = U(this);
                t.cannotBeABaseURL || (t.path = [], Re(t, e + "", me));
            }),
            search: Oe(je, function(e) {
                var t = U(this);
                "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), 
                t.query = "", Re(t, e, we)), R(t.searchParams).updateSearchParams(t.query);
            }),
            searchParams: Oe(Ce),
            hash: Oe(Fe, function(e) {
                var t = U(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", 
                Re(t, e, be)) : t.fragment = null;
            })
        }), h(Ue, "toJSON", function() {
            return ke.call(this);
        }, {
            enumerable: !0
        }), h(Ue, "toString", function() {
            return ke.call(this);
        }, {
            enumerable: !0
        }), w) {
            var Te = w.createObjectURL, De = w.revokeObjectURL;
            Te && h(Le, "createObjectURL", function(e) {
                return Te.apply(w, arguments);
            }), De && h(Le, "revokeObjectURL", function(e) {
                return De.apply(w, arguments);
            });
        }
        m(Le, "URL"), a({
            global: !0,
            forced: !i,
            sham: !s
        }, {
            URL: Le
        });
    }
} ]);
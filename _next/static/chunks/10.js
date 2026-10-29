(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 753059, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(437902),
        n = e.i(271645),
        i = e.i(647163),
        s = e.i(405641);

    function o({ number: e, rarity: o, size: a = "md", revealedDigits: l, showRarityStyle: c = !0, isAboutToReveal: u = !1, showFinale: d = !1, pulseKey: h = 0, collapseLeadingBlanks: p = !1, preserveSlotLayout: f = !1, className: m }) {
        let g = e.toString(),
            y = g.length,
            x = Math.max(6, y),
            b = (0,
                n.useRef)(null),
            _ = l ? ? 0,
            v = (0,
                n.useRef)(_),
            S = (0,
                n.useRef)(!1),
            w = (0,
                n.useRef)(_),
            j = (0,
                n.useRef)(!0),
            [R, N] = (0,
                n.useState)(!1),
            C = (0,
                n.useRef)(h),
            E = Math.max(0, x - y),
            [T, k] = (0,
                n.useState)(() => Array(x).fill("").map((e, t) => {
                let r = t < E;
                return t < _ ? r ? "" : g[t - E] : "?"
            })),
            [A, F] = (0,
                n.useState)(new Set),
            I = (0,
                n.useRef)(null),
            O = c ? s.RARITY_ARTIFACT_STYLES[o] : s.NEUTRAL_ARTIFACT_STYLE,
            z = f ? x : p ? y : x,
            M = "lg" === a,
            L = (0,
                n.useCallback)(() => Math.floor(10 * Math.random()).toString(), []);
        (0,
            n.useEffect)(() => {
            w.current = l ? ? 0
        }, [l]),
        (0,
            n.useEffect)(() => {
            u && !S.current && (I.current && clearInterval(I.current),
                    I.current = setInterval(() => {
                        k(e => {
                            let t = w.current;
                            return e.map((e, r) => r >= t ? L() : e)
                        })
                    }, 100)), !u && S.current && I.current && (clearInterval(I.current),
                    I.current = null),
                S.current = u
        }, [u, L]),
        (0,
            n.useEffect)(() => {
            let e = l ? ? 0,
                t = v.current,
                r = 0 === t && e === x;
            if (j.current || r) {
                j.current = !1,
                    v.current = e,
                    e > 0 && k([...Array(E).fill(""), ...g.split("")]);
                return
            }
            if (e > t && e > 0) {
                if (k(r => {
                        let n = [...r];
                        for (let r = t; r < e; r++) {
                            let e = r < E;
                            n[r] = e ? "" : g[r - E]
                        }
                        return n
                    }),
                    e === t + 1) {
                    let t = e - 1;
                    F(e => new Set(e).add(t)),
                        setTimeout(() => {
                            F(e => {
                                let r = new Set(e);
                                return r.delete(t),
                                    r
                            })
                        }, 400)
                } else
                    F(new Set);
                v.current = e
            } else
                0 === e && t > 0 && (I.current && (clearInterval(I.current),
                        I.current = null),
                    F(new Set),
                    k(Array(x).fill("?")),
                    v.current = 0)
        }, [l, g, E]),
        (0,
            n.useEffect)(() => () => {
            I.current && clearInterval(I.current)
        }, []),
        (0,
            n.useEffect)(() => {
            if (h !== C.current && h > 0) {
                N(!0);
                let e = setTimeout(() => {
                    N(!1)
                }, 700);
                return C.current = h,
                    () => clearTimeout(e)
            }
            C.current = h
        }, [h]),
        (0,
            n.useEffect)(() => {
            let e = l ? ? 0;
            k(Array(x).fill("").map((t, r) => {
                    let n = r < E;
                    return r < e ? n ? "" : g[r - E] : "?"
                })),
                v.current = e
        }, [e, g, l, E]);
        let $ = l ? ? 0,
            P = T.map((e, t) => {
                let r = t < E,
                    n = t < $,
                    i = u && !n;
                return {
                    char: e,
                    isLeadingBlank: r,
                    isRevealed: n,
                    isSpinning: i,
                    isSettled: A.has(t)
                }
            }),
            B = R || d,
            D = !u && !B && $ > 0,
            U = B && c;
        return (0,
            t.jsxs)("div", {
            ref: b,
            style: U ? {
                boxShadow: s.RARITY_FINALE_GLOW[o]
            } : void 0,
            className: "jsx-127bce407691d237 " + ((0,
                i.cn)("relative overflow-hidden inline-flex items-center justify-center", M ? (0,
                i.cn)("rounded-xl", f ? "px-1 py-4 sm:px-5" : "px-8 py-5") : "rounded-lg px-5 py-3", M ? "border-3" : "border-2", O.border, "bg-gradient-to-br", O.background, O.glow, O.shadow, O.innerGlow, "transition-all duration-500", u && "animate-attention-glow", B && "animate-finale-pulse", D && "animate-breathing", m) || ""),
            children: [(0,
                t.jsx)("div", {
                style: {
                    background: `linear-gradient(
            135deg,
            rgba(255,255,255,0.4) 0%,
            rgba(255,255,255,0.1) 40%,
            transparent 60%
          )`
                },
                className: "jsx-127bce407691d237 " + ((0,
                    i.cn)("absolute -inset-px overflow-hidden pointer-events-none", M ? "rounded-xl" : "rounded-lg", "dark:opacity-40") || "")
            }), O.shimmer && (0,
                t.jsx)("div", {
                className: "jsx-127bce407691d237 " + ((0,
                    i.cn)("absolute -inset-px overflow-hidden pointer-events-none", M ? "rounded-xl" : "rounded-lg", "dark:opacity-10") || ""),
                children: (0,
                    t.jsx)("div", {
                    style: {
                        background: `linear-gradient(
                105deg,
                transparent 0%,
                transparent 40%,
                rgba(255,255,255,0.35) 50%,
                transparent 60%,
                transparent 100%
              )`,
                        backgroundSize: "200% 100%",
                        animation: "gem-shimmer 4s ease-in-out infinite"
                    },
                    className: "jsx-127bce407691d237 absolute inset-0"
                })
            }), (0,
                t.jsx)("div", {
                className: "jsx-127bce407691d237 " + ((0,
                    i.cn)("relative z-10 font-roll font-bold tabular-nums flex items-center", "transition-all duration-500", M ? (0,
                    i.cn)(z <= 3 && "text-7xl", 4 === z && "text-6xl", 5 === z && "text-5xl", z >= 6 && "text-4xl") : (0,
                    i.cn)(z <= 3 && "text-4xl", 4 === z && "text-3xl", 5 === z && "text-2xl", z >= 6 && "text-xl"), "[text-shadow:0_1px_2px_rgba(255,255,255,0.5)] dark:[text-shadow:0_1px_2px_rgba(255,255,255,0.2)]") || ""),
                children: P.map((e, r) => (0,
                    t.jsx)("span", {
                    className: "jsx-127bce407691d237 " + ((0,
                        i.cn)("inline-block transition-all duration-500", e.isSpinning && "animate-digit-spin text-gray-200 dark:text-zinc-500", e.isLeadingBlank && e.isRevealed && !p && "opacity-0", e.isLeadingBlank && p && "w-0 opacity-0 overflow-hidden", !e.isLeadingBlank && e.isRevealed && O.textColor, e.isSettled && "animate-digit-settle") || ""),
                    children: e.isLeadingBlank && e.isRevealed ? " " : e.char
                }, r))
            }), (0,
                t.jsx)(r.default, {
                id: "127bce407691d237",
                children: "@keyframes gem-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes digit-spin{0%,to{opacity:1}}@keyframes digit-settle{0%{text-shadow:0 0 8px;transform:scale(1.5)}to{text-shadow:0 1px 2px #ffffff80;transform:scale(1)}}@keyframes finale-pulse{0%{filter:brightness();transform:scale(1)}15%{filter:brightness(1.15);transform:scale(1.25)}40%{filter:brightness(1.05);transform:scale(.98)}60%{filter:brightness();transform:scale(1.03)}to{filter:brightness();transform:scale(1)}}@keyframes breathing{0%,to{transform:scale(1)}50%{transform:scale(1.015)}}.animate-digit-spin{animation:.2s ease-in-out infinite digit-spin}.animate-digit-settle{animation:.5s ease-out forwards digit-settle}.animate-attention-glow{box-shadow:0 0 12px 4px #94a3b84d,0 0 24px 8px #94a3b826}.animate-finale-pulse{animation:.7s ease-out finale-pulse}.animate-breathing{animation:3s ease-in-out infinite breathing}"
            })]
        })
    }
    e.s(["ShinyNumberArtifact", () => o])
}, 306049, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(647163);

    function n({ children: e, className: n, onDark: i, prefix: s = "" }) {
        return (0,
            t.jsxs)("span", {
            className: (0,
                r.cn)("type-data", i && "text-white", n),
            children: [s, e.toLocaleString(), " EP"]
        })
    }
    e.s(["EPScore", () => n])
}, 516015, (e, t, r) => {}, 898547, (e, t, r) => {
    var n = e.i(247167);
    e.r(516015);
    var i = e.r(271645),
        s = i && "object" == typeof i && "default" in i ? i : {
            default: i
        },
        o = void 0 !== n.default && n.default.env && !0,
        a = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        l = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    r = t.name,
                    n = void 0 === r ? "stylesheet" : r,
                    i = t.optimizeForSpeed,
                    s = void 0 === i ? o : i;
                c(a(n), "`name` must be a string"),
                    this._name = n,
                    this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}",
                    c("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"),
                    this._optimizeForSpeed = s,
                    this._serverSheet = void 0,
                    this._tags = [],
                    this._injected = !1,
                    this._rulesCount = 0;
                var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = l ? l.getAttribute("content") : null
            }
            var t, r = e.prototype;
            return r.setOptimizeForSpeed = function(e) {
                    c("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"),
                        c(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"),
                        this.flush(),
                        this._optimizeForSpeed = e,
                        this.inject()
                },
                r.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                },
                r.inject = function() {
                    var e = this;
                    if (c(!this._injected, "sheet already injected"),
                        this._injected = !0,
                        "undefined" != typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name),
                            this._optimizeForSpeed = "insertRule" in this.getSheet(),
                            this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),
                                this.flush(),
                                this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, r) {
                            return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                    cssText: t
                                } : e._serverSheet.cssRules.push({
                                    cssText: t
                                }),
                                r
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                },
                r.getSheetForTag = function(e) {
                    if (e.sheet)
                        return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e)
                            return document.styleSheets[t]
                },
                r.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                },
                r.insertRule = function(e, t) {
                    if (c(a(e), "`insertRule` accepts only strings"),
                        "undefined" == typeof window)
                        return "number" != typeof t && (t = this._serverSheet.cssRules.length),
                            this._serverSheet.insertRule(e, t),
                            this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var r = this.getSheet();
                        "number" != typeof t && (t = r.cssRules.length);
                        try {
                            r.insertRule(e, t)
                        } catch (t) {
                            return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var n = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, n))
                    }
                    return this._rulesCount++
                },
                r.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "undefined" == typeof window) {
                        var r = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e])
                            return e;
                        r.deleteRule(e);
                        try {
                            r.insertRule(t, e)
                        } catch (n) {
                            o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"),
                                r.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var n = this._tags[e];
                        c(n, "old rule at index `" + e + "` not found"),
                            n.textContent = t
                    }
                    return e
                },
                r.deleteRule = function(e) {
                    if ("undefined" == typeof window)
                        return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed)
                        this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        c(t, "rule at index `" + e + "` not found"),
                            t.parentNode.removeChild(t),
                            this._tags[e] = null
                    }
                },
                r.flush = function() {
                    this._injected = !1,
                        this._rulesCount = 0,
                        "undefined" != typeof window ? (this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }),
                            this._tags = []) : this._serverSheet.cssRules = []
                },
                r.cssRules = function() {
                    var e = this;
                    return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                        return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                                return t.cssText === e._deletedRulePlaceholder ? null : t
                            })) : t.push(null),
                            t
                    }, [])
                },
                r.makeStyleTag = function(e, t, r) {
                    t && c(a(t), "makeStyleTag accepts only strings as second parameter");
                    var n = document.createElement("style");
                    this._nonce && n.setAttribute("nonce", this._nonce),
                        n.type = "text/css",
                        n.setAttribute("data-" + e, ""),
                        t && n.appendChild(document.createTextNode(t));
                    var i = document.head || document.getElementsByTagName("head")[0];
                    return r ? i.insertBefore(n, r) : i.appendChild(n),
                        n
                },
                t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }(e.prototype, t),
                e
        }();

    function c(e, t) {
        if (!e)
            throw Error("StyleSheet: " + t + ".")
    }
    var u = function(e) {
            for (var t = 5381, r = e.length; r;)
                t = 33 * t ^ e.charCodeAt(--r);
            return t >>> 0
        },
        d = {};

    function h(e, t) {
        if (!t)
            return "jsx-" + e;
        var r = String(t),
            n = e + r;
        return d[n] || (d[n] = "jsx-" + u(e + "-" + r)),
            d[n]
    }

    function p(e, t) {
        "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var r = e + t;
        return d[r] || (d[r] = t.replace(/__jsx-style-dynamic-selector/g, e)),
            d[r]
    }
    var f = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    r = t.styleSheet,
                    n = void 0 === r ? null : r,
                    i = t.optimizeForSpeed,
                    s = void 0 !== i && i;
                this._sheet = n || new l({
                        name: "styled-jsx",
                        optimizeForSpeed: s
                    }),
                    this._sheet.inject(),
                    n && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s),
                        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
                    this._fromServer = void 0,
                    this._indices = {},
                    this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                    var t = this;
                    void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children),
                            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
                        "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(),
                            this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                                return e[t] = 0,
                                    e
                            }, {}));
                    var r = this.getIdAndRules(e),
                        n = r.styleId,
                        i = r.rules;
                    if (n in this._instancesCounts) {
                        this._instancesCounts[n] += 1;
                        return
                    }
                    var s = i.map(function(e) {
                        return t._sheet.insertRule(e)
                    }).filter(function(e) {
                        return -1 !== e
                    });
                    this._indices[n] = s,
                        this._instancesCounts[n] = 1
                },
                t.remove = function(e) {
                    var t = this,
                        r = this.getIdAndRules(e).styleId;
                    if (function(e, t) {
                            if (!e)
                                throw Error("StyleSheetRegistry: " + t + ".")
                        }(r in this._instancesCounts, "styleId: `" + r + "` not found"),
                        this._instancesCounts[r] -= 1,
                        this._instancesCounts[r] < 1) {
                        var n = this._fromServer && this._fromServer[r];
                        n ? (n.parentNode.removeChild(n),
                                delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                                    return t._sheet.deleteRule(e)
                                }),
                                delete this._indices[r]),
                            delete this._instancesCounts[r]
                    }
                },
                t.update = function(e, t) {
                    this.add(t),
                        this.remove(e)
                },
                t.flush = function() {
                    this._sheet.flush(),
                        this._sheet.inject(),
                        this._fromServer = void 0,
                        this._indices = {},
                        this._instancesCounts = {}
                },
                t.cssRules = function() {
                    var e = this,
                        t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                            return [t, e._fromServer[t]]
                        }) : [],
                        r = this._sheet.cssRules();
                    return t.concat(Object.keys(this._indices).map(function(t) {
                        return [t, e._indices[t].map(function(e) {
                            return r[e].cssText
                        }).join(e._optimizeForSpeed ? "" : "\n")]
                    }).filter(function(e) {
                        return !!e[1]
                    }))
                },
                t.styles = function(e) {
                    var t, r;
                    return t = this.cssRules(),
                        void 0 === (r = e) && (r = {}),
                        t.map(function(e) {
                            var t = e[0],
                                n = e[1];
                            return s.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: r.nonce ? r.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            })
                        })
                },
                t.getIdAndRules = function(e) {
                    var t = e.children,
                        r = e.dynamic,
                        n = e.id;
                    if (r) {
                        var i = h(n, r);
                        return {
                            styleId: i,
                            rules: Array.isArray(t) ? t.map(function(e) {
                                return p(i, e)
                            }) : [p(i, t)]
                        }
                    }
                    return {
                        styleId: h(n),
                        rules: Array.isArray(t) ? t : [t]
                    }
                },
                t.selectFromServer = function() {
                    return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                        return e[t.id.slice(2)] = t,
                            e
                    }, {})
                },
                e
        }(),
        m = i.createContext(null);

    function g() {
        return new f
    }

    function y() {
        return i.useContext(m)
    }
    m.displayName = "StyleSheetContext";
    var x = s.default.useInsertionEffect || s.default.useLayoutEffect,
        b = "undefined" != typeof window ? g() : void 0;

    function _(e) {
        var t = b || y();
        return t && ("undefined" == typeof window ? t.add(e) : x(function() {
                return t.add(e),
                    function() {
                        t.remove(e)
                    }
            }, [e.id, String(e.dynamic)])),
            null
    }
    _.dynamic = function(e) {
            return e.map(function(e) {
                return h(e[0], e[1])
            }).join(" ")
        },
        r.StyleRegistry = function(e) {
            var t = e.registry,
                r = e.children,
                n = i.useContext(m),
                o = i.useState(function() {
                    return n || t || g()
                })[0];
            return s.default.createElement(m.Provider, {
                value: o
            }, r)
        },
        r.createStyleRegistry = g,
        r.style = _,
        r.useStyleRegistry = y
}, 437902, (e, t, r) => {
    t.exports = e.r(898547).style
}, 523793, 356490, e => {
    "use strict";
    let t;
    var r = e.i(843476),
        n = e.i(271645),
        i = e.i(4080),
        s = e.i(647163),
        o = e.i(405641),
        a = e.i(847558),
        l = e.i(989970);
    let c = new Set(["MOUNTAIN", "VALLEY"]),
        u = Object.fromEntries(Object.entries(o.RARITY_PALETTE).map(([e, t]) => [e, t.highlight])),
        d = [{
            bg: "#93C5FD",
            border: "#2563EB"
        }, {
            bg: "#86EFAC",
            border: "#059669"
        }, {
            bg: "#FCD34D",
            border: "#D97706"
        }, {
            bg: "#F9A8D4",
            border: "#DB2777"
        }];

    function h(e) {
        if ("undefined" == typeof document)
            return e;
        void 0 === t && (t = document.createElement("canvas").getContext("2d", {
            willReadFrequently: !0
        }));
        let r = t;
        if (!r)
            return e;
        r.clearRect(0, 0, 1, 1),
            r.fillStyle = "#000",
            r.fillStyle = e,
            r.fillRect(0, 0, 1, 1);
        let [n, i, s, o] = r.getImageData(0, 0, 1, 1).data;
        return 255 === o ? `rgb(${n}, ${i}, ${s})` : `rgba(${n}, ${i}, ${s}, ${(o / 255).toFixed(3)})`
    }

    function p() {
        let e = getComputedStyle(document.documentElement);
        return {
            backgroundColor: h(e.getPropertyValue("--surface-raised").trim()),
            color: h(e.getPropertyValue("--prose-3").trim()),
            borderColor: h(e.getPropertyValue("--outline").trim())
        }
    }
    let f = new Set(["ALTERNATOR"]);

    function m(e, t, r) {
        return r && f.has(r) ? function(e, t) {
            let r = [],
                n = [];
            for (let i of t)
                parseInt(e[i], 10) % 2 == 0 ? r.push(i) : n.push(i);
            return (t.length > 0 && parseInt(e[t[0]], 10) % 2 == 0 ? [r, n] : [n, r]).filter(e => e.length > 0)
        }(e, t) : function(e, t) {
            let r = new Map;
            for (let n of t) {
                let t = e[n];
                r.has(t) || r.set(t, []),
                    r.get(t).push(n)
            }
            let n = [];
            for (let r of t) {
                let t = e[r];
                n.includes(t) || n.push(t)
            }
            return n.map(e => r.get(e))
        }(e, t)
    }

    function g({ number: e, contributors: t, animate: i = !0, rarity: o = "common", multiColorGroups: a = !1, animationDelay: h = 0, onAnimationComplete: f, hideNumber: g = !1, badgeId: y, className: x }) {
        let b = !!y && c.has(y),
            _ = (0,
                n.useRef)([]),
            v = (0,
                n.useRef)(null),
            [S, w] = (0,
                n.useState)(!1),
            j = (0,
                n.useRef)(null),
            R = (0,
                n.useRef)(null),
            N = (0,
                n.useRef)(null),
            C = e.toString(),
            E = C.split(""),
            { primary: T, secondary: k, border: A } = u[o];
        (0,
            n.useEffect)(() => {
            _.current = _.current.slice(0, E.length)
        }, [E.length]);
        let F = (0,
                n.useCallback)(() => {
                let e = _.current.filter(Boolean);
                if (0 === e.length || !t)
                    return {
                        elements: [],
                        colorMap: new Map,
                        borderColorMap: new Map
                    };
                let r = [],
                    n = new Map,
                    i = new Map;
                if ("groups" === t.type)
                    t.groups.forEach((t, s) => {
                        let o = d[s % d.length];
                        t.forEach(t => {
                            t >= 0 && t < e.length && (r.push(e[t]),
                                n.set(e[t], o.bg),
                                i.set(e[t], o.border))
                        })
                    });
                else if ("indices" === t.type) {
                    let i = t.indices.filter(t => t >= 0 && t < e.length);
                    if (r = i.map(t => e[t]),
                        a && i.length > 0) {
                        let t = m(C, i, y),
                            r = [T, k];
                        t.forEach((t, i) => {
                            let s = r[i % r.length];
                            t.forEach(t => {
                                n.set(e[t], s)
                            })
                        })
                    }
                } else if ("range" === t.type)
                    for (let n = t.start; n < t.end && n < e.length; n++)
                        r.push(e[n]);
                else
                    "whole" === t.type && (r = e);
                return {
                    elements: r,
                    colorMap: n,
                    borderColorMap: i
                }
            }, [t, T, k, a, C, y]),
            I = (0,
                n.useCallback)(() => {
                let { elements: e, colorMap: t, borderColorMap: r } = F();
                0 !== e.length && (R.current && R.current.kill(),
                    R.current = l.default.timeline({
                        onComplete: () => {
                            j.current = setTimeout(() => N.current ? .(), 4e3)
                        }
                    }),
                    R.current.to(e, {
                        ...p(),
                        duration: .4,
                        ease: "power2.out",
                        stagger: .08
                    }),
                    R.current.to({}, {
                        duration: .1
                    }),
                    t.size > 0 ? e.forEach((e, n) => {
                        let i = t.get(e) || T,
                            s = r.get(e) || A;
                        R.current.to(e, {
                            backgroundColor: i,
                            color: "#000",
                            borderColor: s,
                            duration: .4,
                            ease: "power2.out"
                        }, `>-${.32 * (0 !== n)}`)
                    }) : R.current.to(e, {
                        backgroundColor: T,
                        color: "#000",
                        borderColor: A,
                        duration: .4,
                        ease: "power2.out",
                        stagger: .08
                    }))
            }, [F, T, A]);
        (0,
            n.useEffect)(() => {
            N.current = I
        }, [I]);
        let O = (0,
            n.useCallback)(() => {
            let e = _.current.filter(Boolean);
            if (0 === e.length || !t)
                return;
            l.default.set(e, {
                ...p()
            });
            let { elements: r, colorMap: n } = F();
            if (0 === r.length)
                return;
            let i = l.default.timeline({
                onComplete: () => {
                    w(!0),
                        f ? .(),
                        j.current = setTimeout(I, 4e3)
                }
            });
            if ("groups" === t.type) {
                let r = 0;
                t.groups.forEach((t, n) => {
                    let s = d[n % d.length];
                    t.forEach((t, n) => {
                            t >= 0 && t < e.length && i.to(e[t], {
                                backgroundColor: s.bg,
                                color: "#000",
                                borderColor: s.border,
                                duration: .2,
                                ease: "power2.out"
                            }, r + .08 * n)
                        }),
                        r += .08 * t.length + .1
                })
            } else if (n.size > 0) {
                let n = "indices" === t.type ? m(C, t.indices.filter(t => t >= 0 && t < e.length), y) : [
                        [...Array(r.length).keys()]
                    ],
                    s = [T, k],
                    o = 0;
                n.forEach((n, a) => {
                    let l = s[a % s.length];
                    n.forEach((n, s) => {
                            let a = "indices" === t.type ? e[n] : r[n];
                            i.to(a, {
                                backgroundColor: l,
                                color: "#000",
                                borderColor: A,
                                duration: .2,
                                ease: "power2.out"
                            }, o + .08 * s)
                        }),
                        o += .08 * n.length + .1
                })
            } else if (b && t) {
                let r = function(e, t, r) {
                        if (!e)
                            return 0;
                        if ("range" === e.type)
                            return Math.floor((e.start + e.end - 1) / 2);
                        if ("groups" === e.type) {
                            let t = e.groups.flat();
                            if (t.length > 0) {
                                let e = [...t].sort((e, t) => e - t);
                                return e[Math.floor(e.length / 2)]
                            }
                        }
                        if ("indices" === e.type && e.indices.length > 0) {
                            let t = [...e.indices].sort((e, t) => e - t);
                            return t[Math.floor(t.length / 2)]
                        }
                        return "whole" === e.type ? Math.floor(t.length / 2) : 0
                    }(t, C, 0),
                    n = [];
                if ("indices" === t.type)
                    n.push(...t.indices.filter(t => t >= 0 && t < e.length));
                else if ("range" === t.type)
                    for (let r = t.start; r < t.end && r < e.length; r++)
                        n.push(r);
                else if ("whole" === t.type)
                    for (let t = 0; t < e.length; t++)
                        n.push(t);
                n.forEach(t => {
                    let n = e[t],
                        s = .08 * Math.abs(t - r);
                    i.to(n, {
                        backgroundColor: T,
                        color: "#000",
                        borderColor: A,
                        duration: .2,
                        ease: "power2.out"
                    }, s)
                })
            } else
                i.to(r, {
                    backgroundColor: T,
                    color: "#000",
                    borderColor: A,
                    duration: .2,
                    ease: "power2.out",
                    stagger: .08
                })
        }, [t, F, T, k, A, C, f, I, b, y]);
        (0,
            n.useEffect)(() => {
            if (!i || S || !t)
                return;
            let e = setTimeout(O, h + 100);
            return () => clearTimeout(e)
        }, [i, S, t, h, O]),
        (0,
            n.useEffect)(() => {
            w(!1),
                j.current && clearTimeout(j.current),
                R.current && R.current.kill()
        }, [e, t]),
        (0,
            n.useEffect)(() => () => {
            j.current && clearTimeout(j.current),
                R.current && R.current.kill()
        }, []);
        let { indices: z, colorByIndex: M, borderByIndex: L } = (() => {
            let e = new Set,
                r = new Map,
                n = new Map;
            if (!t)
                return {
                    indices: e,
                    colorByIndex: r,
                    borderByIndex: n
                };
            if ("groups" === t.type)
                t.groups.forEach((t, i) => {
                    let s = d[i % d.length];
                    t.forEach(t => {
                        e.add(t),
                            r.set(t, s.bg),
                            n.set(t, s.border)
                    })
                });
            else if ("indices" === t.type) {
                if (t.indices.forEach(t => e.add(t)),
                    a) {
                    let e = m(C, t.indices, y),
                        n = [T, k];
                    e.forEach((e, t) => {
                        let i = n[t % n.length];
                        e.forEach(e => r.set(e, i))
                    })
                }
            } else if ("range" === t.type)
                for (let r = t.start; r < t.end; r++)
                    e.add(r);
            else
                "whole" === t.type && E.forEach((t, r) => e.add(r));
            return {
                indices: e,
                colorByIndex: r,
                borderByIndex: n
            }
        })();
        return (0,
            r.jsx)("div", {
            ref: v,
            className: (0,
                s.cn)("inline-flex items-center gap-1 font-mono", x),
            children: E.map((t, n) => {
                let o = z.has(n),
                    a = M.get(n) || T;
                return (0,
                    r.jsx)("span", {
                    ref: e => {
                        _.current[n] = e
                    },
                    className: (0,
                        s.cn)("inline-flex items-center justify-center", "w-5 h-6 rounded-sm text-xs font-bold", "transition-colors duration-200", o && "border", !o && "bg-surface-dim dark:bg-surface-raised text-prose-3 dark:text-prose-3"),
                    style: i || !o || g ? void 0 : {
                        backgroundColor: a,
                        color: "#000",
                        borderColor: L.get(n) || A
                    },
                    children: g ? "?" : t
                }, `${e}-${n}`)
            })
        })
    }
    e.s(["GROUP_HIGHLIGHT_COLORS", 0, d, "NumberMiniDiagram", () => g], 356490);
    let y = {
            trash: "",
            common: "",
            uncommon: "shadow-[0_0_10px_rgba(16,185,129,0.25)]",
            rare: "shadow-[0_0_12px_rgba(59,130,246,0.3)]",
            epic: "shadow-[0_0_15px_rgba(168,85,247,0.35)]",
            anomaly: "shadow-[0_0_18px_rgba(249,115,22,0.4)]",
            mythic: "shadow-[0_0_20px_rgba(236,72,153,0.45)]"
        },
        x = {
            ELEVEN: 11,
            DOZEN: 12,
            LUCKY_SEVEN_DIV: 7,
            HARSHAD: "digit_sum"
        },
        b = "PRONIC",
        _ = "EQUATION",
        v = new Set(["TWO_PAIR", "THREE_PAIR", "CONTIGUOUS_TWO_PAIR", "CONTIGUOUS_THREE_PAIR", "FULL_HOUSE", "TRINITY", "ALTERNATOR"]);

    function S({ number: e, divisor: t, hideNumber: n = !1, className: i }) {
        let o = Math.floor(e / t),
            a = "?".repeat(e.toString().length),
            l = "?".repeat(o.toString().length);
        return (0,
            r.jsxs)("div", {
            className: (0,
                s.cn)("type-data type-meta text-prose-2", i),
            children: [(0,
                r.jsx)("span", {
                className: "text-prose",
                children: n ? a : e.toLocaleString()
            }), (0,
                r.jsx)("span", {
                className: "text-prose-3",
                children: " = "
            }), (0,
                r.jsx)("span", {
                className: "text-emerald-600 dark:text-emerald-400",
                children: n ? "?" : t
            }), (0,
                r.jsx)("span", {
                className: "text-prose-3",
                children: " × "
            }), (0,
                r.jsx)("span", {
                className: "text-info",
                children: n ? l : o.toLocaleString()
            })]
        })
    }

    function w({ number: e, hideNumber: t = !1, className: n }) {
        let i = Math.floor((-1 + Math.sqrt(1 + 4 * e)) / 2),
            o = "?".repeat(e.toString().length),
            a = "?".repeat(i.toString().length),
            l = "?".repeat((i + 1).toString().length);
        return (0,
            r.jsxs)("div", {
            className: (0,
                s.cn)("type-data type-meta text-prose-2", n),
            children: [(0,
                r.jsx)("span", {
                className: "text-prose",
                children: t ? o : e.toLocaleString()
            }), (0,
                r.jsx)("span", {
                className: "text-prose-3",
                children: " = "
            }), (0,
                r.jsx)("span", {
                className: "text-emerald-600 dark:text-emerald-400",
                children: t ? a : i
            }), (0,
                r.jsx)("span", {
                className: "text-prose-3",
                children: " × "
            }), (0,
                r.jsx)("span", {
                className: "text-info",
                children: t ? l : i + 1
            })]
        })
    }

    function j({ value: e, prefix: t = "+", size: n = "sm", className: i }) {
        return (0,
            r.jsxs)("span", {
            className: (0,
                s.cn)("type-data inline-flex items-center font-semibold whitespace-nowrap flex-shrink-0", "bg-ep-surface text-ep border border-ep-outline rounded-full", "sm" === n ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-base", i),
            children: [t, e.toLocaleString(), " EP"]
        })
    }
    let R = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷"
    };

    function N({ number: e, hideNumber: t = !1, className: n }) {
        let i = (0,
            a.findEquation)(e.toString());
        if (!i)
            return null;
        let [o, l, c] = i.numbers, u = e => "?".repeat(e.toString().length);
        return (0,
            r.jsxs)("div", {
            className: (0,
                s.cn)("type-data type-meta text-prose-2 mt-2", n),
            children: [(0,
                r.jsx)("span", {
                style: {
                    color: d[0].border
                },
                children: t ? u(o) : o.toLocaleString()
            }), (0,
                r.jsxs)("span", {
                className: "text-prose-3",
                children: [" ", R[i.op], " "]
            }), (0,
                r.jsx)("span", {
                style: {
                    color: d[1].border
                },
                children: t ? u(l) : l.toLocaleString()
            }), (0,
                r.jsx)("span", {
                className: "text-prose-3",
                children: " = "
            }), (0,
                r.jsx)("span", {
                style: {
                    color: d[2].border
                },
                children: t ? u(c) : c.toLocaleString()
            })]
        })
    }

    function C(e, t) {
        return void 0 !== x[e] || e === b || null !== t
    }

    function E({ badgeId: e, number: t, contributors: n, rarity: i, animate: o = !0, animationDelay: a = 0, hideNumber: l = !1, compact: c = !1, className: u }) {
        let d = x[e],
            h = "digit_sum" === d ? t.toString().split("").reduce((e, t) => e + parseInt(t, 10), 0) : d,
            p = e === b,
            f = c && e === _;
        return (0,
            r.jsx)("div", {
            className: (0,
                s.cn)(c && "flex flex-col items-center", u),
            children: void 0 !== h ? (0,
                r.jsx)(S, {
                number: t,
                divisor: h,
                hideNumber: l
            }) : p ? (0,
                r.jsx)(w, {
                number: t,
                hideNumber: l
            }) : f ? (0,
                r.jsx)(N, {
                number: t,
                hideNumber: l,
                className: "mt-0"
            }) : (0,
                r.jsxs)(r.Fragment, {
                children: [(0,
                    r.jsx)(g, {
                    number: t,
                    contributors: n,
                    animate: o,
                    rarity: i,
                    multiColorGroups: v.has(e),
                    animationDelay: a,
                    hideNumber: l,
                    badgeId: e,
                    className: (0,
                        s.cn)(c && "gap-0.5 [&>span]:h-5 [&>span]:w-4 [&>span]:text-[10px]")
                }), e === _ && (0,
                    r.jsx)(N, {
                    number: t,
                    hideNumber: l,
                    className: c ? "mt-1" : void 0
                })]
            })
        })
    }

    function T({ badge: e, number: t, contributors: a, index: c = 0, animateIn: u = !1, hideNumber: d = !1, isSubsidiary: h = !1, username: p, className: f }) {
        let m = (0,
                n.useRef)(null),
            g = (0,
                o.getRarityTailwind)(e.score),
            x = (0,
                o.getBadgeRarityTier)(e.score),
            b = C(e.id, a);
        return ((0,
                n.useEffect)(() => {
                u && m.current && l.default.fromTo(m.current, {
                    opacity: 0,
                    y: -20,
                    scale: .98
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: .35,
                    ease: "power2.out"
                })
            }, [u]),
            h) ? (0,
            r.jsx)("div", {
            ref: m,
            className: (0,
                s.cn)("ml-4 rounded-lg px-3 py-2 bg-surface-raised/50", f),
            style: u ? {
                opacity: 0
            } : void 0,
            children: (0,
                r.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0,
                    r.jsx)("span", {
                    className: "type-meta text-prose-3",
                    children: "└"
                }), e.emoji && (0,
                    r.jsx)("span", {
                    className: "text-sm flex-shrink-0 opacity-70",
                    children: e.emoji
                }), (0,
                    r.jsx)("span", {
                    className: "type-meta font-medium text-prose-3",
                    children: e.label
                }), (0,
                    r.jsx)("span", {
                    className: "type-meta text-prose-3 italic ml-auto",
                    children: "(earned)"
                })]
            })
        }) : (0,
            r.jsxs)("div", {
            ref: m,
            className: (0,
                s.cn)("border border-outline rounded-lg px-3 py-2 bg-surface", !e.isScoring && "opacity-50", y[x], f),
            style: u ? {
                opacity: 0
            } : void 0,
            children: [(0,
                r.jsxs)("div", {
                className: "flex items-start justify-between gap-2 mb-1",
                children: [(0,
                    r.jsxs)("div", {
                    className: "flex items-center gap-2 min-w-0 flex-wrap",
                    children: [e.emoji && (0,
                        r.jsx)("span", {
                        className: "text-base flex-shrink-0",
                        children: e.emoji
                    }), p ? (0,
                        r.jsx)(i.default, {
                        href: `/u/${p}/badges/${e.id.toLowerCase()}`,
                        className: "type-compact-title text-prose hover:underline",
                        children: e.label
                    }) : (0,
                        r.jsx)("span", {
                        className: "type-compact-title text-prose",
                        children: e.label
                    }), (0,
                        r.jsx)("span", {
                        className: (0,
                            s.cn)("type-label px-1.5 py-0.5 rounded-sm flex-shrink-0", g.bgClass, g.textClass, g.borderClass),
                        children: g.label
                    }), e.isNew && (0,
                        r.jsx)("span", {
                        className: "type-label px-1.5 py-0.5 rounded-sm flex-shrink-0 bg-yellow-400 text-yellow-900 animate-pulse",
                        children: "NEW"
                    })]
                }), (0,
                    r.jsx)(j, {
                    value: e.score
                })]
            }), (0,
                r.jsx)("p", {
                className: "type-meta text-prose-3 mb-2",
                children: e.description
            }), b && (0,
                r.jsx)("div", {
                className: "pt-2 border-t border-outline-subtle",
                children: (0,
                    r.jsx)(E, {
                    badgeId: e.id,
                    number: t,
                    contributors: a,
                    rarity: x,
                    animate: !d,
                    animationDelay: 300 * c,
                    hideNumber: d
                })
            })]
        })
    }
    e.s(["BadgeEvidence", () => E, "BadgeExplainer", () => T, "EPPill", () => j, "hasBadgeEvidence", () => C], 523793)
}, 333736, e => {
    "use strict";

    function t(e) {
        if (e >= 50) {
            let t = Math.round(100 - e);
            return {
                text: `Top ${0 === t ? "<1" : t}%`,
                isTop: !0
            }
        }
        let t = Math.round(e);
        return {
            text: `Bottom ${0 === t ? "<1" : t}%`,
            isTop: !1
        }
    }

    function r(e) {
        return e >= 95 ? "text-yellow-500" : e >= 80 ? "text-green-500" : e >= 50 ? "text-emerald-500" : e >= 20 ? "text-orange-500" : "text-red-500"
    }
    e.s(["formatPercentile", () => t, "getPercentileColor", () => r])
}, 708147, 955946, 45418, e => {
    "use strict";
    e.i(753059),
        e.i(523793),
        e.i(356490);
    var t = e.i(843476),
        r = e.i(405641),
        n = e.i(647163),
        i = e.i(710163);
    let s = {
            trash: "🟫",
            common: "⬜",
            uncommon: "🟩",
            rare: "🟦",
            epic: "🟪",
            anomaly: "🟧",
            mythic: "🟥"
        },
        o = {
            trash: "TRASH",
            common: "COMMON",
            uncommon: "UNCOMMON",
            rare: "RARE",
            epic: "EPIC",
            anomaly: "ANOMALY",
            mythic: "MYTHIC"
        };

    function a(e) {
        let t, { number: a, badges: l, totalScore: c } = e,
            u = (0,
                n.numberToDisplayString)(a),
            d = (0,
                r.getCardRarityTier)(c),
            h = s[d],
            p = o[d],
            f = (t = 100 - (0,
                i.getPercentileForScore)(c)) <= 50 ? `Top ${Math.round(t)}%` : t > 90 ? `Bottom ${Math.round(100 - t)}%` : null,
            m = f ? `${h} ${p} • ${f}` : `${h} ${p}`,
            g = l.slice(0, 3).map(e => {
                var t;
                let n = (t = e.score,
                        s[(0,
                            r.getBadgeRarityTier)(t)]),
                    i = e.emoji || "✨";
                return `${n} ${i} ${e.label}`
            }),
            y = l.length - 3;
        y > 0 && g.push(`+${y} more`);
        let x = [`RNGdle 🎲 ${u}`, "", m, "", ...g, ""];
        return e.poem && x.push(`"${e.poem}"`, ""),
            x.push(`${c.toLocaleString()} EP`, "https://rngdle.com"),
            x.join("\n")
    }
    var l = e.i(643531);
    let c = (0,
        e.i(475254).default)("share-2", [
        ["circle", {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }],
        ["circle", {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }],
        ["circle", {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }],
        ["line", {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }],
        ["line", {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }]
    ]);
    var u = e.i(271645),
        d = e.i(846696);

    function h({ data: e, highlight: r, className: i }) {
        let [s, o] = (0,
            u.useState)(!1), h = (0,
            n.isTouchDevice)() && "function" == typeof navigator.share, p = (0,
            u.useCallback)(async() => {
            if (h) {
                let t = a(e);
                try {
                    await navigator.share({
                        text: t
                    })
                } catch (e) {
                    "AbortError" !== e.name && console.error("Share failed:", e)
                }
            } else {
                let t = a(e);
                await navigator.clipboard.writeText(t),
                    o(!0),
                    d.toast.success("Copied to clipboard"),
                    setTimeout(() => o(!1), 2e3)
            }
        }, [e, h]);
        return (0,
            t.jsx)("button", {
            onClick: p,
            className: (0,
                n.cn)("flex items-center gap-1.5 px-3 py-1.5", "type-button", "border border-outline rounded-lg", "text-prose-2 hover:text-prose hover:border-outline-strong", "bg-surface hover:bg-surface-raised", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong", "active:scale-[0.98]", "transition-all duration-150", r && "animate-share-highlight", i),
            "aria-label": h ? "Share your roll" : "Copy to clipboard",
            children: s ? (0,
                t.jsxs)(t.Fragment, {
                children: [(0,
                    t.jsx)(l.Check, {
                    className: "w-4 h-4"
                }), (0,
                    t.jsx)("span", {
                    className: "hidden sm:inline",
                    children: "Copied"
                })]
            }) : (0,
                t.jsxs)(t.Fragment, {
                children: [(0,
                    t.jsx)(c, {
                    className: "w-4 h-4"
                }), (0,
                    t.jsx)("span", {
                    className: "hidden sm:inline",
                    children: "Share"
                })]
            })
        })
    }

    function p({ visible: e = !0 }) {
        return (0,
            t.jsx)("div", {
            "aria-hidden": "true",
            className: ` 
            pointer-events-none fixed inset-0 z-50
            bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_55%,rgba(0,0,0,0.1)_100%)]
            transition-all
            duration-600
            mix-blend-multiply
            ${e ? "opacity-100" : "opacity-0"}
        `
        })
    }
    e.s(["ShareButton", () => h], 955946),
        e.s(["Vignette", () => p], 45418),
        e.s([], 708147)
}]);
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 161664, e => {
                "use strict";
                let t = {
                        DAILY_ROLL_LIMIT_ENABLED: !0,
                        DAILY_ROLL_LIMIT: 1,
                        DAILY_RESET_HOUR_UTC: 0,
                        GUEST_ROLL_CLAIMING_ENABLED: !1,
                        POETRY_ENABLED: !0
                    },
                    a = ["cam", "jesse", "dave", "numb3rl0rd", "one", "babywewereborntorng", "cherry", "loam", "malignblade", "lee", "stefan", "lil_mitzi", "gnat", "dr_gumbo", "ella_ella", "ancient_jellyfish", "zammy", "altimo", "evan", "cyber_elk"],
                    r = {
                        MIN_LENGTH: 3,
                        MAX_LENGTH: 20,
                        PATTERN: /^[a-zA-Z0-9_]+$/,
                        RESERVED: ["cm", ...a]
                    },
                    n = {
                        MIN_LENGTH: 2,
                        MAX_LENGTH: r.MAX_LENGTH,
                        MAX_REQUESTS_PER_MINUTE: 30
                    };

                function s(e = !1) {
                    return t.POETRY_ENABLED || e
                }

                function o(e) {
                    return !!e && a.includes(e.toLowerCase())
                }

                function i(e = !1, t = "production") {
                    return "development" === t || e
                }
                e.s(["DISPLAY_NAME", 0, r, "FEATURES", 0, t, "FRIENDS", 0, {
                    MAX_FRIENDS: 300,
                    FEED_PAGE_SIZE: 20,
                    NOTIFICATION_POLL_INTERVAL: 18e5,
                    EXPERIMENT_NOTIFICATION_POLL_INTERVAL: 8e3,
                    FRIEND_CODE_LENGTH: 8
                }, "SOCIAL_FAVORITE_BADGES", 0, {
                    MAX_VISIBLE: 2,
                    INCLUDE_IN_PROFILE_LINK: !0
                }, "USER_SEARCH", 0, n, "hadLegacyExperimentAccess", () => o, "hasExperimentAccess", () => i, "isPoemEnabled", () => s])
            }, 775357, e => {
                "use strict";
                var t = e.i(161664);
                let a = "rngdle_user";

                function r() {
                    if ("undefined" == typeof document)
                        return null;
                    let e = document.cookie.match(RegExp(`(?:^|;\\s*)${a}=([^;]*)`));
                    return e ? function(e) {
                        try {
                            let a, r, n, s = JSON.parse((a = e.replace(/-/g, "+").replace(/_/g, "/"),
                                r = atob(a + "=".repeat((4 - a.length % 4) % 4)),
                                n = Uint8Array.from(r, e => e.charCodeAt(0)),
                                new TextDecoder().decode(n)));
                            if (s && "string" == typeof s.id) {
                                let e = "string" == typeof s.displayName ? s.displayName : null;
                                return {
                                    id: s.id,
                                    displayName: e,
                                    displayNameColor: s.displayNameColor ? ? null,
                                    isAdmin: !0 === s.isAdmin || void 0 === s.isAdmin && "cam" === e,
                                    canAccessExperiments: !0 === s.canAccessExperiments || void 0 === s.canAccessExperiments && (0,
                                        t.hadLegacyExperimentAccess)(e)
                                }
                            }
                        } catch {}
                        return null
                    }(e[1]) : null
                }

                function n(e) {
                    if ("undefined" == typeof document)
                        return;
                    let t = "https:" === location.protocol ? "; Secure" : "";
                    document.cookie = `${a}=${function(e) {
            var t = JSON.stringify({
                id: e.id,
                displayName: e.displayName ?? null,
                displayNameColor: e.displayNameColor ?? null,
                isAdmin: e.isAdmin,
                canAccessExperiments: e.canAccessExperiments
            });
            let a = new TextEncoder().encode(t)
              , r = "";
            for (let e of a)
                r += String.fromCharCode(e);
            return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        }(e)}; Path=/; Max-Age=2592000; SameSite=Lax${t}`
                }

                function s() {
                    "undefined" != typeof document && (document.cookie = `${a}=; Path=/; Max-Age=0; SameSite=Lax`)
                }
                e.s(["clearUserHintCookie", () => s, "readUserHintCookie", () => r, "writeUserHintCookie", () => n])
            }, 977324, e => {
                "use strict";
                var t = e.i(843476),
                    a = e.i(271645),
                    r = e.i(775357);
                let n = (0,
                    a.createContext)({
                    user: null,
                    isLoading: !0,
                    isAuthenticated: !1,
                    refetch: () => {}
                });

                function s() {
                    return (0,
                        a.useContext)(n)
                }

                function o({ children: e }) {
                    let [s, o] = (0,
                        a.useState)(null), [i, l] = (0,
                        a.useState)(!0);
                    (0,
                        a.useEffect)(() => {
                        o((0,
                                r.readUserHintCookie)()),
                            l(!1)
                    }, []);
                    let d = (0,
                        a.useCallback)(() => {
                        o((0,
                            r.readUserHintCookie)())
                    }, []);
                    return (0,
                        t.jsx)(n.Provider, {
                        value: {
                            user: s,
                            isLoading: i,
                            isAuthenticated: !!s,
                            refetch: d
                        },
                        children: e
                    })
                }
                e.s(["AuthProvider", () => o, "useAuth", () => s])
            }, 475254, e => {
                "use strict";
                var t = e.i(271645);
                let a = e => {
                        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) => a ? a.toUpperCase() : t.toLowerCase());
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    },
                    r = (...e) => e.filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t).join(" ").trim();
                var n = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                };
                let s = (0,
                        t.forwardRef)(({ color: e = "currentColor", size: a = 24, strokeWidth: s = 2, absoluteStrokeWidth: o, className: i = "", children: l, iconNode: d, ...c }, u) => (0,
                        t.createElement)("svg", {
                        ref: u,
                        ...n,
                        width: a,
                        height: a,
                        stroke: e,
                        strokeWidth: o ? 24 * Number(s) / Number(a) : s,
                        className: r("lucide", i),
                        ...!l && !(e => {
                            for (let t in e)
                                if (t.startsWith("aria-") || "role" === t || "title" === t)
                                    return !0
                        })(c) && {
                            "aria-hidden": "true"
                        },
                        ...c
                    }, [...d.map(([e, a]) => (0,
                        t.createElement)(e, a)), ...Array.isArray(l) ? l : [l]])),
                    o = (e, n) => {
                        let o = (0,
                            t.forwardRef)(({ className: o, ...i }, l) => (0,
                            t.createElement)(s, {
                            ref: l,
                            iconNode: n,
                            className: r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, o),
                            ...i
                        }));
                        return o.displayName = a(e),
                            o
                    };
                e.s(["default", () => o], 475254)
            }, 531278, e => {
                "use strict";
                let t = (0,
                    e.i(475254).default)("loader-circle", [
                    ["path", {
                        d: "M21 12a9 9 0 1 1-6.219-8.56",
                        key: "13zald"
                    }]
                ]);
                e.s(["Loader2", () => t], 531278)
            }, 233525, (e, t, a) => {
                "use strict";
                Object.defineProperty(a, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(a, "warnOnce", {
                        enumerable: !0,
                        get: function() {
                            return r
                        }
                    });
                let r = e => {}
            }, 998183, (e, t, a) => {
                "use strict";
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var r = {
                    assign: function() {
                        return l
                    },
                    searchParamsToUrlQuery: function() {
                        return s
                    },
                    urlQueryToSearchParams: function() {
                        return i
                    }
                };
                for (var n in r)
                    Object.defineProperty(a, n, {
                        enumerable: !0,
                        get: r[n]
                    });

                function s(e) {
                    let t = {};
                    for (let [a, r] of e.entries()) {
                        let e = t[a];
                        void 0 === e ? t[a] = r : Array.isArray(e) ? e.push(r) : t[a] = [e, r]
                    }
                    return t
                }

                function o(e) {
                    return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
                }

                function i(e) {
                    let t = new URLSearchParams;
                    for (let [a, r] of Object.entries(e))
                        if (Array.isArray(r))
                            for (let e of r)
                                t.append(a, o(e));
                        else
                            t.set(a, o(r));
                    return t
                }

                function l(e, ...t) {
                    for (let a of t) {
                        for (let t of a.keys())
                            e.delete(t);
                        for (let [t, r] of a.entries())
                            e.append(t, r)
                    }
                    return e
                }
            }, 195057, (e, t, a) => {
                "use strict";
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var r = {
                    formatUrl: function() {
                        return i
                    },
                    formatWithValidation: function() {
                        return d
                    },
                    urlObjectKeys: function() {
                        return l
                    }
                };
                for (var n in r)
                    Object.defineProperty(a, n, {
                        enumerable: !0,
                        get: r[n]
                    });
                let s = e.r(190809)._(e.r(998183)),
                    o = /https?|ftp|gopher|file/;

                function i(e) {
                    let { auth: t, hostname: a } = e, r = e.protocol || "", n = e.pathname || "", i = e.hash || "", l = e.query || "", d = !1;
                    t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
                        e.host ? d = t + e.host : a && (d = t + (~a.indexOf(":") ? `[${a}]` : a),
                            e.port && (d += ":" + e.port)),
                        l && "object" == typeof l && (l = String(s.urlQueryToSearchParams(l)));
                    let c = e.search || l && `?${l}` || "";
                    return r && !r.endsWith(":") && (r += ":"),
                        e.slashes || (!r || o.test(r)) && !1 !== d ? (d = "//" + (d || ""),
                            n && "/" !== n[0] && (n = "/" + n)) : d || (d = ""),
                        i && "#" !== i[0] && (i = "#" + i),
                        c && "?" !== c[0] && (c = "?" + c),
                        n = n.replace(/[?#]/g, encodeURIComponent),
                        c = c.replace("#", "%23"),
                        `${r}${d}${n}${c}${i}`
                }
                let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

                function d(e) {
                    return i(e)
                }
            }, 818581, (e, t, a) => {
                "use strict";
                Object.defineProperty(a, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(a, "useMergedRef", {
                        enumerable: !0,
                        get: function() {
                            return n
                        }
                    });
                let r = e.r(271645);

                function n(e, t) {
                    let a = (0,
                            r.useRef)(null),
                        n = (0,
                            r.useRef)(null);
                    return (0,
                        r.useCallback)(r => {
                        if (null === r) {
                            let e = a.current;
                            e && (a.current = null,
                                e());
                            let t = n.current;
                            t && (n.current = null,
                                t())
                        } else
                            e && (a.current = s(e, r)),
                            t && (n.current = s(t, r))
                    }, [e, t])
                }

                function s(e, t) {
                    if ("function" != typeof e)
                        return e.current = t,
                            () => {
                                e.current = null
                            }; {
                        let a = e(t);
                        return "function" == typeof a ? a : () => e(null)
                    }
                }
                ("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
                        value: !0
                    }),
                    Object.assign(a.default, a),
                    t.exports = a.default)
            }, 718967, (e, t, a) => {
                "use strict";
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var r = {
                    DecodeError: function() {
                        return y
                    },
                    MiddlewareNotFoundError: function() {
                        return w
                    },
                    MissingStaticPage: function() {
                        return x
                    },
                    NormalizeError: function() {
                        return b
                    },
                    PageNotFoundError: function() {
                        return v
                    },
                    SP: function() {
                        return h
                    },
                    ST: function() {
                        return g
                    },
                    WEB_VITALS: function() {
                        return s
                    },
                    execOnce: function() {
                        return o
                    },
                    getDisplayName: function() {
                        return u
                    },
                    getLocationOrigin: function() {
                        return d
                    },
                    getURL: function() {
                        return c
                    },
                    isAbsoluteUrl: function() {
                        return l
                    },
                    isResSent: function() {
                        return f
                    },
                    loadGetInitialProps: function() {
                        return p
                    },
                    normalizeRepeatedSlashes: function() {
                        return m
                    },
                    stringifyError: function() {
                        return N
                    }
                };
                for (var n in r)
                    Object.defineProperty(a, n, {
                        enumerable: !0,
                        get: r[n]
                    });
                let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

                function o(e) {
                    let t, a = !1;
                    return (...r) => (a || (a = !0,
                            t = e(...r)),
                        t)
                }
                let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                    l = e => i.test(e);

                function d() {
                    let { protocol: e, hostname: t, port: a } = window.location;
                    return `${e}//${t}${a ? ":" + a : ""}`
                }

                function c() {
                    let { href: e } = window.location, t = d();
                    return e.substring(t.length)
                }

                function u(e) {
                    return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
                }

                function f(e) {
                    return e.finished || e.headersSent
                }

                function m(e) {
                    let t = e.split("?");
                    return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
                }
                async function p(e, t) {
                    let a = t.res || t.ctx && t.ctx.res;
                    if (!e.getInitialProps)
                        return t.ctx && t.Component ? {
                            pageProps: await p(t.Component, t.ctx)
                        } : {};
                    let r = await e.getInitialProps(t);
                    if (a && f(a))
                        return r;
                    if (!r)
                        throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`), "__NEXT_ERROR_CODE", {
                            value: "E394",
                            enumerable: !1,
                            configurable: !0
                        });
                    return r
                }
                let h = "undefined" != typeof performance,
                    g = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
                class y extends Error {}
                class b extends Error {}
                class v extends Error {
                    constructor(e) {
                        super(),
                            this.code = "ENOENT",
                            this.name = "PageNotFoundError",
                            this.message = `Cannot find module for page: ${e}`
                    }
                }
                class x extends Error {
                    constructor(e, t) {
                        super(),
                            this.message = `Failed to load static file for page: ${e} ${t}`
                    }
                }
                class w extends Error {
                    constructor() {
                        super(),
                            this.code = "ENOENT",
                            this.message = "Cannot find the middleware module"
                    }
                }

                function N(e) {
                    return JSON.stringify({
                        message: e.message,
                        stack: e.stack
                    })
                }
            }, 573668, (e, t, a) => {
                "use strict";
                Object.defineProperty(a, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(a, "isLocalURL", {
                        enumerable: !0,
                        get: function() {
                            return s
                        }
                    });
                let r = e.r(718967),
                    n = e.r(652817);

                function s(e) {
                    if (!(0,
                            r.isAbsoluteUrl)(e))
                        return !0;
                    try {
                        let t = (0,
                                r.getLocationOrigin)(),
                            a = new URL(e, t);
                        return a.origin === t && (0,
                            n.hasBasePath)(a.pathname)
                    } catch (e) {
                        return !1
                    }
                }
            }, 284508, (e, t, a) => {
                "use strict";
                Object.defineProperty(a, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(a, "errorOnce", {
                        enumerable: !0,
                        get: function() {
                            return r
                        }
                    });
                let r = e => {}
            }, 522016, (e, t, a) => {
                "use strict";
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var r = {
                    default: function() {
                        return y
                    },
                    useLinkStatus: function() {
                        return v
                    }
                };
                for (var n in r)
                    Object.defineProperty(a, n, {
                        enumerable: !0,
                        get: r[n]
                    });
                let s = e.r(190809),
                    o = e.r(843476),
                    i = s._(e.r(271645)),
                    l = e.r(195057),
                    d = e.r(8372),
                    c = e.r(818581),
                    u = e.r(718967),
                    f = e.r(405550);
                e.r(233525);
                let m = e.r(91949),
                    p = e.r(573668),
                    h = e.r(509396);

                function g(e) {
                    return "string" == typeof e ? e : (0,
                        l.formatUrl)(e)
                }

                function y(t) {
                    var a;
                    let r, n, s, [l, y] = (0,
                            i.useOptimistic)(m.IDLE_LINK_STATUS),
                        v = (0,
                            i.useRef)(null),
                        { href: x, as: w, children: N, prefetch: E = null, passHref: k, replace: j, shallow: S, scroll: T, onClick: C, onMouseEnter: A, onTouchStart: M, legacyBehavior: L = !1, onNavigate: I, ref: _, unstable_dynamicOnHover: R, ...P } = t;
                    r = N,
                        L && ("string" == typeof r || "number" == typeof r) && (r = (0,
                            o.jsx)("a", {
                            children: r
                        }));
                    let O = i.default.useContext(d.AppRouterContext),
                        D = !1 !== E,
                        B = !1 !== E ? null === (a = E) || "auto" === a ? h.FetchStrategy.PPR : h.FetchStrategy.Full : h.FetchStrategy.PPR,
                        { href: $, as: U } = i.default.useMemo(() => {
                            let e = g(x);
                            return {
                                href: e,
                                as: w ? g(w) : e
                            }
                        }, [x, w]);
                    if (L) {
                        if (r ? .$$typeof === Symbol.for("react.lazy"))
                            throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                                value: "E863",
                                enumerable: !1,
                                configurable: !0
                            });
                        n = i.default.Children.only(r)
                    }
                    let F = L ? n && "object" == typeof n && n.ref : _,
                        z = i.default.useCallback(e => (null !== O && (v.current = (0,
                                m.mountLinkInstance)(e, $, O, B, D, y)),
                            () => {
                                v.current && ((0,
                                            m.unmountLinkForCurrentNavigation)(v.current),
                                        v.current = null),
                                    (0,
                                        m.unmountPrefetchableInstance)(e)
                            }
                        ), [D, $, O, B, y]),
                        H = {
                            ref: (0,
                                c.useMergedRef)(z, F),
                            onClick(t) {
                                L || "function" != typeof C || C(t),
                                    L && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), !O || t.defaultPrevented || function(t, a, r, n, s, o, l) {
                                        if ("undefined" != typeof window) {
                                            let d, { nodeName: c } = t.currentTarget;
                                            if ("A" === c.toUpperCase() && ((d = t.currentTarget.getAttribute("target")) && "_self" !== d || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download"))
                                                return;
                                            if (!(0,
                                                    p.isLocalURL)(a)) {
                                                s && (t.preventDefault(),
                                                    location.replace(a));
                                                return
                                            }
                                            if (t.preventDefault(),
                                                l) {
                                                let e = !1;
                                                if (l({
                                                        preventDefault: () => {
                                                            e = !0
                                                        }
                                                    }),
                                                    e)
                                                    return
                                            }
                                            let { dispatchNavigateAction: u } = e.r(699781);
                                            i.default.startTransition(() => {
                                                u(r || a, s ? "replace" : "push", o ? ? !0, n.current)
                                            })
                                        }
                                    }(t, $, U, v, j, T, I)
                            },
                            onMouseEnter(e) {
                                L || "function" != typeof A || A(e),
                                    L && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                                    O && D && (0,
                                        m.onNavigationIntent)(e.currentTarget, !0 === R)
                            },
                            onTouchStart: function(e) {
                                L || "function" != typeof M || M(e),
                                    L && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                                    O && D && (0,
                                        m.onNavigationIntent)(e.currentTarget, !0 === R)
                            }
                        };
                    return (0,
                            u.isAbsoluteUrl)(U) ? H.href = U : L && !k && ("a" !== n.type || "href" in n.props) || (H.href = (0,
                            f.addBasePath)(U)),
                        s = L ? i.default.cloneElement(n, H) : (0,
                            o.jsx)("a", {
                            ...P,
                            ...H,
                            children: r
                        }),
                        (0,
                            o.jsx)(b.Provider, {
                            value: l,
                            children: s
                        })
                }
                e.r(284508);
                let b = (0,
                        i.createContext)(m.IDLE_LINK_STATUS),
                    v = () => (0,
                        i.useContext)(b);
                ("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
                        value: !0
                    }),
                    Object.assign(a.default, a),
                    t.exports = a.default)
            }, 4080, e => {
                "use strict";
                var t = e.i(843476),
                    a = e.i(522016);

                function r({ prefetch: e = !1, ...r }) {
                    return (0,
                        t.jsx)(a.default, {
                        prefetch: e,
                        ...r
                    })
                }
                e.s(["default", () => r])
            }, 305622, e => {
                "use strict";
                var t = e.i(843476),
                    a = e.i(271645);
                let r = "rngdle_theme",
                    n = (0,
                        a.createContext)({
                        theme: "auto",
                        resolvedTheme: "light",
                        setTheme: () => {}
                    });

                function s(e) {
                    let t = "dark" === e || "auto" === e && window.matchMedia("(prefers-color-scheme: dark)").matches;
                    return document.documentElement.classList.toggle("dark", t),
                        t
                }

                function o({ children: e }) {
                    let [o, i] = (0,
                        a.useState)("auto"), [l, d] = (0,
                        a.useState)("light");
                    return (0,
                            a.useEffect)(() => {
                            let e = localStorage.getItem(r),
                                t = "light" === e || "dark" === e || "auto" === e ? e : "auto";
                            i(t),
                                d(s(t) ? "dark" : "light");
                            let a = window.matchMedia("(prefers-color-scheme: dark)"),
                                n = () => {
                                    let e = localStorage.getItem(r);
                                    e && "auto" !== e || d(s("auto") ? "dark" : "light")
                                };
                            return a.addEventListener("change", n),
                                () => a.removeEventListener("change", n)
                        }, []),
                        (0,
                            t.jsx)(n.Provider, {
                            value: {
                                theme: o,
                                resolvedTheme: l,
                                setTheme: e => {
                                    localStorage.setItem(r, e),
                                        i(e),
                                        d(s(e) ? "dark" : "light")
                                }
                            },
                            children: e
                        })
                }
                e.s(["ThemeProvider", () => o, "useTheme", 0, () => (0,
                    a.useContext)(n)])
            }, 379070, e => {
                "use strict";
                var t = e.i(843476),
                    a = e.i(647163),
                    r = e.i(305622);

                function n({ displayName: e, color: n, className: s }) {
                    let { resolvedTheme: o } = (0,
                        r.useTheme)();
                    return (0,
                        t.jsx)("span", {
                        style: (0,
                            a.getDisplayNameStyle)(n, "dark" === o),
                        className: s,
                        children: e
                    })
                }
                e.s(["DisplayName", () => n])
            }, 478446, e => {
                "use strict";
                var t = e.i(843476),
                    a = e.i(4080),
                    r = e.i(379070),
                    n = e.i(161664),
                    s = e.i(647163);

                function o({ displayName: e, color: o, favoriteBadgeEmojis: i = [], href: l, className: d, style: c, onClick: u }) {
                    let f = i.slice(0, n.SOCIAL_FAVORITE_BADGES.MAX_VISIBLE),
                        m = (0,
                            s.cn)("inline-flex min-w-0 max-w-full items-baseline whitespace-nowrap", d),
                        p = (0,
                            t.jsx)(r.DisplayName, {
                            displayName: e,
                            color: o,
                            className: "block min-w-0 truncate group-hover:underline"
                        }),
                        h = f.length > 0 ? (0,
                            t.jsx)("span", {
                            "aria-hidden": "true",
                            className: "ml-2 inline-flex shrink-0 gap-0.5 align-baseline no-underline",
                            children: f.map((e, a) => (0,
                                t.jsx)("span", {
                                className: "whitespace-nowrap",
                                children: e
                            }, a))
                        }) : null;
                    return l ? n.SOCIAL_FAVORITE_BADGES.INCLUDE_IN_PROFILE_LINK ? (0,
                        t.jsxs)(a.default, {
                        href: l,
                        className: (0,
                            s.cn)("group", m),
                        style: c,
                        onClick: u,
                        children: [p, h]
                    }) : (0,
                        t.jsxs)("span", {
                        className: m,
                        style: c,
                        children: [(0,
                            t.jsx)(a.default, {
                            href: l,
                            className: "group min-w-0 overflow-hidden",
                            onClick: u,
                            children: p
                        }), h]
                    }) : (0,
                        t.jsxs)("span", {
                        className: m,
                        style: c,
                        children: [p, h]
                    })
                }
                e.s(["SocialDisplayName", () => o])
            }, 790597, e => {
                "use strict";
                let t = (0,
                    e.i(475254).default)("heart", [
                    ["path", {
                        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
                        key: "mvr1a0"
                    }]
                ]);
                e.s(["Heart", () => t], 790597)
            }, 846696, e => {
                "use strict";
                var t = e.i(271645),
                    a = e.i(174080);
                let r = Array(12).fill(0),
                    n = ({ visible: e, className: a }) => t.default.createElement("div", {
                        className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
                        "data-visible": e
                    }, t.default.createElement("div", {
                        className: "sonner-spinner"
                    }, r.map((e, a) => t.default.createElement("div", {
                        className: "sonner-loading-bar",
                        key: `spinner-bar-${a}`
                    })))),
                    s = t.default.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        height: "20",
                        width: "20"
                    }, t.default.createElement("path", {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                        clipRule: "evenodd"
                    })),
                    o = t.default.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        height: "20",
                        width: "20"
                    }, t.default.createElement("path", {
                        fillRule: "evenodd",
                        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                        clipRule: "evenodd"
                    })),
                    i = t.default.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        height: "20",
                        width: "20"
                    }, t.default.createElement("path", {
                        fillRule: "evenodd",
                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
                        clipRule: "evenodd"
                    })),
                    l = t.default.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        height: "20",
                        width: "20"
                    }, t.default.createElement("path", {
                        fillRule: "evenodd",
                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                        clipRule: "evenodd"
                    })),
                    d = t.default.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, t.default.createElement("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                    }), t.default.createElement("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                    })),
                    c = 1,
                    u = new class {
                        constructor() {
                            this.subscribe = e => (this.subscribers.push(e),
                                    () => {
                                        let t = this.subscribers.indexOf(e);
                                        this.subscribers.splice(t, 1)
                                    }
                                ),
                                this.publish = e => {
                                    this.subscribers.forEach(t => t(e))
                                },
                                this.addToast = e => {
                                    this.publish(e),
                                        this.toasts = [...this.toasts, e]
                                },
                                this.create = e => {
                                    var t;
                                    let { message: a, ...r } = e, n = "number" == typeof(null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : c++, s = this.toasts.find(e => e.id === n), o = void 0 === e.dismissible || e.dismissible;
                                    return this.dismissedToasts.has(n) && this.dismissedToasts.delete(n),
                                        s ? this.toasts = this.toasts.map(t => t.id === n ? (this.publish({
                                            ...t,
                                            ...e,
                                            id: n,
                                            title: a
                                        }), {
                                            ...t,
                                            ...e,
                                            id: n,
                                            dismissible: o,
                                            title: a
                                        }) : t) : this.addToast({
                                            title: a,
                                            ...r,
                                            dismissible: o,
                                            id: n
                                        }),
                                        n
                                },
                                this.dismiss = e => (e ? (this.dismissedToasts.add(e),
                                        requestAnimationFrame(() => this.subscribers.forEach(t => t({
                                            id: e,
                                            dismiss: !0
                                        })))) : this.toasts.forEach(e => {
                                        this.subscribers.forEach(t => t({
                                            id: e.id,
                                            dismiss: !0
                                        }))
                                    }),
                                    e),
                                this.message = (e, t) => this.create({
                                    ...t,
                                    message: e
                                }),
                                this.error = (e, t) => this.create({
                                    ...t,
                                    message: e,
                                    type: "error"
                                }),
                                this.success = (e, t) => this.create({
                                    ...t,
                                    type: "success",
                                    message: e
                                }),
                                this.info = (e, t) => this.create({
                                    ...t,
                                    type: "info",
                                    message: e
                                }),
                                this.warning = (e, t) => this.create({
                                    ...t,
                                    type: "warning",
                                    message: e
                                }),
                                this.loading = (e, t) => this.create({
                                    ...t,
                                    type: "loading",
                                    message: e
                                }),
                                this.promise = (e, a) => {
                                    let r, n;
                                    if (!a)
                                        return;
                                    void 0 !== a.loading && (n = this.create({
                                        ...a,
                                        promise: e,
                                        type: "loading",
                                        message: a.loading,
                                        description: "function" != typeof a.description ? a.description : void 0
                                    }));
                                    let s = Promise.resolve(e instanceof Function ? e() : e),
                                        o = void 0 !== n,
                                        i = s.then(async e => {
                                            if (r = ["resolve", e],
                                                t.default.isValidElement(e))
                                                o = !1,
                                                this.create({
                                                    id: n,
                                                    type: "default",
                                                    message: e
                                                });
                                            else if (f(e) && !e.ok) {
                                                o = !1;
                                                let r = "function" == typeof a.error ? await a.error(`HTTP error! status: ${e.status}`) : a.error,
                                                    s = "function" == typeof a.description ? await a.description(`HTTP error! status: ${e.status}`) : a.description,
                                                    i = "object" != typeof r || t.default.isValidElement(r) ? {
                                                        message: r
                                                    } : r;
                                                this.create({
                                                    id: n,
                                                    type: "error",
                                                    description: s,
                                                    ...i
                                                })
                                            } else if (e instanceof Error) {
                                                o = !1;
                                                let r = "function" == typeof a.error ? await a.error(e) : a.error,
                                                    s = "function" == typeof a.description ? await a.description(e) : a.description,
                                                    i = "object" != typeof r || t.default.isValidElement(r) ? {
                                                        message: r
                                                    } : r;
                                                this.create({
                                                    id: n,
                                                    type: "error",
                                                    description: s,
                                                    ...i
                                                })
                                            } else if (void 0 !== a.success) {
                                                o = !1;
                                                let r = "function" == typeof a.success ? await a.success(e) : a.success,
                                                    s = "function" == typeof a.description ? await a.description(e) : a.description,
                                                    i = "object" != typeof r || t.default.isValidElement(r) ? {
                                                        message: r
                                                    } : r;
                                                this.create({
                                                    id: n,
                                                    type: "success",
                                                    description: s,
                                                    ...i
                                                })
                                            }
                                        }).catch(async e => {
                                            if (r = ["reject", e],
                                                void 0 !== a.error) {
                                                o = !1;
                                                let r = "function" == typeof a.error ? await a.error(e) : a.error,
                                                    s = "function" == typeof a.description ? await a.description(e) : a.description,
                                                    i = "object" != typeof r || t.default.isValidElement(r) ? {
                                                        message: r
                                                    } : r;
                                                this.create({
                                                    id: n,
                                                    type: "error",
                                                    description: s,
                                                    ...i
                                                })
                                            }
                                        }).finally(() => {
                                            o && (this.dismiss(n),
                                                    n = void 0),
                                                null == a.finally || a.finally.call(a)
                                        }),
                                        l = () => new Promise((e, t) => i.then(() => "reject" === r[0] ? t(r[1]) : e(r[1])).catch(t));
                                    return "string" != typeof n && "number" != typeof n ? {
                                        unwrap: l
                                    } : Object.assign(n, {
                                        unwrap: l
                                    })
                                },
                                this.custom = (e, t) => {
                                    let a = (null == t ? void 0 : t.id) || c++;
                                    return this.create({
                                            jsx: e(a),
                                            id: a,
                                            ...t
                                        }),
                                        a
                                },
                                this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
                                this.subscribers = [],
                                this.toasts = [],
                                this.dismissedToasts = new Set
                        }
                    },
                    f = e => e && "object" == typeof e && "ok" in e && "boolean" == typeof e.ok && "status" in e && "number" == typeof e.status,
                    m = Object.assign((e, t) => {
                        let a = (null == t ? void 0 : t.id) || c++;
                        return u.addToast({
                                title: e,
                                ...t,
                                id: a
                            }),
                            a
                    }, {
                        success: u.success,
                        info: u.info,
                        warning: u.warning,
                        error: u.error,
                        custom: u.custom,
                        message: u.message,
                        promise: u.promise,
                        dismiss: u.dismiss,
                        loading: u.loading
                    }, {
                        getHistory: () => u.toasts,
                        getToasts: () => u.getActiveToasts()
                    });

                function p(e) {
                    return void 0 !== e.label
                }

                function h(...e) {
                    return e.filter(Boolean).join(" ")
                }! function(e) {
                    if (!e || "undefined" == typeof document)
                        return;
                    let t = document.head || document.getElementsByTagName("head")[0],
                        a = document.createElement("style");
                    a.type = "text/css",
                        t.appendChild(a),
                        a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
                }("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
                let g = e => {
                    var a, r, c, u, f, m, g, y, b, v, x, w, N;
                    let { invert: E, toast: k, unstyled: j, interacting: S, setHeights: T, visibleToasts: C, heights: A, index: M, toasts: L, expanded: I, removeToast: _, defaultRichColors: R, closeButton: P, style: O, cancelButtonStyle: D, actionButtonStyle: B, className: $ = "", descriptionClassName: U = "", duration: F, position: z, gap: H, expandByDefault: Y, classNames: V, icons: X, closeButtonAriaLabel: q = "Close toast" } = e, [G, W] = t.default.useState(null), [K, J] = t.default.useState(null), [Z, Q] = t.default.useState(!1), [ee, et] = t.default.useState(!1), [ea, er] = t.default.useState(!1), [en, es] = t.default.useState(!1), [eo, ei] = t.default.useState(!1), [el, ed] = t.default.useState(0), [ec, eu] = t.default.useState(0), ef = t.default.useRef(k.duration || F || 4e3), em = t.default.useRef(null), ep = t.default.useRef(null), eh = 0 === M, eg = M + 1 <= C, ey = k.type, eb = !1 !== k.dismissible, ev = k.className || "", ex = k.descriptionClassName || "", ew = t.default.useMemo(() => A.findIndex(e => e.toastId === k.id) || 0, [A, k.id]), eN = t.default.useMemo(() => {
                        var e;
                        return null != (e = k.closeButton) ? e : P
                    }, [k.closeButton, P]), eE = t.default.useMemo(() => k.duration || F || 4e3, [k.duration, F]), ek = t.default.useRef(0), ej = t.default.useRef(0), eS = t.default.useRef(0), eT = t.default.useRef(null), [eC, eA] = z.split("-"), eM = t.default.useMemo(() => A.reduce((e, t, a) => a >= ew ? e : e + t.height, 0), [A, ew]), eL = (() => {
                        let [e, a] = t.default.useState(document.hidden);
                        return t.default.useEffect(() => {
                                let e = () => {
                                    a(document.hidden)
                                };
                                return document.addEventListener("visibilitychange", e),
                                    () => window.removeEventListener("visibilitychange", e)
                            }, []),
                            e
                    })(), eI = k.invert || E, e_ = "loading" === ey;
                    ej.current = t.default.useMemo(() => ew * H + eM, [ew, eM]),
                        t.default.useEffect(() => {
                            ef.current = eE
                        }, [eE]),
                        t.default.useEffect(() => {
                            Q(!0)
                        }, []),
                        t.default.useEffect(() => {
                            let e = ep.current;
                            if (e) {
                                let t = e.getBoundingClientRect().height;
                                return eu(t),
                                    T(e => [{
                                        toastId: k.id,
                                        height: t,
                                        position: k.position
                                    }, ...e]),
                                    () => T(e => e.filter(e => e.toastId !== k.id))
                            }
                        }, [T, k.id]),
                        t.default.useLayoutEffect(() => {
                            if (!Z)
                                return;
                            let e = ep.current,
                                t = e.style.height;
                            e.style.height = "auto";
                            let a = e.getBoundingClientRect().height;
                            e.style.height = t,
                                eu(a),
                                T(e => e.find(e => e.toastId === k.id) ? e.map(e => e.toastId === k.id ? {
                                    ...e,
                                    height: a
                                } : e) : [{
                                    toastId: k.id,
                                    height: a,
                                    position: k.position
                                }, ...e])
                        }, [Z, k.title, k.description, T, k.id, k.jsx, k.action, k.cancel]);
                    let eR = t.default.useCallback(() => {
                        et(!0),
                            ed(ej.current),
                            T(e => e.filter(e => e.toastId !== k.id)),
                            setTimeout(() => {
                                _(k)
                            }, 200)
                    }, [k, _, T, ej]);
                    t.default.useEffect(() => {
                            let e;
                            if ((!k.promise || "loading" !== ey) && k.duration !== 1 / 0 && "loading" !== k.type) {
                                if (I || S || eL) {
                                    if (eS.current < ek.current) {
                                        let e = new Date().getTime() - ek.current;
                                        ef.current = ef.current - e
                                    }
                                    eS.current = new Date().getTime()
                                } else
                                    ef.current !== 1 / 0 && (ek.current = new Date().getTime(),
                                        e = setTimeout(() => {
                                            null == k.onAutoClose || k.onAutoClose.call(k, k),
                                                eR()
                                        }, ef.current));
                                return () => clearTimeout(e)
                            }
                        }, [I, S, k, ey, eL, eR]),
                        t.default.useEffect(() => {
                            k.delete && (eR(),
                                null == k.onDismiss || k.onDismiss.call(k, k))
                        }, [eR, k.delete]);
                    let eP = k.icon || (null == X ? void 0 : X[ey]) || (e => {
                        switch (e) {
                            case "success":
                                return s;
                            case "info":
                                return i;
                            case "warning":
                                return o;
                            case "error":
                                return l;
                            default:
                                return null
                        }
                    })(ey);
                    return t.default.createElement("li", {
                        tabIndex: 0,
                        ref: ep,
                        className: h($, ev, null == V ? void 0 : V.toast, null == k || null == (a = k.classNames) ? void 0 : a.toast, null == V ? void 0 : V.default, null == V ? void 0 : V[ey], null == k || null == (r = k.classNames) ? void 0 : r[ey]),
                        "data-sonner-toast": "",
                        "data-rich-colors": null != (v = k.richColors) ? v : R,
                        "data-styled": !(k.jsx || k.unstyled || j),
                        "data-mounted": Z,
                        "data-promise": !!k.promise,
                        "data-swiped": eo,
                        "data-removed": ee,
                        "data-visible": eg,
                        "data-y-position": eC,
                        "data-x-position": eA,
                        "data-index": M,
                        "data-front": eh,
                        "data-swiping": ea,
                        "data-dismissible": eb,
                        "data-type": ey,
                        "data-invert": eI,
                        "data-swipe-out": en,
                        "data-swipe-direction": K,
                        "data-expanded": !!(I || Y && Z),
                        "data-testid": k.testId,
                        style: {
                            "--index": M,
                            "--toasts-before": M,
                            "--z-index": L.length - M,
                            "--offset": `${ee ? el : ej.current}px`,
                            "--initial-height": Y ? "auto" : `${ec}px`,
                            ...O,
                            ...k.style
                        },
                        onDragEnd: () => {
                            er(!1),
                                W(null),
                                eT.current = null
                        },
                        onPointerDown: e => {
                            2 === e.button || e_ || !eb || (em.current = new Date,
                                ed(ej.current),
                                e.target.setPointerCapture(e.pointerId),
                                "BUTTON" !== e.target.tagName && (er(!0),
                                    eT.current = {
                                        x: e.clientX,
                                        y: e.clientY
                                    }))
                        },
                        onPointerUp: () => {
                            var e, t, a, r, n;
                            if (en || !eb)
                                return;
                            eT.current = null;
                            let s = Number((null == (e = ep.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                                o = Number((null == (t = ep.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                                i = new Date().getTime() - (null == (a = em.current) ? void 0 : a.getTime()),
                                l = "x" === G ? s : o,
                                d = Math.abs(l) / i;
                            if (Math.abs(l) >= 45 || d > .11) {
                                ed(ej.current),
                                    null == k.onDismiss || k.onDismiss.call(k, k),
                                    "x" === G ? J(s > 0 ? "right" : "left") : J(o > 0 ? "down" : "up"),
                                    eR(),
                                    es(!0);
                                return
                            }
                            null == (r = ep.current) || r.style.setProperty("--swipe-amount-x", "0px"),
                                null == (n = ep.current) || n.style.setProperty("--swipe-amount-y", "0px"),
                                ei(!1),
                                er(!1),
                                W(null)
                        },
                        onPointerMove: t => {
                            var a, r, n, s;
                            if (!eT.current || !eb || (null == (a = window.getSelection()) ? void 0 : a.toString().length) > 0)
                                return;
                            let o = t.clientY - eT.current.y,
                                i = t.clientX - eT.current.x,
                                l = null != (s = e.swipeDirections) ? s : function(e) {
                                    let [t, a] = e.split("-"), r = [];
                                    return t && r.push(t),
                                        a && r.push(a),
                                        r
                                }(z);
                            !G && (Math.abs(i) > 1 || Math.abs(o) > 1) && W(Math.abs(i) > Math.abs(o) ? "x" : "y");
                            let d = {
                                    x: 0,
                                    y: 0
                                },
                                c = e => 1 / (1.5 + Math.abs(e) / 20);
                            if ("y" === G) {
                                if (l.includes("top") || l.includes("bottom"))
                                    if (l.includes("top") && o < 0 || l.includes("bottom") && o > 0)
                                        d.y = o;
                                    else {
                                        let e = o * c(o);
                                        d.y = Math.abs(e) < Math.abs(o) ? e : o
                                    }
                            } else if ("x" === G && (l.includes("left") || l.includes("right")))
                                if (l.includes("left") && i < 0 || l.includes("right") && i > 0)
                                    d.x = i;
                                else {
                                    let e = i * c(i);
                                    d.x = Math.abs(e) < Math.abs(i) ? e : i
                                }
                                (Math.abs(d.x) > 0 || Math.abs(d.y) > 0) && ei(!0),
                                null == (r = ep.current) || r.style.setProperty("--swipe-amount-x", `${d.x}px`),
                                null == (n = ep.current) || n.style.setProperty("--swipe-amount-y", `${d.y}px`)
                        }
                    }, eN && !k.jsx && "loading" !== ey ? t.default.createElement("button", {
                        "aria-label": q,
                        "data-disabled": e_,
                        "data-close-button": !0,
                        onClick: e_ || !eb ? () => {} :
                            () => {
                                eR(),
                                    null == k.onDismiss || k.onDismiss.call(k, k)
                            },
                        className: h(null == V ? void 0 : V.closeButton, null == k || null == (c = k.classNames) ? void 0 : c.closeButton)
                    }, null != (x = null == X ? void 0 : X.close) ? x : d) : null, (ey || k.icon || k.promise) && null !== k.icon && ((null == X ? void 0 : X[ey]) !== null || k.icon) ? t.default.createElement("div", {
                        "data-icon": "",
                        className: h(null == V ? void 0 : V.icon, null == k || null == (u = k.classNames) ? void 0 : u.icon)
                    }, k.promise || "loading" === k.type && !k.icon ? k.icon || ((null == X ? void 0 : X.loading) ? t.default.createElement("div", {
                        className: h(null == V ? void 0 : V.loader, null == k || null == (N = k.classNames) ? void 0 : N.loader, "sonner-loader"),
                        "data-visible": "loading" === ey
                    }, X.loading) : t.default.createElement(n, {
                        className: h(null == V ? void 0 : V.loader, null == k || null == (w = k.classNames) ? void 0 : w.loader),
                        visible: "loading" === ey
                    })) : null, "loading" !== k.type ? eP : null) : null, t.default.createElement("div", {
                        "data-content": "",
                        className: h(null == V ? void 0 : V.content, null == k || null == (f = k.classNames) ? void 0 : f.content)
                    }, t.default.createElement("div", {
                        "data-title": "",
                        className: h(null == V ? void 0 : V.title, null == k || null == (m = k.classNames) ? void 0 : m.title)
                    }, k.jsx ? k.jsx : "function" == typeof k.title ? k.title() : k.title), k.description ? t.default.createElement("div", {
                        "data-description": "",
                        className: h(U, ex, null == V ? void 0 : V.description, null == k || null == (g = k.classNames) ? void 0 : g.description)
                    }, "function" == typeof k.description ? k.description() : k.description) : null), t.default.isValidElement(k.cancel) ? k.cancel : k.cancel && p(k.cancel) ? t.default.createElement("button", {
                        "data-button": !0,
                        "data-cancel": !0,
                        style: k.cancelButtonStyle || D,
                        onClick: e => {
                            !p(k.cancel) || eb && (null == k.cancel.onClick || k.cancel.onClick.call(k.cancel, e),
                                eR())
                        },
                        className: h(null == V ? void 0 : V.cancelButton, null == k || null == (y = k.classNames) ? void 0 : y.cancelButton)
                    }, k.cancel.label) : null, t.default.isValidElement(k.action) ? k.action : k.action && p(k.action) ? t.default.createElement("button", {
                        "data-button": !0,
                        "data-action": !0,
                        style: k.actionButtonStyle || B,
                        onClick: e => {
                            !p(k.action) || (null == k.action.onClick || k.action.onClick.call(k.action, e),
                                e.defaultPrevented || eR())
                        },
                        className: h(null == V ? void 0 : V.actionButton, null == k || null == (b = k.classNames) ? void 0 : b.actionButton)
                    }, k.action.label) : null)
                };

                function y() {
                    if ("undefined" == typeof window || "undefined" == typeof document)
                        return "ltr";
                    let e = document.documentElement.getAttribute("dir");
                    return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
                }

                function b() {
                    let [e, r] = t.default.useState([]);
                    return t.default.useEffect(() => u.subscribe(e => {
                        e.dismiss ? setTimeout(() => {
                            a.default.flushSync(() => {
                                r(t => t.filter(t => t.id !== e.id))
                            })
                        }) : setTimeout(() => {
                            a.default.flushSync(() => {
                                r(t => {
                                    let a = t.findIndex(t => t.id === e.id);
                                    return -1 !== a ? [...t.slice(0, a), {
                                        ...t[a],
                                        ...e
                                    }, ...t.slice(a + 1)] : [e, ...t]
                                })
                            })
                        })
                    }), []), {
                        toasts: e
                    }
                }
                let v = t.default.forwardRef(function(e, r) {
                    let { id: n, invert: s, position: o = "bottom-right", hotkey: i = ["altKey", "KeyT"], expand: l, closeButton: d, className: c, offset: f, mobileOffset: m, theme: p = "light", richColors: h, duration: b, style: v, visibleToasts: x = 3, toastOptions: w, dir: N = y(), gap: E = 14, icons: k, containerAriaLabel: j = "Notifications" } = e, [S, T] = t.default.useState([]), C = t.default.useMemo(() => n ? S.filter(e => e.toasterId === n) : S.filter(e => !e.toasterId), [S, n]), A = t.default.useMemo(() => Array.from(new Set([o].concat(C.filter(e => e.position).map(e => e.position)))), [C, o]), [M, L] = t.default.useState([]), [I, _] = t.default.useState(!1), [R, P] = t.default.useState(!1), [O, D] = t.default.useState("system" !== p ? p : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), B = t.default.useRef(null), $ = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), U = t.default.useRef(null), F = t.default.useRef(!1), z = t.default.useCallback(e => {
                        T(t => {
                            var a;
                            return (null == (a = t.find(t => t.id === e.id)) ? void 0 : a.delete) || u.dismiss(e.id),
                                t.filter(({ id: t }) => t !== e.id)
                        })
                    }, []);
                    return t.default.useEffect(() => u.subscribe(e => {
                            e.dismiss ? requestAnimationFrame(() => {
                                T(t => t.map(t => t.id === e.id ? {
                                    ...t,
                                    delete: !0
                                } : t))
                            }) : setTimeout(() => {
                                a.default.flushSync(() => {
                                    T(t => {
                                        let a = t.findIndex(t => t.id === e.id);
                                        return -1 !== a ? [...t.slice(0, a), {
                                            ...t[a],
                                            ...e
                                        }, ...t.slice(a + 1)] : [e, ...t]
                                    })
                                })
                            })
                        }), [S]),
                        t.default.useEffect(() => {
                            if ("system" !== p)
                                return void D(p);
                            if ("system" === p && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D("dark") : D("light")),
                                "undefined" == typeof window)
                                return;
                            let e = window.matchMedia("(prefers-color-scheme: dark)");
                            try {
                                e.addEventListener("change", ({ matches: e }) => {
                                    e ? D("dark") : D("light")
                                })
                            } catch (t) {
                                e.addListener(({ matches: e }) => {
                                    try {
                                        e ? D("dark") : D("light")
                                    } catch (e) {
                                        console.error(e)
                                    }
                                })
                            }
                        }, [p]),
                        t.default.useEffect(() => {
                            S.length <= 1 && _(!1)
                        }, [S]),
                        t.default.useEffect(() => {
                            let e = e => {
                                var t, a;
                                i.every(t => e[t] || e.code === t) && (_(!0),
                                        null == (a = B.current) || a.focus()),
                                    "Escape" === e.code && (document.activeElement === B.current || (null == (t = B.current) ? void 0 : t.contains(document.activeElement))) && _(!1)
                            };
                            return document.addEventListener("keydown", e),
                                () => document.removeEventListener("keydown", e)
                        }, [i]),
                        t.default.useEffect(() => {
                            if (B.current)
                                return () => {
                                    U.current && (U.current.focus({
                                            preventScroll: !0
                                        }),
                                        U.current = null,
                                        F.current = !1)
                                }
                        }, [B.current]),
                        t.default.createElement("section", {
                            ref: r,
                            "aria-label": `${j} ${$}`,
                            tabIndex: -1,
                            "aria-live": "polite",
                            "aria-relevant": "additions text",
                            "aria-atomic": "false",
                            suppressHydrationWarning: !0
                        }, A.map((a, r) => {
                            var n;
                            let o, [i, u] = a.split("-");
                            return C.length ? t.default.createElement("ol", {
                                key: a,
                                dir: "auto" === N ? y() : N,
                                tabIndex: -1,
                                ref: B,
                                className: c,
                                "data-sonner-toaster": !0,
                                "data-sonner-theme": O,
                                "data-y-position": i,
                                "data-x-position": u,
                                style: {
                                    "--front-toast-height": `${(null == (n = M[0]) ? void 0 : n.height) || 0}px`,
                                    "--width": "356px",
                                    "--gap": `${E}px`,
                                    ...v,
                                    ...(o = {}, [f, m].forEach((e, t) => {
                                            let a = 1 === t,
                                                r = a ? "--mobile-offset" : "--offset",
                                                n = a ? "16px" : "24px";

                                            function s(e) {
                                                ["top", "right", "bottom", "left"].forEach(t => {
                                                    o[`${r}-${t}`] = "number" == typeof e ? `${e}px` : e
                                                })
                                            }
                                            "number" == typeof e || "string" == typeof e ? s(e) : "object" == typeof e ? ["top", "right", "bottom", "left"].forEach(t => {
                                                void 0 === e[t] ? o[`${r}-${t}`] = n : o[`${r}-${t}`] = "number" == typeof e[t] ? `${e[t]}px` : e[t]
                                            }) : s(n)
                                        }),
                                        o)
                                },
                                onBlur: e => {
                                    F.current && !e.currentTarget.contains(e.relatedTarget) && (F.current = !1,
                                        U.current && (U.current.focus({
                                                preventScroll: !0
                                            }),
                                            U.current = null))
                                },
                                onFocus: e => {
                                    !(e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible) && (F.current || (F.current = !0,
                                        U.current = e.relatedTarget))
                                },
                                onMouseEnter: () => _(!0),
                                onMouseMove: () => _(!0),
                                onMouseLeave: () => {
                                    R || _(!1)
                                },
                                onDragEnd: () => _(!1),
                                onPointerDown: e => {
                                    e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || P(!0)
                                },
                                onPointerUp: () => P(!1)
                            }, C.filter(e => !e.position && 0 === r || e.position === a).map((r, n) => {
                                var o, i;
                                return t.default.createElement(g, {
                                    key: r.id,
                                    icons: k,
                                    index: n,
                                    toast: r,
                                    defaultRichColors: h,
                                    duration: null != (o = null == w ? void 0 : w.duration) ? o : b,
                                    className: null == w ? void 0 : w.className,
                                    descriptionClassName: null == w ? void 0 : w.descriptionClassName,
                                    invert: s,
                                    visibleToasts: x,
                                    closeButton: null != (i = null == w ? void 0 : w.closeButton) ? i : d,
                                    interacting: R,
                                    position: a,
                                    style: null == w ? void 0 : w.style,
                                    unstyled: null == w ? void 0 : w.unstyled,
                                    classNames: null == w ? void 0 : w.classNames,
                                    cancelButtonStyle: null == w ? void 0 : w.cancelButtonStyle,
                                    actionButtonStyle: null == w ? void 0 : w.actionButtonStyle,
                                    closeButtonAriaLabel: null == w ? void 0 : w.closeButtonAriaLabel,
                                    removeToast: z,
                                    toasts: C.filter(e => e.position == r.position),
                                    heights: M.filter(e => e.position == r.position),
                                    setHeights: L,
                                    expandByDefault: l,
                                    gap: E,
                                    expanded: I,
                                    swipeDirections: e.swipeDirections
                                })
                            })) : null
                        }))
                });
                e.s(["Toaster", () => v, "toast", () => m, "useSonner", () => b])
            }, 618566, (e, t, a) => {
                t.exports = e.r(976562)
            }, 37727, e => {
                "use strict";
                let t = (0,
                    e.i(475254).default)("x", [
                    ["path", {
                        d: "M18 6 6 18",
                        key: "1bl5f8"
                    }],
                    ["path", {
                        d: "m6 6 12 12",
                        key: "d8bk6v"
                    }]
                ]);
                e.s(["X", () => t], 37727)
            }, 74255, e => {
                "use strict";
                e.i(247167);
                var t = e.i(843476),
                    a = e.i(271645),
                    r = e.i(37727),
                    n = e.i(531278),
                    s = e.i(475254);
                let o = (0,
                        s.default)("mail", [
                        ["path", {
                            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                            key: "132q7q"
                        }],
                        ["rect", {
                            x: "2",
                            y: "4",
                            width: "20",
                            height: "16",
                            rx: "2",
                            key: "izxlao"
                        }]
                    ]),
                    i = (0,
                        s.default)("circle-check-big", [
                        ["path", {
                            d: "M21.801 10A10 10 0 1 1 17 3.335",
                            key: "yps3ct"
                        }],
                        ["path", {
                            d: "m9 11 3 3L22 4",
                            key: "1pflzl"
                        }]
                    ]);
                var l = (0,
                    a.forwardRef)(({ as: e = "div", ...a }, r) => (0,
                    t.jsx)(e, {
                    ...a,
                    ref: r
                }));
                let d = "onloadTurnstileCallback",
                    c = {
                        normal: {
                            width: 300,
                            height: 65
                        },
                        compact: {
                            width: 150,
                            height: 140
                        },
                        invisible: {
                            width: 0,
                            height: 0,
                            overflow: "hidden"
                        },
                        flexible: {
                            minWidth: 300,
                            width: "100%",
                            height: 65
                        },
                        interactionOnly: {
                            width: "fit-content",
                            height: "auto",
                            display: "flex"
                        }
                    },
                    u = "unloaded",
                    f, m = new Promise((e, t) => {
                        f = {
                                resolve: e,
                                reject: t
                            },
                            "ready" === u && e(void 0)
                    }),
                    p = (e = d) => ("unloaded" === u && (u = "loading",
                            window[e] = () => {
                                f.resolve(),
                                    u = "ready",
                                    delete window[e]
                            }
                        ),
                        m),
                    h = (0,
                        a.forwardRef)((e, r) => {
                        let { scriptOptions: n, options: s = {}, siteKey: o, onWidgetLoad: i, onSuccess: f, onExpire: m, onError: h, onBeforeInteractive: g, onAfterInteractive: y, onUnsupported: b, onTimeout: v, onLoadScript: x, id: w, style: N, as: E = "div", injectScript: k = !0, rerenderOnCallbackChange: j = !1, ...S } = e, T = s.size, C = (0,
                            a.useCallback)(() => void 0 === T ? {} : "execute" === s.execution ? c.invisible : "interaction-only" === s.appearance ? c.interactionOnly : c[T], [s.execution, T, s.appearance]), [A, M] = (0,
                            a.useState)(C()), L = (0,
                            a.useRef)(null), [I, _] = (0,
                            a.useState)(!1), R = (0,
                            a.useRef)(void 0), P = (0,
                            a.useRef)(!1), O = w || "cf-turnstile", D = (0,
                            a.useRef)({
                            onSuccess: f,
                            onError: h,
                            onExpire: m,
                            onBeforeInteractive: g,
                            onAfterInteractive: y,
                            onUnsupported: b,
                            onTimeout: v
                        });
                        (0,
                            a.useEffect)(() => {
                            j || (D.current = {
                                onSuccess: f,
                                onError: h,
                                onExpire: m,
                                onBeforeInteractive: g,
                                onAfterInteractive: y,
                                onUnsupported: b,
                                onTimeout: v
                            })
                        });
                        let B = n ? .id || "cf-turnstile-script",
                            $ = function(e = "cf-turnstile-script") {
                                let [t, r] = (0,
                                    a.useState)(!1);
                                return (0,
                                        a.useEffect)(() => {
                                        let t = () => {
                                                document.getElementById(e) && r(!0)
                                            },
                                            a = new MutationObserver(t);
                                        return a.observe(document, {
                                                childList: !0,
                                                subtree: !0
                                            }),
                                            t(),
                                            () => {
                                                a.disconnect()
                                            }
                                    }, [e]),
                                    t
                            }(B),
                            U = n ? .onLoadCallbackName || "onloadTurnstileCallback",
                            F = s.appearance || "always",
                            z = (0,
                                a.useMemo)(() => ({
                                sitekey: o,
                                action: s.action,
                                cData: s.cData,
                                theme: s.theme || "auto",
                                language: s.language || "auto",
                                tabindex: s.tabIndex,
                                "response-field": s.responseField,
                                "response-field-name": s.responseFieldName,
                                size: function(e) {
                                    if ("invisible" !== e && "interactionOnly" !== e)
                                        return e
                                }(T),
                                retry: s.retry || "auto",
                                "retry-interval": s.retryInterval || 8e3,
                                "refresh-expired": s.refreshExpired || "auto",
                                "refresh-timeout": s.refreshTimeout || "auto",
                                execution: s.execution || "render",
                                appearance: s.appearance || "always",
                                "feedback-enabled": s.feedbackEnabled ? ? !0,
                                callback: e => {
                                    P.current = !0,
                                        j ? f ? .(e) : D.current.onSuccess ? .(e)
                                },
                                "error-callback": j ? h : (...e) => D.current.onError ? .(...e),
                                "expired-callback": j ? m : (...e) => D.current.onExpire ? .(...e),
                                "before-interactive-callback": j ? g : (...e) => D.current.onBeforeInteractive ? .(...e),
                                "after-interactive-callback": j ? y : (...e) => D.current.onAfterInteractive ? .(...e),
                                "unsupported-callback": j ? b : (...e) => D.current.onUnsupported ? .(...e),
                                "timeout-callback": j ? v : (...e) => D.current.onTimeout ? .(...e)
                            }), [s.action, s.appearance, s.cData, s.execution, s.language, s.refreshExpired, s.responseField, s.responseFieldName, s.retry, s.retryInterval, s.tabIndex, s.theme, s.feedbackEnabled, s.refreshTimeout, o, T, j, j ? f : null, j ? h : null, j ? m : null, j ? g : null, j ? y : null, j ? b : null, j ? v : null]),
                            H = (0,
                                a.useCallback)(() => "u" > typeof window && !!window.turnstile, []);
                        return (0,
                                a.useEffect)(function() {
                                k && !I && (p(U),
                                    (({ render: e = "explicit", onLoadCallbackName: t = d, scriptOptions: { nonce: a = "", defer: r = !0, async: n = !0, id: s = "", appendTo: o, onError: i, crossOrigin: l = "" } = {} }) => {
                                        let c = s || "cf-turnstile-script";
                                        if (document.getElementById(c))
                                            return;
                                        let u = document.createElement("script");
                                        u.id = c,
                                            u.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${t}&render=${e}`,
                                            document.querySelector(`script[src="${u.src}"]`) || (u.defer = !!r,
                                                u.async = !!n,
                                                a && (u.nonce = a),
                                                l && (u.crossOrigin = l),
                                                i && (u.onerror = i,
                                                    delete window[t]),
                                                ("body" === o ? document.body : document.getElementsByTagName("head")[0]).appendChild(u))
                                    })({
                                        onLoadCallbackName: U,
                                        scriptOptions: {
                                            ...n,
                                            id: B
                                        }
                                    }))
                            }, [k, I, n, B, U]),
                            (0,
                                a.useEffect)(function() {
                                "ready" !== u && p(U).then(() => _(!0)).catch(console.error)
                            }, [U]),
                            (0,
                                a.useEffect)(function() {
                                if (!L.current || !I)
                                    return;
                                let e = !1;
                                return (async() => {
                                        e || !L.current || (R.current = window.turnstile.render(L.current, z),
                                            R.current && i ? .(R.current))
                                    })(),
                                    () => {
                                        e = !0,
                                            R.current && (window.turnstile.remove(R.current),
                                                P.current = !1)
                                    }
                            }, [O, I, z]),
                            (0,
                                a.useImperativeHandle)(r, () => {
                                let { turnstile: e } = window;
                                return {
                                    getResponse: () => e ? .getResponse && R.current && H() ? e.getResponse(R.current) : void console.warn("Turnstile has not been loaded"),
                                    getResponsePromise: async(e = 3e4, t = 100) => new Promise((a, r) => {
                                        let n, s = async() => {
                                            if (P.current && window.turnstile && R.current)
                                                try {
                                                    let e = window.turnstile.getResponse(R.current);
                                                    return n && clearTimeout(n),
                                                        e ? a(e) : r(Error("No response received"))
                                                } catch (e) {
                                                    return n && clearTimeout(n),
                                                        console.warn("Failed to get response", e),
                                                        r(Error("Failed to get response"))
                                                }
                                            n || = setTimeout(() => {
                                                    n && clearTimeout(n),
                                                        r(Error("Timeout"))
                                                }, e),
                                                await new Promise(e => setTimeout(e, t)),
                                                await s()
                                        };
                                        s()
                                    }),
                                    reset() {
                                        if (!e ? .reset || !R.current || !H())
                                            return void console.warn("Turnstile has not been loaded");
                                        "execute" === s.execution && M(c.invisible);
                                        try {
                                            P.current = !1,
                                                e.reset(R.current)
                                        } catch (e) {
                                            console.warn(`Failed to reset Turnstile widget ${R.current}`, e)
                                        }
                                    },
                                    remove() {
                                        e ? .remove && R.current && H() ? (M(c.invisible),
                                            P.current = !1,
                                            e.remove(R.current),
                                            R.current = null) : console.warn("Turnstile has not been loaded")
                                    },
                                    render() {
                                        if (!e ? .render || !L.current || !H() || R.current)
                                            return void console.warn("Turnstile has not been loaded or container not found");
                                        let t = e.render(L.current, z);
                                        return R.current = t,
                                            R.current && i ? .(R.current),
                                            "execute" !== s.execution && M(T ? c[T] : {}),
                                            t
                                    },
                                    execute() {
                                        "execute" !== s.execution ? console.warn('Execution mode is not set to "execute"') : e ? .execute && L.current && R.current && H() ? (e.execute(L.current),
                                            M(T ? c[T] : {})) : console.warn("Turnstile has not been loaded or container not found")
                                    },
                                    isExpired: () => e ? .isExpired && R.current && H() ? e.isExpired(R.current) : (console.warn("Turnstile has not been loaded"), !1)
                                }
                            }, [R, s.execution, T, z, L, H, I, i]),
                            (0,
                                a.useEffect)(() => {
                                if (I || !$)
                                    return;
                                if (window.turnstile)
                                    return void _(!0);
                                let e = setInterval(() => {
                                    window.turnstile && (_(!0),
                                        clearInterval(e))
                                }, 50);
                                return () => {
                                    clearInterval(e)
                                }
                            }, [I, $]),
                            (0,
                                a.useEffect)(() => {
                                M(C())
                            }, [s.execution, T, F]),
                            (0,
                                a.useEffect)(() => {
                                $ && "function" == typeof x && x()
                            }, [$]),
                            (0,
                                t.jsx)(l, {
                                ref: L,
                                as: E,
                                id: O,
                                style: {
                                    ...A,
                                    ...N
                                },
                                ...S
                            })
                    });
                h.displayName = "Turnstile";
                var g = e.i(161664),
                    y = e.i(647163);
                let b = "0x4AAAAAADXiHseMdN4j1Y_n";

                function v({ isOpen: e, onClose: s, reason: l = "default" }) {
                    let [d, c] = (0,
                        a.useState)(""), [u, f] = (0,
                        a.useState)("email"), [m, p] = (0,
                        a.useState)(""), [v, x] = (0,
                        a.useState)(!1), [w, N] = (0,
                        a.useState)(null), E = (0,
                        a.useRef)(null);
                    (0,
                        a.useEffect)(() => {
                        e && x(!!(0,
                            y.getGuestClaimToken)())
                    }, [e]);
                    let k = (0,
                        a.useCallback)(() => {
                        c(""),
                            f("email"),
                            p(""),
                            N(null),
                            E.current ? .reset()
                    }, []);
                    (0,
                        a.useEffect)(() => {
                        if (!e) {
                            let e = setTimeout(k, 200);
                            return () => clearTimeout(e)
                        }
                    }, [e, k]),
                    (0,
                        a.useEffect)(() => {
                        let t = t => {
                            "Escape" === t.key && e && s()
                        };
                        return document.addEventListener("keydown", t),
                            () => document.removeEventListener("keydown", t)
                    }, [e, s]);
                    let j = async e => {
                        if ((e.preventDefault(),
                                d.trim()) && (!b || w)) {
                            f("sending"),
                                p("");
                            try {
                                let e = await fetch("/api/auth/hash-sign-in", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        email: d.trim(),
                                        turnstileToken: w
                                    })
                                });
                                if (!e.ok) {
                                    let t = await e.json();
                                    f("error"),
                                        p(t.error || "Failed to send magic link"),
                                        N(null),
                                        E.current ? .reset();
                                    return
                                }
                                f("sent")
                            } catch {
                                f("error"),
                                    p("Something went wrong. Please try again."),
                                    N(null),
                                    E.current ? .reset()
                            }
                        }
                    };
                    return e ? (0,
                        t.jsx)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                        onClick: s,
                        children: (0,
                            t.jsxs)("div", {
                            className: "relative w-full max-w-md rounded-xl border border-outline bg-surface p-6 text-left text-prose shadow-xl",
                            onClick: e => e.stopPropagation(),
                            children: [(0,
                                t.jsx)("button", {
                                onClick: s,
                                className: "absolute right-4 top-4 p-1.5 rounded-lg hover:bg-surface-raised transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong",
                                "aria-label": "Close",
                                children: (0,
                                    t.jsx)(r.X, {
                                    className: "h-5 w-5"
                                })
                            }), (0,
                                t.jsx)("h2", {
                                className: "type-section-title mb-4",
                                children: "heart" === l ? "Sign in to send a heart" : "Sign In"
                            }), g.FEATURES.GUEST_ROLL_CLAIMING_ENABLED && v && "email" === u && (0,
                                t.jsxs)("div", {
                                className: "mb-4 rounded-lg border border-success-outline bg-success-surface p-3",
                                children: [(0,
                                    t.jsx)("p", {
                                    className: "type-compact-title text-success-text",
                                    children: "Save your roll!"
                                }), (0,
                                    t.jsx)("p", {
                                    className: "type-meta text-success mt-1",
                                    children: "Sign in to link your recent roll to your account. Only your most recent roll can be saved."
                                })]
                            }), "email" === u && (0,
                                t.jsxs)("form", {
                                onSubmit: j,
                                children: [(0,
                                    t.jsx)("label", {
                                    className: "type-compact-title mb-2 block",
                                    children: "Email Address"
                                }), (0,
                                    t.jsx)("input", {
                                    type: "email",
                                    value: d,
                                    onChange: e => c(e.target.value),
                                    placeholder: "you@example.com",
                                    className: "polished-input mb-4 w-full",
                                    autoFocus: !0,
                                    required: !0
                                }), b && (0,
                                    t.jsx)("div", {
                                    className: "mb-4 flex justify-center",
                                    children: (0,
                                        t.jsx)(h, {
                                        ref: E,
                                        siteKey: b,
                                        onSuccess: N,
                                        onError: () => N(null),
                                        onExpire: () => N(null),
                                        options: {
                                            theme: "auto"
                                        }
                                    })
                                }), (0,
                                    t.jsx)("button", {
                                    type: "submit",
                                    className: "polished-button-primary w-full py-3 disabled:cursor-not-allowed disabled:opacity-50",
                                    disabled: !!b && !w,
                                    children: "Send Magic Link"
                                }), (0,
                                    t.jsx)("p", {
                                    className: "type-meta mt-4 text-prose-3",
                                    children: "We'll email you a link to sign in or create your account. No password needed."
                                }), (0,
                                    t.jsxs)("p", {
                                    className: "type-meta mt-2 text-prose-3",
                                    children: ["We never store your email.", " ", (0,
                                        t.jsx)("a", {
                                        href: "/privacy",
                                        className: "underline hover:text-prose-2",
                                        children: "Read more"
                                    })]
                                })]
                            }), "sending" === u && (0,
                                t.jsxs)("div", {
                                className: "flex flex-col items-center py-8",
                                children: [(0,
                                    t.jsx)(n.Loader2, {
                                    className: "mb-4 h-12 w-12 animate-spin"
                                }), (0,
                                    t.jsx)("p", {
                                    className: "type-ui",
                                    children: "Sending magic link..."
                                })]
                            }), "sent" === u && (0,
                                t.jsxs)("div", {
                                className: "flex flex-col items-center py-8",
                                children: [(0,
                                    t.jsx)(i, {
                                    className: "mb-4 h-12 w-12 text-success"
                                }), (0,
                                    t.jsx)("p", {
                                    className: "type-compact-title mb-2",
                                    children: "Check your email"
                                }), (0,
                                    t.jsxs)("p", {
                                    className: "type-meta text-center text-prose-3",
                                    children: ["We sent a magic link to", " ", (0,
                                        t.jsx)("span", {
                                        className: "font-bold",
                                        children: d
                                    })]
                                }), (0,
                                    t.jsx)("button", {
                                    onClick: s,
                                    className: "polished-button-secondary mt-6",
                                    children: "Close"
                                })]
                            }), "error" === u && (0,
                                t.jsxs)("div", {
                                className: "flex flex-col items-center py-8",
                                children: [(0,
                                    t.jsx)(o, {
                                    className: "mb-4 h-12 w-12 text-red-600"
                                }), (0,
                                    t.jsx)("p", {
                                    className: "type-compact-title mb-2 text-red-600",
                                    children: "Error"
                                }), (0,
                                    t.jsx)("p", {
                                    className: "type-meta mb-4 text-center text-prose-2",
                                    children: m
                                }), (0,
                                    t.jsx)("button", {
                                    onClick: k,
                                    className: "polished-button-secondary",
                                    children: "Try Again"
                                })]
                            })]
                        })
                    }) : null
                }
                e.s(["AuthModal", () => v], 74255)
            }, 664030, e => {
                "use strict";
                let t = (0,
                    e.i(475254).default)("trophy", [
                    ["path", {
                        d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
                        key: "1n3hpd"
                    }],
                    ["path", {
                        d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
                        key: "rfe1zi"
                    }],
                    ["path", {
                        d: "M18 9h1.5a1 1 0 0 0 0-5H18",
                        key: "7xy6bh"
                    }],
                    ["path", {
                        d: "M4 22h16",
                        key: "57wxv0"
                    }],
                    ["path", {
                        d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
                        key: "1mhfuq"
                    }],
                    ["path", {
                        d: "M6 9H4.5a1 1 0 0 1 0-5H6",
                        key: "tex48p"
                    }]
                ]);
                e.s(["Trophy", () => t], 664030)
            }, 761911, e => {
                "use strict";
                let t = (0,
                    e.i(475254).default)("users", [
                    ["path", {
                        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                        key: "1yyitq"
                    }],
                    ["path", {
                        d: "M16 3.128a4 4 0 0 1 0 7.744",
                        key: "16gr8j"
                    }],
                    ["path", {
                        d: "M22 21v-2a4 4 0 0 0-3-3.87",
                        key: "kshegd"
                    }],
                    ["circle", {
                        cx: "9",
                        cy: "7",
                        r: "4",
                        key: "nufk8"
                    }]
                ]);
                e.s(["Users", () => t], 761911)
            }, 879002, e => {
                "use strict";
                let t = (0,
                    e.i(475254).default)("user-plus", [
                    ["path", {
                        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                        key: "1yyitq"
                    }],
                    ["circle", {
                        cx: "9",
                        cy: "7",
                        r: "4",
                        key: "nufk8"
                    }],
                    ["line", {
                        x1: "19",
                        x2: "19",
                        y1: "8",
                        y2: "14",
                        key: "1bvyxn"
                    }],
                    ["line", {
                        x1: "22",
                        x2: "16",
                        y1: "11",
                        y2: "11",
                        key: "1shjgl"
                    }]
                ]);
                e.s(["UserPlus", () => t], 879002)
            }, 284614, e => {
                "use strict";
                let t = (0,
                    e.i(475254).default)("user", [
                    ["path", {
                        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                        key: "975kel"
                    }],
                    ["circle", {
                        cx: "12",
                        cy: "7",
                        r: "4",
                        key: "17ys0d"
                    }]
                ]);
                e.s(["User", () => t], 284614)
            }, 159551, e => {
                "use strict";
                async function t(e = !0) {
                    if (!("serviceWorker" in navigator))
                        return;
                    let a = await navigator.serviceWorker.getRegistration("/"),
                        r = await a ? .pushManager ? .getSubscription();
                    if (r) {
                        if (e) {
                            let e = fetch("/api/push-subscriptions", {
                                method: "DELETE",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    endpoint: r.endpoint
                                }),
                                keepalive: !0
                            }).catch(() => void 0);
                            await Promise.race([e, new Promise(e => window.setTimeout(e, 1500))])
                        }
                        await Promise.race([r.unsubscribe().catch(() => !1), new Promise(e => window.setTimeout(e, 1500))])
                    }
                }
                e.s(["unsubscribeCurrentBrowserFromPush", () => t])
            }, 248886, e => {
                "use strict";
                var t = e.i(843476),
                    a = e.i(271645),
                    r = e.i(161664),
                    n = e.i(977324);
                let s = (0,
                    a.createContext)({
                    unreadCount: 0,
                    refetch: () => {}
                });

                function o() {
                    return (0,
                        a.useContext)(s)
                }

                function i({ children: e }) {
                    let [o, i] = (0,
                        a.useState)(0), { isAuthenticated: l, user: d } = (0,
                        n.useAuth)(), c = (0,
                        r.hasExperimentAccess)(d ? .canAccessExperiments) ? r.FRIENDS.EXPERIMENT_NOTIFICATION_POLL_INTERVAL : r.FRIENDS.NOTIFICATION_POLL_INTERVAL, u = (0,
                        a.useCallback)(async() => {
                        if (!l)
                            return void i(0);
                        try {
                            let e = await fetch("/api/notifications?count_only=true");
                            if (e.ok) {
                                let t = await e.json();
                                i(t.unreadCount)
                            }
                        } catch {}
                    }, [l]);
                    return (0,
                            a.useEffect)(() => {
                            u()
                        }, [u]),
                        (0,
                            a.useEffect)(() => {
                            if (!l)
                                return;
                            let e = null,
                                t = () => {
                                    e || (e = setInterval(u, c))
                                },
                                a = () => {
                                    e && (clearInterval(e),
                                        e = null)
                                },
                                r = () => {
                                    document.hidden ? a() : (u(),
                                        t())
                                };
                            return t(),
                                document.addEventListener("visibilitychange", r),
                                () => {
                                    a(),
                                        document.removeEventListener("visibilitychange", r)
                                }
                        }, [l, u, c]),
                        (0,
                            t.jsx)(s.Provider, {
                            value: {
                                unreadCount: o,
                                refetch: u
                            },
                            children: e
                        })
                }
                e.s(["NotificationProvider", () => i, "useNotifications", () => o])
            }, 738974, e => {
                "use strict";
                var t = e.i(271645),
                    a = e.i(846696),
                    r = e.i(672136),
                    n = e.i(775357),
                    s = e.i(159551);

                function o() {
                    let e = (0,
                        t.useRef)(!1);
                    return (0,
                            t.useEffect)(() => {
                            if (e.current || (e.current = !0, !(0,
                                    n.readUserHintCookie)()))
                                return;
                            let t = !1;
                            return r.authClient.getSession().then(e => {
                                    if (t || e.data ? .user || e.error)
                                        return;
                                    (0,
                                        s.unsubscribeCurrentBrowserFromPush)(!1),
                                    (0,
                                        n.clearUserHintCookie)(),
                                    (0,
                                        a.toast)("Your session ended — please sign in again.");
                                    let o = () => window.location.reload();
                                    r.authClient.signOut({
                                        fetchOptions: {
                                            onResponse: o
                                        }
                                    }).catch(o)
                                }),
                                () => {
                                    t = !0
                                }
                        }, []),
                        null
                }
                e.s(["SessionGuard", () => o])
            }, 912826, e => {
                "use strict";
                var t = e.i(843476),
                    a = e.i(271645),
                    r = e.i(4080),
                    n = e.i(475254);
                let s = (0,
                    n.default)("log-in", [
                    ["path", {
                        d: "m10 17 5-5-5-5",
                        key: "1bsop3"
                    }],
                    ["path", {
                        d: "M15 12H3",
                        key: "6jk70r"
                    }],
                    ["path", {
                        d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
                        key: "u53s6r"
                    }]
                ]);
                var o = e.i(531278),
                    i = e.i(761911);
                let l = (0,
                        n.default)("layout-list", [
                        ["rect", {
                            width: "7",
                            height: "7",
                            x: "3",
                            y: "3",
                            rx: "1",
                            key: "1g98yp"
                        }],
                        ["rect", {
                            width: "7",
                            height: "7",
                            x: "3",
                            y: "14",
                            rx: "1",
                            key: "1bb6yr"
                        }],
                        ["path", {
                            d: "M14 4h7",
                            key: "3xa0d5"
                        }],
                        ["path", {
                            d: "M14 9h7",
                            key: "1icrd9"
                        }],
                        ["path", {
                            d: "M14 15h7",
                            key: "1mj8o2"
                        }],
                        ["path", {
                            d: "M14 20h7",
                            key: "11slyb"
                        }]
                    ]),
                    d = (0,
                        n.default)("circle-question-mark", [
                        ["circle", {
                            cx: "12",
                            cy: "12",
                            r: "10",
                            key: "1mglay"
                        }],
                        ["path", {
                            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
                            key: "1u773s"
                        }],
                        ["path", {
                            d: "M12 17h.01",
                            key: "p32p05"
                        }]
                    ]);
                var c = e.i(664030);
                let u = (0,
                        n.default)("menu", [
                        ["path", {
                            d: "M4 5h16",
                            key: "1tepv9"
                        }],
                        ["path", {
                            d: "M4 12h16",
                            key: "1lakjw"
                        }],
                        ["path", {
                            d: "M4 19h16",
                            key: "1djgab"
                        }]
                    ]),
                    f = (0,
                        n.default)("settings", [
                        ["path", {
                            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                            key: "1i5ecw"
                        }],
                        ["circle", {
                            cx: "12",
                            cy: "12",
                            r: "3",
                            key: "1v7zrd"
                        }]
                    ]);
                var m = e.i(284614),
                    p = e.i(977324),
                    h = e.i(74255),
                    g = e.i(305622),
                    y = e.i(647163);

                function b() {
                    let { user: e } = (0,
                        p.useAuth)(), { resolvedTheme: a } = (0,
                        g.useTheme)();
                    if (!e)
                        return null;
                    let r = e.displayName || "Profile",
                        n = !e.displayName;
                    return (0,
                        t.jsxs)("a", {
                        href: "/profile",
                        className: (0,
                            y.cn)("type-ui type-display-name relative flex items-center rounded-lg p-2 sm:px-3", "hover:bg-surface-raised transition-colors", "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"),
                        children: [(0,
                            t.jsx)(m.User, {
                            className: "h-4 w-4 sm:hidden"
                        }), (0,
                            t.jsx)("span", {
                            className: "hidden sm:inline max-w-[120px] truncate",
                            style: (0,
                                y.getDisplayNameStyle)(e.displayNameColor, "dark" === a),
                            children: r
                        }), n && (0,
                            t.jsx)("span", {
                            className: "absolute top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"
                        })]
                    })
                }
                let v = (0,
                    n.default)("bell", [
                    ["path", {
                        d: "M10.268 21a2 2 0 0 0 3.464 0",
                        key: "vwvbt9"
                    }],
                    ["path", {
                        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
                        key: "11g9vi"
                    }]
                ]);
                var x = e.i(248886);

                function w({ onClick: e }) {
                    let { unreadCount: a } = (0,
                        x.useNotifications)();
                    return (0,
                            t.jsxs)("button", {
                                onClick: e,
                                className: "relative p-2 hover:bg-surface-raised rounded-lg transition-colors",
                                "aria-label": `Notifications${a > 0 ? ` (${a} unread)` : ""}`,
            children: [(0,
            t.jsx)(v, {
                className: "h-4 w-4"
            }), a > 0 && (0,
            t.jsx)("span", {
                className: "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger-accent px-1 text-[10px] font-bold text-white",
                children: a > 99 ? "99+" : a
            })]
        })
    }
    var N = e.i(618566)
      , E = e.i(478446)
      , k = e.i(790597)
      , j = e.i(879002);
    let S = (0,
    n.default)("user-check", [["path", {
        d: "m16 11 2 2 4-4",
        key: "9rsbq5"
    }], ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }], ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }]]);
    function T({id: e, type: r, referenceId: n, metadata: s, presentation: i, read: l, createdAt: d, actor: c, onMarkRead: u, onNavigate: f}) {
        var m;
        let p, h, g, y, b = (0,
        N.useRouter)(), [x,w] = (0,
        a.useState)(!1), T = function(e) {
            switch (e) {
            case "friend_request":
                return j.UserPlus;
            case "friend_accepted":
                return S;
            case "heart_received":
                return k.Heart;
            default:
                return v
            }
        }(r), C = i?.message ?? function(e, t, a) {
            switch (e) {
            case "friend_request":
                return "sent you a friend request";
            case "friend_accepted":
                return "accepted your friend request";
            case "heart_received":
                if (a)
                    return `liked your ${a}`;
                if ("roll" === t)
                    return "liked your roll";
                return "liked your activity";
            default:
                return "interacted with you"
            }
        }(r, s?.activityType, s?.activityLabel), A = (m = new Date(d),
        y = Math.floor((g = Math.floor((h = Math.floor((p = Math.floor((new Date().getTime() - m.getTime()) / 1e3)) / 60)) / 60)) / 24),
        p < 60 ? "just now" : h < 60 ? `${h}m ago` : g < 24 ? `${g}h ago` : y < 7 ? `${y}d ago` : m.toLocaleDateString());
        async function M() {
            if (!l && u && u(e),
            i?.href)
                f?.(),
                b.push(i.href);
            else if ("heart_received" === r && n) {
                w(!0);
                try {
                    let e = await fetch(`/api/activity/${n}`);
                    if (e.ok) {
                        let t = await e.json();
                        f?.(),
                        b.push(`/u/${t.username}/roll/${t.rollNumber}`)
                    }
                } catch {} finally {
                    w(!1)
                }
            } else
                "friend_request" === r ? (f?.(),
                b.push("/friends?tab=requests")) : "friend_accepted" === r && c && (f?.(),
                b.push(`/u/${c.displayName}`))
        }
        return (0,
        t.jsx)("div", {
            onClick: M,
            className: `p-3 border-b border-outline-subtle last:border-b-0 cursor-pointer transition-colors duration-100 ${!l ? "bg-info-surface hover:bg-info-surface-hover" : "hover:bg-surface-raised"} ${x ? "opacity-50" : ""}`,
            children: (0,
            t.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [(0,
                t.jsx)("div", {
                    className: "flex-shrink-0 mt-0.5",
                    children: x ? (0,
                    t.jsx)(o.Loader2, {
                        className: "h-4 w-4 text-prose-3 animate-spin"
                    }) : (0,
                    t.jsx)(T, {
                        className: "h-4 w-4 text-prose-3"
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "flex-1 min-w-0",
                    children: [(0,
                    t.jsxs)("p", {
                        className: "type-ui",
                        children: [c ? (0,
                        t.jsx)(E.SocialDisplayName, {
                            displayName: c.displayName,
                            color: c.displayNameColor,
                            favoriteBadgeEmojis: c.favoriteBadgeEmojis,
                            href: `/u/${c.displayName}`,
                            className: "font-semibold",
                            onClick: e => e.stopPropagation()
                        }) : (0,
                        t.jsx)("span", {
                            className: "font-semibold",
                            children: "Someone"
                        }), " ", (0,
                        t.jsx)("span", {
                            className: "text-prose-2",
                            children: C
                        })]
                    }), (0,
                    t.jsx)("p", {
                        className: "type-meta text-prose-3 mt-0.5",
                        children: A
                    })]
                }), !l && (0,
                t.jsx)("div", {
                    className: "flex-shrink-0",
                    children: (0,
                    t.jsx)("div", {
                        className: "h-2 w-2 rounded-full bg-blue-500"
                    })
                })]
            })
        })
    }
    function C() {
        let[e,n] = (0,
        a.useState)(!1)
          , [s,o] = (0,
        a.useState)([])
          , [i,l] = (0,
        a.useState)(!1)
          , d = (0,
        a.useRef)(null)
          , c = (0,
        a.useRef)(!1)
          , {refetch: u} = (0,
        x.useNotifications)();
        async function f() {
            l(!0);
            try {
                let e = await fetch("/api/notifications?limit=10");
                if (e.ok) {
                    let t = await e.json();
                    o(t.notifications)
                }
            } catch {} finally {
                l(!1)
            }
        }
        async function m(e) {
            o(t => t.map(t => t.id === e ? {
                ...t,
                read: !0
            } : t));
            try {
                await fetch("/api/notifications/read", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        notificationIds: [e]
                    })
                }),
                u()
            } catch {
                o(t => t.map(t => t.id === e ? {
                    ...t,
                    read: !1
                } : t))
            }
        }
        async function p() {
            o(e => e.map(e => ({
                ...e,
                read: !0
            })));
            try {
                await fetch("/api/notifications/read", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({})
                }),
                u()
            } catch {
                f()
            }
        }
        (0,
        a.useEffect)( () => {
            function t(e) {
                d.current && !d.current.contains(e.target) && n(!1)
            }
            return e && document.addEventListener("mousedown", t),
            () => {
                document.removeEventListener("mousedown", t)
            }
        }
        , [e]),
        (0,
        a.useEffect)( () => {
            e && f()
        }
        , [e]),
        (0,
        a.useEffect)( () => {
            if (!e) {
                c.current = !1;
                return
            }
            if (i || c.current || !s.some(e => !e.read))
                return;
            let t = setTimeout( () => {
                c.current = !0,
                p()
            }
            , 750);
            return () => clearTimeout(t)
        }
        , [e, i, s]);
        let h = s.filter(e => !e.read).length;
        return (0,
        t.jsxs)("div", {
            className: "relative",
            ref: d,
            children: [(0,
            t.jsx)(w, {
                onClick: () => n(!e)
            }), e && (0,
            t.jsxs)("div", {
                className: "fixed sm:absolute right-2 sm:right-0 left-2 sm:left-auto top-14 sm:top-full sm:mt-2 sm:w-96 rounded-lg border border-outline bg-surface shadow-xl z-50 overflow-hidden",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between p-3 border-b border-outline-subtle",
                    children: [(0,
                    t.jsx)("h3", {
                        className: "type-subsection-title",
                        children: "Notifications"
                    }), h > 0 && (0,
                    t.jsx)("button", {
                        onClick: p,
                        className: "type-meta text-prose-3 hover:text-prose",
                        children: "Mark all read"
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "max-h-80 overflow-y-auto",
                    children: i ? (0,
                    t.jsx)("div", {
                        className: "type-ui p-4 text-center text-prose-3",
                        children: "Loading..."
                    }) : 0 === s.length ? (0,
                    t.jsx)("div", {
                        className: "type-ui p-4 text-center text-prose-3",
                        children: "No notifications yet"
                    }) : s.map(e => (0,
                    t.jsx)(T, {
                        ...e,
                        onMarkRead: m,
                        onNavigate: () => n(!1)
                    }, e.id))
                }), s.length > 0 && (0,
                t.jsx)("div", {
                    className: "p-2 border-t border-outline-subtle",
                    children: (0,
                    t.jsx)(r.default, {
                        href: "/friends",
                        className: "type-meta block text-center text-prose-3 hover:text-prose",
                        onClick: () => n(!1),
                        children: "View all friend activity"
                    })
                })]
            })]
        })
    }
    let A = "type-ui flex w-full items-center gap-2 whitespace-nowrap px-4 py-2.5 transition-colors hover:bg-surface-raised";
    function M() {
        return (0,
        t.jsx)("svg", {
            className: "h-4 w-4",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": "true",
            children: (0,
            t.jsx)("path", {
                d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
            })
        })
    }
    function L({isAuthenticated: e, onNavigate: a}) {
        return (0,
        t.jsxs)("nav", {
            id: "mobile-navigation-menu",
            "aria-label": "Menu",
            className: "absolute right-0 top-full z-50 mt-1 overflow-hidden rounded-lg border border-outline bg-surface shadow-lg",
            children: [(0,
            t.jsxs)("div", {
                className: "min-[340px]:hidden",
                children: [e && (0,
                t.jsxs)(r.default, {
                    href: "/profile",
                    className: A,
                    onClick: a,
                    children: [(0,
                    t.jsx)(m.User, {
                        className: "h-4 w-4",
                        "aria-hidden": "true"
                    }), "Profile"]
                }), (0,
                t.jsxs)(r.default, {
                    href: "/settings",
                    className: A,
                    onClick: a,
                    children: [(0,
                    t.jsx)(f, {
                        className: "h-4 w-4",
                        "aria-hidden": "true"
                    }), "Settings"]
                })]
            }), (0,
            t.jsxs)(r.default, {
                href: "/leaderboard",
                className: A,
                onClick: a,
                children: [(0,
                t.jsx)(c.Trophy, {
                    className: "h-4 w-4",
                    "aria-hidden": "true"
                }), "Leaderboard"]
            }), e && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)(r.default, {
                    href: "/feed",
                    className: A,
                    onClick: a,
                    children: [(0,
                    t.jsx)(l, {
                        className: "h-4 w-4",
                        "aria-hidden": "true"
                    }), "Feed"]
                }), (0,
                t.jsxs)(r.default, {
                    href: "/friends",
                    className: A,
                    onClick: a,
                    children: [(0,
                    t.jsx)(i.Users, {
                        className: "h-4 w-4",
                        "aria-hidden": "true"
                    }), "Friends"]
                })]
            }), (0,
            t.jsx)("div", {
                className: "min-[340px]:hidden",
                children: (0,
                t.jsxs)(r.default, {
                    href: "/about",
                    className: A,
                    onClick: a,
                    children: [(0,
                    t.jsx)(d, {
                        className: "h-4 w-4",
                        "aria-hidden": "true"
                    }), "About"]
                })
            })]
        })
    }
    function I() {
        let {isAuthenticated: e, isLoading: n} = (0,
        p.useAuth)()
          , [m,g] = (0,
        a.useState)(!1)
          , [v,x] = (0,
        a.useState)(!1)
          , w = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let e = e => {
                w.current && !w.current.contains(e.target) && x(!1)
            }
            ;
            return document.addEventListener("mousedown", e),
            () => document.removeEventListener("mousedown", e)
        }
        , []),
        (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("header", {
                className: "bg-site-bg text-prose",
                children: (0,
                t.jsxs)("div", {
                    className: "flex w-full items-center justify-between py-1 pe-2 ps-6 sm:ps-4",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "flex items-center sm:gap-1",
                        children: [(0,
                        t.jsx)(r.default, {
                            href: "/",
                            className: "text-lg font-bold tracking-widest hover:text-prose-2 transition-colors normal-case",
                            children: "RNGdle"
                        }), (0,
                        t.jsx)(r.default, {
                            href: "/about",
                            className: "p-1 text-prose-3 transition-colors hover:text-black max-[339px]:hidden dark:hover:text-white",
                            "aria-label": "About",
                            children: (0,
                            t.jsx)(d, {
                                className: "h-4 w-4"
                            })
                        }), (0,
                        t.jsx)("a", {
                            href: "https://discord.gg/yfMCSV6E6R",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "p-1 text-prose-3 transition-colors hover:text-black sm:mr-2 dark:hover:text-white",
                            "aria-label": "Discord",
                            children: (0,
                            t.jsx)(M, {})
                        }), (0,
                        t.jsxs)(r.default, {
                            href: "/leaderboard",
                            className: "hidden items-center gap-1 rounded-lg p-2 transition-colors hover:bg-surface-raised sm:flex",
                            children: [(0,
                            t.jsx)(c.Trophy, {
                                className: "h-4 w-4"
                            }), (0,
                            t.jsx)("span", {
                                className: "type-meta font-medium",
                                children: "Leaderboard"
                            })]
                        }), !n && e && (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsxs)(r.default, {
                                href: "/feed",
                                className: "hidden items-center gap-1 rounded-lg p-2 transition-colors hover:bg-surface-raised sm:flex",
                                children: [(0,
                                t.jsx)(l, {
                                    className: "h-4 w-4"
                                }), (0,
                                t.jsx)("span", {
                                    className: "type-meta font-medium",
                                    children: "Feed"
                                })]
                            }), (0,
                            t.jsxs)(r.default, {
                                href: "/friends",
                                className: "hidden items-center gap-1 rounded-lg p-2 transition-colors hover:bg-surface-raised sm:flex",
                                children: [(0,
                                t.jsx)(i.Users, {
                                    className: "h-4 w-4"
                                }), (0,
                                t.jsx)("span", {
                                    className: "type-meta font-medium",
                                    children: "Friends"
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [(0,
                        t.jsx)(r.default, {
                            href: "/settings",
                            className: "rounded-lg p-2 transition-colors hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong max-[339px]:hidden",
                            "aria-label": "Settings",
                            title: "Settings",
                            children: (0,
                            t.jsx)(f, {
                                className: "h-4 w-4",
                                "aria-hidden": "true"
                            })
                        }), n ? (0,
                        t.jsx)("div", {
                            className: "flex items-center gap-2 px-3 py-2",
                            children: (0,
                            t.jsx)(o.Loader2, {
                                className: "h-4 w-4 animate-spin"
                            })
                        }) : (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsxs)("div", {
                                ref: w,
                                className: "relative max-[339px]:order-last sm:hidden",
                                children: [(0,
                                t.jsx)("button", {
                                    onClick: () => x(!v),
                                    className: "cursor-pointer rounded-lg p-2 transition-colors hover:bg-surface-raised",
                                    "aria-label": "Menu",
                                    "aria-expanded": v,
                                    "aria-controls": "mobile-navigation-menu",
                                    children: (0,
                                    t.jsx)(u, {
                                        className: "h-4 w-4",
                                        "aria-hidden": "true"
                                    })
                                }), v && (0,
                                t.jsx)(L, {
                                    isAuthenticated: e,
                                    onNavigate: () => x(!1)
                                })]
                            }), e ? (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                t.jsx)(C, {}), (0,
                                t.jsx)("div", {
                                    className: "max-[339px]:hidden",
                                    children: (0,
                                    t.jsx)(b, {})
                                })]
                            }) : (0,
                            t.jsxs)("button", {
                                onClick: () => g(!0),
                                className: (0,
                                y.cn)("type-button flex items-center gap-2 px-3 py-2 cursor-pointer", "rounded-lg border border-outline bg-surface", "hover:border-outline-strong hover:shadow-sm active:scale-[0.98] transition-all", "focus:outline-none focus:ring-2 focus:ring-outline-strong focus:ring-offset-2"),
                                children: [(0,
                                t.jsx)(s, {
                                    className: "h-4 w-4"
                                }), "Sign In"]
                            })]
                        })]
                    })]
                })
            }), (0,
            t.jsx)(h.AuthModal, {
                isOpen: m,
                onClose: () => g(!1)
            })]
        })
    }
    e.s(["AuthHeader", () => I, "HeaderMenu", () => L], 912826)
}
, 182374, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(977324)
      , n = e.i(879002)
      , s = e.i(37727);
    function o() {
        let {user: e, isAuthenticated: o, isLoading: i} = (0,
        r.useAuth)()
          , [l,d] = (0,
        a.useState)(!1);
        return i || !o || e?.displayName || l ? null : (0,
        t.jsx)("div", {
            className: "bg-amber-100 border-b-2 border-amber-300 px-4 py-2",
            children: (0,
            t.jsxs)("div", {
                className: "flex items-center justify-center gap-2 text-sm text-amber-800",
                children: [(0,
                t.jsx)(n.UserPlus, {
                    className: "h-4 w-4 flex-shrink-0"
                }), (0,
                t.jsxs)("span", {
                    children: [(0,
                    t.jsx)("a", {
                        href: "/profile",
                        className: "font-bold underline underline-offset-2 hover:text-amber-900",
                        children: "Set a username"
                    }), " ", "to unlock social features"]
                }), (0,
                t.jsx)("button", {
                    onClick: () => d(!0),
                    className: "ml-2 p-0.5 rounded-sm hover:bg-amber-200 transition-colors",
                    "aria-label": "Dismiss",
                    children: (0,
                    t.jsx)(s.X, {
                        className: "h-4 w-4"
                    })
                })]
            })
        })
    }
    e.s(["UsernameNudgeBanner", () => o])
}
, 630679, e => {
    "use strict";
    var t = e.i(271645);
    function a() {
        return (0,
        t.useEffect)( () => {
            "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then(e => {
                document.addEventListener("visibilitychange", () => {
                    "visible" === document.visibilityState && e.update()
                }
                )
            }
            )
        }
        , []),
        null
    }
    e.s(["ServiceWorkerRegistration", () => a])
}
]);
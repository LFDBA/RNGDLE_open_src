(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 95187, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = {
        callServer: function() {
            return r.callServer
        },
        createServerReference: function() {
            return n.createServerReference
        },
        findSourceMapURL: function() {
            return i.findSourceMapURL
        }
    };
    for (var s in l)
        Object.defineProperty(a, s, {
            enumerable: !0,
            get: l[s]
        });
    let r = e.r(132120),
        i = e.r(92245),
        n = e.r(235326)
}, 643531, e => {
    "use strict";
    let t = (0,
        e.i(475254).default)("check", [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ]);
    e.s(["Check", () => t], 643531)
}, 676525, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(647163),
        l = e.i(531278),
        s = e.i(271645);
    let r = {
            primary: "polished-button-primary",
            secondary: "polished-button-secondary",
            danger: "polished-button-danger",
            "danger-solid": "polished-button-danger-solid"
        },
        i = (0,
            s.forwardRef)(function({ variant: e = "primary", loading: s = !1, className: i, children: n, disabled: o, ...c }, d) {
            return (0,
                t.jsx)("button", {
                ref: d,
                className: (0,
                    a.cn)(r[e], "disabled:opacity-50 disabled:cursor-not-allowed", i),
                disabled: o || s,
                ...c,
                children: s ? (0,
                    t.jsx)(l.Loader2, {
                    className: "h-5 w-5 animate-spin mx-auto"
                }) : n
            })
        });
    e.s(["Button", 0, i])
}, 677405, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(271645),
        l = e.i(790597),
        s = e.i(531278),
        r = e.i(647163),
        i = e.i(478446);

    function n({ activityId: n, initialHearted: o, initialCount: c, onToggle: d }) {
        let [u, m] = (0,
            a.useState)(o), [p, x] = (0,
            a.useState)(c), [f, h] = (0,
            a.useTransition)(), [y, g] = (0,
            a.useState)(!1), [v, b] = (0,
            a.useState)(!1), [j, N] = (0,
            a.useState)(null), [R, w] = (0,
            a.useState)(!1), C = (0,
            a.useRef)(null);
        async function B() {
            g(!0),
                setTimeout(() => g(!1), 300);
            let t = !u,
                a = t ? p + 1 : p - 1;
            m(t),
                x(a),
                d ? .(n, t, a),
                N(null),
                h(async() => {
                    try {
                        let { toggleHeart: t } = await e.A(876962), a = await t(n);
                        m(a.hearted),
                            x(a.heartCount),
                            d ? .(n, a.hearted, a.heartCount)
                    } catch {
                        m(!t),
                            x(p),
                            d ? .(n, !t, p)
                    }
                })
        }
        async function S(e) {
            if (e.stopPropagation(),
                v)
                return void b(!1);
            if (b(!0), !j) {
                w(!0);
                try {
                    let e = await fetch(`/api/activity/${n}/hearts`);
                    if (e.ok) {
                        let t = await e.json();
                        N(t.hearts)
                    }
                } catch {} finally {
                    w(!1)
                }
            }
        }
        return (0,
                a.useEffect)(() => {
                if (v)
                    return document.addEventListener("click", e),
                        () => document.removeEventListener("click", e);

                function e(e) {
                    C.current ? .contains(e.target) || b(!1)
                }
            }, [v]),
            (0,
                t.jsxs)("div", {
                ref: C,
                className: "relative inline-flex flex-col items-end",
                children: [(0,
                    t.jsxs)("div", {
                    className: (0,
                        r.cn)("inline-flex items-center rounded-full text-xs transition-all h-[22px]", u ? "border border-heart-outline bg-heart-surface text-heart" : "text-prose-3 hover:text-heart hover:bg-surface-raised"),
                    children: [p > 0 && (0,
                        t.jsx)("button", {
                        onClick: S,
                        className: "pl-2 py-0.5 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong rounded-full",
                        "aria-label": `${p} likes, click to see who`,
                        "aria-expanded": v,
                        children: p
                    }), (0,
                        t.jsx)("button", {
                        onClick: B,
                        disabled: f,
                        className: (0,
                            r.cn)("flex items-center gap-1 px-2 py-0.5 rounded-full transition-all active:scale-90 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong", p > 0 ? "pl-1" : ""),
                        "aria-label": u ? "Unlike" : "Like",
                        children: (0,
                            t.jsx)(l.Heart, {
                            className: (0,
                                r.cn)("h-3 w-3 transition-transform", u && "fill-heart", y && "scale-125")
                        })
                    })]
                }), v && p > 0 && (0,
                    t.jsx)("div", {
                    className: "absolute right-0 top-full z-20 mt-1 w-max max-w-[220px] max-h-40 overflow-y-auto rounded-lg border border-outline bg-surface px-3 py-2 shadow-lg text-xs text-prose-2",
                    children: R ? (0,
                        t.jsx)(s.Loader2, {
                        className: "h-3 w-3 animate-spin"
                    }) : j && j.length > 0 ? (0,
                        t.jsx)("span", {
                        children: j.map((e, a) => (0,
                            t.jsxs)("span", {
                            children: [a > 0 && (a === j.length - 1 ? " & " : ", "), (0,
                                t.jsx)(i.SocialDisplayName, {
                                displayName: e.displayName,
                                color: e.displayNameColor,
                                favoriteBadgeEmojis: e.favoriteBadgeEmojis,
                                href: `/u/${e.displayName}`,
                                className: "font-medium"
                            })]
                        }, e.id))
                    }) : null
                })]
            })
    }
    e.s(["HeartPill", () => n])
}, 635734, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(647163),
        l = e.i(405641);

    function s({ number: e, rarity: s, className: r }) {
        let i = l.RARITY_PALETTE[s].numberCard,
            n = (0,
                a.numberToDisplayString)(e);
        return (0,
            t.jsxs)("div", {
            className: (0,
                a.cn)("relative overflow-hidden inline-flex items-center justify-center px-4 py-2 rounded-lg border-2", "bg-gradient-to-br", i.border, i.background, i.glow, i.shadow, i.innerGlow, r),
            children: [(0,
                t.jsx)("div", {
                className: "absolute -inset-px overflow-hidden pointer-events-none rounded-lg dark:opacity-40",
                style: {
                    background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 60%)"
                }
            }), (0,
                t.jsx)("span", {
                className: (0,
                    a.cn)("relative z-10 font-roll font-bold tabular-nums text-xl sm:text-2xl", i.textColor),
                children: n
            })]
        })
    }
    e.s(["NumberCard", () => s])
}, 212744, e => {
    "use strict";
    let t = [1, 2, 4, 7, 12, 20, 33, 54, 88, 143, 232, 376, 609, 986, 1596, 2583, 4180, 6764, 10945, 17710],
        a = t.length;

    function l(e) {
        if (e <= 0)
            return {
                level: 0,
                progress: 0,
                nextThreshold: t[0],
                currentThreshold: 0
            };
        let l = 0;
        for (let a = 0; a < t.length; a++)
            if (e >= t[a])
                l = a + 1;
            else
                break;
        let s = l > 0 ? t[l - 1] : 0,
            r = l < a ? t[l] : null,
            i = 1;
        return null !== r && (i = (e - s) / (r - s)), {
            level: l,
            progress: i,
            nextThreshold: r,
            currentThreshold: s
        }
    }

    function s(e) {
        return e <= 0 ? {
            indicator: "",
            colorClass: "text-gray-400",
            label: ""
        } : {
            indicator: e <= 5 ? "★".repeat(e) : `★\xd7${e}`,
            colorClass: e <= 1 ? "text-gray-500" : e <= 3 ? "text-green-500" : e <= 6 ? "text-blue-500" : e <= 9 ? "text-purple-500" : e <= 12 ? "text-orange-500" : e <= 15 ? "text-yellow-500" : e <= 18 ? "text-red-500" : "text-pink-500",
            label: `Lv.${e}`
        }
    }
    e.s(["getLevelDisplay", () => s, "getLevelFromEarnCount", () => l])
}, 164312, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(4080),
        l = e.i(647163),
        s = e.i(405641),
        r = e.i(212744);

    function i({ label: e, score: i, emoji: n, earnCount: o, isNew: c, size: d = "md", className: u, href: m, showLevel: p }) {
        let x = (0,
                s.getBadgeRarityTier)(i),
            { bgClass: f, textClass: h, borderClass: y } = (0,
                s.getRarityTailwindByTier)(x),
            g = null;
        if (p && o && o >= 1) {
            let e = (0,
                    r.getLevelFromEarnCount)(o),
                a = (0,
                    r.getLevelDisplay)(e.level);
            g = (0,
                t.jsx)("span", {
                className: "relative ml-1",
                style: {
                    top: "-1px"
                },
                children: a.indicator
            })
        } else
            o && o > 1 && (g = (0,
                t.jsxs)("span", {
                className: "lowercase ml-1",
                children: ["x", o]
            }));
        let v = (0,
            t.jsxs)("div", {
            className: (0,
                l.cn)("type-meta normal-case inline-flex items-center rounded-full", "sm" === d ? "gap-1.5 px-2 py-0.5" : "gap-1 px-2 py-0.5", f, h, c ? "border-yellow-400 ring-2 ring-yellow-400/50 animate-pulse" : y, m && "hover:opacity-80 transition-opacity cursor-pointer", u),
            role: "img",
            "aria-label": `${e} badge, ${i.toLocaleString()} EP`,
            children: [c && (0,
                t.jsx)("span", {
                children: "★"
            }), n && (0,
                t.jsx)("span", {
                children: n
            }), (0,
                t.jsx)("span", {
                children: e
            }), g]
        });
        return m ? (0,
            t.jsx)(a.default, {
            href: m,
            children: v
        }) : v
    }
    e.s(["BadgePill", () => i])
}, 889440, e => {
    "use strict";
    let t = {
        digitRevealStart: 2e3,
        digitRevealBase: 1e3,
        digitRevealMax: 2e3,
        lastDigitExtraDelay: 2e3,
        numberCollapseDelay: 0,
        badgeStartAfterNumber: 1e3,
        badgeRevealBase: 500,
        badgeRevealMax: 1500,
        epAnimateDuration: 500,
        badgeSummaryDelay: 1500,
        rarityRevealAfterSummary: 1e3,
        statsDelayAfterBadges: 250,
        totalEpDelayAfterStats: 1e3,
        pauseBeforeEpAnimate: 1500,
        epTickUpDuration: 1500,
        revealEndBuffer: 500
    };

    function a(e, a) {
        if (a <= 1)
            return t.digitRevealBase;
        let l = t.digitRevealBase + (t.digitRevealMax - t.digitRevealBase) * Math.pow(e / (a - 1), 2);
        return e === a - 1 ? l + t.lastDigitExtraDelay : l
    }

    function l(e, a) {
        return a <= 1 ? t.badgeRevealBase : t.badgeRevealBase + (t.badgeRevealMax - t.badgeRevealBase) * Math.pow(e / (a - 1), 1.5)
    }

    function s(e, t) {
        let a = l(e, t);
        return t <= 1 ? a : a * (1 + .8 * Math.pow(e / (t - 1), 2))
    }
    e.s(["ROLL_REVEAL_RHYTHM_MS", 0, 250, "ROLL_REVEAL_TIMING", 0, t, "getComparisonBadgeRevealDelay", () => s, "getRollBadgeRevealDelay", () => l, "getRollDigitRevealDelay", () => a])
}, 664659, e => {
    "use strict";
    let t = (0,
        e.i(475254).default)("chevron-down", [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ]);
    e.s(["ChevronDown", () => t], 664659)
}, 625424, e => {
    "use strict";
    var t = e.i(247167);

    function a() {
        if ("true" === t.default.env.NEXT_PUBLIC_FORCE_APRIL_FOOLS)
            return !0;
        let e = new Date;
        return 3 === e.getMonth() && 1 === e.getDate()
    }
    e.s(["isAprilFools", () => a])
}, 751977, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(4080),
        l = e.i(306049),
        s = e.i(635734),
        r = e.i(405641),
        i = e.i(677405),
        n = e.i(977324),
        o = e.i(161664),
        c = e.i(478446);

    function d({ entry: e, valueLabel: d, valueType: u, view: m, disableLinks: p }) {
        let { user: x } = (0,
            n.useAuth)(), f = function(e) {
            switch (e) {
                case 0:
                    return "#?";
                case 1:
                    return "🥇";
                case 2:
                    return "🥈";
                case 3:
                    return "🥉";
                default:
                    return `#${e}`
            }
        }(e.rank), h = "daily" === m, y = e.rollNumber ? (0,
            t.jsx)(s.NumberCard, {
            number: e.rollNumber,
            rarity: (0,
                r.getCardRarityTier)(e.value),
            className: "!text-sm !px-2 !py-0.5"
        }) : null;
        return (0,
            t.jsxs)("div", {
            className: `flex flex-col gap-1 px-2 py-1.5 ${e.isCurrentUser ? "bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-400 dark:border-yellow-700" : ""}`,
            children: [(0,
                t.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0,
                    t.jsx)("div", {
                    className: `type-data w-9 flex-shrink-0 text-center font-bold text-prose ${e.rank >= 100 ? "text-xs" : ""}`,
                    children: f
                }), (0,
                    t.jsxs)("div", {
                    className: "flex min-w-0 flex-1 items-baseline",
                    children: [(0,
                        t.jsx)(c.SocialDisplayName, {
                        displayName: e.displayName,
                        color: e.displayNameColor,
                        favoriteBadgeEmojis: e.favoriteBadgeEmojis,
                        href: p ? void 0 : `/u/${e.displayName}`,
                        className: "type-display-name"
                    }), e.isCurrentUser && (0,
                        t.jsx)("span", {
                        className: "type-meta ml-1 shrink-0 text-prose-3",
                        children: "(you)"
                    })]
                }), (0,
                    t.jsx)("div", {
                    className: "flex-shrink-0 text-right flex items-center gap-5",
                    children: h ? y ? (0,
                        t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)("span", {
                            className: "sm:min-w-[7.25rem] flex justify-end",
                            children: p ? y : (0,
                                t.jsx)(a.default, {
                                href: `/u/${e.displayName}/roll/${e.rollNumber}`,
                                className: "hover:scale-105 active:scale-95 transition-transform",
                                children: y
                            })
                        }), (0,
                            t.jsx)(l.EPScore, {
                            className: "hidden sm:block text-sm text-prose-3",
                            children: e.value
                        })]
                    }) : (0,
                        t.jsx)("span", {
                        className: "text-prose-3",
                        children: "—"
                    }) : "ep" === u ? (0,
                        t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)(l.EPScore, {
                            className: "font-bold",
                            children: e.value
                        }), d && (0,
                            t.jsx)("span", {
                            className: "type-meta text-prose-3",
                            children: d
                        })]
                    }) : (0,
                        t.jsxs)(t.Fragment, {
                        children: [(0,
                            t.jsx)("span", {
                            className: "type-data font-bold",
                            children: Math.floor(Number(e.value)) > 0 ? Math.floor(Number(e.value)).toLocaleString() : "—"
                        }), d && (0,
                            t.jsx)("span", {
                            className: "type-meta text-prose-3",
                            children: d
                        })]
                    })
                }), h && e.activityId && !p && (0,
                    t.jsx)("div", {
                    className: "min-w-[3rem] flex justify-end",
                    children: (0,
                        t.jsx)(i.HeartPill, {
                        activityId: e.activityId,
                        initialHearted: e.hasHearted ? ? !1,
                        initialCount: e.heartCount ? ? 0
                    })
                })]
            }), h && e.activityId && e.poem && (0,
                o.isPoemEnabled)(x ? .canAccessExperiments) && (0,
                t.jsx)("p", {
                className: "pl-11 text-sm font-mono text-prose-2 lowercase",
                children: e.poem
            })]
        })
    }
    e.s(["LeaderboardRow", () => d])
}, 121609, 676866, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(271645),
        l = e.i(4080),
        s = e.i(618566),
        r = e.i(647163),
        i = e.i(305622),
        n = e.i(625424);

    function o(e) {
        return "visible" === e ? 0 : 5e3 + 85e3 * Math.random()
    }

    function c(e) {
        let t = (0,
            a.useRef)(e);
        (0,
            a.useEffect)(() => {
            t.current = e
        }, [e]);
        let l = (0,
            a.useRef)((0,
            r.getTodayUTC)());
        (0,
            a.useEffect)(() => {
            let e, a = e => {
                    let a = (0,
                        r.getTodayUTC)();
                    a !== l.current && (l.current = a,
                        t.current(e))
                },
                s = () => {
                    "visible" === document.visibilityState && a("visible")
                };
            document.addEventListener("visibilitychange", s);
            let i = () => {
                e = setTimeout(() => {
                    a("timer"),
                        i()
                }, (0,
                    r.getMillisUntilUTCMidnight)() + 1e3)
            };
            return i(),
                () => {
                    document.removeEventListener("visibilitychange", s),
                        clearTimeout(e)
                }
        }, [])
    }
    e.s(["resetFetchDelayMs", () => o, "useDailyResetRefresh", () => c], 676866);
    var d = e.i(405641),
        u = e.i(753059),
        m = e.i(164312),
        p = e.i(306049),
        x = e.i(790597),
        f = e.i(977324),
        h = e.i(161664),
        y = e.i(74255);

    function g({ data: v, viewerHearted: b } = {}) {
        let { user: j, isAuthenticated: N } = (0,
            f.useAuth)(), { resolvedTheme: R } = (0,
            i.useTheme)(), w = (0,
            s.usePathname)(), C = (0,
            n.isAprilFools)(), [B, S] = (0,
            a.useState)(null), E = v ? ? B, [T, k] = (0,
            a.useState)(!1), [L, D] = (0,
            a.useState)(b ? ? !1), [A, M] = (0,
            a.useState)(0), [P, $] = (0,
            a.useState)(!1), I = (0,
            a.useCallback)(() => {
            fetch(C ? "/api/stats/global?reverse=true" : "/api/stats/global").then(e => e.json()).then(e => {
                S(e),
                    e.todayBestRoll && M(e.todayBestRoll.heartCount)
            }).catch(console.error)
        }, [C]);
        (0,
            a.useEffect)(() => {
            v || I()
        }, [v, I]),
        c(e => {
                v || setTimeout(I, o(e))
            }),
            (0,
                a.useEffect)(() => {
                E ? .todayBestRoll && M(E.todayBestRoll.heartCount)
            }, [E ? .todayBestRoll]),
            (0,
                a.useEffect)(() => {
                void 0 !== b && D(b)
            }, [b]),
            (0,
                a.useEffect)(() => {
                void 0 !== b || N && j && E ? .todayBestRoll ? .activityId && fetch(`/api/activity/${E.todayBestRoll.activityId}/hearts`).then(e => e.json()).then(e => {
                    e.hearts ? .some(e => e.id === j.id) && D(!0)
                }).catch(() => {})
            }, [b, N, j, E ? .todayBestRoll ? .activityId]);
        let U = (0,
            a.useCallback)(async() => {
            if (!N)
                return void k(!0);
            if (!E ? .todayBestRoll ? .activityId)
                return;
            $(!0),
                setTimeout(() => $(!1), 300);
            let t = !L;
            D(t),
                M(e => t ? e + 1 : e - 1);
            try {
                let { toggleHeart: t } = await e.A(876962), a = await t(E.todayBestRoll.activityId);
                D(a.hearted),
                    M(a.heartCount)
            } catch {
                D(!t),
                    M(e => t ? e - 1 : e + 1)
            }
        }, [N, L, E ? .todayBestRoll ? .activityId]);
        if (!E || !E.todayBestRoll)
            return null;
        let _ = E.todayBestRoll,
            F = (0,
                d.getCardRarityTier)(_.score),
            O = (0,
                d.getRarityTailwindByTier)(F);
        return (0,
            t.jsxs)(t.Fragment, {
            children: [(0,
                t.jsx)("div", {
                className: "w-full max-w-sm mx-auto normal-case",
                children: (0,
                    t.jsxs)("div", {
                    className: "border border-outline rounded-lg bg-surface flex flex-col items-center",
                    children: [(0,
                        t.jsx)("div", {
                        className: "w-full flex px-4 pt-3 pb-6 justify-center",
                        children: (0,
                            t.jsx)("span", {
                            className: "type-label text-prose-3",
                            children: C ? "Today’s Worst Roll" : "Today’s Best Roll"
                        })
                    }), (0,
                        t.jsxs)("div", {
                        className: "flex flex-col items-center gap-3 px-4 pb-4",
                        children: [(0,
                            t.jsx)(u.ShinyNumberArtifact, {
                            number: _.number,
                            rarity: F,
                            size: "lg",
                            revealedDigits: Math.max(6, String(_.number).length),
                            showRarityStyle: !0,
                            isAboutToReveal: !1,
                            collapseLeadingBlanks: !0
                        }), (0,
                            t.jsxs)("div", {
                            className: "flex items-center gap-2 -mt-1",
                            children: [(0,
                                t.jsxs)("p", {
                                className: "type-meta text-prose-3",
                                children: ["rolled by", " ", _.displayName ? (0,
                                    t.jsx)(l.default, {
                                    href: `/u/${_.displayName}`,
                                    className: "font-bold hover:underline",
                                    style: (0,
                                        r.getDisplayNameStyle)(_.displayNameColor, "dark" === R),
                                    children: _.displayName
                                }) : (0,
                                    t.jsx)("span", {
                                    className: "font-bold text-muted",
                                    children: "a guest"
                                })]
                            }), _.activityId && (0,
                                t.jsxs)("button", {
                                onClick: U,
                                className: (0,
                                    r.cn)("flex items-center gap-1 px-2 py-0.5 rounded-full text-xs transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong", L ? "border border-heart-outline bg-heart-surface text-heart" : "text-prose-3 hover:text-heart hover:bg-surface-raised"),
                                children: [(0,
                                    t.jsx)(x.Heart, {
                                    className: (0,
                                        r.cn)("h-3.5 w-3.5 transition-transform", L && "fill-heart", P && "scale-125")
                                }), A > 0 && (0,
                                    t.jsx)("span", {
                                    children: A
                                })]
                            })]
                        }), _.poem && (0,
                            h.isPoemEnabled)(j ? .canAccessExperiments) && (0,
                            t.jsx)("p", {
                            className: "text-sm font-mono text-prose-2 lowercase text-center",
                            children: _.poem
                        }), _.badges.length > 0 && (0,
                            t.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-center gap-1.5",
                            children: [_.badges.map(e => (0,
                                t.jsx)(m.BadgePill, {
                                label: e.label,
                                score: e.score,
                                emoji: e.emoji,
                                href: _.displayName ? `/u/${_.displayName}/badges/${e.id.toLowerCase()}` : void 0
                            }, e.id)), _.totalBadgeCount > _.badges.length && (0,
                                t.jsxs)("span", {
                                className: "type-meta text-prose-3 py-0.5",
                                children: ["+", _.totalBadgeCount - _.badges.length, " more"]
                            })]
                        }), (0,
                            t.jsx)(p.EPScore, {
                            className: (0,
                                r.cn)("inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold", O.bgClass, O.textClass, O.borderClass),
                            children: _.score
                        }), "/leaderboard" === w ? (0,
                            t.jsxs)("span", {
                            className: "type-meta text-prose-3 pt-3",
                            children: [E.todayRolls.toLocaleString(), " ", 1 === E.todayRolls ? "roll" : "rolls", " today"]
                        }) : (0,
                            t.jsxs)(l.default, {
                            href: "/leaderboard",
                            className: "type-meta text-prose-3 underline hover:text-prose-2 transition-colors pt-3",
                            children: [E.todayRolls.toLocaleString(), " ", 1 === E.todayRolls ? "roll" : "rolls", " today"]
                        })]
                    })]
                })
            }), (0,
                t.jsx)(y.AuthModal, {
                isOpen: T,
                onClose: () => k(!1),
                reason: "heart"
            })]
        })
    }
    e.s(["GlobalStats", () => g], 121609)
}, 876962, e => {
    e.v(t => Promise.all(["static/chunks/aefc57c0a5074185.js"].map(t => e.l(t))).then(() => t(950981)))
}]);
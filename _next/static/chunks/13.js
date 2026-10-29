(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 207443, e => {
    "use strict";
    var a = e.i(843476),
        t = e.i(271645),
        r = e.i(977324),
        d = e.i(775357),
        s = e.i(710163),
        l = e.i(405641),
        i = e.i(647163),
        n = e.i(333736);
    e.i(708147);
    var o = e.i(753059),
        c = e.i(523793),
        u = e.i(955946),
        g = e.i(45418),
        m = e.i(306049),
        I = e.i(531278),
        p = e.i(989970);

    function E({ onRoll: e, disabled: r, className: d }) {
        let [s, l] = (0,
            t.useState)(!1), n = (0,
            t.useRef)(null), o = (0,
            t.useRef)(null);
        (0,
            t.useEffect)(() => (s && n.current ? o.current = p.default.to(n.current, {
                scale: 1.02,
                duration: .4,
                repeat: -1,
                yoyo: !0,
                ease: "power1.inOut"
            }) : o.current && (o.current.kill(),
                o.current = null,
                n.current && p.default.set(n.current, {
                    scale: 1
                })),
            () => {
                o.current && o.current.kill()
            }
        ), [s]);
        let c = async() => {
            l(!0);
            try {
                await e()
            } finally {
                l(!1)
            }
        };
        return (0,
            a.jsx)("button", {
            ref: n,
            onClick: c,
            disabled: r || s,
            className: (0,
                i.cn)("type-game-action roll-button-charged w-full rounded-lg px-8 py-4 text-2xl sm:text-3xl font-black text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.98] cursor-pointer", "disabled:cursor-not-allowed disabled:hover:transform-none", "focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2", s && "disabled:opacity-100", d),
            "aria-label": "Generate a new number",
            children: s ? (0,
                a.jsxs)("div", {
                className: "flex h-8 sm:h-9 items-center justify-center space-x-3",
                children: [(0,
                    a.jsx)(I.Loader2, {
                    className: "h-6 w-6 animate-spin"
                }), (0,
                    a.jsx)("span", {
                    className: "text-lg sm:text-xl",
                    children: "PROCESSING..."
                })]
            }) : "GENERATE"
        })
    }
    var b = e.i(74255),
        f = e.i(121609);

    function B({ className: e }) {
        let r, d, s, [l, n] = (0,
            t.useState)(null);
        return ((0,
                t.useEffect)(() => {
                n((0,
                    i.getMillisUntilUTCMidnight)());
                let e = setInterval(() => {
                    n((0,
                        i.getMillisUntilUTCMidnight)())
                }, 1e3);
                return () => clearInterval(e)
            }, []),
            null === l) ? null : (0,
            a.jsxs)("div", {
            className: (0,
                i.cn)("flex items-center gap-1.5 text-prose-3", e),
            children: [(0,
                a.jsx)("span", {
                className: "type-meta",
                children: "Next roll in"
            }), (0,
                a.jsx)("span", {
                className: "type-data type-ui font-bold text-prose-2",
                children: (d = Math.floor((r = Math.floor(l / 1e3)) / 3600),
                    s = Math.floor(r % 3600 / 60),
                    `${d}h ${s.toString().padStart(2, "0")}m ${(r % 60).toString().padStart(2, "0")}s`)
            })]
        })
    }
    var x = e.i(676866),
        h = e.i(882713);
    let N = [{
        id: "casino",
        name: "The Casino",
        description: "Poker hands and lucky rolls",
        icon: "🎰",
        badgeIds: [(0,
            h.createBadgeId)("PAIR"), (0,
            h.createBadgeId)("CONTIGUOUS_PAIR"), (0,
            h.createBadgeId)("TWO_PAIR"), (0,
            h.createBadgeId)("CONTIGUOUS_TWO_PAIR"), (0,
            h.createBadgeId)("THREE_PAIR"), (0,
            h.createBadgeId)("CONTIGUOUS_THREE_PAIR"), (0,
            h.createBadgeId)("TRIPS"), (0,
            h.createBadgeId)("CONTIGUOUS_TRIPS"), (0,
            h.createBadgeId)("QUADS"), (0,
            h.createBadgeId)("BOAT"), (0,
            h.createBadgeId)("CONTIGUOUS_BOAT"), (0,
            h.createBadgeId)("STRAIGHT"), (0,
            h.createBadgeId)("FLUSH"), (0,
            h.createBadgeId)("STRAIGHT_FLUSH"), (0,
            h.createBadgeId)("ROYAL_FLUSH"), (0,
            h.createBadgeId)("FIVE_OF_A_KIND"), (0,
            h.createBadgeId)("LOW_BALL"), (0,
            h.createBadgeId)("HIGH_ROLLER"), (0,
            h.createBadgeId)("SNAKE_EYES"), (0,
            h.createBadgeId)("BLACKJACK")]
    }, {
        id: "lucky-sevens",
        name: "Lucky Sevens",
        description: "The luckiest number",
        icon: "7️⃣",
        badgeIds: [(0,
            h.createBadgeId)("LUCKY_SEVEN_DIV"), (0,
            h.createBadgeId)("LUCKY_7"), (0,
            h.createBadgeId)("JACKPOT"), (0,
            h.createBadgeId)("JACKPOT_EXACT"), (0,
            h.createBadgeId)("JACKPOT_FOUR"), (0,
            h.createBadgeId)("JACKPOT_FIVE"), (0,
            h.createBadgeId)("JACKPOT_SIX"), (0,
            h.createBadgeId)("POWER_OF_SEVEN")]
    }, {
        id: "deep-space",
        name: "Deep Space",
        description: "Mathematical powers and sequences",
        icon: "🌌",
        badgeIds: [(0,
            h.createBadgeId)("SQUARE"), (0,
            h.createBadgeId)("CUBE"), (0,
            h.createBadgeId)("FOURTH_POWER"), (0,
            h.createBadgeId)("FIFTH_POWER"), (0,
            h.createBadgeId)("SIXTH_POWER"), (0,
            h.createBadgeId)("SEVENTH_POWER"), (0,
            h.createBadgeId)("EIGHTH_POWER"), (0,
            h.createBadgeId)("NINTH_POWER"), (0,
            h.createBadgeId)("TENTH_POWER"), (0,
            h.createBadgeId)("FIBONACCI"), (0,
            h.createBadgeId)("POWER_OF_TWO"), (0,
            h.createBadgeId)("POWER_OF_THREE"), (0,
            h.createBadgeId)("POWER_OF_FIVE"), (0,
            h.createBadgeId)("POWER_OF_SEVEN"), (0,
            h.createBadgeId)("OUROBOROS"), (0,
            h.createBadgeId)("FACTORIAL"), (0,
            h.createBadgeId)("HARSHAD"), (0,
            h.createBadgeId)("SPY"), (0,
            h.createBadgeId)("PRONIC")]
    }, {
        id: "sacred-geometry",
        name: "Sacred Geometry",
        description: "Patterns and symmetry in digits",
        icon: "📐",
        badgeIds: [(0,
            h.createBadgeId)("ECHO"), (0,
            h.createBadgeId)("MINI_ECHO"), (0,
            h.createBadgeId)("RHYME"), (0,
            h.createBadgeId)("SANDWICH"), (0,
            h.createBadgeId)("BOOKENDS"), (0,
            h.createBadgeId)("ASCENSION"), (0,
            h.createBadgeId)("DECAY"), (0,
            h.createBadgeId)("STEPS"), (0,
            h.createBadgeId)("SLOPES"), (0,
            h.createBadgeId)("CASCADE"), (0,
            h.createBadgeId)("WATERFALL"), (0,
            h.createBadgeId)("MOUNTAIN"), (0,
            h.createBadgeId)("VALLEY"), (0,
            h.createBadgeId)("HILLS"), (0,
            h.createBadgeId)("MESA"), (0,
            h.createBadgeId)("CANYON"), (0,
            h.createBadgeId)("DUNES"), (0,
            h.createBadgeId)("POCKET_MIRROR"), (0,
            h.createBadgeId)("MINI_SCRAMBLE"), (0,
            h.createBadgeId)("FRAMED_QUAD"), (0,
            h.createBadgeId)("TURTLE"), (0,
            h.createBadgeId)("ALTERNATOR"), (0,
            h.createBadgeId)("ZIPPER"), (0,
            h.createBadgeId)("PALINDROME"), (0,
            h.createBadgeId)("MIRROR_BOOKENDS"), (0,
            h.createBadgeId)("PAIRED_BOOKENDS"), (0,
            h.createBadgeId)("BALANCED"), (0,
            h.createBadgeId)("STROBOGRAMMATIC"), (0,
            h.createBadgeId)("FIREFLY")]
    }, {
        id: "meme-culture",
        name: "Meme Culture",
        description: "Internet favorites",
        icon: "😏",
        badgeIds: [(0,
            h.createBadgeId)("NICE"), (0,
            h.createBadgeId)("NICE_EXACT"), (0,
            h.createBadgeId)("VERY_NICE"), (0,
            h.createBadgeId)("VERY_VERY_NICE"), (0,
            h.createBadgeId)("BOTANIST"), (0,
            h.createBadgeId)("BOTANIST_EXACT"), (0,
            h.createBadgeId)("HOTBOX"), (0,
            h.createBadgeId)("DEVIL"), (0,
            h.createBadgeId)("DEVIL_EXACT"), (0,
            h.createBadgeId)("LEET"), (0,
            h.createBadgeId)("LEET_EXACT"), (0,
            h.createBadgeId)("MEANING"), (0,
            h.createBadgeId)("MEANING_EXACT"), (0,
            h.createBadgeId)("DEEPER_MEANING"), (0,
            h.createBadgeId)("UNIVERSAL_ANSWER"), (0,
            h.createBadgeId)("SIXTY_SEVEN"), (0,
            h.createBadgeId)("SIXTY_SEVEN_EXACT"), (0,
            h.createBadgeId)("SIXTY_SEVEN_DOUBLE"), (0,
            h.createBadgeId)("BRAINROT"), (0,
            h.createBadgeId)("BIG_BROTHER"), (0,
            h.createBadgeId)("BIG_BROTHER_EXACT"), (0,
            h.createBadgeId)("SECRET_AGENT"), (0,
            h.createBadgeId)("ULTIMEME"), (0,
            h.createBadgeId)("ULTIMEME_EXACT"), (0,
            h.createBadgeId)("ERROR_EXACT"), (0,
            h.createBadgeId)("INFERNAL"), (0,
            h.createBadgeId)("FOOTBALL_17776")]
    }, {
        id: "calculator-words",
        name: "Calculator Words",
        description: "Numbers that spell words upside-down",
        icon: "🔢",
        badgeIds: [(0,
            h.createBadgeId)("HELL"), (0,
            h.createBadgeId)("EXACT_HELL"), (0,
            h.createBadgeId)("BOOB"), (0,
            h.createBadgeId)("EXACT_BOOB"), (0,
            h.createBadgeId)("HELLO")]
    }, {
        id: "the-void",
        name: "The Void",
        description: "Zero-related badges",
        icon: "🕳️",
        badgeIds: [(0,
            h.createBadgeId)("VOID"), (0,
            h.createBadgeId)("GHOST"), (0,
            h.createBadgeId)("DEEP_VOID"), (0,
            h.createBadgeId)("DEEP_VOID_THREE"), (0,
            h.createBadgeId)("DEEP_VOID_FOUR"), (0,
            h.createBadgeId)("DEEP_VOID_FIVE"), (0,
            h.createBadgeId)("CLEAN"), (0,
            h.createBadgeId)("CENTURY"), (0,
            h.createBadgeId)("MILLENNIUM"), (0,
            h.createBadgeId)("EPOCH"), (0,
            h.createBadgeId)("EON")]
    }, {
        id: "flatliners",
        name: "Flatliners",
        description: "Repeated digit sequences",
        icon: "📊",
        badgeIds: [(0,
            h.createBadgeId)("CONTIGUOUS_TRIPS"), (0,
            h.createBadgeId)("CONTIGUOUS_QUADS"), (0,
            h.createBadgeId)("CONTIGUOUS_FIVES"), (0,
            h.createBadgeId)("CONTIGUOUS_SIXES"), (0,
            h.createBadgeId)("HOMOGENEOUS")]
    }, {
        id: "exact-numbers",
        name: "Exact Numbers",
        description: "Exact match meme numbers",
        icon: "✨",
        badgeIds: [(0,
            h.createBadgeId)("NICE_EXACT"), (0,
            h.createBadgeId)("BOTANIST_EXACT"), (0,
            h.createBadgeId)("DEVIL_EXACT"), (0,
            h.createBadgeId)("EMERGENCY_EXACT"), (0,
            h.createBadgeId)("LEET_EXACT"), (0,
            h.createBadgeId)("MEANING_EXACT"), (0,
            h.createBadgeId)("JACKPOT_EXACT"), (0,
            h.createBadgeId)("EXACT_HELL"), (0,
            h.createBadgeId)("EXACT_BOOB"), (0,
            h.createBadgeId)("SIXTY_SEVEN_EXACT"), (0,
            h.createBadgeId)("EIGHTY_SIX_EXACT"), (0,
            h.createBadgeId)("ORIENTATION_EXACT"), (0,
            h.createBadgeId)("CALENDAR_EXACT"), (0,
            h.createBadgeId)("VERY_VERY_NICE"), (0,
            h.createBadgeId)("HOTBOX"), (0,
            h.createBadgeId)("MAYDAY"), (0,
            h.createBadgeId)("UNIVERSAL_ANSWER"), (0,
            h.createBadgeId)("BRAINROT"), (0,
            h.createBadgeId)("GROUNDHOG_DAY"), (0,
            h.createBadgeId)("BIG_BROTHER_EXACT"), (0,
            h.createBadgeId)("ERROR_EXACT"), (0,
            h.createBadgeId)("INFERNAL"), (0,
            h.createBadgeId)("FOOTBALL_17776"), (0,
            h.createBadgeId)("ALWAYS"), (0,
            h.createBadgeId)("FULL_DAY"), (0,
            h.createBadgeId)("ULTIMEME_EXACT"), (0,
            h.createBadgeId)("TAU"), (0,
            h.createBadgeId)("GOLDEN_RATIO")]
    }, {
        id: "periodic-table",
        name: "Periodic Table",
        description: "Element-themed badges",
        icon: "⚗️",
        badgeIds: [(0,
            h.createBadgeId)("HYDROGEN"), (0,
            h.createBadgeId)("HELIUM"), (0,
            h.createBadgeId)("LITHIUM"), (0,
            h.createBadgeId)("BERYLLIUM"), (0,
            h.createBadgeId)("BORON"), (0,
            h.createBadgeId)("CARBON"), (0,
            h.createBadgeId)("NITROGEN"), (0,
            h.createBadgeId)("OXYGEN"), (0,
            h.createBadgeId)("FLUORINE")]
    }, {
        id: "digit-counts",
        name: "Digit Counts",
        description: "Badges based on number length",
        icon: "🔢",
        badgeIds: [(0,
            h.createBadgeId)("ONE_DIGIT"), (0,
            h.createBadgeId)("TWO_DIGITS"), (0,
            h.createBadgeId)("THREE_DIGITS"), (0,
            h.createBadgeId)("FOUR_DIGITS"), (0,
            h.createBadgeId)("FIVE_DIGITS"), (0,
            h.createBadgeId)("SIX_DIGITS")]
    }, {
        id: "math-constants",
        name: "Mathematical Constants",
        description: "Famous numbers from mathematics",
        icon: "🧮",
        badgeIds: [(0,
            h.createBadgeId)("PI"), (0,
            h.createBadgeId)("E"), (0,
            h.createBadgeId)("TAU"), (0,
            h.createBadgeId)("TAU_SLICE_4"), (0,
            h.createBadgeId)("TAU_SLICE_5"), (0,
            h.createBadgeId)("GOLDEN_RATIO"), (0,
            h.createBadgeId)("FIBONACCI"), (0,
            h.createBadgeId)("PRIME")]
    }, {
        id: "physics",
        name: "Basic Physics",
        description: "Fundamental number properties",
        icon: "⚛️",
        badgeIds: [(0,
            h.createBadgeId)("EVEN"), (0,
            h.createBadgeId)("ODD"), (0,
            h.createBadgeId)("FEATHER"), (0,
            h.createBadgeId)("HEAVY"), (0,
            h.createBadgeId)("GROUNDED"), (0,
            h.createBadgeId)("LIFTOFF"), (0,
            h.createBadgeId)("EQUILIBRIUM"), (0,
            h.createBadgeId)("COLOSSAL")]
    }, {
        id: "counting",
        name: "Counting",
        description: "Consecutive multi-digit numbers",
        icon: "🔢",
        badgeIds: [(0,
            h.createBadgeId)("CONSEC_QUAD_EXACT"), (0,
            h.createBadgeId)("CONSEC_QUAD_SCRAMBLED"), (0,
            h.createBadgeId)("CONSEC_QUAD_CONTAINS"), (0,
            h.createBadgeId)("CONSEC_TRIPLE_EXACT"), (0,
            h.createBadgeId)("CONSEC_TRIPLE_SCRAMBLED"), (0,
            h.createBadgeId)("CONSEC_TRIPLE_CONTAINS"), (0,
            h.createBadgeId)("CONSEC_PAIR_EXACT"), (0,
            h.createBadgeId)("CONSEC_PAIR_ADJACENT"), (0,
            h.createBadgeId)("CONSEC_PAIR_NEARBY"), (0,
            h.createBadgeId)("ARITHMETIC"), (0,
            h.createBadgeId)("GEOMETRIC"), (0,
            h.createBadgeId)("EQUATION")]
    }, {
        id: "emergency-services",
        name: "Emergency Services",
        description: "Important numbers",
        icon: "🚨",
        badgeIds: [(0,
            h.createBadgeId)("EMERGENCY"), (0,
            h.createBadgeId)("EMERGENCY_EXACT"), (0,
            h.createBadgeId)("MAYDAY"), (0,
            h.createBadgeId)("ERROR"), (0,
            h.createBadgeId)("ERROR_EXACT")]
    }, {
        id: "on-the-clock",
        name: "On the Clock",
        description: "Numbers that tell time",
        icon: "⏰",
        badgeIds: [(0,
            h.createBadgeId)("CALENDAR"), (0,
            h.createBadgeId)("CALENDAR_EXACT"), (0,
            h.createBadgeId)("GROUNDHOG_DAY"), (0,
            h.createBadgeId)("FULL_DAY"), (0,
            h.createBadgeId)("ALWAYS")]
    }];
    var S = e.i(95187),
        T = (0,
            S.createServerReference)("00bdc2450187355b643f1267646c94ed8e79b7d8ee", S.callServer, void 0, S.findSourceMapURL, "rollDiceAction"),
        R = e.i(161664),
        y = e.i(332008),
        A = e.i(472394),
        C = e.i(164312),
        O = e.i(676525),
        v = e.i(664659);
    let _ = (0,
        e.i(475254).default)("shuffle", [
        ["path", {
            d: "m18 14 4 4-4 4",
            key: "10pe0f"
        }],
        ["path", {
            d: "m18 2 4 4-4 4",
            key: "pucp1d"
        }],
        ["path", {
            d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
            key: "1ailkh"
        }],
        ["path", {
            d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
            key: "km57vx"
        }],
        ["path", {
            d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
            key: "os18l9"
        }]
    ]);

    function w({ wordPool: e, badges: r, onSubmit: d, isSubmitting: s = !1, onPoemChange: l }) {
        let [i, n] = (0,
            t.useState)([]), [o, c] = (0,
            t.useState)(null), [u, g] = (0,
            t.useState)(new Map), [m, I] = (0,
            t.useState)(null), [p, E] = (0,
            t.useState)(e), b = (0,
            t.useMemo)(() => new Set(i.map(e => e.tile.id)), [i]), f = i.length >= 10, B = (0,
            t.useMemo)(() => i.reduce((e, a) => "" === e ? a.displayWord : "punct" === a.tile.category ? e + a.displayWord : e + " " + a.displayWord, "").toLowerCase(), [i]);
        (0,
            t.useEffect)(() => {
            l ? .(B)
        }, [B, l]);
        let x = (0,
                t.useCallback)(e => {
                let a = A.WORD_VARIANTS[e.word];
                if (!a)
                    return e.word;
                let t = u.get(e.id) ? ? 0;
                return 0 === t ? e.word : a[t - 1]
            }, [u]),
            h = (0,
                t.useCallback)((e, a) => {
                g(t => {
                        let r = new Map(t);
                        return r.set(e, a),
                            r
                    }),
                    I(null)
            }, []),
            N = (0,
                t.useCallback)(e => {
                let a = x(e);
                I(null),
                    n(t => t.length >= 10 || t.some(a => a.tile.id === e.id) ? t : [...t, {
                        tile: e,
                        displayWord: a
                    }])
            }, [x]),
            S = (0,
                t.useCallback)(e => {
                n(a => a.filter(a => a.tile.id !== e))
            }, []),
            T = (0,
                t.useCallback)(() => {
                n([])
            }, []),
            R = (0,
                t.useCallback)(async() => {
                if (0 === i.length)
                    return;
                let e = new Set,
                    a = [];
                for (let t of i) {
                    if (e.has(t.tile.id))
                        continue;
                    e.add(t.tile.id);
                    let r = t.displayWord !== t.tile.word;
                    a.push({
                        id: t.tile.id,
                        ...r ? {
                            variant: t.displayWord
                        } : {}
                    })
                }
                await d(a)
            }, [i, d]),
            y = (0,
                t.useCallback)(e => {
                c(a => a === e ? null : e)
            }, []),
            w = (0,
                t.useCallback)(() => {
                I(null),
                    E(e => {
                        let a = [...e];
                        for (let e = a.length - 1; e > 0; e -= 1) {
                            let t = Math.floor(Math.random() * (e + 1)),
                                r = a[e],
                                d = a[t];
                            r && d && (a[e] = d,
                                a[t] = r)
                        }
                        return a
                    })
            }, []);
        return (0,
            a.jsxs)("div", {
            children: [(0,
                a.jsxs)("section", {
                "aria-labelledby": "poem-draft-heading",
                children: [(0,
                    a.jsxs)("div", {
                    className: "flex items-baseline justify-between gap-4",
                    children: [(0,
                        a.jsx)("h2", {
                        id: "poem-draft-heading",
                        className: "type-subsection-title",
                        children: "Your Poem"
                    }), (0,
                        a.jsxs)("span", {
                        className: "type-data text-prose-3",
                        "aria-label": `${i.length} of 10 words selected`,
                        children: [i.length, "/", 10]
                    })]
                }), (0,
                    a.jsx)("div", {
                    className: `mt-1.5 flex min-h-12 flex-wrap gap-1.5 rounded-lg border border-outline bg-surface-dim p-2.5 ${0 === i.length ? "content-center items-center" : "content-start items-start"}`,
                    children: 0 === i.length ? (0,
                        a.jsx)("span", {
                        className: "type-ui normal-case text-prose-3",
                        children: "Tap words below to compose..."
                    }) : i.map(e => (0,
                        a.jsxs)("button", {
                        onClick: () => S(e.tile.id),
                        disabled: s,
                        className: `poem-word type-ui inline-flex select-none items-center rounded-lg border border-outline bg-surface-raised px-2.5 py-1 text-prose transition-colors duration-100 ease-out hover:border-danger-accent hover:bg-danger-surface ${o && e.tile.badgeId === o ? "ring-2 ring-prose" : ""}`,
                        "aria-label": `Remove ${e.displayWord} from poem`,
                        children: [e.tile.badgeEmoji && (0,
                            a.jsx)("span", {
                            className: "mr-1",
                            children: e.tile.badgeEmoji
                        }), e.displayWord]
                    }, e.tile.id))
                }), (0,
                    a.jsxs)("div", {
                    className: "mt-3 flex justify-end gap-2",
                    children: [(0,
                        a.jsx)(O.Button, {
                        variant: "secondary",
                        onClick: T,
                        disabled: 0 === i.length || s,
                        className: "px-3 py-1.5 text-xs",
                        children: "CLEAR"
                    }), (0,
                        a.jsx)(O.Button, {
                        variant: "primary",
                        onClick: R,
                        disabled: 0 === i.length || s,
                        loading: s,
                        className: "px-3 py-1.5 text-xs",
                        children: "SUBMIT"
                    })]
                })]
            }), (0,
                a.jsxs)("section", {
                className: "mt-8",
                "aria-labelledby": "poem-word-bank-heading",
                children: [(0,
                    a.jsxs)("div", {
                    className: "flex items-center justify-between gap-4",
                    children: [(0,
                        a.jsx)("h2", {
                        id: "poem-word-bank-heading",
                        className: "type-subsection-title",
                        children: "Word Bank"
                    }), (0,
                        a.jsxs)("button", {
                        type: "button",
                        onClick: w,
                        className: "type-ui inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-prose-3 transition-colors hover:bg-surface-raised hover:text-prose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong",
                        "aria-label": "Shuffle word bank",
                        children: [(0,
                            a.jsx)(_, {
                            className: "h-3.5 w-3.5",
                            "aria-hidden": "true"
                        }), "Shuffle"]
                    })]
                }), (0,
                    a.jsx)("div", {
                    className: "mt-4 flex flex-wrap justify-start gap-2",
                    children: p.map(e => {
                        let t = b.has(e.id),
                            r = o && e.badgeId === o,
                            d = o && e.badgeId !== o,
                            l = A.WORD_VARIANTS[e.word],
                            i = !!l,
                            n = x(e),
                            c = u.get(e.id) ? ? 0,
                            g = i ? [e.word, ...l] : [],
                            p = m === e.id;
                        return (0,
                            a.jsxs)("span", {
                            className: `relative inline-flex items-center rounded-lg border border-outline bg-transparent select-none transition-colors duration-100 ease-out hover:border-outline-strong ${t ? "text-prose-3 scale-95 opacity-40" : f ? "text-prose opacity-40" : "text-prose"} ${!t && r ? "ring-2 ring-prose" : ""} ${!t && d ? "opacity-40" : ""}`,
                            onBlur: e => {
                                e.currentTarget.contains(e.relatedTarget) || I(null)
                            },
                            onKeyDown: e => {
                                "Escape" === e.key && I(null)
                            },
                            children: [(0,
                                a.jsx)("button", {
                                onClick: () => N(e),
                                disabled: t || f || s,
                                className: `poem-word py-1 pl-2.5 text-lg font-normal ${i ? "pr-0.5" : "pr-2.5"} ${t || f ? "cursor-default" : f ? "cursor-not-allowed" : "cursor-pointer"}`,
                                children: n
                            }), i && !t && (0,
                                a.jsxs)(a.Fragment, {
                                children: [(0,
                                    a.jsx)("button", {
                                    type: "button",
                                    onClick: a => {
                                        a.stopPropagation(),
                                            I(a => a === e.id ? null : e.id)
                                    },
                                    disabled: s,
                                    className: "inline-flex min-w-7 self-stretch touch-manipulation cursor-pointer items-center justify-center text-sm text-prose-3 transition-colors hover:text-prose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-prose disabled:cursor-default sm:min-w-0 sm:self-auto sm:py-1 sm:pl-0.5 sm:pr-2 sm:text-xs",
                                    "aria-label": `Choose another form of ${e.word}`,
                                    "aria-haspopup": "menu",
                                    "aria-expanded": p,
                                    "aria-controls": `word-forms-${e.id}`,
                                    children: (0,
                                        a.jsx)(v.ChevronDown, {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": "true"
                                    })
                                }), p && (0,
                                    a.jsx)("div", {
                                    id: `word-forms-${e.id}`,
                                    role: "menu",
                                    "aria-label": `Forms of ${e.word}`,
                                    className: "absolute left-0 top-full z-30 mt-1 w-max min-w-full rounded-lg border border-outline bg-surface p-1 shadow-lg",
                                    children: g.map((t, r) => (0,
                                        a.jsx)("button", {
                                        type: "button",
                                        role: "menuitemradio",
                                        "aria-checked": c === r,
                                        onClick: () => h(e.id, r),
                                        className: `poem-word type-ui block w-full rounded-lg px-2.5 py-1.5 text-left normal-case transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-outline-strong ${c === r ? "bg-surface-raised font-semibold text-prose" : "text-prose-2 hover:bg-surface-dim hover:text-prose"}`,
                                        children: t
                                    }, t))
                                })]
                            })]
                        }, e.id)
                    })
                }), r.length > 0 && (0,
                    a.jsxs)("div", {
                    className: "mt-6",
                    children: [(0,
                        a.jsx)("p", {
                        className: "type-label mb-2 text-prose-3",
                        children: "Filter by badge"
                    }), (0,
                        a.jsx)("div", {
                        className: "scrollbar-slim flex gap-1.5 overflow-x-auto pb-2",
                        children: r.map(e => (0,
                            a.jsx)("button", {
                            type: "button",
                            onClick: () => y(e.id),
                            className: "shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong",
                            "aria-pressed": o === e.id,
                            children: (0,
                                a.jsx)(C.BadgePill, {
                                label: e.label,
                                score: e.score,
                                emoji: e.emoji,
                                size: "sm",
                                className: o === e.id ? "ring-2 ring-prose ring-offset-1 ring-offset-surface" : o ? "opacity-40" : ""
                            })
                        }, e.id))
                    })]
                })]
            })]
        })
    }
    var j = e.i(751977),
        L = (0,
            S.createServerReference)("400f20acb83ab8bcaa8e219ec4fbb7e1e192072f82", S.callServer, void 0, S.findSourceMapURL, "submitPoem"),
        D = e.i(37727);

    function M({ isOpen: e, onClose: d, rollNumber: s, totalScore: l, badges: i, onPoemSaved: n }) {
        let { user: o } = (0,
            r.useAuth)(), [c, u] = (0,
            t.useState)(!1), [g, m] = (0,
            t.useState)(null), [I, p] = (0,
            t.useState)(""), E = (0,
            t.useMemo)(() => e ? (0,
            y.getWordsForBadges)(i.map(e => ({
            id: e.id,
            emoji: e.emoji
        })), s) : [], [e, i, s]), b = (0,
            t.useCallback)(async e => {
            u(!0),
                m(null);
            try {
                let a = await L(e);
                a.success && a.text ? (n(a.text),
                    d()) : m(a.error ? ? "Failed to save poem")
            } catch {
                m("Something went wrong")
            } finally {
                u(!1)
            }
        }, [n, d]);
        return e ? (0,
            a.jsx)("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-site-bg/90 p-3 backdrop-blur-sm sm:p-6",
            children: (0,
                a.jsxs)("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "poem-dialog-title",
                className: "flex h-[calc(100dvh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-outline bg-surface text-prose shadow-xl sm:h-[calc(100dvh-3rem)]",
                children: [(0,
                    a.jsxs)("header", {
                    className: "flex items-start justify-between gap-4 px-4 pb-3 pt-4 sm:px-6 sm:pt-6",
                    children: [(0,
                        a.jsxs)("div", {
                        children: [(0,
                            a.jsx)("h1", {
                            id: "poem-dialog-title",
                            className: "type-section-title",
                            children: "Poetry"
                        }), (0,
                            a.jsx)("p", {
                            className: "type-ui mt-1 normal-case text-prose-2",
                            children: "Compose a poem with the words your badges gave you."
                        }), g && (0,
                            a.jsx)("p", {
                            className: "type-ui mt-2 normal-case text-danger-accent",
                            children: g
                        })]
                    }), (0,
                        a.jsx)("button", {
                        type: "button",
                        onClick: d,
                        disabled: c,
                        className: "shrink-0 rounded-lg p-2 text-prose-2 transition-colors hover:bg-surface-raised hover:text-prose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong disabled:opacity-40",
                        "aria-label": "Close poem composer",
                        children: (0,
                            a.jsx)(D.X, {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0,
                    a.jsx)("div", {
                    className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4 sm:px-6 sm:pb-6",
                    children: (0,
                        a.jsxs)("div", {
                        className: "mx-auto w-full max-w-3xl",
                        children: [(0,
                            a.jsx)(w, {
                            wordPool: E,
                            badges: i,
                            onSubmit: b,
                            isSubmitting: c,
                            onPoemChange: p
                        }), o ? .displayName && (0,
                            a.jsxs)("section", {
                            className: "mt-8",
                            "aria-labelledby": "poem-preview-heading",
                            children: [(0,
                                a.jsx)("h2", {
                                id: "poem-preview-heading",
                                className: "type-subsection-title",
                                children: "Preview"
                            }), (0,
                                a.jsx)("div", {
                                className: "mt-2 overflow-hidden rounded-lg border border-outline",
                                children: (0,
                                    a.jsx)(j.LeaderboardRow, {
                                    entry: {
                                        rank: 0,
                                        userId: "",
                                        displayName: o.displayName,
                                        displayNameColor: o.displayNameColor ? ? "",
                                        favoriteBadgeEmojis: [],
                                        value: l,
                                        rollNumber: s,
                                        activityId: "preview",
                                        poem: I || "...",
                                        isCurrentUser: !0
                                    },
                                    valueLabel: "",
                                    valueType: "ep",
                                    view: "daily",
                                    disableLinks: !0
                                })
                            })]
                        })]
                    })
                })]
            })
        }) : null
    }
    var U = e.i(846696),
        P = e.i(889440);
    let k = new Map((N.find(e => "periodic-table" === e.id) ? .badgeIds ? ? []).map((e, a) => [e, a]));

    function G(e) {
        let a = [...e].sort((e, a) => a.score - e.score),
            t = new Map,
            r = [];
        for (let e of a)
            if (e.family) {
                let a = t.get(e.family) ? ? [];
                a.push(e),
                    t.set(e.family, a)
            } else
                r.push(e);
        let d = [];
        for (let [, e] of t) {
            let [a, ...t] = e;
            a && d.push({
                scoringBadge: a,
                subsidiaryBadges: t
            })
        }
        for (let e of r)
            d.push({
                scoringBadge: e,
                subsidiaryBadges: []
            });
        let s = e => k.get(e.id) ? ? 1 / 0;
        return d.sort((e, a) => e.scoringBadge.score - a.scoringBadge.score || s(e.scoringBadge) - s(a.scoringBadge)),
            d
    }
    let { digitRevealStart: F, numberCollapseDelay: H, badgeStartAfterNumber: X, epAnimateDuration: Y, badgeSummaryDelay: V, rarityRevealAfterSummary: W, statsDelayAfterBadges: K, totalEpDelayAfterStats: $, pauseBeforeEpAnimate: Q, epTickUpDuration: J, revealEndBuffer: z } = P.ROLL_REVEAL_TIMING;

    function q(e, a, t, r) {
        let d = setTimeout(r, a);
        e.push(d)
    }

    function Z() {
        let { user: e, isAuthenticated: h, isLoading: N, refetch: S } = (0,
            r.useAuth)(), [y, A] = (0,
            t.useState)(null), [C, O] = (0,
            t.useState)(null), [v, _] = (0,
            t.useState)(!1), [w, j] = (0,
            t.useState)(!1), [L, D] = (0,
            t.useState)(!1), [k, Z] = (0,
            t.useState)(!1), [ee, ea] = (0,
            t.useState)(null), [et, er] = (0,
            t.useState)(null), [ed, es] = (0,
            t.useState)(null), [el, ei] = (0,
            t.useState)(!1), [en, eo] = (0,
            t.useState)(!1), [ec, eu] = (0,
            t.useState)(0), [eg, em] = (0,
            t.useState)(!1), [eI, ep] = (0,
            t.useState)(!1), [eE, eb] = (0,
            t.useState)(0), [ef, eB] = (0,
            t.useState)(0), [ex, eh] = (0,
            t.useState)(!1), [eN, eS] = (0,
            t.useState)(0), [eT, eR] = (0,
            t.useState)(!1), [ey, eA] = (0,
            t.useState)(0), [eC, eO] = (0,
            t.useState)(!1), [ev, e_] = (0,
            t.useState)(!1), [ew, ej] = (0,
            t.useState)(!1), [eL, eD] = (0,
            t.useState)(!1), eM = (0,
            t.useRef)(null), eU = (0,
            t.useRef)(null), eP = (0,
            t.useRef)(null), ek = (0,
            t.useRef)({
            tween: null
        }), eG = (0,
            t.useRef)({
            tween: null
        }), eF = y ? .number ? ? null, eH = y ? .lifetimeEp ? ? null, eX = (0,
            t.useMemo)(() => C ? (0,
            l.getCardRarityTier)(C.totalScore) : "common", [C]), eY = (0,
            t.useMemo)(() => C ? (0,
            s.getPercentileForScore)(C.totalScore) : 0, [C]), eV = (0,
            t.useMemo)(() => y ? y.badges : [], [y]), eW = (0,
            t.useMemo)(() => G(eV), [eV]), eK = (0,
            t.useMemo)(() => eW.reduce((e, a) => e + 1 + a.subsidiaryBadges.length, 0), [eW]), e$ = (0,
            t.useMemo)(() => {
            let e = new Map;
            if (!eF || !eV.length)
                return e;
            for (let a of eV) {
                let t = (0,
                    s.getBadgeContributors)(a.id, eF);
                e.set(a.id, t)
            }
            return e
        }, [eF, eV]), eQ = (0,
            l.getRarityTailwindByTier)(eX);
        (0,
            t.useEffect)(() => {
            if (!N)
                if (R.FEATURES.DAILY_ROLL_LIMIT_ENABLED && !h) {
                    let e = (0,
                        i.hasGuestRolledToday)();
                    if (_(e),
                        e) {
                        let e = (0,
                            i.getGuestLastRoll)();
                        e && (A({
                                ...e,
                                lifetimeEp: null,
                                badges: e.badges.map(e => ({
                                    ...e,
                                    isScoring: e.isScoring ? ? !0
                                }))
                            }),
                            O((0,
                                s.analyzeNumber)(e.number)))
                    }
                    j(!0)
                } else
                    h || j(!0)
        }, [h, N]),
        (0,
            t.useEffect)(() => {
            !N && (h || (er(0),
                eA(0)))
        }, [N, h]),
        (0,
            t.useEffect)(() => {
            !N && h && eJ()
        }, [N, h]);
        let eJ = async({ preserveRollReveal: e = !1 } = {}) => {
            let a = new AbortController,
                t = setTimeout(() => a.abort(), 1e4);
            try {
                let t = await fetch("/api/home", {
                    signal: a.signal
                });
                if (t.ok) {
                    let a = await t.json();
                    a.global && es(a.global);
                    let r = a.viewer;
                    if (r && (e || (er(r.totalEp ? ? 0),
                                eA(r.totalEp ? ? 0),
                                _(r.hasRolledToday ? ? !1)),
                            ei(!!r.heartedBestRoll), !e && r.hasRolledToday && r.lastRoll)) {
                        let e = r.lastRoll;
                        A({
                                number: e.number,
                                badges: e.badges,
                                totalScore: e.totalScore,
                                lifetimeEp: null
                            }),
                            O((0,
                                s.analyzeNumber)(e.number)),
                            e.poem && ea(e.poem)
                    }
                }
            } catch (e) {
                console.error("Failed to fetch home data:", e)
            } finally {
                clearTimeout(t),
                    j(!0)
            }
        };
        (0,
            x.useDailyResetRefresh)(e => {
            ek.current.tween && ek.current.tween.kill(),
                eG.current.tween && eG.current.tween.kill(),
                _(!1),
                A(null),
                O(null),
                ea(null),
                eo(!1),
                eu(0),
                em(!1),
                ep(!1),
                eb(0),
                eB(0),
                eh(!1),
                eS(0),
                eR(!1),
                eO(!1),
                e_(!1),
                ej(!1),
                eD(!1),
                h && setTimeout(eJ, (0,
                    x.resetFetchDelayMs)(e))
        }),
        (0,
            t.useEffect)(() => {
            if (w && y && !en && v && !eL) {
                let e = G(y.badges),
                    a = et ? ? 0;
                eu(Math.max(6, y.number.toString().length)),
                    ep(!0),
                    eh(!0),
                    ej(!0),
                    eR(!0),
                    eb(e.length),
                    eB(y.totalScore),
                    eO(!0),
                    eA(a),
                    eD(!0)
            }
        }, [w, y, v, en, eL, et]);
        let ez = async() => {
            let e;
            if (R.FEATURES.DAILY_ROLL_LIMIT_ENABLED && !h && (0,
                    i.hasGuestRolledToday)()) {
                _(!0),
                    U.toast.error("Daily roll limit reached. Come back tomorrow!");
                return
            }
            if (ek.current.tween && ek.current.tween.kill(),
                eG.current.tween && eG.current.tween.kill(),
                eu(0),
                em(!1),
                ep(!1),
                eb(0),
                eB(0),
                eh(!1),
                eS(0),
                eR(!1),
                eO(!1),
                e_(!1),
                ej(!1),
                eA(et ? ? 0),
                eD(!1),
                h) {
                let a;
                try {
                    a = await T()
                } catch {
                    U.toast.error("Something went wrong. Try again.");
                    return
                }
                if ("error" in a) {
                    a.sessionExpired && ((0,
                                d.clearUserHintCookie)(),
                            S(),
                            D(!0)),
                        U.toast.error(a.error);
                    return
                }
                e = {
                        number: a.number,
                        badges: a.badges,
                        totalScore: a.totalScore,
                        lifetimeEp: a.lifetimeEp,
                        claimToken: a.claimToken
                    },
                    er(a.lifetimeEp.after)
            } else {
                var a;
                let t = (0,
                    s.composeRollResult)((0,
                    s.rollRandomNumber)());
                e = {
                        number: t.number,
                        badges: t.badges,
                        totalScore: t.totalScore,
                        lifetimeEp: {
                            before: (a = (et ? ? 0) + t.totalScore) - t.totalScore,
                            after: a
                        }
                    },
                    R.FEATURES.DAILY_ROLL_LIMIT_ENABLED && (0,
                        i.recordGuestRoll)({
                        number: e.number,
                        badges: e.badges,
                        totalScore: e.totalScore
                    })
            }
            _(!0),
                eA(e.lifetimeEp.before),
                A(e),
                O((0,
                    s.analyzeNumber)(e.number)),
                eo(!0),
                h && eJ({
                    preserveRollReveal: !0
                })
        };
        return ((0,
                t.useEffect)(() => {
                if (!en || null === eF || !C)
                    return;
                let e = eF.toString().length,
                    a = [],
                    t = F,
                    r = Math.max(6, e);
                q(a, 0, "digits:glow-on", () => em(!0));
                for (let e = 1; e <= r; e++)
                    q(a, t, `digits:reveal-${e}`, () => {
                        eu(e)
                    }),
                    e < r && (t += (0,
                        P.getRollDigitRevealDelay)(e - 1, r));
                return q(a, t += H, "number:collapse", () => {
                        em(!1),
                            ep(!0),
                            eS(1)
                    }),
                    t += X,
                    eW.forEach((e, r) => {
                        q(a, t, `badge:${r + 1}`, () => {
                                eb(r + 1);
                                let a = eW.slice(0, r).reduce((e, a) => e + a.scoringBadge.score, 0),
                                    t = a + e.scoringBadge.score;
                                ek.current.tween && ek.current.tween.kill();
                                let d = {
                                    value: a
                                };
                                ek.current.tween = p.default.to(d, {
                                    value: t,
                                    duration: Y / 1e3,
                                    ease: "power2.out",
                                    onUpdate: () => eB(Math.round(d.value))
                                })
                            }),
                            r < eW.length - 1 && (t += (0,
                                P.getRollBadgeRevealDelay)(r, eW.length))
                    }),
                    q(a, t += V, "summary:show", () => eR(!0)),
                    q(a, t += W, "rarity:reveal", () => {
                        eh(!0),
                            eS(2)
                    }),
                    q(a, t += K, "stats:show", () => ej(!0)),
                    q(a, t += $, "totalEP:show", () => eO(!0)),
                    q(a, t += Q, "totalEP:animate", () => {
                        if (eH) {
                            let { before: e, after: a } = eH;
                            e_(!0),
                                eA(e),
                                eG.current.tween && eG.current.tween.kill();
                            let t = {
                                value: e
                            };
                            eG.current.tween = p.default.to(t, {
                                value: a,
                                duration: J / 1e3,
                                ease: "power2.out",
                                onUpdate: () => eA(Math.round(t.value)),
                                onComplete: () => eA(a)
                            })
                        }
                    }),
                    q(a, t += J + z, "reveal:end", () => {
                        eH && eA(eH.after),
                            eo(!1),
                            eD(!0)
                    }),
                    () => {
                        a.forEach(clearTimeout),
                            ek.current.tween && ek.current.tween.kill(),
                            eG.current.tween && eG.current.tween.kill()
                    }
            }, [en, eF, C, eW, eH]),
            (0,
                t.useEffect)(() => {
                ew && eM.current && (p.default.fromTo(eM.current, {
                        opacity: 0,
                        scale: .9
                    }, {
                        opacity: 1,
                        scale: 1,
                        duration: .5,
                        ease: "back.out(1.7)"
                    }),
                    eP.current && p.default.fromTo(eP.current, {
                        scale: .5
                    }, {
                        scale: 1,
                        duration: .4,
                        delay: .1,
                        ease: "back.out(3)"
                    }))
            }, [ew]),
            (0,
                t.useEffect)(() => {
                eT && eU.current && p.default.fromTo(eU.current, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: .4,
                    ease: "power2.out"
                })
            }, [eT]),
            w) ? null !== eF || v ? (0,
            a.jsxs)("div", {
            className: "flex-1 flex flex-col overflow-hidden",
            children: [(0,
                a.jsx)(g.Vignette, {
                visible: en
            }), (0,
                a.jsx)("main", {
                "data-page-scroll-container": !0,
                className: "flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-8",
                children: (0,
                    a.jsxs)("div", {
                    className: "max-w-2xl mx-auto px-4 py-4",
                    children: [null !== eF && (0,
                        a.jsx)("div", {
                        className: "flex justify-center mb-4",
                        children: (0,
                            a.jsx)(o.ShinyNumberArtifact, {
                            number: eF,
                            rarity: eX,
                            size: "lg",
                            revealedDigits: ec,
                            showRarityStyle: ex,
                            isAboutToReveal: eg,
                            pulseKey: eN,
                            collapseLeadingBlanks: eI
                        })
                    }), C && (0,
                        a.jsxs)("div", {
                        ref: ew ? eM : void 0,
                        className: (0,
                            i.cn)("flex items-center justify-center gap-3 mb-4", !ew && "invisible"),
                        style: ew ? {
                            opacity: 0
                        } : void 0,
                        children: [(0,
                            a.jsx)("span", {
                            ref: eP,
                            className: (0,
                                i.cn)("type-label px-2 py-0.5 rounded-sm", eQ.bgClass, eQ.textClass, eQ.borderClass),
                            children: eQ.label
                        }), (0,
                            a.jsx)("span", {
                            className: "text-outline-strong",
                            children: "•"
                        }), (0,
                            a.jsx)("span", {
                            className: `type-ui font-medium ${(0,
                            n.getPercentileColor)(eY)}`,
                            children: (0,
                                n.formatPercentile)(eY).text
                        })]
                    }), null !== eF && (0,
                        a.jsxs)("div", {
                        className: "flex flex-col items-center mb-4",
                        children: [(0,
                            a.jsxs)("div", {
                            className: (0,
                                i.cn)("type-data inline-flex items-center font-semibold px-3 py-1 rounded-full transition-all duration-300", ex ? (0,
                                i.cn)(eQ.bgClass, eQ.textClass, eQ.borderClass) : "bg-surface-raised text-prose-2 border border-outline"),
                            children: [0 === eE ? "???" : ef.toLocaleString(), " EP"]
                        }), (0,
                            a.jsxs)("div", {
                            className: (0,
                                i.cn)("flex flex-col items-center mt-1 transition-opacity duration-500", eC && null !== et ? "opacity-100" : "opacity-0"),
                            children: [(0,
                                a.jsxs)("div", {
                                className: "relative",
                                children: [(0,
                                    a.jsx)(m.EPScore, {
                                    className: "font-semibold text-prose-2",
                                    children: ey
                                }), ev && C && (0,
                                    a.jsxs)("span", {
                                    className: "type-data absolute -top-1 left-full ml-1 text-sm text-success animate-float-up-fade",
                                    children: ["+", C.totalScore.toLocaleString()]
                                })]
                            }), (0,
                                a.jsx)("span", {
                                className: "type-meta text-prose-3",
                                children: "Your lifetime EP"
                            })]
                        })]
                    }), C && ex && (0,
                        a.jsxs)("div", {
                        className: "flex flex-col items-center gap-2 mb-3",
                        children: [(0,
                            a.jsxs)("div", {
                            className: "flex items-center justify-center gap-3",
                            children: [(0,
                                a.jsx)(u.ShareButton, {
                                data: {
                                    number: eF,
                                    badges: eV.map(e => ({
                                        id: e.id,
                                        label: e.label,
                                        score: e.score,
                                        emoji: e.emoji
                                    })),
                                    totalScore: C.totalScore,
                                    poem: ee || void 0
                                },
                                highlight: eL
                            }), (0,
                                a.jsx)(B, {})]
                        }), (0,
                            R.isPoemEnabled)(e ? .canAccessExperiments) && h && (ee ? (0,
                            a.jsx)("p", {
                            className: "text-sm font-mono text-prose-2 lowercase text-center mt-1",
                            children: ee
                        }) : (0,
                            a.jsx)("button", {
                            onClick: () => Z(!0),
                            className: (0,
                                i.cn)("poem-button-charged mt-2 rounded-lg px-4 py-2", "type-game-action text-xs text-white", "transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] cursor-pointer", "focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-strong focus-visible:ring-offset-2"),
                            children: "COMPOSE POEM"
                        })), !h && (0,
                            a.jsx)("button", {
                            onClick: () => D(!0),
                            className: "type-meta text-muted underline hover:text-prose-body",
                            children: R.FEATURES.GUEST_ROLL_CLAIMING_ENABLED ? "Sign up to save your roll" : "Sign up to save future rolls — this one can't be saved"
                        })]
                    }), null !== eF && eW.length > 0 && eE > 0 && (0,
                        a.jsxs)("div", {
                        className: "mb-6",
                        children: [(0,
                            a.jsxs)("div", {
                            className: "text-center pt-2 mb-2",
                            children: [(0,
                                a.jsx)("h2", {
                                className: "type-section-title text-xl leading-7 text-prose",
                                children: "Badge Breakdown"
                            }), (0,
                                a.jsx)("div", {
                                ref: eU,
                                className: (0,
                                    i.cn)("type-meta text-prose-3 transition-opacity duration-300", eT ? "opacity-100" : "opacity-0"),
                                children: (0,
                                    a.jsxs)("span", {
                                    className: "font-semibold text-prose-2",
                                    children: [eK, " badge", 1 !== eK ? "s" : "", " earned"]
                                })
                            })]
                        }), (0,
                            a.jsx)("div", {
                            className: "space-y-3",
                            children: eW.slice(0, eE).reverse().map((t, r) => (0,
                                a.jsxs)("div", {
                                className: "space-y-1",
                                children: [(0,
                                    a.jsx)(c.BadgeExplainer, {
                                    badge: t.scoringBadge,
                                    number: eF,
                                    contributors: e$.get(t.scoringBadge.id) ? ? null,
                                    index: r,
                                    animateIn: en,
                                    username: e ? .displayName ? ? void 0
                                }), t.subsidiaryBadges.map(t => (0,
                                    a.jsx)(c.BadgeExplainer, {
                                    badge: t,
                                    number: eF,
                                    contributors: e$.get(t.id) ? ? null,
                                    index: r,
                                    animateIn: en,
                                    isSubsidiary: !0,
                                    username: e ? .displayName ? ? void 0
                                }, t.id))]
                            }, t.scoringBadge.id))
                        })]
                    })]
                })
            }), (0,
                a.jsx)(b.AuthModal, {
                isOpen: L,
                onClose: () => D(!1)
            }), h && (0,
                R.isPoemEnabled)(e ? .canAccessExperiments) && y && C && (0,
                a.jsx)(M, {
                isOpen: k,
                onClose: () => Z(!1),
                rollNumber: y.number,
                totalScore: y.totalScore,
                badges: eV.map(e => ({
                    id: e.id,
                    label: e.label,
                    score: e.score,
                    emoji: e.emoji
                })),
                onPoemSaved: e => ea(e)
            })]
        }) : (0,
            a.jsxs)("div", {
            "data-page-scroll-container": !0,
            className: "flex-1 flex flex-col overflow-y-auto",
            children: [(0,
                a.jsx)("main", {
                className: "flex-1 flex flex-col items-center pt-[12vh] sm:pt-[15vh] px-4 sm:px-8 pb-8",
                children: (0,
                    a.jsxs)("div", {
                    className: "w-full max-w-md sm:max-w-lg flex flex-col items-center text-center",
                    children: [(0,
                        a.jsx)("div", {
                        className: "mb-6",
                        children: (0,
                            a.jsx)("div", {
                            className: "font-roll text-6xl sm:text-7xl font-bold tabular-nums tracking-wider animate-shimmer select-none",
                            children: "??????"
                        })
                    }), (0,
                        a.jsx)("p", {
                        className: "text-muted text-base sm:text-lg mb-8 normal-case tracking-normal",
                        children: "One roll per day. One number. What will yours be?"
                    }), (0,
                        a.jsx)("div", {
                        className: "w-full max-w-[18rem] sm:max-w-xs mb-6",
                        children: (0,
                            a.jsx)(E, {
                            onRoll: ez
                        })
                    }), !h && (0,
                        a.jsxs)("p", {
                        className: "type-meta normal-case text-muted",
                        children: [(0,
                            a.jsx)("button", {
                            onClick: () => D(!0),
                            className: "font-semibold underline hover:text-prose-body",
                            children: "Sign up"
                        }), " ", "before rolling to save your roll and climb the leaderboard"]
                    }), (0,
                        a.jsx)("div", {
                        className: "mt-6 w-full",
                        children: (0,
                            a.jsx)(f.GlobalStats, {
                            data: ed ? ? void 0,
                            viewerHearted: ed ? el : void 0
                        })
                    })]
                })
            }), (0,
                a.jsx)(b.AuthModal, {
                isOpen: L,
                onClose: () => D(!1)
            })]
        }) : (0,
            a.jsx)("main", {
            className: "flex-1 flex items-center justify-center",
            children: (0,
                a.jsx)(I.Loader2, {
                className: "h-8 w-8 animate-spin text-prose-3"
            })
        })
    }
    e.s(["default", () => Z], 207443)
}]);
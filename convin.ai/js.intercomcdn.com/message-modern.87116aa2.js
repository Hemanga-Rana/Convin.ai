(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        1028: function(e, t, o) {
            "use strict";
            o.r(t);
            var i = o(596),
                n = o(29),
                s = o(46),
                r = o(1),
                a = o(641),
                c = o.n(a),
                l = o(602),
                p = o(636),
                h = o(14),
                d = o(631),
                m = o(213),
                u = o(15),
                g = o(7),
                b = {
                    name: "isshev",
                    styles: "padding:25px 0px;"
                };
            const f = Object(g.d)("div", {
                    target: "ef7hodf0"
                })("position:relative;padding:8px;order:0;flex:0 1 100%;align-self:auto;display:flex;justify-content:flex-end;align-items:center;border-top:1px solid #eee;", (({
                    hideButton: e
                }) => e && b), " ", (({
                    isVideoStep: e
                }) => e && Object(g.c)("transition:transform 300ms cubic-bezier(0.165,0.84,0.44,1),opacity 10ms;transform:translateY(100%);margin-top:4px;border-radius:5px;position:absolute;bottom:0;left:0;right:0;border:0;opacity:0;", j.className, "{color:#fff;font-size:14px;}"))),
                v = Object(g.d)("div", {
                    target: "ef7hodf1"
                })("position:absolute;left:0;margin-left:14px;button{font-size:14px;color:", Object(g.g)("installGrey1"), ";cursor:pointer;}button:hover{color:", Object(g.g)("m5DarkGrey2"), ";}"),
                O = Object(g.d)("div", {
                    target: "ef7hodf2"
                })("flex:0 1 auto;position:relative;button{font-size:14px;font-weight:bold;padding:10px 20px;border-radius:4px;cursor:pointer;background-color:", (({
                    buttonColor: e
                }) => e || Object(g.g)("appColor")), ";color:", (({
                    visibleButtonTextColor: e
                }) => e ? "#FFFFFF" : "#000000"), ";}button[disabled]{opacity:0.6;}", (({
                    animating: e
                }) => e && Object(g.c)("animation:", y(), " 500ms;"))),
                y = () => Object(g.e)("0%{", x, ";}25%{", C, ";}49%{", x, ";}50%{", x, ";}75%{", S, ";}100%{", x, ";}"),
                C = {
                    name: "1ldqog6",
                    styles: "transform:scale(1.1);"
                },
                x = {
                    name: "41q668",
                    styles: "transform:scale(1);"
                },
                S = {
                    name: "kp0j2p",
                    styles: "transform:scale(1.05);"
                },
                j = Object(g.d)("div", {
                    target: "ef7hodf3"
                })("position:absolute;left:0;right:0;text-align:center;color:", Object(g.g)("installGrey1"), ";font-size:14px;");
            var k = o(61),
                w = o.n(k);
            const E = {
                default: 8,
                large: 26
            };
            class tour_step_footer_TourStepFooter extends r.Component {
                constructor(...e) {
                    super(...e), this.button = void 0, this.disabledButton = void 0, this.inputFieldValidation = void 0, this.state = {
                        buttonIsAnimating: !1,
                        disabledButton: !1
                    }, this.finishButtonAnimation = () => {
                        this.button && this.setState({
                            buttonIsAnimating: !1
                        })
                    }, this.validateInput = () => {
                        this.setState({
                            disabledButton: !0
                        }), this.inputFieldValidation = new u.d(this.props.selector, (e => {
                            this.setState({
                                disabledButton: !e
                            })
                        })), this.inputFieldValidation.run()
                    }, this.handleOnContinue = () => {
                        this.state.disabledButton || this.props.onContinue()
                    }, this.handleRestart = () => {
                        this.props.onReset()
                    }, this.handleSnooze = () => {
                        this.props.onSnooze()
                    }, this.visibleButtonTextColor = () => {
                        if (!this.props.buttonColor) return !0;
                        return w()({
                            primaryColor: this.props.buttonColor
                        }).primary_on_white_contrast > 1.6
                    }
                }
                componentDidMount() {
                    this.button && this.button.addEventListener("animationend", this.finishButtonAnimation), "type" === this.props.progressionBehavior && this.validateInput()
                }
                componentDidUpdate() {
                    const {
                        resetOverlayClick: e
                    } = this.props;
                    this.props.hasClickedOverlay && (this.setState({
                        buttonIsAnimating: !0
                    }), e())
                }
                componentWillUnmount() {
                    this.inputFieldValidation && this.inputFieldValidation.destroy()
                }
                render() {
                    const {
                        buttonCharacterLimit: e = E.default,
                        buttonText: t,
                        snoozeButtonText: o,
                        restartButtonText: i
                    } = this.props, n = "click" !== this.props.progressionBehavior, s = this.props.activeStepIndex + 1 === this.props.stepCount, a = this.props.activeStepIndex > 0 && this.props.isRestartable, c = 0 === this.props.activeStepIndex && this.props.isSnoozeable, l = this.props.buttonColor, p = s ? Object(h.e)("product_tours_done") : Object(h.e)("product_tours_next"), d = t ? Object(u.f)(t, e) : p, m = t || p, g = o || Object(h.e)("product_tours_snooze"), b = i || Object(h.e)("product_tours_restart");
                    return r.createElement(f, {
                        hideButton: !n,
                        isVideoStep: this.props.isVideoStep
                    }, r.createElement(j, null, Object(h.e)("product_tours_tour_step_number", {
                        start_number: this.props.activeStepIndex + 1,
                        end_number: this.props.stepCount
                    })), n && r.createElement(O, {
                        animating: this.state.buttonIsAnimating,
                        buttonColor: l,
                        visibleButtonTextColor: this.visibleButtonTextColor(),
                        ref: e => this.button = e,
                        "aria-label": m,
                        role: "button"
                    }, r.createElement("button", {
                        disabled: this.state.disabledButton,
                        onClick: this.handleOnContinue,
                        tabIndex: "0"
                    }, d)), a && r.createElement(v, {
                        "aria-label": b,
                        role: "button"
                    }, r.createElement("button", {
                        onClick: this.handleRestart,
                        tabIndex: "0"
                    }, b)), c && r.createElement(v, {
                        "aria-label": g,
                        role: "button"
                    }, r.createElement("button", {
                        onClick: this.handleSnooze,
                        tabIndex: "0"
                    }, g)))
                }
            }
            var P = o(651),
                T = o(814),
                R = o(623);
            var _ = o.p + "images/video-mask.835382d2.svg";
            var I = o.p + "images/video-mask-right.f31df601.svg",
                N = o(747),
                B = o(678),
                D = o(730);
            const M = Object(g.d)("div", {
                    target: "e6nux210"
                })("opacity:0;position:absolute;left:0;top:0;cursor:pointer;right:0;bottom:0;background:rgba(0,0,0,0.4);transition:opacity 300ms cubic-bezier(0.165,0.84,0.44,1);", N.b.className, "{right:50%;bottom:50%;margin-right:-22px;margin-bottom:-22px;background-size:44px 44px;}", R.a.className, " svg > g > g{fill:", Object(g.g)("white"), ";}"),
                F = Object(g.d)("div", {
                    target: "e6nux211"
                })("mask-image:url(", _, ");mask-size:cover;"),
                z = Object(g.d)("div", {
                    target: "e6nux212"
                })(),
                H = Object(g.d)("div", {
                    target: "e6nux213"
                })("position:relative;", R.a.className, "{right:8px;top:18px;}", D.a.className, "{padding:20px;padding-bottom:16px;font-weight:400;}.timeline-intercom-video-step-mask{mask-image:url('../images/video-tours-mask.svg');}", N.d.className, "{position:relative;}&:hover{", B.b.className, "{transform:translateY(28px);opacity:0;}", M.className, "{opacity:1;&.intercom-tour-step-video-overlay-hidden{opacity:0;}", f.className, "{transform:translateY(0);opacity:1;}}}", (({
                    videoComplete: e
                }) => e && Object(g.c)(B.b.className, "{transform:translateY(28px);opacity:0;}", M.className, "{opacity:1;&.intercom-tour-step-video-overlay-hidden{opacity:0;}", f.className, "{transform:translateY(0);opacity:1;}}")), " ", (({
                    placement: e
                }) => "right" === e && Object(g.c)(F.className, "{mask-image:url(", I, ");transform:rotate(180deg);mask-size:cover;}", z.className, "{transform:rotate(180deg);}", f.className, "{left:10px;}", R.a.className, "{right:8px;top:8px;}", B.b.className, "{left:10px;margin-right:10px;}")), " ", (({
                    placement: e
                }) => "left" === e && Object(g.c)(F.className, "{mask-image:url(", I, ");mask-size:cover;}", f.className, "{right:10px;}", R.a.className, "{right:18px;top:8px;}", B.b.className, "{left:-10px;margin-left:10px;}")), " ", (({
                    placement: e
                }) => "top" === e && Object(g.c)(z.className, "{transform:rotate(180deg);}", f.className, "{bottom:10px;}", F.className, "{transform:rotate(180deg);}", R.a.className, "{right:8px;top:8px;}", B.b.className, "{bottom:0px;padding-bottom:10px;}")));

            function A({
                muted: e,
                onClick: t
            }) {
                return r.createElement(N.b, {
                    muted: e,
                    onClick: t
                })
            }
            var W = o(2);
            const V = Object(W.createSelector)(n.o, n.n, ((e, t) => ({
                muted: e,
                userHasInteractedWithVideo: t
            })));
            var q = Object(i.connect)(V, {
                changeVideoMuted: s.a
            })((function({
                block: {
                    url: e,
                    captions: t,
                    thumbnailUrl: o
                },
                placement: i,
                activeStepIndex: n,
                stepCount: s,
                isRestartable: a,
                isSnoozeable: l,
                onClose: p,
                onContinue: d,
                onReset: u,
                onSnooze: g,
                muted: b,
                changeVideoMuted: f,
                userHasInteractedWithVideo: v,
                hasClickedOverlay: O,
                resetOverlayClick: y,
                selector: C,
                progressionBehavior: x,
                buttonColor: S,
                buttonText: j,
                buttonCharacterLimit: k,
                snoozeButtonText: w,
                restartButtonText: E
            }) {
                const [P, _] = r.useState(!0), [I, N] = r.useState(), [B, D] = r.useState(!1), W = () => {
                    b && N(0), f(!b)
                }, V = c()("intercom-tour-step-video-overlay", {
                    "intercom-tour-step-video-overlay-hidden": B
                });
                return r.createElement(H, {
                    placement: i,
                    videoComplete: !P
                }, r.createElement(F, null, r.createElement(z, null, r.createElement(T.a, {
                    srcUrl: e,
                    captions: b ? t : void 0,
                    showControls: !1,
                    onComplete: () => {
                        _(!1)
                    },
                    onReplay: () => _(!0),
                    muted: b,
                    startTime: I,
                    loop: !v && b,
                    thumbnailUrl: o
                }), r.createElement(M, {
                    className: V,
                    onClick: e => {
                        e.target.classList.contains("intercom-tour-step-video-overlay") && W(), D(!0)
                    },
                    onMouseMove: () => D(!1)
                }, r.createElement(R.a, {
                    onClick: p,
                    "aria-label": Object(h.e)("close")
                }, r.createElement(m.a, null)), P && r.createElement(A, {
                    muted: b,
                    onClick: W
                }), s > 1 ? r.createElement(tour_step_footer_TourStepFooter, {
                    activeStepIndex: n,
                    stepCount: s,
                    onContinue: d,
                    onReset: u,
                    onSnooze: g,
                    selector: C,
                    hasClickedOverlay: O,
                    resetOverlayClick: y,
                    progressionBehavior: x,
                    isRestartable: a,
                    isSnoozeable: l,
                    isVideoStep: !0,
                    buttonColor: S,
                    buttonText: j,
                    buttonCharacterLimit: k,
                    snoozeButtonText: w,
                    restartButtonText: E
                }) : null))))
            }));
            class tour_step_TourStep extends r.Component {
                constructor(...e) {
                    super(...e), this.node = void 0, this.state = {
                        isScrolled: !1
                    }, this.handleScroll = e => {
                        this.setState({
                            isScrolled: e.target.scrollTop > 0
                        })
                    }, this.handleTab = e => {
                        var t;
                        e.shiftKey || 9 !== e.keyCode || (e.preventDefault(), null === (t = this.props.appWindow.document.querySelector(this.props.selector)) || void 0 === t || t.focus())
                    }, this.handleOnCloseClick = () => {
                        this.props.onStop()
                    }
                }
                getClassNames() {
                    return c()({
                        "intercom-tour-step": !0,
                        "intercom-tour-step-pointer": this.isPointer(),
                        "intercom-tour-step-post": !this.isPointer()
                    })
                }
                calculateWidth() {
                    const {
                        appWindow: e
                    } = this.props, t = e.innerWidth;
                    return Math.min(624, t) - 80
                }
                isPointer() {
                    return !!this.props.selector
                }
                getStyles() {
                    if (!this.isPointer()) return {
                        width: `${this.calculateWidth()}px`
                    }
                }
                onLoad() {
                    this.props.onLoad && this.props.onLoad()
                }
                componentDidUpdate(e) {
                    this.props.step.id !== e.step.id && this.onLoad()
                }
                getFooterButtonCharacterLimit() {
                    const e = !this.isPointer();
                    return 1 === this.props.step.pointerSize || e ? E.large : E.default
                }
                componentDidMount() {
                    if (this.props.onLoad(), this.node) {
                        if (this.node.focus(), !this.node || !this.node.addEventListener) return;
                        "click" === this.props.step.progressionBehavior && this.node.addEventListener("keydown", this.handleTab)
                    }
                }
                componentWillUnmount() {
                    this.node && this.node.removeEventListener("keydown", this.handleTab)
                }
                renderVideoTourStep() {
                    const {
                        onContinue: e,
                        onReset: t,
                        onSnooze: o,
                        activeStepIndex: i,
                        stepCount: n,
                        placement: s,
                        selector: a,
                        step: {
                            blocks: c,
                            progressionBehavior: l,
                            buttonText: p
                        },
                        hasClickedOverlay: h,
                        resetOverlayClick: d,
                        isRestartable: m,
                        isSnoozeable: u,
                        buttonColor: g,
                        snoozeButtonText: b,
                        restartButtonText: f
                    } = this.props;
                    return s ? r.createElement("div", {
                        role: "figure",
                        "aria-label": c[0] && c[0].captions ? c[0].captions : "",
                        tabIndex: 0,
                        ref: e => this.node = e
                    }, r.createElement(q, {
                        block: c[0],
                        placement: s,
                        activeStepIndex: i,
                        stepCount: n,
                        selector: a,
                        onClose: this.handleOnCloseClick,
                        onContinue: e,
                        onReset: t,
                        onSnooze: o,
                        hasClickedOverlay: h,
                        resetOverlayClick: d,
                        isRestartable: m,
                        isSnoozeable: u,
                        progressionBehavior: l,
                        buttonColor: g,
                        buttonText: p,
                        buttonCharacterLimit: this.getFooterButtonCharacterLimit(),
                        snoozeButtonText: b,
                        restartButtonText: f
                    })) : null
                }
                renderTourStep() {
                    const {
                        onContinue: e,
                        onReset: t,
                        onSnooze: o,
                        activeStepIndex: i,
                        stepCount: n,
                        isRestartable: s,
                        isSnoozeable: a,
                        author: c,
                        appName: u,
                        selector: g,
                        step: {
                            blocks: b,
                            progressionBehavior: f,
                            id: v,
                            pointerSize: O,
                            buttonText: y
                        },
                        hasClickedOverlay: C,
                        resetOverlayClick: x,
                        buttonColor: S,
                        snoozeButtonText: j,
                        restartButtonText: k
                    } = this.props;
                    return r.createElement(d.a, {
                        appName: u,
                        isReplyStyle: !1,
                        author: c
                    }, r.createElement("div", {
                        className: "intercom-tour-step-header"
                    }, r.createElement(R.a, {
                        onClick: this.handleOnCloseClick,
                        "aria-label": Object(h.e)("close")
                    }, r.createElement(m.a, null))), r.createElement(R.b, {
                        hasAuthor: !!c,
                        className: "intercom-tour-step-content",
                        tabIndex: "0",
                        ref: e => this.node = e
                    }, r.createElement(p.a, {
                        onScroll: this.handleScroll
                    }, r.createElement(l.a, {
                        blocks: b,
                        key: `tour-step-block-${v}`,
                        pointerSize: O
                    }))), n > 1 ? r.createElement(tour_step_footer_TourStepFooter, {
                        activeStepIndex: i,
                        stepCount: n,
                        onContinue: e,
                        onReset: t,
                        onSnooze: o,
                        selector: g,
                        progressionBehavior: f,
                        hasClickedOverlay: C,
                        resetOverlayClick: x,
                        isRestartable: s,
                        isSnoozeable: a,
                        isVideoStep: !1,
                        buttonColor: S,
                        buttonText: y,
                        buttonCharacterLimit: this.getFooterButtonCharacterLimit(),
                        snoozeButtonText: j,
                        restartButtonText: k
                    }) : null)
                }
                render() {
                    const {
                        blocks: e,
                        pointerSize: t
                    } = this.props.step, o = this.state.isScrolled, i = this.isPointer();
                    return r.createElement(R.c, {
                        className: this.getClassNames(),
                        style: this.getStyles(),
                        isPointer: i,
                        isPost: !i,
                        scrolled: o,
                        pointerSize: t
                    }, Object(P.b)(e) ? this.renderVideoTourStep() : this.renderTourStep())
                }
            }
            var L = o(600),
                U = o(845),
                $ = o(87);
            const G = Object(g.d)("div", {
                target: "ej0ja420"
            })("position:absolute;z-index:", Object($.m)(), ";");

            function Y({
                onClick: e,
                appWindow: t,
                targetNode: o
            }) {
                const {
                    left: i,
                    right: n,
                    top: s,
                    bottom: a
                } = function(e, t) {
                    let {
                        left: o,
                        right: i,
                        top: n,
                        bottom: s
                    } = e.getBoundingClientRect();
                    const {
                        pageXOffset: r,
                        pageYOffset: a
                    } = t;
                    return o += r, i += r, n += a, s += a, {
                        left: o,
                        right: i,
                        top: n,
                        bottom: s
                    }
                }(o, t), c = function(e) {
                    const {
                        body: t,
                        documentElement: o
                    } = e;
                    return t && o ? Math.max(t.offsetHeight, o.clientHeight, o.offsetHeight) : 0
                }(t.document);
                return r.createElement(r.Fragment, null, r.createElement(G, {
                    style: {
                        top: 0,
                        left: 0,
                        right: 0,
                        height: s
                    },
                    tabIndex: "none",
                    onClick: e
                }), r.createElement(G, {
                    style: {
                        top: s,
                        left: 0,
                        width: i,
                        height: a - s
                    },
                    tabIndex: "none",
                    onClick: e
                }), r.createElement(G, {
                    style: {
                        top: s,
                        left: n,
                        right: 0,
                        height: a - s
                    },
                    tabIndex: "none",
                    onClick: e
                }), r.createElement(G, {
                    style: {
                        top: a,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: c - a
                    },
                    tabIndex: "none",
                    onClick: e
                }))
            }
            var K = o(601),
                J = {
                    name: "1j1kj5x",
                    styles: "border:none;box-shadow:none;"
                };
            const X = Object(g.d)(K.a, {
                target: "e1dm3ism0"
            })("z-index:", Object($.m)(1), ";border-radius:5px;box-shadow:0 3px 32px 0 rgba(0,0,0,0.14);border:1px solid rgba(0,0,0,0.1);", (({
                isVideo: e
            }) => e && J));
            var Q = o(4),
                Z = o(8),
                ee = o(835),
                te = o(662);

            function oe(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, i)
                }
                return o
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(Object(o), !0).forEach((function(t) {
                        ne(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : oe(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function ne(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var se = ie(ie({}, te.computeStyles), {}, {
                fn: ({
                    state: e
                }) => {
                    const {
                        modifiersData: t,
                        options: o
                    } = e, {
                        x: i,
                        y: n
                    } = t.popperOffsets, {
                        arrow: s
                    } = t;
                    e.styles.popper = {
                        position: o.strategy,
                        top: "0",
                        left: "0",
                        transform: `translate(${i}px, ${n}px)`
                    };
                    const r = e.placement.split("-")[0],
                        a = "x" === (["top", "bottom"].indexOf(r) >= 0 ? "x" : "y") ? {
                            left: 0
                        } : {
                            top: 0
                        };
                    e.styles.arrow = ie(ie({}, {
                        position: o.strategy,
                        transform: `translate3d(${s.x||0}px, ${s.y||0}px, 0)`
                    }), a), e.attributes.popper = ie(ie({}, e.attributes.popper), {
                        "data-popper-placement": e.placement
                    })
                }
            });
            const re = e => e.split("-")[0],
                ae = (e, t, o) => Math.max(e, Math.min(t, o));

            function ce(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, i)
                }
                return o
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ce(Object(o), !0).forEach((function(t) {
                        pe(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ce(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function pe(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            const he = "top",
                de = "right",
                me = "bottom",
                ue = "left";
            var ge = le(le({}, te.arrow), {}, {
                fn: ({
                    state: e,
                    name: t
                }) => {
                    const o = re(e.placement),
                        i = [he, me].indexOf(o) >= 0 ? "x" : "y",
                        n = e.elements.arrow,
                        {
                            popperOffsets: s
                        } = e.modifiersData;
                    if (!n || !s) return;
                    const r = [ue, de].indexOf(o) >= 0,
                        a = e.modifiersData[t + "#persistent"].padding,
                        c = r ? "height" : "width",
                        l = {
                            x: n.offsetLeft,
                            y: n.offsetTop,
                            width: n.offsetWidth,
                            height: n.offsetHeight
                        },
                        p = "y" === i ? he : ue,
                        h = "y" === i ? me : de,
                        d = e.rects.reference[c] + e.rects.reference[i] - s[i] - e.rects.popper[c],
                        m = s[i] - e.rects.reference[i],
                        u = e.elements.popper,
                        g = u ? "y" === i ? u.clientHeight || 0 : u.clientWidth || 0 : 0,
                        b = d / 2 - m / 2,
                        f = a[p],
                        v = g - l[c] - a[h],
                        O = g / 2 - l[c] / 2 + b,
                        y = Math.max(f, Math.min(O, v));
                    e.modifiersData[t] = {
                        [i]: y,
                        centerOffset: y - O
                    }
                }
            });

            function be(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, i)
                }
                return o
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? be(Object(o), !0).forEach((function(t) {
                        ve(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : be(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function ve(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            const Oe = ["top", "bottom", "left", "right"];
            var ye = fe(fe({}, te.flip), {}, {
                fn: ({
                    state: e,
                    name: t
                }) => {
                    if (e.modifiersData[t].skip) return;
                    const {
                        popperOffsets: o
                    } = e.modifiersData, i = e.rects.popper, {
                        clippingRect: n
                    } = e.elements.reference;
                    let s = "bottom";
                    if ("auto" === e.options.placement) {
                        const e = ((e, t, o) => ({
                            top: e.y,
                            bottom: o.height - (t.height + e.y),
                            left: e.x,
                            right: o.width - (t.width + e.x)
                        }))(o, i, n);
                        s = Oe.sort(((t, o) => e[o] - e[t]))[0]
                    }
                    e.placement !== s && (e.modifiersData[t].skip = !0, e.placement = s, e.reset = !0)
                }
            });

            function Ce(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, i)
                }
                return o
            }

            function xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(o), !0).forEach((function(t) {
                        Se(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ce(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function Se(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var je = xe(xe({}, te.preventOverflow), {}, {
                fn: ({
                    state: e,
                    options: t,
                    name: o
                }) => {
                    const i = t.mainAxis,
                        n = void 0 === i || i,
                        s = t.altAxis,
                        r = void 0 !== s && s,
                        a = t.padding,
                        c = t.tether,
                        l = void 0 === c || c,
                        p = t.tetherOffset,
                        h = void 0 === p ? 0 : p,
                        {
                            clippingRect: d
                        } = e.elements.reference,
                        m = re(e.placement),
                        u = e.placement.split("-")[1];
                    const g = !u,
                        b = (e => ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y")(m),
                        f = "x" === b ? "y" : "x";
                    const v = e.modifiersData.popperOffsets,
                        O = e.rects.reference,
                        y = e.rects.popper,
                        C = ((e, t, o, i, n) => ({
                            top: 0 - t.y + n,
                            bottom: t.y - i.height + n,
                            left: 0 - t.x + n,
                            right: t.x - i.width + n
                        }))(0, v, 0, d, a),
                        x = "function" == typeof h ? h(Object.assign(Object.assign({}, e.rects), {}, {
                            placement: e.placement
                        })) : h,
                        S = {
                            x: 0,
                            y: 0
                        };
                    if (v) {
                        if (n) {
                            const t = "y" === b ? "top" : "left",
                                o = "y" === b ? "bottom" : "right",
                                i = "y" === b ? "height" : "width",
                                n = v[b],
                                s = v[b] + C[t],
                                r = v[b] - C[o],
                                a = l ? -y[i] / 2 : 0,
                                c = "start" === u ? O[i] : y[i],
                                p = "start" === u ? -y[i] : -O[i],
                                h = e.elements.arrow,
                                d = l && h ? {
                                    x: (j = h).offsetLeft,
                                    y: j.offsetTop,
                                    width: j.offsetWidth,
                                    height: j.offsetHeight
                                } : {
                                    width: 0,
                                    height: 0
                                },
                                m = e.modifiersData["arrow#persistent"].padding,
                                f = m[t],
                                k = m[o],
                                w = ae(0, O[i], d[i]),
                                E = g ? O[i] / 2 - a - w - f - x : c - w - f - x,
                                P = g ? -O[i] / 2 + a + w + k + x : p + w + k + x,
                                T = e.elements.arrow && e.elements.arrow.parentNode,
                                R = T ? "y" === b ? T.clientTop || 0 : T.clientLeft || 0 : 0,
                                _ = e.modifiersData.offset ? e.modifiersData.offset[e.placement][b] : 0,
                                I = v[b] + E - _ - R,
                                N = v[b] + P - _,
                                B = ae(l ? Math.min(s, I) : s, n, l ? Math.max(r, N) : r);
                            v[b] = B, S[b] = B - n
                        }
                        var j;
                        if (r) {
                            const e = "x" === b ? "top" : "left",
                                t = "x" === b ? "bottom" : "right",
                                o = v[f],
                                i = o + C[e],
                                n = o - C[t],
                                s = ae(i, o, n);
                            v[f] = s, S[f] = s - o
                        }
                        e.modifiersData[o] = S
                    }
                }
            });
            var ke = Object(te.popperGenerator)({
                    defaultModifiers: [te.popperOffsets, se, te.applyStyles, te.offset, je, ge, ye]
                }),
                we = o(630);
            const Ee = Object(g.d)("div", {
                    target: "ev034dr0"
                })({
                    name: "4t6ioa",
                    styles: "height:25px;width:25px;position:absolute;&[data-popper-placement='top']{bottom:-11px;}&[data-popper-placement='left']{right:-10px;}&[data-popper-placement='right']{left:3px;}&[data-popper-placement='bottom']{top:4px;}"
                }),
                Pe = Object(g.d)("div", {
                    target: "ev034dr1"
                })({
                    name: "1e120ys",
                    styles: "position:relative;pointer-events:none;height:28px;width:13px;overflow:hidden;&:after{content:'';position:absolute;width:20px;height:40px;background:#ffffff;transform:rotate(45deg);top:2px;}&[data-popper-placement='top']{height:13px;width:28px;transform:rotate(180deg);&:after{left:-3px;top:1px;}}&[data-popper-placement='right']{&:after{left:11px;top:-12px;}}&[data-popper-placement='bottom']{height:13px;width:28px;&:after{top:1px;left:-3px;}}&[data-popper-placement='left']{&:after{right:11px;}}"
                });
            var Te = ({
                    style: e,
                    children: t,
                    pointerKey: o
                }) => {
                    const i = `pointer-${o}`,
                        n = "\n    position: absolute;\n    z-index: 2147483003;\n    border: none;\n  ".concat((e => Object.keys(e).map((t => `${t}: ${e[t]}`)).join(";"))(e));
                    return r.createElement(we.a, {
                        name: i,
                        styles: n
                    }, t)
                },
                Re = o(39);
            var _e = e => ({
                getBoundingClientRect: () => e.rect,
                clippingRect: e.clippingRect
            });
            var Ie = ({
                    selector: e
                }) => {
                    const [t, o] = Object(r.useState)(null);
                    return Object(r.useEffect)((() => Object(Re.a)("reference-element-change", {
                        selector: e
                    }, (({
                        element: e
                    }) => {
                        o(_e(e))
                    }))), [e]), t
                },
                Ne = o(833);

            function Be() {
                return Be = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                    }
                    return e
                }, Be.apply(this, arguments)
            }

            function De(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, i)
                }
                return o
            }

            function Me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? De(Object(o), !0).forEach((function(t) {
                        Fe(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : De(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function Fe(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var ze = ({
                selector: e,
                children: t,
                childDimensions: o,
                pointerKey: i
            }) => {
                const [n, s] = r.useState(null), [a, c] = r.useState(null), l = Ie({
                    selector: e
                }), p = Object(Ne.a)(), h = Object(ee.usePopper)(l, n, {
                    createPopper: ke,
                    placement: "auto",
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            padding: 10
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: a,
                            padding: 25
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: [3, 3]
                        }
                    }]
                }), {
                    styles: d,
                    attributes: m,
                    update: u
                } = h;
                r.useEffect((() => {
                    u && u()
                }), [o, u]);
                const g = {
                        height: `${(o.height||0)+30}px`,
                        width: `${(o.width||0)+30}px`,
                        opacity: `${o.opacity||0}`
                    },
                    b = {
                        height: `${o.height||0}px`,
                        width: `${o.width||0}px`,
                        padding: "15px"
                    },
                    f = Me(Me({}, d.popper), g);
                return r.createElement(r.Fragment, null, r.createElement(Te, {
                    pointerKey: i,
                    style: f
                }, r.createElement("div", Be({
                    ref: s
                }, m.popper, {
                    style: b
                }), r.createElement(Ee, Be({
                    ref: c
                }, m.popper, {
                    style: Me(Me({}, d.arrow), {}, {
                        opacity: `${o.opacity||0}`
                    })
                }), r.createElement(Pe, m.popper)), t)), r.createElement(we.a, {
                    name: "pointer-mask",
                    styles: (() => {
                        if (l) {
                            const {
                                top: e,
                                left: t,
                                width: o,
                                height: i
                            } = l.getBoundingClientRect(), n = `\n        top: ${e-3}px;\n        left: ${t-3}px;\n        width: ${o}px;\n        height: ${i}px;\n        padding: 3px;\n        display: "block";\n      `;
                            return (e => `\n    z-index: 2147483002;\n    position: absolute;\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 0;\n    height: 0;\n    pointer-events: none;\n    border-radius: 1px;\n    box-shadow: 0 0 0 3px ${e.appColor}, 0px 0px 0px 4000px rgba(0, 0, 0, 0.35);\n    border-width: 0;\n  `)(p).concat(n)
                        }
                        return "opacity: 0"
                    })()
                }))
            };

            function He(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, i)
                }
                return o
            }

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? He(Object(o), !0).forEach((function(t) {
                        We(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : He(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function We(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            class tour_TourFrame extends r.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {
                        width: 0,
                        height: 0,
                        opacity: 0,
                        placement: null,
                        hasClickedOverlay: !1,
                        recordFailureStats: !1
                    }, this.handleDimensionFrameSize = ({
                        height: e,
                        width: t
                    }) => {
                        this.setState({
                            width: t,
                            height: e,
                            opacity: 1
                        })
                    }, this.trackingKey = e => {
                        const {
                            isPreviewingTour: t
                        } = this.props;
                        return t ? e + "_preview" : e
                    }, this.handleOnTourContinue = () => {
                        const {
                            onContinue: e,
                            activeStepIndex: t,
                            stepCount: o
                        } = this.props;
                        this.setState({
                            opacity: 0,
                            recordFailureStats: !1
                        }), e();
                        const i = t + 1 === o ? "done" : "next";
                        Object(Q.e)("clicked", i, this.trackingKey("tour"), null, this.trackingMetadata())
                    }, this.handleOnTourReset = () => {
                        const {
                            onReset: e
                        } = this.props;
                        e()
                    }, this.handleOnTourSnooze = () => {
                        const {
                            onSnooze: e
                        } = this.props;
                        e()
                    }, this.handleOnTourStop = () => {
                        const {
                            onStop: e
                        } = this.props;
                        Object(Q.e)("clicked", "stop", this.trackingKey("tour"), null, this.trackingMetadata()), this.setState({
                            opacity: 0,
                            recordFailureStats: !1
                        }), e()
                    }, this.handleMissingCssSelector = () => {
                        const {
                            activeStep: e,
                            onFailure: t,
                            isPreviewingTour: o
                        } = this.props;
                        e.selector && (Object(Q.e)("css_selector_match_failed", this.trackingKey("tour_step"), "positioner", null, Ae(Ae({}, this.trackingMetadata()), this.activeStepSelectorMetadata())), !o && this.state.recordFailureStats && t())
                    }, this.handleTourStepLoad = () => {
                        const {
                            stepCount: e,
                            activeStepIndex: t,
                            onComplete: o
                        } = this.props;
                        t + 1 === e && o(), this.setState({
                            recordFailureStats: !0
                        }), Object(Q.e)("viewed", this.trackingKey("tour_step"), "tour", null, this.trackingMetadata())
                    }, this.handleOverlayClick = () => {
                        Object(Q.e)("clicked", this.trackingKey("outside_tour_step"), "tour", null, this.trackingMetadata()), this.setState({
                            hasClickedOverlay: !0
                        })
                    }, this.resetOverlayClick = () => {
                        this.setState({
                            hasClickedOverlay: !1
                        })
                    }, this.handleTargetClick = () => {
                        this.isClickToProgress() && this.handleOnTourContinue()
                    }, this.handlePlacementChange = e => {
                        this.setState({
                            placement: e
                        })
                    }, this.isClickToProgress = () => "click" === this.props.activeStep.progressionBehavior, this.needsInteractionWithElement = () => {
                        const {
                            progressionBehavior: e
                        } = this.props.activeStep;
                        return "click" === e || "type" === e
                    }, this.getOverlayRenderer = () => {
                        if (this.needsInteractionWithElement()) return this.clickToProgressOverlayRenderer
                    }, this.clickToProgressOverlayRenderer = (e, {
                        appWindow: t
                    }, o) => o ? r.createElement(Y, {
                        onClick: e,
                        targetNode: o,
                        appWindow: t
                    }) : null
                }
                getChildDimensions() {
                    const {
                        width: e,
                        height: t,
                        opacity: o
                    } = this.state;
                    return {
                        width: e,
                        height: t,
                        opacity: o
                    }
                }
                getFrameDimensions() {
                    const {
                        width: e,
                        height: t
                    } = this.state;
                    return {
                        width: e,
                        height: t
                    }
                }
                trackingMetadata() {
                    const {
                        activeTourId: e,
                        activeStep: t,
                        activeStepIndex: o,
                        stepCount: i
                    } = this.props;
                    return {
                        tour_id: e,
                        tour_step_id: t.id,
                        active_step_index: o,
                        step_count: i
                    }
                }
                activeStepSelectorMetadata() {
                    const {
                        activeStep: e
                    } = this.props;
                    let t = !1;
                    if (e.selectors.auto_secondary) try {
                        t = null != window.parent.document.querySelector(e.selectors.auto_secondary)
                    } catch (e) {}
                    return Ae(Ae({}, e.selectors), {}, {
                        secondary_currently_matches: t
                    })
                }
                renderTourStep() {
                    const {
                        appWindow: e,
                        appName: t,
                        author: o,
                        activeStep: i,
                        stepCount: n,
                        activeStepIndex: s,
                        isRestartable: a,
                        isSnoozeable: c,
                        buttonColor: l,
                        snoozeButtonText: p,
                        restartButtonText: d
                    } = this.props, {
                        placement: m
                    } = this.state, u = Object(P.b)(i.blocks);
                    return r.createElement(X, {
                        style: this.getFrameDimensions(),
                        frameName: "intercom-tour-frame",
                        className: "intercom-tour-frame",
                        title: `Intercom live chat ${Object(h.e)("tour")}`,
                        isVideo: u
                    }, (() => r.createElement(L.b, {
                        id: "tour-frame",
                        key: "tour-frame",
                        onChange: this.handleDimensionFrameSize
                    }, r.createElement(tour_step_TourStep, {
                        appWindow: e,
                        appName: t,
                        author: o,
                        step: i,
                        activeStepIndex: s,
                        stepCount: n,
                        selector: i.selector,
                        isRestartable: a,
                        isSnoozeable: c,
                        onLoad: this.handleTourStepLoad,
                        onContinue: this.handleOnTourContinue,
                        onReset: this.handleOnTourReset,
                        onSnooze: this.handleOnTourSnooze,
                        onStop: this.handleOnTourStop,
                        placement: m,
                        hasClickedOverlay: this.state.hasClickedOverlay,
                        resetOverlayClick: this.resetOverlayClick,
                        buttonColor: l,
                        snoozeButtonText: p,
                        restartButtonText: d
                    }))))
                }
                render() {
                    const {
                        appWindow: e,
                        activeStep: t,
                        isAwaitingProgress: o,
                        buttonColor: i
                    } = this.props, n = Object(P.b)(t.blocks);
                    return Object(Z.a)() ? r.createElement(ze, {
                        childDimensions: this.getChildDimensions(),
                        selector: t.selector,
                        pointerKey: `tour-step-${t.id}`,
                        key: `tour-step-${t.id}`
                    }, this.renderTourStep()) : r.createElement(U.a, {
                        appWindow: e,
                        scrollable: !0,
                        targetSelector: t.selector,
                        childDimensions: this.getChildDimensions(),
                        renderFallback: !o,
                        key: `tour-step-${t.id}`,
                        onMissingSelector: this.handleMissingCssSelector,
                        onOverlayClick: this.handleOverlayClick,
                        onTargetClick: this.handleTargetClick,
                        onPlacementChange: this.handlePlacementChange,
                        hideArrow: n || !t.selector,
                        renderOverlay: this.getOverlayRenderer(),
                        shouldAnimate: this.isClickToProgress(),
                        placement: t.placement,
                        buttonColor: i
                    }, this.renderTourStep())
                }
            }
            o.d(t, "mapStateToProps", (function() {
                return Ve
            })), o.d(t, "mapDispatchToProps", (function() {
                return qe
            }));
            const Ve = e => {
                    const t = Object(n.c)(e),
                        o = Object(n.f)(e),
                        i = Object(n.e)(e),
                        s = Object(n.d)(e),
                        r = Object(n.a)(e),
                        a = Object(n.i)(e),
                        c = Object(n.b)(e),
                        l = Object(n.h)(e),
                        p = e.app.name;
                    return {
                        activeTourId: t.id,
                        activeStep: o,
                        activeStepIndex: i,
                        stepCount: s,
                        appName: p,
                        author: r,
                        isPreviewingTour: a,
                        endTourAnimation: c,
                        isAwaitingProgress: l,
                        isRestartable: t.restartable,
                        isSnoozeable: t.snoozeable,
                        buttonColor: t.buttonColor,
                        buttonText: o.buttonText,
                        snoozeButtonText: t.snoozeButtonText,
                        restartButtonText: t.restartButtonText
                    }
                },
                qe = e => ({
                    onContinue: () => {
                        e(Object(s.e)())
                    },
                    onReset: () => {
                        e(Object(s.h)())
                    },
                    onSnooze: () => {
                        e(Object(s.i)())
                    },
                    onStop: () => {
                        e(Object(s.k)())
                    },
                    onComplete: () => {
                        e(Object(s.c)())
                    },
                    onFailure: () => {
                        e(Object(s.f)())
                    }
                });
            t.default = Object(i.connect)(Ve, qe)(tour_TourFrame)
        },
        1035: function(e, t, o) {
            "use strict";
            o.r(t);
            var i = o(596),
                n = o(208),
                s = o.n(n),
                r = o(1),
                a = o.n(r),
                c = o(597),
                l = o(837);
            class message_container_MessageContainer extends r.Component {
                componentDidMount() {
                    const {
                        isFetching: e,
                        isFetched: t,
                        onFetch: o
                    } = this.props;
                    e || t || o()
                }
                render() {
                    const {
                        props: e
                    } = this;
                    return a.a.createElement(c.TransitionGroup, null, e.isFetched ? a.a.createElement(c.CSSTransition, {
                        classNames: "intercom-message",
                        timeout: {
                            enter: 200,
                            exit: 200
                        }
                    }, a.a.createElement(l.a, e)) : null)
                }
            }
            message_container_MessageContainer.propTypes = {
                isFetching: s.a.bool.isRequired,
                isFetched: s.a.bool.isRequired,
                onFetch: s.a.func.isRequired
            };
            var p = o(3),
                h = o(9),
                d = o(97),
                m = o(13);
            o.d(t, "mapStateToProps", (function() {
                return u
            })), o.d(t, "mapDispatchToProps", (function() {
                return g
            })), o.d(t, "mergeProps", (function() {
                return b
            }));
            const u = e => {
                    const t = Object(d.a)(e)[0],
                        {
                            isFetching: o
                        } = t;
                    return {
                        isFetching: o,
                        isFetched: !Object(m.n)(t),
                        conversation: t
                    }
                },
                g = e => ({
                    onFetch: t => {
                        e(Object(h.l)(p.e, t))
                    }
                }),
                b = (e, t, o) => Object.assign({}, e, t, o, {
                    onFetch: () => {
                        t.onFetch(e.conversation.id)
                    }
                });
            t.default = Object(i.connect)(u, g, b)(message_container_MessageContainer)
        },
        1036: function(e, t, o) {
            "use strict";
            o.r(t);
            var i = o(1),
                n = o.n(i),
                s = o(600),
                r = o(844),
                a = o(7),
                c = o(601),
                l = o(87),
                p = o(686);
            const h = Object(a.d)(c.a, {
                target: "e1ii8mwa0"
            })("position:fixed;z-index:", Object(l.m)(), ";", (({
                theme: e
            }) => Object(a.c)("bottom:", Object(l.k)({
                theme: e
            }) - p.d, "px;right:", e.horizontalPaddingPx - p.i, "px;")), " ", (({
                width: e,
                height: t
            }) => Object(a.c)("width:", e + 10, "px;height:", t + 5, "px;")), " ", (({
                theme: e
            }) => e.isLeftAlign && Object(a.c)("left:", e.horizontalPaddingPx - p.i, "px;right:auto;")));
            var d = o(14);
            o.d(t, "default", (function() {
                return notifications_NotificationsFrame
            }));
            class notifications_NotificationsFrame extends i.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        width: 0,
                        height: 0
                    }, this.handleMeasurementChange = ({
                        width: e,
                        height: t
                    }) => {
                        this.setState({
                            width: e,
                            height: t
                        })
                    }
                }
                render() {
                    return n.a.createElement(h, {
                        frameName: "intercom-notifications-frame",
                        title: `Intercom live chat ${Object(d.e)("message")}`,
                        width: this.state.width,
                        height: this.state.height
                    }, ((e, t) => n.a.createElement(s.b, {
                        onChange: this.handleMeasurementChange
                    }, n.a.createElement(r.a, {
                        frameWindow: e,
                        frameNode: t
                    }))))
                }
            }
        },
        1037: function(e, t, o) {
            "use strict";
            o.r(t);
            var i = o(1),
                n = o.n(i),
                s = o(600),
                r = o(844),
                a = o(630);
            var c = ({
                width: e,
                height: t
            }) => `\n  position: fixed;\n  z-index: 2147483003;\n  bottom: 90px;\n  width: ${e+10}px;\n  height: ${t+5}px;\n  right: 15px;\n  border: none;\n`;
            o.d(t, "default", (function() {
                return notifications_NotificationsFrame
            }));
            class notifications_NotificationsFrame extends i.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        width: 0,
                        height: 0
                    }, this.handleMeasurementChange = ({
                        width: e,
                        height: t
                    }) => {
                        this.setState({
                            width: e,
                            height: t
                        })
                    }
                }
                render() {
                    const {
                        width: e,
                        height: t
                    } = this.state, o = c({
                        height: t,
                        width: e
                    });
                    return n.a.createElement(a.a, {
                        name: "notifications",
                        styles: o
                    }, n.a.createElement(s.b, {
                        onChange: this.handleMeasurementChange
                    }, n.a.createElement(r.a, {
                        frameWindow: window,
                        frameNode: window.document.body
                    })))
                }
            }
        },
        1038: function(e, t, o) {
            "use strict";
            o.r(t);
            var i = o(596),
                n = o(840),
                s = o(837),
                r = o(18),
                a = o(16),
                c = o(3),
                l = o(17),
                p = o(0);
            const h = () => ({
                type: p.u
            });
            var d = o(9),
                m = o(324),
                u = o(274);
            o.d(t, "mapStateToProps", (function() {
                return g
            }));
            const g = e => {
                const {
                    isPresent: t
                } = e.user, {
                    name: o,
                    userConversationAttachmentsEnabled: i,
                    userConversationGifsEnabled: n
                } = e.app, s = Object(u.a)(e), c = s[0], l = a.a.isMobileBrowser(), p = s[0].parts[0], h = Object(r.u)(e), {
                    upfrontEmailCollectorShowing: d
                } = e.app.upfrontEmailCollection;
                return {
                    appName: o,
                    conversation: c,
                    part: p,
                    userIsPresent: t,
                    isMobile: l,
                    showUploadButton: i,
                    showGifButton: n,
                    shouldShowUpfrontEmailComposer: h,
                    isUpfrontEmailComposerShowing: d
                }
            };
            t.default = Object(i.connect)(g, (e => ({
                onOpen: (t, o) => {
                    e(((e, t) => ({
                        type: p.nc,
                        conversationId: e,
                        partId: t
                    }))(t, o))
                },
                onClose: t => {
                    e(h()), e(Object(m.a)(t))
                },
                onConversationRead: t => {
                    e(Object(d.m)(c.e, t))
                },
                onComposerOrFormInputClick: t => {
                    e(h()), e(Object(m.a)(t)), e(Object(l.f)(t)), e(Object(d.l)(c.e, t))
                },
                onReactionSelect: (t, o) => {
                    e(Object(d.k)(c.e, t, o, !1))
                }
            })), s.b)(n.a)
        },
        686: function(e, t, o) {
            "use strict";
            o.d(t, "i", (function() {
                return r
            })), o.d(t, "c", (function() {
                return a
            })), o.d(t, "d", (function() {
                return c
            })), o.d(t, "a", (function() {
                return l
            })), o.d(t, "b", (function() {
                return p
            })), o.d(t, "g", (function() {
                return m
            })), o.d(t, "h", (function() {
                return g
            })), o.d(t, "f", (function() {
                return b
            })), o.d(t, "e", (function() {
                return f
            }));
            var i = o(7),
                n = o(698),
                s = o(612);
            const r = 5,
                a = 7,
                c = 10,
                l = 300,
                p = c + 120,
                h = "cubic-bezier(0.165, 0.84, 0.44, 1)",
                d = Object(i.e)("0%{opacity:0;transform:translateY(20px);}30%{opacity:1;}100%{opacity:1;transform:translateY(0);}"),
                m = Object(i.d)("div", {
                    target: "ep19hdq0"
                })("padding:0 ", r, "px;");
            var u = {
                name: "1fcc2f6",
                styles: "box-shadow:0 2px 8px 0 rgba(35,47,53,0.2);"
            };
            const g = Object(i.d)("div", {
                    target: "ep19hdq1"
                })("position:relative;height:", Object(i.f)("height"), "px;width:", 340, "px;max-width:100%;padding-bottom:", c, "px;", s.c.className, "{height:", 120, "px;", (({
                    theme: e
                }) => e.isMobile && u), ";}", n.a.className, "{animation:", d, " 0.25s ", h, ";}"),
                b = Object(i.d)("div", {
                    target: "ep19hdq2"
                })("box-sizing:border-box;position:absolute;bottom:", c, "px;right:0px;width:100%;backface-visibility:hidden;transform-origin:top center;transition:transform ", l, "ms ", h, ";", (({
                    position: e
                }) => 2 === e && Object(i.c)("transform:translate3d(0,-", a, "px,0) scale(0.95);")), " ", (({
                    position: e
                }) => 3 === e && Object(i.c)("transform:translate3d(0,-", 2 * a, "px,0) scale(0.9);")), " ", (({
                    position: e,
                    expanded: t
                }) => 2 === e && t && Object(i.c)("transition-delay:150ms;transform:translate3d(0,-", p, "px,0) scale(1);")), " ", (({
                    position: e,
                    expanded: t
                }) => 3 === e && t && Object(i.c)("transition-delay:150ms;transform:translate3d(0,-", 2 * p, "px,0) scale(1);"))),
                f = Object(i.d)("div", {
                    target: "ep19hdq3"
                })("padding-top:", c, "px;:after{content:'';clear:both;display:table;}", n.b.className, "{transition:opacity ", l / 1.5, "ms ", h, ";", (({
                    expandAnimationInProgress: e
                }) => e && Object(i.c)("transition-delay:", l, "ms;")), "}")
        },
        837: function(e, t, o) {
            "use strict";
            o.d(t, "b", (function() {
                return v
            }));
            var i = o(596),
                n = o(840),
                s = o(18),
                r = o(3),
                a = o(16),
                c = o(71),
                l = o(17),
                p = o(9),
                h = o(45),
                d = o(97),
                m = o(13),
                u = o(276),
                g = o(246),
                b = o(683),
                f = o(12);
            const v = (e, t, o) => {
                const {
                    officeHoursResponse: i
                } = e;
                return Object.assign({}, e, t, o, {
                    onOpen: () => {
                        const {
                            conversation: o,
                            part: i
                        } = e;
                        t.onOpen(o.id, i.id)
                    },
                    onConversationRead: () => {
                        t.onConversationRead(e.conversation.id)
                    },
                    onComposerOrFormInputClick: () => {
                        t.onComposerOrFormInputClick(e.conversation.id)
                    },
                    onReactionSelect: o => {
                        t.onReactionSelect(e.conversation.id, o)
                    },
                    onClose: () => {
                        const {
                            conversation: o
                        } = e;
                        t.onClose(o.id)
                    },
                    onSuggestionClicked: o => {
                        const {
                            conversation: n
                        } = e, s = Object(b.c)(n);
                        t.onSuggestionClicked(n, o, s, i)
                    },
                    setComposerSuggestionsDismissed: () => {
                        t.setComposerSuggestionsDismissed(e.conversation.id)
                    }
                })
            };
            t.a = Object(i.connect)((e => {
                const {
                    isPresent: t
                } = e.user, {
                    name: o,
                    userConversationAttachmentsEnabled: i,
                    userConversationGifsEnabled: n
                } = e.app, {
                    partId: r
                } = e.message, c = Object(d.a)(e)[0], l = a.a.isMobileBrowser();
                let p = void 0 !== r ? c.parts.find((e => e.id === r)) : (e => e.readAt ? Object(m.s)(e) : Object(m.c)(e))(c),
                    {
                        messageType: h
                    } = p || {};
                h = h || "adminReply", p = Object.assign({}, p, {
                    messageType: h
                });
                const u = Object(s.u)(e),
                    {
                        upfrontEmailCollectorShowing: g
                    } = e.app.upfrontEmailCollection,
                    v = Object(b.a)(c)(e),
                    O = e.app && e.app.officeHoursResponse;
                return {
                    appName: o,
                    conversation: c,
                    conversationSuggestions: v,
                    part: p,
                    userIsPresent: t,
                    isMobile: l,
                    showUploadButton: i,
                    showGifButton: n,
                    m5Enabled: Object(f.h)(e),
                    shouldShowUpfrontEmailComposer: u,
                    isUpfrontEmailComposerShowing: g,
                    officeHoursResponse: O
                }
            }), (e => ({
                onOpen: (t, o) => {
                    e(Object(c.b)(t, o)), e(Object(c.c)(t, o))
                },
                onClose: t => {
                    e(Object(h.b)(r.e, [t])), e(Object(c.a)())
                },
                onConversationRead: t => {
                    e(Object(p.m)(r.e, t))
                },
                onComposerOrFormInputClick: t => {
                    e(Object(c.a)()), e(Object(l.f)(t)), e(Object(p.l)(r.e, t))
                },
                onReactionSelect: (t, o) => {
                    e(Object(p.k)(r.e, t, o, !1))
                },
                onSuggestionClicked: (t, o, i, n) => {
                    e(Object(u.a)(r.e, t, o, !1, i, !0, n))
                },
                setComposerSuggestionsDismissed: t => {
                    e(Object(g.b)(t))
                }
            })), v)(n.a)
        },
        838: function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return Snippet
            }));
            var i = o(208),
                n = o.n(i),
                s = o(1),
                r = o.n(s),
                a = o(607),
                c = o(631),
                l = o(613),
                p = o(735),
                h = o(59),
                d = o(651),
                m = o(13),
                u = o(751),
                g = o(139),
                b = o(698),
                f = o(820),
                v = o(4);
            class Snippet extends s.Component {
                constructor(...e) {
                    super(...e), this.addSnippetMetric = e => {
                        const {
                            conversation: t
                        } = this.props, o = Object(m.s)(t);
                        Object(v.e)(e, "snippet", "in_app", "", {
                            conversation_id: t.id,
                            part_id: o.id,
                            part_type: o.messageType
                        })
                    }, this.addClickedMetric = () => {
                        this.addSnippetMetric("clicked")
                    }, this.handleClick = () => {
                        const {
                            conversation: e,
                            onClick: t
                        } = this.props;
                        this.addClickedMetric(), t(e)
                    }
                }
                componentDidMount() {
                    this.addSnippetMetric("received")
                }
                shouldRenderChatStyle() {
                    const {
                        conversation: e,
                        stack: t,
                        m5Enabled: o
                    } = this.props;
                    return !o && ((Object(m.k)(e) || Object(m.j)(e)) && !t)
                }
                getConversationParts() {
                    return this.props.conversation.parts.filter((e => !1 === Object(g.a)(e.partType)))
                }
                renderBody(e) {
                    if (1 === e.length && Object(d.c)(e[0])) return r.a.createElement(u.a, {
                        text: Object(h.d)(e[0])
                    });
                    const {
                        summaryText: t
                    } = Object(h.e)(this.getConversationParts());
                    return r.a.createElement(a.a, {
                        text: t
                    })
                }
                renderPlainStyle(e, t, o, i) {
                    return r.a.createElement(b.a, null, r.a.createElement(f.f, {
                        className: "intercom-snippet",
                        onClick: this.handleClick
                    }, r.a.createElement(c.a, {
                        appName: o,
                        author: e,
                        isReplyStyle: i,
                        m5Enabled: this.props.m5Enabled,
                        lastPartCreatedAt: this.props.conversation.lastPartCreatedAt
                    }, r.a.createElement(f.e, {
                        m5Enabled: this.props.m5Enabled
                    }, this.renderBody(t)))))
                }
                renderChatStyle(e, t, o, i) {
                    return r.a.createElement(b.a, null, r.a.createElement(f.d, {
                        className: "intercom-chat-snippet",
                        onClick: this.handleClick
                    }, r.a.createElement(f.a, null, r.a.createElement(l.a, {
                        author: e
                    })), r.a.createElement(f.c, null, r.a.createElement(p.a, {
                        author: e,
                        appName: o,
                        isReplyStyle: i
                    }), r.a.createElement(f.b, null, this.renderBody(t)))))
                }
                render() {
                    const {
                        appName: e,
                        conversation: {
                            userParticipated: t
                        }
                    } = this.props, o = Object(m.e)(this.props.conversation);
                    if (!o) return null;
                    const {
                        author: i,
                        body: n
                    } = o;
                    return this.shouldRenderChatStyle() ? this.renderChatStyle(i, n, e, t) : this.renderPlainStyle(i, n, e, t)
                }
            }
            Snippet.defaultProps = {
                stack: !1
            }, Snippet.propTypes = {
                conversation: n.a.shape({
                    id: n.a.any.isRequired,
                    parts: n.a.arrayOf(n.a.shape({
                        author: n.a.object.isRequired,
                        body: n.a.array.isRequired
                    })).isRequired,
                    userParticipated: n.a.bool.isRequired,
                    lastPartCreatedAt: n.a.object
                }).isRequired,
                appName: n.a.string.isRequired,
                stack: n.a.bool.isRequired,
                onClick: n.a.func.isRequired,
                m5Enabled: n.a.bool
            }, Snippet.defaultProps = {
                m5Enabled: !1
            }
        },
        840: function(e, t, o) {
            "use strict";
            var i = o(208),
                n = o.n(i),
                s = o(1),
                r = o.n(s),
                a = o(849),
                c = o(744),
                l = o(14),
                p = o(215),
                h = o(216),
                d = o(217),
                m = o(615),
                u = o(7),
                g = o(650);
            const b = Object(u.e)("0%{opacity:0;}70%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);}"),
                f = Object(u.d)("div", {
                    target: "e1k2dwip0"
                })("position:relative;box-sizing:border-box;padding:17px 20px;margin-top:5px;width:100%;height:", Object(u.g)("chatComposerHeightPx"), "px;background-color:", Object(u.g)("inputBackground"), ";border-radius:", Object(u.g)("notificationBorderRadiusPx"), "px;border:none;font-size:14px;cursor:pointer;color:", Object(u.g)("inputPlaceholder"), ";box-shadow:0 1px 6px rgba(0,0,0,0.06),0 2px 32px rgba(0,0,0,0.16);animation:", b, " 750ms ease;", (({
                    theme: e,
                    useBorderlessAvatarOffset: t
                }) => e.isLeftAlign && t && Object(u.c)("margin-left:", -e.borderlessAvatarOffsetWidthPx, "px;width:calc(100% + ", e.borderlessAvatarOffsetWidthPx, "px);"))),
                v = Object(u.d)("span", {
                    target: "e1k2dwip1"
                })({
                    name: "1rju6wc",
                    styles: "display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:140px;line-height:18px;"
                }),
                O = Object(u.d)("div", {
                    target: "e1k2dwip2"
                })({
                    name: "1cp2t9f",
                    styles: "position:absolute;top:0;right:18px;"
                }),
                y = Object(u.d)("span", {
                    target: "e1k2dwip3"
                })({
                    name: "pctu5d",
                    styles: "position:relative;float:left;display:inline-block;cursor:pointer;opacity:0.8;transition:opacity 200ms ease;height:51px;margin-top:2px;&:hover{opacity:1;}&:before{position:absolute;top:20px;background-position:center;}svg{position:absolute;top:18px;}"
                }, ";width:", 18, "px;padding-left:", 9, "px;padding-right:", 9, "px;svg{height:18px;width:18px;}svg path{fill:", Object(u.g)("grey"), ";}&:before{top:18px;}"),
                C = Object(u.d)(g.a, {
                    target: "e1k2dwip4"
                })({
                    name: "g6u7x8",
                    styles: "right:18px;"
                }),
                x = Object(u.d)(g.c, {
                    target: "e1k2dwip5"
                })({
                    name: "1yphczb",
                    styles: "&:before{top:18px;}"
                }),
                S = Object(u.d)(g.j, {
                    target: "e1k2dwip6"
                })({
                    name: "1yphczb",
                    styles: "&:before{top:18px;}"
                });
            class mobile_chat_MobileChat extends s.Component {
                constructor(...e) {
                    super(...e), this.handleDismissClick = e => {
                        e.stopPropagation(), this.props.onClose()
                    }
                }
                renderComposer() {
                    const {
                        firstName: e
                    } = this.props.part.author;
                    return s.createElement(f, {
                        useBorderlessAvatarOffset: !0
                    }, s.createElement(v, {
                        className: "chat-composer-placeholder"
                    }, Object(l.e)("reply_to_name", {
                        name: e
                    })), s.createElement(C, null, s.createElement(x, null, s.createElement(d.a, null)), s.createElement(S, null, s.createElement(h.a, null))))
                }
                renderAttributeCollectorCard() {
                    const {
                        part: e,
                        frameWindow: t
                    } = this.props;
                    return s.createElement(c.a, {
                        part: e,
                        hasAvatar: !1,
                        isBorderless: !0,
                        isReplyType: !0,
                        frameWindow: t,
                        key: Object(p.a)(JSON.stringify(e))
                    })
                }
                renderDismissButton() {
                    return s.createElement(m.b, {
                        onClick: this.handleDismissClick,
                        "aria-label": Object(l.e)("clear")
                    }, s.createElement("span", null, Object(l.e)("clear")))
                }
                renderReplyType() {
                    const {
                        part: e
                    } = this.props;
                    return "attribute_collector" === e.replyType ? this.renderAttributeCollectorCard() : this.renderComposer()
                }
                renderChatCardGroup() {
                    const {
                        appName: e,
                        part: t,
                        frameWindow: o
                    } = this.props;
                    return s.createElement(a.a, {
                        appName: e,
                        part: t,
                        isBorderless: !0,
                        isMobile: !0,
                        frameWindow: o
                    })
                }
                render() {
                    const {
                        composerState: e,
                        onComposerOrFormInputClick: t
                    } = this.props;
                    return s.createElement(m.a, {
                        className: "intercom-chat",
                        onClick: t
                    }, this.renderChatCardGroup(), this.renderDismissButton(), e.visible && this.renderReplyType())
                }
            }
            var j = o(600),
                k = o(601),
                w = o(87);
            var E = {
                name: "145vpms",
                styles: "left:0;right:auto;"
            };
            const P = Object(u.d)(k.a, {
                target: "ewqoaci0"
            })("z-index:", Object(w.m)(), ";position:fixed;max-width:360px;width:calc(100% - 25px);right:0;", (({
                height: e
            }) => Object(u.c)("bottom:0;height:", e + 20, "px;")), " ", (({
                theme: e
            }) => e.isLeftAlign && E), " ", (({
                theme: e,
                height: t
            }) => e.isLauncherEnabled && Object(u.c)("height:", t + e.launcherOffsetBottomPaddingPx + 20, "px;")));
            var T = o(632);

            function R(e) {
                const {
                    appName: t,
                    part: o,
                    onClose: i,
                    onComposerOrFormInputClick: n,
                    composerState: a
                } = e, [c, p] = Object(s.useState)(0), h = ({
                    height: e
                }) => p(e);
                return r.a.createElement(P, {
                    frameName: "intercom-chat-frame",
                    height: c,
                    title: `Intercom live chat ${Object(l.e)("message")}`
                }, (e => r.a.createElement(r.a.Fragment, null, r.a.createElement(j.b, {
                    onChange: h
                }, r.a.createElement(mobile_chat_MobileChat, {
                    appName: t,
                    part: o,
                    onClose: i,
                    composerState: a,
                    onComposerOrFormInputClick: n,
                    frameWindow: e
                })), r.a.createElement(T.a, {
                    appWindow: e
                }))))
            }
            var _ = o(636),
                I = o(602),
                N = o(631),
                B = o(655),
                D = o(30),
                M = o(236),
                F = o(749),
                z = o(4),
                H = o(620),
                A = o(681),
                W = o(617);

            function V() {
                return V = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                    }
                    return e
                }, V.apply(this, arguments)
            }
            class note_Note extends s.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        isFooterVisible: !0,
                        isScrolled: !1
                    }, this.handleScroll = e => {
                        const {
                            isFooterVisible: t
                        } = this.state, o = Object(D.o)(e.target);
                        this.setState({
                            isFooterVisible: t || o <= this.getFooterHeight(),
                            isScrolled: e.target.scrollTop > 0
                        }), Object(A.a)(e)
                    }, this.handleScrollable = e => {
                        const t = e.scrollHeight - e.clientHeight,
                            o = this.state.isFooterVisible || void 0 === this.props.reactionsReply || t <= this.getReactionsVisibilityThreshold();
                        this.setState({
                            isFooterVisible: o
                        })
                    }, this.addClickedComposerMetric = () => {
                        const {
                            message: {
                                id: e
                            },
                            conversationId: t
                        } = this.props;
                        Object(z.e)("clicked", "composer", "in_app", "from_full", {
                            message_type: "note",
                            message_id: e,
                            conversation_id: t
                        })
                    }, this.handleComposerClick = () => {
                        this.addClickedComposerMetric(), this.props.onComposerClick()
                    }
                }
                getReactionsVisibilityThreshold() {
                    return this.getFooterHeight() + 20
                }
                getFooterHeight() {
                    return this.footer ? this.footer.clientHeight : 0
                }
                renderFooter() {
                    const {
                        composerVisible: e,
                        showUploadButton: t,
                        showGifButton: o,
                        showReplyToButton: i,
                        m5Enabled: n
                    } = this.props;
                    return e ? i ? r.a.createElement(F.a, {
                        onClick: this.handleComposerClick
                    }) : r.a.createElement(H.c, {
                        className: "intercom-note-composer",
                        onClick: this.handleComposerClick,
                        "aria-label": Object(l.e)("open_conversation_and_reply")
                    }, r.a.createElement(g.f, null, Object(l.e)("reply_to_conversation")), r.a.createElement(g.a, null, o ? r.a.createElement(g.e, null, n ? r.a.createElement(W.b, {
                        type: "ComposerGif",
                        size: 16
                    }) : r.a.createElement(M.a, null)) : null, r.a.createElement(g.c, null, n ? r.a.createElement(W.b, {
                        type: "ComposerEmoji",
                        size: 16
                    }) : r.a.createElement(d.a, null)), t ? r.a.createElement(g.j, null, n ? r.a.createElement(W.b, {
                        type: "ComposerAttachment",
                        size: 16
                    }) : r.a.createElement(h.a, null)) : null)) : null
                }
                renderReactionPicker() {
                    const {
                        reactionsReply: e,
                        onReactionSelect: t
                    } = this.props;
                    return r.a.createElement(B.a, V({}, e, {
                        onReactionSelect: t
                    }))
                }
                render() {
                    const {
                        appName: e,
                        message: t,
                        reactionsReply: o,
                        onClose: i,
                        frameWindow: n,
                        showReplyToButton: s,
                        composerVisible: a
                    } = this.props, {
                        isScrolled: c,
                        isFooterVisible: p
                    } = this.state, {
                        author: h,
                        lastActiveAt: d,
                        body: m
                    } = t;
                    return r.a.createElement(H.f, {
                        className: "intercom-note",
                        isScrolled: c
                    }, r.a.createElement(N.a, {
                        appName: e,
                        isReplyStyle: !1,
                        author: h,
                        lastActiveAt: d
                    }, r.a.createElement(H.b, {
                        className: "intercom-anchor",
                        onClick: i,
                        "aria-label": Object(l.e)("close")
                    }, " "), r.a.createElement(H.a, {
                        showReplyToButton: s
                    }, r.a.createElement(_.a, {
                        onScroll: this.handleScroll,
                        onScrollable: this.handleScrollable
                    }, r.a.createElement(I.a, {
                        blocks: m,
                        zoomable: !0,
                        frameWindow: n
                    }), a && r.a.createElement(H.e, null))), r.a.createElement(H.d, {
                        ref: e => this.footer = e,
                        isFooterVisible: p,
                        showReplyToButton: s
                    }, o ? this.renderReactionPicker() : this.renderFooter())))
                }
            }
            note_Note.propTypes = {
                appName: n.a.string.isRequired,
                message: n.a.shape({
                    id: n.a.string.isRequired,
                    author: n.a.object.isRequired,
                    body: n.a.array.isRequired,
                    lastActiveAt: n.a.instanceOf(Date)
                }).isRequired,
                conversationId: n.a.string,
                reactionsReply: n.a.shape({
                    reactionIndex: n.a.number,
                    reactionSet: n.a.array.isRequired
                }),
                onClose: n.a.func,
                onComposerClick: n.a.func,
                onReactionSelect: n.a.func,
                frameWindow: n.a.object,
                showUploadButton: n.a.bool,
                showGifButton: n.a.bool,
                showReplyToButton: n.a.bool,
                composerVisible: n.a.bool,
                m5Enabled: n.a.bool
            }, note_Note.defaultProps = {
                showUploadButton: !0,
                showGifButton: !0
            };
            var q = {
                name: "fnfiys",
                styles: "right:0;left:0;margin:0 auto;"
            };
            const L = Object(u.d)(k.a, {
                target: "e12tcwm10"
            })("position:fixed;bottom:", Object(w.j)(), "px;right:", Object(u.g)("horizontalPaddingPx"), "px;width:342px;z-index:", Object(w.m)(1), ";box-shadow:0 3px 32px 0 rgba(0,0,0,0.14);", (({
                theme: e
            }) => e.isLeftAlign && Object(u.c)("left:", e.horizontalPaddingPx, "px;right:auto;")), " ", (({
                theme: e
            }) => e.isMobileSize && q));
            class note_NoteFrame extends s.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        height: 0
                    }, this.handleHeightChange = ({
                        height: e
                    }) => {
                        this.setState({
                            height: e
                        })
                    }
                }
                render() {
                    const {
                        conversationId: e,
                        composerVisible: t,
                        appName: o,
                        message: i,
                        reactionsReply: n,
                        showUploadButton: s,
                        showGifButton: a,
                        onComposerClick: c,
                        onReactionSelect: p,
                        showReplyToButton: h,
                        onClose: d,
                        m5Enabled: m
                    } = this.props, {
                        height: u
                    } = this.state;
                    return r.a.createElement(L, {
                        style: {
                            height: u
                        },
                        frameName: "intercom-note-frame",
                        title: `Intercom live chat ${Object(l.e)("message")}`
                    }, (l => r.a.createElement("span", null, r.a.createElement(j.b, {
                        id: "note-frame",
                        key: "note-frame",
                        onChange: this.handleHeightChange
                    }, r.a.createElement(note_Note, {
                        frameWindow: l,
                        conversationId: e,
                        composerVisible: t,
                        appName: o,
                        message: i,
                        reactionsReply: n,
                        showUploadButton: s,
                        showGifButton: a,
                        onClose: d,
                        onComposerClick: c,
                        onReactionSelect: p,
                        showReplyToButton: h,
                        m5Enabled: m
                    })), r.a.createElement(T.a, {
                        appWindow: l
                    }))))
                }
            }
            var U = o(260),
                $ = o(616);

            function G() {
                return G = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                    }
                    return e
                }, G.apply(this, arguments)
            }
            class pointer_Pointer extends s.Component {
                constructor(...e) {
                    super(...e), this.node = void 0, this.state = {
                        isFooterVisible: !0,
                        isScrolled: !1
                    }, this.footer = void 0, this.handleScroll = e => {
                        const {
                            isFooterVisible: t
                        } = this.state, o = Object(D.o)(e.target);
                        this.setState({
                            isFooterVisible: t || o <= this.getFooterHeight(),
                            isScrolled: e.target.scrollTop > 0
                        })
                    }, this.handleScrollable = e => {
                        const t = e.scrollHeight - e.clientHeight,
                            o = this.state.isFooterVisible || void 0 === this.props.reactionsReply || t <= this.getReactionsVisibilityThreshold();
                        this.setState({
                            isFooterVisible: o
                        })
                    }, this.isReplyDisabled = () => {
                        const {
                            replyType: e
                        } = this.props.message;
                        return "disabled" === e
                    }, this.addClickedComposerMetric = () => {
                        const {
                            message: {
                                id: e
                            },
                            conversationId: t
                        } = this.props;
                        Object(z.e)("clicked", "composer", "in_app", "from_full", {
                            message_type: "pointer",
                            message_id: e,
                            conversation_id: t
                        })
                    }, this.handleComposerClick = () => {
                        this.addClickedComposerMetric(), this.props.onComposerClick()
                    }
                }
                getReactionsVisibilityThreshold() {
                    return this.getFooterHeight() + 20
                }
                getFooterHeight() {
                    return this.footer ? this.footer.clientHeight : 0
                }
                renderFooter(e) {
                    return this.isReplyDisabled() ? null : s.createElement($.d, {
                        ref: e => this.footer = e,
                        isFooterVisible: this.state.isFooterVisible
                    }, e ? this.renderReactionPicker() : this.renderChatComposer())
                }
                renderChatComposer() {
                    return s.createElement($.c, {
                        className: "intercom-pointer-composer",
                        onClick: this.handleComposerClick
                    }, s.createElement("span", null, s.createElement(U.a, null)), s.createElement(g.f, null, Object(l.e)("start_a_conversation")))
                }
                renderReactionPicker() {
                    const {
                        reactionsReply: e,
                        onReactionSelect: t
                    } = this.props;
                    return s.createElement(B.a, G({}, e, {
                        onReactionSelect: t
                    }))
                }
                render() {
                    const {
                        appName: e,
                        message: t,
                        reactionsReply: o,
                        onClose: i,
                        frameWindow: n
                    } = this.props, {
                        author: r,
                        lastActiveAt: a,
                        body: c
                    } = t;
                    return s.createElement($.e, {
                        isInbox: !1,
                        isScrolled: this.state.isScrolled,
                        ref: e => this.node = e,
                        className: "intercom-pointer"
                    }, s.createElement(N.a, {
                        appName: e,
                        isReplyStyle: !1,
                        author: r,
                        lastActiveAt: a
                    }, s.createElement($.b, {
                        onClick: i,
                        "aria-label": Object(l.e)("close")
                    }, " "), s.createElement($.a, {
                        intercomRepliesDisabled: this.isReplyDisabled()
                    }, s.createElement(_.a, {
                        onScroll: this.handleScroll,
                        onScrollable: this.handleScrollable
                    }, s.createElement(I.a, {
                        blocks: c,
                        zoomable: !0,
                        frameWindow: n
                    }))), this.renderFooter(o)))
                }
            }
            var Y = o(845);
            const K = Object(u.d)(k.a, {
                target: "e1gikcy0"
            })("z-index:", Object(w.m)(1), ";border-radius:5px;box-shadow:0 3px 32px 0 rgba(0,0,0,0.14);border:1px solid rgba(0,0,0,0.1);");
            class pointer_PointerFrame extends s.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {
                        width: 0,
                        height: 0
                    }, this.handleDimensionFrameSize = ({
                        height: e,
                        width: t
                    }) => {
                        this.setState({
                            width: t,
                            height: e
                        })
                    }
                }
                frameStyles() {
                    const {
                        width: e,
                        height: t
                    } = this.state;
                    return {
                        width: e,
                        height: t,
                        opacity: 1
                    }
                }
                render() {
                    const {
                        appName: e,
                        appWindow: t,
                        message: o,
                        conversationId: i,
                        onClose: n,
                        reactionsReply: r,
                        onComposerClick: a,
                        onReactionSelect: c
                    } = this.props;
                    return s.createElement(Y.a, {
                        appWindow: t,
                        targetSelector: o.pointerSelector,
                        childDimensions: this.frameStyles(),
                        placement: 0,
                        buttonColor: null
                    }, s.createElement(K, {
                        style: this.frameStyles(),
                        frameName: "intercom-pointer-frame",
                        title: `Intercom live chat ${Object(l.e)("pointer")}`
                    }, (() => s.createElement(j.b, {
                        id: "pointer-frame",
                        key: "pointer-frame",
                        onChange: this.handleDimensionFrameSize
                    }, s.createElement(pointer_Pointer, {
                        appName: e,
                        message: o,
                        conversationId: i,
                        reactionsReply: r,
                        frameWindow: t,
                        onComposerClick: a,
                        onReactionSelect: c,
                        onClose: n
                    })))))
                }
            }
            var J = o(817),
                X = o(597),
                Q = o(846),
                Z = o(699),
                ee = o.n(Z),
                te = o(700),
                oe = o.n(te),
                ie = {
                    name: "siiwv4",
                    styles: "&:hover .story-dismiss-button{opacity:1;}"
                };
            const ne = Object(u.d)("div", {
                target: "eprcjzc0"
            })("z-index:", Object(w.m)(1), ";font-size:13px;font-family:", Object(u.g)("fontSansSerif"), ";color:", Object(u.g)("bodyText"), ";position:relative;", (({
                theme: e,
                standalone: t
            }) => t && Object(u.c)("position:fixed;bottom:", e.verticalPaddingPx, "px;right:", e.horizontalPaddingPx, "px;")), " ", (({
                isVideoLoaded: e
            }) => e && ie), " ", (({
                theme: e
            }) => e.isLauncherEnabled && Object(u.c)("bottom:", e.verticalPaddingPx + e.launcherOffsetBottomPaddingPx, "px;")));
            var se = {
                    name: "1c9b7w0",
                    styles: "width:240px;height:180px;margin-left:10px;"
                },
                re = {
                    name: "dxx3wj",
                    styles: "margin-top:42px;"
                },
                ae = {
                    name: "ajzub1",
                    styles: "margin-top:54px;"
                };
            const ce = Object(u.d)("div", {
                    target: "eprcjzc1"
                })("position:relative;overflow:hidden;box-shadow:0px 2px 16px rgba(0,0,0,0.14),0px 1px 6px rgba(0,0,0,0.06);border-radius:5px;transition:transform 150ms ease,width 200ms ease,height 200ms ease,margin 200ms;transform-origin:bottom right;width:340px;height:255px;", (({
                    standalone: e
                }) => e && ae), " ", (({
                    standalone: e,
                    isExpanded: t
                }) => e && t && re), " ", (({
                    theme: e
                }) => e.isMobileSize && se)),
                le = Object(u.d)("div", {
                    target: "eprcjzc2"
                })("position:absolute;top:0;/* @noflip */ right:0;display:block;opacity:0;transition:opacity 150ms ease;span{display:block;background-color:#5d6c80;opacity:0.8;color:", Object(u.g)("white"), ";font-size:13px;height:32px;line-height:32px;padding:0 16px 0 16px;border-radius:16px;cursor:pointer;background-position:center;", Object(w.b)(ee.a, oe.a, "8px", "8px"), ";&:hover{opacity:1;}}"),
                pe = Object(u.d)("div", {
                    target: "eprcjzc3"
                })("position:absolute;width:100%;z-index:", Object(w.m)(1), ";top:0;left:0;right:0;bottom:0;cursor:pointer;"),
                he = Object(u.d)("div", {
                    target: "eprcjzc4"
                })({
                    name: "maq7xh",
                    styles: ".chat-composer{margin-top:10px;}&.video-composer-enter{.chat-composer{display:block;height:0;opacity:0;overflow:hidden;padding-top:0;padding-bottom:0;margin-top:0;}.composer-placeholder,.composer-buttons{opacity:0;transition:opacity 200ms ease;transition-delay:200ms;}}&.video-composer-enter-active{.chat-composer{opacity:1;height:52px;padding-top:17px;padding-bottom:17px;transition-property:height,opacity,padding,margin;transition-duration:200ms;transition-timing-function:ease;margin-top:10px;}.composer-placeholder,.composer-buttons{opacity:1;}}"
                });
            var de = o(708);
            class story_Story extends s.Component {
                constructor(...e) {
                    super(...e), this.video = void 0, this.state = {
                        isExpanded: !1,
                        isVideoLoaded: !1
                    }, this.handleOverlayClick = () => {
                        this.state.isVideoLoaded && this.setState({
                            isExpanded: !0
                        })
                    }, this.handleVideoLoaded = () => {
                        this.setState({
                            isVideoLoaded: !0
                        })
                    }
                }
                renderDismissButton() {
                    return this.props.standalone ? s.createElement(le, {
                        className: "story-dismiss-button",
                        onClick: this.props.onClose
                    }, s.createElement("span", null)) : null
                }
                renderOverlay() {
                    return this.state.isExpanded ? null : s.createElement(pe, {
                        className: "story-overlay",
                        onClick: this.handleOverlayClick
                    })
                }
                renderComposer() {
                    const {
                        part: e,
                        onComposerOrFormInputClick: t
                    } = this.props, {
                        firstName: o
                    } = e.author;
                    return s.createElement(X.CSSTransition, {
                        classNames: "video-composer",
                        timeout: {
                            enter: 400,
                            exit: 400
                        }
                    }, s.createElement(he, null, s.createElement(f, {
                        className: "chat-composer",
                        onClick: t,
                        "aria-label": Object(l.e)("open_conversation_and_reply"),
                        useBorderlessAvatarOffset: !1
                    }, s.createElement(v, {
                        className: "composer-placeholder"
                    }, Object(l.e)("reply_to_name", {
                        name: o
                    })), s.createElement(O, {
                        className: "composer-buttons"
                    }, s.createElement(y, null, s.createElement(d.a, null)), s.createElement(y, null, s.createElement(h.a, null))))))
                }
                renderSuggestions() {
                    const {
                        onSuggestionClicked: e,
                        setComposerSuggestionsDismissed: t,
                        conversationSuggestions: o,
                        conversation: i
                    } = this.props;
                    return s.createElement(de.a, {
                        conversation: i,
                        conversationSuggestions: o,
                        setComposerSuggestionsDismissed: t,
                        onClick: e
                    })
                }
                renderResponseArea() {
                    return this.state.isExpanded && this.props.showResponseArea ? this.props.conversationSuggestions ? this.renderSuggestions() : this.renderComposer() : null
                }
                render() {
                    const {
                        part: {
                            body: e
                        },
                        autoPlay: t,
                        standalone: o
                    } = this.props, {
                        isExpanded: i,
                        isVideoLoaded: n
                    } = this.state, {
                        url: r,
                        captions: a,
                        thumbnailUrl: c
                    } = e[0];
                    return s.createElement(ne, {
                        standalone: o,
                        isVideoLoaded: n
                    }, this.renderDismissButton(), s.createElement(ce, {
                        standalone: o,
                        isExpanded: i
                    }, this.renderOverlay(), s.createElement(Q.a, {
                        srcUrl: r,
                        autoPlay: t,
                        onVideoLoaded: this.handleVideoLoaded,
                        captions: a,
                        thumbnailUrl: c
                    })), s.createElement(X.TransitionGroup, null, this.renderResponseArea()))
                }
            }
            story_Story.defaultProps = {
                standalone: !1,
                onClose: () => {},
                showResponseArea: !0,
                autoPlay: !1
            };
            const me = Object(u.d)(k.a, {
                target: "edfbr0t0"
            })("z-index:", Object(w.m)(), ";position:fixed;right:0;bottom:0;width:100vw;height:100vh;");

            function ue(e) {
                const {
                    conversation: t,
                    standalone: o,
                    part: i,
                    onClose: n,
                    onComposerOrFormInputClick: r,
                    conversationSuggestions: a,
                    onSuggestionClicked: c,
                    setComposerSuggestionsDismissed: l
                } = e;
                return s.createElement(me, {
                    frameName: "intercom-story-frame"
                }, (e => s.createElement(s.Fragment, null, s.createElement(story_Story, {
                    conversation: t,
                    standalone: o,
                    part: i,
                    onClose: n,
                    onComposerOrFormInputClick: r,
                    conversationSuggestions: a,
                    onSuggestionClicked: c,
                    setComposerSuggestionsDismissed: l
                }), s.createElement(T.a, {
                    appWindow: e
                }))))
            }
            var ge = o(596),
                be = o(3),
                fe = o(839),
                ve = o(841),
                Oe = o(13);
            const ye = Object(u.d)("div", {
                    target: "e1cp8yhr0"
                })({
                    name: "vavd1c",
                    styles: "padding-top:0;/* @noflip */ padding-left:45px;"
                }),
                Ce = ["conversation", "handleComposerResize", "onClick"];

            function xe() {
                return xe = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                    }
                    return e
                }, xe.apply(this, arguments)
            }

            function Se(e, t) {
                if (null == e) return {};
                var o, i, n = function(e, t) {
                    if (null == e) return {};
                    var o, i, n = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) o = s[i], t.indexOf(o) >= 0 || (n[o] = e[o]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++) o = s[i], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o])
                }
                return n
            }
            class borderless_conversation_composer_BorderlessConversationComposer extends s.PureComponent {
                constructor(...e) {
                    super(...e), this.ref = void 0, this.setRef = e => {
                        this.ref = e
                    }
                }
                componentDidMount() {
                    Object(Oe.p)(this.props.conversation) && this.handleShow()
                }
                componentDidUpdate(e) {
                    !Object(Oe.p)(e.conversation) && Object(Oe.p)(this.props.conversation) ? this.handleShow() : Object(Oe.p)(e.conversation) && !Object(Oe.p)(this.props.conversation) && this.handleHide()
                }
                handleShow() {
                    this.props.handleComposerResize(this.getHeight())
                }
                handleHide() {
                    this.props.onHide()
                }
                getHeight() {
                    return this.ref ? this.ref.clientHeight : 0
                }
                render() {
                    const e = this.props,
                        {
                            conversation: t,
                            handleComposerResize: o,
                            onClick: i
                        } = e,
                        n = Se(e, Ce);
                    return Object(Oe.p)(t) ? s.createElement(ye, {
                        ref: this.setRef,
                        onClick: i
                    }, s.createElement(ve.a, xe({
                        isBorderless: !0,
                        conversation: t,
                        onHeightChange: o
                    }, n))) : null
                }
            }
            var je = o(738),
                ke = o(204),
                we = {
                    name: "1xzanuf",
                    styles: "margin-right:0;"
                },
                Ee = {
                    name: "1v8x7dw",
                    styles: "overflow:auto;"
                };
            const Pe = Object(u.d)("div", {
                    target: "emfaaq10"
                })("overflow-anchor:none;max-height:100%;padding-top:10px;padding-right:10px;margin-right:-10px;", (({
                    enabledScroll: e
                }) => e && Ee), " ", (({
                    enabledScroll: e,
                    visibleScrollbars: t
                }) => e && t && we)),
                Te = Object(u.d)("div", {
                    target: "emfaaq11"
                })({
                    name: "l57rop",
                    styles: "padding-bottom:10px;"
                });
            var Re = o(32);
            class borderless_conversation_body_BorderlessConversationBody extends s.Component {
                constructor(...e) {
                    super(...e), this.isPartBeingAddedTimeout = void 0, this.firstRenderTimeout = void 0, this.borderlessBodyNode = void 0, this.visibleScrollbarsInOs = 0 !== Object(ke.a)(), this.state = {
                        isPartBeingAdded: !1,
                        bottomScrollOffset: 0,
                        frameOffsetTop: this.props.frameNode.offsetTop,
                        adminWasTyping: !1
                    }, this.recalculateOffsets = () => {
                        this.setState({
                            frameOffsetTop: this.props.frameNode.offsetTop
                        }, (() => Object(D.D)(this.borderlessBodyNode)))
                    }, this.handleScroll = e => {
                        this.state.isPartBeingAdded || (this.setState({
                            bottomScrollOffset: Object(D.f)(this.borderlessBodyNode)
                        }), Object(A.a)(e))
                    }
                }
                componentDidMount() {
                    Object(Re.a)(this.recalculateOffsets), this.firstRenderTimeout = setTimeout((() => {
                        Object(D.D)(this.borderlessBodyNode)
                    }), 300)
                }
                componentDidUpdate(e) {
                    const {
                        frameOffsetTop: t
                    } = this.state, {
                        conversation: o,
                        frameNode: i
                    } = this.props, {
                        conversation: n
                    } = e, s = o.parts.length !== n.parts.length, r = Object(je.i)(o);
                    (s || r && !this.state.adminWasTyping) && (Object(D.D)(this.borderlessBodyNode), this.setState({
                        isPartBeingAdded: !0,
                        bottomScrollOffset: 0
                    }), clearTimeout(this.isPartBeingAddedTimeout), this.isPartBeingAddedTimeout = setTimeout((() => {
                        this.setState({
                            isPartBeingAdded: !1
                        }), Object(D.D)(this.borderlessBodyNode)
                    }), 300)), i.offsetTop !== t && this.setState({
                        frameOffsetTop: i.offsetTop
                    }, (() => {
                        this.setState({
                            bottomScrollOffset: Object(D.f)(this.borderlessBodyNode)
                        })
                    })), r !== this.state.adminWasTyping && this.setState({
                        adminWasTyping: r
                    })
                }
                componentWillUnmount() {
                    clearTimeout(this.isPartBeingAddedTimeout), clearTimeout(this.firstRenderTimeout), Object(Re.f)(this.recalculateOffsets)
                }
                getStyle() {
                    const {
                        borderlessNode: e,
                        composerHeight: t
                    } = this.props, o = e && e.clientHeight, {
                        frameOffsetTop: i
                    } = this.state;
                    if (!o || i) return;
                    const n = o / 100,
                        s = 100 - 10 / n,
                        r = `linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0) ${100-76/n}%, rgba(0, 0, 0, ${Math.max(1-this.state.bottomScrollOffset/100*5,0)}) ${s}%)`;
                    return {
                        maxHeight: o - t - 20 + "px",
                        WebkitMaskImage: r,
                        MaskImage: r
                    }
                }
                render() {
                    const e = 0 === this.state.frameOffsetTop;
                    return s.createElement(Pe, {
                        style: this.getStyle(),
                        ref: e => this.borderlessBodyNode = e,
                        onScroll: this.handleScroll,
                        enabledScroll: e,
                        visibleScrollbars: this.visibleScrollbarsInOs
                    }, this.props.children())
                }
            }
            var _e = o(850),
                Ie = o(643),
                Ne = o(137),
                Be = o(739),
                De = o(822),
                Me = o(824),
                Fe = o(658);
            const ze = Object(u.e)("0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}"),
                He = {
                    name: "1lh3dwn",
                    styles: "opacity:1;transform:translateY(0);"
                },
                Ae = ({
                    theme: e
                }) => Object(u.c)("transform:translateY(4px);opacity:0;transition:all 120ms ease-out 80ms;span{display:block;background-color:#67788f;color:", e.white, ";font-size:13px;height:32px;line-height:32px;padding:0 8px;border-radius:16px;cursor:pointer;background-position:center;&:hover{background-color:darken(#67788f,5%);}}", Ve.className, ":hover &{", He, "}");
            var We = {
                name: "o2ewcf",
                styles: "& textarea{cursor:pointer !important;}"
            };
            const Ve = Object(u.d)("div", {
                    target: "e13xul2n0"
                })("z-index:", Object(w.m)(), ";position:absolute;right:0;bottom:0;width:360px;max-height:100%;outline-offset:-5px;", (({
                    theme: e,
                    hasComposer: t
                }) => t && Object(u.c)("animation:", (({
                    theme: e
                }) => Object(u.e)("0%{transform:translateY(", e.borderlessComposerHeightPx, "px);}20%{transform:translateY(", e.borderlessComposerHeightPx, "px);}70%{transform:translateY(", e.borderlessComposerHeightPx, "px);}100%{transform:translateY(0);}"))({
                    theme: e
                }), " 750ms ease;")), " ", (({
                    theme: e,
                    hasComposer: t
                }) => e.m5Enabled && t && We), " ", Fe.i.className, ",", De.c.className, ",", Me.a.className, "{position:absolute;bottom:21px;box-shadow:", Object(u.g)("notificationBoxShadow"), ";border-radius:100%;}"),
                qe = Object(u.d)("div", {
                    target: "e13xul2n1"
                })("position:absolute;right:0;bottom:0;width:", Object(u.g)("borderlessConversationWidthPx"), "px;padding:10px;padding-top:50px;animation:", ze, " 500ms ease;", (({
                    theme: e
                }) => e.isLeftAlign && Object(u.c)("width:", e.borderlessConversationWidthPx + e.borderlessAvatarOffsetWidthPx, "px;"))),
                Le = Object(u.d)("div", {
                    target: "e13xul2n2"
                })("z-index:", Object(w.m)(1), ";position:absolute;top:0;width:", Object(u.g)("borderlessConversationWidthPx"), "px;height:40px;padding:0 10px;"),
                Ue = Object(u.d)("div", {
                    target: "e13xul2n3"
                })({
                    name: "ln0qgx",
                    styles: "padding-top:10px;position:relative;/* @noflip */ margin-left:45px;text-align:center;"
                });
            var $e = {
                name: "whh5e5",
                styles: "opacity:1;"
            };
            const Ge = Object(u.d)("div", {
                target: "e13xul2n4"
            })(Ae, " position:absolute;top:10px;/* @noflip */ right:0;span{padding-right:16px;padding-left:16px;", Object(w.b)(ee.a, oe.a, "8px", "8px"), "}", (({
                theme: e
            }) => e.tabNavigation && $e));
            var Ye = {
                name: "whh5e5",
                styles: "opacity:1;"
            };
            const Ke = Object(u.d)("div", {
                target: "e13xul2n5"
            })(Ae, " display:inline-block;span{padding:0 20px;}", (({
                theme: e
            }) => e.tabNavigation && Ye));

            function Je() {
                return Je = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                    }
                    return e
                }, Je.apply(this, arguments)
            }
            class borderless_conversation_BorderlessConversation extends s.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        isEmojiPickerOpen: !1,
                        isGifPickerOpen: !1,
                        headerHeight: 50,
                        partsHeight: 0,
                        suggestionsHeight: 0,
                        composerHeight: 0,
                        replyToButtonHeight: 0
                    }, this.handlePartsHeightChange = e => {
                        this.setState({
                            partsHeight: e
                        }, this.handleHeightChange)
                    }, this.setSuggestionsHeight = e => {
                        this.setState({
                            suggestionsHeight: e
                        }, this.handleHeightChange)
                    }, this.handleQuickRepliesHide = () => {
                        this.setState({
                            suggestionsHeight: 0
                        }, this.handleHeightChange)
                    }, this.handleComposerShow = e => {
                        this.setState({
                            composerHeight: e
                        }, this.handleHeightChange)
                    }, this.handleComposerHide = () => {
                        this.setState({
                            composerHeight: 0
                        }, this.handleHeightChange)
                    }, this.handleReplyToButtonShow = e => {
                        this.setState({
                            replyToButtonHeight: e
                        }, this.handleHeightChange)
                    }, this.handleClick = () => {
                        const {
                            isEmojiPickerOpen: e,
                            isGifPickerOpen: t
                        } = this.state;
                        e ? this.setState({
                            isEmojiPickerOpen: !1
                        }) : t && this.setState({
                            isGifPickerOpen: !1
                        })
                    }, this.handleDismissClick = e => {
                        e.stopPropagation(), this.addCloseMetric(), this.props.onClose();
                        const t = Object(Ne.g)();
                        t && t.focus()
                    }, this.handleEmojiPickerToggle = () => {
                        const e = !this.state.isEmojiPickerOpen;
                        this.setState({
                            isEmojiPickerOpen: e
                        }), this.props.onPopoverToggle(e)
                    }, this.handleGifPickerToggle = () => {
                        const e = !this.state.isGifPickerOpen;
                        this.setState({
                            isGifPickerOpen: e
                        }), this.props.onPopoverToggle(e)
                    }, this.handleViewMoreClick = () => {
                        this.addViewMoreMetric(), this.props.onViewMore()
                    }, this.handleHeightChange = () => {
                        this.props.onHeightChange(this.getHeight())
                    }
                }
                componentDidMount() {
                    this.props.onOpen(), this.focusTrap = new Ie.a({
                        document: this.props.frameWindow.document
                    })
                }
                componentDidUpdate(e) {
                    const {
                        conversation: t
                    } = this.props;
                    "all" === t.fetchState && Object(Oe.b)(t) > Object(Oe.b)(e.conversation) && this.addReplyMetric(t)
                }
                componentWillUnmount() {
                    this.focusTrap && this.focusTrap.restore()
                }
                getHeight() {
                    const {
                        headerHeight: e,
                        partsHeight: t,
                        composerHeight: o,
                        suggestionsHeight: i,
                        replyToButtonHeight: n
                    } = this.state;
                    return e + t + o + i + n + 20
                }
                getStyle() {
                    return {
                        height: this.getHeight()
                    }
                }
                hasComposer() {
                    const {
                        parts: e,
                        composerState: t
                    } = this.props.conversation;
                    return "attribute_collector" === e[0].replyType || t.visible
                }
                shouldRenderHeader() {
                    const {
                        isEmojiPickerOpen: e,
                        isGifPickerOpen: t
                    } = this.state;
                    return !(e || t)
                }
                addViewMoreMetric() {
                    Object(z.e)("clicked", "viewmore_button", "borderless", "", {
                        conversation_id: this.props.conversation.id
                    })
                }
                addReplyMetric() {
                    var e;
                    const {
                        conversation: t
                    } = this.props, o = Object(Oe.e)(t), i = null === (e = o.body.filter((e => "createTicketCard" === e.type))[0]) || void 0 === e ? void 0 : e.ticket_type_id;
                    Object(z.e)("received", "reply", "borderless", "", {
                        conversation_id: t.id,
                        part_id: o.id,
                        part_type: "adminReply",
                        reply_type: o.replyType,
                        ticket_type_id: i
                    })
                }
                addCloseMetric() {
                    Object(z.e)("closed", "borderless", "borderless", "from_close_button", {
                        conversation_id: this.props.conversation.id
                    })
                }
                renderHeader() {
                    return r.a.createElement(Le, null, r.a.createElement(Ue, null, this.props.hasHistory ? this.renderViewMoreButton() : null, r.a.createElement(Ge, {
                        onClick: this.handleDismissClick,
                        "aria-label": Object(l.e)("dismiss")
                    }, r.a.createElement("span", null))))
                }
                renderViewMoreButton() {
                    return r.a.createElement(Ke, {
                        onClick: this.handleViewMoreClick
                    }, r.a.createElement("span", null, Object(l.e)("view_more")))
                }
                renderParts() {
                    const {
                        appName: e,
                        userRole: t,
                        conversation: o,
                        onArticleCardClick: i,
                        onReactionSelect: n,
                        onRetry: s,
                        frameWindow: a,
                        conversationSuggestions: c
                    } = this.props, {
                        isEmojiPickerOpen: l,
                        isGifPickerOpen: p
                    } = this.state;
                    return r.a.createElement(fe.a, {
                        isBorderless: !0,
                        isFaded: l || p,
                        maxHeight: 0,
                        appName: e,
                        userRole: t,
                        conversation: o,
                        frameWindow: a,
                        onArticleCardClick: i,
                        onHeightChange: this.handlePartsHeightChange,
                        onReactionSelect: n,
                        onRetry: s,
                        conversationSuggestions: c
                    })
                }
                renderSuggestions() {
                    const {
                        onSuggestionClicked: e,
                        setComposerSuggestionsDismissed: t,
                        conversationSuggestions: o,
                        conversation: i
                    } = this.props, n = {
                        conversation: i,
                        setComposerSuggestionsDismissed: t,
                        onClick: e,
                        isBorderless: !0
                    };
                    return r.a.createElement(j.b, {
                        onHeightChange: this.setSuggestionsHeight
                    }, r.a.createElement("div", null, r.a.createElement(Be.a, {
                        errorText: "Something went wrong loading the suggestions",
                        align: "center",
                        style: {
                            marginBottom: "10px"
                        }
                    }, r.a.createElement(de.a, Je({}, n, {
                        conversationSuggestions: o
                    })))))
                }
                renderFooter() {
                    const {
                        isEmojiPickerOpen: e,
                        isGifPickerOpen: t
                    } = this.state, {
                        showReplyToButton: o,
                        onComposerClick: i,
                        conversation: n,
                        frameWindow: s
                    } = this.props;
                    return o && Object(Oe.p)(this.props.conversation) ? r.a.createElement(F.a, {
                        isBorderless: !0,
                        onShow: this.handleReplyToButtonShow,
                        onClick: i
                    }) : r.a.createElement(borderless_conversation_composer_BorderlessConversationComposer, {
                        conversation: n,
                        showEmojiPicker: e,
                        showGifPicker: t,
                        handleComposerResize: this.handleComposerShow,
                        onHide: this.handleComposerHide,
                        onEmojiPickerToggle: this.handleEmojiPickerToggle,
                        onGifPickerToggle: this.handleGifPickerToggle,
                        frameWindow: s,
                        onClick: this.props.m5Enabled ? i : void 0
                    })
                }
                render() {
                    const {
                        conversation: e,
                        frameNode: t
                    } = this.props, {
                        composerHeight: o
                    } = this.state;
                    return r.a.createElement(Ve, {
                        className: "intercom-borderless",
                        style: this.getStyle(),
                        onClick: this.handleClick,
                        tabIndex: "-1",
                        role: "region",
                        ref: e => this.borderlessNode = e,
                        hasComposer: this.hasComposer()
                    }, this.shouldRenderHeader() ? this.renderHeader() : null, r.a.createElement(qe, null, r.a.createElement(borderless_conversation_body_BorderlessConversationBody, {
                        conversation: e,
                        composerHeight: o,
                        borderlessNode: this.borderlessNode,
                        frameNode: t
                    }, (() => r.a.createElement(Te, null, this.renderParts(), this.renderSuggestions()))), this.renderFooter()), r.a.createElement(T.a, {
                        appWindow: this.props.frameWindow
                    }))
                }
            }
            borderless_conversation_BorderlessConversation.propTypes = {
                conversation: n.a.shape({
                    id: n.a.string.isRequired,
                    userParticipated: n.a.bool.isRequired,
                    fetchState: n.a.oneOf(["summary", "partial", "all"]),
                    parts: n.a.arrayOf(n.a.shape({
                        id: n.a.string,
                        replyType: n.a.oneOf(["text", "attribute_collector"])
                    })).isRequired,
                    composerState: n.a.shape({
                        visible: n.a.bool.isRequired
                    }).isRequired
                }),
                conversationSuggestions: n.a.shape({
                    prompt: n.a.any,
                    suggestions: n.a.arrayOf(n.a.shape({
                        uuid: n.a.string.isRequired,
                        text: n.a.string.isRequired,
                        preAction: n.a.string
                    }))
                }),
                onSuggestionClicked: n.a.func,
                setComposerSuggestionsDismissed: n.a.func,
                appName: n.a.string.isRequired,
                userRole: n.a.string.isRequired,
                hasHistory: n.a.bool,
                alignment: n.a.string,
                onOpen: n.a.func.isRequired,
                onHeightChange: n.a.func.isRequired,
                onPopoverToggle: n.a.func.isRequired,
                onArticleCardClick: n.a.func.isRequired,
                onReactionSelect: n.a.func.isRequired,
                onRetry: n.a.func.isRequired,
                onViewMore: n.a.func.isRequired,
                onClose: n.a.func.isRequired,
                onComposerClick: n.a.func.isRequired,
                frameWindow: n.a.any.isRequired,
                showReplyToButton: n.a.bool,
                part: n.a.object,
                frameNode: n.a.object.isRequired,
                m5Enabled: n.a.bool
            };
            const Xe = Object(_e.a)(borderless_conversation_BorderlessConversation);
            var Qe = o(17),
                Ze = o(136),
                et = o(68),
                tt = o(9),
                ot = o(0);
            var it = o(90),
                nt = o(12);
            var st = Object(ge.connect)(((e, t) => {
                    const {
                        name: o
                    } = e.app, {
                        role: i
                    } = e.user, {
                        part: n,
                        conversation: s
                    } = t, {
                        alignment: r
                    } = Object(it.a)(e), a = Object(nt.h)(e), c = s.parts.filter((e => e.createdAt >= n.createdAt));
                    if (c[0]) {
                        let {
                            messageType: e
                        } = c[0];
                        e = e || "adminReply", c[0] = Object.assign({}, c[0], {
                            messageType: e
                        })
                    }
                    const l = c.length < s.parts.length;
                    return {
                        appName: o,
                        userRole: i,
                        conversation: Object.assign({}, s, {
                            parts: c
                        }),
                        hasHistory: l,
                        alignment: r,
                        m5Enabled: a
                    }
                }), (e => ({
                    onOpen: t => {
                        e(function(e) {
                            return (t, o) => {
                                Object(et.b)(e)(o()).userParticipated ? t(Object(tt.l)(be.e, e)).then((() => {
                                    t({
                                        type: ot.ic,
                                        conversationId: e
                                    })
                                })) : t({
                                    type: ot.ic,
                                    conversationId: e
                                })
                            }
                        }(t))
                    },
                    onRetry: (t, o) => {
                        e(Object(tt.q)(be.e, t, o))
                    },
                    onReactionSelect: (t, o) => {
                        e(Object(tt.k)(be.e, t, o, !1))
                    },
                    onArticleCardClick: (t, o) => e(Object(Ze.e)(t, o, !1)),
                    onViewMore: t => {
                        e(Object(Qe.g)(t))
                    }
                })), ((e, t, o) => {
                    const {
                        conversation: i
                    } = e, {
                        id: n
                    } = i, s = {
                        onOpen: () => {
                            t.onOpen(n)
                        },
                        onReactionSelect: e => {
                            t.onReactionSelect(n, e)
                        },
                        onRetry: e => {
                            t.onRetry(i, e)
                        },
                        onViewMore: () => {
                            t.onViewMore(n)
                        },
                        onClose: () => {
                            o.onClose()
                        }
                    };
                    return Object.assign({}, t, o, e, s)
                }))(Xe),
                rt = {
                    name: "n7pinj",
                    styles: "min-height:350px;"
                };
            const at = Object(u.d)(k.a, {
                target: "e1dl9bzv0"
            })("z-index:", Object(w.m)(), ";position:fixed;width:360px;", (({
                theme: e
            }) => Object(u.c)("bottom:", e.verticalPaddingPx - e.borderlessIframePaddingPx, "px;right:", e.horizontalPaddingPx - e.borderlessIframePaddingPx, "px;max-height:calc(100% - ", e.verticalPaddingPx - e.borderlessIframePaddingPx, "px);")), " ", (({
                isPopoverOpen: e
            }) => e && rt), " ", (({
                theme: e
            }) => e.isLeftAlign && Object(u.c)("left:", e.borderlessIframePaddingPx + e.horizontalPaddingPx - e.borderlessIframePaddingLeftPx + e.borderlessAvatarOffsetWidthPx, "px;right:auto;")), " ", (({
                theme: e
            }) => e.isLauncherEnabled && Object(u.c)("bottom:", e.verticalPaddingPx + e.launcherOffsetBottomPaddingPx - e.borderlessIframePaddingPx, "px;max-height:calc( 100% - ", e.verticalPaddingPx + e.launcherOffsetBottomPaddingPx - e.borderlessIframePaddingPx, "px );")));
            class borderless_BorderlessFrame extends s.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        height: 0,
                        isPopoverOpen: !1
                    }, this.handleHeightChange = e => {
                        this.setState({
                            height: e
                        })
                    }, this.handlePopoverToggle = e => {
                        this.setState({
                            isPopoverOpen: e
                        })
                    }
                }
                render() {
                    const {
                        conversation: e,
                        part: t,
                        onClose: o,
                        onComposerClick: i,
                        showReplyToButton: n,
                        conversationSuggestions: s,
                        onSuggestionClicked: a,
                        setComposerSuggestionsDismissed: c
                    } = this.props, {
                        isPopoverOpen: p,
                        height: h
                    } = this.state;
                    return r.a.createElement(at, {
                        style: {
                            height: h
                        },
                        className: "intercom-borderless-frame",
                        frameName: "intercom-borderless-frame",
                        title: `Intercom live chat ${Object(l.e)("message")}`,
                        isPopoverOpen: p
                    }, ((l, p) => r.a.createElement(st, {
                        conversation: e,
                        conversationSuggestions: s,
                        onSuggestionClicked: a,
                        setComposerSuggestionsDismissed: c,
                        part: t,
                        frameWindow: l,
                        onClose: o,
                        onHeightChange: this.handleHeightChange,
                        onPopoverToggle: this.handlePopoverToggle,
                        onComposerClick: i,
                        showReplyToButton: n,
                        frameNode: p
                    })))
                }
            }
            borderless_BorderlessFrame.propTypes = {
                conversation: n.a.object.isRequired,
                conversationSuggestions: n.a.shape({
                    prompt: n.a.any,
                    suggestions: n.a.arrayOf(n.a.shape({
                        uuid: n.a.string.isRequired,
                        text: n.a.string.isRequired,
                        preAction: n.a.string
                    }))
                }),
                onSuggestionClicked: n.a.func,
                setComposerSuggestionsDismissed: n.a.func,
                part: n.a.object.isRequired,
                onClose: n.a.func.isRequired,
                onComposerClick: n.a.func,
                showReplyToButton: n.a.bool
            };
            var ct = o(630);
            var lt = e => `\n  z-index: 2147483003;\n  position: fixed;\n  width: 360px;\n  right: 10px;\n  bottom: 90px;\n  height: ${e.height}px;\n  max-height: calc( 100% - 90px );\n  border: none;\n  ${e.isPopoverOpen?"min-height: 350px;":""}\n`;
            class borderless_CrossOriginBorderlessFrame extends s.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        height: 0,
                        isPopoverOpen: !1
                    }, this.handleHeightChange = e => {
                        this.setState({
                            height: e
                        })
                    }, this.handlePopoverToggle = e => {
                        this.setState({
                            isPopoverOpen: e
                        })
                    }
                }
                render() {
                    const {
                        conversation: e,
                        part: t,
                        onClose: o,
                        onComposerClick: i,
                        showReplyToButton: n,
                        conversationSuggestions: r,
                        onSuggestionClicked: a,
                        setComposerSuggestionsDismissed: c
                    } = this.props, {
                        height: l,
                        isPopoverOpen: p
                    } = this.state, h = lt({
                        isPopoverOpen: p,
                        height: l
                    });
                    return s.createElement(ct.a, {
                        name: "borderless",
                        styles: h
                    }, s.createElement(st, {
                        conversation: e,
                        conversationSuggestions: r,
                        onSuggestionClicked: a,
                        setComposerSuggestionsDismissed: c,
                        part: t,
                        frameWindow: window,
                        onClose: o,
                        onHeightChange: this.handleHeightChange,
                        onPopoverToggle: this.handlePopoverToggle,
                        onComposerClick: i,
                        showReplyToButton: n,
                        frameNode: window.document.body
                    }))
                }
            }
            var pt = o(8),
                ht = o(686);
            const dt = Object(u.d)(k.a, {
                target: "edk9cor0"
            })("position:fixed;z-index:", Object(w.m)(), ";", (({
                theme: e
            }) => Object(u.c)("bottom:", Object(w.k)({
                theme: e
            }) - ht.d, "px;right:", e.horizontalPaddingPx - ht.i, "px;")), " ", (({
                height: e
            }) => Object(u.c)("height:", e + 5, "px;")), " ", (({
                theme: e
            }) => e.isLeftAlign && Object(u.c)("left:", e.horizontalPaddingPx - ht.i, "px;right:auto;")));
            var mt = {
                    name: "whh5e5",
                    styles: "opacity:1;"
                },
                ut = {
                    name: "whh5e5",
                    styles: "opacity:1;"
                };
            const gt = Object(u.d)("button", {
                    target: "edk9cor1"
                })("background-color:#5d6c80;color:", Object(u.g)("white"), ";font-size:13px;/* @noflip */ float:right;padding:8px 20px;opacity:0;border-radius:100px;margin-top:10px;transition:opacity 200ms;", (({
                    isVisible: e
                }) => e && ut), " ", (({
                    theme: e
                }) => e.tabNavigation && mt)),
                bt = Object(u.d)("span", {
                    target: "edk9cor2"
                })(Object(w.b)(ee.a, oe.a, "8px", "8px"), " width:8px;height:8px;display:inline-block;margin-left:8px;");
            var ft = o(838);
            const vt = ({
                conversation: e,
                appName: t,
                handleOnClick: o,
                onDismiss: i,
                conversationSuggestions: n,
                onSuggestionClicked: a,
                setComposerSuggestionsDismissed: c
            }) => {
                const [p, h] = Object(s.useState)(!1);
                return r.a.createElement(ht.f, {
                    position: 0,
                    expanded: !1,
                    key: e.id,
                    onMouseEnter: () => h(!0),
                    onMouseLeave: () => h(!1)
                }, r.a.createElement(gt, {
                    isVisible: p,
                    onClick: i
                }, Object(l.e)("clear"), r.a.createElement(bt, null)), r.a.createElement(ft.a, {
                    conversation: e,
                    appName: t,
                    onClick: o,
                    stack: !1,
                    m5Enabled: !0
                }), n && r.a.createElement(de.a, {
                    conversation: e,
                    conversationSuggestions: n,
                    setComposerSuggestionsDismissed: c,
                    onClick: a
                }))
            };

            function Ot(e) {
                const [t, o] = Object(s.useState)(0), i = ({
                    height: e
                }) => {
                    o(e)
                };
                return r.a.createElement(dt, {
                    frameName: "intercom-chat-frame",
                    title: `Intercom live chat ${Object(l.e)("message")}`,
                    height: t
                }, (() => r.a.createElement(j.b, {
                    onChange: i
                }, r.a.createElement(vt, e))))
            }
            o.d(t, "a", (function() {
                return message_Message
            }));
            class message_Message extends s.Component {
                constructor(...e) {
                    super(...e), this.addMessageMetric = e => {
                        const {
                            conversation: t,
                            part: {
                                id: o,
                                messageType: i
                            }
                        } = this.props;
                        Object(z.e)(e, "message", "in_app", "from_full", {
                            conversation_id: t.id,
                            message_id: o,
                            message_type: i
                        })
                    }, this.handleDismissClick = () => {
                        this.addMessageMetric("closed"), this.props.onClose(this.props.conversation.id)
                    }, this.handleComposerSuggestionClicked = e => {
                        const {
                            conversation: t,
                            onSuggestionClicked: o
                        } = this.props;
                        o && o(t, e)
                    }
                }
                componentDidMount() {
                    const {
                        conversation: e,
                        userIsPresent: t,
                        onOpen: o,
                        onConversationRead: i
                    } = this.props;
                    o(), !e.read && t && i(), this.addMessageMetric("received")
                }
                componentDidUpdate() {
                    const {
                        userIsPresent: e,
                        conversation: t
                    } = this.props;
                    e && !t.read && this.props.onConversationRead()
                }
                renderBorderless() {
                    const {
                        conversation: e,
                        part: t,
                        onComposerOrFormInputClick: o,
                        shouldShowUpfrontEmailComposer: i,
                        onSuggestionClicked: n,
                        setComposerSuggestionsDismissed: s,
                        conversationSuggestions: a
                    } = this.props, c = Object(pt.a)() ? borderless_CrossOriginBorderlessFrame : borderless_BorderlessFrame;
                    return r.a.createElement(c, {
                        conversation: e,
                        conversationSuggestions: a,
                        onSuggestionClicked: n,
                        setComposerSuggestionsDismissed: s,
                        part: t,
                        onClose: this.handleDismissClick,
                        showReplyToButton: i,
                        onComposerClick: o
                    })
                }
                renderSnippet() {
                    const {
                        conversation: e,
                        appName: t,
                        onComposerOrFormInputClick: o,
                        onSuggestionClicked: i,
                        setComposerSuggestionsDismissed: n,
                        conversationSuggestions: s
                    } = this.props;
                    return r.a.createElement(Ot, {
                        conversation: e,
                        conversationSuggestions: s,
                        setComposerSuggestionsDismissed: n,
                        onSuggestionClicked: i,
                        appName: t,
                        handleOnClick: o,
                        onDismiss: this.handleDismissClick
                    })
                }
                render() {
                    const {
                        appWindow: e,
                        conversation: t,
                        part: o,
                        appName: i,
                        isMobile: n,
                        onComposerOrFormInputClick: s,
                        onReactionSelect: a,
                        showUploadButton: c,
                        showGifButton: l,
                        shouldShowUpfrontEmailComposer: p,
                        onSuggestionClicked: h,
                        setComposerSuggestionsDismissed: d,
                        conversationSuggestions: m,
                        m5Enabled: u
                    } = this.props, {
                        messageType: g,
                        reactionsReply: b
                    } = o;
                    switch (g) {
                        case "adminReply":
                        case "link":
                        case "messengerCard":
                        case "notificationChannels":
                        case "attributeCollector":
                        case "conversationRating":
                        case "chat":
                            return n ? r.a.createElement(R, {
                                appName: i,
                                part: o,
                                onClose: this.handleDismissClick,
                                composerState: t.composerState,
                                onComposerOrFormInputClick: s
                            }) : this.renderBorderless();
                        case "video":
                            return r.a.createElement(ue, {
                                conversation: t,
                                conversationSuggestions: m,
                                onSuggestionClicked: h,
                                setComposerSuggestionsDismissed: d,
                                standalone: !0,
                                part: o,
                                onClose: this.handleDismissClick,
                                onComposerOrFormInputClick: s
                            });
                        case "note":
                            return r.a.createElement(note_NoteFrame, {
                                conversationId: t.id,
                                composerVisible: t.composerState.visible,
                                appName: i,
                                message: o,
                                reactionsReply: b,
                                showUploadButton: c,
                                showGifButton: l,
                                onClose: this.handleDismissClick,
                                onComposerClick: s,
                                onReactionSelect: a,
                                showReplyToButton: p,
                                m5Enabled: u
                            });
                        case "post":
                            return r.a.createElement(J.a, {
                                conversationId: t.id,
                                composerVisible: t.composerState.visible,
                                appName: i,
                                message: o,
                                reactionsReply: b,
                                onClose: this.handleDismissClick,
                                onComposerClick: s,
                                onReactionSelect: a,
                                showReplyToButton: p
                            });
                        case "pointer":
                            return r.a.createElement(pointer_PointerFrame, {
                                appWindow: e,
                                appName: i,
                                message: o,
                                conversationId: t.id,
                                reactionsReply: b,
                                onComposerClick: s,
                                onReactionSelect: a,
                                onClose: this.handleDismissClick
                            });
                        default:
                            return null
                    }
                }
            }
            message_Message.propTypes = {
                appWindow: n.a.object,
                conversation: n.a.shape({
                    id: n.a.string.isRequired,
                    read: n.a.bool.isRequired,
                    composerState: n.a.shape({
                        visible: n.a.bool.isRequired
                    }).isRequired
                }).isRequired,
                conversationSuggestions: n.a.shape({
                    prompt: n.a.any,
                    suggestions: n.a.arrayOf(n.a.shape({
                        uuid: n.a.string.isRequired,
                        text: n.a.string.isRequired,
                        preAction: n.a.string
                    }))
                }),
                onSuggestionClicked: n.a.func,
                setComposerSuggestionsDismissed: n.a.func,
                part: n.a.shape({
                    id: n.a.string,
                    messageType: n.a.string,
                    reactionsReply: n.a.shape({
                        reactionIndex: n.a.number,
                        reactionSet: n.a.array.isRequired
                    })
                }).isRequired,
                appName: n.a.string.isRequired,
                isMobile: n.a.bool.isRequired,
                userIsPresent: n.a.bool.isRequired,
                onConversationRead: n.a.func.isRequired,
                onOpen: n.a.func.isRequired,
                onClose: n.a.func.isRequired,
                onComposerOrFormInputClick: n.a.func.isRequired,
                onReactionSelect: n.a.func.isRequired,
                showUploadButton: n.a.bool,
                showGifButton: n.a.bool,
                shouldShowUpfrontEmailComposer: n.a.bool,
                m5Enabled: n.a.bool
            }, message_Message.defaultProps = {
                m5Enabled: !1
            }
        },
        844: function(e, t, o) {
            "use strict";
            var i = o(596),
                n = o(3),
                s = o(208),
                r = o.n(s),
                a = o(1),
                c = o.n(a),
                l = o(13),
                p = o(838),
                h = o(686);

            function d(e) {
                const {
                    conversation: t,
                    appName: o,
                    position: i,
                    expanded: n,
                    handleOnClick: s,
                    stack: r
                } = e;
                return a.createElement(h.f, {
                    position: i,
                    expanded: n,
                    key: t.id
                }, a.createElement(p.a, {
                    conversation: t,
                    appName: o,
                    onClick: s,
                    stack: r
                }))
            }
            var m = o(7),
                u = {
                    name: "1v8x7dw",
                    styles: "overflow:auto;"
                };
            const g = Object(m.d)("div", {
                target: "e1sybdym0"
            })("max-height:", Object(m.f)("maxHeight"), "px;", (({
                scroll: e
            }) => e && u));
            var b = o(30),
                f = o(8);
            let v, O;

            function y(e) {
                const {
                    frameNode: t,
                    children: o,
                    keepScrollToBottom: i,
                    scrollToBottomWithAnimation: n
                } = e, s = Object(f.a)() ? "1000" : (({
                    offsetTop: e,
                    clientHeight: t
                }) => e + t)(t), r = a.useRef(null), [c, l] = a.useState(!1);
                return a.useEffect((() => {
                    if (Object(f.a)()) return;
                    const e = () => {
                        r.current && Object(b.D)(r.current), v = window.parent.requestAnimationFrame(e)
                    };
                    return i && r.current && e(), () => window.parent.cancelAnimationFrame(v)
                }), [i]), a.useEffect((() => {
                    Object(f.a)() || n && r.current && Object(b.e)(r.current)
                }), [n]), a.useEffect((() => {
                    if (!Object(f.a)()) return O = setTimeout((() => l(!0)), 300), () => {
                        clearTimeout(O), window.parent.cancelAnimationFrame(v)
                    }
                }), []), a.createElement(g, {
                    maxHeight: s,
                    ref: r,
                    scroll: c
                }, o)
            }
            var C = o(4),
                x = o(16);
            const S = (e, t) => e - t;
            let j, k, w;

            function E(e) {
                const {
                    conversations: t,
                    appName: o,
                    handleOnClick: i,
                    children: n,
                    frameNode: s
                } = e, r = t.filter((e => !!Object(l.e)(e))), c = r.length * h.b, p = h.b + (r.length - 1) * h.c, m = Object(x.m)(), [u, g] = a.useState(!1), [b, f] = a.useState(p), [v, O] = a.useState(!1), E = e => {
                    const t = r.map((e => e.id));
                    g(e), (e => {
                        Object(C.e)("hovered", "message", "in_app", "from_grouped_message", {
                            conversation_ids: e.join(",")
                        })
                    })(t), e ? (clearTimeout(w), O(!0), j = setTimeout((() => f(c)), 1), k = setTimeout((() => O(!1)), h.a)) : w = setTimeout((() => f(p)), h.a)
                };
                return a.useEffect((() => () => {
                    clearTimeout(j), clearTimeout(k), clearTimeout(w)
                }), []), a.createElement(y, {
                    frameNode: s,
                    keepScrollToBottom: v,
                    scrollToBottomWithAnimation: !u
                }, a.createElement(h.g, {
                    onMouseEnter: () => !m && E(!0),
                    onMouseLeave: () => !m && E(!1),
                    onFocus: () => !m && E(!0),
                    "aria-expanded": u
                }, a.createElement(h.e, {
                    expandAnimationInProgress: v
                }, n), a.createElement(h.h, {
                    height: b
                }, r.map(((e, t) => a.createElement(d, {
                    key: t,
                    conversation: e,
                    appName: o,
                    position: S(r.length, t),
                    expanded: u,
                    handleOnClick: i,
                    stack: r.length > 1
                }))))))
            }
            var P = o(14),
                T = o(632),
                R = o(643),
                _ = o(137),
                I = o(698);
            class notifications_Notifications extends a.Component {
                constructor(...e) {
                    super(...e), this.handleDismiss = () => {
                        const {
                            onNotificationDismiss: e,
                            conversations: t
                        } = this.props, o = t.map((e => e.id));
                        this.addDismissMetrics(o), e(o);
                        const i = Object(_.g)();
                        i && i.focus()
                    }
                }
                componentDidMount() {
                    const {
                        onDisplayNotifications: e
                    } = this.props, t = this.getSortedConversations();
                    this.focusTrap = new R.a({
                        document: this.props.frameWindow.document
                    }), e(t)
                }
                componentWillUnmount() {
                    this.focusTrap && this.focusTrap.restore()
                }
                addDismissMetrics(e) {
                    e.forEach((e => {
                        Object(C.e)("closed", "message", "in_app", "from_snippet", {
                            conversation_id: e
                        })
                    }))
                }
                getSortedConversations() {
                    return this.props.conversations.slice(-3).sort(((e, t) => e.lastPartCreatedAt > t.lastPartCreatedAt))
                }
                renderDismissButton() {
                    const {
                        conversations: e
                    } = this.props, t = 1 === e.length ? Object(P.e)("clear") : Object(P.e)("clear_all");
                    return c.a.createElement(I.b, {
                        onClick: this.handleDismiss,
                        visibleDismissButton: Object(x.m)()
                    }, t, c.a.createElement(I.c, null))
                }
                renderConversationsGrouped() {
                    const {
                        appName: e,
                        onNotificationClick: t,
                        frameNode: o
                    } = this.props, i = this.getSortedConversations();
                    return c.a.createElement(E, {
                        conversations: i,
                        appName: e,
                        handleOnClick: t,
                        frameNode: o
                    }, i.length > 0 ? this.renderDismissButton() : null)
                }
                render() {
                    const {
                        frameWindow: e
                    } = this.props;
                    return c.a.createElement(I.d, {
                        className: "intercom-notifications"
                    }, this.renderConversationsGrouped(), c.a.createElement(T.a, {
                        appWindow: e
                    }))
                }
            }
            notifications_Notifications.propTypes = {
                appName: r.a.string.isRequired,
                frameNode: r.a.any.isRequired,
                frameWindow: r.a.any.isRequired,
                conversations: r.a.array.isRequired,
                onNotificationClick: r.a.func.isRequired,
                onNotificationDismiss: r.a.func.isRequired,
                onDisplayNotifications: r.a.func.isRequired
            };
            var N = o(9),
                B = o(17),
                D = o(71),
                M = o(45),
                F = o(63);
            t.a = Object(i.connect)((e => {
                const {
                    app: {
                        name: t
                    }
                } = e;
                return {
                    appName: t,
                    conversations: Object(F.a)(e)
                }
            }), (e => ({
                onNotificationClick: t => {
                    const {
                        id: o,
                        parts: i
                    } = t, s = i[i.length - 1], {
                        messageType: r
                    } = s;
                    [void 0, "chat", "link", "notificationChannels", "video"].indexOf(r) > -1 ? (e(Object(B.f)(o)), e(Object(N.l)(n.e, o))) : e(Object(D.b)(o, s.id))
                },
                onNotificationDismiss: t => {
                    e(Object(M.b)(n.e, t))
                },
                onDisplayNotifications: t => {
                    t.forEach((t => {
                        const {
                            id: o,
                            parts: i
                        } = t, n = i[i.length - 1];
                        e(Object(D.c)(o, n.id))
                    }))
                }
            })))(notifications_Notifications)
        },
        845: function(e, t, o) {
            "use strict";
            var i = o(99),
                n = o.n(i),
                s = o(77),
                r = o.n(s),
                a = o(1),
                c = o(1018),
                l = o.n(c),
                p = o(618);
            class positioner_tree_PositionerTree extends a.Component {
                constructor(...e) {
                    super(...e), this.document = this.props.appWindow.document, this.state = {
                        container: null
                    }
                }
                componentDidMount() {
                    const {
                        appWindow: e
                    } = this.props, t = e.document.querySelector("#intercom-container");
                    if (!e.document.body) return;
                    const o = e.document.createElement("div");
                    o.id = "intercom-positioner-tree", o.classList.add("intercom-namespace"), o.style.cssText = "position: initial; !important; z-index: 2147483647 !important;", null == t || t.insertAdjacentElement("beforeBegin", o), this.setState({
                        container: o
                    })
                }
                componentWillUnmount() {
                    const e = this.state.container;
                    if (!e) return;
                    const t = e.parentNode;
                    t && t.removeChild(e)
                }
                render() {
                    return this.state.container ? p.createPortal(this.props.children, this.state.container) : null
                }
            }
            var h = o(30),
                d = (o(16), e => {
                    if (e.IntercomIntersectionObserver) return;
                    const t = e.document;
                    if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype && "isIntersecting" in e.IntersectionObserverEntry.prototype) return e.IntercomIntersectionObserver = e.IntersectionObserver, e.IntercomIntersectionObserverEntry = e.IntersectionObserverEntry, !0;
                    var o = [];

                    function i(e) {
                        this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        }, this.isIntersecting = !!e.intersectionRect;
                        var t = this.boundingClientRect,
                            o = t.width * t.height,
                            i = this.intersectionRect,
                            n = i.width * i.height;
                        this.intersectionRatio = o ? n / o : this.isIntersecting ? 1 : 0
                    }

                    function n(e, t) {
                        var o, i, n, s = t || {};
                        if ("function" != typeof e) throw new Error("callback must be a function");
                        if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
                        this._checkForIntersections = (o = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, n = null, function() {
                            n || (n = setTimeout((function() {
                                o(), n = null
                            }), i))
                        }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                            return e.value + e.unit
                        })).join(" ")
                    }

                    function s(e, t, o, i) {
                        null != e && ("function" == typeof e.addEventListener ? e.addEventListener(t, o, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, o))
                    }

                    function r(e, t, o, i) {
                        null != e && ("function" == typeof e.removeEventListener ? e.removeEventListener(t, o, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, o))
                    }

                    function a(e) {
                        var t;
                        try {
                            t = e.getBoundingClientRect()
                        } catch (e) {}
                        return t ? (t.width && t.height || (t = {
                            top: t.top,
                            right: t.right,
                            bottom: t.bottom,
                            left: t.left,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        }), t) : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        }
                    }

                    function c(e, t) {
                        for (var o = t; o;) {
                            if (o == e) return !0;
                            o = l(o)
                        }
                        return !1
                    }

                    function l(e) {
                        var t = e.parentNode;
                        return t && 11 == t.nodeType && t.host ? t.host : t
                    }
                    n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.USE_MUTATION_OBSERVER = !0, n.prototype.observe = function(e) {
                        if (!this._observationTargets.some((function(t) {
                                return t.element == e
                            }))) {
                            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: e,
                                entry: null
                            }), this._monitorIntersections(), this._checkForIntersections()
                        }
                    }, n.prototype.unobserve = function(e) {
                        this._observationTargets = this._observationTargets.filter((function(t) {
                            return t.element != e
                        })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                    }, n.prototype.disconnect = function() {
                        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                    }, n.prototype.takeRecords = function() {
                        var e = this._queuedEntries.slice();
                        return this._queuedEntries = [], e
                    }, n.prototype._initThresholds = function(e) {
                        var t = e || [0];
                        return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, o) {
                            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return e !== o[t - 1]
                        }))
                    }, n.prototype._parseRootMargin = function(e) {
                        var t = (e || "0px").split(/\s+/).map((function(e) {
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(t[1]),
                                unit: t[2]
                            }
                        }));
                        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                    }, n.prototype._monitorIntersections = function() {
                        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(e, "resize", this._checkForIntersections, !0), this._observationTargets.forEach((e => {
                            this._monitorScrollForElement(e)
                        })), this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))))
                    }, n.prototype._monitorScrollForElement = function(e) {
                        e !== t && e && (s(e, "scroll", this._checkForIntersections, !0), this._monitorScrollForElement(e.parent))
                    }, n.prototype._unmonitorScrollForElement = function(e) {
                        e !== t && e && (r(e, "scroll", this._checkForIntersections, !0), this._unmonitorScrollForElement(e.parent))
                    }, n.prototype._unmonitorIntersections = function() {
                        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, r(e, "resize", this._checkForIntersections, !0), this._observationTargets.forEach((e => {
                            this._unmonitorScrollForElement(e)
                        })), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                    }, n.prototype._checkForIntersections = function() {
                        var t = this._rootIsInDom(),
                            o = t ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                        this._observationTargets.forEach((function(n) {
                            var s = n.element,
                                r = a(s),
                                c = this._rootContainsTarget(s),
                                l = n.entry,
                                p = t && c && this._computeTargetAndRootIntersection(s, o),
                                h = n.entry = new i({
                                    time: e.performance && performance.now && performance.now(),
                                    target: s,
                                    boundingClientRect: r,
                                    rootBounds: o,
                                    intersectionRect: p
                                });
                            l ? t && c ? this._hasCrossedThreshold(l, h) && this._queuedEntries.push(h) : l && l.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                        }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }, n.prototype._computeTargetAndRootIntersection = function(o, i) {
                        if ("none" != e.getComputedStyle(o).display) {
                            for (var n, s, r, c, p, h, d, m, u = a(o), g = l(o), b = !1; !b;) {
                                var f = null,
                                    v = 1 == g.nodeType ? e.getComputedStyle(g) : {};
                                if ("none" == v.display) return;
                                if (g == this.root || g == t ? (b = !0, f = i) : g != t.body && g != t.documentElement && "visible" != v.overflow && (f = a(g)), f && (n = f, s = u, r = void 0, c = void 0, p = void 0, h = void 0, d = void 0, m = void 0, r = Math.max(n.top, s.top), c = Math.min(n.bottom, s.bottom), p = Math.max(n.left, s.left), h = Math.min(n.right, s.right), m = c - r, !(u = (d = h - p) >= 0 && m >= 0 && {
                                        top: r,
                                        bottom: c,
                                        left: p,
                                        right: h,
                                        width: d,
                                        height: m
                                    }))) break;
                                g = l(g)
                            }
                            return u
                        }
                    }, n.prototype._getRootRect = function() {
                        var e;
                        if (this.root) e = a(this.root);
                        else {
                            var o = t.documentElement,
                                i = t.body;
                            e = {
                                top: 0,
                                left: 0,
                                right: o.clientWidth || i.clientWidth,
                                width: o.clientWidth || i.clientWidth,
                                bottom: o.clientHeight || i.clientHeight,
                                height: o.clientHeight || i.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(e)
                    }, n.prototype._expandRectByRootMargin = function(e) {
                        var t = this._rootMarginValues.map((function(t, o) {
                                return "px" == t.unit ? t.value : t.value * (o % 2 ? e.width : e.height) / 100
                            })),
                            o = {
                                top: e.top - t[0],
                                right: e.right + t[1],
                                bottom: e.bottom + t[2],
                                left: e.left - t[3]
                            };
                        return o.width = o.right - o.left, o.height = o.bottom - o.top, o
                    }, n.prototype._hasCrossedThreshold = function(e, t) {
                        var o = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                            i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                        if (o !== i)
                            for (var n = 0; n < this.thresholds.length; n++) {
                                var s = this.thresholds[n];
                                if (s == o || s == i || s < o != s < i) return !0
                            }
                    }, n.prototype._rootIsInDom = function() {
                        return !this.root || c(t, this.root)
                    }, n.prototype._rootContainsTarget = function(e) {
                        return c(this.root || t, e)
                    }, n.prototype._registerInstance = function() {
                        o.indexOf(this) < 0 && o.push(this)
                    }, n.prototype._unregisterInstance = function() {
                        var e = o.indexOf(this); - 1 != e && o.splice(e, 1)
                    }, e.IntercomIntersectionObserver = n, e.IntercomIntersectionObserverEntry = e.IntersectionObserverEntry
                });
            var m = o(1019);
            const u = (e, t) => {
                const o = t.element;
                if (!o) return e;
                const i = e.placement.split("-")[0],
                    {
                        popper: n,
                        reference: s
                    } = e.offsets,
                    r = -1 !== ["left", "right"].indexOf(i),
                    a = r ? "height" : "width",
                    c = r ? "Top" : "Left",
                    l = c.toLowerCase(),
                    p = r ? "left" : "top",
                    h = r ? "bottom" : "right",
                    d = Object(m.getOuterSizes)(o)[a];
                s[h] - d < n[l] && (e.offsets.popper[l] -= n[l] - (s[h] - d)), s[l] + d > n[h] && (e.offsets.popper[l] += s[l] + d - n[h]), e.offsets.popper = Object(m.getClientRect)(e.offsets.popper);
                const u = s[l] + s[a] / 2 - d / 2,
                    g = Object(m.getStyleComputedProperty)(e.instance.popper),
                    b = parseFloat(g[`margin${c}`]),
                    f = parseFloat(g[`border${c}Width`]);
                let v = u - e.offsets.popper[l] - b - f;
                return v = Math.max(Math.min(n[a] - d - 32, v), 0), e.arrowElement = o, e.offsets.arrow = {
                    [l]: Math.round(v),
                    [p]: ""
                }, e
            };
            var g = o(825);
            class event_blocker_EventBlocker extends a.Component {
                constructor(...e) {
                    super(...e), this.eventBlockerRef = void 0, this.stopBubbling = e => {
                        "click" === e.type && this.props.onClickEvent && this.props.onClickEvent(), e.stopPropagation()
                    }
                }
                componentDidMount() {
                    this.eventBlockerRef && this.props.events.forEach((e => {
                        Object(h.c)(this.eventBlockerRef, e, this.stopBubbling)
                    }))
                }
                componentWillUnmount() {
                    this.eventBlockerRef && this.props.events.forEach((e => {
                        Object(h.B)(this.eventBlockerRef, e, this.stopBubbling)
                    }))
                }
                render() {
                    return a.createElement("div", {
                        className: "event-blocker",
                        ref: e => this.eventBlockerRef = e
                    }, this.props.children)
                }
            }

            function b(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, i)
                }
                return o
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(o), !0).forEach((function(t) {
                        v(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : b(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function v(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            o.d(t, "a", (function() {
                return positioner_Positioner
            }));
            class positioner_Positioner extends a.Component {
                constructor(...e) {
                    super(...e), this.arrow = void 0, this.node = void 0, this.arrowContainer = void 0, this.positioner = void 0, this.targetInDom = void 0, this.IntersectionObserver = void 0, this.missingSelectorTimeout = void 0, this.scrollIntoViewTimeout = void 0, this.repositionCheckTimeout = void 0, this.mutationObserver = void 0, this.state = {
                        styles: null,
                        arrowStyles: null,
                        hide: !1,
                        nodeInViewPort: !1,
                        nodeIsEntirelyInViewport: !1,
                        positionerOffsetForMask: {
                            left: 0,
                            top: 0
                        },
                        placement: null,
                        maskStyles: {
                            padding: 0,
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    }, this.targetWithClickHandler = null, this.updateElementPosition = e => {
                        const {
                            styles: t,
                            arrowStyles: o
                        } = e;
                        return this.setState({
                            styles: t,
                            hide: !this.targetIsVisible(),
                            arrowStyles: o
                        }), e.attributes && this.applyAttributes(e.attributes), this.checkIfRepositionRequired(e), e
                    }, this.updateMaskPosition = () => {
                        const e = this.getMaskStyles();
                        r()(this.state.maskStyles, e) || this.setState({
                            maskStyles: e
                        })
                    }, this.handleOverlayClick = () => {
                        this.scrollIntoView(), this.props.onOverlayClick && this.props.onOverlayClick()
                    }, this.handleTargetClick = () => {
                        this.props.onTargetClick && this.props.onTargetClick()
                    }, this.handlePlacementChange = () => {
                        this.props.onPlacementChange && this.state.placement && this.props.onPlacementChange(this.state.placement)
                    }, this.renderOverlay = () => {
                        const e = this.getTargetNode();
                        return this.props.renderOverlay(this.handleOverlayClick, this.props, e)
                    }
                }
                reinitializeObjects() {
                    this.initializeIntersectionObserver(), this.initializePositioner(), this.setupTargetClickHandler()
                }
                componentDidMount() {
                    this.initializeMutationObserver(), this.reinitializeObjects(), this.updateMaskPosition()
                }
                shouldComponentUpdate(e, t) {
                    return !r()(this.props, e) || !r()(this.state, t)
                }
                componentDidUpdate(e, t) {
                    e.targetSelector !== this.props.targetSelector ? this.reinitializeObjects() : this.positioner ? this.positioner.scheduleUpdate() : this.reinitializeObjects(), t.placement !== this.state.placement && this.handlePlacementChange()
                }
                componentWillUnmount() {
                    const {
                        appWindow: e
                    } = this.props;
                    this.destroyIntersectionObserver(), this.destroyPositioner(), this.destroyTargetClickHandler(), (e => {
                        e.IntercomIntersectionObserver && (delete e.IntercomIntersectionObserver, delete e.IntercomIntersectionObserverEntry)
                    })(e), this.missingSelectorTimeout && clearTimeout(this.missingSelectorTimeout), this.scrollIntoViewTimeout && clearTimeout(this.scrollIntoViewTimeout), this.repositionCheckTimeout && clearTimeout(this.repositionCheckTimeout), this.mutationObserver && this.mutationObserver.disconnect()
                }
                getTargetNode() {
                    const {
                        targetSelector: e,
                        appWindow: t
                    } = this.props;
                    try {
                        return t.document.querySelector(e)
                    } catch (e) {
                        return null
                    }
                }
                setupTargetClickHandler() {
                    this.destroyTargetClickHandler(), this.targetWithClickHandler = this.getTargetNode(), this.targetWithClickHandler && Object(h.c)(this.targetWithClickHandler, "click", this.handleTargetClick, !0)
                }
                destroyTargetClickHandler() {
                    this.targetWithClickHandler && Object(h.B)(this.targetWithClickHandler, "click", this.handleTargetClick)
                }
                storeMaskOffsetsBasedOnFlipPosition(e) {
                    const {
                        scrollable: t
                    } = this.props;
                    if (!t) return;
                    const o = e["x-placement"];
                    switch (o) {
                        case "bottom":
                            this.setState({
                                placement: o,
                                positionerOffsetForMask: {
                                    left: 0,
                                    top: 3
                                }
                            });
                            break;
                        case "top":
                            this.setState({
                                placement: o,
                                positionerOffsetForMask: {
                                    left: 0,
                                    top: -3
                                }
                            });
                            break;
                        case "left":
                            this.setState({
                                placement: o,
                                positionerOffsetForMask: {
                                    left: -5,
                                    top: 0
                                }
                            });
                            break;
                        case "right":
                            this.setState({
                                placement: o,
                                positionerOffsetForMask: {
                                    left: 3,
                                    top: 0
                                }
                            });
                            break;
                        default:
                            return
                    }
                }
                applyAttributes(e) {
                    [this.arrowContainer, this.node].forEach((t => {
                        t && "function" == typeof t.querySelectorAll && Object.keys(e).forEach((o => {
                            t && t.setAttribute && t.setAttribute(o, e[o])
                        })), this.storeMaskOffsetsBasedOnFlipPosition(e)
                    }))
                }
                checkIfRepositionRequired(e) {
                    const {
                        styles: t,
                        attributes: o
                    } = e;
                    if (this.repositionCheckTimeout && clearTimeout(this.repositionCheckTimeout), o && !1 !== o["x-out-of-boundaries"] && t && t.transform) {
                        const e = (t.transform.match(/(-{0,1}\d+)px/g) || []).map((e => Number(e.replace("px", "")))),
                            o = parseInt(e[0]),
                            i = parseInt(e[1]);
                        o < 0 && i < 0 && (this.repositionCheckTimeout = setTimeout((() => {
                            this.nodeIsVisible() && this.reinitializeObjects()
                        }), 500))
                    }
                }
                targetIsVisible() {
                    const {
                        nodeInViewPort: e
                    } = this.state;
                    if (!e) return !1;
                    const t = this.getTargetNode();
                    return Object(h.x)(t)
                }
                scrollIntoView() {
                    this.scrollIntoViewTimeout = setTimeout((() => {
                        const {
                            nodeIsEntirelyInViewport: e
                        } = this.state, t = this.getTargetNode();
                        t && !e && t.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "center"
                        })
                    }), 200)
                }
                initializeMutationObserver() {
                    const {
                        appWindow: e
                    } = this.props;
                    this.targetInDom = !!this.getTargetNode(), this.mutationObserver = new MutationObserver((() => {
                        this.targetInDom && !this.getTargetNode() && (this.targetInDom = !1, this.destroyPositioner(), this.forceUpdate()), !this.targetInDom && this.getTargetNode() && (this.targetInDom = !0, this.forceUpdate()), this.updateMaskPosition()
                    })), this.mutationObserver.observe(e.document.body, {
                        attributes: !0,
                        subtree: !0,
                        childList: !0
                    })
                }
                initializePositioner() {
                    const {
                        scrollable: e,
                        placement: t
                    } = this.props, o = this.getTargetNode();
                    let i = "auto";
                    t < 5 && t >= 0 && (i = ["auto", "top", "bottom", "right", "left"][t]), o && this.node && (e && this.scrollIntoView(), this.positioner = new l.a(o, this.node, {
                        positionFixed: !1,
                        placement: i,
                        modifiers: {
                            applyStyle: {
                                enabled: !1
                            },
                            preventOverflow: {
                                boundariesElement: "viewport"
                            },
                            arrow: {
                                enabled: !0,
                                element: this.arrow,
                                fn: u
                            },
                            updateElementPosition: {
                                enabled: !0,
                                fn: this.updateElementPosition,
                                order: 900
                            }
                        }
                    }))
                }
                initializeIntersectionObserver() {
                    const {
                        appWindow: e
                    } = this.props, t = this.getTargetNode();
                    t && (e.IntercomIntersectionObserver || d(e), this.IntersectionObserver = new e.IntercomIntersectionObserver((e => {
                        if (0 === e.length) return;
                        const {
                            isIntersecting: o,
                            intersectionRatio: i
                        } = n()(e, ["time"], ["desc"])[0], s = o, r = o && Object(h.x)(t), a = 1 === i;
                        this.setState({
                            hide: !r,
                            nodeInViewPort: s,
                            nodeIsEntirelyInViewport: a
                        })
                    }), {
                        threshold: .05
                    }), this.IntersectionObserver.observe(t))
                }
                destroyPositioner() {
                    this.positioner && (this.positioner.destroy(), delete this.positioner)
                }
                destroyIntersectionObserver() {
                    this.IntersectionObserver && this.IntersectionObserver.disconnect()
                }
                reinitializePointer() {
                    this.destroyPositioner(), this.initializePositioner()
                }
                reinitializeIntersectionObserver() {
                    this.destroyIntersectionObserver(), this.initializeIntersectionObserver()
                }
                mergedStyles() {
                    const {
                        scrollable: e
                    } = this.props, {
                        styles: t,
                        positionerOffsetForMask: o
                    } = this.state;
                    if (!t) return {};
                    if (!e) return t;
                    const {
                        left: i,
                        top: n
                    } = o;
                    return f(f({}, t), {}, {
                        left: t.left + i,
                        top: t.top + n
                    })
                }
                nodeIsVisible() {
                    const e = this.getTargetNode();
                    return e && Object(h.x)(e)
                }
                getStyles() {
                    const {
                        hideArrow: e
                    } = this.props, {
                        height: t,
                        width: o,
                        opacity: i
                    } = this.props.childDimensions || {}, n = e ? 5 : 15;
                    if (this.nodeIsVisible()) {
                        const e = !this.state.hide && t && o && i ? 1 : 0;
                        return this.onSelectorMatch(), f(f({}, this.mergedStyles()), {}, {
                            opacity: e,
                            margin: n
                        })
                    }
                    if (this.props.renderFallback) {
                        const {
                            opacity: e
                        } = this.props.childDimensions || {};
                        return this.props.targetSelector && this.onMissingSelector(), {
                            position: "fixed",
                            top: `calc(50% - ${(t||0)/2}px)`,
                            left: `calc(50% - ${(o||0)/2}px)`,
                            opacity: e,
                            margin: n
                        }
                    }
                }
                getArrowStyles() {
                    const {
                        arrowStyles: e,
                        hide: t
                    } = this.state, {
                        height: o,
                        width: i
                    } = this.props.childDimensions || {}, n = !t && o && i ? 1 : 0;
                    return e ? {
                        top: e.top,
                        left: e.left,
                        opacity: n
                    } : {
                        opacity: n
                    }
                }
                getMaskStyles() {
                    const e = this.getTargetNode();
                    if (!e || !this.props.scrollable || this.state.hide) return {
                        padding: 0,
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    const {
                        top: t,
                        left: o,
                        width: i,
                        height: n
                    } = e.getBoundingClientRect(), {
                        appWindow: s
                    } = this.props;
                    return {
                        padding: 3,
                        top: t - 3 + s.pageYOffset,
                        left: o - 3 + s.pageXOffset,
                        width: i,
                        height: n
                    }
                }
                renderArrow() {
                    return a.createElement(g.b, {
                        style: f({}, this.getArrowStyles()),
                        ref: e => this.arrow = e
                    }, a.createElement(g.a, {
                        frameName: "intercom-positioner-arrow-frame"
                    }, (() => a.createElement(g.e, {
                        style: {
                            display: this.props.hideArrow ? "none" : "block"
                        },
                        ref: e => this.arrowContainer = e
                    }))))
                }
                onMissingSelector() {
                    this.missingSelectorTimeout || (this.missingSelectorTimeout = setTimeout((() => {
                        !this.nodeIsVisible() && this.props.onMissingSelector && this.props.onMissingSelector()
                    }), 300))
                }
                onSelectorMatch() {
                    this.props.onSelectorMatch && this.props.onSelectorMatch()
                }
                render() {
                    const {
                        scrollable: e,
                        shouldAnimate: t,
                        renderFallback: o,
                        children: i,
                        appWindow: n,
                        buttonColor: s
                    } = this.props, r = this.getTargetNode();
                    if (!r && !o) return null;
                    const {
                        maskStyles: c
                    } = this.state, {
                        width: l,
                        height: p
                    } = c;
                    return a.createElement(positioner_tree_PositionerTree, {
                        appWindow: n
                    }, a.createElement(a.Fragment, null, a.createElement(g.g, {
                        ref: e => this.node = e,
                        style: this.getStyles()
                    }, a.createElement(g.d, null, this.nodeIsVisible() ? this.renderArrow() : null, this.targetIsVisible() || o ? i : null)), a.createElement(g.f, {
                        style: c,
                        isStep: e && !!r,
                        isPost: e && !r,
                        isAnimating: t,
                        height: p,
                        width: l,
                        buttonColor: s
                    }), a.createElement(event_blocker_EventBlocker, {
                        events: ["auxclick", "click", "dblclick", "mousedown", "mouseup"],
                        onClickEvent: () => this.handleOverlayClick()
                    }, this.renderOverlay())))
                }
            }
            positioner_Positioner.defaultProps = {
                hideArrow: !1,
                renderFallback: !1,
                shouldAnimate: !1,
                renderOverlay: (e, {
                    scrollable: t
                }) => a.createElement(g.c, {
                    onClick: e,
                    scrollable: t,
                    tabIndex: -1
                })
            }
        }
    }
]);
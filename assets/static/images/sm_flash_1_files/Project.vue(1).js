(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 66, 3, 6, 7, 12, 16, 30 ], Array(176).concat([ function(e, t, n) {
    "use strict";
    n.r(t);
    n(17), n(18), n(20), n(44), n(126), n(24), n(25), n(22), n(8), n(10), n(71), n(198), 
    n(21), n(35);
    var o = n(49), r = n(1560), i = n(1558), a = n(512), s = n(14);
    n(36), n(30), n(37), n(38);
    function l(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function c(e) {
        return document.querySelector('link[rel="stylesheet"][href="' + e + '"]');
    }
    function u(e, t) {
        return t + "css/" + e;
    }
    function p() {
        var e;
        return e = regeneratorRuntime.mark(function e(t, n) {
            var o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = t.map(function(e) {
                        var t = u(e, n);
                        if (!c(t)) return new Promise(function(e, n) {
                            var o = document.createElement("link");
                            o.type = "text/css", o.rel = "stylesheet", o.onload = e, o.onerror = n, o.href = t, 
                            document.querySelector("head").appendChild(o);
                        });
                    }), e.abrupt("return", Promise.all(o));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        }), (p = function() {
            var t = this, n = arguments;
            return new Promise(function(o, r) {
                var i = e.apply(t, n);
                function a(e) {
                    l(i, o, r, a, s, "next", e);
                }
                function s(e) {
                    l(i, o, r, a, s, "throw", e);
                }
                a(void 0);
            });
        }).apply(this, arguments);
    }
    var d = {
        addInlineStyle: function(e, t) {
            var n = document.createElement("style");
            return n.type = "text/css", e.appendChild(n), n.appendChild(document.createTextNode(t)), 
            n;
        },
        loadCss: function(e, t) {
            return p.apply(this, arguments);
        },
        removeCss: function(e, t) {
            e.forEach(function(e) {
                var n = c(u(e, t));
                n && n.parentNode.removeChild(n);
            });
        }
    }, f = n(252), b = n(172), h = n.n(b), m = n(270), g = n.n(m), v = n(295), w = n.n(v), _ = n(755), y = n.n(_), j = n(27), x = n(1), P = {
        project: "/v2/projects",
        user: "/v2/users",
        team: "/v2/teams"
    }, C = {
        get: function(e) {
            return Object(x.default)({
                type: e.httpMethod,
                url: P[e.entity] + "/" + e.id + "/" + e.action + "?client_id=" + window.adobeid.client_id
            }).then(e.callback);
        },
        view: function(e, t, n) {
            return this.get({
                httpMethod: "POST",
                action: "view",
                entity: e,
                id: t,
                callback: n
            }), this;
        },
        appreciate: function(e, t, n) {
            return this.get({
                httpMethod: "POST",
                action: "appreciate",
                entity: e,
                id: t,
                callback: n
            }), this;
        },
        unappreciate: function(e, t, n) {
            return this.get({
                httpMethod: "DELETE",
                action: "appreciate",
                entity: e,
                id: t,
                callback: n
            }), this;
        }
    }, k = n(254), O = n.n(k), I = n(32), T = n(1809), S = n.n(T), A = O.a.extend({
        mustache: S.a,
        _hover: function() {
            this.pulseHovered || (this.pulseHovered = !0, this._controller._pulsePointViewed(this._model.get("from"))), 
            I.default.custom("onboarding", "Pulse Point Hovered", {
                from: this._model.get("from")
            });
        },
        _destroyFade: function() {
            var e = this, t = this._model.get("fadeTime") || 250;
            return this.$view.fadeOut(t, function() {
                return e.destroy();
            });
        },
        showClickedMessage: function() {
            var e = this;
            if (this.destroyTimer) return clearTimeout(this.destroyTimer), this.destroyTimer = null, 
            void this.destroy();
            if (this._model.set("clicked", !0), I.default.custom("onboarding", "Pulse Point Clicked", {
                from: this._model.get("from")
            }), this._model.get("hideOnClick")) return this._destroyFade();
            var t = this._model.get("displayTime") || 5e3;
            this.destroyTimer = setTimeout(function() {
                return e._destroyFade();
            }, t), this.render();
        },
        destroy: function() {
            this._super(), this.destroyTimer && clearTimeout(this.destroyTimer), this._controller.trigger("closed");
        },
        rendered: function(e) {
            this.destroyTimer || e.on("mouseenter", this._hover.bind(this));
        },
        events: {
            click: "showClickedMessage"
        },
        templateData: function() {
            var e = this._super();
            return e.from = this._model.get("from"), e.follow = "follow" === e.from, e.appreciate = "appreciate" === e.from, 
            e.sibling_arrow = "sibling_arrow" === e.from, e;
        }
    }), $ = y.a.extend({
        close: function() {
            this._view.showClickedMessage();
        },
        _pulsePointViewed: function(e) {
            return Object(x.default)({
                url: "/v2/users/me/flags/" + e + "_pulse_point",
                type: "POST"
            });
        }
    }, {
        displayName: "PulsePoint",
        VIEW_CLASS: A
    }), M = (n(43), n(78)), E = n.n(M), B = O.a.extend({
        init: function() {
            this._super.apply(this, arguments), this.listenTo(this._model, "appreciatedOn", this._appreciationUpdate);
        },
        render: function() {
            var e = this._model.get("appreciatedOn"), t = this._model.get("canUnappreciate");
            e && this._showAppreciation(), this.$view.toggleClass("can-unappreciate", t), this._bindAppreciationClick();
        },
        _bindAppreciationClick: function() {
            var e = this;
            this.$view.on("click", function() {
                var t = Boolean(e._model.get("appreciatedOn")), n = e._model.get("canUnappreciate");
                t ? n && e._controller.unappreciate() : e._controller.appreciate(e.$view.data("appreciate-from"));
            });
        },
        _appreciationUpdate: function() {
            this._model.get("appreciatedOn") ? this._showAppreciation() : this._resetAppreciation();
        },
        _showAppreciation: function() {
            var e = this._model.get("newAppreciation"), t = this._model.get("appreciatedOn");
            this.$view.data("adobe-analytics", "UnappreciateClick"), e || !t ? this.$view.addClass("thanks") : this.$view.addClass("appreciated").find(".js-appreciation-date").text(E.a.unix(t).format("LL"));
        },
        _resetAppreciation: function() {
            this.$view.data("adobe-analytics", "AppreciateClick").removeClass("appreciated thanks").find(".js-appreciation-date").text("");
        }
    }), L = y.a.extend({
        init: function(e, t) {
            var n = this;
            this.views = [];
            var o = t instanceof h.a ? t : h()(t);
            this._model = new g.a(e.id, {
                appreciatedOn: 0,
                thanks: !1,
                renderPulsePoint: e.renderPulsePoint
            }), o.each(function(e, t) {
                n.views.push(n._initView(h()(t)));
            });
        },
        _initView: function(e) {
            var t = new B(this._model);
            return t.$view = e, t._controller = this, t;
        },
        render: function() {
            var e = this, t = new w.a();
            return C.view("project", this.id, function(n) {
                var o = n.appreciated_on || 0;
                e._model.set("canUnappreciate", Boolean(parseInt(n.has_user, 10))), e._model.set("appreciatedOn", o), 
                e.views.forEach(function(t) {
                    t.render(), 0 === o && e._model.get("renderPulsePoint") && t.$view.data("renderPulsePoint") && (e.pulsePoint = new $({
                        from: "appreciate"
                    }), e.pulsePoint.render(t.$view));
                }), t.resolve();
            }), t;
        },
        appreciate: function(e) {
            C.appreciate("project", this._model.id()), this._model.set("newAppreciation", !0), 
            this._model.set("appreciatedOn", Date.now()), j.default.info("bane", "Appreciate Action created", {
                from: e
            }), I.default.custom("analytics", "Appreciated", {
                source: e
            }), this.trigger("appreciate");
        },
        unappreciate: function() {
            C.unappreciate("project", this._model.id()), this._model.set("appreciatedOn", 0), 
            j.default.info("bane", "Unappreciate Action created"), this.trigger("unappreciate");
        },
        destroy: function() {
            this.views.forEach(function(e) {
                e.destroy();
            }), this.views = [], this._model.destroy(), this._model = null, this.pulsePoint && this.pulsePoint.destroy();
        }
    }), N = n(1564);
    function R(e, t) {
        return {
            name: "projectPopup",
            params: {
                projectId: e.id,
                slug: e.slug
            },
            query: {
                tracking_source: t
            }
        };
    }
    var D = n(5), z = n(1177), F = n(710), H = n(565), V = n(237), U = n.n(V), W = n(1811), q = n.n(W), G = {
        "restricted-safe": [ {
            label: D.default.translate("adult_wall_dialog_button_submit", "Turn off Safe Browsing"),
            classes: [ "form-submit" ]
        }, {
            label: D.default.translate("adult_wall_dialog_button_cancel", "Cancel"),
            classes: [ "rf-button--inline", "js-cancel" ]
        } ]
    }, K = {
        mustache: q.a,
        templateData: function() {
            var e = U()({
                classes: [ "mature-blocker", "safe" ]
            }, this._model.data());
            return e.buttons = G[e.access], e;
        },
        rendered: function() {
            var e = this;
            this.$view.on("click", ".form-submit", function() {
                e._controller.disableSafeBrowsing().then(e.hide.bind(e)).then(e.destroy.bind(e));
            }).filter(".blocking-div").on("click", function(e) {
                e.stopImmediatePropagation();
            }), this._super();
        }
    }, Y = H.default.extend(K), X = F.default.extend(K), J = z.default.extend({
        render: function() {
            this._view && (this._view.render(document.body), this._view.position());
        },
        disableSafeBrowsing: function() {
            return Object(x.default)({
                type: "PATCH",
                url: "/account/safe_browsing_setting",
                data: {
                    safe_browsing_setting: 0
                }
            }).then(function() {
                s.default.reloadLocation();
            }, console.error);
        }
    }, {
        VIEW_CLASS: {
            phone: X,
            tablet: Y,
            desktop: Y
        }
    }), Z = n(1578), Q = n(1812), ee = {
        mustache: n.n(Q).a,
        hide: function() {
            Z.default.back();
        }
    }, te = H.default.extend(ee), ne = F.default.extend(ee), oe = z.default.extend({
        render: function() {
            this._view && (this._view.render(document.body), this._view.position());
        }
    }, {
        VIEW_CLASS: {
            phone: ne,
            tablet: te,
            desktop: te
        }
    }), re = {
        init: function(e, t, n) {
            if (n.mature_content) {
                var o, r, i = {
                    "restricted-geo": D.default.translate("mature_content_restricted_geo", '<div class="mature-message">Because you live in a country where adult content is illegal you can\'t view this content on Behance.</div>'),
                    "restricted-age": D.default.translate("mature_content_restricted_age", '<div class="mature-message">Because you are under 18 years old, you can\'t access adult content on Behance.</div>'),
                    "restricted-safe": D.default.translate("mature_content_restricted_safe", '<div class="mature-message">You currently have Safe Browsing turned on. Would you like to turn off Safe Browsing to view content on Behance that contain adult content?</div>')
                };
                if ("logged-out" === n.mature_access) o = new oe({
                    classes: [ "mature-blocker", "log-in" ],
                    title: D.default.translate("mature_content_log_in", "Sign In"),
                    login: {
                        classes: [ "rf-button--large", "js-adobeid-signin" ],
                        label: D.default.translate("mature_content_log_in", "Sign In")
                    }
                }); else {
                    if (!(r = i[n.mature_access])) return;
                    o = new J(e, {
                        title: D.default.translate("mature_content_restricted_project_title", "This project contains adult content"),
                        html: r,
                        access: n.mature_access
                    });
                }
                o.render(), this.popup = o;
            }
        },
        destroy: function() {
            this.popup && (this.popup.destroy(), this.popup = null);
        }
    }, ie = n(1023), ae = n(182), se = function(e) {
        return Object(x.default)({
            type: "POST",
            url: "/a/social_media/mail",
            data: {
                project_id: e
            }
        });
    };
    function le(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function ce(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    var ue = "SEND_SOCIAL_EMAIL", pe = "SET_SOCIAL_MEDIA_EMAIL_SENT_STATUS", de = {
        namespaced: !0,
        state: function() {
            return {
                socialEmailStatus: ""
            };
        },
        actions: le({}, ue, function(e, t) {
            var n, o = e.commit;
            return (n = regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, o(pe, "sending"), e.next = 4, se(t);

                      case 4:
                        o(pe, "sent"), e.next = 10;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(0), o(pe, "error");

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 7 ] ]);
            }), function() {
                var e = this, t = arguments;
                return new Promise(function(o, r) {
                    var i = n.apply(e, t);
                    function a(e) {
                        ce(i, o, r, a, s, "next", e);
                    }
                    function s(e) {
                        ce(i, o, r, a, s, "throw", e);
                    }
                    a(void 0);
                });
            })();
        }),
        mutations: le({}, pe, function(e, t) {
            e.socialEmailStatus = t;
        })
    };
    function fe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function be(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? fe(Object(n), !0).forEach(function(t) {
                he(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    function he(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var me = {
        components: {
            Btn: ae.a
        },
        props: {
            projectId: {
                type: Number
            },
            recentSocialEmail: {
                type: Boolean,
                default: !1
            }
        },
        computed: be({}, Object(o.mapState)("project/projectAdmin", [ "socialEmailStatus" ])),
        methods: be({}, Object(o.mapActions)("project/projectAdmin", {
            sendSocialEmail: ue
        })),
        beforeCreate: function() {
            this.$store.registerModule([ "project", "projectAdmin" ], de);
        },
        destroyed: function() {
            this.$store.unregisterModule([ "project", "projectAdmin" ]);
        }
    }, ge = n(1813), ve = n(53);
    var we = Object(ve.default)(me, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.$style.adminSidebar
        }, [ n("h4", {
            class: e.$style.adminSectionHeader
        }, [ e._v("Featured on social media") ]), e.recentSocialEmail ? e._e() : n("Btn", {
            attrs: {
                type: "primary",
                disabled: "" !== e.socialEmailStatus
            },
            on: {
                click: function(t) {
                    return e.sendSocialEmail(e.projectId);
                }
            }
        }, [ e._v(" Send Email ") ]), n("span", {
            class: e.$style.socialEmailStatus
        }, [ e._v(e._s(e.socialEmailStatus)) ]), e.recentSocialEmail ? n("span", {
            class: e.$style.socialEmailStatus
        }, [ e._v("The project owners have recently received an email.") ]) : e._e() ], 1);
    }, [], !1, function(e) {
        this.$style = ge.default.locals || ge.default;
    }, null, null).exports, _e = n(424), ye = n(86), je = n(46), xe = n(868), Pe = n(1121);
    function Ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function ke(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var Oe = {
        actions: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ce(Object(n), !0).forEach(function(t) {
                    ke(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(je.a)("project", [ xe.a.PROJECT_VIEWED_FRONTEND, xe.a.INFO_BOX_OPENED, xe.a.INFO_BOX_CLOSED, xe.a.NAVIGATE_TO_NEXT_PROJECT_ACTION, xe.a.NAVIGATE_TO_PREV_PROJECT_ACTION, xe.a.COLLECTION_ICON_CLICKED, xe.a.TOOLS_ICON_CLICKED, xe.a.PROJECT_END_REACHED, xe.a.PROJECT_MODULE_VIEWED, xe.a.CLICK_DOWNLOAD_TOOL_ACTION, xe.a.CLICK_OPEN_TOOL_GALLERY_ACTION ], "analytics"), {}, Object(je.a)("project/addToCollectionModal", [ Pe.a.COLLECTION_CREATE_CLICK, Pe.a.COLLECTION_SAVE_PROJECT_CLICK, Pe.a.COLLECTION_SAVE_MODULE_CLICK, Pe.a.MOODBOARD_SAVE_GRID_ITEM_CLICK ], "analytics"))
    }, Ie = n(1407), Te = n(26), Se = n(85), Ae = n(39), $e = n(1617), Me = n(1408);
    function Ee(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function Be(e) {
        return function() {
            var t = this, n = arguments;
            return new Promise(function(o, r) {
                var i = e.apply(t, n);
                function a(e) {
                    Ee(i, o, r, a, s, "next", e);
                }
                function s(e) {
                    Ee(i, o, r, a, s, "throw", e);
                }
                a(void 0);
            });
        };
    }
    function Le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Le(Object(n), !0).forEach(function(t) {
                Re(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    function Re(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var De = Object(o.createNamespacedHelpers)("project"), ze = De.mapState, Fe = De.mapActions, He = {
        components: {
            ProjectOverlay: r.a,
            Content: i.a,
            Error: a.a,
            AdminSidebar: we,
            AddToCollectionModal: function() {
                return Promise.all([ n.e(120), n.e(46) ]).then(n.bind(null, 2394));
            },
            ReportModal: _e.a
        },
        methods: Ne({}, Fe({
            init: xe.a.INIT_ACTION,
            hydrateAppreciatedStatus: xe.a.HYDRATE_APPRECIATED_STATUS,
            closeViewer: xe.a.CLOSE_VIEWER_ACTION,
            appreciate: xe.a.APPRECIATE_CLICK_ACTION,
            unappreciate: xe.a.UNAPPRECIATE_CLICK_ACTION,
            toggleFollowing: xe.a.FOLLOW_CLICK_ACTION,
            goToPrevProject: xe.a.NAVIGATE_TO_PREV_PROJECT_ACTION,
            goToNextProject: xe.a.NAVIGATE_TO_NEXT_PROJECT_ACTION,
            commentAdded: xe.a.COMMENT_ADDED_ACTION,
            commentRemoved: xe.a.COMMENT_REMOVED_ACTION,
            removeCredit: xe.a.REMOVE_CREDIT_CLICK_ACTION,
            pulsePointClicked: xe.a.PULSE_POINT_CLICKED,
            pulsePointHovered: xe.a.PULSE_POINT_HOVERED,
            hoverMiniprofileAvatar: xe.a.HOVER_MINIPROFILE,
            viewedProject: xe.a.PROJECT_VIEWED_FRONTEND,
            report: xe.a.REPORT_PROJECT,
            submitForMatureReview: xe.a.SUBMIT_FOR_MATURE_REVIEW,
            infoBoxShown: xe.a.INFO_BOX_OPENED,
            infoBoxHidden: xe.a.INFO_BOX_CLOSED,
            collectionIconClicked: xe.a.COLLECTION_ICON_CLICKED,
            closeCollectionModal: xe.a.COLLECTION_MODAL_CLOSED,
            openCollectionModal: xe.a.COLLECTION_MODAL_OPENED,
            collectionModalSuccessMessageRead: xe.a.COLLECTION_MODAL_SUCCESS_MESSAGE_READ,
            clickToolsIcon: xe.a.TOOLS_ICON_CLICKED,
            projectEndReached: xe.a.PROJECT_END_REACHED,
            projectModuleViewed: xe.a.PROJECT_MODULE_VIEWED,
            toolOpened: xe.a.CLICK_DOWNLOAD_TOOL_ACTION,
            galleryOpened: xe.a.CLICK_OPEN_TOOL_GALLERY_ACTION,
            commentChildGainedFocus: xe.a.COMMENT_CHILD_GAINED_FOCUS_ACTION,
            commentChildLostFocus: xe.a.COMMENT_CHILD_LOST_FOCUS_ACTION
        }), {}, Object(o.mapActions)("error", {
            resetErrorMessage: Se.a
        }), {
            reportModalConfirmHandler: function(e) {
                this.report(e), this.closeReportModal();
            },
            closeReportModal: function() {
                this.$router.push({
                    name: "projectPopup",
                    params: {
                        id: this.project.id,
                        name: this.project.slug
                    }
                });
            },
            handleClose: function() {
                this.shouldRenderProject = !1, this.closeViewer(), this.$router.push(this.backgroundPageUrl);
            },
            showScrollTopPosition: function(e) {
                this.scrollTopPosition = e;
            },
            initBindings: function() {
                this.initFollowing(), this.initLightbox(), this.initSpam(), this.initMature(), this.initMiniprofile(), 
                this.initAppreciate(), this.initComments(), this.initGrid(), this.initLazyLoad(), 
                this.isFullPage || this.initSiblingProjects(), this.initAdmin(), this.setScrollBarWidth(), 
                this.initShareDialog();
            },
            initShareDialog: function() {
                var e = this;
                return Be(regeneratorRuntime.mark(function t() {
                    var o, r, i, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if ((e.$route.query.share || e.$route.query.unverified) && e.shareConfig && e.project.is_owner) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return");

                          case 2:
                            if (!("public" !== e.project.privacy && e.shareConfig.is_email_verified)) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return");

                          case 5:
                            return t.next = 7, n.e(36).then(n.bind(null, 2408));

                          case 7:
                            return o = t.sent, r = o.default, i = e.user && e.shareConfig.is_email_verified, 
                            a = i && e.project.is_owner, t.next = 13, new Promise(function(t) {
                                return r.init(Ne({}, e.shareConfig, {
                                    unverified: !a,
                                    ADOBE_VERIFY: e.config.ADOBE_VERIFY,
                                    isNewProjectPopup: !0
                                })).then(t);
                            });

                          case 13:
                            e.$shareDialog = t.sent;

                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            destroyShareDialog: function() {
                this.$shareDialog && this.$shareDialog.remove();
            },
            initLazyLoad: function() {
                var e = this;
                return Be(regeneratorRuntime.mark(function t() {
                    var o, r, i;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if ((o = e.$el.getElementsByClassName("js-lazy")).length) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return");

                          case 3:
                            return t.next = 5, n.e(37).then(n.t.bind(null, 2366, 7));

                          case 5:
                            r = t.sent, i = r.default, e.lazyLoad = i.init(o, {
                                threshold: 600,
                                container: e.$refs.root.$el
                            });

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            initSpam: function() {
                this.spam = ie.a.init(this.$el.querySelector(".js-project-spam"));
            },
            initMature: function() {
                re.init(this.project.id, "project", this.project);
            },
            initMiniprofile: function() {
                var e = this;
                return Be(regeneratorRuntime.mark(function t() {
                    var o, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.isFullPage) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return");

                          case 2:
                            return t.next = 4, n.e(31).then(n.bind(null, 607));

                          case 4:
                            o = t.sent, r = o.default, e.miniprofile = r, e.miniprofile.init(e.$el);

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            initComments: function() {
                var e = this;
                return Be(regeneratorRuntime.mark(function t() {
                    var o, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.project.allow_comments) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return");

                          case 2:
                            return t.next = 4, Promise.all([ n.e(116), n.e(34) ]).then(n.bind(null, 2436));

                          case 4:
                            o = t.sent, r = o.default, e.commentsBlock = r.init(e.$el, e.config), e.commentsBlock.on("added", function() {
                                return e.commentAdded();
                            }), e.commentsBlock.on("removed", function() {
                                return e.commentRemoved();
                            }), e.commentsBlock.on("input.focus", function() {
                                return e.isCommentFocused = !0;
                            }), e.commentsBlock.on("input.blur", function() {
                                return e.isCommentFocused = !1;
                            }), e.commentsBlock.on($e.a.childHasFocus, function() {
                                return e.commentChildGainedFocus();
                            }), e.commentsBlock.on($e.a.childLostFocus, function() {
                                return e.commentChildLostFocus();
                            });

                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            initSiblingProjects: function() {
                if (this.projects && this.projects.length) {
                    var e, t, n, o, r, i, a, s, l = (e = Number(this.project.id), t = this.projects, 
                    n = this.trackingSource, o = t.findIndex(function(t) {
                        return t.id === e;
                    }), r = t[o - 1], i = t[o + 1], a = r && R(r, r.trackingSource || n), s = i && R(i, i.trackingSource || n), 
                    {
                        prevProjectRoute: a || null,
                        nextProjectRoute: s || null
                    }), c = l.prevProjectRoute, u = l.nextProjectRoute;
                    this.prevProjectRoute = c, this.nextProjectRoute = u;
                }
            },
            initLightbox: function() {
                var e = this;
                this.lightbox = N.a.init(this.$el, !1), this.lightbox.on("open", function() {
                    return e.isLightboxOpen = !0;
                }), this.lightbox.on("close", function() {
                    return e.isLightboxOpen = !1;
                }), this.lightbox.on("shown", function(t) {
                    return e.lightboxActiveSlideIdx = t;
                });
            },
            initLightboxFollow: function(e) {
                var t = this;
                return Be(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, t.$nextTick();

                          case 2:
                            f.default.init(document.querySelector(e));

                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }))();
            },
            setScrollBarWidth: function() {
                this.isFullPage || (this.scrollBarWidth = this.$refs.overlay.$el.offsetWidth - this.$refs.overlay.$el.clientWidth);
            },
            initAppreciate: function() {
                var e = this;
                return Be(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!e.isFullPage) {
                                t.next = 3;
                                break;
                            }
                            return t.next = 3, e.hydrateAppreciatedStatus();

                          case 3:
                            return e.appreciateButton = new L({
                                id: e.project.id
                            }, e.$el.getElementsByClassName("js-appreciate")), e.appreciateButton.on("appreciate", function() {
                                return e.appreciate();
                            }), e.appreciateButton.on("unappreciate", function() {
                                return e.unappreciate();
                            }), t.next = 8, e.appreciateButton.render();

                          case 8:
                            e.didInitAppreciate = !0;

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            initGrid: function() {
                var e = this;
                return Be(regeneratorRuntime.mark(function t() {
                    var o, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.project.modules.filter(function(e) {
                                return e.is_grid;
                            }).length) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return");

                          case 3:
                            return t.next = 5, n.e(39).then(n.bind(null, 880));

                          case 5:
                            o = t.sent, r = o.default, e.grid = r.init({
                                context: e.$el
                            });

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            initFollowing: function() {
                f.default.init(this.$el);
            },
            initAdmin: function() {
                var e = this;
                return Be(regeneratorRuntime.mark(function t() {
                    var o, r, i, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.admin) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return");

                          case 2:
                            return t.next = 4, n.e(33).then(n.bind(null, 2445));

                          case 4:
                            if (o = t.sent, r = o.default, i = e.$refs.root.$refs.legacyAdminSidebar, !e.admin.is_feature_queue_admin) {
                                t.next = 10;
                                break;
                            }
                            return t.next = 10, r.init({
                                projectId: e.project.id,
                                context: i,
                                data: e.admin
                            });

                          case 10:
                            if (e.admin.is_mature_content_admin) {
                                t.next = 12;
                                break;
                            }
                            return t.abrupt("return");

                          case 12:
                            return t.next = 14, n.e(113).then(n.t.bind(null, 2367, 7));

                          case 14:
                            return t.next = 16, n.e(35).then(n.bind(null, 2368));

                          case 16:
                            a = t.sent, a.default.init(i, e.project.id);

                          case 19:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            handlePrevArrowIntent: function(e) {
                this.goToPrevProject(), this.$router.push(e);
            },
            handleNextArrowIntent: function(e) {
                this.goToNextProject(), this.$router.push(e);
            },
            removeInlineStyle: function() {
                this.inlineStylesheet && this.inlineStylesheet.remove();
            },
            replaceProjectRouteSansAction: function() {
                return this.$router.replace({
                    name: "projectPopup",
                    params: Ne({}, this.$router.params, {
                        action: null
                    })
                });
            },
            signUpWithCollectionRedirect: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Ae.default.signUp({
                    redirect_uri: this.config.SSO.URLS.LOGIN + "?destination=" + this.$route.path + "/" + ye.a.MOODBOARD + "?" + Object(Me.a)(e)
                });
            },
            initCollections: function(e) {
                if (!Ae.default.isLoggedIn()) return this.replaceProjectRouteSansAction(), void this.signUpWithCollectionRedirect(e);
                this.openCollectionModal();
            },
            collectionSuccessMessageReadHandler: function() {
                this.collectionModalSuccessMessageRead(), this.replaceProjectRouteSansAction();
            },
            collectionCloseHandler: function() {
                this.closeCollectionModal(), this.replaceProjectRouteSansAction();
            },
            collectionIconClickHandler: function(e, t) {
                this.collectionIconClicked(e), Ae.default.isLoggedIn() ? this.$router.push({
                    name: "projectAction",
                    params: {
                        action: ye.a.MOODBOARD
                    },
                    query: t
                }) : this.signUpWithCollectionRedirect(t);
            },
            focus: function() {
                this.$refs.overlay.$el.focus();
            },
            destroyBindings: function() {
                var e = this;
                this.removeInlineStyle(), this.canViewProject && (this.project.allow_comments && this.commentsBlock.destroy(), 
                this.isFullPage && this.miniprofile.destroy(this.$el), this.appreciateButton.destroy(), 
                this.lightbox.destroy(), f.default.off("request", function() {
                    return e.toggleFollowing();
                }), f.default.destroy(), this.lazyLoad && this.lazyLoad.destroy(), this.grid && this.grid.destroy(), 
                re.destroy(), this.spam.destroy(), d.removeCss(this.popupCssPaths, Te.ASSETS_URL));
            }
        }),
        data: function() {
            return {
                originalHtmlStyle: "",
                isCSSLoaded: !1,
                inlineStylesheet: null,
                commentsBlock: null,
                appreciateButton: null,
                lightbox: null,
                currentProjectId: "",
                isLightboxOpen: !1,
                spam: null,
                miniprofile: null,
                scrollBarWidth: 0,
                shouldRenderProject: !0,
                isCommentFocused: !1,
                $shareDialog: null,
                didInitAppreciate: !1,
                signUp: null,
                scrollTopPosition: 0,
                collectionAdded: null,
                lightboxActiveSlideIdx: -1,
                nextProjectRoute: null,
                prevProjectRoute: null,
                isReportModalVisible: !1
            };
        },
        computed: Ne({}, Object(o.mapState)([ "config", "error" ]), {}, Object(o.mapState)({
            projects: function(e) {
                return e.layout && e.layout.projects;
            },
            trackingSource: function(e) {
                return e.layout && e.layout.trackingSource;
            },
            backgroundPageUrl: function(e) {
                return e.layout && e.layout.backgroundPageUrl;
            }
        }), {}, Object(o.mapGetters)("user", [ "isSocialEmailAdmin" ]), {}, ze([ "admin", "shareConfig", "project", "credits", "inlineStyle", "popupCssPaths", "otherProjects", "pulsePoints", "urls", "title", "appreciationCount", "isAppreciated", "isFollowing", "isDoneFetching", "isViewerOpen", "isFullPage", "commentCount", "user", "projectOwnerMiniprofile", "isIframe", "isMatureReviewSubmitted", "recentSocialEmail", "isCollectionModalVisible", "hasCommentChildFocus" ]), {
            isNarrowProject: function() {
                return this.project.canvas_width < 750;
            },
            canViewProject: function() {
                return this.isCSSLoaded && this.isDoneFetching && this.shouldRenderProject;
            },
            isKeyboardEnabled: function() {
                return this.canViewProject && !this.isLightboxOpen && !this.isCommentFocused;
            },
            isAdminSidebarEnabled: function() {
                return this.admin && this.admin.has_admin_sidebar;
            }
        }),
        watch: {
            popupCssPaths: function(e) {
                var t = this;
                return Be(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.prev = 0, t.removeInlineStyle(), n.next = 4, d.loadCss(e, Te.ASSETS_URL);

                          case 4:
                            t.isCSSLoaded = n.sent, t.inlineStylesheet = d.addInlineStyle(document.head, t.inlineStyle), 
                            n.next = 11;
                            break;

                          case 8:
                            n.prev = 8, n.t0 = n.catch(0), t.$store.dispatch("error", n.t0, {
                                root: !0
                            });

                          case 11:
                          case "end":
                            return n.stop();
                        }
                    }, n, null, [ [ 0, 8 ] ]);
                }))();
            }
        },
        beforeRouteEnter: function(e, t, n) {
            n(function(t) {
                e.params.action !== ye.a.COLLECTION && e.params.action !== ye.a.MOODBOARD || t.initCollections(e.params.query), 
                t.isReportModalVisible = e.params.action === ye.a.REPORT, t.isFullPage || (t.init({
                    projectUrl: e.path,
                    projectId: e.params.projectId
                }), t.currentProjectId = e.params.projectId);
            });
        },
        beforeRouteUpdate: function(e, t, n) {
            this.collectionAdded = null;
            var o = "projectPopup" === e.name && "projectPopup" === t.name;
            this.lightbox && o && (this.lightbox.destroy(), this.isLightboxOpen = !1), e.params.projectId && !e.params.action && e.params.projectId !== t.params.projectId && (this.init({
                projectUrl: e.path,
                projectId: e.params.projectId
            }), this.currentProjectId = e.params.projectId), e.params.action || this.closeCollectionModal(), 
            this.isReportModalVisible = e.params.action === ye.a.REPORT, e.params.action !== ye.a.COLLECTION && e.params.action !== ye.a.MOODBOARD || this.initCollections(), 
            n();
        },
        beforeRouteLeave: function(e, t, n) {
            if (this.isFullPage) return s.default.setLocation(e.path);
            this.destroyShareDialog(), n();
        },
        beforeCreate: function() {
            this.$store.registerModule("project", xe.b, {
                preserveState: !!this.$store.state.project
            }), this.$store.registerModule("projectAnalytics", Oe), this.$store.registerModule("onboardingAnalytics", Ie.a);
        },
        destroyed: function() {
            this.destroyBindings(), this.$store.unregisterModule("project"), this.$store.unregisterModule("projectAnalytics"), 
            this.$store.unregisterModule("onboardingAnalytics");
        }
    };
    n.d(t, "NARROW_THRESHOLD", function() {
        return 750;
    });
    var Ve = Object(ve.default)(He, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            attrs: {
                "data-id": e.project.id
            }
        }, [ e.isFullPage ? n("Content", {
            ref: "root",
            attrs: {
                credits: e.credits,
                project: e.project,
                pulsePoints: e.pulsePoints,
                appreciationCount: e.appreciationCount,
                commentCount: e.commentCount,
                isAppreciated: e.isAppreciated,
                isFollowing: e.isFollowing,
                scrollTopPosition: e.scrollTopPosition,
                urls: e.urls,
                isFullPage: e.isFullPage,
                isNarrowProject: e.isNarrowProject,
                otherProjects: e.otherProjects,
                user: e.user,
                displayAdminSidebar: e.isAdminSidebarEnabled,
                didInitAppreciate: e.didInitAppreciate,
                projectOwnerMiniprofile: e.projectOwnerMiniprofile,
                isMatureReviewSubmitted: e.isMatureReviewSubmitted,
                collectionAdded: e.collectionAdded,
                isLightboxOpen: e.isLightboxOpen,
                lightboxActiveSlideIdx: e.lightboxActiveSlideIdx,
                hasCommentChildFocus: e.hasCommentChildFocus
            },
            on: {
                removeCredit: e.removeCredit,
                mounted: e.initBindings,
                pulseViewed: function(t) {
                    return e.pulsePointHovered({
                        from: t.from,
                        analytics: t
                    });
                },
                pulseClosed: function(t) {
                    return e.pulsePointClicked({
                        analytics: t
                    });
                },
                avatarMiniHovered: e.hoverMiniprofileAvatar,
                projectViewed: function(t) {
                    return e.viewedProject({
                        analytics: t
                    });
                },
                unappreciated: e.unappreciate,
                appreciated: e.appreciate,
                submitForMatureReview: e.submitForMatureReview,
                infoBoxShown: e.infoBoxShown,
                infoBoxHidden: e.infoBoxHidden,
                collectionIconClicked: e.collectionIconClickHandler,
                adobeToolClicked: function(t) {
                    return e.clickToolsIcon({
                        analytics: t
                    });
                },
                initLightboxFollow: e.initLightboxFollow,
                projectEndReached: function(t) {
                    return e.projectEndReached({
                        analytics: t
                    });
                },
                projectModuleViewed: function(t) {
                    return e.projectModuleViewed({
                        analytics: t
                    });
                },
                toolOpened: function(t) {
                    return e.toolOpened({
                        analytics: t
                    });
                },
                galleryOpened: function(t) {
                    return e.galleryOpened({
                        analytics: t
                    });
                }
            },
            scopedSlots: e._u([ e.isSocialEmailAdmin ? {
                key: "adminSidebar",
                fn: function() {
                    return [ n("AdminSidebar", {
                        attrs: {
                            projectId: e.project.id,
                            recentSocialEmail: e.recentSocialEmail
                        }
                    }) ];
                },
                proxy: !0
            } : null ], null, !0)
        }) : n("ProjectOverlay", {
            ref: "overlay",
            attrs: {
                shouldDisplaySpinner: !e.canViewProject,
                isKeyboardEnabled: e.isKeyboardEnabled,
                isVisible: e.isViewerOpen,
                displayArrows: !0,
                disableScroll: e.isCollectionModalVisible,
                nextProjectRoute: e.nextProjectRoute,
                prevProjectRoute: e.prevProjectRoute,
                rightOffsetForIcons: e.scrollBarWidth,
                hasSiblingArrowsPulsePoints: e.pulsePoints && e.pulsePoints.display_sibling_arrow,
                isMatureReviewSubmitted: e.isMatureReviewSubmitted,
                isAdminSidebarEnabled: e.isAdminSidebarEnabled,
                isNarrowProject: e.isNarrowProject
            },
            on: {
                close: e.handleClose,
                scrolled: e.showScrollTopPosition,
                intentToGoPrev: e.handlePrevArrowIntent,
                intentToGoNext: e.handleNextArrowIntent,
                pulseViewed: function(t) {
                    return e.pulsePointHovered({
                        from: t.from,
                        analytics: t
                    });
                },
                pulseClosed: function(t) {
                    return e.pulsePointClicked({
                        analytics: t
                    });
                }
            }
        }, [ e.canViewProject ? n("Content", {
            ref: "root",
            attrs: {
                project: e.project,
                credits: e.credits,
                appreciationCount: e.appreciationCount,
                pulsePoints: e.pulsePoints,
                commentCount: e.commentCount,
                isAppreciated: e.isAppreciated,
                isNarrowProject: e.isNarrowProject,
                scrollTopPosition: e.scrollTopPosition,
                otherProjects: e.otherProjects,
                urls: e.urls,
                user: e.user,
                displayAdminSidebar: e.isAdminSidebarEnabled,
                didInitAppreciate: e.didInitAppreciate,
                projectOwnerMiniprofile: e.projectOwnerMiniprofile,
                isMatureReviewSubmitted: e.isMatureReviewSubmitted,
                collectionAdded: e.collectionAdded,
                isLightboxOpen: e.isLightboxOpen,
                lightboxActiveSlideIdx: e.lightboxActiveSlideIdx,
                hasCommentChildFocus: e.hasCommentChildFocus
            },
            on: {
                removeCredit: e.removeCredit,
                mounted: e.initBindings,
                pulseViewed: function(t) {
                    return e.pulsePointHovered({
                        from: t.from,
                        analytics: t
                    });
                },
                pulseClosed: function(t) {
                    return e.pulsePointClicked({
                        analytics: t
                    });
                },
                avatarMiniHovered: e.hoverMiniprofileAvatar,
                projectViewed: function(t) {
                    return e.viewedProject({
                        analytics: t
                    });
                },
                unappreciated: e.unappreciate,
                appreciated: e.appreciate,
                submitForMatureReview: e.submitForMatureReview,
                infoBoxShown: e.infoBoxShown,
                infoBoxHidden: e.infoBoxHidden,
                collectionIconClicked: e.collectionIconClickHandler,
                notificationAnimatedIn: e.focus,
                adobeToolClicked: function(t) {
                    return e.clickToolsIcon({
                        analytics: t
                    });
                },
                initLightboxFollow: e.initLightboxFollow,
                projectEndReached: function(t) {
                    return e.projectEndReached({
                        analytics: t
                    });
                },
                projectModuleViewed: function(t) {
                    return e.projectModuleViewed({
                        analytics: t
                    });
                },
                toolOpened: function(t) {
                    return e.toolOpened({
                        analytics: t
                    });
                },
                galleryOpened: function(t) {
                    return e.galleryOpened({
                        analytics: t
                    });
                }
            },
            scopedSlots: e._u([ e.isSocialEmailAdmin ? {
                key: "adminSidebar",
                fn: function() {
                    return [ n("AdminSidebar", {
                        attrs: {
                            projectId: e.project.id,
                            recentSocialEmail: e.recentSocialEmail
                        }
                    }) ];
                },
                proxy: !0
            } : null ], null, !0)
        }) : e._e() ], 1), n("portal", {
            attrs: {
                name: "ProjectErrorPortal",
                "target-el": ".js-vue-error-portal"
            }
        }, [ e.error ? n("Error", {
            attrs: {
                message: e.error.message
            },
            on: {
                closeError: e.resetErrorMessage
            }
        }) : e._e() ], 1), n("portal", {
            ref: "portal",
            attrs: {
                "target-el": ".js-vue-project-moodboard-modal"
            }
        }, [ e.isCollectionModalVisible && e.user ? n("AddToCollectionModal", {
            ref: "addToCollectionModal",
            staticClass: "qa-project-collection-modal",
            attrs: {
                namespace: "project",
                modalTitle: e.$translate("project_add_to_moodboard", "Add to Moodboard"),
                projectId: e.project.id,
                moduleId: Number(e.$route.query.moduleId),
                gridItemId: Number(e.$route.query.gridItemId),
                showMobileSubHeader: !0
            },
            on: {
                addedToNewCollection: function(t) {
                    e.collectionAdded = t;
                },
                saveCollectionSuccesMessageRead: e.collectionSuccessMessageReadHandler,
                closeAddCollectionModal: e.collectionCloseHandler
            }
        }) : e._e() ], 1), n("portal", {
            attrs: {
                "target-el": ".js-vue-project-report-modal"
            }
        }, [ n("ReportModal", {
            ref: "reportModal",
            attrs: {
                isShown: e.isReportModalVisible,
                headerText: e.$translate("project_report_modal_header", "Report Project"),
                shouldShowAboveLightbox: !0
            },
            on: {
                close: e.closeReportModal,
                confirm: e.reportModalConfirmHandler
            }
        }) ], 1) ], 1);
    }, [], !1, null, null, null);
    t.default = Ve.exports;
}, , , , , function(e, t, n) {
    e.exports = n(2)(3);
}, function(e, t, n) {
    "use strict";
    var o = [ "base", "light", "inverted", "primary", "secondary", "ghost", "success", "danger", "transparent" ], r = [ "small", "normal", "large" ], i = n(16).default.extend({
        name: "Btn",
        props: {
            type: {
                type: String,
                default: "base",
                validator: function(e) {
                    return o.includes(e);
                }
            },
            typeAttr: {
                type: String,
                default: "button"
            },
            size: {
                type: String,
                default: "normal",
                validator: function(e) {
                    return r.includes(e);
                }
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            href: String,
            leadingIcon: String,
            trailingIcon: String,
            customClass: String,
            customLabelWrapperClass: String,
            leadingIconStyle: {
                type: String
            },
            target: {
                type: String,
                default: "_self"
            }
        },
        computed: {
            componentIs: function() {
                return this.href ? "a" : "button";
            }
        }
    }), a = n(200), s = n(53);
    var l = Object(s.default)(i, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o(t.componentIs, {
            ref: "button",
            tag: "component",
            class: [ "vue-btn", t.$style.button, t.$style[t.type], t.$style[t.size], (e = {}, 
            e[t.$style.disabled] = t.disabled, e), t.customClass ],
            attrs: {
                disabled: t.disabled,
                href: t.href,
                type: t.typeAttr,
                target: t.target
            },
            on: {
                click: function(e) {
                    return t.$emit("click", e);
                }
            }
        }, [ o("div", {
            class: [ t.$style.labelWrapper, t.customLabelWrapperClass ]
        }, [ t.$slots.leadingIcon ? o("div", {
            ref: "leadingIcon",
            class: [ t.$style.icon, t.$style.leading, t.leadingIconStyle ]
        }, [ t._t("leadingIcon") ], 2) : t._e(), o("div", {
            class: t.$style.label
        }, [ t._t("default") ], 2), t.$slots.trailingIcon ? o("div", {
            class: [ t.$style.icon, t.$style.trailing ]
        }, [ t._t("trailingIcon") ], 2) : t._e() ]) ]);
    }, [], !1, function(e) {
        this.$style = a.default.locals || a.default;
    }, null, null);
    t.a = l.exports;
}, function(e, t, n) {
    "use strict";
    var o, r = n(0), i = n(16), a = n(231), s = n(203), l = n(187);
    !function(e) {
        e.Right = "right", e.Left = "left", e.Top = "top", e.Bottom = "bottom", e.Center = "center";
    }(o || (o = {}));
    var c = i.default.extend({
        name: "Tooltip",
        components: {
            CloseIcon: l.a,
            Fade: s.a
        },
        props: {
            alignment: {
                type: String,
                default: "center",
                validator: function(e) {
                    return [ "left", "center", "right" ].includes(e);
                }
            },
            position: {
                type: String,
                default: "top",
                validator: function(e) {
                    return Object.values(o).includes(e);
                }
            },
            toggleMethod: {
                type: String,
                default: "hover",
                validator: function(e) {
                    return [ "hover", "click", "none" ].includes(e);
                }
            },
            alignmentOffset: {
                type: Number,
                default: 0
            },
            horizontalPadding: {
                type: Number,
                default: 10
            },
            verticalPadding: {
                type: Number,
                default: 10
            },
            distance: {
                type: Number,
                default: 5
            },
            triangleDistance: {
                type: Number,
                default: 10
            },
            isOpen: {
                type: Boolean
            },
            isResponsive: {
                type: Boolean
            },
            hasTextTrigger: {
                type: Boolean
            },
            canTruncateTrigger: {
                type: Boolean
            },
            hasTriangle: {
                type: Boolean,
                default: !0
            },
            isCloseable: {
                type: Boolean,
                default: !1
            },
            isOpenable: {
                type: Boolean,
                default: !0
            }
        },
        data: function() {
            return {
                isCurrentlyOpen: this.isOpen
            };
        },
        watch: {
            isOpen: function(e) {
                this.isCurrentlyOpen = e;
            }
        },
        computed: {
            shouldAlign: function() {
                if ("center" !== this.alignment) return !0;
            },
            containerStyles: function() {
                var e, t, n = {
                    cursor: "click" === this.toggleMethod ? "pointer" : "initial",
                    paddingTop: this.verticalPadding + "px",
                    paddingBottom: this.verticalPadding + "px",
                    paddingRight: this.horizontalPadding + "px",
                    paddingLeft: this.horizontalPadding + "px"
                }, r = this.position;
                if (r === o.Center) return n;
                var i = ((e = {})[o.Top] = "6px", e[o.Bottom] = "0px", e[o.Right] = "0px", e[o.Left] = "0px", 
                e), a = ((t = {})[o.Top] = o.Bottom, t[o.Bottom] = o.Top, t[o.Right] = o.Left, t[o.Left] = o.Right, 
                t), s = i[r];
                return n[a[r]] = "calc(100% + " + this.distance + "px + " + s + ")", this.shouldAlign && (n[this.alignment] = this.alignmentOffset + "px"), 
                n;
            },
            triangleStyles: function() {
                var e = {};
                return this.shouldAlign && (e[this.alignment] = this.triangleDistance + "px"), e;
            }
        },
        methods: {
            ifToggleMethod: function(e, t) {
                e === this.toggleMethod && t();
            },
            toggleOpen: function() {
                this.isCurrentlyOpen ? this.close() : this.open();
            },
            open: function() {
                this.isOpenable && (this.isCurrentlyOpen = !0, this.$emit("didOpen"));
            },
            close: function() {
                this.isCurrentlyOpen = !1, this.$emit("didClose");
            }
        },
        beforeCreate: function() {
            var e;
            if (this.$slots.default && this.$slots.default[0]) {
                var t = this.$slots.default[0], n = (null === (e = null === t || void 0 === t ? void 0 : t.data) || void 0 === e ? void 0 : e.attrs) || {};
                t.data = Object(r.__assign)(Object(r.__assign)({}, t.data), {
                    attrs: Object(r.__assign)(Object(r.__assign)({}, n), {
                        tabindex: 0
                    })
                });
            }
        },
        mounted: function() {
            var e = this;
            this.$el.querySelectorAll(a.focusableSelectors).forEach(function(t) {
                t.addEventListener("focus", e.open), t.addEventListener("blur", e.close);
            });
        },
        beforeDestroy: function() {
            var e = this;
            this.$el.querySelectorAll(a.focusableSelectors).forEach(function(t) {
                t.removeEventListener("focus", e.open), t.removeEventListener("blur", e.close);
            });
        }
    }), u = n(247), p = n(53);
    var d = Object(p.default)(c, function() {
        var e, t, n, o = this, r = o.$createElement, i = o._self._c || r;
        return i("div", {
            ref: "root",
            class: [ o.$style.wrapper, (e = {}, e[o.$style.responsive] = o.isResponsive, e), (t = {}, 
            t[o.$style.textWrapper] = o.hasTextTrigger, t) ],
            style: {
                cursor: o.isOpenable ? "pointer" : "auto"
            },
            on: {
                mouseenter: function(e) {
                    return o.ifToggleMethod("hover", o.open);
                },
                mouseleave: function(e) {
                    return o.ifToggleMethod("hover", o.close);
                },
                keypress: function(e) {
                    return !e.type.indexOf("key") && o._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : o.open(e);
                },
                "!blur": function(e) {
                    return o.close(e);
                }
            }
        }, [ i("span", {
            ref: "trigger",
            class: (n = {}, n[o.$style.trigger] = o.canTruncateTrigger, n),
            on: {
                touchend: function(e) {
                    return o.ifToggleMethod("hover", o.toggleOpen);
                },
                click: function(e) {
                    return o.ifToggleMethod("click", o.toggleOpen);
                }
            }
        }, [ o._t("default") ], 2), i("Fade", [ i("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: o.isCurrentlyOpen,
                expression: "isCurrentlyOpen"
            } ],
            ref: "tooltip",
            class: [ o.$style.container, o.$style["position-" + o.position], o.$style[o.alignment] ],
            style: o.containerStyles,
            on: {
                mouseleave: function(e) {
                    return o.ifToggleMethod("click", o.close);
                }
            }
        }, [ o.hasTriangle ? i("div", {
            ref: "triangle",
            class: o.$style.triangleContainer,
            style: o.triangleStyles
        }, [ i("div", {
            class: o.$style.triangle
        }), i("div", {
            class: o.$style.mask
        }) ]) : o._e(), o._t("tooltipContent"), o.isCloseable ? i("span", {
            ref: "closeButton",
            class: o.$style.closeIconWrapper,
            on: {
                touchend: function(e) {
                    o.ifToggleMethod("hover", o.close), o.$emit("closeButtonClicked");
                },
                click: function(e) {
                    o.ifToggleMethod("click", o.close), o.$emit("closeButtonClicked");
                }
            }
        }, [ i("CloseIcon", {
            class: o.$style.closeIcon
        }) ], 1) : o._e() ], 2) ]) ], 1);
    }, [], !1, function(e) {
        this.$style = u.default.locals || u.default;
    }, null, null);
    t.a = d.exports;
}, function(e, t, n) {
    var o = n(201);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("281875b0", o, !0, {});
}, function(e, t, n) {
    "use strict";
    n(70);
    var o = {
        Vector: "spinner-vector"
    }, r = {
        data: function() {
            return {
                svgId: "spinner-" + Date.now(),
                testIds: o
            };
        },
        props: {
            text: {
                type: String,
                required: !1
            },
            autofill: {
                type: Boolean,
                default: !1
            },
            color: {
                type: String,
                default: "blue",
                validator: function(e) {
                    return [ "white", "blue" ].includes(e);
                }
            }
        }
    }, i = n(211), a = n(53);
    var s = Object(a.default)(r, function() {
        var e, t, n = this, o = n.$createElement, r = n._self._c || o;
        return r("div", {
            ref: "spinnerContainer",
            staticClass: "vc-Spinner rf-spinner",
            class: (e = {}, e[n.$style.standaloneSpinner] = !n.text && !n.autofill, e)
        }, [ r("svg", {
            class: [ (t = {}, t[n.$style.autofill] = n.autofill, t), "rf-spinner__spinner" ],
            attrs: {
                "data-ut": n.testIds.Vector,
                width: "100%",
                height: "100%",
                viewBox: "0 0 200 200",
                preserveAspectRatio: "xMinYMin meet",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
            }
        }, [ r("defs", [ r("linearGradient", {
            attrs: {
                id: n.svgId,
                x1: "0%",
                y1: "0%",
                x2: "65%",
                y2: "0%"
            }
        }, [ r("stop", {
            ref: "def1",
            class: n.$style[n.color],
            attrs: {
                offset: "0%"
            }
        }), r("stop", {
            ref: "def2",
            class: n.$style[n.color],
            attrs: {
                offset: "100%",
                "stop-opacity": "0"
            }
        }) ], 1) ], 1), r("circle", {
            attrs: {
                cx: "100",
                cy: "100",
                r: "90",
                fill: "transparent",
                stroke: "url(#" + n.svgId + ")",
                "stroke-width": "20"
            }
        }) ]), n.text ? r("p", {
            ref: "text",
            staticClass: "rf-spinner__text"
        }, [ n._v(n._s(n.text)) ]) : n._e() ]);
    }, [], !1, function(e) {
        this.$style = i.default.locals || i.default;
    }, null, null);
    t.a = s.exports;
}, function(e, t, n) {
    var o = n(212);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("789a9fc4", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            staticClass: "rf-icon",
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 8.09 8.08"
            }
        }, [ t("path", {
            attrs: {
                d: "M5.18 4.05L7.84 6.7a.75.75 0 0 1 .2.27.88.88 0 0 1 0 .31.83.83 0 0 1-.06.3.63.63 0 0 1-.18.27.42.42 0 0 1-.12.11l-.15.08h-.15a.72.72 0 0 1-.3 0h-.15l-.15-.08a.41.41 0 0 1-.12-.11L4.04 5.18 1.37 7.84a.42.42 0 0 1-.12.11l-.15.08H.95a.72.72 0 0 1-.3 0H.5l-.15-.08a.41.41 0 0 1-.12-.11.63.63 0 0 1-.19-.26.83.83 0 0 1 0-.3.88.88 0 0 1 0-.31.75.75 0 0 1 .18-.27L2.9 4.05.24 1.38a.63.63 0 0 1-.2-.27.83.83 0 0 1 0-.3.88.88 0 0 1 0-.29.75.75 0 0 1 .18-.27.73.73 0 0 1 .27-.18.84.84 0 0 1 .61 0 .73.73 0 0 1 .27.18l2.67 2.66L6.71.24a.73.73 0 0 1 .27-.18.84.84 0 0 1 .61 0 .73.73 0 0 1 .27.18.75.75 0 0 1 .18.28.88.88 0 0 1 0 .29.83.83 0 0 1-.06.3.63.63 0 0 1-.18.27L5.18 4.05z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    e.exports = n(2)(54);
}, function(e, t, n) {
    "use strict";
    n(17), n(54), n(63), n(31), n(55), n(20), n(72), n(70), n(36), n(8), n(62), n(74), 
    n(37), n(21), n(38);
    function o(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
    }
    var r = {
        name: "Modal",
        components: {
            CloseIcon: n(187).a
        },
        props: {
            clickToClose: {
                type: Boolean,
                default: !0
            },
            isTopAligned: Boolean,
            contentStyle: {
                type: Object
            },
            contentClass: {
                type: [ Object, String, Array ]
            },
            hasCloseButtonDesktop: {
                type: Boolean,
                default: !0
            },
            showModal: {
                type: Boolean,
                default: !1
            },
            modalTitle: {
                type: String
            },
            customizedTitleBarClass: {
                type: String
            },
            customizedCloseIconClass: {
                type: String
            },
            customizedDesktopCloseIconClass: {
                type: String
            },
            isContainedInParent: {
                type: Boolean
            }
        },
        data: function() {
            return {
                isVisible: !1,
                lastElFocusedIndex: -1,
                focusableEl: [],
                isFocusInit: !1,
                showContent: !0
            };
        },
        computed: {
            contentClasses: function() {
                return this.contentClass ? Array.isArray(this.contentClass) ? [ this.$style.modalContent ].concat(o(this.contentClass)) : [ this.$style.modalContent, this.contentClass ] : this.$style.modalContent;
            },
            shouldDisplayModal: function() {
                var e = this.showModal || this.isVisible;
                return e && this.$emit("openModal"), e;
            }
        },
        watch: {
            shouldDisplayModal: {
                handler: function(e) {
                    if (e) return this.initFocusWithIn();
                    this.isFocusInit && this.destroyFocusWithIn();
                },
                immediate: !0
            }
        },
        methods: {
            afterContentLeave: function() {
                this.close();
            },
            initFocusWithIn: function() {
                var e = this;
                this.$el && (this.focusableEl = o(this.$el.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')), 
                this.focusableEl.forEach(function(t) {
                    t.addEventListener("blur", e.updateLastElFocusedIndex);
                }), window.addEventListener("keyup", this.focusWithIn), this.isFocusInit = !0);
            },
            destroyFocusWithIn: function() {
                var e = this;
                window.removeEventListener("keyup", this.focusWithIn), this.focusableEl.forEach(function(t) {
                    t.removeEventListener("blur", e.updateLastElFocusedIndex);
                }), this.isFocusInit = !1;
            },
            updateLastElFocusedIndex: function(e) {
                var t = this.focusableEl.findIndex(function(t) {
                    return t === e.target;
                });
                this.lastElFocusedIndex = t;
            },
            focusWithIn: function(e) {
                if (9 === e.which && !this.focusableEl.includes(document.activeElement)) {
                    var t = this.lastElFocusedIndex >= this.focusableEl.length - 1 ? 0 : this.focusableEl.length - 1;
                    this.focusableEl[t].focus();
                }
            },
            show: function() {
                this.isVisible = !0;
            },
            close: function() {
                this.isVisible = !1, this.$emit("closeModal");
            },
            onBackgroundClick: function() {
                this.$emit("backgroundClick"), this.clickToClose && this.close();
            }
        }
    }, i = n(241), a = n(53);
    var s = Object(a.default)(r, function() {
        var e, t, n = this, o = n.$createElement, r = n._self._c || o;
        return r("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: n.shouldDisplayModal,
                expression: "shouldDisplayModal"
            } ],
            ref: "modal",
            class: [ n.$style.modal, (e = {}, e[n.$style.contained] = n.isContainedInParent, 
            e), (t = {}, t[n.$style.alignTop] = n.isTopAligned, t) ],
            attrs: {
                "data-ut": "modal"
            },
            on: {
                click: function(e) {
                    return e.target !== e.currentTarget ? null : n.onBackgroundClick(e);
                }
            }
        }, [ n.showContent ? r("div", {
            ref: "content",
            class: [ n.contentClasses, "animationControl--modalContent" ],
            style: n.contentStyle
        }, [ r("div", {
            ref: "titleBar",
            class: [ n.$style.titleBar, n.customizedTitleBarClass ]
        }, [ n.modalTitle ? r("span", {
            ref: "modalTitle",
            class: n.$style.modalTitle
        }, [ n._v(n._s(n.modalTitle)) ]) : n._e(), r("span", {
            ref: "hideButtonMobile",
            class: [ n.$style.close, n.customizedCloseIconClass ],
            on: {
                click: n.close
            }
        }, [ r("CloseIcon", {
            class: n.$style.icon
        }) ], 1) ]), n.hasCloseButtonDesktop ? r("span", {
            ref: "hideButton",
            class: [ n.$style.close, "qa-modal-close-desktop", n.customizedDesktopCloseIconClass ],
            attrs: {
                tabindex: "0",
                "data-ut": "modal-close-desktop"
            },
            on: {
                click: n.close,
                keypress: function(e) {
                    return !e.type.indexOf("key") && n._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : n.close(e);
                }
            }
        }, [ r("CloseIcon", {
            class: n.$style.icon,
            attrs: {
                "data-ut": "modal-close-icon"
            }
        }) ], 1) : n._e(), n._t("default") ], 2) : n._e() ]);
    }, [], !1, function(e) {
        this.$style = i.default.locals || i.default;
    }, null, null);
    t.a = s.exports;
}, function(e, t, n) {
    var o = n(229);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("52644816", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = n(16), r = n(27), i = n(240), a = n(32), s = o.default.extend({
        name: "Avatar",
        components: {
            AvatarImage: i.a
        },
        props: {
            owners: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            images: {
                type: Object
            },
            src: {
                type: String
            },
            src2x: {
                type: String
            },
            profileUrl: {
                type: String,
                default: ""
            },
            size: {
                type: Number,
                default: 35
            },
            context: {
                type: String,
                default: ""
            },
            isDisabled: {
                type: Boolean,
                default: !1
            },
            shouldHaveMiniProfile: {
                type: Boolean,
                default: !0
            },
            isHovered: {
                type: Boolean,
                default: !1
            },
            shouldTriggerFollow: {
                type: Boolean,
                default: !1
            },
            followeeId: {
                type: Number
            },
            isFollowing: {
                type: Boolean
            }
        },
        computed: {
            hasLink: function() {
                return !this.isDisabled && !!this.profileUrl;
            },
            hasMultipleOwner: function() {
                return this.owners.length > 1;
            },
            entityType: function() {
                return this.hasMultipleOwner ? "project" : "user";
            },
            avatarUrl: function() {
                if (this.owners.length > 0) return !this.shouldTriggerFollow && !this.hasMultipleOwner && this.owners[0].url;
            }
        },
        directives: {
            target: function(e, t) {
                t.value && e.setAttribute("target", "_blank");
            },
            href: function(e, t) {
                var n = t.value;
                n.hasLink && e.setAttribute("href", n.profileUrl);
            }
        },
        methods: {
            errorHandler: function(e) {
                e.target.src = "/assets/img/profile/no-image-115.png", e.target.removeAttribute("srcset");
                var t = this.$store && this.$store.state.user && this.$store.state.user.loggedInUser && this.$store.state.user.loggedInUser.url || "";
                this.profileUrl.length && t === this.profileUrl && r.default.info("avatarfail", "avatar_failed", {
                    username: this.$store.state.user.loggedInUser.username
                });
            },
            clickHandler: function(e) {
                if (this.isDisabled) return e.preventDefault(), void e.stopPropagation();
                a.default.custom("avatar", this.context + " - avatar click"), this.$emit("avatarClicked", e);
            }
        }
    }), l = n(245), c = n(53);
    var u = Object(c.default)(s, function() {
        var e, t, n, o, r = this, i = r.$createElement, a = r._self._c || i;
        return a("div", [ Boolean(r.owners.length) ? a("a", {
            ref: "ownerAvatar",
            class: [ r.$style.avatar, r.$style.avatarHover, (e = {}, e[r.$style.disabled] = r.isDisabled, 
            e), (t = {}, t["js-action-follow"] = r.shouldTriggerFollow, t) ],
            style: {
                height: r.size + "px",
                width: r.size + "px",
                minHeight: r.size + "px",
                minWidth: r.size + "px"
            },
            attrs: {
                target: "_blank",
                href: r.avatarUrl,
                "data-followee": r.followeeId,
                "data-entity": r.entityType,
                "data-following": r.isFollowing,
                "data-source": "avatar"
            },
            on: {
                click: r.clickHandler
            }
        }, [ r.isHovered ? a("span", {
            ref: "blocking",
            class: r.$style.hovered
        }) : r._e(), r._l(r.owners, function(e, t) {
            var n;
            return a("AvatarImage", {
                key: t,
                ref: "eachOwner",
                refInFor: !0,
                class: [ [ r.hasMultipleOwner ? r.$style.multipleAvatarImage : r.$style.avatarImage ], (n = {}, 
                n["js-mini-profile"] = !r.hasMultipleOwner && r.shouldHaveMiniProfile, n) ],
                attrs: {
                    images: e.images,
                    avatarSize: r.size,
                    "data-id": e.id
                },
                on: {
                    "~error": function(e) {
                        return r.errorHandler(e);
                    }
                }
            });
        }) ], 2) : a("a", {
            directives: [ {
                name: "target",
                rawName: "v-target",
                value: r.hasLink,
                expression: "hasLink"
            }, {
                name: "href",
                rawName: "v-href",
                value: {
                    hasLink: r.hasLink,
                    profileUrl: r.profileUrl
                },
                expression: "{ hasLink, profileUrl }"
            } ],
            ref: "link",
            class: [ r.$style.avatar, (n = {}, n[r.$style.avatarHover] = r.hasLink, n), (o = {}, 
            o[r.$style.disabled] = r.isDisabled, o) ],
            style: [ {
                height: r.size + "px",
                width: r.size + "px",
                minHeight: r.size + "px",
                minWidth: r.size + "px"
            } ],
            on: {
                click: r.clickHandler
            }
        }, [ r.isHovered ? a("span", {
            ref: "blocking",
            class: r.$style.hovered
        }) : r._e(), a("AvatarImage", {
            ref: "avatarImage",
            class: r.$style.avatarImage,
            style: {
                height: r.size + "px",
                width: r.size + "px"
            },
            attrs: {
                images: r.images,
                src1x: r.src,
                src2x: r.src2x,
                avatarSize: r.size
            },
            on: {
                "~error": function(e) {
                    return r.errorHandler(e);
                }
            }
        }) ], 1) ]);
    }, [], !1, function(e) {
        this.$style = l.default.locals || l.default;
    }, null, null);
    t.a = u.exports;
}, function(e, t, n) {
    var o = n(242);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("58092874", o, !0, {});
}, function(e, t, n) {
    var o = n(244);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("f45290a0", o, !0, {});
}, function(e, t, n) {
    var o = n(246);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("68e12e24", o, !0, {});
}, function(e, t, n) {
    var o = n(248);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("7432b31c", o, !0, {});
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b("<div "), o.s(o.f("instant_backfill", e, t, 1), e, t, 0, 26, 49, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('data-backfill="instant"');
            }), e.pop()), o.b(' class="'), o.sub("classes", e, t, n), o.b(" js-action-follow "), 
            o.s(o.f("is_following", e, t, 1), e, t, 0, 137, 147, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" following");
            }), e.pop()), o.b(' qa-follow-button-container form-button-wrap rf-button__container rf-button__container--follow follow-button-container" data-followee="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('" data-entity="'), o.sub("type", e, t, n), o.b('" data-source="'), 
            o.b(o.v(o.f("source", e, t, 0))), o.b('" '), o.s(o.f("is_gallery", e, t, 1), e, t, 0, 380, 407, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('data-gallery="'), n.b(n.v(n.f("gallery", e, t, 0))), n.b('" ');
            }), e.pop()), o.b(" "), o.s(o.f("is_following", e, t, 1), e, t, 0, 440, 461, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('data-following="true"');
            }), e.pop()), o.b(" "), o.sub("attrs", e, t, n), o.b(' tabindex="0">'), o.b("\n" + n), 
            o.b('  <a class="js-form-button-follow '), o.sub("size", e, t, n), o.b(' rf-button rf-button--follow"><span class="rf-button__label">'), 
            o.sub("follow", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b('  <a class="qa-form-button-following '), 
            o.sub("size", e, t, n), o.b(' rf-button rf-button--secondary rf-button--following"><span class="rf-button__label">'), 
            o.sub("following", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b('  <a class="js-form-button-unfollow '), 
            o.sub("size", e, t, n), o.b(' rf-button rf-button--danger rf-button--unfollow"><span class="rf-button__label">'), 
            o.sub("unfollow", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), 
            o.fl();
        },
        partials: {},
        subs: {
            classes: function(e, t, n, o) {},
            type: function(e, t, n, o) {},
            attrs: function(e, t, n, o) {},
            size: function(e, t, n, o) {},
            follow: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 652, 672, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_follow|Follow");
                }), e.pop()), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            },
            following: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 901, 927, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_following|Following");
                }), e.pop()), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            },
            unfollow: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 1153, 1177, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_unfollow|Unfollow");
                }), e.pop()), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            }
        }
    }, '<div {{#instant_backfill}}data-backfill="instant"{{/instant_backfill}} class="{{$classes}}{{/classes}} js-action-follow {{#is_following}} following{{/is_following}} qa-follow-button-container form-button-wrap rf-button__container rf-button__container--follow follow-button-container" data-followee="{{id}}" data-entity="{{$type}}{{/type}}" data-source="{{source}}" {{#is_gallery}}data-gallery="{{gallery}}" {{/is_gallery}} {{#is_following}}data-following="true"{{/is_following}} {{$attrs}}{{/attrs}} tabindex="0">\n  <a class="js-form-button-follow {{$size}}{{/size}} rf-button rf-button--follow"><span class="rf-button__label">{{$follow}}{{#translate}}button_follow|Follow{{/translate}}{{follow_label_postfix}}{{/follow}}</span></a>\n  <a class="qa-form-button-following {{$size}}{{/size}} rf-button rf-button--secondary rf-button--following"><span class="rf-button__label">{{$following}}{{#translate}}button_following|Following{{/translate}}{{follow_label_postfix}}{{/following}}</span></a>\n  <a class="js-form-button-unfollow {{$size}}{{/size}} rf-button rf-button--danger rf-button--unfollow"><span class="rf-button__label">{{$unfollow}}{{#translate}}button_unfollow|Unfollow{{/translate}}{{follow_label_postfix}}{{/unfollow}}</span></a>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
        return r;
    }), n.d(t, "d", function() {
        return i;
    }), n.d(t, "c", function() {
        return a;
    }), n.d(t, "b", function() {
        return l;
    }), n.d(t, "a", function() {
        return c;
    }), n.d(t, "e", function() {
        return u;
    });
    var o = n(0);
    function r(e) {
        var t = e ? e.split(".").pop() : null;
        return !!t && "gif" === t.toLowerCase();
    }
    function i(e) {
        var t = Object(o.__assign)({}, e);
        return t.max_808 && (t[808] = t.max_808), Object.keys(t).filter(function(e) {
            return !isNaN(Number(e)) && t[e].length > 1;
        }).map(function(e) {
            return t[e] + " " + e + "w";
        }).join(", ");
    }
    function a(e, t) {
        var n = Object.keys(e).filter(function(e) {
            return -1 !== e.indexOf("max_") && -1 === e.indexOf("_still");
        }), o = Object.keys(e).filter(function(e) {
            return -1 !== e.indexOf("_still");
        }), r = null;
        return o.length && (r = o.map(function(n) {
            var o = -1 !== n.indexOf("max_") ? n.replace("max_", "").replace("_still", "") : n.split("_")[0];
            if (!(t && Number(o) > t)) return isNaN(Number(o)) ? void 0 : e[n] + " " + o + "w";
        }).filter(function(e) {
            return !!e;
        }).join(", ")), {
            srcset: n.map(function(n) {
                var o = n.replace("max_", "");
                if (!(t && Number(o) > t)) return e[n] + " " + o + "w";
            }).filter(function(e) {
                return !!e;
            }).join(", "),
            gifStillSrcset: r
        };
    }
    function s(e, t) {
        return e.map(function(e) {
            if (!t[e]) return null;
            var n = t[e].width;
            return t[e].url + " " + n + "w";
        }).filter(function(e) {
            return null !== e;
        }).join(", ");
    }
    function l(e) {
        return s([ "disp", "max_1200", "1400_opt_1", "fs", "2800_opt_1" ], e);
    }
    function c(e) {
        return s([ "max_158", "max_316", "max_632" ], e);
    }
    function u(e) {
        return s([ "158_still", "316_still", "632_still" ], e);
    }
}, function(e, t, n) {
    e.exports = n(2)(341);
}, function(e, t, n) {
    var o = n(261);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("1fd5893e", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = n(184), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Btn-button-BGn {\n  border: 1px solid transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  line-height: 1;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-property: color, background;\n  transition-property: color, background;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.Btn-button-BGn:hover {\n    text-decoration: none;\n}\n.Btn-button-BGn.focus-visible {\n    outline: 1px solid #0057ff;\n}\n.Btn-base-M-O {\n  background: #fff;\n  border-color: #e8e8e8;\n  color: #191919;\n}\n.Btn-base-M-O .Btn-icon-flr .rf-icon {\n    fill: #191919;\n}\n.Btn-base-M-O .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-base-M-O .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-base-M-O:hover {\n    background: #f1f1f1;\n}\n.Btn-base-M-O:active {\n    background: #e4e4e4;\n}\n.Btn-base-M-O.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-light-PPA {\n  background: #fff;\n  border-color: transparent;\n  color: #0057ff;\n}\n.Btn-light-PPA .Btn-icon-flr .rf-icon {\n    fill: #0057ff;\n}\n.Btn-light-PPA .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-light-PPA .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-light-PPA:hover {\n    background: #f1f1f1;\n}\n.Btn-light-PPA:active {\n    background: #e4e4e4;\n}\n.Btn-light-PPA.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-inverted-1aU {\n  background: rgba(25, 25, 25, 0.2);\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-inverted-1aU .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-inverted-1aU .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-inverted-1aU .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-inverted-1aU:hover {\n    background: rgba(25, 25, 25, 0.5);\n}\n.Btn-inverted-1aU:active {\n    background: rgba(25, 25, 25, 0.5);\n}\n.Btn-inverted-1aU.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-primary-1H3 {\n  background: #0057ff;\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-primary-1H3 .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-primary-1H3 .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-primary-1H3 .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-primary-1H3:hover {\n    background: #003ecb;\n}\n.Btn-primary-1H3:active {\n    background: #002f9a;\n}\n.Btn-primary-1H3.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-secondary-sgc {\n  background: #fff;\n  border-color: #e8e8e8;\n  color: #191919;\n}\n.Btn-secondary-sgc .Btn-icon-flr .rf-icon {\n    fill: #191919;\n}\n.Btn-secondary-sgc .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-secondary-sgc .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-secondary-sgc:hover {\n    background: #f1f1f1;\n}\n.Btn-secondary-sgc:active {\n    background: #e4e4e4;\n}\n.Btn-secondary-sgc.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-ghost-2Wn {\n  background: #fff;\n  border-color: transparent;\n  color: #696969;\n}\n.Btn-ghost-2Wn .Btn-icon-flr .rf-icon {\n    fill: #696969;\n}\n.Btn-ghost-2Wn .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-ghost-2Wn .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-ghost-2Wn:hover {\n    background: #fff;\n}\n.Btn-ghost-2Wn:active {\n    background: #fff;\n}\n.Btn-ghost-2Wn.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-ghost-2Wn:hover .Btn-label-1Zf {\n    border-bottom: 1px solid #9c9c9c;\n}\n.Btn-ghost-2Wn.Btn-disabled-2iY {\n    background: transparent;\n    color: #e8e8e8;\n}\n.Btn-transparent-1nm {\n  background: transparent;\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-transparent-1nm .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-transparent-1nm .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-transparent-1nm .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-transparent-1nm:hover {\n    background: transparent;\n}\n.Btn-transparent-1nm:active {\n    background: transparent;\n}\n.Btn-transparent-1nm.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-transparent-1nm:hover .Btn-label-1Zf {\n    text-decoration: underline;\n}\n.Btn-transparent-1nm.Btn-disabled-2iY {\n    background: transparent;\n    opacity: 0.5;\n}\n.Btn-success-3QX {\n  background: #04ac00;\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-success-3QX .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-success-3QX .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-success-3QX .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-success-3QX:hover {\n    background: #018a00;\n}\n.Btn-success-3QX:active {\n    background: #026700;\n}\n.Btn-success-3QX.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-danger-29D {\n  background: #d00;\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-danger-29D .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-danger-29D .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-danger-29D .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-danger-29D:hover {\n    background: #aa0000;\n}\n.Btn-danger-29D:active {\n    background: #910000;\n}\n.Btn-danger-29D.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-label-1Zf {\n  border: 1px solid transparent;\n  display: inline-block;\n  max-width: 100%;\n}\n.Btn-labelWrapper-1jS {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.Btn-small-2_o .Btn-labelWrapper-1jS {\n  padding: 5px 12px 6px;\n}\n.Btn-small-2_o .Btn-label-1Zf {\n  font-size: 12px;\n}\n.Btn-small-2_o .Btn-icon-flr .rf-icon {\n  height: 14px;\n}\n.Btn-small-2_o .Btn-icon-flr.Btn-leading-29d {\n  margin-right: 4px;\n}\n.Btn-small-2_o .Btn-icon-flr.Btn-trailing-3Hx {\n  margin-left: 4px;\n}\n.Btn-normal-hI4 .Btn-labelWrapper-1jS {\n  padding: 8px 18px;\n}\n.Btn-normal-hI4 .Btn-label-1Zf {\n  font-size: 14px;\n}\n.Btn-normal-hI4 .Btn-icon-flr .rf-icon {\n  height: 18px;\n  margin-top: -2px;\n}\n.Btn-normal-hI4 .Btn-icon-flr.Btn-leading-29d {\n  margin-right: 7px;\n}\n.Btn-normal-hI4 .Btn-icon-flr.Btn-trailing-3Hx {\n  margin-left: 7px;\n}\n.Btn-large-_8E .Btn-labelWrapper-1jS {\n  padding: 10px 22px 12px;\n}\n.Btn-large-_8E .Btn-label-1Zf {\n  font-size: 18px;\n}\n.Btn-large-_8E .Btn-icon-flr .rf-icon {\n  height: 20px;\n}\n.Btn-large-_8E .Btn-icon-flr.Btn-leading-29d {\n  margin-right: 10px;\n}\n.Btn-large-_8E .Btn-icon-flr.Btn-trailing-3Hx {\n  margin-left: 10px;\n}\n", "" ]), 
    t.locals = {
        button: "Btn-button-BGn",
        base: "Btn-base-M-O",
        icon: "Btn-icon-flr",
        leading: "Btn-leading-29d",
        trailing: "Btn-trailing-3Hx",
        disabled: "Btn-disabled-2iY",
        light: "Btn-light-PPA",
        inverted: "Btn-inverted-1aU",
        primary: "Btn-primary-1H3",
        secondary: "Btn-secondary-sgc",
        ghost: "Btn-ghost-2Wn",
        label: "Btn-label-1Zf",
        transparent: "Btn-transparent-1nm",
        success: "Btn-success-3QX",
        danger: "Btn-danger-29D",
        labelWrapper: "Btn-labelWrapper-1jS",
        small: "Btn-small-2_o",
        normal: "Btn-normal-hI4",
        large: "Btn-large-_8E"
    };
}, function(e, t, n) {
    var o = n(269);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("a416516a", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = {
        props: {
            mode: {
                type: String
            }
        }
    }, r = n(228), i = n(53);
    var a = Object(i.default)(o, function() {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("transition", {
            attrs: {
                "enter-active-class": e.$style.enterActive,
                "leave-active-class": e.$style.leaveActive,
                mode: e.mode
            },
            on: {
                "after-leave": function(t) {
                    return e.$emit("transitionComplete");
                }
            }
        }, [ e._t("default") ], 2);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, function(e, t, n) {
    e.exports = n(2)(21);
}, function(e, t, n) {
    var o = n(276);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("7161c4ce", o, !0, {});
}, function(e, t, n) {
    e.exports = n(2)(48);
}, , , function(e, t, n) {
    e.exports = n(2)(18);
}, , function(e, t, n) {
    "use strict";
    var o = n(186), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".rf-spinner__spinner:only-child.Spinner-autofill-2bc {\n  height: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n.Spinner-blue-3_W {\n  stop-color: #0057ff;\n}\n.Spinner-white-2Dl {\n  stop-color: #fff;\n}\n.Spinner-standaloneSpinner-25B {\n  height: 35px;\n  width: 35px;\n}\n", "" ]), 
    t.locals = {
        autofill: "Spinner-autofill-2bc",
        blue: "Spinner-blue-3_W",
        white: "Spinner-white-2Dl",
        standaloneSpinner: "Spinner-standaloneSpinner-25B"
    };
}, function(e, t, n) {
    var o = n(331);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("b6ef138c", o, !0, {});
}, , function(e, t, n) {
    "use strict";
    var o = {
        name: "DropdownItem"
    }, r = n(268), i = n(53);
    var a = Object(i.default)(o, function() {
        var e = this.$createElement;
        return (this._self._c || e)("li", {
            class: this.$style.root
        }, [ this._t("default") ], 2);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16"
            }
        }, [ t("path", {
            attrs: {
                d: "M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    var o = n(347);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("417d2964", o, !0, {});
}, function(e, t, n) {
    var o = n(352);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("74503b64", o, !0, {});
}, function(e, t, n) {
    var o = n(354);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("b2e070a4", o, !0, {});
}, function(e, t, n) {
    var o = n(356);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("b106e13a", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = n(5), r = (n(71), n(198), n(387)), i = n.n(r), a = (n(412), {
        en_US: "en",
        cs_CZ: "cs",
        da_DK: "da-dk",
        de_DE: "de",
        es_ES: "es",
        fr_FR: "fr",
        it_IT: "it",
        nl_NL: "nl-nl",
        nb_NO: "no",
        pl_PL: "pl",
        pt_BR: "pt-br",
        ru_RU: "ru",
        fi_FI: "fi",
        tr_TR: "tr",
        ja_JP: "ja",
        zh_CN: "chs",
        zh_TW: "chs"
    });
    function s(e, t) {
        return void 0 === t && (t = "en-US"), o.default.formatNumber(e, t);
    }
    function l(e, t) {
        return void 0 === t && (t = "en-US"), function(e, t) {
            return e < 1e3 ? e.toLocaleString() : (i.a.locale(a[t] || "en"), i()(e).format("0.0a").replace(".0", ""));
        }(e, t);
    }
    n.d(t, "b", function() {
        return s;
    }), n.d(t, "a", function() {
        return l;
    });
}, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return o;
    }), n.d(t, "a", function() {
        return r;
    }), n.d(t, "e", function() {
        return a;
    }), n.d(t, "d", function() {
        return s;
    }), n.d(t, "c", function() {
        return l;
    });
    n(188), n(126);
    var o = "404", r = "202", i = "115";
    function a(e) {
        return e[o];
    }
    function s(e) {
        return e[r];
    }
    function l(e) {
        if (e.covers) {
            e.cover_sizes = i + "px", e.cover_src = e.covers[i] || e.covers.original;
            var t = [];
            for (var n in e.covers) isNaN(Number(n)) || t.push(e.covers[n] + " " + n + "w");
            e.cover_srcset = t.join(",");
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(260), r = n(53);
    var i = Object(r.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            class: this.$style.icon,
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0.5 0.5 16 16"
            }
        }, [ t("path", {
            attrs: {
                fill: "none",
                d: "M.5.5h16v16H.5z"
            }
        }), t("path", {
            attrs: {
                d: "M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"
            }
        }) ]);
    }, [], !1, function(e) {
        this.$style = o.default.locals || o.default;
    }, null, null);
    t.a = i.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(190), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Fade-enterActive-330 {\n  -webkit-animation: Fade-fade-cgL 0.3s;\n          animation: Fade-fade-cgL 0.3s;\n}\n.Fade-leaveActive-1fN {\n  animation: Fade-fade-cgL 0.3s reverse;\n}\n@-webkit-keyframes Fade-fade-cgL {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes Fade-fade-cgL {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n", "" ]), 
    t.locals = {
        enterActive: "Fade-enterActive-330",
        fade: "Fade-fade-cgL",
        leaveActive: "Fade-leaveActive-1fN"
    };
}, function(e, t, n) {
    e.exports = n(2)(37);
}, function(e, t, n) {
    e.exports = n(2)(213);
}, , function(e, t, n) {
    var o = n(371);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("3838a463", o, !0, {});
}, function(e, t, n) {
    var o = n(374);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("9f85a7cc", o, !0, {});
}, function(e, t, n) {
    var o = n(376);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("4aa7ef03", o, !0, {});
}, function(e, t, n) {
    var o = n(386);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("9d46823a", o, !0, {});
}, function(e, t, n) {
    e.exports = n(2)(20);
}, function(e, t, n) {
    "use strict";
    n(70);
    var o = {
        components: {
            VueSelect: {
                extends: n(518).a,
                methods: {
                    maybeAdjustScroll: function() {
                        return !1;
                    }
                }
            }
        },
        data: function() {
            return {
                mounted: !1,
                localValue: this.value,
                id: null
            };
        },
        props: {
            disabled: {
                type: Boolean,
                default: !1
            },
            label: String,
            options: {
                type: Array,
                required: !0
            },
            optionsLabel: String,
            value: {
                default: null
            },
            layout: {
                type: String,
                validator: function(e) {
                    return [ "vertical", "horizontal" ].includes(e);
                },
                default: "vertical"
            },
            placeholder: String
        },
        watch: {
            value: function(e) {
                this.localValue = e;
            }
        },
        mounted: function() {
            this.mounted = !0, this.id = "select-" + this._uid;
        }
    }, r = n(275), i = n(53);
    var a = Object(i.default)(o, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: [ e.$style.vueSelectDropdown, e.$style[e.layout] ]
        }, [ n("label", {
            ref: "label",
            class: e.$style.label,
            attrs: {
                for: e.id
            }
        }, [ e._v(e._s(e.label)) ]), this.mounted ? n("VueSelect", {
            ref: "select",
            class: e.$style.vueSelectInput,
            attrs: {
                inputId: e.id,
                selectOnTab: !0,
                disabled: e.disabled,
                label: e.optionsLabel,
                options: e.options,
                placeholder: e.placeholder
            },
            on: {
                input: function(t) {
                    return e.$emit("input", e.localValue);
                }
            },
            model: {
                value: e.localValue,
                callback: function(t) {
                    e.localValue = t;
                },
                expression: "localValue"
            }
        }) : e._e() ], 1);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, function(e, t, n) {
    e.exports = n(2)(25);
}, function(e, t, n) {
    "use strict";
    var o = n(16), r = n(197), i = o.default.extend({
        props: {
            images: {
                type: Object
            },
            src1x: {
                type: String
            },
            src2x: {
                type: String
            },
            avatarSize: {
                type: Number,
                default: 115
            }
        },
        computed: {
            src: function() {
                if (this.src1x) return this.src1x;
                if (this.images) {
                    if (this.images[115]) return this.images[115];
                    var e = Object.keys(this.images), t = e[e.length - 1];
                    return this.images[t];
                }
            },
            srcset: function() {
                return this.src1x && this.src2x ? this.src1x + " 1x, " + this.src2x + " 2x" : Object(r.d)(this.images);
            }
        }
    }), a = n(243), s = n(53);
    var l = Object(s.default)(i, function() {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("img", {
            ref: "imageEl",
            class: e.$style.avatarImage,
            attrs: {
                src: e.src,
                srcset: e.srcset,
                sizes: e.avatarSize + "px"
            },
            on: {
                error: function(t) {
                    return e.$emit("error", t);
                }
            }
        });
    }, [], !1, function(e) {
        this.$style = a.default.locals || a.default;
    }, null, null);
    t.a = l.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(192), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Modal-modal-1r2 {\n  -webkit-box-align: center;\n          align-items: center;\n  background: rgba(25, 25, 25, 0.9);\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 249;\n}\n.Modal-modal-1r2.Modal-alignTop-2J- {\n    -webkit-box-align: start;\n            align-items: flex-start;\n    top: 30px;\n}\n.Modal-contained-3EG.Modal-modal-1r2,\n.Modal-contained-3EG .Modal-titleBar-3CE {\n  position: absolute;\n}\n.Modal-modalContent-13L {\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgba(25, 25, 25, 0.2);\n  box-sizing: border-box;\n  max-height: 100vh;\n  min-width: 600px;\n  overflow: auto;\n  padding: 30px;\n  position: relative;\n  text-align: center;\n}\n@media (max-width: 603px) {\n.Modal-modalContent-13L {\n      border-radius: 0;\n      height: 100%;\n      min-width: 100% !important;\n      padding: 75px 30px 30px !important;\n}\n}\n.Modal-titleBar-3CE {\n  background: #191919;\n  box-shadow: 0 2px 2px -2px rgba(25, 25, 25, 0.8);\n  color: #fff;\n  display: none;\n  font-size: 24px;\n  font-weight: normal;\n  height: 45px;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n@media (max-width: 603px) {\n.Modal-titleBar-3CE {\n      display: block;\n}\n}\n.Modal-modalTitle-9rI {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 43px;\n}\n@media (min-width: 604px) {\n.Modal-modalTitle-9rI {\n      display: none;\n}\n}\n.Modal-close-68d {\n  cursor: pointer;\n  opacity: 0.5;\n  padding: 15px 15px 5px 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.Modal-close-68d:hover {\n    opacity: 1;\n}\n@media (max-width: 603px) {\n.Modal-close-68d {\n      opacity: 1;\n      padding: 16px;\n}\n}\n.Modal-close-68d.focus-visible {\n    outline: 1px solid #0057ff;\n}\n.Modal-icon-2jC {\n  display: block;\n  fill: #191919;\n  height: 10px;\n  width: 10px;\n}\n@media (max-width: 603px) {\n.Modal-icon-2jC {\n      fill: #fff;\n      height: 13px;\n      width: 13px;\n}\n}\n", "" ]), 
    t.locals = {
        modal: "Modal-modal-1r2",
        alignTop: "Modal-alignTop-2J-",
        contained: "Modal-contained-3EG",
        titleBar: "Modal-titleBar-3CE",
        modalContent: "Modal-modalContent-13L",
        modalTitle: "Modal-modalTitle-9rI",
        close: "Modal-close-68d",
        icon: "Modal-icon-2jC"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(193), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".AvatarImage-avatarImage-3uu {\n  border-radius: inherit;\n  display: block;\n  width: 100%;\n}\n", "" ]), 
    t.locals = {
        avatarImage: "AvatarImage-avatarImage-3uu"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(194), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Avatar-hovered-1tJ {\n  background: #fff;\n  height: 100%;\n  left: 0;\n  opacity: 0.7;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 3;\n}\n.Avatar-avatar-3m1 {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #e8e8e8;\n  border-radius: 50%;\n  box-sizing: content-box !important;\n  display: block;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.Avatar-disabled-32M {\n  cursor: default;\n  pointer-events: none;\n}\n.Avatar-hovered-1tJ {\n  background-color: #3c4e6e;\n  display: block;\n}\n.Avatar-avatarHover-1lN {\n  position: relative;\n}\n.Avatar-avatarHover-1lN::after {\n    background-color: #191919;\n    border-radius: 50%;\n    bottom: 0;\n    content: '';\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-transition: opacity 0.2s linear;\n    transition: opacity 0.2s linear;\n}\n.Avatar-avatarHover-1lN:hover::after, .Avatar-avatarHover-1lN.Avatar-hasHoverState-1C9::after {\n    opacity: 0.2;\n}\n.Avatar-avatarImage-2oR {\n  border-radius: 50%;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.Avatar-avatarImage-2oR[src=''] {\n    opacity: 0;\n}\n.Avatar-avatar-3m1 .Avatar-multipleAvatarImage-1Ic {\n  background-color: #fff;\n  border-radius: 0;\n  float: left;\n  width: 50%;\n}\n", "" ]), 
    t.locals = {
        hovered: "Avatar-hovered-1tJ",
        avatar: "Avatar-avatar-3m1",
        disabled: "Avatar-disabled-32M",
        avatarHover: "Avatar-avatarHover-1lN",
        hasHoverState: "Avatar-hasHoverState-1C9",
        avatarImage: "Avatar-avatarImage-2oR",
        multipleAvatarImage: "Avatar-multipleAvatarImage-1Ic"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(195), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Tooltip-wrapper-2py {\n  align-self: flex-start;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: -6px;\n  padding-bottom: 6px;\n  position: relative;\n}\n@media (max-width: 921px) {\n.Tooltip-wrapper-2py:not(.Tooltip-responsive-1yQ) .Tooltip-container-2aL {\n      display: none;\n}\n}\n.Tooltip-textWrapper-2kf {\n  display: block;\n}\n.Tooltip-trigger-1PL {\n  display: -webkit-box;\n  display: flex;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.Tooltip-container-2aL {\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.3);\n  color: #191919;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  z-index: 100;\n}\n.Tooltip-container-2aL .Tooltip-triangleContainer-AaB {\n    position: absolute;\n}\n.Tooltip-container-2aL .Tooltip-mask-pQU {\n    background: #fff;\n    height: 6px;\n    left: -2px;\n    position: relative;\n    width: 16px;\n}\n.Tooltip-container-2aL.Tooltip-right-2ui {\n    right: calc(100% + 7px);\n}\n.Tooltip-container-2aL.Tooltip-position-top-2Yf .Tooltip-triangleContainer-AaB {\n    bottom: -6px;\n}\n.Tooltip-container-2aL.Tooltip-position-top-2Yf .Tooltip-triangle-3EI {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    -webkit-filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));\n            filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-top-color: #fff;\n}\n.Tooltip-container-2aL.Tooltip-position-top-2Yf .Tooltip-mask-pQU {\n    top: -6px;\n}\n.Tooltip-container-2aL.Tooltip-position-center-ThM {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    margin-top: -3px;\n}\n.Tooltip-container-2aL.Tooltip-position-center-ThM.Tooltip-right-2ui .Tooltip-triangleContainer-AaB {\n    margin-top: -6px;\n    right: 0;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.Tooltip-container-2aL.Tooltip-position-center-ThM.Tooltip-right-2ui .Tooltip-triangle-3EI {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    -webkit-filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));\n            filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-top-color: #fff;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n.Tooltip-container-2aL.Tooltip-position-center-ThM.Tooltip-right-2ui .Tooltip-mask-pQU {\n    display: none;\n}\n.Tooltip-container-2aL.Tooltip-position-bottom-1en .Tooltip-triangleContainer-AaB {\n    top: -12px;\n}\n.Tooltip-container-2aL.Tooltip-position-bottom-1en .Tooltip-triangle-3EI {\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    -webkit-filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));\n            filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));\n    height: 0;\n    position: absolute;\n    width: 0;\n    border-bottom-color: #fff;\n}\n.Tooltip-container-2aL.Tooltip-position-bottom-1en .Tooltip-mask-pQU {\n    top: 12px;\n}\n.Tooltip-container-2aL.Tooltip-position-right-1Zd {\n    top: -5px;\n}\n.Tooltip-container-2aL.Tooltip-position-right-1Zd .Tooltip-triangleContainer-AaB {\n      left: -10px;\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg);\n}\n.Tooltip-container-2aL.Tooltip-position-right-1Zd .Tooltip-triangle-3EI {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 7px;\n      -webkit-filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));\n              filter: drop-shadow(0 1px 1px rgba(25, 25, 25, 0.3));\n      height: 0;\n      position: absolute;\n      width: 0;\n      border-right-color: #fff;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n}\n.Tooltip-container-2aL.Tooltip-position-right-1Zd .Tooltip-mask-pQU {\n      bottom: 6px;\n}\n.Tooltip-closeIconWrapper-3hc {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n}\n.Tooltip-closeIcon-26g {\n  fill: #959595;\n  width: 10px;\n}\n.Tooltip-closeIcon-26g:hover {\n    fill: #696969;\n}\n", "" ]), 
    t.locals = {
        wrapper: "Tooltip-wrapper-2py",
        responsive: "Tooltip-responsive-1yQ",
        container: "Tooltip-container-2aL",
        textWrapper: "Tooltip-textWrapper-2kf",
        trigger: "Tooltip-trigger-1PL",
        triangleContainer: "Tooltip-triangleContainer-AaB",
        mask: "Tooltip-mask-pQU",
        right: "Tooltip-right-2ui",
        "position-top": "Tooltip-position-top-2Yf",
        triangle: "Tooltip-triangle-3EI",
        "position-center": "Tooltip-position-center-ThM",
        "position-bottom": "Tooltip-position-bottom-1en",
        "position-right": "Tooltip-position-right-1Zd",
        closeIconWrapper: "Tooltip-closeIconWrapper-3hc",
        closeIcon: "Tooltip-closeIcon-26g"
    };
}, function(e, t, n) {
    var o = n(418);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("14e53ada", o, !0, {});
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o;
    });
    n(20), n(36), n(22), n(8), n(62), n(37), n(21), n(38), n(324);
    function o(e, t) {
        if (!t) return e;
        try {
            var n = new URL(e);
            return Object.keys(t).forEach(function(e) {
                return n.searchParams.set(e, t[e]);
            }), n.toString();
        } catch (t) {
            return e;
        }
    }
}, function(e, t, n) {
    var o = n(422);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("23fb2164", o, !0, {});
}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(17), n(18), n(20), n(127), n(24), n(25), n(22), n(21);
    var o = n(172), r = n.n(o), i = n(209), a = n.n(i), s = n(265), l = n.n(s), c = n(270), u = n.n(c), p = n(32), d = (n(8), 
    n(10), n(256)), f = "following", b = "following-hold", h = n.n(d).a.extend({
        init: function(e, t) {
            this.$view = e, this._model = t, this.rendered();
        },
        destroy: function() {
            this._model.off(null, null, this);
        },
        rendered: function() {
            var e = this, t = this;
            this._model.on("following", function(t) {
                e.$view.toggleClass(f, t), e.$view.data("following", t), t && e.$view.addClass(b).one("mouseleave", function() {
                    r()(this).removeClass(b);
                });
            }, this), this.$view.on("click keyup", function(e) {
                var n = "click" === e.type, o = "keyup" === e.type && 13 === e.keyCode;
                if (n || o) {
                    e.stopPropagation();
                    var i = r()(this).data(), a = {
                        backfill: i.backfill
                    };
                    t._controller.follow(a, i.source);
                }
            });
        }
    }, {
        rateLimitPopup: function(e) {
            return n.e(41).then(n.bind(null, 2361)).then(function(t) {
                return (0, t.open)(e);
            });
        }
    }), m = n(14), g = n(1), v = l.a.extend({
        init: function(e, t, n, o) {
            this.views = [], this.type = n || "user", this.gallery = o, this._model = new u.a(e, {
                blocking: !1,
                following: t || !1
            }), this.listenTo(this._model, "all", this.trigger);
        },
        _initView: function(e) {
            var t = new h(e, this._model);
            return t._controller = this, t;
        },
        add: function(e) {
            if (e.data("befollow")) return this;
            var t = this._initView(e);
            return e.data("befollow", t), this.views.push(t), this;
        },
        setFollowing: function(e) {
            this._model.set("following", e);
        },
        follow: function(e) {
            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (!this._model.get("blocking")) {
                var o, r = this._model, i = this._model.get("following");
                return this._model.set("blocking", !0), o = this.constructor.send(this.type, this.id, !i, e, this.gallery, n).then(function(e) {
                    return r.set("following", !i), e.following = !i, "user" === t.type && t.trigger("updated-user"), 
                    e;
                }, function(e) {
                    var t;
                    429 === e.status && (e.responseJSON && e.responseJSON.messages && (t = e.responseJSON.messages.pop().message), 
                    h.rateLimitPopup(t));
                }), this.trigger("request", o), o.then(a, a), o;
            }
            function a() {
                r.set("blocking", !1);
            }
        },
        destroy: function() {
            this.views.forEach(function(e) {
                e.destroy();
            }), this.views = [], this._model.destroy(), this._model = null;
        }
    }, {
        sendBackfill: function(e, t) {
            return this.send(e, t, !0, {
                backfill: "instant"
            });
        },
        send: function(e, t, n, o, r, i) {
            return Object(g.default)({
                url: "/relations/" + e + "/" + t + m.default.getLocation("search"),
                type: n ? "POST" : "DELETE",
                data: o
            }).then(function(o) {
                return p.default.custom("analytics", n ? "Followed" : "Unfollowed", {
                    followee: t,
                    type: e,
                    gallery: r,
                    source: i
                }), o;
            });
        }
    }).mixin(a.a), w = n(39), _ = n(299);
    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var x, P = {};
    x = {
        init: function(e) {
            var t = this;
            return this.signUp = {}, r()(".js-action-follow", e).each(function(e, n) {
                var o = r()(n), i = o.data("followee"), a = o.data("following"), s = o.data("entity"), l = o.data("gallery");
                if (w.default.isLoggedIn()) x._bindFollow(o, s, i, a, l); else {
                    var c = j({}, n.id, x._initSignUp(o));
                    t.signUp = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? y(Object(n), !0).forEach(function(t) {
                                j(e, t, n[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }({}, t.signUp, {}, c);
                }
            }), this;
        },
        destroy: function() {
            this.signUp = {}, P = {};
        },
        _bindFollow: function(e, t, n, o) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
            P[t] || (P[t] = {}), P[t][n] || (P[t][n] = x._create(t, n, o, r)), P[t][n].add(e);
        },
        _initSignUp: function(e) {
            var t = e.data(), n = {
                id: t.followee,
                entity: t.entity,
                action: t.action ? t.action : "follow",
                from: t.signupFrom,
                displayName: t.displayName
            };
            return _.default.init({
                data: n,
                context: e[0]
            });
        },
        _create: function(e, t, n, o) {
            var r = this, i = new v(t, n, e, o);
            return this.listenTo(i, "following", function(n) {
                this.trigger("following", t, n, e, o);
            }).listenTo(i, "request", function(n) {
                this.trigger("request", t, n, e, o);
            }).listenTo(i, "updated-user", function() {
                if (P.project) {
                    var e = r._isFollowingAll();
                    Object.keys(P.project).forEach(function(t) {
                        P.project[t].setFollowing(e);
                    }), e && r.trigger("is-following-all");
                }
            }), "project" === e && this.listenTo(i, "request", this._updateUsersOnProjectFollow), 
            i;
        },
        _isFollowingAll: function() {
            return !Object.keys(P.user).filter(function(e) {
                return !P.user[e].data.following;
            }).length;
        },
        _updateUsersOnProjectFollow: function(e) {
            e.then(function(e) {
                e.owner_ids.forEach(function(t) {
                    P.user[t] && P.user[t].setFollowing(e.following);
                });
            });
        }
    }, Object.assign(x, a.a);
    t.default = x;
}, , , function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 125.8 291.6"
            }
        }, [ t("path", {
            attrs: {
                d: "M88.6 145.8l-70-81.1v162.2z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    e.exports = n(2)(28);
}, , function(e, t, n) {
    var o = n(432);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("1bad4d62", o, !0, {});
}, function(e, t, n) {
    var o = n(434);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("21c6e69e", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = n(199), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Appreciations-icon-2NG {\n  fill: #fff;\n}\n", "" ]), 
    t.locals = {
        icon: "Appreciations-icon-2NG"
    };
}, function(e, t, n) {
    var o = n(436);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("43c351fa", o, !0, {});
}, function(e, t, n) {
    var o = n(438);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("6ad330b9", o, !0, {});
}, function(e, t, n) {
    var o = n(473);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("203e796e", o, !0, {});
}, function(e, t, n) {
    e.exports = n(2)(29);
}, function(e, t, n) {
    e.exports = n(2)(2);
}, , function(e, t, n) {
    "use strict";
    var o = n(202), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".DropdownItem-root-1Gd {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.2;\n  -webkit-transition: background-color 0.15s linear;\n  transition: background-color 0.15s linear;\n}\n.DropdownItem-root-1Gd a,\n  .DropdownItem-root-1Gd span {\n    color: inherit;\n    display: block;\n    padding: 8px 20px 8px 13px;\n    text-decoration: inherit;\n    -webkit-transition: color 0.15s linear;\n    transition: color 0.15s linear;\n}\n.DropdownItem-root-1Gd:hover {\n    background-color: #0057ff;\n    color: #fff;\n}\n", "" ]), 
    t.locals = {
        root: "DropdownItem-root-1Gd"
    };
}, function(e, t, n) {
    e.exports = n(2)(137);
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_follow/_button": n(196).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.s(o.f("is_profile_owner", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.rp("<lib/_follow/_button0", e, t, "")), 
            o.fl();
        },
        partials: {
            "<lib/_follow/_button0": {
                name: "lib/_follow/_button",
                partials: {},
                subs: {
                    classes: function(e, t, n, o) {
                        n.b("user-follow");
                    },
                    type: function(e, t, n, o) {
                        n.b("user");
                    },
                    size: function(e, t, n, o) {
                        n.b("rf-button--small");
                    },
                    attrs: function(e, t, n, o) {
                        n.b('data-display-name="'), n.b(n.v(n.f("display_name", e, t, 0))), n.b('"');
                    }
                }
            }
        },
        subs: {}
    }, '{{^is_profile_owner}}\n  {{<lib/_follow/_button}}\n    {{$classes}}user-follow{{/classes}}\n    {{$type}}user{{/type}}\n    {{$size}}rf-button--small{{/size}}\n    {{$attrs}}data-display-name="{{display_name}}"{{/attrs}}\n  {{/lib/_follow/_button}}\n{{/is_profile_owner}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    n(70), n(126);
    var o = n(497), r = n.n(o), i = n(549), a = n.n(i), s = n(550), l = n.n(s), c = n(271), u = n.n(c), p = n(551), d = n.n(p), f = n(552), b = n.n(f), h = n(553), m = n.n(h), g = n(554), v = n.n(g), w = n(196), _ = n.n(w), y = n(478), j = {
        props: {
            followeeId: {
                type: Number,
                required: !0
            },
            entityType: {
                type: String,
                validator: function(e) {
                    return [ "user", "team", "collection", "project", "adobe_gallery", "curated_category", "curated_subcategory", "moodboard" ].includes(e);
                },
                required: !0
            },
            isFollowing: {
                type: Boolean
            },
            isGallery: {
                type: Boolean,
                default: !1
            },
            followLabel: {
                type: String
            },
            type: {
                type: String,
                default: "userSmall",
                validator: function(e) {
                    return [ "userSmall", "user", "link", "all", "linkAll", "collection", "moodboard", "teamSmall", "button" ].includes(e);
                }
            },
            displayName: {
                type: String
            },
            gallery: {
                type: String
            },
            source: {
                type: String
            }
        },
        methods: {
            FollowButton: function() {
                var e = {
                    userSmall: u.a,
                    user: l.a,
                    link: r.a,
                    all: d.a,
                    linkAll: a.a,
                    collection: b.a,
                    moodboard: m.a,
                    teamSmall: v.a,
                    button: _.a
                };
                return Object(y.a)(e[this.type], {
                    id: this.followeeId,
                    is_following: this.isFollowing,
                    type: this.entityType,
                    display_name: this.displayName,
                    follow_label_postfix: this.followLabel,
                    source: this.source,
                    gallery: this.gallery,
                    is_gallery: this.isGallery
                }, this.$translate);
            }
        }
    }, x = n(555), P = n(53);
    var C = Object(P.default)(j, function() {
        var e = this.$createElement;
        return (this._self._c || e)("div", {
            ref: "legacyButton",
            class: this.$style.legacyButton,
            domProps: {
                innerHTML: this._s(this.FollowButton())
            }
        });
    }, [], !1, function(e) {
        this.$style = x.default.locals || x.default;
    }, null, null);
    t.a = C.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16"
            }
        }, [ t("path", {
            attrs: {
                fill: "none",
                d: "M0 0v16h16V0H0zm14 15H2V7h2V5c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v8z"
            }
        }), t("path", {
            attrs: {
                fill: "none",
                d: "M8 3c-1.104 0-2 .895-2 2v2h4V5c0-1.105-.896-2-2-2z"
            }
        }), t("path", {
            attrs: {
                d: "M12 5c0-2.21-1.79-4-4-4S4 2.79 4 5v2H2v8h12V7h-2V5zm-2 2H6V5c0-1.105.896-2 2-2s2 .895 2 2v2z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    var o = n(527);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("dbdc0808", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = n(205), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Select-horizontal-2UF .Select-vueSelectInput-1dM {\n  float: right;\n}\n.Select-vueSelectDropdown-jhp .Select-vueSelectInput-1dM {\n  height: 32px;\n  width: 205px;\n}\n.Select-vueSelectDropdown-jhp .dropdown-toggle {\n  cursor: pointer !important;\n}\n.Select-vueSelectDropdown-jhp .open .dropdown-toggle {\n  cursor: text !important;\n}\n.Select-vueSelectDropdown-jhp .dropdown-menu {\n  max-height: 200px !important;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 0;\n  top: 32px;\n}\n.Select-vueSelectDropdown-jhp .dropdown-menu li a {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #191919;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0;\n  padding: 8px 12px;\n  text-decoration: none;\n}\n.Select-vueSelectDropdown-jhp .dropdown-menu li a:hover, .Select-vueSelectDropdown-jhp .dropdown-menu li a:focus {\n    background-color: #0057ff;\n    color: #fff;\n}\n.Select-vueSelectDropdown-jhp .dropdown-menu .highlight > a {\n  background-color: #0057ff !important;\n  color: #fff !important;\n}\n.Select-vueSelectDropdown-jhp .dropdown-menu .highlight > a:hover, .Select-vueSelectDropdown-jhp .dropdown-menu .highlight > a:focus {\n    background-color: #0057ff !important;\n    color: #fff !important;\n}\n.Select-vueSelectDropdown-jhp .dropdown-menu .active > a {\n  background-color: #fff !important;\n  color: #0057ff !important;\n}\n.Select-vueSelectDropdown-jhp .dropdown-menu .active > a:hover, .Select-vueSelectDropdown-jhp .dropdown-menu .active > a:focus {\n    background-color: #0057ff !important;\n    color: #fff !important;\n}\n.Select-vueSelectDropdown-jhp .clear {\n  display: none;\n}\n.Select-vueSelectDropdown-jhp .open-indicator {\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  -webkit-transition-property: -webkit-transform !important;\n  transition-property: -webkit-transform !important;\n  transition-property: transform !important;\n  transition-property: transform, -webkit-transform !important;\n  width: 26px !important;\n}\n.Select-vueSelectDropdown-jhp .open-indicator::before {\n    display: none !important;\n}\n.Select-vueSelectDropdown-jhp .open-indicator::after {\n    border: 4px solid transparent;\n    border-top-color: #191919;\n    content: '';\n    display: inline-block;\n    height: 0;\n    margin: 4px auto 0;\n    width: 0;\n}\n.Select-vueSelectDropdown-jhp .dropdown-menu .active a {\n  background-color: #fff;\n  color: #0057ff;\n}\n.Select-vueSelectDropdown-jhp .selected-tag {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #191919;\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 600;\n  max-width: 170px;\n}\n.Select-vueSelectDropdown-jhp .v-select.open .selected-tag {\n  opacity: 1;\n  position: relative;\n}\n.Select-vueSelectDropdown-jhp .v-select.open .dropdown-toggle {\n  border-color: #0057ff;\n  border-radius: 4px;\n}\n.Select-vueSelectDropdown-jhp .v-select.disabled .open-indicator {\n  background-color: transparent;\n}\n.Select-vueSelectDropdown-jhp .v-select.disabled .dropdown-toggle {\n  background-color: #e8e8e8;\n}\n.Select-vueSelectDropdown-jhp .v-select.disabled .dropdown-toggle input {\n  background-color: #e8e8e8;\n}\n.Select-vueSelectDropdown-jhp .v-select input::-webkit-input-placeholder {\n  color: #959595;\n  font-size: 13px;\n  font-weight: 600;\n}\n.Select-vueSelectDropdown-jhp .v-select input::-moz-placeholder {\n  color: #959595;\n  font-size: 13px;\n  font-weight: 600;\n}\n.Select-vueSelectDropdown-jhp .v-select input:-ms-input-placeholder {\n  color: #959595;\n  font-size: 13px;\n  font-weight: 600;\n}\n.Select-vueSelectDropdown-jhp .v-select input::-ms-input-placeholder {\n  color: #959595;\n  font-size: 13px;\n  font-weight: 600;\n}\n.Select-vueSelectDropdown-jhp .v-select input::placeholder {\n  color: #959595;\n  font-size: 13px;\n  font-weight: 600;\n}\n.Select-label-3Ol {\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 2.66667;\n  margin-bottom: 5px;\n  white-space: nowrap;\n}\n", "" ]), 
    t.locals = {
        horizontal: "Select-horizontal-2UF",
        vueSelectInput: "Select-vueSelectInput-1dM",
        vueSelectDropdown: "Select-vueSelectDropdown-jhp",
        label: "Select-label-3Ol"
    };
}, , , , function(e, t, n) {
    var o = n(537);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("7e82cdd0", o, !0, {});
}, function(e, t, n) {
    var o = n(539);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("474f9cda", o, !0, {});
}, , , , function(e, t, n) {
    var o = n(556);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("a0d6d764", o, !0, {});
}, , , , , , , , function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--appreciate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0.5 0.5 16 16"><path fill="none" d="M.5.5h16v16H.5z"/><path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--appreciate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0.5 0.5 16 16"><path fill="none" d="M.5.5h16v16H.5z"/><path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--views" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M.5.5h16v16H.5z"/><path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--views" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M.5.5h16v16H.5z"/><path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    e.exports = n(2)(34);
}, function(e, t, n) {
    e.exports = n(2)(40);
}, , function(e, t, n) {
    "use strict";
    n(17), n(18), n(20), n(70), n(24), n(25), n(22), n(21);
    var o = n(183), r = {
        name: "OwnerRowNeue",
        props: {
            owner: {
                type: Object,
                required: !0
            }
        }
    }, i = n(351), a = n(53);
    var s = Object(a.default)(r, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.$style.row
        }, [ n("a", {
            ref: "link",
            class: [ e.$style.link, "js-mini-profile" ],
            attrs: {
                href: e.owner.url,
                "data-id": e.owner.id
            },
            on: {
                focus: function(t) {
                    return e.$emit("rowOnFocus");
                },
                blur: function(t) {
                    return e.$emit("rowOnBlur");
                }
            }
        }, [ n("span", {
            class: e.$style.imageWrap
        }, [ n("img", {
            class: e.$style.image,
            attrs: {
                src: e.owner.images[50]
            }
        }) ]), n("span", {
            class: e.$style.name
        }, [ e._v(e._s(e.owner.display_name)) ]) ]) ]);
    }, [], !1, function(e) {
        this.$style = i.default.locals || i.default;
    }, null, null).exports, l = n(250);
    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var p = {
        name: "OwnersNeue",
        props: {
            owners: {
                type: Array
            },
            ownerTextClass: {
                type: Array
            },
            trackingSource: {
                type: String
            },
            theme: {
                type: String,
                validator: function(e) {
                    return [ "light", "dark" ].includes(e);
                },
                default: "light"
            },
            showAvatar: {
                type: Boolean
            },
            shouldRemoveMultiOwnerTooltip: {
                type: Boolean,
                default: !1
            }
        },
        data: function() {
            return {
                isMultipleOwnerInFocus: !1,
                shouldTooltipOpen: !1
            };
        },
        components: {
            Tooltip: o.a,
            OwnerRowNeue: s
        },
        methods: {
            getUrl: function(e, t) {
                return this.trackingSource && (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach(function(t) {
                            u(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }({}, t, {
                    tracking_source: this.trackingSource
                })), Object(l.a)(e, t);
            }
        }
    }, d = n(353);
    var f = Object(a.default)(p, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return t.owners.length ? o("div", {
            class: [ t.$style.root, t.$style[t.theme], (e = {}, e[t.$style.overflowText] = 1 === t.owners.length, 
            e) ]
        }, [ t.owners.length > 1 && !t.shouldRemoveMultiOwnerTooltip ? o("div", {
            class: t.$style.tooltipContainer
        }, [ o("Tooltip", {
            ref: "ownersList",
            attrs: {
                hasTextTrigger: !0,
                position: "bottom",
                alignment: "right",
                alignmentOffset: -15,
                canTruncateTrigger: !0,
                isOpen: t.shouldTooltipOpen
            },
            nativeOn: {
                keyup: function(e) {
                    if (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                    t.shouldTooltipOpen = !t.shouldTooltipOpen;
                },
                focus: function(e) {
                    return t.$emit("tooltipOnFocus");
                },
                blur: function(e) {
                    return t.$emit("tooltipOnBlur");
                }
            }
        }, [ o("div", {
            class: [ t.$style.arrow, t.$style.overflowText, t.$style.multipleOwnersText, t.ownerTextClass ]
        }, [ t._v(" " + t._s(t.$translate("multiple_owners", "Multiple Owners")) + " ") ]), o("div", {
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ o("div", {
            class: t.$style.list
        }, t._l(t.owners, function(e, n) {
            return o("OwnerRowNeue", {
                key: "owner-" + n,
                ref: "ownerRow",
                refInFor: !0,
                attrs: {
                    owner: e
                },
                on: {
                    rowOnFocus: function(e) {
                        return t.$emit("ownerOnFocus");
                    },
                    rowOnBlur: function(e) {
                        return t.$emit("ownerOnBlur");
                    }
                }
            });
        }), 1) ]) ]) ], 1) : t._e(), t.owners.length > 1 && t.shouldRemoveMultiOwnerTooltip ? o("div", {
            class: t.$style.tooltipContainer
        }, [ o("div", {
            class: [ t.$style.overflowText, t.ownerTextClass ]
        }, [ t._v(" " + t._s(t.$translate("multiple_owners", "Multiple Owners")) + " ") ]) ]) : t._e(), t.owners.length <= 1 ? o("span", {
            class: [ "js-mini-profile", t.$style.ownerAndAvatar ],
            attrs: {
                "data-id": t.owners[0].id
            }
        }, [ 1 === t.owners.length && t.showAvatar ? o("span", {
            class: t.$style.ownerImage
        }, [ o("img", {
            ref: "avatar",
            class: t.$style.ownerImageEl,
            attrs: {
                src: t.owners[0].images[50]
            }
        }) ]) : t._e(), o("a", {
            ref: "singleOwner",
            class: [ t.$style.owner, t.ownerTextClass ],
            attrs: {
                href: t.getUrl(t.owners[0].url)
            },
            on: {
                focus: function(e) {
                    return t.$emit("ownerOnFocus");
                },
                blur: function(e) {
                    return t.$emit("ownerOnBlur");
                }
            }
        }, [ t._v(t._s(t.owners[0].display_name)) ]) ]) : t._e() ]) : t._e();
    }, [], !1, function(e) {
        this.$style = d.default.locals || d.default;
    }, null, null);
    t.a = f.exports;
}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(8), n(10), n(35);
    var o = n(206), r = n.n(o), i = (n(188), n(30), n(22), n(266)), a = n(39), s = n(296);
    function l(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function c(e) {
        return i.default.SSO.URLS.LOGIN + "?destination=" + function(e) {
            if (e.adobeidSignupDestination) return encodeURIComponent(e.adobeidSignupDestination);
            var t = {
                id: e.id,
                entity: e.entity,
                action: e.action,
                title: e.displayName
            }, n = Object.keys(t).map(function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
            }).join("&");
            return encodeURIComponent("/onboarding?" + n);
        }(e);
    }
    var u = function(e) {
        return p.apply(this, arguments);
    };
    function p() {
        var e;
        return e = regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = {
                        redirect_uri: c(t)
                    }, e.prev = 1, e.next = 4, s.default.logSignUpIntent(t);

                  case 4:
                    a.default.signUp(n), e.next = 11;
                    break;

                  case 7:
                    throw e.prev = 7, e.t0 = e.catch(1), a.default.signUp(n), new Error("Logging Failed");

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 1, 7 ] ]);
        }), (p = function() {
            var t = this, n = arguments;
            return new Promise(function(o, r) {
                var i = e.apply(t, n);
                function a(e) {
                    l(i, o, r, a, s, "next", e);
                }
                function s(e) {
                    l(i, o, r, a, s, "throw", e);
                }
                a(void 0);
            });
        }).apply(this, arguments);
    }
    function d(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    t.default = r.a.extend({
        init: function(e) {
            var t = e.data, n = e.context;
            this.data = t, this.context = n;
        },
        bind: function() {
            this.context.addEventListener("click", this._signUp.bind(this));
        },
        unbind: function() {
            this.context.removeEventListener("click", this._signUp.bind(this));
        },
        _signUp: function() {
            var e, t = this;
            return (e = regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, u(t.data);

                      case 3:
                        t.trigger("logged"), e.next = 9;
                        break;

                      case 6:
                        e.prev = 6, e.t0 = e.catch(0), t.trigger("logging-failed");

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 6 ] ]);
            }), function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                        d(i, o, r, a, s, "next", e);
                    }
                    function s(e) {
                        d(i, o, r, a, s, "throw", e);
                    }
                    a(void 0);
                });
            })();
        }
    });
}, , function(e, t, n) {
    e.exports = n(2)(190);
}, function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 14"
            }
        }, [ t("g", {
            attrs: {
                transform: "translate(177 12943)"
            }
        }, [ t("circle", {
            attrs: {
                cx: "7",
                cy: "7",
                r: "7",
                transform: "translate(-177 -12943)"
            }
        }), t("g", {
            attrs: {
                transform: "translate(-171.6 -12939.769)",
                fill: "#fff"
            }
        }, [ t("ellipse", {
            attrs: {
                cx: "1.036",
                cy: "1.004",
                rx: "1.036",
                ry: "1.004",
                transform: "translate(.65)"
            }
        }), t("path", {
            attrs: {
                d: "M2.811 6.606H2.65V3.058a.19.19 0 0 0-.193-.187h-1.9s-.562.015-.562.467.562.467.562.467h.161v2.8H.562S0 6.62 0 7.072s.562.467.562.467H2.81s.562-.015.562-.467-.561-.466-.561-.466z"
            }
        }) ]) ]) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, , , , , function(e, t, n) {
    var o = n(576);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("1c3f44ee", o, !0, {});
}, , , , function(e, t, n) {
    var o = n(590);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("7001f70e", o, !0, {});
}, function(e, t, n) {
    var o = n(598);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("58779d8c", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = n(16).default.extend({
        name: "TextArea",
        props: {
            disabled: {
                type: Boolean,
                default: !1
            },
            errorMessage: {
                type: String
            },
            label: {
                type: String
            },
            placeholder: {
                type: String,
                default: ""
            },
            width: {
                type: Number,
                default: 20
            },
            minlength: {
                type: Number,
                default: 3
            },
            maxlength: {
                type: Number,
                default: 1e3
            },
            height: {
                type: Number,
                default: 4
            },
            value: {
                type: String
            }
        },
        computed: {
            hasError: function() {
                return Boolean(this.errorMessage);
            }
        },
        data: function() {
            return {
                localValue: this.value
            };
        },
        watch: {
            value: function(e) {
                this.localValue = e;
            }
        }
    }), r = n(346), i = n(53);
    var a = Object(i.default)(o, function() {
        var e, t, n = this, o = n.$createElement, r = n._self._c || o;
        return r("div", {
            class: (e = {}, e[n.$style.error] = n.hasError, e)
        }, [ r("label", {
            ref: "label",
            class: n.$style.label
        }, [ n._v(n._s(n.label) + " "), r("textarea", {
            directives: [ {
                name: "model",
                rawName: "v-model",
                value: n.localValue,
                expression: "localValue"
            } ],
            ref: "input",
            class: [ n.$style.input, (t = {}, t[n.$style.disabled] = n.disabled, t) ],
            attrs: {
                disabled: n.disabled,
                placeholder: n.placeholder,
                cols: n.width,
                rows: n.height,
                minlength: n.minlength,
                maxlength: n.maxlength
            },
            domProps: {
                value: n.localValue
            },
            on: {
                input: [ function(e) {
                    e.target.composing || (n.localValue = e.target.value);
                }, function(e) {
                    return n.$emit("input", e.target.value);
                } ],
                blur: function(e) {
                    return n.$emit("blur", e);
                }
            }
        }) ]), n.hasError ? r("p", {
            ref: "errorMessage",
            class: n.$style.errorMessage,
            attrs: {
                "data-ut": "TextArea__error"
            }
        }, [ n._v(n._s(n.errorMessage)) ]) : n._e() ]);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(16).default.extend({
        props: {
            wrapperClasses: {
                type: Array
            },
            isInFocus: {
                type: Boolean
            },
            isPlaceholder: {
                type: Boolean,
                default: !1
            },
            hasNoConstraints: {
                type: Boolean,
                default: !1
            }
        },
        data: function() {
            return {
                didTransitionEnd: !1
            };
        },
        watch: {
            isInFocus: function(e) {
                e ? this.$el.focus() : this.$el.blur();
            }
        },
        mounted: function() {
            var e = this.$refs.overlay;
            e && (e.addEventListener("transitionend", this.toggleTransitionState), e.addEventListener("transitionstart", this.toggleTransitionState));
        },
        beforeDestroy: function() {
            var e = this.$refs.overlay;
            e && (e.removeEventListener("transitionend", this.toggleTransitionState), e.removeEventListener("transitionstart", this.toggleTransitionState));
        },
        methods: {
            toggleTransitionState: function(e) {
                this.didTransitionEnd = "transitionend" === e.type;
            }
        }
    }), r = n(417), i = n(53);
    var a = Object(i.default)(o, function() {
        var e, t, n, o, r = this, i = r.$createElement, a = r._self._c || i;
        return a("div", {
            ref: "root",
            class: [ r.$style.cover, (e = {}, e[r.$style.focused] = r.isInFocus, e) ]
        }, [ a("div", {
            class: [ r.$style.wrapper, r.wrapperClasses, (t = {}, t[r.$style.noConstraints] = r.hasNoConstraints, 
            t) ]
        }, [ a("div", {
            ref: "content",
            class: [ r.$style.content, (n = {}, n[r.$style.searchLoadingPlaceholder + " qa-cover-placeholder"] = r.isPlaceholder, 
            n) ]
        }, [ r._t("content", null, {
            hoverClass: r.$style.showOnHover
        }) ], 2), r.$slots.hoverOverlay || r.$scopedSlots.hoverOverlay ? a("div", {
            ref: "overlay",
            class: [ r.$style.overlay, r.$style.showOnHover, (o = {}, o[r.$style.transitionDone] = r.didTransitionEnd, 
            o), "qa-cover-overlay" ]
        }, [ r._t("hoverOverlay") ], 2) : r._e(), r.$slots.alwaysVisibleOverlay || r.$scopedSlots.alwaysVisibleOverlay ? a("div", {
            class: r.$style.overlay
        }, [ r._t("alwaysVisibleOverlay", null, {
            hoverClass: r.$style.showOnHover
        }) ], 2) : r._e() ]) ]);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(183), r = n(273), i = {
        components: {
            Tooltip: o.a,
            LockIcon: r.a
        }
    }, a = n(370), s = n(53);
    var l = Object(s.default)(i, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", [ e.$slots.tooltipContent ? n("Tooltip", {
            attrs: {
                position: "bottom",
                alignment: "right"
            }
        }, [ n("LockIcon", {
            class: e.$style.privacyLock
        }), n("div", {
            class: e.$style.privacyTooltip,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ e._t("tooltipContent") ], 2) ], 1) : n("div", {
            class: e.$style.lockWrapper
        }, [ n("LockIcon", {
            class: e.$style.lock
        }), e._v(" " + e._s(e.$translate("project_cover_marked_private_label", "Private")) + " ") ], 1) ], 1);
    }, [], !1, function(e) {
        this.$style = a.default.locals || a.default;
    }, null, null);
    t.a = l.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(359), r = n(183), i = {
        components: {
            GearIcon: o.a,
            Tooltip: r.a
        },
        props: {
            menuOptions: Array,
            link: String,
            alignment: {
                type: String,
                default: "right"
            }
        }
    }, a = n(375), s = n(53);
    var l = Object(s.default)(i, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", [ e.link ? n("div", {
            class: e.$style.cogContainer
        }, [ n("a", {
            class: e.$style.cogAndArrow,
            attrs: {
                href: e.link
            }
        }, [ n("GearIcon", {
            class: e.$style.cog
        }) ], 1) ]) : n("Tooltip", {
            class: e.$style.cogContainer,
            attrs: {
                horizontalPadding: 0,
                position: "bottom",
                alignment: e.alignment
            }
        }, [ n("div", {
            class: e.$style.cogAndArrow
        }, [ n("GearIcon", {
            class: e.$style.cog
        }), n("div", {
            class: e.$style.downArrow
        }) ], 1), n("ul", {
            class: e.$style.dropdown,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ e._t("default") ], 2) ]) ], 1);
    }, [], !1, function(e) {
        this.$style = a.default.locals || a.default;
    }, null, null);
    t.a = l.exports;
}, function(e, t, n) {
    "use strict";
    n(70), n(44);
    var o = n(439), r = n.n(o), i = n(440), a = n.n(i), s = n(441), l = n.n(s), c = n(293), u = n.n(c), p = n(377), d = n.n(p), f = n(378), b = n.n(f), h = n(442), m = n.n(h), g = n(379), v = n.n(g), w = n(380), _ = n.n(w), y = n(381), j = n.n(y), x = n(382), P = n.n(x), C = n(383), k = n.n(C), O = n(384), I = n.n(O), T = n(443), S = n.n(T), A = n(444), $ = n.n(A), M = n(445), E = n.n(M), B = n(446), L = n.n(B), N = n(447), R = n.n(N), D = n(448), z = n.n(D), F = n(449), H = n.n(F), V = n(450), U = n.n(V), W = n(451), q = n.n(W), G = n(452), K = n.n(G), Y = n(453), X = n.n(Y), J = n(294), Z = n.n(J), Q = n(454), ee = n.n(Q), te = n(455), ne = n.n(te), oe = n(456), re = n.n(oe), ie = n(457), ae = n.n(ie), se = n(458), le = n.n(se), ce = n(459), ue = n.n(ce), pe = n(460), de = n.n(pe), fe = n(461), be = n.n(fe), he = n(462), me = n.n(he), ge = n(463), ve = n.n(ge), we = n(464), _e = n.n(we), ye = n(419), je = n.n(ye), xe = n(465), Pe = n.n(xe), Ce = n(466), ke = n.n(Ce), Oe = n(467), Ie = n.n(Oe), Te = n(468), Se = n.n(Te), Ae = n(318), $e = n.n(Ae), Me = n(469), Ee = n.n(Me), Be = n(470), Le = n.n(Be), Ne = n(471), Re = n.n(Ne), De = {
        "arrow-font-right": je.a,
        "arrow-font-left": Pe.a,
        arrow: be.a,
        arrowLight: me.a,
        appreciate: u.a,
        badge: d.a,
        caret: Ee.a,
        clock: a.a,
        clone: b.a,
        collection: m.a,
        comment: l.a,
        edit: v.a,
        hamburger: _.a,
        lockPrivate: j.a,
        share: P.a,
        trash: k.a,
        unpublish: I.a,
        adobeLogo: S.a,
        mail: $.a,
        notification: E.a,
        search: L.a,
        CC: R.a,
        twitter: z.a,
        linkedIn: H.a,
        facebook: U.a,
        pinterest: q.a,
        instagram: K.a,
        flickr: ve.a,
        vimeo: _e.a,
        adobeAlternate: X.a,
        apps: ee.a,
        api: ne.a,
        portfolioReview: re.a,
        blog: ae.a,
        "99u": le.a,
        portfolio: ue.a,
        behanceAlternate: de.a,
        views: Z.a,
        appreciateBadge: ke.a,
        jobs: Ie.a,
        following: Se.a,
        followers: $e.a,
        close: r.a,
        replace: Le.a,
        mostRelevant: Re.a
    }, ze = {
        name: "Icon",
        props: {
            name: {
                type: String,
                required: !0,
                validator: function(e) {
                    return e in De;
                }
            },
            type: {
                type: String,
                default: "dark",
                validator: function(e) {
                    return [ "light", "gray", "dark", "behance" ].includes(e);
                }
            }
        },
        computed: {
            icon: function() {
                return De[this.name]();
            }
        }
    }, Fe = n(472), He = n(53);
    var Ve = Object(He.default)(ze, function() {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("span", {
            class: e.$style[e.type],
            domProps: {
                innerHTML: e._s(e.icon)
            },
            on: {
                click: function(t) {
                    return e.$emit("click", t);
                }
            }
        });
    }, [], !1, function(e) {
        this.$style = Fe.default.locals || Fe.default;
    }, null, null);
    t.a = Ve.exports;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--followers" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"><path fill-rule="evenodd" d="M13 12v2L9 11l4-3v2h3v2H13zM7.809 14H2.75.0V9.75 9.749C0 8.231 1.234 7 2.75 7 2.753 7 2.757 7 2.76 7H8.537C7.584 8.062 7 9.462 7 11.001 7 12.096 7.298 13.117 7.809 14zM6 5C4.619 5 3.5 3.881 3.5 2.5 3.5 1.119 4.619.0 6 0 7.381.0 8.5 1.119 8.5 2.5 8.5 3.881 7.381 5 6 5z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--followers" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"><path fill-rule="evenodd" d="M13 12v2L9 11l4-3v2h3v2H13zM7.809 14H2.75.0V9.75 9.749C0 8.231 1.234 7 2.75 7 2.753 7 2.757 7 2.76 7H8.537C7.584 8.062 7 9.462 7 11.001 7 12.096 7.298 13.117 7.809 14zM6 5C4.619 5 3.5 3.881 3.5 2.5 3.5 1.119 4.619.0 6 0 7.381.0 8.5 1.119 8.5 2.5 8.5 3.881 7.381 5 6 5z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "960.186 616.276 170 144"
            }
        }, [ t("path", {
            attrs: {
                d: "M1102.077 616.276l-87.46 87.786-26.3-26.322-28.131 28.107 54.695 54.429 115.305-115.613z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, , , , function(e, t, n) {
    "use strict";
    var o = n(355), r = n(53);
    var i = Object(r.default)({}, function() {
        var e = this.$createElement;
        return (this._self._c || e)("div", {
            class: this.$style.stats
        }, [ this._t("content") ], 2);
    }, [], !1, function(e) {
        this.$style = o.default.locals || o.default;
    }, null, null);
    t.a = i.exports;
}, , function(e, t, n) {
    "use strict";
    var o = {
        name: "Facebook",
        props: {
            useColor: {
                type: Boolean,
                default: !1
            }
        }
    }, r = n(330), i = n(53);
    var a = Object(i.default)(o, function() {
        var e, t = this.$createElement, n = this._self._c || t;
        return n("svg", {
            attrs: {
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg"
            }
        }, [ n("g", {
            attrs: {
                transform: "translate(-1654 -928)"
            }
        }, [ n("circle", {
            class: (e = {}, e[this.$style.circle] = this.useColor, e),
            attrs: {
                transform: "translate(1654 928)",
                cx: "16",
                cy: "16",
                r: "16"
            }
        }), n("path", {
            class: this.$style.icon,
            attrs: {
                d: "M1671.395 953v-7.3h2.45l.367-2.846h-2.817v-1.815c0-.826.226-1.384 1.412-1.384h1.5v-2.542a19.964 19.964 0 0 0-2.192-.113 3.425 3.425 0 0 0-3.658 3.756v2.1H1666v2.844h2.457v7.3z"
            }
        }) ]) ]);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, , function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 14"
            }
        }, [ t("path", {
            attrs: {
                d: "M8.3.8C7.9.1 7-.2 6.3.1c-.3.2-.5.4-.6.7l-5.5 11c-.4.7-.1 1.6.7 2 .1.1.4.2.6.2h11c.8 0 1.5-.7 1.5-1.5 0-.2-.1-.5-.2-.7L8.3.8zM8 12H6v-2h2v2zm-.5-3.5h-1L6 4h2l-.5 4.5z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    e.exports = n(2)(75);
}, , function(e, t, n) {
    "use strict";
    var o = n(213), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Facebook-circle-2zX {\n  fill: #4861a3;\n}\n.Facebook-icon-2Bw {\n  fill: #fff;\n}\n", "" ]), 
    t.locals = {
        circle: "Facebook-circle-2zX",
        icon: "Facebook-icon-2Bw"
    };
}, , , , function(e, t, n) {
    e.exports = n(2)(76);
}, , function(e, t, n) {
    var o = n(628);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("cf17dae2", o, !0, {});
}, function(e, t, n) {
    var o = n(630);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("1bf504ce", o, !0, {});
}, , function(e, t, n) {
    "use strict";
    var o = {
        props: {
            url: {
                type: String
            },
            isSmall: {
                type: Boolean
            },
            isMedium: {
                type: Boolean
            },
            shouldOpenProjectPopupOnClick: {
                type: Boolean
            },
            isFeatured: {
                type: Boolean
            },
            hasShadow: {
                type: Boolean,
                default: !0
            }
        }
    }, r = n(435), i = n(53);
    var a = Object(i.default)(o, function() {
        var e, t, n, o, r, i = this, a = i.$createElement;
        return (i._self._c || a)("a", {
            ref: "link",
            class: [ i.$style.title, "qa-title-owner", (e = {}, e[i.$style.smallTitle] = i.isSmall, 
            e), (t = {}, t[i.$style.mediumTitle] = i.isMedium, t), (n = {}, n[i.$style.featured] = i.isFeatured, 
            n), (o = {}, o[i.$style.hasShadow] = i.hasShadow, o), (r = {}, r["js-project-cover-title-link"] = i.shouldOpenProjectPopupOnClick, 
            r) ],
            attrs: {
                href: i.url
            },
            on: {
                focus: function(e) {
                    return i.$emit("focus");
                },
                blur: function(e) {
                    return i.$emit("blur");
                }
            }
        }, [ i._t("default") ], 2);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, function(e, t, n) {
    "use strict";
    var o = {
        props: {
            colors: {
                type: Array,
                required: !0
            }
        }
    }, r = n(385), i = n(53);
    var a = Object(i.default)(o, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return e.colors && e.colors.length ? n("div", {
            ref: "dominantColor",
            class: e.$style.dominantColor,
            style: {
                backgroundColor: "rgb(" + e.colors[0].r + ", " + e.colors[0].g + ", " + e.colors[0].b + ")"
            }
        }) : n("svg", {
            ref: "fallbackImage",
            class: e.$style.colorFallback,
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 65 65"
            }
        }, [ n("g", {
            attrs: {
                transform: "translate(-27 -27)"
            }
        }, [ n("path", {
            class: e.$style.fallbackIconPath,
            attrs: {
                d: "M27,27V92H92V27ZM72.217,41.13A7.065,7.065,0,1,1,65.152,48.2,7,7,0,0,1,72.217,41.13ZM34.065,75.043l18.37-18.37L66.565,70.8l7.065-7.065,11.3,11.3Z"
            }
        }) ]) ]);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, function(e, t, n) {
    e.exports = n(2)(38);
}, , , , function(e, t, n) {
    "use strict";
    var o = n(217), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".TextArea-input-3bN {\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 1.3;\n  border: 1px solid #e8e8e8;\n  border-radius: 3px;\n  box-sizing: border-box;\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 8px;\n  padding: 10px;\n  resize: none;\n  width: 100%;\n}\n.TextArea-input-3bN::-webkit-input-placeholder {\n    color: #959595;\n    opacity: 1;\n}\n.TextArea-input-3bN::-moz-placeholder {\n    color: #959595;\n    opacity: 1;\n}\n.TextArea-input-3bN:-ms-input-placeholder {\n    color: #959595;\n    opacity: 1;\n}\n.TextArea-input-3bN::-ms-input-placeholder {\n    color: #959595;\n    opacity: 1;\n}\n.TextArea-input-3bN::placeholder {\n    color: #959595;\n    opacity: 1;\n}\n.TextArea-input-3bN.TextArea-unlabeled-1No {\n    margin-top: 21px;\n}\n.TextArea-input-3bN:hover {\n    border-color: #696969;\n}\n.TextArea-input-3bN:focus {\n    border-color: #0057ff;\n}\n.TextArea-error-2tZ .TextArea-input-3bN {\n    border-color: #d00;\n}\n.TextArea-input-3bN.TextArea-disabled-3a_ {\n    background: #e8e8e8;\n    color: #959595;\n}\n.TextArea-errorMessage-3vW {\n  color: #d00;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.TextArea-label-2md {\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 1.3;\n  cursor: pointer;\n  display: block;\n  font-weight: bold;\n}\n", "" ]), 
    t.locals = {
        input: "TextArea-input-3bN",
        unlabeled: "TextArea-unlabeled-1No",
        error: "TextArea-error-2tZ",
        disabled: "TextArea-disabled-3a_",
        errorMessage: "TextArea-errorMessage-3vW",
        label: "TextArea-label-2md"
    };
}, , , function(e, t, n) {
    e.exports = n(2)(123);
}, function(e, t, n) {
    "use strict";
    var o = n(218), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".OwnerRowNeue-link-1lv {\n  display: inline-block;\n  max-width: 200px;\n  white-space: nowrap;\n}\n.OwnerRowNeue-link-1lv:hover {\n    text-decoration: none;\n}\n.OwnerRowNeue-link-1lv:hover .OwnerRowNeue-name-2z2 {\n      text-decoration: underline;\n}\n.OwnerRowNeue-row-2Kz:not(:last-child) {\n  margin-bottom: 6px;\n}\n.OwnerRowNeue-name-2z2 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #191919;\n  display: inline-block;\n  max-width: calc(100% - 25px);\n  vertical-align: middle;\n}\n.OwnerRowNeue-imageWrap-3oR {\n  border-radius: 50%;\n  display: inline-block;\n  height: 18px;\n  margin-right: 7px;\n  overflow: hidden;\n  vertical-align: middle;\n  width: 18px;\n}\n.OwnerRowNeue-image-3xB {\n  width: 100%;\n}\n", "" ]), 
    t.locals = {
        link: "OwnerRowNeue-link-1lv",
        name: "OwnerRowNeue-name-2z2",
        row: "OwnerRowNeue-row-2Kz",
        imageWrap: "OwnerRowNeue-imageWrap-3oR",
        image: "OwnerRowNeue-image-3xB"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(219), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".OwnersNeue-root-3-b {\n  pointer-events: all;\n}\n.OwnersNeue-root-3-b.OwnersNeue-light-z2U .OwnersNeue-owner-3CC {\n  color: #fff;\n}\n.OwnersNeue-root-3-b.OwnersNeue-light-z2U .OwnersNeue-arrow-3Ak::after {\n  border-top-color: #fff;\n}\n.OwnersNeue-root-3-b.OwnersNeue-dark-1da .OwnersNeue-owner-3CC {\n  color: #191919;\n}\n.OwnersNeue-root-3-b.OwnersNeue-dark-1da .OwnersNeue-arrow-3Ak::after {\n  border-top-color: #191919;\n}\n.OwnersNeue-ownerImage-2kF {\n  cursor: pointer;\n  display: inline-block;\n  height: 20px;\n  margin-right: 5px;\n  -webkit-transition: -webkit-filter 0.1s linear;\n  transition: -webkit-filter 0.1s linear;\n  transition: filter 0.1s linear;\n  transition: filter 0.1s linear, -webkit-filter 0.1s linear;\n  vertical-align: top;\n  width: 20px;\n}\n.OwnersNeue-ownerAndAvatar-1W8:hover .OwnersNeue-ownerImage-2kF {\n  -webkit-filter: brightness(80%);\n          filter: brightness(80%);\n}\n.OwnersNeue-ownerAndAvatar-1W8:hover .OwnersNeue-owner-3CC {\n  text-decoration: underline;\n}\n.OwnersNeue-multipleOwnersText-3gi:hover {\n  text-decoration: underline;\n}\n.OwnersNeue-ownerImageEl-dtp {\n  border-radius: 50%;\n  width: 100%;\n}\n.OwnersNeue-overflowText-M69 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.OwnersNeue-owner-3CC {\n  color: inherit;\n  top: 1px;\n}\n.OwnersNeue-tooltipContainer-3aD {\n  display: inline-block;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n.OwnersNeue-arrow-3Ak {\n  padding-right: 12px;\n  position: relative;\n}\n.OwnersNeue-arrow-3Ak::after {\n    border: 4px solid transparent;\n    content: '';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0;\n    top: 7px;\n    width: 0;\n}\n.OwnersNeue-list-2Or {\n  max-height: 170px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n", "" ]), 
    t.locals = {
        root: "OwnersNeue-root-3-b",
        light: "OwnersNeue-light-z2U",
        owner: "OwnersNeue-owner-3CC",
        arrow: "OwnersNeue-arrow-3Ak",
        dark: "OwnersNeue-dark-1da",
        ownerImage: "OwnersNeue-ownerImage-2kF",
        ownerAndAvatar: "OwnersNeue-ownerAndAvatar-1W8",
        multipleOwnersText: "OwnersNeue-multipleOwnersText-3gi",
        ownerImageEl: "OwnersNeue-ownerImageEl-dtp",
        overflowText: "OwnersNeue-overflowText-M69",
        tooltipContainer: "OwnersNeue-tooltipContainer-3aD",
        list: "OwnersNeue-list-2Or"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(220), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Stats-stats-1iI {\n  -webkit-box-align: center;\n          align-items: center;\n  align-self: flex-end;\n  display: -webkit-box;\n  display: flex;\n  font-weight: bold;\n  margin-left: auto;\n  white-space: nowrap;\n}\n", "" ]), 
    t.locals = {
        stats: "Stats-stats-1iI"
    };
}, function(e, t, n) {
    e.exports = n(2)(106);
}, function(e, t, n) {
    e.exports = n(2)(77);
}, function(e, t, n) {
    "use strict";
    var o = n(373), r = n(53);
    var i = Object(r.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            class: [ "rf-icon", this.$style.root ],
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14.002 14"
            }
        }, [ t("path", {
            class: this.$style.path,
            attrs: {
                d: "M12.95,11.536h0v0A1.487,1.487,0,0,1,14,9V9a1.012,1.012,0,0,0,.221-.026,1,1,0,0,0-.02-1.953A.971.971,0,0,0,14,7h0a1.486,1.486,0,0,1-1.045-2.534l0,0a1,1,0,0,0-1.261-1.541,1.04,1.04,0,0,0-.156.128h0A1.486,1.486,0,0,1,9,2H9a1.017,1.017,0,0,0-.079-.387A1,1,0,0,0,8.023,1L8,1H8c-.021,0-.04,0-.06.006a.975.975,0,0,0-.934.928C7,1.956,7,1.977,7,2H7v.008A1.486,1.486,0,0,1,4.465,3.045l0,0a1.015,1.015,0,0,0-.329-.218A1,1,0,0,0,3.048,4.464h0A1.487,1.487,0,0,1,2,7V7a.933.933,0,0,0-.2.021,1,1,0,0,0-.781.808A.962.962,0,0,0,1,8a1,1,0,0,0,.256.663c.013.014.023.031.036.044s.034.027.05.041a1.091,1.091,0,0,0,.1.082l0,0A.994.994,0,0,0,2,9H2a1.486,1.486,0,0,1,1.045,2.534l0,0a1,1,0,0,0,1.418,1.414h0A1.487,1.487,0,0,1,7,14H7a1.015,1.015,0,0,0,.017.166c0,.01,0,.021,0,.031A1,1,0,0,0,8,15H8a1.017,1.017,0,0,0,.168-.017l.033,0A1,1,0,0,0,9,14H9a1.486,1.486,0,0,1,2.534-1.045l0,0a1,1,0,0,0,1.413-1.416ZM6.5,8A1.5,1.5,0,1,1,8,9.5,1.5,1.5,0,0,1,6.5,8Z",
                transform: "translate(-0.999 -1)"
            }
        }) ]);
    }, [], !1, function(e) {
        this.$style = o.default.locals || o.default;
    }, null, null);
    t.a = i.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 7.7 5.6"
            }
        }, [ t("path", {
            attrs: {
                d: "M7.5 3.1L5.1 5.5c-.1.1-.1.1-.3.1s-.2 0-.3-.1v-.3c0-.2 0-.2.1-.3l1.8-1.8h-6c-.1 0-.2 0-.3-.1S0 2.9 0 2.8s0-.2.1-.3.2-.1.3-.1h6L4.6.6c-.1 0-.1-.1-.1-.2s0-.2.1-.3c.1-.1.1-.1.2-.1s.2 0 .3.1l2.4 2.4.1.1v.2s0 .2-.1.3z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    e.exports = n(2)(60);
}, function(e, t, n) {
    e.exports = n(2)(176);
}, function(e, t, n) {
    e.exports = n(2)(182);
}, , function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
        return r;
    }), n.d(t, "a", function() {
        return i;
    }), n.d(t, "b", function() {
        return a;
    }), n.d(t, "d", function() {
        return s;
    }), n.d(t, "c", function() {
        return l;
    });
    var o = n(23);
    function r(e, t) {
        return void 0 === t && (t = "search"), e.search ? t + "_" + e.sort + "|" + e.search : t + "_" + e.sort;
    }
    function i(e, t) {
        void 0 === t && (t = o.a.PROJECTS);
        for (var n = {}, r = 0, i = o.j[t]; r < i.length; r++) {
            var a = i[r];
            e[a] && (n[a] = e[a]);
        }
        return n;
    }
    function a(e) {
        return Object.keys(e).filter(function(e) {
            return "search" !== e;
        }).reduce(function(t, n) {
            return "field" === n ? t.creative_fields = e[n] : t[n] = e[n], t;
        }, {});
    }
    var s = {
        makeAndModel: "exif_make",
        lens: "exif_lens",
        focalLength: "exif_focal_length",
        shutterSpeed: "exif_shutter_speed",
        aperture: "exif_aperture"
    }, l = {
        make_and_model: "exif_make",
        lens: "exif_lens",
        focal_length: "exif_focal_length",
        shutter_speed: "exif_shutter_speed",
        aperture: "exif_aperture"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(0), r = n(16), i = n(207), a = n.n(i), s = n(420), l = n.n(s), c = n(53), u = Object(c.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                x: "0px",
                y: "0px",
                viewBox: "0 0 11.92 17.66"
            }
        }, [ t("path", {
            attrs: {
                d: "M0,3.09l5.74,5.74L0,14.57l3.09,3.09l8.83-8.83L3.09,0L0,3.09z"
            }
        }) ]);
    }, [], !1, null, null, null).exports, p = r.default.extend({
        components: {
            Arrow: u
        },
        data: function() {
            return {
                mounted: !1,
                itemSpacing: 15,
                virtualizerBufferSize: 2,
                controlOffset: 0,
                itemTotalWidth: 0,
                itemWidth: 0,
                numItems: 0,
                scrollLeft: 0,
                scrollerWidth: 0,
                scrollerHeight: 0,
                containerWidth: 0,
                measuredItems: [],
                numSsrCards: 9,
                currentBreakpoint: {},
                throttledResetScroller: null
            };
        },
        props: {
            breakpoints: {
                type: Array,
                default: function() {
                    return [ {
                        documentWidth: 0,
                        itemMinWidth: 150
                    }, {
                        documentWidth: 1024,
                        itemMinWidth: 250
                    } ];
                }
            },
            items: {
                type: Array,
                required: !0
            },
            controlTargetClass: {
                type: String,
                default: "js-scroller-control-target"
            },
            responsiveTarget: {
                type: String,
                default: "document",
                validator: function(e) {
                    return [ "document", "container" ].includes(e);
                }
            },
            isSmoothScrollEnabled: {
                type: Boolean,
                default: !0
            },
            forceGrid: Boolean
        },
        watch: {
            items: function(e) {
                e.length && this.resetScroller({
                    force: !0
                });
            }
        },
        methods: {
            bindScroller: function() {
                var e = this;
                this.throttledResetScroller = a()(function() {
                    return e.resetScroller();
                }, 50), window.addEventListener("resize", this.throttledResetScroller), this.$refs.container.addEventListener("scroll", this.updateScrollData);
            },
            resetScroller: function(e) {
                var t = this, n = (void 0 === e ? {} : e).force;
                if (this.items.length) {
                    var r = this.$refs.container.offsetWidth;
                    if (n || r !== this.containerWidth) {
                        this.containerWidth = r;
                        var i = "container" === this.responsiveTarget ? this.containerWidth : document.body.clientWidth;
                        this.breakpoints.forEach(function(e) {
                            i > e.documentWidth && (t.currentBreakpoint = e);
                        });
                        var a = this.currentBreakpoint.itemMinWidth + this.itemSpacing, s = this.numItems = Math.floor((this.containerWidth + this.itemSpacing) / a);
                        this.itemWidth = Math.floor(this.containerWidth / s - this.itemSpacing + this.itemSpacing / s), 
                        this.itemTotalWidth = this.itemWidth + this.itemSpacing, this.scrollerWidth = this.itemTotalWidth * (this.items.length - 1) + this.itemWidth, 
                        this.measuredItems = this.items.map(function(e, n) {
                            return Object(o.__assign)(Object(o.__assign)({}, e), {
                                left: t.itemTotalWidth * n
                            });
                        }), this.$nextTick(function() {
                            t.firstItemEl && (t.scrollerHeight = t.maxItemHeight(), t.setControlOffset());
                        });
                    }
                }
            },
            getItemStyle: function(e) {
                if (this.mounted) return {
                    transform: "translate3d(" + e.left + "px, 0, 0)",
                    width: this.itemWidth + "px"
                };
            },
            setControlOffset: function() {
                if (this.firstItemEl) {
                    var e = this.firstItemEl.querySelector("." + this.controlTargetClass) || this.firstItemEl, t = e.offsetHeight, n = e.offsetTop;
                    this.controlOffset = Math.round(t / 2 - 20 + n);
                }
            },
            updateScrollData: function() {
                this.scrollLeft = this.$refs.container.scrollLeft;
            },
            prev: function() {
                var e = Math.round(this.scrollLeft / this.itemTotalWidth), t = Math.max(0, e * this.itemTotalWidth - this.containerWidth - this.itemSpacing);
                this.scrollToPosition(t);
            },
            next: function() {
                var e = Math.round((this.scrollLeft + this.containerWidth) / this.itemTotalWidth), t = Math.min(this.scrollerWidth - this.containerWidth, e * this.itemTotalWidth);
                this.scrollToPosition(t);
            },
            scrollToPosition: function(e) {
                var t = {
                    top: 0,
                    left: e
                };
                this.isSmoothScrollEnabled && (t.behavior = "smooth"), this.$refs.container.scroll(t);
            },
            maxItemHeight: function() {
                var e = this.$refs.items;
                if (e && e.length) {
                    for (var t = 0, n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.offsetHeight > t && (t = o.offsetHeight + 1);
                    }
                    return t;
                }
                return 0;
            }
        },
        computed: {
            firstItemEl: function() {
                var e = this.$refs.items;
                if (e && e.length) return e[0];
            },
            controlOffsetStyle: function() {
                if (this.controlOffset) return {
                    top: this.controlOffset + "px"
                };
            },
            renderedItems: function() {
                if (this.visibleItems.length && !this.forceGrid) return this.visibleItems;
                if (!this.items.length) return [];
                if (this.items.length < this.numSsrCards) {
                    var e = this.numSsrCards - this.items.length, t = Array(e).fill(void 0).map(function() {
                        return {
                            emptyPlaceholder: !0
                        };
                    });
                    return Object(o.__spreadArrays)(this.items, t);
                }
                return this.items.slice(0, this.numSsrCards);
            },
            visibleItems: function() {
                var e = Math.round(this.scrollLeft / this.itemTotalWidth), t = (this.scrollLeft + (this.containerWidth + this.itemSpacing)) / this.itemTotalWidth, n = Math.max(0, e - this.virtualizerBufferSize), o = Math.min(this.measuredItems.length, t + this.virtualizerBufferSize);
                return this.measuredItems.slice(n, o);
            },
            isAtBeginning: function() {
                return 0 === this.scrollLeft;
            },
            isAtEnd: function() {
                return Math.round(this.scrollLeft) >= Math.round(this.scrollerWidth - this.containerWidth);
            },
            scrollerStyle: function() {
                if (this.mounted) return {
                    width: this.scrollerWidth + "px",
                    height: this.scrollerHeight + "px"
                };
            }
        },
        mounted: function() {
            l.a.polyfill(), this.mounted = !0, this.resetScroller(), this.bindScroller();
        },
        beforeDestroy: function() {
            this.throttledResetScroller && window.removeEventListener("resize", this.throttledResetScroller), 
            this.$refs.container.removeEventListener("scroll", this.updateScrollData);
        }
    }), d = n(421);
    var f = Object(c.default)(p, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", {
            ref: "wrapper",
            class: [ t.$style.wrapper, "qa-scroller-container" ]
        }, [ o("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: !t.isAtBeginning,
                expression: "!isAtBeginning"
            } ],
            ref: "prevButton",
            class: [ t.$style.control, t.$style.prev ],
            style: t.controlOffsetStyle,
            on: {
                click: t.prev
            }
        }, [ o("Arrow", {
            class: t.$style.arrow
        }) ], 1), o("div", {
            ref: "container",
            staticClass: "qa-scroller-row",
            class: t.$style.container
        }, [ t.renderedItems.length ? o("div", {
            ref: "scroller",
            class: (e = {}, e[t.$style.grid] = !t.mounted, e),
            style: t.scrollerStyle
        }, t._l(t.renderedItems, function(e, n) {
            var r;
            return o("div", {
                key: "scroller-item-" + n,
                ref: "items",
                refInFor: !0,
                class: (r = {}, r[t.$style.item] = t.mounted, r),
                style: t.getItemStyle(e)
            }, [ t._t("item", null, {
                item: e
            }) ], 2);
        }), 0) : t._e() ]), o("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: !t.isAtEnd,
                expression: "!isAtEnd"
            } ],
            ref: "nextButton",
            class: [ t.$style.control, t.$style.next ],
            style: t.controlOffsetStyle,
            on: {
                click: t.next
            }
        }, [ o("Arrow", {
            class: t.$style.arrow
        }) ], 1) ]);
    }, [], !1, function(e) {
        this.$style = d.default.locals || d.default;
    }, null, null);
    t.a = f.exports;
}, , function(e, t, n) {
    var o = n(647);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("65467b68", o, !0, {});
}, function(e, t, n) {
    var o = n(649);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("38441f44", o, !0, {});
}, function(e, t, n) {
    "use strict";
    var o = n(233), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".PrivacyLockTooltip-lockWrapper-332,\n.PrivacyLockTooltip-privacyLock-2N3 {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 5px;\n  height: 32px;\n  margin-left: 8px;\n  padding: 1px 9px;\n  width: 33px;\n}\n.PrivacyLockTooltip-lockWrapper-332 {\n  -webkit-box-align: center;\n          align-items: center;\n  background: rgba(25, 25, 25, 0.7);\n  border: 0;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  height: 22px;\n  padding: 1px 7px;\n  text-transform: uppercase;\n  width: auto;\n}\n.PrivacyLockTooltip-lockWrapper-332 .PrivacyLockTooltip-lock-2Uh {\n    fill: #fff;\n    margin-right: 5px;\n    width: 12px;\n}\n.PrivacyLockTooltip-privacyTooltip-3o7 {\n  max-width: 200px;\n  min-width: 180px;\n}\n", "" ]), 
    t.locals = {
        lockWrapper: "PrivacyLockTooltip-lockWrapper-332",
        privacyLock: "PrivacyLockTooltip-privacyLock-2N3",
        lock: "PrivacyLockTooltip-lock-2Uh",
        privacyTooltip: "PrivacyLockTooltip-privacyTooltip-3o7"
    };
}, function(e, t, n) {
    e.exports = n(2)(71);
}, function(e, t, n) {
    "use strict";
    var o = n(234), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Gear-root-59Y {\n  fill: #191919;\n}\n.Gear-path-1nA {\n  fill: inherit;\n}\n", "" ]), 
    t.locals = {
        root: "Gear-root-59Y",
        path: "Gear-path-1nA"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(235), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".GearDropdown-cogContainer-1Bu {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 30px;\n  display: -webkit-box;\n  display: flex;\n  padding: 7px 14px;\n}\n.GearDropdown-cogAndArrow-2aW {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.GearDropdown-cog-18f {\n  height: 16px;\n  width: 16px;\n}\n.GearDropdown-downArrow-2pd {\n  border: 4px solid transparent;\n  border-top-color: #191919;\n  height: 0;\n  margin-left: 7px;\n  position: relative;\n  top: 2px;\n  width: 4px;\n}\n.GearDropdown-dropdown-I6B {\n  min-width: 150px;\n}\n", "" ]), 
    t.locals = {
        cogContainer: "GearDropdown-cogContainer-1Bu",
        cogAndArrow: "GearDropdown-cogAndArrow-2aW",
        cog: "GearDropdown-cog-18f",
        downArrow: "GearDropdown-downArrow-2pd",
        dropdown: "GearDropdown-dropdown-I6B"
    };
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--badge" xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12"><path d="M0 0h9v12L4.5 9.3 0 12"/></svg>'), 
            o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--badge" xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12"><path d="M0 0h9v12L4.5 9.3 0 12"/></svg>', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--clone" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V0H0zm10 14.994H1.006v-9h3v6H10v3zm5-5H6.006V1H15v8.994z"/><path d="M4.006 5.994h-3v9H10v-3H4.006"/><path d="M6.006 9.994H15V1H6.006v8.994zM7.5 4.5h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2z"/><path fill="none" d="M9.5 8.5h2v-2h2v-2h-2v-2h-2v2h-2v2h2"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--clone" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V0H0zm10 14.994H1.006v-9h3v6H10v3zm5-5H6.006V1H15v8.994z"/><path d="M4.006 5.994h-3v9H10v-3H4.006"/><path d="M6.006 9.994H15V1H6.006v8.994zM7.5 4.5h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2z"/><path fill="none" d="M9.5 8.5h2v-2h2v-2h-2v-2h-2v2h-2v2h2"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--edit" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M1 12l7.375-7.375 3 3L4 15H1v-3zm8.875-8.875L12 1l3 3-2.125 2.125-3-3zM0 16h16V0H0v16z" fill="none"/><path d="M15 4l-2.125 2.125-3-3L12 1zM8.375 4.625L1 12v3h3l7.375-7.375"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--edit" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M1 12l7.375-7.375 3 3L4 15H1v-3zm8.875-8.875L12 1l3 3-2.125 2.125-3-3zM0 16h16V0H0v16z" fill="none"/><path d="M15 4l-2.125 2.125-3-3L12 1zM8.375 4.625L1 12v3h3l7.375-7.375"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10" height="10" width="15"><path d="M0 8h15v2H0zM0 4h15v2H0zM0 0h15v2H0z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10" height="10" width="15"><path d="M0 8h15v2H0zM0 4h15v2H0zM0 0h15v2H0z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--lock-private" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V0H0zm14 15H2V7h2V5c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v8z"/><path fill="none" d="M8 3c-1.104 0-2 .895-2 2v2h4V5c0-1.105-.896-2-2-2z"/><path d="M12 5c0-2.21-1.79-4-4-4S4 2.79 4 5v2H2v8h12V7h-2V5zm-2 2H6V5c0-1.105.896-2 2-2s2 .895 2 2v2z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--lock-private" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V0H0zm14 15H2V7h2V5c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v8z"/><path fill="none" d="M8 3c-1.104 0-2 .895-2 2v2h4V5c0-1.105-.896-2-2-2z"/><path d="M12 5c0-2.21-1.79-4-4-4S4 2.79 4 5v2H2v8h12V7h-2V5zm-2 2H6V5c0-1.105.896-2 2-2s2 .895 2 2v2z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--share" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V0H0zm7 8c0 .125-.01.247-.024.367l2.942 1.468c.54-.52 1.273-.843 2.082-.843 1.658 0 3 1.342 3 3s-1.342 3-3 3c-1.654 0-3-1.345-3-3 0-.124.01-.247.025-.366l-2.943-1.468C5.542 10.678 4.81 11 4 11 2.343 11 .997 9.658.997 8c0-1.656 1.347-3 3-3 .81 0 1.543.32 2.082.84l2.945-1.47C9.01 4.247 9 4.124 9 4 9 2.342 10.348.997 12.002.997c1.66 0 3.002 1.345 3.002 3C15.004 5.66 13.662 7 12.002 7c-.81 0-1.54-.32-2.082-.842L6.975 7.63C6.99 7.752 7 7.875 7 8z"/><path d="M12.002 7c1.66 0 3.002-1.343 3.002-3S13.662.997 12.002.997C10.348.998 9 2.343 9 3.998c0 .126.01.25.025.37L6.08 5.842C5.54 5.32 4.808 5 4 5 2.343 5 .996 6.344.996 8c0 1.658 1.347 3 3 3 .812 0 1.545-.322 2.085-.843l2.943 1.468c-.015.12-.025.242-.025.365 0 1.656 1.346 3 3 3 1.658 0 3-1.344 3-3s-1.342-3-3-3c-.81 0-1.54.324-2.082.844L6.976 8.367C6.99 8.247 7 8.125 7 8s-.01-.248-.025-.37L9.92 6.158c.54.52 1.273.842 2.082.842z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--share" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V0H0zm7 8c0 .125-.01.247-.024.367l2.942 1.468c.54-.52 1.273-.843 2.082-.843 1.658 0 3 1.342 3 3s-1.342 3-3 3c-1.654 0-3-1.345-3-3 0-.124.01-.247.025-.366l-2.943-1.468C5.542 10.678 4.81 11 4 11 2.343 11 .997 9.658.997 8c0-1.656 1.347-3 3-3 .81 0 1.543.32 2.082.84l2.945-1.47C9.01 4.247 9 4.124 9 4 9 2.342 10.348.997 12.002.997c1.66 0 3.002 1.345 3.002 3C15.004 5.66 13.662 7 12.002 7c-.81 0-1.54-.32-2.082-.842L6.975 7.63C6.99 7.752 7 7.875 7 8z"/><path d="M12.002 7c1.66 0 3.002-1.343 3.002-3S13.662.997 12.002.997C10.348.998 9 2.343 9 3.998c0 .126.01.25.025.37L6.08 5.842C5.54 5.32 4.808 5 4 5 2.343 5 .996 6.344.996 8c0 1.658 1.347 3 3 3 .812 0 1.545-.322 2.085-.843l2.943 1.468c-.015.12-.025.242-.025.365 0 1.656 1.346 3 3 3 1.658 0 3-1.344 3-3s-1.342-3-3-3c-.81 0-1.54.324-2.082.844L6.976 8.367C6.99 8.247 7 8.125 7 8s-.01-.248-.025-.37L9.92 6.158c.54.52 1.273.842 2.082.842z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--trash" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h3V5.994h10v10h-1V16h4V0H0zm13 2.995v1H3v-2h3v-1h4v1h3v1z"/><path fill="#FFF" d="M3.77 16H4"/><path d="M13 15.994v-10H3V16l9-.005M10 .995H6v1H3v2h10v-2h-3"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--trash" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h3V5.994h10v10h-1V16h4V0H0zm13 2.995v1H3v-2h3v-1h4v1h3v1z"/><path fill="#FFF" d="M3.77 16H4"/><path d="M13 15.994v-10H3V16l9-.005M10 .995H6v1H3v2h10v-2h-3"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--unpublish" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h8.023l-3.5-5h2.002V7h3v4h2l-3.502 5H16V0H0zm15.025 5h-14V2h14v3z"/><path d="M1.025 2h14v3h-14zM9.525 11V7h-3v4h-2l3.498 5 3.502-5"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--unpublish" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h8.023l-3.5-5h2.002V7h3v4h2l-3.502 5H16V0H0zm15.025 5h-14V2h14v3z"/><path d="M1.025 2h14v3h-14zM9.525 11V7h-3v4h-2l3.498 5 3.502-5"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(236), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".DominantColor-colorFallback-2Sh {\n  height: 50px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(-25px, -25px);\n          transform: translate(-25px, -25px);\n  width: 50px;\n}\n.DominantColor-fallbackIconPath-qvI {\n  fill: #e8e8e8;\n}\n.DominantColor-dominantColor-2PM {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n", "" ]), 
    t.locals = {
        colorFallback: "DominantColor-colorFallback-2Sh",
        fallbackIconPath: "DominantColor-fallbackIconPath-qvI",
        dominantColor: "DominantColor-dominantColor-2PM"
    };
}, , , , , , , , , , , , , , , , function(e, t, n) {
    var o = n(692);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("660badbc", o, !0, {});
}, , function(e, t, n) {
    var o = n(722);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("dfba8164", o, !0, {});
}, , function(e, t, n) {
    "use strict";
    n(70);
    var o = n(298), r = n(340), i = {
        components: {
            OwnersNeue: o.a,
            Title: r.a
        },
        props: {
            url: String,
            title: String,
            owners: Array,
            isSmall: Boolean,
            isMedium: Boolean,
            shouldOpenProjectPopupOnClick: Boolean,
            isFeatured: Boolean,
            limitHeight: Boolean,
            trackingSource: String,
            theme: {
                type: String,
                default: "light",
                validator: function(e) {
                    return [ "light", "dark" ].includes(e);
                }
            },
            hasShadowText: {
                type: Boolean,
                default: !0
            },
            shouldRemoveMultiOwnerTooltip: {
                type: Boolean,
                default: !1
            }
        }
    }, a = n(437), s = n(53);
    var l = Object(s.default)(i, function() {
        var e, t, n, o, r, i = this, a = i.$createElement, s = i._self._c || a;
        return s("span", {
            ref: "root",
            class: [ (e = {}, e[i.$style.limitHeight] = i.limitHeight, e) ]
        }, [ s("Title", {
            ref: "title",
            class: i.$style.title,
            attrs: {
                "data-ut": "title",
                url: i.url,
                isSmall: i.isSmall,
                isMedium: i.isMedium,
                shouldOpenProjectPopupOnClick: i.shouldOpenProjectPopupOnClick,
                isFeatured: i.isFeatured,
                hasShadow: i.hasShadowText
            },
            on: {
                focus: function(e) {
                    return i.$emit("elOnFocus");
                },
                blur: function(e) {
                    return i.$emit("elOnBlur");
                }
            }
        }, [ i._v(i._s(i.title)) ]), s("OwnersNeue", {
            ref: "owners",
            class: [ i.$style.owner, (t = {}, t[i.$style.smallOwner] = i.isSmall, t), (n = {}, 
            n[i.$style.mediumOwner] = i.isMedium, n) ],
            attrs: {
                "data-ut": "owners",
                owners: i.owners,
                ownerTextClass: [ (o = {}, o[i.$style.shadowText] = i.hasShadowText, o), (r = {}, 
                r[i.$style.smallOwnerArrow] = i.isSmall, r) ],
                theme: i.theme,
                shouldRemoveMultiOwnerTooltip: i.shouldRemoveMultiOwnerTooltip,
                trackingSource: i.trackingSource
            },
            on: {
                ownerOnFocus: function(e) {
                    return i.$emit("elOnFocus");
                },
                ownerOnBlur: function(e) {
                    return i.$emit("elOnBlur");
                },
                tooltipOnFocus: function(e) {
                    return i.$emit("elOnFocus");
                },
                tooltipOnBlur: function(e) {
                    return i.$emit("elOnBlur");
                }
            }
        }) ], 1);
    }, [], !1, function(e) {
        this.$style = a.default.locals || a.default;
    }, null, null);
    t.a = l.exports;
}, function(e, t, n) {
    e.exports = n(2)(317);
}, function(e, t, n) {
    e.exports = n(2)(338);
}, function(e, t, n) {
    e.exports = n(2)(343);
}, function(e, t, n) {
    e.exports = n(2)(177);
}, function(e, t, n) {
    e.exports = n(2)(319);
}, , function(e, t, n) {
    e.exports = n(2)(268);
}, , , function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "5673 839.716 15.931 11.285"
            }
        }, [ t("g", [ t("path", {
            attrs: {
                d: "M5680.86 846.605a.18.18 0 0 0 .21 0l7.86-5.764v-.46a.7.7 0 0 0-.724-.662h-14.482a.7.7 0 0 0-.724.663v.46z"
            }
        }), t("path", {
            attrs: {
                d: "M5688.93 842.426l-4.378 3.21 4.38 2.41z"
            }
        }), t("path", {
            attrs: {
                d: "M5683.428 846.46l-1.514 1.11a1.663 1.663 0 0 1-1.9 0l-1.514-1.116-5.5 3.032v.85a.7.7 0 0 0 .724.665h14.482a.7.7 0 0 0 .724-.663v-.85z"
            }
        }), t("path", {
            attrs: {
                d: "M5677.372 845.63l-4.372-3.205v5.618z"
            }
        }) ]) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(249), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, "@-webkit-keyframes Cover-fadeIn-3AZ {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes Cover-fadeIn-3AZ {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.Cover-searchLoadingPlaceholder-3yS {\n  -webkit-animation: Cover-fadeIn-3AZ ease-in 1;\n          animation: Cover-fadeIn-3AZ ease-in 1;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-color: #ccc;\n  border-radius: 3px;\n  opacity: 0;\n  overflow: hidden;\n  position: relative;\n}\n.Cover-cover-2mr {\n  position: relative;\n}\n.Cover-content-2R2 {\n  border-radius: 4px;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.Cover-overlay-28e {\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.Cover-showOnHover-Ks- {\n  opacity: 0;\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  will-change: opacity;\n}\n.Cover-focused-1tt .Cover-showOnHover-Ks-,\n  .Cover-cover-2mr:hover .Cover-showOnHover-Ks- {\n    opacity: 1;\n}\n.Cover-showOnHover-Ks-.Cover-transitionDone-22y {\n    will-change: auto;\n}\n@media (hover: none) {\n.Cover-showOnHover-Ks- {\n      opacity: 1;\n}\n}\n.Cover-wrapper-300:not(.Cover-noConstraints-PzQ) {\n  height: 0;\n}\n.Cover-wrapper-300 {\n  border-radius: 4px;\n  display: block;\n  padding-top: 78.22%;\n  position: relative;\n  width: 100%;\n}\n.Cover-wrapper-300[tabindex]::before {\n    bottom: -10px;\n    left: -10px;\n    right: -10px;\n    top: -10px;\n}\n", "" ]), 
    t.locals = {
        searchLoadingPlaceholder: "Cover-searchLoadingPlaceholder-3yS",
        fadeIn: "Cover-fadeIn-3AZ",
        cover: "Cover-cover-2mr",
        content: "Cover-content-2R2",
        overlay: "Cover-overlay-28e",
        showOnHover: "Cover-showOnHover-Ks-",
        focused: "Cover-focused-1tt",
        transitionDone: "Cover-transitionDone-22y",
        wrapper: "Cover-wrapper-300",
        noConstraints: "Cover-noConstraints-PzQ"
    };
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<span class="rf-icon rf-icon--arrow-font-right">&rarr;</span>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<span class="rf-icon rf-icon--arrow-font-right">&rarr;</span>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, , function(e, t, n) {
    "use strict";
    var o = n(251), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Scroller-wrapper-3Mz {\n  position: relative;\n}\n.Scroller-container-2D4 {\n  -ms-overflow-style: none;\n  /* stylelint-disable */\n  scrollbar-width: none;\n  /* stylelint-enable */\n  overflow-x: scroll;\n  overflow-y: hidden;\n  position: relative;\n}\n.Scroller-container-2D4::-webkit-scrollbar {\n    height: 0;\n    width: 0;\n}\n.Scroller-grid-1FC {\n  display: grid;\n  grid-column-gap: 15px;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-template-rows: 1fr repeat(50, 0);\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n.Scroller-grid-1FC {\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n}\n.Scroller-item-3-t {\n  display: inline-block;\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n.Scroller-control-_TU {\n  background: #fff;\n  border-radius: 100px;\n  box-shadow: 0 3px 6px rgba(25, 25, 25, 0.16);\n  cursor: pointer;\n  height: 40px;\n  position: absolute;\n  width: 40px;\n  z-index: 2;\n}\n.Scroller-control-_TU svg {\n    fill: #959595;\n    height: 16px;\n    left: 16px;\n    position: absolute;\n    top: 12px;\n    width: 10px;\n}\n.Scroller-control-_TU.Scroller-prev-ldC {\n    left: -20px;\n}\n.Scroller-control-_TU.Scroller-prev-ldC svg {\n      left: auto;\n      right: 16px;\n      -webkit-transform: scaleX(-1);\n              transform: scaleX(-1);\n}\n.Scroller-control-_TU.Scroller-next-1oI {\n    right: -20px;\n}\n.Scroller-control-_TU:hover {\n    background: #f1f1f1;\n}\n.Scroller-control-_TU:hover .Scroller-arrow-3D0 {\n      fill: #191919;\n}\n.Scroller-control-_TU:active {\n    background: #e4e4e4;\n}\n.Scroller-control-_TU:active .Scroller-arrow-3D0 {\n      fill: #191919;\n}\n", "" ]), 
    t.locals = {
        wrapper: "Scroller-wrapper-3Mz",
        container: "Scroller-container-2D4",
        grid: "Scroller-grid-1FC",
        item: "Scroller-item-3-t",
        control: "Scroller-control-_TU",
        prev: "Scroller-prev-ldC",
        next: "Scroller-next-1oI",
        arrow: "Scroller-arrow-3D0"
    };
}, function(e, t, n) {
    e.exports = n(2)(135);
}, function(e, t, n) {
    "use strict";
    n(17), n(18), n(20), n(24), n(25), n(22), n(21);
    var o = n(84), r = n.n(o), i = n(189), a = n(182), s = n(16).default.extend({
        props: {
            id: String,
            name: String
        }
    }), l = n(431), c = n(53);
    var u = Object(c.default)(s, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.$style.container
        }, [ n("input", {
            ref: "input",
            class: e.$style.radio,
            attrs: {
                type: "radio",
                id: e.id,
                name: e.name
            },
            on: {
                change: function(t) {
                    return e.$emit("change", t.target.checked);
                }
            }
        }), n("label", {
            ref: "label",
            class: e.$style.label,
            attrs: {
                for: e.id
            }
        }, [ e._t("default") ], 2) ]);
    }, [], !1, function(e) {
        this.$style = l.default.locals || l.default;
    }, null, null).exports, p = n(238), d = n(313), f = n(183), b = Object(c.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }
        }, [ t("path", {
            attrs: {
                fill: "none",
                d: "M-.001 0v16h16V0h-16zm6.49 12.975l-5.015-5 2-2 3 3.001 6.5-6.501 2 2.017-8.485 8.483z"
            }
        }), t("path", {
            attrs: {
                d: "M6.475 8.976l-3-3.001-2 2 5.014 5 8.486-8.484-2-2.016z"
            }
        }) ]);
    }, [], !1, null, null, null).exports, h = n(302), m = n(14), g = n(49);
    function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var _ = {
        components: {
            Modal: i.a,
            Btn: a.a,
            TextAreaComponent: d.a,
            Check: b,
            Radio: u,
            Select: p.a,
            Tooltip: f.a,
            InfoIcon: h.a
        },
        props: {
            isShown: {
                type: Boolean,
                required: !0
            },
            headerText: {
                type: String
            },
            isNewReportSystem: Boolean,
            shouldShowAboveLightbox: Boolean
        },
        watch: {
            isShown: function() {
                this.oldSelectedReason = 0;
            }
        },
        data: function() {
            return {
                selectedReasonIndex: null,
                selectedReasonId: null,
                hasCustomMessage: "",
                customMessage: "",
                hasSubCategory: !1,
                subCategory: null,
                componentId: r()(),
                copyrightViolationCode: 10,
                checklistItems: [],
                oldSelectedReason: 0,
                selectedReasonData: {},
                message: ""
            };
        },
        computed: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach(function(t) {
                    w(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(g.mapState)([ "config" ]), {
            isSendDisabled: function() {
                return this.isNewReportSystem ? void 0 === this.selectedReasonId || this.hasSubCategory && !this.subCategory || this.hasCustomMessage && !this.customMessage : 0 === this.oldSelectedReason || this.oldSelectedReason === this.copyrightViolationCode;
            },
            modalHeaderText: function() {
                return this.headerText || this.$translate("report_modal_header", "Report");
            },
            items: function() {
                return this.config && this.config.spam && this.config.spam.spam_reasons || [];
            }
        }),
        created: function() {
            this.checklistItems = [ {
                label: this.$translate("stories_report_segment_reason_spam", "Contains spam"),
                code: 18
            }, {
                label: this.$translate("stories_report_segment_reason_copyright_violation", "Contains a copyright violation"),
                code: 10
            }, {
                label: this.$translate("stories_report_segment_reason_trademark_violation", "Contains a trademark violation"),
                code: 14
            }, {
                label: this.$translate("stories_report_segment_reason_offensive", "Contains offensive materials"),
                code: 12
            }, {
                label: this.$translate("stories_report_segment_reason_adult", "Contains adult content"),
                code: 15
            }, {
                label: this.$translate("stories_report_segment_reason_privacy", "Invades my privacy"),
                code: 16
            } ];
        },
        methods: {
            report: function() {
                if (this.isNewReportSystem) {
                    var e;
                    (null === (e = this.subCategory) || void 0 === e ? void 0 : e.redirect) ? m.default.open(this.subCategory.redirect, "_blank") : this.$emit("newSystemConfirm", {
                        reason: this.selectedReasonId || this.subCategory.id,
                        message: this.customMessage || null
                    });
                } else {
                    var t = {
                        reason: this.oldSelectedReason,
                        message: this.message
                    };
                    this.$emit("confirm", t);
                }
            },
            resetForm: function() {
                this.isNewReportSystem && this.selectedReasonIndex && (this.$refs.radios[this.selectedReasonIndex].$el.querySelector("input").checked = !1, 
                this.selectedReasonIndex = null, this.selectedReasonId = null, this.hasCustomMessage = "", 
                this.customMessage = "", this.hasSubCategory = !1, this.subCategory = null);
            },
            closeModal: function() {
                this.resetForm(), this.$emit("close");
            },
            selectedReasonChanged: function(e, t) {
                this.selectedReasonIndex = e, this.selectedReasonId = t.has_multi_reasons ? 0 : t.reasons[0].id, 
                this.hasSubCategory = t.has_multi_reasons, this.subCategory = null, this.hasCustomMessage = t.has_custom_message, 
                this.customMessage = "";
            },
            handleChecklistChange: function(e) {
                e === this.copyrightViolationCode && m.default.open("http://www.adobe.com/legal/dmca.html", "_blank");
            },
            inputId: function(e) {
                return this.componentId + "_" + e;
            }
        },
        mounted: function() {
            this.$emit("mounted");
        }
    }, y = n(433);
    var j = Object(c.default)(_, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", [ o("Modal", t._b({
            ref: "reportModal",
            class: [ (e = {}, e[t.$style.modalAboveLightbox] = t.shouldShowAboveLightbox, e), "qa-report-modal" ],
            attrs: {
                "data-ut": "report-modal",
                showModal: t.isShown,
                modalTitle: t.modalHeaderText,
                contentStyle: {
                    minWidth: "380px",
                    width: "380px"
                }
            },
            on: {
                closeModal: t.closeModal
            }
        }, "Modal", t.$attrs, !1), [ o("form", {
            class: t.$style.form
        }, [ o("div", {
            ref: "headerText",
            class: t.$style.modalHeader
        }, [ t._v(t._s(t.modalHeaderText)) ]), t.isNewReportSystem ? o("div", {
            class: t.$style.disclaimer,
            domProps: {
                innerHTML: t._s(t.$translate("livestream_report_modal_description", "Please review our <a target='_blank' href='/misc/community'>Community Guidelines</a> for additional information about what is and isn't permitted on Behance."))
            }
        }) : t._e(), t.isNewReportSystem ? o("div", {
            class: t.$style.sections
        }, t._l(t.items, function(e, n) {
            return o("div", {
                key: "report-reason-" + n,
                ref: "sections",
                refInFor: !0,
                class: t.$style.section
            }, [ o("div", {
                class: t.$style.radioWrapper
            }, [ o("Radio", {
                ref: "radios",
                refInFor: !0,
                attrs: {
                    name: "report-modal",
                    id: "report-reason-" + n
                },
                on: {
                    change: function(o) {
                        return t.selectedReasonChanged(n, e);
                    }
                }
            }, [ t._v(t._s(e.title)) ]), o("Tooltip", {
                class: t.$style.tooltipWrapper,
                attrs: {
                    position: "right",
                    triangleDistance: 2,
                    distance: 10,
                    isResponsive: !0,
                    "data-ut": "info-tooltip"
                }
            }, [ o("InfoIcon", {
                class: t.$style.infoIcon
            }), o("p", {
                class: t.$style.tooltipContent,
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ t._v(t._s(e.tooltip)) ]) ], 1) ], 1), t.selectedReasonIndex === n ? [ e.has_multi_reasons ? o("Select", {
                ref: "select",
                refInFor: !0,
                class: t.$style.select,
                attrs: {
                    options: e.reasons,
                    optionsLabel: "title",
                    placeholder: t.$translate("report_select_one", "Select one")
                },
                model: {
                    value: t.subCategory,
                    callback: function(e) {
                        t.subCategory = e;
                    },
                    expression: "subCategory"
                }
            }) : t._e(), e.has_custom_message ? o("TextAreaComponent", {
                ref: "textarea",
                refInFor: !0,
                class: t.$style.textarea,
                attrs: {
                    placeholder: t.$translate("stories_report_additiona_details", "Provide additional details"),
                    width: 75
                },
                on: {
                    input: function(e) {
                        t.customMessage = e;
                    }
                }
            }) : t._e() ] : t._e() ], 2);
        }), 0) : [ o("ul", {
            class: t.$style.checkboxList
        }, t._l(t.checklistItems, function(e, n) {
            var r;
            return o("li", {
                key: n,
                class: [ t.$style.checkboxListItem, (r = {}, r[t.$style.checked] = e.code === t.oldSelectedReason, 
                r) ]
            }, [ o("span", {
                class: t.$style.checkmarkIcon
            }, [ o("Check", {
                class: t.$style.checkmarkIconSvg
            }) ], 1), o("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.oldSelectedReason,
                    expression: "oldSelectedReason"
                } ],
                ref: "input",
                refInFor: !0,
                class: [ t.$style.checkbox, "qa-report-checkbox-item-" + n ],
                attrs: {
                    "aria-labelledby": t.inputId(n),
                    id: t.inputId(n),
                    type: "radio"
                },
                domProps: {
                    value: e.code,
                    checked: t._q(t.oldSelectedReason, e.code)
                },
                on: {
                    change: [ function(n) {
                        t.oldSelectedReason = e.code;
                    }, function(n) {
                        return t.handleChecklistChange(e.code);
                    } ]
                }
            }), o("span", {
                class: t.$style.checkboxLabelContainer
            }, [ o("label", {
                ref: "label",
                refInFor: !0,
                class: t.$style.checkboxLabel,
                attrs: {
                    for: t.inputId(n)
                }
            }, [ t._v(t._s(e.label)) ]) ]) ]);
        }), 0), o("TextAreaComponent", {
            ref: "textarea",
            class: t.$style.textarea,
            attrs: {
                placeholder: t.$translate("stories_report_modal_header", "Comments..."),
                width: 75
            },
            on: {
                input: function(e) {
                    t.message = e;
                }
            }
        }) ], o("div", {
            class: t.$style.formControls
        }, [ o("Btn", {
            ref: "send",
            staticClass: "qa-report-modal-confirm",
            attrs: {
                "data-ut": "report-modal-send",
                type: "primary",
                disabled: t.isSendDisabled
            },
            on: {
                click: t.report
            }
        }, [ t._v(t._s(t.$translate("stories_send", "Send"))) ]), o("Btn", {
            ref: "cancel",
            attrs: {
                type: "ghost"
            },
            on: {
                click: t.closeModal
            }
        }, [ t._v(t._s(t.$translate("stories_cancel", "Cancel"))) ]) ], 1) ], 2) ]) ], 1);
    }, [], !1, function(e) {
        this.$style = y.default.locals || y.default;
    }, null, null);
    t.a = j.exports;
}, , , , function(e, t, n) {
    "use strict";
    n(126);
    var o = n(183), r = n(26), i = {
        name: "Feature",
        components: {
            Tooltip: o.a
        },
        props: {
            tooltipAlignment: {
                type: String
            },
            url: {
                type: String
            },
            featuredDate: {
                type: [ Number, String ]
            },
            site: {
                type: Object
            },
            numProjects: {
                type: Number
            },
            slug: {
                type: String
            },
            index: {
                type: Number
            },
            shouldForceDisplayRibbons: {
                type: Boolean
            }
        },
        computed: {
            assetUrl: function() {
                var e = this.$store.state.gates.adobe_rebrand ? "ribbons_updated" : "ribbons";
                return r.ASSETS_URL + "img/shared_icons/svg/" + e;
            },
            canTransitionWithDelay: function() {
                return null !== this.index && this.index >= 0;
            },
            timestamp: function() {
                if ("string" == typeof this.featuredDate) return this.featuredDate;
                var e = new Date(1e3 * this.featuredDate);
                return e.toLocaleDateString();
            },
            imgSrc: function() {
                return this.slug ? this.assetUrl + "/" + this.slug + ".svg" : this.assetUrl + "/" + this.site.ribbon.image;
            },
            imgSrcSet: function() {
                if (!this.slug) return this.site.ribbon.image + ", " + this.site.ribbon.image_2x + " 2x";
            }
        }
    }, a = n(536), s = n(53);
    var l = Object(s.default)(i, function() {
        var e, t, n = this, o = n.$createElement, r = n._self._c || o;
        return r("div", {
            ref: "root",
            class: [ n.$style.ribbonContainer, (e = {}, e[n.$style.forceDisplayRibbons] = n.shouldForceDisplayRibbons, 
            e) ]
        }, [ r("Tooltip", {
            ref: "tooltip",
            attrs: {
                alignment: n.tooltipAlignment,
                isResponsive: !0,
                position: "bottom",
                triangleDistance: 6,
                distance: 0
            },
            on: {
                didOpen: function(e) {
                    return n.$emit("featureTooltipOpen");
                },
                didClose: function(e) {
                    return n.$emit("featureTooltipClosed");
                }
            }
        }, [ r("a", {
            ref: "ribbon",
            class: [ "rf-ribbon", n.$style.ribbon ],
            attrs: {
                href: n.url
            }
        }, [ r("img", {
            ref: "ribbonImg",
            class: [ "rf-ribbon__image", n.$style.ribbonImage, (t = {}, t[n.$style.ribbonImageDelay] = n.canTransitionWithDelay, 
            t) ],
            attrs: {
                src: n.imgSrc,
                srcset: n.imgSrcSet,
                title: n.site.title,
                "data-transition-delay-index": n.canTransitionWithDelay && n.index
            }
        }) ]), n.numProjects ? r("div", {
            ref: "numProjects",
            class: n.$style.numProjects
        }, [ n._v(n._s(n.numProjects)) ]) : n._e(), r("div", {
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ r("div", {
            class: [ "rf-feature__header", n.$style.featureHeader ]
        }, [ n._v(n._s(n.$translate("featured_in", "Featured In"))) ]), r("div", {
            class: [ "rf-feature__info", n.$style.featureInfo ]
        }, [ r("a", {
            ref: "link",
            class: [ "rf-feature__link" ],
            attrs: {
                href: n.url
            }
        }, [ n._v(n._s(n.site.name)) ]), n.featuredDate ? r("span", {
            ref: "featuredDate"
        }, [ n._v(" — "), r("time", {
            ref: "timestamp",
            class: [ "rf-feature__date" ],
            attrs: {
                datetime: n.timestamp
            }
        }, [ n._v(n._s(n.timestamp)) ]) ]) : n._e() ]) ]) ]) ], 1);
    }, [], !1, function(e) {
        this.$style = a.default.locals || a.default;
    }, null, null);
    t.a = l.exports;
}, , , function(e, t, n) {
    "use strict";
    var o = n(258), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Radio-container-j0H .Radio-radio-3Hv:checked,\n.Radio-container-j0H .Radio-radio-3Hv:not(:checked) {\n  left: -9999px;\n  position: absolute;\n}\n.Radio-container-j0H .Radio-radio-3Hv:checked + .Radio-label-3Fg,\n.Radio-container-j0H .Radio-radio-3Hv:not(:checked) + .Radio-label-3Fg {\n  color: #191919;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 13px;\n  padding-left: 25px;\n  position: relative;\n}\n.Radio-container-j0H .Radio-radio-3Hv:checked + .Radio-label-3Fg::before,\n.Radio-container-j0H .Radio-radio-3Hv:not(:checked) + .Radio-label-3Fg::before {\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 100%;\n  content: '';\n  height: 14px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 14px;\n}\n.Radio-container-j0H .Radio-radio-3Hv:checked + .Radio-label-3Fg::before {\n  border-color: #0057ff !important;\n}\n.Radio-container-j0H:hover .Radio-radio-3Hv + .Radio-label-3Fg::before {\n  border-color: #696969;\n}\n.Radio-container-j0H .Radio-radio-3Hv:checked + .Radio-label-3Fg::after,\n.Radio-container-j0H .Radio-radio-3Hv:not(:checked) + .Radio-label-3Fg::after {\n  background: #0057ff;\n  border-radius: 100%;\n  content: '';\n  height: 10px;\n  left: 3px;\n  position: absolute;\n  top: 3px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 10px;\n}\n.Radio-container-j0H .Radio-radio-3Hv:not(:checked) + .Radio-label-3Fg::after {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.Radio-container-j0H .Radio-radio-3Hv:checked + .Radio-label-3Fg::after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n", "" ]), 
    t.locals = {
        container: "Radio-container-j0H",
        radio: "Radio-radio-3Hv",
        label: "Radio-label-3Fg"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(259), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ReportModal-disclaimer-2Uk {\n  margin-top: 20px;\n}\n.ReportModal-form-2P3 .ReportModal-sections-1B4 {\n  margin: 20px 0 60px;\n}\n.ReportModal-form-2P3 .ReportModal-section-3FN {\n  margin: 12px 0;\n}\n.ReportModal-form-2P3 .ReportModal-radioWrapper-2Re {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.ReportModal-form-2P3 .ReportModal-select-2KV {\n  margin: 10px 0 0 25px;\n}\n.ReportModal-form-2P3 .ReportModal-select-2KV .v-select {\n    width: 265px;\n}\n.ReportModal-form-2P3 .ReportModal-select-2KV .dropdown-menu li a {\n    text-overflow: initial;\n    white-space: normal;\n}\n.ReportModal-form-2P3 .ReportModal-tooltipWrapper-2Zj {\n  margin-left: 12px;\n}\n.ReportModal-form-2P3 .ReportModal-tooltipContent-3io {\n  margin-bottom: 0;\n  width: 110px;\n}\n.ReportModal-form-2P3 .ReportModal-infoIcon-1vw {\n  fill: #959595;\n  height: 14px;\n  width: 14px;\n}\n.ReportModal-form-2P3 {\n  overflow: auto;\n  text-align: left;\n}\n.ReportModal-form-2P3 .ReportModal-formControls-yJu {\n    float: left;\n}\n.ReportModal-form-2P3 .ReportModal-formControls-yJu .ReportModal-button-2YB {\n      margin-right: 10px;\n}\n.ReportModal-form-2P3 .ReportModal-modalHeader-3hv {\n    font-family: inherit;\n    font-size: 21px;\n    color: #191919;\n}\n@media (max-width: 603px) {\n.ReportModal-form-2P3 .ReportModal-modalHeader-3hv {\n        display: none;\n}\n}\n.ReportModal-form-2P3 .ReportModal-checkboxList-2GA {\n    border: 1px solid #e8e8e8;\n    border-radius: 3px;\n    margin-top: 23px;\n}\n.ReportModal-form-2P3 .ReportModal-textarea-p5y {\n    display: block;\n    margin: 15px 0 40px;\n    width: 100%;\n}\n.ReportModal-form-2P3 .ReportModal-checkbox-1kD {\n    cursor: pointer;\n    height: 44px;\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n}\n.ReportModal-form-2P3 .ReportModal-checkmarkIcon-1Ba {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    color: #0057ff;\n    display: none;\n    left: 19px;\n    margin-top: 2px;\n    width: 18px;\n}\n.ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9 {\n    border-bottom: 1px solid #e8e8e8;\n    height: 44px;\n    position: relative;\n}\n.ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9:last-child {\n      border-bottom-style: none;\n}\n.ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9.ReportModal-checked-3qV .ReportModal-checkmarkIcon-1Ba {\n      display: block;\n}\n.ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9.ReportModal-checked-3qV .ReportModal-checkmarkIconSvg-333, .ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9:hover .ReportModal-checkmarkIconSvg-333 {\n      fill: #0057ff;\n}\n.ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9.ReportModal-checked-3qV .ReportModal-checkboxLabelContainer-1BI,\n    .ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9.ReportModal-checked-3qV .ReportModal-checkboxLabel-EOo, .ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9:hover .ReportModal-checkboxLabelContainer-1BI,\n    .ReportModal-form-2P3 .ReportModal-checkboxListItem-2e9:hover .ReportModal-checkboxLabel-EOo {\n      color: #0057ff;\n}\n.ReportModal-form-2P3 .ReportModal-checkboxLabelContainer-1BI {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    display: inline-block;\n    max-width: 90%;\n}\n.ReportModal-form-2P3 .ReportModal-checkboxLabel-EOo {\n    font-family: inherit;\n    font-size: 15px;\n    color: #191919;\n    font-weight: 600;\n    line-height: 44px;\n    margin-left: 50px;\n}\n.ReportModal-modalAboveLightbox-2JT {\n  z-index: 1004;\n}\n", "" ]), 
    t.locals = {
        disclaimer: "ReportModal-disclaimer-2Uk",
        form: "ReportModal-form-2P3",
        sections: "ReportModal-sections-1B4",
        section: "ReportModal-section-3FN",
        radioWrapper: "ReportModal-radioWrapper-2Re",
        select: "ReportModal-select-2KV",
        tooltipWrapper: "ReportModal-tooltipWrapper-2Zj",
        tooltipContent: "ReportModal-tooltipContent-3io",
        infoIcon: "ReportModal-infoIcon-1vw",
        formControls: "ReportModal-formControls-yJu",
        button: "ReportModal-button-2YB",
        modalHeader: "ReportModal-modalHeader-3hv",
        checkboxList: "ReportModal-checkboxList-2GA",
        textarea: "ReportModal-textarea-p5y",
        checkbox: "ReportModal-checkbox-1kD",
        checkmarkIcon: "ReportModal-checkmarkIcon-1Ba",
        checkboxListItem: "ReportModal-checkboxListItem-2e9",
        checked: "ReportModal-checked-3qV",
        checkmarkIconSvg: "ReportModal-checkmarkIconSvg-333",
        checkboxLabelContainer: "ReportModal-checkboxLabelContainer-1BI",
        checkboxLabel: "ReportModal-checkboxLabel-EOo",
        modalAboveLightbox: "ReportModal-modalAboveLightbox-2JT"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(262), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Title-title-3nk {\n  color: inherit;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: -2px;\n  max-height: 43px;\n  overflow: hidden;\n  padding-bottom: 2px;\n  pointer-events: all;\n}\n.Title-title-3nk.Title-featured-24h {\n    color: #0057ff;\n}\n.Title-title-3nk.Title-hasShadow-14p {\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n.Title-smallTitle-3gU {\n  font-size: 12px;\n  max-height: 33px;\n}\n.Title-mediumTitle-J-V {\n  font-size: 15px;\n  padding-bottom: 0;\n}\n", "" ]), 
    t.locals = {
        title: "Title-title-3nk",
        featured: "Title-featured-24h",
        hasShadow: "Title-hasShadow-14p",
        smallTitle: "Title-smallTitle-3gU",
        mediumTitle: "Title-mediumTitle-J-V"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(263), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".TitleOwner-limitHeight-2_Y .TitleOwner-title-3nP {\n  max-height: 39px;\n  max-width: 100%;\n  overflow: hidden;\n}\n.TitleOwner-owner-1aG {\n  font-size: 13px;\n}\n.TitleOwner-smallOwner-3G9 {\n  font-size: 11px;\n}\n.TitleOwner-shadowText-3QJ {\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n.TitleOwner-mediumOwner-NDt {\n  font-size: 12px;\n}\n.TitleOwner-smallOwnerArrow-2ue::after {\n  top: 6px;\n}\n", "" ]), 
    t.locals = {
        limitHeight: "TitleOwner-limitHeight-2_Y",
        title: "TitleOwner-title-3nP",
        owner: "TitleOwner-owner-1aG",
        smallOwner: "TitleOwner-smallOwner-3G9",
        shadowText: "TitleOwner-shadowText-3QJ",
        mediumOwner: "TitleOwner-mediumOwner-NDt",
        smallOwnerArrow: "TitleOwner-smallOwnerArrow-2ue"
    };
}, function(e, t, n) {
    e.exports = n(2)(354);
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--appreciate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><style>.a{fill:none;}</style><path d="M0 0v16h16V0H0zM8 15C4.1 15 1 11.9 1 8 1 4.1 4.1 1 8 1 11.9 1 15 4.1 15 8 15 11.9 11.9 15 8 15z" class="a"/><path d="M8 1C4.1 1 1 4.1 1 8 1 11.9 4.1 15 8 15 11.9 15 15 11.9 15 8 15 4.1 11.9 1 8 1zM9.5 10H9 7.5h-3V8h3V3.5h2V10z"/><polygon points="7.5 8 4.5 8 4.5 10 9.5 10 9.5 3.5 7.5 3.5 " class="a"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--appreciate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><style>.a{fill:none;}</style><path d="M0 0v16h16V0H0zM8 15C4.1 15 1 11.9 1 8 1 4.1 4.1 1 8 1 11.9 1 15 4.1 15 8 15 11.9 11.9 15 8 15z" class="a"/><path d="M8 1C4.1 1 1 4.1 1 8 1 11.9 4.1 15 8 15 11.9 15 15 11.9 15 8 15 4.1 11.9 1 8 1zM9.5 10H9 7.5h-3V8h3V3.5h2V10z"/><polygon points="7.5 8 4.5 8 4.5 10 9.5 10 9.5 3.5 7.5 3.5 " class="a"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--collection" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="none"/><path d="M13 3H2C1.4 3 1 3.4 1 4v6l0 0c0 0.6 0.5 1 1 1h3v4h1l4-4h3c0.6 0 1-0.4 1-1l0 0V4C14 3.4 13.6 3 13 3z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--collection" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="none"/><path d="M13 3H2C1.4 3 1 3.4 1 4v6l0 0c0 0.6 0.5 1 1 1h3v4h1l4-4h3c0.6 0 1-0.4 1-1l0 0V4C14 3.4 13.6 3 13 3z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--collection" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path class="rf-icon__path" fill-rule="evenodd" d="M5 14V5h9v9H5zM3 9H0V0h9v3H3v6z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--collection" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path class="rf-icon__path" fill-rule="evenodd" d="M5 14V5h9v9H5zM3 9H0V0h9v3H3v6z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-logo rf-logo--adobe rf-logo--adobe2020" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.75 118.11"><path d="M195.89 78.75L191 93.84a1.1 1.1 0 01-1.12.81h-11.83c-.71 0-.92-.4-.81-1l20.39-58.83a19 19 0 001-6.22.67.67 0 01.61-.71h16.31c.51 0 .71.1.82.61l23.14 65.25c.2.51.1.91-.51.91h-13.23a1 1 0 01-1.13-.71l-5.2-15.19zM215.67 66c-2-6.73-6.11-19.07-8-26.31h-.1c-1.63 6.83-5.31 18-8 26.31zM241.14 69.78c0-14.58 10.91-26.78 29.57-26.78.81 0 1.83.11 3.36.21V23.08a.64.64 0 01.71-.71h12.85c.51 0 .61.2.61.61v60.26a56.78 56.78 0 00.41 7.44c0 .51-.1.71-.71.92a51.37 51.37 0 01-20.09 4.07c-15.09 0-26.71-8.56-26.71-25.89zm32.93-14.48a10.5 10.5 0 00-3.77-.51c-7.85 0-14.58 4.79-14.58 14.27 0 10.1 5.81 14.48 13.56 14.48a14.38 14.38 0 004.79-.61zM346.63 69.06c0 16-10.4 26.61-25.08 26.61-17.43 0-25.18-13.15-25.18-26.3 0-14.48 9.68-26.41 25.38-26.41 16.42.04 24.88 12.34 24.88 26.1zm-35.89.11c0 9 4.18 14.68 11 14.68 5.92 0 10.4-5.1 10.4-14.48 0-8-3.26-14.58-11-14.58-5.91 0-10.4 5.3-10.4 14.38zM368.06 22.37c.82 0 1 .1 1 .82v20.9a32.5 32.5 0 018.58-1.09c15 0 24.47 10.61 24.47 24.27 0 19.06-15.09 28.44-30.58 28.44a53.41 53.41 0 01-16-2.34 1.18 1.18 0 01-.61-1V23.08c0-.51.2-.71.71-.71zm7 32.62a20.49 20.49 0 00-6 .82v27.63a15.61 15.61 0 003.77.41c7.75 0 14.78-4.69 14.78-15.3.02-9.27-5.38-13.55-12.52-13.55zM422 73c.51 5.81 4.59 10.6 14.58 10.6a31.58 31.58 0 0012.54-2.34c.31-.21.61-.1.61.51v9.68c0 .72-.2 1-.71 1.23-4.08 1.93-8.56 3-15.6 3-19.16 0-25.89-13.15-25.89-25.79 0-14.07 8.66-26.92 24.67-26.92 15.39 0 21.51 11.93 21.51 22a32.37 32.37 0 01-.51 6.83.86.86 0 01-.81.81 93 93 0 01-10.51.41zm13.26-9.89a33.93 33.93 0 005.1-.2v-.72a8.3 8.3 0 00-8.67-8c-6.42 0-9.18 4.79-9.79 9zM84.13 0h49.33v118.11L84.13 0zM49.37 0H0v118.11L49.37 0zM66.75 43.53l31.43 74.58h-20.6l-9.4-23.75h-23l21.57-50.83z"/></svg>'), 
            o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-logo rf-logo--adobe rf-logo--adobe2020" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.75 118.11"><path d="M195.89 78.75L191 93.84a1.1 1.1 0 01-1.12.81h-11.83c-.71 0-.92-.4-.81-1l20.39-58.83a19 19 0 001-6.22.67.67 0 01.61-.71h16.31c.51 0 .71.1.82.61l23.14 65.25c.2.51.1.91-.51.91h-13.23a1 1 0 01-1.13-.71l-5.2-15.19zM215.67 66c-2-6.73-6.11-19.07-8-26.31h-.1c-1.63 6.83-5.31 18-8 26.31zM241.14 69.78c0-14.58 10.91-26.78 29.57-26.78.81 0 1.83.11 3.36.21V23.08a.64.64 0 01.71-.71h12.85c.51 0 .61.2.61.61v60.26a56.78 56.78 0 00.41 7.44c0 .51-.1.71-.71.92a51.37 51.37 0 01-20.09 4.07c-15.09 0-26.71-8.56-26.71-25.89zm32.93-14.48a10.5 10.5 0 00-3.77-.51c-7.85 0-14.58 4.79-14.58 14.27 0 10.1 5.81 14.48 13.56 14.48a14.38 14.38 0 004.79-.61zM346.63 69.06c0 16-10.4 26.61-25.08 26.61-17.43 0-25.18-13.15-25.18-26.3 0-14.48 9.68-26.41 25.38-26.41 16.42.04 24.88 12.34 24.88 26.1zm-35.89.11c0 9 4.18 14.68 11 14.68 5.92 0 10.4-5.1 10.4-14.48 0-8-3.26-14.58-11-14.58-5.91 0-10.4 5.3-10.4 14.38zM368.06 22.37c.82 0 1 .1 1 .82v20.9a32.5 32.5 0 018.58-1.09c15 0 24.47 10.61 24.47 24.27 0 19.06-15.09 28.44-30.58 28.44a53.41 53.41 0 01-16-2.34 1.18 1.18 0 01-.61-1V23.08c0-.51.2-.71.71-.71zm7 32.62a20.49 20.49 0 00-6 .82v27.63a15.61 15.61 0 003.77.41c7.75 0 14.78-4.69 14.78-15.3.02-9.27-5.38-13.55-12.52-13.55zM422 73c.51 5.81 4.59 10.6 14.58 10.6a31.58 31.58 0 0012.54-2.34c.31-.21.61-.1.61.51v9.68c0 .72-.2 1-.71 1.23-4.08 1.93-8.56 3-15.6 3-19.16 0-25.89-13.15-25.89-25.79 0-14.07 8.66-26.92 24.67-26.92 15.39 0 21.51 11.93 21.51 22a32.37 32.37 0 01-.51 6.83.86.86 0 01-.81.81 93 93 0 01-10.51.41zm13.26-9.89a33.93 33.93 0 005.1-.2v-.72a8.3 8.3 0 00-8.67-8c-6.42 0-9.18 4.79-9.79 9zM84.13 0h49.33v118.11L84.13 0zM49.37 0H0v118.11L49.37 0zM66.75 43.53l31.43 74.58h-20.6l-9.4-23.75h-23l21.57-50.83z"/></svg>', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    e.exports = n(2)(269);
}, function(e, t, n) {
    e.exports = n(2)(270);
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="5605.991 836 16.958 16.95"><path data-name="Path 150" d="M5612.5 836a6.493 6.493 0 0 1 5.29 10.27l4.88 4.88a1.076 1.076 0 0 1-1.52 1.52l-4.88-4.88a6.5 6.5 0 1 1-3.77-11.79zm0 11a4.5 4.5 0 1 0-4.5-4.5 4.5 4.5 0 0 0 4.5 4.5z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="5605.991 836 16.958 16.95"><path data-name="Path 150" d="M5612.5 836a6.493 6.493 0 0 1 5.29 10.27l4.88 4.88a1.076 1.076 0 0 1-1.52 1.52l-4.88-4.88a6.5 6.5 0 1 1-3.77-11.79zm0 11a4.5 4.5 0 1 0-4.5-4.5 4.5 4.5 0 0 0 4.5 4.5z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--cc" xmlns="http://www.w3.org/2000/svg" width="16.59" height="12" viewBox="0 0 16.59 12"><path d="M14 9.5a4.18 4.18 0 0 1-1.8 1.1c-.2.1-.4.1-.6.2a3.55 3.55 0 0 1-1 .2h-.1a5.26 5.26 0 0 1-3.2-1.2 1.38 1.38 0 0 0-.4-.3l-.2-.2-.6-.6-1.5-1.5a.61.61 0 0 1 0-.8.76.76 0 0 1 .4-.2.76.76 0 0 1 .4.2l2.3 2.3a3 3 0 0 0 .7.5 3.61 3.61 0 0 0 2 .6 2.77 2.77 0 0 0 .9-.1 1.42 1.42 0 0 0 .6-.2 5 5 0 0 0 1.2-.8 3.68 3.68 0 0 0 0-5.3 3.86 3.86 0 0 0-2.7-1.1 6 6 0 0 0-1.85.45.76.76 0 0 1-.28.05 1.78 1.78 0 0 1-.85-.49.13.13 0 0 1 0-.09.15.15 0 0 1 .06-.09A5.12 5.12 0 0 1 8.5 1.5a4.77 4.77 0 0 1 2-.4A4.85 4.85 0 0 1 14 2.6a4.72 4.72 0 0 1 0 6.9zm-8.8 1.4a4 4 0 0 1-2.9-1.2 3.87 3.87 0 0 1 0-5.6A4 4 0 0 1 7 3.4a14.76 14.76 0 0 1 2.7 2.4.61.61 0 0 1 0 .8.76.76 0 0 1-.4.2 1.56 1.56 0 0 1-.8-.6c-.47-.47-.91-1-1.39-1.45a3 3 0 0 0-4 .15 2.84 2.84 0 0 0 0 4 3.23 3.23 0 0 0 2.1.8h.49l.5.5a5.72 5.72 0 0 0 .8.7H5.2zm9.6-9.1A5.82 5.82 0 0 0 10.5 0a5.82 5.82 0 0 0-4.3 1.8l-.1.1a2.77 2.77 0 0 0-.9-.1 5.14 5.14 0 0 0-3.7 1.5 5.07 5.07 0 0 0 0 7.2A5.14 5.14 0 0 0 5.2 12h5.3a5.89 5.89 0 0 0 4.2-1.7 5.83 5.83 0 0 0 .1-8.5z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--cc" xmlns="http://www.w3.org/2000/svg" width="16.59" height="12" viewBox="0 0 16.59 12"><path d="M14 9.5a4.18 4.18 0 0 1-1.8 1.1c-.2.1-.4.1-.6.2a3.55 3.55 0 0 1-1 .2h-.1a5.26 5.26 0 0 1-3.2-1.2 1.38 1.38 0 0 0-.4-.3l-.2-.2-.6-.6-1.5-1.5a.61.61 0 0 1 0-.8.76.76 0 0 1 .4-.2.76.76 0 0 1 .4.2l2.3 2.3a3 3 0 0 0 .7.5 3.61 3.61 0 0 0 2 .6 2.77 2.77 0 0 0 .9-.1 1.42 1.42 0 0 0 .6-.2 5 5 0 0 0 1.2-.8 3.68 3.68 0 0 0 0-5.3 3.86 3.86 0 0 0-2.7-1.1 6 6 0 0 0-1.85.45.76.76 0 0 1-.28.05 1.78 1.78 0 0 1-.85-.49.13.13 0 0 1 0-.09.15.15 0 0 1 .06-.09A5.12 5.12 0 0 1 8.5 1.5a4.77 4.77 0 0 1 2-.4A4.85 4.85 0 0 1 14 2.6a4.72 4.72 0 0 1 0 6.9zm-8.8 1.4a4 4 0 0 1-2.9-1.2 3.87 3.87 0 0 1 0-5.6A4 4 0 0 1 7 3.4a14.76 14.76 0 0 1 2.7 2.4.61.61 0 0 1 0 .8.76.76 0 0 1-.4.2 1.56 1.56 0 0 1-.8-.6c-.47-.47-.91-1-1.39-1.45a3 3 0 0 0-4 .15 2.84 2.84 0 0 0 0 4 3.23 3.23 0 0 0 2.1.8h.49l.5.5a5.72 5.72 0 0 0 .8.7H5.2zm9.6-9.1A5.82 5.82 0 0 0 10.5 0a5.82 5.82 0 0 0-4.3 1.8l-.1.1a2.77 2.77 0 0 0-.9-.1 5.14 5.14 0 0 0-3.7 1.5 5.07 5.07 0 0 0 0 7.2A5.14 5.14 0 0 0 5.2 12h5.3a5.89 5.89 0 0 0 4.2-1.7 5.83 5.83 0 0 0 .1-8.5z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-logo rf-logo--twitter" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M12.992-.01a13 13 0 1 0 13 13 12.985 12.985 0 0 0-13-13zm7.913 10.14v.48a10.543 10.543 0 0 1-16.158 8.88 7.981 7.981 0 0 0 .873.06 7.434 7.434 0 0 0 4.573-1.69 3.6 3.6 0 0 1-3.43-2.5 4.953 4.953 0 0 0 .692.06 3.392 3.392 0 0 0 .963-.12 3.709 3.709 0 0 1-2.949-3.64v-.03a3.411 3.411 0 0 0 1.655.45 3.636 3.636 0 0 1-1.625-3.07 3.979 3.979 0 0 1 .482-1.86 10.491 10.491 0 0 0 7.643 3.88 3.935 3.935 0 0 1-.091-.84 3.665 3.665 0 0 1 6.349-2.53 7.748 7.748 0 0 0 2.317-.9 3.5 3.5 0 0 1-1.594 2.04 8.3 8.3 0 0 0 2.136-.57 7.873 7.873 0 0 1-1.836 1.9z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-logo rf-logo--twitter" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M12.992-.01a13 13 0 1 0 13 13 12.985 12.985 0 0 0-13-13zm7.913 10.14v.48a10.543 10.543 0 0 1-16.158 8.88 7.981 7.981 0 0 0 .873.06 7.434 7.434 0 0 0 4.573-1.69 3.6 3.6 0 0 1-3.43-2.5 4.953 4.953 0 0 0 .692.06 3.392 3.392 0 0 0 .963-.12 3.709 3.709 0 0 1-2.949-3.64v-.03a3.411 3.411 0 0 0 1.655.45 3.636 3.636 0 0 1-1.625-3.07 3.979 3.979 0 0 1 .482-1.86 10.491 10.491 0 0 0 7.643 3.88 3.935 3.935 0 0 1-.091-.84 3.665 3.665 0 0 1 6.349-2.53 7.748 7.748 0 0 0 2.317-.9 3.5 3.5 0 0 1-1.594 2.04 8.3 8.3 0 0 0 2.136-.57 7.873 7.873 0 0 1-1.836 1.9z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-logo rf-logo--linkedin" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M12.992-.01a13 13 0 1 0 13 13 12.985 12.985 0 0 0-13-13zM9.2 19.49H5.951v-9.21H9.2v9.21zM7.575 8.65h-.03a2.2 2.2 0 1 1 .03 0zm13.541 10.84h-3.25v-4.88c0-1.65-.662-2.16-1.655-2.16s-1.594.84-1.594 2.16v4.88h-3.25v-7.04s-.06-1.81-.09-2.17h3.219l.121 1.41a2.79 2.79 0 0 1 2.708-1.95c2.317 0 3.791 1.89 3.791 4.87v4.88z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-logo rf-logo--linkedin" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M12.992-.01a13 13 0 1 0 13 13 12.985 12.985 0 0 0-13-13zM9.2 19.49H5.951v-9.21H9.2v9.21zM7.575 8.65h-.03a2.2 2.2 0 1 1 .03 0zm13.541 10.84h-3.25v-4.88c0-1.65-.662-2.16-1.655-2.16s-1.594.84-1.594 2.16v4.88h-3.25v-7.04s-.06-1.81-.09-2.17h3.219l.121 1.41a2.79 2.79 0 0 1 2.708-1.95c2.317 0 3.791 1.89 3.791 4.87v4.88z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-logo rf-logo--facebook" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M25.991 12.99A13 13 0 1 0 9.742 25.56v-8.78h-3.25v-3.79h3.25v-2.71a5.167 5.167 0 0 1 4.875-5.42h3.249v3.79h-3.249a1.441 1.441 0 0 0-1.084 1.63v2.71h4.333v3.79h-4.328v9.21a13.025 13.025 0 0 0 12.453-13z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-logo rf-logo--facebook" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M25.991 12.99A13 13 0 1 0 9.742 25.56v-8.78h-3.25v-3.79h3.25v-2.71a5.167 5.167 0 0 1 4.875-5.42h3.249v3.79h-3.249a1.441 1.441 0 0 0-1.084 1.63v2.71h4.333v3.79h-4.328v9.21a13.025 13.025 0 0 0 12.453-13z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-logo rf-logo--pinterest" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M26.006 13.01A13 13 0 1 0 7.801 24.93a10.079 10.079 0 0 1 .211-2.98c.24-1.09 1.685-7.1 1.685-7.1a4.858 4.858 0 0 1-.422-2.05c0-1.93 1.114-3.37 2.5-3.37a1.734 1.734 0 0 1 1.745 1.96c0 1.17-.752 2.94-1.143 4.6a2.006 2.006 0 0 0 2.046 2.5c2.467 0 4.122-3.16 4.122-6.89 0-2.86-1.895-5-5.386-5a6.171 6.171 0 0 0-6.409 6.23 3.847 3.847 0 0 0 .842 2.56.623.623 0 0 1 .211.72c-.06.24-.211.81-.271 1.02a.46.46 0 0 1-.662.33c-1.8-.72-2.648-2.7-2.648-4.96 0-3.7 3.1-8.13 9.3-8.13 4.935 0 8.215 3.61 8.215 7.47 0 5.08-2.829 8.9-7.011 8.9a3.72 3.72 0 0 1-3.19-1.62s-.752 3.01-.9 3.58a10.43 10.43 0 0 1-1.324 2.77 12.546 12.546 0 0 0 3.7.54 12.985 12.985 0 0 0 12.994-13z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-logo rf-logo--pinterest" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M26.006 13.01A13 13 0 1 0 7.801 24.93a10.079 10.079 0 0 1 .211-2.98c.24-1.09 1.685-7.1 1.685-7.1a4.858 4.858 0 0 1-.422-2.05c0-1.93 1.114-3.37 2.5-3.37a1.734 1.734 0 0 1 1.745 1.96c0 1.17-.752 2.94-1.143 4.6a2.006 2.006 0 0 0 2.046 2.5c2.467 0 4.122-3.16 4.122-6.89 0-2.86-1.895-5-5.386-5a6.171 6.171 0 0 0-6.409 6.23 3.847 3.847 0 0 0 .842 2.56.623.623 0 0 1 .211.72c-.06.24-.211.81-.271 1.02a.46.46 0 0 1-.662.33c-1.8-.72-2.648-2.7-2.648-4.96 0-3.7 3.1-8.13 9.3-8.13 4.935 0 8.215 3.61 8.215 7.47 0 5.08-2.829 8.9-7.011 8.9a3.72 3.72 0 0 1-3.19-1.62s-.752 3.01-.9 3.58a10.43 10.43 0 0 1-1.324 2.77 12.546 12.546 0 0 0 3.7.54 12.985 12.985 0 0 0 12.994-13z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-logo rf-logo--instagram" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M13.006 8.14a4.87 4.87 0 1 0 4.874 4.87 4.869 4.869 0 0 0-4.874-4.87zm12.066 0a13.02 13.02 0 0 0-24.133 0H7.92a7.044 7.044 0 0 1 10.171 0h6.981zm.933 4.87a13.392 13.392 0 0 0-.271-2.71h-6.228a6.814 6.814 0 0 1 .542 2.71 7.041 7.041 0 0 1-14.082 0 6.813 6.813 0 0 1 .541-2.71H.278a13.392 13.392 0 0 0-.27 2.71 13 13 0 1 0 25.998 0z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-logo rf-logo--instagram" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M13.006 8.14a4.87 4.87 0 1 0 4.874 4.87 4.869 4.869 0 0 0-4.874-4.87zm12.066 0a13.02 13.02 0 0 0-24.133 0H7.92a7.044 7.044 0 0 1 10.171 0h6.981zm.933 4.87a13.392 13.392 0 0 0-.271-2.71h-6.228a6.814 6.814 0 0 1 .542 2.71 7.041 7.041 0 0 1-14.082 0 6.813 6.813 0 0 1 .541-2.71H.278a13.392 13.392 0 0 0-.27 2.71 13 13 0 1 0 25.998 0z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-logo rf-logo--adobe-iconography" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="18px" viewBox="0 0 207.5 183.6" style="enable-background:new 0 0 207.5 183.6;" xml:space="preserve"><polygon points="130.8,0 207.5,0 207.5,183.6 "/><polygon points="76.7,0 0,0 0,183.6 "/><polygon points="103.8,67.7 152.6,183.6 120.6,183.6 106,146.7 70.2,146.7 "/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-logo rf-logo--adobe-iconography" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="18px" viewBox="0 0 207.5 183.6" style="enable-background:new 0 0 207.5 183.6;" xml:space="preserve"><polygon points="130.8,0 207.5,0 207.5,183.6 "/><polygon points="76.7,0 0,0 0,183.6 "/><polygon points="103.8,67.7 152.6,183.6 120.6,183.6 106,146.7 70.2,146.7 "/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" class="rf-icon rf-icon--apps" width="16" height="16"><path fill="none" d="M0 0v16h16V0H0zm13.001 14.996c-.001.551-.448 1-1.001 1-.002 0-.005-.002-.007-.002H4c-.002 0-.005.002-.007.002-.551 0-.998-.449-.998-.998v-.002h-.002L2.991 2h.004c0-.551.446-.998.996-.998V1H12c.553 0 1 .447 1 1h.001v12.996z"/><path d="M12 1H3.991v.002c-.55 0-.996.447-.996.998h-.004l.002 12.996h.002v.002c0 .549.447.998.998.998.002 0 .004-.002.007-.002h7.993c.002 0 .005.002.007.002.553 0 1-.449 1-1h.001V2H13c0-.553-.447-1-1-1zm-1 12H5V3.005h6V13z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" class="rf-icon rf-icon--apps" width="16" height="16"><path fill="none" d="M0 0v16h16V0H0zm13.001 14.996c-.001.551-.448 1-1.001 1-.002 0-.005-.002-.007-.002H4c-.002 0-.005.002-.007.002-.551 0-.998-.449-.998-.998v-.002h-.002L2.991 2h.004c0-.551.446-.998.996-.998V1H12c.553 0 1 .447 1 1h.001v12.996z"/><path d="M12 1H3.991v.002c-.55 0-.996.447-.996.998h-.004l.002 12.996h.002v.002c0 .549.447.998.998.998.002 0 .004-.002.007-.002h7.993c.002 0 .005.002.007.002.553 0 1-.449 1-1h.001V2H13c0-.553-.447-1-1-1zm-1 12H5V3.005h6V13z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" class="rf-icon rf-icon--api" width="16" height="16"><path fill="none" d="M0 0v16h16V0H0zm2 1l3 1.5-.543.543L6.25 4.835 4.836 6.25 3.043 4.457 2.5 5 1 2l1-1zm11.5 14c-.414 0-.789-.168-1.061-.439l-3.044-3.043 2.122-2.121 3.04 3.041c.273.271.443.646.443 1.062 0 .828-.672 1.5-1.5 1.5zm-2-7c-.412 0-.806-.075-1.173-.206l-6.764 6.762C3.292 14.83 2.916 15 2.5 15c-.828 0-1.5-.672-1.5-1.5 0-.414.168-.789.439-1.061l6.766-6.767C8.074 5.306 8 4.912 8 4.5 8 2.567 9.566 1 11.5 1c.412 0 .806.075 1.174.206L10.5 3.379V5.5h2.121l2.174-2.173c.131.367.205.761.205 1.173C15 6.433 13.434 8 11.5 8z"/><path d="M3.043 4.457L4.836 6.25 6.25 4.835 4.457 3.043 5 2.5 2 1 1 2l1.5 3M14.558 12.438l-3.04-3.041-2.122 2.121 3.044 3.043c.271.271.646.439 1.06.439.828 0 1.5-.672 1.5-1.5 0-.416-.17-.791-.442-1.062zM12.621 5.5H10.5V3.379l2.174-2.173C12.306 1.075 11.912 1 11.5 1 9.566 1 8 2.567 8 4.5c0 .412.074.806.205 1.173L1.439 12.44c-.271.271-.439.646-.439 1.06 0 .828.672 1.5 1.5 1.5.416 0 .792-.17 1.063-.443l6.764-6.762c.367.13.761.205 1.173.205C13.434 8 15 6.433 15 4.5c0-.412-.074-.806-.205-1.173L12.621 5.5z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" class="rf-icon rf-icon--api" width="16" height="16"><path fill="none" d="M0 0v16h16V0H0zm2 1l3 1.5-.543.543L6.25 4.835 4.836 6.25 3.043 4.457 2.5 5 1 2l1-1zm11.5 14c-.414 0-.789-.168-1.061-.439l-3.044-3.043 2.122-2.121 3.04 3.041c.273.271.443.646.443 1.062 0 .828-.672 1.5-1.5 1.5zm-2-7c-.412 0-.806-.075-1.173-.206l-6.764 6.762C3.292 14.83 2.916 15 2.5 15c-.828 0-1.5-.672-1.5-1.5 0-.414.168-.789.439-1.061l6.766-6.767C8.074 5.306 8 4.912 8 4.5 8 2.567 9.566 1 11.5 1c.412 0 .806.075 1.174.206L10.5 3.379V5.5h2.121l2.174-2.173c.131.367.205.761.205 1.173C15 6.433 13.434 8 11.5 8z"/><path d="M3.043 4.457L4.836 6.25 6.25 4.835 4.457 3.043 5 2.5 2 1 1 2l1.5 3M14.558 12.438l-3.04-3.041-2.122 2.121 3.044 3.043c.271.271.646.439 1.06.439.828 0 1.5-.672 1.5-1.5 0-.416-.17-.791-.442-1.062zM12.621 5.5H10.5V3.379l2.174-2.173C12.306 1.075 11.912 1 11.5 1 9.566 1 8 2.567 8 4.5c0 .412.074.806.205 1.173L1.439 12.44c-.271.271-.439.646-.439 1.06 0 .828.672 1.5 1.5 1.5.416 0 .792-.17 1.063-.443l6.764-6.762c.367.13.761.205 1.173.205C13.434 8 15 6.433 15 4.5c0-.412-.074-.806-.205-1.173L12.621 5.5z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" class="rf-icon rf-icon--portfolio-review" width="16" height="16"><path fill="none" d="M0 0v6.5h3v-2L6.5 8 3 11.5v-2H0V16h6.5v-3h-2L8 9.5l3.5 3.5h-2v3H16V9.5h-3v2L9.5 8 13 4.5v2h3V0H0zm8 6.5L4.5 3h2V.001h3V3h2L8 6.5z"/><path d="M3 11.5L6.5 8 3 4.5v2H0v3h3M13 4.5L9.5 8l3.5 3.5v-2h3v-3h-3M9.5 3V.001h-3V3h-2L8 6.5 11.5 3M11.5 13L8 9.5 4.5 13h2v3h3v-3"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" class="rf-icon rf-icon--portfolio-review" width="16" height="16"><path fill="none" d="M0 0v6.5h3v-2L6.5 8 3 11.5v-2H0V16h6.5v-3h-2L8 9.5l3.5 3.5h-2v3H16V9.5h-3v2L9.5 8 13 4.5v2h3V0H0zm8 6.5L4.5 3h2V.001h3V3h2L8 6.5z"/><path d="M3 11.5L6.5 8 3 4.5v2H0v3h3M13 4.5L9.5 8l3.5 3.5v-2h3v-3h-3M9.5 3V.001h-3V3h-2L8 6.5 11.5 3M11.5 13L8 9.5 4.5 13h2v3h3v-3"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" class="rf-icon rf-icon--blog" width="16" height="16"><path fill="none" d="M0 0h16v16H0z"/><path d="M13 3H2c-.551 0-1 .448-1 1v6c.001.553.45 1 1 1h3v4h1l4-4h3c.553 0 .999-.447 1-1V4c0-.552-.447-1-1-1z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" class="rf-icon rf-icon--blog" width="16" height="16"><path fill="none" d="M0 0h16v16H0z"/><path d="M13 3H2c-.551 0-1 .448-1 1v6c.001.553.45 1 1 1h3v4h1l4-4h3c.553 0 .999-.447 1-1V4c0-.552-.447-1-1-1z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-logo rf-logo--99u" width="41" height="17" viewBox="0 0 41 18.24" xmlns="http://www.w3.org/2000/svg"><path d="M3.13 18.24l3.39-5.73h-.23A6.17 6.17 0 0 1 0 6.32 6.38 6.38 0 0 1 6.4 0 6.3 6.3 0 0 1 13 6.14a9.85 9.85 0 0 1-1.77 5L7 18.24H3.13zm6.5-12.1a3.13 3.13 0 0 0-3.18-3.06 3 3 0 0 0-3 3.13 3.15 3.15 0 0 0 3.18 3.22A4.46 4.46 0 0 0 8.56 9a4.88 4.88 0 0 0 1.07-2.86zM17.55 18.24l3.39-5.73h-.23a6.17 6.17 0 0 1-6.29-6.19A6.38 6.38 0 0 1 20.81 0a6.3 6.3 0 0 1 6.58 6.14 9.85 9.85 0 0 1-1.77 5l-4.24 7.14h-3.83zM24 6.14a3.13 3.13 0 0 0-3.19-3.06 3 3 0 0 0-3 3.13A3.15 3.15 0 0 0 21 9.43 4.46 4.46 0 0 0 23 9a4.88 4.88 0 0 0 1-2.86zM37.72.54V8a2.55 2.55 0 0 1-.72 2 2.79 2.79 0 0 1-3.67 0 2.54 2.54 0 0 1-.69-2V.54h-3.25v7.27a5.67 5.67 0 0 0 1.76 4.5 6.56 6.56 0 0 0 8.1 0A5.67 5.67 0 0 0 41 7.81V.54h-3.28zM30.22 15.75h9.96v2.49h-9.96z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-logo rf-logo--99u" width="41" height="17" viewBox="0 0 41 18.24" xmlns="http://www.w3.org/2000/svg"><path d="M3.13 18.24l3.39-5.73h-.23A6.17 6.17 0 0 1 0 6.32 6.38 6.38 0 0 1 6.4 0 6.3 6.3 0 0 1 13 6.14a9.85 9.85 0 0 1-1.77 5L7 18.24H3.13zm6.5-12.1a3.13 3.13 0 0 0-3.18-3.06 3 3 0 0 0-3 3.13 3.15 3.15 0 0 0 3.18 3.22A4.46 4.46 0 0 0 8.56 9a4.88 4.88 0 0 0 1.07-2.86zM17.55 18.24l3.39-5.73h-.23a6.17 6.17 0 0 1-6.29-6.19A6.38 6.38 0 0 1 20.81 0a6.3 6.3 0 0 1 6.58 6.14 9.85 9.85 0 0 1-1.77 5l-4.24 7.14h-3.83zM24 6.14a3.13 3.13 0 0 0-3.19-3.06 3 3 0 0 0-3 3.13A3.15 3.15 0 0 0 21 9.43 4.46 4.46 0 0 0 23 9a4.88 4.88 0 0 0 1-2.86zM37.72.54V8a2.55 2.55 0 0 1-.72 2 2.79 2.79 0 0 1-3.67 0 2.54 2.54 0 0 1-.69-2V.54h-3.25v7.27a5.67 5.67 0 0 0 1.76 4.5 6.56 6.56 0 0 0 8.1 0A5.67 5.67 0 0 0 41 7.81V.54h-3.28zM30.22 15.75h9.96v2.49h-9.96z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" class="rf-logo rf-logo--portfolio" viewBox="0 0 20 19.6" width="20" height="20"><path d="M5.1 4.9s0-.1 0 0c.6-.1 1.4-.1 2.2-.1 2.3 0 3.2 1.2 3.2 2.8 0 2.1-1.5 3-3.3 3h-.6v3.2c0 .1 0 .1-.1.1H5.2c-.1 0-.1 0-.1-.1V4.9zm1.5 4.4h.7c.9 0 1.8-.4 1.8-1.6 0-1-.6-1.6-1.7-1.6h-.8v3.2zM11.4 8.7c-.1 0-.1 0 0 0l-.1-1.2c0-.1 0-.1.1-.1h.8V7c0-.4.1-.9.3-1.3.3-.6 1-1 1.7-1 .2 0 .4 0 .5.1.1 0 .1 0 .1.1V6c0 .1 0 .1-.1.1s-.2-.1-.4 0c-.5 0-.7.4-.7 1v.4h1.1c.1 0 .1 0 .1.1v1.1c0 .1 0 .1-.1.1h-1.1v5s0 .1-.1.1h-1.3c-.1 0-.1 0-.1-.1V8.7h-.7z"/><path d="M.9.9h18.2v17.8H.9V.9zM0 19.6h20V0H0v19.6z"/><path d="M5.1 5c0-.1 0-.1 0 0 .6-.1 1.4-.1 2.2-.1 2.3 0 3.3 1.2 3.3 2.8 0 2.1-1.5 3-3.3 3h-.6v3.1c0 .1 0 .1-.1.1H5.2c-.1 0-.1 0-.1-.1V5zm1.5 4.3h.7c1 0 1.8-.3 1.8-1.6 0-1-.6-1.6-1.7-1.6h-.8v3.2zM11.4 8.7l-.1-1.2c0-.1 0-.1.1-.1h.8V7c0-.4.1-.9.3-1.3.3-.7 1-1.1 1.7-1 .2 0 .4 0 .6.1.1 0 .1.1.1.1V6c0 .1 0 .1-.1.1h-.4c-.5 0-.7.3-.7 1v.4h1.1c.1 0 .1 0 .1.1v1.1c0 .1 0 .1-.1.1h-1.1v5c0 .1 0 .1-.1.1h-1.3s-.1 0-.1-.1v-5h-.8z"/></svg>'), 
            o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" class="rf-logo rf-logo--portfolio" viewBox="0 0 20 19.6" width="20" height="20"><path d="M5.1 4.9s0-.1 0 0c.6-.1 1.4-.1 2.2-.1 2.3 0 3.2 1.2 3.2 2.8 0 2.1-1.5 3-3.3 3h-.6v3.2c0 .1 0 .1-.1.1H5.2c-.1 0-.1 0-.1-.1V4.9zm1.5 4.4h.7c.9 0 1.8-.4 1.8-1.6 0-1-.6-1.6-1.7-1.6h-.8v3.2zM11.4 8.7c-.1 0-.1 0 0 0l-.1-1.2c0-.1 0-.1.1-.1h.8V7c0-.4.1-.9.3-1.3.3-.6 1-1 1.7-1 .2 0 .4 0 .5.1.1 0 .1 0 .1.1V6c0 .1 0 .1-.1.1s-.2-.1-.4 0c-.5 0-.7.4-.7 1v.4h1.1c.1 0 .1 0 .1.1v1.1c0 .1 0 .1-.1.1h-1.1v5s0 .1-.1.1h-1.3c-.1 0-.1 0-.1-.1V8.7h-.7z"/><path d="M.9.9h18.2v17.8H.9V.9zM0 19.6h20V0H0v19.6z"/><path d="M5.1 5c0-.1 0-.1 0 0 .6-.1 1.4-.1 2.2-.1 2.3 0 3.3 1.2 3.3 2.8 0 2.1-1.5 3-3.3 3h-.6v3.1c0 .1 0 .1-.1.1H5.2c-.1 0-.1 0-.1-.1V5zm1.5 4.3h.7c1 0 1.8-.3 1.8-1.6 0-1-.6-1.6-1.7-1.6h-.8v3.2zM11.4 8.7l-.1-1.2c0-.1 0-.1.1-.1h.8V7c0-.4.1-.9.3-1.3.3-.7 1-1.1 1.7-1 .2 0 .4 0 .6.1.1 0 .1.1.1.1V6c0 .1 0 .1-.1.1h-.4c-.5 0-.7.3-.7 1v.4h1.1c.1 0 .1 0 .1.1v1.1c0 .1 0 .1-.1.1h-1.1v5c0 .1 0 .1-.1.1h-1.3s-.1 0-.1-.1v-5h-.8z"/></svg>', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" class="rf-logo rf-logo--behance-alternate" viewBox="0 0 22.2 13.9" width="22.2" height="14"><path d="M6.4 0C7 0 7.6 0 8.2.2c.5.1 1 .3 1.4.5s.7.6.9 1 .3 1 .3 1.6c0 .7-.1 1.3-.5 1.7-.3.5-.8.9-1.4 1.2.8.2 1.5.7 1.9 1.3s.6 1.3.6 2.2c0 .7-.1 1.3-.4 1.8-.2.5-.6.9-1.1 1.2s-1 .5-1.6.7c-.6.1-1.2.2-1.8.2H0V0h6.4zM6 5.5c.5 0 1-.1 1.3-.4.3-.2.5-.7.5-1.2 0-.3 0-.6-.1-.8s-.2-.3-.4-.5c-.2-.1-.4-.2-.7-.2H3v3.2c0-.1 3-.1 3-.1zm.2 5.8c.3 0 .6 0 .8-.1.2 0 .5-.1.7-.3.2-.1.3-.3.5-.5.1-.2.2-.5.2-.9 0-.7-.2-1.2-.6-1.5-.4-.3-.9-.5-1.6-.5H3v3.8h3.2zm9.5 0c.4.4 1 .6 1.8.6.5 0 1-.1 1.4-.4.4-.3.6-.6.7-.9H22c-.4 1.2-1 2-1.8 2.6-.8.5-1.7.8-2.9.8-.8 0-1.5-.1-2.1-.4-.6-.2-1.1-.6-1.6-1.1-.4-.4-.8-1-1-1.6-.2-.6-.3-1.3-.3-2.1 0-.7.1-1.4.3-2.1.4-.7.7-1.2 1.2-1.7.4-.4 1-.8 1.6-1.1.6-.2 1.3-.4 2.1-.4s1.6.1 2.2.5c.6.3 1.1.7 1.5 1.3.4.5.7 1.2.9 1.9.1.7.1 1.4.1 2.2H15c0 .7.3 1.5.7 1.9zm3.1-5.2c-.3-.3-.9-.5-1.5-.5-.4 0-.8.1-1.1.2-.3.1-.5.3-.7.5-.2.2-.3.4-.3.7 0 .2-.1.4-.1.6h4.4c-.1-.7-.4-1.2-.7-1.5zM14.5.9H20v1.3h-5.5V.9z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" class="rf-logo rf-logo--behance-alternate" viewBox="0 0 22.2 13.9" width="22.2" height="14"><path d="M6.4 0C7 0 7.6 0 8.2.2c.5.1 1 .3 1.4.5s.7.6.9 1 .3 1 .3 1.6c0 .7-.1 1.3-.5 1.7-.3.5-.8.9-1.4 1.2.8.2 1.5.7 1.9 1.3s.6 1.3.6 2.2c0 .7-.1 1.3-.4 1.8-.2.5-.6.9-1.1 1.2s-1 .5-1.6.7c-.6.1-1.2.2-1.8.2H0V0h6.4zM6 5.5c.5 0 1-.1 1.3-.4.3-.2.5-.7.5-1.2 0-.3 0-.6-.1-.8s-.2-.3-.4-.5c-.2-.1-.4-.2-.7-.2H3v3.2c0-.1 3-.1 3-.1zm.2 5.8c.3 0 .6 0 .8-.1.2 0 .5-.1.7-.3.2-.1.3-.3.5-.5.1-.2.2-.5.2-.9 0-.7-.2-1.2-.6-1.5-.4-.3-.9-.5-1.6-.5H3v3.8h3.2zm9.5 0c.4.4 1 .6 1.8.6.5 0 1-.1 1.4-.4.4-.3.6-.6.7-.9H22c-.4 1.2-1 2-1.8 2.6-.8.5-1.7.8-2.9.8-.8 0-1.5-.1-2.1-.4-.6-.2-1.1-.6-1.6-1.1-.4-.4-.8-1-1-1.6-.2-.6-.3-1.3-.3-2.1 0-.7.1-1.4.3-2.1.4-.7.7-1.2 1.2-1.7.4-.4 1-.8 1.6-1.1.6-.2 1.3-.4 2.1-.4s1.6.1 2.2.5c.6.3 1.1.7 1.5 1.3.4.5.7 1.2.9 1.9.1.7.1 1.4.1 2.2H15c0 .7.3 1.5.7 1.9zm3.1-5.2c-.3-.3-.9-.5-1.5-.5-.4 0-.8.1-1.1.2-.3.1-.5.3-.7.5-.2.2-.3.4-.3.7 0 .2-.1.4-.1.6h4.4c-.1-.7-.4-1.2-.7-1.5zM14.5.9H20v1.3h-5.5V.9z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.48 38.31"><path d="M34.48 17.24L17.25 0l-.01.01V0L0 17.24l3 3L15.12 8.13v30.18h4.25V8.13l12.11 12.11 3-3z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.48 38.31"><path d="M34.48 17.24L17.25 0l-.01.01V0L0 17.24l3 3L15.12 8.13v30.18h4.25V8.13l12.11 12.11 3-3z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--arrow-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.4 9.6"><path d="M7.8 4.4c-1-.9-2.9-2.7-4.1-3.7l.5-.7 5.1 4.8-5.1 4.8-.5-.6c1.2-1.1 3.1-2.8 4.1-3.8H0v-.8h7.8z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--arrow-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.4 9.6"><path d="M7.8 4.4c-1-.9-2.9-2.7-4.1-3.7l.5-.7 5.1 4.8-5.1 4.8-.5-.6c1.2-1.1 3.1-2.8 4.1-3.8H0v-.8h7.8z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" class="rf-logo rf-logo--flickr" width="26" height="26" viewBox="0 0 39 39"><path d="M5.7 5.7A18.8 18.8 0 0 1 19.5 0 18.8 18.8 0 0 1 33.3 5.7 18.8 18.8 0 0 1 39 19.5a18.8 18.8 0 0 1-5.7 13.8A18.8 18.8 0 0 1 19.5 39 18.8 18.8 0 0 1 5.7 33.3 18.8 18.8 0 0 1 0 19.5 18.8 18.8 0 0 1 5.7 5.7ZM11.4 26A6.3 6.3 0 0 0 16 24.1a6.5 6.5 0 0 0 0-9.2A6.3 6.3 0 0 0 11.4 13a6.5 6.5 0 0 0-6.5 6.5 6.3 6.3 0 0 0 1.9 4.6A6.3 6.3 0 0 0 11.4 26Zm16.3 0a6.5 6.5 0 0 0 6.5-6.5 6.6 6.6 0 0 0-6.5-6.5 6.5 6.5 0 0 0-6.5 6.5 6.5 6.5 0 0 0 6.5 6.5Z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" class="rf-logo rf-logo--flickr" width="26" height="26" viewBox="0 0 39 39"><path d="M5.7 5.7A18.8 18.8 0 0 1 19.5 0 18.8 18.8 0 0 1 33.3 5.7 18.8 18.8 0 0 1 39 19.5a18.8 18.8 0 0 1-5.7 13.8A18.8 18.8 0 0 1 19.5 39 18.8 18.8 0 0 1 5.7 33.3 18.8 18.8 0 0 1 0 19.5 18.8 18.8 0 0 1 5.7 5.7ZM11.4 26A6.3 6.3 0 0 0 16 24.1a6.5 6.5 0 0 0 0-9.2A6.3 6.3 0 0 0 11.4 13a6.5 6.5 0 0 0-6.5 6.5 6.3 6.3 0 0 0 1.9 4.6A6.3 6.3 0 0 0 11.4 26Zm16.3 0a6.5 6.5 0 0 0 6.5-6.5 6.6 6.6 0 0 0-6.5-6.5 6.5 6.5 0 0 0-6.5 6.5 6.5 6.5 0 0 0 6.5 6.5Z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" class="rf-logo rf-logo--vimeo" width="26" height="26" viewBox="0 0 39 39"><path d="M5.7 5.7A18.8 18.8 0 0 1 19.5 0 18.8 18.8 0 0 1 33.3 5.7 18.8 18.8 0 0 1 39 19.5a18.8 18.8 0 0 1-5.7 13.8A18.8 18.8 0 0 1 19.5 39 18.8 18.8 0 0 1 5.7 33.3 18.8 18.8 0 0 1 0 19.5 18.8 18.8 0 0 1 5.7 5.7ZM17.9 32.5q1.8 0 5.1-3.1a35.6 35.6 0 0 0 6-7.5q2.7-4.5 2.7-7.8a4.6 4.6 0 0 0-1.1-3.2 3.6 3.6 0 0 0-2.7-1.2 7.9 7.9 0 0 0-4.3 1.4 7 7 0 0 0-2.9 4.3 2.8 2.8 0 0 1 2.7-0.1 2.2 2.2 0 0 1 1 2q0 1.6-1.8 4.3t-2.7 2.7q-1.3 0-2.4-7c0-0.2-0.1-0.6-0.2-1.3s-0.1-1.1-0.2-1.5-0.1-0.8-0.3-1.4a5.5 5.5 0 0 0-0.4-1.4 11.3 11.3 0 0 0-0.6-1.1 2.2 2.2 0 0 0-0.9-0.8 2.9 2.9 0 0 0-1.2-0.2 6.1 6.1 0 0 0-3.4 1.6 20.9 20.9 0 0 0-3.3 3.1L5.5 16l1 1.1a6.4 6.4 0 0 1 1.7-1 1 1 0 0 1 1 0 2 2 0 0 1 0.5 1L13 27.6Q14.4 32.5 17.9 32.5Z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" class="rf-logo rf-logo--vimeo" width="26" height="26" viewBox="0 0 39 39"><path d="M5.7 5.7A18.8 18.8 0 0 1 19.5 0 18.8 18.8 0 0 1 33.3 5.7 18.8 18.8 0 0 1 39 19.5a18.8 18.8 0 0 1-5.7 13.8A18.8 18.8 0 0 1 19.5 39 18.8 18.8 0 0 1 5.7 33.3 18.8 18.8 0 0 1 0 19.5 18.8 18.8 0 0 1 5.7 5.7ZM17.9 32.5q1.8 0 5.1-3.1a35.6 35.6 0 0 0 6-7.5q2.7-4.5 2.7-7.8a4.6 4.6 0 0 0-1.1-3.2 3.6 3.6 0 0 0-2.7-1.2 7.9 7.9 0 0 0-4.3 1.4 7 7 0 0 0-2.9 4.3 2.8 2.8 0 0 1 2.7-0.1 2.2 2.2 0 0 1 1 2q0 1.6-1.8 4.3t-2.7 2.7q-1.3 0-2.4-7c0-0.2-0.1-0.6-0.2-1.3s-0.1-1.1-0.2-1.5-0.1-0.8-0.3-1.4a5.5 5.5 0 0 0-0.4-1.4 11.3 11.3 0 0 0-0.6-1.1 2.2 2.2 0 0 0-0.9-0.8 2.9 2.9 0 0 0-1.2-0.2 6.1 6.1 0 0 0-3.4 1.6 20.9 20.9 0 0 0-3.3 3.1L5.5 16l1 1.1a6.4 6.4 0 0 1 1.7-1 1 1 0 0 1 1 0 2 2 0 0 1 0.5 1L13 27.6Q14.4 32.5 17.9 32.5Z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<span class="rf-icon rf-icon--arrow-font-left">&larr;</span>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<span class="rf-icon rf-icon--arrow-font-left">&larr;</span>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--appreciate-badge" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="35" height="35" viewBox="0 0 90 90"><path d="M89.999 45 C89.999 46.6 85.8 48 85.7 49.6 C85.481 51.2 89.2 53.5 88.9 55 C88.521 56.6 84.2 57 83.6 58.5 C83.096 60.1 86.2 63.1 85.5 64.5 C84.849 66 80.5 65.4 79.6 66.8 C78.791 68.1 81.2 71.8 80.2 73.1 C79.177 74.3 75.1 72.8 73.9 73.9 C72.794 75.1 74.3 79.2 73.1 80.2 C71.802 81.2 68.1 78.8 66.8 79.7 C65.411 80.5 66 84.9 64.5 85.6 C63.087 86.3 60 83.1 58.5 83.6 C57.008 84.2 56.6 88.5 55 88.9 C53.459 89.2 51.2 85.5 49.6 85.7 C48.002 85.8 46.6 90 45 90 C43.370 90 42 85.8 40.4 85.7 C38.799 85.5 36.5 89.2 35 88.9 C33.403 88.5 33 84.2 31.5 83.6 C29.953 83.1 26.9 86.3 25.5 85.6 C24.013 84.9 24.6 80.5 23.2 79.7 C21.863 78.8 18.2 81.2 16.9 80.2 C15.680 79.2 17.2 75.1 16.1 73.9 C14.927 72.8 10.8 74.3 9.8 73.1 C8.811 71.8 11.2 68.1 10.3 66.8 C9.491 65.4 5.1 66 4.4 64.5 C3.748 63.1 6.9 60.1 6.4 58.5 C5.837 57 1.5 56.6 1.1 55 C0.761 53.5 4.5 51.2 4.3 49.6 C4.157 48 -0 46.6 -0 45 C-0.005 43.4 4.2 42 4.3 40.4 C4.513 38.8 0.8 36.5 1.1 35 C1.473 33.4 5.8 33 6.4 31.5 C6.898 30 3.7 26.9 4.4 25.5 C5.144 24 9.5 24.6 10.3 23.2 C11.203 21.9 8.8 18.2 9.8 16.9 C10.817 15.7 14.9 17.2 16.1 16.1 C17.200 14.9 15.7 10.8 16.9 9.8 C18.191 8.8 21.9 11.2 23.2 10.4 C24.583 9.5 24 5.2 25.5 4.5 C26.907 3.8 30 6.9 31.5 6.4 C32.986 5.8 33.4 1.5 35 1.1 C36.535 0.8 38.8 4.5 40.4 4.3 C41.991 4.2 43.4 0 45 0 C46.623 0 48 4.2 49.6 4.3 C51.195 4.5 53.5 0.8 55 1.1 C56.591 1.5 57 5.8 58.5 6.4 C60.041 6.9 63.1 3.8 64.5 4.5 C65.981 5.2 65.4 9.5 66.8 10.4 C68.131 11.2 71.8 8.8 73.1 9.8 C74.314 10.8 72.8 14.9 73.9 16.1 C75.067 17.2 79.2 15.7 80.2 16.9 C81.183 18.2 78.8 21.9 79.6 23.2 C80.503 24.6 84.8 24 85.6 25.5 C86.246 26.9 83.1 30 83.6 31.5 C84.157 33 88.5 33.4 88.9 35 C89.233 36.5 85.5 38.8 85.7 40.4 C85.837 42 90 43.4 90 45 Z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--appreciate-badge" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="35" height="35" viewBox="0 0 90 90"><path d="M89.999 45 C89.999 46.6 85.8 48 85.7 49.6 C85.481 51.2 89.2 53.5 88.9 55 C88.521 56.6 84.2 57 83.6 58.5 C83.096 60.1 86.2 63.1 85.5 64.5 C84.849 66 80.5 65.4 79.6 66.8 C78.791 68.1 81.2 71.8 80.2 73.1 C79.177 74.3 75.1 72.8 73.9 73.9 C72.794 75.1 74.3 79.2 73.1 80.2 C71.802 81.2 68.1 78.8 66.8 79.7 C65.411 80.5 66 84.9 64.5 85.6 C63.087 86.3 60 83.1 58.5 83.6 C57.008 84.2 56.6 88.5 55 88.9 C53.459 89.2 51.2 85.5 49.6 85.7 C48.002 85.8 46.6 90 45 90 C43.370 90 42 85.8 40.4 85.7 C38.799 85.5 36.5 89.2 35 88.9 C33.403 88.5 33 84.2 31.5 83.6 C29.953 83.1 26.9 86.3 25.5 85.6 C24.013 84.9 24.6 80.5 23.2 79.7 C21.863 78.8 18.2 81.2 16.9 80.2 C15.680 79.2 17.2 75.1 16.1 73.9 C14.927 72.8 10.8 74.3 9.8 73.1 C8.811 71.8 11.2 68.1 10.3 66.8 C9.491 65.4 5.1 66 4.4 64.5 C3.748 63.1 6.9 60.1 6.4 58.5 C5.837 57 1.5 56.6 1.1 55 C0.761 53.5 4.5 51.2 4.3 49.6 C4.157 48 -0 46.6 -0 45 C-0.005 43.4 4.2 42 4.3 40.4 C4.513 38.8 0.8 36.5 1.1 35 C1.473 33.4 5.8 33 6.4 31.5 C6.898 30 3.7 26.9 4.4 25.5 C5.144 24 9.5 24.6 10.3 23.2 C11.203 21.9 8.8 18.2 9.8 16.9 C10.817 15.7 14.9 17.2 16.1 16.1 C17.200 14.9 15.7 10.8 16.9 9.8 C18.191 8.8 21.9 11.2 23.2 10.4 C24.583 9.5 24 5.2 25.5 4.5 C26.907 3.8 30 6.9 31.5 6.4 C32.986 5.8 33.4 1.5 35 1.1 C36.535 0.8 38.8 4.5 40.4 4.3 C41.991 4.2 43.4 0 45 0 C46.623 0 48 4.2 49.6 4.3 C51.195 4.5 53.5 0.8 55 1.1 C56.591 1.5 57 5.8 58.5 6.4 C60.041 6.9 63.1 3.8 64.5 4.5 C65.981 5.2 65.4 9.5 66.8 10.4 C68.131 11.2 71.8 8.8 73.1 9.8 C74.314 10.8 72.8 14.9 73.9 16.1 C75.067 17.2 79.2 15.7 80.2 16.9 C81.183 18.2 78.8 21.9 79.6 23.2 C80.503 24.6 84.8 24 85.6 25.5 C86.246 26.9 83.1 30 83.6 31.5 C84.157 33 88.5 33.4 88.9 35 C89.233 36.5 85.5 38.8 85.7 40.4 C85.837 42 90 43.4 90 45 Z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--jobs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V0H0zm15 7v7c0 .553-.447 1-1 1H2c-.55 0-1-.447-1-1V7c0-.552.448-1 1-1h2V3c0-.552.448-1 1-1h6c.553 0 1 .448 1 1v3h2c.553 0 1 .448 1 1z"/><path d="M14 6h-2V3c0-.552-.447-1-1-1H5.002 5c-.552 0-1 .448-1 1v3H2.002 2c-.552 0-1 .448-1 1v7c0 .553.45 1 1 1h12c.553 0 1-.447 1-1V7c0-.552-.447-1-1-1zM6 4h4v2H6V4z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--jobs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V0H0zm15 7v7c0 .553-.447 1-1 1H2c-.55 0-1-.447-1-1V7c0-.552.448-1 1-1h2V3c0-.552.448-1 1-1h6c.553 0 1 .448 1 1v3h2c.553 0 1 .448 1 1z"/><path d="M14 6h-2V3c0-.552-.447-1-1-1H5.002 5c-.552 0-1 .448-1 1v3H2.002 2c-.552 0-1 .448-1 1v7c0 .553.45 1 1 1h12c.553 0 1-.447 1-1V7c0-.552-.447-1-1-1zM6 4h4v2H6V4z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--following" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8.537 9H2.75C1.234 9 0 10.23 0 11.75V16h7.81c-.512-.883-.81-1.905-.81-3 0-.19.01-.382.027-.57.125-1.313.677-2.5 1.51-3.43z"/><circle cx="6" cy="4.5" r="2.5"/><path d="M12 10v2H9v2h3v2l4-3"/><path fill="none" d="M0 0h16v16H0z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--following" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8.537 9H2.75C1.234 9 0 10.23 0 11.75V16h7.81c-.512-.883-.81-1.905-.81-3 0-.19.01-.382.027-.57.125-1.313.677-2.5 1.51-3.43z"/><circle cx="6" cy="4.5" r="2.5"/><path d="M12 10v2H9v2h3v2l4-3"/><path fill="none" d="M0 0h16v16H0z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.687 7.875">'), 
            o.b("\n" + n), o.b('  <path d="M635.621,375.374a0.7,0.7,0,0,0-.147.017,1.31,1.31,0,0,0-.14.041,0.625,0.625,0,0,0-.129.065,0.7,0.7,0,0,0-.123.1l-3.176,3.176a0.932,0.932,0,0,0-.164.252,0.7,0.7,0,0,0-.059.281,0.737,0.737,0,0,0,.059.287,0.767,0.767,0,0,0,.164.247l3.176,3.175a0.734,0.734,0,0,0,.252.17,0.763,0.763,0,0,0,.281.053,0.819,0.819,0,0,0,.287-0.053,0.617,0.617,0,0,0,.246-0.17,0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.562,0.752,0.752,0,0,0-.164-0.246l-2.648-2.649,2.648-2.66a0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.563,0.774,0.774,0,0,0-.164-0.246,0.855,0.855,0,0,0-.117-0.1,0.488,0.488,0,0,0-.129-0.065c-0.047-.015-0.094-0.029-0.141-0.041a0.609,0.609,0,0,0-.14-0.017h0Z" transform="translate(-631.688 -375.375)"/>'), 
            o.b("\n" + n), o.b("</svg>"), o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.687 7.875">\n  <path d="M635.621,375.374a0.7,0.7,0,0,0-.147.017,1.31,1.31,0,0,0-.14.041,0.625,0.625,0,0,0-.129.065,0.7,0.7,0,0,0-.123.1l-3.176,3.176a0.932,0.932,0,0,0-.164.252,0.7,0.7,0,0,0-.059.281,0.737,0.737,0,0,0,.059.287,0.767,0.767,0,0,0,.164.247l3.176,3.175a0.734,0.734,0,0,0,.252.17,0.763,0.763,0,0,0,.281.053,0.819,0.819,0,0,0,.287-0.053,0.617,0.617,0,0,0,.246-0.17,0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.562,0.752,0.752,0,0,0-.164-0.246l-2.648-2.649,2.648-2.66a0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.563,0.774,0.774,0,0,0-.164-0.246,0.855,0.855,0,0,0-.117-0.1,0.488,0.488,0,0,0-.129-0.065c-0.047-.015-0.094-0.029-0.141-0.041a0.609,0.609,0,0,0-.14-0.017h0Z" transform="translate(-631.688 -375.375)"/>\n</svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--replace" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V8l-3.5 5L9 8h2c0-1.93-1.57-3.5-3.5-3.5S4 6.07 4 8s1.57 3.5 3.5 3.5v3C3.916 14.5 1 11.584 1 8s2.916-6.5 6.5-6.5S14 4.416 14 8h2V0H0z"/><path d="M7.5 1.5C3.916 1.5 1 4.416 1 8c0 3.583 2.916 6.5 6.5 6.5v-3C5.57 11.5 4 9.93 4 8s1.57-3.5 3.5-3.5S11 6.07 11 8H9l3.5 5L16 8h-2c0-3.584-2.916-6.5-6.5-6.5z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--replace" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M0 0v16h16V8l-3.5 5L9 8h2c0-1.93-1.57-3.5-3.5-3.5S4 6.07 4 8s1.57 3.5 3.5 3.5v3C3.916 14.5 1 11.584 1 8s2.916-6.5 6.5-6.5S14 4.416 14 8h2V0H0z"/><path d="M7.5 1.5C3.916 1.5 1 4.416 1 8c0 3.583 2.916 6.5 6.5 6.5v-3C5.57 11.5 4 9.93 4 8s1.57-3.5 3.5-3.5S11 6.07 11 8H9l3.5 5L16 8h-2c0-3.584-2.916-6.5-6.5-6.5z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v6.5h3v-2L6.5 8 3 11.5v-2H0V16h6.5v-3h-2L8 9.5l3.5 3.5h-2v3H16V9.5h-3v2L9.5 8 13 4.5v2h3V0H0zm8 6.5L4.5 3h2V.001h3V3h2L8 6.5z" fill="none"/><path d="M3 11.5L6.5 8 3 4.5v2H0v3h3zM13 4.5L9.5 8l3.5 3.5v-2h3v-3h-3zM9.5 3V.001h-3V3h-2L8 6.5 11.5 3zM11.5 13L8 9.5 4.5 13h2v3h3v-3z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v6.5h3v-2L6.5 8 3 11.5v-2H0V16h6.5v-3h-2L8 9.5l3.5 3.5h-2v3H16V9.5h-3v2L9.5 8 13 4.5v2h3V0H0zm8 6.5L4.5 3h2V.001h3V3h2L8 6.5z" fill="none"/><path d="M3 11.5L6.5 8 3 4.5v2H0v3h3zM13 4.5L9.5 8l3.5 3.5v-2h3v-3h-3zM9.5 3V.001h-3V3h-2L8 6.5 11.5 3zM11.5 13L8 9.5 4.5 13h2v3h3v-3z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(264), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Icon-light-2Qt .rf-icon {\n  fill: #fff;\n}\n.Icon-gray-1nN .rf-icon {\n  fill: #959595;\n}\n.Icon-dark-2DM .rf-icon {\n  fill: #191919;\n}\n.Icon-behance-2zw .rf-icon {\n  fill: #0057ff;\n}\n", "" ]), 
    t.locals = {
        light: "Icon-light-2Qt",
        gray: "Icon-gray-1nN",
        dark: "Icon-dark-2DM",
        behance: "Icon-behance-2zw"
    };
}, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return i;
    }), n.d(t, "a", function() {
        return a;
    });
    n(17), n(18), n(20), n(24), n(25), n(22), n(71), n(128), n(21);
    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function i(e, t, n) {
        return e(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    r(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({
            translate: (i = n, function() {
                return function(e) {
                    return e = e.split("|"), i(e[0], e[1]);
                };
            })
        }, t));
        var i;
    }
    function a(e, t, n) {
        return Object.keys(t).forEach(function(n) {
            e.template.subs[n] = function(e, o, r) {
                return r.b(t[n]);
            };
        }), n ? i(e, t, n) : e(t);
    }
}, , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b("<div "), o.s(o.f("instant_backfill", e, t, 1), e, t, 0, 26, 49, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('data-backfill="instant"');
            }), e.pop()), o.b(' class="js-action-follow '), o.s(o.f("is_following", e, t, 1), e, t, 0, 112, 122, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" following");
            }), e.pop()), o.b(' form-button-wrap rf-button__container rf-button__container--follow follow-button-container rf-button__container--follow-link" data-followee="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('" data-entity="'), o.sub("type", e, t, n), o.b('" data-following="'), 
            o.s(o.f("is_following", e, t, 1), e, t, 0, 355, 359, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("true");
            }), e.pop()), o.s(o.f("is_following", e, t, 1), e, t, 1, 0, 0, "") || o.b("false"), 
            o.b('" data-display-name="'), o.b(o.v(o.f("display_name", e, t, 0))), o.b('" data-source="'), 
            o.b(o.v(o.f("source", e, t, 0))), o.b('" '), o.sub("attrs", e, t, n), o.b(">"), 
            o.b("\n" + n), o.b('  <a class="js-form-button-follow rf-button--small rf-button rf-button--follow"><span class="rf-button__label">'), 
            o.sub("follow", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b('  <a class="rf-button--small rf-button rf-button--secondary rf-button--following"><span class="rf-button__label">'), 
            o.sub("following", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b('  <a class="js-form-button-unfollow rf-button--small rf-button rf-button--danger rf-button--unfollow"><span class="rf-button__label">'), 
            o.sub("unfollow", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), 
            o.fl();
        },
        partials: {},
        subs: {
            type: function(e, t, n, o) {},
            attrs: function(e, t, n, o) {},
            follow: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 637, 657, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_follow|Follow");
                }), e.pop()), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            },
            following: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 859, 885, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_following|Following");
                }), e.pop()), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            },
            unfollow: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 1109, 1133, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_unfollow|Unfollow");
                }), e.pop()), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            }
        }
    }, '<div {{#instant_backfill}}data-backfill="instant"{{/instant_backfill}} class="js-action-follow {{#is_following}} following{{/is_following}} form-button-wrap rf-button__container rf-button__container--follow follow-button-container rf-button__container--follow-link" data-followee="{{id}}" data-entity="{{$type}}{{/type}}" data-following="{{#is_following}}true{{/is_following}}{{^is_following}}false{{/is_following}}" data-display-name="{{display_name}}" data-source="{{source}}" {{$attrs}}{{/attrs}}>\n  <a class="js-form-button-follow rf-button--small rf-button rf-button--follow"><span class="rf-button__label">{{$follow}}{{#translate}}button_follow|Follow{{/translate}}{{follow_label_postfix}}{{/follow}}</span></a>\n  <a class="rf-button--small rf-button rf-button--secondary rf-button--following"><span class="rf-button__label">{{$following}}{{#translate}}button_following|Following{{/translate}}{{follow_label_postfix}}{{/following}}</span></a>\n  <a class="js-form-button-unfollow rf-button--small rf-button rf-button--danger rf-button--unfollow"><span class="rf-button__label">{{$unfollow}}{{#translate}}button_unfollow|Unfollow{{/translate}}{{follow_label_postfix}}{{/unfollow}}</span></a>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, , , , , function(e, t, n) {
    var o = n(815);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("51cfa66e", o, !0, {});
}, function(e, t, n) {
    var o = n(817);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("7fea1787", o, !0, {});
}, function(e, t, n) {
    var o = n(819);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("b76fefa2", o, !0, {});
}, function(e, t, n) {
    var o = n(821);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("2bdd7b44", o, !0, {});
}, function(e, t, n) {
    var o = n(823);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("78f61d8e", o, !0, {});
}, function(e, t, n) {
    var o = n(825);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("90a8493c", o, !0, {});
}, function(e, t, n) {
    var o = n(827);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("436d11af", o, !0, {});
}, function(e, t, n) {
    var o = n(829);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("40782d1c", o, !0, {});
}, function(e, t, n) {
    var o = n(831);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("75c00c4d", o, !0, {});
}, function(e, t, n) {
    var o = n(833);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("2e6a6264", o, !0, {});
}, function(e, t, n) {
    "use strict";
    n(17), n(18), n(20), n(24), n(25), n(22), n(21);
    var o = n(327), r = n(49);
    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var s = {
        name: "Error",
        components: {
            Icon: o.a
        },
        data: function() {
            return {
                timeOutId: null,
                duration: 5e3
            };
        },
        props: {
            message: {
                type: String
            }
        },
        watch: {
            message: function(e) {
                e && (this.clearTimer(), this.setTimer());
            }
        },
        computed: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(r.mapState)([ "gates" ])),
        methods: {
            setTimer: function() {
                var e = this;
                this.timeOutId = setTimeout(function() {
                    return e.$emit("closeError");
                }, this.duration);
            },
            clearTimer: function() {
                clearTimeout(this.timeOutId), this.timeOutId = null;
            },
            closeError: function() {
                this.$emit("closeError"), this.clearTimer();
            }
        },
        mounted: function() {
            this.setTimer();
        },
        beforeDestroy: function() {
            this.clearTimer();
        }
    }, l = n(526), c = n(53);
    var u = Object(c.default)(s, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", {
            ref: "root",
            on: {
                click: t.closeError
            }
        }, [ o("transition", {
            attrs: {
                name: "slide",
                "enter-active-class": t.$style.slideDown,
                "leave-active-class": t.$style.slideUp
            }
        }, [ o("div", [ t.message ? o("div", {
            ref: "message",
            class: [ t.$style.error, "qa-error", (e = {}, e[t.$style.hasNewNav] = t.gates.design_update_2020, 
            e) ]
        }, [ o("Icon", {
            class: t.$style.icon
        }), t._v(t._s(t.message)) ], 1) : t._e() ]) ]) ], 1);
    }, [], !1, function(e) {
        this.$style = l.default.locals || l.default;
    }, null, null);
    t.a = u.exports;
}, function(e, t, n) {
    "use strict";
    n(126);
    var o = n(14), r = n(564), i = n(360), a = {
        name: "Tool",
        components: {
            Tooltip: n(183).a,
            NewWindowIcon: r.a,
            ArrowRightAltIcon: i.a
        },
        props: {
            id: {
                type: [ Number, String ]
            },
            title: {
                type: String,
                required: !0
            },
            size: {
                type: Number,
                default: 31
            },
            imageSrc: {
                type: String
            },
            downloadLink: {
                type: String,
                required: !0
            },
            galleryLink: {
                type: String
            },
            tooltipAlignment: {
                type: String,
                default: "center"
            },
            isExpanded: Boolean
        },
        computed: {
            toolId: function() {
                return Number(this.id);
            }
        },
        methods: {
            openLink: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.type, n = void 0 === t ? "tool" : t, r = e.source, i = void 0 === r ? "link" : r, a = "gallery" === n ? this.galleryLink : this.downloadLink;
                o.default.open(a, "_blank"), this.$emit(n + "Opened", {
                    title: this.title,
                    source: i
                });
            }
        }
    }, s = n(589), l = n(53);
    var c = Object(l.default)(a, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", {
            ref: "container",
            class: (e = {}, e[t.$style.expanded] = t.isExpanded, e)
        }, [ t.imageSrc ? [ o("Tooltip", {
            attrs: {
                alignment: t.tooltipAlignment,
                position: "bottom",
                horizontalPadding: 15,
                verticalPadding: 15
            }
        }, [ o("span", {
            ref: "toolIcon",
            class: t.$style.tool,
            on: {
                click: function(e) {
                    return t.openLink({
                        source: "icon"
                    });
                }
            }
        }, [ o("img", {
            ref: "image",
            class: t.$style.toolIcon,
            style: {
                width: t.size + "px",
                height: t.size + "px"
            },
            attrs: {
                src: t.imageSrc,
                alt: ""
            }
        }) ]), o("div", {
            class: t.$style.tooltipContent,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ o("div", {
            ref: "title",
            class: t.$style.title
        }, [ t._v(t._s(t.title)) ]), t.galleryLink ? o("div", {
            ref: "galleryLink",
            class: t.$style.link,
            on: {
                click: function(e) {
                    return t.openLink({
                        type: "gallery",
                        source: "tooltip"
                    });
                }
            }
        }, [ t._v(t._s(t.$translate("tool_view_gallery_link", "View Gallery")) + " "), o("ArrowRightAltIcon", {
            class: t.$style.linkArrow
        }) ], 1) : t._e(), o("div", {
            ref: "toolLink",
            class: t.$style.link,
            on: {
                click: function(e) {
                    return t.openLink({
                        source: "tooltip"
                    });
                }
            }
        }, [ t._v(t._s(t.$translate("tool_view_download_link", "Download Now")) + " "), o("ArrowRightAltIcon", {
            class: t.$style.linkArrow
        }) ], 1) ]) ]) ] : [ o("span", {
            class: t.$style.tool,
            on: {
                click: function(e) {
                    return t.openLink();
                }
            }
        }, [ t._v(" " + t._s(t.title) + " "), o("NewWindowIcon", {
            class: t.$style.newWindow
        }) ], 1) ], t.isExpanded ? o("div", {
            ref: "details",
            class: t.$style.details
        }, [ o("div", {
            class: t.$style.name
        }, [ t._v(t._s(t.title)) ]), o("div", {
            class: t.$style.download,
            on: {
                click: function(e) {
                    return t.openLink();
                }
            }
        }, [ t._v(" " + t._s(t.$translate("live_info_tool_download", "Download Now")) + " ") ]) ]) : t._e() ], 2);
    }, [], !1, function(e) {
        this.$style = s.default.locals || s.default;
    }, null, null);
    t.a = c.exports;
}, , , , , , function(e, t, n) {
    "use strict";
    n(17), n(348), n(18), n(20), n(30), n(73), n(24), n(25), n(22), n(21);
    var o = n(314), r = n(428), i = n(215), a = n(227), s = n(216), l = n(315), c = n(182), u = n(406), p = n(340), d = n(298), f = n(316), b = n(559), h = n(323), m = n(341), g = n(226), v = n(250), w = n(197), _ = n(78), y = n.n(_), j = n(221);
    function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? x(Object(n), !0).forEach(function(t) {
                C(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var k = {
        name: "ProjectCoverNeue",
        props: {
            project: {
                type: Object,
                required: !0
            },
            isFeatureQueueAdmin: {
                type: Boolean,
                default: !1
            },
            shouldShowEditDropdown: {
                type: Boolean,
                default: !1
            },
            areDetailsShownOnMobile: {
                type: Boolean,
                default: !0
            },
            isClickDisabled: {
                type: Boolean,
                default: !1
            },
            showDetailOverlay: {
                type: Boolean,
                default: !0
            },
            isCollectionEditable: {
                type: Boolean,
                default: !1
            },
            cull: {
                type: Boolean
            },
            shouldDisplayFeatureFlags: {
                type: Boolean,
                default: !0
            },
            showSiblingProjectsSelector: {
                type: Boolean,
                default: !0
            },
            trackingSource: {
                type: String
            },
            isStatsVisible: {
                type: Boolean
            },
            shouldDisplayDraftControls: {
                type: Boolean
            },
            hasNoConstraints: {
                type: Boolean,
                default: !1
            },
            shouldRemoveMultiOwnerTooltip: {
                type: Boolean,
                default: !1
            },
            locale: {
                type: String
            }
        },
        data: function() {
            return {
                loaded: !1,
                defaultCoverSize: g.b,
                isUrlInFocus: !1,
                isOwnerInFocus: !1,
                isHovered: !1,
                featureRibbonsVisibilityStatus: null,
                isFeatureFlagInFocus: !1
            };
        },
        filters: {
            commaSplit: j.b,
            abbreviate: j.a
        },
        watch: {
            loaded: function(e) {
                e && this.$emit("coverImageLoaded");
            }
        },
        components: {
            Cover: o.a,
            AppreciationsIcon: a.a,
            ViewsIcon: s.a,
            Btn: c.a,
            TitleOwner: u.a,
            PrivacyLockTooltip: l.a,
            GearDropdown: f.a,
            CoverStats: h.a,
            DropdownItem: i.a,
            DominantColor: m.a,
            CollectionEdit: b.a,
            Feature: r.a,
            OwnersNeue: d.a,
            Title: p.a
        },
        methods: {
            getProjectUrl: function(e) {
                return this.trackingSource && (e = P({}, e, {
                    tracking_source: this.trackingSource
                })), Object(v.a)(this.project.url, e);
            },
            coverSrc: function(e) {
                return Object(g.e)(e);
            },
            coverSrcset: function(e) {
                return Object(w.d)(e);
            },
            imageLoaded: function() {
                return this.$refs.image.complete;
            },
            handleFeatureFlagVisibility: function(e, t) {
                this.featureRibbonsVisibilityStatus[e] = t, this.isFeatureFlagInFocus = this.featureRibbonsVisibilityStatus.filter(function(e) {
                    return e;
                }).length > 0;
            },
            mouseEventHandler: function(e) {
                this.isClickDisabled && (e.preventDefault(), e.stopPropagation(), "click" === e.type && this.$emit("clickPrevented"));
            }
        },
        mounted: function() {
            this.imageLoaded() && (this.loaded = !0);
        },
        computed: {
            genericProjectLink: function() {
                return this.getProjectUrl();
            },
            canDisplayFeaturedFlags: function() {
                return this.shouldDisplayFeatureFlags && this.featureFlags;
            },
            isInFocus: function() {
                var e = this.isUrlInFocus || this.isOwnerInFocus || this.isFeatureFlagInFocus;
                return e ? this.$emit("isFocused") : this.$emit("isBlurred"), e;
            },
            featureFlags: function() {
                var e = this.project.features && this.project.features.length && this.project.features.slice(0, 5);
                return !!e && (this.featureRibbonsVisibilityStatus = new Array(e.length).fill(!1), 
                e.map(function(t, n) {
                    return P({}, t, e.length - n > 2 ? {
                        tooltipAlignment: "center"
                    } : {
                        tooltipAlignment: "right"
                    });
                }));
            },
            lastModified: function() {
                return y.a.unix(this.project.modified_on).fromNow();
            },
            servedMarks: function() {
                return this.project.served && this.project.served.mark;
            },
            queuedMarks: function() {
                return this.project.queued && this.project.queued.mark;
            }
        }
    }, O = n(575), I = n(53);
    var T = Object(I.default)(k, function() {
        var e, t, n, o, r, i, a, s = this, l = s.$createElement, c = s._self._c || l;
        return c("div", {
            ref: "root",
            class: [ s.$style.root, (e = {}, e[s.$style.statsVisible] = s.isStatsVisible, e), (t = {}, 
            t[s.$style.noConstraints] = s.hasNoConstraints, t) ]
        }, [ c("Cover", {
            ref: "cover",
            class: [ s.$style.cover, "qa-project-cover", {
                "js-project-cover": s.showSiblingProjectsSelector
            }, (n = {}, n[s.$style.coverWithFlags] = s.canDisplayFeaturedFlags, n), (o = {}, 
            o[s.$style.statsVisible] = s.isStatsVisible, o), (r = {}, r[s.$style.loaded] = s.loaded, 
            r) ],
            attrs: {
                wrapperClasses: [ s.$style.wrapper, "qa-cover-wrapper" ],
                isInFocus: s.isInFocus,
                hasNoConstraints: s.hasNoConstraints
            },
            nativeOn: {
                mouseenter: function(e) {
                    s.isHovered = !0;
                },
                mouseleave: function(e) {
                    s.isHovered = !1;
                }
            },
            scopedSlots: s._u([ {
                key: "content",
                fn: function(e) {
                    return [ c("DominantColor", {
                        attrs: {
                            colors: s.project.colors
                        }
                    }), c("img", {
                        directives: [ {
                            name: "show",
                            rawName: "v-show",
                            value: !s.cull,
                            expression: "!cull"
                        } ],
                        ref: "image",
                        class: [ s.$style.image, "js-cover-image" ],
                        attrs: {
                            sizes: s.defaultCoverSize + "px",
                            src: s.coverSrc(s.project.covers),
                            srcset: s.coverSrcset(s.project.covers),
                            alt: s.project.name
                        },
                        on: {
                            error: function(e) {
                                s.loaded = !0;
                            },
                            load: function(e) {
                                s.loaded = !0;
                            }
                        }
                    }), s.$slots.topRight ? c("div", {
                        class: s.$style.topRight
                    }, [ s._t("topRight", null, {
                        project: s.project
                    }) ], 2) : s._e(), s.servedMarks || s.queuedMarks ? c("ul", {
                        class: s.$style.curationMarks
                    }, [ s._l(s.servedMarks, function(e) {
                        return c("li", {
                            key: e,
                            ref: "servedMark",
                            refInFor: !0,
                            class: [ s.$style.curationMark, s.$style.served ]
                        }, [ s._v(s._s(e)) ]);
                    }), s._l(s.queuedMarks, function(e) {
                        return c("li", {
                            key: e,
                            ref: "queuedMark",
                            refInFor: !0,
                            class: [ s.$style.curationMark, s.$style.queued ]
                        }, [ s._v(s._s(e)) ]);
                    }) ], 2) : s._e(), c("div", {
                        class: s.$style.controlsAndPrivacyContainer
                    }, [ s.shouldShowEditDropdown ? c("GearDropdown", {
                        ref: "gearDropdown",
                        class: [ e.hoverClass, "js-controls-overlay-menu" ],
                        attrs: {
                            alignment: "left"
                        }
                    }, [ c("DropdownItem", [ c("a", {
                        staticClass: "js-project-edit",
                        attrs: {
                            href: "/portfolio/editor?project_id=" + s.project.id
                        }
                    }, [ s._v(s._s(s.$translate("project_cover_dropdown_edit", "Edit"))) ]) ]), c("DropdownItem", [ c("span", {
                        ref: "clone",
                        on: {
                            click: function(e) {
                                return s.$emit("clone", {
                                    id: s.project.id
                                });
                            }
                        }
                    }, [ s._v(s._s(s.$translate("project_cover_dropdown_clone", "Clone"))) ]) ]), s.project.private ? s._e() : c("DropdownItem", [ c("a", {
                        staticClass: "js-project-promote",
                        attrs: {
                            href: s.getProjectUrl({
                                share: "1"
                            })
                        }
                    }, [ s._v(s._s(s.$translate("project_cover_dropdown_promote", "Promote"))) ]) ]), c("DropdownItem", [ c("span", {
                        ref: "unpublish",
                        on: {
                            click: function(e) {
                                return s.$emit("unpublish", {
                                    id: s.project.id
                                });
                            }
                        }
                    }, [ s._v(s._s(s.$translate("project_cover_dropdown_unpublish", "Unpublish"))) ]) ]), s.project.is_founder ? c("DropdownItem", [ c("span", {
                        ref: "delete",
                        staticClass: "js-project-delete",
                        on: {
                            click: function(e) {
                                return s.$emit("delete", {
                                    id: s.project.id
                                });
                            }
                        }
                    }, [ s._v(s._s(s.$translate("project_cover_dropdown_delete", "Delete"))) ]) ]) : c("DropdownItem", [ c("span", {
                        ref: "remove",
                        on: {
                            click: function(e) {
                                return s.$emit("remove", {
                                    id: s.project.id
                                });
                            }
                        }
                    }, [ s._v(s._s(s.$translate("project_cover_dropdown_remove", "Remove"))) ]) ]) ], 1) : s._e(), s.isCollectionEditable ? c("CollectionEdit", {
                        ref: "collectionEditIcon",
                        class: e.hoverClass,
                        attrs: {
                            projectId: s.project.id,
                            alignment: "left"
                        },
                        on: {
                            deleteFromCollection: function(e) {
                                return s.$emit("deleteProjectFromCollection");
                            },
                            editCollection: function(e) {
                                return s.$emit("editProjectRelatedCollection");
                            }
                        }
                    }) : s._e(), s.project.private ? c("div", {
                        class: s.$style.privacyLockContainer
                    }, [ c("PrivacyLockTooltip") ], 1) : s._e() ], 1) ];
                }
            } ], null, !0)
        }, [ c("template", {
            slot: s.isFeatureQueueAdmin ? "alwaysVisibleOverlay" : "hoverOverlay"
        }, [ s.canDisplayFeaturedFlags ? c("div", {
            ref: "tooltipFader",
            class: s.$style.featureFlagsContainer
        }, s._l(s.featureFlags, function(e, t) {
            return c("Feature", {
                key: "featured-" + t,
                ref: "featureFlag",
                refInFor: !0,
                class: s.$style.feature,
                attrs: {
                    tooltipAlignment: e.tooltipAlignment,
                    index: t,
                    shouldForceDisplayRibbons: s.isHovered || s.isInFocus,
                    url: e.site.url,
                    featuredDate: e.featured_on,
                    site: e.site
                },
                on: {
                    featureTooltipOpen: function(e) {
                        return s.handleFeatureFlagVisibility(t, !0);
                    },
                    featureTooltipClosed: function(e) {
                        return s.handleFeatureFlagVisibility(t, !1);
                    }
                }
            });
        }), 1) : s._e(), s.showDetailOverlay ? [ !s.project.published_on && s.shouldDisplayDraftControls ? c("div", {
            ref: "draftControls",
            class: s.$style.draftControls
        }, [ c("Btn", {
            class: s.$style.draftControl,
            attrs: {
                customLabelWrapperClass: s.$style.draftControlText,
                type: "primary",
                href: "/portfolio/editor?project_id=" + s.project.id
            }
        }, [ s._v(s._s(s.$translate("project_draft_control_edit", "Edit Project"))) ]), c("Btn", {
            class: s.$style.draftControl,
            attrs: {
                customLabelWrapperClass: s.$style.draftControlText
            },
            on: {
                click: function(e) {
                    return s.$emit("delete", {
                        id: s.project.id
                    });
                }
            }
        }, [ s._v(s._s(s.$translate("project_draft_control_delete", "Delete Project"))) ]), c("div", {
            class: s.$style.draftModified
        }, [ s._v(" " + s._s(s.$translate("project_draft_last_modified", "Last modified")) + " "), c("time", {
            ref: "lastModified"
        }, [ s._v(s._s(s.lastModified)) ]) ]) ], 1) : c("a", {
            ref: "published",
            class: [ s.$style.coverLink, "js-project-cover-image-link", "js-project-link" ],
            attrs: {
                href: s.genericProjectLink
            },
            on: {
                mouseup: s.mouseEventHandler,
                click: s.mouseEventHandler,
                focus: function(e) {
                    s.isUrlInFocus = !0;
                },
                blur: function(e) {
                    s.isUrlInFocus = !1;
                }
            }
        }), c("div", {
            ref: "details",
            class: [ s.$style.details, (i = {}, i[s.$style.draftDetails] = !s.project.published_on, 
            i), (a = {}, a[s.$style.hideDetailsMobile] = !s.areDetailsShownOnMobile, a) ]
        }, [ c("div", {
            class: s.$style.info
        }, [ s.isStatsVisible ? c("Title", {
            ref: "title",
            attrs: {
                url: s.getProjectUrl(),
                isFeatured: s.project.isFeatured,
                hasShadow: !1,
                shouldOpenProjectPopupOnClick: !0
            },
            on: {
                focus: function(e) {
                    s.isOwnerInFocus = !0;
                },
                blur: function(e) {
                    s.isOwnerInFocus = !1;
                }
            }
        }, [ s._v(s._s(s.project.name)) ]) : c("TitleOwner", {
            ref: "titleOwner",
            attrs: {
                url: s.getProjectUrl(),
                title: s.project.name,
                owners: s.project.owners,
                isFeatured: s.project.isFeatured,
                shouldRemoveMultiOwnerTooltip: s.shouldRemoveMultiOwnerTooltip,
                shouldOpenProjectPopupOnClick: ""
            },
            on: {
                elOnFocus: function(e) {
                    s.isOwnerInFocus = !0;
                },
                elOnBlur: function(e) {
                    s.isOwnerInFocus = !1;
                }
            }
        }) ], 1), s.isStatsVisible ? s._e() : c("CoverStats", {
            ref: "stats"
        }, [ c("template", {
            slot: "content"
        }, [ c("AppreciationsIcon", {
            class: s.$style.icon
        }), c("span", {
            ref: "appreciationsTitle",
            attrs: {
                title: s._f("commaSplit")(s.project.stats.appreciations, s.locale)
            }
        }, [ s._v(s._s(s._f("abbreviate")(s.project.stats.appreciations, s.locale))) ]), c("ViewsIcon", {
            class: s.$style.icon
        }), c("span", {
            ref: "viewsTitle",
            attrs: {
                title: s._f("commaSplit")(s.project.stats.views, s.locale)
            }
        }, [ s._v(s._s(s._f("abbreviate")(s.project.stats.views, s.locale))) ]) ], 1) ], 2) ], 1), s.$slots.topRightHover ? c("div", {
            class: s.$style.topRight
        }, [ s._t("topRightHover", null, {
            project: s.project
        }) ], 2) : s._e() ] : s._e() ], 2), s.showDetailOverlay ? s._e() : c("template", {
            slot: "alwaysVisibleOverlay"
        }, [ c("a", {
            ref: "published",
            class: [ s.$style.coverLink, "js-project-cover-image-link", "js-project-link" ],
            attrs: {
                href: s.genericProjectLink
            },
            on: {
                mouseup: s.mouseEventHandler,
                click: s.mouseEventHandler
            }
        }) ]) ], 2), s.isStatsVisible ? c("div", {
            class: s.$style.visibleStatsAndOwners
        }, [ c("span", {
            class: s.$style.ownersContainer
        }, [ c("OwnersNeue", {
            ref: "owners",
            class: s.$style.owners,
            attrs: {
                owners: s.project.owners,
                theme: "dark",
                showAvatar: !0
            },
            on: {
                ownerOnFocus: function(e) {
                    return s.$emit("elOnFocus");
                },
                ownerOnBlur: function(e) {
                    return s.$emit("elOnBlur");
                },
                tooltipOnFocus: function(e) {
                    return s.$emit("elOnFocus");
                },
                tooltipOnBlur: function(e) {
                    return s.$emit("elOnBlur");
                }
            }
        }) ], 1), c("div", {
            class: s.$style.visibleStats
        }, [ c("CoverStats", {
            ref: "stats"
        }, [ c("template", {
            slot: "content"
        }, [ c("AppreciationsIcon", {
            class: [ s.$style.icon, s.$style.appreciateIcon ]
        }), c("span", {
            ref: "appreciationsTitle",
            attrs: {
                title: s._f("commaSplit")(s.project.stats.appreciations, s.locale)
            }
        }, [ s._v(s._s(s._f("abbreviate")(s.project.stats.appreciations, s.locale))) ]), c("ViewsIcon", {
            class: [ s.$style.icon, s.$style.viewsIcon ]
        }), c("span", {
            ref: "viewsTitle",
            attrs: {
                title: s._f("commaSplit")(s.project.stats.views, s.locale)
            }
        }, [ s._v(s._s(s._f("abbreviate")(s.project.stats.views, s.locale))) ]) ], 1) ], 2) ], 1) ]) : s._e() ], 1);
    }, [], !1, function(e) {
        this.$style = O.default.locals || O.default;
    }, null, null);
    t.a = T.exports;
}, , , , , , function(e, t, n) {
    "use strict";
    var o = n(597), r = n(53);
    var i = Object(r.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            class: this.$style.icon,
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "17",
                height: "17",
                viewBox: "0 0 17 17"
            }
        }, [ t("path", {
            attrs: {
                d: "M5.69,3.395,7.97,5.487h6.217V7.579H2.858V3.743a.351.351,0,0,1,.354-.349ZM5.69,2H3.212a1.757,1.757,0,0,0-1.77,1.743V7.579h-1a.356.356,0,0,0-.27.123A.345.345,0,0,0,.1,7.985L1.336,14.68a.705.705,0,0,0,.7.572H15.012a.705.705,0,0,0,.7-.572L16.95,7.985a.345.345,0,0,0-.079-.283.356.356,0,0,0-.27-.123h-1V4.789a.7.7,0,0,0-.708-.7H8.523L6.859,2.514A1.657,1.657,0,0,0,5.69,2Z",
                transform: "translate(-0.023 -0.5)"
            }
        }) ]);
    }, [], !1, function(e) {
        this.$style = o.default.locals || o.default;
    }, null, null);
    t.a = i.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(274), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Error-error-169 {\n  -webkit-box-align: center;\n          align-items: center;\n  background: #df0d0d;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  font-weight: bold;\n  -webkit-box-pack: center;\n          justify-content: center;\n  left: 0;\n  line-height: 35px;\n  position: fixed;\n  text-align: center;\n  top: 57px;\n  width: 100%;\n  z-index: 251;\n}\n.Error-error-169 :not(.Error-hasNewNav-2e7) {\n    top: 60px;\n}\n.rf-body--has-secondary-nav .Error-error-169 {\n  top: 120px;\n}\n.Error-icon-39T {\n  fill: #fff;\n  height: 14px;\n  margin: -2px 10px 0;\n  width: 14px;\n}\n@-webkit-keyframes Error-slideDown-2af {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes Error-slideDown-2af {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n.Error-slideDown-2af {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: Error-slideDown-2af;\n          animation-name: Error-slideDown-2af;\n}\n.Error-slideUp-l_e {\n  animation-direction: reverse;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: Error-slideDown-2af;\n          animation-name: Error-slideDown-2af;\n}\n", "" ]), 
    t.locals = {
        error: "Error-error-169",
        hasNewNav: "Error-hasNewNav-2e7",
        icon: "Error-icon-39T",
        slideDown: "Error-slideDown-2af",
        slideUp: "Error-slideUp-l_e"
    };
}, function(e, t, n) {
    "use strict";
    function o(e) {
        var t = e || document.querySelector("body"), n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, o = n;
        return t.style.top = -1 * o + "px", t.style.position = "fixed", t.style.right = "0", 
        t.style.left = "0", t.style.zIndex = "0", t.classList.add("is-locked"), document.documentElement.style.overflowY = "scroll", 
        document.documentElement.style.overscrollBehavior = "none", n;
    }
    function r(e, t) {
        var n = e || document.querySelector("body");
        n.style.top = n.style.zIndex = n.style.right = n.style.left = n.style.position = "", 
        document.documentElement.style.overflowY = document.documentElement.style.overscrollBehavior = "", 
        window.scrollTo(0, t), n.classList.remove("is-locked");
    }
    n.d(t, "a", function() {
        return o;
    }), n.d(t, "b", function() {
        return r;
    });
}, , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(280), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Feature-ribbon-20X {\n  height: 57px;\n  overflow: hidden;\n  width: auto;\n}\n.Feature-ribbonImage-2tP {\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n  position: relative;\n  top: -7px;\n  -webkit-transition: top 0.15s ease;\n  transition: top 0.15s ease;\n}\n.Feature-ribbonImageDelay-1d3 {\n  opacity: 0;\n  -webkit-transform: translateY(-10%);\n          transform: translateY(-10%);\n  -webkit-transition: opacity 0.2s linear, -webkit-transform 0.2s linear;\n  transition: opacity 0.2s linear, -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear, opacity 0.2s linear;\n  transition: transform 0.2s linear, opacity 0.2s linear, -webkit-transform 0.2s linear;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='0'] {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='1'] {\n    -webkit-transition-delay: 0.1s;\n            transition-delay: 0.1s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='2'] {\n    -webkit-transition-delay: 0.2s;\n            transition-delay: 0.2s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='3'] {\n    -webkit-transition-delay: 0.3s;\n            transition-delay: 0.3s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='4'] {\n    -webkit-transition-delay: 0.4s;\n            transition-delay: 0.4s;\n}\n.Feature-forceDisplayRibbons-46Z .Feature-ribbonImageDelay-1d3 {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n.Feature-ribbonContainer-P5U:hover .Feature-ribbonImage-2tP {\n  top: 0;\n}\n.Feature-ribbonContainer-P5U:hover .Feature-numProjects-2rt {\n  opacity: 0;\n}\n.Feature-featureHeader-git {\n  padding: 5px 7px;\n}\n.Feature-featureInfo-G8D {\n  padding: 0 7px 5px;\n}\n.Feature-numProjects-2rt {\n  color: #696969;\n  font-size: 11px;\n  font-weight: bold;\n  margin-top: -10px;\n  text-align: center;\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  width: 100%;\n}\n", "" ]), 
    t.locals = {
        ribbon: "Feature-ribbon-20X",
        ribbonImage: "Feature-ribbonImage-2tP",
        ribbonImageDelay: "Feature-ribbonImageDelay-1d3",
        forceDisplayRibbons: "Feature-forceDisplayRibbons-46Z",
        ribbonContainer: "Feature-ribbonContainer-P5U",
        numProjects: "Feature-numProjects-2rt",
        featureHeader: "Feature-featureHeader-git",
        featureInfo: "Feature-featureInfo-G8D"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(281), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".CollectionEdit-root-XLa .CollectionEdit-cogContainer-hzr {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 30px;\n  display: -webkit-box;\n  display: flex;\n  padding: 3px 14px;\n}\n.CollectionEdit-iconContainer-1Hb {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.CollectionEdit-editIcon-25C {\n  margin-top: 2px;\n}\n.CollectionEdit-triangle-Ih4 {\n  display: inline-block;\n  height: 15px;\n  margin: 0 0 5px 9px;\n  position: relative;\n  top: 3px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.CollectionEdit-dropdown-29_ {\n  min-width: 170px;\n}\n.CollectionEdit-menuItem-2tH {\n  white-space: nowrap;\n}\n", "" ]), 
    t.locals = {
        root: "CollectionEdit-root-XLa",
        cogContainer: "CollectionEdit-cogContainer-hzr",
        iconContainer: "CollectionEdit-iconContainer-1Hb",
        editIcon: "CollectionEdit-editIcon-25C",
        triangle: "CollectionEdit-triangle-Ih4",
        dropdown: "CollectionEdit-dropdown-29_",
        menuItem: "CollectionEdit-menuItem-2tH"
    };
}, , , , , , , , function(e, t, n) {
    var o = n(181), r = {
        "bestyleguide/_avatar": n(423).template,
        "lib/_follow/_buttonUserSmall": n(271).template,
        "bestyleguide/_icons/_appreciate": n(293).template,
        "bestyleguide/_icons/_views": n(294).template,
        "bestyleguide/_icons/_followers": n(318).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.s(o.f("user", e, t, 1), e, t, 0, 9, 2318, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('<div class="rf-mini-profile hide-phone hide-tablet">'), o.b("\n"), o.b("\n" + n), 
                o.b('  <div class="rf-mini-profile__user-info-wrap">'), o.b("\n" + n), o.b('    <div class="rf-mini-profile__user-info-container">'), 
                o.b("\n" + n), o.b(o.rp("<bestyleguide/_avatar0", e, t, "")), o.b("\n" + n), o.b('      <div class="rf-mini-profile__user-info">'), 
                o.b("\n" + n), o.b('        <a target="_blank" href="'), o.b(o.v(o.f("url", e, t, 0))), 
                o.b('" class="rf-mini-profile__user-name">'), o.b(o.v(o.f("display_name", e, t, 0))), 
                o.b("</a>"), o.b("\n" + n), o.b('        <a target="_blank" href="'), o.b(o.v(o.f("location_link", e, t, 0))), 
                o.b('" class="rf-mini-profile__user-location">'), o.s(o.f("city", e, t, 1), e, t, 0, 609, 619, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("city", e, t, 0))), n.b(", ");
                }), e.pop()), o.s(o.f("state", e, t, 1), e, t, 0, 638, 649, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("state", e, t, 0))), n.b(", ");
                }), e.pop()), o.s(o.f("country", e, t, 1), e, t, 0, 671, 682, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("country", e, t, 0)));
                }), e.pop()), o.b("</a>"), o.b("\n" + n), o.b("      </div>"), o.b("\n" + n), o.b("    </div>"), 
                o.b("\n" + n), o.b(o.rp("<lib/_follow/_buttonUserSmall1", e, t, "    ")), o.b("  </div>"), 
                o.b("\n"), o.b("\n" + n), o.s(o.f("has_latest_projects", e, t, 1), e, t, 0, 797, 1568, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b('    <div class="rf-mini-profile__projects">'), o.b("\n" + n), o.s(o.f("latest_projects", e, t, 1), e, t, 0, 868, 1534, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                        o.s(o.d(".", e, t, 1), e, t, 0, 883, 1418, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                            o.b('          <a target="_blank" href="'), o.b(o.v(o.f("url", e, t, 0))), o.b('" class="rf-mini-profile__project-image-wrapper js-mini-profile__project-image-wrapper">'), 
                            o.b("\n" + n), o.s(o.f("cover_srcset", e, t, 1), e, t, 0, 1044, 1377, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                                o.b("              <img"), o.b("\n" + n), o.b("                "), o.s(o.f("cover_src", e, t, 1), e, t, 0, 1094, 1113, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                                    n.b('src="'), n.b(n.v(n.f("cover_src", e, t, 0))), n.b('"');
                                }), e.pop()), o.b("\n" + n), o.b("                "), o.s(o.f("cover_sizes", e, t, 1), e, t, 0, 1160, 1183, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                                    n.b('sizes="'), n.b(n.v(n.f("cover_sizes", e, t, 0))), n.b('"');
                                }), e.pop()), o.b(" "), o.b("\n" + n), o.b("                "), o.s(o.f("cover_srcset", e, t, 1), e, t, 0, 1234, 1259, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                                    n.b('srcset="'), n.b(n.v(n.f("cover_srcset", e, t, 0))), n.b('"');
                                }), e.pop()), o.b(" "), o.b("\n" + n), o.b('                class="rf-mini-profile__project-image js-mini-profile__project-image">'), 
                                o.b("\n" + n);
                            }), e.pop()), o.b("          </a>"), o.b("\n" + n);
                        }), e.pop()), o.s(o.d(".", e, t, 1), e, t, 1, 0, 0, "") || (o.b('          <div class="rf-mini-profile__project-image-placeholder"></div>'), 
                        o.b("\n" + n));
                    }), e.pop()), o.b("    </div>"), o.b("\n" + n);
                }), e.pop()), o.b("\n" + n), o.s(o.f("stats", e, t, 1), e, t, 0, 1606, 2272, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b('  <div class="rf-mini-profile__stats">'), o.b("\n" + n), o.b('    <span class="rf-mini-profile__stat rf-mini-profile__stat--appreciations">'), 
                    o.b("\n" + n), o.b(o.rp("<bestyleguide/_icons/_appreciate2", e, t, "      ")), o.b('      <span class="rf-mini-profile__stat-number"> '), 
                    o.b(o.v(o.f("appreciations", e, t, 0))), o.b("</span>"), o.b("\n" + n), o.b("    </span>"), 
                    o.b("\n"), o.b("\n" + n), o.b('    <span class="rf-mini-profile__stat rf-mini-profile__stat--views">'), 
                    o.b("\n" + n), o.b(o.rp("<bestyleguide/_icons/_views3", e, t, "      ")), o.b('      <span class="rf-mini-profile__stat-number">'), 
                    o.b(o.v(o.f("views", e, t, 0))), o.b("</span>"), o.b("\n" + n), o.b("    </span>"), 
                    o.b("\n"), o.b("\n" + n), o.b('    <span class="rf-mini-profile__stat rf-mini-profile__stat--followers">'), 
                    o.b("\n" + n), o.b(o.rp("<bestyleguide/_icons/_followers4", e, t, "      ")), o.b('      <span class="rf-mini-profile__stat-number">'), 
                    o.b(o.v(o.f("followers", e, t, 0))), o.b("</span>"), o.b("\n" + n), o.b("    </span>"), 
                    o.b("\n" + n), o.b("  </div> \x3c!-- .stats-wrap --\x3e"), o.b("\n" + n);
                }), e.pop()), o.b("</div> \x3c!-- .mini-profile-wrap --\x3e"), o.b("\n" + n);
            }), e.pop()), o.fl();
        },
        partials: {
            "<bestyleguide/_avatar0": {
                name: "bestyleguide/_avatar",
                partials: {},
                subs: {
                    avatarUrl: function(e, t, n, o) {
                        n.b(n.v(n.f("url", e, t, 0)));
                    },
                    src: function(e, t, n, o) {
                        n.b(n.v(n.d("images.115", e, t, 0)));
                    },
                    srcLarge: function(e, t, n, o) {
                        n.b(n.v(n.d("images.230", e, t, 0)));
                    }
                }
            },
            "<lib/_follow/_buttonUserSmall1": {
                name: "lib/_follow/_buttonUserSmall",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_icons/_appreciate2": {
                name: "bestyleguide/_icons/_appreciate",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_icons/_views3": {
                name: "bestyleguide/_icons/_views",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_icons/_followers4": {
                name: "bestyleguide/_icons/_followers",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '{{#user}}\n<div class="rf-mini-profile hide-phone hide-tablet">\n\n  <div class="rf-mini-profile__user-info-wrap">\n    <div class="rf-mini-profile__user-info-container">\n      {{<bestyleguide/_avatar}}\n        {{$avatarUrl}}{{url}}{{/avatarUrl}}\n        {{$src}}{{images.115}}{{/src}}\n        {{$srcLarge}}{{images.230}}{{/srcLarge}}\n      {{/bestyleguide/_avatar}}\n\n      <div class="rf-mini-profile__user-info">\n        <a target="_blank" href="{{url}}" class="rf-mini-profile__user-name">{{display_name}}</a>\n        <a target="_blank" href="{{location_link}}" class="rf-mini-profile__user-location">{{#city}}{{city}}, {{/city}}{{#state}}{{state}}, {{/state}}{{#country}}{{country}}{{/country}}</a>\n      </div>\n    </div>\n    {{>lib/_follow/_buttonUserSmall}}\n  </div>\n\n  {{#has_latest_projects}}\n    <div class="rf-mini-profile__projects">\n      {{#latest_projects}}\n        {{#.}}\n          <a target="_blank" href="{{url}}" class="rf-mini-profile__project-image-wrapper js-mini-profile__project-image-wrapper">\n            {{#cover_srcset}}\n              <img\n                {{#cover_src}}src="{{cover_src}}"{{/cover_src}}\n                {{#cover_sizes}}sizes="{{cover_sizes}}"{{/cover_sizes}} \n                {{#cover_srcset}}srcset="{{cover_srcset}}"{{/cover_srcset}} \n                class="rf-mini-profile__project-image js-mini-profile__project-image">\n            {{/cover_srcset}}\n          </a>\n        {{/.}}\n        {{^.}}\n          <div class="rf-mini-profile__project-image-placeholder"></div>\n        {{/.}}\n      {{/latest_projects}}\n    </div>\n  {{/has_latest_projects}}\n\n  {{#stats}}\n  <div class="rf-mini-profile__stats">\n    <span class="rf-mini-profile__stat rf-mini-profile__stat--appreciations">\n      {{>bestyleguide/_icons/_appreciate}}\n      <span class="rf-mini-profile__stat-number"> {{appreciations}}</span>\n    </span>\n\n    <span class="rf-mini-profile__stat rf-mini-profile__stat--views">\n      {{>bestyleguide/_icons/_views}}\n      <span class="rf-mini-profile__stat-number">{{views}}</span>\n    </span>\n\n    <span class="rf-mini-profile__stat rf-mini-profile__stat--followers">\n      {{>bestyleguide/_icons/_followers}}\n      <span class="rf-mini-profile__stat-number">{{followers}}</span>\n    </span>\n  </div> \x3c!-- .stats-wrap --\x3e\n  {{/stats}}\n</div> \x3c!-- .mini-profile-wrap --\x3e\n{{/user}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, , function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b("<div "), o.s(o.f("instant_backfill", e, t, 1), e, t, 0, 26, 49, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('data-backfill="instant"');
            }), e.pop()), o.b(' class="js-action-follow '), o.s(o.f("is_following", e, t, 1), e, t, 0, 112, 122, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" following");
            }), e.pop()), o.b(' form-button-wrap rf-button__container rf-button__container--follow follow-button-container rf-button__container--follow-link" data-followee="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('" data-entity="project" data-following="'), o.s(o.f("is_following", e, t, 1), e, t, 0, 344, 348, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("true");
            }), e.pop()), o.s(o.f("is_following", e, t, 1), e, t, 1, 0, 0, "") || o.b("false"), 
            o.b('" data-display-name="'), o.b(o.v(o.f("displayName", e, t, 0))), o.b('" data-source="'), 
            o.b(o.v(o.f("source", e, t, 0))), o.b('" '), o.sub("attrs", e, t, n), o.b(">"), 
            o.b("\n" + n), o.b('  <a class="js-form-button-follow rf-button--small rf-button rf-button--follow"><span class="rf-button__label">'), 
            o.sub("follow", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b('  <a class="rf-button--small rf-button rf-button--secondary rf-button--following"><span class="rf-button__label">'), 
            o.sub("following", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b('  <a class="js-form-button-unfollow rf-button--small rf-button rf-button--danger rf-button--unfollow"><span class="rf-button__label">'), 
            o.sub("unfollow", e, t, n), o.b("</span></a>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), 
            o.fl();
        },
        partials: {},
        subs: {
            attrs: function(e, t, n, o) {},
            follow: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 625, 653, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_follow_all|Follow All");
                }), e.pop()), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            },
            following: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 855, 889, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_following_all|Following All");
                }), e.pop()), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            },
            unfollow: function(e, t, n, o) {
                n.s(n.f("translate", e, t, 1), e, t, 0, 1113, 1145, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("button_unfollow_all|Unfollow All");
                }), e.pop()), n.b("&nbsp;"), n.b(n.v(n.f("follow_label_postfix", e, t, 0)));
            }
        }
    }, '<div {{#instant_backfill}}data-backfill="instant"{{/instant_backfill}} class="js-action-follow {{#is_following}} following{{/is_following}} form-button-wrap rf-button__container rf-button__container--follow follow-button-container rf-button__container--follow-link" data-followee="{{id}}" data-entity="project" data-following="{{#is_following}}true{{/is_following}}{{^is_following}}false{{/is_following}}" data-display-name="{{displayName}}" data-source="{{source}}" {{$attrs}}{{/attrs}}>\n  <a class="js-form-button-follow rf-button--small rf-button rf-button--follow"><span class="rf-button__label">{{$follow}}{{#translate}}button_follow_all|Follow All{{/translate}}{{follow_label_postfix}}{{/follow}}</span></a>\n  <a class="rf-button--small rf-button rf-button--secondary rf-button--following"><span class="rf-button__label">{{$following}}{{#translate}}button_following_all|Following All{{/translate}}{{follow_label_postfix}}{{/following}}</span></a>\n  <a class="js-form-button-unfollow rf-button--small rf-button rf-button--danger rf-button--unfollow"><span class="rf-button__label">{{$unfollow}}{{#translate}}button_unfollow_all|Unfollow All{{/translate}}&nbsp;{{follow_label_postfix}}{{/unfollow}}</span></a>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_follow/_button": n(196).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.s(o.f("is_profile_owner", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.rp("<lib/_follow/_button0", e, t, "")), 
            o.fl();
        },
        partials: {
            "<lib/_follow/_button0": {
                name: "lib/_follow/_button",
                partials: {},
                subs: {
                    classes: function(e, t, n, o) {
                        n.b("user-follow");
                    },
                    type: function(e, t, n, o) {
                        n.b("user");
                    },
                    attrs: function(e, t, n, o) {
                        n.b('data-display-name="'), n.b(n.v(n.f("display_name", e, t, 0))), n.b('"');
                    }
                }
            }
        },
        subs: {}
    }, '{{^is_profile_owner}}\n  {{<lib/_follow/_button}}\n    {{$classes}}user-follow{{/classes}}\n    {{$type}}user{{/type}}\n    {{$attrs}}data-display-name="{{display_name}}"{{/attrs}}\n  {{/lib/_follow/_button}}\n{{/is_profile_owner}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_follow/_button": n(196).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b(o.rp("<lib/_follow/_button0", e, t, "")), o.fl();
        },
        partials: {
            "<lib/_follow/_button0": {
                name: "lib/_follow/_button",
                partials: {},
                subs: {
                    follow: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 52, 80, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("button_follow_all|Follow All");
                        }), e.pop());
                    },
                    following: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 136, 170, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("button_following_all|Following All");
                        }), e.pop());
                    },
                    unfollow: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 228, 260, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("button_unfollow_all|Unfollow All");
                        }), e.pop());
                    },
                    type: function(e, t, n, o) {
                        n.b("project");
                    },
                    attrs: function(e, t, n, o) {
                        n.b('data-display-name="'), n.b(n.v(n.f("display_name", e, t, 0))), n.b('"');
                    }
                }
            }
        },
        subs: {}
    }, '{{<lib/_follow/_button}}\n  {{$follow}}{{#translate}}button_follow_all|Follow All{{/translate}}{{/follow}}\n  {{$following}}{{#translate}}button_following_all|Following All{{/translate}}{{/following}}\n  {{$unfollow}}{{#translate}}button_unfollow_all|Unfollow All{{/translate}}{{/unfollow}}\n  {{$type}}project{{/type}}\n  {{$attrs}}data-display-name="{{display_name}}"{{/attrs}}\n{{/lib/_follow/_button}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_follow/_button": n(196).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b(o.rp("<lib/_follow/_button0", e, t, "")), o.fl();
        },
        partials: {
            "<lib/_follow/_button0": {
                name: "lib/_follow/_button",
                partials: {},
                subs: {
                    type: function(e, t, n, o) {
                        n.b("collection");
                    },
                    follow: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 83, 168, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('button_follow_collection_responsive|Follow <span class="hide-phone">Collection</span>');
                        }), e.pop());
                    },
                    following: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 224, 315, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('button_following_collection_responsive|Following <span class="hide-phone">Collection</span>');
                        }), e.pop());
                    },
                    unfollow: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 373, 468, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('button_unfollow_collection_responsive|Unfollow <span class="hide-phone">Collection</span>&nbsp;');
                        }), e.pop());
                    },
                    attrs: function(e, t, n, o) {
                        n.b(n.v(n.d(".", e, t, 0)));
                    }
                }
            }
        },
        subs: {}
    }, '{{<lib/_follow/_button}}\n  {{$type}}collection{{/type}}\n  {{$follow}}{{#translate}}button_follow_collection_responsive|Follow <span class="hide-phone">Collection</span>{{/translate}}{{/follow}}\n  {{$following}}{{#translate}}button_following_collection_responsive|Following <span class="hide-phone">Collection</span>{{/translate}}{{/following}}\n  {{$unfollow}}{{#translate}}button_unfollow_collection_responsive|Unfollow <span class="hide-phone">Collection</span>&nbsp;{{/translate}}{{/unfollow}}\n  {{$attrs}}{{.}}{{/attrs}}\n{{/lib/_follow/_button}}', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_follow/_button": n(196).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b(o.rp("<lib/_follow/_button0", e, t, "")), o.fl();
        },
        partials: {
            "<lib/_follow/_button0": {
                name: "lib/_follow/_button",
                partials: {},
                subs: {
                    type: function(e, t, n, o) {
                        n.b("collection");
                    },
                    follow: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 83, 166, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('button_follow_moodboard_responsive|Follow <span class="hide-phone">Moodboard</span>');
                        }), e.pop());
                    },
                    following: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 222, 311, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('button_following_moodboard_responsive|Following <span class="hide-phone">Moodboard</span>');
                        }), e.pop());
                    },
                    unfollow: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 369, 462, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('button_unfollow_moodboard_responsive|Unfollow <span class="hide-phone">Moodboard</span>&nbsp;');
                        }), e.pop());
                    },
                    attrs: function(e, t, n, o) {
                        n.b(n.v(n.d(".", e, t, 0)));
                    }
                }
            }
        },
        subs: {}
    }, '{{<lib/_follow/_button}}\n  {{$type}}collection{{/type}}\n  {{$follow}}{{#translate}}button_follow_moodboard_responsive|Follow <span class="hide-phone">Moodboard</span>{{/translate}}{{/follow}}\n  {{$following}}{{#translate}}button_following_moodboard_responsive|Following <span class="hide-phone">Moodboard</span>{{/translate}}{{/following}}\n  {{$unfollow}}{{#translate}}button_unfollow_moodboard_responsive|Unfollow <span class="hide-phone">Moodboard</span>&nbsp;{{/translate}}{{/unfollow}}\n  {{$attrs}}{{.}}{{/attrs}}\n{{/lib/_follow/_button}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_follow/_button": n(196).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b(o.rp("<lib/_follow/_button0", e, t, "")), o.fl();
        },
        partials: {
            "<lib/_follow/_button0": {
                name: "lib/_follow/_button",
                partials: {},
                subs: {
                    classes: function(e, t, n, o) {
                        n.b("user-follow");
                    },
                    type: function(e, t, n, o) {
                        n.b("team");
                    },
                    size: function(e, t, n, o) {
                        n.b("rf-button--small");
                    }
                }
            }
        },
        subs: {}
    }, "{{<lib/_follow/_button}}\n  {{$classes}}user-follow{{/classes}}\n  {{$type}}team{{/type}}\n  {{$size}}rf-button--small{{/size}}\n{{/lib/_follow/_button}}\n", o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(285), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".FollowButtonLegacy-legacyButton-1Bl .rf-button__container--follow-link > .rf-button.rf-button--small {\n  border: none;\n  font-weight: normal;\n  padding: 0;\n}\n", "" ]), 
    t.locals = {
        legacyButton: "FollowButtonLegacy-legacyButton-1Bl"
    };
}, , , function(e, t, n) {
    "use strict";
    var o = n(317), r = n(183), i = n(215), a = n(255), s = {
        edit: "collection-item-edit",
        delete: "collection-item-delete"
    }, l = {
        components: {
            Icon: o.a,
            Tooltip: r.a,
            DropdownItem: i.a,
            TriangleIcon: a.a
        },
        props: {
            alignment: {
                type: String,
                default: "right"
            }
        },
        data: function() {
            return {
                testIds: s
            };
        }
    }, c = n(538), u = n(53);
    var p = Object(u.default)(l, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.$style.root
        }, [ n("Tooltip", {
            ref: "tooltip",
            class: e.$style.cogContainer,
            attrs: {
                isResponsive: !0,
                horizontalPadding: 0,
                position: "bottom",
                alignment: e.alignment
            }
        }, [ n("div", {
            class: e.$style.iconContainer
        }, [ n("Icon", {
            class: e.$style.editIcon,
            attrs: {
                name: "edit"
            }
        }), n("TriangleIcon", {
            class: e.$style.triangle
        }) ], 1), n("ul", {
            class: e.$style.dropdown,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ n("DropdownItem", {
            staticClass: "qa-moodboard-item-edit"
        }, [ n("span", {
            ref: "edit",
            attrs: {
                "data-ut": e.testIds.edit
            },
            on: {
                click: function(t) {
                    return e.$emit("editCollection");
                }
            }
        }, [ e._v(e._s(e.$translate("collection_cover_edit", "Edit"))) ]) ]), n("DropdownItem", {
            staticClass: "qa-moodboard-item-delete"
        }, [ n("span", {
            ref: "delete",
            class: e.$style.menuItem,
            attrs: {
                "data-ut": e.testIds.delete
            },
            on: {
                click: function(t) {
                    return e.$emit("deleteFromCollection");
                }
            }
        }, [ e._v(e._s(e.$translate("moodboard_delete_single_project", "Delete from Moodboard"))) ]) ]) ], 1) ]) ], 1);
    }, [], !1, function(e) {
        this.$style = c.default.locals || c.default;
    }, null, null);
    t.a = p.exports;
}, function(e, t, n) {
    "use strict";
    n(70), n(126);
    var o = n(183), r = n(742), i = n(272), a = {
        props: {
            owners: {
                type: Array,
                required: !0
            },
            alignment: {
                type: String,
                validator: function(e) {
                    return [ "left", "center", "right" ].includes(e);
                }
            },
            alignmentOffset: {
                type: Number,
                default: 0
            },
            position: {
                type: String,
                default: "bottom"
            }
        },
        components: {
            Tooltip: o.a,
            ProjectOwnersInfo: r.a,
            FollowBtn: i.a
        }
    }, s = n(818), l = n(53);
    var c = Object(l.default)(a, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.$style.root
        }, [ n("Tooltip", {
            ref: "tooltip",
            attrs: {
                position: e.position,
                alignment: e.alignment,
                alignmentOffset: e.alignmentOffset,
                horizontalPadding: 0,
                verticalPadding: 0,
                isResponsive: !0
            }
        }, [ n("div", {
            class: e.$style.arrow
        }, [ e._v(" " + e._s(e.$translate("multiple_owners", "Multiple Owners")) + " ") ]), n("div", {
            class: e.$style.tooltipContent,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ n("ProjectOwnersInfo", {
            ref: "projectOwnersInfo",
            class: e.$style.ownerRow,
            attrs: {
                users: e.owners,
                avatarSize: 35,
                isFollowTypeLink: !0
            }
        }, [ e._l(e.owners, function(t, o) {
            return [ t.is_profile_owner ? e._e() : n("FollowBtn", {
                key: "user-action-" + o,
                ref: "button",
                refInFor: !0,
                attrs: {
                    slot: "userAction" + o,
                    type: "link",
                    followeeId: t.id,
                    entityType: "user",
                    isFollowing: Boolean(t.is_following),
                    displayName: t.display_name
                },
                slot: "userAction" + o
            }) ];
        }) ], 2) ], 1) ]) ], 1);
    }, [], !1, function(e) {
        this.$style = s.default.locals || s.default;
    }, null, null);
    t.a = c.exports;
}, function(e, t, n) {
    "use strict";
    var o = {
        data: function() {
            return {
                isPulseViewed: !1
            };
        },
        components: {
            Tooltip: n(183).a
        },
        props: {
            tooltipPosition: {
                type: String,
                default: "bottom"
            }
        },
        methods: {
            handlePulseClose: function() {
                this.$emit("pulseClosed"), this.isPulseViewed = !0;
            }
        }
    }, r = n(627), i = n(53);
    var a = Object(i.default)(o, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return e.isPulseViewed ? e._e() : n("Tooltip", {
            ref: "tooltip",
            class: e.$style.wrap,
            attrs: {
                isResponsive: !0,
                alignment: "right",
                position: e.tooltipPosition,
                triangleDistance: 4,
                horizontalPadding: 0,
                distance: 0
            },
            on: {
                didOpen: function(t) {
                    return e.$emit("pulseViewed");
                }
            }
        }, [ n("div", {
            class: e.$style.pulse
        }, [ n("div", {
            class: e.$style.dot
        }), n("div", {
            class: e.$style.ring
        }) ]), n("div", {
            ref: "text",
            class: e.$style.textwrap,
            attrs: {
                slot: "tooltipContent"
            },
            on: {
                click: function(t) {
                    return t.stopPropagation(), e.handlePulseClose(t);
                }
            },
            slot: "tooltipContent"
        }, [ e.$slots.header ? n("h3", {
            class: e.$style.header
        }, [ e._t("header") ], 2) : e._e(), e.$slots.text ? n("div", {
            class: e.$style.text
        }, [ e._t("text") ], 2) : e._e() ]) ]);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, , function(e, t, n) {
    "use strict";
    var o = n(828), r = n(53);
    var i = Object(r.default)({}, function() {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("transition", {
            attrs: {
                "enter-active-class": e.$style.enterActive,
                "leave-active-class": e.$style.leaveActive
            },
            on: {
                "after-enter": function(t) {
                    return e.$emit("afterEnter");
                },
                "before-leave": function(t) {
                    return e.$emit("beforeLeave");
                },
                "after-leave": function(t) {
                    return e.$emit("afterLeave");
                }
            }
        }, [ e._t("default") ], 2);
    }, [], !1, function(e) {
        this.$style = o.default.locals || o.default;
    }, null, null);
    t.a = i.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 11.38 11.38"
            }
        }, [ t("path", {
            attrs: {
                d: "M8.94 6.5a.8.8 0 0 1 .81.81v2.44a1.63 1.63 0 0 1-1.62 1.63h-6.5A1.63 1.63 0 0 1 .01 9.76v-6.5a1.63 1.63 0 0 1 1.63-1.62h2.44a.815.815 0 1 1 0 1.63H1.64v6.5h6.5V7.33a.8.8 0 0 1 .81-.81zM11.38.81a.8.8 0 0 0-.81-.81H6.51a.815.815 0 1 0 0 1.63h2.11L3.5 6.75a.8.8 0 0 0 0 1.14.67.67 0 0 0 .27.18.84.84 0 0 0 .61 0 .67.67 0 0 0 .27-.18l5.12-5.12v2.11a.815.815 0 1 0 1.63 0z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    e.exports = n(2)(276);
}, function(e, t, n) {
    e.exports = n(2)(115);
}, function(e, t, n) {
    e.exports = n(2)(102);
}, , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(307), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectCoverNeue-image-1MZ {\n  border-radius: 4px;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n}\n.ProjectCoverNeue-image-1MZ,\n.ProjectCoverNeue-coverLink-102.ProjectCoverNeue-coverLink-102 {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.ProjectCoverNeue-details-yQ_ {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  pointer-events: none;\n  position: relative;\n  width: 100%;\n}\n.ProjectCoverNeue-info-4Ul {\n  min-width: 0;\n  padding-right: 15px;\n  text-align: left;\n}\n.ProjectCoverNeue-icon-vNS {\n  margin-right: 5px;\n}\n.ProjectCoverNeue-icon-vNS:not(:first-child) {\n    margin-left: 12px;\n}\n.ProjectCoverNeue-controlsAndPrivacyContainer-20r {\n  display: -webkit-box;\n  display: flex;\n  left: 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 1;\n}\n.ProjectCoverNeue-privacyLockContainer-1Jv {\n  position: absolute;\n  right: 0;\n}\n.ProjectCoverNeue-coverWithFlags-1Aq:hover .ProjectCoverNeue-privacyLockContainer-1Jv {\n    display: none;\n}\n.ProjectCoverNeue-wrapper-27j {\n  background-color: #f2f2f2;\n  position: relative;\n}\n.ProjectCoverNeue-root-166 {\n  position: relative;\n}\n.ProjectCoverNeue-root-166:not(.ProjectCoverNeue-noConstraints-1Mx) {\n  max-width: 404px;\n  min-width: 145px;\n}\n.ProjectCoverNeue-statsVisible-19j {\n  position: relative;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-details-yQ_ {\n    padding-bottom: 10px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    min-height: 45px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av .ProjectCoverNeue-ownersContainer-3Go {\n      -webkit-box-flex: 1;\n              flex: 1;\n      max-width: calc(404px - 130px);\n      min-width: 0;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av .ProjectCoverNeue-owners-1qo {\n      font-size: 13px;\n      font-weight: bold;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStats-1lK {\n    color: #696969;\n    margin-left: 10px;\n    margin-top: 2px;\n    max-width: 130px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStats-1lK .ProjectCoverNeue-icon-vNS {\n      fill: #696969;\n}\n.ProjectCoverNeue-details-yQ_ {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(81%, rgba(0, 0, 0, 0.6)));\n  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 81%);\n  margin-top: auto;\n  padding: 30px 15px 18px;\n  border-radius: 0 0 4px 4px;\n  flex-shrink: 0;\n}\n.ProjectCoverNeue-image-1MZ {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  width: 100%;\n  will-change: transform;\n}\n.ProjectCoverNeue-loaded-26R .ProjectCoverNeue-image-1MZ {\n    will-change: auto;\n}\n.ProjectCoverNeue-draftControls-2_f,\n.ProjectCoverNeue-draftDetails-27O {\n  background: rgba(0, 0, 0, 0.5);\n}\n.ProjectCoverNeue-draftDetails-27O {\n  padding-top: 0;\n}\n.ProjectCoverNeue-draftControls-2_f {\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 4px 4px 0 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n.ProjectCoverNeue-draftControl-25C {\n  margin-bottom: 10px;\n  min-width: 150px;\n}\n.ProjectCoverNeue-draftControlText-2Pk {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.ProjectCoverNeue-draftModified-1qY {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.ProjectCoverNeue-curationMarks-3rK {\n  display: -webkit-box;\n  display: flex;\n  flex-flow: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 15px;\n  width: 100%;\n}\n.ProjectCoverNeue-curationMark-2t6 {\n  background: #fff;\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0 2px 2px 0;\n  padding: 5px 7px;\n}\n.ProjectCoverNeue-served-zg8 {\n  color: #f00;\n}\n.ProjectCoverNeue-queued-nKO {\n  background: #00d646;\n  color: #fff;\n}\n.ProjectCoverNeue-topRight-Ob1 {\n  max-width: 50%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 603px) {\n.ProjectCoverNeue-hideDetailsMobile-10a {\n    display: none;\n}\n}\n.ProjectCoverNeue-icon-vNS {\n  fill: #fff;\n  position: relative;\n}\n.ProjectCoverNeue-appreciateIcon-WrB {\n  top: -2px;\n}\n.ProjectCoverNeue-viewsIcon-2EU {\n  top: -1px;\n}\n.ProjectCoverNeue-featureFlagsContainer-312 {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  z-index: 2;\n}\n.ProjectCoverNeue-feature-1Du {\n  margin-left: 10px;\n}\n", "" ]), 
    t.locals = {
        image: "ProjectCoverNeue-image-1MZ",
        coverLink: "ProjectCoverNeue-coverLink-102",
        details: "ProjectCoverNeue-details-yQ_",
        info: "ProjectCoverNeue-info-4Ul",
        icon: "ProjectCoverNeue-icon-vNS",
        controlsAndPrivacyContainer: "ProjectCoverNeue-controlsAndPrivacyContainer-20r",
        privacyLockContainer: "ProjectCoverNeue-privacyLockContainer-1Jv",
        coverWithFlags: "ProjectCoverNeue-coverWithFlags-1Aq",
        wrapper: "ProjectCoverNeue-wrapper-27j",
        root: "ProjectCoverNeue-root-166",
        noConstraints: "ProjectCoverNeue-noConstraints-1Mx",
        statsVisible: "ProjectCoverNeue-statsVisible-19j",
        visibleStatsAndOwners: "ProjectCoverNeue-visibleStatsAndOwners-2Av",
        ownersContainer: "ProjectCoverNeue-ownersContainer-3Go",
        owners: "ProjectCoverNeue-owners-1qo",
        visibleStats: "ProjectCoverNeue-visibleStats-1lK",
        loaded: "ProjectCoverNeue-loaded-26R",
        draftControls: "ProjectCoverNeue-draftControls-2_f",
        draftDetails: "ProjectCoverNeue-draftDetails-27O",
        draftControl: "ProjectCoverNeue-draftControl-25C",
        draftControlText: "ProjectCoverNeue-draftControlText-2Pk",
        draftModified: "ProjectCoverNeue-draftModified-1qY",
        curationMarks: "ProjectCoverNeue-curationMarks-3rK",
        curationMark: "ProjectCoverNeue-curationMark-2t6",
        served: "ProjectCoverNeue-served-zg8",
        queued: "ProjectCoverNeue-queued-nKO",
        topRight: "ProjectCoverNeue-topRight-Ob1",
        hideDetailsMobile: "ProjectCoverNeue-hideDetailsMobile-10a",
        appreciateIcon: "ProjectCoverNeue-appreciateIcon-WrB",
        viewsIcon: "ProjectCoverNeue-viewsIcon-2EU",
        featureFlagsContainer: "ProjectCoverNeue-featureFlagsContainer-312",
        feature: "ProjectCoverNeue-feature-1Du"
    };
}, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(311), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Tool-tool-2fv {\n  color: #191919;\n  cursor: pointer;\n}\n.Tool-toolIcon-2cr {\n  display: block;\n}\n.Tool-tooltipContent-1RM {\n  padding: 0 4px;\n}\n.Tool-newWindow-1lr,\n.Tool-linkArrow-3zS {\n  display: inline-block;\n}\n.Tool-newWindow-1lr {\n  fill: #191919;\n  width: 10px;\n}\n.Tool-linkArrow-3zS {\n  bottom: 1px;\n  display: inline-block;\n  fill: #0057ff;\n  margin-left: 3px;\n  position: relative;\n  width: 9px;\n}\n.Tool-title-44J {\n  color: #696969;\n  font-size: 13px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  white-space: nowrap;\n}\n.Tool-link-YWa {\n  color: #0057ff;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: bold;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.Tool-link-YWa:hover {\n    text-decoration: underline;\n}\n.Tool-linkArrow-3zS {\n  display: inline-block;\n  width: 10px;\n}\n.Tool-expanded-2WB {\n  display: -webkit-box;\n  display: flex;\n}\n.Tool-details-dPM {\n  margin-left: 10px;\n}\n.Tool-name-rQq {\n  color: #191919;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1;\n}\n.Tool-download-1Kc {\n  color: #0057ff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.Tool-download-1Kc:hover {\n    text-decoration: underline;\n}\n", "" ]), 
    t.locals = {
        tool: "Tool-tool-2fv",
        toolIcon: "Tool-toolIcon-2cr",
        tooltipContent: "Tool-tooltipContent-1RM",
        newWindow: "Tool-newWindow-1lr",
        linkArrow: "Tool-linkArrow-3zS",
        title: "Tool-title-44J",
        link: "Tool-link-YWa",
        expanded: "Tool-expanded-2WB",
        details: "Tool-details-dPM",
        name: "Tool-name-rQq",
        download: "Tool-download-1Kc"
    };
}, , , , , function(e, t, n) {
    var o = n(960);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("a06b68a2", o, !0, {});
}, function(e, t, n) {
    e.exports = n(2)(5);
}, function(e, t, n) {
    "use strict";
    var o = n(312), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Collection-icon-1ub {\n  fill: #fff;\n}\n", "" ]), 
    t.locals = {
        icon: "Collection-icon-1ub"
    };
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="js-spin label-spin"></div>'), o.b("\n" + n), 
            o.b('<span class="js-spin-label-saving label-spin-status label-spin-status-saving hide">'), 
            o.s(o.f("translate", e, t, 1), e, t, 0, 136, 166, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("form_template_saving|Saving...");
            }), e.pop()), o.b("</span>"), o.b("\n" + n), o.b('<span class="js-spin-label-saved label-spin-status label-spin-status-saved beicons-pre beicons-pre-check-circle hide">'), 
            o.s(o.f("translate", e, t, 1), e, t, 0, 320, 345, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("form_template_saved|Saved");
            }), e.pop()), o.b("</span>"), o.b("\n" + n), o.b('<span class="js-spin-label-error label-spin-status label-spin-status-error beicons-pre beicons-pre-x-circle hide">'), 
            o.s(o.f("translate", e, t, 1), e, t, 0, 495, 558, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("form_template_error_saving|Error saving: please try again later");
            }), e.pop()), o.b("</span>"), o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<div class="js-spin label-spin"></div>\n<span class="js-spin-label-saving label-spin-status label-spin-status-saving hide">{{#translate}}form_template_saving|Saving...{{/translate}}</span>\n<span class="js-spin-label-saved label-spin-status label-spin-status-saved beicons-pre beicons-pre-check-circle hide">{{#translate}}form_template_saved|Saved{{/translate}}</span>\n<span class="js-spin-label-error label-spin-status label-spin-status-error beicons-pre beicons-pre-x-circle hide">{{#translate}}form_template_error_saving|Error saving: please try again later{{/translate}}</span>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, , , , , , , function(e, t, n) {
    "use strict";
    n(70), n(126);
    var o = n(227), r = n(183), i = n(561), a = n(221), s = {
        components: {
            AppreciationsIcon: o.a,
            PulsePoint: i.a,
            Tooltip: r.a
        },
        props: {
            count: {
                type: Number
            },
            source: {
                type: String
            },
            customClass: {
                type: String
            },
            customThumbSize: {
                type: String
            },
            hasPulsePoints: {
                type: Boolean
            },
            isAppreciated: {
                type: Boolean
            },
            isTooltipResponsive: {
                type: Boolean,
                default: !0
            },
            showTooltip: {
                type: Boolean,
                default: !0
            },
            isDisabled: {
                type: Boolean,
                default: !1
            },
            tooltipAlignment: {
                type: String,
                default: "right",
                validator: function(e) {
                    return [ "left", "center", "right" ].includes(e);
                }
            },
            tooltipPosition: {
                type: String,
                default: "center",
                validator: function(e) {
                    return [ "top", "bottom", "center" ].includes(e);
                }
            },
            locale: {
                type: String,
                default: "en_US"
            }
        },
        filters: {
            abbreviate: a.a
        },
        computed: {
            adobeAnalytics: function() {
                return this.isAppreciated ? "UnappreciateClick" : "AppreciateClick";
            },
            hidePulsePoints: function() {
                return this.canDisplayTooltip || !this.hasPulsePoints;
            }
        },
        data: function() {
            return {
                canDisplayTooltip: !1,
                pulseFrom: "appreciate"
            };
        },
        methods: {
            handlePulseClosed: function() {
                this.$emit("pulseClosed", {
                    from: this.pulseFrom
                }), this.canDisplayTooltip = !0;
            },
            handleClick: function() {
                this.isDisabled || this.$emit("appreciateClicked");
            }
        }
    }, l = n(629), c = n(53);
    var u = Object(c.default)(s, function() {
        var e, t, n, o = this, r = o.$createElement, i = o._self._c || r;
        return i("div", {
            class: [ (e = {}, e[o.$style.disabled] = o.isDisabled, e) ],
            on: {
                click: o.handleClick
            }
        }, [ o.showTooltip ? i("Tooltip", {
            ref: "tooltip",
            class: [ o.$style.tooltip, "js-adobe-analytics js-appreciate qa-appreciate" ],
            attrs: {
                isResponsive: o.isTooltipResponsive,
                alignment: o.tooltipAlignment,
                position: o.tooltipPosition,
                triangleDistance: 2,
                horizontalPadding: 0,
                verticalPadding: 0,
                distance: 7,
                hasTriangle: o.hidePulsePoints,
                "data-adobe-analytics": o.adobeAnalytics,
                "data-appreciate-from": o.source
            }
        }, [ i("div", {
            ref: "root",
            class: [ o.$style.wrapper, o.customClass, (n = {}, n[o.$style.appreciated] = o.isAppreciated, 
            n) ]
        }, [ i("AppreciationsIcon", {
            class: [ o.$style.icon, o.customThumbSize ]
        }), o.isAppreciated ? i("div", {
            ref: "count",
            class: o.$style.count
        }, [ o._v(o._s(o._f("abbreviate")(o.count, o.locale))) ]) : o._e() ], 1), o.hasPulsePoints ? i("PulsePoint", {
            ref: "pulse",
            class: o.$style.pulsePoint,
            attrs: {
                tooltipPosition: "top"
            },
            on: {
                pulseViewed: function(e) {
                    return o.$emit("pulseViewed", {
                        from: o.pulseFrom
                    });
                },
                pulseClosed: o.handlePulseClosed
            }
        }, [ i("template", {
            slot: "header"
        }, [ o._v(o._s(o.$translate("onboarding_pulsePoint_appreciate_projects", "Appreciate Projects You Like"))) ]), i("template", {
            slot: "text"
        }, [ i("p", [ o._v(" " + o._s(o.$translate("onboarding_pulsePoint_appreciate_p1", "When you appreciate a project, we handpick similar projects for you that you may also like. It also gives the project more exposure, as your followers will see the work you appreciate in their home feeds.")) + " ") ]), i("p", [ o._v(o._s(o.$translate("onboarding_pulsePoint_appreciate_p2", "Also, it’s just a nice thing to do :)"))) ]) ]) ], 2) : o._e(), o.hidePulsePoints ? i("div", {
            class: o.$style.tooltipStyle,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ o.isAppreciated ? i("label", {
            class: o.$style.content
        }, [ o._v(o._s(o.$translate("project_view_unappreciate", "Unappreciate"))) ]) : i("label", {
            class: o.$style.content
        }, [ o._v(o._s(o.$translate("project_view_appreciate", "Appreciate"))) ]) ]) : o._e() ], 1) : i("div", {
            ref: "root",
            class: [ o.$style.wrapper, o.$style.floatAppreciate, o.customClass, (t = {}, t[o.$style.appreciated] = o.isAppreciated, 
            t), "js-adobe-analytics js-appreciate qa-appreciate" ],
            attrs: {
                "data-adobe-analytics": o.adobeAnalytics,
                "data-appreciate-from": o.source
            }
        }, [ i("AppreciationsIcon", {
            ref: "thumb",
            class: [ o.$style.icon, o.$style.thumbSize, o.customThumbSize ]
        }), o.isAppreciated ? i("div", {
            ref: "count",
            class: o.$style.count
        }, [ o._v(o._s(o._f("abbreviate")(o.count, o.locale))) ]) : o._e() ], 1) ], 1);
    }, [], !1, function(e) {
        this.$style = l.default.locals || l.default;
    }, null, null);
    t.a = u.exports;
}, , function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 533.333 533.333"
            }
        }, [ t("path", {
            attrs: {
                d: "M516.7,200H333.3V16.7c0-9.2-7.5-16.7-16.7-16.7h-100C207.5,0,200,7.5,200,16.7V200H16.7C7.5,200,0,207.5,0,216.7v100\n\tc0,9.2,7.5,16.7,16.7,16.7H200v183.3c0,9.2,7.5,16.7,16.7,16.7h100c9.2,0,16.7-7.5,16.7-16.7V333.3h183.3c9.2,0,16.7-7.5,16.7-16.7\n\tv-100C533.3,207.5,525.9,200,516.7,200z"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 4.687 7.875"
            }
        }, [ t("path", {
            attrs: {
                d: "M635.621,375.374a0.7,0.7,0,0,0-.147.017,1.31,1.31,0,0,0-.14.041,0.625,0.625,0,0,0-.129.065,0.7,0.7,0,0,0-.123.1l-3.176,3.176a0.932,0.932,0,0,0-.164.252,0.7,0.7,0,0,0-.059.281,0.737,0.737,0,0,0,.059.287,0.767,0.767,0,0,0,.164.247l3.176,3.175a0.734,0.734,0,0,0,.252.17,0.763,0.763,0,0,0,.281.053,0.819,0.819,0,0,0,.287-0.053,0.617,0.617,0,0,0,.246-0.17,0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.562,0.752,0.752,0,0,0-.164-0.246l-2.648-2.649,2.648-2.66a0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.563,0.774,0.774,0,0,0-.164-0.246,0.855,0.855,0,0,0-.117-0.1,0.488,0.488,0,0,0-.129-0.065c-0.047-.015-0.094-0.029-0.141-0.041a0.609,0.609,0,0,0-.14-0.017h0Z",
                transform: "translate(-631.688 -375.375)"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(337), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, "@-webkit-keyframes PulsePoint-pulse-2t0 {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n50% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes PulsePoint-pulse-2t0 {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n50% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n.PulsePoint-wrap-30V {\n  bottom: -6px;\n  left: 0;\n  position: absolute;\n  z-index: 2;\n}\n.PulsePoint-pulse-2t0 {\n  cursor: pointer;\n  height: 26px;\n  padding-bottom: 0;\n  position: relative;\n  width: 26px;\n  z-index: 1;\n}\n.PulsePoint-dot-3Z7 {\n  background: #146aff;\n  border-radius: 50%;\n  height: 9px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 9px;\n}\n.PulsePoint-ring-14O {\n  -webkit-animation: PulsePoint-pulse-2t0 1.5s ease-in-out infinite;\n          animation: PulsePoint-pulse-2t0 1.5s ease-in-out infinite;\n  border: 1px solid #146aff;\n  border-radius: 50%;\n  height: 100%;\n  opacity: 0;\n  width: 100%;\n}\n.PulsePoint-header-37C {\n  color: #191919;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 1.4;\n  position: relative;\n}\n.PulsePoint-text-1Xo {\n  color: #696969;\n  font-size: 15px;\n  line-height: 1.4;\n  margin-top: 16px;\n}\n.PulsePoint-textwrap-36X {\n  min-width: 382px;\n  padding: 25px 28px;\n  text-align: left;\n  white-space: normal;\n}\n", "" ]), 
    t.locals = {
        wrap: "PulsePoint-wrap-30V",
        pulse: "PulsePoint-pulse-2t0",
        dot: "PulsePoint-dot-3Z7",
        ring: "PulsePoint-ring-14O",
        header: "PulsePoint-header-37C",
        text: "PulsePoint-text-1Xo",
        textwrap: "PulsePoint-textwrap-36X"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(338), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Appreciate-wrapper-9hi {\n  -webkit-box-align: center;\n          align-items: center;\n  background: #0057ff;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  height: 65px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 65px;\n}\n.Appreciate-wrapper-9hi:hover {\n    background: #0046cc;\n    text-decoration: none;\n}\n.Appreciate-floatAppreciate-22P {\n  height: 45px;\n  width: 45px;\n}\n.Appreciate-appreciated-1MN {\n  background: #3c3c3c;\n  color: #fff;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.Appreciate-appreciated-1MN:hover {\n    background: #232323;\n    text-decoration: none;\n}\n.Appreciate-count-37l {\n  font-size: 10px;\n  font-weight: bold;\n  margin-top: 3px;\n}\n.Appreciate-disabled-2mV {\n  pointer-events: none;\n}\n.Appreciate-icon-2yw {\n  fill: #fff;\n  height: 22px;\n  margin: -2px 0 0 3px;\n  width: 22px;\n}\n.Appreciate-appreciated-1MN .Appreciate-icon-2yw {\n    fill: #fff;\n    width: 18px;\n}\n.Appreciate-thumbSize--7m {\n  height: 22px;\n  width: 22px;\n}\n.Appreciate-appreciated-1MN .Appreciate-thumbSize--7m {\n    width: 18px;\n}\n@media (min-width: 604px) and (max-width: 1024px) {\n.Appreciate-thumbSize--7m {\n      height: 20px;\n      width: 20px;\n}\n.Appreciate-appreciated-1MN .Appreciate-thumbSize--7m {\n        width: 15px;\n}\n}\n@media (max-width: 603px) {\n.Appreciate-thumbSize--7m {\n      height: 16px;\n      width: 16px;\n}\n.Appreciate-appreciated-1MN .Appreciate-thumbSize--7m {\n        width: 12px;\n}\n}\n.Appreciate-content-1PD {\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n.Appreciate-pulsePoint-CrS {\n  bottom: 46px;\n  margin-left: -10px;\n}\n.Appreciate-tooltip-1_1.Appreciate-tooltip-1_1 {\n  cursor: pointer;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.Appreciate-tooltipStyle-1n6 {\n  padding: 10px 19px;\n}\n", "" ]), 
    t.locals = {
        wrapper: "Appreciate-wrapper-9hi",
        floatAppreciate: "Appreciate-floatAppreciate-22P",
        appreciated: "Appreciate-appreciated-1MN",
        count: "Appreciate-count-37l",
        disabled: "Appreciate-disabled-2mV",
        icon: "Appreciate-icon-2yw",
        thumbSize: "Appreciate-thumbSize--7m",
        content: "Appreciate-content-1PD",
        pulsePoint: "Appreciate-pulsePoint-CrS",
        tooltip: "Appreciate-tooltip-1_1",
        tooltipStyle: "Appreciate-tooltipStyle-1n6"
    };
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(360), r = n(563), i = n(203), a = n(341), s = {
        components: {
            ArrowRightAlt: o.a,
            DominantColor: a.a,
            FadeRight: r.a,
            Fade: i.a
        },
        props: {
            collection: {
                type: Object
            },
            fillerColor: {
                type: Array
            },
            imagesSrcSet: {
                type: String
            },
            imageSrc: {
                type: String
            },
            shouldOverlayOverFooter: {
                type: Boolean
            }
        },
        data: function() {
            return {
                collectionNotificationImageLoaded: !1,
                shouldAnimateIn: !0,
                isDoneAnimatingOut: !1,
                isLandscapeImage: !1
            };
        },
        computed: {
            collectionNotificationText: function() {
                if (this.collection) return this.$translate("project_moodboard_notification_header", 'Saved to your moodboard  <a href="{url}" class="link" target="_blank">{title}</a>', {
                    url: this.collection.url,
                    title: this.collection.label
                });
            }
        },
        watch: {
            collection: function(e, t) {
                t && e && t !== e ? this.shouldAnimateIn = !1 : this.isDoneAnimatingOut && e && (this.shouldAnimateIn = !0);
            },
            isDoneAnimatingOut: function(e) {
                this.shouldAnimateIn = e && this.collection;
            },
            collectionNotificationImageLoaded: function(e) {
                if (e) {
                    var t = this.$refs.image.width / this.$refs.image.height;
                    this.isLandscapeImage = t > 1.5, this.$emit("imageLoaded");
                }
            }
        }
    }, l = n(830), c = n(53);
    var u = Object(c.default)(s, function() {
        var e, t, n = this, o = n.$createElement, r = n._self._c || o;
        return n.collection && n.shouldAnimateIn ? r("div", {
            ref: "root",
            class: [ n.$style.collectionNotifications, "qa-collection-notification", , (e = {}, 
            e[n.$style.overlayOverFooter] = n.shouldOverlayOverFooter, e) ],
            on: {
                click: function(e) {
                    return n.$emit("click");
                }
            }
        }, [ r("a", {
            attrs: {
                href: n.collection.url,
                target: "_blank"
            }
        }, [ r("Fade", [ r("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: n.collectionNotificationImageLoaded,
                expression: "collectionNotificationImageLoaded"
            } ],
            ref: "clipper",
            class: n.$style.clipper
        }, [ r("img", {
            ref: "image",
            class: [ n.$style.collectionImage, (t = {}, t[n.$style.landscapeImage] = n.isLandscapeImage, 
            t) ],
            attrs: {
                "data-ut": "moodboard-notification-image",
                src: n.imageSrc,
                srcset: n.imagesSrcSet
            },
            on: {
                load: function(e) {
                    n.collectionNotificationImageLoaded = !0;
                }
            }
        }) ]) ]), r("DominantColor", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: !n.collectionNotificationImageLoaded,
                expression: "!collectionNotificationImageLoaded"
            } ],
            ref: "placeholder",
            class: [ n.$style.collectionImage, n.$style.collectionImageLoader ],
            attrs: {
                colors: n.fillerColor
            }
        }) ], 1), r("div", [ r("div", {
            ref: "text",
            class: n.$style.collectionCTA,
            domProps: {
                innerHTML: n._s(n.collectionNotificationText)
            }
        }), r("a", {
            ref: "link",
            class: [ n.$style.collectionLink, "qa-moodboard-created-link" ],
            attrs: {
                "data-ut": "moodboard-notification-link",
                href: n.collection.url,
                target: "_blank"
            }
        }, [ n._v(n._s(n.$translate("project_collection_notification_see_it_now", "See it now")) + " "), r("ArrowRightAlt", {
            class: n.$style.collectionNotificationArrow
        }) ], 1) ]) ]) : n._e();
    }, [], !1, function(e) {
        this.$style = l.default.locals || l.default;
    }, null, null);
    t.a = u.exports;
}, , , , , function(e, t, n) {
    "use strict";
    var o = n(368), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Overlay-root-1CC,\n.Overlay-inner-2fg,\n.Overlay-wallpaper-3Ak,\n.Overlay-content-PXU {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n.Overlay-root-1CC {\n  z-index: 7;\n}\n@media (min-width: 1025px) {\n.Overlay-root-1CC.Overlay-open-20F .Overlay-wallpaper-3Ak {\n      opacity: 0.9;\n}\n.Overlay-root-1CC.Overlay-open-20F .Overlay-content-PXU {\n      opacity: 1;\n      -webkit-transition: opacity 0.15s 0.22s linear;\n      transition: opacity 0.15s 0.22s linear;\n}\n.Overlay-root-1CC:not(.Overlay-open-20F) .Overlay-content-PXU {\n      opacity: 0;\n      -webkit-transition: opacity 0.15s linear;\n      transition: opacity 0.15s linear;\n}\n.Overlay-root-1CC:not(.Overlay-open-20F) .Overlay-wallpaper-3Ak {\n      opacity: 0;\n      -webkit-transition-delay: 0.22s;\n              transition-delay: 0.22s;\n}\n}\n.Overlay-root-1CC .Overlay-inner-2fg {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  position: relative;\n}\n.Overlay-root-1CC .Overlay-wallpaper-3Ak {\n  will-change: opacity;\n}\n.Overlay-root-1CC .Overlay-content-PXU {\n  position: relative;\n  width: 100%;\n}\n.Overlay-wallpaper-3Ak {\n  background-color: #000;\n  position: fixed;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n.Overlay-content-PXU {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.Overlay-noCenterContent-2r0 {\n  display: block;\n}\n.Overlay-close-4F6 {\n  box-sizing: border-box;\n  cursor: pointer;\n  height: 17px;\n  padding: 5px;\n  position: fixed;\n  right: 8px;\n  top: 8px;\n  width: 17px;\n}\n.Overlay-largeClose-3Av {\n  height: 20px;\n  width: 20px;\n}\n.Overlay-closeIcon-2jb {\n  display: block;\n  fill: #fff;\n  height: 100%;\n  width: 100%;\n}\n.Overlay-closeIcon-2jb:hover {\n    fill: #959595;\n}\n.Overlay-overlayOpen-1-L .rf-primary-nav,\n.Overlay-overlayOpen-1-L .rf-secondary-nav {\n  z-index: 0;\n}\n", "" ]), 
    t.locals = {
        root: "Overlay-root-1CC",
        inner: "Overlay-inner-2fg",
        wallpaper: "Overlay-wallpaper-3Ak",
        content: "Overlay-content-PXU",
        open: "Overlay-open-20F",
        noCenterContent: "Overlay-noCenterContent-2r0",
        close: "Overlay-close-4F6",
        largeClose: "Overlay-largeClose-3Av",
        closeIcon: "Overlay-closeIcon-2jb",
        overlayOpen: "Overlay-overlayOpen-1-L"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(369);
    n.n(o).a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, "#Overlay-top-panel-6dX.Overlay-is-locked-2Im #Overlay-site-content-jRJ {\n  z-index: 6;\n}\n", "" ]), 
    t.locals = {
        "top-panel": "Overlay-top-panel-6dX",
        "is-locked": "Overlay-is-locked-2Im",
        "site-content": "Overlay-site-content-jRJ"
    };
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(402), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Tools-iconWrapper-27B {\n  -webkit-box-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  height: 45px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 45px;\n}\n.Tools-iconWrapper-27B:hover {\n    background: #f1f1f1;\n}\n.Tools-genericToolsIcon-3x7 {\n  fill: #191919;\n  height: 16px;\n  width: 16px;\n}\n.Tools-adobeToolIcon-y6z {\n  height: 50%;\n}\n.Tools-tooltipContent-Egn {\n  width: 220px;\n}\n.Tools-title-18c {\n  color: #959595;\n  font-size: 10px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.Tools-toolWithImage-1G4 {\n  display: inline-block;\n  margin-right: 5px;\n  margin-top: 19px;\n}\n.Tools-toolImage-17Y {\n  height: 31px;\n  overflow: hidden;\n  vertical-align: top;\n  width: 31px;\n}\n.Tools-toolsWithText-1nY {\n  padding-top: 16px;\n}\n.Tools-toolWithText-3ea {\n  display: inline;\n}\n.Tools-toolWithText-3ea:not(:last-child)::after {\n    content: ', ';\n}\n.Tools-toolLink-3qx {\n  color: #191919;\n  font-size: 16px;\n  font-weight: bold;\n}\n", "" ]), 
    t.locals = {
        iconWrapper: "Tools-iconWrapper-27B",
        genericToolsIcon: "Tools-genericToolsIcon-3x7",
        adobeToolIcon: "Tools-adobeToolIcon-y6z",
        tooltipContent: "Tools-tooltipContent-Egn",
        title: "Tools-title-18c",
        toolWithImage: "Tools-toolWithImage-1G4",
        toolImage: "Tools-toolImage-17Y",
        toolsWithText: "Tools-toolsWithText-1nY",
        toolWithText: "Tools-toolWithText-3ea",
        toolLink: "Tools-toolLink-3qx"
    };
}, , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(2)(66);
}, function(e, t, n) {
    e.exports = n(2)(337);
}, , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return o;
    }), n.d(t, "a", function() {
        return r;
    });
    var o = {
        GRID: "media_collection",
        IMAGE: "image",
        TEXT: "text"
    }, r = "isSelected";
}, function(e, t, n) {
    e.exports = n(2)(104);
}, function(e, t, n) {
    "use strict";
    var o = n(404), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ReportButton-link-1dJ {\n  color: #a9a9a9;\n}\n", "" ]), 
    t.locals = {
        link: "ReportButton-link-1dJ"
    };
}, , function(e, t, n) {
    e.exports = n(2)(87);
}, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n(126);
    var o = n(528), r = n(187), i = {
        name: "Overlay",
        props: {
            isVisible: {
                type: Boolean,
                required: !0,
                default: !1
            },
            isLargeCloseIcon: {
                type: Boolean
            },
            isContentCentered: {
                type: Boolean,
                default: !0
            },
            rightOffsetForIcons: {
                type: Number
            },
            disableScroll: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            CloseIcon: r.a
        },
        watch: {
            isVisible: function(e) {
                !0 === e ? this.show() : this.hide();
            }
        },
        data: function() {
            return {
                animationComplete: this.isVisible,
                scrollPoint: null,
                locked: !1
            };
        },
        methods: {
            contentRootDidFinishInitialTransition: function() {
                this.$emit("initialTransitionComplete");
            },
            contentBackgroundWasClicked: function(e) {
                e.target !== this.$refs.contentRoot && e.target !== this.$refs.wallpaper || this.close();
            },
            close: function() {
                var e = this;
                this.$emit("close"), this.$refs.wallpaper.addEventListener("transitionend", function() {
                    return e.$emit("close");
                }), this.hide();
            },
            show: function() {
                var e = this;
                this.locked || (this.locked = !0, requestAnimationFrame(function() {
                    e.scrollPoint = Object(o.a)(e.scrollingElement), e.animationComplete = !0, e.$emit("locked");
                }), document.body.classList.add(this.$style.overlayOpen, "overlay-open"), this.$emit("shown"));
            },
            hide: function() {
                document.body.classList.remove(this.$style.overlayOpen, "overlay-open"), this.locked && (Object(o.b)(this.scrollingElement, this.scrollPoint), 
                this.animationComplete = !1, this.scrollPoint = null, this.locked = !1);
            }
        },
        mounted: function() {
            this.scrollingElement = document.querySelector(".js-top-panel"), this.isVisible && this.show();
        },
        destroyed: function() {
            this.hide();
        }
    }, a = n(646), s = (n(648), n(53));
    var l = Object(s.default)(i, function() {
        var e, t, n, o, r, i = this, a = i.$createElement, s = i._self._c || a;
        return i.isVisible ? s("div", {
            ref: "overlay",
            class: [ i.$style.root, (e = {}, e[i.$style.open] = i.animationComplete, e), (t = {}, 
            t[i.$style.overflowRoot] = !i.isContentCentered, t), (n = {}, n[i.$style.notScrollable] = i.disableScroll, 
            n) ],
            on: {
                "&scroll": function(e) {
                    return i.$emit("scrolled", e.target.scrollTop);
                }
            }
        }, [ s("div", {
            ref: "inner",
            class: i.$style.inner
        }, [ s("div", {
            ref: "wallpaper",
            class: [ i.$style.wallpaper, "qa-overlay-wallpaper" ],
            style: {
                marginRight: i.rightOffsetForIcons + "px"
            },
            on: {
                click: i.contentBackgroundWasClicked
            }
        }), s("div", {
            ref: "contentRoot",
            class: [ i.$style.content, (o = {}, o[i.$style.noCenterContent] = !i.isContentCentered, 
            o) ],
            on: {
                click: i.contentBackgroundWasClicked,
                "~transitionend": function(e) {
                    return i.contentRootDidFinishInitialTransition(e);
                }
            }
        }, [ i._t("default") ], 2) ]), s("span", {
            ref: "close",
            class: [ i.$style.close, (r = {}, r[i.$style.largeClose] = i.isLargeCloseIcon, r), "qa-overlay-close" ],
            style: {
                transform: "translateX(-" + i.rightOffsetForIcons + "px)"
            },
            attrs: {
                "data-ut": "overlay-close"
            },
            on: {
                click: i.close
            }
        }, [ s("CloseIcon", {
            ref: "closeIcon",
            class: i.$style.closeIcon
        }) ], 1) ]) : i._e();
    }, [], !1, function(e) {
        this.$style = a.default.locals || a.default;
    }, null, null);
    t.a = l.exports;
}, , function(e, t, n) {
    "use strict";
    var o = n(16), r = n(317), i = n(183), a = o.default.extend({
        components: {
            Icon: r.a,
            Tooltip: i.a
        },
        props: {
            adobeTools: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            otherTools: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            overrideClass: String
        },
        computed: {
            firstTool: function() {
                var e, t, n, o, r, i, a, s, l;
                return {
                    download_url: null !== (n = null === (t = null === (e = this.adobeTools[0]) || void 0 === e ? void 0 : e.synonym) || void 0 === t ? void 0 : t.download_url) && void 0 !== n ? n : "",
                    title: null !== (i = null === (r = null === (o = this.adobeTools[0]) || void 0 === o ? void 0 : o.synonym) || void 0 === r ? void 0 : r.title) && void 0 !== i ? i : "",
                    icon_url: null !== (l = null === (s = null === (a = this.adobeTools[0]) || void 0 === a ? void 0 : a.synonym) || void 0 === s ? void 0 : s.icon_url) && void 0 !== l ? l : ""
                };
            }
        }
    }), s = n(691), l = n(53);
    var c = Object(l.default)(a, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("Tooltip", {
            ref: "tooltip",
            class: e.$style.tooltip,
            attrs: {
                isResponsive: !0,
                alignment: "right",
                position: "center",
                triangleDistance: 2,
                horizontalPadding: 20,
                verticalPadding: 20,
                distance: 10
            }
        }, [ Boolean(e.adobeTools.length) ? n("a", {
            ref: "root",
            class: [ e.$style.iconWrapper, e.overrideClass, ".qa-adobeTools" ],
            attrs: {
                href: e.firstTool.download_url,
                target: "_blank"
            },
            on: {
                mouseenter: function(t) {
                    return e.$emit("adobeToolClicked", {
                        source: "sidebar",
                        tool: e.firstTool.title,
                        event: t.type
                    });
                },
                click: function(t) {
                    return e.$emit("adobeToolClicked", {
                        source: "sidebar",
                        tool: e.firstTool.title,
                        event: t.type
                    });
                }
            }
        }, [ n("img", {
            ref: "adobeToolIcon",
            class: e.$style.adobeToolIcon,
            attrs: {
                src: e.firstTool.icon_url
            }
        }) ]) : n("div", {
            ref: "root",
            class: [ e.$style.iconWrapper, e.overrideClass ]
        }, [ n("Icon", {
            ref: "genericIcon",
            class: e.$style.genericToolsIcon,
            attrs: {
                name: "api"
            }
        }) ], 1), n("div", {
            class: e.$style.tooltipContent,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ n("div", {
            class: e.$style.title
        }, [ e._v(e._s(e.$translate("project_tools", "Tools"))) ]), Boolean(e.adobeTools.length) ? n("div", e._l(e.adobeTools, function(t, o) {
            return n("div", {
                key: "tool-" + o,
                ref: "toolsWithImage",
                refInFor: !0,
                class: e.$style.toolWithImage
            }, [ t.synonym ? [ n("a", {
                ref: "toolIcon",
                refInFor: !0,
                class: e.$style.tool,
                attrs: {
                    href: t.synonym.download_url || "",
                    target: "_blank"
                },
                on: {
                    click: function(n) {
                        return e.$emit("adobeToolClicked", {
                            source: "sidebar",
                            tool: t.synonym.title || "",
                            event: n.type
                        });
                    }
                }
            }, [ n("img", {
                ref: "toolImage",
                refInFor: !0,
                class: e.$style.toolImage,
                attrs: {
                    src: t.synonym.icon_url || ""
                }
            }) ]) ] : e._e() ], 2);
        }), 0) : e._e(), Boolean(e.otherTools.length) ? n("ul", {
            ref: "toolsWithoutImage",
            class: e.$style.toolsWithText
        }, e._l(e.otherTools, function(t, o) {
            return n("li", {
                key: "texttool-" + o,
                ref: "toolWithoutSynonym",
                refInFor: !0,
                class: e.$style.toolWithText
            }, [ n("a", {
                ref: "toolLink",
                refInFor: !0,
                class: e.$style.toolLink,
                attrs: {
                    href: t.url
                }
            }, [ e._v(e._s(t.title)) ]) ]);
        }), 0) : e._e() ]) ]);
    }, [], !1, function(e) {
        this.$style = s.default.locals || s.default;
    }, null, null);
    t.a = c.exports;
}, function(e, t, n) {
    "use strict";
    n(126);
    var o = n(191), r = {
        props: {
            users: Array,
            avatarSize: {
                type: Number,
                default: 40
            },
            isFollowTypeLink: {
                type: Boolean,
                default: !1
            },
            shouldHaveMiniProfile: {
                type: Boolean,
                default: !0
            }
        },
        components: {
            Avatar: o.a
        }
    }, i = n(816), a = n(53);
    var s = Object(a.default)(r, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            ref: "root"
        }, [ e.$slots.title ? n("h3", {
            class: e.$style.header
        }, [ e._t("title") ], 2) : e._e(), e._l(e.users, function(t, o) {
            var r, i;
            return n("div", {
                key: "user-" + o,
                ref: "profileInfo",
                refInFor: !0,
                class: e.$style.individualProfile
            }, [ n("Avatar", {
                ref: "userAvatar",
                refInFor: !0,
                class: e.$style.userAvatar,
                attrs: {
                    owners: [ t ],
                    target: "_blank",
                    shouldHaveMiniProfile: e.shouldHaveMiniProfile,
                    size: e.avatarSize
                }
            }), n("div", {
                ref: "userInfo",
                refInFor: !0,
                class: [ e.$style.userInfo, (r = {}, r[e.$style.infoWithLink] = e.isFollowTypeLink, 
                r) ]
            }, [ n("a", {
                ref: "userName",
                refInFor: !0,
                class: [ e.$style.userName, (i = {}, i["js-mini-profile"] = e.shouldHaveMiniProfile, 
                i), "qa-user-link" ],
                attrs: {
                    target: "_blank",
                    "data-id": t.id,
                    href: t.url
                }
            }, [ e._v(" " + e._s(t.display_name) + " ") ]), t.location ? n("a", {
                ref: "userLocation",
                refInFor: !0,
                class: [ e.$style.userLocation, "beicons-pre", "beicons-pre-location" ],
                attrs: {
                    href: t.location_link,
                    target: "_blank"
                }
            }, [ n("span", [ e._v(" " + e._s(t.location)) ]) ]) : e._e() ]), n("div", {
                class: e.$style.userActions
            }, [ e._t("userAction" + o) ], 2) ], 1);
        }) ], 2);
    }, [], !1, function(e) {
        this.$style = i.default.locals || i.default;
    }, null, null);
    t.a = s.exports;
}, function(e, t, n) {
    "use strict";
    var o = {
        props: {
            to: {
                type: Object
            }
        }
    }, r = n(721), i = n(53);
    var a = Object(i.default)(o, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return e.to ? n("router-link", {
            ref: "report",
            class: [ "beicons-pre beicons-pre-report", e.$style.link, "qa-report-button" ],
            attrs: {
                to: e.to
            }
        }, [ e._t("default") ], 2) : n("a", {
            ref: "report",
            class: [ "beicons-pre beicons-pre-report", e.$style.link ],
            on: {
                click: function(t) {
                    return e.$emit("click");
                }
            }
        }, [ e._t("default") ], 2);
    }, [], !1, function(e) {
        this.$style = r.default.locals || r.default;
    }, null, null);
    t.a = a.exports;
}, function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "12.517",
                viewBox: "0 0 16 12.517"
            }
        }, [ t("path", {
            attrs: {
                d: "M38.522,39.9a2.322,2.322,0,1,0,2.322,2.322A2.326,2.326,0,0,0,38.522,39.9Z",
                transform: "translate(-30.513 -35.357)"
            }
        }), t("path", {
            attrs: {
                d: "M16.246,14.734H14.8a.952.952,0,0,1-.824-.454l-.437-.673a1.554,1.554,0,0,0-1.3-.707H8.558a1.554,1.554,0,0,0-1.3.707l-.437.673A.973.973,0,0,1,6,14.734H4.554A2.158,2.158,0,0,0,2.4,16.887v6.376a2.158,2.158,0,0,0,2.154,2.154H16.246A2.158,2.158,0,0,0,18.4,23.264V16.871A2.143,2.143,0,0,0,16.246,14.734Zm-5.838,8.547a3.516,3.516,0,1,1,3.516-3.516A3.526,3.526,0,0,1,10.408,23.281Z",
                transform: "translate(-2.4 -12.9)"
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, function(e, t, n) {
    e.exports = n(2)(151);
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="'), o.sub("tooltipClasses", e, t, n), 
            o.b('">'), o.b("\n" + n), o.sub("tooltipContent", e, t, n), o.b("</div>"), o.b("\n"), 
            o.fl();
        },
        partials: {},
        subs: {
            tooltipClasses: function(e, t, n, o) {
                n.b("rf-tooltip--main ");
            },
            tooltipContent: function(e, t, n, o) {}
        }
    }, '<div class="{{$tooltipClasses}}rf-tooltip--main {{/tooltipClasses}}">\n {{$tooltipContent}}{{/tooltipContent}}\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    e.exports = n(2)(155);
}, , , , , , , , , function(e, t, n) {
    "use strict";
    n(36), n(30), n(73), n(8), n(10), n(37), n(38), n(35);
    var o = n(1), r = n(720), i = n(65);
    function a() {
        var e = function(e, t) {
            t || (t = e.slice(0));
            return e.raw = t, e;
        }([ "\n        query GetAddCollectionsModal($contains: MoodboardContains) {\n          viewer {\n            contains: moodboards(contains: $contains) {\n              nodes {\n                id\n              }\n            }\n            moodboards {\n              nodes {\n                privacy\n                owners {\n                  username\n                }\n                id\n                label\n                url\n                modifiedOn\n                items(first: 1) {\n                  nodes {\n                    images: sizes {\n                      ... on ProjectModuleImageSizes {\n                        size_disp {\n                          url\n                        }\n                      }\n                      ... on ProjectCoverImageSizes {\n                        size_original {\n                          url\n                        }\n                        size_115 {\n                          url\n                        }\n                        size_404 {\n                          url\n                        }\n                        size_808 {\n                          url\n                        }\n                        size_max_808 {\n                          url\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      " ]);
        return a = function() {
            return e;
        }, e;
    }
    function s(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function l(e) {
        return function() {
            var t = this, n = arguments;
            return new Promise(function(o, r) {
                var i = e.apply(t, n);
                function a(e) {
                    s(i, o, r, a, l, "next", e);
                }
                function l(e) {
                    s(i, o, r, a, l, "throw", e);
                }
                a(void 0);
            });
        };
    }
    t.a = {
        submitForMatureReview: function(e) {
            return l(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.abrupt("return", Object(o.default)({
                            url: "/v2/project/editor/mature_content_review",
                            type: "POST",
                            data: {
                                project_id: e
                            }
                        }));

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        getGallery: function(e) {
            return l(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Object(o.default)({
                            url: e
                        });

                      case 2:
                        return t.abrupt("return", t.sent);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        getUser: function(e) {
            return l(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (e) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return t.next = 4, Object(o.default)({
                            url: "/v2/users/" + e
                        });

                      case 4:
                        return t.abrupt("return", t.sent.user);

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        getUserMiniprofile: function(e) {
            return l(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Object(o.default)({
                            url: "/v2/users/" + e,
                            type: "GET",
                            data: {
                                format: "mini",
                                client_id: window.adobeid.client_id
                            }
                        });

                      case 2:
                        return t.abrupt("return", t.sent.user);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        viewAndGetAppreciated: function(e) {
            return l(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (r.default.isEnabled()) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return t.next = 4, Object(o.default)({
                            url: "/v2/projects/" + e + "/view",
                            type: "POST"
                        });

                      case 4:
                        return t.abrupt("return", t.sent.appreciated);

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        appreciate: function(e) {
            return Object(o.default)({
                type: "POST",
                url: "/v2/projects/" + e + "/appreciate"
            });
        },
        unappreciate: function(e) {
            return Object(o.default)({
                type: "DELETE",
                url: "/v2/projects/" + e + "/appreciate"
            });
        },
        pulseViewed: function(e) {
            var t = e.from;
            return l(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Object(o.default)({
                            url: "/v2/users/me/flags/" + t + "_pulse_point",
                            type: "POST"
                        });

                      case 2:
                        return e.abrupt("return", e.sent);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        createCollection: function(e) {
            var t = e.collectionName;
            return l(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Object(o.default)({
                            type: "POST",
                            url: "/v2/collections",
                            data: {
                                title: t
                            }
                        });

                      case 2:
                        return e.abrupt("return", e.sent);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        updateCollection: function(e) {
            var t = e.projectId, n = e.projectCollectionIds;
            return Object(o.default)({
                type: "POST",
                url: "/collection/project/" + t,
                data: {
                    collection_ids: n
                }
            });
        },
        saveModuleToCollection: function(e) {
            var t = e.collectionIdsToSave, n = e.moduleId;
            return l(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Promise.all(t.map(function(e) {
                            return Object(o.default)({
                                type: "POST",
                                url: "/v2/collections/" + e + "/modules/" + n
                            });
                        }));

                      case 2:
                        return e.abrupt("return", e.sent);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        deleteModuleFromCollection: function(e) {
            var t = e.collectionIdsToRemove, n = e.moduleId;
            return l(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Promise.all(t.map(function(e) {
                            return Object(o.default)({
                                type: "DELETE",
                                url: "/v2/collections/" + e + "/modules/" + n
                            });
                        }));

                      case 2:
                        return e.abrupt("return", e.sent);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        saveGridItemToMoodboard: function(e) {
            var t = e.collectionIdsToSave, n = e.gridItemId;
            return l(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Promise.all(t.map(function(e) {
                            return Object(o.default)({
                                type: "POST",
                                url: "/v2/collections/" + e + "/griditems/" + n
                            });
                        }));

                      case 2:
                        return e.abrupt("return", e.sent);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        deleteGridItemFromMoodboard: function(e) {
            var t = e.collectionIdsToRemove, n = e.gridItemId;
            return l(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Promise.all(t.map(function(e) {
                            return Object(o.default)({
                                type: "DELETE",
                                url: "/v2/collections/" + e + "/griditems/" + n
                            });
                        }));

                      case 2:
                        return e.abrupt("return", e.sent);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        removeCredit: function(e) {
            var t = e.projectId, n = e.userId;
            return Object(o.default)({
                url: "/v2/projects/" + t + "/credits/" + n,
                type: "DELETE"
            });
        },
        reportProject: function(e) {
            var t = e.reason, n = e.message, r = e.projectId;
            return l(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Object(o.default)({
                            type: "POST",
                            url: "/v2/report/project/" + r,
                            data: {
                                reason: t,
                                message: n
                            }
                        });

                      case 2:
                        return e.abrupt("return", e.sent);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        takedownModuleImage: function(e, t) {
            return l(regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, Object(o.default)({
                            url: "/a/moderation/project__module_takedowns/" + e + "/" + t,
                            type: "POST"
                        });

                      case 2:
                        return n.abrupt("return", n.sent);

                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
            }))();
        },
        restoreModuleImage: function(e) {
            return l(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Object(o.default)({
                            url: "/a/moderation/project__module_takedowns/" + e,
                            type: "DELETE"
                        });

                      case 2:
                        return t.abrupt("return", t.sent);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        invalidateCdnModuleImage: function(e) {
            return l(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Object(o.default)({
                            url: "/a/moderation/project__module_clear_cdn/" + e,
                            type: "DELETE"
                        });

                      case 2:
                        return t.abrupt("return", t.sent);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        getCollectionsForAddCollectionModal: function(e) {
            var t = e.projectId, n = e.query, o = void 0 === n ? {} : n, r = {};
            return o.moduleId ? (r.type = "MODULE", r.id = o.moduleId) : o.gridItemId ? (r.type = "GRID_ITEM", 
            r.id = o.gridItemId) : (r.type = "PROJECT", r.id = t), Object(i.b)({
                query: Object(i.a)(a()),
                variables: {
                    contains: r
                }
            });
        }
    };
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_savingSpinner": n(599).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b("<div "), o.s(o.f("containerId", e, t, 1), e, t, 0, 21, 41, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('id="'), n.b(n.v(n.f("containerId", e, t, 0))), n.b('"');
            }), e.pop()), o.b(' class="form-item form-item-textarea'), o.s(o.f("containerClasses", e, t, 1), e, t, 0, 114, 120, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
            }), e.pop()), o.b('">'), o.b("\n" + n), o.b("  "), o.s(o.f("label", e, t, 1), e, t, 0, 156, 306, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('<label class="'), n.s(n.f("labelClasses", e, t, 1), e, t, 0, 187, 193, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                }), e.pop()), n.b('" for="'), n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b(n.t(n.f("label", e, t, 0))), 
                n.s(n.f("saving_spinner", e, t, 1), e, t, 0, 255, 279, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.rp("<lib/_savingSpinner0", e, t, ""));
                }), e.pop()), n.b("</label>");
            }), e.pop()), o.b("\n" + n), o.b('  <textarea id="'), o.b(o.v(o.f("id", e, t, 0))), 
            o.b('" name="'), o.b(o.v(o.f("name", e, t, 0))), o.s(o.f("name", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.v(o.f("id", e, t, 0))), 
            o.b('" class="form-textarea'), o.s(o.f("classes", e, t, 1), e, t, 0, 413, 419, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
            }), e.pop()), o.b('"'), o.b("\n" + n), o.b("    "), o.s(o.f("maxlength", e, t, 1), e, t, 0, 451, 477, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' maxlength="'), n.b(n.v(n.f("maxlength", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b("    "), o.s(o.f("placeholder", e, t, 1), e, t, 0, 512, 542, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' placeholder="'), n.b(n.v(n.f("placeholder", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b("    "), o.s(o.f("autocomplete", e, t, 1), e, t, 0, 580, 612, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' autocomplete="'), n.b(n.v(n.f("autocomplete", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b("    "), o.b(o.v(o.f("attrs", e, t, 0))), o.b("\n" + n), 
            o.b('    data-validate="'), o.b(o.v(o.f("validate", e, t, 0))), o.b('">'), o.s(o.f("value", e, t, 1), e, t, 0, 687, 696, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.v(n.f("value", e, t, 0)));
            }), e.pop()), o.b("</textarea>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<lib/_savingSpinner0": {
                name: "lib/_savingSpinner",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<div {{#containerId}}id="{{containerId}}"{{/containerId}} class="form-item form-item-textarea{{#containerClasses}} {{.}}{{/containerClasses}}">\n  {{#label}}<label class="{{#labelClasses}} {{.}}{{/labelClasses}}" for="{{id}}">{{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}</label>{{/label}}\n  <textarea id="{{id}}" name="{{name}}{{^name}}{{id}}{{/name}}" class="form-textarea{{#classes}} {{.}}{{/classes}}"\n    {{#maxlength}} maxlength="{{maxlength}}"{{/maxlength}}\n    {{#placeholder}} placeholder="{{placeholder}}"{{/placeholder}}\n    {{#autocomplete}} autocomplete="{{autocomplete}}"{{/autocomplete}}\n    {{attrs}}\n    data-validate="{{validate}}">{{#value}}{{value}}{{/value}}</textarea>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(53), r = Object(o.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            staticStyle: {
                "enable-background": "new 0 0 207.5 183.6"
            },
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 207.5 183.6"
            }
        }, [ t("polygon", {
            attrs: {
                points: "130.8,0 207.5,0 207.5,183.6 "
            }
        }), t("polygon", {
            attrs: {
                points: "76.7,0 0,0 0,183.6 "
            }
        }), t("polygon", {
            attrs: {
                points: "103.8,67.7 152.6,183.6 120.6,183.6 106,146.7 70.2,146.7 "
            }
        }) ]);
    }, [], !1, null, null, null);
    t.a = r.exports;
}, , , , function(e, t, n) {
    "use strict";
    n(17), n(54), n(63), n(43), n(36), n(8), n(37), n(38);
    var o = n(172), r = n.n(o), i = n(566), a = n(772), s = n.n(a), l = n(847), c = n.n(l), u = n(902), p = n(848), d = n(5), f = n(1), b = n(745);
    n(881);
    function h(e) {
        "@babel/helpers - typeof";
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    t.a = s.a.extend({
        xhr: f.default,
        hideButtonText: d.default.translate("form_template_saving", "Saving..."),
        validator: [ c.a.trimIfEmpty, c.a.validateForm ],
        _submitSelector: ".form-submit:not([type=submit]):not([disabled]), .js-submit:not([type=submit]):not([disabled])",
        _displayError: function(e, t) {
            var n = {
                errors: {}
            };
            return n.errors[e.attr("name")] = d.default.translateErrorMessage(t), u.default.displayAll(this.$form)(n);
        },
        init: function(e) {
            this._super(e), this.$context = e, this.on({
                "error:show": this._displayError.bind(this),
                "error:hide": u.default.removeErrors,
                error: function() {
                    this.showButtons();
                },
                before: function() {
                    this.hideButtons();
                }
            }), this.handlers.push(this.showMessages.bind(this)), this.bind();
        },
        reset: function() {
            return this._super(), this.$form.find("select").each(function() {
                var e = this.value;
                r()(this).changeInput("value", "").changeInput("value", e);
            }), this.showButtons(), this;
        },
        _getMessageContainer: function() {
            return this.$form;
        },
        showMessages: function(e) {
            if (!(e = p.default.error(e)).messages) throw e;
            Object(i.default)(this._getMessageContainer(), e.messages);
        },
        submit: function(e) {
            return this.wasSubmittedFromButton = !!e, u.default.removeAll(this.$form), this._super.apply(this, arguments);
        },
        commit: function(e) {
            return Object(f.default)(e);
        },
        showButtons: function() {
            b.default.show(this._getButtonContainer());
        },
        hideButtons: function() {
            var e = this.hideButtonText;
            "function" == typeof e && (e = e()), b.default.hide(this._getButtonContainer(), e);
        },
        _getButtonContainer: function() {
            var e = this.$context.find(this._submitSelector).closest(".form-item").parent();
            if (!e.length && this.wasSubmittedFromButton) throw new Error("Unable to find button container:" + this.$context.html());
            return e;
        },
        _findFormError: function(e) {
            var t = p.default.error(e);
            if (!t.errors && "object" === h(e.responseJSON)) throw e;
            return this._super(t.errors || t);
        },
        bind: function() {
            return this.alreadyBound ? this : (this.alreadyBound = !0, this.$context.on("click keydown", this._submitSelector, this._normalizeSubmitter), 
            this.$form.on("submit", this.submit), this);
        },
        unbind: function() {
            return this.$context.off("click keydown", this._submitSelector, this._normalizeSubmitter), 
            this.$form.off("submit", this.submit), this;
        }
    });
}, , function(e, t, n) {
    e.exports = n(2)(65);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(2)(41);
}, , function(e, t, n) {
    "use strict";
    n(43);
    var o = n(172), r = n.n(o);
    function i(e, t) {
        return e.each(function() {
            var n = function(e, t) {
                var n = r()("<select>", {
                    name: e[0].id,
                    multiple: t || !1
                }).hide();
                return t || r()("<option>", {
                    selected: !0,
                    disabled: !0
                }).appendTo(n), e.children("li").each(function() {
                    r()("<option>", {
                        value: r()(this).data("value")
                    }).appendTo(n);
                }), n.insertAfter(e), n;
            }(r()(this).on("click", ">li", function() {
                var o = r()(this), i = o.data("value"), a = n.find('[value="' + i + '"]'), s = !a.prop("selected");
                a.prop("selected", s), s = a.prop("selected"), (t ? e.find('[data-value="' + i + '"]') : o.siblings().removeClass("active").end()).toggleClass("active", s);
            }), t);
        }), e;
    }
    t.a = {
        selectList: function(e) {
            return i(e || this.$view.find("ul,ol"), !1);
        },
        multiList: function(e) {
            return i(e || this.$view.find("ul,ol"), !0);
        }
    };
}, , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(502), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ModuleDataToggler-infoBtn-fVH {\n  margin-right: 8px;\n}\n.ModuleDataToggler-camera-mfU {\n  fill: #fff;\n  height: 13px;\n  width: 16px;\n}\n.ModuleDataToggler-closeButton-3Pe {\n  cursor: pointer;\n  fill: #959595;\n  height: 29px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 29px;\n  z-index: 1;\n}\n.ModuleDataToggler-closeButton-3Pe:hover {\n    fill: #ccc;\n}\n.ModuleDataToggler-dataBox-1Tu {\n  background: rgba(25, 25, 25, 0.8);\n  border-radius: 5px;\n  min-width: 200px;\n  padding: 30px;\n}\n.ModuleDataToggler-dataBox-1Tu.ModuleDataToggler-tagsBox-3PK {\n  padding-bottom: 15px;\n  text-align: left;\n  width: 400px;\n}\n.ModuleDataToggler-exifField-3UH {\n  margin-bottom: 21px;\n  text-align: left;\n}\n.ModuleDataToggler-exifField-3UH:last-child {\n    margin-bottom: 0;\n}\n.ModuleDataToggler-exifLabel-3w_ {\n  color: #959595;\n  font-size: 10px;\n  font-weight: bold;\n  margin-bottom: 3px;\n  text-transform: uppercase;\n}\n.ModuleDataToggler-exifValue-1zC {\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n}\n.ModuleDataToggler-contentTitleLabel-2oF {\n  color: #959595;\n  font-weight: bold;\n}\n.ModuleDataToggler-tagsSpinner-1pz {\n  margin-top: 10px;\n}\n.ModuleDataToggler-tag-3jD {\n  background-color: #fff;\n  border-radius: 3px;\n  display: inline-block;\n  font-weight: bold;\n  margin: 5px 5px 0 0;\n  padding: 10px;\n}\n", "" ]), 
    t.locals = {
        infoBtn: "ModuleDataToggler-infoBtn-fVH",
        camera: "ModuleDataToggler-camera-mfU",
        closeButton: "ModuleDataToggler-closeButton-3Pe",
        dataBox: "ModuleDataToggler-dataBox-1Tu",
        tagsBox: "ModuleDataToggler-tagsBox-3PK",
        exifField: "ModuleDataToggler-exifField-3UH",
        exifLabel: "ModuleDataToggler-exifLabel-3w_",
        exifValue: "ModuleDataToggler-exifValue-1zC",
        contentTitleLabel: "ModuleDataToggler-contentTitleLabel-2oF",
        tagsSpinner: "ModuleDataToggler-tagsSpinner-1pz",
        tag: "ModuleDataToggler-tag-3jD"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(503), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectOwnersInfo-header-3HM {\n  color: #959595;\n  font-size: 10px;\n  font-weight: bold;\n  line-height: 1;\n  margin-bottom: 16px;\n  margin-top: -2px;\n  text-transform: uppercase;\n}\n.ProjectOwnersInfo-individualProfile-19h {\n  height: 40px;\n}\n.ProjectOwnersInfo-individualProfile-19h:not(:last-child) {\n  margin-bottom: 15px;\n}\n.ProjectOwnersInfo-userAvatar-1nR {\n  float: left;\n  margin-right: 10px;\n}\n.ProjectOwnersInfo-userImage-Yiu {\n  border-radius: 50%;\n  display: block;\n  height: 40px;\n  width: 40px;\n}\n.ProjectOwnersInfo-userInfo-2WK {\n  display: inline-block;\n  max-width: calc(100% - 165px + 5px);\n}\n.ProjectOwnersInfo-infoWithLink-3-r {\n  max-width: calc(100% - 120px);\n}\n.ProjectOwnersInfo-userName-2oz {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #191919;\n  display: block;\n  font-size: inherit;\n  font-weight: bold;\n  max-width: 100%;\n  padding-bottom: 3px;\n  text-align: left;\n}\n.ProjectOwnersInfo-userLocation-_rE {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #696969;\n  display: block;\n  font-size: 0.9em;\n  line-height: 1.2;\n  max-width: 100%;\n  text-align: left;\n}\n.ProjectOwnersInfo-userActions-2ig {\n  float: right;\n  padding-top: 7px;\n}\n", "" ]), 
    t.locals = {
        header: "ProjectOwnersInfo-header-3HM",
        individualProfile: "ProjectOwnersInfo-individualProfile-19h",
        userAvatar: "ProjectOwnersInfo-userAvatar-1nR",
        userImage: "ProjectOwnersInfo-userImage-Yiu",
        userInfo: "ProjectOwnersInfo-userInfo-2WK",
        infoWithLink: "ProjectOwnersInfo-infoWithLink-3-r",
        userName: "ProjectOwnersInfo-userName-2oz",
        userLocation: "ProjectOwnersInfo-userLocation-_rE",
        userActions: "ProjectOwnersInfo-userActions-2ig"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(504), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".MultipleOwners-root-1fq {\n  pointer-events: all;\n}\n.MultipleOwners-arrow-kcW::after {\n  border: 4px solid transparent;\n  border-top-color: inherit;\n  content: '';\n  display: inline-block;\n  height: 0;\n  margin-left: 6px;\n  position: relative;\n  top: 1px;\n  vertical-align: middle;\n  width: 0;\n}\n.MultipleOwners-tooltipContent-1rS {\n  font-family: inherit;\n  max-height: 180px;\n  overflow-y: auto;\n  padding: 10px;\n}\n.MultipleOwners-tooltipContent-1rS .rf-button__container--follow-link > .rf-button.rf-button--small {\n    font-weight: bold;\n}\n.MultipleOwners-tooltipContent-1rS .beicons-pre-location::before {\n    height: unset;\n}\n.MultipleOwners-ownerRow-4Bs {\n  font-size: 14px;\n  width: 245px;\n}\n", "" ]), 
    t.locals = {
        root: "MultipleOwners-root-1fq",
        arrow: "MultipleOwners-arrow-kcW",
        tooltipContent: "MultipleOwners-tooltipContent-1rS",
        ownerRow: "MultipleOwners-ownerRow-4Bs"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(505), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Popup-popup-T3F {\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgba(25, 25, 25, 0.2);\n  left: 50%;\n  padding: 30px 47px 30px 30px;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  z-index: 999;\n}\n.Popup-close-3By {\n  cursor: pointer;\n  opacity: 0.5;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.Popup-close-3By:hover {\n    opacity: 1;\n}\n.Popup-heading-AaP {\n  font-size: 20px;\n  line-height: 1.2;\n}\n.Popup-text-27E {\n  font-size: 15px;\n  margin-top: 11px;\n}\n.Popup-buttons-1X9 {\n  margin-top: 22px;\n}\n.Popup-icon-3II {\n  display: block;\n  fill: #191919;\n  height: 10px;\n  width: 10px;\n}\n", "" ]), 
    t.locals = {
        popup: "Popup-popup-T3F",
        close: "Popup-close-3By",
        heading: "Popup-heading-AaP",
        text: "Popup-text-27E",
        buttons: "Popup-buttons-1X9",
        icon: "Popup-icon-3II"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(506), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".SignUpButtons-container-1uy {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.SignUpButtons-container-1uy .SignUpButtons-phone-2sR {\n    display: none;\n}\n@media (max-width: 603px) {\n.SignUpButtons-container-1uy .SignUpButtons-phone-2sR {\n        display: block;\n}\n}\n@media (max-width: 603px) {\n.SignUpButtons-desktop-25M {\n    display: none;\n}\n}\n.SignUpButtons-envelope-jAq {\n  fill: #fff;\n}\n.SignUpButtons-signup-1rV,\n.SignUpButtons-or-2kd,\n.SignUpButtons-fbIcon-2f1,\n.SignUpButtons-appleIcon-17P {\n  margin-right: 10px;\n}\n.SignUpButtons-signup-1rV {\n  margin-right: 12px;\n}\n.SignUpButtons-signin-3_o {\n  color: #696969;\n  font-size: 14px;\n  font-weight: bold;\n}\n.SignUpButtons-or-2kd {\n  color: #959595;\n  font-weight: bold;\n}\n.SignUpButtons-fbIcon-2f1.SignUpButtons-fbIcon-2f1,\n.SignUpButtons-googleIcon-389,\n.SignUpButtons-appleIcon-17P {\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-property: -webkit-filter;\n  transition-property: -webkit-filter;\n  transition-property: filter;\n  transition-property: filter, -webkit-filter;\n  width: 32px;\n}\n.SignUpButtons-fbIcon-2f1.SignUpButtons-fbIcon-2f1:hover,\n  .SignUpButtons-googleIcon-389:hover,\n  .SignUpButtons-appleIcon-17P:hover {\n    -webkit-filter: brightness(90%);\n            filter: brightness(90%);\n}\n", "" ]), 
    t.locals = {
        container: "SignUpButtons-container-1uy",
        phone: "SignUpButtons-phone-2sR",
        desktop: "SignUpButtons-desktop-25M",
        envelope: "SignUpButtons-envelope-jAq",
        signup: "SignUpButtons-signup-1rV",
        or: "SignUpButtons-or-2kd",
        fbIcon: "SignUpButtons-fbIcon-2f1",
        appleIcon: "SignUpButtons-appleIcon-17P",
        signin: "SignUpButtons-signin-3_o",
        googleIcon: "SignUpButtons-googleIcon-389"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(507), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".SignUpPrompt-popup-2RA {\n  box-shadow: 0 3px 8px rgba(25, 25, 25, 0.3);\n  left: initial;\n  padding: 18px 30px 30px;\n  top: initial;\n  -webkit-transform: initial;\n          transform: initial;\n  z-index: 2;\n  bottom: 40px;\n  cursor: default;\n  right: 10px;\n  width: 350px;\n}\n@media (max-width: 1024px) {\n.SignUpPrompt-popup-2RA.SignUpPrompt-hideMobile-BPa {\n      display: none;\n}\n}\n.SignUpPrompt-avatar-3Da {\n  border-radius: 50%;\n  box-shadow: 0 3px 6px rgba(25, 25, 25, 0.2);\n  left: 25px;\n  margin-top: -25px;\n  position: absolute;\n  top: 0;\n}\n.SignUpPrompt-header-2ga {\n  font-size: 27px;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 10px;\n}\n.SignUpPrompt-header-2ga.SignUpPrompt-headerWithAvatar-3XO {\n    margin-top: 15px;\n}\n.SignUpPrompt-subHeader-YY5 {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.1;\n  margin-bottom: 15px;\n}\n.SignUpPrompt-small-2n9 .SignUpPrompt-subHeader-YY5 {\n    font-size: 15px;\n    font-weight: normal;\n    line-height: 1.3;\n}\n", "" ]), 
    t.locals = {
        popup: "SignUpPrompt-popup-2RA",
        hideMobile: "SignUpPrompt-hideMobile-BPa",
        avatar: "SignUpPrompt-avatar-3Da",
        header: "SignUpPrompt-header-2ga",
        headerWithAvatar: "SignUpPrompt-headerWithAvatar-3XO",
        subHeader: "SignUpPrompt-subHeader-YY5",
        small: "SignUpPrompt-small-2n9"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(508), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectCopyright-root-2cZ {\n  color: #a9a9a9;\n}\n.ProjectCopyright-imageContainter-2_s {\n  display: inline-block;\n}\n.ProjectCopyright-copyrightIcon-2vH {\n  height: 25px;\n  opacity: 0.2;\n  padding-right: 3px;\n  width: 25px;\n}\n.ProjectCopyright-darkBackgroundGrey-1z7 {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  opacity: 0.8;\n}\n.ProjectCopyright-tooltipContent-LVf {\n  padding: 5px 0;\n  text-align: left;\n  width: 200px;\n}\n.ProjectCopyright-title-10A {\n  color: #191919;\n  font-size: 11px;\n  font-weight: bold;\n  margin: 0 10px;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.ProjectCopyright-text-3cX {\n  color: #696969;\n  font-size: 13px;\n  line-height: 16px;\n  margin: 9px 10px 0;\n  text-align: left;\n}\n.ProjectCopyright-link-2FD {\n  display: block;\n  font-size: 12px;\n  margin: 10px 10px 0;\n  white-space: nowrap;\n}\n.ProjectCopyright-link-2FD .beicons,\n  .ProjectCopyright-link-2FD .beicons-pre::before {\n    height: 0;\n}\n.ProjectCopyright-label-3WY {\n  display: block;\n  margin-top: 5px;\n}\n.ProjectCopyright-projectSpamBlock-gDO {\n  margin-top: 5px;\n}\n.ProjectCopyright-spamActions-2vq {\n  color: inherit;\n}\n.ProjectCopyright-spamActions-2vq:first-child {\n    margin-right: 5px;\n}\n.ProjectCopyright-spamActions-2vq::before {\n    left: 5px;\n}\n.ProjectCopyright-tooltipContent-LVf .beicons-pre-promote::before {\n  font-size: 12px;\n  margin-left: 5px;\n}\n", "" ]), 
    t.locals = {
        root: "ProjectCopyright-root-2cZ",
        imageContainter: "ProjectCopyright-imageContainter-2_s",
        copyrightIcon: "ProjectCopyright-copyrightIcon-2vH",
        darkBackgroundGrey: "ProjectCopyright-darkBackgroundGrey-1z7",
        tooltipContent: "ProjectCopyright-tooltipContent-LVf",
        title: "ProjectCopyright-title-10A",
        text: "ProjectCopyright-text-3cX",
        link: "ProjectCopyright-link-2FD",
        label: "ProjectCopyright-label-3WY",
        projectSpamBlock: "ProjectCopyright-projectSpamBlock-gDO",
        spamActions: "ProjectCopyright-spamActions-2vq"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(509), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".FadeRight-enterActive-3Lc {\n  -webkit-animation: FadeRight-fadeRight-3PP 0.4s;\n          animation: FadeRight-fadeRight-3PP 0.4s;\n}\n.FadeRight-leaveActive-2PB {\n  display: none;\n}\n@-webkit-keyframes FadeRight-fadeRight-3PP {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-15%);\n            transform: translateX(-15%);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes FadeRight-fadeRight-3PP {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-15%);\n            transform: translateX(-15%);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n", "" ]), 
    t.locals = {
        enterActive: "FadeRight-enterActive-3Lc",
        fadeRight: "FadeRight-fadeRight-3PP",
        leaveActive: "FadeRight-leaveActive-2PB"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(510), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".CollectionNotifications-collectionNotifications-3jE {\n  -webkit-box-align: center;\n          align-items: center;\n  background: #fff;\n  border-radius: 3px;\n  bottom: 20px;\n  box-shadow: 0 3px 8px rgba(25, 25, 25, 0.3);\n  cursor: default;\n  display: -webkit-box;\n  display: flex;\n  left: 20px;\n  padding: 12px;\n  position: fixed;\n  width: 340px;\n  z-index: 8;\n}\n.CollectionNotifications-collectionNotifications-3jE.CollectionNotifications-overlayOverFooter-Il2 {\n    z-index: 6;\n}\n.CollectionNotifications-collectionImage-2tA {\n  display: block;\n  width: 120px;\n}\n.CollectionNotifications-landscapeImage-ysZ {\n  height: 80px;\n  width: auto;\n}\n.CollectionNotifications-collectionImageLoader-143 {\n  height: 80px;\n  margin-right: 13px;\n  width: 120px;\n}\n.CollectionNotifications-collectionNotifications-3jE .CollectionNotifications-collectionImageLoader-143 {\n    position: relative;\n}\n.CollectionNotifications-clipper-UQX {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 80px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-right: 13px;\n  overflow: hidden;\n  position: relative;\n  width: 120px;\n}\n.CollectionNotifications-collectionCTA-15p {\n  font-size: 16px;\n  line-height: 1.2;\n}\n.CollectionNotifications-collectionCTA-15p .link {\n    color: inherit;\n    text-decoration: underline;\n}\n.CollectionNotifications-collectionLink-2qb {\n  color: #191919;\n  display: inline-block;\n  font-size: 15px;\n  font-weight: bold;\n  margin-top: 14px;\n}\n.CollectionNotifications-collectionNotificationArrow-1TW {\n  margin-left: 2px;\n  position: relative;\n  top: 1px;\n  width: 17px;\n}\n", "" ]), 
    t.locals = {
        collectionNotifications: "CollectionNotifications-collectionNotifications-3jE",
        overlayOverFooter: "CollectionNotifications-overlayOverFooter-Il2",
        collectionImage: "CollectionNotifications-collectionImage-2tA",
        landscapeImage: "CollectionNotifications-landscapeImage-ysZ",
        collectionImageLoader: "CollectionNotifications-collectionImageLoader-143",
        clipper: "CollectionNotifications-clipper-UQX",
        collectionCTA: "CollectionNotifications-collectionCTA-15p",
        collectionLink: "CollectionNotifications-collectionLink-2qb",
        collectionNotificationArrow: "CollectionNotifications-collectionNotificationArrow-1TW"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(511), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, "@charset \"UTF-8\";\n.ProjectInfoBox-moduleLightboxCaption-1Jd {\n  -webkit-box-align: center;\n          align-items: center;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(#000));\n  background: linear-gradient(rgba(0, 0, 0, 0), #000);\n  border-radius: 2px;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  left: 0;\n  padding: 15px 30px;\n  position: fixed;\n  width: 100%;\n  z-index: 1004;\n}\n.lightbox-zoomed .ProjectInfoBox-moduleLightboxCaption-1Jd,\n  .extras-hidden .ProjectInfoBox-moduleLightboxCaption-1Jd {\n    display: none;\n}\n.ProjectInfoBox-moduleLightboxCaption-1Jd .link {\n  color: #fff;\n}\n.ProjectInfoBox-projectCoverThumbnail-EIL {\n  border-radius: 2px;\n  display: block;\n  margin-right: 10px;\n  width: 80px;\n}\n.ProjectInfoBox-projectInfo-1_x {\n  color: #fff;\n  font-size: 14px;\n}\n.ProjectInfoBox-projectOwners-aMm {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 9px;\n}\n.ProjectInfoBox-projectLink-1Mf {\n  width: auto;\n}\n.ProjectInfoBox-projectName-3dY {\n  color: inherit;\n  font-weight: bold;\n}\n.ProjectInfoBox-projectFollow-3NA {\n  display: -webkit-box;\n  display: flex;\n}\n.ProjectInfoBox-projectFollow-3NA .rf-button__label::before {\n    display: none;\n}\n.ProjectInfoBox-projectFollow-3NA .rf-button__container {\n    display: block;\n}\n.ProjectInfoBox-projectFollow-3NA .rf-button__container--follow-link .rf-button__label {\n    color: #fff;\n    font-size: 14px;\n}\n.ProjectInfoBox-projectFollow-3NA:hover .rf-button__label {\n    text-decoration: underline;\n}\n.ProjectInfoBox-projectFollow-3NA::before {\n    content: '\\2022';\n    display: inline-block;\n    margin: 0 10px;\n}\n", "" ]), 
    t.locals = {
        moduleLightboxCaption: "ProjectInfoBox-moduleLightboxCaption-1Jd",
        projectCoverThumbnail: "ProjectInfoBox-projectCoverThumbnail-EIL",
        projectInfo: "ProjectInfoBox-projectInfo-1_x",
        projectOwners: "ProjectInfoBox-projectOwners-aMm",
        projectLink: "ProjectInfoBox-projectLink-1Mf",
        projectName: "ProjectInfoBox-projectName-3dY",
        projectFollow: "ProjectInfoBox-projectFollow-3NA"
    };
}, , , function(e, t, n) {
    "use strict";
    n(126);
    var o = n(191), r = n(596), i = n.n(r), a = n(182), s = n(187), l = {
        name: "Popup",
        components: {
            Btn: a.a,
            CloseIcon: s.a
        },
        props: {
            heading: {
                type: String
            },
            text: {
                type: String
            },
            buttons: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            canClose: {
                type: Boolean,
                default: !0
            }
        },
        data: function() {
            return {
                isHidden: !1
            };
        },
        methods: {
            hide: function() {
                this.isHidden = !0, this.$emit("closed");
            }
        }
    }, c = n(820), u = n(53);
    var p = Object(u.default)(l, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: !e.isHidden,
                expression: "!isHidden"
            } ],
            ref: "popup",
            class: e.$style.popup
        }, [ e.canClose ? n("span", {
            ref: "hideButton",
            class: e.$style.close,
            on: {
                click: e.hide
            }
        }, [ n("CloseIcon", {
            class: e.$style.icon
        }) ], 1) : e._e(), n("h2", {
            ref: "heading",
            class: e.$style.heading
        }, [ e._v(e._s(e.heading)) ]), n("div", {
            ref: "text",
            class: e.$style.text,
            domProps: {
                innerHTML: e._s(e.text)
            }
        }), e._t("default"), e.buttons.length ? n("div", {
            ref: "buttonContainer",
            class: e.$style.buttons
        }, e._l(e.buttons, function(t, o) {
            return n("Btn", e._b({
                key: o,
                attrs: {
                    type: t.type,
                    customClass: t.customClass
                },
                on: {
                    click: t.click
                }
            }, "Btn", t.attributes, !1), [ e._v(e._s(t.label)) ]);
        }), 1) : e._e() ], 2);
    }, [], !1, function(e) {
        this.$style = c.default.locals || c.default;
    }, null, null).exports, d = n(255), f = n(32), b = (n(8), n(10), n(35), Object(u.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 34 34"
            }
        }, [ t("defs"), t("g", [ t("g", {
            attrs: {
                fill: "#fff",
                stroke: "#e8e8e8",
                transform: "translate(1 1)"
            }
        }, [ t("circle", {
            attrs: {
                cx: "16",
                cy: "16",
                r: "16",
                stroke: "none"
            }
        }), t("circle", {
            attrs: {
                cx: "16",
                cy: "16",
                r: "16.5",
                fill: "none"
            }
        }) ]), t("path", {
            attrs: {
                d: "M22.748 20.099a7.745 7.745 0 01-.766 1.377A7 7 0 0121 22.671a1.914 1.914 0 01-1.268.558 3.178 3.178 0 01-1.171-.28 3.361 3.361 0 00-1.261-.278 3.475 3.475 0 00-1.3.279 3.489 3.489 0 01-1.121.295 1.8 1.8 0 01-1.3-.573 7.347 7.347 0 01-1.029-1.235 8.539 8.539 0 01-1.092-2.168A7.937 7.937 0 0111 16.686a4.718 4.718 0 01.62-2.469 3.634 3.634 0 011.3-1.312 3.49 3.49 0 011.754-.5 4.13 4.13 0 011.357.316 4.362 4.362 0 001.069.321 6.44 6.44 0 001.2-.373 3.944 3.944 0 011.62-.288 3.444 3.444 0 012.7 1.42 3 3 0 00-1.592 2.726 3.008 3.008 0 00.985 2.272 3.245 3.245 0 00.987.647q-.119.344-.252.66zM20 9.285a3.039 3.039 0 01-.78 1.993 2.654 2.654 0 01-2.2 1.088 2.218 2.218 0 01-.02-.267 3.123 3.123 0 01.827-2.014 3.182 3.182 0 011.006-.759 3 3 0 011.152-.327 2.587 2.587 0 01.015.286z"
            }
        }) ]) ]);
    }, [], !1, null, null, null).exports), h = n(416), m = n(325), g = Object(u.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                viewBox: "0 0 34 34",
                xmlns: "http://www.w3.org/2000/svg"
            }
        }, [ t("g", {
            attrs: {
                transform: "translate(-1693 -927)"
            }
        }, [ t("circle", {
            attrs: {
                transform: "translate(1694 928)",
                cx: "16",
                cy: "16",
                r: "16",
                stroke: "#e8e8e8",
                fill: "#fff"
            }
        }), t("path", {
            attrs: {
                d: "M1717.68 944.182a9.192 9.192 0 0 0-.145-1.636H1710v3.095h4.305a3.68 3.68 0 0 1-1.6 2.415v2.006h2.585a7.8 7.8 0 0 0 2.39-5.88z",
                fill: "#4285f4",
                "fill-rule": "evenodd"
            }
        }), t("path", {
            attrs: {
                d: "M1710 952a7.638 7.638 0 0 0 5.294-1.938l-2.585-2.007a4.826 4.826 0 0 1-7.185-2.535h-2.673v2.073A8 8 0 0 0 1710 952z",
                fill: "#34a853",
                "fill-rule": "evenodd"
            }
        }), t("path", {
            attrs: {
                d: "M1705.5 945.52a4.73 4.73 0 0 1 0-3.04v-2.073h-2.673a8.01 8.01 0 0 0 0 7.185l2.673-2.073z",
                fill: "#fbbc05",
                "fill-rule": "evenodd"
            }
        }), t("path", {
            attrs: {
                d: "M1710 939.182a4.322 4.322 0 0 1 3.058 1.2l2.295-2.295A7.688 7.688 0 0 0 1710 936a8 8 0 0 0-7.149 4.407l2.673 2.073a4.768 4.768 0 0 1 4.476-3.3z",
                fill: "#ea4335",
                "fill-rule": "evenodd"
            }
        }) ]) ]);
    }, [], !1, null, null, null).exports;
    function v(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    var w = {
        components: {
            AppleIcon: b,
            Btn: a.a,
            Envelope: h.a,
            FacebookIcon: m.a,
            GoogleIcon: g
        },
        props: {
            from: String,
            primaryButtonCTAType: {
                type: String,
                default: "signup"
            },
            followeeId: {
                type: Number
            },
            primaryLabel: {
                type: String
            },
            shouldDisplaySocialSignIn: {
                type: Boolean,
                default: !0
            }
        },
        computed: {
            buttonClass: function() {
                return {
                    signup: "js-adobeid-signup",
                    follow: "js-action-follow"
                }[this.primaryButtonCTAType];
            }
        },
        methods: {
            initFollow: function() {
                var e, t = this;
                return (e = regeneratorRuntime.mark(function e() {
                    var o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, n.e(30).then(n.bind(null, 252));

                          case 2:
                            o = e.sent, o.default.init(t.$refs.root);

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }), function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, r) {
                        var i = e.apply(t, n);
                        function a(e) {
                            v(i, o, r, a, s, "next", e);
                        }
                        function s(e) {
                            v(i, o, r, a, s, "throw", e);
                        }
                        a(void 0);
                    });
                })();
            }
        },
        mounted: function() {
            "follow" === this.primaryButtonCTAType && this.initFollow();
        }
    }, _ = n(822);
    var y = Object(u.default)(w, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            ref: "root",
            class: e.$style.container
        }, [ n("Btn", {
            ref: "emailSignup",
            class: [ e.$style.signup, this.buttonClass ],
            attrs: {
                type: "primary",
                "data-signup-from": e.from,
                "data-followee": e.followeeId,
                leadingIconStyle: e.$style.phone,
                "data-entity": "user",
                "data-following": "false"
            }
        }, [ n("label", {
            class: e.$style.desktop
        }, [ e._v(e._s(e.primaryLabel || e.$translate("sign_up_buttons_with_email", "Sign Up With Email"))) ]), n("Envelope", {
            class: [ e.$style.phone, e.$style.envelope ],
            attrs: {
                slot: "leadingIcon"
            },
            slot: "leadingIcon"
        }), n("label", {
            class: e.$style.phone
        }, [ e._v(e._s(e.$translate("sign_up_buttons_with_email_mobile", "Sign Up"))) ]) ], 1), e.shouldDisplaySocialSignIn ? [ n("span", {
            class: [ e.$style.or, e.$style.desktop ]
        }, [ e._v(" " + e._s(e.$translate("sign_up_buttons_or", "or")) + " ") ]), n("a", {
            ref: "appleSignin",
            class: [ e.$style.appleIcon, "js-adobeid-signin", "vue-btn" ],
            attrs: {
                "data-signin-from": e.from,
                "data-adobeid-social-provider": "apple"
            }
        }, [ n("AppleIcon", {
            attrs: {
                useColor: !0
            }
        }) ], 1), n("a", {
            ref: "facebookSignin",
            class: [ e.$style.fbIcon, "js-adobeid-signin", "vue-btn" ],
            attrs: {
                "data-signin-from": e.from,
                "data-adobeid-social-provider": "facebook"
            }
        }, [ n("FacebookIcon", {
            attrs: {
                useColor: !0
            }
        }) ], 1), n("a", {
            ref: "googleSignin",
            class: [ e.$style.googleIcon, "js-adobeid-signin", "vue-btn" ],
            attrs: {
                "data-signin-from": e.from,
                "data-adobeid-social-provider": "google"
            }
        }, [ n("GoogleIcon") ], 1) ] : [ n("a", {
            ref: "genericSignin",
            class: [ e.$style.signin, "js-adobeid-signin" ],
            attrs: {
                "data-signin-from": e.from
            }
        }, [ e._v(e._s(e.$translate("signup_prompt_sign_in", "Or, sign in"))) ]) ] ], 2);
    }, [], !1, function(e) {
        this.$style = _.default.locals || _.default;
    }, null, null).exports, j = {
        components: {
            Avatar: o.a,
            Btn: a.a,
            Popup: p,
            TriangleIcon: d.a,
            SignUpButtons: y
        },
        props: {
            header: {
                type: String
            },
            subHeader: {
                type: String
            },
            cookieName: {
                type: String
            },
            primaryLabel: {
                type: String
            },
            shouldDisplaySocialSignIn: {
                type: Boolean,
                default: !0
            },
            isSmallPrompt: {
                type: Boolean,
                default: !1
            },
            owners: {
                type: Array
            },
            followeeId: {
                type: Number
            },
            primaryButtonCTAType: {
                type: String
            },
            context: {
                type: String
            },
            canClose: {
                type: Boolean,
                default: !0
            },
            delay: {
                type: Number,
                default: 2e3
            },
            isHiddenMobile: {
                type: Boolean,
                default: !0
            },
            analyticsChannel: {
                type: String,
                default: "sign_up_prompt"
            }
        },
        data: function() {
            return {
                isPromptRendered: !1,
                didUserSeePrompt: !1
            };
        },
        watch: {
            didUserSeePrompt: function(e) {
                e && this.isPromptRendered && f.default.custom(this.analyticsChannel, "rendered", this.logData);
            }
        },
        mounted: function() {
            var e = this;
            this.delay > 0 ? this.showPromptTimeout = setTimeout(function() {
                e.init();
            }, this.delay) : this.init();
        },
        destroyed: function() {
            clearTimeout(this.showPromptTimeout);
        },
        computed: {
            logData: function() {
                return {
                    from_prompt_source: this.context
                };
            }
        },
        methods: {
            init: function() {
                this.open();
            },
            open: function() {
                i.a.get(this.cookieName) || (this.isPromptRendered = !0);
            },
            close: function() {
                this.canClose && (this.isPromptRendered = !1, i.a.set(this.cookieName, !0, {
                    expires: 14
                }), f.default.custom(this.analyticsChannel, "closed", this.logData));
            },
            visibilityChanged: function(e) {
                e && (this.didUserSeePrompt = e);
            }
        }
    }, x = n(824);
    var P = Object(u.default)(j, function() {
        var e, t, n, o = this, r = o.$createElement, i = o._self._c || r;
        return o.isPromptRendered ? i("Popup", {
            directives: [ {
                name: "observe-visibility",
                rawName: "v-observe-visibility",
                value: {
                    callback: o.visibilityChanged,
                    once: !0
                },
                expression: "{ callback: visibilityChanged, once: true }"
            } ],
            ref: "promptPopup",
            class: [ o.$style.popup, (e = {}, e[o.$style.hideMobile] = o.isHiddenMobile, e), (t = {}, 
            t[o.$style.small] = o.isSmallPrompt, t) ],
            attrs: {
                canClose: o.canClose
            },
            on: {
                closed: o.close
            }
        }, [ o.$slots.default ? o._t("default") : [ o.owners ? i("Avatar", {
            ref: "avatar",
            class: o.$style.avatar,
            attrs: {
                owners: o.owners,
                size: 50,
                shouldHaveMiniProfile: !1
            }
        }) : o._e(), i("h1", {
            ref: "header",
            class: [ o.$style.header, (n = {}, n[o.$style.headerWithAvatar] = o.owners, n) ]
        }, [ o._v(o._s(o.header)) ]), i("h2", {
            ref: "subHeader",
            class: o.$style.subHeader
        }, [ o._v(o._s(o.subHeader)) ]), i("div", {
            class: o.$style.callToAction
        }, [ o.$slots.action ? o._t("action") : i("SignUpButtons", {
            ref: "signUpButtons",
            attrs: {
                from: o.context,
                primaryLabel: o.primaryLabel,
                followeeId: o.followeeId,
                primaryButtonCTAType: o.primaryButtonCTAType,
                shouldDisplaySocialSignIn: o.shouldDisplaySocialSignIn
            }
        }) ], 2) ] ], 2) : o._e();
    }, [], !1, function(e) {
        this.$style = x.default.locals || x.default;
    }, null, null);
    t.a = P.exports;
}, , , , , function(e, t, n) {
    "use strict";
    n(414), n(126);
    var o = n(272), r = n(560), i = n(226), a = n(197), s = {
        components: {
            Follow: o.a,
            MultipleOwners: r.a
        },
        props: {
            projectId: {
                type: Number
            },
            projectName: {
                type: String
            },
            projectUrl: {
                type: String
            },
            projectCovers: {
                type: Object
            },
            owners: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            showFollow: {
                type: Boolean
            }
        },
        computed: {
            isMultipleOwners: function() {
                return this.owners.length > 1;
            },
            isFollowingAll: function() {
                return this.owners.every(function(e) {
                    return Boolean(e.is_following);
                });
            }
        },
        data: function() {
            return {
                getCoverSrc: i.e,
                getProjectCoverSrcSet: a.d
            };
        }
    }, l = n(832), c = n(53);
    var u = Object(c.default)(s, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: [ e.$style.moduleLightboxCaption, "js-lightbox-caption" ]
        }, [ n("a", {
            staticClass: "js-project-cover-image-link",
            class: e.$style.projectLink,
            attrs: {
                href: e.projectUrl,
                target: "_blank"
            }
        }, [ n("img", {
            class: e.$style.projectCoverThumbnail,
            attrs: {
                src: e.getCoverSrc(e.projectCovers),
                srcset: e.getProjectCoverSrcSet(e.projectCovers)
            }
        }) ]), n("div", {
            class: e.$style.projectInfo
        }, [ n("a", {
            staticClass: "js-project-cover-title-link",
            class: [ e.$style.projectName, "ut-lightbox-project-name" ],
            attrs: {
                href: e.projectUrl,
                target: "_blank"
            }
        }, [ e._v(e._s(e.projectName)) ]), n("div", {
            class: e.$style.projectOwners
        }, [ e.isMultipleOwners ? [ n("MultipleOwners", {
            attrs: {
                owners: e.owners,
                position: "top"
            }
        }), e.showFollow ? n("Follow", {
            class: [ e.$style.projectFollow, "ut-lightbox-multipleowners-follow" ],
            attrs: {
                type: "linkAll",
                followeeId: e.projectId,
                isFollowing: e.isFollowingAll,
                entityType: "project",
                source: "lightbox"
            }
        }) : e._e() ] : [ n("span", {
            class: e.$style.ownerName
        }, [ e._v(e._s(e.$translate("project_info_box_by", "by")) + " "), n("a", {
            class: [ "ut-lightbox-project-owner", "js-mini-profile", "link" ],
            attrs: {
                "data-id": e.owners[0].id,
                href: e.owners[0].url,
                target: "_blank"
            }
        }, [ e._v(e._s(e.owners[0].display_name)) ]) ]), e.showFollow ? n("Follow", {
            class: [ e.$style.projectFollow, "ut-lightbox-singleowner-follow" ],
            attrs: {
                type: "link",
                followeeId: e.owners[0].id,
                isFollowing: Boolean(e.owners[0].is_following),
                entityType: "user",
                source: "lightbox"
            }
        }) : e._e() ] ], 2) ]) ]);
    }, [], !1, function(e) {
        this.$style = l.default.locals || l.default;
    }, null, null);
    t.a = u.exports;
}, function(e, t, n) {
    "use strict";
    n(126);
    var o = n(182), r = n(187), i = n(238), a = n(185), s = n(744), l = n(1), c = n(365);
    var u = {
        components: {
            Spinner: a.a,
            Select: i.a,
            Btn: o.a,
            Close: r.a,
            CameraIcon: s.a
        },
        props: {
            exif: {
                type: Array
            },
            canShowAutoTags: {
                type: Boolean,
                default: !1
            },
            moduleId: {
                type: Number
            }
        },
        data: function() {
            return {
                showInfoBox: !1,
                showTagsBox: !1,
                loadingTags: !1,
                tags: [],
                fetchPromise: null
            };
        },
        computed: {
            toggleButtonsShouldBeShowing: function() {
                return !this.showInfoBox && !this.showTagsBox;
            },
            shouldShowDataBox: function() {
                return this.showInfoBox || this.showTagsBox;
            }
        },
        methods: {
            closeBtnClick: function() {
                this.showInfoBox = !1, this.showTagsBox = !1, this.$emit("infoBoxHidden"), this.tags = [];
            },
            tagsBtnClick: function(e) {
                var t = this;
                this.showTagsBox = !0, this.loadingTags = !0, this.fetchPromise || (this.fetchPromise = Object(l.default)({
                    url: "/v2/modules/" + this.moduleId + "/autotags?provider=" + e,
                    success: function(e) {
                        var n = e.tags;
                        t.showTagsBox && (t.tags = n);
                    },
                    complete: function() {
                        t.fetchPromise = null, t.loadingTags = !1;
                    }
                }));
            },
            isLinkable: function(e) {
                return e.key ? Boolean(c.d[e.key]) : !!e.id && Boolean(c.c[e.id]);
            },
            getExifLink: function(e) {
                var t = e.key, n = e.id, o = e.value, r = e.searchValue, i = t ? c.d[t] : c.c[n];
                return {
                    path: "/search/images",
                    query: i ? function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e;
                    }({}, i, null !== r && void 0 !== r ? r : o) : {}
                };
            }
        }
    }, p = n(814), d = n(53);
    var f = Object(d.default)(u, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", {
            on: {
                click: function(e) {
                    e.stopPropagation();
                }
            }
        }, [ t.shouldShowDataBox ? o("Close", {
            ref: "closeBtn",
            class: [ t.$style.closeButton, "ut-module-data-close-btn" ],
            nativeOn: {
                click: function(e) {
                    return e.stopPropagation(), t.closeBtnClick(e);
                }
            }
        }) : t._e(), t.toggleButtonsShouldBeShowing && t.exif && t.exif.length ? o("Btn", {
            ref: "infoBtn",
            class: [ t.$style.infoBtn, "ut-module-exif-btn" ],
            attrs: {
                type: "inverted"
            },
            on: {
                click: function(e) {
                    e.stopPropagation(), t.showInfoBox = !0, t.$emit("infoBoxShown");
                }
            }
        }, [ o("CameraIcon", {
            class: t.$style.camera,
            attrs: {
                slot: "leadingIcon"
            },
            slot: "leadingIcon"
        }), t._v(t._s(t.$translate("project_module_exif_info", "Info"))) ], 1) : t._e(), t.toggleButtonsShouldBeShowing && t.canShowAutoTags ? o("Btn", {
            ref: "tagsBtnAdobe",
            on: {
                click: function(e) {
                    return e.stopPropagation(), t.tagsBtnClick("adobe");
                }
            }
        }, [ t._v(t._s(t.$translate("project_module_exif_tags", "Tags (Adobe)"))) ]) : t._e(), t.toggleButtonsShouldBeShowing && t.canShowAutoTags ? o("Btn", {
            ref: "tagsBtnMicrosoft",
            on: {
                click: function(e) {
                    return e.stopPropagation(), t.tagsBtnClick("microsoft");
                }
            }
        }, [ t._v("Tags (Microsoft)") ]) : t._e(), t.shouldShowDataBox ? o("div", {
            ref: "dataBox",
            class: [ t.$style.dataBox, (e = {}, e[t.$style.tagsBox] = t.showTagsBox, e) ]
        }, [ t.showInfoBox ? o("div", t._l(t.exif, function(e, n) {
            return o("div", {
                key: n,
                ref: "exifField",
                refInFor: !0,
                class: t.$style.exifField,
                attrs: {
                    "data-ut": "exif-data-field"
                }
            }, [ o("div", {
                ref: "exifLabel",
                refInFor: !0,
                class: t.$style.exifLabel
            }, [ t._v(t._s(e.label)) ]), t.isLinkable(e) ? o("router-link", {
                ref: "exifValue",
                refInFor: !0,
                class: t.$style.exifValue,
                attrs: {
                    to: t.getExifLink(e),
                    target: "_blank",
                    "data-ut": "exif-data-field-link"
                }
            }, [ t._v(t._s(e.value)) ]) : o("span", {
                ref: "exifValue",
                refInFor: !0,
                class: t.$style.exifValue,
                attrs: {
                    "data-ut": "exif-data-value"
                }
            }, [ t._v(t._s(e.value)) ]) ], 1);
        }), 0) : t._e(), t.showTagsBox ? o("div", [ o("div", {
            class: t.$style.contentTitleLabel
        }, [ t._v(t._s(t.$translate("project_module_exif_tags", "Tags"))) ]), t.loadingTags ? o("Spinner", {
            class: t.$style.tagsSpinner
        }) : t._e(), t._l(t.tags, function(e, n) {
            return o("span", {
                key: n,
                class: t.$style.tag
            }, [ t._v(t._s(e.name) + " | " + t._s(e.score)) ]);
        }) ], 2) : t._e() ]) : t._e() ], 1);
    }, [], !1, function(e) {
        this.$style = p.default.locals || p.default;
    }, null, null);
    t.a = f.exports;
}, function(e, t, n) {
    "use strict";
    n(70), n(126);
    var o = n(183), r = n(743), i = n(424), a = n(86), s = {
        label: "label"
    }, l = {
        name: "ProjectCopyright",
        data: function() {
            return {
                testSelectors: s,
                ROUTE_ACTIONS: a.a
            };
        },
        props: {
            projectId: {
                type: Number
            },
            isProfileOwner: {
                type: Boolean
            },
            isLoggedIn: {
                type: Boolean
            },
            copyright: {
                type: Object
            },
            tooltipAlignment: {
                type: String,
                default: "left",
                validator: function(e) {
                    return [ "left", "right" ].includes(e);
                }
            },
            isCopyrightDarkBackground: {
                type: Boolean
            },
            isReportModalVisible: {
                type: Boolean,
                default: !1
            },
            isNotProject: {
                type: Boolean,
                default: !0
            }
        },
        components: {
            Tooltip: o.a,
            ReportButton: r.a,
            ReportModal: i.a
        },
        computed: {
            isAllRightsReserved: function() {
                return 7 === this.copyright.license_id;
            }
        }
    }, c = n(826), u = n(53);
    var p = Object(u.default)(l, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            ref: "CopyrightInfo",
            class: e.$style.root
        }, [ e.copyright.info.images && e.copyright.info.images.length ? n("Tooltip", {
            ref: "tooltip",
            attrs: {
                isResponsive: !0,
                alignment: e.tooltipAlignment,
                position: "top"
            }
        }, [ e.isAllRightsReserved ? n("label", {
            class: e.$style.label,
            attrs: {
                "data-ut": e.testSelectors.label
            }
        }, [ e._v("© " + e._s(e.copyright.label)) ]) : e._l(e.copyright.info.images, function(t, o) {
            var r;
            return n("img", {
                key: "image-" + o,
                ref: "copyrightIcon",
                refInFor: !0,
                class: [ e.$style.copyrightIcon, (r = {}, r[e.$style.darkBackgroundGrey] = e.isCopyrightDarkBackground, 
                r) ],
                attrs: {
                    src: t
                }
            });
        }), n("div", {
            class: e.$style.tooltipContent,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ n("div", {
            ref: "title",
            class: e.$style.title
        }, [ e._v(e._s(e.$translate("project_copyright_info_label", "Copyright Info"))) ]), n("p", {
            class: e.$style.text
        }, [ e._v(e._s(e.copyright.info.text)) ]), e.copyright.info.url ? n("a", {
            ref: "copyrightUrl",
            class: e.$style.link,
            attrs: {
                href: e.copyright.info.url,
                target: "_blank"
            }
        }, [ e._v(" " + e._s(e.$translate("project_copyright_read_more", "Read More")) + " "), n("span", {
            staticClass: "beicons-pre beicons-pre-promote"
        }) ]) : e._e() ]) ], 2) : e._e(), e.isProfileOwner ? e._e() : n("div", {
            ref: "spamBlock",
            class: [ "js-project-spam", e.$style.projectSpamBlock ],
            attrs: {
                id: "project-block-spam"
            }
        }, [ e.isLoggedIn ? n("a", {
            ref: "spam",
            staticClass: "js-action-spam beicons-pre beicons-pre-spam",
            class: e.$style.spamActions,
            attrs: {
                "data-ut": "copyright-spam-report",
                "data-type": "project",
                "data-id": e.projectId
            }
        }, [ e._v(e._s(e.$translate("project_mark_as_spam", "Mark as Spam"))) ]) : e._e(), n("ReportButton", {
            ref: "report",
            class: e.$style.spamActions,
            attrs: {
                "data-ut": "copyright-report-button",
                to: e.isNotProject ? null : {
                    name: "projectAction",
                    params: {
                        action: e.ROUTE_ACTIONS.REPORT
                    }
                }
            },
            nativeOn: {
                click: function(t) {
                    return t.stopPropagation(), e.$emit("toggleReportModal", !0);
                }
            }
        }, [ e._v(" " + e._s(e.$translate("project_report", "Report")) + " ") ]) ], 1), e.isNotProject ? n("portal", {
            attrs: {
                "target-el": ".js-vue-project-report-modal"
            }
        }, [ n("ReportModal", {
            ref: "reportModal",
            attrs: {
                isShown: e.isReportModalVisible,
                headerText: e.$translate("project_report_modal_header", "Report Project"),
                shouldShowAboveLightbox: !0
            },
            on: {
                close: function(t) {
                    return e.$emit("toggleReportModal", !1);
                },
                confirm: function(t) {
                    return e.$emit("report", t);
                }
            }
        }) ], 1) : e._e() ], 1);
    }, [], !1, function(e) {
        this.$style = c.default.locals || c.default;
    }, null, null);
    t.a = p.exports;
}, , , function(e, t, n) {
    e.exports = n(2)(138);
}, , function(e, t, n) {
    e.exports = n(2)(88);
}, , , , , function(e, t, n) {
    e.exports = n(2)(198);
}, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return d;
    });
    n(17), n(54), n(63), n(18), n(20), n(36), n(8), n(10), n(62), n(37), n(21), n(38), 
    n(35);
    var o, r, i = n(756), a = n(226), s = n(26);
    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [], o = !0, r = !1, i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), 
                !t || n.length !== t); o = !0) ;
            } catch (e) {
                r = !0, i = e;
            } finally {
                try {
                    o || null == s.return || s.return();
                } finally {
                    if (r) throw i;
                }
            }
            return n;
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    function u(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function p(e) {
        return function() {
            var t = this, n = arguments;
            return new Promise(function(o, r) {
                var i = e.apply(t, n);
                function a(e) {
                    u(i, o, r, a, s, "next", e);
                }
                function s(e) {
                    u(i, o, r, a, s, "throw", e);
                }
                a(void 0);
            });
        };
    }
    var d = {
        INIT_ACTION: "INIT_ACTION",
        HYDRATE_APPRECIATED_STATUS: "HYDRATE_APPRECIATED_STATUS",
        CLOSE_VIEWER_ACTION: "CLOSE_VIEWER_ACTION",
        APPRECIATE_CLICK_ACTION: "APPRECIATE_CLICK_ACTION",
        UNAPPRECIATE_CLICK_ACTION: "UNAPPRECIATE_CLICK_ACTION",
        PREVIEW_CLICK_ACTION: "PREVIEW_CLICK_ACTION",
        NAVIGATE_TO_PREV_PROJECT_ACTION: "NAVIGATE_TO_PREV_PROJECT_ACTION",
        NAVIGATE_TO_NEXT_PROJECT_ACTION: "NAVIGATE_TO_NEXT_PROJECT_ACTION",
        COMMENT_ADDED_ACTION: "COMMENT_ADDED_ACTION",
        COMMENT_REMOVED_ACTION: "COMMENT_REMOVED_ACTION",
        REMOVE_CREDIT_CLICK_ACTION: "REMOVE_CREDIT_CLICK_ACTION",
        PULSE_POINT_CLICKED: "PULSE_POINT_CLICKED",
        PULSE_POINT_HOVERED: "PULSE_POINT_HOVERED",
        HOVER_MINIPROFILE: "HOVER_MINIPROFILE",
        PROJECT_VIEWED_FRONTEND: "PROJECT_VIEWED_FRONTEND",
        COLLECTION_ICON_CLICKED: "COLLECTION_ICON_CLICKED",
        COLLECTION_MODAL_OPENED: "COLLECTION_MODAL_OPENED",
        COLLECTION_MODAL_CLOSED: "COLLECTION_MODAL_CLOSED",
        COLLECTION_MODAL_SUCCESS_MESSAGE_READ: "COLLECTION_MODAL_SUCCESS_MESSAGE_READ",
        REPORT_PROJECT: "REPORT_PROJECT",
        TAKEDOWN_MODULE_IMAGE: "TAKEDOWN_MODULE_IMAGE",
        RESTORE_MODULE_IMAGE: "RESTORE_MODULE_IMAGE",
        CLEAR_CDN_MODULE_IMAGE: "CLEAR_CDN_MODULE_IMAGE",
        SUBMIT_FOR_MATURE_REVIEW: "SUBMIT_FOR_MATURE_REVIEW",
        INFO_BOX_OPENED: "INFO_BOX_OPENED",
        INFO_BOX_CLOSED: "INFO_BOX_CLOSED",
        TOOLS_ICON_CLICKED: "TOOLS_ICON_CLICKED",
        PROJECT_END_REACHED: "PROJECT_END_REACHED",
        PROJECT_MODULE_VIEWED: "PROJECT_MODULE_VIEWED",
        CLICK_DOWNLOAD_TOOL_ACTION: "CLICK_DOWNLOAD_TOOL_ACTION",
        CLICK_OPEN_TOOL_GALLERY_ACTION: "CLICK_OPEN_TOOL_GALLERY_ACTION",
        COMMENT_CHILD_GAINED_FOCUS_ACTION: "COMMENT_CHILD_GAINED_FOCUS_ACTION",
        COMMENT_CHILD_LOST_FOCUS_ACTION: "COMMENT_CHILD_LOST_FOCUS_ACTION"
    }, f = "SET_PROJECT_DATA", b = "SET_PROJECT_TITLE_DATA", h = "SET_PROJECT_CREDITS", m = "SET_APPRECIATED", g = "SET_IS_FETCHING_DONE_STATUS", v = "SET_VIEWER_TOGGLE_STATUS", w = "SET_POPUP_CSS_PATH", _ = "SET_INLINE_STYLE", y = "SET_APPRECIATION_COUNT", j = "SET_COMMENT_TOTAL", x = "SET_USER", P = "SET_ADMIN_DATA", C = "SET_SHARE_CONFIG", k = "SET_MINIPROFILE", O = "FORMAT_LATEST_PROJECT_COVER", I = "SET_MATURE_REVIEW_SUBMITTED", T = "SET_COLLECTION_MODAL_VISIBILITY", S = "SET_COMMENT_CHILD_FOCUS";
    t.b = {
        namespaced: !0,
        state: function() {
            return {
                admin: null,
                shareConfig: null,
                project: {},
                credits: [],
                inlineStyle: "",
                title: "",
                popupCssPaths: [],
                commentCount: 0,
                otherProjects: [],
                pulsePoints: {},
                appreciationCount: 0,
                urls: {},
                isAppreciated: !1,
                isDoneFetching: !1,
                isViewerOpen: !1,
                isFullPage: !1,
                user: null,
                projectOwnerMiniprofile: null,
                isMatureReviewSubmitted: !1,
                isCollectionModalVisible: !1,
                hasCommentChildFocus: !1
            };
        },
        actions: (o = {}, l(o, d.INIT_ACTION, function(e, t) {
            var n = e.commit, o = e.rootState, r = e.dispatch, a = e.state, s = t.projectUrl, l = t.projectId;
            return p(regeneratorRuntime.mark(function e() {
                var t, u, p, d, h;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n(g, !1), n(v, !0), e.prev = 2, e.next = 5, Promise.all([ i.a.getGallery(s), i.a.viewAndGetAppreciated(l), i.a.getUser(o.config.user && o.config.user.id) ]);

                      case 5:
                        if (t = e.sent, u = c(t, 3), p = u[0], d = u[1], h = u[2], a.isViewerOpen) {
                            e.next = 12;
                            break;
                        }
                        return e.abrupt("return");

                      case 12:
                        n(f, p.view), n(P, p.admin), n(b, p.title), n(j, p.view.project.stats.comments), 
                        n(w, p.styles.project), n(g, !0), n(_, p.styles.inline[0]), null !== d && n(m, d), 
                        n(x, h), n(C, p.share_config), e.next = 28;
                        break;

                      case 24:
                        return e.prev = 24, e.t0 = e.catch(2), e.next = 28, r("error", e.t0, {
                            root: !0
                        });

                      case 28:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 2, 24 ] ]);
            }))();
        }), l(o, d.HYDRATE_APPRECIATED_STATUS, function(e) {
            var t = e.commit, n = e.dispatch, o = e.state;
            return p(regeneratorRuntime.mark(function e() {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, i.a.viewAndGetAppreciated(o.project.id);

                      case 3:
                        r = e.sent, t(m, r), e.next = 10;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(0), n("error", e.t0, {
                            root: !0
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 7 ] ]);
            }))();
        }), l(o, d.REMOVE_CREDIT_CLICK_ACTION, function(e) {
            var t = e.dispatch, n = e.commit, o = e.state;
            return p(regeneratorRuntime.mark(function e() {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = o.credits.filter(function(e) {
                            return e.id !== o.user.id;
                        }), n(h, r), e.prev = 2, e.next = 5, i.a.removeCredit({
                            projectId: o.project.id,
                            userId: o.user.id
                        });

                      case 5:
                        e.next = 10;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(2), t("error", e.t0, {
                            root: !0
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 2, 7 ] ]);
            }))();
        }), l(o, d.PREVIEW_CLICK_ACTION, function(e, t) {
            var n = e.commit, o = e.rootState;
            n(f, t), n(x, o.config.defaultOwner), n(v, !0), n(g, !0);
        }), l(o, d.CLOSE_VIEWER_ACTION, function(e) {
            (0, e.commit)(v, !1);
        }), l(o, d.APPRECIATE_CLICK_ACTION, function(e) {
            var t = e.state, n = e.commit;
            n(m, !0), n(y, t.appreciationCount + 1);
        }), l(o, d.UNAPPRECIATE_CLICK_ACTION, function(e) {
            var t = e.state, n = e.commit;
            n(m, !1), n(y, t.appreciationCount - 1);
        }), l(o, d.INFO_BOX_OPENED, function() {}), l(o, d.INFO_BOX_CLOSED, function() {}), 
        l(o, d.TOOLS_ICON_CLICKED, function() {}), l(o, d.CLICK_DOWNLOAD_TOOL_ACTION, function() {}), 
        l(o, d.CLICK_OPEN_TOOL_GALLERY_ACTION, function() {}), l(o, d.NAVIGATE_TO_PREV_PROJECT_ACTION, function() {}), 
        l(o, d.NAVIGATE_TO_NEXT_PROJECT_ACTION, function() {}), l(o, d.COLLECTION_ICON_CLICKED, function() {}), 
        l(o, d.PROJECT_MODULE_VIEWED, function() {}), l(o, d.PROJECT_END_REACHED, function() {}), 
        l(o, d.COLLECTION_MODAL_OPENED, function(e) {
            (0, e.commit)(T, !0);
        }), l(o, d.COLLECTION_MODAL_CLOSED, function(e) {
            (0, e.commit)(T, !1);
        }), l(o, d.COLLECTION_MODAL_SUCCESS_MESSAGE_READ, function(e) {
            (0, e.commit)(T, !1);
        }), l(o, d.COMMENT_ADDED_ACTION, function(e) {
            var t = e.state;
            (0, e.commit)(j, t.commentCount + 1);
        }), l(o, d.COMMENT_REMOVED_ACTION, function(e) {
            var t = e.state;
            (0, e.commit)(j, t.commentCount - 1);
        }), l(o, d.PULSE_POINT_CLICKED, function() {}), l(o, d.PULSE_POINT_HOVERED, function(e, t) {
            !function(e) {
                if (null == e) throw new TypeError("Cannot destructure undefined");
            }(e);
            var n = t.from;
            return i.a.pulseViewed({
                from: n
            });
        }), l(o, d.HOVER_MINIPROFILE, function(e) {
            var t = e.state, n = e.commit, o = e.dispatch;
            return p(regeneratorRuntime.mark(function e() {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, i.a.getUserMiniprofile(t.project.owners[0].id);

                      case 3:
                        r = e.sent, n(k, r), n(O), e.next = 12;
                        break;

                      case 8:
                        return e.prev = 8, e.t0 = e.catch(0), e.next = 12, o("error", e.t0, {
                            root: !0
                        });

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 8 ] ]);
            }))();
        }), l(o, d.TAKEDOWN_MODULE_IMAGE, function(e, t) {
            var n = e.dispatch, o = t.moduleId, r = t.reasonId;
            return p(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, i.a.takedownModuleImage(o, r);

                      case 3:
                        e.next = 10;
                        break;

                      case 5:
                        return e.prev = 5, e.t0 = e.catch(0), e.next = 9, n("error", e.t0, {
                            root: !0
                        });

                      case 9:
                        throw e.t0;

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 5 ] ]);
            }))();
        }), l(o, d.RESTORE_MODULE_IMAGE, function(e, t) {
            var n = e.dispatch, o = t.moduleId;
            return p(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, i.a.restoreModuleImage(o);

                      case 3:
                        e.next = 10;
                        break;

                      case 5:
                        return e.prev = 5, e.t0 = e.catch(0), e.next = 9, n("error", e.t0, {
                            root: !0
                        });

                      case 9:
                        throw e.t0;

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 5 ] ]);
            }))();
        }), l(o, d.CLEAR_CDN_MODULE_IMAGE, function(e, t) {
            var n = e.dispatch, o = t.moduleId;
            return p(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, i.a.invalidateCdnModuleImage(o);

                      case 3:
                        e.next = 10;
                        break;

                      case 5:
                        return e.prev = 5, e.t0 = e.catch(0), e.next = 9, n("error", e.t0, {
                            root: !0
                        });

                      case 9:
                        throw e.t0;

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 5 ] ]);
            }))();
        }), l(o, d.REPORT_PROJECT, function(e, t) {
            var n = e.dispatch, o = e.state, r = t.reason, a = t.message;
            return p(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, i.a.reportProject({
                            projectId: o.project.id,
                            reason: r,
                            message: a
                        });

                      case 3:
                        e.next = 11;
                        break;

                      case 5:
                        if (e.prev = 5, e.t0 = e.catch(0), e.t0.status !== s.HTTP_CODE_FORBIDDEN_ERROR) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return");

                      case 9:
                        return e.next = 11, n("error", e.t0, {
                            root: !0
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 5 ] ]);
            }))();
        }), l(o, d.SUBMIT_FOR_MATURE_REVIEW, function(e) {
            var t = e.dispatch, n = e.state, o = e.commit;
            return p(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, i.a.submitForMatureReview(n.project.id);

                      case 3:
                        o(I, !0), e.next = 10;
                        break;

                      case 6:
                        return e.prev = 6, e.t0 = e.catch(0), e.next = 10, t("error", e.t0, {
                            root: !0
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 6 ] ]);
            }))();
        }), l(o, d.COMMENT_CHILD_GAINED_FOCUS_ACTION, function(e) {
            var t = e.commit;
            return p(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t(S, !0);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        }), l(o, d.COMMENT_CHILD_LOST_FOCUS_ACTION, function(e) {
            var t = e.commit;
            return p(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t(S, !1);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        }), o),
        mutations: (r = {}, l(r, T, function(e, t) {
            e.isCollectionModalVisible = t;
        }), l(r, v, function(e, t) {
            e.isViewerOpen = t;
        }), l(r, g, function(e, t) {
            e.isDoneFetching = t;
        }), l(r, y, function(e, t) {
            e.appreciationCount = t;
        }), l(r, f, function(e, t) {
            e.project = t.project, e.otherProjects = t.otherProjects, e.pulsePoints = t.pulse_points, 
            e.urls = t.URLS, e.appreciationCount = t.project.stats.appreciations, e.credits = t.project.credits, 
            e.isMatureReviewSubmitted = t.project.isMatureReviewSubmitted;
        }), l(r, h, function(e, t) {
            e.credits = t;
        }), l(r, _, function(e, t) {
            e.inlineStyle = t;
        }), l(r, b, function(e, t) {
            e.title = t;
        }), l(r, w, function(e, t) {
            e.isFullPage || (e.popupCssPaths = t);
        }), l(r, j, function(e, t) {
            e.commentCount = t;
        }), l(r, m, function(e, t) {
            e.isAppreciated = t;
        }), l(r, x, function(e, t) {
            e.user = t;
        }), l(r, P, function(e, t) {
            e.admin = t;
        }), l(r, C, function(e, t) {
            e.shareConfig = t;
        }), l(r, k, function(e, t) {
            e.projectOwnerMiniprofile = t;
        }), l(r, O, function(e) {
            e.projectOwnerMiniprofile.has_latest_projects && e.projectOwnerMiniprofile.latest_projects.forEach(a.c);
        }), l(r, I, function(e, t) {
            e.isMatureReviewSubmitted = t;
        }), l(r, S, function(e, t) {
            e.hasCommentChildFocus = t;
        }), r)
    };
}, function(e, t, n) {
    e.exports = n(2)(353);
}, function(e, t, n) {
    "use strict";
    var o = n(172), r = n.n(o), i = n(1), a = n(5), s = n(567), l = "/v2/report/spam/";
    function c(e, t, n) {
        return Object(s.default)({
            title: a.default.translate("report_spam_mark_as", "Mark as Spam"),
            html: a.default.translate("report_spam_are_you_sure", "Are you sure you want to mark this as spam?"),
            buttons: [ {
                label: a.default.translate("report_spam_button_okay", "Okay"),
                classes: [ "js-confirm" ]
            }, {
                label: a.default.translate("report_spam_button_cancel", "Cancel"),
                classes: [ "rf-button--inline", "js-cancel" ]
            } ]
        }).then(function() {
            return Object(i.default)({
                type: "POST",
                url: l + e + "/" + t
            }).then(function(e) {
                return n && n.text(a.default.translate("report_spam_marked_as", "Marked as Spam")).on("click", !1), 
                {
                    response: e,
                    $context: n
                };
            });
        });
    }
    t.a = {
        report: c,
        delegate: function(e, t) {
            t = t || r.a.noop, e.on("click.be-spam keyup", ".js-action-spam", function(e) {
                var n = "click" === e.type, o = "keyup" === e.type && 13 === e.keyCode;
                if (n || o) {
                    var i = r()(e.target);
                    c(i.data("type"), i.data("id"), i).then(t), e.preventDefault();
                }
            });
        },
        undelegate: function(e) {
            e.off("keyup"), e.off("click.be-spam");
        }
    };
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    n(17), n(54), n(63), n(36), n(8), n(37), n(38);
    var o = n(172), r = n.n(o);
    n(31), n(18), n(43), n(73), n(71), n(62), n(198), n(475);
    function i(e) {
        "@babel/helpers - typeof";
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    r.a.widget("ui.selectmenuold", {
        options: {
            transferClasses: !0,
            appendTo: "body",
            typeAhead: 1e3,
            style: "dropdown",
            positionOptions: {
                my: "left top",
                at: "left bottom",
                offset: null
            },
            width: null,
            menuWidth: null,
            handleWidth: 26,
            maxHeight: null,
            icons: null,
            format: null,
            escapeHtml: !1,
            bgImage: function() {}
        },
        _create: function() {
            var e = this, t = this.options, n = (this.element.attr("id") || "ui-selectmenu-" + Math.random().toString(16).slice(2, 10)).replace(/(:|\.)/g, "");
            this.ids = [ n, n + "-button", n + "-menu" ], this._safemouseup = !0, this.isOpen = !1, 
            this.newelement = r()("<a />", {
                class: "ui-selectmenu ui-widget ui-state-default ui-corner-all",
                id: this.ids[1],
                role: "button",
                href: "#nogo",
                tabindex: this.element.attr("disabled") ? 1 : 0,
                "aria-haspopup": !0,
                "aria-owns": this.ids[2]
            }), this.newelement.insertAfter(this.element);
            var o = this.element.attr("tabindex");
            o && this.newelement.attr("tabindex", o), this.newelement.data("selectelement", this.element), 
            this.selectmenuIcon = r()('<span class="ui-selectmenu-icon ui-icon"></span>').prependTo(this.newelement), 
            this.newelement.prepend('<span class="ui-selectmenu-status" />'), this.element.bind({
                "click.selectmenu": function(t) {
                    e.newelement.focus(), t.preventDefault();
                }
            }), this.newelement.bind("mousedown.selectmenu", function(n) {
                return e._toggle(n, !0), "popup" == t.style && (e._safemouseup = !1, setTimeout(function() {
                    e._safemouseup = !0;
                }, 300)), !1;
            }).bind("click.selectmenu", function() {
                return !1;
            }).bind("keydown.selectmenu", function(t) {
                var n = !1;
                switch (t.keyCode) {
                  case r.a.ui.keyCode.ENTER:
                    n = !0;
                    break;

                  case r.a.ui.keyCode.SPACE:
                    e._toggle(t);
                    break;

                  case r.a.ui.keyCode.UP:
                    t.altKey ? e.open(t) : e._moveSelection(-1);
                    break;

                  case r.a.ui.keyCode.DOWN:
                    t.altKey ? e.open(t) : e._moveSelection(1);
                    break;

                  case r.a.ui.keyCode.LEFT:
                    e._moveSelection(-1);
                    break;

                  case r.a.ui.keyCode.RIGHT:
                    e._moveSelection(1);
                    break;

                  case r.a.ui.keyCode.TAB:
                    n = !0;
                    break;

                  case r.a.ui.keyCode.PAGE_UP:
                  case r.a.ui.keyCode.HOME:
                    e.index(0);
                    break;

                  case r.a.ui.keyCode.PAGE_DOWN:
                  case r.a.ui.keyCode.END:
                    e.index(e._optionLis.length);
                    break;

                  default:
                    n = !0;
                }
                return n;
            }).bind("keypress.selectmenu", function(t) {
                return t.which > 0 && e._typeAhead(t.which, "mouseup"), !0;
            }).bind("mouseover.selectmenu", function() {
                t.disabled || r()(this).addClass("ui-selectmenu-hover ui-state-hover");
            }).bind("mouseout.selectmenu", function() {
                t.disabled || r()(this).removeClass("ui-selectmenu-hover ui-state-hover");
            }).bind("focus.selectmenu", function() {
                t.disabled || r()(this).addClass("ui-selectmenu-focus ui-state-focus");
            }).bind("blur.selectmenu", function() {
                t.disabled || r()(this).removeClass("ui-selectmenu-focus ui-state-focus");
            }), r()(document).bind("mousedown.selectmenu-" + this.ids[0], function(t) {
                e.isOpen && e.close(t);
            }), this.element.bind("click.selectmenu", function() {
                e._refreshValue();
            }).bind("focus.selectmenu", function() {
                e.newelement && e.newelement[0].focus();
            }), t.width || (t.width = this.element.outerWidth()), this.newelement.width(t.width), 
            this.element.hide(), this.list = r()("<ul />", {
                class: "ui-selectmenu-menu ui-widget ui-widget-content",
                "aria-hidden": !0,
                role: "listbox",
                "aria-labelledby": this.ids[1],
                id: this.ids[2]
            }).appendTo(t.appendTo), this.list.bind("keydown.selectmenu", function(t) {
                var n = !1;
                switch (t.keyCode) {
                  case r.a.ui.keyCode.UP:
                    t.altKey ? e.close(t, !0) : e._moveFocus(-1);
                    break;

                  case r.a.ui.keyCode.DOWN:
                    t.altKey ? e.close(t, !0) : e._moveFocus(1);
                    break;

                  case r.a.ui.keyCode.LEFT:
                    e._moveFocus(-1);
                    break;

                  case r.a.ui.keyCode.RIGHT:
                    e._moveFocus(1);
                    break;

                  case r.a.ui.keyCode.HOME:
                    e._moveFocus(":first");
                    break;

                  case r.a.ui.keyCode.PAGE_UP:
                    e._scrollPage("up");
                    break;

                  case r.a.ui.keyCode.PAGE_DOWN:
                    e._scrollPage("down");
                    break;

                  case r.a.ui.keyCode.END:
                    e._moveFocus(":last");
                    break;

                  case r.a.ui.keyCode.ENTER:
                  case r.a.ui.keyCode.SPACE:
                    e.close(t, !0), r()(t.target).parents("li:eq(0)").trigger("mouseup");
                    break;

                  case r.a.ui.keyCode.TAB:
                    n = !0, e.close(t, !0), r()(t.target).parents("li:eq(0)").trigger("mouseup");
                    break;

                  case r.a.ui.keyCode.ESCAPE:
                    e.close(t, !0);
                    break;

                  default:
                    n = !0;
                }
                return n;
            }).bind("keypress.selectmenu", function(t) {
                return t.which > 0 && e._typeAhead(t.which, "focus"), !0;
            }), this.list.bind("mousedown.selectmenu mouseup.selectmenu", !1), r()(window).bind("resize.selectmenu-" + this.ids[0], r.a.proxy(e.close, this)), 
            this.refreshPosition = r.a.proxy(e._refreshPosition, this);
        },
        _init: function() {
            var e = this, t = this.options, n = [];
            this.element.find("option").each(function() {
                var o = r()(this);
                n.push({
                    value: o.attr("value"),
                    text: e._formatText(o.text(), o),
                    selected: o.prop("selected"),
                    disabled: o.attr("disabled"),
                    classes: o.attr("class"),
                    typeahead: o.attr("typeahead"),
                    parentOptGroup: o.parent("optgroup"),
                    bgImage: t.bgImage.call(o)
                });
            });
            var o = "popup" == e.options.style ? " ui-state-active" : "";
            if (this.list.html(""), n.length) for (var i = 0; i < n.length; i++) {
                var a = {
                    role: "presentation"
                };
                n[i].disabled && (a.class = this.namespace + "-state-disabled");
                var s = {
                    html: n[i].text || "&nbsp;",
                    href: "#nogo",
                    tabindex: -1,
                    role: "option",
                    "aria-selected": !1
                };
                n[i].disabled && (s["aria-disabled"] = n[i].disabled), n[i].typeahead && (s.typeahead = n[i].typeahead);
                var l = r()("<a/>", s).bind("focus.selectmenu", function() {
                    r()(this).parent().mouseover();
                }).bind("blur.selectmenu", function() {
                    r()(this).parent().mouseout();
                }), c = r()("<li/>", a).append(l).data("index", i).addClass(n[i].classes).data("optionClasses", n[i].classes || "").bind("mouseup.selectmenu", function(t) {
                    return !e._safemouseup || e._disabled(t.currentTarget) || e._disabled(r()(t.currentTarget).parents("ul>li.ui-selectmenu-group ")) || (e.index(r()(this).data("index")), 
                    e.select(t), e.close(t, !0)), !1;
                }).bind("click.selectmenu", function() {
                    return !1;
                }).bind("mouseover.selectmenu", function() {
                    r()(this).hasClass(e.namespace + "-state-disabled") || r()(this).parent("ul").parent("li").hasClass(e.namespace + "-state-disabled") || (e._selectedOptionLi().addClass(o), 
                    e._focusedOptionLi().removeClass("ui-selectmenu-item-focus ui-state-hover"), r()(this).removeClass("ui-state-active").addClass("ui-selectmenu-item-focus ui-state-hover"));
                }).bind("mouseout.selectmenu", function() {
                    r()(this).is(e._selectedOptionLi()) && r()(this).addClass(o), r()(this).removeClass("ui-selectmenu-item-focus ui-state-hover");
                });
                if (n[i].parentOptGroup.length) {
                    var u = "ui-selectmenu-group-" + this.element.find("optgroup").index(n[i].parentOptGroup);
                    this.list.find("li." + u).length ? this.list.find("li." + u + ":last ul").append(c) : r()(' <li role="presentation" class="ui-selectmenu-group ' + u + (n[i].parentOptGroup.attr("disabled") ? " " + this.namespace + '-state-disabled" aria-disabled="true"' : '"') + '><span class="ui-selectmenu-group-label">' + n[i].parentOptGroup.attr("label") + "</span><ul></ul></li> ").appendTo(this.list).find("ul").append(c);
                } else c.appendTo(this.list);
                if (t.icons) for (var p in t.icons) if (c.is(t.icons[p].find)) {
                    c.data("optionClasses", n[i].classes + " ui-selectmenu-hasIcon").addClass("ui-selectmenu-hasIcon");
                    var d = t.icons[p].icon || "";
                    c.find("a:eq(0)").prepend('<span class="ui-selectmenu-item-icon ui-icon ' + d + '"></span>'), 
                    n[i].bgImage && c.find("span").css("background-image", n[i].bgImage);
                }
            } else r()('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
            var f = "dropdown" == t.style;
            if (this.newelement.toggleClass("ui-selectmenu-dropdown", f).toggleClass("ui-selectmenu-popup", !f), 
            this.list.toggleClass("ui-selectmenu-menu-dropdown ui-corner-bottom", f).toggleClass("ui-selectmenu-menu-popup ui-corner-all", !f).find("li:first").toggleClass("ui-corner-top", !f).end().find("li:last").addClass("ui-corner-bottom"), 
            this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s", f).toggleClass("ui-icon-triangle-2-n-s", !f), 
            t.transferClasses) {
                var b = this.element.attr("class") || "";
                this.newelement.add(this.list).addClass(b);
            }
            this._computeWidth(), this.list.css("height", "auto");
            var h = this.list.height(), m = r()(window).height(), g = t.maxHeight ? Math.min(t.maxHeight, m) : m / 3;
            h > g && this.list.height(g), this._optionLis = this.list.find("li:not(.ui-selectmenu-group)"), 
            this.element.attr("disabled") ? this.disable() : this.enable(), this._refreshValue(), 
            this._selectedOptionLi().addClass("ui-selectmenu-item-focus"), clearTimeout(this.refreshTimeout), 
            this.refreshTimeout = window.setTimeout(function() {
                e._refreshPosition();
            }, 200);
        },
        _computeWidth: function() {
            var e = this.options, t = this.newelement.width();
            "dropdown" === e.style ? this.list.width(e.menuWidth || t) : this.list.width(e.menuWidth || t - e.handleWidth);
        },
        destroy: function() {
            this.element.removeData(this.widgetName).removeClass("ui-selectmenu-disabled " + this.namespace + "-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu"), 
            r()(window).unbind(".selectmenu-" + this.ids[0]), r()(document).unbind(".selectmenu-" + this.ids[0]), 
            this.newelement.remove(), this.list.remove(), this.element.unbind(".selectmenu").show(), 
            r.a.Widget.prototype.destroy.apply(this, arguments);
        },
        _typeAhead: function(e, t) {
            var n = this, o = String.fromCharCode(e).toLowerCase(), r = null, i = null;
            n._typeAhead_timer && (window.clearTimeout(n._typeAhead_timer), n._typeAhead_timer = void 0), 
            n._typeAhead_chars = (void 0 === n._typeAhead_chars ? "" : n._typeAhead_chars).concat(o), 
            n._typeAhead_chars.length < 2 || n._typeAhead_chars.substr(-2, 1) === o && n._typeAhead_cycling ? (n._typeAhead_cycling = !0, 
            r = o) : (n._typeAhead_cycling = !1, r = n._typeAhead_chars);
            for (var a = ("focus" !== t ? this._selectedOptionLi().data("index") : this._focusedOptionLi().data("index")) || 0, s = 0; s < this._optionLis.length; s++) {
                if (this._optionLis.eq(s).text().substr(0, r.length).toLowerCase() === r) if (n._typeAhead_cycling) {
                    if (null === i && (i = s), s > a) {
                        i = s;
                        break;
                    }
                } else i = s;
            }
            null !== i && this._optionLis.eq(i).find("a").trigger(t), n._typeAhead_timer = window.setTimeout(function() {
                n._typeAhead_timer = void 0, n._typeAhead_chars = void 0, n._typeAhead_cycling = void 0;
            }, n.options.typeAhead);
        },
        _uiHash: function() {
            var e = this.index();
            return {
                index: e,
                option: r()("option", this.element).get(e),
                value: this.element[0].value
            };
        },
        open: function(e) {
            var t = this.options;
            if ("true" != this.newelement.attr("aria-disabled")) {
                this._closeOthers(e), this.newelement.addClass("ui-state-active"), this.list.attr("aria-hidden", !1), 
                this.list.addClass("ui-selectmenu-open");
                var n = this._selectedOptionLi();
                "dropdown" == t.style ? this.newelement.removeClass("ui-corner-all").addClass("ui-corner-top") : this.list.css("left", -5e3).scrollTop(this.list.scrollTop() + n.position().top - this.list.outerHeight() / 2 + n.outerHeight() / 2).css("left", "auto"), 
                this._refreshPosition(), this._computeWidth();
                var o = n.find("a");
                o.length && o[0].focus(), this.isOpen = !0, this._trigger("open", e, this._uiHash()), 
                r()(window).on("resize.selectmenu scroll.selectmenu", this.refreshPosition);
            }
        },
        close: function(e, t) {
            this.newelement.is(".ui-state-active") && (this.newelement.removeClass("ui-state-active"), 
            this.list.removeClass("ui-selectmenu-open"), this.list.attr("aria-hidden", !0), 
            "dropdown" == this.options.style && this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all"), 
            t && this.newelement.focus(), this.isOpen = !1, this._trigger("close", e, this._uiHash()), 
            r()(window).off("resize.selectmenu scroll.selectmenu", this.refreshPosition));
        },
        change: function(e) {
            this.element.trigger("change"), this._trigger("change", e, this._uiHash());
        },
        select: function(e) {
            if (this._disabled(e.currentTarget)) return !1;
            this._trigger("select", e, this._uiHash());
        },
        widget: function() {
            return this.list.add(this.newelement);
        },
        _closeOthers: function(e) {
            r()(".ui-selectmenu.ui-state-active").not(this.newelement).each(function() {
                r()(this).data("selectelement").selectmenuold("close", e);
            }), r()(".ui-selectmenu.ui-state-hover").trigger("mouseout");
        },
        _toggle: function(e, t) {
            this.isOpen ? this.close(e, t) : this.open(e);
        },
        _formatText: function(e, t) {
            return this.options.format ? e = this.options.format(e, t) : this.options.escapeHtml && (e = r()("<div />").text(e).html()), 
            e;
        },
        _selectedIndex: function() {
            return this.element[0].selectedIndex;
        },
        _selectedOptionLi: function() {
            return this._optionLis.eq(this._selectedIndex());
        },
        _focusedOptionLi: function() {
            var e = this.list.find("a:focus").closest("li");
            return e.length || (e = this.list.find(".ui-selectmenu-item-focus")), e;
        },
        _moveSelection: function(e, t) {
            if (!this.options.disabled) {
                var n = parseInt(this._selectedOptionLi().data("index") || 0, 10) + e;
                if (n < 0 && (n = 0), n > this._optionLis.size() - 1 && (n = this._optionLis.size() - 1), 
                n === t) return !1;
                this._optionLis.eq(n).hasClass(this.namespace + "-state-disabled") ? (e > 0 ? ++e : --e, 
                this._moveSelection(e, n)) : this._optionLis.eq(n).trigger("mouseover").trigger("mouseup");
            }
        },
        _moveFocus: function(e, t) {
            if (isNaN(e)) n = parseInt(this._optionLis.filter(e).data("index"), 10); else var n = parseInt(this._focusedOptionLi().data("index") || 0, 10) + e;
            if (n < 0 && (n = 0), n > this._optionLis.size() - 1 && (n = this._optionLis.size() - 1), 
            n === t) return !1;
            var o = "ui-selectmenu-item-" + Math.round(1e3 * Math.random());
            this._focusedOptionLi().find("a:eq(0)").attr("id", ""), this._optionLis.eq(n).hasClass(this.namespace + "-state-disabled") ? (e > 0 ? ++e : --e, 
            this._moveFocus(e, n)) : this._optionLis.eq(n).find("a:eq(0)").attr("id", o).focus(), 
            this.list.attr("aria-activedescendant", o);
        },
        _scrollPage: function(e) {
            var t = Math.floor(this.list.outerHeight() / this._optionLis.first().outerHeight());
            t = "up" == e ? -t : t, this._moveFocus(t);
        },
        _setOption: function(e, t) {
            this.options[e] = t, "disabled" == e && (t && this.close(), this.element.add(this.newelement).add(this.list)[t ? "addClass" : "removeClass"]("ui-selectmenu-disabled " + this.namespace + "-state-disabled").attr("aria-disabled", t));
        },
        disable: function(e, t) {
            void 0 === e ? this._setOption("disabled", !0) : "optgroup" == t ? this._disableOptgroup(e) : this._disableOption(e);
        },
        enable: function(e, t) {
            void 0 === e ? this._setOption("disabled", !1) : "optgroup" == t ? this._enableOptgroup(e) : this._enableOption(e);
        },
        _disabled: function(e) {
            return r()(e).hasClass(this.namespace + "-state-disabled");
        },
        _disableOption: function(e) {
            var t = this._optionLis.eq(e);
            t && (t.addClass(this.namespace + "-state-disabled").find("a").attr("aria-disabled", !0), 
            this.element.find("option").eq(e).attr("disabled", "disabled"));
        },
        _enableOption: function(e) {
            var t = this._optionLis.eq(e);
            t && (t.removeClass(this.namespace + "-state-disabled").find("a").attr("aria-disabled", !1), 
            this.element.find("option").eq(e).removeAttr("disabled"));
        },
        _disableOptgroup: function(e) {
            var t = this.list.find("li.ui-selectmenu-group-" + e);
            t && (t.addClass(this.namespace + "-state-disabled").attr("aria-disabled", !0), 
            this.element.find("optgroup").eq(e).attr("disabled", "disabled"));
        },
        _enableOptgroup: function(e) {
            var t = this.list.find("li.ui-selectmenu-group-" + e);
            t && (t.removeClass(this.namespace + "-state-disabled").attr("aria-disabled", !1), 
            this.element.find("optgroup").eq(e).removeAttr("disabled"));
        },
        index: function(e) {
            return arguments.length ? !this._disabled(r()(this._optionLis[e])) && e != this._selectedIndex() && (this.element[0].selectedIndex = e, 
            this._refreshValue(), void this.change()) : this._selectedIndex();
        },
        getList: function() {
            return this.list;
        },
        getNewElement: function() {
            return this.newelement;
        },
        value: function(e) {
            if (!arguments.length) return this.element[0].value;
            e != this.element[0].value && (this.element[0].value = e, this._refreshValue(), 
            this.change());
        },
        _refreshValue: function() {
            var e = "popup" == this.options.style ? " ui-state-active" : "", t = "ui-selectmenu-item-" + Math.round(1e3 * Math.random());
            this._focusedOptionLi().removeClass("ui-selectmenu-item-focus"), this.list.find(".ui-selectmenu-item-selected").removeClass("ui-selectmenu-item-selected" + e).find("a").attr("aria-selected", "false").attr("id", ""), 
            this._selectedOptionLi().addClass("ui-selectmenu-item-selected" + e).find("a").attr("aria-selected", "true").attr("id", t);
            var n = this.newelement.data("optionClasses") ? this.newelement.data("optionClasses") : "", o = this._selectedOptionLi().data("optionClasses") ? this._selectedOptionLi().data("optionClasses") : "";
            this.newelement.removeClass(n).data("optionClasses", o).addClass(o).find(".ui-selectmenu-status").html(this._selectedOptionLi().find("a:eq(0)").html()), 
            this.list.attr("aria-activedescendant", t);
        },
        _refreshPosition: function() {
            var e = this.options;
            if ("popup" == e.style && !e.positionOptions.offset) var t = this._selectedOptionLi(), n = "0 " + (this.list.offset().top - t.offset().top - (this.newelement.outerHeight() + t.outerHeight()) / 2);
            this.list.css("zIndex", function(e) {
                if (e.length) for (var t, n, o = r()(e[0]); o.length && o[0] !== document; ) {
                    if (("absolute" === (t = o.css("position")) || "relative" === t || "fixed" === t) && (n = parseInt(o.css("zIndex"), 10), 
                    !isNaN(n) && 0 !== n)) return n;
                    o = o.parent();
                }
                return 0;
            }(this.element) + 1).position({
                of: e.positionOptions.of || this.newelement,
                my: e.positionOptions.my,
                at: e.positionOptions.at,
                offset: e.positionOptions.offset || n,
                collision: e.positionOptions.collision || ("popup" == e.style ? "fit" : "flip")
            });
        }
    }), r.a.fn.changeInput = function(e, t, n) {
        var o = "object" === i(n) && void 0 !== n.extra_event_args ? n.extra_event_args : [];
        return void 0 !== e && r()(this).each(function(n) {
            var i, a, s, l, c = r()(this);
            if (c.is("input, button, textarea, select, optgroup, option") && (c.val(), void 0 === t || "val" !== e && "value" !== e || (c.data("uiSelectmenuold") || c.data("selectmenu") ? c.selectmenuold("value", t) : (c.val(t), 
            c.triggerHandler("change", o)))), c.is("input:not([type=hidden]), button, textarea, select, optgroup, option, .form-button, .rf-button")) {
                switch (i = this.disabled || c.attr("disabled"), l = !1, e) {
                  case "disable":
                    l = !0;
                    break;

                  case "enable":
                    l = !1;
                    break;

                  case "toggleDisabled":
                    l = void 0 !== t ? Boolean(t) : !this.disabled;
                }
                l != i && (a = c.is("[type=submit], [type=button], button, .form-button, .form-submit, .rf-button") ? "disabled form-button-disabled rf-button--disabled" : "disabled", 
                l ? (c.addClass(a).trigger("disable", o).attr("disabled", !0), c.is("select") && c.next().addClass(a), 
                (c.data("uiSelectmenuold") || c.data("selectmenu")) && c.selectmenuold("disable")) : (c.removeClass(a).attr("disabled", !1).trigger("enable", o), 
                c.is("select") && c.next().removeClass(a), (c.data("uiSelectmenuold") || c.data("selectmenu")) && c.selectmenuold("enable")));
            }
            if (c.is("[type=checkbox], [type=radio]")) {
                switch (s = this.checked, e) {
                  case "check":
                    this.checked = !0;
                    break;

                  case "uncheck":
                    this.checked = !1;
                    break;

                  case "toggleChecked":
                    this.checked = void 0 !== t ? Boolean(t) : !this.checked;
                }
                this.checked != s && (c.triggerHandler("click", o), this.checked ? c.addClass("checked").attr("checked", !0).trigger("check", o) : c.removeClass("checked").attr("checked", !1).trigger("uncheck", o));
            }
        }), this;
    };
}, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(2)(152);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(595), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectTools-sectionHeader-1Y4 {\n  color: #959595;\n  font-size: 10px;\n  font-weight: bold;\n  line-height: 1;\n  margin-bottom: 16px;\n  margin-top: -2px;\n  text-transform: uppercase;\n}\n.ProjectTools-section-cPK {\n  padding-bottom: 22px;\n}\n.ProjectTools-section-cPK:last-of-type {\n    padding-bottom: 0;\n}\n.ProjectTools-sectionHeader-1Y4.ProjectTools-toolsHeader-35B {\n  margin-bottom: 0;\n}\n.ProjectTools-toolWithImage-1dP {\n  display: inline-block;\n  margin-right: 5px;\n  margin-top: 19px;\n}\n.ProjectTools-toolImage-2Y1 {\n  height: 31px;\n  overflow: hidden;\n  vertical-align: top;\n  width: 31px;\n}\n.ProjectTools-toolsWithText-2Bh {\n  padding-top: 16px;\n}\n.ProjectTools-toolWithText-3-R {\n  display: inline;\n}\n.ProjectTools-toolWithText-3-R:not(:last-child)::after {\n    content: ', ';\n}\n.ProjectTools-toolLink-3mE,\n.ProjectTools-projectFieldLink-3rc {\n  color: #191919;\n  font-size: 16px;\n  font-weight: bold;\n}\n.ProjectTools-projectField-2yD {\n  display: inline-block;\n  margin-right: 4px;\n}\n.ProjectTools-projectFieldLink-3rc {\n  display: inline;\n}\n.ProjectTools-projectField-2yD:last-child .ProjectTools-fieldComma-3le {\n  display: none;\n}\n", "" ]), 
    t.locals = {
        sectionHeader: "ProjectTools-sectionHeader-1Y4",
        section: "ProjectTools-section-cPK",
        toolsHeader: "ProjectTools-toolsHeader-35B",
        toolWithImage: "ProjectTools-toolWithImage-1dP",
        toolImage: "ProjectTools-toolImage-2Y1",
        toolsWithText: "ProjectTools-toolsWithText-2Bh",
        toolWithText: "ProjectTools-toolWithText-3-R",
        toolLink: "ProjectTools-toolLink-3mE",
        projectFieldLink: "ProjectTools-projectFieldLink-3rc",
        projectField: "ProjectTools-projectField-2yD",
        fieldComma: "ProjectTools-fieldComma-3le"
    };
}, , , , , , , function(e, t, n) {
    e.exports = n(2)(107);
}, function(e, t, n) {
    e.exports = n(2)(264);
}, , function(e, t, n) {
    var o = n(1349);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("5e6815c3", o, !0, {});
}, function(e, t, n) {
    var o = n(1351);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("526c86e2", o, !0, {});
}, function(e, t, n) {
    var o = n(1353);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("2edfeca2", o, !0, {});
}, function(e, t, n) {
    var o = n(1355);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("44951668", o, !0, {});
}, function(e, t, n) {
    var o = n(1357);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("13a2a862", o, !0, {});
}, function(e, t, n) {
    var o = n(1359);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("1f7a7c09", o, !0, {});
}, function(e, t, n) {
    var o = n(1361);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("76845a34", o, !0, {});
}, function(e, t, n) {
    var o = n(1363);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("90226162", o, !0, {});
}, function(e, t, n) {
    var o = n(1365);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("7eb1cec0", o, !0, {});
}, function(e, t, n) {
    var o = n(1367);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("16369a20", o, !0, {});
}, function(e, t, n) {
    var o = n(1370);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("9a4b6e28", o, !0, {});
}, function(e, t, n) {
    var o = n(1379);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("fe499ea2", o, !0, {});
}, function(e, t, n) {
    var o = n(1383);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("96e492e6", o, !0, {});
}, function(e, t, n) {
    var o = n(1385);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("24e3c49d", o, !0, {});
}, function(e, t, n) {
    var o = n(1392);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("e7ceceda", o, !0, {});
}, function(e, t, n) {
    var o = n(1394);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("c19ed8f2", o, !0, {});
}, function(e, t, n) {
    var o = n(1399);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("9f94a12a", o, !0, {});
}, , , , , , , , , , function(e, t, n) {
    e.exports = n(2)(274);
}, function(e, t, n) {
    var o = n(181), r = {
        "form/textarea": n(757).template,
        "form/text": n(998).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="entity-report">'), o.b("\n" + n), o.b("  <form>"), 
            o.b("\n" + n), o.s(o.f("disclaimer", e, t, 1), e, t, 0, 56, 119, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('    <span class="disclaimer-wrap">'), o.b(o.t(o.f("disclaimer", e, t, 0))), 
                o.b("</span>"), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.s(o.d("options.0", e, t, 1), e, t, 0, 154, 336, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('    <ul id="reason" class="divided-list menu-section">'), o.b("\n" + n), o.s(o.f("options", e, t, 1), e, t, 0, 228, 309, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b('      <li class="divided-item reason" data-value="'), o.b(o.v(o.f("id", e, t, 0))), 
                    o.b('">'), o.b(o.v(o.f("reason", e, t, 0))), o.b("</li>"), o.b("\n" + n);
                }), e.pop()), o.b("    </ul>"), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.b('    <div class="menu-section">'), o.b("\n" + n), 
            o.s(o.f("comments", e, t, 1), e, t, 0, 402, 421, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.rp("<form/textarea0", e, t, ""));
            }), e.pop()), o.b("    </div>"), o.b("\n"), o.b("\n" + n), o.b('    <div class="menu-section">'), 
            o.b("\n" + n), o.s(o.f("email", e, t, 1), e, t, 0, 494, 509, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.rp("<form/text1", e, t, ""));
            }), e.pop()), o.b("    </div>"), o.b("\n" + n), o.b("  </form>"), o.b("\n" + n), 
            o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<form/textarea0": {
                name: "form/textarea",
                partials: {},
                subs: {}
            },
            "<form/text1": {
                name: "form/text",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<div class="entity-report">\n  <form>\n    {{#disclaimer}}\n    <span class="disclaimer-wrap">{{{disclaimer}}}</span>\n    {{/disclaimer}}\n\n    {{#options.0}}\n    <ul id="reason" class="divided-list menu-section">\n      {{#options}}\n      <li class="divided-item reason" data-value="{{id}}">{{reason}}</li>\n      {{/options}}\n    </ul>\n    {{/options.0}}\n\n    <div class="menu-section">\n      {{#comments}}{{> form/textarea}}{{/comments}}\n    </div>\n\n    <div class="menu-section">\n      {{#email}}{{> form/text}}{{/email}}\n    </div>\n  </form>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "form/_textInner": n(999).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="'), o.s(o.f("unstyled", e, t, 1), e, t, 1, 0, 0, "") || o.b("form-item form-item-text"), 
            o.b(" be-placeholder"), o.s(o.f("containerClasses", e, t, 1), e, t, 0, 98, 104, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
            }), e.pop()), o.b('" id="'), o.b(o.v(o.f("id", e, t, 0))), o.b('-container">'), 
            o.b("\n" + n), o.b(o.rp("<form/_textInner0", e, t, "  ")), o.b("</div>"), o.b("\n"), 
            o.fl();
        },
        partials: {
            "<form/_textInner0": {
                name: "form/_textInner",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<div class="{{^unstyled}}form-item form-item-text{{/unstyled}} be-placeholder{{#containerClasses}} {{.}}{{/containerClasses}}" id="{{id}}-container">\n  {{>form/_textInner}}\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_savingSpinner": n(599).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b("  "), o.s(o.f("label", e, t, 1), e, t, 0, 12, 113, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('<label for="'), n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b(n.t(n.f("label", e, t, 0))), 
                n.s(n.f("saving_spinner", e, t, 1), e, t, 0, 62, 86, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.rp("<lib/_savingSpinner0", e, t, ""));
                }), e.pop()), n.b("</label>");
            }), e.pop()), o.b("\n" + n), o.b('  <input name="'), o.b(o.v(o.f("name", e, t, 0))), 
            o.s(o.f("name", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.v(o.f("id", e, t, 0))), o.b('" type="'), 
            o.s(o.f("type", e, t, 1), e, t, 0, 188, 196, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.v(n.f("type", e, t, 0)));
            }), e.pop()), o.s(o.f("type", e, t, 1), e, t, 1, 0, 0, "") || o.b("text"), o.b('" class="'), 
            o.s(o.f("unstyled", e, t, 1), e, t, 1, 0, 0, "") || o.b("form-text"), o.s(o.f("classes", e, t, 1), e, t, 0, 283, 289, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
            }), e.pop()), o.b(" validate["), o.b(o.v(o.f("validate", e, t, 0))), o.b(']" id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('"'), o.b("\n" + n), o.b("  "), o.s(o.f("disabled", e, t, 1), e, t, 0, 353, 373, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' disabled="disabled"');
            }), e.pop()), o.b("\n" + n), o.b("  "), o.s(o.f("placeholder", e, t, 1), e, t, 0, 405, 437, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' placeholder="'), n.b(n.t(n.f("placeholder", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b("  "), o.s(o.f("autocomplete", e, t, 1), e, t, 0, 473, 505, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' autocomplete="'), n.b(n.v(n.f("autocomplete", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b("  "), o.s(o.f("autocapitalize", e, t, 1), e, t, 0, 544, 580, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' autocapitalize="'), n.b(n.v(n.f("autocapitalize", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b("  "), o.s(o.f("autocorrect", e, t, 1), e, t, 0, 618, 648, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' autocorrect="'), n.b(n.v(n.f("autocorrect", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b("  "), o.s(o.f("value", e, t, 1), e, t, 0, 677, 695, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' value="'), n.b(n.v(n.f("value", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b("  "), o.s(o.f("maxlength", e, t, 1), e, t, 0, 722, 748, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' maxlength="'), n.b(n.v(n.f("maxlength", e, t, 0))), n.b('"');
            }), e.pop()), o.b("\n" + n), o.b('  data-validate="'), o.b(o.v(o.f("validate", e, t, 0))), 
            o.b('">'), o.b("\n"), o.fl();
        },
        partials: {
            "<lib/_savingSpinner0": {
                name: "lib/_savingSpinner",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '  {{#label}}<label for="{{id}}">{{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}</label>{{/label}}\n  <input name="{{name}}{{^name}}{{id}}{{/name}}" type="{{#type}}{{type}}{{/type}}{{^type}}text{{/type}}" class="{{^unstyled}}form-text{{/unstyled}}{{#classes}} {{.}}{{/classes}} validate[{{validate}}]" id="{{id}}"\n  {{#disabled}} disabled="disabled"{{/disabled}}\n  {{#placeholder}} placeholder="{{{placeholder}}}"{{/placeholder}}\n  {{#autocomplete}} autocomplete="{{autocomplete}}"{{/autocomplete}}\n  {{#autocapitalize}} autocapitalize="{{autocapitalize}}"{{/autocapitalize}}\n  {{#autocorrect}} autocorrect="{{autocorrect}}"{{/autocorrect}}\n  {{#value}} value="{{value}}"{{/value}}\n  {{#maxlength}} maxlength="{{maxlength}}"{{/maxlength}}\n  data-validate="{{validate}}">\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(172), r = n.n(o), i = n(206), a = n.n(i), s = (n(43), n(1)), l = n(357), c = n(710), u = n(413), p = n(565), d = n(237), f = n.n(d), b = n(806), h = (n(31), 
    n(20), n(130), n(44), n(22), n(21), n(724)), m = n.n(h), g = n(204), v = n.n(g), w = n(364), _ = n.n(w), y = n(996), j = n(566);
    function x(e, t) {
        var n = e[t.name];
        return e[t.name] = n ? [].concat(n, t.value) : t.value, e;
    }
    var P = {
        onSubmit: function(e, t, n) {
            var o = (t = t || this.$view).is("form") ? t : t.find("form");
            t.on("click keydown", ".form-submit:not([type=submit])", function(e) {
                switch (e.which) {
                  case 1:
                  case 13:
                  case 32:
                    o.submit();
                }
            }), o.on("submit", function(t) {
                var r = new m.a(), i = o.serializeArray().reduce(x, {}), a = {
                    url: o.attr("action"),
                    type: o.attr("method") || "POST"
                };
                return t.originalEvent = t.originalEvent || {}, o.find(".form-error").remove(), 
                o.find(".form-item-error").removeClass("form-item-error"), t.originalEvent.promise = (t.isDefaultPrevented() && !o.attr("onsubmit") ? r : r.then(function(e) {
                    var t = {};
                    if (Object.keys(e).forEach(function(n) {
                        var o = this.find('[name="' + n + '"]').data("validate");
                        _()(e[n], o) || (t[n] = _.a.message);
                    }, this), Object.keys(t).length) throw t;
                    return e;
                }.bind(o))).then(function(t) {
                    if (a.data = t, "function" != typeof e) return Object(s.default)(a);
                    var n = new m.a(), o = n.thenable(), r = e.call(o, t);
                    return n.resolve(r === o ? Object(s.default)(a) : r), n;
                }).then(function() {
                    n || o.find(":input").val("").removeAttr("checked selected");
                }, function(e) {
                    var t, n;
                    if (!(e instanceof Error)) throw e.responseJSON && (e = e.responseJSON), e.messages && Object(j.default)(o, e.messages), 
                    console.warn(e), t = e.errors || e, n = v.a.is("desktop") ? [ "form-error" ] : [ "form-error", "form-error-right" ], 
                    Object.keys(t).forEach(function(e) {
                        Object(y.default)(o.find("[name=" + e + "]"), t[e], n);
                    }), e;
                    console.error(e);
                }), r.resolve(i), !1;
            });
        },
        onCancel: function(e) {
            var t = this;
            this.$view.on("click", ".js-cancel", function() {
                t.$view.find(".form-text, .form-textarea").val(""), "function" == typeof e && e();
            });
        }
    }, C = f()({}, P, b.a), k = n(5), O = n(997), I = {
        mustache: n.n(O).a,
        templateData: function() {
            return f()({
                title: k.default.translate("report_popup_header_report", "Report"),
                classes: [ "report" ],
                buttons: [ {
                    label: k.default.translate("report_popup_button_send", "Send"),
                    classes: [ "left", "form-submit" ]
                }, {
                    label: k.default.translate("report_popup_button_cancel", "Cancel"),
                    classes: [ "left", "rf-button--inline", "js-cancel" ]
                } ],
                comments: {
                    id: "message",
                    placeholder: k.default.translate("report_popup_placeholder_comments", "Comments"),
                    classes: [ "form-text-normal" ]
                }
            }, this._model.data(), r()(document.body).hasClass("logged-out") ? {
                email: {
                    id: "email",
                    placeholder: k.default.translate("report_popup_placeholder_email_address", "Email Address"),
                    classes: [ "form-text-normal" ]
                }
            } : {});
        },
        rendered: function() {
            var e = this;
            this.selectList(), this.onSubmit(function(t) {
                e._controller.create(t).then(e.hide.bind(e));
            }), this.onCancel(), this._super();
        },
        hide: function() {
            this._super.apply(this, arguments), this.$view = null;
        }
    }, T = l.default.extend({
        init: function() {
            this._super.apply(this, arguments), this.path = this._model.get("CONSTANTS").REPORT_URL + this.id;
        },
        create: function(e) {
            return Object(s.default)({
                url: this.path,
                type: "POST",
                data: e
            });
        },
        read: function() {
            var e = Object(s.default)({
                url: this.path
            });
            return e.then(this._model.set.bind(this._model)), e;
        },
        render: function() {
            var e = this, t = this._super, n = arguments;
            this.read().then(function() {
                t.apply(e, n);
            }).then(this._view.show.bind(this._view));
        }
    }, {
        VIEW_CLASS: {
            phone: c.default.extend(I).mixin(C),
            tablet: u.default.extend(I).mixin(C),
            desktop: p.default.extend(I).mixin(C)
        },
        init: function(e) {
            var t = e.find(".js-action-report"), n = new this(t.data("id"), {
                CONSTANTS: {
                    REPORT_URL: "/report/" + t.data("type") + "/"
                }
            });
            return n.setContext(t), n;
        }
    }), S = n(870);
    t.a = a.a.extend({
        init: function(e) {
            this.$context = e instanceof r.a ? e : r()(e);
        },
        bind: function() {
            this._report = T.init(this.$context), S.a.delegate(this.$context);
        },
        unbind: function() {
            this._report.destroy(), S.a.undelegate(this.$context);
        }
    });
}, , , function(e, t, n) {
    "use strict";
    n(18);
    var o = n(513), r = {
        name: "ProjectTools",
        props: {
            toolsTitle: {
                Type: String,
                default: ""
            },
            tools: {
                Type: Array,
                default: function() {
                    return [];
                }
            },
            fields: {
                Type: Array,
                default: function() {
                    return [];
                }
            }
        },
        computed: {
            toolsTitleWithDefault: function() {
                return "" === this.toolsTitle ? this.$translate("project_tools", "Tools") : this.toolsTitle;
            },
            toolsWithSynonym: function() {
                return this.tools.filter(function(e) {
                    return e.synonym;
                });
            },
            toolsWithOutSynonym: function() {
                return this.tools.filter(function(e) {
                    return !e.synonym;
                });
            }
        },
        components: {
            Tool: o.a
        }
    }, i = n(959), a = n(53);
    var s = Object(a.default)(r, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            ref: "projectTools",
            class: e.$style.projectTools
        }, [ Boolean(e.tools.length) ? n("div", {
            ref: "tools",
            class: [ e.$style.section, e.$style.toolContainer ]
        }, [ n("h3", {
            class: [ e.$style.sectionHeader, e.$style.toolsHeader ]
        }, [ e._v(e._s(e.toolsTitleWithDefault)) ]), e._l(e.toolsWithSynonym, function(t, o) {
            return n("div", {
                key: "tool-" + o,
                ref: "toolsWithImage",
                refInFor: !0,
                class: [ e.$style.toolWithImage, "tooltipi-container" ]
            }, [ n("Tool", {
                ref: "synonymTool",
                refInFor: !0,
                attrs: {
                    id: t.synonym.tag_id,
                    title: t.synonym.title,
                    downloadLink: t.synonym.download_url,
                    galleryLink: t.synonym.gallery_url,
                    imageSrc: t.synonym.icon_url,
                    tooltipAlignment: o ? "center" : "left"
                },
                on: {
                    toolOpened: function(t) {
                        return e.$emit("toolOpened", t);
                    },
                    galleryOpened: function(t) {
                        return e.$emit("galleryOpened", t);
                    }
                }
            }) ], 1);
        }), Boolean(e.toolsWithOutSynonym.length) ? n("ul", {
            ref: "toolsWithoutImage",
            class: e.$style.toolsWithText
        }, e._l(e.toolsWithOutSynonym, function(t, o) {
            return n("li", {
                key: "texttool-" + o,
                ref: "toolWithoutSynonym",
                refInFor: !0,
                class: e.$style.toolWithText
            }, [ n("a", {
                ref: "toolLink",
                refInFor: !0,
                class: e.$style.toolLink,
                attrs: {
                    href: t.url
                }
            }, [ e._v(e._s(t.title)) ]) ]);
        }), 0) : e._e() ], 2) : e._e(), Boolean(e.fields.length) ? n("div", {
            ref: "fields",
            class: e.$style.section,
            attrs: {
                "data-ut": "project-fields"
            }
        }, [ n("h3", {
            class: e.$style.sectionHeader
        }, [ e._v(e._s(e.$translate("project_creative_fields", "Creative Fields"))) ]), n("ul", {
            ref: "fieldsList"
        }, e._l(e.fields, function(t, o) {
            return n("li", {
                key: "field-" + o,
                ref: "field",
                refInFor: !0,
                class: e.$style.projectField
            }, [ n("a", {
                ref: "fieldLink",
                refInFor: !0,
                class: e.$style.projectFieldLink,
                attrs: {
                    href: t.url
                }
            }, [ e._v(e._s(t.name)) ]), n("span", {
                class: e.$style.fieldComma
            }, [ e._v(e._s(e.$translate("generic_comma_delimiter", ",")) + " ") ]) ]);
        }), 0) ]) : e._e() ]);
    }, [], !1, function(e) {
        this.$style = i.default.locals || i.default;
    }, null, null);
    t.a = s.exports;
}, , , , , , , , , , , , function(e, t, n) {
    var o = n(181), r = {
        "bestyleguide/_icons/_lock-private": n(381).template,
        "bestyleguide/_tooltip": n(746).template,
        "lib/_buttons/_link": n(747).template,
        "bestyleguide/_icons/_edit": n(379).template,
        "bestyleguide/_icons/_hamburger": n(380).template,
        "bestyleguide/_icons/_clone": n(378).template,
        "bestyleguide/_icons/_share": n(382).template,
        "bestyleguide/_icons/_unpublish": n(384).template,
        "bestyleguide/_icons/_trash": n(383).template,
        "bestyleguide/_ribbon": n(1039).template,
        "bestyleguide/_multipleOwners": n(1040).template,
        "bestyleguide/_icons/_appreciate": n(293).template,
        "bestyleguide/_icons/_views": n(294).template,
        "bestyleguide/_icons/_badge": n(377).template,
        "bestyleguide/_icons/_kebab-horizontal": n(1042).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="rf-project-cover rf-project-cover--project js-item js-project-cover qa-project-cover editable '), 
            o.s(o.f("classes", e, t, 1), e, t, 0, 118, 124, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.v(n.d(".", e, t, 0))), n.b(" ");
            }), e.pop()), o.b('" data-id="'), o.b(o.v(o.f("id", e, t, 0))), o.b('" data-slug="'), 
            o.b(o.v(o.f("slug", e, t, 0))), o.b('" '), o.s(o.f("ordinal_id", e, t, 1), e, t, 0, 191, 221, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' data-ordinal="'), n.b(n.v(n.f("ordinal_id", e, t, 0))), n.b('"');
            }), e.pop()), o.b(" "), o.s(o.f("from", e, t, 1), e, t, 0, 246, 266, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('data-from="'), n.b(n.v(n.f("from", e, t, 0))), n.b('"');
            }), e.pop()), o.b(" "), o.sub("attr", e, t, n), o.b(">"), o.b("\n" + n), o.s(o.f("is_new", e, t, 1), e, t, 0, 309, 422, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('    <span class="rf-project-cover__new-ribbon">'), o.s(o.f("translate", e, t, 1), e, t, 0, 371, 398, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("project_cover_label_new|new");
                }), e.pop()), o.b("</span>"), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.s(o.f("private", e, t, 1), e, t, 0, 449, 800, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('    <div class="rf-tooltip--container rf-project-cover__private">'), o.b("\n" + n), 
                o.b(o.rp("<bestyleguide/_icons/_lock-private0", e, t, "      ")), o.b("\n" + n), 
                o.b(o.rp("<bestyleguide/_tooltip1", e, t, "")), o.b("    </div>"), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.s(o.f("is_collection_editable", e, t, 1), e, t, 0, 843, 1172, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('  <div class="rf-project-cover__controls-overlay">'), o.b("\n" + n), o.b(o.rp("<lib/_buttons/_link3", e, t, "")), 
                o.b("  </div>"), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.s(o.f("is_editable", e, t, 1), e, t, 0, 1219, 6007, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('  <div class="rf-project-cover__controls-overlay js-project-controls-overlay">'), 
                o.b("\n" + n), o.s(o.f("is_team", e, t, 1), e, t, 0, 1315, 1730, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.s(n.f("is_admin_editable", e, t, 1), e, t, 0, 1344, 1703, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(n.rp("<lib/_buttons/_link5", e, t, ""));
                    }), e.pop());
                }), e.pop()), o.s(o.f("is_team", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.rp("<lib/_buttons/_link7", e, t, "")), 
                o.b('    <div class="js-controls-overlay-menu rf-tooltip--container">'), o.b("\n" + n), 
                o.b(o.rp("<lib/_buttons/_link9", e, t, "")), o.b("\n" + n), o.b(o.rp("<bestyleguide/_tooltip16", e, t, "")), 
                o.b("    </div>"), o.b("\n" + n), o.b("  </div>"), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.b('  <a href="'), o.b(o.v(o.f("url", e, t, 0))), 
            o.b('" class="rf-project-cover__image-container js-project-cover-image-link js-project-link">'), 
            o.b("\n" + n), o.b('    <img class="rf-project-cover__image js-cover-image" src="'), 
            o.b(o.v(o.d("covers.202", e, t, 0))), o.b('" '), o.s(o.d("covers.404", e, t, 1), e, t, 0, 6224, 6266, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('srcset="'), n.b(n.v(n.d("covers.202", e, t, 0))), n.b(", "), n.b(n.v(n.d("covers.404", e, t, 0))), 
                n.b(' 2x"');
            }), e.pop()), o.b(' alt="'), o.b(o.v(o.f("name", e, t, 0))), o.b('" title="'), o.b(o.v(o.f("name", e, t, 0))), 
            o.b('" />'), o.b("\n" + n), o.b("  </a>"), o.b("\n"), o.b("\n" + n), o.s(o.f("most_recent_feature", e, t, 1), e, t, 0, 6351, 6441, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('    <div class="rf-project-cover__feature">'), o.b("\n" + n), o.b(o.rp("<bestyleguide/_ribbon17", e, t, "      ")), 
                o.b("    </div>"), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.b('  <div class="rf-project-cover__details">'), o.b("\n" + n), 
            o.b('    <span class="rf-project-cover__title-wrap">'), o.b("\n" + n), o.b('      <a class="rf-project-cover__title js-project-cover-title-link" href="'), 
            o.b(o.v(o.f("url", e, t, 0))), o.b('">'), o.b(o.t(o.f("name", e, t, 0))), o.b("</a>"), 
            o.b("\n" + n), o.b("    </span>"), o.b("\n"), o.b("\n" + n), o.b(o.rp("<bestyleguide/_multipleOwners18", e, t, "    ")), 
            o.b("\n" + n), o.b('    <div class="rf-project-cover__fields">'), o.b("\n" + n), 
            o.b('      <ul class="rf-project-cover__fields-list">'), o.b("\n" + n), o.s(o.d("field_links.0", e, t, 1), e, t, 0, 6826, 6995, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('          <li class="rf-project-cover__field">'), o.b("\n" + n), o.b('            <a href="'), 
                o.b(o.v(o.f("url", e, t, 0))), o.b('" title="'), o.b(o.v(o.f("name", e, t, 0))), 
                o.b('" class="rf-project-cover__field-link">'), o.b(o.v(o.f("name", e, t, 0))), 
                o.b("</a>"), o.b("\n" + n), o.b("          </li>"), o.b("\n" + n);
            }), e.pop()), o.b("      </ul>"), o.b("\n" + n), o.b('      <div class="rf-project-cover__curation-stats cover-stat-wrap"></div>'), 
            o.b("\n" + n), o.b("    </div>"), o.b("\n" + n), o.b('    <div class="rf-project-cover__stats">'), 
            o.b("\n" + n), o.b('      <div class="rf-project-cover__curation-marks js-project-cover-curation-marks"></div>'), 
            o.b("\n" + n), o.s(o.f("curation_marks", e, t, 1), e, t, 0, 7270, 7436, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.s(o.f("label", e, t, 1), e, t, 0, 7289, 7419, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b('        <span class="rf-project-cover__curation-mark js-project-curation-mark" style="color: '), 
                    o.b(o.v(o.f("color", e, t, 0))), o.b('">'), o.b(o.v(o.f("label", e, t, 0))), o.b("</span>"), 
                    o.b("\n" + n);
                }), e.pop());
            }), e.pop()), o.b("\n" + n), o.b('      <div class="rf-project-cover__stat-container">'), 
            o.b("\n" + n), o.b('        <a href="'), o.b(o.v(o.f("url", e, t, 0))), o.b('" class="rf-project-cover__stat-link js-project-cover-stats-link" tabindex="-1">'), 
            o.b("\n" + n), o.b('          <span class="rf-project-cover__stat">'), o.b("\n" + n), 
            o.b('            <span class="rf-project-cover__stat">'), o.b("\n" + n), o.b(o.rp("<bestyleguide/_icons/_appreciate19", e, t, "              ")), 
            o.b('              <span class="rf-project-cover__stat-number">'), o.b(o.v(o.d("stats.appreciations", e, t, 0))), 
            o.b("</span>"), o.b("\n" + n), o.b("            </span>"), o.b("\n" + n), o.b('            <span class="rf-project-cover__stat">'), 
            o.b("\n" + n), o.b(o.rp("<bestyleguide/_icons/_views20", e, t, "              ")), 
            o.b('              <span class="rf-project-cover__stat-number">'), o.b(o.v(o.d("stats.views", e, t, 0))), 
            o.b("</span>"), o.b("\n" + n), o.b("            </span>"), o.b("\n" + n), o.b("          </span>"), 
            o.b("\n"), o.b("\n" + n), o.s(o.f("is_sensei_recommended", e, t, 1), e, t, 1, 0, 0, "") || o.s(o.f("featured_on", e, t, 1), e, t, 0, 8154, 8663, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('            <span class="rf-project-cover__stat rf-project-cover__stat--featured rf-tooltip--container">'), 
                o.b("\n" + n), o.b(o.rp("<bestyleguide/_icons/_badge21", e, t, "              ")), 
                o.b(o.rp("<bestyleguide/_tooltip22", e, t, "")), o.b("            </span>"), o.b("\n" + n);
            }), e.pop()), o.b("        </a>"), o.b("\n"), o.b("\n" + n), o.s(o.f("is_sensei_recommended", e, t, 1), e, t, 0, 8765, 9293, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('          <span class="rf-project-cover__more rf-tooltip--container">'), o.b("\n" + n), 
                o.b(o.rp("<bestyleguide/_icons/_kebab-horizontal23", e, t, "            ")), o.b(o.rp("<bestyleguide/_tooltip24", e, t, "")), 
                o.b("          </span>"), o.b("\n" + n);
            }), e.pop()), o.b("      </div>"), o.b("\n" + n), o.b("    </div>"), o.b("\n" + n), 
            o.b("  </div>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<bestyleguide/_icons/_lock-private0": {
                name: "bestyleguide/_icons/_lock-private",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_tooltip1": {
                name: "bestyleguide/_tooltip",
                partials: {},
                subs: {
                    tooltipContent: function(e, t, n, o) {
                        n.b("          "), n.s(n.f("translate", e, t, 1), e, t, 0, 648, 711, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("project_cover_marked_private|This project is marked as private.");
                        }), e.pop()), n.b("\n" + o);
                    }
                }
            },
            "<lib/_buttons/_link3": {
                name: "lib/_buttons/_link",
                partials: {
                    "<leadingIconAssetbestyleguide/_icons/_edit2": {
                        name: "bestyleguide/_icons/_edit",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    classes: function(e, t, n, o) {
                        n.b("rf-button--icon-only rf-button--secondary rf-project-cover__controls-overlay-icon js-edit-icon");
                    },
                    leadingIconAsset: function(e, t, n, o) {
                        n.b(n.rp("<leadingIconAssetbestyleguide/_icons/_edit2", e, t, ""));
                    }
                }
            },
            "<lib/_buttons/_link5": {
                name: "lib/_buttons/_link",
                partials: {
                    "<leadingIconAssetbestyleguide/_icons/_hamburger4": {
                        name: "bestyleguide/_icons/_hamburger",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    containerClasses: function(e, t, n, o) {
                        n.b("rf-project-cover__controls-overlay-button js-controls-overlay-reorder");
                    },
                    classes: function(e, t, n, o) {
                        n.b("rf-button--icon-only rf-button--secondary");
                    },
                    leadingIconAsset: function(e, t, n, o) {
                        n.b(n.rp("<leadingIconAssetbestyleguide/_icons/_hamburger4", e, t, ""));
                    }
                }
            },
            "<lib/_buttons/_link7": {
                name: "lib/_buttons/_link",
                partials: {
                    "<leadingIconAssetbestyleguide/_icons/_hamburger6": {
                        name: "bestyleguide/_icons/_hamburger",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    containerClasses: function(e, t, n, o) {
                        n.b("rf-project-cover__controls-overlay-button js-controls-overlay-reorder");
                    },
                    classes: function(e, t, n, o) {
                        n.b("rf-button--icon-only rf-button--secondary");
                    },
                    leadingIconAsset: function(e, t, n, o) {
                        n.b(n.rp("<leadingIconAssetbestyleguide/_icons/_hamburger6", e, t, ""));
                    }
                }
            },
            "<lib/_buttons/_link9": {
                name: "lib/_buttons/_link",
                partials: {
                    "<leadingIconAssetbestyleguide/_icons/_edit8": {
                        name: "bestyleguide/_icons/_edit",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    containerClasses: function(e, t, n, o) {
                        n.b("rf-project-cover__controls-overlay-button rf-project-cover__controls-overlay-button--edit");
                    },
                    classes: function(e, t, n, o) {
                        n.b("rf-button--icon-only rf-button--secondary");
                    },
                    leadingIconAsset: function(e, t, n, o) {
                        n.b(n.rp("<leadingIconAssetbestyleguide/_icons/_edit8", e, t, ""));
                    }
                }
            },
            "<bestyleguide/_tooltip16": {
                name: "bestyleguide/_tooltip",
                partials: {
                    "<tooltipContentbestyleguide/_icons/_edit10": {
                        name: "bestyleguide/_icons/_edit",
                        partials: {},
                        subs: {}
                    },
                    "<tooltipContentbestyleguide/_icons/_clone11": {
                        name: "bestyleguide/_icons/_clone",
                        partials: {},
                        subs: {}
                    },
                    "<tooltipContentbestyleguide/_icons/_share12": {
                        name: "bestyleguide/_icons/_share",
                        partials: {},
                        subs: {}
                    },
                    "<tooltipContentbestyleguide/_icons/_unpublish13": {
                        name: "bestyleguide/_icons/_unpublish",
                        partials: {},
                        subs: {}
                    },
                    "<tooltipContentbestyleguide/_icons/_trash14": {
                        name: "bestyleguide/_icons/_trash",
                        partials: {},
                        subs: {}
                    },
                    "<tooltipContentbestyleguide/_icons/_trash15": {
                        name: "bestyleguide/_icons/_trash",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    tooltipContent: function(e, t, n, o) {
                        n.b('        <ul class="rf-project-cover__controls-overlay-menu-items">'), n.b("\n" + o), 
                        n.s(n.f("is_team", e, t, 1), e, t, 1, 0, 0, "") || (n.b('            <li class="rf-project-cover__controls-overlay-menu-item">'), 
                        n.b("\n" + o), n.b('              <a href="'), n.b(n.v(n.f("edit_url", e, t, 0))), 
                        n.b('" class="rf-project-cover__controls-overlay-menu-item--link js-project-edit">'), 
                        n.b("\n" + o), n.b(n.rp("<tooltipContentbestyleguide/_icons/_edit10", e, t, "                ")), 
                        n.b("                "), n.s(n.f("translate", e, t, 1), e, t, 0, 2954, 2979, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("profile_project_edit|Edit");
                        }), e.pop()), n.b("\n" + o), n.b("              </a>"), n.b("\n" + o), n.b("            </li>"), 
                        n.b("\n" + o), n.b('            <li class="rf-project-cover__controls-overlay-menu-item">'), 
                        n.b("\n" + o), n.b('              <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-clone" data-id="'), 
                        n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b("\n" + o), n.b(n.rp("<tooltipContentbestyleguide/_icons/_clone11", e, t, "              ")), 
                        n.b("                "), n.s(n.f("translate", e, t, 1), e, t, 0, 3297, 3324, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("profile_project_clone|Clone");
                        }), e.pop()), n.b("\n" + o), n.b("              </a>"), n.b("\n" + o), n.b("            </li>"), 
                        n.b("\n" + o), n.s(n.f("share_url", e, t, 1), e, t, 0, 3402, 3792, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('              <li class="rf-project-cover__controls-overlay-menu-item">'), 
                            n.b("\n" + o), n.b('                <a href="'), n.b(n.v(n.f("share_url", e, t, 0))), 
                            n.b('" class="rf-project-cover__controls-overlay-menu-item--link js-project-promote" data-id="'), 
                            n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b("\n" + o), n.b(n.rp("<tooltipContentbestyleguide/_icons/_share12", e, t, "                  ")), 
                            n.b("                  "), n.s(n.f("translate", e, t, 1), e, t, 0, 3693, 3724, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b("profile_project_promote|Promote");
                            }), e.pop()), n.b("\n" + o), n.b("                </a>"), n.b("\n" + o), n.b("              </li>"), 
                            n.b("\n" + o);
                        }), e.pop()), n.b('            <li class="rf-project-cover__controls-overlay-menu-item">'), 
                        n.b("\n" + o), n.b('              <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-unpublish" data-id="'), 
                        n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b("\n" + o), n.b(n.rp("<tooltipContentbestyleguide/_icons/_unpublish13", e, t, "                ")), 
                        n.b("                "), n.s(n.f("translate", e, t, 1), e, t, 0, 4083, 4118, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("profile_project_unpublish|Unpublish");
                        }), e.pop()), n.b("\n" + o), n.b("              </a>"), n.b("\n" + o), n.b("            </li>"), 
                        n.b("\n" + o), n.s(n.f("is_founder", e, t, 1), e, t, 0, 4197, 4640, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('              <li class="rf-project-cover__controls-overlay-menu-item">'), 
                            n.b("\n" + o), n.b('                <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-delete" data-id="'), 
                            n.b(n.v(n.f("id", e, t, 0))), n.b('"'), n.s(n.f("multiple_owners", e, t, 1), e, t, 0, 4411, 4439, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(' data-multiple-owners="true"');
                            }), e.pop()), n.b(">"), n.b("\n" + o), n.b(n.rp("<tooltipContentbestyleguide/_icons/_trash14", e, t, "                  ")), 
                            n.b("                  "), n.s(n.f("translate", e, t, 1), e, t, 0, 4543, 4572, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b("profile_project_delete|Delete");
                            }), e.pop()), n.b("\n" + o), n.b("                </a>"), n.b("\n" + o), n.b("              </li>"), 
                            n.b("\n" + o);
                        }), e.pop()), n.s(n.f("is_founder", e, t, 1), e, t, 1, 0, 0, "") || (n.b('              <li class="rf-project-cover__controls-overlay-menu-item">'), 
                        n.b("\n" + o), n.b('                <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-remove-owner" data-id="'), 
                        n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b("\n" + o), n.b(n.rp("<tooltipContentbestyleguide/_icons/_trash15", e, t, "                  ")), 
                        n.b("                  "), n.s(n.f("translate", e, t, 1), e, t, 0, 4967, 5002, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("profile_project_remove_owner|Remove");
                        }), e.pop()), n.b("\n" + o), n.b("                </a>"), n.b("\n" + o), n.b("              </li>"), 
                        n.b("\n" + o))), n.s(n.f("is_team", e, t, 1), e, t, 0, 5131, 5896, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.s(n.f("is_member_editable", e, t, 1), e, t, 0, 5167, 5480, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b('              <li class="rf-project-cover__controls-overlay-menu-item">'), 
                                n.b("\n" + o), n.b('                <a href="'), n.b(n.v(n.f("edit_url", e, t, 0))), 
                                n.b('" class="rf-project-cover__controls-overlay-menu-item--link js-project-edit">'), 
                                n.b("\n" + o), n.b("                  "), n.s(n.f("translate", e, t, 1), e, t, 0, 5387, 5412, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                    n.b("profile_project_edit|Edit");
                                }), e.pop()), n.b("\n" + o), n.b("                </a>"), n.b("\n" + o), n.b("              </li>"), 
                                n.b("\n" + o);
                            }), e.pop()), n.s(n.f("is_admin_editable", e, t, 1), e, t, 0, 5538, 5863, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b('              <li class="rf-project-cover__controls-overlay-menu-item">'), 
                                n.b("\n" + o), n.b('                <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-remove" data-id="'), 
                                n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b("\n" + o), n.b("                  "), 
                                n.s(n.f("translate", e, t, 1), e, t, 0, 5766, 5795, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                    n.b("profile_project_remove|Remove");
                                }), e.pop()), n.b("\n" + o), n.b("                </a>"), n.b("\n" + o), n.b("              </li>"), 
                                n.b("\n" + o);
                            }), e.pop());
                        }), e.pop()), n.b("        </ul>"), n.b("\n" + o);
                    }
                }
            },
            "<bestyleguide/_ribbon17": {
                name: "bestyleguide/_ribbon",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_multipleOwners18": {
                name: "bestyleguide/_multipleOwners",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_icons/_appreciate19": {
                name: "bestyleguide/_icons/_appreciate",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_icons/_views20": {
                name: "bestyleguide/_icons/_views",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_icons/_badge21": {
                name: "bestyleguide/_icons/_badge",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_tooltip22": {
                name: "bestyleguide/_tooltip",
                partials: {},
                subs: {
                    tooltipContent: function(e, t, n, o) {
                        n.b("                  "), n.s(n.f("translate", e, t, 1), e, t, 0, 8416, 8454, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("project_cover_featured_on|Featured On:");
                        }), e.pop()), n.b(' <strong class="js-format-date" data-date="'), n.b(n.v(n.f("featured_on", e, t, 0))), 
                        n.b('">'), n.b(n.v(n.f("featured_on", e, t, 0))), n.b("</strong>"), n.b("\n" + o);
                    }
                }
            },
            "<bestyleguide/_icons/_kebab-horizontal23": {
                name: "bestyleguide/_icons/_kebab-horizontal",
                partials: {},
                subs: {}
            },
            "<bestyleguide/_tooltip24": {
                name: "bestyleguide/_tooltip",
                partials: {},
                subs: {
                    tooltipContent: function(e, t, n, o) {
                        n.b('                <span class="rf-project-cover__recommend-fewer js-flag-recommended">'), 
                        n.b("\n" + o), n.b("                  "), n.s(n.f("translate", e, t, 1), e, t, 0, 9082, 9154, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("project_cover_recommended_show_me_fewer|Show me fewer projects like this");
                        }), e.pop()), n.b("\n" + o), n.b("                </span>"), n.b("\n" + o);
                    }
                }
            }
        },
        subs: {
            attr: function(e, t, n, o) {}
        }
    }, '<div class="rf-project-cover rf-project-cover--project js-item js-project-cover qa-project-cover editable {{#classes}}{{.}} {{/classes}}" data-id="{{id}}" data-slug="{{slug}}" {{#ordinal_id}} data-ordinal="{{ordinal_id}}"{{/ordinal_id}} {{#from}}data-from="{{from}}"{{/from}} {{$attr}}{{/attr}}>\n  {{#is_new}}\n    <span class="rf-project-cover__new-ribbon">{{#translate}}project_cover_label_new|new{{/translate}}</span>\n  {{/is_new}}\n\n  {{#private}}\n    <div class="rf-tooltip--container rf-project-cover__private">\n      {{>bestyleguide/_icons/_lock-private}}\n\n      {{< bestyleguide/_tooltip}}\n        {{$tooltipContent}}\n          {{#translate}}project_cover_marked_private|This project is marked as private.{{/translate}}\n        {{/tooltipContent}}\n      {{/bestyleguide/_tooltip}}\n    </div>\n  {{/private}}\n\n  {{#is_collection_editable}}\n  <div class="rf-project-cover__controls-overlay">\n    {{< lib/_buttons/_link}}\n        {{$classes}}rf-button--icon-only rf-button--secondary rf-project-cover__controls-overlay-icon js-edit-icon{{/classes}}\n        {{$leadingIconAsset}}{{>bestyleguide/_icons/_edit}}{{/leadingIconAsset}}\n    {{/ lib/_buttons/_link}}\n  </div>\n  {{/is_collection_editable}}\n\n  {{#is_editable}}\n  <div class="rf-project-cover__controls-overlay js-project-controls-overlay">\n    {{#is_team}}\n      {{#is_admin_editable}}\n        {{< lib/_buttons/_link}}\n          {{$containerClasses}}rf-project-cover__controls-overlay-button js-controls-overlay-reorder{{/containerClasses}}\n          {{$classes}}rf-button--icon-only rf-button--secondary{{/classes}}\n          {{$leadingIconAsset}}{{>bestyleguide/_icons/_hamburger}}{{/leadingIconAsset}}\n        {{/ lib/_buttons/_link}}\n      {{/is_admin_editable}}\n    {{/is_team}}\n    {{^is_team}}\n      {{< lib/_buttons/_link}}\n        {{$containerClasses}}rf-project-cover__controls-overlay-button js-controls-overlay-reorder{{/containerClasses}}\n        {{$classes}}rf-button--icon-only rf-button--secondary{{/classes}}\n        {{$leadingIconAsset}}{{>bestyleguide/_icons/_hamburger}}{{/leadingIconAsset}}\n      {{/ lib/_buttons/_link}}\n    {{/is_team}}\n    <div class="js-controls-overlay-menu rf-tooltip--container">\n      {{< lib/_buttons/_link}}\n        {{$containerClasses}}rf-project-cover__controls-overlay-button rf-project-cover__controls-overlay-button--edit{{/containerClasses}}\n        {{$classes}}rf-button--icon-only rf-button--secondary{{/classes}}\n        {{$leadingIconAsset}}{{>bestyleguide/_icons/_edit}}{{/leadingIconAsset}}\n      {{/ lib/_buttons/_link}}\n\n      {{< bestyleguide/_tooltip}}\n        {{$tooltipContent}}\n        <ul class="rf-project-cover__controls-overlay-menu-items">\n          {{^is_team}}\n            <li class="rf-project-cover__controls-overlay-menu-item">\n              <a href="{{edit_url}}" class="rf-project-cover__controls-overlay-menu-item--link js-project-edit">\n                {{>bestyleguide/_icons/_edit}}\n                {{#translate}}profile_project_edit|Edit{{/translate}}\n              </a>\n            </li>\n            <li class="rf-project-cover__controls-overlay-menu-item">\n              <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-clone" data-id="{{id}}">\n              {{>bestyleguide/_icons/_clone}}\n                {{#translate}}profile_project_clone|Clone{{/translate}}\n              </a>\n            </li>\n            {{#share_url}}\n              <li class="rf-project-cover__controls-overlay-menu-item">\n                <a href="{{share_url}}" class="rf-project-cover__controls-overlay-menu-item--link js-project-promote" data-id="{{id}}">\n                  {{>bestyleguide/_icons/_share}}\n                  {{#translate}}profile_project_promote|Promote{{/translate}}\n                </a>\n              </li>\n            {{/share_url}}\n            <li class="rf-project-cover__controls-overlay-menu-item">\n              <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-unpublish" data-id="{{id}}">\n                {{>bestyleguide/_icons/_unpublish}}\n                {{#translate}}profile_project_unpublish|Unpublish{{/translate}}\n              </a>\n            </li>\n            {{#is_founder}}\n              <li class="rf-project-cover__controls-overlay-menu-item">\n                <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-delete" data-id="{{id}}"{{#multiple_owners}} data-multiple-owners="true"{{/multiple_owners}}>\n                  {{>bestyleguide/_icons/_trash}}\n                  {{#translate}}profile_project_delete|Delete{{/translate}}\n                </a>\n              </li>\n            {{/is_founder}}\n            {{^is_founder}}\n              <li class="rf-project-cover__controls-overlay-menu-item">\n                <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-remove-owner" data-id="{{id}}">\n                  {{>bestyleguide/_icons/_trash}}\n                  {{#translate}}profile_project_remove_owner|Remove{{/translate}}\n                </a>\n              </li>\n            {{/is_founder}}\n          {{/is_team}}\n          {{#is_team}}\n            {{#is_member_editable}}\n              <li class="rf-project-cover__controls-overlay-menu-item">\n                <a href="{{edit_url}}" class="rf-project-cover__controls-overlay-menu-item--link js-project-edit">\n                  {{#translate}}profile_project_edit|Edit{{/translate}}\n                </a>\n              </li>\n            {{/is_member_editable}}\n            {{#is_admin_editable}}\n              <li class="rf-project-cover__controls-overlay-menu-item">\n                <a href="#" class="rf-project-cover__controls-overlay-menu-item--link js-project-remove" data-id="{{id}}">\n                  {{#translate}}profile_project_remove|Remove{{/translate}}\n                </a>\n              </li>\n            {{/is_admin_editable}}\n          {{/is_team}}\n        </ul>\n        {{/tooltipContent}}\n      {{/ bestyleguide/_tooltip}}\n    </div>\n  </div>\n  {{/is_editable}}\n\n  <a href="{{url}}" class="rf-project-cover__image-container js-project-cover-image-link js-project-link">\n    <img class="rf-project-cover__image js-cover-image" src="{{covers.202}}" {{#covers.404}}srcset="{{covers.202}}, {{covers.404}} 2x"{{/covers.404}} alt="{{name}}" title="{{name}}" />\n  </a>\n\n  {{#most_recent_feature}}\n    <div class="rf-project-cover__feature">\n      {{>bestyleguide/_ribbon}}\n    </div>\n  {{/most_recent_feature}}\n\n  <div class="rf-project-cover__details">\n    <span class="rf-project-cover__title-wrap">\n      <a class="rf-project-cover__title js-project-cover-title-link" href="{{url}}">{{{name}}}</a>\n    </span>\n\n    {{>bestyleguide/_multipleOwners}}\n\n    <div class="rf-project-cover__fields">\n      <ul class="rf-project-cover__fields-list">\n        {{#field_links.0}}\n          <li class="rf-project-cover__field">\n            <a href="{{url}}" title="{{name}}" class="rf-project-cover__field-link">{{name}}</a>\n          </li>\n        {{/field_links.0}}\n      </ul>\n      <div class="rf-project-cover__curation-stats cover-stat-wrap"></div>\n    </div>\n    <div class="rf-project-cover__stats">\n      <div class="rf-project-cover__curation-marks js-project-cover-curation-marks"></div>\n      {{#curation_marks}}\n        {{#label}}\n        <span class="rf-project-cover__curation-mark js-project-curation-mark" style="color: {{color}}">{{label}}</span>\n        {{/label}}\n      {{/curation_marks}}\n\n      <div class="rf-project-cover__stat-container">\n        <a href="{{url}}" class="rf-project-cover__stat-link js-project-cover-stats-link" tabindex="-1">\n          <span class="rf-project-cover__stat">\n            <span class="rf-project-cover__stat">\n              {{>bestyleguide/_icons/_appreciate}}\n              <span class="rf-project-cover__stat-number">{{stats.appreciations}}</span>\n            </span>\n            <span class="rf-project-cover__stat">\n              {{>bestyleguide/_icons/_views}}\n              <span class="rf-project-cover__stat-number">{{stats.views}}</span>\n            </span>\n          </span>\n\n          {{^is_sensei_recommended}}\n            {{#featured_on}}\n            <span class="rf-project-cover__stat rf-project-cover__stat--featured rf-tooltip--container">\n              {{>bestyleguide/_icons/_badge}}\n              {{< bestyleguide/_tooltip}}\n                {{$tooltipContent}}\n                  {{#translate}}project_cover_featured_on|Featured On:{{/translate}} <strong class="js-format-date" data-date="{{featured_on}}">{{featured_on}}</strong>\n                {{/tooltipContent}}\n              {{/ bestyleguide/_tooltip}}\n            </span>\n            {{/featured_on}}\n          {{/is_sensei_recommended}}\n        </a>\n\n        {{#is_sensei_recommended}}\n          <span class="rf-project-cover__more rf-tooltip--container">\n            {{>bestyleguide/_icons/_kebab-horizontal}}\n            {{< bestyleguide/_tooltip}}\n              {{$tooltipContent}}\n                <span class="rf-project-cover__recommend-fewer js-flag-recommended">\n                  {{#translate}}project_cover_recommended_show_me_fewer|Show me fewer projects like this{{/translate}}\n                </span>\n              {{/tooltipContent}}\n            {{/ bestyleguide/_tooltip}}\n          </span>\n        {{/is_sensei_recommended}}\n      </div>\n    </div>\n  </div>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<a class="rf-ribbon" href='), o.b(o.v(o.f("url", e, t, 0))), 
            o.b(">"), o.b("\n" + n), o.b('  <img srcset="'), o.b(o.v(o.d("site.ribbon.image", e, t, 0))), 
            o.b(", "), o.b(o.v(o.d("site.ribbon.image_2x", e, t, 0))), o.b(' 2x" title="'), 
            o.b(o.v(o.f("title", e, t, 0))), o.b('" class="rf-ribbon__image"/>'), o.b("\n" + n), 
            o.b("</a>"), o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<a class="rf-ribbon" href={{url}}>\n  <img srcset="{{site.ribbon.image}}, {{site.ribbon.image_2x}} 2x" title="{{title}}" class="rf-ribbon__image"/>\n</a>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "bestyleguide/_tooltip": n(746).template,
        "bestyleguide/_owner": n(1041).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="rf-owners '), o.sub("classes", e, t, n), 
            o.b('">'), o.b("\n" + n), o.b('  <span class="rf-owners__list '), o.s(o.f("multiple_owners", e, t, 1), e, t, 0, 100, 121, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("rf-tooltip--container");
            }), e.pop()), o.b('">'), o.b("\n" + n), o.s(o.f("multiple_owners", e, t, 1), e, t, 0, 166, 497, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("    "), o.s(o.f("translate", e, t, 1), e, t, 0, 185, 216, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("multiple_owners|Multiple Owners");
                }), e.pop()), o.b("\n" + n), o.b(o.rp("<bestyleguide/_tooltip1", e, t, ""));
            }), e.pop()), o.b("\n" + n), o.s(o.f("multiple_owners", e, t, 1), e, t, 1, 0, 0, "") || o.s(o.f("owners", e, t, 1), e, t, 0, 557, 593, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.rp("<bestyleguide/_owner2", e, t, "      "));
            }), e.pop()), o.b("  </span>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<bestyleguide/_tooltip1": {
                name: "bestyleguide/_tooltip",
                partials: {
                    "<tooltipContentbestyleguide/_owner0": {
                        name: "bestyleguide/_owner",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    tooltipContent: function(e, t, n, o) {
                        n.b('        <div class="rf-multiple-owners-container">'), n.b("\n" + o), n.s(n.f("owners", e, t, 1), e, t, 0, 361, 410, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(n.rp("<tooltipContentbestyleguide/_owner0", e, t, "            "));
                        }), e.pop()), n.b("        </div>"), n.b("\n" + o);
                    }
                }
            },
            "<bestyleguide/_owner2": {
                name: "bestyleguide/_owner",
                partials: {},
                subs: {}
            }
        },
        subs: {
            classes: function(e, t, n, o) {}
        }
    }, '<div class="rf-owners {{$classes}}{{/classes}}">\n  <span class="rf-owners__list {{#multiple_owners}}rf-tooltip--container{{/multiple_owners}}">\n  {{#multiple_owners}}\n    {{#translate}}multiple_owners|Multiple Owners{{/translate}}\n    {{< bestyleguide/_tooltip}}\n      {{$tooltipContent}}\n        <div class="rf-multiple-owners-container">\n          {{#owners}}\n            {{> bestyleguide/_owner}}\n          {{/owners}}\n        </div>\n      {{/tooltipContent}}\n    {{/ bestyleguide/_tooltip}}\n  {{/multiple_owners}}\n\n  {{^multiple_owners}}\n    {{#owners}}\n      {{>bestyleguide/_owner}}\n    {{/owners}}\n  {{/multiple_owners}}\n  </span>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="rf-owners__owner">'), o.b("\n" + n), o.b('  <a class="rf-owners__owner-link" href="'), 
            o.b(o.v(o.f("url", e, t, 0))), o.b('">'), o.b("\n" + n), o.b('    <span class="rf-owners__owner-image-container">'), 
            o.b("\n" + n), o.b('      <img class="rf-owners__owner-image js-mini-profile" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('" src="'), o.b(o.v(o.d("images.50", e, t, 0))), 
            o.b('"/>'), o.b("\n" + n), o.b("    </span>"), o.b("\n"), o.b("\n" + n), o.b('    <span class="rf-owners__owner-name js-mini-profile" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('">'), o.b("\n" + n), o.b('      <span class="rf-owners__owner-name-by">'), 
            o.s(o.f("translate", e, t, 1), e, t, 0, 377, 397, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("project_cover_by|by:");
            }), e.pop()), o.b("</span> "), o.b(o.v(o.f("display_name", e, t, 0))), o.b("\n" + n), 
            o.b("    </span>"), o.b("\n" + n), o.b("  </a>"), o.b("\n" + n), o.b("</div>"), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<div class="rf-owners__owner">\n  <a class="rf-owners__owner-link" href="{{url}}">\n    <span class="rf-owners__owner-image-container">\n      <img class="rf-owners__owner-image js-mini-profile" data-id="{{id}}" src="{{images.50}}"/>\n    </span>\n\n    <span class="rf-owners__owner-name js-mini-profile" data-id="{{id}}">\n      <span class="rf-owners__owner-name-by">{{#translate}}project_cover_by|by:{{/translate}}</span> {{display_name}}\n    </span>\n  </a>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg xmlns="http://www.w3.org/2000/svg" height="3" viewBox="0 0 13 3">'), 
            o.b("\n" + n), o.b('  <circle class="circle" cx="1.5" cy="1.5" r="1.5" transform="translate(-1456 -1055)translate(1456 1055)"/>'), 
            o.b("\n" + n), o.b('  <circle class="circle" cx="1.5" cy="1.5" r="1.5" transform="translate(-1456 -1055)translate(1461 1055)"/>'), 
            o.b("\n" + n), o.b('  <circle class="circle" cx="1.5" cy="1.5" r="1.5" transform="translate(-1456 -1055)translate(1466 1055)"/>'), 
            o.b("\n" + n), o.b("</svg>"), o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg xmlns="http://www.w3.org/2000/svg" height="3" viewBox="0 0 13 3">\n  <circle class="circle" cx="1.5" cy="1.5" r="1.5" transform="translate(-1456 -1055)translate(1456 1055)"/>\n  <circle class="circle" cx="1.5" cy="1.5" r="1.5" transform="translate(-1456 -1055)translate(1461 1055)"/>\n  <circle class="circle" cx="1.5" cy="1.5" r="1.5" transform="translate(-1456 -1055)translate(1466 1055)"/>\n</svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<script type="text/html" class="js-lightbox-slide-content">'), 
            o.b("\n" + n), o.b('  <div class="project-lightbox-image-container qa-lightbox-img-container">'), 
            o.b("\n" + n), o.b("    "), o.s(o.f("picture_largest", e, t, 1), e, t, 0, 159, 298, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('<img src="'), n.b(n.v(n.d("img.src", e, t, 0))), n.b('" srcset="'), n.s(n.f("sources", e, t, 1), e, t, 0, 202, 224, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("srcset", e, t, 0))), n.b(" "), n.b(n.v(n.f("width", e, t, 0))), n.b("w,");
                }), e.pop()), n.b('" sizes="(max-width: '), n.b(n.v(n.d("img.width", e, t, 0))), 
                n.b("px) 100vw, "), n.b(n.v(n.d("img.width", e, t, 0))), n.b('px">');
            }), e.pop()), o.b("\n" + n), o.b('    <div class="project-item-lightbox__actions qa-lightbox-actions lightbox-extra">'), 
            o.b("\n" + n), o.b('      <div class="project-item-lightbox__action js-module-lightbox-add-to-collection" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b('      <div class="project-item-lightbox__action js-module-lightbox-trigger" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b("    </div>"), 
            o.b("\n" + n), o.b("  </div>"), o.b("\n" + n), o.b('    <div class="project-item-lightbox__caption js-lightbox-caption qa-lightbox-caption" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b("<\/script>"), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<script type="text/html" class="js-lightbox-slide-content">\n  <div class="project-lightbox-image-container qa-lightbox-img-container">\n    {{#picture_largest}}<img src="{{img.src}}" srcset="{{#sources}}{{srcset}} {{width}}w,{{/sources}}" sizes="(max-width: {{img.width}}px) 100vw, {{img.width}}px">{{/picture_largest}}\n    <div class="project-item-lightbox__actions qa-lightbox-actions lightbox-extra">\n      <div class="project-item-lightbox__action js-module-lightbox-add-to-collection" data-id="{{id}}"></div>\n      <div class="project-item-lightbox__action js-module-lightbox-trigger" data-id="{{id}}"></div>\n    </div>\n  </div>\n    <div class="project-item-lightbox__caption js-lightbox-caption qa-lightbox-caption" data-id="{{id}}"></div>\n<\/script>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="project-module__actions">'), o.b("\n" + n), 
            o.b('  <div class="project-module__action js-module-add-to-collection" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b('  <div class="project-module__action js-module-trigger" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b('  <div class="project-module__action js-module-takedown-admin" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b("</div>"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<div class="project-module__actions">\n  <div class="project-module__action js-module-add-to-collection" data-id="{{id}}"></div>\n  <div class="project-module__action js-module-trigger" data-id="{{id}}"></div>\n  <div class="project-module__action js-module-takedown-admin" data-id="{{id}}"></div>\n</div>', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return f;
    }), n.d(t, "c", function() {
        return j;
    });
    n(17), n(31), n(18), n(20), n(70), n(36), n(188), n(30), n(24), n(25), n(22), n(8), 
    n(10), n(74), n(37), n(21), n(38), n(35);
    var o, r, i = n(51), a = n.n(i), s = n(719), l = n(756);
    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function p(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function d(e) {
        return function() {
            var t = this, n = arguments;
            return new Promise(function(o, r) {
                var i = e.apply(t, n);
                function a(e) {
                    p(i, o, r, a, s, "next", e);
                }
                function s(e) {
                    p(i, o, r, a, s, "throw", e);
                }
                a(void 0);
            });
        };
    }
    var f = {
        INIT: "INIT",
        COLLECTION_CREATE_CLICK: "COLLECTION_CREATE_CLICK",
        COLLECTION_SAVE_PROJECT_CLICK: "COLLECTION_SAVE_PROJECT_CLICK",
        COLLECTION_SAVE_MODULE_CLICK: "COLLECTION_SAVE_MODULE_CLICK",
        MOODBOARD_SAVE_GRID_ITEM_CLICK: "MOODBOARD_SAVE_GRID_ITEM_CLICK",
        COLLECTION_SAVE_CLICK_RESET: "COLLECTION_SAVE_CLICK_RESET",
        COLLECTION_ID_SELECTED: "COLLECTION_ID_SELECTED"
    }, b = "SET_COLLECTIONS_DATA", h = "APPEND_COLLECTIONS", m = "SET_COLLECTION_IS_SAVING", g = "SET_COLLECTION_IS_SAVED", v = "UPDATE_COLLECTION_SELECTED_STATE";
    function w(e, t) {
        return t.modifiedOn - e.modifiedOn;
    }
    function _(e, t) {
        for (var n = a()(e), o = 0; o < n.length; o++) n[o][s.a] = t.includes(n[o].id);
        var r = n.filter(function(e) {
            return e[s.a];
        }).sort(w), i = n.filter(function(e) {
            return !e[s.a];
        }).sort(w);
        return r.concat(i);
    }
    function y(e) {
        return e.map(function(e) {
            return e[s.a] && e.id;
        }).filter(function(e) {
            return e;
        });
    }
    function j(e) {
        return e.map(function(e) {
            return !e[s.a] && e.id;
        }).filter(function(e) {
            return e;
        });
    }
    t.b = {
        namespaced: !0,
        state: function() {
            return {
                userCollections: null,
                initialSelectedIds: null,
                newCollectionId: 0,
                isCollectionSaving: !1,
                isCollectionSaved: !1
            };
        },
        actions: (o = {}, u(o, f.INIT, function(e, t) {
            var n = e.commit, o = e.dispatch, r = t.projectId, i = t.query;
            return d(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, l.a.getCollectionsForAddCollectionModal({
                            projectId: r,
                            query: i
                        });

                      case 3:
                        t = e.sent, a = t.viewer.contains.nodes.map(function(e) {
                            return e.id;
                        }), n(b, _(t.viewer.moodboards.nodes, a)), e.next = 11;
                        break;

                      case 8:
                        e.prev = 8, e.t0 = e.catch(0), o("error", e.t0, {
                            root: !0
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 8 ] ]);
            }))();
        }), u(o, f.COLLECTION_CREATE_CLICK, function(e, t) {
            var n = e.commit, o = e.dispatch, r = t.collectionName;
            return d(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, l.a.createCollection({
                            collectionName: r
                        });

                      case 3:
                        t = e.sent, n(h, t.collection), e.next = 10;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(0), o("error", e.t0, {
                            root: !0
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 7 ] ]);
            }))();
        }), u(o, f.COLLECTION_ID_SELECTED, function(e, t) {
            var n = e.commit;
            return d(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n(v, t);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        }), u(o, f.COLLECTION_SAVE_PROJECT_CLICK, function(e, t) {
            var n = e.dispatch, o = e.commit, r = e.state, i = t.projectId;
            return d(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o(m, !0), t = y(r.userCollections).join("|"), e.abrupt("return", l.a.updateCollection({
                            projectId: i,
                            projectCollectionIds: t
                        }).then(function() {
                            o(m, !1), o(g, !0);
                        }).catch(function(e) {
                            return o(m, !1), o(g, !1), n("error", e, {
                                root: !0
                            });
                        }));

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        }), u(o, f.MOODBOARD_SAVE_GRID_ITEM_CLICK, function(e, t) {
            var n = e.dispatch, o = e.commit, r = e.state, i = t.gridItemId;
            return d(regeneratorRuntime.mark(function e() {
                var t, a, s, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o(m, !0), t = [], a = y(r.userCollections), s = a.filter(function(e) {
                            return !r.initialSelectedIds.includes(e);
                        }), c = r.initialSelectedIds.filter(function(e) {
                            return !a.includes(e);
                        }), s && s.length && t.push(l.a.saveGridItemToMoodboard({
                            gridItemId: i,
                            collectionIdsToSave: s
                        })), c && c.length && t.push(l.a.deleteGridItemFromMoodboard({
                            gridItemId: i,
                            collectionIdsToRemove: c
                        })), e.abrupt("return", Promise.all(t).then(function() {
                            o(m, !1), o(g, !0);
                        }).catch(function(e) {
                            return o(m, !1), o(g, !1), n("error", e, {
                                root: !0
                            });
                        }));

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        }), u(o, f.COLLECTION_SAVE_MODULE_CLICK, function(e, t) {
            var n = e.dispatch, o = e.commit, r = e.state, i = t.moduleId;
            return d(regeneratorRuntime.mark(function e() {
                var t, a, s, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o(m, !0), t = [], a = y(r.userCollections), s = a.filter(function(e) {
                            return !r.initialSelectedIds.includes(e);
                        }), c = r.initialSelectedIds.filter(function(e) {
                            return !a.includes(e);
                        }), s && s.length && t.push(l.a.saveModuleToCollection({
                            moduleId: i,
                            collectionIdsToSave: s
                        })), c && c.length && t.push(l.a.deleteModuleFromCollection({
                            moduleId: i,
                            collectionIdsToRemove: c
                        })), e.abrupt("return", Promise.all(t).then(function() {
                            o(m, !1), o(g, !0);
                        }).catch(function(e) {
                            return o(m, !1), o(g, !1), n("error", e, {
                                root: !0
                            });
                        }));

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        }), u(o, f.COLLECTION_SAVE_CLICK_RESET, function(e) {
            var t = e.commit;
            t(m, !1), t(g, !1);
        }), o),
        mutations: (r = {}, u(r, v, function(e, t) {
            e.userCollections = e.userCollections.map(function(e) {
                var n = t.includes(e.id);
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach(function(t) {
                            u(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }({}, e, u({}, s.a, n));
            });
        }), u(r, b, function(e, t) {
            e.userCollections = t, e.initialSelectedIds = y(e.userCollections);
        }), u(r, h, function(e, t) {
            e.userCollections.unshift(u({
                id: t.id,
                label: t.title,
                modifiedOn: t.modified_on,
                privacy: t.privacy,
                url: t.url,
                owners: t.owners
            }, s.a, !0));
        }), u(r, m, function(e, t) {
            e.isCollectionSaving = t;
        }), u(r, g, function(e, t) {
            e.isCollectionSaved = t;
        }), r)
    };
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n(17), n(54), n(63), n(72), n(36), n(8), n(10), n(62), n(37), n(38), n(35), n(188);
    var o = n(1);
    function r(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    var i, a, s = {
        urls: {
            ONBOARDING_ADOBE: "/onboarding/adobe",
            SIGNUP_ACTIVATE: "/signup/activate"
        },
        getOnboardingAdobeState: function() {
            var e, t = this;
            return (e = regeneratorRuntime.mark(function e() {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Object(o.default)(t.urls.ONBOARDING_ADOBE);

                      case 2:
                        return n = e.sent, r = n.onboarding, e.abrupt("return", r);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }), function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    var a = e.apply(t, n);
                    function s(e) {
                        r(a, o, i, s, l, "next", e);
                    }
                    function l(e) {
                        r(a, o, i, s, l, "throw", e);
                    }
                    s(void 0);
                });
            })();
        },
        activate: function(e, t, n) {
            return Object(o.default)({
                url: this.urls.SIGNUP_ACTIVATE,
                method: "POST",
                data: {
                    redirect: !1,
                    categories: e.join("|"),
                    adobe_gallery_ids: t.join("|"),
                    from_source: n
                }
            });
        }
    };
    function l(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
    }
    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function u(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function p(e) {
        return function() {
            var t = this, n = arguments;
            return new Promise(function(o, r) {
                var i = e.apply(t, n);
                function a(e) {
                    u(i, o, r, a, s, "next", e);
                }
                function s(e) {
                    u(i, o, r, a, s, "throw", e);
                }
                a(void 0);
            });
        };
    }
    n.d(t, "c", function() {
        return d;
    }), n.d(t, "b", function() {
        return f;
    }), n.d(t, "a", function() {
        return b;
    }), n.d(t, "e", function() {
        return h;
    }), n.d(t, "d", function() {
        return m;
    });
    var d = "OPEN_ONBOARDING_ACTION", f = "OPEN_GALLERY_SELECTOR_ACTION", b = "ACTIVATE_ACCOUNT_FROM_GALLERY_SELECTOR_ACTION", h = "UPDATE_SELECTED_CATEGORY_IDS_ACTION", m = "UPDATE_SELECTED_ADOBE_GALLERY_IDS_ACTION", g = "SET_IS_SUBMITTED";
    function v(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        return (w = p(regeneratorRuntime.mark(function e(t, n) {
            var o, r, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = t.dispatch, r = t.commit, i = t.state, e.prev = 1, r(g, !0), e.next = 5, 
                    s.activate(i.selectedCategoryIds, i.selectedAdobeGalleryIds, n);

                  case 5:
                    e.next = 12;
                    break;

                  case 7:
                    return e.prev = 7, e.t0 = e.catch(1), r(g, !1), e.next = 12, o("error", e.t0, {
                        root: !0
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 1, 7 ] ]);
        }))).apply(this, arguments);
    }
    t.f = {
        namespaced: !0,
        state: function() {
            return {
                projects: [],
                categories: [],
                selectedCategoryIds: [],
                selectedAdobeGalleryIds: [],
                isSubmitted: !1
            };
        },
        actions: (i = {}, c(i, d, function(e) {
            var t = e.dispatch, n = e.commit, o = e.state;
            return p(regeneratorRuntime.mark(function e() {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o.categories.length || o.projects.length) {
                            e.next = 15;
                            break;
                        }
                        return e.prev = 1, e.next = 4, s.getOnboardingAdobeState();

                      case 4:
                        r = e.sent, n("SET_PROJECTS", r.projects), n("SET_CATEGOREIS", r.categories), n("SET_SELECTED_CATEGORY_IDS", r.selectedCategoryIds), 
                        n("SET_SELECTED_ADOBE_GALLERY_IDS", r.selectedAdobeGalleryIds), e.next = 15;
                        break;

                      case 11:
                        return e.prev = 11, e.t0 = e.catch(1), e.next = 15, t("error", e.t0, {
                            root: !0
                        });

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 1, 11 ] ]);
            }))();
        }), c(i, f, function() {}), c(i, b, function(e) {
            return v(e, "logged_out_gallery_selector");
        }), c(i, "ACTIVATE_ACCOUNT_FROM_NAV_BUTTON_ACTION", function(e) {
            return v(e, "logged_out_nav_button");
        }), c(i, h, function(e, t) {
            (0, e.commit)("SET_SELECTED_CATEGORY_IDS", t);
        }), c(i, m, function(e, t) {
            (0, e.commit)("SET_SELECTED_ADOBE_GALLERY_IDS", t);
        }), i),
        mutations: (a = {}, c(a, "SET_PROJECTS", function(e, t) {
            e.projects = t;
        }), c(a, "SET_CATEGOREIS", function(e, t) {
            e.categories = t;
        }), c(a, "SET_SELECTED_CATEGORY_IDS", function(e, t) {
            e.selectedCategoryIds = l(t);
        }), c(a, "SET_SELECTED_ADOBE_GALLERY_IDS", function(e, t) {
            e.selectedAdobeGalleryIds = l(t);
        }), c(a, g, function(e, t) {
            e.isSubmitted = t;
        }), a)
    };
}, , function(e, t, n) {
    e.exports = n(2)(275);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(970), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectCoverCaret-projectCoverCaret-23Z {\n  height: 67px;\n  width: 55px;\n}\n.ProjectCoverCaret-projectCover-1M4 {\n  border-radius: 3px;\n  height: 43px;\n  margin-bottom: 11px;\n  width: 100%;\n}\n@media (max-height: 600px) {\n.ProjectCoverCaret-projectCover-1M4 {\n      visibility: hidden;\n}\n}\n.ProjectCoverCaret-navDirection-28z {\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  height: 13px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n.ProjectCoverCaret-projectCoverImage-1Z1 {\n  border-radius: inherit;\n  height: inherit;\n  width: inherit;\n}\n.ProjectCoverCaret-arrowCaret-aJc {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #343434;\n  border-radius: 50%;\n  height: 45px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 8px;\n  margin-top: calc(45px / -2);\n  width: 45px;\n  z-index: 2;\n}\n.ProjectCoverCaret-arrowCaret-aJc:hover {\n    background-color: #696969;\n}\n@media (min-width: 1024px) {\n.ProjectCoverCaret-arrowCaret-aJc {\n      display: -webkit-box;\n      display: flex;\n}\n}\n.ProjectCoverCaret-caret-Hsb {\n  fill: #fff;\n  height: 13px;\n  margin-right: 1px;\n  width: 9px;\n}\n.ProjectCoverCaret-next-2QN {\n  margin-left: 3px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n", "" ]), 
    t.locals = {
        projectCoverCaret: "ProjectCoverCaret-projectCoverCaret-23Z",
        projectCover: "ProjectCoverCaret-projectCover-1M4",
        navDirection: "ProjectCoverCaret-navDirection-28z",
        projectCoverImage: "ProjectCoverCaret-projectCoverImage-1Z1",
        arrowCaret: "ProjectCoverCaret-arrowCaret-aJc",
        caret: "ProjectCoverCaret-caret-Hsb",
        next: "ProjectCoverCaret-next-2QN"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(971), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectOverlay-root-Yl_ {\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out;\n}\n.ProjectOverlay-root-Yl_ * {\n    box-sizing: border-box;\n}\n.ProjectOverlay-pulsePoint-22x {\n  bottom: -11px;\n}\n.ProjectOverlay-centerSpinner-3zd {\n  margin: 0 auto;\n  top: 50%;\n}\n.ProjectOverlay-slot-xSR {\n  z-index: 1;\n}\n.ProjectOverlay-direction-38c {\n  color: #959595;\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: bold;\n  line-height: 1em;\n  text-decoration: none;\n}\n.ProjectOverlay-siblingProjectCovers-3wg {\n  display: none;\n}\n@media (min-width: 1025px) {\n.ProjectOverlay-siblingProjectCovers-3wg {\n      bottom: 20px;\n      display: block;\n      position: fixed;\n}\n.ProjectOverlay-siblingProjectCovers-3wg:hover {\n        text-decoration: none;\n}\n}\n@media (min-width: 1025px) and (max-height: 520px) {\n.ProjectOverlay-siblingProjectCovers-3wg {\n      display: none;\n}\n}\n.ProjectOverlay-prevSibling-NUa {\n  z-index: 1;\n}\n@media (min-width: 1025px) and (max-width: 1590px) {\n.ProjectOverlay-prevSibling-NUa {\n      left: 25px;\n}\n}\n@media (min-width: 1590px) {\n.ProjectOverlay-prevSibling-NUa {\n      left: calc(calc((100% - 1400px) / 2) - 70px);\n}\n.ProjectOverlay-narrowProject-3Dk .ProjectOverlay-prevSibling-NUa {\n        left: calc(calc((100% - 740px) / 2) - 70px);\n}\n}\n@media (min-width: 1590px) {\n.ProjectOverlay-prevSibling-NUa.ProjectOverlay-hasAdminSidebar-QuI {\n      left: 25px;\n}\n.ProjectOverlay-narrowProject-3Dk .ProjectOverlay-prevSibling-NUa.ProjectOverlay-hasAdminSidebar-QuI {\n        left: calc( calc((100% - 1010px) / 2) - 70px);\n}\n}\n@media (min-width: 1860px) {\n.ProjectOverlay-prevSibling-NUa.ProjectOverlay-hasAdminSidebar-QuI {\n      left: calc( calc((100% - 1670px) / 2) - 70px);\n}\n.ProjectOverlay-narrowProject-3Dk .ProjectOverlay-prevSibling-NUa.ProjectOverlay-hasAdminSidebar-QuI {\n        left: calc( calc((100% - 1010px) / 2) - 70px);\n}\n}\n.ProjectOverlay-prevSibling-NUa:hover {\n    opacity: 1;\n}\n.ProjectOverlay-nextSibling-2bW {\n  z-index: 2;\n}\n@media (min-width: 1025px) and (max-width: 1590px) {\n.ProjectOverlay-nextSibling-2bW {\n      right: 25px;\n}\n}\n@media (min-width: 1590px) {\n.ProjectOverlay-nextSibling-2bW {\n      right: calc(calc((100% - 1400px) / 2) - 70px);\n}\n.ProjectOverlay-narrowProject-3Dk .ProjectOverlay-nextSibling-2bW {\n        right: calc(calc((100% - 740px) / 2) - 70px);\n}\n}\n@media (min-width: 1590px) {\n.ProjectOverlay-nextSibling-2bW.ProjectOverlay-hasAdminSidebar-QuI {\n      right: 25px;\n}\n.ProjectOverlay-narrowProject-3Dk .ProjectOverlay-nextSibling-2bW.ProjectOverlay-hasAdminSidebar-QuI {\n        right: calc( calc((100% - 1010px) / 2) - 70px);\n}\n}\n@media (min-width: 1860px) {\n.ProjectOverlay-nextSibling-2bW.ProjectOverlay-hasAdminSidebar-QuI {\n      right: calc( calc((100% - 1670px) / 2) - 70px);\n}\n.ProjectOverlay-narrowProject-3Dk .ProjectOverlay-nextSibling-2bW.ProjectOverlay-hasAdminSidebar-QuI {\n        right: calc( calc((100% - 1010px) / 2) - 70px);\n}\n}\n.ProjectOverlay-pulseOk-1Fv {\n  color: #0057ff;\n  font-weight: bold;\n}\n", "" ]), 
    t.locals = {
        root: "ProjectOverlay-root-Yl_",
        pulsePoint: "ProjectOverlay-pulsePoint-22x",
        centerSpinner: "ProjectOverlay-centerSpinner-3zd",
        slot: "ProjectOverlay-slot-xSR",
        direction: "ProjectOverlay-direction-38c",
        siblingProjectCovers: "ProjectOverlay-siblingProjectCovers-3wg",
        prevSibling: "ProjectOverlay-prevSibling-NUa",
        narrowProject: "ProjectOverlay-narrowProject-3Dk",
        hasAdminSidebar: "ProjectOverlay-hasAdminSidebar-QuI",
        nextSibling: "ProjectOverlay-nextSibling-2bW",
        pulseOk: "ProjectOverlay-pulseOk-1Fv"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(972), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".AppreciationNotification-appreciationNotifications-2g9 {\n  -webkit-box-align: center;\n          align-items: center;\n  background: #fff;\n  border-radius: 3px;\n  bottom: 20px;\n  box-shadow: 0 3px 8px rgba(25, 25, 25, 0.3);\n  cursor: default;\n  display: -webkit-box;\n  display: flex;\n  left: 20px;\n  padding: 12px;\n  position: fixed;\n  width: 340px;\n  z-index: 8;\n}\n.AppreciationNotification-appreciationNotifications-2g9.AppreciationNotification-overlayOverFooter-yBY {\n    z-index: 6;\n}\n.AppreciationNotification-appreciationImage-1m3 {\n  display: block;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n.AppreciationNotification-appreciationImageLoader-2O2 {\n  height: 80px;\n  margin-right: 13px;\n  width: 120px;\n}\n.AppreciationNotification-appreciationNotifications-2g9 .AppreciationNotification-appreciationImageLoader-2O2 {\n    left: 0;\n    position: relative;\n    top: 0;\n    -webkit-transform: none;\n            transform: none;\n}\n.AppreciationNotification-clipper-3lm {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 80px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-right: 13px;\n  overflow: hidden;\n  position: relative;\n  width: 120px;\n}\n.AppreciationNotification-appreciationCTA-NaZ {\n  font-size: 16px;\n  line-height: 1.2;\n}\n.AppreciationNotification-appreciationCTA-NaZ .link {\n    color: inherit;\n    text-decoration: underline;\n}\n.AppreciationNotification-appreciationLink-2TM {\n  color: #191919;\n  display: inline-block;\n  font-size: 15px;\n  font-weight: bold;\n  margin-top: 14px;\n}\n.AppreciationNotification-appreciationNotificationArrow-1e5 {\n  margin-left: 2px;\n  position: relative;\n  top: 1px;\n  width: 17px;\n}\n", "" ]), 
    t.locals = {
        appreciationNotifications: "AppreciationNotification-appreciationNotifications-2g9",
        overlayOverFooter: "AppreciationNotification-overlayOverFooter-yBY",
        appreciationImage: "AppreciationNotification-appreciationImage-1m3",
        appreciationImageLoader: "AppreciationNotification-appreciationImageLoader-2O2",
        clipper: "AppreciationNotification-clipper-3lm",
        appreciationCTA: "AppreciationNotification-appreciationCTA-NaZ",
        appreciationLink: "AppreciationNotification-appreciationLink-2TM",
        appreciationNotificationArrow: "AppreciationNotification-appreciationNotificationArrow-1e5"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(973), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".FollowButtonMinimal-pulsePoint-29s {\n  bottom: -14px;\n  left: auto;\n  right: -5px;\n}\n.FollowButtonMinimal-button-2ku {\n  -webkit-box-align: center;\n          align-items: center;\n  background: #0057ff;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  height: 16px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 16px;\n}\n.FollowButtonMinimal-following-fuF {\n  background: #fff;\n}\n.FollowButtonMinimal-unfollow-j6O {\n  background: #d00;\n}\n.FollowButtonMinimal-followBtn-OSh {\n  display: block;\n  padding-bottom: 2px;\n}\n.FollowButtonMinimal-tooltipContent-2jo {\n  font-size: 13px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n.FollowButtonMinimal-tooltipStyle-TUa {\n  padding: 10px 19px;\n}\n.FollowButtonMinimal-followTooltip-R54 {\n  display: block;\n}\n.following .FollowButtonMinimal-followTooltip-R54 {\n    display: none;\n}\n.FollowButtonMinimal-unfollowTooltip-1Xo {\n  display: none;\n}\n.following .FollowButtonMinimal-unfollowTooltip-1Xo {\n    display: block;\n}\n.FollowButtonMinimal-tooltipContent-2jo {\n  cursor: pointer;\n}\n", "" ]), 
    t.locals = {
        pulsePoint: "FollowButtonMinimal-pulsePoint-29s",
        button: "FollowButtonMinimal-button-2ku",
        following: "FollowButtonMinimal-following-fuF",
        unfollow: "FollowButtonMinimal-unfollow-j6O",
        followBtn: "FollowButtonMinimal-followBtn-OSh",
        tooltipContent: "FollowButtonMinimal-tooltipContent-2jo",
        tooltipStyle: "FollowButtonMinimal-tooltipStyle-TUa",
        followTooltip: "FollowButtonMinimal-followTooltip-R54",
        unfollowTooltip: "FollowButtonMinimal-unfollowTooltip-1Xo"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(974), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Avatar-root-2FB {\n  position: relative;\n}\n.Avatar-root-2FB .Avatar-follow-2E4 {\n  bottom: 3px;\n  position: absolute;\n  right: 0;\n}\n.Avatar-addMark-wKq {\n  fill: #fff;\n  height: 8px;\n  width: 8px;\n}\n.Avatar-checkMark-2sf {\n  display: block;\n  fill: #191919;\n  height: 6.22px;\n  margin: 0 auto;\n  position: relative;\n  top: 30%;\n  width: 8px;\n}\n.Avatar-minusMark-1rD {\n  display: block;\n  fill: #fff;\n  margin: 0 auto;\n  position: relative;\n  top: 25%;\n  width: 8px;\n}\n", "" ]), 
    t.locals = {
        root: "Avatar-root-2FB",
        follow: "Avatar-follow-2E4",
        addMark: "Avatar-addMark-wKq",
        checkMark: "Avatar-checkMark-2sf",
        minusMark: "Avatar-minusMark-1rD"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(975), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ModuleTakedownControl-module-1Np {\n  background-color: #fff;\n  margin-top: 25px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  z-index: 1001;\n}\n", "" ]), 
    t.locals = {
        module: "ModuleTakedownControl-module-1Np"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(976), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Actions-collectionIcon-3FB {\n  height: 15px;\n}\n@media (max-width: 603px) {\n.Actions-gridAction-38b {\n    display: none;\n}\n.js-grid-item-lightbox-add-to-collection .Actions-gridAction-38b {\n      display: block;\n}\n}\n.project-module__action {\n  margin-right: 10px;\n}\n.Actions-moduleAction-2Qe {\n  position: relative;\n}\n", "" ]), 
    t.locals = {
        collectionIcon: "Actions-collectionIcon-3FB",
        gridAction: "Actions-gridAction-38b",
        moduleAction: "Actions-moduleAction-2Qe"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(977), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ImageElement-root-33P {\n  position: relative;\n}\n.ImageElement-placeholder-21N {\n  background-color: rgba(25, 25, 25, 0.03);\n  height: 0;\n  max-width: 100%;\n  padding: 0;\n  z-index: 1;\n}\n.ImageElement-image-2K6 {\n  display: block;\n  left: 0;\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 2;\n}\n.ImageElement-loaded-1V2 .ImageElement-image-2K6 {\n    left: auto;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    top: auto;\n    z-index: inherit;\n}\n", "" ]), 
    t.locals = {
        root: "ImageElement-root-33P",
        placeholder: "ImageElement-placeholder-21N",
        image: "ImageElement-image-2K6",
        loaded: "ImageElement-loaded-1V2"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(978), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".SingleImage-moduleImage-ATp {\n  height: 100%;\n}\n@media (min-width: 1024px) {\n.SingleImage-moduleImage-ATp {\n      border-radius: 3px 3px 0 0;\n}\n}\n.SingleImage-moduleImage-ATp .caption-container {\n    margin-bottom: 15px;\n}\n.SingleImage-moduleImageTallPortraitPadded-mnj {\n  padding: 80px 7.1%;\n}\n@media (max-width: 603px) {\n.SingleImage-moduleImageTallPortraitPadded-mnj {\n      padding: 30px 7.1%;\n}\n}\n.SingleImage-paddedContainer-AN9 {\n  display: block;\n  padding: 0 7.1%;\n  text-align: center;\n}\n.SingleImage-modulePortrait-2Lm {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  max-height: calc(100vh - 83px - 100px);\n}\n.SingleImage-fullWidth-2dr {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n}\n@media (min-width: 1024px) {\n.SingleImage-fullWidth-2dr {\n      border-radius: 3px 3px 0 0;\n}\n}\n.SingleImage-fullImage-35Z {\n  margin: 20px auto;\n  max-width: 100%;\n}\n@media (min-width: 1024px) {\n.SingleImage-fullImage-35Z {\n      display: inline-block;\n      max-height: calc(100vh - 83px - 100px);\n      -o-object-fit: contain;\n         object-fit: contain;\n}\n}\n.SingleImage-fullHeight-23R {\n  box-sizing: border-box;\n  margin: 20px 0;\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.SingleImage-noBottomMargin-IjB {\n  margin-bottom: 0;\n}\n.SingleImage-unsafe-2_x {\n  background: #efefef;\n  height: 0;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 55% 0 0;\n  width: calc(100% - 14.2%);\n}\n.SingleImage-alwaysShow-1L2 .project-module__actions,\n.SingleImage-moduleImage-ATp:hover .project-module__actions {\n  display: -webkit-box;\n  display: flex;\n}\n@media (max-width: 1024px) {\n.SingleImage-alwaysShow-1L2 .project-module__actions,\n    .SingleImage-moduleImage-ATp:hover .project-module__actions {\n      display: none;\n}\n}\n", "" ]), 
    t.locals = {
        moduleImage: "SingleImage-moduleImage-ATp",
        moduleImageTallPortraitPadded: "SingleImage-moduleImageTallPortraitPadded-mnj",
        paddedContainer: "SingleImage-paddedContainer-AN9",
        modulePortrait: "SingleImage-modulePortrait-2Lm",
        fullWidth: "SingleImage-fullWidth-2dr",
        fullImage: "SingleImage-fullImage-35Z",
        fullHeight: "SingleImage-fullHeight-23R",
        noBottomMargin: "SingleImage-noBottomMargin-IjB",
        unsafe: "SingleImage-unsafe-2_x",
        alwaysShow: "SingleImage-alwaysShow-1L2"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(979), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Image-root-1tO {\n  position: relative;\n}\n", "" ]), 
    t.locals = {
        root: "Image-root-1tO"
    };
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<script type="text/html" class="js-lightbox-slide-content">'), 
            o.b("\n" + n), o.b('  <div class="lightbox-content--embed">'), o.b("\n" + n), o.s(o.f("is_video", e, t, 1), e, t, 0, 117, 230, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('      <iframe width="'), o.b(o.v(o.f("width", e, t, 0))), o.b('" height="'), 
                o.b(o.v(o.f("height", e, t, 0))), o.b('" src="'), o.b(o.v(o.f("src", e, t, 0))), 
                o.b('" frameborder="0" allowfullscreen></iframe>'), o.b("\n" + n);
            }), e.pop()), o.s(o.f("is_audio", e, t, 1), e, t, 0, 261, 284, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("      "), o.b(o.t(o.f("embed", e, t, 0))), o.b("\n" + n);
            }), e.pop()), o.s(o.f("is_embed", e, t, 1), e, t, 0, 315, 347, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("      "), o.b(o.t(o.f("original_embed", e, t, 0))), o.b("\n" + n);
            }), e.pop()), o.b("  </div>"), o.b("\n" + n), o.b('  <div class="project-item-lightbox__caption js-lightbox-caption" data-id="'), 
            o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b("<\/script>"), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<script type="text/html" class="js-lightbox-slide-content">\n  <div class="lightbox-content--embed">\n    {{#is_video}}\n      <iframe width="{{width}}" height="{{height}}" src="{{src}}" frameborder="0" allowfullscreen></iframe>\n    {{/is_video}}\n    {{#is_audio}}\n      {{{embed}}}\n    {{/is_audio}}\n    {{#is_embed}}\n      {{{original_embed}}}\n    {{/is_embed}}\n  </div>\n  <div class="project-item-lightbox__caption js-lightbox-caption" data-id="{{id}}"></div>\n<\/script>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(980), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Embed-root-3gR {\n  position: relative;\n}\n.Embed-embedIcon-3gI {\n  fill: #fff;\n  height: 62px;\n  margin-bottom: 26px;\n  width: 62px;\n}\n", "" ]), 
    t.locals = {
        root: "Embed-root-3gR",
        embedIcon: "Embed-embedIcon-3gI"
    };
}, function(e, t, n) {
    var o = n(181), r = {
        "_icons/_embedIcon": n(1372).template,
        "project/_modules/_lightbox/_embedOld": n(1373).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="project-module module js-project-module--'), 
            o.b(o.v(o.f("type", e, t, 0))), o.b(" "), o.b(o.v(o.f("type", e, t, 0))), o.b(" project-module-"), 
            o.b(o.v(o.f("type", e, t, 0))), o.s(o.f("can_access", e, t, 1), e, t, 1, 0, 0, "") || o.b(" unsafe"), 
            o.s(o.f("full_bleed", e, t, 1), e, t, 0, 146, 157, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" embed-full");
            }), e.pop()), o.b(' js-project-lightbox-link" data-no-prefetch="true">'), o.b("\n" + n), 
            o.s(o.f("can_access", e, t, 1), e, t, 0, 241, 963, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.s(o.f("shouldGenerateEmbedOverlay", e, t, 1), e, t, 0, 277, 632, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b('    <div class="project-embed-overlay js-project-embed-overlay">'), o.b("\n" + n), 
                    o.b('      <div class="project-embed-icon-container">'), o.b("\n" + n), o.b(o.rp("<_icons/_embedIcon0", e, t, "        ")), 
                    o.b('        <div class="project-embed-overlay-text">'), o.b("\n" + n), o.b("          "), 
                    o.s(o.f("translate", e, t, 1), e, t, 0, 496, 574, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                        n.b("project_embed_overlay_click_to_launch|Click to launch an interactive prototype");
                    }), e.pop()), o.b("\n" + n), o.b("        </div>"), o.b("\n" + n), o.b("      </div>"), 
                    o.b("\n" + n), o.b("    </div>"), o.b("\n" + n);
                }), e.pop()), o.b('    <script type="text/html" class="js-lightbox-slide-content">'), 
                o.b("\n" + n), o.b('      <div class="lightbox-content--embed">'), o.b("\n" + n), 
                o.b(o.rp("<project/_modules/_lightbox/_embedOld1", e, t, "        ")), o.b("      </div>"), 
                o.b("\n" + n), o.b('       <div class="project-item-lightbox__caption js-lightbox-caption" data-id="'), 
                o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b("    <\/script>"), 
                o.b("\n"), o.b("\n" + n), o.b("    "), o.b(o.t(o.f("embed", e, t, 0))), o.b("\n" + n);
            }), e.pop()), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<_icons/_embedIcon0": {
                name: "_icons/_embedIcon",
                partials: {},
                subs: {}
            },
            "<project/_modules/_lightbox/_embedOld1": {
                name: "project/_modules/_lightbox/_embedOld",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<div class="project-module module js-project-module--{{type}} {{type}} project-module-{{type}}{{^can_access}} unsafe{{/can_access}}{{#full_bleed}} embed-full{{/full_bleed}} js-project-lightbox-link" data-no-prefetch="true">\n  {{#can_access}}\n    {{#shouldGenerateEmbedOverlay}}\n    <div class="project-embed-overlay js-project-embed-overlay">\n      <div class="project-embed-icon-container">\n        {{>_icons/_embedIcon}}\n        <div class="project-embed-overlay-text">\n          {{#translate}}project_embed_overlay_click_to_launch|Click to launch an interactive prototype{{/translate}}\n        </div>\n      </div>\n    </div>\n    {{/shouldGenerateEmbedOverlay}}\n    <script type="text/html" class="js-lightbox-slide-content">\n      <div class="lightbox-content--embed">\n        {{>project/_modules/_lightbox/_embedOld}}\n      </div>\n       <div class="project-item-lightbox__caption js-lightbox-caption" data-id="{{id}}"></div>\n    <\/script>\n\n    {{{embed}}}\n  {{/can_access}}\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="icon icon--embed-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.44 62.437"><path d="M51.871 45.192c1.557 1.55 3.018 3 4.465 4.454q2.651 2.67 5.285 5.361a2.13 2.13 0 0 1 .017 3.344q-1.6 1.646-3.225 3.274a2.056 2.056 0 0 1-3.289-.022q-4.653-4.7-9.3-9.414c-.183-.184-.375-.362-.64-.618-.728 1.825-1.4 3.589-2.134 5.33a2.408 2.408 0 0 1-3.836 1.023 2.848 2.848 0 0 1-.743-1.007q-5.833-13.313-11.635-26.645a2.49 2.49 0 0 1 .443-3.01 2.539 2.539 0 0 1 3.126-.356l23.17 10.418c.932.42 1.869.831 2.8 1.25a2.556 2.556 0 0 1-.033 4.771zm7.366 11.394c-.206-.183-.393-.331-.561-.5q-5.035-5.105-10.062-10.218c-1.06-1.079-.834-2.136.565-2.71 1.333-.548 2.673-1.08 4.006-1.625.411-.167.815-.354 1.372-.6-8.326-3.737-16.483-7.4-24.817-11.141 3.7 8.5 7.317 16.791 11 25.226.874-2.211 1.671-4.254 2.492-6.288.573-1.416 1.616-1.619 2.684-.537q5.152 5.213 10.294 10.435c.18.183.37.354.514.492.844-.853 1.64-1.656 2.513-2.535z"/><path d="M27.311.001a27.29 27.29 0 0 1 25.9 19.688 49.544 49.544 0 0 1 1.151 6.637 1.888 1.888 0 0 1-1.622 2.262c-1.151.136-1.892-.559-2.131-1.88-.443-2.445-.6-5.011-1.464-7.3-3.354-8.819-9.779-14.021-19.089-15.236a23.282 23.282 0 0 0-25.53 17.492c-3.521 13.495 5.5 27.291 19.143 29.258.713.1 1.435.142 2.153.222 1.352.15 2.1.98 1.97 2.169-.123 1.113-1.038 1.72-2.343 1.61-9.651-.823-17.033-5.4-21.866-13.846C-5.486 25.245 3.499 4.829 21.207.872c2-.444 4.067-.588 6.104-.871zm-.058 10.519c6.941.373 12.1 3.521 15.223 9.861.648 1.313.35 2.437-.707 2.927s-1.981.028-2.632-1.257c-2.706-5.33-7.032-7.9-12.961-7.645-5.673.242-11.014 5.155-11.854 10.838a13.143 13.143 0 0 0 7.531 14.424c1.221.61 1.675 1.564 1.232 2.587a1.926 1.926 0 0 1-2.791.841 17.031 17.031 0 0 1 3.878-32.229c1.013-.181 2.047-.235 3.082-.348z"/></svg>'), 
            o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="icon icon--embed-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.44 62.437"><path d="M51.871 45.192c1.557 1.55 3.018 3 4.465 4.454q2.651 2.67 5.285 5.361a2.13 2.13 0 0 1 .017 3.344q-1.6 1.646-3.225 3.274a2.056 2.056 0 0 1-3.289-.022q-4.653-4.7-9.3-9.414c-.183-.184-.375-.362-.64-.618-.728 1.825-1.4 3.589-2.134 5.33a2.408 2.408 0 0 1-3.836 1.023 2.848 2.848 0 0 1-.743-1.007q-5.833-13.313-11.635-26.645a2.49 2.49 0 0 1 .443-3.01 2.539 2.539 0 0 1 3.126-.356l23.17 10.418c.932.42 1.869.831 2.8 1.25a2.556 2.556 0 0 1-.033 4.771zm7.366 11.394c-.206-.183-.393-.331-.561-.5q-5.035-5.105-10.062-10.218c-1.06-1.079-.834-2.136.565-2.71 1.333-.548 2.673-1.08 4.006-1.625.411-.167.815-.354 1.372-.6-8.326-3.737-16.483-7.4-24.817-11.141 3.7 8.5 7.317 16.791 11 25.226.874-2.211 1.671-4.254 2.492-6.288.573-1.416 1.616-1.619 2.684-.537q5.152 5.213 10.294 10.435c.18.183.37.354.514.492.844-.853 1.64-1.656 2.513-2.535z"/><path d="M27.311.001a27.29 27.29 0 0 1 25.9 19.688 49.544 49.544 0 0 1 1.151 6.637 1.888 1.888 0 0 1-1.622 2.262c-1.151.136-1.892-.559-2.131-1.88-.443-2.445-.6-5.011-1.464-7.3-3.354-8.819-9.779-14.021-19.089-15.236a23.282 23.282 0 0 0-25.53 17.492c-3.521 13.495 5.5 27.291 19.143 29.258.713.1 1.435.142 2.153.222 1.352.15 2.1.98 1.97 2.169-.123 1.113-1.038 1.72-2.343 1.61-9.651-.823-17.033-5.4-21.866-13.846C-5.486 25.245 3.499 4.829 21.207.872c2-.444 4.067-.588 6.104-.871zm-.058 10.519c6.941.373 12.1 3.521 15.223 9.861.648 1.313.35 2.437-.707 2.927s-1.981.028-2.632-1.257c-2.706-5.33-7.032-7.9-12.961-7.645-5.673.242-11.014 5.155-11.854 10.838a13.143 13.143 0 0 0 7.531 14.424c1.221.61 1.675 1.564 1.232 2.587a1.926 1.926 0 0 1-2.791.841 17.031 17.031 0 0 1 3.878-32.229c1.013-.181 2.047-.235 3.082-.348z"/></svg>', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.s(o.f("is_video", e, t, 1), e, t, 0, 13, 120, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('    <iframe width="'), o.b(o.v(o.f("width", e, t, 0))), o.b('" height="'), 
                o.b(o.v(o.f("height", e, t, 0))), o.b('" src="'), o.b(o.v(o.f("src", e, t, 0))), 
                o.b('" frameborder="0" allowfullscreen></iframe>'), o.b("\n" + n);
            }), e.pop()), o.s(o.f("is_audio", e, t, 1), e, t, 0, 147, 164, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("    "), o.b(o.t(o.f("embed", e, t, 0))), o.b("\n" + n);
            }), e.pop()), o.s(o.f("is_embed", e, t, 1), e, t, 0, 191, 217, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("    "), o.b(o.t(o.f("original_embed", e, t, 0))), o.b("\n" + n);
            }), e.pop()), o.fl();
        },
        partials: {},
        subs: {}
    }, '{{#is_video}}\n    <iframe width="{{width}}" height="{{height}}" src="{{src}}" frameborder="0" allowfullscreen></iframe>\n{{/is_video}}\n{{#is_audio}}\n    {{{embed}}}\n{{/is_audio}}\n{{#is_embed}}\n    {{{original_embed}}}\n{{/is_embed}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "project/_modules/_grid/_dynamic": n(1375).template,
        "project/_modules/_grid/_static": n(1376).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.s(o.f("is_lazy", e, t, 1), e, t, 0, 12, 50, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.rp("<project/_modules/_grid/_dynamic0", e, t, ""));
            }), e.pop()), o.s(o.f("is_lazy", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.rp("<project/_modules/_grid/_static1", e, t, "")), 
            o.fl();
        },
        partials: {
            "<project/_modules/_grid/_dynamic0": {
                name: "project/_modules/_grid/_dynamic",
                partials: {},
                subs: {}
            },
            "<project/_modules/_grid/_static1": {
                name: "project/_modules/_grid/_static",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, "{{#is_lazy}}\n{{>project/_modules/_grid/_dynamic}}\n{{/is_lazy}}\n{{^is_lazy}}\n{{>project/_modules/_grid/_static}}\n{{/is_lazy}}\n", o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="project-module grid--main js-grid-main '), 
            o.s(o.f("full_bleed", e, t, 1), e, t, 0, 66, 102, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("project-module-image-full image-full");
            }), e.pop()), o.s(o.f("can_access", e, t, 1), e, t, 1, 0, 0, "") || o.b(" unsafe"), 
            o.b('">'), o.b("\n" + n), o.s(o.f("can_access", e, t, 1), e, t, 0, 174, 1587, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.s(o.f("components", e, t, 1), e, t, 0, 194, 1569, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b("\n" + n), o.b('      <div class="grid__item-container js-project-lightbox-link js-grid-item-container" data-height="'), 
                    o.b(o.v(o.d("picture.img.height", e, t, 0))), o.b('" data-width="'), o.b(o.v(o.d("picture.img.width", e, t, 0))), 
                    o.b('" data-flex-grow="'), o.b(o.v(o.f("flex_width", e, t, 0))), o.b('" style="width:'), 
                    o.b(o.v(o.f("flex_width", e, t, 0))), o.b("px; flex-grow:"), o.b(o.v(o.f("flex_width", e, t, 0))), 
                    o.b(';">'), o.b("\n" + n), o.b('        <script type="text/html" class="js-lightbox-slide-content">'), 
                    o.b("\n" + n), o.b('          <div class="project-lightbox-image-container">'), 
                    o.b("\n" + n), o.b("            "), o.s(o.f("picture_largest", e, t, 1), e, t, 0, 604, 743, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                        n.b('<img src="'), n.b(n.v(n.d("img.src", e, t, 0))), n.b('" srcset="'), n.s(n.f("sources", e, t, 1), e, t, 0, 647, 669, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(n.v(n.f("srcset", e, t, 0))), n.b(" "), n.b(n.v(n.f("width", e, t, 0))), n.b("w,");
                        }), e.pop()), n.b('" sizes="(max-width: '), n.b(n.v(n.d("img.width", e, t, 0))), 
                        n.b("px) 100vw, "), n.b(n.v(n.d("img.width", e, t, 0))), n.b('px">');
                    }), e.pop()), o.b("\n" + n), o.b('            <div class="project-item-lightbox__actions lightbox-extra">'), 
                    o.b("\n" + n), o.b('              <div class="project-item-lightbox__action js-grid-item-lightbox-add-to-collection" data-id="'), 
                    o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b("            </div>"), 
                    o.b("\n" + n), o.b("          </div>"), o.b("\n" + n), o.b('          <div class="project-item-lightbox__caption js-lightbox-caption" data-id="'), 
                    o.b(o.v(o.f("id", e, t, 0))), o.b('"></div>'), o.b("\n" + n), o.b("        <\/script>"), 
                    o.b("\n" + n), o.b('        <img class="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy" src="'), 
                    o.b(o.v(o.f("IMAGESURL", e, t, 0))), o.b('img/site/blank.png" data-src="'), o.b(o.v(o.d("picture.img.src", e, t, 0))), 
                    o.b('" data-srcset="'), o.s(o.d("picture.sources", e, t, 1), e, t, 0, 1299, 1321, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                        n.b(n.v(n.f("srcset", e, t, 0))), n.b(" "), n.b(n.v(n.f("width", e, t, 0))), n.b("w,");
                    }), e.pop()), o.b('" alt="'), o.b(o.v(o.f("alt_text", e, t, 0))), o.b('">'), o.b("\n" + n), 
                    o.b('        <span class="grid__item-filler" style="padding-bottom:'), o.b(o.v(o.f("flex_height", e, t, 0))), 
                    o.b('%;"></span>'), o.b("\n" + n), o.b('        <div data-id="'), o.b(o.v(o.f("id", e, t, 0))), 
                    o.b('" class="project-module__action js-grid-item-add-to-collection"></div>'), o.b("\n"), 
                    o.b("\n" + n), o.b("      </div>"), o.b("\n" + n);
                }), e.pop());
            }), e.pop()), o.b('  <div class="js-grid-spacer"></div>'), o.b("\n" + n), o.b("</div>"), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<div class="project-module grid--main js-grid-main {{#full_bleed}}project-module-image-full image-full{{/full_bleed}}{{^can_access}} unsafe{{/can_access}}">\n  {{#can_access}}\n    {{#components}}\n\n      <div class="grid__item-container js-project-lightbox-link js-grid-item-container" data-height="{{picture.img.height}}" data-width="{{picture.img.width}}" data-flex-grow="{{flex_width}}" style="width:{{flex_width}}px; flex-grow:{{flex_width}};">\n        <script type="text/html" class="js-lightbox-slide-content">\n          <div class="project-lightbox-image-container">\n            {{#picture_largest}}<img src="{{img.src}}" srcset="{{#sources}}{{srcset}} {{width}}w,{{/sources}}" sizes="(max-width: {{img.width}}px) 100vw, {{img.width}}px">{{/picture_largest}}\n            <div class="project-item-lightbox__actions lightbox-extra">\n              <div class="project-item-lightbox__action js-grid-item-lightbox-add-to-collection" data-id="{{id}}"></div>\n            </div>\n          </div>\n          <div class="project-item-lightbox__caption js-lightbox-caption" data-id="{{id}}"></div>\n        <\/script>\n        <img class="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy" src="{{IMAGESURL}}img/site/blank.png" data-src="{{picture.img.src}}" data-srcset="{{#picture.sources}}{{srcset}} {{width}}w,{{/picture.sources}}" alt="{{alt_text}}">\n        <span class="grid__item-filler" style="padding-bottom:{{flex_height}}%;"></span>\n        <div data-id="{{id}}" class="project-module__action js-grid-item-add-to-collection"></div>\n\n      </div>\n    {{/components}}\n  {{/can_access}}\n  <div class="js-grid-spacer"></div>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="project-module grid--main js-grid-main '), 
            o.s(o.f("full_bleed", e, t, 1), e, t, 0, 66, 102, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("project-module-image-full image-full");
            }), e.pop()), o.s(o.f("can_access", e, t, 1), e, t, 1, 0, 0, "") || o.b(" unsafe"), 
            o.b('">'), o.b("\n" + n), o.s(o.f("can_access", e, t, 1), e, t, 0, 174, 673, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.s(o.f("components", e, t, 1), e, t, 0, 194, 655, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b('      <div class="grid__item-container js-grid-item-container" style="width:'), 
                    o.b(o.v(o.f("flex_width", e, t, 0))), o.b("px; flex-grow:"), o.b(o.v(o.f("flex_width", e, t, 0))), 
                    o.b(';">'), o.b("\n" + n), o.b('        <span class="grid__item-filler" style="padding-bottom:'), 
                    o.b(o.v(o.f("flex_height", e, t, 0))), o.b('%;"></span>'), o.b("\n" + n), o.b('        <img class="grid__item-image" src="'), 
                    o.b(o.v(o.d("picture.img.src", e, t, 0))), o.b('" srcset="'), o.s(o.d("picture.sources", e, t, 1), e, t, 0, 498, 520, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                        n.b(n.v(n.f("srcset", e, t, 0))), n.b(" "), n.b(n.v(n.f("width", e, t, 0))), n.b("w,");
                    }), e.pop()), o.b('" sizes="(max-width: '), o.b(o.v(o.d("picture.img.width", e, t, 0))), 
                    o.b("px) 100vw, "), o.b(o.v(o.d("picture.img.width", e, t, 0))), o.b('px" alt="'), 
                    o.b(o.v(o.f("alt_text", e, t, 0))), o.b('">'), o.b("\n" + n), o.b("      </div>"), 
                    o.b("\n" + n);
                }), e.pop());
            }), e.pop()), o.b('  <div class="grid__item-spacer"></div>'), o.b("\n" + n), o.b("</div>"), 
            o.b("\n"), o.b("\n" + n), o.b('<style type="text/css">'), o.b("\n" + n), o.b("  .grid--main {"), 
            o.b("\n" + n), o.b("    display: flex;"), o.b("\n" + n), o.b("    flex-wrap: wrap;"), 
            o.b("\n" + n), o.b("    margin: -4px;"), o.b("\n" + n), o.b("  }"), o.b("\n"), o.b("\n" + n), 
            o.b("  .grid__item-container {"), o.b("\n" + n), o.b("    box-sizing: content-box !important;"), 
            o.b("\n" + n), o.b("    display: inline-block;"), o.b("\n" + n), o.b("    margin: 4px;"), 
            o.b("\n" + n), o.b("    position: relative;"), o.b("\n" + n), o.b("  }"), o.b("\n"), 
            o.b("\n" + n), o.b("  .grid__item-filler {"), o.b("\n" + n), o.b("    background: #f7f7f7;"), 
            o.b("\n" + n), o.b("    display: block;"), o.b("\n" + n), o.b("  }"), o.b("\n"), 
            o.b("\n" + n), o.b("  .grid__item-image {"), o.b("\n" + n), o.b("    position: absolute;"), 
            o.b("\n" + n), o.b("    top: 0;"), o.b("\n" + n), o.b("    vertical-align: bottom;"), 
            o.b("\n" + n), o.b("    width: 100%;"), o.b("\n" + n), o.b("  }"), o.b("\n"), o.b("\n" + n), 
            o.b("  .grid__item-spacer {"), o.b("\n" + n), o.b("    flex-grow: 9e10;"), o.b("\n" + n), 
            o.b("  }"), o.b("\n" + n), o.b("</style>"), o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<div class="project-module grid--main js-grid-main {{#full_bleed}}project-module-image-full image-full{{/full_bleed}}{{^can_access}} unsafe{{/can_access}}">\n  {{#can_access}}\n    {{#components}}\n      <div class="grid__item-container js-grid-item-container" style="width:{{flex_width}}px; flex-grow:{{flex_width}};">\n        <span class="grid__item-filler" style="padding-bottom:{{flex_height}}%;"></span>\n        <img class="grid__item-image" src="{{picture.img.src}}" srcset="{{#picture.sources}}{{srcset}} {{width}}w,{{/picture.sources}}" sizes="(max-width: {{picture.img.width}}px) 100vw, {{picture.img.width}}px" alt="{{alt_text}}">\n      </div>\n    {{/components}}\n  {{/can_access}}\n  <div class="grid__item-spacer"></div>\n</div>\n\n<style type="text/css">\n  .grid--main {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -4px;\n  }\n\n  .grid__item-container {\n    box-sizing: content-box !important;\n    display: inline-block;\n    margin: 4px;\n    position: relative;\n  }\n\n  .grid__item-filler {\n    background: #f7f7f7;\n    display: block;\n  }\n\n  .grid__item-image {\n    position: absolute;\n    top: 0;\n    vertical-align: bottom;\n    width: 100%;\n  }\n\n  .grid__item-spacer {\n    flex-grow: 9e10;\n  }\n</style>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.s(o.f("can_access", e, t, 1), e, t, 0, 15, 202, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('<div class="project-module js-project-module--'), o.b(o.v(o.f("type", e, t, 0))), 
                o.b(" module project-module-text text align-"), o.b(o.v(o.f("alignment", e, t, 0))), 
                o.b(' module-content-text">'), o.b("\n" + n), o.b('  <div class="main-text">'), 
                o.b("\n" + n), o.b("    "), o.b(o.t(o.f("text", e, t, 0))), o.b("\n" + n), o.b("  </div>"), 
                o.b("\n" + n), o.b("</div>"), o.b("\n" + n);
            }), e.pop()), o.fl();
        },
        partials: {},
        subs: {}
    }, '{{#can_access}}\n<div class="project-module js-project-module--{{type}} module project-module-text text align-{{alignment}} module-content-text">\n  <div class="main-text">\n    {{{text}}}\n  </div>\n</div>\n{{/can_access}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(981), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".project-embed-overlay {\n  width: calc(100% - 7.1% * 2);\n}\n.embed-full .project-embed-overlay {\n    width: 100%;\n}\n.Module-module-35g {\n  position: relative;\n}\n.Module-module-35g .project-module-image-inner-wrap {\n    position: relative;\n}\n.Module-module-35g .project-module-image-full.grid--main {\n    max-width: none;\n    padding: 0;\n    width: calc(100% + 4px * 2);\n}\n.Module-module-35g .embed-dimensions {\n    z-index: 1;\n}\n.Module-module-35g .project-embed-overlay {\n    -webkit-box-align: center;\n            align-items: center;\n    background: rgba(25, 25, 25, 0.26);\n    color: #fff;\n    display: -webkit-box;\n    display: flex;\n    font-size: 24px;\n    font-weight: bold;\n    height: 100%;\n    -webkit-box-pack: center;\n            justify-content: center;\n    position: absolute;\n    z-index: 2;\n}\n.Module-module-35g .project-embed-icon-container {\n    -webkit-box-align: center;\n            align-items: center;\n    background: #191919;\n    border-radius: 10px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column;\n    height: 257px;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 442px;\n}\n.Module-module-35g .icon--embed-icon {\n    fill: #fff;\n    height: 62px;\n    margin-bottom: 26px;\n    width: 62px;\n}\n.Module-module-35g .project-embed-overlay-text {\n    text-align: center;\n    width: 234px;\n}\n", "" ]), 
    t.locals = {
        module: "Module-module-35g"
    };
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_buttons/_link": n(747).template,
        "_icons/_edit": n(1381).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b(o.rp("<lib/_buttons/_link1", e, t, "")), o.fl();
        },
        partials: {
            "<lib/_buttons/_link1": {
                name: "lib/_buttons/_link",
                partials: {
                    "<leadingIconAsset_icons/_edit0": {
                        name: "_icons/_edit",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    attrs: function(e, t, n, o) {
                        n.b('href="'), n.b(n.v(n.d("URLS.edit", e, t, 0))), n.b('"');
                    },
                    containerClasses: function(e, t, n, o) {
                        n.b("edit-project-container hide-phone");
                    },
                    leadingIconAsset: function(e, t, n, o) {
                        n.b(n.rp("<leadingIconAsset_icons/_edit0", e, t, ""));
                    },
                    classes: function(e, t, n, o) {
                        n.b("rf-button--icon-leading");
                    },
                    label: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 284, 316, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("project_edit_button|Edit Project");
                        }), e.pop());
                    }
                }
            }
        },
        subs: {}
    }, '{{<lib/_buttons/_link}}\n  {{$attrs}}href="{{URLS.edit}}"{{/attrs}}\n  {{$containerClasses}}edit-project-container hide-phone{{/containerClasses}}\n  {{$leadingIconAsset}}{{> _icons/_edit}}{{/leadingIconAsset}}\n  {{$classes}}rf-button--icon-leading{{/classes}}\n  {{$label}}{{#translate}}project_edit_button|Edit Project{{/translate}}{{/label}}\n{{/lib/_buttons/_link}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="icon rf-icon rf-icon--edit" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">'), 
            o.b("\n" + n), o.b('  <path d="m1 12l7.375-7.375 3 3-7.375 7.375h-3v-3zm8.875-8.875l2.125-2.125 3 3-2.125 2.125-3-3zm-9.875 12.875h16v-16h-16v16z" fill="none"/>'), 
            o.b("\n" + n), o.b('  <rect y="1.441" x="10.935" height="4.243" transform="matrix(-.7071 .7071 -.7071 -.7071 23.751 -2.7131)" width="3.005"/>'), 
            o.b("\n" + n), o.b('  <polygon points="8.375 4.625 1 12 1 15 4 15 11.375 7.625"/>'), 
            o.b("\n" + n), o.b("</svg>"), o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="icon rf-icon rf-icon--edit" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">\n  <path d="m1 12l7.375-7.375 3 3-7.375 7.375h-3v-3zm8.875-8.875l2.125-2.125 3 3-2.125 2.125-3-3zm-9.875 12.875h16v-16h-16v16z" fill="none"/>\n  <rect y="1.441" x="10.935" height="4.243" transform="matrix(-.7071 .7071 -.7071 -.7071 23.751 -2.7131)" width="3.005"/>\n  <polygon points="8.375 4.625 1 12 1 15 4 15 11.375 7.625"/>\n</svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(982), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".OtherProjects-scrollerMoreProject-b-n {\n  background-color: #191919;\n  height: auto;\n  overflow: hidden;\n  position: relative;\n  white-space: nowrap;\n  width: 100%;\n}\n.OtherProjects-header-23_ {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  left: 50px;\n  line-height: 1;\n  position: absolute;\n  top: 50px;\n}\n.OtherProjects-userAvatar-3j1 {\n  float: left;\n  margin-right: 10px;\n}\n.OtherProjects-userInfo-QfK {\n  display: inline-block;\n  padding-top: 1px;\n}\n.OtherProjects-userName-17J {\n  color: #fff;\n}\n.OtherProjects-actionBtn-1jf {\n  padding-top: 7px;\n}\n.OtherProjects-actionBtn-1jf .rf-button {\n    font-size: 12px;\n    padding: 4px 15px;\n}\n.OtherProjects-editBtn-1Pd .rf-button {\n  padding: 3px 15px;\n}\n.OtherProjects-scrollerProjectWrapper-1lI {\n  cursor: -webkit-grab;\n  cursor: grab;\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 120px 50px 50px;\n  text-align: left;\n  white-space: nowrap;\n}\n.OtherProjects-scrollerProjectCover-Dd6 {\n  display: inline-block;\n  height: 100%;\n  white-space: normal;\n  width: 100%;\n}\n@media (max-width: 1024px) {\n.OtherProjects-scrollerMoreProject-b-n {\n    height: auto;\n}\n.OtherProjects-header-23_ {\n    left: 30px;\n    top: 30px;\n}\n.OtherProjects-scrollerProjectWrapper-1lI {\n    margin-top: 101px;\n    padding: 0 30px 30px;\n}\n}\n@media (max-width: 603px) {\n.OtherProjects-scrollerMoreProject-b-n {\n    height: auto;\n}\n}\n", "" ]), 
    t.locals = {
        scrollerMoreProject: "OtherProjects-scrollerMoreProject-b-n",
        header: "OtherProjects-header-23_",
        userAvatar: "OtherProjects-userAvatar-3j1",
        userInfo: "OtherProjects-userInfo-QfK",
        userName: "OtherProjects-userName-17J",
        actionBtn: "OtherProjects-actionBtn-1jf",
        editBtn: "OtherProjects-editBtn-1Pd",
        scrollerProjectWrapper: "OtherProjects-scrollerProjectWrapper-1lI",
        scrollerProjectCover: "OtherProjects-scrollerProjectCover-Dd6"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(983), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectTags-projectTags-1IC {\n  display: inline-block;\n}\n.ProjectTags-tag-En- {\n  -webkit-box-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  color: #191919;\n  display: -webkit-box;\n  display: flex;\n  float: left;\n  font-size: 10px;\n  font-weight: bold;\n  margin: 0 7px 7px 0;\n  max-width: 100%;\n  text-transform: uppercase;\n}\n.ProjectTags-tag-En-:hover {\n    background-color: #f2f2f2;\n    text-decoration: none;\n}\n.ProjectTags-tagLink-Hh_ {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #191919;\n  display: block;\n  padding: 6px 10px;\n}\n.ProjectTags-tagLink-Hh_:hover {\n    background-color: #f2f2f2;\n    text-decoration: none;\n}\n", "" ]), 
    t.locals = {
        projectTags: "ProjectTags-projectTags-1IC",
        tag: "ProjectTags-tag-En-",
        tagLink: "ProjectTags-tagLink-Hh_"
    };
}, function(e, t, n) {
    var o = n(181), r = {
        "project/_blocks/_blockHeader": n(1387).template,
        "bestyleguide/_avatar": n(423).template,
        "form/textarea": n(757).template,
        "project/_blocks/_footer/_commentsButton": n(1388).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b(o.rp("<project/_blocks/_blockHeader3", e, t, "")), 
            o.fl();
        },
        partials: {
            "<project/_blocks/_blockHeader3": {
                name: "project/_blocks/_blockHeader",
                partials: {
                    "<contentbestyleguide/_avatar0": {
                        name: "bestyleguide/_avatar",
                        partials: {},
                        subs: {
                            avatarClasses: function(e, t, n, o) {
                                n.b("post-comment-avatar js-comment-user-avatar");
                            },
                            src: function(e, t, n, o) {
                                n.b(n.v(n.d("loggedInUser.images.115", e, t, 0)));
                            },
                            srcLarge: function(e, t, n, o) {
                                n.b(n.v(n.d("loggedInUser.images.230", e, t, 0)));
                            }
                        }
                    },
                    "<contentform/textarea1": {
                        name: "form/textarea",
                        partials: {},
                        subs: {}
                    },
                    "<contentproject/_blocks/_footer/_commentsButton2": {
                        name: "project/_blocks/_footer/_commentsButton",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    id: function(e, t, n, o) {
                        n.b("project-block-footer-comments");
                    },
                    content: function(e, t, n, o) {
                        n.s(n.f("loggedIn", e, t, 1), e, t, 0, 112, 958, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('      <div class="comment-post-container js-post-comment-block qa-comment-form cfix">'), 
                            n.b("\n" + o), n.b(n.rp("<contentbestyleguide/_avatar0", e, t, "")), n.b('        <div class="comment-post">'), 
                            n.b("\n" + o), n.b('          <form name="comments_form" method="post" class="form clear cfix relative comments-form" accept-charset="utf-8" id="comments_form" action="/comments/project">'), 
                            n.b("\n" + o), n.s(n.f("body", e, t, 1), e, t, 0, 698, 716, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(n.rp("<contentform/textarea1", e, t, ""));
                            }), e.pop()), n.b('            <div class="comment-link-warning js-comment-warning hide"></div>'), 
                            n.b("\n" + o), n.b(n.rp("<contentproject/_blocks/_footer/_commentsButton2", e, t, "            ")), 
                            n.b("          </form>"), n.b("\n" + o), n.b("        </div>"), n.b("\n" + o), n.b("      </div>"), 
                            n.b("\n" + o);
                        }), e.pop()), n.s(n.f("loggedIn", e, t, 1), e, t, 1, 0, 0, "") || (n.s(n.f("partialUser", e, t, 1), e, t, 0, 1010, 1087, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('      <div class="js-vue-project-comment-activate-prompt-portal"></div>'), 
                            n.b("\n" + o);
                        }), e.pop()), n.s(n.f("partialUser", e, t, 1), e, t, 1, 0, 0, "") || (n.b('      <div class="js-vue-project-comment-signup-prompt-portal"></div>'), 
                        n.b("\n" + o))), n.b("    <div>"), n.b("\n" + o), n.b('      <ul class="js-comments-list comments-list"></ul>'), 
                        n.b("\n" + o), n.b("    </div>"), n.b("\n" + o), n.b('    <div class="js-see-more comments-pagination hide">'), 
                        n.s(n.f("translate", e, t, 1), e, t, 0, 1378, 1421, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("project_see_more_comments|See More Comments");
                        }), e.pop()), n.b(' <span class="beicons-pre beicons-pre-arrow-down"></span></div>'), 
                        n.b("\n" + o);
                    }
                }
            }
        },
        subs: {}
    }, '{{<project/_blocks/_blockHeader}}\n  {{$id}}project-block-footer-comments{{/id}}\n  {{$content}}\n    {{#loggedIn}}\n      <div class="comment-post-container js-post-comment-block qa-comment-form cfix">\n        {{<bestyleguide/_avatar}}\n          {{$avatarClasses}}post-comment-avatar js-comment-user-avatar{{/avatarClasses}}\n          {{$src}}{{loggedInUser.images.115}}{{/src}}\n          {{$srcLarge}}{{loggedInUser.images.230}}{{/srcLarge}}\n        {{/bestyleguide/_avatar}}\n        <div class="comment-post">\n          <form name="comments_form" method="post" class="form clear cfix relative comments-form" accept-charset="utf-8" id="comments_form" action="/comments/project">\n            {{#body}}{{>form/textarea}}{{/body}}\n            <div class="comment-link-warning js-comment-warning hide"></div>\n            {{>project/_blocks/_footer/_commentsButton}}\n          </form>\n        </div>{{!/.comment-post}}\n      </div>{{!/.comment-post-container}}\n    {{/loggedIn}}\n    {{^loggedIn}}\n    {{#partialUser}}\n      <div class="js-vue-project-comment-activate-prompt-portal"></div>\n    {{/partialUser}}\n    {{^partialUser}}\n      <div class="js-vue-project-comment-signup-prompt-portal"></div>\n    {{/partialUser}}\n    {{/loggedIn}}\n    <div>\n      <ul class="js-comments-list comments-list"></ul>\n    </div>\n    <div class="js-see-more comments-pagination hide">{{#translate}}project_see_more_comments|See More Comments{{/translate}} <span class="beicons-pre beicons-pre-arrow-down"></span></div>\n  {{/content}}\n{{/project/_blocks/_blockHeader}}\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div id="'), o.sub("id", e, t, n), o.b('" class="project-block '), 
            o.sub("class", e, t, n), o.b('">'), o.b("\n" + n), o.b("  "), o.s(o.f("title", e, t, 1), e, t, 0, 81, 139, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('<h3 class="project-block-header">'), o.sub("title", e, t, n), o.b("</h3>");
            }), e.pop()), o.b("\n" + n), o.sub("content", e, t, n), o.b("</div>"), o.b("\n"), 
            o.fl();
        },
        partials: {},
        subs: {
            id: function(e, t, n, o) {},
            class: function(e, t, n, o) {},
            title: function(e, t, n, o) {},
            content: function(e, t, n, o) {}
        }
    }, '<div id="{{$id}}{{/id}}" class="project-block {{$class}}{{/class}}">\n  {{#title}}<h3 class="project-block-header">{{$title}}{{/title}}</h3>{{/title}}\n  {{$content}}{{/content}}\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_buttons/_link": n(747).template,
        "lib/_buttons/_spinner": n(1389).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b(o.rp("<lib/_buttons/_link0", e, t, "")), o.b("\n" + n), 
            o.b(o.rp("<lib/_buttons/_spinner1", e, t, "")), o.fl();
        },
        partials: {
            "<lib/_buttons/_link0": {
                name: "lib/_buttons/_link",
                partials: {},
                subs: {
                    label: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 50, 92, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("project_post_comment_button|Post a Comment");
                        }), e.pop());
                    },
                    classes: function(e, t, n, o) {
                        n.b("js-submit rf-button--secondary");
                    }
                }
            },
            "<lib/_buttons/_spinner1": {
                name: "lib/_buttons/_spinner",
                partials: {},
                subs: {
                    label: function(e, t, n, o) {
                        n.s(n.f("translate", e, t, 1), e, t, 0, 252, 290, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("project_post_comment_button|Posting...");
                        }), e.pop());
                    },
                    classes: function(e, t, n, o) {
                        n.b("js-posting hide");
                    }
                }
            }
        },
        subs: {}
    }, "{{<lib/_buttons/_link}}\n  {{$label}}{{#translate}}project_post_comment_button|Post a Comment{{/translate}}{{/label}}\n  {{$classes}}js-submit rf-button--secondary{{/classes}}\n{{/lib/_buttons/_link}}\n\n{{<lib/_buttons/_spinner}}\n  {{$label}}{{#translate}}project_post_comment_button|Posting...{{/translate}}{{/label}}\n  {{$classes}}js-posting hide{{/classes}}\n{{/lib/_buttons/_spinner}}\n", o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "_icons/_spinning-circle": n(1390).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="form-item js-rf-button-container rf-button__container '), 
            o.sub("containerClasses", e, t, n), o.b(' form-button-wrap" '), o.sub("containerAttrs", e, t, n), 
            o.b(">"), o.b("\n" + n), o.b('  <button class="form-button js-rf-button rf-button rf-button--disabled '), 
            o.sub("classes", e, t, n), o.b('"'), o.b("\n" + n), o.b("    "), o.sub("attrs", e, t, n), 
            o.b(">"), o.b("\n" + n), o.b('    <div class="rf-spinner rf-spinner--button">'), 
            o.b("\n" + n), o.b('      <svg class="rf-spinner__spinner rf-spinner__spinner-button" width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'), 
            o.b("\n" + n), o.b(o.rp("<_icons/_spinning-circle0", e, t, "")), o.b("      </svg>"), 
            o.b("\n" + n), o.b("    </div>"), o.b("\n" + n), o.b('    <span class="rf-button__label">'), 
            o.sub("label", e, t, n), o.b("</span>"), o.b("\n" + n), o.b("  </button>"), o.b("\n" + n), 
            o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<_icons/_spinning-circle0": {
                name: "_icons/_spinning-circle",
                partials: {},
                subs: {
                    hex: function(e, t, n, o) {
                        n.b("#fff");
                    }
                }
            }
        },
        subs: {
            containerClasses: function(e, t, n, o) {},
            containerAttrs: function(e, t, n, o) {},
            classes: function(e, t, n, o) {
                n.b("form-button-default");
            },
            attrs: function(e, t, n, o) {},
            label: function(e, t, n, o) {}
        }
    }, '<div class="form-item js-rf-button-container rf-button__container {{$containerClasses}}{{/containerClasses}} form-button-wrap" {{$containerAttrs}}{{/containerAttrs}}>\n  <button class="form-button js-rf-button rf-button rf-button--disabled {{$classes}}form-button-default{{/classes}}"\n    {{$attrs}}{{/attrs}}>\n    <div class="rf-spinner rf-spinner--button">\n      <svg class="rf-spinner__spinner rf-spinner__spinner-button" width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        {{< _icons/_spinning-circle}}\n          {{$hex}}#fff{{/hex}}\n        {{/ _icons/_spinning-circle}}\n      </svg>\n    </div>\n    <span class="rf-button__label">{{$label}}{{/label}}</span>\n  </button>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b("<defs>"), o.b("\n" + n), o.b('  <linearGradient id="linear" x1="0%" y1="0%" x2="65%" y2="0%">'), 
            o.b("\n" + n), o.b('    <stop offset="0%"   stop-color="'), o.sub("hex", e, t, n), 
            o.b('"/>'), o.b("\n" + n), o.b('    <stop offset="100%" stop-color="'), o.sub("hex", e, t, n), 
            o.b('" stop-opacity="0"/>'), o.b("\n" + n), o.b("  </linearGradient>"), o.b("\n" + n), 
            o.b("</defs>"), o.b("\n" + n), o.b('<circle cx="100" cy="100" r="90" fill="transparent" stroke="url(#linear)" stroke-width="20" />'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {
            hex: function(e, t, n, o) {
                n.b("#0057ff");
            }
        }
    }, '{{! BYO SVG container}}\n<defs>\n  <linearGradient id="linear" x1="0%" y1="0%" x2="65%" y2="0%">\n    <stop offset="0%"   stop-color="{{$hex}}#0057ff{{/hex}}"/>\n    <stop offset="100%" stop-color="{{$hex}}#0057ff{{/hex}}" stop-opacity="0"/>\n  </linearGradient>\n</defs>\n<circle cx="100" cy="100" r="90" fill="transparent" stroke="url(#linear)" stroke-width="20" />\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(984), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectComments-root-3Qa .ProjectComments-signUpPrompt-2uN {\n  bottom: 0;\n  box-shadow: none;\n  -webkit-filter: blur(0);\n          filter: blur(0);\n  left: 0;\n  padding: 0;\n  position: relative;\n  top: 0;\n  -webkit-transform: none;\n          transform: none;\n  width: 100%;\n}\n.ProjectComments-childHasFocus-16b .comment-actions {\n  opacity: 1;\n}\n.ProjectComments-childHasFocus-16b .comment-container {\n  overflow: visible;\n}\n.ProjectComments-activateHeader-bsP {\n  font-size: 27px;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 15px;\n}\n.ProjectComments-logo-3oB {\n  fill: #fff;\n  width: 17px;\n}\n.ProjectComments-fullWidthComment-2Q0 .ProjectComments-projectComment-3M6,\n.ProjectComments-fullWidthComment-2Q0 #project-block-footer-comments.project-block {\n  float: none;\n  width: 100%;\n}\n.ProjectComments-projectComment-3M6 {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 3px;\n  box-sizing: border-box;\n  float: left;\n  margin: 0 20px 20px 0;\n  padding: 27px 30px;\n  text-align: left;\n  width: calc(100% - 405px);\n}\n@media (max-width: 1400px) {\n.ProjectComments-projectComment-3M6 {\n      margin-right: 0;\n      width: 100%;\n}\n}\n.ProjectComments-projectComment-3M6 #project-block-footer-comments.project-block {\n    max-width: 100%;\n    width: 100%;\n}\n.ProjectComments-projectComment-3M6 .comment-container,\n  .ProjectComments-projectComment-3M6 .comment-post-container,\n  .ProjectComments-projectComment-3M6 .post-comment-logged-out,\n  .ProjectComments-projectComment-3M6 .project-block-header {\n    max-width: 100%;\n}\n", "" ]), 
    t.locals = {
        root: "ProjectComments-root-3Qa",
        signUpPrompt: "ProjectComments-signUpPrompt-2uN",
        childHasFocus: "ProjectComments-childHasFocus-16b",
        activateHeader: "ProjectComments-activateHeader-bsP",
        logo: "ProjectComments-logo-3oB",
        fullWidthComment: "ProjectComments-fullWidthComment-2Q0",
        projectComment: "ProjectComments-projectComment-3M6"
    };
}, function(e, t, n) {
    "use strict";
    var o = n(985), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".ProjectInfo-projectFooter-3ku {\n  background-color: #fafafa;\n  border-radius: 0 0 3px 3px;\n  box-sizing: border-box;\n  display: inline-block;\n  padding: 90px 100px;\n  text-align: center;\n  width: 100%;\n}\n.ProjectInfo-sideBar-rwv {\n  display: inline-block;\n  max-width: 385px;\n  text-align: left;\n}\n.ProjectInfo-fullWidthInfoBox-mz_ .ProjectInfo-sideBar-rwv {\n    display: block;\n    max-width: none;\n    width: 100%;\n}\n.ProjectInfo-infoBlocks-2hM {\n  background-color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: #696969;\n  display: inline-block;\n  margin-bottom: 20px;\n  padding: 30px;\n  width: 100%;\n}\n.ProjectInfo-profileInfo-2Mm {\n  font-size: 16px;\n}\n.ProjectInfo-projectTags-2fx {\n  padding-bottom: 23px;\n}\n.ProjectInfo-projectName-1E3 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #191919;\n  font-size: 16px;\n  line-height: 1.2;\n  padding-bottom: 14px;\n}\n.ProjectInfo-projectDescription-3_S {\n  font-size: 14px;\n  margin-bottom: 22px;\n  word-wrap: break-word;\n}\n.ProjectInfo-projectStat-mB9 {\n  display: inline-block;\n  font-size: 14px;\n  height: 17px;\n  line-height: 17px;\n  margin-right: 9px;\n}\n.ProjectInfo-projectStat-mB9::before {\n    margin-right: 2px;\n}\n.ProjectInfo-projectPublished-3O_ {\n  color: #959595;\n  font-size: 12px;\n  margin-top: 25px;\n}\n.ProjectInfo-moreToggle-3_Q {\n  color: #696969;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  font-size: 13px;\n  font-weight: bold;\n  margin: 7px 0;\n  width: auto;\n}\n.ProjectInfo-container-1ht {\n  position: relative;\n  z-index: 1;\n}\n@media (min-width: 604px) and (max-width: 1400px) {\n.ProjectInfo-projectFooter-3ku {\n    padding: 34px 42px;\n}\n.ProjectInfo-container-1ht {\n    margin: 0 auto;\n    max-width: 880px;\n}\n.ProjectInfo-sideBar-rwv {\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2;\n    max-width: 100%;\n}\n.ProjectInfo-infoBlocks-2hM {\n    -webkit-column-break-inside: avoid;\n       -moz-column-break-inside: avoid;\n            break-inside: avoid;\n}\n}\n@media (max-width: 603px) {\n.ProjectInfo-projectFooter-3ku {\n    padding: 16px 20px;\n}\n.ProjectInfo-sideBar-rwv {\n    -webkit-column-count: 1;\n       -moz-column-count: 1;\n            column-count: 1;\n    max-width: 100%;\n}\n}\n", "" ]), 
    t.locals = {
        projectFooter: "ProjectInfo-projectFooter-3ku",
        sideBar: "ProjectInfo-sideBar-rwv",
        fullWidthInfoBox: "ProjectInfo-fullWidthInfoBox-mz_",
        infoBlocks: "ProjectInfo-infoBlocks-2hM",
        profileInfo: "ProjectInfo-profileInfo-2Mm",
        projectTags: "ProjectInfo-projectTags-2fx",
        projectName: "ProjectInfo-projectName-1E3",
        projectDescription: "ProjectInfo-projectDescription-3_S",
        projectStat: "ProjectInfo-projectStat-mB9",
        projectPublished: "ProjectInfo-projectPublished-3O_",
        moreToggle: "ProjectInfo-moreToggle-3_Q",
        container: "ProjectInfo-container-1ht"
    };
}, function(e, t, n) {
    var o = n(181), r = {
        "bestyleguide/_tooltip": n(746).template,
        "bestyleguide/_profileItem": n(1396).template,
        "bestyleguide/_projectCover": n(1038).template,
        "_icons/_rotate": n(1397).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<script type="text/html" class="js-lightbox-overlay-slide">'), 
            o.b("\n" + n), o.b('  <div class="lightbox-overlay-slide">'), o.b("\n" + n), o.b('    <div class="js-last-slide last-slide"></div>'), 
            o.b("\n" + n), o.s(o.f("hasOtherProjects", e, t, 1), e, t, 0, 173, 1792, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('      <div class="other-projects">'), o.b("\n" + n), o.b('        <div class="owners">'), 
                o.b("\n" + n), o.b('          <span class="owners__by">'), o.s(o.f("translate", e, t, 1), e, t, 0, 287, 330, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("project_other_projects_by|Other projects by");
                }), e.pop()), o.b("</span>"), o.b("\n" + n), o.b('          <div class="owners__name rf-tooltip--container">'), 
                o.b("\n" + n), o.s(o.f("has_multiple_owners", e, t, 1), e, t, 0, 445, 1244, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b('            <span class="multiple-owners-name">'), o.s(o.f("translate", e, t, 1), e, t, 0, 507, 546, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                        n.b("project_multiple_owners|Multiple Owners");
                    }), e.pop()), o.b("</span>"), o.b("\n" + n), o.b(o.rp("<bestyleguide/_tooltip1", e, t, ""));
                }), e.pop()), o.s(o.f("has_multiple_owners", e, t, 1), e, t, 1, 0, 0, "") || o.s(o.f("owners", e, t, 1), e, t, 0, 1327, 1444, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b('            <a class="owners-link js-mini-profile" data-id="'), o.b(o.v(o.f("id", e, t, 0))), 
                    o.b('" href="'), o.b(o.v(o.f("url", e, t, 0))), o.b('">'), o.b(o.v(o.f("display_name", e, t, 0))), 
                    o.b("</a>"), o.b("\n" + n);
                }), e.pop()), o.b("          </div>"), o.b("\n" + n), o.b("        </div>"), o.b("\n"), 
                o.b("\n" + n), o.b('        <div class="project-covers">'), o.b("\n" + n), o.s(o.f("otherProjects", e, t, 1), e, t, 0, 1589, 1741, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b(n.rp("<bestyleguide/_projectCover2", e, t, ""));
                }), e.pop()), o.b("        </div>"), o.b("\n" + n), o.b("      </div>"), o.b("\n" + n);
            }), e.pop()), o.s(o.f("hasOtherProjects", e, t, 1), e, t, 1, 0, 0, "") || (o.b('    <div class="view-again-container">'), 
            o.b("\n" + n), o.b(o.rp("<_icons/_rotate3", e, t, "      ")), o.b('      <a class="view-again js-view-again">'), 
            o.s(o.f("translate", e, t, 1), e, t, 0, 1961, 1998, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("view_project_again|View project again");
            }), e.pop()), o.b("</a>"), o.b("\n" + n), o.b("    </div>"), o.b("\n" + n)), o.b("  </div>"), 
            o.b("\n" + n), o.b("<\/script>"), o.b("\n"), o.fl();
        },
        partials: {
            "<bestyleguide/_tooltip1": {
                name: "bestyleguide/_tooltip",
                partials: {
                    "<tooltipContentbestyleguide/_profileItem0": {
                        name: "bestyleguide/_profileItem",
                        partials: {},
                        subs: {
                            attr: function(e, t, n, o) {
                                n.b('data-from="lightbox"');
                            },
                            avatarClasses: function(e, t, n, o) {
                                n.b("js-mini-profile");
                            },
                            avatarId: function(e, t, n, o) {
                                n.b(n.v(n.f("id", e, t, 0)));
                            },
                            profileItemClasses: function(e, t, n, o) {
                                n.b("js-mini-profile");
                            }
                        }
                    }
                },
                subs: {
                    tooltipContent: function(e, t, n, o) {
                        n.b('                <div class="rf-multiple-owners-container">'), n.b("\n" + o), 
                        n.s(n.f("owners", e, t, 1), e, t, 0, 730, 1125, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(n.rp("<tooltipContentbestyleguide/_profileItem0", e, t, ""));
                        }), e.pop()), n.b("                </div>"), n.b("\n" + o);
                    }
                }
            },
            "<bestyleguide/_projectCover2": {
                name: "bestyleguide/_projectCover",
                partials: {},
                subs: {
                    attr: function(e, t, n, o) {
                        n.b('data-from="lightbox"');
                    }
                }
            },
            "<_icons/_rotate3": {
                name: "_icons/_rotate",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<script type="text/html" class="js-lightbox-overlay-slide">\n  <div class="lightbox-overlay-slide">\n    <div class="js-last-slide last-slide"></div>\n    {{#hasOtherProjects}}\n      <div class="other-projects">\n        <div class="owners">\n          <span class="owners__by">{{#translate}}project_other_projects_by|Other projects by{{/translate}}</span>\n          <div class="owners__name rf-tooltip--container">\n          {{#has_multiple_owners}}\n            <span class="multiple-owners-name">{{#translate}}project_multiple_owners|Multiple Owners{{/translate}}</span>\n            {{< bestyleguide/_tooltip}}\n              {{$tooltipContent}}\n                <div class="rf-multiple-owners-container">\n                  {{#owners}}\n                    {{<bestyleguide/_profileItem}}\n                      {{$attr}}data-from="lightbox"{{/attr}}\n                      {{$avatarClasses}}js-mini-profile{{/avatarClasses}}\n                      {{$avatarId}}{{id}}{{/avatarId}}\n                      {{$profileItemClasses}}js-mini-profile{{/profileItemClasses}}\n                    {{/bestyleguide/_profileItem}}\n                  {{/owners}}\n                </div>\n              {{/tooltipContent}}\n            {{/ bestyleguide/_tooltip}}\n          {{/has_multiple_owners}}\n          {{^has_multiple_owners}}\n            {{#owners}}\n            <a class="owners-link js-mini-profile" data-id="{{id}}" href="{{url}}">{{display_name}}</a>\n            {{/owners}}\n          {{/has_multiple_owners}}\n          </div>\n        </div>\n\n        <div class="project-covers">\n          {{#otherProjects}}\n            {{<bestyleguide/_projectCover}}\n              {{$attr}}data-from="lightbox"{{/attr}}\n            {{/bestyleguide/_projectCover}}\n          {{/otherProjects}}\n        </div>\n      </div>\n    {{/hasOtherProjects}}\n    {{^hasOtherProjects}}\n    <div class="view-again-container">\n      {{>_icons/_rotate}}\n      <a class="view-again js-view-again">{{#translate}}view_project_again|View project again{{/translate}}</a>\n    </div>\n    {{/hasOtherProjects}}\n  </div>\n<\/script>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "bestyleguide/_avatar": n(423).template,
        "lib/_follow/_link": n(497).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="rf-profile-item js-profile-item '), o.sub("classes", e, t, n), 
            o.b('">'), o.b("\n" + n), o.s(o.f("images", e, t, 1), e, t, 0, 84, 348, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.rp("<bestyleguide/_avatar0", e, t, ""));
            }), e.pop()), o.s(o.f("images", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.rp("<bestyleguide/_avatar1", e, t, "")), 
            o.b('  <div class="rf-profile-item__info">'), o.b("\n" + n), o.b('    <a target="_blank" class="rf-profile-item__name '), 
            o.sub("profileItemClasses", e, t, n), o.b('" href="'), o.b(o.v(o.f("url", e, t, 0))), 
            o.s(o.f("url", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.v(o.d("urls.relative", e, t, 0))), 
            o.b('" data-id="'), o.b(o.v(o.f("id", e, t, 0))), o.b('" '), o.sub("attr", e, t, n), 
            o.b(">"), o.b("\n" + n), o.b("      "), o.s(o.f("display_name", e, t, 1), e, t, 0, 835, 851, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.v(n.f("display_name", e, t, 0)));
            }), e.pop()), o.b("\n" + n), o.b("      "), o.s(o.f("display_name", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.v(o.f("first_name", e, t, 0))), 
            o.b("\n" + n), o.b("    </a>"), o.b("\n" + n), o.s(o.f("location", e, t, 1), e, t, 0, 950, 1089, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('      <a target="_blank" class="rf-profile-item__location beicons-pre beicons-pre-location" href="'), 
                o.b(o.v(o.f("location_link", e, t, 0))), o.b('">'), o.b(o.v(o.f("location", e, t, 0))), 
                o.b("</a>"), o.b("\n" + n);
            }), e.pop()), o.b("  </div>"), o.b("\n" + n), o.sub("removeLink", e, t, n), o.s(o.f("is_logged_in_user", e, t, 1), e, t, 1, 0, 0, "") || o.s(o.f("is_profile_owner", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.rp("<lib/_follow/_link2", e, t, "")), 
            o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<bestyleguide/_avatar0": {
                name: "bestyleguide/_avatar",
                partials: {},
                subs: {
                    avatarClasses: function(e, t, n, o) {},
                    src: function(e, t, n, o) {
                        n.b(n.v(n.d("images.50", e, t, 0)));
                    },
                    srcLarge: function(e, t, n, o) {
                        n.b(n.v(n.d("images.115", e, t, 0)));
                    },
                    avatarUrl: function(e, t, n, o) {
                        n.b(n.v(n.f("url", e, t, 0)));
                    },
                    avatarId: function(e, t, n, o) {}
                }
            },
            "<bestyleguide/_avatar1": {
                name: "bestyleguide/_avatar",
                partials: {},
                subs: {
                    avatarClasses: function(e, t, n, o) {},
                    avatarId: function(e, t, n, o) {
                        n.b(n.v(n.f("id", e, t, 0)));
                    },
                    src: function(e, t, n, o) {
                        n.b("/assets/img/profile/no-image-115.png");
                    }
                }
            },
            "<lib/_follow/_link2": {
                name: "lib/_follow/_link",
                partials: {},
                subs: {
                    type: function(e, t, n, o) {
                        n.b("user");
                    }
                }
            }
        },
        subs: {
            classes: function(e, t, n, o) {},
            profileItemClasses: function(e, t, n, o) {},
            attr: function(e, t, n, o) {},
            removeLink: function(e, t, n, o) {}
        }
    }, '<div class="rf-profile-item js-profile-item {{$classes}}{{/classes}}">\n  {{#images}}\n    {{<bestyleguide/_avatar}}\n      {{$avatarClasses}}{{/avatarClasses}}\n      {{$src}}{{images.50}}{{/src}}\n      {{$srcLarge}}{{images.115}}{{/srcLarge}}\n      {{$avatarUrl}}{{url}}{{/avatarUrl}}\n      {{$avatarId}}{{/avatarId}}\n    {{/bestyleguide/_avatar}}\n  {{/images}}\n  {{^images}}\n    {{<bestyleguide/_avatar}}\n      {{$avatarClasses}}{{/avatarClasses}}\n      {{$avatarId}}{{id}}{{/avatarId}}\n      {{$src}}/assets/img/profile/no-image-115.png{{/src}}\n    {{/bestyleguide/_avatar}}\n  {{/images}}\n  <div class="rf-profile-item__info">\n    <a target="_blank" class="rf-profile-item__name {{$profileItemClasses}}{{/profileItemClasses}}" href="{{url}}{{^url}}{{urls.relative}}{{/url}}" data-id="{{id}}" {{$attr}}{{/attr}}>\n      {{#display_name}}{{display_name}}{{/display_name}}\n      {{^display_name}}{{first_name}}{{/display_name}}\n    </a>\n    {{#location}}\n      <a target="_blank" class="rf-profile-item__location beicons-pre beicons-pre-location" href="{{location_link}}">{{location}}</a>\n    {{/location}}\n  </div>\n  {{$removeLink}}{{/removeLink}}\n  {{^is_logged_in_user}}\n    {{^is_profile_owner}}\n      {{<lib/_follow/_link}}\n        {{$type}}user{{/type}}\n      {{/lib/_follow/_link}}\n    {{/is_profile_owner}}\n  {{/is_logged_in_user}}\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rotate-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 20" xml:space="preserve">'), 
            o.b("\n" + n), o.b('  <path d="M16,0c0.2,0,0.3,0,0.5,0.1c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.3,0.4s0.1,0.3,0.1,0.5v6.2c0,0.2,0,0.3-0.1,0.5'), 
            o.b("\n" + n), o.b("      S17,8.3,16.9,8.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.5,0.1H9.7c-0.2,0-0.3,0-0.5-0.1C9.1,8.6,8.9,8.5,8.8,8.4"), 
            o.b("\n" + n), o.b("      C8.7,8.3,8.6,8.1,8.6,8S8.5,7.7,8.5,7.5c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1"), 
            o.b("\n" + n), o.b("      h3.2C12.6,6,12.3,5.8,12,5.6c-0.3-0.2-0.7-0.4-1-0.5c-0.4-0.1-0.7-0.3-1.1-0.3C9.5,4.6,9.1,4.6,8.8,4.6c-0.9,0-1.7,0.2-2.4,0.5"), 
            o.b("\n" + n), o.b("      s-1.4,0.8-2,1.3s-1,1.2-1.3,2C2.7,9.2,2.5,10,2.5,10.9s0.2,1.7,0.5,2.4s0.8,1.4,1.3,2s1.2,1,2,1.3c0.8,0.3,1.6,0.5,2.4,0.5"), 
            o.b("\n" + n), o.b("      c0.5,0,1-0.1,1.5-0.2s1-0.3,1.4-0.5c0.4-0.2,0.8-0.5,1.2-0.8s0.7-0.7,1-1.1c0.1-0.1,0.2-0.3,0.4-0.3c0.1-0.1,0.3-0.1,0.4-0.2"), 
            o.b("\n" + n), o.b("      c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.2,0.3,0.4c0.1,0.1,0.1,0.3,0.2,0.4s0,0.3,0,0.5c0,0.2-0.1,0.3-0.2,0.5"), 
            o.b("\n" + n), o.b("      c-0.4,0.6-0.9,1.1-1.4,1.6c-0.5,0.5-1.1,0.8-1.7,1.2c-0.6,0.3-1.3,0.6-1.9,0.7s-1.4,0.3-2.1,0.3c-1.2,0-2.3-0.2-3.4-0.7"), 
            o.b("\n" + n), o.b("      c-1.1-0.5-2-1.1-2.8-1.9c-0.8-0.8-1.4-1.7-1.9-2.8C0.2,13.2,0,12.1,0,10.9c0-1.2,0.2-2.3,0.7-3.4c0.5-1.1,1.1-2,1.9-2.8"), 
            o.b("\n" + n), o.b("      c0.8-0.8,1.7-1.4,2.8-1.9c1.1-0.5,2.2-0.7,3.4-0.7c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,1.1,0.3,1.6,0.5c0.5,0.2,1,0.5,1.4,0.8"), 
            o.b("\n" + n), o.b('      c0.5,0.3,0.9,0.6,1.3,1h0V1.2c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3C15.6,0,15.8,0,16,0z"/>'), 
            o.b("\n" + n), o.b("</svg>"), o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rotate-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 20" xml:space="preserve">\n  <path d="M16,0c0.2,0,0.3,0,0.5,0.1c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.3,0.4s0.1,0.3,0.1,0.5v6.2c0,0.2,0,0.3-0.1,0.5\n      S17,8.3,16.9,8.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.5,0.1H9.7c-0.2,0-0.3,0-0.5-0.1C9.1,8.6,8.9,8.5,8.8,8.4\n      C8.7,8.3,8.6,8.1,8.6,8S8.5,7.7,8.5,7.5c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1\n      h3.2C12.6,6,12.3,5.8,12,5.6c-0.3-0.2-0.7-0.4-1-0.5c-0.4-0.1-0.7-0.3-1.1-0.3C9.5,4.6,9.1,4.6,8.8,4.6c-0.9,0-1.7,0.2-2.4,0.5\n      s-1.4,0.8-2,1.3s-1,1.2-1.3,2C2.7,9.2,2.5,10,2.5,10.9s0.2,1.7,0.5,2.4s0.8,1.4,1.3,2s1.2,1,2,1.3c0.8,0.3,1.6,0.5,2.4,0.5\n      c0.5,0,1-0.1,1.5-0.2s1-0.3,1.4-0.5c0.4-0.2,0.8-0.5,1.2-0.8s0.7-0.7,1-1.1c0.1-0.1,0.2-0.3,0.4-0.3c0.1-0.1,0.3-0.1,0.4-0.2\n      c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.2,0.3,0.4c0.1,0.1,0.1,0.3,0.2,0.4s0,0.3,0,0.5c0,0.2-0.1,0.3-0.2,0.5\n      c-0.4,0.6-0.9,1.1-1.4,1.6c-0.5,0.5-1.1,0.8-1.7,1.2c-0.6,0.3-1.3,0.6-1.9,0.7s-1.4,0.3-2.1,0.3c-1.2,0-2.3-0.2-3.4-0.7\n      c-1.1-0.5-2-1.1-2.8-1.9c-0.8-0.8-1.4-1.7-1.9-2.8C0.2,13.2,0,12.1,0,10.9c0-1.2,0.2-2.3,0.7-3.4c0.5-1.1,1.1-2,1.9-2.8\n      c0.8-0.8,1.7-1.4,2.8-1.9c1.1-0.5,2.2-0.7,3.4-0.7c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,1.1,0.3,1.6,0.5c0.5,0.2,1,0.5,1.4,0.8\n      c0.5,0.3,0.9,0.6,1.3,1h0V1.2c0-0.2,0-0.3,0.1-0.5s0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3C15.6,0,15.8,0,16,0z"/>\n</svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(986), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".Project-rf-button__container-VoN {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n}\n.Project-rf-button__container-VoN.Project-form-item-2D8 {\n    margin: 0;\n}\n.Project-rf-button__container-VoN .Project-rf-icon--share-1g4,\n  .Project-rf-button__container-VoN .Project-rf-icon--edit-X-p,\n  .Project-rf-button__container-VoN .Project-rf-icon--teams-3m7,\n  .Project-rf-button__container-VoN .Project-rf-icon--clone-project-2RH {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n}\n.Project-rf-button__container-VoN.Project-rf-button__container--message-3YH .Project-rf-button__icon-container-3q3 {\n    margin-left: 2px;\n}\n.Project-rf-button__container-VoN.Project-rf-button__container--appreciate-v5A .Project-rf-button__icon-container--leading-2g- {\n    margin-bottom: -1px;\n    margin-top: 1px;\n}\n.Project-rf-button-2Ie {\n  background-color: #0057ff;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 50px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.25;\n  padding: 6px 15px 8px;\n  text-shadow: none;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-property: background, color, border;\n  transition-property: background, color, border;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: top;\n}\n.Project-rf-button-2Ie:hover {\n    background-color: #003ecb;\n    background-image: none;\n    text-decoration: none;\n}\n.Project-rf-button-2Ie:active {\n    background-color: #002f9a;\n    background-image: none;\n    box-shadow: none;\n}\n.Project-rf-button-2Ie.Project-hide-1UX {\n    display: none;\n}\n.Project-rf-button__label-zNl,\n.Project-rf-button__icon-container-3q3 {\n  vertical-align: inherit;\n}\n.Project-rf-button__label-zNl {\n  color: inherit;\n  display: inline-block;\n}\n.Project-rf-button__icon-container-3q3 {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n}\n.Project-rf-button__icon-container-3q3 svg {\n    fill: #fff;\n    height: 100%;\n    width: 100%;\n}\n.Project-rf-button__icon-container--leading-2g- {\n  margin-left: -4px;\n  margin-right: 6px;\n}\n.Project-rf-button__icon-container--leading-2g- .Project-rf-icon--triangle-eb7 {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.Project-rf-button__icon-container--trailing-T0b {\n  margin-left: 6px;\n  margin-right: -4px;\n}\n.Project-rf-button-2Ie:not(.Project-rf-button--icon-leading-2cs) .Project-rf-button__icon-container--leading-2g- {\n  display: none;\n}\n.Project-rf-button-2Ie:not(.Project-rf-button--icon-trailing-1GJ) .Project-rf-button__icon-container--trailing-T0b {\n  display: none;\n}\n.Project-rf-button--icon-only-QAy.Project-rf-button-2Ie {\n  padding-left: 17px;\n  padding-right: 17px;\n}\n.Project-rf-button--icon-only-QAy .Project-rf-button__label-zNl {\n  display: none;\n}\n.Project-rf-button--icon-only-QAy .Project-rf-button__icon-container-3q3 {\n  margin: 0;\n}\n.Project-rf-button--icon-only-QAy .Project-rf-button__icon-container-3q3.Project-rf-button__icon-container--leading-2g- {\n  display: block;\n  margin: 0 -5px;\n}\n.Project-rf-button-2Ie.Project-rf-button--icon-with-arrow-1lF .Project-rf-button__icon-container--leading-2g- {\n  display: inline-block;\n}\n.Project-rf-button-2Ie.Project-rf-button--icon-with-arrow-1lF .Project-rf-button__icon-container--trailing-T0b {\n  margin-left: 6px;\n  margin-right: -7px;\n}\n.Project-rf-button-2Ie.Project-rf-button--icon-with-arrow-1lF .Project-rf-button__icon-container--trailing-T0b .Project-rf-icon--triangle-eb7 {\n    margin-top: 1px;\n}\n.Project-rf-button-2Ie.Project-rf-button--icon-with-arrow-1lF .Project-rf-button__label-zNl {\n  display: none;\n}\n.Project-rf-button--icon-dropdown-1SR .Project-rf-button__icon-container-3q3.Project-rf-button__icon-container--trailing-T0b,\n.Project-rf-button-2Ie.Project-rf-button--icon-with-arrow-1lF .Project-rf-button__icon-container-3q3.Project-rf-button__icon-container--trailing-T0b {\n  display: inline-block;\n  padding-left: 3px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.Project-rf-button-2Ie.Project-rf-button--small-3Rj {\n  font-size: 12px;\n  padding: 4px 15px;\n}\n.Project-rf-button-2Ie.Project-rf-button--small-3Rj .Project-rf-button__icon-container-3q3 {\n    height: 15px;\n    width: 15px;\n}\n.Project-rf-button-2Ie.Project-rf-button--small-3Rj.Project-rf-button--inline-2ol {\n    padding-left: 2px;\n    padding-right: 2px;\n}\n.Project-rf-button-2Ie.Project-rf-button--large-quq {\n  padding: 7px 18px 8px;\n}\n.Project-rf-button-2Ie.Project-rf-button--huge-pqz {\n  font-size: 18px;\n  padding: 9px 22px 11px;\n}\n.Project-rf-button-2Ie.Project-rf-button--huge-pqz .Project-rf-button__icon-container-3q3 {\n    height: 22px;\n    width: 22px;\n}\n.Project-rf-button--secondary-1sT {\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #e8e8e8;\n  color: #191919;\n  font-size: 14px;\n}\n.Project-rf-button--secondary-1sT:hover {\n    background-color: #f1f1f1;\n}\n.Project-rf-button--secondary-1sT:active {\n    background-color: #e4e4e4;\n}\n.Project-rf-button--secondary-1sT .Project-rf-button__icon-container-3q3 svg {\n    fill: #444444;\n}\n.Project-rf-button--tertiary-34i {\n  background-color: #04ac00;\n}\n.Project-rf-button--tertiary-34i:hover {\n    background-color: #018a00;\n}\n.Project-rf-button--tertiary-34i:active {\n    background-color: #026700;\n}\n.Project-rf-button--danger-44g {\n  background-color: #d00;\n  color: #fff;\n}\n.Project-rf-button--danger-44g:hover {\n    background-color: #aa0000;\n}\n.Project-rf-button--danger-44g:active {\n    background-color: #910000;\n}\n.Project-rf-button--inline-2ol {\n  background: transparent;\n  background-color: transparent;\n  border-color: transparent;\n  color: #0057ff;\n  font-size: 12px;\n  padding: 7px 10px;\n  text-shadow: none;\n}\n.Project-rf-button--inline-2ol:hover {\n    background: transparent;\n    background-color: transparent;\n    border-color: transparent;\n    text-decoration: underline;\n}\n.Project-rf-button--inline-2ol:active {\n    box-shadow: none;\n}\n.Project-rf-button--disabled-zSS {\n  background-color: #e8e8e8;\n  cursor: default;\n  pointer-events: none;\n}\n.Project-rf-button--disabled-zSS .Project-rf-button__label-zNl {\n    color: #fff;\n}\n.Project-rf-button__container--follow-3bw .Project-rf-button--following-3Ei,\n.Project-rf-button__container--follow-3bw .Project-rf-button--unfollow-2ve,\n.Project-rf-button__container--follow-3bw .Project-rf-button__label--following-1l0,\n.Project-rf-button__container--follow-3bw .Project-rf-button__label--unfollow-35I {\n  display: none;\n}\n.Project-rf-button__container--follow-3bw.Project-following-2N6 .Project-rf-button--following-3Ei,\n.Project-rf-button__container--follow-3bw.Project-following-2N6 .Project-rf-button__label--following-1l0,\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6 .Project-rf-button--following-3Ei,\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6 .Project-rf-button__label--following-1l0 {\n  display: block;\n}\n.Project-rf-button__container--follow-3bw.Project-following-2N6 .Project-rf-button--follow-1I-,\n.Project-rf-button__container--follow-3bw.Project-following-2N6 .Project-rf-button__label--follow-2Ep,\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6 .Project-rf-button--follow-1I-,\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6 .Project-rf-button__label--follow-2Ep {\n  display: none;\n}\n.Project-no-has-touch-28M .Project-rf-button__container--follow-3bw.Project-following-2N6:hover .Project-rf-button--unfollow-2ve,\n.Project-no-has-touch-28M .Project-rf-button__container--follow-3bw.Project-following-2N6:hover .Project-rf-button__label--unfollow-35I, .Project-no-has-touch-28M\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6:hover .Project-rf-button--unfollow-2ve,\n.Project-no-has-touch-28M\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6:hover .Project-rf-button__label--unfollow-35I {\n  display: block;\n}\n.Project-no-has-touch-28M .Project-rf-button__container--follow-3bw.Project-following-2N6:hover .Project-rf-button--following-3Ei,\n.Project-no-has-touch-28M .Project-rf-button__container--follow-3bw.Project-following-2N6:hover .Project-rf-button-label--following-uqk, .Project-no-has-touch-28M\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6:hover .Project-rf-button--following-3Ei,\n.Project-no-has-touch-28M\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6:hover .Project-rf-button-label--following-uqk {\n  display: none;\n}\n.Project-no-has-touch-28M .Project-rf-button__container--follow-3bw.Project-following-2N6.Project-following-hold-1WB:hover .Project-rf-button--unfollow-2ve,\n.Project-no-has-touch-28M .Project-rf-button__container--follow-3bw.Project-following-2N6.Project-following-hold-1WB:hover .Project-rf-button__label--unfollow-35I, .Project-no-has-touch-28M\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6.Project-following-hold-1WB:hover .Project-rf-button--unfollow-2ve,\n.Project-no-has-touch-28M\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6.Project-following-hold-1WB:hover .Project-rf-button__label--unfollow-35I {\n  display: none;\n}\n.Project-no-has-touch-28M .Project-rf-button__container--follow-3bw.Project-following-2N6.Project-following-hold-1WB:hover .Project-rf-button--following-3Ei,\n.Project-no-has-touch-28M .Project-rf-button__container--follow-3bw.Project-following-2N6.Project-following-hold-1WB:hover .Project-rf-button__label--following-1l0, .Project-no-has-touch-28M\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6.Project-following-hold-1WB:hover .Project-rf-button--following-3Ei,\n.Project-no-has-touch-28M\n.Project-rf-button__container--follow-3bw .Project-rf-button-2Ie.Project-following-2N6.Project-following-hold-1WB:hover .Project-rf-button__label--following-1l0 {\n  display: block;\n}\n.Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button-2Ie,\n.Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button--secondary-1sT,\n.Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button--danger-44g {\n  background-color: transparent;\n  background-image: none;\n  border-color: transparent;\n  color: #0057ff;\n  padding-left: 0;\n  padding-right: 0;\n  text-shadow: none;\n}\n.Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button-2Ie:hover,\n  .Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button--secondary-1sT:hover,\n  .Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button--danger-44g:hover {\n    background-color: transparent;\n    color: #0057ff;\n    text-shadow: none;\n}\n.Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button-2Ie:active,\n  .Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button--secondary-1sT:active,\n  .Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN > .Project-rf-button--danger-44g:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: #0057ff;\n}\n.Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN .Project-rf-button--follow-1I- .Project-rf-button__label-zNl::before {\n  color: inherit;\n  content: '+ ';\n}\n.Project-rf-button__container--follow-3bw.Project-rf-button__container--follow-link-jtB.Project-rf-button__container-VoN .Project-rf-button--unfollow-2ve .Project-rf-button__label-zNl::before {\n  color: inherit;\n  content: '- ';\n}\n.Project-dark-background-2al .Project-rf-button-2Ie {\n  border-color: #191919;\n}\n.Project-rf-button__container--follow-3bw:not(.Project-rf-button__container--follow-link-jtB) .Project-rf-button--danger-44g:hover, .Project-rf-button__container--follow-3bw:not(.Project-rf-button__container--follow-link-jtB) .Project-rf-button--danger-44g:active {\n  background-color: #d00;\n}\nbody.Project-project-editor-3N_ button.Project-btn-primary-bI0, body.Project-project-editor-3N_ button.Project-btn-secondary-33I, body.Project-project-editor-3N_ button.Project-btn-tertiary-vFG, body.Project-project-editor-3N_ button.Project-btn-action-34k {\n  background-color: #0057ff;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 50px;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.25;\n  padding: 6px 15px 8px;\n  text-shadow: none;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-property: background, color, border;\n  transition-property: background, color, border;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: top;\n  display: inline-block;\n}\nbody.Project-project-editor-3N_ button.Project-btn-primary-bI0:hover, body.Project-project-editor-3N_ button.Project-btn-secondary-33I:hover, body.Project-project-editor-3N_ button.Project-btn-tertiary-vFG:hover, body.Project-project-editor-3N_ button.Project-btn-action-34k:hover {\n    background-color: #003ecb;\n    background-image: none;\n    text-decoration: none;\n}\nbody.Project-project-editor-3N_ button.Project-btn-primary-bI0:active, body.Project-project-editor-3N_ button.Project-btn-secondary-33I:active, body.Project-project-editor-3N_ button.Project-btn-tertiary-vFG:active, body.Project-project-editor-3N_ button.Project-btn-action-34k:active {\n    background-color: #002f9a;\n    background-image: none;\n    box-shadow: none;\n}\nbody.Project-project-editor-3N_ button.Project-btn-primary-bI0.Project-hide-1UX, body.Project-project-editor-3N_ button.Project-btn-secondary-33I.Project-hide-1UX, body.Project-project-editor-3N_ button.Project-btn-tertiary-vFG.Project-hide-1UX, body.Project-project-editor-3N_ button.Project-btn-action-34k.Project-hide-1UX {\n    display: none;\n}\nbody.Project-project-editor-3N_ button.Project-btn-tertiary-vFG, body.Project-project-editor-3N_ button.Project-btn-secondary-33I {\n  background: transparent;\n  background-color: transparent;\n  border-color: transparent;\n  color: #0057ff;\n  font-size: 12px;\n  padding: 7px 10px;\n  text-shadow: none;\n}\nbody.Project-project-editor-3N_ button.Project-btn-tertiary-vFG:hover, body.Project-project-editor-3N_ button.Project-btn-secondary-33I:hover {\n    background: transparent;\n    background-color: transparent;\n    border-color: transparent;\n    text-decoration: underline;\n}\nbody.Project-project-editor-3N_ button.Project-btn-tertiary-vFG:active, body.Project-project-editor-3N_ button.Project-btn-secondary-33I:active {\n    box-shadow: none;\n}\nbody.Project-project-editor-3N_ button.Project-btn-minor-2-K {\n  color: #696969;\n}\nbody.Project-project-editor-3N_ button.Project-btn-primary-bI0[disabled] {\n  background-color: #e8e8e8;\n}\nbody.Project-project-editor-3N_ button.Project-btn-action-34k {\n  background-color: #04ac00;\n}\nbody.Project-project-editor-3N_ button.Project-btn-action-34k:hover {\n    background-color: #018a00;\n}\nbody.Project-project-editor-3N_ button.Project-btn-action-34k:active {\n    background-color: #026700;\n}\nbody.Project-project-editor-3N_ .Project-module-edit-bar-1cD button.Project-btn-secondary-33I {\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #e8e8e8;\n  color: #191919;\n  font-size: 14px;\n}\nbody.Project-project-editor-3N_ .Project-module-edit-bar-1cD button.Project-btn-secondary-33I:hover {\n    background-color: #f1f1f1;\n}\nbody.Project-project-editor-3N_ .Project-module-edit-bar-1cD button.Project-btn-secondary-33I:active {\n    background-color: #e4e4e4;\n}\nbody.Project-project-editor-3N_ .Project-module-edit-bar-1cD button.Project-btn-secondary-33I .Project-rf-button__icon-container-3q3 svg {\n    fill: #444444;\n}\n.Project-project-Lsj {\n  margin-top: 83px;\n}\n@media (min-width: 1025px) {\n.Project-project-Lsj {\n      margin-left: auto;\n      margin-right: auto;\n}\n.Project-project-Lsj.Project-fullPage-2z2 .Project-userActions-1aq {\n        top: 70px;\n}\n.Project-project-Lsj.Project-fullPage-2z2 .Project-userActions-1aq.Project-userActionsWithTools-2Vg {\n          top: 143px;\n}\n}\n@media (max-width: 1024px) {\n.Project-project-Lsj .Project-userActions-1aq {\n      top: -15px;\n}\n}\n@media (min-width: 1025px) {\n.Project-project-Lsj .Project-userActions-1aq {\n      margin-right: -50px;\n      position: -webkit-sticky;\n      position: sticky;\n      top: 40px;\n      -webkit-transform: translateX(20px);\n              transform: translateX(20px);\n      -webkit-transition: opacity 0.15s linear;\n      transition: opacity 0.15s linear;\n      will-change: opacity;\n}\n.Project-project-Lsj .Project-userActions-1aq.Project-userActionsWithTools-2Vg {\n        margin-left: 25px;\n        top: 83px;\n}\n.Project-project-Lsj .Project-userActions-1aq.Project-onLock-XEI {\n        top: 83px;\n}\n.Project-project-Lsj .Project-userActions-1aq.Project-onLock-XEI.Project-fullPageUserActions-3dt {\n          top: 143px;\n}\n}\n.Project-project-Lsj .Project-userActions-1aq .Project-toolsSidebarAppreciateThumb-2j6 {\n    height: 15px;\n    width: 16px;\n}\n.Project-project-Lsj .Project-userActions-1aq .Project-toolsSidebarAppreciate-2EA {\n    height: 45px;\n    width: 45px;\n}\n@media (max-width: 1024px) {\n.Project-project-Lsj .Project-userActions-1aq .Project-toolsSidebarAppreciate-2EA {\n        display: none;\n}\n}\n.Project-project-Lsj .Project-stickyAppreciateContainer-neq {\n    bottom: 10px;\n}\n.Project-project-Lsj .Project-stickyAppreciateContainer-neq.Project-appreciateSticky-2Nc {\n      bottom: 0;\n}\n.Project-project-Lsj {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding-bottom: 70px;\n  position: relative;\n  width: 100%;\n  /**\n  * overriding project/page.css\n  */\n}\n#site-content .Project-project-Lsj {\n    text-align: left;\n}\n@media (min-width: 1025px) {\n.Project-project-Lsj {\n      max-width: 1400px;\n      width: calc(100% - 400px);\n}\n.Project-project-Lsj.Project-fullPage-2z2 {\n        top: 0;\n}\n}\n@media (min-width: 1025px) and (max-width: 1870px) {\n.Project-project-Lsj {\n      width: calc(100% - 190px);\n}\n}\n@media (min-width: 1025px) {\n.Project-narrowProject-32m {\n    max-width: 740px;\n}\n}\n.Project-admin-1Hu {\n  max-width: 1670px;\n}\n.Project-admin-1Hu.Project-narrowProject-32m {\n    max-width: 1010px;\n}\n.Project-wrapper-3t4 {\n  position: relative;\n  z-index: 1;\n}\n.Project-admin-1Hu .Project-wrapper-3t4::after {\n  clear: both;\n  content: '';\n  display: block;\n}\n.Project-adminSidebar-S5P {\n  display: none;\n  float: left;\n  width: 270px;\n}\n@media (min-width: 1025px) {\n.Project-adminSidebar-S5P {\n      display: block;\n}\n}\n.Project-sidebar-2VP {\n  z-index: 4;\n}\n@media (max-width: 1024px) {\n.Project-sidebar-2VP {\n      position: relative;\n      top: -44px;\n}\n}\n@media (min-width: 1025px) {\n.Project-sidebar-2VP {\n      display: block;\n      float: right;\n      height: 100%;\n      position: absolute;\n      right: 0;\n}\n}\n.Project-main-2co {\n  cursor: default;\n  z-index: 3;\n}\n@media (min-width: 1025px) {\n.Project-main-2co {\n      width: 100%;\n}\n.Project-admin-1Hu .Project-main-2co {\n        float: left;\n        width: calc(100% - 270px);\n}\n}\n.Project-topElement-bnH {\n  background: #fff;\n  box-sizing: border-box;\n  color: #191919;\n  display: -webkit-box;\n  display: flex;\n  height: 83px;\n  padding: 20px;\n  position: absolute;\n  top: -83px;\n  width: 100%;\n}\n@media (min-width: 1025px) {\n.Project-topElement-bnH {\n      background: transparent;\n      color: #fff;\n      padding: 20px 0;\n}\n}\n.Project-userActions-1aq .Project-userActionPhone-UJD,\n.Project-userActions-1aq .Project-userActionTablet-lKr,\n.Project-userActions-1aq .Project-collection-1kA,\n.Project-userActions-1aq .Project-appreciate-2vE {\n  pointer-events: all;\n}\n@media (max-width: 1024px) {\n.Project-userActions-1aq {\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    position: absolute;\n    right: 20px;\n}\n}\n@media (min-width: 1025px) {\n.Project-userActions-1aq {\n    width: 45px;\n}\n}\n.Project-userActions-1aq .Project-actionName-1sX {\n  color: #959595;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  font-size: 11px;\n  font-weight: bold;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 25px;\n  margin-top: 8px;\n  pointer-events: all;\n  text-align: center;\n}\n.Project-userActions-1aq .Project-actionName-1sX.Project-avatarTitle-hja {\n    margin-top: 13px;\n}\n.Project-userActions-1aq .Project-actionName-1sX.Project-moodboardTitle-2Ex {\n    margin-top: -4px;\n}\n.Project-userActions-1aq .Project-actionName-1sX.Project-toolsTitle-1An {\n    pointer-events: none;\n}\n@media (max-width: 1024px) {\n.Project-userActions-1aq .Project-actionName-1sX {\n      display: none;\n}\n}\n.Project-userActions-1aq .Project-toolsAvatar-3bh,\n.Project-userActions-1aq .Project-sidebarTools-1Ye {\n  pointer-events: all;\n}\n@media (max-width: 1024px) {\n.Project-userActions-1aq .Project-toolsAvatar-3bh,\n    .Project-userActions-1aq .Project-sidebarTools-1Ye {\n      display: none;\n}\n}\n.Project-disableUserActions-2GP .Project-appreciateReminderContainer-1Iq,\n.Project-disableUserActions-2GP .Project-appreciateBottom-3K3,\n.Project-disableUserActions-2GP .Project-otherProjects-3BP,\n.Project-disableUserActions-2GP .Project-projectInfoComponent-2XB,\n.Project-disableUserActions-2GP .Project-topElement-bnH {\n  pointer-events: none;\n}\n.Project-disableUserActions-2GP .Project-userActions-1aq .Project-userActionPhone-UJD,\n.Project-disableUserActions-2GP .Project-userActions-1aq .Project-userActionTablet-lKr,\n.Project-disableUserActions-2GP .Project-userActions-1aq .Project-collection-1kA,\n.Project-disableUserActions-2GP .Project-userActions-1aq .Project-appreciate-2vE,\n.Project-disableUserActions-2GP .Project-userActions-1aq .Project-actionName-1sX,\n.Project-disableUserActions-2GP .Project-userActions-1aq .Project-toolsAvatar-3bh,\n.Project-disableUserActions-2GP .Project-userActions-1aq .Project-sidebarTools-1Ye {\n  pointer-events: none;\n}\n.Project-followTitle-1of {\n  cursor: pointer;\n  display: block;\n}\n.following .Project-followTitle-1of {\n    display: none;\n}\n.Project-followingTitle-1xe {\n  cursor: pointer;\n  display: none;\n}\n.following .Project-followingTitle-1xe {\n    display: block;\n}\n.Project-floatingAvatar-3qY {\n  opacity: 0;\n  pointer-events: none;\n  position: relative;\n}\n@media (min-width: 1025px) {\n.Project-floatingAvatar-3qY {\n      opacity: 1;\n      pointer-events: all;\n}\n}\n@media (max-width: 1024px) {\n.Project-floatingAvatar-3qY {\n      display: none;\n}\n}\n.Project-floatingAvatar-3qY:not(.Project-hasNoTopSection-59h) {\n    opacity: 0;\n    pointer-events: none;\n}\n.Project-stickyAppreciateContainer-neq {\n  display: none;\n}\n@media (min-width: 1025px) {\n.Project-stickyAppreciateContainer-neq {\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      bottom: 15px;\n      display: block;\n      margin-left: 15px;\n      position: fixed;\n}\n.Project-stickyAppreciateContainer-neq.Project-appreciateSticky-2Nc {\n        position: absolute;\n}\n}\n.Project-owner-3Od {\n  -webkit-box-align: center;\n          align-items: center;\n  color: #191919;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  width: 100%;\n}\n@media (min-width: 1025px) {\n.Project-owner-3Od {\n      color: #fff;\n      padding: 20px 0;\n      width: auto;\n}\n}\n.Project-fullPageOwner-2B0 {\n  color: #191919;\n}\n.Project-fullPageOwner-2B0 .Project-captionFollow-2cZ .rf-button__container--follow-link .rf-button__label {\n    color: #191919;\n}\n.Project-ownerItems-2FB {\n  display: -webkit-box;\n  display: flex;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.Project-ownerName-a2r {\n  color: inherit;\n}\n.Project-title-18X {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  max-width: 100%;\n}\n.Project-title-18X,\n.Project-ownerName-a2r {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Project-separator-THf {\n  margin: 0 10px;\n}\n.Project-editBtn-2xm {\n  color: inherit;\n}\n.Project-caption-4Fh {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  margin: -2px 0 0 10px;\n  max-width: calc(100% - 235px - 40px);\n}\n@media (max-width: 603px) {\n.Project-caption-4Fh {\n      max-width: calc(100% - 65px - 40px - 20px - 10px);\n}\n}\n@media (min-width: 604px) and (max-width: 1024px) {\n.Project-caption-4Fh {\n      max-width: calc(100% - 155px - 40px - 20px - 10px);\n}\n}\n@media (max-width: 603px) {\n.Project-isOwner-1qM .Project-caption-4Fh {\n      max-width: calc(100% - 32px - 20px - 40px);\n}\n}\n@media (min-width: 604px) and (max-width: 1024px) {\n.Project-isOwner-1qM .Project-caption-4Fh {\n      max-width: calc(100% - 241px - 20px - 40px);\n}\n}\n.Project-mobileUserActions-2DT {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n@media (min-width: 1025px) {\n.Project-mobileUserActions-2DT {\n      display: none;\n}\n}\n.Project-captionFollow-2cZ,\n.Project-separator-THf,\n.Project-appreciate-2vE,\n.Project-featureContainer-3zq,\n.Project-editBtn-2xm {\n  display: none;\n}\n@media (min-width: 1025px) {\n.Project-captionFollow-2cZ,\n  .Project-separator-THf,\n  .Project-editBtn-2xm {\n    display: inline;\n}\n}\n.Project-captionFollow-2cZ .rf-button__container--follow-link .rf-button__label {\n  color: #fff;\n  font-size: 14px;\n  vertical-align: initial;\n}\n.Project-captionFollow-2cZ .rf-button__container--follow.rf-button__container--follow-link.rf-button__container > .rf-button--follow .rf-button__label::before,\n.Project-captionFollow-2cZ .rf-button__container--follow.rf-button__container--follow-link.rf-button__container > .rf-button--unfollow .rf-button__label::before {\n  content: none;\n}\n.Project-captionFollow-2cZ .rf-button__label:hover {\n  text-decoration: underline;\n}\n@media (min-width: 1025px) {\n.Project-appreciate-2vE {\n    display: block;\n}\n}\n@media (max-width: 603px) {\n.Project-editProjectBtn-2nH {\n    display: none;\n}\n}\n.Project-userActionTablet-lKr {\n  display: none;\n  margin-left: 10px;\n}\n@media (min-width: 604px) and (max-width: 1024px) {\n.Project-userActionTablet-lKr {\n      display: block;\n}\n}\n.Project-project-Lsj .Project-userActionPhone-UJD {\n  display: none;\n  margin-left: 10px;\n}\n@media (max-width: 603px) {\n.Project-project-Lsj .Project-userActionPhone-UJD {\n      display: block;\n}\n}\n.Project-featureContainer-3zq {\n  margin-left: auto;\n  max-width: 235px;\n  position: relative;\n  top: -20px;\n}\n@media (min-width: 1025px) {\n.Project-featureContainer-3zq {\n      display: -webkit-inline-box;\n      display: inline-flex;\n      right: 0;\n}\n}\n@-webkit-keyframes Project-fadeIn-1IS {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes Project-fadeIn-1IS {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes Project-fadeOut-3oO {\nto {\n    opacity: 0;\n}\n}\n@keyframes Project-fadeOut-3oO {\nto {\n    opacity: 0;\n}\n}\n.Project-fadeIn-1IS {\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: Project-fadeIn-1IS;\n          animation-name: Project-fadeIn-1IS;\n}\n.Project-fadeOut-3oO {\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: Project-fadeOut-3oO;\n          animation-name: Project-fadeOut-3oO;\n}\n.Project-feature-3Gu {\n  margin-left: 10px;\n}\n.singleImageContent #project-canvas {\n  padding-top: 0;\n}\n#primary-project-content.redesign {\n  padding-top: 0;\n}\n@media (min-width: 1025px) {\n.Project-admin-1Hu .Project-main-2co #primary-project-content {\n    border-radius: 3px 0 0;\n}\n}\n.Project-main-2co #primary-project-content {\n  border-radius: 0;\n}\n@media (min-width: 1025px) {\n.Project-main-2co #primary-project-content {\n      border-radius: 3px 3px 0 0;\n}\n}\n.Project-main-2co #primary-project-content.singleImageContent {\n    padding-top: 0;\n}\n#primary-project-content:not(.zero-top).redesign {\n  padding-top: 80px;\n}\n@media (max-width: 1024px) {\n.Project-main-2co #primary-project-content:not(.zero-top) {\n    border-top: 1px solid #e8e8e8;\n}\n}\n@media (max-width: 603px) {\n.Project-main-2co #primary-project-content:not(.zero-top) {\n    padding-top: 30px;\n}\n.Project-main-2co #primary-project-content:not(.zero-top).singleImageContent {\n      padding-top: 0;\n}\n}\n.Project-projectModuleContainer-2q2 .spacer:last-child .divider {\n  display: block;\n}\n.Project-projectModuleContainer-2q2 .project-module-image img {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.Project-projectModules-3ax {\n  background: #fff;\n}\n.Project-minSpacer-2OQ {\n  min-height: 30px;\n}\n.Project-floatingAppreciateTablet-34B {\n  bottom: 0;\n  display: none;\n  float: right;\n  position: -webkit-sticky;\n  position: sticky;\n}\n@media (min-width: 604px) and (max-width: 1024px) {\n.Project-floatingAppreciateTablet-34B {\n      display: block;\n      margin-top: -70px;\n      padding: 0 20px 20px 0;\n}\n}\n@media (max-width: 603px) {\n.Project-floatingAppreciateTablet-34B {\n      display: block;\n      margin-top: -55px;\n      padding: 0 15px 15px 0;\n}\n}\n.Project-hideFloatingAppreciateTablet-vP4 {\n  opacity: 0;\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n}\n.Project-appreciateReminderContainer-1Iq {\n  display: none;\n}\n@media (min-width: 1025px) {\n.Project-appreciateReminderContainer-1Iq {\n      background-color: #000;\n      color: #fff;\n      display: block;\n      padding: 50px 0;\n      text-align: center;\n}\n}\n.Project-appreciateBottom-3K3.Project-appreciateBottom-3K3 {\n  height: 75px;\n  margin: 0 auto;\n  width: 75px;\n}\n.Project-appreciateBottomThumbSize-2w8.Project-appreciateBottomThumbSize-2w8 {\n  height: 26px;\n  width: 25px;\n}\n.Project-appreciateFollow-2yO {\n  margin-top: 10px;\n  width: 240px;\n}\n.Project-appreciateFollow-2yO .rf-button__container {\n    width: 100%;\n}\n.Project-projectInfoSection-3it {\n  margin: 0 auto;\n  max-width: 384px;\n  padding-top: 18px;\n}\n.Project-projectName-2sV {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.2;\n  margin: 0 auto 10px;\n}\n.Project-projectStat-6Y3 {\n  color: #959595;\n  display: inline-block;\n  font-size: 14px;\n  height: 17px;\n  line-height: 1.2;\n}\n.Project-projectStat-6Y3:not(:last-child) {\n    margin-right: 9px;\n}\n.Project-projectStat-6Y3::before {\n    margin-right: 2px;\n}\n.Project-projectPublished-1UI {\n  color: #959595;\n  padding-top: 24px;\n}\n.Project-adminNotices-3In {\n  cursor: default;\n}\n@media (min-width: 1025px) {\n.Project-adminNotices-3In {\n      margin: 0 0 12px;\n}\n}\n.Project-adminNotice-1Mr {\n  background: #fef8f8;\n  padding: 25px;\n}\n.Project-adminNotice-1Mr .Project-adminDisagreeMsg-3eB {\n    color: #696969;\n    font-size: 13px;\n    line-height: 1.4;\n}\n.Project-adminNotice-1Mr .Project-adminNoticeBody-1iX {\n    color: #696969;\n    font-size: 13px;\n    line-height: 1.4;\n    margin: 10px 0;\n}\n.Project-adminNotice-1Mr .Project-adminNoticeIcon-1_Z {\n    position: relative;\n    top: 1px;\n    width: 12px;\n}\n.Project-adminNotice-1Mr .Project-adminNoticeTitle-2Sp {\n    color: #191919;\n    font-size: 15px;\n    margin-bottom: 11px;\n}\n.Project-adminNotice-1Mr .Project-learnMore-2Bd,\n  .Project-adminNotice-1Mr .Project-submitProject-2Ft {\n    text-decoration: underline;\n}\n.Project-adminNotice-1Mr:last-child {\n    margin-bottom: 0;\n}\n@media (min-width: 1025px) {\n.Project-adminNotice-1Mr {\n      border-radius: 3px;\n      margin-bottom: 5px;\n      padding: 25px 40px;\n}\n}\n.Project-followContainer-3lr,\n.Project-sidebarCollectionTrigger-Tea {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  height: 32px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 32px;\n}\n.Project-followContainer-3lr:hover,\n  .Project-sidebarCollectionTrigger-Tea:hover {\n    background-color: #f1f1f1;\n}\n.Project-followContainer-3lr:active,\n  .Project-sidebarCollectionTrigger-Tea:active {\n    background-color: #e4e4e4;\n}\n@media (min-width: 1025px) {\n.Project-followContainer-3lr,\n    .Project-sidebarCollectionTrigger-Tea {\n      height: 45px;\n      width: 45px;\n}\n}\n.Project-followContainer-3lr .Project-icon-29I,\n  .Project-sidebarCollectionTrigger-Tea .Project-icon-29I {\n    fill: #191919;\n    height: 17px;\n    width: 17px;\n}\n@media (max-width: 1024px) {\n.Project-followContainer-3lr .Project-icon-29I,\n      .Project-sidebarCollectionTrigger-Tea .Project-icon-29I {\n        height: 12px;\n        width: 12px;\n}\n}\n.Project-tooltip-CYu.Project-collection-1kA {\n  align-self: inherit;\n  display: block;\n}\n.Project-tooltipContent-2D- {\n  font-size: 13px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n.Project-collectionButton-PRW {\n  width: 240px;\n}\n.Project-project-Lsj .Project-collectionLeading-24p {\n  fill: #191919;\n  height: 14px;\n  width: 14px;\n}\n@media (min-width: 1025px) {\n.Project-project-Lsj .Project-collection-1kA,\n  .Project-project-Lsj .Project-sidebarTopAppreciate-2Dm {\n    margin: 12px 0 6px;\n}\n}\n@media (min-width: 1025px) {\n.Project-project-Lsj .Project-toolsAvatar-3bh {\n    margin-bottom: 6px;\n}\n.Project-project-Lsj .Project-toolsAvatar-3bh.Project-ownerAvatar-3-P {\n      margin-bottom: 25px;\n}\n}\n.Project-followIconWrap-tIT.Project-followIconWrap-tIT {\n  background: transparent;\n}\n.Project-followIcon-3jF {\n  height: 15px;\n  position: relative;\n  width: 15px;\n}\n.Project-followIconCheck-23_ {\n  right: -1px;\n  top: 1px;\n  width: 14px;\n}\n", "" ]), 
    t.locals = {
        "rf-button__container": "Project-rf-button__container-VoN",
        "form-item": "Project-form-item-2D8",
        "rf-icon--share": "Project-rf-icon--share-1g4",
        "rf-icon--edit": "Project-rf-icon--edit-X-p",
        "rf-icon--teams": "Project-rf-icon--teams-3m7",
        "rf-icon--clone-project": "Project-rf-icon--clone-project-2RH",
        "rf-button__container--message": "Project-rf-button__container--message-3YH",
        "rf-button__icon-container": "Project-rf-button__icon-container-3q3",
        "rf-button__container--appreciate": "Project-rf-button__container--appreciate-v5A",
        "rf-button__icon-container--leading": "Project-rf-button__icon-container--leading-2g-",
        "rf-button": "Project-rf-button-2Ie",
        hide: "Project-hide-1UX",
        "rf-button__label": "Project-rf-button__label-zNl",
        "rf-icon--triangle": "Project-rf-icon--triangle-eb7",
        "rf-button__icon-container--trailing": "Project-rf-button__icon-container--trailing-T0b",
        "rf-button--icon-leading": "Project-rf-button--icon-leading-2cs",
        "rf-button--icon-trailing": "Project-rf-button--icon-trailing-1GJ",
        "rf-button--icon-only": "Project-rf-button--icon-only-QAy",
        "rf-button--icon-with-arrow": "Project-rf-button--icon-with-arrow-1lF",
        "rf-button--icon-dropdown": "Project-rf-button--icon-dropdown-1SR",
        "rf-button--small": "Project-rf-button--small-3Rj",
        "rf-button--inline": "Project-rf-button--inline-2ol",
        "rf-button--large": "Project-rf-button--large-quq",
        "rf-button--huge": "Project-rf-button--huge-pqz",
        "rf-button--secondary": "Project-rf-button--secondary-1sT",
        "rf-button--tertiary": "Project-rf-button--tertiary-34i",
        "rf-button--danger": "Project-rf-button--danger-44g",
        "rf-button--disabled": "Project-rf-button--disabled-zSS",
        "rf-button__container--follow": "Project-rf-button__container--follow-3bw",
        "rf-button--following": "Project-rf-button--following-3Ei",
        "rf-button--unfollow": "Project-rf-button--unfollow-2ve",
        "rf-button__label--following": "Project-rf-button__label--following-1l0",
        "rf-button__label--unfollow": "Project-rf-button__label--unfollow-35I",
        following: "Project-following-2N6",
        "rf-button--follow": "Project-rf-button--follow-1I-",
        "rf-button__label--follow": "Project-rf-button__label--follow-2Ep",
        "no-has-touch": "Project-no-has-touch-28M",
        "rf-button-label--following": "Project-rf-button-label--following-uqk",
        "following-hold": "Project-following-hold-1WB",
        "rf-button__container--follow-link": "Project-rf-button__container--follow-link-jtB",
        "dark-background": "Project-dark-background-2al",
        "project-editor": "Project-project-editor-3N_",
        "btn-primary": "Project-btn-primary-bI0",
        "btn-secondary": "Project-btn-secondary-33I",
        "btn-tertiary": "Project-btn-tertiary-vFG",
        "btn-action": "Project-btn-action-34k",
        "btn-minor": "Project-btn-minor-2-K",
        "module-edit-bar": "Project-module-edit-bar-1cD",
        project: "Project-project-Lsj",
        fullPage: "Project-fullPage-2z2",
        userActions: "Project-userActions-1aq",
        userActionsWithTools: "Project-userActionsWithTools-2Vg",
        onLock: "Project-onLock-XEI",
        fullPageUserActions: "Project-fullPageUserActions-3dt",
        toolsSidebarAppreciateThumb: "Project-toolsSidebarAppreciateThumb-2j6",
        toolsSidebarAppreciate: "Project-toolsSidebarAppreciate-2EA",
        stickyAppreciateContainer: "Project-stickyAppreciateContainer-neq",
        appreciateSticky: "Project-appreciateSticky-2Nc",
        narrowProject: "Project-narrowProject-32m",
        admin: "Project-admin-1Hu",
        wrapper: "Project-wrapper-3t4",
        adminSidebar: "Project-adminSidebar-S5P",
        sidebar: "Project-sidebar-2VP",
        main: "Project-main-2co",
        topElement: "Project-topElement-bnH",
        userActionPhone: "Project-userActionPhone-UJD",
        userActionTablet: "Project-userActionTablet-lKr",
        collection: "Project-collection-1kA",
        appreciate: "Project-appreciate-2vE",
        actionName: "Project-actionName-1sX",
        avatarTitle: "Project-avatarTitle-hja",
        moodboardTitle: "Project-moodboardTitle-2Ex",
        toolsTitle: "Project-toolsTitle-1An",
        toolsAvatar: "Project-toolsAvatar-3bh",
        sidebarTools: "Project-sidebarTools-1Ye",
        disableUserActions: "Project-disableUserActions-2GP",
        appreciateReminderContainer: "Project-appreciateReminderContainer-1Iq",
        appreciateBottom: "Project-appreciateBottom-3K3",
        otherProjects: "Project-otherProjects-3BP",
        projectInfoComponent: "Project-projectInfoComponent-2XB",
        followTitle: "Project-followTitle-1of",
        followingTitle: "Project-followingTitle-1xe",
        floatingAvatar: "Project-floatingAvatar-3qY",
        hasNoTopSection: "Project-hasNoTopSection-59h",
        owner: "Project-owner-3Od",
        fullPageOwner: "Project-fullPageOwner-2B0",
        captionFollow: "Project-captionFollow-2cZ",
        ownerItems: "Project-ownerItems-2FB",
        ownerName: "Project-ownerName-a2r",
        title: "Project-title-18X",
        separator: "Project-separator-THf",
        editBtn: "Project-editBtn-2xm",
        caption: "Project-caption-4Fh",
        isOwner: "Project-isOwner-1qM",
        mobileUserActions: "Project-mobileUserActions-2DT",
        featureContainer: "Project-featureContainer-3zq",
        editProjectBtn: "Project-editProjectBtn-2nH",
        fadeIn: "Project-fadeIn-1IS",
        fadeOut: "Project-fadeOut-3oO",
        feature: "Project-feature-3Gu",
        projectModuleContainer: "Project-projectModuleContainer-2q2",
        projectModules: "Project-projectModules-3ax",
        minSpacer: "Project-minSpacer-2OQ",
        floatingAppreciateTablet: "Project-floatingAppreciateTablet-34B",
        hideFloatingAppreciateTablet: "Project-hideFloatingAppreciateTablet-vP4",
        appreciateBottomThumbSize: "Project-appreciateBottomThumbSize-2w8",
        appreciateFollow: "Project-appreciateFollow-2yO",
        projectInfoSection: "Project-projectInfoSection-3it",
        projectName: "Project-projectName-2sV",
        projectStat: "Project-projectStat-6Y3",
        projectPublished: "Project-projectPublished-1UI",
        adminNotices: "Project-adminNotices-3In",
        adminNotice: "Project-adminNotice-1Mr",
        adminDisagreeMsg: "Project-adminDisagreeMsg-3eB",
        adminNoticeBody: "Project-adminNoticeBody-1iX",
        adminNoticeIcon: "Project-adminNoticeIcon-1_Z",
        adminNoticeTitle: "Project-adminNoticeTitle-2Sp",
        learnMore: "Project-learnMore-2Bd",
        submitProject: "Project-submitProject-2Ft",
        followContainer: "Project-followContainer-3lr",
        sidebarCollectionTrigger: "Project-sidebarCollectionTrigger-Tea",
        icon: "Project-icon-29I",
        tooltip: "Project-tooltip-CYu",
        tooltipContent: "Project-tooltipContent-2D-",
        collectionButton: "Project-collectionButton-PRW",
        collectionLeading: "Project-collectionLeading-24p",
        sidebarTopAppreciate: "Project-sidebarTopAppreciate-2Dm",
        ownerAvatar: "Project-ownerAvatar-3-P",
        followIconWrap: "Project-followIconWrap-tIT",
        followIcon: "Project-followIcon-3jF",
        followIconCheck: "Project-followIconCheck-23_"
    };
}, function(e, t, n) {
    e.exports = n(2)(287);
}, function(e, t, n) {
    var o = n(181), r = {
        "form/_radio": n(1402).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="js-personalization-survey">'), o.b("\n" + n), 
            o.b("  <form>"), o.b("\n" + n), o.s(o.f("survey", e, t, 1), e, t, 0, 64, 367, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('      <div class="personalization-survey-popup__form-row">'), o.b("\n" + n), 
                o.b('        <div class="personalization-survey-popup__question">'), o.b(o.v(o.f("label", e, t, 0))), 
                o.b("</div>"), o.b("\n" + n), o.b('        <div class="personalization-survey-popup__answers">'), 
                o.b("\n" + n), o.s(o.f("answers", e, t, 1), e, t, 0, 282, 322, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b(n.rp("<form/_radio0", e, t, "            "));
                }), e.pop()), o.b("        </div>"), o.b("\n" + n), o.b("      </div>"), o.b("\n" + n);
            }), e.pop()), o.b("  </form>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<form/_radio0": {
                name: "form/_radio",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<div class="js-personalization-survey">\n  <form>\n    {{#survey}}\n      <div class="personalization-survey-popup__form-row">\n        <div class="personalization-survey-popup__question">{{label}}</div>\n        <div class="personalization-survey-popup__answers">\n          {{#answers}}\n            {{>form/_radio}}\n          {{/answers}}\n        </div>\n      </div>\n    {{/survey}}\n  </form>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_savingSpinner": n(599).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="form-item form-item-radio'), o.s(o.f("containerClasses", e, t, 1), e, t, 0, 58, 64, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
            }), e.pop()), o.b('" id="'), o.b(o.v(o.f("id", e, t, 0))), o.b('-container">'), 
            o.b("\n" + n), o.b('  <label class="radio form-label" for="'), o.b(o.v(o.f("id", e, t, 0))), 
            o.b('">'), o.b("\n" + n), o.b('    <input type="radio" id="'), o.b(o.v(o.f("id", e, t, 0))), 
            o.b('" name="'), o.b(o.v(o.f("name", e, t, 0))), o.s(o.f("name", e, t, 1), e, t, 1, 0, 0, "") || o.b(o.v(o.f("id", e, t, 0))), 
            o.b('" class="form-radio'), o.s(o.f("classes", e, t, 1), e, t, 0, 263, 269, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
            }), e.pop()), o.s(o.f("validate", e, t, 1), e, t, 0, 294, 317, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(" validate["), n.b(n.v(n.f("validate", e, t, 0))), n.b("]");
            }), e.pop()), o.b('" value="'), o.b(o.v(o.f("value", e, t, 0))), o.b('" '), o.s(o.f("checked", e, t, 1), e, t, 0, 362, 369, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("checked");
            }), e.pop()), o.s(o.f("validate", e, t, 1), e, t, 0, 394, 423, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(' data-validate="'), n.b(n.v(n.f("validate", e, t, 0))), n.b('"');
            }), e.pop()), o.b(">"), o.b("\n" + n), o.b('    <div class="radio-checkmark"></div>'), 
            o.b("\n" + n), o.b("    "), o.b(o.t(o.f("label", e, t, 0))), o.s(o.f("saving_spinner", e, t, 1), e, t, 0, 512, 536, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.rp("<lib/_savingSpinner0", e, t, ""));
            }), e.pop()), o.b("\n" + n), o.b("  </label>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), 
            o.fl();
        },
        partials: {
            "<lib/_savingSpinner0": {
                name: "lib/_savingSpinner",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<div class="form-item form-item-radio{{#containerClasses}} {{.}}{{/containerClasses}}" id="{{id}}-container">\n  <label class="radio form-label" for="{{id}}">\n    <input type="radio" id="{{id}}" name="{{name}}{{^name}}{{id}}{{/name}}" class="form-radio{{#classes}} {{.}}{{/classes}}{{#validate}} validate[{{validate}}]{{/validate}}" value="{{value}}" {{#checked}}checked{{/checked}}{{#validate}} data-validate="{{validate}}"{{/validate}}>\n    <div class="radio-checkmark"></div>\n    {{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}\n  </label>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_buttons/_default": n(869).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="js-personalization-survey-trigger personalization-survey-trigger">'), 
            o.b("\n" + n), o.b(o.rp("<lib/_buttons/_default0", e, t, "")), o.b("</div>"), o.b("\n"), 
            o.fl();
        },
        partials: {
            "<lib/_buttons/_default0": {
                name: "lib/_buttons/_default",
                partials: {},
                subs: {
                    label: function(e, t, n, o) {
                        n.b("Take Survey");
                    },
                    classes: function(e, t, n, o) {
                        n.b("form-button-default js-personalization-survey-btn personalization-survey-trigger__btn");
                    }
                }
            }
        },
        subs: {}
    }, '<div class="js-personalization-survey-trigger personalization-survey-trigger">\n  {{<lib/_buttons/_default}}\n    {{$label}}Take Survey{{/label}}\n    {{$classes}}form-button-default js-personalization-survey-btn personalization-survey-trigger__btn{{/classes}}\n  {{/lib/_buttons/_default}}\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {
        "lib/_buttons/_default": n(869).template,
        "_icons/_thumb": n(1405).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="personalization-module js-personalization-module">'), 
            o.b("\n" + n), o.b('  <div class="personalization-module__buttons">'), o.b("\n" + n), 
            o.b(o.rp("<lib/_buttons/_default1", e, t, "")), o.b(o.rp("<lib/_buttons/_default3", e, t, "")), 
            o.b("  </div>"), o.b("\n" + n), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<lib/_buttons/_default1": {
                name: "lib/_buttons/_default",
                partials: {
                    "<label_icons/_thumb0": {
                        name: "_icons/_thumb",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    label: function(e, t, n, o) {
                        n.b(n.rp("<label_icons/_thumb0", e, t, ""));
                    },
                    classes: function(e, t, n, o) {
                        n.b("form-button-default form-button-small personalization-btn js-personalization-btn");
                    },
                    attrs: function(e, t, n, o) {
                        n.b('data-project-id="'), n.b(n.v(n.f("PROJECT_ID", e, t, 0))), n.b('" data-thumb="1"');
                    }
                }
            },
            "<lib/_buttons/_default3": {
                name: "lib/_buttons/_default",
                partials: {
                    "<label_icons/_thumb2": {
                        name: "_icons/_thumb",
                        partials: {},
                        subs: {}
                    }
                },
                subs: {
                    label: function(e, t, n, o) {
                        n.b(n.rp("<label_icons/_thumb2", e, t, ""));
                    },
                    classes: function(e, t, n, o) {
                        n.b("form-button-default form-button-small personalization-btn personalization-btn__down js-personalization-btn");
                    },
                    attrs: function(e, t, n, o) {
                        n.b('data-project-id="'), n.b(n.v(n.f("PROJECT_ID", e, t, 0))), n.b('" data-thumb="0"');
                    }
                }
            }
        },
        subs: {}
    }, '<div class="personalization-module js-personalization-module">\n  <div class="personalization-module__buttons">\n  {{<lib/_buttons/_default}}\n    {{$label}}{{>_icons/_thumb}}{{/label}}\n    {{$classes}}form-button-default form-button-small personalization-btn js-personalization-btn{{/classes}}\n    {{$attrs}}data-project-id="{{PROJECT_ID}}" data-thumb="1"{{/attrs}}\n  {{/lib/_buttons/_default}}\n  {{<lib/_buttons/_default}}\n    {{$label}}{{>_icons/_thumb}}{{/label}}\n    {{$classes}}form-button-default form-button-small personalization-btn personalization-btn__down js-personalization-btn{{/classes}}\n    {{$attrs}}data-project-id="{{PROJECT_ID}}" data-thumb="0"{{/attrs}}\n  {{/lib/_buttons/_default}}\n  </div>\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<svg class="rf-icon rf-icon--thumb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="14px"><path fill-rule="evenodd" d="M14.707,11.207 L12.207,13.707 C12.012,13.902 11.756,14.000 11.499,14.000 L7.384,14.000 C7.132,13.997 6.900,13.898 6.707,13.707 L5.000,12.000 L5.000,6.000 L9.000,2.000 L10.000,0.000 C10.553,0.000 11.000,0.447 11.000,1.000 L11.000,2.000 C11.000,2.708 10.500,3.500 10.500,3.500 L9.000,6.000 L14.000,6.000 C14.555,6.000 15.000,6.447 15.000,7.000 L15.000,10.500 C14.995,10.750 14.898,11.016 14.707,11.207 ZM0.000,6.000 L3.000,6.000 L3.000,14.000 L0.000,14.000 L0.000,6.000 Z"/></svg>'), 
            o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<svg class="rf-icon rf-icon--thumb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="14px"><path fill-rule="evenodd" d="M14.707,11.207 L12.207,13.707 C12.012,13.902 11.756,14.000 11.499,14.000 L7.384,14.000 C7.132,13.997 6.900,13.898 6.707,13.707 L5.000,12.000 L5.000,6.000 L9.000,2.000 L10.000,0.000 C10.553,0.000 11.000,0.447 11.000,1.000 L11.000,2.000 C11.000,2.708 10.500,3.500 10.500,3.500 L9.000,6.000 L14.000,6.000 C14.555,6.000 15.000,6.447 15.000,7.000 L15.000,10.500 C14.995,10.750 14.898,11.016 14.707,11.207 ZM0.000,6.000 L3.000,6.000 L3.000,14.000 L0.000,14.000 L0.000,6.000 Z"/></svg>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(1814);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
    (0, n(125).default)("9456f062", o, !0, {});
}, function(e, t, n) {
    "use strict";
    n(17), n(18), n(20), n(24), n(25), n(22), n(21);
    var o = n(1175), r = n(868), i = n(32), a = n(46);
    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    t.a = {
        actions: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach(function(t) {
                    l(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }(l({}, "onboarding/" + o.b, function() {
            i.default.custom("onboarding", "Rendering Adobe ID Onboarding", {
                from: "logged_out"
            });
        }), Object(a.a)("project", [ r.a.PULSE_POINT_HOVERED, r.a.PULSE_POINT_CLICKED ], "onboarding"))
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o;
    });
    n(0);
    function o(e) {
        return Object.keys(e).map(function(t) {
            return t + "=" + e[t];
        }).join("%26");
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n(17), n(18), n(43), n(20), n(70), n(301), n(44), n(126), n(24), n(25), n(22), n(71), 
    n(74), n(198), n(21);
    var o = n(197), r = n(226), i = n(719), a = n(606), s = n(360), l = n(203), c = n(341), u = {
        components: {
            ArrowRightAlt: s.a,
            DominantColor: c.a,
            Fade: l.a
        },
        props: {
            fillerColor: {
                type: Array
            },
            imagesSrcSet: {
                type: String
            },
            imageSrc: {
                type: String
            },
            user: {
                type: Object
            },
            shouldOverlayOverFooter: {
                type: Boolean
            }
        },
        data: function() {
            return {
                appreciationNotificationImageLoaded: !1,
                shouldAnimateIn: !0,
                isDoneAnimatingOut: !1
            };
        },
        computed: {
            appreciatiedNotification: function() {
                return this.$translate("project_appreciated_notification_header", '<a href="{appreciationsUrl}" class="link" target="_blank">Thanks for appreciating this project!</a>', {
                    appreciationsUrl: this.appreciationsUrl
                });
            },
            appreciationsUrl: function() {
                if (this.user) return this.user.url + "/appreciated";
            }
        },
        watch: {
            isDoneAnimatingOut: function(e) {
                this.shouldAnimateIn = e && this.appreciation;
            }
        }
    }, p = n(1352), d = n(53);
    var f = Object(d.default)(u, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return t.user ? o("div", {
            ref: "root",
            class: [ t.$style.appreciationNotifications, (e = {}, e[t.$style.overlayOverFooter] = t.shouldOverlayOverFooter, 
            e) ],
            on: {
                click: function(e) {
                    return t.$emit("click");
                }
            }
        }, [ o("a", {
            attrs: {
                href: t.appreciationsUrl,
                target: "_blank"
            }
        }, [ o("Fade", [ o("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.appreciationNotificationImageLoaded,
                expression: "appreciationNotificationImageLoaded"
            } ],
            ref: "clipper",
            class: t.$style.clipper
        }, [ o("img", {
            ref: "image",
            class: t.$style.appreciationImage,
            attrs: {
                src: t.imageSrc,
                srcset: t.imagesSrcSet
            },
            on: {
                load: function(e) {
                    t.appreciationNotificationImageLoaded = !0;
                }
            }
        }) ]) ]), o("DominantColor", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: !t.appreciationNotificationImageLoaded,
                expression: "!appreciationNotificationImageLoaded"
            } ],
            ref: "placeholder",
            class: [ t.$style.appreciationImage, t.$style.appreciationImageLoader ],
            attrs: {
                colors: t.fillerColor
            }
        }) ], 1), o("div", [ o("div", {
            ref: "text",
            class: t.$style.appreciationCTA,
            domProps: {
                innerHTML: t._s(t.appreciatiedNotification)
            }
        }), o("a", {
            ref: "link",
            class: t.$style.appreciationLink,
            attrs: {
                href: t.appreciationsUrl,
                target: "_blank"
            }
        }, [ t._v(" " + t._s(t.$translate("project_appreciation_notification_see_it_now", "See your appreciations")) + " "), o("ArrowRightAlt", {
            class: t.$style.appreciationNotificationArrow
        }) ], 1) ]) ]) : t._e();
    }, [], !1, function(e) {
        this.$style = p.default.locals || p.default;
    }, null, null).exports, b = n(608), h = n(319), m = Object(d.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }
        }, [ t("path", {
            attrs: {
                d: "M0 10h24v4h-24z"
            }
        }) ]);
    }, [], !1, null, null, null).exports, g = n(191), v = n(561), w = n(183), _ = {
        components: {
            PulsePoint: v.a,
            Tooltip: w.a
        },
        props: {
            followeeId: {
                type: Number,
                required: !0
            },
            isFollowing: {
                type: Boolean
            },
            shouldRenderPulsePoint: {
                type: Boolean
            },
            hasMultipleOwners: {
                type: Boolean
            },
            displayName: {
                type: String
            },
            source: {
                type: String
            },
            followContainerClass: {
                type: String
            },
            iconWrapClass: {
                type: String
            }
        },
        data: function() {
            return {
                canDisplayTooltip: !1,
                pulseFrom: "follow"
            };
        },
        computed: {
            canRenderPulsePoint: function() {
                return this.shouldRenderPulsePoint && !this.isFollowing;
            },
            hidePulsePoints: function() {
                return this.canDisplayTooltip || !this.canRenderPulsePoint;
            },
            entityType: function() {
                return this.hasMultipleOwners ? "project" : "user";
            },
            followText: function() {
                return this.hasMultipleOwners ? {
                    follow: this.$translate("button_follow_all", "Follow All"),
                    unfollow: this.$translate("button_unfollow_all", "Unfollow All")
                } : {
                    follow: this.$translate("button_follow", "Follow"),
                    unfollow: this.$translate("button_unfollow", "Unfollow")
                };
            }
        },
        methods: {
            handlePulseClosed: function() {
                this.$emit("pulseClosed", {
                    from: this.pulseFrom
                }), this.canDisplayTooltip = !0;
            }
        }
    }, y = n(1354);
    var j = Object(d.default)(_, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("Tooltip", {
            ref: "tooltip",
            class: e.$style.followBtn,
            attrs: {
                isResponsive: !0,
                alignment: "right",
                position: "bottom",
                triangleDistance: 0,
                horizontalPadding: 0,
                verticalPadding: 0,
                distance: 10,
                hasTriangle: e.hidePulsePoints
            }
        }, [ n("div", {
            ref: "followContainer",
            class: [ "js-action-follow", "rf-button__container--follow", "follow-button-container", e.followContainerClass, {
                following: e.isFollowing
            } ],
            attrs: {
                "data-followee": e.followeeId,
                "data-entity": e.entityType,
                "data-following": e.isFollowing,
                "data-display-name": e.displayName,
                "data-source": e.source
            }
        }, [ n("a", {
            ref: "button",
            class: [ e.$style.button, e.iconWrapClass, "rf-button--follow" ],
            attrs: {
                role: "button"
            }
        }, [ e._t("addMark") ], 2), n("a", {
            ref: "button",
            class: [ e.$style.button, e.iconWrapClass, e.$style.following, "rf-button--following" ],
            attrs: {
                role: "button"
            }
        }, [ e._t("checkMark") ], 2), n("a", {
            ref: "button",
            class: [ e.$style.button, e.iconWrapClass, e.$style.unfollow, "rf-button--unfollow" ],
            attrs: {
                role: "button"
            }
        }, [ e._t("minusMark") ], 2) ]), e.canRenderPulsePoint ? n("PulsePoint", {
            ref: "pulse",
            class: e.$style.pulsePoint,
            on: {
                pulseViewed: function(t) {
                    return e.$emit("pulseViewed", {
                        from: e.pulseFrom
                    });
                },
                pulseClosed: e.handlePulseClosed
            }
        }, [ n("template", {
            slot: "header"
        }, [ e._v(e._s(e.$translate("onboarding_pulsePoint_follow_creatives", "Follow Creatives"))) ]), n("template", {
            slot: "text"
        }, [ n("p", [ e._v(e._s(e.$translate("onboarding_pulsePoint_follow_p1", "Follow creatives to see their work in your feed."))) ]), n("p", [ e._v(e._s(e.$translate("onboarding_pulsePoint_follow_p2", "You'll see their projects as they update and publish them, as well as all the work they appreciate, so you can see what's inspiring them."))) ]) ]) ], 2) : e._e(), e.hidePulsePoints ? n("div", {
            ref: "tooltipContent",
            class: [ "js-action-follow", e.$style.tooltipStyle, {
                following: e.isFollowing
            } ],
            attrs: {
                slot: "tooltipContent",
                "data-followee": e.followeeId,
                "data-entity": e.entityType,
                "data-following": e.isFollowing,
                "data-display-name": e.displayName,
                "data-source": e.source
            },
            slot: "tooltipContent"
        }, [ [ n("label", {
            class: [ e.$style.tooltipContent, e.$style.followTooltip ]
        }, [ e._v(e._s(e.followText.follow)) ]), n("label", {
            class: [ e.$style.tooltipContent, e.$style.unfollowTooltip ]
        }, [ e._v(e._s(e.followText.unfollow)) ]) ] ], 2) : e._e() ], 1);
    }, [], !1, function(e) {
        this.$style = y.default.locals || y.default;
    }, null, null).exports, x = n(547), P = n.n(x), C = n(252);
    function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var I = {
        name: "MiniProfile",
        props: {
            user: {
                type: Object,
                required: !0
            }
        },
        computed: {
            miniProfile: function() {
                return P()({
                    user: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? k(Object(n), !0).forEach(function(t) {
                                O(e, t, n[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }({}, this.user, {
                        source: "miniprofile"
                    })
                });
            }
        },
        mounted: function() {
            C.default.init(this.$el);
        },
        destroyed: function() {
            C.default.destroy();
        }
    }, T = Object(d.default)(I, function() {
        var e = this.$createElement;
        return (this._self._c || e)("div", {
            domProps: {
                innerHTML: this._s(this.miniProfile)
            }
        });
    }, [], !1, null, null, null).exports, S = {
        components: {
            Add: b.a,
            Check: h.a,
            Minus: m,
            Avatar: g.a,
            Follow: j,
            Tooltip: w.a,
            Miniprofile: T
        },
        props: {
            owners: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            size: {
                type: Number,
                default: 35
            },
            isHovered: {
                type: Boolean,
                default: !1
            },
            displayFollowButton: {
                type: Boolean,
                default: !1
            },
            isFollowing: {
                type: Boolean
            },
            followeeId: {
                type: Number
            },
            pulsePoints: {
                type: Object
            },
            projectOwnerMiniprofile: {
                type: Object
            },
            displayName: {
                type: String
            }
        },
        computed: {
            hasMultipleOwners: function() {
                return this.owners.length > 1;
            },
            hasMiniprofile: function() {
                return 1 === this.owners.length && this.projectOwnerMiniprofile;
            }
        },
        methods: {
            initMiniprofileData: function() {
                this.projectOwnerMiniprofile || this.$emit("avatarMiniHovered");
            }
        }
    }, A = n(1356);
    var $ = Object(d.default)(S, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.$style.root
        }, [ n("Tooltip", {
            attrs: {
                alignment: "right",
                position: "center",
                triangleDistance: 2,
                horizontalPadding: 0,
                verticalPadding: 0,
                distance: 10,
                hasTriangle: !!e.hasMiniprofile
            }
        }, [ n("Avatar", {
            ref: "avatar",
            attrs: {
                isHovered: e.isHovered,
                owners: e.owners,
                size: e.size,
                shouldHaveMiniProfile: !1,
                isDisabled: e.hasMultipleOwners && !e.displayFollowButton,
                shouldTriggerFollow: e.displayFollowButton,
                isFollowing: e.isFollowing,
                followeeId: e.followeeId
            },
            nativeOn: {
                mouseenter: function(t) {
                    return e.initMiniprofileData(t);
                }
            }
        }), e.hasMiniprofile ? n("div", {
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ n("Miniprofile", {
            ref: "miniprofileRoot",
            attrs: {
                user: e.projectOwnerMiniprofile
            }
        }) ], 1) : e._e() ], 1), e.displayFollowButton ? n("Follow", {
            ref: "follow",
            class: e.$style.follow,
            attrs: {
                isFollowing: e.isFollowing,
                followeeId: e.followeeId,
                hasMultipleOwners: e.hasMultipleOwners,
                shouldRenderPulsePoint: e.pulsePoints && e.pulsePoints.display_follow,
                displayName: e.displayName,
                source: "projectSidebar"
            },
            on: {
                pulseViewed: function(t) {
                    return e.$emit("pulseViewed", t);
                },
                pulseClosed: function(t) {
                    return e.$emit("pulseClosed", t);
                }
            }
        }, [ n("Add", {
            ref: "addMark",
            class: e.$style.addMark,
            attrs: {
                slot: "addMark"
            },
            slot: "addMark"
        }), n("Check", {
            ref: "checkMark",
            class: e.$style.checkMark,
            attrs: {
                slot: "checkMark"
            },
            slot: "checkMark"
        }), n("Minus", {
            ref: "minusMark",
            class: e.$style.minusMark,
            attrs: {
                slot: "minusMark"
            },
            slot: "minusMark"
        }) ], 1) : e._e() ], 1);
    }, [], !1, function(e) {
        this.$style = A.default.locals || A.default;
    }, null, null).exports, M = n(182), E = n(525), B = n(428), L = n(272), N = n(49), R = n(1119), D = n.n(R), z = n(842), F = (n(8), 
    n(10), n(35), n(238)), H = n(14), V = n(868);
    function U(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function W(e) {
        return function() {
            var t = this, n = arguments;
            return new Promise(function(o, r) {
                var i = e.apply(t, n);
                function a(e) {
                    U(i, o, r, a, s, "next", e);
                }
                function s(e) {
                    U(i, o, r, a, s, "throw", e);
                }
                a(void 0);
            });
        };
    }
    function q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function G(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? q(Object(n), !0).forEach(function(t) {
                K(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    function K(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var Y = Object(N.createNamespacedHelpers)("project"), X = Y.mapState, J = Y.mapActions, Z = {
        components: {
            Select: F.a,
            Btn: M.a
        },
        props: {
            module: {
                type: Object,
                required: !0
            }
        },
        data: function() {
            return {
                sendingCdnTakedown: !1,
                sendingCdnRestore: !1,
                sendingCdnClear: !1,
                selectedOption: null
            };
        },
        computed: G({}, X([ "admin" ]), {
            btnTakedownText: function() {
                return this.sendingCdnTakedown ? "Saving..." : "Take down";
            },
            btnRestoreText: function() {
                return this.sendingCdnRestore ? "Saving..." : "Restore";
            },
            btnClearText: function() {
                return this.sendingCdnClear ? "Clearing..." : "Clear CDN";
            },
            isMakingRequest: function() {
                return this.sendingCdnTakedown || this.sendingCdnRestore || this.sendingCdnClear;
            }
        }),
        methods: G({}, J({
            takedownModuleImage: V.a.TAKEDOWN_MODULE_IMAGE,
            restoreModuleImage: V.a.RESTORE_MODULE_IMAGE,
            clearCdnModuleImage: V.a.CLEAR_CDN_MODULE_IMAGE
        }), {
            handleTakedown: function() {
                var e = this;
                return W(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, e.sendingCdnTakedown = !0, t.next = 4, e.takedownModuleImage({
                                moduleId: e.module.id,
                                reasonId: e.selectedOption ? e.selectedOption.value : null
                            });

                          case 4:
                            setTimeout(function() {
                                H.default.reloadLocation();
                            }, 1e3), t.next = 10;
                            break;

                          case 7:
                            t.prev = 7, t.t0 = t.catch(0), e.sendingCdnTakedown = !1;

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, null, [ [ 0, 7 ] ]);
                }))();
            },
            handleRestore: function() {
                var e = this;
                return W(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, e.sendingCdnRestore = !0, t.next = 4, e.restoreModuleImage({
                                moduleId: e.module.id
                            });

                          case 4:
                            setTimeout(function() {
                                H.default.reloadLocation();
                            }, 1e3), t.next = 10;
                            break;

                          case 7:
                            t.prev = 7, t.t0 = t.catch(0), e.sendingCdnRestore = !1;

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, null, [ [ 0, 7 ] ]);
                }))();
            },
            handleCdnClear: function() {
                var e = this;
                return W(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, e.sendingCdnClear = !0, t.next = 4, e.clearCdnModuleImage({
                                moduleId: e.module.id
                            });

                          case 4:
                            t.next = 8;
                            break;

                          case 6:
                            t.prev = 6, t.t0 = t.catch(0);

                          case 8:
                            e.sendingCdnClear = !1;

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, null, [ [ 0, 6 ] ]);
                }))();
            }
        })
    }, Q = n(1358);
    var ee = Object(d.default)(Z, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.$style.module,
            on: {
                click: function(e) {
                    e.stopPropagation();
                }
            }
        }, [ n("Select", {
            ref: "selectInput",
            attrs: {
                options: e.admin.moderationControls.imageModuleTakedown.reasons,
                placeholder: "Reason..."
            },
            model: {
                value: e.selectedOption,
                callback: function(t) {
                    e.selectedOption = t;
                },
                expression: "selectedOption"
            }
        }), n("Btn", {
            ref: "takedownBtn",
            attrs: {
                type: "danger",
                disabled: e.isMakingRequest || !e.selectedOption
            },
            on: {
                click: e.handleTakedown
            }
        }, [ e._v(e._s(e.btnTakedownText)) ]), n("Btn", {
            ref: "restoreBtn",
            attrs: {
                type: "secondary",
                disabled: e.isMakingRequest
            },
            on: {
                click: e.handleRestore
            }
        }, [ e._v(e._s(e.btnRestoreText)) ]), n("Btn", {
            ref: "clearCdnBtn",
            attrs: {
                type: "secondary",
                disabled: e.isMakingRequest
            },
            on: {
                click: e.handleCdnClear
            }
        }, [ e._v(e._s(e.btnClearText)) ]) ], 1);
    }, [], !1, function(e) {
        this.$style = Q.default.locals || Q.default;
    }, null, null).exports;
    function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function ne(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var oe = {
        props: {
            module: {
                type: Object
            },
            isComponent: {
                type: Boolean,
                default: !1
            },
            isLightbox: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            Btn: M.a,
            CollectionIcon: E.a,
            ModuleDataToggler: z.a,
            ModuleTakedownControl: ee
        },
        data: function() {
            return {
                isEXIFPanelVisible: !1
            };
        },
        computed: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? te(Object(n), !0).forEach(function(t) {
                    ne(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(N.mapGetters)("user", [ "isAdmin" ]), {}, Object(N.mapState)([ "gates" ]), {
            shouldDisplayModuleTakedownAdmin: function() {
                return this.module.is_image && this.isAdmin && this.gates.feature_takedown_project_modules;
            },
            shouldDisplayDataToggler: function() {
                return this.module.exif || this.module.show_auto_tags;
            },
            portalIdentifier: function() {
                var e = this.isComponent ? "grid-item" : "module";
                return this.isLightbox ? e + "-lightbox" : e;
            },
            addToMoodboardPortalTarget: function() {
                return ".js-" + this.portalIdentifier + "-add-to-collection[data-id='" + this.module.id + "']";
            },
            infoPortalTarget: function() {
                return ".js-" + this.portalIdentifier + "-trigger[data-id='" + this.module.id + "']";
            }
        })
    }, re = n(1360);
    var ie = Object(d.default)(oe, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", [ e.shouldDisplayModuleTakedownAdmin && !e.isComponent ? n("portal", {
            attrs: {
                name: "ModuleTakedownAdminPortal",
                "target-el": ".js-module-takedown-admin[data-id='" + e.module.id + "']"
            }
        }, [ n("ModuleTakedownControl", {
            ref: "moduleTakedownControl",
            attrs: {
                module: e.module
            }
        }) ], 1) : e._e(), e.isEXIFPanelVisible || e.isComponent ? e._e() : n("portal", {
            ref: "addToMoodboard",
            attrs: {
                "target-el": e.addToMoodboardPortalTarget
            }
        }, [ n("Btn", {
            ref: "collectionBtn",
            class: [ e.$style.moduleAction, "qa-module-add-to-collection", "ut-module-add-btn" ],
            attrs: {
                type: "inverted"
            },
            nativeOn: {
                click: function(t) {
                    return t.stopPropagation(), e.$emit("intentToAddModuleToCollection", {
                        moduleId: e.module.id
                    });
                }
            }
        }, [ n("CollectionIcon", {
            class: e.$style.collectionIcon,
            attrs: {
                slot: "leadingIcon"
            },
            slot: "leadingIcon"
        }), e._v(" " + e._s(e.$translate("project_moodboard_add", "Add to Moodboard")) + " ") ], 1) ], 1), !e.isEXIFPanelVisible && e.isComponent ? n("portal", {
            attrs: {
                "target-el": e.addToMoodboardPortalTarget
            }
        }, [ n("Btn", {
            ref: "gridItemCollectionBtn",
            class: [ e.$style.moduleAction, e.$style.gridAction, "qa-module-add-to-collection" ],
            attrs: {
                type: "inverted"
            },
            nativeOn: {
                click: function(t) {
                    return t.stopPropagation(), e.$emit("intentToAddModuleToCollection", {
                        gridItemId: e.module.id
                    });
                }
            }
        }, [ n("CollectionIcon", {
            class: e.$style.collectionIcon,
            attrs: {
                slot: "leadingIcon"
            },
            slot: "leadingIcon"
        }), e._v(" " + e._s(e.$translate("project_moodboard_add", "Add to Moodboard")) + " ") ], 1) ], 1) : e._e(), e.shouldDisplayDataToggler && !e.isComponent ? n("portal", {
            attrs: {
                "target-el": e.infoPortalTarget
            }
        }, [ n("ModuleDataToggler", {
            ref: "dataToggler",
            class: [ e.$style.moduleAction, "ut-module-data-toggler" ],
            attrs: {
                exif: e.module.exif,
                canShowAutoTags: e.module.show_auto_tags,
                moduleId: e.module.id
            },
            on: {
                infoBoxShown: function(t) {
                    e.isEXIFPanelVisible = !0, e.$emit("infoBoxShown");
                },
                infoBoxHidden: function(t) {
                    e.isEXIFPanelVisible = !1, e.$emit("infoBoxHidden");
                }
            }
        }) ], 1) : e._e() ], 1);
    }, [], !1, function(e) {
        this.$style = re.default.locals || re.default;
    }, null, null).exports, ae = n(1120), se = n.n(ae), le = {
        root: "root",
        caption: "caption"
    }, ce = {
        data: function() {
            return {
                selectors: le
            };
        },
        props: {
            caption: {
                type: String
            },
            alignment: {
                type: String
            }
        }
    }, ue = Object(d.default)(ce, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {
            ref: "captionContainer",
            class: "project-module caption-container align-" + this.alignment,
            attrs: {
                "data-ut": this.selectors.root
            }
        }, [ t("div", {
            ref: "caption",
            staticClass: "module-caption caption caption-text-wrap",
            attrs: {
                "data-ut": this.selectors.caption
            },
            domProps: {
                innerHTML: this._s(this.caption)
            }
        }) ]);
    }, [], !1, null, null, null).exports, pe = {
        root: "root",
        placeholder: "placeholder"
    }, de = {
        props: {
            module: {
                type: Object
            },
            alt: {
                type: String
            },
            src: {
                type: String
            },
            srcset: {
                type: String
            },
            sizes: {
                type: String
            }
        },
        data: function() {
            return {
                isLoaded: !1,
                selectors: pe
            };
        },
        computed: {
            loadingStyle: function() {
                return {
                    width: this.module.picture.img.width + "px",
                    paddingBottom: this.module.aspect_ratio,
                    backgroundColor: this.module.color ? "rgb(" + this.module.color.r + ", " + this.module.color.g + ", " + this.module.color.b + ")" : null
                };
            }
        },
        mounted: function() {
            this.isLoaded = this.$refs.image.complete;
        }
    }, fe = n(1362);
    var be = Object(d.default)(de, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", {
            class: [ t.$style.root, (e = {}, e[t.$style.loaded] = t.isLoaded, e) ],
            attrs: {
                "data-ut": t.selectors.root
            }
        }, [ o("img", {
            ref: "image",
            class: t.$style.image,
            attrs: {
                src: t.src,
                srcset: t.srcset,
                sizes: t.sizes,
                alt: t.alt
            },
            on: {
                load: function(e) {
                    t.isLoaded = !0;
                }
            }
        }), t.isLoaded ? t._e() : o("div", {
            class: t.$style.placeholder,
            style: t.loadingStyle,
            attrs: {
                "data-ut": t.selectors.placeholder
            }
        }) ]);
    }, [], !1, function(e) {
        this.$style = fe.default.locals || fe.default;
    }, null, null).exports;
    function he(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function me(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var ge = {
        caption: "caption"
    }, ve = {
        components: {
            Actions: ie,
            Caption: ue,
            ImageElement: be
        },
        props: {
            module: {
                type: Object,
                required: !0
            },
            canAccess: {
                type: Boolean
            }
        },
        data: function() {
            return {
                shouldAlwaysShowToggler: !1,
                isEXIFPanelVisible: !1,
                selectors: ge
            };
        },
        computed: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? he(Object(n), !0).forEach(function(t) {
                    me(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(N.mapGetters)("user", [ "isAdmin" ]), {
            fullBleed: function() {
                return Boolean(this.module.full_bleed);
            },
            aspectRatio: function() {
                return this.module.width / this.module.height || this.module.picture.img.width / this.module.picture.img.height;
            },
            isLandscape: function() {
                return this.aspectRatio > 1;
            },
            isIrregularPortrait: function() {
                return this.aspectRatio < 1 / 3;
            },
            portals: function() {
                return se()({
                    id: this.module.id
                });
            },
            srcset: function() {
                if (this.module.picture.sources) {
                    var e = "";
                    return this.module.picture.sources.forEach(function(t) {
                        e += t.srcset + " " + t.width + "w,";
                    }), e;
                }
            },
            hasCaption: function() {
                return !!this.module.caption;
            },
            lightboxContent: function() {
                return D()(this.module);
            }
        })
    }, we = n(1364);
    var _e = Object(d.default)(ve, function() {
        var e, t, n, o, r, i = this, a = i.$createElement, s = i._self._c || a;
        return s("div", {
            ref: "moduleImageContainer",
            class: [ i.$style.moduleImage, "js-project-lightbox-link", "qa-project-module-container", (e = {}, 
            e[i.$style.alwaysShow] = i.isEXIFPanelVisible, e) ]
        }, [ s("div", {
            domProps: {
                innerHTML: i._s(i.portals)
            }
        }), s("Actions", {
            ref: "actions",
            attrs: {
                module: i.module
            },
            on: {
                intentToAddModuleToCollection: function(e) {
                    return i.$emit("intentToAddModuleToCollection", e);
                },
                infoBoxShown: function(e) {
                    i.$emit("infoBoxShown"), i.isEXIFPanelVisible = !0;
                },
                infoBoxHidden: function(e) {
                    i.$emit("infoBoxHidden"), i.isEXIFPanelVisible = !1;
                }
            }
        }), [ s("div", {
            ref: "lightboxContent",
            domProps: {
                innerHTML: i._s(i.lightboxContent)
            }
        }), i.fullBleed ? s("div", {
            ref: "moduleImage",
            class: [ i.$style.fullBleed, (t = {}, t[i.$style.unsafe] = !i.canAccess, t) ]
        }, [ i.canAccess ? s("ImageElement", {
            ref: "image",
            class: i.$style.fullWidth,
            attrs: {
                module: i.module,
                src: i.module.picture.img.src,
                srcset: i.srcset,
                alt: i.module.alt_text
            }
        }) : i._e() ], 1) : s("div", {
            class: (n = {}, n[i.$style.unsafe] = !i.canAccess, n)
        }, [ i.isLandscape ? s("div", {
            ref: "moduleImage",
            class: i.$style.paddedContainer
        }, [ i.canAccess ? s("ImageElement", {
            ref: "image",
            class: [ i.$style.fullImage, (o = {}, o[i.$style.noBottomMargin] = i.hasCaption, 
            o) ],
            attrs: {
                module: i.module,
                src: i.module.picture.img.src,
                srcset: i.srcset,
                sizes: "(max-width: " + i.module.picture.img.width + "px) 100vw, " + i.module.picture.img.width + "px",
                alt: i.module.alt_text
            }
        }) : i._e() ], 1) : i.isIrregularPortrait ? s("div", {
            ref: "moduleImage",
            class: i.$style.moduleImageTallPortraitPadded
        }, [ i.canAccess ? s("ImageElement", {
            ref: "image",
            class: i.$style.fullWidth,
            attrs: {
                module: i.module,
                src: i.module.picture.img.src,
                srcset: i.srcset,
                sizes: "(max-width: " + i.module.picture.img.width + "px) 100vw, " + i.module.picture.img.width + "px",
                alt: i.module.alt_text
            }
        }) : i._e() ], 1) : s("div", {
            ref: "moduleImage",
            class: i.$style.modulePortrait
        }, [ i.canAccess ? s("ImageElement", {
            ref: "image",
            class: [ i.$style.fullHeight, (r = {}, r[i.$style.noBottomMargin] = i.hasCaption, 
            r) ],
            attrs: {
                module: i.module,
                src: i.module.picture.img.src,
                srcset: i.srcset,
                sizes: "(max-width: " + i.module.picture.img.width + "px) 100vw, " + i.module.picture.img.width + "px",
                alt: i.module.alt_text
            }
        }) : i._e() ], 1) ]) ], i.module.caption ? s("Caption", {
            attrs: {
                caption: i.module.caption,
                alignment: i.module.caption_alignement,
                "data-ut": i.selectors.caption
            }
        }) : i._e() ], 2);
    }, [], !1, function(e) {
        this.$style = we.default.locals || we.default;
    }, null, null).exports, ye = (n(188), n(30), n(26));
    function je(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function xe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var Pe = {
        root: "root",
        lazyImage: "lazyImage",
        image: "image",
        unsafe: "unsafe"
    }, Ce = {
        components: {
            Actions: ie,
            Caption: ue,
            ImageElement: be
        },
        props: {
            module: {
                type: Object
            },
            canAccess: {
                type: Boolean
            }
        },
        data: function() {
            return {
                selectors: Pe
            };
        },
        computed: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? je(Object(n), !0).forEach(function(t) {
                    xe(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(N.mapGetters)("user", [ "isFeatureQueueAdmin" ]), {
            blankImageSrc: function() {
                return ye.ASSETS_URL + "img/site/blank.png";
            },
            srcset: function() {
                if (this.module.picture && this.module.picture.sources) return this.module.picture.sources.map(function(e) {
                    return e.srcset + " " + e.width + "w";
                }).join(", ");
            },
            sizes: function() {
                if (this.module.picture && this.module.picture.img) {
                    var e = this.module.picture.img;
                    return "(max-width: " + e.width + "px) 100vw, " + e.width + "px";
                }
            },
            lightboxContent: function() {
                return D()(this.module);
            },
            portals: function() {
                return se()({
                    id: this.module.id
                });
            }
        })
    }, ke = n(1366);
    var Oe = Object(d.default)(Ce, function() {
        var e, t, n = this, o = n.$createElement, r = n._self._c || o;
        return r("div", {
            class: [ "js-project-module js-project-module--image project-module module image project-module-image", (e = {}, 
            e["image-full project-module-image-full"] = Boolean(n.module.full_bleed), e), (t = {}, 
            t[n.selectors.unsafe] = !n.canAccess, t), n.$style.root ],
            attrs: {
                "data-ut": n.selectors.root
            }
        }, [ r("div", {
            staticClass: "js-project-lightbox-link project-module-image-inner-wrap"
        }, [ r("Actions", {
            ref: "actions",
            attrs: {
                module: n.module
            },
            on: {
                intentToAddModuleToCollection: function(e) {
                    return n.$emit("intentToAddModuleToCollection", e);
                },
                infoBoxShown: function(e) {
                    n.$emit("infoBoxShown"), n.isEXIFPanelVisible = !0;
                },
                infoBoxHidden: function(e) {
                    n.$emit("infoBoxHidden"), n.isEXIFPanelVisible = !1;
                }
            }
        }), r("div", {
            domProps: {
                innerHTML: n._s(n.lightboxContent)
            }
        }), r("div", {
            domProps: {
                innerHTML: n._s(n.portals)
            }
        }), n.canAccess && !n.isFeatureQueueAdmin ? [ n.module.is_lazy ? r("img", {
            staticClass: "js-lazy",
            style: "padding-bottom: " + n.module.aspect_ratio + "; background: rgba(0, 0, 0, 0.03)",
            attrs: {
                src: n.blankImageSrc,
                "data-src": n.module.picture.img.src,
                "data-srcset": n.srcset,
                "data-sizes": n.sizes,
                "data-ut": n.selectors.lazyImage,
                width: n.module.picture.img.width,
                height: "0",
                alt: n.module.alt_text
            }
        }) : r("ImageElement", {
            ref: n.selectors.image,
            attrs: {
                module: n.module,
                sizes: n.sizes,
                "data-ut": n.selectors.image,
                src: n.module.picture.img.src,
                srcset: n.srcset,
                alt: n.module.alt_text
            }
        }) ] : n.canAccess && n.isFeatureQueueAdmin ? r("ImageElement", {
            attrs: {
                module: n.module,
                src: n.module.picture.img.src,
                srcset: n.srcset,
                sizes: n.sizes,
                "data-ut": n.selectors.image,
                alt: n.module.alt_text
            }
        }) : n._e() ], 2), n.module.caption ? r("Caption", {
            attrs: {
                caption: n.module.caption,
                alignment: n.module.caption_alignement
            }
        }) : n._e() ], 1);
    }, [], !1, function(e) {
        this.$style = ke.default.locals || ke.default;
    }, null, null).exports, Ie = (n(633), Object(d.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            staticClass: "icon",
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 62.44 62.437"
            }
        }, [ t("path", {
            attrs: {
                d: "M51.871 45.192c1.557 1.55 3.018 3 4.465 4.454q2.651 2.67 5.285 5.361a2.13 2.13 0 0 1 .017 3.344q-1.6 1.646-3.225 3.274a2.056 2.056 0 0 1-3.289-.022q-4.653-4.7-9.3-9.414c-.183-.184-.375-.362-.64-.618-.728 1.825-1.4 3.589-2.134 5.33a2.408 2.408 0 0 1-3.836 1.023 2.848 2.848 0 0 1-.743-1.007q-5.833-13.313-11.635-26.645a2.49 2.49 0 0 1 .443-3.01 2.539 2.539 0 0 1 3.126-.356l23.17 10.418c.932.42 1.869.831 2.8 1.25a2.556 2.556 0 0 1-.033 4.771zm7.366 11.394c-.206-.183-.393-.331-.561-.5q-5.035-5.105-10.062-10.218c-1.06-1.079-.834-2.136.565-2.71 1.333-.548 2.673-1.08 4.006-1.625.411-.167.815-.354 1.372-.6-8.326-3.737-16.483-7.4-24.817-11.141 3.7 8.5 7.317 16.791 11 25.226.874-2.211 1.671-4.254 2.492-6.288.573-1.416 1.616-1.619 2.684-.537q5.152 5.213 10.294 10.435c.18.183.37.354.514.492.844-.853 1.64-1.656 2.513-2.535z"
            }
        }), t("path", {
            attrs: {
                d: "M27.311.001a27.29 27.29 0 0 1 25.9 19.688 49.544 49.544 0 0 1 1.151 6.637 1.888 1.888 0 0 1-1.622 2.262c-1.151.136-1.892-.559-2.131-1.88-.443-2.445-.6-5.011-1.464-7.3-3.354-8.819-9.779-14.021-19.089-15.236a23.282 23.282 0 0 0-25.53 17.492c-3.521 13.495 5.5 27.291 19.143 29.258.713.1 1.435.142 2.153.222 1.352.15 2.1.98 1.97 2.169-.123 1.113-1.038 1.72-2.343 1.61-9.651-.823-17.033-5.4-21.866-13.846C-5.486 25.245 3.499 4.829 21.207.872c2-.444 4.067-.588 6.104-.871zm-.058 10.519c6.941.373 12.1 3.521 15.223 9.861.648 1.313.35 2.437-.707 2.927s-1.981.028-2.632-1.257c-2.706-5.33-7.032-7.9-12.961-7.645-5.673.242-11.014 5.155-11.854 10.838a13.143 13.143 0 0 0 7.531 14.424c1.221.61 1.675 1.564 1.232 2.587a1.926 1.926 0 0 1-2.791.841 17.031 17.031 0 0 1 3.878-32.229c1.013-.181 2.047-.235 3.082-.348z"
            }
        }) ]);
    }, [], !1, null, null, null).exports), Te = n(1368), Se = n.n(Te), Ae = n(27), $e = {
        components: {
            EmbedIcon: Ie
        },
        props: {
            module: {
                type: Object
            },
            canAccess: {
                type: Boolean
            }
        },
        computed: {
            dimensions: function() {
                var e = this.getVideoPlayerSize(), t = e.width, n = e.height;
                return "video" === this.module.type ? {
                    width: 1200,
                    height: Math.round(n / t * 1200)
                } : {
                    width: t,
                    height: n
                };
            },
            embed: function() {
                var e = /(<iframe[\s\S]+?<\/iframe>)/.exec(this.module.embed);
                if (!e) return {};
                var t = {};
                return e[1].replace(/(\w+)=('|")(.*?)\2/g, function(e, n, o, r) {
                    t[n] = r;
                }), t;
            },
            iframeTitle: function() {
                return this.module.caption_plain || this.$translate("project_embed_iframe_title_default", "Project Embed Content");
            },
            lightboxContent: function() {
                return Se()(this.module);
            },
            ratio: function() {
                var e = this.getVideoPlayerSize(), t = e.width;
                return (e.height / t * 100).toFixed(2);
            },
            paddingUnit: function() {
                return this.module.width_unit && "px" !== this.module.width_unit ? "px" : "%";
            },
            aspectRatioHeight: function() {
                return "audio" === this.module.type ? "75px" : "0px";
            },
            shouldGenerateEmbedOverlay: function() {
                if ("embed" !== this.module.type) return !1;
                return /\binvis\.io|\bxd\.adobe\.com/.test(this.module.original_embed);
            }
        },
        methods: {
            getVideoPlayerSize: function() {
                if ("audio" === this.module.type) return {
                    width: 1280,
                    height: 75
                };
                if (!this.module.original_width || !this.module.original_height) return {
                    width: this.module.width,
                    height: this.module.height
                };
                if (!this.module.width) return {
                    width: this.module.original_width,
                    height: this.module.original_height
                };
                if (this.module.original_width > this.module.width) {
                    var e = this.module.width / this.module.original_width;
                    return {
                        width: this.module.width,
                        height: Math.floor(this.module.original_height * e)
                    };
                }
                return {
                    width: this.module.original_width,
                    height: this.module.original_height
                };
            }
        },
        mounted: function() {
            var e = this.embed;
            0 === Object.keys(e).length ? Ae.default.info("embedfail", "embed_attr_failed", {
                module_id: this.module.id,
                module_type: this.module.type,
                embed: this.module.embed
            }) : e.src || Ae.default.info("embedfail", "embed_src_failed", {
                module_id: this.module.id,
                module_type: this.module.type,
                embed: this.module.embed
            });
        }
    }, Me = n(1369);
    var Ee = Object(d.default)($e, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", {
            class: [ "js-project-module project-module module js-project-lightbox-link", t.module.type + " project-module-" + t.module.type + " js-project-module--" + t.module.type, (e = {}, 
            e["embed-full project-module-embed-full"] = Boolean(t.module.full_bleed), e), {
                unsafe: !t.canAccess
            }, t.$style.root ],
            attrs: {
                "data-ut": "EmbedModule-root",
                "data-no-prefetch": "true"
            }
        }, [ t.canAccess ? o("div", [ t.shouldGenerateEmbedOverlay ? o("div", {
            staticClass: "project-embed-overlay js-project-embed-overlay"
        }, [ o("div", {
            staticClass: "project-embed-icon-container"
        }, [ o("EmbedIcon", {
            class: t.$style.embedIcon
        }), o("div", {
            staticClass: "project-embed-overlay-text"
        }, [ t._v(" " + t._s(t.$translate("project_embed_overlay_click_to_launch", "Click to launch an interactive prototype")) + " ") ]) ], 1) ]) : t._e(), o("div", {
            domProps: {
                innerHTML: t._s(t.lightboxContent)
            }
        }), t.embed.src ? o("div", {
            staticClass: "embed-dimensions",
            style: {
                maxWidth: "" + t.dimensions.width + (t.module.width_unit || "px"),
                maxHeight: t.dimensions.height + "px",
                margin: "0 auto"
            }
        }, [ o("div", {
            staticClass: "embed-aspect-ratio",
            style: {
                paddingBottom: "" + t.ratio + t.paddingUnit,
                position: "relative",
                height: t.aspectRatioHeight
            }
        }, [ o("iframe", {
            staticClass: "embed-content",
            staticStyle: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            },
            attrs: {
                src: t.embed.src,
                title: t.iframeTitle,
                frameborder: "0",
                allowfullscreen: "",
                "data-ut": "embed-content"
            }
        }) ]) ]) : o("div", {
            domProps: {
                innerHTML: t._s(t.module.embed)
            }
        }) ]) : t._e() ]);
    }, [], !1, function(e) {
        this.$style = Me.default.locals || Me.default;
    }, null, null).exports, Be = n(1371), Le = n.n(Be), Ne = n(1374), Re = n.n(Ne), De = n(1377), ze = n.n(De);
    function Fe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function He(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Fe(Object(n), !0).forEach(function(t) {
                Ve(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fe(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    function Ve(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var Ue = {
        root: "root",
        caption: "caption",
        exifVisible: "project-module--exif-visible"
    }, We = {
        components: {
            Actions: ie,
            Caption: ue,
            ModuleSingleImage: _e,
            ImageModule: Oe,
            EmbedModule: Ee
        },
        props: {
            module: {
                type: Object,
                required: !0
            },
            canAccess: {
                type: Boolean
            },
            isSingleImageProject: {
                type: Boolean
            }
        },
        data: function() {
            return {
                overlayPermittedUrls: /\binvis.io|\bxd.adobe.com/g,
                isEXIFPanelVisible: !1,
                moduleType: i.b,
                selectors: Ue
            };
        },
        computed: He({}, Object(N.mapState)([ "gates" ]), {
            isImageModule: function() {
                return "image" === this.module.type;
            },
            isEmbededModule: function() {
                return "embed" === this.module.type || "video" === this.module.type || "audio" === this.module.type;
            },
            imageComponent: function() {
                return this.isSingleImageProject ? _e : Oe;
            },
            template: function() {
                var e = He({}, this.module, {
                    can_access: this.canAccess,
                    shouldGenerateEmbedOverlay: this.shouldGenerateEmbedOverlay,
                    IMAGESURL: ye.ASSETS_URL
                });
                return "text" === this.module.type ? ze()(e) : "media_collection" === this.module.type ? Re()(e) : Le()(e);
            },
            shouldGenerateEmbedOverlay: function() {
                return !!this.module.is_embed && this.overlayPermittedUrls.test(this.module.original_embed);
            }
        }),
        methods: {
            handleInfoBoxShown: function() {
                this.$emit("infoBoxShown"), this.isEXIFPanelVisible = !0;
            },
            handleInfoBoxHidden: function() {
                this.$emit("infoBoxHidden"), this.isEXIFPanelVisible = !1;
            }
        }
    }, qe = n(1378);
    var Ge = Object(d.default)(We, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", {
            class: [ t.$style.module, (e = {}, e[t.selectors.exifVisible] = t.isEXIFPanelVisible, 
            e), t.selectors.root ]
        }, [ t.isImageModule ? o(t.imageComponent, {
            ref: "imageModule",
            tag: "component",
            attrs: {
                canAccess: t.canAccess,
                module: t.module
            },
            on: {
                infoBoxShown: t.handleInfoBoxShown,
                infoBoxHidden: t.handleInfoBoxHidden,
                intentToAddModuleToCollection: function(e) {
                    return t.$emit("intentToAddModuleToCollection", e);
                }
            }
        }) : [ t.module.type === t.moduleType.GRID ? o("div", t._l(t.module.components, function(e) {
            return o("Actions", {
                key: e.id,
                ref: "actions",
                refInFor: !0,
                attrs: {
                    isComponent: !0,
                    module: e
                },
                on: {
                    intentToAddModuleToCollection: function(e) {
                        return t.$emit("intentToAddModuleToCollection", e);
                    },
                    infoBoxShown: t.handleInfoBoxShown,
                    infoBoxHidden: t.handleInfoBoxHidden
                }
            });
        }), 1) : t._e(), t.isEmbededModule && Boolean(t.gates.feature_vue_embed_module) ? o("EmbedModule", {
            ref: "embedModule",
            attrs: {
                canAccess: t.canAccess,
                module: t.module
            }
        }) : o("div", {
            ref: "container",
            domProps: {
                innerHTML: t._s(t.template)
            }
        }), t.module.caption ? o("Caption", {
            attrs: {
                caption: t.module.caption,
                alignment: t.module.caption_alignement,
                "data-ut": t.selectors.caption
            }
        }) : t._e() ] ], 2);
    }, [], !1, function(e) {
        this.$style = qe.default.locals || qe.default;
    }, null, null).exports, Ke = n(519), Ye = n(560), Xe = n(1380), Je = n.n(Xe), Ze = {
        props: {
            urls: {
                type: Object
            }
        },
        computed: {
            EditBtn: function() {
                return Je()({
                    URLS: this.urls
                });
            }
        }
    }, Qe = Object(d.default)(Ze, function() {
        var e = this.$createElement;
        return (this._self._c || e)("div", {
            ref: "editButton",
            domProps: {
                innerHTML: this._s(this.EditBtn)
            }
        });
    }, [], !1, null, null, null).exports, et = n(366);
    function tt(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    function nt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function ot(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var rt = {
        name: "OtherProject",
        props: {
            owners: {
                type: Array
            },
            projectTitle: {
                type: String
            },
            otherProjects: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            followeeId: {
                type: Number
            },
            isFollowing: {
                type: Boolean
            },
            urls: {
                type: Object
            },
            isProjectOwner: {
                type: Boolean
            }
        },
        data: function() {
            return {
                trackingSource: "project_owner_other_projects",
                mounted: !1
            };
        },
        components: {
            ProjectCoverNeue: Ke.a,
            Scroller: et.a,
            Follow: L.a,
            Avatar: g.a,
            MultipleOwners: Ye.a,
            EditProjectBtn: Qe
        },
        methods: {
            resetScroller: function() {
                this.$refs.otherProjectsScroller && this.$refs.otherProjectsScroller.resetScroller({
                    force: !0
                });
            }
        },
        computed: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nt(Object(n), !0).forEach(function(t) {
                    ot(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(N.mapState)({
            locale: function(e) {
                return e.translation.localization.LOCALE;
            }
        }), {
            isMultipleOwner: function() {
                return this.owners.length > 1;
            },
            entityDisplayName: function() {
                return this.isMultipleOwner ? this.$translate("project_other_projects_follow_multiple_owners", "{owner1} and {owner2}", {
                    owner1: this.owners[0].display_name,
                    owner2: this.owners[1].display_name
                }) : this.owners[0].display_name;
            },
            scrollerBreakpoints: function() {
                return [ {
                    documentWidth: 0,
                    itemMinWidth: 200
                }, {
                    documentWidth: 603,
                    itemMinWidth: 250
                }, {
                    documentWidth: 1024,
                    itemMinWidth: 285
                } ];
            }
        }),
        mounted: function() {
            var e, t = this;
            return (e = regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t.mounted = !0, e.next = 3, t.$nextTick();

                      case 3:
                        setTimeout(t.resetScroller, 100);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }), function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                        tt(i, o, r, a, s, "next", e);
                    }
                    function s(e) {
                        tt(i, o, r, a, s, "throw", e);
                    }
                    a(void 0);
                });
            })();
        }
    }, it = n(1382);
    var at = Object(d.default)(rt, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            ref: "root",
            class: e.$style.scrollerMoreProject,
            attrs: {
                "data-ut": "other-projects"
            }
        }, [ n("div", {
            class: e.$style.header
        }, [ n("Avatar", {
            ref: "avatar",
            class: e.$style.userAvatar,
            attrs: {
                owners: e.owners,
                isDisabled: e.isMultipleOwner,
                size: 50
            }
        }), n("div", {
            ref: "ownerInfo",
            class: e.$style.userInfo
        }, [ e.isMultipleOwner ? n("MultipleOwners", {
            ref: "ownerName",
            attrs: {
                owners: e.owners
            }
        }) : n("a", {
            ref: "ownerName",
            class: [ e.$style.userName, "js-mini-profile" ],
            attrs: {
                target: "_blank",
                "data-id": e.owners[0].id,
                href: e.owners[0].url
            }
        }, [ e._v(e._s(e.owners[0].display_name)) ]), e.isProjectOwner ? n("EditProjectBtn", {
            ref: "editBtn",
            class: [ e.$style.actionBtn, e.$style.editBtn ],
            attrs: {
                urls: e.urls
            }
        }) : n("Follow", {
            ref: "followButton",
            class: e.$style.actionBtn,
            attrs: {
                type: e.isMultipleOwner ? "all" : "userSmall",
                followeeId: e.followeeId,
                entityType: e.isMultipleOwner ? "project" : "user",
                isFollowing: e.isFollowing,
                displayName: e.entityDisplayName,
                source: "projectRelatedProjects"
            }
        }) ], 1) ], 1), n("ul", {
            ref: "scrollWrapper",
            class: e.$style.scrollerProjectWrapper
        }, [ e.mounted ? n("Scroller", {
            ref: "otherProjectsScroller",
            attrs: {
                items: e.otherProjects,
                breakpoints: e.scrollerBreakpoints
            },
            scopedSlots: e._u([ {
                key: "item",
                fn: function(t) {
                    return [ t.item.emptyPlaceholder ? e._e() : n("ProjectCoverNeue", {
                        ref: "scrollerProjectCover",
                        class: e.$style.scrollerProjectCover,
                        attrs: {
                            "data-ut": "other-projects-scroller-cover",
                            project: t.item,
                            areDetailsShownOnMobile: !1,
                            trackingSource: e.trackingSource,
                            hasNoConstraints: !0,
                            shouldRemoveMultiOwnerTooltip: !0,
                            locale: e.locale
                        }
                    }) ];
                }
            } ], null, !1, 426375137)
        }) : e._e() ], 1) ]);
    }, [], !1, function(e) {
        this.$style = it.default.locals || it.default;
    }, null, null).exports, st = (n(54), n(742)), lt = n(1026), ct = n(16).default.extend({
        name: "ProjectTags",
        props: {
            tags: Array
        }
    }), ut = n(1384);
    var pt = Object(d.default)(ct, function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("ul", {
            ref: "projectTags",
            class: [ e.$style.projectTags, "js-project-tags" ]
        }, e._l(e.tags, function(t, o) {
            return n("li", {
                key: "tags-" + o,
                ref: "tag",
                refInFor: !0,
                class: e.$style.tag
            }, [ n("a", {
                class: e.$style.tagLink,
                attrs: {
                    href: t.url
                }
            }, [ e._v(" " + e._s(t.title) + " ") ]) ]);
        }), 0);
    }, [], !1, function(e) {
        this.$style = ut.default.locals || ut.default;
    }, null, null).exports, dt = n(1386), ft = n.n(dt), bt = n(767), ht = n(836);
    function mt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function gt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var vt = {
        props: {
            user: {
                type: Object
            },
            owner: {
                type: Object
            },
            hasCommentChildFocus: {
                type: Boolean
            },
            isFullWidth: {
                type: Boolean
            }
        },
        components: {
            AdobeLogoIcon: bt.a,
            Btn: M.a,
            SignUpPrompt: ht.a
        },
        computed: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? mt(Object(n), !0).forEach(function(t) {
                    gt(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(N.mapState)({
            isPartialUser: function(e) {
                return e.config.SSO.IS_PARTIAL_USER;
            },
            isFullUser: function(e) {
                return e.config.SSO.IS_LOGGED_IN_FULL_USER;
            }
        }), {
            CommentsSection: function() {
                return ft()({
                    loggedIn: this.isFullUser,
                    loggedInUser: this.user,
                    partialUser: this.isPartialUser,
                    body: {
                        containerId: "comment-container",
                        containerClasses: [ "js-comment-form-item-container" ],
                        id: "comment",
                        name: "comment",
                        placeholder: this.$translate("project_post_comment_placeholder", "What are your thoughts on this project?"),
                        classes: [ "form-textarea", "form-text-normal", "js-characters-limited", "js-comment-textarea" ],
                        validate: "required,Generic,length[0,800]",
                        attrs: 'rows="10" cols="60"'
                    }
                });
            }
        })
    }, wt = n(1391);
    var _t = Object(d.default)(vt, function() {
        var e, t, n = this, o = n.$createElement, r = n._self._c || o;
        return r("div", {
            class: [ n.$style.root, (e = {}, e[n.$style.fullWidthComment] = n.isFullWidth, e) ]
        }, [ n.isFullUser ? n._e() : [ n.isPartialUser ? r("portal", {
            attrs: {
                name: "ProjectCommentActivatePrompt",
                "target-el": ".js-vue-project-comment-activate-prompt-portal"
            }
        }, [ r("SignUpPrompt", {
            ref: "activatePrompt",
            class: n.$style.signUpPrompt,
            attrs: {
                context: "feature_comment_activate_prompt",
                isSmallPrompt: !0,
                delay: 0,
                canClose: !1,
                isHiddenMobile: !1,
                analyticsChannel: "activate_prompt"
            }
        }, [ r("h3", {
            class: n.$style.activateHeader
        }, [ n._v(n._s(n.$translate("project_comment_activate_prompt", "Activate your account to join the conversation."))) ]), r("Btn", {
            staticClass: "js-adobeid-signup",
            attrs: {
                type: "primary",
                "data-signup-from": "js-adobeid-signup"
            }
        }, [ r("AdobeLogoIcon", {
            class: n.$style.logo,
            attrs: {
                slot: "leadingIcon"
            },
            slot: "leadingIcon"
        }), n._v(" " + n._s(n.$translate("project_comment_activate_prompt", "1-click activation")) + " ") ], 1) ], 1) ], 1) : r("portal", {
            attrs: {
                name: "ProjectCommentSignUpPrompt",
                "target-el": ".js-vue-project-comment-signup-prompt-portal"
            }
        }, [ r("SignUpPrompt", {
            ref: "signUpPrompt",
            class: n.$style.signUpPrompt,
            attrs: {
                context: "feature_comment_login_prompt",
                header: n.$translate("signup_prompt_comment_header", "Sign up to join the conversation"),
                subHeader: n.$translate("signup_prompt_project_text", "Add your feedback for {displayName}’s project by signing in or signing up.", {
                    displayName: n.owner.display_name
                }),
                isSmallPrompt: !0,
                delay: 0,
                canClose: !1,
                isHiddenMobile: !1
            }
        }) ], 1) ], r("div", {
            ref: "root",
            class: [ n.$style.projectComment, (t = {}, t[n.$style.childHasFocus] = n.hasCommentChildFocus, 
            t), "qa-project-comment" ],
            attrs: {
                "data-ut": "project-comments"
            },
            domProps: {
                innerHTML: n._s(n.CommentsSection)
            }
        }) ], 2);
    }, [], !1, function(e) {
        this.$style = wt.default.locals || wt.default;
    }, null, null).exports, yt = n(843), jt = n(221);
    function xt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function Pt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var Ct = {
        components: {
            ProjectOwnersInfo: st.a,
            ProjectTools: lt.a,
            ProjectTags: pt,
            ProjectComments: _t,
            ProjectCopyright: yt.a,
            FollowBtn: L.a,
            Btn: M.a
        },
        props: {
            project: {
                type: Object
            },
            allowComments: {
                type: Boolean
            },
            hasCommentChildFocus: {
                type: Boolean
            },
            appreciationCount: {
                type: Number,
                default: 0
            },
            viewsCount: {
                type: Number,
                default: 0
            },
            user: {
                type: Object
            },
            commentCount: {
                type: Number,
                default: 0
            },
            credits: {
                type: Array
            },
            publishedDate: {
                type: String
            },
            isFullWidth: {
                type: Boolean
            }
        },
        data: function() {
            return {
                isViewingShortDescription: !1
            };
        },
        filters: {
            commaSplit: jt.b,
            abbreviate: jt.a
        },
        computed: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? xt(Object(n), !0).forEach(function(t) {
                    Pt(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, Object(N.mapState)({
            locale: function(e) {
                return e.translation.localization.LOCALE;
            }
        }), {
            projectDescription: function() {
                return this.project.description_shortened && !this.isViewingShortDescription ? this.project.description_shortened : this.project.description;
            }
        })
    }, kt = n(1393);
    var Ot = Object(d.default)(Ct, function() {
        var e, t = this, n = t.$createElement, o = t._self._c || n;
        return o("div", {
            ref: "root",
            class: [ t.$style.projectFooter, (e = {}, e[t.$style.fullWidthInfoBox] = t.isFullWidth, 
            e), "qa-project-info" ]
        }, [ o("div", {
            class: t.$style.container
        }, [ t.allowComments ? o("ProjectComments", {
            ref: "projectComments",
            attrs: {
                isFullWidth: t.isFullWidth,
                user: t.user,
                owner: t.project.owners[0],
                hasCommentChildFocus: t.hasCommentChildFocus
            }
        }) : t._e(), o("div", {
            ref: "projectInfo",
            class: t.$style.sideBar
        }, [ o("ProjectOwnersInfo", {
            ref: "ownerInfo",
            class: [ t.$style.infoBlocks, t.$style.profileInfo ],
            attrs: {
                users: t.project.owners
            }
        }, [ o("template", {
            slot: "title"
        }, [ t._v(t._s(t.$translate("project_owners_title", "Owners"))) ]), t._l(t.project.owners, function(e, n) {
            return [ e.is_profile_owner ? t._e() : o("FollowBtn", {
                key: "user-action-" + n,
                ref: "followButton",
                refInFor: !0,
                attrs: {
                    slot: "userAction" + n,
                    type: "userSmall",
                    followeeId: e.id,
                    entityType: "user",
                    isFollowing: Boolean(e.is_following),
                    displayName: e.display_name,
                    source: "projectInfo"
                },
                slot: "userAction" + n
            }) ];
        }) ], 2), t.credits && t.credits.length ? o("ProjectOwnersInfo", {
            ref: "creditInfo",
            class: [ t.$style.infoBlocks, t.$style.profileInfo ],
            attrs: {
                users: t.credits
            }
        }, [ o("template", {
            slot: "title"
        }, [ t._v(t._s(t.$translate("project_credits_title", "Credits"))) ]), t._l(t.credits, function(e, n) {
            return o("div", {
                key: "user-action-" + n,
                attrs: {
                    slot: "userAction" + n
                },
                slot: "userAction" + n
            }, [ t.user && e.id === t.user.id ? o("Btn", {
                ref: "removeButton",
                refInFor: !0,
                attrs: {
                    size: "small",
                    type: "base"
                },
                on: {
                    click: function(e) {
                        return t.$emit("removeCredit");
                    }
                }
            }, [ t._v(t._s(t.$translate("project_credits_remove", "Remove"))) ]) : o("FollowBtn", {
                ref: "creditsFollowButton",
                refInFor: !0,
                attrs: {
                    type: "userSmall",
                    followeeId: e.id,
                    entityType: "user",
                    isFollowing: Boolean(e.is_following),
                    displayName: e.display_name,
                    source: "projectInfo"
                }
            }) ], 1);
        }) ], 2) : t._e(), t.project.teams && t.project.teams.length ? o("ProjectOwnersInfo", {
            ref: "teamsInfo",
            class: [ t.$style.infoBlocks, t.$style.profileInfo ],
            attrs: {
                users: t.project.teams,
                shouldHaveMiniProfile: !1
            }
        }, [ o("template", {
            slot: "title"
        }, [ t._v(t._s(t.$translate("project_credits_teams", "Project Made For"))) ]) ], 2) : t._e(), o("div", {
            ref: "projectBasicInfo",
            class: [ t.$style.infoBlocks, t.$style.basicInfo ]
        }, [ o("h1", {
            ref: "projectName",
            class: t.$style.projectName
        }, [ t._v(t._s(this.project.name)) ]), t.project.has_description ? o("article", {
            ref: "projectDescription",
            class: t.$style.projectDescription
        }, [ t._v(" " + t._s(t.projectDescription) + " "), t.project.description_shortened ? o("a", {
            ref: "descriptionToggleButton",
            class: t.$style.moreToggle,
            on: {
                click: function(e) {
                    t.isViewingShortDescription = !t.isViewingShortDescription;
                }
            }
        }, [ t.isViewingShortDescription ? [ t._v(t._s(t.$translate("moretoggle_read_less", "Read Less"))) ] : [ t._v(t._s(t.$translate("moretoggle_read_more", "Read More"))) ] ], 2) : t._e() ]) : t._e(), o("div", {
            class: t.$style.projectStats
        }, [ o("div", {
            ref: "appreciations",
            class: [ t.$style.projectStat, "beicons-pre", "beicons-pre-thumb", "qa-stats-appreciations" ]
        }, [ o("span", {
            ref: "appreciationCount",
            attrs: {
                title: t._f("commaSplit")(t.appreciationCount, t.locale)
            }
        }, [ t._v(t._s(t._f("abbreviate")(t.appreciationCount, t.locale))) ]) ]), o("div", {
            ref: "views",
            class: [ t.$style.projectStat, " beicons-pre", "beicons-pre-eye" ]
        }, [ o("span", {
            ref: "viewsCount",
            attrs: {
                title: t._f("commaSplit")(t.viewsCount, t.locale)
            }
        }, [ t._v(t._s(t._f("abbreviate")(t.viewsCount, t.locale))) ]) ]), o("div", {
            ref: "commentCount",
            class: [ t.$style.projectStat, " beicons-pre", "beicons-pre-comment", "qa-project-comment-count" ]
        }, [ o("span", {
            ref: "commentCountTitle",
            attrs: {
                title: t._f("commaSplit")(t.commentCount, t.locale)
            }
        }, [ t._v(t._s(t._f("abbreviate")(t.commentCount, t.locale))) ]) ]) ]), o("div", {
            class: t.$style.projectPublished
        }, [ t._v(" " + t._s(t.$translate("project_published_date", "Published:")) + " "), o("span", {
            staticClass: "js-format-timestamp",
            attrs: {
                "data-timestamp": this.project.published_on
            }
        }), o("time", {
            ref: "publishedDate",
            attrs: {
                datetime: t.publishedDate
            }
        }, [ t._v(t._s(t.publishedDate)) ]) ]) ]), t.project.has_tools || Boolean(t.project.fields && t.project.fields.length) ? o("ProjectTools", {
            ref: "projectTools",
            class: [ t.$style.infoBlocks, t.$style.projectTools ],
            attrs: {
                "data-ut": "project-tools-fields",
                tools: t.project.tools,
                fields: t.project.fields
            },
            on: {
                toolOpened: function(e) {
                    return t.$emit("toolOpened", e);
                },
                galleryOpened: function(e) {
                    return t.$emit("galleryOpened", e);
                }
            }
        }) : t._e(), t.project.has_tags ? o("ProjectTags", {
            ref: "projectTags",
            class: [ t.$style.infoBlocks, t.$style.projectTags ],
            attrs: {
                "data-ut": "project-tags",
                tags: t.project.tags
            }
        }) : t._e(), t.project.copyright && t.project.copyright.info ? o("ProjectCopyright", {
            ref: "projectCopyright",
            attrs: {
                isNotProject: !1,
                projectId: t.project.id,
                copyright: t.project.copyright,
                isProfileOwner: t.project.is_owner,
                isLoggedIn: Boolean(t.user)
            }
        }) : t._e() ], 1) ], 1) ]);
    }, [], !1, function(e) {
        this.$style = kt.default.locals || kt.default;
    }, null, null).exports, It = n(1395), Tt = n.n(It), St = n(327), At = n(641), $t = n(563), Mt = n(741), Et = n(841), Bt = n(78), Lt = n.n(Bt), Nt = n(720), Rt = n(596), Dt = n.n(Rt);
    function zt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? zt(Object(n), !0).forEach(function(t) {
                Ht(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    function Ht(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var Vt = {
        data: function() {
            return {
                featureCap: 5,
                hasNoTopSection: !1,
                isAddToCollectionVisible: !1,
                isAppreciateButtonSticky: !1,
                isNewAppreciation: !1,
                isPostAppreciateTooltipVisible: !0,
                scrollTimeout: null,
                notificationType: null,
                lightboxCaptionSelector: "",
                viewedModules: [],
                startTime: 0
            };
        },
        props: {
            project: {
                type: Object,
                required: !0
            },
            appreciationCount: {
                type: Number
            },
            hasCommentChildFocus: {
                type: Boolean
            },
            isMatureReviewSubmitted: {
                type: Boolean
            },
            isLightboxOpen: {
                type: Boolean
            },
            lightboxActiveSlideIdx: {
                type: Number
            },
            urls: {
                type: Object
            },
            isAppreciated: {
                type: Boolean
            },
            otherProjects: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            isFullPage: {
                type: Boolean,
                default: !1
            },
            disableUserActions: {
                type: Boolean,
                default: !1
            },
            user: {
                type: Object
            },
            projectOwnerMiniprofile: {
                type: Object
            },
            commentCount: {
                type: Number
            },
            credits: {
                type: Array
            },
            pulsePoints: {
                type: Object
            },
            didInitAppreciate: {
                type: Boolean
            },
            displayAdminSidebar: {
                type: Boolean
            },
            scrollTopPosition: {
                type: Number
            },
            collectionAdded: {
                type: Object
            },
            isNarrowProject: {
                type: Boolean
            }
        },
        filters: {
            commaSplit: jt.b,
            abbreviate: jt.a
        },
        computed: Ft({}, Object(N.mapState)({
            locale: function(e) {
                return e.translation.localization.LOCALE.replace("_", "-");
            },
            shouldTrackUserProgress: function(e) {
                return e.gates.track_user_project_progress;
            },
            shouldShowRedesign: function(e) {
                return e.gates.feature_editor_redesign;
            }
        }), {
            appreciationNotifSeenKey: function() {
                return "user_" + (this.user ? this.user.id : "") + "_seen_appreciation_notif";
            },
            viewsCount: function() {
                return this.project.stats.views || 0;
            },
            belongsToCurrentUser: function() {
                return this.project.owners[0].is_profile_owner;
            },
            topInfoHeight: function() {
                return this.$refs.topSection.offsetHeight;
            },
            isSingleImageProject: function() {
                return this.project.modules && 1 === this.project.modules.length && "image" === this.project.modules[0].type;
            },
            isFirstModuleFB: function() {
                return this.project.modules && this.project.modules[0] && Boolean(this.project.modules[0].full_bleed);
            },
            lastSlide: function() {
                return Tt()(Ft({}, this.project, {
                    otherProjects: this.otherProjects,
                    hasOtherProjects: Boolean(this.otherProjects.length)
                }));
            },
            itemAdded: function() {
                var e = this;
                if (this.collectionAdded && this.collectionAdded.item && this.collectionAdded.item.id) {
                    if (this.collectionAdded.item.type === ye.ENTITY_TYPES.MODULE) return this.project.modules.find(function(t) {
                        return t.id === e.collectionAdded.item.id;
                    });
                    if (this.collectionAdded.item.type === ye.ENTITY_TYPES.MEDIA) {
                        var t = this.project.modules.find(function(t) {
                            return t.components ? t.components.some(function(t) {
                                return t.id === e.collectionAdded.item.id;
                            }) : null;
                        });
                        return t.components ? t.components.find(function(t) {
                            return t.id === e.collectionAdded.item.id;
                        }) : null;
                    }
                }
            },
            itemImageSrc: function() {
                return "CollectionNotifications" === this.notificationType && this.collectionAdded && this.collectionAdded.item && this.collectionAdded.item.id && this.itemAdded ? Object(o.f)(this.itemAdded.src) && this.itemAdded.sizes.disp_still || this.itemAdded.sizes.disp : Object(r.e)(this.project.covers);
            },
            itemImagesSrcSet: function() {
                if ("CollectionNotifications" === this.notificationType && this.collectionAdded && this.collectionAdded.item && this.collectionAdded.item.id && this.itemAdded) {
                    var e = Object(o.c)(this.itemAdded.sizes), t = e.srcset, n = e.gifStillSrcset;
                    return Object(o.f)(this.itemAdded.src) && n || t;
                }
                return Object(o.d)(this.project.covers);
            },
            itemFillerColor: function() {
                return "CollectionNotifications" === this.notificationType && this.collectionAdded && this.collectionAdded.item && this.collectionAdded.item.id ? [ {
                    r: 204,
                    g: 204,
                    b: 204
                } ] : this.project.colors;
            },
            followeeId: function() {
                return this.project.has_multiple_owners ? this.project.id : this.project.owners[0].id;
            },
            followeeEntityType: function() {
                return this.project.has_multiple_owners ? "project" : "user";
            },
            followType: function() {
                return this.project.has_multiple_owners ? "all" : "user";
            },
            canViewAdminFlags: function() {
                var e = this;
                return this.project.owners.filter(function(t) {
                    return t.id === (e.user && e.user.id);
                }).length && this.project.administrative_notices && this.project.administrative_notices.length;
            },
            publishedDate: function() {
                return "en-US" === this.locale ? Lt.a.unix(this.project.published_on).format("MMMM Do YYYY") : new Date(1e3 * this.project.published_on).toLocaleDateString(this.locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
            },
            distanceToContainerEnd: function() {
                return window.innerHeight + 70 - 15;
            },
            followDisplayName: function() {
                return this.project.has_multiple_owners ? this.project.name : this.project.owners[0].display_name;
            },
            appreciateTitle: function() {
                return this.isAppreciated ? this.$translate("project_view_appreciated", "Appreciated") : this.$translate("project_view_appreciate", "Appreciate");
            },
            toolsWithSynonym: function() {
                return this.project.tools.filter(function(e) {
                    return e.synonym;
                });
            },
            toolsWithOutSynonym: function() {
                return this.project.tools.filter(function(e) {
                    return !e.synonym;
                });
            },
            allLightboxComponents: function() {
                for (var e = [], t = 0; t < this.project.modules.length; t++) if (this.project.modules[t].type === i.b.GRID) for (var n = 0; n < this.project.modules[t].components.length; n++) e.push(Ft({}, this.project.modules[t].components[n], {
                    type: this.project.modules[t].type
                })); else {
                    if (this.project.modules[t].type === i.b.TEXT) continue;
                    e.push(this.project.modules[t]);
                }
                return e;
            },
            isLastLightboxSlide: function() {
                return this.lightboxActiveSlideIdx === this.allLightboxComponents.length;
            },
            isLightboxActiveSlideComponent: function() {
                if (this.isLightboxOpen && -1 !== this.lightboxActiveSlideIdx) return this.allLightboxComponents[this.lightboxActiveSlideIdx].type === i.b.GRID;
            },
            canShowModuleAction: function() {
                if (this.isLightboxOpen && -1 !== this.lightboxActiveSlideIdx) return this.allLightboxComponents[this.lightboxActiveSlideIdx].type === i.b.GRID || this.allLightboxComponents[this.lightboxActiveSlideIdx].type === i.b.IMAGE;
            }
        }),
        watch: {
            isAppreciated: function(e) {
                this.isPostAppreciateTooltipVisible = e;
            },
            isNewAppreciation: function(e) {
                var t = Nt.default.isEnabled(), n = !!t && Boolean(Number(Dt.a.get(this.appreciationNotifSeenKey))), o = this.user && this.user.stats && this.user.stats.appreciations > 0;
                !e || n || o || (this.notificationType = "AppreciationNotification", this.notificationRef = "appreciationNotification", 
                t && Dt.a.set(this.appreciationNotifSeenKey, 1));
            },
            collectionAdded: function(e) {
                e && (this.notificationType = "CollectionNotifications", this.notificationRef = "collectionNotifications");
            },
            scrollTopPosition: function(e) {
                this.debounceScrollCalc(e);
            },
            lightboxActiveSlideIdx: function(e) {
                -1 !== e && this.isLightboxOpen && !this.isLastLightboxSlide && (this.lightboxCaptionSelector = ".js-lightbox-caption[data-id='" + this.allLightboxComponents[e].id + "']", 
                this.$emit("initLightboxFollow", this.lightboxCaptionSelector));
            }
        },
        components: {
            Appreciate: a.a,
            AppreciationNotification: f,
            Avatar: g.a,
            AvatarSidebar: $,
            Btn: M.a,
            CollectionIcon: E.a,
            Feature: B.a,
            Follow: L.a,
            FollowMinimal: j,
            Add: b.a,
            Check: h.a,
            Minus: m,
            ProjectInfo: Ot,
            OtherProjects: at,
            Module: Ge,
            MultipleOwners: Ye.a,
            EditProjectBtn: Qe,
            WarningIcon: St.a,
            Tooltip: w.a,
            CollectionNotifications: At.a,
            FadeRight: $t.a,
            Tools: Mt.a,
            Actions: ie,
            ProjectInfoBox: Et.a
        },
        methods: {
            getSecondsElapsed: function() {
                return Math.floor(Math.abs(this.startTime - new Date()) / 1e3);
            },
            handleFooterVisible: function(e) {
                e && this.shouldTrackUserProgress && this.$emit("projectEndReached", {
                    project_id: this.project.id,
                    total_modules: this.project.modules.length,
                    time_spent_seconds: this.getSecondsElapsed()
                });
            },
            handleModuleVisibilityChange: function(e, t, n) {
                n && !this.viewedModules.includes(e.id) && this.shouldTrackUserProgress && (this.$emit("projectModuleViewed", {
                    project_id: this.project.id,
                    module_index: t + 1,
                    total_modules: this.project.modules.length,
                    time_spent_seconds: this.getSecondsElapsed()
                }), this.viewedModules.push(e.id));
            },
            clickedNotification: function() {
                this.notificationType = null, this.notificationRef = null;
            },
            clickCollection: function() {
                this.isAddToCollectionVisible = !0;
            },
            handleScroll: function() {
                this.$refs.projectModule && this.debounceScrollCalc(H.default.scrollY());
            },
            doScrollCalc: function() {
                this.$refs.projectModule && (this.hasNoTopSection = H.default.scrollY() >= this.$refs.projectModule.getBoundingClientRect().top, 
                this.setAppreciateButtonSticky());
            },
            setAppreciateButtonSticky: function() {
                var e = this.distanceToContainerEnd - this.$refs.root.getBoundingClientRect().height;
                this.isAppreciateButtonSticky = this.$refs.root.getBoundingClientRect().top <= e;
            },
            hasZeroTop: function() {
                return this.shouldShowRedesign ? this.isFirstModuleFB || this.isSingleImageProject : this.project.styles && !Boolean(this.project.styles.spacing.project.top_margin);
            },
            handleKeyup: function(e) {
                [ "textarea", "input" ].includes(e.target.localName) || 65 !== e.keyCode || (this.isAppreciated ? this.user && (this.isNewAppreciation = !1, 
                this.$emit("unappreciated")) : (this.isNewAppreciation = !0, this.$emit("appreciated")));
            },
            debounceScrollCalc: function() {
                this.scrollTimeout && H.default.cancelAnimationFrame(this.scrollTimeout), this.scrollTimeout = H.default.requestAnimationFrame(this.doScrollCalc);
            }
        },
        mounted: function() {
            this.$emit("mounted"), this.startTime = new Date(), this.$emit("projectViewed", {
                projectId: this.project.id,
                isSingleImageProject: this.isSingleImageProject,
                canvasSize: this.project.canvas_width
            }), window.addEventListener("keyup", this.handleKeyup), this.isFullPage && window.addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy: function() {
            window.removeEventListener("keyup", this.handleKeyup), this.isFullPage && window.removeEventListener("scroll", this.handleScroll);
        }
    }, Ut = n(1398);
    var Wt = Object(d.default)(Vt, function() {
        var e, t, n, o, r, i, a, s, l, c = this, u = c.$createElement, p = c._self._c || u;
        return p("div", {
            ref: "root",
            class: [ c.$style.project, (e = {}, e[c.$style.narrowProject] = c.isNarrowProject, 
            e), (t = {}, t[c.$style.admin] = c.displayAdminSidebar, t), (n = {}, n[c.$style.fullPage] = c.isFullPage, 
            n), (o = {}, o[c.$style.isOwner] = c.project.is_owner, o), (r = {}, r[c.$style.disableUserActions] = c.disableUserActions, 
            r), "qa-project" ]
        }, [ p("div", {
            class: c.$style.wrapper
        }, [ p("div", {
            class: c.$style.sidebar
        }, [ p("div", {
            ref: "userActions",
            class: [ c.$style.userActions, c.$style.userActionsWithTools, (i = {}, i[c.$style.onLock] = c.hasNoTopSection, 
            i), (a = {}, a[c.$style.fullPageUserActions] = c.isFullPage, a), "qa-project-user-actions" ]
        }, [ p("AvatarSidebar", {
            ref: "sidebarTopAvatar",
            class: [ c.$style.toolsAvatar, (s = {}, s[c.$style.ownerAvatar] = c.project.is_owner, 
            s) ],
            attrs: {
                owners: c.project.owners,
                size: 45,
                displayFollowButton: !c.project.is_owner,
                isFollowing: c.project.is_following,
                followeeId: c.followeeId,
                pulsePoints: c.pulsePoints,
                projectOwnerMiniprofile: c.projectOwnerMiniprofile
            },
            on: {
                pulseViewed: function(e) {
                    return c.$emit("pulseViewed", e);
                },
                pulseClosed: function(e) {
                    return c.$emit("pulseClosed", e);
                },
                avatarMiniHovered: function(e) {
                    return c.$emit("avatarMiniHovered");
                }
            }
        }), c.project.is_owner ? c._e() : p("div", {
            class: [ c.$style.actionName, c.$style.avatarTitle, "js-action-follow", {
                following: c.project.is_following
            } ],
            attrs: {
                "data-ut": "project-sidebar-follow",
                "data-followee": c.followeeId,
                "data-entity": c.followeeEntityType,
                "data-following": c.project.is_following,
                "data-source": "sidebar"
            }
        }, [ p("label", {
            class: c.$style.followTitle
        }, [ c._v(c._s(c.$translate("project_follow", "Follow"))) ]), p("label", {
            class: c.$style.followingTitle
        }, [ c._v(c._s(c.$translate("project_following", "Following"))) ]) ]), c.project.has_tools ? p("Tools", {
            ref: "sidebarTools",
            class: c.$style.sidebarTools,
            attrs: {
                "data-ut": "sidebar-tools",
                adobeTools: c.toolsWithSynonym,
                otherTools: c.toolsWithOutSynonym
            },
            on: {
                adobeToolClicked: function(e) {
                    return c.$emit("adobeToolClicked", e);
                }
            }
        }) : c._e(), c.project.has_tools ? p("div", {
            class: [ c.$style.actionName, c.$style.toolsTitle ]
        }, [ c._v(" " + c._s(c.$translate("project_tools", "Tools")) + " ") ]) : c._e(), p("Tooltip", {
            ref: "Moodboardtooltip",
            class: [ c.$style.tooltip, c.$style.collection ],
            attrs: {
                alignment: "right",
                position: "center",
                triangleDistance: 2,
                horizontalPadding: 19,
                distance: 10
            },
            nativeOn: {
                click: function(e) {
                    return c.$emit("collectionIconClicked", {
                        analytics: {
                            source: "sidebar"
                        }
                    });
                }
            }
        }, [ p("a", {
            ref: "root",
            class: [ c.$style.sidebarCollectionTrigger, "qa-project-collection-trigger" ]
        }, [ p("CollectionIcon", {
            class: c.$style.icon
        }) ], 1), p("div", {
            class: c.$style.tooltipContent,
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ c._v(" " + c._s(c.$translate("project_view_add_to_moodboard", "Add to Moodboard")) + " ") ]) ]), p("div", {
            ref: "moodboardTitle",
            class: [ c.$style.actionName, c.$style.moodboardTitle ],
            on: {
                click: function(e) {
                    return c.$emit("collectionIconClicked", {
                        analytics: {
                            source: "sidebar"
                        }
                    });
                }
            }
        }, [ c._v(c._s(c.$translate("project_save", "Save"))) ]), p("Appreciate", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: c.didInitAppreciate,
                expression: "didInitAppreciate"
            } ],
            ref: "sidebarTopAppreciate",
            class: [ c.$style.appreciate, c.$style.sidebarTopAppreciate ],
            attrs: {
                isAppreciated: c.isAppreciated,
                count: c.appreciationCount,
                hasPulsePoints: c.pulsePoints && c.pulsePoints.display_appreciate,
                showTooltip: void 0 !== c.user,
                locale: c.locale,
                customThumbSize: c.$style.toolsSidebarAppreciateThumb,
                customClass: c.$style.toolsSidebarAppreciate
            },
            on: {
                pulseViewed: function(e) {
                    return c.$emit("pulseViewed", e);
                },
                pulseClosed: function(e) {
                    return c.$emit("pulseClosed", e);
                }
            },
            nativeOn: {
                click: function(e) {
                    c.isNewAppreciation = !c.isNewAppreciation;
                }
            }
        }), p("div", {
            ref: "appreciateTitle",
            class: [ c.$style.actionName, c.$style.sidebarTopAppreciateTitle, "js-appreciate" ],
            on: {
                click: function(e) {
                    c.isNewAppreciation = !c.isNewAppreciation;
                }
            }
        }, [ c._v(c._s(c.appreciateTitle)) ]), c.project.is_owner ? p("EditProjectBtn", {
            ref: "editBtn",
            class: [ c.$style.userActionTablet, c.$style.editProjectBtn ],
            attrs: {
                urls: c.urls
            }
        }) : [ p("Follow", {
            ref: c.project.has_multiple_owners ? "followAllBtn" : "followBtn",
            class: [ c.$style.userActionTablet, "qa-user-action-tablet-follow" ],
            attrs: {
                followeeId: c.followeeId,
                entityType: c.followeeEntityType,
                isFollowing: c.project.is_following,
                type: c.followType,
                displayName: c.followDisplayName,
                source: "projectTabletFollow"
            }
        }), p("FollowMinimal", {
            ref: "mobileFollow",
            class: c.$style.userActionPhone,
            attrs: {
                followeeId: c.followeeId,
                isFollowing: c.project.is_following,
                type: c.followType,
                hasMultipleOwners: c.project.has_multiple_owners,
                displayName: c.followDisplayName,
                followContainerClass: c.$style.followContainer,
                iconWrapClass: c.$style.followIconWrap,
                source: "projectPhoneHeader"
            }
        }, [ p("Add", {
            ref: "addMark",
            class: c.$style.followIcon,
            attrs: {
                slot: "addMark"
            },
            slot: "addMark"
        }), p("Check", {
            ref: "checkMark",
            class: [ c.$style.followIcon, c.$style.followIconCheck ],
            attrs: {
                slot: "checkMark"
            },
            slot: "checkMark"
        }), p("Minus", {
            ref: "minusMark",
            class: c.$style.followIcon,
            attrs: {
                slot: "minusMark"
            },
            slot: "minusMark"
        }) ], 1) ] ], 2) ]), c.canViewAdminFlags ? p("div", {
            ref: "adminNotices",
            class: c.$style.adminNotices
        }, c._l(c.project.administrative_notices, function(e, t) {
            return p("div", {
                key: t,
                ref: "adminNotice",
                refInFor: !0,
                class: c.$style.adminNotice
            }, [ p("h3", {
                class: c.$style.adminNoticeTitle
            }, [ p("WarningIcon", {
                class: c.$style.adminNoticeIcon
            }), c._v(" " + c._s(e.title) + " ") ], 1), p("div", {
                class: c.$style.adminNoticeBody,
                domProps: {
                    innerHTML: c._s(e.body)
                }
            }), e.isReviewable ? p("div", [ c.isMatureReviewSubmitted ? p("p", {
                ref: "matureReviewSubmitted",
                refInFor: !0,
                class: c.$style.adminNoticeBody
            }, [ p("span", {
                staticClass: "red bold"
            }, [ c._v(" " + c._s(c.$translate("admin_flags_nsfw_mature_content_warning_nsfw_label", "NSFW:")) + " ") ]), c._v(" " + c._s(c.$translate("project_request_received", "Your request has been received. The Behance Team will review your project to determine if the Safe Browsing filter no longer applies.")) + " ") ]) : p("div", [ p("p", {
                ref: "adminDisagreeMsg",
                refInFor: !0,
                class: c.$style.adminDisagreeMsg
            }, [ c._v(" " + c._s(c.$translate("project_disagree_msg", "If you disagree, you have the option to submit your project for the Behance team to review.")) + " ") ]), p("a", {
                ref: "submitForMatureReview",
                refInFor: !0,
                on: {
                    click: function(e) {
                        return c.$emit("submitForMatureReview");
                    }
                }
            }, [ p("span", {
                class: c.$style.submitProject
            }, [ c._v(" " + c._s(c.$translate("project_submit_for_review", "Submit your project for review.")) + " ") ]) ]) ]) ]) : c._e() ]);
        }), 0) : c._e(), p("div", {
            class: c.$style.main
        }, [ p("div", {
            ref: "topSection",
            class: [ c.$style.topElement, "qa-project-owners", (l = {}, l[c.$style.fullPageOwner] = c.isFullPage, 
            l) ]
        }, [ p("Avatar", {
            ref: "avatar",
            attrs: {
                owners: c.project.owners,
                isDisabled: c.project.has_multiple_owners,
                size: 40
            }
        }), p("figcaption", {
            class: c.$style.caption
        }, [ p("span", {
            class: c.$style.title
        }, [ c._v(c._s(c.project.name)) ]), p("div", {
            class: c.$style.ownerItems
        }, [ c.project.has_multiple_owners ? p("MultipleOwners", {
            attrs: {
                owners: c.project.owners
            }
        }) : p("a", {
            class: [ c.$style.ownerName, "js-mini-profile" ],
            attrs: {
                "data-id": c.project.owners[0].id,
                href: c.project.owners[0].url,
                target: "_blank"
            }
        }, [ c._v(c._s(c.project.owners[0].display_name)) ]), p("span", {
            class: c.$style.separator
        }, [ c._v("•") ]), c.project.is_owner ? c.urls && c.urls.edit ? p("a", {
            ref: "editLink",
            class: c.$style.editBtn,
            attrs: {
                href: c.urls.edit
            }
        }, [ c._v(" " + c._s(c.$translate("project_edit_button", "Edit Project")) + " ") ]) : c._e() : p("Follow", {
            ref: c.project.has_multiple_owners ? "followAllLink" : "followLink",
            class: c.$style.captionFollow,
            attrs: {
                "data-ut": "project-follow",
                followeeId: c.followeeId,
                entityType: c.followeeEntityType,
                isFollowing: c.project.is_following,
                type: c.project.has_multiple_owners ? "linkAll" : "link",
                displayName: c.followDisplayName,
                source: "projectHeader"
            }
        }) ], 1) ]), p("div", {
            class: [ c.$style.featureContainer, "qa-project-feature-container" ]
        }, c._l(c.project.features, function(e, t) {
            return Boolean(c.project.features.length) && t < c.featureCap ? p("Feature", {
                key: t,
                class: c.$style.feature,
                attrs: {
                    url: e.site.url,
                    featuredDate: e.featured_on,
                    site: e.site
                }
            }) : c._e();
        }), 1) ], 1), p("div", {
            staticClass: "project-content-wrap"
        }, [ p("div", {
            ref: "projectModule",
            class: [ "project-styles", {
                singleImageContent: c.isSingleImageProject
            }, c.$style.projectModules, {
                "zero-top": c.hasZeroTop()
            }, {
                redesign: this.shouldShowRedesign
            } ],
            attrs: {
                id: "primary-project-content"
            }
        }, [ p("div", {
            attrs: {
                id: "project-canvas"
            }
        }, [ p("div", {
            attrs: {
                id: "project-modules"
            }
        }, [ c.isLightboxOpen && !c.isLastLightboxSlide && -1 !== c.lightboxActiveSlideIdx ? p("div", [ c.canShowModuleAction ? p("Actions", {
            class: c.isLightboxActiveSlideComponent ? "ut-project-lightbox-grid-actions" : "ut-project-lightbox-module-actions",
            attrs: {
                isComponent: c.isLightboxActiveSlideComponent,
                module: c.allLightboxComponents[c.lightboxActiveSlideIdx],
                isLightbox: !0
            },
            on: {
                intentToAddModuleToCollection: function(e) {
                    return c.$emit("collectionIconClicked", {
                        analytics: {
                            source: "module-lightbox"
                        }
                    }, e);
                },
                infoBoxShown: function(e) {
                    c.$emit("infoBoxShown"), c.isEXIFPanelVisible = !0;
                },
                infoBoxHidden: function(e) {
                    c.$emit("infoBoxHidden"), c.isEXIFPanelVisible = !1;
                }
            }
        }) : c._e(), p("portal", {
            attrs: {
                name: "ModuleCaptionPortal",
                "target-el": c.lightboxCaptionSelector
            }
        }, [ p("ProjectInfoBox", {
            staticClass: "ut-project-lightbox-projectInfo",
            attrs: {
                projectId: c.project.id,
                projectName: c.project.name,
                projectUrl: c.project.url,
                projectCovers: c.project.covers,
                owners: c.project.owners,
                showFollow: !c.project.is_owner
            }
        }) ], 1) ], 1) : c._e(), c._l(c.project.modules, function(e, t) {
            var n, o, r;
            return p("div", {
                key: e.type + "-" + t,
                ref: (n = {}, n.traditionalModuleContainer = !c.isSingleImageProject, n),
                refInFor: !0,
                class: [ (o = {}, o[c.$style.projectModuleContainer] = !c.isSingleImageProject, 
                o), "Preview__project--topMargin", "qa-project-module-container" ]
            }, [ p("Module", {
                directives: [ {
                    name: "observe-visibility",
                    rawName: "v-observe-visibility",
                    value: {
                        callback: function(n) {
                            return c.handleModuleVisibilityChange(e, t, n);
                        },
                        once: !1
                    },
                    expression: "{\n                    callback: (isVisible) => handleModuleVisibilityChange(module, index, isVisible),\n                    once: false,\n                  }"
                } ],
                ref: "traditionalModule",
                refInFor: !0,
                attrs: {
                    canAccess: c.project.can_access,
                    module: e,
                    isSingleImageProject: c.isSingleImageProject
                },
                on: {
                    infoBoxShown: function(e) {
                        return c.$emit("infoBoxShown");
                    },
                    infoBoxHidden: function(e) {
                        return c.$emit("infoBoxHidden");
                    },
                    intentToAddModuleToCollection: function(e) {
                        return c.$emit("collectionIconClicked", {
                            analytics: {
                                source: "module"
                            }
                        }, e);
                    }
                }
            }), t === c.project.modules.length - 1 && Boolean(e.full_bleed) && !e.caption || c.isSingleImageProject ? c._e() : p("div", {
                ref: "spacer",
                refInFor: !0,
                class: [ "spacer module-separator", (r = {}, r[c.$style.minSpacer] = t === c.project.modules.length - 1 && Boolean(e.is_text), 
                r) ]
            }, [ t !== c.project.modules.length - 1 ? p("div", {
                staticClass: "divider"
            }) : c._e() ]) ], 1);
        }), p("div", {
            ref: "lastSlide",
            domProps: {
                innerHTML: c._s(c.lastSlide)
            }
        }) ], 2) ]), p("Appreciate", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: c.didInitAppreciate,
                expression: "didInitAppreciate"
            } ],
            ref: "floatAppreciateTablet",
            class: c.$style.floatingAppreciateTablet,
            attrs: {
                isAppreciated: c.isAppreciated,
                count: c.appreciationCount,
                showTooltip: !1,
                locale: c.locale,
                source: "mobile"
            }
        }) ], 1), p("div", {
            ref: "bottomAppreciateSection",
            class: [ c.$style.appreciateReminderContainer, "qa-bottom-appreciate-container" ]
        }, [ p("Tooltip", {
            ref: "tooltip",
            class: c.$style.bototmAppreciateContainer,
            attrs: {
                alignment: "center",
                position: "bottom",
                triangleDistance: 2,
                horizontalPadding: 20,
                verticalPadding: 20,
                distance: 10,
                toggleMethod: "none",
                isOpen: c.isNewAppreciation && c.isAppreciated && c.isPostAppreciateTooltipVisible,
                isCloseable: !0
            },
            on: {
                closeButtonClicked: function(e) {
                    c.isPostAppreciateTooltipVisible = !1;
                }
            }
        }, [ p("Appreciate", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: c.didInitAppreciate,
                expression: "didInitAppreciate"
            } ],
            ref: "bottomAppreciateButton",
            attrs: {
                showTooltip: !1,
                isAppreciated: c.isAppreciated,
                count: c.appreciationCount,
                customThumbSize: c.$style.appreciateBottomThumbSize,
                customClass: c.$style.appreciateBottom,
                locale: c.locale,
                source: "projectContentBottom"
            },
            on: {
                pulseViewed: function(e) {
                    return c.$emit("pulseViewed", e);
                },
                pulseClosed: function(e) {
                    return c.$emit("pulseClosed", e);
                }
            },
            nativeOn: {
                click: function(e) {
                    c.isNewAppreciation = !c.isNewAppreciation;
                }
            }
        }), p("div", {
            ref: "appreciateTooltipContent",
            class: [ c.$style.appreciateActionContainer, "qa-post-appreciate-tooltip-container" ],
            attrs: {
                slot: "tooltipContent"
            },
            slot: "tooltipContent"
        }, [ p("Btn", {
            ref: "collectionBtn",
            class: [ c.$style.collectionButton, "qa-save-to-collection-btn" ],
            attrs: {
                role: "button",
                type: "secondary",
                customClass: c.$style.collectionButton
            },
            nativeOn: {
                click: function(e) {
                    return c.$emit("collectionIconClicked", {
                        analytics: {
                            source: "bottomAppreciateTooltip"
                        }
                    });
                }
            }
        }, [ p("CollectionIcon", {
            class: c.$style.collectionLeading,
            attrs: {
                slot: "leadingIcon",
                color: "white",
                autofill: ""
            },
            slot: "leadingIcon"
        }), c._v(" " + c._s(c.$translate("project_view_add_to_moodboard", "Add to Moodboard")) + " ") ], 1), c.project.is_owner ? c._e() : p("Follow", {
            ref: c.project.has_multiple_owners ? "appreciateFollowAll" : "appreciateFollow",
            class: c.$style.appreciateFollow,
            attrs: {
                followeeId: c.followeeId,
                entityType: c.followeeEntityType,
                isFollowing: c.project.is_following,
                type: c.followType,
                displayName: c.followDisplayName,
                source: "projectContentAppreciateTooltip"
            }
        }) ], 1) ], 1), p("div", {
            class: c.$style.projectInfoSection
        }, [ p("div", {
            ref: "projectName",
            class: c.$style.projectName
        }, [ c._v(c._s(c.project.name)) ]), p("div", {
            class: c.$style.projectStats
        }, [ p("div", {
            ref: "appreciations",
            class: [ c.$style.projectStat, "beicons-pre", "beicons-pre-thumb" ]
        }, [ p("span", {
            ref: "appreciationsTitle",
            attrs: {
                title: c._f("commaSplit")(c.appreciationCount, c.locale)
            }
        }, [ c._v(" " + c._s(c._f("abbreviate")(c.appreciationCount, c.locale)) + " ") ]) ]), p("div", {
            ref: "projectViews",
            class: [ c.$style.projectStat, "beicons-pre", "beicons-pre-eye" ]
        }, [ p("span", {
            ref: "viewsTitle",
            attrs: {
                title: c._f("commaSplit")(c.viewsCount, c.locale)
            }
        }, [ c._v(" " + c._s(c._f("abbreviate")(c.project.stats.views, c.locale)) + " ") ]) ]), p("div", {
            ref: "commentCount",
            class: [ c.$style.projectStat, "beicons-pre", "beicons-pre-comment" ]
        }, [ p("span", {
            ref: "commentTitle",
            attrs: {
                title: c._f("commaSplit")(c.commentCount, c.locale)
            }
        }, [ c._v(" " + c._s(c._f("abbreviate")(c.commentCount, c.locale)) + " ") ]) ]) ]), p("div", {
            class: c.$style.projectPublished
        }, [ c._v(" " + c._s(c.$translate("project_published_date", "Published:")) + " "), p("time", {
            ref: "publishedDate",
            attrs: {
                "data-ut": "project-publish-time",
                datetime: c.publishedDate
            }
        }, [ c._v(c._s(c.publishedDate)) ]) ]) ]) ], 1), Boolean(c.otherProjects.length) ? p("OtherProjects", {
            ref: "otherProjects",
            class: c.$style.otherProjects,
            attrs: {
                owners: c.project.owners,
                isProjectOwner: c.project.is_owner,
                otherProjects: c.otherProjects,
                followeeId: c.followeeId,
                isFollowing: c.project.is_following,
                urls: c.urls,
                projectTitle: c.project.name
            }
        }) : c._e(), p("ProjectInfo", {
            ref: "projectInfo",
            class: c.$style.projectInfoComponent,
            attrs: {
                project: c.project,
                commentCount: c.commentCount,
                viewsCount: c.viewsCount,
                appreciationCount: c.appreciationCount,
                allowComments: Boolean(c.project.allow_comments),
                user: c.user,
                hasCommentChildFocus: c.hasCommentChildFocus,
                isFullWidth: c.isNarrowProject,
                credits: c.credits,
                publishedDate: c.publishedDate
            },
            on: {
                removeCredit: function(e) {
                    return c.$emit("removeCredit");
                },
                toolOpened: function(e) {
                    return c.$emit("toolOpened", e);
                },
                galleryOpened: function(e) {
                    return c.$emit("galleryOpened", e);
                }
            }
        }), p("div", {
            directives: [ {
                name: "observe-visibility",
                rawName: "v-observe-visibility",
                value: c.handleFooterVisible,
                expression: "handleFooterVisible"
            } ]
        }) ], 1) ]), c.displayAdminSidebar ? p("div", {
            class: c.$style.adminSidebar
        }, [ p("div", {
            ref: "legacyAdminSidebar"
        }), c._t("adminSidebar") ], 2) : c._e(), p("portal", {
            attrs: {
                "target-el": ".js-vue-project-notif"
            }
        }, [ p("FadeRight", {
            on: {
                afterEnter: function(e) {
                    return c.$emit("notificationAnimatedIn");
                }
            }
        }, [ c.notificationType ? p(c.notificationType, {
            ref: c.notificationRef,
            tag: "component",
            attrs: {
                imageSrc: c.itemImageSrc,
                imagesSrcSet: c.itemImagesSrcSet,
                fillerColor: c.itemFillerColor,
                collection: c.collectionAdded && c.collectionAdded.collection,
                user: c.user,
                shouldOverlayOverFooter: c.isFullPage
            },
            on: {
                click: c.clickedNotification
            }
        }) : c._e() ], 1) ], 1) ], 1) ]);
    }, [], !1, function(e) {
        this.$style = Ut.default.locals || Ut.default;
    }, null, null);
    t.a = Wt.exports;
}, , function(e, t, n) {
    "use strict";
    n(17), n(54), n(63), n(36), n(126), n(8), n(10), n(62), n(37), n(38), n(35);
    var o = n(739), r = {
        components: {
            Caret: n(618).a
        },
        props: {
            project: {
                type: Object
            },
            showCover: {
                type: Boolean,
                default: !0
            },
            isNext: {
                type: Boolean,
                default: !1
            }
        }
    }, i = n(1348), a = n(53);
    var s = Object(a.default)(r, function() {
        var e, t, n = this, o = n.$createElement, r = n._self._c || o;
        return r("div", {
            ref: "coverRoot",
            class: (e = {}, e[n.$style.projectCoverCaret] = n.showCover, e)
        }, [ n.showCover ? r("div", {
            class: n.$style.projectCover
        }, [ n.project.isSrcSet ? r("img", {
            ref: "coverImage",
            class: n.$style.projectCoverImage,
            attrs: {
                srcset: n.project.cover
            }
        }) : r("img", {
            ref: "coverImage",
            class: n.$style.projectCoverImage,
            attrs: {
                src: n.project.cover
            }
        }) ]) : r("div", {
            class: n.$style.arrowCaret
        }, [ r("Caret", {
            ref: "arrowCaret",
            class: [ n.$style.caret, (t = {}, t[n.$style.next] = n.isNext, t) ]
        }) ], 1), r("div", {
            class: n.$style.navDirection
        }, [ n._t("default") ], 2) ]);
    }, [], !1, function(e) {
        this.$style = i.default.locals || i.default;
    }, null, null).exports, l = n(561), c = Object(a.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "8",
                height: "8",
                viewBox: "0 0 8 8"
            }
        }, [ t("path", {
            attrs: {
                d: "M0,5.06l5.657.6L5.06,0Z",
                transform: "translate(8 4) rotate(135)"
            }
        }) ]);
    }, [], !1, null, null, null).exports, u = Object(a.default)({}, function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("svg", {
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "8",
                height: "8",
                viewBox: "0 0 8 8"
            }
        }, [ t("path", {
            attrs: {
                d: "M0,5.06l5.657.6L5.06,0Z",
                transform: "translate(0 4) rotate(-45)"
            }
        }) ]);
    }, [], !1, null, null, null).exports, p = n(185);
    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [], o = !0, r = !1, i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), 
                !t || n.length !== t); o = !0) ;
            } catch (e) {
                r = !0, i = e;
            } finally {
                try {
                    o || null == s.return || s.return();
                } finally {
                    if (r) throw i;
                }
            }
            return n;
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    function f(e, t, n, o, r, i, a) {
        try {
            var s = e[i](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
    }
    var b = {
        name: "ProjectOverlay",
        components: {
            Overlay: o.a,
            ProjectCoverCaret: s,
            PulsePoint: l.a,
            SolidLeftArrow: c,
            SolidRightArrow: u,
            Spinner: p.a
        },
        props: {
            isVisible: {
                type: Boolean
            },
            shouldDisplaySpinner: {
                type: Boolean
            },
            displayArrows: {
                type: Boolean,
                default: !1
            },
            nextProjectRoute: {
                type: Object
            },
            prevProjectRoute: {
                type: Object
            },
            isKeyboardEnabled: {
                type: Boolean
            },
            rightOffsetForIcons: {
                type: Number
            },
            disableScroll: {
                type: Boolean,
                default: !1
            },
            hasSiblingArrowsPulsePoints: {
                type: Boolean
            },
            isAdminSidebarEnabled: {
                type: Boolean,
                default: !1
            },
            isNarrowProject: {
                type: Boolean
            }
        },
        data: function() {
            return {
                focusObserver: null,
                isKeyEventBound: !1
            };
        },
        watch: {
            isKeyboardEnabled: {
                handler: function(e) {
                    if (e && !this.isKeyEventBound) return this.bindKeyboardEvent();
                    this.unbindKeyboardEvent();
                },
                immediate: !0
            }
        },
        methods: {
            goToPrevious: function(e) {
                var t = "click" === e.type, n = 37 === e.keyCode;
                this.prevProjectRoute && (n || t) && this.$emit("intentToGoPrev", this.prevProjectRoute);
            },
            goToNext: function(e) {
                var t = "click" === e.type, n = 39 === e.keyCode;
                this.nextProjectRoute && (n || t) && this.$emit("intentToGoNext", this.nextProjectRoute);
            },
            close: function(e) {
                var t = "click" === e.type, n = 27 === e.keyCode;
                (t || n) && this.$emit("close");
            },
            observe: function() {
                var e, t = this;
                return (e = regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, t.$nextTick();

                          case 2:
                            t.focusObserver.observe(t.$el, {
                                attributes: !0,
                                attributeFilter: [ "data-focus-visible-added" ],
                                childList: !0,
                                characterData: !1,
                                subtree: !0
                            }), t.$emit("observing");

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }), function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, r) {
                        var i = e.apply(t, n);
                        function a(e) {
                            f(i, o, r, a, s, "next", e);
                        }
                        function s(e) {
                            f(i, o, r, a, s, "throw", e);
                        }
                        a(void 0);
                    });
                })();
            },
            bindKeyboardEvent: function() {
                this.isKeyEventBound = !0, window.addEventListener("keydown", this.goToNext), window.addEventListener("keydown", this.goToPrevious), 
                window.addEventListener("keydown", this.close);
            },
            unbindKeyboardEvent: function() {
                this.isKeyEventBound = !1, window.removeEventListener("keydown", this.goToNext), 
                window.removeEventListener("keydown", this.goToPrevious), window.removeEventListener("keydown", this.close);
            }
        },
        mounted: function() {
            var e = this;
            this.focusObserver = new MutationObserver(function(t) {
                var n = "data-focus-visible-added", o = d(t, 1)[0].target.dataset.hasOwnProperty("focusVisibleAdded"), r = document.querySelector("input[" + n + "]") || document.querySelector("textarea[" + n + "]");
                if (o && r) return e.unbindKeyboardEvent();
                !e.isKeyEventBound && e.isKeyboardEnabled && e.bindKeyboardEvent();
            });
        },
        destroyed: function() {
            this.focusObserver.disconnect(), this.isKeyEventBound && this.unbindKeyboardEvent();
        }
    }, h = n(1350);
    var m = Object(a.default)(b, function() {
        var e, t, n, o = this, r = o.$createElement, i = o._self._c || r;
        return i("Overlay", {
            ref: "root",
            class: [ o.$style.root, (e = {}, e[o.$style.narrowProject] = o.isNarrowProject, 
            e) ],
            attrs: {
                isVisible: o.isVisible,
                isLargeCloseIcon: !0,
                isContentCentered: !1,
                rightOffsetForIcons: o.rightOffsetForIcons,
                disableScroll: o.disableScroll
            },
            on: {
                close: function(e) {
                    return o.$emit("close");
                },
                scrolled: function(e) {
                    return o.$emit("scrolled", e);
                },
                shown: o.observe
            }
        }, [ o.shouldDisplaySpinner ? i("Spinner", {
            ref: "spinner",
            class: o.$style.centerSpinner
        }) : [ o.displayArrows && o.prevProjectRoute ? i("router-link", {
            ref: "prev",
            class: [ o.$style.siblingProjectCovers, o.$style.prevSibling, (t = {}, t[o.$style.hasAdminSidebar] = o.isAdminSidebarEnabled, 
            t), "js-adobe-analytics", "qa-project-prev-arrow" ],
            attrs: {
                event: "",
                to: o.prevProjectRoute,
                "data-adobe-analytics": "PrevClick"
            },
            nativeOn: {
                click: function(e) {
                    return o.goToPrevious(e);
                }
            }
        }, [ i("ProjectCoverCaret", {
            ref: "prevProjectCoverCaretWithoutCover",
            attrs: {
                showCover: !1
            }
        }, [ i("div", {
            class: o.$style.direction
        }, [ o._v(o._s(o.$translate("project_overlay_prev_caret", "Previous"))) ]) ]) ], 1) : o._e(), o.displayArrows && o.nextProjectRoute ? i("router-link", {
            ref: "next",
            class: [ o.$style.siblingProjectCovers, o.$style.nextSibling, (n = {}, n[o.$style.hasAdminSidebar] = o.isAdminSidebarEnabled, 
            n), "js-adobe-analytics", "qa-project-next-arrow" ],
            style: {
                transform: "translateX(-" + o.rightOffsetForIcons + "px)"
            },
            attrs: {
                event: "",
                to: o.nextProjectRoute,
                "data-adobe-analytics": "NextClick"
            },
            nativeOn: {
                click: function(e) {
                    return o.goToNext(e);
                }
            }
        }, [ i("ProjectCoverCaret", {
            ref: "nextProjectCoverCaretWithoutCover",
            attrs: {
                showCover: !1,
                isNext: !0
            }
        }, [ i("div", {
            class: o.$style.direction
        }, [ o._v(o._s(o.$translate("project_overlay_next_caret", "Next"))) ]) ]), o.hasSiblingArrowsPulsePoints ? i("PulsePoint", {
            ref: "pulse",
            class: o.$style.pulsePoint,
            attrs: {
                tooltipPosition: "top"
            },
            on: {
                pulseViewed: function(e) {
                    return o.$emit("pulseViewed", {
                        from: "sibling_arrow"
                    });
                },
                pulseClosed: function(e) {
                    return o.$emit("pulseClosed", {
                        from: "sibling_arrow"
                    });
                }
            }
        }, [ i("template", {
            slot: "header"
        }, [ o._v(o._s(o.$translate("onboarding_pulsePoint_sibling_arrows_title", "Next and Previous Projects"))) ]), i("template", {
            slot: "text"
        }, [ i("p", [ o._v(" " + o._s(o.$translate("onboarding_pulsePoint_sibling_arrows_description", "Quickly navigate to the next (or previous) project, or just use the left and right arrows on your keyboard.")) + " ") ]), i("span", {
            class: o.$style.pulseOk
        }, [ o._v(o._s(o.$translate("onboarding_pulsePoint_sibling_arrows_close", "Okay, I got it!"))) ]) ]) ], 2) : o._e() ], 1) : o._e(), o._t("default") ] ], 2);
    }, [], !1, function(e) {
        this.$style = h.default.locals || h.default;
    }, null, null);
    t.a = m.exports;
}, , , , function(e, t, n) {
    "use strict";
    n(43);
    var o = n(172), r = n.n(o), i = n(1019), a = n(206), s = n.n(a), l = (n(20), n(21), 
    n(256)), c = n.n(l), u = n(27), p = n(14), d = 30;
    var f = {
        fatclick: function(e) {
            if (e = e || this.$view) {
                var t = function(e) {
                    var t = e.data.touch, n = e.originalEvent.changedTouches[0];
                    if (!(Math.sqrt(Math.pow(t.pageX - n.pageX, 2) + Math.pow(t.pageY - n.pageY, 2)) > d)) {
                        var o = this.$view.find("a:visible").first().get(0);
                        o.click ? o.click() : p.default.setLocation(o.href);
                    }
                }.bind(this);
                e.on("touchstart", function(n) {
                    function o() {
                        e.off({
                            touchend: t,
                            touchcancel: o
                        });
                    }
                    e.one("touchend", {
                        touch: n.originalEvent.changedTouches[0]
                    }, t).on("touchmove", o).on("touchcancel", o), setTimeout(o, 300);
                });
            }
        }
    }, b = (n(17), n(18), n(127), n(24), n(25), n(22), n(1400)), h = n(39), m = n(266), g = (n(44), 
    n(771)), v = n(5), w = n(853), _ = n(1401), y = n.n(_), j = [ {
        label: "1. This list of recommendations caters to the variety of my interests appropriately.",
        name: "question_1",
        answers: [ {
            label: "Strongly agree",
            value: "1",
            validate: "required"
        }, {
            label: "Agree",
            value: "2",
            validate: "required"
        }, {
            label: "Neither Agree nor Disagree",
            value: "3",
            validate: "required"
        }, {
            label: "Disagree",
            value: "4",
            validate: "required"
        }, {
            label: "Strongly Disagree",
            value: "5",
            validate: "required"
        } ]
    }, {
        label: "2. This list of recommendations shows me relevant works of relatively less known artists.",
        name: "question_2",
        answers: [ {
            label: "Strongly agree",
            value: "1",
            validate: "required"
        }, {
            label: "Agree",
            value: "2",
            validate: "required"
        }, {
            label: "Neither Agree nor Disagree",
            value: "3",
            validate: "required"
        }, {
            label: "Disagree",
            value: "4",
            validate: "required"
        }, {
            label: "Strongly Disagree",
            value: "5",
            validate: "required"
        } ]
    } ], x = s.a.extend({
        init: function(e) {
            var t = this;
            this.logData = e, this._popup = w.default.validate({
                title: v.default.translate("personalization_survey_popup_title", "Survey"),
                classes: [ "personalization-survey-popup" ],
                html: y()({
                    survey: j
                }),
                buttons: [ {
                    label: v.default.translate("personalization_survey_popup_button_confirm", "Confirm"),
                    classes: [ "form-button-default", "js-confirm form-submit" ]
                }, {
                    label: v.default.translate("personalization_survey_popup_button_cancel", "Cancel"),
                    classes: [ "form-button-cancel", "js-cancel" ]
                } ]
            }, {
                promiseGenerator: function() {
                    return t._form.submit();
                }
            });
        },
        bind: function() {
            var e = this;
            r()(".js-blocking-div").off(), this._form = new g.a(this._popup._view.$view.find("form")), 
            this._form.on("success", function() {
                var t = {};
                e._form.$form.serializeArray().forEach(function(e) {
                    return t[e.name] = e.value;
                });
                var n = Object.assign({}, e.logData, t);
                u.default.info("personalization", "survey submitted", n);
            });
        },
        destroy: function() {
            this._popup.destroy();
        }
    }), P = n(1403), C = n.n(P), k = n(1404), O = n.n(k);
    function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function S(e) {
        r()(".js-personalization-survey-trigger").length || (r()(".js-site-content").append(C()()), 
        r()(".js-personalization-survey-btn").click(function() {
            return function(e) {
                r()(".js-personalization-survey").length || x.init(e);
            }(e);
        }));
    }
    function A(e) {
        var t = this, n = r()(e.currentTarget), o = Object.assign({}, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach(function(t) {
                    T(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, n.data()), this.logData), i = n.parents(".js-project-cover"), a = i.find(".js-personalization-btn");
        i.css("opacity", .5), a.unbind("click"), u.default.info("personalization", "personalization button clicked", o).send().then(function() {
            return S(t.logData);
        }).catch(function() {
            i.css("opacity", 1), n.click(A.bind(t));
        });
    }
    var $ = {
        personalize: function() {
            var e = this, t = p.default.getSearchObject().feedback;
            b.default.isOn("personalization") && h.default.isLoggedIn() && void 0 !== t && t.length && (this.logData = {
                USER_ID: m.default.USER.Id,
                ADOBE_ID: m.default.USER.AdobeId,
                FEEDBACK_ID: t
            }, this.$view.append(O()({
                PROJECT_ID: this.$view.data("id")
            })), this.$view.find(".js-personalization-btn").each(function(t, n) {
                return r()(n).click(A.bind(e));
            }));
        }
    }, M = c.a.extend({
        init: function(e) {
            this.selector = ".js-project-cover-title-link, .js-project-comment-link, .js-project-cover-image-link, .js-project-controls-overlay, .js-edit-icon", 
            this.$view = e instanceof r.a ? e : r()(".js-project-cover[data-id=" + e + "]");
        },
        rendered: function() {
            this.personalize(), this.fatclick(), this.$view.on("mouseenter mouseleave", this.selector, this.toggleHover).on("click", function() {
                u.default.info("project_click_tracker", "Gallery project viewed", r()(this).data());
            });
        },
        toggleHover: function(e) {
            r()(this).closest(".js-project-cover").toggleClass("hover", "mouseenter" === e.type);
        },
        destroy: function() {
            this.$view.off("mouseenter mouseleave", this.selector, this.toggleHover), this._super();
        }
    }).mixin(f, $), E = s.a.extend({
        init: function(e, t, n) {
            this._$context = e, this._template = t, this._lastSlideContent = n, this._projectCoverViews = [];
        },
        bind: function() {
            var e = this;
            this._$context.append(this._getOverlaySlideContent()), this._$context.find(".js-view-again").on("click.lightbox-overlay", function(t) {
                t.stopPropagation(), e.trigger("viewAgain");
            }), this._$context.find(".js-project-cover").each(function(t, n) {
                var o = new M(r()(n));
                o.rendered(), e._projectCoverViews.push(o);
            });
        },
        unbind: function() {
            this._projectCoverViews.forEach(function(e) {
                return e.destroy();
            }), this._$context.add(".js-view-again", this._$context).off(".lightbox-overlay"), 
            this._$context.empty();
        },
        _getOverlaySlideContent: function() {
            var e = r()(this._template);
            return e.find(".js-last-slide").append(this._lastSlideContent), e;
        }
    }), B = n(252);
    t.a = s.a.extend({
        init: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this._$project = e instanceof r.a ? e : r()(e), this._hoverIconEnabled = t;
        },
        bind: function() {
            var e = this;
            this._lightbox = i.a.init({
                context: this._$project,
                slideSelector: ".js-project-lightbox-link",
                isCircular: !1,
                bgColor: "#000",
                opacity: "1",
                hoverIconEnabled: this._hoverIconEnabled
            }), this._lazyAddLastSlide(), this._addLightboxTracking(this._lightbox), this._$project.on("click.lightbox", ".js-lightbox-caption", function(e) {
                return e.stopPropagation();
            }), this._lightbox.on("open", function() {
                return e.trigger("open");
            }), this._lightbox.on("close", function() {
                return e.trigger("close");
            }), this._lightbox.on("activate", function(t) {
                return e.trigger("shown", t.id);
            });
        },
        unbind: function() {
            this._lightbox.destroy(), this._$project.off(".lightbox");
        },
        isOpen: function() {
            return this._lightbox._isOpen;
        },
        _lazyAddLastSlide: function() {
            var e = this, t = this._lightbox, n = t.slides, o = {
                id: n.length,
                data: {
                    noZoom: !0
                },
                content: r()("<div>")
            };
            n.push(o), t.on("activate", function(t) {
                if (t.id === o.id && !e._overlaySlide) {
                    var r = n[n.length - 2].content, i = e._$project.find(".js-lightbox-overlay-slide").html();
                    e._overlaySlide = E.init(o.content, i, r), e._overlaySlide.on("viewAgain", function() {
                        return e._lightbox.open(0);
                    }), e._addOverlaySlideTracking();
                }
                B.default.init();
            }), t.on("deactivate", function(t) {
                t.id === o.id && e._overlaySlide && (e._overlaySlide.destroy(), delete e._overlaySlide);
            });
        },
        _addLightboxTracking: function(e) {
            this._$project.on("click.lightbox", ".js-lightbox-caption a", function() {
                var e = r()(this).data(), t = e.id, n = e.from;
                u.default.info("lightbox", "profile", {
                    id: t,
                    from: n
                });
            }), e.on("open", function(e) {
                return u.default.info("lightbox", "open", {
                    ordinal: e.id
                });
            }), e.on("close", function() {
                return u.default.info("lightbox", "close");
            }), e.on("activate", function(e, t) {
                if (t) {
                    var n = t.id < e.id ? "right" : "left";
                    u.default.info("lightbox", "activate_" + n);
                }
            });
        },
        _addOverlaySlideTracking: function() {
            u.default.info("lightbox", "end_state");
        }
    });
}, , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(2)(52);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n(17), n(54), n(63), n(31), n(43), n(20), n(76), n(36), n(30), n(56), n(8), n(62), 
    n(37), n(21), n(38);
    var o = n(237), r = n.n(o), i = n(206), a = n.n(i), s = n(870), l = n(1), c = n(265), u = n.n(c), p = n(270), d = n.n(p), f = (n(130), 
    n(172)), b = n.n(f), h = n(256), m = n.n(h), g = n(773), v = n.n(g), w = n(5), _ = n(78), y = n.n(_), j = a.a.extend({
        formatter: function(e, t) {
            return e.format(t);
        },
        init: function(e, t, n) {
            var o = this.formatter;
            t = t || "LL", e.find(".js-format-timestamp").each(function(e, r) {
                var i, a = b()(r), s = a.data("timestamp"), l = y.a.unix(s);
                n && n.isUTC && (l = l.utc()), (i = n && n.fromNow ? y()(l).fromNow() : o(l, t)) && a.text(i);
            });
        }
    }), x = n(567), P = n(1815), C = n.n(P), k = {
        3000: "close",
        5000: "flag"
    }, O = m.a.extend({
        template: v()(C.a, b.a),
        templateData: function() {
            var e = this._super();
            return e.permissions = e.permissions.reduce(function(e, t) {
                return e[k[t]] = !0, e;
            }, {}), e;
        },
        rendered: function() {
            var e = this;
            this.$view.hide().fadeIn().on("keyup click", ".js-delete", function(t) {
                var n = "click" === t.type, o = "keyup" === t.type && 13 === t.keyCode;
                (n || o) && Object(x.default)({
                    title: w.default.translate("delete_comment_are_you_sure_title", "Delete Comment"),
                    html: w.default.translate("delete_comment_are_you_sure_body", "Are you sure you want to delete this comment?"),
                    hideClose: !0
                }).then(function() {
                    e.$view.fadeOut(e.trigger.bind(e, "remove"));
                }).catch(function() {
                    return e.trigger("removeCanceled");
                });
            }), j.init(this.$view, "LLL", {
                fromNow: !0
            });
        }
    }), I = n(209), T = n.n(I), S = u.a.extend({
        _initView: function() {
            this._super.apply(this, arguments), this.listenTo(this._view, "all", this.trigger);
        },
        destroy: function() {
            this.stopListening(), this._super();
        }
    }, {
        MODEL_CLASS: d.a,
        VIEW_CLASS: O
    }).mixin(T.a);
    function A(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [], o = !0, r = !1, i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), 
                !t || n.length !== t); o = !0) ;
            } catch (e) {
                r = !0, i = e;
            } finally {
                try {
                    o || null == s.return || s.return();
                } finally {
                    if (r) throw i;
                }
            }
            return n;
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    n.d(t, "a", function() {
        return $;
    });
    var $ = {
        childHasFocus: "childHasFocus",
        childLostFocus: "childLostFocus"
    };
    t.b = a.a.extend({
        _posts: null,
        loading: !1,
        moreSelector: ".see-more-button-container",
        init: function(e, t, n) {
            var o = this, r = e.find(".js-comments-list");
            this.data = t || {}, this.callback = n, this._posts = [], this.loading = !1, this.$content = r, 
            this.$more = e.find(this.moreSelector), this.get = this.more.bind(this, void 0), 
            this.$more.on("click", this.get), this._initA11y(), s.a.delegate(this.$content, function(e) {
                e.$context.remove(), o.trigger("spam");
            });
        },
        set: function(e) {
            return r()(this.data, e), this;
        },
        more: function(e) {
            var t;
            return this.loading = !0, (t = this.load(e)).then(this.render.bind(this)).catch(function() {}).then(this.after.bind(this)), 
            t.catch(function() {}).then(this.callback), t;
        },
        destroy: function() {
            this.stopListening(), this.clear(), this._destroyA11y(), this.$more.off("click", this.get);
        },
        load: function(e) {
            return Object(l.default)({
                url: "/comments/" + this.data.type,
                data: r()({
                    sort_order: "desc"
                }, this.data, e)
            });
        },
        render: function(e) {
            var t, n = this;
            return e && e.comments && (t = e.comments.map(this._makePost, this), this._posts = this._posts.concat(t)), 
            this._posts["asc" === this.data.order ? "reduceRight" : "reduce"](function(e, t) {
                return t._view.on("postrender", function(e) {
                    return n._bindA11y(e[0]);
                }), t.render(e.$content), e;
            }, this), e;
        },
        after: function() {
            this.data.offset = this._posts.length ? this._posts[this._posts.length - 1].id : void 0;
        },
        _makePost: function(e) {
            e.type = this.data.type;
            var t = new S(e.id, e);
            return this.listenTo(t, "remove", this.remove.bind(this, t)), t;
        },
        _initA11y: function() {
            var e = this;
            this.observer = new MutationObserver(function(t) {
                var n = A(t, 1)[0].target.dataset.hasOwnProperty("focusVisibleAdded") ? $.childHasFocus : $.childLostFocus;
                e.trigger(n);
            });
        },
        _destroyA11y: function() {
            this.observer.disconnect();
        },
        _bindA11y: function(e) {
            this.observer.observe(e, {
                attributes: !0,
                attributeFilter: [ "data-focus-visible-added" ],
                childList: !1,
                characterData: !1,
                subtree: !0
            });
        },
        add: function(e) {
            var t = e instanceof S ? e : this._makePost(e);
            this._posts.unshift(t), this.render();
        },
        remove: function(e) {
            var t;
            ~(t = this._posts.indexOf(e)) && (Object(l.default)({
                type: "DELETE",
                url: "/comments/" + this.data.type + "?comment_id=" + e.id
            }), this._posts.splice(t, 1), e.destroy(), this.trigger("remove"));
        },
        clear: function() {
            return this._posts.forEach(function(e) {
                e.destroy();
            }), this._posts = [], this;
        }
    });
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var o = n(181), r = {
        "onboarding/tooltip": n(1810).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="tooltipi-container tooltip_container--pulse js-container-tooltip">'), 
            o.b("\n" + n), o.b('  <div class="pulse">'), o.b("\n" + n), o.b('    <div class="pulse__dot"></div>'), 
            o.b("\n" + n), o.b('    <div class="pulse__ring"></div>'), o.b("\n" + n), o.b(o.rp("<onboarding/tooltip0", e, t, "    ")), 
            o.b("  </div>"), o.b("\n"), o.b("\n" + n), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<onboarding/tooltip0": {
                name: "onboarding/tooltip",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<div class="tooltipi-container tooltip_container--pulse js-container-tooltip">\n  <div class="pulse">\n    <div class="pulse__dot"></div>\n    <div class="pulse__ring"></div>\n    {{>onboarding/tooltip}}\n  </div>\n\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="tooltipi tooltipi-white tooltip--pulse js-tooltip--pulse">'), 
            o.b("\n" + n), o.b('  <h1 class="'), o.s(o.f("clicked", e, t, 1), e, t, 0, 96, 132, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("beicons-pre beicons-pre-check-circle");
            }), e.pop()), o.b('">'), o.b("\n" + n), o.s(o.f("follow", e, t, 1), e, t, 0, 162, 411, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("      "), o.s(o.f("clicked", e, t, 1), e, t, 1, 0, 0, "") || o.s(o.f("translate", e, t, 1), e, t, 0, 195, 250, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_follow_creatives|Follow Creatives");
                }), e.pop()), o.b("\n" + n), o.b("      "), o.s(o.f("clicked", e, t, 1), e, t, 0, 295, 394, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.s(n.f("translate", e, t, 1), e, t, 0, 309, 371, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("onboarding_pulsePoint_follow_nice|Nice, you are now following ");
                    }), e.pop()), n.b(n.v(n.f("user", e, t, 0))), n.b("!");
                }), e.pop()), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.s(o.f("appreciate", e, t, 1), e, t, 0, 443, 694, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("      "), o.s(o.f("clicked", e, t, 1), e, t, 1, 0, 0, "") || o.s(o.f("translate", e, t, 1), e, t, 0, 476, 551, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_appreciate_projects_old|Appreciate Projects You Like!");
                }), e.pop()), o.b("\n" + n), o.b("      "), o.s(o.f("clicked", e, t, 1), e, t, 0, 596, 677, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.s(n.f("translate", e, t, 1), e, t, 0, 610, 663, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("onboarding_pulsePoint_appreciate_good_work|Good work!");
                    }), e.pop());
                }), e.pop()), o.b("\n" + n);
            }), e.pop()), o.b("\n" + n), o.s(o.f("sibling_arrow", e, t, 1), e, t, 0, 733, 842, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("      "), o.s(o.f("translate", e, t, 1), e, t, 0, 754, 823, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_sibling_arrows_title|Next and Previous Projects");
                }), e.pop()), o.b("\n" + n);
            }), e.pop()), o.b("  </h1>"), o.b("\n"), o.b("\n" + n), o.s(o.f("follow", e, t, 1), e, t, 0, 883, 1254, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.s(o.f("clicked", e, t, 1), e, t, 1, 0, 0, "") || (o.b("      <p>"), o.s(o.f("translate", e, t, 1), e, t, 0, 924, 1004, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_follow_p1|Follow creatives to see their work in your feed.");
                }), e.pop()), o.b("</p>"), o.b("\n" + n), o.b("      <p>"), o.s(o.f("translate", e, t, 1), e, t, 0, 1046, 1216, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_follow_p2|You'll see their projects as they update and publish them, as well as all the work they appreciate, so you can see what's inspiring them. ");
                }), e.pop()), o.b("</p>"), o.b("\n" + n));
            }), e.pop()), o.b("\n" + n), o.s(o.f("appreciate", e, t, 1), e, t, 0, 1284, 1835, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.s(o.f("clicked", e, t, 1), e, t, 1, 0, 0, "") || (o.b("      <p>"), o.s(o.f("translate", e, t, 1), e, t, 0, 1325, 1481, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_appreciate_p1_old|Appreciating projects gives them more exposure. Your followers will see the work you appreciate in their home feeds.");
                }), e.pop()), o.b("</p>"), o.b("\n" + n), o.b("      <p>"), o.s(o.f("translate", e, t, 1), e, t, 0, 1523, 1596, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_appreciate_p2|Also, it’s just a nice thing to do :)");
                }), e.pop()), o.b("</p>"), o.b("\n" + n)), o.s(o.f("clicked", e, t, 1), e, t, 0, 1648, 1820, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                    o.b("      <p>"), o.s(o.f("translate", e, t, 1), e, t, 0, 1672, 1797, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                        n.b("onboarding_pulsePoint_appreciated_p1|Pro tip: You can see a complete list of the projects you’ve appreciated in your profile.");
                    }), e.pop()), o.b("</p>"), o.b("\n" + n);
                }), e.pop());
            }), e.pop()), o.b("\n" + n), o.s(o.f("sibling_arrow", e, t, 1), e, t, 0, 1872, 2169, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b("    <p>"), o.s(o.f("translate", e, t, 1), e, t, 0, 1894, 2050, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_sibling_arrows_description|Quickly navigate to the next (or previous) project, or just use the left and right arrows on your keyboard.");
                }), e.pop()), o.b("</p>"), o.b("\n" + n), o.b("    <a>"), o.s(o.f("translate", e, t, 1), e, t, 0, 2090, 2148, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b("onboarding_pulsePoint_sibling_arrows_close|Okay, I got it!");
                }), e.pop()), o.b("</a>"), o.b("\n" + n);
            }), e.pop()), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {},
        subs: {}
    }, '<div class="tooltipi tooltipi-white tooltip--pulse js-tooltip--pulse">\n  <h1 class="{{#clicked}}beicons-pre beicons-pre-check-circle{{/clicked}}">\n    {{#follow}}\n      {{^clicked}}{{#translate}}onboarding_pulsePoint_follow_creatives|Follow Creatives{{/translate}}{{/clicked}}\n      {{#clicked}}{{#translate}}onboarding_pulsePoint_follow_nice|Nice, you are now following {{/translate}}{{user}}!{{/clicked}}\n    {{/follow}}\n\n    {{#appreciate}}\n      {{^clicked}}{{#translate}}onboarding_pulsePoint_appreciate_projects_old|Appreciate Projects You Like!{{/translate}}{{/clicked}}\n      {{#clicked}}{{#translate}}onboarding_pulsePoint_appreciate_good_work|Good work!{{/translate}}{{/clicked}}\n    {{/appreciate}}\n\n    {{#sibling_arrow}}\n      {{#translate}}onboarding_pulsePoint_sibling_arrows_title|Next and Previous Projects{{/translate}}\n    {{/sibling_arrow}}\n  </h1>\n\n  {{#follow}}\n    {{^clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_follow_p1|Follow creatives to see their work in your feed.{{/translate}}</p>\n      <p>{{#translate}}onboarding_pulsePoint_follow_p2|You\'ll see their projects as they update and publish them, as well as all the work they appreciate, so you can see what\'s inspiring them. {{/translate}}</p>\n    {{/clicked}}\n  {{/follow}}\n\n  {{#appreciate}}\n    {{^clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_appreciate_p1_old|Appreciating projects gives them more exposure. Your followers will see the work you appreciate in their home feeds.{{/translate}}</p>\n      <p>{{#translate}}onboarding_pulsePoint_appreciate_p2|Also, it’s just a nice thing to do :){{/translate}}</p>\n    {{/clicked}}\n    {{#clicked}}\n      <p>{{#translate}}onboarding_pulsePoint_appreciated_p1|Pro tip: You can see a complete list of the projects you’ve appreciated in your profile.{{/translate}}</p>\n    {{/clicked}}\n  {{/appreciate}}\n\n  {{#sibling_arrow}}\n    <p>{{#translate}}onboarding_pulsePoint_sibling_arrows_description|Quickly navigate to the next (or previous) project, or just use the left and right arrows on your keyboard.{{/translate}}</p>\n    <a>{{#translate}}onboarding_pulsePoint_sibling_arrows_close|Okay, I got it!{{/translate}}</a>\n  {{/sibling_arrow}}\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    e.exports = n(2)(68);
}, function(e, t, n) {
    var o = n(181), r = {}, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<div class="mature-message login-modal">'), o.b("\n" + n), 
            o.b('  <h2 class="mature-heading">'), o.s(o.f("translate", e, t, 1), e, t, 0, 84, 189, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("project_sign_in_mature|You must sign in or sign up for Behance to view projects containing adult content.");
            }), e.pop()), o.b("</h2>"), o.b("\n" + n), o.s(o.f("login", e, t, 1), e, t, 0, 221, 232, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b(n.rp("<button0", e, t, ""));
            }), e.pop()), o.b("</div>"), o.b("\n"), o.b("\n" + n), o.b('<div class="popup-buttons login-button">'), 
            o.b("\n" + n), o.b("  "), o.s(o.f("translate", e, t, 1), e, t, 0, 308, 464, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b('project_no_account_signup|Don\'t Have an Account? <a class="js-adobeid-signup signup" data-signup-from="Mature_Content_SignUpBehance">Sign up for Behance</a>');
            }), e.pop()), o.b("\n" + n), o.b("</div>"), o.b("\n"), o.fl();
        },
        partials: {
            "<button0": {
                name: "button",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }, '<div class="mature-message login-modal">\n  <h2 class="mature-heading">{{#translate}}project_sign_in_mature|You must sign in or sign up for Behance to view projects containing adult content.{{/translate}}</h2>\n  {{#login}}{{>button}}{{/login}}\n</div>\n\n<div class="popup-buttons login-button">\n  {{#translate}}project_no_account_signup|Don\'t Have an Account? <a class="js-adobeid-signup signup" data-signup-from="Mature_Content_SignUpBehance">Sign up for Behance</a>{{/translate}}\n</div>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
}, function(e, t, n) {
    "use strict";
    var o = n(1406), r = n.n(o);
    t.default = r.a;
}, function(e, t, n) {
    (t = e.exports = n(124)(!1)).push([ e.i, ".AdminSidebar-adminSidebar-3k2 {\n  background-color: #191919;\n  color: #fff;\n  margin-top: 10px;\n  padding: 20px;\n}\n.AdminSidebar-adminSectionHeader-25H {\n  margin-bottom: 20px;\n}\n.AdminSidebar-socialEmailStatus-EzY {\n  font-size: 18px;\n  margin-left: 10px;\n}\n", "" ]), 
    t.locals = {
        adminSidebar: "AdminSidebar-adminSidebar-3k2",
        adminSectionHeader: "AdminSidebar-adminSectionHeader-25H",
        socialEmailStatus: "AdminSidebar-socialEmailStatus-EzY"
    };
}, function(e, t, n) {
    var o = n(181), r = {
        "bestyleguide/_avatar": n(423).template
    }, i = new o.Template({
        code: function(e, t, n) {
            var o = this;
            return o.b(n = n || ""), o.b('<li class="comment-container js-comment-container cfix '), 
            o.s(o.d("user.owner", e, t, 1), e, t, 0, 70, 83, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("owner-comment");
            }), e.pop()), o.s(o.d("user.owner", e, t, 1), e, t, 1, 0, 0, "") || o.b("user-comment"), 
            o.b('" data-id="'), o.b(o.v(o.f("id", e, t, 0))), o.b('">'), o.b("\n" + n), o.b(o.rp("<bestyleguide/_avatar0", e, t, "")), 
            o.b('  <div class="comment-text-container left relative">'), o.b("\n" + n), o.b('    <div class="comment-user-date-wrap ui-corner cfix">'), 
            o.b("\n" + n), o.b('      <a class="user-name-link bold js-mini-profile" data-id="'), 
            o.b(o.v(o.d("user.id", e, t, 0))), o.b('" href="'), o.b(o.v(o.d("user.url", e, t, 0))), 
            o.b('">'), o.b(o.v(o.d("user.name", e, t, 0))), o.b("</a>"), o.b("\n" + n), o.s(o.f("replied_to", e, t, 1), e, t, 0, 637, 775, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('      <span class="bold">'), o.s(o.f("translate", e, t, 1), e, t, 0, 677, 747, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                    n.b('comment_replied_to|replied to <a href="'), n.b(n.v(n.d("user.url", e, t, 0))), 
                    n.b('">'), n.b(n.v(n.d("user.name", e, t, 0))), n.b("</a>");
                }), e.pop()), o.b("</span>"), o.b("\n" + n);
            }), e.pop()), o.b('      <span class="comment-date '), o.s(o.f("timestamp", e, t, 1), e, t, 0, 837, 856, "{{ }}") && (o.rs(e, t, function(e, t, n) {
                n.b("js-format-timestamp");
            }), e.pop()), o.b('" data-timestamp="'), o.b(o.v(o.f("timestamp", e, t, 0))), o.b('">'), 
            o.b(o.v(o.f("posted_on", e, t, 0))), o.b("</span>"), o.b("\n" + n), o.b("    </div>"), 
            o.b("\n" + n), o.b('    <div class="comment-text-wrap"><div class="comment-text js-comment-text">'), 
            o.b(o.t(o.f("comment", e, t, 0))), o.b("</div></div>"), o.b("\n" + n), o.b("  </div>"), 
            o.b("\n" + n), o.b('  <div class="comment-actions">'), o.b("\n" + n), o.s(o.d("permissions.flag", e, t, 1), e, t, 0, 1104, 1230, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('    <a class="comment-action comment-spam js-action-spam" data-id="'), o.b(o.v(o.f("id", e, t, 0))), 
                o.b('" data-type="'), o.b(o.v(o.f("type", e, t, 0))), o.b('comment" tabindex="0"></a>'), 
                o.b("\n" + n);
            }), e.pop()), o.s(o.d("permissions.close", e, t, 1), e, t, 0, 1278, 1355, "{{ }}") && (o.rs(e, t, function(e, t, o) {
                o.b('    <a class="comment-action comment-close js-delete" tabindex="0"></a>'), 
                o.b("\n" + n);
            }), e.pop()), o.b("  </div>"), o.b("\n" + n), o.b("</li>"), o.b("\n"), o.fl();
        },
        partials: {
            "<bestyleguide/_avatar0": {
                name: "bestyleguide/_avatar",
                partials: {},
                subs: {
                    avatarClasses: function(e, t, n, o) {
                        n.b("js-mini-profile");
                    },
                    avatarId: function(e, t, n, o) {
                        n.b(n.v(n.d("user.id", e, t, 0)));
                    },
                    avatarUrl: function(e, t, n, o) {
                        n.b(n.v(n.d("user.url", e, t, 0)));
                    },
                    src: function(e, t, n, o) {
                        n.b(n.v(n.d("user.image", e, t, 0)));
                    }
                }
            }
        },
        subs: {}
    }, '<li class="comment-container js-comment-container cfix {{#user.owner}}owner-comment{{/user.owner}}{{^user.owner}}user-comment{{/user.owner}}" data-id="{{id}}">\n  {{<bestyleguide/_avatar}}\n    {{$avatarClasses}}js-mini-profile{{/avatarClasses}}\n    {{$avatarId}}{{user.id}}{{/avatarId}}\n    {{$avatarUrl}}{{user.url}}{{/avatarUrl}}\n    {{$src}}{{user.image}}{{/src}}\n  {{/bestyleguide/_avatar}}\n  <div class="comment-text-container left relative">\n    <div class="comment-user-date-wrap ui-corner cfix">\n      <a class="user-name-link bold js-mini-profile" data-id="{{user.id}}" href="{{user.url}}">{{user.name}}</a>\n      {{#replied_to}}\n      <span class="bold">{{#translate}}comment_replied_to|replied to <a href="{{user.url}}">{{user.name}}</a>{{/translate}}</span>\n      {{/replied_to}}\n      <span class="comment-date {{#timestamp}}js-format-timestamp{{/timestamp}}" data-timestamp="{{timestamp}}">{{posted_on}}</span>\n    </div>\n    <div class="comment-text-wrap"><div class="comment-text js-comment-text">{{& comment}}</div></div>\n  </div>\n  <div class="comment-actions">\n    {{#permissions.flag}}\n    <a class="comment-action comment-spam js-action-spam" data-id="{{id}}" data-type="{{type}}comment" tabindex="0"></a>\n    {{/permissions.flag}}\n    {{#permissions.close}}\n    <a class="comment-action comment-close js-delete" tabindex="0"></a>\n    {{/permissions.close}}\n  </div>\n</li>\n', o);
    i.ri = function(e, t, n) {
        return o.helpers && e.unshift(o.helpers), this.r(e, (i = r, a = t, Object.keys(a).reduce(function(e, t) {
            return e[t] = a[t], e;
        }, i)), n);
        var i, a;
    }, e.exports = i.render.bind(i), e.exports.template = i;
} ]) ]);
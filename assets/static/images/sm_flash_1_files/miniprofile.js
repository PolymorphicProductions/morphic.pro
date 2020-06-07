(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 31 ], {
    607: function(t, e, i) {
        "use strict";
        i.r(e);
        var o = i(172), n = i.n(o), s = i(1), r = i(357), l = (i(17), i(18), i(20), i(24), 
        i(25), i(22), i(21), i(252)), h = i(413), c = i(547), a = i.n(c), u = i(226);
        function f(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), i.push.apply(i, o);
            }
            return i;
        }
        function d(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t;
        }
        var p, m, b, _ = h.default.extend({
            mustache: a.a,
            template: function(t) {
                return t.user && t.user.latest_projects && t.user.latest_projects.forEach(u.c), 
                this._super(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? f(Object(i), !0).forEach(function(e) {
                            d(t, e, i[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                        });
                    }
                    return t;
                }({
                    classes: [ "hide-tablet", "hide-phone", "js-mini-profile-popup" ]
                }, t));
            },
            position: function() {
                var t, e, i, o = this._controller.$context.width() / 2, n = this.constructor.NUB_OFFSET - o, s = n < 0 ? "+" : "-";
                this._super(this._controller.$context, {
                    my: "left top",
                    at: "left" + s + Math.abs(n) + " bottom+" + this.constructor.NUB_HEIGHT,
                    collision: "flipfit",
                    within: this._model.get("within")
                }), t = this._controller.$context.offset(), e = this.$view.offset(), this._model.get("bottom") && e.top + this.$view.height() > this._model.get("bottom").offset().top ? (this._super(this._controller.$context, {
                    my: "left" + s + Math.abs(n) + " bottom-" + this.constructor.NUB_HEIGHT,
                    at: "left top",
                    collision: "flipfit none",
                    within: this._model.get("within")
                }), i = "bottom") : i = t.top > e.top ? "bottom" : "top", i += Math.floor(t.left) > e.left + Math.abs(n) ? "-right" : "-left", 
                this.$view.removeClass("top-right top-left bottom-right bottom-left").addClass(i);
            },
            rendered: function() {
                this._super(), l.default.init(this.$view);
            },
            show: function() {
                if (!document.body.contains(this._controller.$context[0])) return this.hide();
                this.$view && (this.$view.removeClass("hide"), this.position()), this._super();
            },
            hide: function() {
                this._super(), this.destroy();
            },
            _bind: n.a.noop,
            _unbind: n.a.noop
        }, {
            NUB_OFFSET: 32,
            NUB_HEIGHT: 12
        }), w = r.default.extend({
            init: function() {
                this._super.apply(this, arguments), this.listenTo(this._view, {
                    postrender: function(t) {
                        this._bindHide(t);
                    },
                    hide: function() {
                        this._unbindHide();
                    }
                }), this._keepAlive = this._keepAlive.bind(this), this._setDeath = this._setDeath.bind(this);
            },
            _unbindHide: function() {
                this.$context.off(".miniprofile");
            },
            _bindHide: function(t) {
                t.on({
                    "mouseenter.miniprofile": this._keepAlive,
                    "mouseleave.miniprofile": this._setDeath,
                    "click.miniprofile": this._setDeath
                });
            },
            setContext: function(t) {
                this.$context = t, this._unbindHide(), this._bindHide(this.$context);
            },
            _keepAlive: function() {
                clearTimeout(this._hideTimeout);
            },
            _setDeath: function() {
                var t = this;
                this._hideTimeout = setTimeout(function() {
                    t._view && (t._view.hide(), t.trigger("closed"));
                }, this.constructor.HIDE_TIMEOUT);
            }
        }, {
            VIEW_CLASS: _,
            HIDE_TIMEOUT: 500
        }), v = 500;
        function g(t) {
            return Object(s.default)({
                url: "/v2/users/" + t,
                type: "get",
                data: {
                    format: "mini",
                    client_id: window.adobeid.client_id
                }
            });
        }
        e.default = {
            init: function() {
                var t, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n()(document.body), o = arguments.length > 1 ? arguments[1] : void 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n()(".js-footer"), r = i instanceof n.a ? i : n()(i);
                m = o || n()(window), p = s, r.on("mouseenter", ".js-mini-profile", function() {
                    var i = n()(this);
                    i.data("hasMiniProfile") || (t = i.data("id"), clearTimeout(b), b = setTimeout(function() {
                        i.addClass("wait"), (e = g(t)).then(function(t) {
                            i.removeClass("wait"), function(t, e) {
                                var i = new w(e);
                                t.parents(".popup").length ? (e.within = n()(window), e.bottom = null) : (e.within = m, 
                                e.bottom = p), t.data("hasMiniProfile", !0), i.setContext(t), i.render(t), t.trigger("miniprofile-rendered"), 
                                i._view.show(), i.on("closed", function() {
                                    t.data("hasMiniProfile", !1), i.destroy();
                                });
                            }(i, t), e = null;
                        }, function() {
                            i.removeClass("wait");
                        });
                    }, v));
                }).on("mouseleave", ".js-mini-profile", function() {
                    clearTimeout(b), e && (e.reject(), e = null, r.data("hasMiniProfile", !1));
                });
            },
            destroy: function(t) {
                clearTimeout(b), (t = t || n()(document.body)).off("mouseenter mouseleave", ".js-mini-profile");
            },
            loadUser: g,
            popUpDelay: v
        };
    }
} ]);
(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 34 ], {
    1017: function(e, t, n) {
        e.exports = n(2)(355);
    },
    2325: function(e, t, n) {
        e.exports = n(2)(211);
    },
    2326: function(e, t, n) {
        var i = n(181), o = {}, s = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="error'), i.s(i.f("containerClasses", e, t, 1), e, t, 0, 38, 44, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                }), e.pop()), i.b('">'), i.b("\n" + n), i.b('  <span class="error__copy">'), i.b(i.t(i.f("message", e, t, 0))), 
                i.b("</span>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="error{{#containerClasses}} {{.}}{{/containerClasses}}">\n  <span class="error__copy">{{{message}}}</span>\n</div>\n', i);
        s.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (s = o, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, s)), n);
            var s, r;
        }, e.exports = s.render.bind(s), e.exports.template = s;
    },
    2327: function(e, t, n) {
        var i = n(181), o = {
            "bestyleguide/_avatar": n(423).template
        }, s = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<li class="ui-menu-item">'), i.b("\n" + n), i.b('  <div class="mention-user-wrap">'), 
                i.b("\n" + n), i.b(i.rp("<bestyleguide/_avatar0", e, t, "")), i.b('    <div class="mention-displayname">'), 
                i.b(i.v(i.f("display_name", e, t, 0))), i.b("</div>"), i.b("\n" + n), i.b('    <div class="mention-minor">@'), 
                i.b(i.v(i.f("username", e, t, 0))), i.b("</div>"), i.b("\n" + n), i.b("  </div>"), 
                i.b("\n" + n), i.b("</li>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_avatar0": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        src: function(e, t, n, i) {
                            n.b(n.v(n.d("images.50", e, t, 0)));
                        },
                        srcLarge: function(e, t, n, i) {
                            n.b(n.v(n.d("images.115", e, t, 0)));
                        }
                    }
                }
            },
            subs: {}
        }, '<li class="ui-menu-item">\n  <div class="mention-user-wrap">\n    {{<bestyleguide/_avatar}}\n      {{$src}}{{images.50}}{{/src}}\n      {{$srcLarge}}{{images.115}}{{/srcLarge}}\n    {{/bestyleguide/_avatar}}\n    <div class="mention-displayname">{{display_name}}</div>\n    <div class="mention-minor">@{{username}}</div>\n  </div>\n</li>\n', i);
        s.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (s = o, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, s)), n);
            var s, r;
        }, e.exports = s.render.bind(s), e.exports.template = s;
    },
    2329: function(e, t, n) {
        var i = n(181), o = {}, s = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b("<div>"), i.b("\n" + n), i.b('  <p class="popup-title">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 45, 94, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("comment_guidelines_popup_title|Comment Guidelines");
                }), e.pop()), i.b("</p>"), i.b("\n" + n), i.b('  <p class="popup-subtitle">'), i.s(i.f("translate", e, t, 1), e, t, 0, 155, 235, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("comment_guidelines_popup_subtitle|Before you comment, please read the guidelines");
                }), e.pop()), i.b("</p>"), i.b("\n" + n), i.b('  <div class="popoup-image">'), i.b("\n" + n), 
                i.b('    <img src="'), i.b(i.v(i.f("assetsUrl", e, t, 0))), i.b('img/comments/comment-guidelines.png" srcset="'), 
                i.b(i.v(i.f("assetsUrl", e, t, 0))), i.b("img/comments/comment-guidelines.png, "), 
                i.b(i.v(i.f("assetsUrl", e, t, 0))), i.b('img/comments/comment-guidelines@2x.png 2x">'), 
                i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b('  <div class="popup__guidelines">'), 
                i.b("\n" + n), i.b('    <h4 class="popup__guidelines-header">'), i.s(i.f("translate", e, t, 1), e, t, 0, 560, 611, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("comment_guidelines_popup_header_topic|Stay On-Topic");
                }), e.pop()), i.b("</h4>"), i.b("\n" + n), i.b('    <p class="popup__guidelines-guideline">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 688, 907, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("comment_guidelines_popup_text_topic|Comments must be about the creative work in the project that you are commenting on. Don't use comments on someone else's project to promote your own work or to link to other websites.");
                }), e.pop()), i.b("</p>"), i.b("\n" + n), i.b('    <p class="popup__guidelines-guideline">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 983, 1124, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("comment_guidelines_popup_text_off_topic|We consider off-topic posts 'spam' and we deactivate accounts that repeatedly violate this guideline.");
                }), e.pop()), i.b("</p>"), i.b("\n" + n), i.b('    <h4 class="popup__guidelines-header">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 1198, 1251, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("comment_guidelines_popup_header_respect|Be Respectful");
                }), e.pop()), i.b("</h4>"), i.b("\n" + n), i.b('    <p class="popup__guidelines-guideline">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 1328, 1527, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("comment_guidelines_popup_text_respect|Although we are all for free expression, we ask that you keep your comments constructive and respectful. We don't tolerate abusive, vulgar or insulting comments.");
                }), e.pop()), i.b("</p>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div>\n  <p class="popup-title">{{#translate}}comment_guidelines_popup_title|Comment Guidelines{{/translate}}</p>\n  <p class="popup-subtitle">{{#translate}}comment_guidelines_popup_subtitle|Before you comment, please read the guidelines{{/translate}}</p>\n  <div class="popoup-image">\n    <img src="{{assetsUrl}}img/comments/comment-guidelines.png" srcset="{{assetsUrl}}img/comments/comment-guidelines.png, {{assetsUrl}}img/comments/comment-guidelines@2x.png 2x">\n  </div>\n  <div class="popup__guidelines">\n    <h4 class="popup__guidelines-header">{{#translate}}comment_guidelines_popup_header_topic|Stay On-Topic{{/translate}}</h4>\n    <p class="popup__guidelines-guideline">{{#translate}}comment_guidelines_popup_text_topic|Comments must be about the creative work in the project that you are commenting on. Don\'t use comments on someone else\'s project to promote your own work or to link to other websites.{{/translate}}</p>\n    <p class="popup__guidelines-guideline">{{#translate}}comment_guidelines_popup_text_off_topic|We consider off-topic posts \'spam\' and we deactivate accounts that repeatedly violate this guideline.{{/translate}}</p>\n    <h4 class="popup__guidelines-header">{{#translate}}comment_guidelines_popup_header_respect|Be Respectful{{/translate}}</h4>\n    <p class="popup__guidelines-guideline">{{#translate}}comment_guidelines_popup_text_respect|Although we are all for free expression, we ask that you keep your comments constructive and respectful. We don\'t tolerate abusive, vulgar or insulting comments.{{/translate}}</p>\n  </div>\n</div>\n', i);
        s.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (s = o, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, s)), n);
            var s, r;
        }, e.exports = s.render.bind(s), e.exports.template = s;
    },
    2436: function(e, t, n) {
        "use strict";
        n.r(t);
        n(17), n(54), n(63), n(43), n(36), n(126), n(8), n(37), n(38);
        var i = n(172), o = n.n(i), s = n(84), r = n.n(s), a = n(206), c = n.n(a), u = (n(18), 
        n(20), n(24), n(25), n(22), n(748), n(71), n(62), n(198), n(21), n(76), n(2325)), l = n.n(u), m = n(773), p = n.n(m), d = n(2326), _ = n.n(d), f = n(14), h = o()("<div>");
        var b, g, v = l.a.extend({
            template: p()(_.a, o.a),
            templateData: function() {
                return {
                    message: "Oops, an error occurred. | <a class='js-reload'>Please Refesh.</a>"
                };
            },
            render: function(e) {
                return e = e ? {
                    message: function(e) {
                        return ~e.indexOf("&lt;") ? h.html(e).text() : e;
                    }(e)
                } : null, this._super(e);
            },
            rendered: function() {
                this.$view.on("click", ".js-reload", function() {
                    f.default.reloadLocation();
                }).show();
            },
            hide: function() {
                return this.$view && this.$view.hide();
            }
        }), y = {
            init: function(e) {
                return b = new v(e);
            },
            show: function(e) {
                b && b.render(e);
            },
            hide: function() {
                b && b.hide();
            },
            Errorline: v
        }, O = (n(31), n(30), n(130), n(73), n(724)), w = n.n(O), x = n(1), E = {
            global: "/v2/users?mentions=1",
            local: ""
        }, j = 2, C = 5, T = function(e) {
            return this[e];
        }, S = function(e) {
            var t = this.toLocaleLowerCase();
            return 0 === e.first_name.toLocaleLowerCase().indexOf(t) || 0 === e.last_name.toLocaleLowerCase().indexOf(t) || 0 === e.username.toLocaleLowerCase().indexOf(t);
        }, R = function(e) {
            return function(e) {
                return Object.keys(this).map(T, this).filter(S, e);
            }.call(e, this);
        };
        function $(e) {
            return g = function(e) {
                for (var t = {}, n = 0; n < e.length; ++n) t[e[n].id] = e[n];
                return t;
            }(e);
        }
        function L() {
            var e;
            return g ? (e = new w.a()).resolve(g) : e = Object(x.default)(E.local).then($), 
            e;
        }
        var k = function e(t, n) {
            var i, o;
            return e._cache = e._cache || {}, e._cache[t] = e._cache[t] || {}, n.length < j && (o = []), 
            e._cache[t][n] && (o = e._cache[t][n]), o ? ((i = new w.a()).resolve(o), i) : Object(x.default)({
                url: t,
                data: {
                    q: n
                }
            }).then(function(i) {
                return o = i.users, e._cache[t][n] = o, o;
            });
        }.bind(null, E.global), D = {
            init: function(e) {
                return e.maxResults && (C = e.maxResults), e.minLength && (j = e.minLength), e.local && (E.local = e.local), 
                g = null, this;
            },
            getLocal: L,
            source: function(e, t) {
                var n = [];
                function i() {
                    var e, i;
                    t((e = n, i = {}, e.filter(function(e) {
                        return !(e.id in i || (i[e.id] = e, 0));
                    })).slice(0, C));
                }
                [ function(e) {
                    return L().then(R.bind(e));
                }, k ].map(function(t) {
                    return t(e.term);
                }).reduce(function(e, t) {
                    return (e ? e.then(function() {
                        return t;
                    }) : t).then(function(e) {
                        e.forEach(function(e) {
                            e.value = e.username;
                        }), n = n.concat(e), i();
                    });
                }, null).then(null, i);
            }
        }, P = n(2327), I = n.n(P), M = n(2328), A = n.n(M);
        function F(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function N(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var U = function(e, t) {
            if (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach(function(t) {
                        N(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({
                maxMentions: 5
            }, t), D.init(t), e.length) {
                var n = new RegExp(A.a.usernameMatch.source, "g");
                e.parent().addClass("ui-front").end().one("focus", D.getLocal).automention({
                    delay: 500,
                    itemTemplate: I.a,
                    source: D.source,
                    appendTo: t.appendTo
                }).on("automentionopen", function() {
                    var e, i, s = this.value, r = {}, a = o()(this);
                    s.replace(n, function(e, t) {
                        r[e] = t;
                    }), Object.keys(r).length > t.maxMentions && (e = a.data("beAutomention"), (i = a.data("errorbar") || new y.Errorline(e.menu.element)).render("<strong>You may only mention " + t.maxMentions + " users</strong>"), 
                    i.$view.prependTo(e.menu.element), a.data("errorbar", i));
                });
            }
        }, W = n(1617), G = n(771).a.extend({
            _submit: function(e) {
                var t = this;
                return this._super(e).then(function() {
                    t.$form.find(":input").val("").removeAttr("checked selected");
                });
            }
        }), B = n(5), J = n(567), Y = n(2329), H = n.n(Y), V = n(27), q = n(26);
        function K(e) {
            "@babel/helpers - typeof";
            return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        t.default = c.a.extend({
            _total: 0,
            _guidelinesWarningMsg: B.default.translate("comment_guidelines_warning", 'Your comment doesn\'t follow our <a href="/misc/community#comments" target="_blank">comment guidelines.</a>'),
            init: function(e, t) {
                var n = this, i = e instanceof o.a ? e : o()(e);
                this._$context = i, this._id = Number(i[0].dataset.id), this._$view = i.find(".js-post-comment-block"), 
                this._$commentText = i.find(".js-comment-textarea"), this._$commentWarning = i.find(".js-comment-warning"), 
                this._$formItemContainer = i.find(".js-comment-form-item-container"), this._$submit = i.find(".js-submit"), 
                this._commentContainer = this._initCommentContainer(), this._config = t || {}, this._sessionId = r()(), 
                this._$commentText.on("focus", function() {
                    return n.trigger("input.focus");
                }), this._$commentText.on("blur", function() {
                    return n.trigger("input.blur");
                });
            },
            bind: function() {
                U(this._$commentText, {
                    local: "/mentions/project/" + this._id
                }), this._bindForm(), this._commentContainer.get();
            },
            unbind: function() {
                this._form && this._form.destroy(), this._commentContainer.destroy(), this._$view && this._$view.remove();
            },
            _setTotal: function(e) {
                this._total = e, this._$context.find(".js-comments-total").text(e ? "(" + e + ")" : "");
            },
            _initCommentContainer: function() {
                var e, t = this, n = this._id, i = this, o = this._$context.find(".js-see-more");
                return e = W.b.extend({
                    moreSelector: ".js-see-more"
                }).init(this._$context, {
                    type: "project",
                    entity_id: n
                }, function(e) {
                    o.toggleClass("hide", !e.more), i._setTotal(+e.total);
                }), this.listenTo(e, "remove", function() {
                    this._setTotal(this._total - 1), i.trigger("removed");
                }), this.listenTo(e, W.a.childHasFocus, function() {
                    return t.trigger(W.a.childHasFocus);
                }), this.listenTo(e, W.a.childLostFocus, function() {
                    return t.trigger(W.a.childLostFocus);
                }), e;
            },
            _logValidationError: function(e) {
                var t = e.http_code, n = e.messages, i = void 0 === n ? [] : n, o = e.code;
                return V.default.info("analytics", "comment failed validation", {
                    project_id: this._id,
                    reason: i.length ? i[0].message : null,
                    httpResponseCode: t,
                    code: o,
                    isBlockedRateLimitViolation: o === this._config.COMMENT_ERROR_CODES.ERROR_VALIDATION,
                    session_id: this._sessionId
                }), V.default.send();
            },
            _bindForm: function() {
                var e = this, t = this._id;
                this._$submit.length && (this._form = G.extend({
                    hideButtonText: B.default.translate("comments_hidebutton_posting", "Posting..."),
                    _findFormError: function(t) {
                        t.comment && "object" !== K(t.responseJSON) && e._setFormInErrorState(t.comment), 
                        this._super(t);
                    },
                    hideButtons: function() {},
                    _setDisabled: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        e._$context.find(".js-posting").toggleClass("hide", !t), e._$submit.toggleClass("hide", t);
                    },
                    showButtons: function() {
                        this._setDisabled(!1);
                    }
                }).init(this._$view).on("success", function() {
                    var t = this;
                    this.showButtons(), V.default.info("analytics", "comment submitted", {
                        project_id: e._id,
                        session_id: e._sessionId
                    }), V.default.send().then(function() {
                        return t.trigger("loggedSuccess");
                    }), e._sessionId = r()();
                }), this._form.handlers.length = 0, this._form.commit = function(n) {
                    return n.data.entity_id = t, e._form._setDisabled(), this.then(function(t) {
                        !function(t) {
                            if (!t.id || !t.user) throw t;
                            e._commentContainer.add({
                                id: t.id,
                                user: t.user,
                                comment: t.comment,
                                posted_on: B.default.translate("comments_just_now", "Just now"),
                                permissions: [ 3e3 ]
                            }), e._setTotal(e._total + 1), e.trigger("added");
                        }(t), e._removeFormFromErrorState();
                    }).catch(function(t) {
                        return e._setFormInErrorState(t.responseJSON), e._logValidationError(t.responseJSON);
                    }), this;
                }, this._$commentText.on("change", function() {
                    e._removeFormFromErrorState();
                }), this._bindCommentGuidelines());
            },
            _bindCommentGuidelines: function() {
                var e = this;
                this._$commentText.on("focus", function() {
                    e._config.USER_HAS_ACKNOWLEDGED_GUIDELINES_POPUP || (e._$commentText.blur(), V.default.info("analytics", "comment guidelines rendered", {
                        project_id: e._id
                    }), Object(J.default)({
                        classes: [ "popup-comment-guidelines qa-popup-comment-guidelines" ],
                        html: H()({
                            assetsUrl: q.ASSETS_URL
                        }),
                        hideClose: !0,
                        buttons: [ {
                            label: B.default.translate("comments_got_it", "Got it!"),
                            classes: [ "js-confirm" ]
                        } ]
                    }).then(function() {
                        return e._config.USER_HAS_ACKNOWLEDGED_GUIDELINES_POPUP = !0, V.default.info("analytics", "comment guidelines acknowledged", {
                            project_id: e._id
                        }), Object(x.default)({
                            method: "POST",
                            url: "/v2/users/me/flags/comment_guidelines_popup"
                        }).then(function() {
                            e.trigger("commentGuidelinesAcknowledged");
                        });
                    }), o()(".js-blocking-div").off());
                });
            },
            _formatErrorMessage: function(e) {
                if ("string" == typeof e) return B.default.translateErrorMessage(e);
                if ("object" === K(e)) {
                    var t = e.http_code, n = e.messages, i = void 0 === n ? [] : n;
                    return t === this._config.COMMENT_ERROR_CODES.TOO_MANY_REQUESTS && i.length && i[0].message ? i[0].message : this._guidelinesWarningMsg;
                }
                return "";
            },
            _setFormInErrorState: function(e) {
                "object" === K(e) && e.http_code === this._config.COMMENT_ERROR_CODES.TOO_MANY_REQUESTS && e.code === this._config.COMMENT_ERROR_CODES.ERROR_VALIDATION && this._showRateLimitPopup(e), 
                e.http_code !== q.HTTP_CODE_EXPECTATION_FAILURE && this._$commentWarning.removeClass("hide").html(this._formatErrorMessage(e)), 
                this._$formItemContainer.addClass("form-item-error");
            },
            _removeFormFromErrorState: function() {
                this._$commentWarning.addClass("hide").html(""), this._$formItemContainer.removeClass("form-item-error");
            },
            _showRateLimitPopup: function() {
                var e = "\n      <p>" + B.default.translate("comment_ratelimit_popup_text_violation", 'Your comments have repeatedly violated our <a href="/misc/community#comments" target="_blank">community guidelines</a>. Continued violation of these guidelines may result in a permanent ban.') + "</p>\n      <p>" + B.default.translate("comment_ratelimit_popup_text_appreciate", "We appreciate your understanding.") + "</p>\n      <p>" + B.default.translate("comment_ratelimit_popup_text_contact", 'If you have questions or believe this was shown in error, please <a href="https://help.behance.net" target="_blank">contact us</a>.') + "</p>\n    ";
                Object(J.default)({
                    classes: [ "popup-comment-ratelimit" ],
                    title: B.default.translate("comment_ratelimit_popup_title", "You've reached the comment limit"),
                    html: e,
                    buttons: [ {
                        label: B.default.translate("comments_got_it_no_exclamation", "Got it"),
                        classes: [ "js-confirm" ]
                    } ]
                });
            }
        });
    },
    626: function(e, t, n) {
        e.exports = n(2)(91);
    },
    749: function(e, t, n) {
        e.exports = n(2)(191);
    },
    750: function(e, t, n) {
        e.exports = n(2)(339);
    }
} ]);
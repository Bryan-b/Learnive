function Toastr() {
    "use strict";
    toastr.options = {
        closeButton: !0,
        debug: !1,
        newestOnTop: !0,
        progressBar: !1,
        positionClass: "toast-top-right",
        preventDuplicates: !1,
        showDuration: 300,
        hideDuration: 1e3,
        timeOut: 1e4,
        extendedTimeOut: 1e3,
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    }
}
function viewport() {
    if (typeof $.browser.safari != "undefined" && $.browser.safari)
        return {
            width: $(window).width(),
            height: $(window).height()
        };
    var n = window
        , t = "inner";
    return "innerWidth" in window || (t = "client",
        n = document.documentElement || document.body),
        {
            width: n[t + "Width"],
            height: n[t + "Height"]
        }
}
function MenuIconOffset(n) {
    var u = $(window).width(), t = 20, i, r;
    n > 767 && (t = 25);
    i = $(".container").outerWidth() + $(".container").offset().left - t;
    r = i - $(".syncfusion-menu .syncfusion-menu-items .menu-list").outerWidth();
    $(".syncfusion-menu .syncfusion-menu-items .menu-list").css("left", r)
}
function getCookieUserConfirmedValue(n) {
    for (var r = n, u = document.cookie.split(";"), t, i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " ";)
            t = t.substring(1);
        if (t.indexOf(r) == 0)
            return t.substring(r.length, t.length)
    }
    return ""
}
function deleteCookie(n, t, i) {
    var r = new Date, u;
    r.setTime(r.getTime() + i * 864e5);
    u = "; expires=" + r.toGMTString();
    document.cookie = n + "=" + t + u + "; path=/"
}
function getCookie(n) {
    for (var r = n + "=", u = document.cookie.split(";"), t, i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " ";)
            t = t.substring(1);
        if (t.indexOf(r) == 0)
            return t.substring(r.length, t.length)
    }
    return ""
}
function setCookie(n, t, i) {
    var r = new Date, u;
    r.setTime(r.getTime() + i * 864e5);
    u = "expires=" + r.toUTCString();
    document.cookie = n + "=" + t + ";" + u + ";path=/"
}
function showWaitingPopupForElement(n) {
    $("#" + n).showWaitingPopUp()
}
function removeWaitingPopupFromElement(n) {
    $("#" + n).removeWaitingPopUp()
}
function apiUrl() {
    return "//analytics.syncfusion.com/log/"
}
function readCookie() {
    var i, n, t;
    if (document.cookie != "" && document.cookie != null)
        for (i = document.cookie.split(";"),
            n = 0; n < i.length; n++)
            t = i[n].split("="),
                t.length == 2 && (documentCookies[t[0].trim()] = t[1])
}
function LogSearch(n) {
    $.ajax({
        type: "post",
        url: "/analytics/searchlog",
        data: n,
        error: function (t, i) {
            errorCount++;
            errorCount <= 3 ? LogSearch(n) : getErrorMessage(t, i, n, "Search")
        }
    })
}
function LogAnalyticsForFaq(n) {
    $.ajax({
        type: "post",
        url: "/analytics/faqlog",
        data: n,
        async: !1,
        error: function (t, i) {
            errorCount++;
            errorCount <= 3 ? LogAnalyticsForFaq(n) : getErrorMessage(t, i, n, "FAQ")
        }
    })
}
function getErrorMessage(n, t, i, r) {
    var u = "";
    u = n.status == 0 ? "Not connect, verify network" : n.status == 404 ? "Requested page not found [404]" : n.status == 500 ? "Internal Server Error [500]" : t == "parsererror" ? "Requested JSON parse failed" : t == "timeout" ? "Time out error" : t == "abort" ? "Ajax request aborted" : "Uncaught Error " + n.responseText;
    $.ajax({
        type: "post",
        url: "/analytics/errornotification",
        data: {
            Action: i.Action,
            Id: "",
            Exception: u,
            QueueName: r
        }
    })
}
function getServerDateTime() {
    var n = null;
    return $.ajax({
        type: "GET",
        url: "/downloads/getdownloadservertime",
        async: !1,
        success: function (t) {
            n = t
        }
    }),
        n
}
var login = null;
$(document).ready(function () {
    if ($("#login-btn-menu").attr({
        href: "/account/login?ReturnUrl=" + window.location.pathname
    }),
        $("#unlimited-license .request-pricing").length > 0 && loggeduserFlatBanner(),
        window.location.href.indexOf("#") != -1 && history.pushState && window.location.href.toLowerCase().indexOf("c#") == -1 && (window.location.href.toLowerCase().indexOf("f#") == -1 || window.location.href.toLowerCase().indexOf("pdf#") >= -1)) {
        var n = window.location.protocol + "//" + window.location.host + window.location.pathname.split("#")[0] + (window.location.href.split("?").length > 1 ? "?" + window.location.href.split("?")[1].split("#")[0] : "");
        window.history.pushState({
            path: n
        }, "", n)
    }
    $(".sub-menu-container .essentialstudio-section").on("click", function () {
        var n = $(window).width();
        n < 1260 && (window.location = $(this).find("a")[0].href)
    });
    $(".sub-menu-container .community-link").on("click", function () {
        window.location = $(this).find("a")[0].href
    });
    $(".closepopup").click(function () {
        $(".IE-notifiyPopup").hide()
    });
    $.browser.msie && $.browser.version <= 7 ? ($("#upgradeIE").insertBefore("#menu-wrapper"),
        $(".IE-notifiyPopup").show()) : $(".IE-notifiyPopup").hide();
    $(document).on("click", "#menu-signin .logout-icon", function () {
        $("#logout-section").slideToggle("fast");
        $(window).width() >= 768 && $(window).width() < 1260 && $(".menu-list").css("display") == "block" && $(".menu-list").css("display", "none");
        $("#menu-signin").hasClass("bghover") ? $("#menu-signin").removeClass("bghover") : $("#menu-signin").addClass("bghover")
    });
    $.browser.msie && $.browser.version != "10.0" && $.browser.version != "11.0" && ($(".placeholder").show(),
        $("#Password,#Email").focus(function () {
            $(this).siblings(".placeholder").css("z-index", "-1")
        }),
        $("#Password,#Email").focusout(function () {
            $(this).val() == "" && $(this).siblings(".placeholder").css("z-index", "1")
        }));
    window.innerWidth >= 1024 && window.innerWidth < 1290 ? $("#sub-menu-section .marketing-link").html("Explore") : $("#sub-menu-section .marketing-link").html("Syncfusion Dashboards");
    $(".container").width() <= 950 ? ($("#sub-menu-section .marketing-banner").css("display", "none"),
        $("#sub-menu-section .menu-horizontal").css("width", "unset"),
        $("#sub-menu-section .menu-horizontal").css("float", "right")) : $("#sub-menu-section .marketing-banner").css("display", "block")
});
$(".navbar-toggle").click(function (n) {
    n.stopPropagation();
    setTimeout(function () {
        $(".navbar-toggle").is(":visible") && $(".menu-list").css("display") == "none" ? $(".menu-list").css("display", "block") : $(".menu-list").css("display", "none")
    }, 100)
});
$(".products").click(function () {
    $(window).width() > 1245 && !$(".navbar-toggle").is(":visible") && ($(window).outerWidth() >= 1920 && $(".container").outerWidth() > 1170 ? $(".sub-menu-container").css({
        width: $(window).width() + 200,
        "margin-left": -($(".menu-list").offset().left + 200)
    }) : $(".sub-menu-container").css({
        width: $(window).width(),
        "margin-left": -$(".menu-list").offset().left
    }))
});
$(document).click(function (n) {
    setTimeout(function () {
        var i, r, t;
        ($(window).width() < 1261 || $(".navbar-toggle").is(":visible")) && (i = n.currentTarget,
            r = $(".menu-list"),
            i != r && (t = $(".navbar-toggle").hasClass("collapsed"),
                $(".menu-list").css("display") == "none" == !0 ? t == !1 && $(".navbar-toggle").addClass("collapsed") : t == !0 && $(".navbar-toggle").removeClass("collapsed")))
    }, 100)
});
$(window).resize(function () {
    var n = $(window).width();
    $(window).width() < 1245 && $(".sub-menu-container").css({
        "margin-left": 0
    });
    n >= 1245 ? ($(".menu-list").css("display", "block"),
        $(".products").hasClass("open") == !0 && $(".sub-menu-container").css({
            width: $(window).width(),
            "margin-left": -$(".menu-list").offset().left
        })) : $(window).width() > 767 || $(window).width() < 1245 ? $(".sub-menu-container").css("width", "100%") : $(".sub-menu-container").css("width", "100%");
    MenuIconOffset(n);
    $("#logout-section").slideUp("fast");
    $("#menu-signin").removeClass("bghover");
    window.innerWidth >= 1024 && window.innerWidth < 1290 ? $("#sub-menu-section .marketing-link").html("Explore") : $("#sub-menu-section .marketing-link").html("Syncfusion Dashboards");
    $(".container").width() <= 950 ? ($("#sub-menu-section .marketing-banner").css("display", "none"),
        $("#sub-menu-section .menu-horizontal").css("width", "unset"),
        $("#sub-menu-section .menu-horizontal").css("float", "right")) : $("#sub-menu-section .marketing-banner").css("display", "block")
});
$(".search-icon").on("click", function (n) {
    n.preventDefault();
    $("#bs-example-navbar-collapse-1  .products").hasClass("open") && $("#bs-example-navbar-collapse-1  .products").removeClass("open");
    $("#bs-example-navbar-collapse-1  .support-menu").hasClass("open") && $("#bs-example-navbar-collapse-1  .support-menu").removeClass("open");
    $("#bs-example-navbar-collapse-1  .company-menu").hasClass("open") && $("#bs-example-navbar-collapse-1  .company-menu").removeClass("open");
    !$("#logout-section").is(":visible") || $(n.target).closest("#logout-section .column").length || $(n.target).closest("#menu-signin").length || ($("#logout-section").slideUp("fast"),
        $("#menu-signin").removeClass("bghover"));
    $(window).width() < 768 ? $(".navbar-collapse").hasClass("in") && $(".navbar-collapse").removeClass("in") : $(window).width() >= 768 && $(window).width() < 1260 && $(".menu-list").css("display") == "block" && $(".menu-list").css("display", "none");
    $("#search-container").slideToggle("fast");
    $(this).parent().hasClass("bghover") ? $(this).parent().removeClass("bghover") : ($(this).parent().addClass("bghover"),
        $("#search").focus());
    $("#search-container").css("top", $("#menu-wrapper").height() + $("#menu-wrapper").offset().top)
});
$(".search-btn").click(function () {
    return $("#search").val() == "" ? !1 : !0
});
$("div, html").on("click", function (n) {
    setTimeout(function () {
        if (($(window).width() < 1261 || $(".navbar-toggle").is(":visible")) && n.target.className != "menu-item dropdown-toggle" && n.target.className != "navbar-toggle" && n.target.className != "caret") {
            var t = $(".navbar-toggle").hasClass("collapsed");
            t == !1 && $(".menu-list").css("display", "none")
        }
    }, 100)
});
$(".sub-menu-list").on("click", function () {
    $("#search-container").is(":visible") && ($("#search-container").slideUp("fast"),
        $(".search-bar").removeClass("bghover"));
    $("#logout-section").is(":visible") && ($("#logout-section").slideUp("fast"),
        $("#menu-signin").removeClass("bghover"))
});
$(document).on("click", function (n) {
    !$("#logout-section").is(":visible") || $(n.target).closest("#logout-section .column").length || $(n.target).closest("#menu-signin").length || ($("#logout-section").slideUp("fast"),
        $("#menu-signin").removeClass("bghover"));
    !$("#search-container").is(":visible") || $(n.target).closest("#search-container").length || $(n.target).closest(".search-bar").length || $(n.target).closest("#search_suggestion").length || n.target.id == "search-icon" || ($("#search-container").slideUp("fast"),
        $(".search-bar").removeClass("bghover"))
});
$(window).load(function () {
    var n = $(window).width();
    MenuIconOffset(n)
});
$(".activation-unconfirmed-notification-close").on("click", function () {
    var n = deleteCookie("UserAccountNotActivated = UserType", "", -1);
    $(".unconfirmed-notification").slideUp("slow")
});
$(".unconfirmed-message .resend").on("click", function () {
    $(".unconfirmed-notification").showWaitingPopUp();
    $.ajax({
        type: "POST",
        url: "/account/activationresend",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (n) {
            if ($(".unconfirmed-notification").removeWaitingPopUp(),
                n == !0) {
                var t = deleteCookie("UserAccountNotActivated = UserType", "", -1);
                $(".unconfirmed-notification").slideUp("slow");
                new Toastr;
                toastr.success("An account verification email has been sent to your registered email address.")
            } else
                $(".unconfirmed-notification").addClass("hide"),
                    $(".unconfirmed-error-notification").removeClass("hide")
        }
    })
});
$(".activation-unconfirmed-error-notification-close").on("click", function () {
    var n = deleteCookie("UserAccountNotActivated = UserType", "", -1);
    $(".unconfirmed-error-notification").slideUp("slow")
});
$(".unconfirmed-error-message .resend").on("click", function () {
    $(".unconfirmed-error-notification").showWaitingPopUp();
    $.ajax({
        type: "POST",
        url: "/account/activationresend",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (n) {
            if ($(".unconfirmed-error-notification").removeWaitingPopUp(),
                n == !0) {
                var t = deleteCookie("UserAccountNotActivated = UserType", "", -1);
                $(".unconfirmed-error-notification").slideUp("slow")
            }
        }
    })
});
$(".support-menu").click(function () {
    $(window).width() > 1261 ? $(window).width() - $(".support-menu-container").offset().left > 493 ? $(".support-menu-container").css("width", "493px") : $(".support-menu-container").css("width", $(window).width() - $(".support-menu-container").offset().left) : $(".support-menu-container").css("width", "auto")
}),
    function (n) {
        jQuery.fn.showWaitingPopUp = function (t) {
            var i = n.extend({
                opacityRange: .4,
                loadingImage: "//cdn.syncfusion.com/content/images/Support/images/spinner.gif",
                color: "#F8F8F8",
                center: "false",
                isGridsection: "false"
            }, t), f, e, r, u, o;
            f = i.isGridsection == "false" ? '<div id="_waiting-popup_" style="display: none; height: 100%; position: absolute; top: 0; width: 100%; left: 0"><div style="background-color:' + i.color + "; height: 100%; opacity:" + i.opacityRange + '; width: 100%; filter: alpha(opacity= 0);"> <\/div><img src="' + i.loadingImage + '" alt="loading" style="position: absolute;"/><\/div>' : '<div id="_waiting-popup_" style="display: none; height: 100%; position: absolute; top: 0; width: 100%; left: 0"><div style="background-color:' + i.color + "; height: 100%;opacity:" + i.opacityRange + "; width: 100%; filter: alpha(opacity= " + i.opacityRange * 100 + ');"> <\/div><img src="' + i.loadingImage + '" alt="loading" style="position: absolute;"/><\/div>';
            n(this).append(f);
            n(this).css("position", "relative");
            n(this).find("#_waiting-popup_").css("display", "block");
            e = n(this).outerWidth();
            r = n(this).outerHeight();
            try {
                e != null && r != null && (i.isGridsection == "true" ? u = r < 350 ? r / 2 - n("#_waiting-popup_").find("img").height() / 2 : 200 : i.center == "false" ? (u = r / 2 - n("#_waiting-popup_").find("img").height() / 2,
                    n(this).find("#_waiting-popup_").find("img").css("position", "absolute")) : (u = n(window).height() / 2,
                        n(this).find("#_waiting-popup_").find("img").css("position", "fixed"),
                        n(this).find("#_waiting-popup_").css("z-index", "999")),
                    o = e / 2 - n("#_waiting-popup_").find("img").width() / 2,
                    n(this).find("#_waiting-popup_").find("img").css("top", u).css("left", o))
            } catch (s) { }
        }
            ;
        jQuery.fn.removeWaitingPopUp = function () {
            return n(this).find("#_waiting-popup_").remove(),
                n(this).css("position", ""),
                !0
        }
    }(jQuery);
var userInfo = ""
    , generalData = ""
    , documentCookies = []
    , today = new Date
    , errorCount = 0
    , tempModel = {}
    , downloadLogError = !1;
$(document).ready(function () {
    readCookie()
});
!function (n) {
    n(["jquery"], function (n) {
        return function () {
            function v(n, t, r) {
                return u({
                    type: f.error,
                    iconClass: i().iconClasses.error,
                    message: n,
                    optionsOverride: r,
                    title: t
                })
            }
            function r(r, u) {
                return r || (r = i()),
                    t = n("#" + r.containerId),
                    t.length ? t : (u && (t = nt(r)),
                        t)
            }
            function y(n, t, r) {
                return u({
                    type: f.info,
                    iconClass: i().iconClasses.info,
                    message: n,
                    optionsOverride: r,
                    title: t
                })
            }
            function p(n) {
                o = n
            }
            function w(n, t, r) {
                return u({
                    type: f.success,
                    iconClass: i().iconClasses.success,
                    message: n,
                    optionsOverride: r,
                    title: t
                })
            }
            function b(n, t, r) {
                return u({
                    type: f.warning,
                    iconClass: i().iconClasses.warning,
                    message: n,
                    optionsOverride: r,
                    title: t
                })
            }
            function k(n, u) {
                var f = i();
                t || r(f);
                h(n, f, u) || g(f)
            }
            function d(u) {
                var f = i();
                return t || r(f),
                    u && 0 === n(":focus", u).length ? void e(u) : void (t.children().length && t.remove())
            }
            function g(i) {
                for (var u = t.children(), r = u.length - 1; r >= 0; r--)
                    h(n(u[r]), i)
            }
            function h(t, i, r) {
                var u = !(!r || !r.force) && r.force;
                return !(!t || !u && 0 !== n(":focus", t).length) && (t[i.hideMethod]({
                    duration: i.hideDuration,
                    easing: i.hideEasing,
                    complete: function () {
                        e(t)
                    }
                }),
                    !0)
            }
            function nt(i) {
                return t = n("<div/>").attr("id", i.containerId).addClass(i.positionClass),
                    t.appendTo(n(i.target)),
                    t
            }
            function tt() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;<\/button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                }
            }
            function c(n) {
                o && o(n)
            }
            function u(u) {
                function k(n) {
                    return null == n && (n = ""),
                        n.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }
                function nt() {
                    ut();
                    et();
                    ot();
                    st();
                    ht();
                    ct();
                    ft();
                    tt()
                }
                function tt() {
                    var n = "";
                    switch (u.iconClass) {
                        case "toast-success":
                        case "toast-info":
                            n = "polite";
                            break;
                        default:
                            n = "assertive"
                    }
                    o.attr("aria-live", n)
                }
                function it() {
                    f.closeOnHover && o.hover(vt, at);
                    !f.onclick && f.tapToDismiss && o.click(v);
                    f.closeButton && p && p.click(function (n) {
                        n.stopPropagation ? n.stopPropagation() : void 0 !== n.cancelBubble && n.cancelBubble !== !0 && (n.cancelBubble = !0);
                        f.onCloseClick && f.onCloseClick(n);
                        v(!0)
                    });
                    f.onclick && o.click(function (n) {
                        f.onclick(n);
                        v()
                    })
                }
                function rt() {
                    o.hide();
                    o[f.showMethod]({
                        duration: f.showDuration,
                        easing: f.showEasing,
                        complete: f.onShown
                    });
                    f.timeOut > 0 && (y = setTimeout(v, f.timeOut),
                        h.maxHideTime = parseFloat(f.timeOut),
                        h.hideEta = (new Date).getTime() + h.maxHideTime,
                        f.progressBar && (h.intervalId = setInterval(yt, 10)))
                }
                function ut() {
                    u.iconClass && o.addClass(f.toastClass).addClass(w)
                }
                function ft() {
                    f.newestOnTop ? t.prepend(o) : t.append(o)
                }
                function et() {
                    if (u.title) {
                        var n = u.title;
                        f.escapeHtml && (n = k(u.title));
                        d.append(n).addClass(f.titleClass);
                        o.append(d)
                    }
                }
                function ot() {
                    if (u.message) {
                        var n = u.message;
                        f.escapeHtml && (n = k(u.message));
                        g.append(n).addClass(f.messageClass);
                        o.append(g)
                    }
                }
                function st() {
                    f.closeButton && (p.addClass(f.closeClass).attr("role", "button"),
                        o.prepend(p))
                }
                function ht() {
                    f.progressBar && (b.addClass(f.progressClass),
                        o.prepend(b))
                }
                function ct() {
                    f.rtl && o.addClass("rtl")
                }
                function lt(n, t) {
                    if (n.preventDuplicates) {
                        if (t.message === s)
                            return !0;
                        s = t.message
                    }
                    return !1
                }
                function v(t) {
                    var i = t && f.closeMethod !== !1 ? f.closeMethod : f.hideMethod
                        , r = t && f.closeDuration !== !1 ? f.closeDuration : f.hideDuration
                        , u = t && f.closeEasing !== !1 ? f.closeEasing : f.hideEasing;
                    if (!n(":focus", o).length || t)
                        return clearTimeout(h.intervalId),
                            o[i]({
                                duration: r,
                                easing: u,
                                complete: function () {
                                    e(o);
                                    clearTimeout(y);
                                    f.onHidden && "hidden" !== a.state && f.onHidden();
                                    a.state = "hidden";
                                    a.endTime = new Date;
                                    c(a)
                                }
                            })
                }
                function at() {
                    (f.timeOut > 0 || f.extendedTimeOut > 0) && (y = setTimeout(v, f.extendedTimeOut),
                        h.maxHideTime = parseFloat(f.extendedTimeOut),
                        h.hideEta = (new Date).getTime() + h.maxHideTime)
                }
                function vt() {
                    clearTimeout(y);
                    h.hideEta = 0;
                    o.stop(!0, !0)[f.showMethod]({
                        duration: f.showDuration,
                        easing: f.showEasing
                    })
                }
                function yt() {
                    var n = (h.hideEta - (new Date).getTime()) / h.maxHideTime * 100;
                    b.width(n + "%")
                }
                var f = i()
                    , w = u.iconClass || f.iconClass;
                if ("undefined" != typeof u.optionsOverride && (f = n.extend(f, u.optionsOverride),
                    w = u.optionsOverride.iconClass || w),
                    !lt(f, u)) {
                    l++;
                    t = r(f, !0);
                    var y = null
                        , o = n("<div/>")
                        , d = n("<div/>")
                        , g = n("<div/>")
                        , b = n("<div/>")
                        , p = n(f.closeHtml)
                        , h = {
                            intervalId: null,
                            hideEta: null,
                            maxHideTime: null
                        }
                        , a = {
                            toastId: l,
                            state: "visible",
                            startTime: new Date,
                            options: f,
                            map: u
                        };
                    return nt(),
                        rt(),
                        it(),
                        c(a),
                        f.debug && console && console.log(a),
                        o
                }
            }
            function i() {
                return n.extend({}, tt(), a.options)
            }
            function e(n) {
                t || (t = r());
                n.is(":visible") || (n.remove(),
                    n = null,
                    0 === t.children().length && (t.remove(),
                        s = void 0))
            }
            var t, o, s, l = 0, f = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            }, a = {
                clear: k,
                remove: d,
                error: v,
                getContainer: r,
                info: y,
                options: {},
                subscribe: p,
                success: w,
                version: "2.1.3",
                warning: b
            };
            return a
        }()
    })
}("function" == typeof define && define.amd ? define : function (n, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
}
)

var site = site || {};

function stopLoading(c, d) {
    $(c).val(d.val()).removeClass("loading").removeAttr("style");
}

$(window).on("load", function() {
    var b = $("input[name=phonetype]:checked").val();
    if (b === "Home" || b === "Other") {
        $("#textOptin").hide();
        $("#isAutotextOptin").prop("checked", false);
    }
    $.fn.allchange = function(f) {
        var g = this;
        var h = "";
        var a = function() {
            var c = $(g).val();
            if (c != h) {
                h = c;
                f();
            }
            setTimeout(a, 100);
        };
        setTimeout(a, 100);
    };
    $("#Phone").allchange(function() {
        if ($("#isAutodialOptin, #AutoDialIn").is(":checked")) {
            $("#phoneOptin em").show();
        } else {
            $("#phoneOptin em").hide();
        }
        if ($("#isAutotextOptin").prop("checked")) {
            $("#textOptin em").show();
        } else {
            $("#textOptin em").hide();
        }
    });
});

$(function() {
    $("#isAutodialOptin, #AutoDialIn").on("keyup change", function() {
        if ($(this).is(":checked")) {
            $("#phoneOptin em").show();
        } else {
            $("#phoneOptin em").hide();
        }
    });
    $("#isAutotextOptin").on("keyup change", function() {
        if ($(this).is(":checked")) {
            $("#textOptin em").show();
        } else {
            $("#textOptin em").hide();
        }
    });
    $("input[name=phonetype]").on("keyup change", function() {
        var a = $("input[name=phonetype]:checked").val();
        if (a === "Home" || a === "Other") {
            $("#textOptin").slideUp();
            $("#isAutotextOptin").prop("checked", false);
            $("#textOptin em").hide();
        } else {
            $("#textOptin").slideDown();
        }
    });
    $("input[name=phonetype-shortened]").on("keyup change", function() {
        var a = $("input[name=phonetype-shortened]:checked").val();
        if (a === "Home" || a === "Other") {
            $("#textOptin").slideUp();
            $("#isAutotextOptin").prop("checked", false);
            $("#textOptin em").hide();
        } else {
            $("#textOptin").slideDown();
        }
    });
    $('form#checkname button[type="submit"]').on("click", function() {
        $(".hide-show").text("Show").addClass("show");
        $(".hide-show").parent().find('input[name="password"]').attr("type", "password");
    });



    $("#nutrisystem_password, #password a.hide-show").on("focus", function(a) {
        $("#password-rules").collapse("show");
    });
    if ($("#nutrisystem_password").length) {
        $("input:not(#nutrisystem_password)").on("focus", function(a) {
            $("#password-rules").collapse("hide");
        });
    }
    $("input:not(#nutrisystem_password)").on("focus", function(a) {
        $("#password-rules").collapse("hide");
    });
    $("#password a.show-hide").on("focus", function(a) {
        $("#password-rules").collapse("show");
    });
    $("#password .hide-show").addClass("show-text");
    $("#nutrisystem_password").on("keyup change", function(a) {
        if ($("#password-strength-text").text().indexOf("Valid") > -1) {
            $("<span role='alert' class='sr-only'>Valid password</span>").appendTo(document.body);
            $("#password-rules ul").attr("aria-hidden", "true");
            $("#password-rules, .arrow").delay(1e3).fadeOut("slow");
        } else {
            if ($("#password-strength-text").text().indexOf("Invalid") > -1) {
                $("#password-rules, .arrow").delay(100).fadeIn("fast");
                $("#password-rules ul").attr("aria-hidden", "false");
            }
        }
        if ($(this).val().length) {
            $("#password .hide-show").show();
        } else {
            $("#password .hide-show").hide();
        }
    });
    $("#password a.hide-show").click(function() {
        if ($(this).hasClass("show-text")) {
            $(this).text("Hide");
            $('input[name="password"]').attr("type", "text");
            $(this).removeClass("show-text");
            $(this).addClass("hide-text");
        } else {
            $(this).text("Show");
            $('input[name="password"]').attr("type", "password");
            $(this).addClass("show-text");
            $(this).removeClass("hide-text");
        }
    });












    let $phoneField = $("#Phone");
    if($phoneField.length > 0) {
        site.formatPhoneNumber($phoneField),
        $('#Phone').on('keydown keyup paste drop blur focusout', function () {
            site.formatPhoneNumber($phoneField);
        });
    }
    if($("#checkout-card-number").length > 0) {
        site.updateCardType($("#checkout-card-number"));
    }

    if($("#checkout_card_number").length > 0) {
        site.updateCardType($("#checkout_card_number"));
    }

    $("#show-password").is(":checked") ? $("#nutrisystem_password").attr("type", "text") : $("#nutrisystem_password").attr("type", "password");
    if ($("#Address-2").val() && ($("#Address-2").closest(".form-group.collapse").collapse("show"),
        $(".open-address-line-2").hide()), $("#Phone").on("keyup change", function() {
        $("#optin_sec").slideDown("slow");
    }), $("#Phone").val() && $("#optin_sec").slideDown("slow"), $("#phone_number").on("keyup change", function() {
        $("#optin_sec").slideDown("slow");
    }), $("#phone_number").val() && $("#optin_sec").slideDown("slow"), $("#show-password").on("click", function() {
        $("#show-password").is(":checked") ? $("#nutrisystem_password").attr("type", "text") : $("#nutrisystem_password").attr("type", "password");
    }),
    $("#checkout-card-type").change(function() {
        var a = $("#checkout-card-type").val();
        $("#payment_method_visa").val(a);
    }), passwordStrengthWidget.init(), $("#citybox input").val() && $("#statebox select").val()) {
        var c = $("#shipping_city").val() + ", " + $("#shipping_state").val();
        var options = "<option class='firstaa' value='" + c + "'>" + c + "</option>";
        // LPE-3456 Apply this condition when the brand is JC and user has active AD plan
        options+= (window.Laravel.brandInfo.sitePrefix === "JC" && window.Laravel.activeAD === true) ? "" : "<option class='last' value='other'>Other</option>";
        $("#citybox, #statebox").hide(), $("#cityState").html( options ),
            $("#citystatebox").show(), $("#zipbox .note").hide();
    }
    if ($("#citybox-billing input").val() && $("#statebox-billing select").val()) {
        var d = $("#City-Billing").val() + ", " + $("#State-Billing").val();
       // $("#citybox-billing, #statebox-billing").hide(), $("#cityState-billing").html("<option class='first' value='" + c + "'>" + d + "</option><option class='last' value='other'>Other</option>"),
            $("#citystatebox-billing").show(), $("#zipbox-billing .note").hide();
    }
    !$("#PostalCode").val() && $("#cityState").is(":hidden") && ($("#citybox, #statebox, #countrybox").hide(),
        $("#zipbox .note").show()), !$("#PostalCode-Billing").val() && $("#cityState-billing").is(":hidden") && ($("#citybox-billing, #statebox-billing, #countrybox-billing").hide(),
        $("#City-Billing, #State-Billing").removeAttr("required"), $("#zipbox-billing .note").show()),
        $("#cityState").change(function() {
            "other" === $("#cityState").val() ? ($("#citystatebox").hide(), $("#citybox, #statebox").slideDown(),
                $("#shipping_city, #shipping_state").val("")) : $("#citybox, #statebox").hide();
        }), $("#cityState-billing").change(function() {
        "other" === $("#cityState-billing").val() ? ($("#citystatebox-billing").hide(),
            $("#citybox-billing, #statebox-billing").slideDown(), $("#City-Billing, #State-Billing").val("")) : $("#citybox-billing, #statebox-billing").hide();
    });
    if (window.location.pathname !== "/checkout/shipping.jsp") {
        $("#PostalCode").on("keyup change", function() {
            var h = /^[a-zA-Z]+$/, a = $(this), b = $("#zipbox"), e = "";
            0 === a.val().length && ($("#zipbox .note").slideDown(), $("#citybox, #statebox, #citystatebox, #countrybox").hide()),
                "" == a.val() || a.val()[0].match(h) ? "" != a.val() && a.val()[0].match(h) && (a.val().length >= 3 ? $.ajax({
                    url: "https://api.zippopotam.us/ca/" + a.val(),
                    cache: !1,
                    dataType: "json",
                    type: "GET",
                    success: function(f, j) {
                        e = f.places[0], $("#shipping_city").val(e["place name"]), $("#shipping_state").val(e["state abbreviation"]),
                            $("#Country").val("CA");
                        var g = e["place name"] + "," + e["state abbreviation"];
                        b.addClass("success").removeClass("error"), $("#cityState").html("<option class='first' value='" + g + "'>" + g + "</option><option class='last' value='other'>Other</option>"),
                            $("#citystatebox, #countrybox").slideDown(), $("#citybox, #statebox").hide(), $("#zipbox .note").hide();
                    },
                    error: function(f, g) {
                        $("#zipbox .note").hide(), $("#citystatebox").hide(), $("#citybox, #statebox,#countrybox").slideDown();
                    }
                }) : $("#zipbox .note, #cityState").hide()) : 5 === a.val().length && $.ajax({
                    url: "https://api.zippopotam.us/us/" + a.val(),
                    cache: !1,
                    dataType: "json",
                    type: "GET",
                    success: function(f, j) {
                        e = f.places[0], $("#shipping_city").val(e["place name"]), $("#shipping_state").val(e["state abbreviation"]),
                            $("#Country").val("US");
                        var g = e["place name"] + ", " + e["state abbreviation"];
                        b.addClass("success").removeClass("error"), $("#cityState").html("<option class='first' value='" + g + "'>" + g + "</option><option class='last' value='other'>Other</option>"),
                            $("#cityState").show(), $("#citystatebox, #countrybox").slideDown(), $("#citybox, #statebox").hide(),
                            $("#zipbox .note").hide();
                    },
                    error: function(f, g) {
                        $("#zipbox .note").hide(), $("#citystatebox").hide(), $("#citybox, #statebox, #countrybox").slideDown();
                    }
                });
        }), $("#PostalCode-Billing").on("keyup change", function() {
            var h = /^[a-zA-Z]+$/, a = $(this), b = $("#zipbox-billing"), e = "";
            0 === a.val().length && ($("#zipbox-billing .note").slideDown(), $("#citybox-billing, #statebox-billing, #citystatebox-billing, #countrybox-billing").hide()),
                "" == a.val() || a.val()[0].match(h) ? "" != a.val() && a.val()[0].match(h) && (a.val().length >= 3 ? $.ajax({
                    url: "https://api.zippopotam.us/ca/" + a.val(),
                    cache: !1,
                    dataType: "json",
                    type: "GET",
                    success: function(f, j) {
                        e = f.places[0], $("#City-Billing").val(e["place name"])[0].dispatchEvent(new Event('input')), $("#State-Billing").val(e["state abbreviation"])[0].dispatchEvent(new Event('change')),
                            $("#Country-Billing").val("CA");
                        var g = e["place name"] + "," + e["state abbreviation"];
                        b.addClass("success").removeClass("error"), $("#cityState-Billing").html("<option class='first' value='" + g + "'>" + g + "</option><option class='last' value='other'>Other</option>"),
                            $("#citystatebox-billing, #countrybox-billing").slideDown(), $("#citybox-billing, #statebox-billing").hide(),
                            $("#zipbox-billing .note").hide();
                    },
                    error: function(f, g) {
                        $("#citystatebox").hide(), $("#zipbox-billing .note, #cityState-billing").hide(),
                            $("#citybox-billing, #statebox-billing, #countrybox-billing").slideDown();
                    }
                }) : $("#zipbox-billing .note, #cityState-billing").hide()) : 5 === a.val().length && $.ajax({
                    url: "https://api.zippopotam.us/us/" + a.val(),
                    cache: !1,
                    dataType: "json",
                    type: "GET",
                    success: function(f, j) {
                        e = f.places[0], $("#City-Billing").val(e["place name"])[0].dispatchEvent(new Event('input')), $("#State-Billing").val(e["state abbreviation"])[0].dispatchEvent(new Event('change')),
                            $("#Country-Billing").val("US");
                        var g = e["place name"] + ", " + e["state abbreviation"];
                        b.addClass("success").removeClass("error"), $("#cityState-billing").html("<option class='first' value='" + g + "'>" + g + "</option><option class='last' value='other'>Other</option>"),
                            $("#cityState-billing").show(), $("#citystatebox-billing, #countrybox-billing").slideDown(),
                            $("#citybox-billing, #statebox-billing").show(), $("#zipbox-billing .note").show();
                    },
                    error: function(f, g) {
                        $("#zipbox-billing .note, #cityState-billing").hide(), $("#citybox-billing, #statebox-billing, #countrybox-billing").slideDown();
                    }
                });
        });
    }
});

site.formatPhoneNumber = function($phoneField) {
    var phoneNumber = $phoneField.val();
    const x = phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    phoneNumber = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
    $phoneField.val(phoneNumber);
}

site.updateCardType = function ($cardNumberField){
    $cardNumberField.creditCardTypeDetector({
        credit_card_logos: ".card_logos"
    });
    $cardNumberField.removeAttr("pattern"), $cardNumberField.payment("formatCardNumber");
    $cardNumberField.on("keyup change", function () {
        $(".card_logos").hasClass("is_visa") ? ($("#checkout-card-type").val("visa"), $(" #checkout-card-cvv").length && ($("#checkout-card-cvv").attr("maxlength", "3"),
            $("#cvv-tooltip-link").attr("href", "#cvv-tooltip"), $(".cvv-popover").css("display", "inline-block"),
            $(".cvv-amex-popover").hide())) : $(".card_logos").hasClass("is_amex") ? ($("#checkout-card-type").val("americanExpress"),
        $(" #checkout-card-cvv").length && ($("#checkout-card-cvv").attr("maxlength", "4"),
            $("#cvv-tooltip-link").attr("href", "#cvv-amex-tooltip"), $(".cvv-popover").hide(),
            $(".cvv-amex-popover").css("display", "inline-block"))) : $(".card_logos").hasClass("is_mastercard") ? ($("#checkout-card-type").val("masterCard"),
        $(" #checkout-card-cvv").length && ($("#checkout-card-cvv").attr("maxlength", "3"),
            $("#cvv-tooltip-link").attr("href", "#cvv-tooltip"), $(".cvv-popover").css("display", "inline-block"),
            $(".cvv-amex-popover").hide())) : $(".card_logos").hasClass("is_diners") ? ($("#checkout-card-type").val("dinersClub"),
        $(" #checkout-card-cvv").length && ($("#checkout-card-cvv").attr("maxlength", "3"),
            $("#cvv-tooltip-link").attr("href", "#cvv-tooltip"), $(".cvv-popover").css("display", "inline-block"),
            $(".cvv-amex-popover").hide())) : $(".card_logos").hasClass("is_discover") ? ($("#checkout-card-type").val("discover"),
        $(" #checkout-card-cvv").length && ($("#checkout-card-cvv").attr("maxlength", "3"),
            $("#cvv-tooltip-link").attr("href", "#cvv-tooltip"), $(".cvv-popover").css("display", "inline-block"),
            $(".cvv-amex-popover").hide())) : $(".card_logos").hasClass("is_nothing") && $("#checkout-card-type").val();
    });
}
var multiAdForm = function() {
    var c, d;
    return {
        init: function(a) {
            c = document.querySelector(a);
        },
        bindOnSubmit: function() {
            c && $(c).length > 0 && $(c).find(".modal.fade").length > 0 && c.addEventListener("submit", function(a) {
                $(c)[0].checkValidity() || a.preventDefault(), (d = $(c).find(".modal.fade")).is(":visible") || (d.modal("show"),
                    a.preventDefault());
            });
        }
    };
}(), passwordStrengthWidget = {
    percent: 0,
    cachedDom: {
        pswdInput: null,
        pswdInputFormGroup: null,
        pswdHasServerError: null,
        meter: null,
        text: null,
        letter: null,
        length: null,
        number: null,
        nospaceslash: null,
        show_password: null
    },
    fillCachedDom: function() {
        this.cachedDom.pswdInput = $("input[type=password].password-strength"), this.cachedDom.pswdInputFormGroup = $("input[type=password].password-strength").closest(".form-group"),
            this.cachedDom.pswdHasServerError = $("input[type=password].password-strength").closest(".form-group").has(".input-error-msg"),
            this.cachedDom.meter = $("#meterDiv"), 
            this.cachedDom.text = $("#password-strength-text"),
            this.cachedDom.letter = $("#letter"), 
            this.cachedDom.length = $("#length"), 
            this.cachedDom.number = $("#number"),
            this.cachedDom.nospaceslash = $("#nospaceslash"), 
            this.cachedDom.show_password = $("#show_password");
    },
    updateStatus: function(c, d) {
        return d ? c.removeClass("invalid").addClass("valid").attr("aria-hidden", "true") : c.removeClass("valid").addClass("invalid").attr("aria-hidden", "false");
    },
    calculatePercentageForPassedCriteria: function(c, d) {
        return 0 === d ? 5 : d / c * 100;
    },
    formErrorStatus: function(b) {
        100 === this.percent || b ? 0 === this.cachedDom.pswdHasServerError.length && this.cachedDom.pswdInputFormGroup.removeClass("has-error") : this.cachedDom.pswdInputFormGroup.addClass("has-error");
    },
    renderWidget: function() {
        this.cachedDom.text.html("Invalid").addClass("text-gray-darker").removeClass("text-white"),
            this.cachedDom.pswdInput.removeClass("valid"), this.cachedDom.meter.removeClass().addClass("bg-danger"),
        100 === this.percent && (this.cachedDom.text.html("Valid").addClass("text-white").removeClass("text-gray-darker"),
            this.cachedDom.meter.removeClass().addClass("bg-primary"),
             $(".password-strength").css("border-color", "#006B00"),
            this.cachedDom.pswdInput.addClass("valid").closest(".form-group").removeClass("has-error"),
            this.cachedDom.pswdInput.siblings(".alert-danger").remove());
    },
    init: function() {
        var b = this;
        b.fillCachedDom(), b.cachedDom.pswdInput.on("keyup keydown change", function() {
            b.cachedDom.length.removeClass("initial"), b.cachedDom.letter.removeClass("initial"),
                b.cachedDom.number.removeClass("initial"), this.value.length > 0 && 0 === b.cachedDom.pswdHasServerError.length && b.cachedDom.pswdInputFormGroup.removeClass("has-error");
            var i, l, t, c, r, a, h = $(this).val(), s = [], n = 0, o = [];
            for (i = h.length >= 6, s.push(i), o.push(b.cachedDom.length), l = !!h.match(/[A-z]/),
                     s.push(l), o.push(b.cachedDom.letter), t = !!h.match(/\d/), s.push(t), o.push(b.cachedDom.number),
                     c = !h.match(/[ \/"]/), s.push(c), o.push(b.cachedDom.nospaceslash), a = s.length,
                     r = 0; r < a; r += 1) {
                s[r] && (n += 1), b.updateStatus(o[r], s[r]);
            }
            b.percent = b.calculatePercentageForPassedCriteria(s.length, n), b.cachedDom.meter.width(b.percent + "%"),
                b.renderWidget();
        }).blur(function() {
            b.formErrorStatus(!1);
        }), this.cachedDom.show_password.focus(function() {
            b.formErrorStatus(!0);
        }).blur(function() {
            b.formErrorStatus(!1);
        });
    }
};

function getParameterByName(e) {
    var f = window.location.href;
    e = e.replace(/[\[\]]/g, "\\$&");
    var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(f);
    return a ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null;
}

$.fn.hideMe = function() {
    var c = $.extend({
        hideMeWhenIts: "0.00"
    }), d = new RegExp(c.hideMeWhenIts, "i");
    this && this.length > 0 && this.text().match(d) && this.hide();
}, $.fn.validateAge = function(c) {
    var d = $.extend({
        age_limit: 15,
        invalid_date_msg: "Please enter a valid birthdate.",
        under_age_msg: "You need to be at least 15 years old."
    }, c);
    return this.on("focusout keydown", function(e) {
        var b, n, l, a, p, o, i = (b = e.target.value, n = new Date(), l = new Date(b),
            a = n.getFullYear() - l.getFullYear(), ((p = n.getMonth() - l.getMonth()) < 0 || 0 === p && n.getDate() < l.getDate()) && (a -= 1),
            isNaN(a) ? -1 : a);
        (e.target.setCustomValidity(""), -1 !== i && (o = e.target.value, /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(o))) ? i < d.age_limit && e.target.setCustomValidity(d.under_age_msg) : e.target.setCustomValidity(d.invalid_date_msg);
    });
}, function(b) {
    "function" == typeof define && define.amd ? define([ "jquery" ], b) : b("object" == typeof exports ? require("jquery") : jQuery);
}(function(i) {
    var k, l = navigator.userAgent, e = /iphone/i.test(l), j = /chrome/i.test(l), a = /android/i.test(l);
    i.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, i.fn.extend({
        caret: function(b, c) {
            var d;
            if (0 !== this.length && !this.is(":hidden")) {
                return "number" == typeof b ? (c = "number" == typeof c ? c : b, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(b, c) : this.createTextRange && ((d = this.createTextRange()).collapse(!0),
                        d.moveEnd("character", c), d.moveStart("character", b), d.select());
                })) : (this[0].setSelectionRange ? (b = this[0].selectionStart, c = this[0].selectionEnd) : document.selection && document.selection.createRange && (d = document.selection.createRange(),
                    b = 0 - d.duplicate().moveStart("character", -1e5), c = b + d.text.length), {
                    begin: b,
                    end: c
                });
            }
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(f, s) {
            var b, p, g, o, h, c, t;
            if (!f && this.length > 0) {
                var d = i(this[0]).data(i.mask.dataName);
                return d ? d() : void 0;
            }
            return s = i.extend({
                autoclear: i.mask.autoclear,
                placeholder: i.mask.placeholder,
                completed: null
            }, s), b = i.mask.definitions, p = [], g = c = f.length, o = null, i.each(f.split(""), function(m, n) {
                "?" == n ? (c--, g = m) : b[n] ? (p.push(new RegExp(b[n])), null === o && (o = p.length - 1),
                g > m && (h = p.length - 1)) : p.push(null);
            }), this.trigger("unmask").each(function() {
                function q() {
                    if (s.completed) {
                        for (var u = o; h >= u; u++) {
                            if (p[u] && w[u] === G(u)) {
                                return;
                            }
                        }
                        s.completed.call(n);
                    }
                }
                function G(u) {
                    return s.placeholder.charAt(u < s.placeholder.length ? u : 0);
                }
                function H(u) {
                    for (;++u < c && !p[u]; ) {}
                    return u;
                }
                function v(A, z) {
                    var B, u;
                    if (!(0 > A)) {
                        for (B = A, u = H(z); c > B; B++) {
                            if (p[B]) {
                                if (!(c > u && p[B].test(w[u]))) {
                                    break;
                                }
                                w[B] = w[u], w[u] = G(u), u = H(u);
                            }
                        }
                        x(), n.caret(Math.max(o, A));
                    }
                }
                function K() {
                    C(), n.val() != r && n.change();
                }
                function m(u, z) {
                    var A;
                    for (A = u; z > A && c > A; A++) {
                        p[A] && (w[A] = G(A));
                    }
                }
                function x() {
                    n.val(w.join(""));
                }
                function C(u) {
                    var A, B, D, z = n.val(), E = -1;
                    for (A = 0, D = 0; c > A; A++) {
                        if (p[A]) {
                            for (w[A] = G(A); D++ < z.length; ) {
                                if (B = z.charAt(D - 1), p[A].test(B)) {
                                    w[A] = B, E = A;
                                    break;
                                }
                            }
                            if (D > z.length) {
                                m(A + 1, c);
                                break;
                            }
                        } else {
                            w[A] === z.charAt(D) && D++, g > A && (E = A);
                        }
                    }
                    return u ? x() : g > E + 1 ? s.autoclear || w.join("") === y ? (n.val() && n.val(""),
                        m(0, c)) : x() : (x(), n.val(n.val().substring(0, E + 1))), g ? A : o;
                }
                var n = i(this), w = i.map(f.split(""), function(u, z) {
                    return "?" != u ? b[u] ? G(z) : u : void 0;
                }), y = w.join(""), r = n.val();
                n.data(i.mask.dataName, function() {
                    return i.map(w, function(u, z) {
                        return p[z] && u != G(z) ? u : null;
                    }).join("");
                }), n.one("unmask", function() {
                    n.off(".mask").removeData(i.mask.dataName);
                }).on("focus.mask", function() {
                    var u;
                    n.prop("readonly") || (clearTimeout(k), r = n.val(), u = C(), k = setTimeout(function() {
                        x(), u == f.replace("?", "").length ? n.caret(0, u) : n.caret(u);
                    }, 10));
                }).on("blur.mask", K).on("keydown.mask", function(D) {
                    if (!n.prop("readonly")) {
                        var A, B, z, u = D.which || D.keyCode;
                        t = n.val(), 8 === u || 46 === u || e && 127 === u ? (B = (A = n.caret()).begin,
                        (z = A.end) - B == 0 && (B = 46 !== u ? function(E) {
                            for (;--E >= 0 && !p[E]; ) {}
                            return E;
                        }(B) : z = H(B - 1), z = 46 === u ? H(z) : z), m(B, z), v(B, z - 1), D.preventDefault()) : 13 === u ? K.call(this, D) : 27 === u && (n.val(r),
                            n.caret(0, C()), D.preventDefault());
                    }
                }).on("keypress.mask", function(E) {
                    if (!n.prop("readonly")) {
                        var B, D, z, u = E.which || E.keyCode, A = n.caret();
                        E.ctrlKey || E.altKey || E.metaKey || 32 > u || !u || 13 === u || (A.end - A.begin != 0 && (m(A.begin, A.end),
                            v(A.begin, A.end - 1)), B = H(A.begin - 1), c > B && (D = String.fromCharCode(u),
                            p[B].test(D)) && (function(O) {
                            var I, J, N, F;
                            for (I = O, J = G(O); c > I; I++) {
                                if (p[I]) {
                                    if (N = H(I), F = w[I], w[I] = J, !(c > N && p[N].test(F))) {
                                        break;
                                    }
                                    J = F;
                                }
                            }
                        }(B), w[B] = D, x(), z = H(B), a ? setTimeout(function() {
                            i.proxy(i.fn.caret, n, z)();
                        }, 0) : n.caret(z), A.begin <= h && q()), E.preventDefault());
                    }
                }).on("input.mask paste.mask", function() {
                    n.prop("readonly") || setTimeout(function() {
                        var u = C(!0);
                        n.caret(u), q();
                    }, 0);
                }), j && a && n.off("input.mask").on("input.mask", function() {
                    var u = n.val(), z = n.caret();
                    if (u.length < t.length) {
                        for (C(!0); z.begin > 0 && !p[z.begin - 1]; ) {
                            z.begin--;
                        }
                        if (0 === z.begin) {
                            for (;z.begin < o && !p[z.begin]; ) {
                                z.begin++;
                            }
                        }
                        n.caret(z.begin, z.begin);
                    } else {
                        for (C(!0); z.begin < c && !p[z.begin]; ) {
                            z.begin++;
                        }
                        n.caret(z.begin, z.begin);
                    }
                    q();
                }), C();
            });
        }
    });
}), function(c) {
    var d = [ "americanExpress", "discover", "dinersClub", "masterCard", "visa" ];
    c.fn.creditCardTypeDetector = function(h) {
        var q = c.extend({
            credit_card_logos_id: ".card_logos"
        }, h), a = c(q.credit_card_logos_id), n = new RegExp("^4[0-9]{0,15}$"), r = new RegExp("^5$|^5[1-5][0-9]{0,14}$"), b = new RegExp("^3$|^3[47][0-9]{0,13}$"), o = new RegExp("^3$|^3[068]$|^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$"), i = new RegExp("^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$"), l = new RegExp("^2[1]?$|^21[3]?$|^1[8]?$|^18[0]?$|^(?:2131|1800)[0-9]{0,11}$|^3[5]?$|^35[0-9]{0,14}$");
        return this.each(function() {
            c(this).on("keyup change", function() {
                var e = c(this).val();
                (e = e.replace(/ /g, "").replace(/-/g, "")).match(n) ? (c(a).addClass("is_visa"),
                    c("#payment_method_visa").val(d[4])) : c(a).removeClass("is_visa"), e.match(r) ? (c(a).addClass("is_mastercard"),
                    c("#payment_method_visa").val(d[3])) : c(a).removeClass("is_mastercard"), e.match(b) ? (c(a).addClass("is_amex"),
                    c("#payment_method_visa").val(d[0])) : c(a).removeClass("is_amex"), e.match(o) ? (c(a).addClass("is_diners"),
                    c("#payment_method_visa").val(d[2])) : c(a).removeClass("is_diners"), e.match(i) ? (c(a).addClass("is_discover"),
                    c("#payment_method_visa").val(d[1])) : c(a).removeClass("is_discover"), e.match(l) ? c(a).addClass("is_jcb") : c(a).removeClass("is_jcb"),
                    "" == e || e.match(n) || e.match(r) || e.match(b) || e.match(o) || e.match(i) || e.match(l) ? c(a).removeClass("is_nothing") : c(a).addClass("is_nothing");
            }), c(this).ready(function() {
                var e = jQuery("#checkout_card_number").val();
                if(e) {
                    (e = e.replace(/ /g, "").replace(/-/g, "")).match(n) ? (c(a).addClass("is_visa"),
                        c("#payment_method_visa").val(d[4])) : c(a).removeClass("is_visa"), e.match(r) ? (c(a).addClass("is_mastercard"),
                        c("#payment_method_visa").val(d[3])) : c(a).removeClass("is_mastercard"), e.match(b) ? (c(a).addClass("is_amex"),
                        c("#payment_method_visa").val(d[0])) : c(a).removeClass("is_amex"), e.match(o) ? (c(a).addClass("is_diners"),
                        c("#payment_method_visa").val(d[2])) : c(a).removeClass("is_diners"), e.match(i) ? (c(a).addClass("is_discover"),
                        c("#payment_method_visa").val(d[1])) : c(a).removeClass("is_discover"), e.match(l) ? c(a).addClass("is_jcb") : c(a).removeClass("is_jcb"),
                        "" == e || e.match(n) || e.match(r) || e.match(b) || e.match(o) || e.match(i) || e.match(l) ? c(a).removeClass("is_nothing") : c(a).addClass("is_nothing");
                }
                });
        });
    };
}(jQuery), function() {
    var f, C, b, r, v, k, s, x, m, d, i, e, Y, u, t, n, h, g, Z, p, c, o, w, y, a = [].slice, l = [].indexOf || function(j) {
        for (var z = 0, q = this.length; q > z; z++) {
            if (z in this && this[z] === j) {
                return z;
            }
        }
        return -1;
    };
    (f = window.jQuery || window.Zepto || window.$).payment = {}, f.payment.fn = {},
        f.fn.payment = function() {
            var j, q;
            return q = arguments[0], j = 2 <= arguments.length ? a.call(arguments, 1) : [],
                f.payment.fn[q].apply(this, j);
        }, v = /(\d{1,4})/g, f.payment.cards = r = [ {
        type: "maestro",
        patterns: [ 5018, 502, 503, 506, 56, 58, 639, 6220, 67 ],
        format: v,
        length: [ 12, 13, 14, 15, 16, 17, 18, 19 ],
        cvcLength: [ 3 ],
        luhn: !0
    }, {
        type: "forbrugsforeningen",
        patterns: [ 600 ],
        format: v,
        length: [ 16 ],
        cvcLength: [ 3 ],
        luhn: !0
    }, {
        type: "dankort",
        patterns: [ 5019 ],
        format: v,
        length: [ 16 ],
        cvcLength: [ 3 ],
        luhn: !0
    }, {
        type: "visa",
        patterns: [ 4 ],
        format: v,
        length: [ 13, 16 ],
        cvcLength: [ 3 ],
        luhn: !0
    }, {
        type: "mastercard",
        patterns: [ 51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27 ],
        format: v,
        length: [ 16 ],
        cvcLength: [ 3 ],
        luhn: !0
    }, {
        type: "amex",
        patterns: [ 34, 37 ],
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [ 15 ],
        cvcLength: [ 3, 4 ],
        luhn: !0
    }, {
        type: "dinersclub",
        patterns: [ 30, 36, 38, 39 ],
        format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
        length: [ 14 ],
        cvcLength: [ 3 ],
        luhn: !0
    }, {
        type: "discover",
        patterns: [ 60, 64, 65, 622 ],
        format: v,
        length: [ 16 ],
        cvcLength: [ 3 ],
        luhn: !0
    }, {
        type: "unionpay",
        patterns: [ 62, 88 ],
        format: v,
        length: [ 16, 17, 18, 19 ],
        cvcLength: [ 3 ],
        luhn: !1
    }, {
        type: "jcb",
        patterns: [ 35 ],
        format: v,
        length: [ 16 ],
        cvcLength: [ 3 ],
        luhn: !0
    } ], C = function(A) {
        var B, F, q, D, E, z, j;
        for (A = (A + "").replace(/\D/g, ""), q = 0, E = r.length; E > q; q++) {
            for (D = 0, z = (j = (B = r[q]).patterns).length; z > D; D++) {
                if (F = j[D] + "", A.substr(0, F.length) === F) {
                    return B;
                }
            }
        }
    }, b = function(A) {
        var q, j, z;
        for (j = 0, z = r.length; z > j; j++) {
            if ((q = r[j]).type === A) {
                return q;
            }
        }
    }, Y = function(q) {
        var B, j, D, z, E, A;
        for (D = !0, z = 0, E = 0, A = (j = (q + "").split("").reverse()).length; A > E; E++) {
            B = j[E], B = parseInt(B, 10), (D = !D) && (B *= 2), B > 9 && (B -= 9), z += B;
        }
        return z % 10 == 0;
    }, e = function(q) {
        var j;
        return null != q.prop("selectionStart") && q.prop("selectionStart") !== q.prop("selectionEnd") || !(null == ("undefined" != typeof document && null !== document && null != (j = document.selection) ? j.createRange : void 0) || !document.selection.createRange().text);
    }, w = function(q, B) {
        var j, D, z, E, A;
        try {
            D = B.prop("selectionStart");
        } catch (q) {
            q, D = null;
        }
        return E = B.val(), B.val(q), null !== D && B.is(":focus") ? (D === E.length && (D = q.length),
        E !== q && (A = E.slice(D - 1, +D + 1 || 9e9), j = q.slice(D - 1, +D + 1 || 9e9),
            z = q[D], /\d/.test(z) && A === z + " " && j === " " + z && (D += 1)), B.prop("selectionStart", D),
            B.prop("selectionEnd", D)) : void 0;
    }, g = function(D) {
        var F, A, j, z, E, q, B, G;
        for (null == D && (D = ""), j = "0123456789", z = "0123456789", q = "", B = 0, G = (F = D.split("")).length; G > B; B++) {
            A = F[B], (E = j.indexOf(A)) > -1 && (A = z[E]), q += A;
        }
        return q;
    }, h = function(j) {
        var q;
        return q = f(j.currentTarget), setTimeout(function() {
            var z;
            return z = q.val(), z = (z = g(z)).replace(/\D/g, ""), w(z, q);
        });
    }, t = function(j) {
        var q;
        return q = f(j.currentTarget), setTimeout(function() {
            var z;
            return z = q.val(), z = g(z), z = f.payment.formatCardNumber(z), w(z, q);
        });
    }, x = function(F) {
        var D, z, E, q, B, j, A;
        return E = String.fromCharCode(F.which), !/^\d+$/.test(E) || (D = f(F.currentTarget),
            A = D.val(), z = C(A + E), q = (A.replace(/\D/g, "") + E).length, j = 16, z && (j = z.length[z.length.length - 1]),
        q >= j || null != D.prop("selectionStart") && D.prop("selectionStart") !== A.length) ? void 0 : (B = z && "amex" === z.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/).test(A) ? (F.preventDefault(),
            setTimeout(function() {
                return D.val(A + " " + E);
            })) : B.test(A + E) ? (F.preventDefault(), setTimeout(function() {
            return D.val(A + E + " ");
        })) : void 0;
    }, k = function(z) {
        var q, j;
        return q = f(z.currentTarget), j = q.val(), 8 !== z.which || null != q.prop("selectionStart") && q.prop("selectionStart") !== j.length ? void 0 : /\d\s$/.test(j) ? (z.preventDefault(),
            setTimeout(function() {
                return q.val(j.replace(/\d\s$/, ""));
            })) : /\s\d?$/.test(j) ? (z.preventDefault(), setTimeout(function() {
            return q.val(j.replace(/\d$/, ""));
        })) : void 0;
    }, n = function(j) {
        var q;
        return q = f(j.currentTarget), setTimeout(function() {
            var z;
            return z = q.val(), z = g(z), z = f.payment.formatExpiry(z), w(z, q);
        });
    }, m = function(q) {
        var j, A, z;
        return A = String.fromCharCode(q.which), /^\d+$/.test(A) ? (j = f(q.currentTarget),
            z = j.val() + A, /^\d$/.test(z) && "0" !== z && "1" !== z ? (q.preventDefault(),
            setTimeout(function() {
                return j.val("0" + z + " / ");
            })) : /^\d\d$/.test(z) ? (q.preventDefault(), setTimeout(function() {
            var D, B;
            return D = parseInt(z[0], 10), (B = parseInt(z[1], 10)) > 2 && 0 !== D ? j.val("0" + D + " / " + B) : j.val(z + " / ");
        })) : void 0) : void 0;
    }, d = function(q) {
        var j, A, z;
        return A = String.fromCharCode(q.which), /^\d+$/.test(A) ? (z = (j = f(q.currentTarget)).val(),
            /^\d\d$/.test(z) ? j.val(z + " / ") : void 0) : void 0;
    }, i = function(q) {
        var j, A, z;
        return "/" === (z = String.fromCharCode(q.which)) || " " === z ? (A = (j = f(q.currentTarget)).val(),
            /^\d$/.test(A) && "0" !== A ? j.val("0" + A + " / ") : void 0) : void 0;
    }, s = function(z) {
        var q, j;
        return q = f(z.currentTarget), j = q.val(), 8 !== z.which || null != q.prop("selectionStart") && q.prop("selectionStart") !== j.length ? void 0 : /\d\s\/\s$/.test(j) ? (z.preventDefault(),
            setTimeout(function() {
                return q.val(j.replace(/\d\s\/\s$/, ""));
            })) : void 0;
    }, u = function(j) {
        var q;
        return q = f(j.currentTarget), setTimeout(function() {
            var z;
            return z = q.val(), z = (z = g(z)).replace(/\D/g, "").slice(0, 4), w(z, q);
        });
    }, o = function(q) {
        var j;
        return !(!q.metaKey && !q.ctrlKey) || 32 !== q.which && (0 === q.which || (q.which < 33 || (j = String.fromCharCode(q.which),
            !!/[\d\s]/.test(j))));
    }, p = function(j) {
        var B, q, z, A;
        return B = f(j.currentTarget), z = String.fromCharCode(j.which), /^\d+$/.test(z) && !e(B) ? (A = (B.val() + z).replace(/\D/g, ""),
            (q = C(A)) ? A.length <= q.length[q.length.length - 1] : A.length <= 16) : void 0;
    }, c = function(z) {
        var q, j;
        return q = f(z.currentTarget), j = String.fromCharCode(z.which), /^\d+$/.test(j) && !e(q) ? !((q.val() + j).replace(/\D/g, "").length > 6) && void 0 : void 0;
    }, Z = function(z) {
        var q, j;
        return q = f(z.currentTarget), j = String.fromCharCode(z.which), /^\d+$/.test(j) && !e(q) ? (q.val() + j).length <= 4 : void 0;
    }, y = function(z) {
        var j, A, B, D, q;
        return q = (j = f(z.currentTarget)).val(), D = f.payment.cardType(q) || "unknown",
            j.hasClass(D) ? void 0 : (A = function() {
                var E, F, G;
                for (G = [], E = 0, F = r.length; F > E; E++) {
                    B = r[E], G.push(B.type);
                }
                return G;
            }(), j.removeClass("unknown"), j.removeClass(A.join(" ")), j.addClass(D), j.toggleClass("identified", "unknown" !== D),
                j.trigger("payment.cardType", D));
    }, f.payment.fn.formatCardCVC = function() {
        return this.on("keypress", o), this.on("keypress", Z), this.on("paste", u), this.on("change", u),
            this.on("input", u), this;
    }, f.payment.fn.formatCardExpiry = function() {
        return this.on("keypress", o), this.on("keypress", c), this.on("keypress", m), this.on("keypress", i),
            this.on("keypress", d), this.on("keydown", s), this.on("change", n), this.on("input", n),
            this;
    }, f.payment.fn.formatCardNumber = function() {
        return this.on("keypress", o), this.on("keypress", p), this.on("keypress", x), this.on("keydown", k),
            this.on("keyup", y), this.on("paste", t), this.on("change", t), this.on("input", t),
            this.on("input", y), this;
    }, f.payment.fn.restrictNumeric = function() {
        return this.on("keypress", o), this.on("paste", h), this.on("change", h), this.on("input", h),
            this;
    }, f.payment.fn.cardExpiryVal = function() {
        return f.payment.cardExpiryVal(f(this).val());
    }, f.payment.cardExpiryVal = function(z) {
        var q, j, A;
        return q = (A = z.split(/[\s\/]+/, 2))[0], 2 === (null != (j = A[1]) ? j.length : void 0) && /^\d+$/.test(j) && (j = new Date().getFullYear().toString().slice(0, 2) + j),
            {
                month: q = parseInt(q, 10),
                year: j = parseInt(j, 10)
            };
    }, f.payment.validateCardNumber = function(z) {
        var q, j;
        return z = (z + "").replace(/\s+|-/g, ""), !!/^\d+$/.test(z) && (!!(q = C(z)) && (j = z.length,
        l.call(q.length, j) >= 0 && (!1 === q.luhn || Y(z))));
    }, f.payment.validateCardExpiry = function(q, j) {
        var B, A, z;
        return "object" == typeof q && "month" in q && (q = (z = q).month, j = z.year),
        !(!q || !j) && (q = f.trim(q), j = f.trim(j), !!(/^\d+$/.test(q) && /^\d+$/.test(j) && q >= 1 && 12 >= q) && (2 === j.length && (j = 70 > j ? "20" + j : "19" + j),
        4 === j.length && (A = new Date(j, q), B = new Date(), A.setMonth(A.getMonth() - 1),
            A.setMonth(A.getMonth() + 1, 1), A > B)));
    }, f.payment.validateCardCVC = function(j, z) {
        var q, A;
        return j = f.trim(j), !!/^\d+$/.test(j) && (null != (q = b(z)) ? (A = j.length,
        l.call(q.cvcLength, A) >= 0) : j.length >= 3 && j.length <= 4);
    }, f.payment.cardType = function(j) {
        var q;
        return j && (null != (q = C(j)) ? q.type : void 0) || null;
    }, f.payment.formatCardNumber = function(j) {
        var B, q, z, A;
        return j = j.replace(/\D/g, ""), (B = C(j)) ? (z = B.length[B.length.length - 1],
            j = j.slice(0, z), B.format.global ? null != (A = j.match(B.format)) ? A.join(" ") : void 0 : null != (q = B.format.exec(j)) ? (q.shift(),
            (q = f.grep(q, function(D) {
                return D;
            })).join(" ")) : void 0) : j;
    }, f.payment.formatExpiry = function(A) {
        var z, j, B, q;
        return (j = A.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (z = j[1] || "", B = j[2] || "",
            (q = j[3] || "").length > 0 ? B = " / " : " /" === B ? (z = z.substring(0, 1), B = "") : 2 === z.length || B.length > 0 ? B = " / " : 1 === z.length && "0" !== z && "1" !== z && (z = "0" + z,
                B = " / "), z + B + q) : "";
    };
}.call(this);
//password hide/show toggle
window.onload = function() {
    const passwordToggles = document.getElementsByClassName('passwordToggle');

    Array.from(passwordToggles).forEach(passwordToggle => {
        const passwordInputId = passwordToggle.getAttribute('data-password-input');
        const passwordInput = document.getElementById(passwordInputId);

        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;

            const iconClass = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
            passwordToggle.innerHTML = `<i class="${iconClass}"></i>`;
        });
    });
};
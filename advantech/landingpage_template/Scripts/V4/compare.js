function downloadcontent() {
    $(".eStore_compare_content").show();
    $(".eStore_compare_content_Mobile").hide();
    $(".eStore_compare_content .productlist").data("loaded") == "False" ? (jQuery.ajaxSettings.traditional = !0,
    xhr = $.get(GetStoreLocation() + "api/Comparision/getComparisionContent", {
        pns: comparisionproducts
    }, function(n) {
        $(".eStore_compare_content .productlist").html(n).data("loaded", "True");
        init()
    })) : $(".eStore_compare_content .productlist").data("init") == "False" && init()
}
function downloadmobilecontent() {
    $(".eStore_compare_content").hide();
    $(".eStore_compare_content_Mobile").show();
    $(".eStore_compare_content_Mobile .productlist").data("loaded") == "False" ? (jQuery.ajaxSettings.traditional = !0,
    xhr = $.get(GetStoreLocation() + "api/Comparision/getMobileComparisionContent", {
        pns: comparisionproducts
    }, function(n) {
        $(".eStore_compare_content_Mobile .productlist").html(n).data("loaded", "True");
        initmobile()
    })) : $(".eStore_compare_content_Mobile .productlist").data("init") == "False" && initmobile()
}
function fixtablewidth() {
    var n = $("#comparingProducts ul li").length;
    n < 4 && ($(".eStore_compare_contentBottom").width(180 + 200 * n),
    $(".eStore_compare_right").width(200 * n),
    $(".caroufredsel_wrapper").width(200 * n))
}
function initmobile() {
    $(".eStore_slideToggle").click(function() {
        $(this).toggleClass("on").siblings().slideToggle("fast")
    });
    $(".eStore_compare_content_Mobile .close").click(function() {
        var n = $(this).closest("li").index();
        return $(this).closest("li").remove(),
        $(".eStore_compare_content_Mobile .eStore_compareProduct_tableList table").each(function() {
            $(this).find("tr:eq(" + n + ")").remove()
        }),
        !1
    });
    $("#eStore_LogIn_input").length > 0 && $(".needlogin").click(function() {
        return $(".eStore_MyAccount").click(),
        !1
    });
    $(".eStore_compare_content_Mobile .productlist").data("init", "True")
}
function init() {
    var i, r, u;
    $(".eStore_compare_contentCategory").append("<div class='clearfix'><\/div>");
    i = $(".eStore_compare_contentTop .eStore_compare_left .eStore_productBlock_name").height();
    $(".eStore_compare_contentTop .eStore_compare_right .eStore_productBlock_name").each(function() {
        var n = $(this).height();
        i = i > n ? i : n
    });
    $(".eStore_compare_contentTop .eStore_productBlock_name").css("height", i);
    r = $(".eStore_compare_contentTop .eStore_compare_left .eStore_productBlock_action").height();
    $(".eStore_compare_contentTop .eStore_compare_right .eStore_productBlock_action").each(function() {
        var n = $(this).height();
        r = r > n ? r : n
    });
    $(".eStore_compare_contentTop .eStore_productBlock_action").css("height", r);
    u = $(".eStore_compare_contentTop .eStore_compare_left .eStore_productBlock_link").height();
    $(".eStore_compare_contentTop .eStore_compare_right .eStore_productBlock_link").each(function() {
        var n = $(this).height();
        u = u > n ? u : n
    });
    $(".eStore_compare_contentTop .eStore_productBlock_name").css("height", u);
    var e, o, s = 0, f = 0, t = 0;
    for (e = $(".eStore_compare_contentCategory .eStore_compare_left").length,
    n = 0; n < e; n++)
        $(".eStore_compare_contentCategory .eStore_compare_left").eq(n).each(function() {
            for (o = $(this).find("li").length,
            m = 0; m < o; m++)
                s = 0,
                f = 0,
                t = 0,
                s = $(this).find("li").eq(m).height(),
                $(".eStore_compare_contentCategory").eq(n).find(".eStore_compare_right ul").eq(m).find("li").each(function() {
                    f = $(this).height();
                    t = t > f ? t : f
                }),
                $(".eStore_compare_contentCategory").eq(n).find(".eStore_compare_right ul").eq(m).find("li").each(function() {
                    $(this).css("height", t)
                }),
                $(this).find("li").eq(m).css("height", t)
        });
    $(window).scroll(function() {
        var n = $(".eStore_compare_content .productlist").offset().top
          , i = n + 170
          , t = $(this).scrollTop()
          , r = $(this).scrollLeft();
        $(".eStore_compare_left").css("left", r);
        t >= i ? ($(".eStore_compare_contentTop").addClass("positionFixed"),
        $(".positionFixed.eStore_compare_contentTop").css({
            top: t - 170 - n
        }),
        $(".eStore_compare_contentBottom").css({})) : ($(".eStore_compare_contentTop").removeClass("positionFixed"),
        $(".eStore_compare_contentTop").css({
            top: "",
            "margin-top": ""
        }),
        $(".eStore_compare_contentBottom").css({
            "padding-top": ""
        }))
    });
    $("#comparingProducts").find("ul").carouFredSel({
        synchronise: [".eStore_compare_contentBottom .eStore_compare_right > ul", !0, !0, 0],
        circular: !0,
        infinite: !1,
        direction: "left",
        auto: !1,
        scroll: 1,
        prev: "#comparingProducts  #prev",
        next: "#comparingProducts  #next",
        pagination: "#pager"
    });
    $(".eStore_compare_contentBottom .eStore_compare_right  > ul").carouFredSel({
        circular: !0,
        infinite: !1,
        direction: "left",
        auto: !1,
        scroll: 1
    });
    $(".eStore_compare_contentTop .close").click(function() {
        var n = $(this).closest("li").index();
        return $("#comparingProducts").find("ul").trigger("removeItem", n),
        $(".eStore_compare_contentCategory .eStore_compare_right ul").each(function() {
            $(this).trigger("removeItem", n)
        }),
        fixtablewidth(),
        !1
    });
    fixtablewidth();
    $("a.not-active").click(function() {
        return !1
    });
    $("#eStore_LogIn_input").length > 0 && $(".needlogin").click(function() {
        return $(".eStore_MyAccount").click(),
        !1
    });
    $(".eStore_compare_content .productlist").data("init", "True")
}
var mobile, xhr;
$(function() {
    mobile = $(".eStore_mobile").is(":visible");
    mobile ? downloadmobilecontent() : downloadcontent()
});
$(window).resize(function() {
    mobile = $(".eStore_mobile").is(":visible");
    mobile ? downloadmobilecontent() : downloadcontent()
})

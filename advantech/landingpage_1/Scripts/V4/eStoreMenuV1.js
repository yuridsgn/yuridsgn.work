function menuPositionShow() {
  if (!($("body").hasClass("noRWD") & windowW < 980)) {
      menuW = $(".eStore_menuLink").outerWidth(!0);
      var n = (windowW - menuW) / 2;
      $(".eStore_menuLink_linkList").css({
          left: -n,
          "padding-left": n,
          "padding-right": n,
          display: " "
      })
  }
}
$(function() {
  var n, t, i, r;
  $(".eStore_menuLink_link").bind("mouseenter mouseleave click", function(r) {
      var u, f;
      i(r) || (mouseStyle == "PC-mouseenter" ? ($(".eStore_menuLink_link").removeClass("on"),
      $(this).addClass("on"),
      u = $(".eStore_menuLink_link.on").find("div").hasClass("eStore_menuLink_linkList"),
      u && (clearTimeout(n),
      t = setTimeout(function() {
          $(".eStore_menuLink_linkList").css({
              display: ""
          });
          $(".eStore_menuLink_link").removeClass("onMenuLink");
          $(".eStore_menuLink_linkListBG").remove();
          $(".eStore_menuLink_link.on").addClass("onMenuLink");
          $(".eStore_menuLink_linkBlock").append("<div class='eStore_menuLink_linkListBG'><\/div>")
      }, 500))) : mouseStyle == "PC-mouseleave" ? (clearTimeout(t),
      n = setTimeout(function() {
          $(".eStore_menuLink_link").removeClass("onMenuLink on");
          $(".eStore_menuLink_linkListBG").remove()
      }, 300)) : mouseStyle == "PC-click" || mouseStyle == "mobile-click-left" ? ($(this).toggleClass("show"),
      $(this).find(".eStore_menuLink_linkList").slideToggle("400", function() {
          hideMenuH()
      })) : (u = $(this).find("div").hasClass("eStore_menuLink_linkList"),
      u ? (f = $(this).hasClass("onMenuLink"),
      f ? ($(".eStore_menuLink_link").removeClass("onMenuLink"),
      $(".eStore_menuLink_linkListBG").remove()) : ($(this).addClass("onMenuLink").siblings().removeClass("onMenuLink"),
      $(".eStore_menuLink_linkBlock").append("<div class='eStore_menuLink_linkListBG'><\/div>"))) : ($(".eStore_menuLink_link").removeClass("onMenuLink"),
      $(".eStore_menuLink_linkListBG").remove())))
  });
  i = function(n) {
      var t = r();
      if (device.mobile() || device.tablet())
          return n.type == "click" ? t ? (mouseStyle = "mobile-click-left",
          !1) : (mouseStyle = "mobile-click",
          !1) : !0;
      if (t) {
          if (n.type == "click")
              return mouseStyle = "PC-click",
              !1
      } else
          return n.type == "mouseenter" ? mouseStyle = "PC-mouseenter" : n.type == "mouseleave" && (mouseStyle = "PC-mouseleave"),
          !1;
      return !0
  }
  ;
  r = function() {
      return $(".eStore_mobile .eStore_seeMore").is(":visible")
  }
  ;
  $(window).resize(function() {
      mobileShow = $(".eStore_mobile").is(":visible");
      $("#HfMobile").val(mobileShow);
      mobileShow ? ($(".eStore_menuLink_linkList").css({
          left: 0,
          "padding-left": 0,
          "padding-right": 0
      }),
      $("a.mobileHref").each(function() {
          $(this).attr("link", $(this).attr("href")).removeAttr("href")
      })) : ($(".eStore_headerBottom,.eStore_wrapper").css({
          "min-height": 0
      }),
      menuPositionShow(),
      $("a.mobileHref").each(function() {
          $(this).attr("href", $(this).attr("link")).removeAttr("link")
      }))
  }).resize()
})

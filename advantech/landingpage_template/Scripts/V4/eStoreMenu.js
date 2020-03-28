$(function(){
        
  if($(window).width() > 767 ){
    $(".eStore_menuLink_linkList_block").each(function(){
      var $this = $(this),
          $thisLink = $this.find("a"),
          $thisList = $this.find("ol");
      if ($thisList.length > 0) {
        $thisLink.find("i").show();
      }
    })

    $(".eStore_menuLink_link").mouseenter(function(){
      $(this).find(".eStore_menuLink_linkList").show();
      $(this).addClass("onFocus");
    });
    $(".eStore_menuLink_link").mouseleave(function(){
      $(this).find(".eStore_menuLink_linkList").hide();
      $(this).removeClass("onFocus");
    })


    $(".eStore_menuLink_linkList_block").mouseenter(function(){
      $(this).find("ol").show();
      $(this).addClass("onFocus");
    })

    $(".eStore_menuLink_linkList_block").mouseleave(function(){
      $(this).find("ol").hide();
      $(this).removeClass("onFocus");
    })

    
  }else if($(window).width() <=767){
     $(".eStore_menuLink_link").click(function(){
      $(this).find(".eStore_menuLink_linkList").toggle();
      $(this).toggleClass("show");
     })
  }
  
  var navOpen = false;
  $(".eStore_mobile .eStore_seeMore").click(function(){
      if(navOpen == false){
        $(".eStore_wrapper,.eStore_footer").stop().animate({left: -251}, 500);
        $(".eStore_wrapper").css("overflow", "visible");
        hideMenuH();
        navOpen = true; 
      }else {
        $(".eStore_wrapper,.eStore_footer").stop().animate({left: 0}, 500,function(){
          $(".eStore_wrapper").css("overflow", "hidden");
        });
        hideMenuH();
        navOpen = false;        
      }
      $(".eStore_mobileBox .eStore_menuLink_searchBlock_result").removeClass("block");
      $(".eStore_mobile .eStore_search").removeClass("show");
      $(".eStore_searchBox").slideUp();  
    })
  


  function hideMenuH() {
      $(".eStore_headerBottom,.eStore_wrapper").css({
          "min-height": "0"
      });
      var n = $(".eStore_headerBottom").outerHeight(!0),
          t = $(".eStore_wrapper").height(),
          i = n > t ? n : t;
      $(".eStore_headerBottom,.eStore_wrapper").css({
          "min-height": i
      })
  }

 /* search  result */
 var searchResult = false;

 $(".eStore_mobile .eStore_search").click(function(){
  var $this = $(this);
  $(".eStore_wrapper,.eStore_footer").stop().animate({left: 0}, 500,function(){
    $(".eStore_wrapper").css("overflow", "hidden");
  });
  hideMenuH();
  navOpen = false;
  if(searchResult == false){
    $this.addClass("show");
    $(".eStore_searchBox").slideDown();
    searchResult = true;
  }else {
    $this.removeClass("show");
    $(".eStore_searchBox").slideUp();
    searchResult = false;
    $(".eStore_mobileBox .eStore_menuLink_searchBlock_result").hide();
  }  
  $(".eStore_menuLink_searchBlock .eStore_menuLink_searchBlock_result").hide();
 })

 $(".eStore_menuLink_searchBlock .storekeyworddispay").keyup(function(){
    $(".eStore_menuLink_searchBlock .eStore_menuLink_searchBlock_result").show();
    $(".eStore_menuLink_searchBlock .close").show();
 })
 $(".eStore_searchBox .storekeyworddispay").keyup(function(){    
  $(".eStore_mobileBox .eStore_menuLink_searchBlock_result").show();
  $(".eStore_mobileBox .close").show();
 })
 $(".searchBlock_result_product ul li").each(function(){
    var $this = $(this),
        $hover_link = $this.find(".searchResult_product_sub"),
        $show_products = $this.find(".searchResult_product_content");
    $this.mouseenter(function(){
      $hover_link.addClass("hover");
      $show_products.addClass("show");
    })
    $this.mouseleave(function(){
      $hover_link.removeClass("hover");
      $show_products.removeClass("show");
    })

 })

 $(".storekeyworddispay").focusout(function(){
    $(".eStore_menuLink_searchBlock_result").fadeOut(500);
 })

 /*  result close & reset */
 $(".eStore_menuLink_searchBlock .close").click(function(){
    $(".eStore_menuLink_searchBlock .eStore_menuLink_searchBlock_result").hide();
    $(".eStore_menuLink_searchBlock .storekeyworddispay").val("");
    $(this).hide();
 })
 $(".eStore_mobileBox .close").click(function(){
    $(".eStore_mobileBox .eStore_menuLink_searchBlock_result").hide();
    $(".eStore_mobileBox .storekeyworddispay").val("");
    $(this).hide();
 })



  
})



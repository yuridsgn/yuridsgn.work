$(function(){        
  winResize();
  var categories_len = 160; // 超過50個字以"..."取代
  $(".categories_section_text").each(function(i){
      if($(this).text().length>categories_len){
          $(this).attr("title",$(this).text());
          var text=$(this).text().substring(0,categories_len-1)+"...";
          $(this).text(text);
      }
  });

  $(".product_sort").hover(function(){
    $(this).addClass("hover");
    $(".product_sort_list").show();
  },function(){
    $(this).removeClass("hover");
    $(".product_sort_list").hide();
  })



  var sort_data;
  $(".product_sort_list li a").click(function(){
    sort_data = $(this).attr("data-text");
    // alert(sort_data);
    $(".product_sort_more_text").html(sort_data);
    $(".product_sort").removeClass("hover");
    $(".product_sort_list").hide();
    return false;
  })

})

$(window).resize(function(){
  winResize();
})

function winResize(){
  var $window  = $(window),
      $win_w = $window.width(),
      $container_w = $(".eStore_container").width(),
      $refine_w = $(".eStore_search_refine").width() - 2,
      $search_content = $(".eStore_search_content"),
      $search_content_w = $container_w - $refine_w - ($container_w * 0.04)
  
  
  if ($win_w > 768) {
    $search_content.css({width:$search_content_w});   
    
  }else if ($win_w <= 768) {
    $search_content.css({width:"100%"});
    
    $(".product_sort").click(function(){
      $(this).addClass("hover");
      $(".product_sort_list").show();
    })
  }
}

$(function(){

  $(".eStore_search_refine .refine_section").each(function(){
    var $this = $(this),
        $this_title = $this.find(".refine_section_title .fa"),
        $this_title_link = $this.find(".refine_section_title a"),
        $this_content = $this.find(".refine_section_list"),
        $this_toggle = $this.find(".refine_toggle");
        
    $this_title.click(function(){
      $(this).parent().toggleClass("active");
      $this_content.slideToggle();      
      return false;
     
    })
    $this_title_link.click(function(){
      if($(window).width() <= 768 ){
        $(this).parent().toggleClass("active");
        $this_content.slideToggle();
        return false;    
      }
    })

  })

  $("#refine_title_1 .refine_section_title a").click(function(){
    if($(window).width() > 768 ){
      $('html,body').animate({scrollTop: $(".eStore_search_content").offset().top }, 800, "easeInOutExpo");
      return false;
    }
  })
  $("#refine_title_2 .refine_section_title a").click(function(){
    if($(window).width() > 768 ){
      $('html,body').animate({scrollTop: $("#marketing_resources").offset().top }, 800, "easeInOutExpo");
      return false;
    }
  })
  

})

$(window).bind('scroll', scroll_top).scroll();

function scroll_top(){
  var $this = $(this),
      TT = $this.scrollTop(),
      $refine = $(".eStore_search_refine"),
      $refine_offset = $(".eStore_search_content").offset().top;
      
  if($(window).width() > 768 ){
    if (TT < $refine_offset) {
        $refine.removeClass("fixed");
    }else if (TT >= $refine_offset) {
        $refine.addClass("fixed");
    }    
  }else {
    $refine.removeClass("fixed");
  }
}


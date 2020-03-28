var bannerArray = [
  {
    "link_url": "#",
    "pc_src": "App_Themes/V4/images/emt/emt_banner.jpg",
    "mobile_src": "App_Themes/V4/images/emt/emt_banner_m.jpg"
  },
  {
    "link_url": "#",
    "pc_src": "App_Themes/V4/images/emt/emt_banner.jpg",
    "mobile_src": "App_Themes/V4/images/emt/emt_banner_m.jpg"
  },
  {
    "link_url": "#",
    "pc_src": "App_Themes/V4/images/emt/emt_banner.jpg",
    "mobile_src": "App_Themes/V4/images/emt/emt_banner_m.jpg"
  },
  {
    "link_url": "#",
    "pc_src": "App_Themes/V4/images/emt/emt_banner.jpg",
    "mobile_src": "App_Themes/V4/images/emt/emt_banner_m.jpg"
  }
]

function bannerData() {
  var code;
  $(".emt__banner .emt__banner__items").each(function (index) {
    
    var $this = $(this)
    var bannerUrl = bannerArray[index].pc_src;
    var linkUrl = bannerArray[index].link_url;
    var winWidth = $(window).width();
    if(winWidth > 601){
      bannerUrl = bannerArray[index].pc_src;
    }else if (winWidth <= 600){
      bannerUrl = bannerArray[index].mobile_src;
    }
    code = "<a href=\"" + linkUrl + "\"><img src=\"" + bannerUrl + "\" /></a>";
    
    $this.html(code)
    

  })
  // console.log(code)
}
$(function(){
  bannerData();
  
  
})

function imgResize(){
  $(".emt__productItems__img").each(function () {
    var $this = $(this)
    var $img = $this.find('img'),
      $imgW = $img.width(),
      $imgH = $img.height()
    if ($imgW > $imgH || $imgW == $imgH) {
      $img.css({ 'width': '100%', 'height': 'auto' })
    } else if ($imgW < $imgH) {
      $img.css({ 'width': 'auto', 'height': '100%' })
    }
  })
  $(".emt__technology .emt__items__img").each(function(){
    var $this = $(this)
    var $img = $this.find('img'),
        $imgW = $img.width(),
        $imgH = $imgW * 0.6;
    $img.css({"height": $imgH})

  })
  $(".emt__applicatoon .emt__items__img").each(function(){
    var $this = $(this)
    var $img = $this.find('img'),
        $imgW = $img.width(),
        $imgH = $imgW * 0.6;
    $img.css({"height": $imgH})
  })

  $(".emt__store .emt__storeItems__banner").each(function(){
    var $this = $(this)
    var $img = $this.find('img'),
        $imgW = $img.width(),
        $imgH = $imgW * 0.6;
    $img.css({"height": $imgH})
  })
}

$(window).resize(function(){
  imgResize()
})

$(function(){
  
  var len = 130; // 超過130個字以"..."取代
  $(".text_overflow").each(function(i){
      if($(this).text().length>len){
          $(this).attr("title",$(this).text());
          var text=$(this).text().substring(0,len-1)+"...";
          $(this).text(text);
      }
  });

  var padBreakpoint = 768
  var mobileBreakpoint = 601



  $('.emt__technology .emt__rows').slick({    
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [      
      {
        breakpoint: mobileBreakpoint,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.emt__video .emt__rows').slick({    
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: mobileBreakpoint,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.emt__store .emt__rows').slick({    
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.emt__products .emt__rows').slick({    
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: padBreakpoint,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.emt__banner .emt__rows').slick({    
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    
  });
  

});
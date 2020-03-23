$(document).ready(function () {
    // 主視覺上方大banner    
    var kvBanner = new Swiper('.swiper-container.kv-banner-container', {
        //-direction: 'vertical', // 垂直選項切換
        loop: true, // 循環模式
        autoplay: true, // 自動播放
        // 分頁
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // 切換前後按鈕

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })
    // 影片
        var lpVideo = new Swiper('.swiper-container.lp-video-container', {
        loop: true, // 循環模式
        autoplay: false, // 自動播放
        // 分頁
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // 切換前後按鈕

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    // 產品
    var lpProducts = new Swiper('.swiper-container.lp-product-container', {

        loop: true, // 循環模式
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 切換前後按鈕
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    });

})


//--Case展開--

  $(function() {
    
    $("#lp-case-more").click(function() {
      $(this).hide(); 
      $("#hide-case").fadeIn(600);
    });
  
  });
  

//-- googlemap

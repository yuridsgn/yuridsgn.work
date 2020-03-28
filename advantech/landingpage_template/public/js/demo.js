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

    // 產品 輪播的列數可自由增長，不足的項目會留白
    var lpProductsA = new Swiper('#lp-product-1', {

        loop: true, // 循環模式
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 切換前後按鈕
        navigation: {
            nextEl: '#lp-product-1-button-next',
            prevEl: '#lp-product-1-button-prev',
        }

    });
  
      // 產品 輪播的列數一列、不足的商品數會由第一個補上
        var lpProductsB = new Swiper('#lp-product-2', {
        loop: true, // 循環模式
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup:3,
        // 分頁
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // 切換前後按鈕
        navigation: {
            nextEl: '#lp-product-2-button-next',
            prevEl: '#lp-product-2-button-prev',
        },
    })


})


//--Case展開--

  $(function() {
    
    $("#lp-case-more").click(function() {
      $(this).hide(); 
      $("#hide-case").fadeIn(600);
    });
  
  });
  

//-- googlemap

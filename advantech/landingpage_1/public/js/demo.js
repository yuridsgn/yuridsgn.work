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


        // scrollbar
        /*
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        */
    })
    
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


        // scrollbar
        /*
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        */
    })

    var indexProductsSwiper = new Swiper('.swiper-container.index-products-swiper', {

        loop: true, // 循環模式
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 切換前後按鈕
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 10
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }


    });
  
  
    // 最新活動
    var indexMainBanner = new Swiper('#newEventContainer', {
        slidesPerView: 3,
        // 分頁
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // 切換前後按鈕
        breakpoints: {
            767: {
                slidesPerView: 1.2,
                spaceBetween: 0
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

})


//--Q&A收合圖示--

  $(function() {
    $(".faq-header").click(function() {
      $(this).toggleClass("faq-header-bg-minus"); 
    });
  });
  

//-- googlemap

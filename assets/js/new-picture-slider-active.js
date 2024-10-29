
$(document).ready(function () {

    /*------------------------------------
         featured products Slider - index.html 
       --------------------------------------*/

    const newsImgSwiperContainer = document.querySelector('.news-img-slider-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(newsImgSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(newsImgSwiperContainer, {
            // Optional parameters
            slidesPerView: 4,
            slidesPerColumn: 1,
            loop: true,
            spaceBetween: 24,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },


            breakpoints: {
                320: {
                    slidesPerView: 1,
                },

            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },

            a11y: false

        });
    }


    const playHero = e => {
        e.preventDefault()
        newsImgSwiperContainer.current.swiper.autoplay.start()
    }
    const pauseHero = e => {
        e.preventDefault()
        newsImgSwiperContainer.current.swiper.autoplay.stop()
    }

});
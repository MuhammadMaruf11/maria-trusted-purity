
$(document).ready(function () {

    /*------------------------------------
         featured products Slider - index.html 
       --------------------------------------*/

    const newsSwiperContainer = document.querySelector('.news-weather-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(newsSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(newsSwiperContainer, {
            // Optional parameters
            slidesPerView: 4,
            slidesPerColumn: 1,
            loop: true,
            spaceBetween: 24,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },

                1440: {
                    slidesPerView: 4,
                },

            },

            a11y: false

        });
    }




});
document.addEventListener('DOMContentLoaded', function () {


    /*-------------------------------------------
        mobile menu 
     --------------------------------------------- */


    const toggleBtn = document.querySelectorAll('.toggle-icon');
    const crossBtn = document.querySelector('#crossBtn');



    if (toggleBtn) {

        toggleBtn.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.mobile-menu').classList.add('open')
            })
        });
    }

    if (crossBtn) {
        crossBtn.addEventListener('click', () => {
            document.querySelector('.mobile-menu').classList.remove('open')
        })
    }


    /*-------------------------------------------
     Sticky Header
 --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-bottom");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


    /*-------------------------------------------
         play video 
     --------------------------------------------- */

    const playVideo = document.querySelector('#playVideo');

    if (playVideo) {
        playVideo.addEventListener('click', () => {
            // Hide the image and the play button
            var img = document.querySelector('.live-mid-img img');
            var sourceImg = document.querySelector('.source-img');
            var video = document.querySelector('.live-mid-img video');

            // Hide the image and the play button
            img.style.display = 'none';
            sourceImg.style.display = 'none';

            // Show the video and play it
            video.style.display = 'block';
            video.play();
        })
    }

    /*-------------------------------------------
         font size increase and decrease 
     --------------------------------------------- */

    // Get the increase and decrease font size buttons
    const increaseFontBtn = document.getElementById("increase-font");
    const decreaseFontBtn = document.getElementById("decrease-font");

    // Get the container whose font size will change
    const textContainer = document.querySelector(".single-hero-description");

    // Default font size and min/max caps
    let currentFontSize = 16; // assuming the base font size is 16px
    const minFontSize = 14;
    const maxFontSize = 20;

    // Function to set font size and manage button state
    function setFontSize(size) {
        textContainer.style.fontSize = size + "px";

        // Disable buttons if limits are reached
        if (currentFontSize <= minFontSize) {
            decreaseFontBtn.classList.add('disabled')
        } else {
            decreaseFontBtn.classList.remove('disabled')
        }

        if (currentFontSize >= maxFontSize) {
            increaseFontBtn.classList.add('disabled')
        } else {
            increaseFontBtn.classList.remove('disabled')
        }
    }

    if (increaseFontBtn) {
        // Increase font size
        increaseFontBtn.addEventListener("click", function (event) {
            event.preventDefault();
            if (currentFontSize < maxFontSize) {
                currentFontSize += 2; // increase by 2px
                setFontSize(currentFontSize);
            }
        });
    }

    if (decreaseFontBtn) {
        // Decrease font size
        decreaseFontBtn.addEventListener("click", function (event) {
            event.preventDefault();
            if (currentFontSize > minFontSize) {
                currentFontSize -= 2; // decrease by 2px
                setFontSize(currentFontSize);
            }
        });
    }

    if (textContainer) {
        // Initialize the buttons state based on default font size
        setFontSize(currentFontSize);
    }


    /*-------------------------------------------
        emoji selection
     --------------------------------------------- */

    const commentInput = document.querySelector(".comment-input");
    const emojiBtn = document.querySelector(".emoji-btn");
    const emojiPicker = document.querySelector(".emoji-picker");
    const emojis = document.querySelectorAll(".emoji");

    if (emojiBtn) {
        // Toggle emoji picker visibility
        emojiBtn.addEventListener("click", function () {
            emojiPicker.classList.toggle("visible");
        });
    }

    if (emojis) {
        // Add emoji to comment input when clicked
        emojis.forEach(function (emoji) {
            emoji.addEventListener("click", function () {
                commentInput.value += emoji.textContent;
            });
        });
    }

    if (emojiPicker && emojiBtn) {
        // Hide emoji picker if clicked outside
        document.addEventListener("click", function (event) {
            if (!emojiPicker.contains(event.target) && event.target !== emojiBtn) {
                emojiPicker.classList.remove("visible");
            }
        });
    }



    /*-------------------------------------------
        counter achievement
     --------------------------------------------- */
    const counters = document.querySelectorAll(".counter");

    const updateCount = (counter) => {
        const target = +counter.getAttribute("data-target");
        const speed = 200; // Adjust speed as needed
        const increment = target / speed;

        const countUp = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(countUp, 20);
            } else {
                counter.innerText = target;
            }
        };
        countUp();
    };

    // Using Intersection Observer to trigger counters when in view
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    updateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 1.0 }
    );

    counters.forEach((counter) => {
        observer.observe(counter);
    });

})

document.addEventListener('DOMContentLoaded', function () {


    /*-------------------------------------------
       mobile menu 
    --------------------------------------------- */


    const toggleBtn = document.querySelector('.toggle-icon');

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.toggle('open')
        toggleBtn.classList.toggle('open')
    })


    document.querySelectorAll('.mobile-main-menu > li > a').forEach(mainMenuItem => {
        mainMenuItem.addEventListener('click', function () {

            // Toggle the open class on the clicked item
            const parentLi = mainMenuItem.parentElement;
            const isOpen = parentLi.classList.contains('open');
            document.querySelectorAll('.mobile-main-menu > li').forEach(li => li.classList.remove('open'));

            if (!isOpen) {
                parentLi.classList.add('open');
            }
        });
    });


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
       filter job
     --------------------------------------------- */


    const jobSearch = document.querySelector('#jobSearch');

    if (jobSearch) {
        jobSearch.addEventListener('keyup', () => {
            const searchInput = document.getElementById("jobSearch").value.toLowerCase();
            const table = document.getElementById("jobTable");
            const rows = table.getElementsByTagName("tr");

            for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
                const cells = rows[i].getElementsByTagName("td");
                let matchFound = false;

                for (let j = 0; j < cells.length - 1; j++) { // Ignore the last cell with the apply button
                    if (cells[j] && cells[j].innerText.toLowerCase().includes(searchInput)) {
                        matchFound = true;
                        break;
                    }
                }

                rows[i].style.display = matchFound ? "" : "none";
            }
        })
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


    /*-------------------------------------------
         bread crumbs
      --------------------------------------------- */

    const breadcrumb = document.getElementById("breadcrumb");
    const pathArray = window.location.pathname.split("/").filter(Boolean);

    let pathUrl = "";
    if (breadcrumb) {
        pathArray.forEach((segment, index) => {
            pathUrl += `/${segment}`;

            const isLast = index === pathArray.length - 1;
            const li = document.createElement("li");
            li.className = isLast ? "breadcrumb-item active" : "breadcrumb-item";
            li.setAttribute("aria-current", isLast ? "page" : "");

            if (isLast) {
                li.textContent = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
            } else {
                const link = document.createElement("a");
                link.href = pathUrl;
                link.textContent = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                li.appendChild(link);
            }

            breadcrumb.appendChild(li);
        });
    }

})

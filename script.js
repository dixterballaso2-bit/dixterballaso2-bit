document.addEventListener("DOMContentLoaded", function () {

```
/*
 * Smooth scrolling
 */

const links = document.querySelectorAll(
    'a[href^="#"]'
);

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/*
 * Scroll-to-top button
 */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


/*
 * Back to top
 */

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/*
 * Simple fade-in effect
 */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(function (section) {

    observer.observe(section);

});
```

});

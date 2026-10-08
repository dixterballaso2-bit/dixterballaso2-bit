document.addEventListener("DOMContentLoaded", function () {

```
// Smooth scrolling for navigation links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Scroll-to-top button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";
topButton.title = "Back to top";

document.body.appendChild(topButton);

// Show button after scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

// Scroll back to top
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
```

});


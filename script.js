function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// Hide nav on scroll down
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.style.top = "-100px";
    } else {
        header.style.top = "0";
    }
    lastScrollY = window.scrollY;

    // Add blur/dark effect on scroll
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("videoFrame");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const src = iframe.getAttribute("data-src");
                    iframe.setAttribute("src", src);
                    observer.unobserve(entry.target); // load only once
                }
            });
        },
        {
            threshold: 0.5, // video must be 50% visible to trigger
        }
    );

    observer.observe(iframe);
});

  function openMenu() {
    document.getElementById("mobileNav").classList.add("active");
    document.getElementById("overlay").style.display = "block";
  }

  function closeMenu() {
    document.getElementById("mobileNav").classList.remove("active");
    document.getElementById("overlay").style.display = "none";
  }
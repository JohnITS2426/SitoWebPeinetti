document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.style.transition = "color 0.3s";
        link.addEventListener("mouseenter", () => {
            link.style.color = "#0078d7";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "";
        });
    });

    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s, transform 0.8s";
    });

    const fadeInOnScroll = () => {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "john" && password === "John2004") {
            alert("Login riuscito!");
            window.location.href = "index.html";
        } else if (username === "" || password === "") {
            document.getElementById("errorMessage").style.display = "block";
        } else {
            document.getElementById("errorMessage").style.display = "block";
        }
    });

});

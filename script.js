 window.addEventListener("scroll", function() {
        var footer = document.querySelector("footer");
        var windowHeight = window.innerHeight;
        var bodyHeight = document.body.offsetHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollBottom = bodyHeight - (scrollTop + windowHeight);
        if (scrollBottom < 50) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });


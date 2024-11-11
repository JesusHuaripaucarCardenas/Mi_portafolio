const zoomButtons = document.querySelectorAll(".zoombtn");

zoomButtons.forEach(function (button) {
    button.addEventListener("mouseover", function () {
        button.style.transition = "transform 0.3s ease";
        button.style.transform = "scale(1.2)";
    });

    button.addEventListener("mouseout", function () {
        button.style.transform = "scale(1)";
    });
});
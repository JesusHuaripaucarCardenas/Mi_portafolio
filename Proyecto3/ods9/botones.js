const colorBoxes = document.querySelectorAll(".colorBox");

// Recorre todos los elementos y aplica el mismo comportamiento a cada uno
colorBoxes.forEach(function(colorBox) {
    colorBox.addEventListener("click", function () {
        colorBox.style.transition = "background-color 0.5s ease";
        colorBox.style.backgroundColor = colorBox.style.backgroundColor === "lightblue" ? "lightcoral" : "lightblue";
    });
});


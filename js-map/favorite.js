document.addEventListener("DOMContentLoaded", function () {
    const wishlistButtons = document.querySelectorAll(".shop_button_wishl");

    wishlistButtons.forEach(function (button) {
        button.addEventListener("click", function () {         
            const isSelected = button.classList.contains("selected");
            if (isSelected) {
                button.classList.remove("selected");
                button.style.background = "";
            } else {
                button.classList.add("selected");
                button.style.background = "rgb(0, 255, 0)";
            }
        });
    });
});
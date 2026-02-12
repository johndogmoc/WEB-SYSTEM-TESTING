document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.getElementsByClassName("categoryBtn");
    var display = document.getElementById("selectedCategory");

    for (var i = 0; i < buttons.length; i++) {

        buttons[i].onclick = function() {
            display.innerHTML = "You selected: " + this.innerHTML;
        };

    }

});

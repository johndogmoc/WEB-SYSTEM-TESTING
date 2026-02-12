document.addEventListener("DOMContentLoaded", function() {

    var btn = document.getElementById("showBtn");
    var text = document.getElementById("demo");

    btn.onclick = function() {

        if (text.style.display == "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }

    };

});

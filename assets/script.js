$(document).ready(function () {
    $("#startBtn").click(function () {
        $("#top-title").css({ "color": "blue" });
        $("#top-title").animate({ "font-size": "+=1em" }, 3000);
        $("#top-title").animate({ "font-size": "-=1em" }, 3000);
        setTimeout(function () { $("#top-title").css("color", "black") }, 3000);

        $("#profile").css({ "border": "1em solid #555" });

        // According to the homework this "setTimeout() is not necessary, since the border needs to stay solid, but I added just to practice the function"
        setTimeout(function () { $("#profile").css({ "border": "0em" }) }, 3000);
    });
});

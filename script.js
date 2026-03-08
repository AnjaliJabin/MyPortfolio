$(document).ready(function() {
    $(".fade-card").hide().fadeIn(1200);

    $(".navbar a").hover(function() {
        $(this).css("opacity", "0.7");
    }, function() {
        $(this).css("opacity", "1");
    });
});

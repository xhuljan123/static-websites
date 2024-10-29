$(document).ready(function() {
    $("#burger-menu").click(function(event) {
        $('body').toggleClass('openMenu');
    });
});
$('#carousel-3-image').on('slide.bs.carousel', function (event) {
    var active = $(event.target).find('.carousel-inner > .carousel-item.active');
    var from = active.index();
    var next = $(event.relatedTarget);
    var to = next.index();
    var direction = event.direction;
    if(direction == 'left'){
        $('#carousel-3-text').carousel('next');
        $('#carousel-3-percent').carousel('next');
    }else{
        $('#carousel-3-text').carousel('prev');
        $('#carousel-3-percent').carousel('prev');
    }
    
    var actual = to + 1;
    var n = "0" 
    +actual+ " <span>/ 03</span>";
    $(".carousel-number").html(n);
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbar").addClass("change-nav");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("change-nav");
    }
});
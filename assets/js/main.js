$(document).ready(function(){

/* testimonial counter */
$('.counter').counterUp({
    deley:10,
    time:1000,
})

/* client owl carousel*/
$('.owl-carousel').owlCarousel({
    autoplay:true,
    items:1,
    dots:true,
    loop:true,
});

/* For Mobile Menu*/
$('.nav_show').click(function(){
    $('.navbar nav').fadeIn().css({
        "left":"0",
    });
    $(this).hide();
    $('.nav_close').show();
})
$('.nav_close').click(function(){
    $('.navbar nav').fadeOut().css({
        "left":"-100%",
    });
    $(this).hide();
    $('.nav_show').show();
})

















});
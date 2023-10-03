

$(document).ready(function ($) {
    // Mobile Menu
    $('.Mobile_menu .contact_btn').click(function(){
        $('.menu_area').slideToggle();
    });

    // customer_slider
	$(".customer_slider").owlCarousel({
		loop: true,
        autoplay:true,
		margin: 10,
		dots: false,
        center: true,
		// nav: true,
		items: 4,
        responsive:{
            0:{
				items:1.2,
				center: false
            },
            375:{
                items:1.2,
				center: false
            },
            450:{
                items:1.5,
				center: false
            },
            767:{
                items:2.2,
				center: false
            },
            991:{
                items:3.2,
				center: false
            },
            1440:{
                items:4
            }
          
        }
	});
	var owl = $(".owl-carousel");
	owl.owlCarousel();
	$(".next-btn").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".prev-btn").click(function () {
		owl.trigger("prev.owl.carousel");
	});
	$(".prev-btn").addClass("disabled");
	$(owl).on("translated.owl.carousel", function (event) {
		if ($(".owl-prev").hasClass("disabled")) {
			$(".prev-btn").addClass("disabled");
		} else {
			$(".prev-btn").removeClass("disabled");
		}
		if ($(".owl-next").hasClass("disabled")) {
			$(".next-btn").addClass("disabled");
		} else {
			$(".next-btn").removeClass("disabled");
		}
	});
});

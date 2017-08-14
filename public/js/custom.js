/*CV CLICK INTERACTION*/
$(document).ready(function () {
	
	var details = $(this).closest('.details');
	
	$(".cventry").on("click", function() {
		$(this).nextAll(".details").slideToggle();
	});

});

/*SVG ANIMATIONS LANDINGPAGE*/

/*SUN*/
$(document).ready(function () {

	$(".brightblue").on("mouseenter", function() {
		
		$(".cloud").removeClass("hide");
		$(".drop").removeClass("hide");

		$(".cloud").addClass("active");
		$(".drop").addClass("rain");

	});

	$(".brightblue").on("mouseleave", function() {

		$(".cloud").addClass("hide");
		$(".drop").addClass("hide");

	});

});

/*BURGER*/
$(document).ready(function () {

	$(".darkblue").on("mouseenter", function() {
		$(".topgroup").addClass("active");
		$(".patty").addClass("active");
		$(".saladgroup").addClass("active");
		$(".bottombun").addClass("active");
		$(".bite").addClass("active");
	});

	$(".darkblue").on("mouseleave", function() {
		$(".topgroup").removeClass("active");
		$(".patty").removeClass("active");
		$(".saladgroup").removeClass("active");
		$(".bottombun").removeClass("active");
		$(".bite").removeClass("active");
		$(".bite").removeClass("hide");
	});

});

/*AVOCADO*/
$(document).ready(function () {

	$(".brightgreen").on("mouseenter", function() {
		
		$(".avocado").addClass("rotate");
		$(".green").addClass("turnbrown");
		$(".brown").addClass("turngreen");

	});

	$(".brightgreen").on("mouseleave", function() {

		$(".avocado").removeClass("rotate");
		$(".green").removeClass("turnbrown");
		$(".brown").removeClass("turngreen");

	});

});
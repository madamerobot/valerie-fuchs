/*CV CLICK INTERACTION*/
// So you only need to call document.ready once.
$(document).ready(function () {

	var details = $(this).closest('.details');

	$(".cventry").on("click", function() {
		$(this).nextAll(".details").slideToggle();
	});

	/*SVG ANIMATIONS LANDINGPAGE*/

	/*SUN*/

	// Storing elements in variables makes the js faster as the js doesn't have to go n find the element in the DOM every time it needs to modify it. The general rule is if you use the element more than once, it should be a variable.
	var cloud = $(".cloud");
	var drop = $(".drop");

	$(".amssunmachine").on("mouseenter", function() {
		// If the cloud element isn't active, then we add the can animate it
		if (!cloud.hasClass("active")) {
			cloud.addClass("active");
			drop.addClass("active");
		}
	});

	// We listen to the animationEnd event which is fired when the animation finishes. This means the animation will keep running even when the mouse leaves the box. This means theres no jerk. Woop!
	cloud.bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		// If the cloud element is animating, is it active and we can remove the classes
		if (cloud.hasClass("active")) {
			cloud.removeClass("active");
			drop.removeClass("active");
		}
	})

	/*BURGER*/
	// Normally we bundle all vars at the top but i'll leave this one ere for readability
	var lateNightSnack = $(".latenightsnack");
	var topGroup = $(".topgroup");
	var patty = $(".patty");
	var saladGroup = $(".saladgroup");
	var btmBun = $(".bottombun");
	var bite = $(".bite");

	lateNightSnack.on("mouseenter", function() {
		topGroup.addClass("active");
		patty.addClass("active");
		saladGroup.addClass("active");
		btmBun.addClass("active");
		bite.addClass("active");
	});

	lateNightSnack.on("webkitAnimationEnd mozAnimationEnd animationEnd", function() {
		topGroup.removeClass("active");
		patty.removeClass("active");
		saladGroup.removeClass("active");
		btmBun.removeClass("active");
		bite.removeClass("active");
	});

	/*AVOCADO*/
	var avocadoNet = $(".avocadonet");
	var avocado = $(".avocado");
	var green = $(".green");
	var brown = $(".brown");

	avocadoNet.on("mouseenter", function() {
		avocado.addClass("rotate");
		green.addClass("turnbrown");
		brown.addClass("turngreen");
	});

	avocadoNet.on("webkitAnimationEnd mozAnimationEnd animationEnd", function() {
		avocado.removeClass("rotate");
		green.removeClass("turnbrown");
		brown.removeClass("turngreen");
	});

});

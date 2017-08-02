$(document).ready(function () {
	
	var details = $(this).closest('.details');
	
	$(".cventry").on("click", function() {
		$(this).nextAll(".details").slideToggle();
	});

});

console.log('Im here');
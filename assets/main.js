$(document).ready(function(){
		$("#foto2").click(function() {
			$("#agrega").hide(function() {
			$("#agrega2").append('<img src="assets/img/2.jpg" alt="">')	
			});
		});

			$("#foto3").click(function() {
			$("#agrega2").hide(function() {
			$("#agrega3").append('<img src="assets/img/3.jpg" alt="">')	
			});
		});


});
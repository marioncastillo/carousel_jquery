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

			$("#foto4").click(function() {
			$("#agrega3").hide(function() {
			$("#agrega4").append('<img src="assets/img/4.jpg" alt="">')	
			});
		});

			$("#foto5").click(function() {
			$("#agrega4").hide(function() {
			$("#agrega5").append('<img src="assets/img/5.jpg" alt="">')	
			});
		});


});
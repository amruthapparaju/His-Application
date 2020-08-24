



$(document).ready(function(e) {
	$("#email").blur(function(event) {
		$("#dupEmail").html("");
		var emailId = $("#email").val();
		$.ajax({
			url : 'validateEmail?email=' + emailId,
			success : function(abc) {
				if (abc == 'Duplicate') {
					$("#dupEmail").html("Email already registered");
					$("#email").focus();
				}
			}
		});
	});
});


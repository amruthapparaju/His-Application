
function checkPassword(form) {
	oldpassword = form.tempPwd.value;
	password1 = form.newPwd.value;
	password2 = form.ConformPwd.value;

	if (oldpassword == '') {
		// alert ("Please enter Temporary Password");
		document.getElementById("oldpasswordErr").innerHTML = "<b> Please enter Temporary Password</b>";

		return false;
	}
	// If password not entered
	else if (password1 == '') {
		// alert ("Please enter NewPassword");
		document.getElementById("newPwdErr").innerHTML = "<b> Please enter NewPassword</b>";

		return false;
	}

	else if (password2 == '') {
		// alert ("Please enter confirm password");
		document.getElementById("ConformPwdErr").innerHTML = "<b> Please enter confirm password</b>";

		return false;
	} else if (password1 != password2) {
		// alert ("\nPassword did not match: Please try again...")
		document.getElementById("ConformPwdErr").innerHTML = "<b> Password did not match: Please try again</b>";

		return false;
	}

	else {
		return true;
	}
}
function validate(frm) {
	alert("null");
	document.getElementById("firstNameErr").innerHTML = "";
	document.getElementById("lastNameErr").innerHTML = "";
	document.getElementById("EmailNameErr").innerHTML = "";
	document.getElementById("gendleErr").innerHTML = "";
	document.getElementById("roleErr").innerHTML = "";

	let name = frm.firstName.value;
	let lastName = frm.LastName.value;
	let email = frm.email.value;
	let gender = frm.gender.value;
	let role = frm.role.value;

	let flag = false;

	// client side form validations
	if (name == "") {
		document.getElementById("firstNameErr").innerHTML = "<b> first name is madatory</b>";
		// frm.patName.focus();
		flag = true;
	} else if (name.length < 3 || name.length > 10) {
		document.getElementById("firstNameErr").innerHTML = "<b> first name must have min 3 chars and max of 10 chars</b>";
		// frm.hospital.focus();
		flag = true;
	}

	else if (!name.match(/^[a-zA-Z]+$/)) {
		document.getElementById("firstNameErr").innerHTML = "<b> first name must only character letters</b>";
		return false;
	}
	if (lastName == "") {
		document.getElementById("lastNameErr").innerHTML = "<b> last name is madatory</b>";
		// frm.location.focus();
		flag = true;
	} else if (lastName.length < 3 || lastName.length > 10) {
		document.getElementById("lastNameErr").innerHTML = "<b> last name must have min 3 chars and max of 10 chars</b>";
		// frm.hospital.focus();
		flag = true;
	}
	else if (!name.match(/^[a-zA-Z]+$/)) {
		document.getElementById("lastNameErr").innerHTML = "<b> last name must only character letters</b>";
		return false;
	}
	if (email == "") {
		document.getElementById("EmailNameErr").innerHTML = "<b> email is mandatory</b>";
		// frm.age.focus();
		flag = true;
	}

	if (gender == "") {
		document.getElementById("gendleErr").innerHTML = "<b> gender mandatory</b>";
		// frm.hospital.focus();
		flag = true;
	}
	if (role = "") {
		document.getElementById("roleErr").innerHTML = "<b> role is mandatory</b>";
		// frm.hospital.focus();
		flag = true;
	}


	if (flag)
		return false;
	else
		return true;
}

function loginvalidate(form) {
	oldpassword = form.email.value;
	password1 = form.password.value;

	let flag = false;

	if (oldpassword == '') {
		// alert ("Please enter Temporary Password");
		document.getElementById("emailErr").innerHTML = "<b> Please enter the email</b>";

		flag = true;
	}
	// If password not entered
	if (password1 == '') {
		// alert ("Please enter NewPassword");
		document.getElementById("passwordErr").innerHTML = "<b> Please enter the password</b>";

		flag = true;
	}
	if (flag)
		return false;
	else
		return true;

}

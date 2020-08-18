	function formValidation(){// form validation
		var fullname = document.getElementById('fullname');
		var address = document.getElementById('address');


		if (fullname.value.length == 0) { //checks empty field
			document.getElementById('head').innerText = "* All fields are mandatory *"; 
			fullname.focus();
		
			return false;
			}

	//checks name, length, character
	if (inputAlphabet(fullname, "* For your name please use alphabets only *") && fullname.value.length>=30)
		 {
			alert("Length restriction, max 30 characters only.");
			return false;
		
		} else if (inputAlphabet(fullname, "* For your name please use alphabets only *")) { //checks name, char
			
			return true;
		}

		else
		{
			return false;
		}

	}

	// Function that checks whether input text is an alphabetic character or not.
	function inputAlphabet(inputtext, alertMsg) {
		var alphaExp = /^[a-zA-Z, ]+$/; //char only and space
		if (inputtext.value.match(alphaExp)) {
		return true;
		} else {
		document.getElementById('p1').innerText = alertMsg;// msg for char
		document.getElementById('p2').innerText = "*Length restriction, max 30 characters only.*";//msg for max len

		inputtext.focus();
		return false;
		}
		}


//email vaidation
	function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }
        return true;
} 	

// alphanumeric
	function alphaField(fieldname)
		{
			if (/[^0-9a-zA-Z\s]/gi.test(fieldname.value))
			{
				alert ("Only alphanumeric characters are valid in this field");
				fieldname.value = "";
				fieldname.focus();
			return false;
		}
}

//local storage
function onSubmit() {

	const fullname = document.getElementById('fullname').value;
	const address = document.getElementById('address').value;
	const email = document.getElementById('email').value;
	const num = document.getElementById('num').value;



	const hobby =document.getElementById('hobby').value;
	sessionStorage.setItem("HOBBY",hobby);
	// const photo = document.getElementById('photo').value;
	// const imgPreview = document.getElementById('imgPreview').value;


	sessionStorage.setItem("FULLNAME", fullname);
	sessionStorage.setItem("ADDRESS", address);
	sessionStorage.setItem("EMAIL", email);
	sessionStorage.setItem("NUM", num);
	// localStorage.setItem("PHOTO", photo); 
	// localStorage.setItem("IMGPREVIEW",imgPreview);

	// const one =document.getElementById('one').value;
	// localStorage.setItem("ONE",one);

	// const two = document.getElementById('two').value;
	// localStorage.setItem("TWO",two);
	
	return;
}








window.addEventListener('load' , ()=> {
	const fullname = sessionStorage.getItem('FULLNAME');
	const email = sessionStorage.getItem('EMAIL');
	const num = sessionStorage.getItem('NUM');
	const address = sessionStorage.getItem('ADDRESS');

	document.getElementById('assgn-fullname').innerHTML = fullname;
	document.getElementById('assgn-email').innerHTML = email;
	document.getElementById('assgn-num').innerHTML = num;
	document.getElementById('assgn-address').innerHTML = address;
	
});

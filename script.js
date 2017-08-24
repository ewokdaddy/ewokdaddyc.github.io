

function Top1() { // get variables for leadoff batter

	top1 = document.getElementById('top1');
	b1inn1 = document.getElementById('b1inn1');
	b1inn2 = document.getElementById('b1inn2');
	b1inn3 = document.getElementById('b1inn3');
}

function MakeCookie() {
	// this works
	top1 = document.getElementById('top1').value;
	b1inn1 = document.getElementById('b1inn1').value;
	b1inn2 = document.getElementById('b1inn2').value;
	b1inn3 = document.getElementById('b1inn3').value;
	// make 2 cookies
	// document.cookie = name + "=" + namevalue + ";" + expires + path;
	// document.cookie = address + "=" + addressvalue + ";" + expires + path;
	document.cookie = TOP1 + "=" + top1;
	document.cookie = B1INN1 + "=" + b1inn1;
	document.cookie = B1INN2 + "=" + b1inn2;
	document.cookie = B1INN3 + "=" + b1inn3;
}

function ShowCookie() {
	// this works
	var cookie;
	cookie = document.cookie.toUpperCase();
	document.getElementById('cookie').value = cookie;
	alert(cookie);
}


function DeleteCookie() {
	// this works
	//document.cookie = name + "=" + ";" + expires + path;
	//document.cookie = address + "=" + ";" + expires + path;
}

var myCar = new Car("mycar", "2vh", "1%");

document.onkeydown = function(e) {

	e = e || window.event;

	if (e.keyCode == '38') {
		myCar.goup();
	}
	else if (e.keyCode == '40') {
		myCar.godown();
	}
	else if (e.keyCode == '37') {
		myCar.goleft();
	}
	else if (e.keyCode == '39') {
		myCar.goright();
	}
	// else if (e.keyCode == '35') {
	// mycar.gohome();
	// }
	// else if (e.keyCode == '36') {
	// mycar.goend();
	// }

};

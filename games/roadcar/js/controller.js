var myCar = new Car(document.getElementById("mycar"), "2vh", "0%");
var score = document.getElementById("score");
var done = false;

function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '38') {
		myCar.goUp();
	}
	else if (e.keyCode == '40') {
		myCar.goDown();
	}
	else if (e.keyCode == '37') {
		myCar.goLeft();
		score.textContent = myCar.getLeft();
	}
	else if (e.keyCode == '39') {
		myCar.goRight();
		score.textContent = myCar.getLeft();
		if (myCar.getLeft() == 90) {
			done = true;
			document.onkeydown = null;
			score.textContent = "You win!";
			score.style.color = "green";
		}
	}

}

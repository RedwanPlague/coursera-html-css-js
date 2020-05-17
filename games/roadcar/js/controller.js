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
			document.addEventListener('touchstart', null, false);
			document.addEventListener('touchmove', null, false);
			document.onkeydown = null;
			score.textContent = "You win!";
			score.style.color = "green";
		}
	}

}

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

	if (done) {
		return;
	}

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
			myCar.goLeft();
			myCar.goLeft();
			myCar.goLeft();
			score.textContent = myCar.getLeft();
        } else {
			myCar.goRight();
			myCar.goRight();
			myCar.goRight();
			score.textContent = myCar.getLeft();
			if (myCar.getLeft() == 90) {
				done = true;
				document.addEventListener('touchstart', null, false);
				document.addEventListener('touchmove', null, false);
				document.onkeydown = null;
				score.textContent = "You win!";
				score.style.color = "green";
			}
        }
    } else {
        if ( yDiff > 0 ) {
			myCar.goUp();
        } else {
			myCar.goDown();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}

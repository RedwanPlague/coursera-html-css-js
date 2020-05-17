var roadHTML = "";
	var blockCount = 11;
for (var i = 0; i < blockCount; i++) {
	roadHTML += "<div></div>";
}
document.getElementById("road").innerHTML = roadHTML;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function crash(myCar, car) {
	return myCar.getTop() == car.getTop() && Math.abs(myCar.getLeft() - car.getLeft()) < 9;
}

document.querySelector("header button").onclick = function() {
	this.style.position = "absolute";
	this.style.top = "-100vh";
	document.getElementById("score-div").style.position = "static";
	document.onkeydown = checkKey;

	var blockDivs = document.querySelectorAll("#road div");
	console.assert(blockCount == blockDivs.length, "Error in making road");
	var blockCars = [];
	blockDivs.forEach(function(item, index) {
		// item.innerHTML = "<h2 style=\"text-align: center;\">" + index + "</h2>";
		var car = new Car(
			item, 
			2 + getRandomInt(0,5) * 16 + "vh",
			21 + index * 10 + "%"
		);
		blockCars.push(car);
	});

	var runner = setInterval(function() {

		blockCars.forEach(function(car, index) {
			if (!done)
				car.goLeft(true);
			if (car.getLeft() <= -10) {
				if (myCar.getLeft() >= 70) {
					car.setTop(myCar.getTop());
				}
				else {
					car.setTop( 2 + getRandomInt(0,5) * 16 );
				}
				car.setLeft(100);
			}
			if (crash(myCar, car)) {
				document.onkeydown = null;
				clearInterval(runner);
				myCar.style.background = "url(images/cute.gif)";
				myCar.style["background-size"] = "100% 100%";
				score.textContent = "Crash!";
				score.style.color = "red";
			}
		});

	}, 100);
};

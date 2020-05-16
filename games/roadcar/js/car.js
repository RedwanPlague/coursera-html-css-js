function numGetter(str, n) {
	return Number(str.substring(0,str.length-n));
}

function Car(name, topInit, leftInit) {
	this.name = name;
	this.element = document.getElementById(name); // HTML element object
	this.style = this.element.style; // style object of the element
	this.style.top = topInit;
	this.style.left = leftInit;
}

var Cp = Car.prototype;

Cp.topinc = 16;
Cp.leftinc = 1;

// ignore = true  means always make change, without check
Cp.goup = function(ignore) { 
	var top = this.style.top;
	top = numGetter(top,2);
	if (ignore || top > 2) {
		top -= Cp.topinc;
	}
	this.style.top = top + "vh";
};

Cp.godown = function(ignore) {
	var top = this.style.top;
	top = numGetter(top,2);
	if (ignore || top < 66) {
		top += Cp.topinc;
	}
	this.style.top = top + "vh";
};

Cp.goleft = function(ignore) {
	var left = this.style.left;
	left = numGetter(left,1);
	if(ignore || left > 0) {
		left -= Cp.leftinc;
	}
	this.style.left = left + "%";
};

Cp.goright = function(ignore) {
	var left = this.style.left;
	left = numGetter(left,1);
	if(ignore || left < 91) {
		left += Cp.leftinc;
	}
	this.style.left = left + "%";
};

// Cp.gohome = function() {
// 	this.style.left = "91%";
// }
// Cp.goend = function() {
// 	this.style.left = "0%";
// }


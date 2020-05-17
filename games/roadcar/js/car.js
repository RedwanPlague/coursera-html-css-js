function Car(element, topInit, leftInit) {
	this.element = element; // HTML element
	this.style = this.element.style; // style object of the element
	this.style.top = topInit;
	this.style.left = leftInit;
}

var Cp = Car.prototype;

Cp.topinc = 16;
Cp.leftinc = 1;

Cp.getTop = function() {
	var top = this.style.top;
	return Number(top.substring(0,top.length-2));
};

Cp.getLeft = function() {
	var left = this.style.left;
	return Number(left.substring(0,left.length-1));
};

Cp.setTop = function(top) {
	this.style.top = top + "vh";
};

Cp.setLeft = function(left) {
	this.style.left = left + "%";
};

Cp.atTop = function() {
	return ( this.getTop() == 2 );
};

Cp.atBottom = function() {
	return ( this.getTop() == 66 );
};

Cp.atLeftmost = function() {
	return ( this.getLeft() == 0 );
};

Cp.atRightmost = function() {
	return ( this.getLeft() == 91 );
};

// ignore = true  means always make change, without check
Cp.goUp = function(ignore) { 
	if (ignore || !this.atTop()) {
		this.setTop(this.getTop() - Cp.topinc);
	}
};

Cp.goDown = function(ignore) {
	if (ignore || !this.atBottom()) {
		this.setTop(this.getTop() + Cp.topinc);
	}
};

Cp.goLeft = function(ignore) {
	if(ignore || !this.atLeftmost()) {
		this.setLeft(this.getLeft() - Cp.leftinc);
	}
};

Cp.goRight = function(ignore) {
	if(ignore || !this.atRightmost()) {
		this.setLeft(this.getLeft() + Cp.leftinc);
	}
};


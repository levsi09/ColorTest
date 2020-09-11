var x = document.getElementById("demo");
var y = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
var z = 6

function colorChange() {
  if (z == 6) {
	z = 0;
  } else {
	z = z + 1;
  }
  x.style.color = y[z]; 
}

function Reset() {
	z = 6;
	x.style.color = "black";
}
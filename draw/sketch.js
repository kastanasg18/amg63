// for red, green, and blue color values
var r, g, b;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

  // Draw a circle
function mouseDragged() {
	strokeWeight();
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(mouseX, mouseY, 20, 20);
}

// When the user clicks the mouse
function mousePressed() {
 
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
}
function mouseWheel() {
	background (255)

}


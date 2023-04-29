class Pipe {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    
    World.add(world, this.img);
  }

  show() {
    // Set color and stroke for the pipe
    fill(255); // White fill
    stroke(0); // Black stroke
    strokeWeight(2); // Stroke weight

    // Draw a rectangle representing the pipe
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.width, this.height)
  }
}

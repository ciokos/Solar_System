let celestials = [];
function setup() {
  createCanvas(1000, 1000);
  background(0);
  loadJSON("solar.json", function(celestial_data) {
    for (let i = 0; i < celestial_data.length; i++) {
      let c = celestial_data[i];
      celestials.push(new Celestial(c.radius, i * 60, c.color, c.year, c.name));
    }
  });
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let c of celestials) {
    push();
    rotate((-frameCount * 5) / c.year + c.offset);
    c.show();
    pop();
  }
}

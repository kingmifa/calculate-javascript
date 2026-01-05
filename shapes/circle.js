const PI = Math.PI;

function circleValid(r) {
  return !isNaN(r) && r > 0;
}

function circleArea(r) {
  return PI * r * r;
}

function circlePerimeter(r) {
  return 2 * PI * r;
}

module.exports = {
  circleValid,
  circleArea,
  circlePerimeter
};

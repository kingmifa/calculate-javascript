function rectangleValid(p, l) {
  return !isNaN(p) && !isNaN(l) && p > 0 && l > 0;
}

function rectangleArea(p, l) {
  return p * l;
}

function rectanglePerimeter(p, l) {
  return 2 * (p + l);
}

module.exports = {
  rectangleValid,
  rectangleArea,
  rectanglePerimeter
};

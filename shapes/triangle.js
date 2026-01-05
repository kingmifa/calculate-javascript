function triangleArea(base, height) {
  return 0.5 * base * height;
}

function trianglePerimeter(a, b, c) {
  return a + b + c;
}
function triangleAreaValid(base,height) {
return(
!isNaN(base) && !isNaN(height) && base > 0 && height > 0);
}
function trianglePerimeterValid(a, b, c) {
  if ([a, b, c].some(v => isNaN(v) || v <= 0)) return false;
// rule triangle
return (
a + b > c && a + c > b && b + c > a
);
}
module.exports = {
  triangleArea,
  trianglePerimeter,
  triangleAreaValid,
  trianglePerimeterValid
};


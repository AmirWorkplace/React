function simple(a, b, bc) {
  var c = a + b,
    d = a - b,
    result = bc(a, b);
  return result;
}

function sum(a, b) {
  return a + b;
}

var result = `The results is : ${simple(5, 8, sum)}`;
console.log(result);

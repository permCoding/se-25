function c() {
    return 2;
}
  
function b(y) {
  var n = c();
  return n * y + 50;
}

function a(x) {
    var m = 4;
    return b(m + x);
}

console.log(a(21));

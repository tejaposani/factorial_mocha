module.exports = {
  fact: function factorial(x) {
    if (x === 0) {
      return 1;
    }
    else if (x === -1) {
      return -1;
    }
    else {
      return x * factorial( x - 1);
    }
  }
};

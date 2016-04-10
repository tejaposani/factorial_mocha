var expect = require('expect')
var factorial = require('../src/script/factorial');


describe('Factorial Tests',function() {
  it('should say factorial exists',function() {
    expect(factorial).toExist();
    expect(factorial).toNotBe(undefined);
  })

  it('should show 1 if entered zero',function() {
    expect(factorial.fact(0)).toEqual(1);
  })

  it('should show -1 if entered -1',function() {
    expect(factorial.fact(-1)).toEqual(-1);
  })

  it('should show the factorial of number',function() {
    expect(factorial.fact(5)).toEqual(120);
  })

  it('should show x... if given value is 50',function() {
    expect(factorial.fact(50)).toEqual(3.0414093201713376e+64);
  })
});

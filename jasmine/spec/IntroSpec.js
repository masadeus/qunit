describe('Hello world', function() {
  it('says hello', function() {
    expect(helloWorld()).toEqual('Hello world!');
  });
});

describe('Trying with integer', function(){
  it('a is 1000', function() {
    expect(integer()).toEqual(1000);
  });
});

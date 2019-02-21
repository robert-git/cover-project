const greeter = require( "../src/index" );

test( "should return hello message", () => {
  expect( greeter() ).toBe( "Hello, world!" );
});

var bottle = require( '../water_bottle' );
var assert = require( 'assert' );

describe ( 'Water Bottle', function() {

  beforeEach( function() {
    bottle.refill();
  })

  // 1. water bottle should be empty(X)
  it( "should be full", function() {
    assert.equal( 100, bottle.volume );
  })

  // 2. should go to 100 when filled
  it( "volume should be 100 when filled", function() {
    bottle.refill();
    assert.equal( 100, bottle.volume );
  })

  // 3. should go down by 10 when drank
  it( "volume should go down by 10 when drank", function() {
    bottle.refill();
    bottle.drink();
    assert.equal( 90, bottle.volume );
  })

  // 4. should go to 0 when emptied
  it( "volume should be 0 when emptied", function() {
    bottle.refill();
    bottle.empty();
    assert.equal( 0, bottle.volume );
  })

  // 5. should not be able to go below 0
  it( "volume should not go below 0", function() {
    bottle.empty();
    bottle.drink();
    assert.equal( 0, bottle.volume )
  })

})






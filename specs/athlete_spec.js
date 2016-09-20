// ##Water Bottle Lab Extension
// 3. Athlete should be able to run:  increasing distance, decreasing hydration.
// 4. Athlete should not move when running dehydrated: hydration at 0;
// 5. Athlete should be able to increase hydration by drinking from water bottle


var bottle = require( '../water_bottle' );
var athlete = require( '../athlete' );
var assert = require( 'assert' );

describe ('Athelete', function() {
   
  beforeEach( function() {
    athlete.hydration = 100;
    athlete.distance = 0;
  })

  it('has hydration of 100', function(){
    assert.equal(100, athlete.hydration);
  });

  it('can run increasing distance decreasing hydration', function(){
    athlete.run();
    assert.equal(1, athlete.distance);
    assert.equal(80, athlete.hydration);
  }) 

  it('cant run increasing distance decreasing hydration to 0', function(){ 
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    assert.equal(5, athlete.distance);
    assert.equal(0, athlete.hydration);
  }) 

  it('cant run when dehydrated', function(){ 
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    assert.equal(5, athlete.distance);
    assert.equal(0, athlete.hydration);
  })

  it('can rehydrate', function() {
    athlete.run();
    athlete.run();
    athlete.drink();
    assert.equal(80, athlete.hydration);
  })






})
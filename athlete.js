var athlete = {
  hydration: 100,
  distance: 0,
  run: function() {
    if (this.hydration >= 20) {
      this.hydration -= 20;
      this.distance += 1;
    } else {
      this.hydration = 0;
    }
  },
  drink: function() {
    this.hydration += 20;
  }
}
module.exports = athlete;


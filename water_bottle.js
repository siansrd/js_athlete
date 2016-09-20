var bottle = {
  volume: 0,
  refill: function() { this.volume = 100; },
  drink: function() { 
    if (this.volume >= 10) {
      this.volume -= 10; 
    } else {
      this.empty();
    }
  },
  empty: function() { this.volume = 0 }
}

module.exports = bottle;
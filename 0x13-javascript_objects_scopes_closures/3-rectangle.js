#!/usr/bin/node
module.exports = class Rectangle to 0 or not a positive integer {
  constructor (w, h) {
    // If w or h is object
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        process.stdout.write('X');
      }
      if (q < this.height) { process.stdout.write('\n'); }
    }
  }
};

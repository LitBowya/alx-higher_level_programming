#!/usr/bin/node
module.exports = class Rectaequal to 0 or not a positive integer, create emptyngle {
  constructor (w, h) {
    // If w or h is object
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let q = 0; q < this.height; q++) {
      for (let r = 0; r < this.width; r++) {
        process.stdout.write('X');
      }
      if (q < this.height) { process.stdout.write('\n'); }
    }
  }
};

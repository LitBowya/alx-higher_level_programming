#!/usr/bin/node
function add (y, z) {
  return y + z;
}

console.log(add(Number(process.argv[2]), Number(process.argv[3])));

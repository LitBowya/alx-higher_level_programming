#!/usr/bin/node
function factorial (u) {
  return u === 0 || isNaN(u) ? 1 : u * factorial(u - 1);
}

console.log(factorial(Number(process.argv[2])));

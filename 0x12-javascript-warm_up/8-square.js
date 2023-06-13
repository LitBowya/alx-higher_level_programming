#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let h = 0; h < size; h++) {
    let rowX = '';
    for (let g = 0; g < size; g++) rowX += 'X';
    console.log(rowX);
  }
}

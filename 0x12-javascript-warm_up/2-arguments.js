#!/usr/bin/node
let numArgument = process.argv.length - 2;
if (numArgument === 0) {
  console.log('No argument');
}
else if (numArgument === 1) {
  console.log('Argument found');
}
else {
  console.log('Arguments found');
}

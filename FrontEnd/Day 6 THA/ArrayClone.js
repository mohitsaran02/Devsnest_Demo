/* 2. Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]*/

const arr1 = [1, 2, 4, 0];
const arr2 = [1, 2, [4, 0]];

function array_Clone(x){
  const clone = x;
  return clone;
}

console.log(array_Clone(arr1));
console.log(array_Clone(arr2));

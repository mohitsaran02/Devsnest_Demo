/* 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]*/

const arr1 = [7, 9, 0, -2];
const arr2 = [];

function first(arr,num){
  const arr3 = [];
  if(num <= 0 || arr.length == 0){
    return arr3;
  }
  else{
    if(num > arr.length){
      num =  arr.length;
    }
    for(var i=0; i<num; i++){
      arr3.push(arr1[i]);
    }
    return arr3;
  }
}

console.log(first(arr1,1));
console.log(first(arr2,3));
console.log(first(arr1,3));
console.log(first(arr1,6));
console.log(first(arr1,-3));

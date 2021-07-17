/* 5. Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function frequent(arr){
  var map = {};
  var maxNum = 1;
  var maxElem = arr[0];
  for(var i=0; i<arr.length; i++){
    var elem = arr[i]; 
    
    if(map[elem] == null){
      map[elem] = 1;
    }
    else{
      map[elem]++;
    }
    
    if(map[elem] > maxNum){
      maxNum = map[elem];
      maxElem = elem;
    }
  }
  
  return (`${maxElem} ( ${maxNum} times )`);
}

console.log(frequent(arr1));
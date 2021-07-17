/* 4. Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

const myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));


/*function joinElement(arr){
  var ans = "";
  for(var i=0; i<arr.length; i++){
    ans += arr[i];
    if(i < arr.length-1){
      ans += ","
    }
  }
  return ans;
}

console.log(joinElement(myColor));*/

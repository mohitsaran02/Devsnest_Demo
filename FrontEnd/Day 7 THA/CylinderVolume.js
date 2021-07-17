/* 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
Try To Attempt : Difficult Level Increased*/

function cylinder(height, diameter){
    this.height = height;
    this.diameter = diameter;
  }
  
cylinder.prototype.Volume = function(){
    var radius = this.diameter/2;
    return this.height*Math.PI*radius*radius;
};
  
var cyl = new cylinder(7,4);
console.log('The Volume of the Cylinder is : ',cyl.Volume().toFixed(4));
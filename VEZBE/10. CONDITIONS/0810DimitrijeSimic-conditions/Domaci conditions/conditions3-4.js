//Dimitrije Simic domaci 08.10.2022
//3.Zadatak-1. nacin
var x=0;
var y=-1;
var z=4;

if(x>y && x>z && y>z){
  console.log(x,y,z);
}
else if(x>y && x>z && y<z){
  console.log(x,z,y);
}
else if(x<y && x>z && y>z){
  console.log(y,x,z);
}
else if(x<y && x<z && y>z){
  console.log(y,z,x);
}
else if(x<y && x<z && y<z){
  console.log(z,y,x);
}
else
{
  console.log(z,x,y);
}
//3.Zadatak-2. nacin
/*
var x=0;
var y=-1;
var z=4;
if(x>y && x>z && y>z){
console.log(Math.max(x, y, z),y, Math.min(x, y, z));
}
else if(x>y && x>z && y<z){
  console.log(Math.max(x, y, z),z, Math.min(x, y, z));
}
else
{
  console.log(Math.max(x, y, z),x, Math.min(x, y, z));
}
*/

//4.Zadatak
var a=10;
if(typeof a === 'number'){
if (a%2){
    console.log("X");
}
else
        {
          console.log("The result is "+ a/2);
        }}
else 
{
    console.log("a is not a number");
  };
//Dimitrije Simic domaci 11.10.2022
//1.Zadatak
var x=7;
var y=7;
var z=7;

if (x==y && y==z)
{
        console.log("triangle is equilateral");
}
else if(x==y || y==z ||z==x)
{   
    console.log("triangle is isosceles");
}
 else{
    console.log("triangle is scalene");
}

//2.Zadatak

var a=78;
var b=8;

console.log ("Arithmetic operations "+ a +" and " + b + " are: add ",
(a+b), ",subtract "+ (a-b), ",multiply "+ (a*b), ",divide "+(a/b),
    ",modulus "+ (a%b));
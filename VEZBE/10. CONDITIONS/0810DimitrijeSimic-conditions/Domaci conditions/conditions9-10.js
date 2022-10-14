//Dimitrije Simic domaci 08.10.2022
//9.Zadatak
var x=15;
var y=35;
var c=x+y;
if(typeof x === 'number' && typeof y === 'number'){
if (x==50){
    console.log("True");
}
else if (y==50){
    console.log("True");
}
else if (c ==50){
    console.log("True");
}
else{
    console.log("False");
}
}
else 
{
    console.log("a is not a number");
  };

//10.Zadatak

var a=401;

if( Number.isInteger(a)){
if(a<20){
    console.log("a<20");
}
else if (20<a && a<100){
    console.log("20<=>100");
}
else if (100<a && a<400){
    console.log("100<=>400");
}
else{
    console.log("a>400");
}
}
else{
    console.log("Nije u pitanju ceo broj");
}
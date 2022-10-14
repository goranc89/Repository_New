//Dimitrije Simic domaci 08.10.2022
//1.Zadatak
var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)
{
  console.log("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y<0 && z>0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }
//2.Zadatak
var a= -5;
var b= -2;
var c= -6;
var d = 0;
var e = -1;

if (a>b && a>c && a>d && a>e)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>e)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>e)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>e)
{
    console.log(d);
}
else
{
    console.log(e);
};
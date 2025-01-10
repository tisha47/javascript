let a = 5;
let b = 5;
var c = " ";
switch(a,b) {
    case (a>b): 
    c = "A is Bigger then B";
   // console.log( "A is Bigger then B");
    break;
    case (a<b) :
      c = "B is Bigger then A";
   // console.log("B is Bigger then A");
    break;
    case (a=b) :
       c = " A equal to B";
   // console.log(" A equal to B");
    break;
}
console.log(c);
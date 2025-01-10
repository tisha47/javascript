// let a = 5;
// let b = 5;
// var c = " ";
// switch(a,b) {
//     case (a>b): 
//     c = "A is Bigger then B";
//    // console.log( "A is Bigger then B");
//     break;
//     case (a<b) :
//       c = "B is Bigger then A";
//    // console.log("B is Bigger then A");
//     break;
//     case (a=b) :
//        c = " A equal to B";
//    // console.log(" A equal to B");
//     break;
// }
// console.log(c);

// function reversNumber(num){
//     if (num>=0 && num<=9){
//         return num;
//     }
//     let reversNumber = 0;
//      while(num != 0){
//         reversNumber = reversNumber * 10 + (num % 10);
//         num = Math.floor(num / 10);
//      }
//      return reversNumber;
// }
// console.log(reversNumber(321));

let a = prompt("what's your age ?");
a = Number.parseInt(a);
if (a <=0){
    alert("this is not valid");
}else if (a>0 && a<=9){
    alert("you are a kid you can not drive");
}else if(a>=9 && a<18){
    alert("you can thing for drive after 18");
}else{
    alert("you can driver");
}
console.log(a);
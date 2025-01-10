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

function reversNumber(num){
    if (num>=0 && num<=9){
        return num;
    }
    let reversNumber = 0;
     while(num != 0){
        reversNumber = reversNumber * 10 + (num % 10);
        num = Math.floor(num / 10);
     }
     return reversNumber;
}
console.log(reversNumber(321));
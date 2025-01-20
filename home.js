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
// console.log(reversNumber(4321));

// let a = prompt("what's your age ?");
// a = Number.parseInt(a);
//  value = " ";
// if (a <=0){
//     value="this is not valid";
// }else if (a>0 && a<=9){
//     value="you are a kid you can not drive";
// }else if(a>=9 && a<18){
//     value="you can thing for drive after 18";
// }else{
//     value="you can driver";
// }
// console.log(value);
 //console.log("you can ",a<18 ? "not drive":"drive");

 //let age = prompt("what's your age?");
//  if(age>10 && age<20){
//     console.log("your age between 10 to 20");
//  }else{
//     console.log("your age is not between 10 to 20");
//  }

// switch(age){
//     case '12':
//         console.log("Your age is 12");
//         break;
//     case '13':
//         console.log("your age is 13");
//         break;
//     case '14':
//         console.log("your age is 14");
//         break;
   
// }

//  let num = prompt("enter the number:");
//  let a = Number.parseInt(num);
// if(num%2 == 0){
//       console.log("this number is devided by 2");
// }else if(num % 3 == 0){
//     console.log("this number is devided by  3");
// }else{
//     console.log("this number is not devided by 2 and 3 ");
// }
//console.log(a>=18?"you are 18": "you are not 18")

// let age = 12;
// let a = age >=18? "you can drive":"you can not drive";
// console.log(a);

// let sum = 0;
// for (let i=0; i<10; i++){
//     sum += (i*10);
// }
// console.log(sum);

// let a = prompt("enter the number:");
// a = Number.parseInt(a);
// let i =" ";
// while(i<a){
//     console.log(i);
//     i++;
// }

//let sum = " ";

// for (let i = 1; i<=10 ; i++){
//     if(i%2 == 0){
//         console.log(i);
        
//     }
// }

// let n = 17;
// let isPrime = true;

// if (n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);
// let n = 17;
// let prime = true;
// console.log((n%1 == n%n)? "this is the prime " : "this is not prime");

// function findPrimeNumbers(n) {
//     const prime = [];
  
//     for (let i = 2; i <= n; i++) {
//       let isPrime = true;
  
//       for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime){
//         prime.push(i);
//       }
//     }
  
//     return prime;
//   }
//   const primeNumbers = findPrimeNumbers(1000);
  
//   console.log(primeNumbers);

// let Day = "";

// switch(new Date().getDay()){
//   case 0 :
//     Day = "Sun";
//     break;
//   case 1 :
//     Day = "Mon";
//     break;
//   case 2 :
//     Day = "Tu";
//     break;
//   case 3 :
//     Day = "We";
//     break;
//   case 4 :
//     Day = "th";
//     break;
//   case 5 :
//     Day = "fr";
//     break;
//   case 6 :
//     Day = "sa";
//     break;
// }
// console.log(Day);

// let value = " ";
// for( let i = 0; i <= 10 ; i++){
//   value += [i] + "<br> ";
//   console.log (i);
// }
// let value = "";

// const nm = ["yesha","tisha"];

// for (let i = 0; i < nm.length; i++){
//   value += nm[i];
 
// }
// nm.sort();
// console.log(value);




// const points = [40, 100, 1, 5, 25, 10];
// console.log(points);

// function myFunction1() {
//   points.sort();
//   console.log(points);
// }

// function myFunction2() {
//   points.sort(function(a, b){return a - b});
//   console.log(points);
// }

// let n = prompt("enter the value of n :");
// let i = 0;
// while (i<n){
//   console.log(i);
//   i++;
// }

// let n = prompt("enter the value of n :");
// let i = 10;
// do{
//   console.log(i);
//   i++;
// }while (i<n)

// function avg(x , y){
//   return 1+(x + y)/2;
//   console.log("Done");
// }
// let a = 3;
// let b = 2; 
// let c = 6;

// console.log("one plus avg of a and b is", avg(a,b));
// console.log("one plus avg of a and b is", avg(b,c));
// console.log("one plus avg of a and b is", avg(a,c));

// let marks = {
//   tisha : 89,
//   yesha : 76,
//   grimi : 67
// }
// // for( let i = 0; i< Object.keys(marks).length; i++){
// //   console.log("the marks of " + Object.keys(marks) [i]+ " are " + marks[Object.keys(marks)[i]]);
// // }

// for ( let i in marks){
//    console.log("the marks of " + [i] + " are " + marks[i]);
// }

// let cn = 40;
// let i ;
// while (i != cn){
// i = prompt ("Enter the correct number ");
// console.log("you have correct number entered")
// }

// const mean = (a,b,c,d) => {
//   return(a+b+c+d)/4;
// }
// console.log(mean(4,5,6,7));

// let nam = "tisha";
// console.log(nam.length);

// let boy1 = "parth";
// let boy2 = "Dhrumilsinh";
// let section = `${boy1} is friend of ${boy2}`;
// console.log(section);

// let fruit = 'apple\'s';
// console.log(fruit);

let nam = "Tisha";
console.log(nam.toLowerCase());
console.log(nam.toUpperCase());
console.log(nam.slice(2 ,4));
//console.log(nam.replace("sha","rtha"));
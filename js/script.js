//                                                      For va ternary operator

// 1-misol
// for (let i = 1; i <=50; i++) {
//     let res = ( i % 5 == 0 && i % 2 == 0)? console.log(`${i} : 3-ga va 5-ga bolinadi`)
//     : (i%5==0) ? console.log(`${i} : 5-ga bolinadigan`)
//     :(i%3==0 )? console.log( `${i} : 3-ga bolinadigan`)
//     :console.log(i);
// }

// 2-misol
// let sum=0;
// for (let i = 1; i <=100; i++) {
//     (i > 30 && i < 70) && (i % 2 === 0) ? sum += i : null;
// }
// console.log(sum);

// 3-misol
// let counter=0;
// for (let i = -20; i < 20; i++) {
//     (i>0 && i%2 != 0) ? counter++: null;

// }
// console.log(counter);

// 4-misol

// for (let i = 1; i <= 100; i++) {
// (i%7==0 || i%2==0) ? console.log(`${i} maxsus son`) : i;

// }

//                                                          Break continue

// 1-misol

// for (let i = 1; i <=100; i++) {
//     if (i>=25) {
//         break
//     }
//     console.log(i);
// }

// 2-misol

// for (let i = 1; i <=20; i++) {
//     if (i%2==0) {
//         continue
//     }
//     console.log(i);
// }

// 3-misol
// for (let i = 1; i <= 50; i++) {
//   if (i < 10) {
//     continue;
//   }
//   if (i >= 30) {
//     break;
//   }
//   console.log(i);
// }

//                                                       Switch case

// 1-misol

// let day = +prompt(`hafta raqamini kiriting `);
// switch (day) {
//   case 1:
//     console.log(`Dushanba`);

//     break;

//   case 2:
//     console.log(`Seshanba`);

//     break;

//   case 3:
//     console.log(`Chorshanba`);

//     break;

//   case 4:
//     console.log(`Payshanba`);

//     break;

//   case 5:
//     console.log(`Juma`);

//     break;

//   case 6:
//     console.log(`Shanba`);

//     break;
//   case 7:
//     console.log(`Yakshanba`);

//     break;
//   default:
//     console.log(`bunday hafta kuni yoq `);

//     break;
// }

// 2-misol

// let moon = +prompt(`oy raqamini kiriting`);

// switch (moon) {
//   case 12:
//   case 1:
//   case 2:
//     console.log(`Qish`);

//     break;

//   case 3:
//   case 4:
//   case 5:
//     console.log(`Bahor`);

//     break;

//   case 6:
//   case 7:
//   case 8:
//     console.log(`Yoz`);

//     break;

//   case 9:
//   case 10:
//   case 11:
//     console.log(`Kuz`);

//     break;
//   default:
//     console.log(`bunday oy yoq`);

//     break;
// }

// 4-misol
// let grade= +prompt(`bahoyingizmni kiriting `);
// switch (grade) {
//   case 1:
//     console.log(`Juda yomon`);

//     break;

//   case 2:
//     console.log(`Yomon`);

//     break;

//   case 3:
//     console.log(`Qoniqarli`);

//     break;

//   case 4:
//     console.log(`Yaxwi`);

//     break;

//   case 5:
//     console.log(`Alo`);

//     break;

//   default:
//     console.log(`bunday baho  yoq `);

//     break;
// }

// 4-misol
// let grade= +prompt(`tarifni kiriting kiriting `);
// switch (grade) {
//   case 1:
//     console.log(`Ekanom`);

//     break;

//   case 2:
//     console.log(`Standart`);

//     break;

//   case 3:
//     console.log(`Premium`);

//     break;

//   default:
//     console.log(`bunday tarif  yoq `);

//     break;
// }

// 5-misol
// let grade= +prompt(`meva raqamini  kiriting `);
// switch (grade) {
//   case 1:
//     console.log(`Olma`);

//     break;

//   case 2:
//     console.log(` Apelsin`);

//     break;

//   case 3:
//     console.log(`Banan`);

//     break;

//   case 4:
//     console.log(`Uva`);

//     break;

//   default:
//     console.log(`bunday meva raqami  yoq `);

//     break;
// }

// 6-misol
// let grade= +prompt(`variantni kiriting `);
// switch (grade) {
//   case 1:
//     console.log(`Parolni tiklash`);

//     break;

//   case 2:
//     console.log(`Parolni ozgartirish`);

//     break;

//   case 3:
//     console.log(`Chiqish`);

//     break;

//   default:
//     console.log(`bunday variant  yoq `);

//     break;
// }

//                                                              While. do while

// 1-misol
// while

// let i=1;
// while (i<=10) {
//     console.log(i);
//     i++;

// }

// do while
// let g=1;
// do {
//     console.log(g);
//     g++;

// } while (g<=10);

// 2-misol
//  let i=10;
// while (i>=1) {
//     console.log(i);
//     i--;

// }

// do while
// let g=10;
// do {
//     console.log(g);
//     g--;
// } while (g >= 1);

// 3-misol
// let num =+prompt(`sonni kiriting`)
//     while () {

//     }
//     console.log(num);

// 4-misol
// let i=1;

// while (i<=20) {
//     if (i % 2 == 0) {
//         console.log(i);

//     }
//     i++;

// }

//              do while
// let g=1;
// do {

//     if (g%2==0) {
//     console.log(g);
//     }
//     g++;
// } while (g<=20);

// 5-misol

//              while
// let number = +prompt("biror butun son kiriting:");

// let sum = 0;
// let counter;

// while (number > 0) {
//     counter = number % 10;
//     sum += counter;
//     number = Math.floor(number / 10);
// }

// console.log( sum);

//                                               do while

// let number = +prompt("biror butun son kiriting:"); // Foydalanuvchidan son olish

// let sum = 0;
// let counter;

// do {
//   counter = number % 10;
//   sum += counter;
//   number = Math.floor(number / 10);
// } while (number > 0);
// console.log(sum);

// 6-misol

// 6-misolga uncha tushunmadim
// let num =+prompt(`sonni kiriting`)

// while (num >= 1) {
//         num /= 2
// }
// console.log(num);

// 7-misol
// let num =+prompt(`sonni kiriting`)
// let sum = 1;
// while (num<=1) {
//         if (num%2 ==1) {
//                 sum = sum +=num;
//         }else{
//                 console.log(`toq son yoq`);
                
//         }
        
// num ++;
        
// }


// 8-misol

let num1 =+prompt(`sonni kiriitng`)
let num2 =+prompt(`sonni kiriitng`)
while (num1>=num2||num1 <=num2) {
        num1++;

}

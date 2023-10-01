console.log("TRAIN AREA");

// //               ***** ***** *****   Task E   ***** ***** *****
// // Shunday function tuzing, u bitta string argumentni qabul qilib osh stringni teskari qilib return qilsin
// // masalan: getReverse("hello") return qilsin "olleh"
// function getReverse(a) {
//     let getReverse = a
//         .split(" ")
//         .map((word) => word.split("").reverse().join(""));
//     return getReverse.join("");
// }
// const result1 = getReverse("hello");
// console.log(result1);

// const result2 = getReverse("apple");
// console.log(result2);

// // ==================================================================================================
// // ==================================================================================================

//               ***** ***** *****   Task D   ***** ***** *****
// Shunday class tuzing tuzing
// nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin,
// biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// const moment = require("moment");
// class Shop {
//     constructor(num1, num2, num3) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.pro1 = "apple";
//         this.pro2 = "oranges";
//         this.pro3 = "banana";
//     }

//     //savat
//     hadIt() {
//         console.log(`Now time is ${moment().format("HH:mm")}. You have ${
//             this.num1
//         } ${this.pro1}s,
//         ${this.num2} ${this.pro2}s and ${this.num3} ${
//             this.pro3
//         }s in your basket.`);
//         console.log(
//             "===================================================================="
//         );
//     }

//     //zakaz
//     buyIt(pro, num) {
//         switch (pro) {
//             case this.pro1:
//                 console.log(
//                     `Yesterday morning I have bought ${num} ${this.pro1}s.`
//                 );
//                 this.num1 += num;

//                 break;
//             case this.pro2:
//                 console.log(
//                     `Yesterday morning I have bought ${num} ${this.pro2}s.`
//                 );
//                 this.num2 += num;
//                 break;
//             case this.pro3:
//                 console.log(
//                     `Yesterday morning I have bought ${num} ${this.pro3}s.`
//                 );
//                 this.num3 += num;
//                 break;
//         }
//         console.log(
//             `The time is ${moment().format("HH:mm")}. There are ${this.num1} ${
//                 this.pro1
//             }s, ${this.num2} ${this.pro2}s and ${this.num3} ${
//                 this.pro3
//             }s in your basket now!`
//         );
//     }

//     //sotuv
//     sellIt(pro, num) {
//         switch (pro) {
//             case this.pro1:
//                 console.log(
//                     `Yesterday evening I have sold ${num} ${this.pro1}s.`
//                 );
//                 this.num1 -= num;

//                 break;
//             case this.pro2:
//                 console.log(
//                     `Yesterday evening I have sold ${num} ${this.pro2}s.`
//                 );
//                 this.num2 -= num;
//                 break;
//             case this.pro3:
//                 console.log(
//                     `Yesterday evening I have sold ${num} ${this.pro3}s.`
//                 );
//                 this.num3 -= num;
//                 break;
//         }
//         console.log(
//             `The time is ${moment().format("HH:mm")}. There are ${this.num1} ${
//                 this.pro1
//             }s, ${this.num2} ${this.pro2}s and ${this.num3} ${
//                 this.pro3
//             }s in your basket now!`
//         );
//     }
// }

// const shop1 = new Shop(3, 4, 5);
// shop1.hadIt("apple", "oranges", "banana");

// shop1.buyIt("apple", 10);
// shop1.buyIt("oranges", 12);
// shop1.buyIt("banana", 5);

// shop1.sellIt("apple", 2);
// shop1.sellIt("oranges", 4);
// shop1.sellIt("banana", 8);

// // ==================================================================================================
// // ==================================================================================================

//               ***** ***** *****   Task C   ***** ***** *****
// Shunday function tuzing, u 2ta string parametr ega bolsin,
// // hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
// // MASALAN checkSimilarity("laepp", "apple") true return qiladi.

// function checkWord(a, b) {
//     let x = a.split("");
//     let y = b.split("");
//     console.log(x, y);
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] === b[i])
//         }
// }

// checkWord("laepp", "apple");

// // ==================================================================================================
// // ==================================================================================================

//               ***** ***** *****   Task B   ***** ***** *****
// // Shunday function tuzing,
// u 1ta parametr ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini return qilsin.
// Masalan: getDigits("ag1aw5g6") return qilsin 3

// function countNumber(a) {
//     let count = 0;
//     numbers = "0123456789";
//     b = a.split("");
//     for (let i = 0; i < a.length; i++) {
//         if (numbers.includes(b[i])) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// const result = countNumber("1230okjoi8okj09u98yihkjai");

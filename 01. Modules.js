console.log("Core Package");
// // MODULE PACKAGES:     1.CORE   2.EXTERNAL   3.FILE

// // 1.CORE

// // setTimeout
// setTimeout(function () {
//     console.log("ishga tushdi");
// }, 5000);

// // setInterval
// let number = 0;
// setInterval(function () {
//     console.log("result", number);
//     number++;
// }, 100);

// // fs require readFileSync
// const fs = require("fs");
// const data = fs.readFileSync("./input.txt", "utf8");
// console.log(data);

// console.log("==============================================================");

// // fs require writeFileSync     ==> \n\t\t --> regular expression
// fs.writeFileSync("./input.txt", `${data} \n\t\t by Sam`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);

// 1.CORE PACKAGES - fs
// const fs = require("fs");
// fs.readFile("demo.txt", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });
// ------------------------------------------------------------------------------

// 2.CORE FUNCTION - setInterval
// setInterval(function () {
//     console.log("That works");
// }, 1000);
// ------------------------------------------------------------------------------

// 3.CORE OBJECTS (VARIABLES) - process.version
// console.log("Process", process.version);
// =============================================================================================

// const os = require("os");
// console.log("Platform:" + os.platform);
// console.log("Architechture:" + os.arch);

// const path = require("path");
// const filename = path.basename("/Users/siroj/Desktop/mastering-js/demo.txt");
// console.log(filename);
// console.log(path.extname("/Users/siroj/Desktop/mastering-js/demo.txt"));

// const readline = require("readline");
// const fs = require("fs");

// const myInterface = readline.createInterface({
//     input: fs.createReadStream("demo.html"),
// });

// myInterface.on("line", function (line) {
//     console.log("Line number" + ": " + line);
// });

// const assert = require("assert");
// // assert.ok(false, "ERROR, Custom Error");
// // assert.ok(5 > 7, "ERROR, Custom Error");
// assert.ok(true, "ERROR, Custom Error");

// // ========================       Lesson 14: External Module (Packages)      =============================

// // Module 2: External Module     (npmjs.com  ||  leanylabs.com )
// // ---------------------  1. moment -------------------------------> npm install moment --save

// // just TIME
// const moment = require("moment");
// const time = moment().format("YYYY-MM-DD");
// console.log(time);

// // with setInterval
// const moment1 = require("moment");
// setInterval(() => {
//     const time1 = moment1().format();
//     console.log(`Now time is: ${time1}`);
// }, 5000);

// // ---------------------  2. inquirer -------------------------------> npm install inquirer

// // user input - prompt (npm run start) (npm install --save inquirer@^8.0.0)
// const inquirer = require("inquirer");
// inquirer
//     .prompt([{ type: "input", name: "number", message: "Enter a number: " }])
//     .then((answer) => {
//         console.log("The number I entered: ", answer.number);
//     })
//     .catch((err) => console.log(err));

// // ---------------------  3. validator -------------------------------> npm install validator
// // check the email is validate or not:
// const validator = require("validator");
// const email1 = validator.isEmail("foo@bar.com"); // => true
// console.log("email1:", email1);

// // check the string is string or not
// const validator1 = require("validator");
// const str1 = validator1.isInt("77");
// console.log("str1:", str1);

// const str2 = validator1.isInt("abc");
// console.log("str2:", str2);

// // check the IP is IP or not
// const validator2 = require("validator");
// const ip1 = validator2.isIP("14.43.87.67");
// console.log("ip1:", ip1);

// const ip2 = validator2.isIP("14.43.87.6777777777");
// console.log("ip2:", ip2);

// // ---------------------  4. uuid ------------------------> npm install uuid  --> UUID - create universally unique identifiers
// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);

// // ==============================================   WORKING WITH THE FILE SYSTEM  =================================

// // ----------5. mkdirp -------------------------------> npm install mkdirp --> create directory + subdirectory

// // ------  6. shelljs ------> npm install shelljs --> is portable implementation of UNIX shell commands on top of the Node.js API

// // --------  7. chalk ------> npm install chalk@4.1.2 --> brings styling to the terminal
// const chalk = require("chalk");
// const log = console.log;
// log(chalk.blue("Hello") + chalk.green(" World ") + chalk.red("!"));

// // ============================================================================================================================

// // ========================       Lesson 15: File Module (Packages)        =============================

// // ***** !mportant  *****
// console.log(require("module").wrapper);
// console.log(arguments);

// // calculating example
// const calculate = require("./hisob");

// const result_add = calculate.add(3, 4);
// console.log("result 1: ", result_add);

// const result_sub = calculate.subtract(3, 4);
// console.log("result 2: ", result_sub);

// const result_mul = calculate.multiply(3, 4);
// console.log("result 3: ", result_mul);

// const result_div = calculate.divide(3, 4);
// console.log("result 4: ", result_div);

// // ------------------------     Calling and Working with "account.js" file      ------------------------------

// const Account = require("./account");

// Account.tellMeAboutClass();
// Account.tellMeTime();
// console.log("---------------------------------");

// const myAccount = new Account("Sam", 700000, 12345678910);
// myAccount.giveMeDetails();
// console.log("---------------------------------");

// // bugatti cheyron: 2.4 mln $
// myAccount.withdrawMoney(2400000);

// // ferrari: 400m $
// myAccount.withdrawMoney(400000);

// // profit from my business: 800m $
// myAccount.makeDeposit(800000);

console.log("Core Package");

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

const assert = require("assert");
// assert.ok(false, "ERROR, Custom Error");
// assert.ok(5 > 7, "ERROR, Custom Error");
assert.ok(true, "ERROR, Custom Error");

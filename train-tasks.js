// Task B:

function countNumber(a) {
    let count = 0;
    numbers = "0123456789";
    b = a.split("");
    for (let i = 0; i < a.length; i++) {
        if (numbers.includes(b[i])) {
            count++;
        }
    }
    console.log(count);
}
const result = countNumber("1230okjoi8okj09u98yihkjai");

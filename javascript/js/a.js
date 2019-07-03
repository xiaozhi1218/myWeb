var a = 1;
var b = 2;
console.log(new Date());

var arr = ["ab", 2, false, undefined];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// arr.forEach(element => {
//     console.log(element);
// });

for (element in arr) {
    console.log(element);
}
console.log(arr);
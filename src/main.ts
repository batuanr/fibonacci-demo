

let fibonacci: Array<number>;
fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i - 1];
}
let sum: number = 0;
for (let num of fibonacci){
    sum+= num;
    console.log(num);
}
console.log("sum: " + sum)


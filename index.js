let array = ['apple', 'pineapple', 'blueberry', 'strawberry'];

for(fruit of array) {
    console.log(fruit);
}

array.forEach(fruit =>{
    console.log(fruit);
});

let obj = {
    name: 'Birgihe',
    age: 17,
    color: 'Pink',
}
for(key in obj) {
    console.log(key);
    console.log(obj[key]);
}; 
//obj[key] annab väärtuse ka
//annab võtme ehk name,age ja color

let capital = array.map(fruit => {
    return fruit.toUpperCase();
});
console.log(capital);

let aFruits = array.filter(fruit => {
    return fruit.includes('a');
});
console.log(aFruits)

let nums = [1, 2, 3, 4, 5, 6, 7];
let sum = nums.reduce((total, num) => {
    return total + num;
});
console.log(sum);
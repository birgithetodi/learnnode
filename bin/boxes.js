import boxen from "boxen";

console.log(boxen('unicorn', {padding: 1}));
console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));
console.log(boxen('unicorns love rainbows', {title: 'magical', titleAligment: 'center'}));
console.log(boxen("UNICORNN", {padding: 1,borderStyle: "round"}));
console.log(boxen("pegasus?", {padding: 1,borderStyle: "bold"}));
console.log(boxen("PEGASUS CAN FLYY", {padding: 1,borderStyle: "singleDouble"}));
console.log(boxen("→ PEGASUS OR UNICORN ←", {padding: 1,borderStyle: "round"}));


console.log("+---+");
console.log("|UNI|");
console.log("+---+");

console.log("↘↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↙");
console.log("→UNIS HAVE MAGICAL HORN←");
console.log("↗↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↖");
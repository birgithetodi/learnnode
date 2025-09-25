let text = 'Hello ';
text = text + 'Biku!';
console.log(text);
text = "douscb"; //topeltjutumärgid kui ' tahad teksti sees kasutada
text = 'edcewncue';

text = "Don't use double quotes unless needed";
text = 'Don\'t use double quotes\n unless needed'; //kaldkriipsuga saab kirjutada don't-ile ' ülakoma ilma et see errori annaks
// \n annab uue rea. uue rea sümbol (new line)
console.log(text);

let name = 'Birgithe';
let age = 17;
let sexuality = 'Gay';
text = 'You\'r name is ' + name + ' and you are ' + age + ' years old and you\'re sexuality is ' + sexuality + '!';
console.log(text);

text = `Your name is ${name} 
and you are ${age} years old 
and you are ${sexuality}!`;
// `` nendega saad panna teksti mitmele reale nii et see ei läheks katki "" ja '' märkidega lähb katki
console.log(text);

text = text.toUpperCase();
console.log(text);
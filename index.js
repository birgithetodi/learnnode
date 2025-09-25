let obj = {
    name: 'Biku',
    age: 17,
    sexuality: 'Gay',
    fruits: ['pineapple', 'blueberry', 'strawberry'],
    cat: {
        age: 3,
        name: 'Kitty',
        gender: 'female',
    },
    parentName: 'Monika',
    as2sd: 'asd',
    'parent-name': 'name',
    'as2sd': 'asd',
    'some things': 'asd2',
};

console.log(obj); //annab kogu info
console.log(obj.name); //obj. ... annab teatud info
console.log(obj.fruits[2]); //annab fruits seest teise sõna mis on
console.log(obj.cat.name); //annab objekti seest ainult1 teatud asja
console.log(obj['parent-name']);
console.log(Object.keys(obj)); //teeb array kus on aiult võtmete nimed (name,sexuality,cat,age jne)

//kui panna see parentName siis see läheb errorisse kui panna "parent name", "parent-name"jne
//2asd 'asd', not allowed to start with a number
// read 13-15 pol soovitatav kuna tekivad vead
//console.log(obj.parent-name) annab errori kuna ta arvab et sa tahad lahutada parent nimest, rida 22 on õige varjant

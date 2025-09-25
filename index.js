let num = 10;
if(num > 10) {
    console.log('Bigger than 10');
} 
else if (num === 10){
    console.log('Equal with 10');
}
else {
    console.log('Smaller than 10');
}

let day = new Date("2025-09-25").getDay(); //eesti kuupäeva kirjutades 25/09/2025
console.log(day);

if(day === 1) {
    console.log('Esmaspäev');
} else if (day === 2){
    console.log('Teisipäev');
} else if (day === 3){
    console.log('Kolmapäev');
} else if (day === 4){
    console.log('Neljapäev');
} else if (day === 5){
    console.log('Reede');
} else if (day === 6){
    console.log('Laupäev');
} else if (day === 0){
    console.log('Pühapäev');
} else {
    console.log('Imelik päev');
};

switch(day) {
    case 1:
        console.log('Esmaspäev');
        break;
    case 2:
        console.log('Teisipäev');
        break;
    case 3:
        console.log('Kolmapäev');
        break;
    case 4:
        console.log('Neljapäev');
        break;
    case 5:
        console.log('Reede');
        break;
    case 6:
        console.log('Laupäev');
        break;
    case 0:
        console.log('Pühapäev');
        break;
    default:
        console.log('Imelikud päevad');
}

//else if(day === 5 || day === 6) {console.log('Pidupäev')}
//selle koodiga saab mitmele asjale sama kirjelduse panna

//case 5: case 6: console.log('Laupäev'); break;
//selle koodiga saab sama teha
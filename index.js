let array = [1, 2, 3, 'hii', true, [1, 2, 3]];
//array on nimekiri asjadest
//see nr 1 on positsioonil 0
console.log(array);
console.log(array[2]);
console.log(array[5][1]);
//[...] võtab nimekirjast ainult teatud koha
array[3] = 'Biku';
console.log(array);

console.log(array.length); //ütleb pikkuse tekstis
array.push('new value'); //loob juurde asju
array.push(1, 2, 3, 'duhew',true); //saab ka mitu asja lisada
console.log(array);

//array.fill() //lubab täita array millegagi
//array.flat() //mitme dimensioonilisest teeb ühe dimensioonilise
//array.off() //näitab mis positśioonil on
//array.join() //lisab iga tekti vahele asjamis sa tahad

let text = array.join('UwU');
console.log(text);

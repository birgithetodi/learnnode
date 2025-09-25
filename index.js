let bool = true;
console.log(bool);
bool = false;
console.log(bool);

bool = true &&  false; //ainuke võimalus kus vastus tuleks true peab see olema true && true
bool = true &&  true; //vastus true
bool = false &&  false; //vastus false
bool = false && true; //vastus false
console.log(bool);

bool = true || false; //OR, vastus on true
bool = false || true; //vastus on true
bool = false || false; //vastus on false
bool = true || true; //vastus on true
console.log(bool);

bool = !true; //NOT tehe(pole true)
console.log(bool);
bool = !false;
console.log(bool);

bool = (true && false || true) && !(false || true && false);
console.log(bool);

bool = 10 > 5;
bool = 10 < 5;
bool = 10 > 10;
bool = 10 < 10;
bool = 10 == 10;
bool = '10' == 10; //true kuna see teeb '10' tavaliseks kümneks ja see on võrdne 10
bool = '10' === 10; //vale "range võrdus" kõik peab klappima
bool = 10 >= 10;
bool = 10 <= 10;
bool = '10' != 10; //!= on mittevõrsus
bool = '10' !== 10; //range mitte võrdne tehe
console.log(bool);

bool = [] == ''; //true
bool = [1, 2, 3] == 1; //false
console.log(bool);



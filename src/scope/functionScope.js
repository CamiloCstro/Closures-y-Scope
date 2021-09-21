const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();
console.log(fruit);


//Scope local
const anotherFunction = () => {
    // var puede reasignar valores
    var x = 1;
    var x = 2;
    let y = 1;
    //let no puede ser reasignada
   // let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();
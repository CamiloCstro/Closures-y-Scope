const fruit = () => {
    //scope de bloque
    if(true){
        var fruits1 = 'Apple';
        var fruits2 = 'Banana';
        // scope local const
        const fruits3 = 'Kiwi';
        // scope local let
        let fruits4 = 'Orange';
    }
    console.log(fruits1);
    console.log(fruits2);
    // no puedo acceder a fruit3 const
    console.log(fruits3);
    // no puedo acceder a fruit4 let
    console.log(fruits4);
};

fruit();


var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);


let y = 1;
{
    let x = 2;
    console.log(y);
}
console.log(y);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();
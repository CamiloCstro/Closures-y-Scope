//Global Scope

// variable global
var hello = 'Hello';
var hello = 'hello!'
// let no y const no se pueden reasignar sus valores
let world = 'world';
let world = 'world -'
const helloWorld = 'Hello world';
const helloWorld = 'Hello world -';

const anotherFuncion = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFuncion();

const helloWorld = () => {
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar)
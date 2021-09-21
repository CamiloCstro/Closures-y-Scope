// Local Scope en bloque y funciones

const localFunc = () => {
    const hello = 'Hello world!';
    console.log(hello);
}

localFunc();
console.log(hello);


var scope = 'I am global';

// ambito lexico

const functionScope = () => {
    var scope = 'I am just a local'
    const func = () => {
        return scope
    }
    console.log(func());
};

functionScope();

function classDecorator<T extends { new (...arg:any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}


//Al poner @service ya seria un servicio, es un ejemplo, los decorators cambian el funcionamiento de tu clase o añade nuevos comportamientos

@classDecorator
class SuperClass{

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log( myClass );

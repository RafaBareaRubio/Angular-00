

export class Person {
    // En typesdcript no se suele definir ahi, puede hacerse en el constructor

    // public name: string;
    // private address: string;

    constructor( 
        public name: string,
        private address: string = 'No Address'
        ) {
        
        this.name = name;
        this.address = address;
    }
}


export class Hero {

    public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        this.person= new Person (realName);        
    }
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         //realName es el nombre tmbn y address es new York, extendiendo de persona
//         super(realName, 'New York')
//     }
// }

const tony = new Person ('Tony Stark', 'New York')
const deku = new Hero('Deku', 17, 'Midoriya');

console.log(tony)
console.log(deku)


// function addNumbers( a: number, b: number) {
//     return a + b;
// }

// const otroNumber = ( a: number, b: number) => {
//     return a + b;
// }
// const result = addNumbers(1,3)
// const result2 = otroNumber(2,3)

// console.log({ result, result2})

interface Character {
    name: string;
    hp: number;
    showHp: () => void;

}

const healCharacter = (character: Character, amount: number) => {


    character.hp +=amount;

}

const cranex = {
    name: 'Rafa',
    hp: 90,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}




healCharacter( cranex, 20);

console.log(cranex)

export{}
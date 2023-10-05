const skills: string[] = ['Push','Counter','Healing']

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character= {
    name: 'Cranex',
    hp: 100,
    skills: ['Push', 'Counter'],
};

strider.hometown = 'Utrera';

console.table(strider);

export {};
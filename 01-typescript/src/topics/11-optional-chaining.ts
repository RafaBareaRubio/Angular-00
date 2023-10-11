export interface Passenger {
    name: string;
    children ?: string [];
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Rafa',
    children: ['maribel','carmen']
}

const printChildren = ( passenger: Passenger ) => {
    
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);
    
}

printChildren(passenger1);
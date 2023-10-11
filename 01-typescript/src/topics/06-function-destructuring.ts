//El export lo añado para el siguiente file
export interface Product {
    description: string;
    price: number;
}

const phone: Product= {
    description: 'Nokia',
    price: 150
}
//Desestructuracion
const { description:descMovil, price:precioMovil } = phone;

const tablet: Product= {
    description: 'Ipad',
    price: 320
}

//Desestructuracion
const { description:descTablet, price:precioTablet } = tablet;

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

//function taxCalculation( options: TaxCalculationOptions ): number[]{
    /*Destructurado*/
export function taxCalculation( options: TaxCalculationOptions ): [number,number]{
    
    
    let total = 0;
    
    // options.products.forEach( product => {
    //     total += product.price;
    // })
    //Ahora destructurado
    options.products.forEach( ({price}) => {
        total += price;
    })

    return [total, total*options.tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax,
})

//Desestructuracion
const [total, tax2] = taxCalculation({
    products:shoppingCart,
    tax
});


console.log('Total= ',result[0])
console.log('Total= ',result[1])
//DESESTRUCTURACION CONSOLE LOG

console.log('Descripcion Movil',descMovil, ' y precio ', precioMovil)
console.log('Descripcion Tablet',descTablet, ' y precio ', precioTablet)
console.log('Total',total, ' y tax ', tax2)

// export{}
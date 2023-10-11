import{Product} from './06-function-destructuring'
import{taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Ipad',
        price: 225
    }
];

//15%
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log('Total ',total);
console.log('Tax ',tax);

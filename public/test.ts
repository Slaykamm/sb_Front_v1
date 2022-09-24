
function sum(a: number,b: number): number {
    return a+b
}

function calc(type: string, a: number, b: number): void {
    switch (type) {
        case 'sum':
            return console.log(sum(a, b))
        default:
            return console.log('wrong!')
    }
}

calc('sum', 1, 2)

function curry(fn) {
    return function curryIn(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }
        return curryIn.bind(this, ...args)
    }
}

const carried = curry(calc);
const carriedSum = carried('sum')
carriedSum(5,2)



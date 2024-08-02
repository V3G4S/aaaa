let numStr = "123.45"
let value = parseInt(numStr)
console.log(typeof value)

let number = 13.243567389719806747091356
let numberArredondado = number.toFixed(3)
console.log(numberArredondado)

let numberString = number.toString()
console.log( typeof numberString + ": " + numberArredondado)

if (Number.isNaN(number)){
    console.log('O valor é NaN')
}else{
    console.log('O valor não é NaN')
}

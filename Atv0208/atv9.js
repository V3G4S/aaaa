console.log("O produto de 7 e 8 é: "+ multiply(7, 8))
    console.log("Os primeiros 5 quadrados perfeitos são: "+ [1, 2, 3, 4, 5].map((elem) => square(elem)))
  
function multiply(a, b){
    return a*b;
}
function square(a){
    return a*a
}
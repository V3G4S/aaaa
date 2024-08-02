const hoje = new Date()
const primeiroDiaDoAno = new Date(hoje.getFullYear(), 0, 1)
const hojeFormatado = hoje.toLocaleDateString('pt-BR')
const diffEmMs = hoje - primeiroDiaDoAno
const diffEmDias = Math.floor(diffEmMs / (1000 * 60 * 60 * 24))

console.log(`Número de dias desde o primeiro dia do ano: ${diffEmDias}`)
console.log(`Data de hoje no formato DD/MM/YYYY: ${hojeFormatado}`)

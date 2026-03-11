const resultado = document.getElementById("resultado")
let frutas = ["Maçã", "Banana", "Uva"]
    frutas.push("Laranja")
    frutas.pop()
    frutas.unshift("Morango")
    frutas.shift()
console.log("Array de frutas:", frutas)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
let pares = numeros.filter(numero => numero % 2 === 0)
let quadrados = numeros.map(numero => numero * numero)
let soma = numeros.reduce((total, numero) => total + numero, 0)
let ordenados = [...numeros].sort((a, b) => a - b)
let invertidos = [...ordenados].reverse()

console.log("Números:", numeros)
console.log("Pares:", pares)
console.log("Quadrados:", quadrados)
console.log("Soma:", soma)
console.log("Ordenados:", ordenados)
console.log("Invertidos:", invertidos)

resultado.innerHTML = `
    <h2>Frutas</h2>
    <p>${frutas}</p>
    <h2>Números</h2>
    <p>Array original: ${numeros}</p>
    <p>Números pares (filter): ${pares}</p>
    <p>Números ao quadrado (map): ${quadrados}</p>
    <p>Soma total (reduce): ${soma}</p>
    <p>Ordenados (sort): ${ordenados}</p>
    <p>Invertidos (reverse): ${invertidos}</p>
   `
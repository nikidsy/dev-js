let numeros = ""

for (let i = 1; i <= 10; i++) {
    numeros += i + " "
}

document.getElementById("numeros").innerHTML = numeros

let pares = ""
let numero = 2

while (numero <= 20) {
    pares += numero + " "
    numero += 2
}

document.getElementById("pares").innerHTML = pares

let senha

do {
    senha = prompt("Digite a senha:")
} while (senha !== "1234")

alert("Senha correta!")
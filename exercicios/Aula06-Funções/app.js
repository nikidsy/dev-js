function frasePersonalizada(nome, idade) {
    return `Olá ${nome}, você tem ${idade} anos!`;
}

function dobro(numero) {
    return numero * 2;
}

function soma(a, b) {
    return a + b;
}

function verificarNumero(numero) {
    if (numero % 2 === 0) {
        return "O número é par";
    } else {
        return "O número é ímpar";
    }
}

function testarFuncoes() {

    let texto = ""

    texto += frasePersonalizada("Niki", 20) + "<br>"
    texto += "Dobro de 5: " + dobro(5) + "<br>"
    texto += "Soma de 4 + 6: " + soma(4, 6) + "<br>"
    texto += verificarNumero(7)

    document.getElementById("resultado").innerHTML = texto
}


console.log(frasePersonalizada("Nili", 20))
console.log("Dobro de 10:", dobro(10))
console.log("Soma de 8 + 2:", soma(8, 2))
console.log(verificarNumero(4))
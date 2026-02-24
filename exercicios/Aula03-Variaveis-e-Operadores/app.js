let nome = "Nikollas";
let idade = 18;
let cidade = "São Paulo";

let numero1 = 10;
let numero2 = 5;

let frase = "Meu nome é " + nome + " e tenho " + idade + " anos.";

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

let fraseTemplate = `Eu moro em ${cidade} e gosto de jogar`;

console.log(frase);
console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);
console.log(fraseTemplate);

document.getElementById("mensagem").textContent = frase;
document.getElementById("operacoes").textContent = 
    `Soma: ${soma} | Subtração: ${subtracao} | Multiplicação: ${multiplicacao} | Divisão: ${divisao}`;
document.getElementById("template").textContent = fraseTemplate;
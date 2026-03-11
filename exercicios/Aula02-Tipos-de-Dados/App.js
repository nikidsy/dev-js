// Declarando variavel
let nome = "Niko";
let idade = 18;
let ativo = true;

// Mostrando os tipos
console.log(typeof name);
console.log(typeof idade);
console.log(typeof ativo);

// Convertendo os tipos
let idadeConvertida = Number(nome);
console.log("String para Número:", idadeConvertida, "-", typeof idadeConvertida);

let idadeEmTexto = String(idade);
console.log("Número para String:", idadeEmTexto, "-", typeof idadeEmTexto);

let idadeEmBoolean = Boolean(idade);
console.log("Número para Boolean:", idadeEmBoolean, "-", typeof idadeEmBoolean);

// Diferença entre os tipos:

// - String: guarda texto.
// - Number: guarda números.
// - Boolean: guarda apenas verdadeiro (true) ou falso (false).

// Na conversão:
// - String para Number transforma texto em número.
// - Number para String transforma número em texto.
// - Number para Boolean retorna true se o número for diferente de 0
//   e false se o número for 0.
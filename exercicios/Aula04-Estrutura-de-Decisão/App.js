let idade = Number(prompt("Digite sua idade:"));

if (idade < 12) {
    alert("Você é uma Criança");
} else if (idade < 18) {
    alert("Você é um Adolescente");
} else if (idade < 60) {
    alert("Você é um Adulto");
} else {
    alert("Você é um Idoso");
}


let mes = 3;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
}


let nota = Number(prompt("Digite a nota do aluno:"));

if (nota >= 9) {
    alert("Excelente");
} else if (nota >= 7) {
    alert("Bom");
} else if (nota >= 5) {
    alert("Regular");
} else {
    alert("Reprovado");
}
const pessoa = {
  nome: "Niki",
  idade: 18,
  cidade: "São Paulo",

  apresentar: function () {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
  }
};

const carro = {
  marca: "Toyota",
  modelo: "Corolla",

  ligar: function () {
    console.log("Carro ligado");
  }
};

const loja = {
  produtos: {
    notebook: 3500,
    celular: 5000,
    fone: 150
  }
};

function testar() {
  console.log(pessoa.apresentar());
  carro.ligar();
  console.log("Produtos da loja:");
  
  for (let [produto, preco] of Object.entries(loja.produtos)) {
    console.log(`${produto}: R$ ${preco}`);
  }
}
class Cliente {
  //esses são atributos, ou propriedades (fora de classes conhecemos como variáveis)
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if(this.saldo >= valor) {
      this.saldo -= valor;
    }
  }
}

//Se eu quero criar um novo cliente eu utilizo a palavra new, gerando uma instância desta classe!
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = '11122233309';

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo += 1000;
console.log(contaCorrenteRicardo.saldo);
let valorSacado = 1200;
contaCorrenteRicardo.sacar(valorSacado);
console.log(contaCorrenteRicardo.saldo);

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = '88822233309';

console.log(cliente1, cliente2);
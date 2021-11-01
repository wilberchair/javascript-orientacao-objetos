class Cliente {
  //esses são atributos, ou propriedades (fora de classes conhecemos como variáveis)
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

  sacar(valor) {
    if(this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if(valor <= 0) return;

    this._saldo += valor;
  }
}

//Se eu quero criar um novo cliente eu utilizo a palavra new, gerando uma instância desta classe!
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = '11122233309';

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = '88822233309';

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(100);
console.log(valorSacado)
console.log(contaCorrenteRicardo);
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Se eu quero criar um novo cliente eu utilizo a palavra new, gerando uma instância desta classe!
const cliente1 = new Cliente('Ricardo', 11122233309)

const cliente2 = new Cliente('Alice', 88822233309);
console.log("conta2", cliente2);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);

contaCorrenteRicardo.transferir(200, conta2);
console.log(ContaCorrente.numeroDeContas)

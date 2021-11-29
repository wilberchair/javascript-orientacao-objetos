export class Cliente {
  //esses são atributos, ou propriedades (fora de classes conhecemos como variáveis)
  nome;
  _cpf;

  get cpf() {
    return this._cpf;
  }

  //O construtor serve para nos ajudar a passar os parametros na chamada da classe na execução dela
  //Ex new Cliente("Wilber", 35531875819)
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
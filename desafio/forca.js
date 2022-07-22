class Forca {
  palavraSecreta
  letrasChutadas = []
  palavra = []
  vidas = 6

  constructor(pSecreta) { /* Quando o new no forca executar vai jogar o valor no parametro*/
    this.palavraSecreta = pSecreta
    for (let i in this.palavraSecreta) {
      this.palavra.push('_');
    }
  }

  chutar(letra) {
    if (letra.length != 1) {
      console.log('Chute apenas uma letra')
      console.log(`Letra chutada: ${this.letrasChutadas}`)
      return
    }
    if (this.letrasChutadas.includes(letra) == true) {
      console.log('Essa letra já foi utilizada');
      return
    }
    for (let i in this.palavraSecreta) {
      if(this.palavraSecreta[i]==letra){
        this.palavra[i] = letra;
      }
    }
    this.letrasChutadas.push(letra)
    if (this.palavra.includes(letra) == false) {
      this.vidas--;
    }
    //console.log(`Letra chutada: ${this.letrasChutadas}`)
  }

  buscarEstado() {
    
    if (this.palavra.indexOf('_') == -1) {
      return 'ganhou';
    } else if (this.vidas == 0) {
      return 'perdeu';
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca

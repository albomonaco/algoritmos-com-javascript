const livros = require('./listaLivros');

let posicaoMaisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livros[posicaoMaisBarato].preco){
        posicaoMaisBarato = atual;
    }
}

console.log(`o livro mais barato custa ${livros[posicaoMaisBarato].preco} e seu título é ${livros[posicaoMaisBarato].titulo}`);
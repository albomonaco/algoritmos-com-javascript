const precosLivros = [25, 15, 30, 50, 45, 20];

let posicaoMaisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++){
    if (precosLivros[atual] < precosLivros[posicaoMaisBarato]){
        posicaoMaisBarato = atual;
    }
}

console.log(`o livro mais barato custa ${precosLivros[posicaoMaisBarato]}`);
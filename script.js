// Crie uma função (livro) que possui 3 parâmetros: 
function livro (nome, ano, autor) {
    const nomeMaior = nome.toUpperCase();
    const totalAnos = 2050 - ano;
    const frase = nome + ' por ' + autor; 

// Coloque os 3 valores acima em um objeto.    
const objeto = {
        nome: nomeMaior,
        totalAnos,
        frase,
    };
    return objeto;
}
// Execute a função e guarde o retorno da função executada em uma variável.
const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase);




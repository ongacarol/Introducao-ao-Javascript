// solução 1
//primeiro: verificar se a string existe
function verificaPalindromo(string) { 
	if (!string) return "string inexistente"; //se ela for diferente de true, retorna. É uma forma de verificar se a var vem como nula, vazia ou undefined.
	console.log(string === string.split('').reverse().join(''));
//split na string vazia ('') vai separar todas as letras, o reverse é um método do ARRAY, mas como fez o split, temos uma array. 
//Então ele vai reverter todos os caracteres e depois o .join vai juntar os elementos e formar uma string de novo.
//E aí vemos se a string revertida é igual a que recebemos inicialmente. 
}
verificaPalindromo('cat');

// solução 2

function varificaPalindromo2(string) {
	if (!string) return "string inexistente";
	if (!string.length) return;

	for (let i = 0; i < string.length / 2; i++) { //compara caracter com caracter reverso, tipo o primeiro com o último, até chegar no meio
		if (string[i] !== string[string.length - 1 - i]) { //tá dentro do colchete pq tá puxando o índice da string 
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');
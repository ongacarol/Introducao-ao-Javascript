const botao = document.querySelector('button');
console.log(botao);

function somar() {
    const div = document.querySelector('div');
    const total = Number(div.innerText) + 1; //number para transformar a string em número
    console.log(total);
    if(total < 10) {
        div.innerText = total; //para que ele some 1 ao novo total
    } else {
        console.log("Não é possível adicionar mais.")
    }
}

if (botao) {
    botao.addEventListener("click", somar);
}
 

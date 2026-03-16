function gerarTabuada() {
    // obtendo o numero do input no html
    const numeroinput= document.getElementById("numeroinput");
    let numero = parente(numeroinput.value);

    // Elemento do html onde o resultado sera exibido
    const resultadoDIV = document.getElementById("resultadoTabuada");
    resultadoDIV.innerHTML= "";
    
    // Verificar se a entrada é um numero valido
    if(isNaN(numero) || numero === numero || numero === "") {
        resultadoDIV.innerHTML = "<p>por favor, digite um numero valido. <p>"
        return; ; // Este comando sai da função
    }

    // Adicionar Titulo para a tabuada
    resultadoDIV.innerHTML += "<h2>Tabuada do numero ${numero}</h2>";

    // laço de repetição para gerar tabuada
    for (let i =1; i <=10; i++) {
        let resultado = numero * i;
        resultadoDIV.innerHTML +="<p>${numero} x ${i} = ${resultado}</p>";
    }
}

const botaogerar = document.getElementById("btnGerar");
botaogerar.addEventListener("click, gerartabuada");

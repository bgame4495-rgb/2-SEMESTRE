function btnCalcular() {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const input3 = document.getElementById("num3");  
    const painel = document.getElementById("Resultado")


// CONVERTENDO VALORES
const n1= parseFloat(input1.value);
const n2= parseFloat(input2.value);
const n3= parseFloat(input3.value);

// VALIDANDO NUMEROS
if (isNaN (n1)|| isNaN (n2)|| isNaN (n3)) {
painel.innerHTML =  `<p>ERROR</p>;`
return
}

// Calcular
const media = (n1 +n2 +n3) /3;

let mensagem
if (media >=7) {
    mensagem = `<span style="color:green;">APROVADO</span>`;
    
} else {
    mensagem = `<span style="color:red;">REPROVADO</span>`;
}


// MOSTRAR O RESULTADO
painel.innerHTML= `<p><strong>media:</strong>${media.toFixed(2)}</p>
<p><strong>Status:</strong> ${mensagem}</p>
`;


}

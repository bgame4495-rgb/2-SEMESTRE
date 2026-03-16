function btnCALCULAR() { // Nome igual ao do HTML
    // 1. Captura os elementos
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const painel = document.getElementById("resultado"); // Certifique-se que o ID no HTML é 'resultado'

    // 2. Converte os valores
    const n1 = parseFloat(input1.value);
    const n2 = parseFloat(input2.value);

    // 3. Validação
    if (isNaN(n1) || isNaN(n2)) {
        painel.innerHTML = "<p style='color:red;'>Por favor, digite números válidos.</p>";
        return;
    }

    // 4. Cálculos
    const soma = n1 + n2;
    const produto = n1 * n2; // Nome corrigido aqui
    const media = soma / 2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);

    // 5. Exibição
    painel.innerHTML = `
        <p><strong>Média:</strong> ${media}</p>
        <p><strong>Soma:</strong> ${soma}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        <p><strong>Maior número:</strong> ${maior}</p>
        <p><strong>Menor número:</strong> ${menor}</p>
    `;
}
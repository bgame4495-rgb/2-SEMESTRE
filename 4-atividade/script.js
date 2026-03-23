/**
 * @file script.js
 * @description Autos do Processo de Verificação de Capacidade Eleitoral.
 */

function btnvoto() { 
    // Coleta de evidências (Dados do Input)
    // Nota: Certifique-se de que o ID no HTML seja "txtidade"
    var idade = document.getElementById("txtidade").value;
    var resultado = document.getElementById("resultado");

    // Verificação de nulidade da petição
    if (idade === "") {
        resultado.innerHTML = "STATUS: AGUARDANDO DADOS.";
        resultado.style.color = "gray";
        return;
    }

    var idadeNum = parseInt(idade);

    // --- ANÁLISE DO MÉRITO ELEITORAL ---

    if (idadeNum < 16) {
        // MENORIDADE ABSOLUTA
        resultado.innerHTML = "SENTENÇA: VOTO NEGADO (IMPEDIMENTO LEGAL)";
        resultado.className = "resultado-negado"; 
    } 
    else if ((idadeNum >= 16 && idadeNum < 18) || idadeNum > 70) {
        // CAPACIDADE FACULTATIVA
        resultado.innerHTML = "PARECER: VOTO OPCIONAL (FACULTATIVO)";
        resultado.className = "resultado-opcional";
    } 
    else {
        // PLENA CAPACIDADE OBRIGATÓRIA
        resultado.innerHTML = "VEREDITO: VOTO OBRIGATÓRIO (DEFERIDO)";
        resultado.className = "resultado-obrigatorio";
    }
}
function btnvoto() { 
    var idade = document.getElementById("txtidade").value;
    var resultado = document.getElementById("resultado");
    if (idade < 16) {
        resultado.innerHTML = "VOTO NEGADO";
    } else if (idade >= 16 && idade < 18 || idade > 70) {
        resultado.innerHTML = "VOTO OPCIONAL";
    }   else {
        resultado.innerHTML = "VOTO OBRIGATÓRIO";
    }

}                       

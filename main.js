

function faixaIsento(base) {
    return 0;
}


function faixa7_5(base) {
    return base * 0.075 - 169.44;
}


function faixa15(base) {
    return base * 0.15 - 381.44;
}


function faixa22_5(base) {
    return base * 0.225 - 662.77;
}


function faixa27_5(base) {
    return base * 0.275 - 896.00;
}


function calcularImposto(salario, deducoes) {
    let base = salario - deducoes;
    let imposto = 0;


    if (base <= 2259.20) {
        imposto = faixaIsento(base);
    } else if (base <= 2826.65) {
        imposto = faixa7_5(base);
    } else if (base <= 3751.05) {
        imposto = faixa15(base);
    } else if (base <= 4664.68) {
        imposto = faixa22_5(base);
    } else {
        imposto = faixa27_5(base);
    }


    if (imposto < 0) imposto = 0;
    return imposto;
}




function calcularAliquotaEfetiva(salario, imposto) {
    return (imposto / salario) * 100;
}




document.getElementById("botaoCalcular").addEventListener("click", function() {
    const salario = parseFloat(document.getElementById("rendimento").value) || 0;
    const deducoes = parseFloat(document.getElementById("deducoes").value) || 0;


    const imposto = calcularImposto(salario, deducoes);
    const aliquota = calcularAliquotaEfetiva(salario, imposto);


    document.getElementById("baseCalculo").value = (salario - deducoes).toFixed(2);
    document.getElementById("imposto").value = imposto.toFixed(2);
    document.getElementById("aliquotaEfetiva").value = aliquota.toFixed(2) + "%";
});



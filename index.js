function calcularPagoTotalYCantidadAPagar(montoPrestamo, plazoLiquidacion, frecuenciaPago) {
    // Calcular intereses
    var intereses = montoPrestamo * 0.10;
    
    // Calcular total a pagar
    var totalPagar = montoPrestamo + intereses;
    
    // Calcular cantidad a pagar según la frecuencia de pago
    var cantidadPagar;
    switch(frecuenciaPago) {
        case "Mensual":
            cantidadPagar = totalPagar / plazoLiquidacion;
            break;
        case "Quincenal":
            cantidadPagar = totalPagar / (plazoLiquidacion * 2);
            break;
        case "Semanal":
            cantidadPagar = totalPagar / (plazoLiquidacion * 4);
            break;
    }

    // Devolver los resultados
    return { totalPagar: totalPagar, cantidadPagar: cantidadPagar };
}

function simularPrestamo() {
    var loanAmount = parseInt(document.getElementById("loanAmount").value);
    var term = parseInt(document.getElementById("term").value);
    var paymentFrequency = document.getElementById("paymentFrequency").value;

    var result = calcularPagoTotalYCantidadAPagar(loanAmount, term, paymentFrequency);
    
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h3>Resultados:</h3>";
    resultDiv.innerHTML += "<p>Cantidad del Préstamo: $" + loanAmount + "</p>";
    resultDiv.innerHTML += "<p>Plazo para Liquidar: " + term + " meses</p>";
    resultDiv.innerHTML += "<p>Frecuencia de Pago: " + paymentFrequency + "</p>";
    resultDiv.innerHTML += "<p>Intereses: $" + (result.totalPagar - loanAmount).toFixed(2) + "</p>";
    resultDiv.innerHTML += "<p>Total a pagar: $" + result.totalPagar.toFixed(2) + "</p>";
    resultDiv.innerHTML += "<p>Cantidad a pagar: $" + result.cantidadPagar.toFixed(2) + "</p>";
}
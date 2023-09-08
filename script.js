document.getElementById("convertBtn").addEventListener("click", function() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var inputUnit = document.getElementById("inputUnit").value;
    
    if (!isNaN(inputTemp)) {
        var resultTemp, resultUnit;
        
        if (inputUnit === "celsius") {
            resultTemp = (inputTemp * 9 / 5) + 32;
            resultUnit = "Fahrenheit";
        } else {
            resultTemp = (inputTemp - 32) * 5 / 9;
            resultUnit = "Celsius";
        }
        
        document.getElementById("resultTemp").value = resultTemp.toFixed(2);
        document.getElementById("resultUnit").textContent = resultUnit;
    } else {
        document.getElementById("resultTemp").value = "";
        document.getElementById("resultUnit").textContent = "";
    }
});

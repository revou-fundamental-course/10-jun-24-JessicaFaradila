function convertToCelsius() {
    var valNum = parseFloat(document.getElementById("inputFahrenheit").value);
    if (!isNaN(valNum)) {
      var celsius = ((valNum - 32) / 1.8).toFixed(2);
      document.getElementById("inputCelsius").value = celsius;
      document.getElementById("calculationMethod").value = `${valNum}°F - 32) / 1.8 = ${celsius}°C`;
    }
  }
  
  function convertToFahrenheit() {
    var valNum = parseFloat(document.getElementById("inputCelsius").value);
    if (!isNaN(valNum)) {
      var fahrenheit = ((valNum * 1.8) + 32).toFixed(2);
      document.getElementById("inputFahrenheit").value = fahrenheit;
      document.getElementById("calculationMethod").value = `${valNum}°C * (9/5) + 32 = ${fahrenheit}°F`;
    }
  }
  
  function resetFields() {
    document.getElementById("inputFahrenheit").value = '';
    document.getElementById("inputCelsius").value = '';
    document.getElementById("calculationMethod").value = '';
  }

function convertToCelsius() {
    var valNum = parseFloat(document.getElementById("inputFahrenheit").value);
    if (!isNaN(valNum)) {
      document.getElementById("inputCelsius").value = ((valNum - 32) / 1.8).toFixed(2);
    }
  }
  
  function convertToFahrenheit() {
    var valNum = parseFloat(document.getElementById("inputCelsius").value);
    if (!isNaN(valNum)) {
      document.getElementById("inputFahrenheit").value = ((valNum * 1.8) + 32).toFixed(2);
    }
  }
  
  function resetFields() {
    document.getElementById("inputFahrenheit").value = '';
    document.getElementById("inputCelsius").value = '';
  }

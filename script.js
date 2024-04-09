<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Calculadora de IMC</title>
</head>
<body>

<h2>Calculadora de IMC</h2>

<form id="imcForm">
  <label for="peso">Peso (kg):</label>
  <input type="number" id="peso" name="peso" required><br><br>
  
  <label for="altura">Altura (metros):</label>
  <input type="number" id="altura" name="altura" step="0.01" required><br><br>
  
  <button type="submit">Calcular
</form>

<div id="resultado"></div>

<script>
// Função para calcular o IMC
function calcularIMC() {
  // Obtém os valores de peso e altura do formulário
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  
  // Calcula o IMC
  var imc = peso / (altura * altura);
  
  // Exibe o resultado
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2);
}
// Adiciona um evento de "enviar" ao formulário para chamar a função de cálculo de IMC
document.getElementById('imcForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão
  calcularIMC(); // Chama a função para calcular o IMC
});
</script>

</body>
</html>

function calcularPorcentaje(valor) {
  const resultado = valor / 100;
  return resultado;
}


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formDano');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const talent = parseInt(document.getElementById('talent').value);
    const atkp = parseInt(document.getElementById('atkp').value);
    const crt = parseInt(document.getElementById('crt').value);
    const crd = parseInt(document.getElementById('crd').value);
    const dmgb = parseInt(document.getElementById('dmgb').value);
    const lvlp = parseInt(document.getElementById('lvlp').value);
    const lvle = parseInt(document.getElementById('lvle').value);
    const re = parseInt(document.getElementById('re').value);
  
    const suma = calcularPorcentaje(talent) *(atkp * (1 + calcularPorcentaje(crt) * calcularPorcentaje(crd))*(1 + calcularPorcentaje(dmgb))*((lvlp + 100)/((lvlp + 100)+(lvle + 100)*(1-re))));
  
    const danoText = document.getElementById('dano');
    danoText.textContent = suma;
  });
})


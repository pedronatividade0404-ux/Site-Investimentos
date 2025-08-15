let grafico = null;

function calcular() {
  const valorInicial = parseFloat(document.getElementById("valorInicial").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;
  const tempo = parseInt(document.getElementById("tempo").value);

  if (isNaN(valorInicial) || isNaN(taxa) || isNaN(tempo)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  let valores = [];
  let labels = [];

  for (let mes = 0; mes <= tempo; mes++) {
    let valor = valorInicial * Math.pow(1 + taxa, mes);
    valores.push(valor.toFixed(2));
    labels.push(`Mês ${mes}`);
  }

  document.getElementById("resultado").textContent =
    `Valor final: R$ ${valores[valores.length - 1]}`;

  const ctx = document.getElementById("grafico").getContext("2d");

  if (grafico) {
    grafico.destroy();
  }

  grafico = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Crescimento do investimento",
        data: valores,
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
        fill: true,
        tension: 0.3
      }]
    }
  });
}

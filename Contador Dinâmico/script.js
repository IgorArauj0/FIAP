let contador = 0;

  function aumentar() {
    contador++;
    document.getElementById("numero").innerText = contador;
  }

  function diminuir() {
    contador--;
    document.getElementById("numero").innerText = contador;
  }
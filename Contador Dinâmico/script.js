let contador = 0;

function aumentarContador() {
   contador++;
   document.getElementById("numero").innerText = contador;
} 
// innerText = Utilizada para alterar atualizar o valor do elemento HTML, no caso o valor do contador.
function diminuirContador() {
   contador--;
   document.getElementById("numero").innerText = contador;
}


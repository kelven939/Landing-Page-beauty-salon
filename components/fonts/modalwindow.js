// Obtém a referência do link
var contactLink = document.getElementById("contactLink");

// Obtém a referência do modal
var modal = document.getElementById("myModal");

// Obtém a referência do elemento de fechar (x)
var closeBtn = document.getElementsByClassName("close")[0];

// Define o evento de clique no link
contactLink.onclick = function() {
  modal.style.display = "block";
};

// Define o evento de clique no botão de fechar (x)
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

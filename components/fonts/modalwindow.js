// Obtém a referência do link "Contactos"
var contactLink = document.getElementById("contactLink");

// Obtém a referência do modal de Contactos
var contactModal = document.getElementById("contactModal");

// Obtém a referência do link "Serviços"
var servicesLink = document.getElementById("servicesLink");

// Obtém a referência do modal de Serviços
var servicesModal = document.getElementById("servicesModal");

// Obtém a referência do elemento de fechar (x) do modal
var closeBtns = document.getElementsByClassName("close");

// Define o evento de clique no link "Contactos"
contactLink.onclick = function() {
  contactModal.style.display = "block";
};

// Define o evento de clique no link "Serviços"
servicesLink.onclick = function() {
  servicesModal.style.display = "block";
};

// Define os eventos de clique nos botões de fechar (x)
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = "none";
  };
}

// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

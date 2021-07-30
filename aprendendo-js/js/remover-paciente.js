var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(e){
  e.target.parentNode.classList.add('deletaPaciente');

  setTimeout(function(){
    e.target.parentNode.remove();
  }, 700)
});
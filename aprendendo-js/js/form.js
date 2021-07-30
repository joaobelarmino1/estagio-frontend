var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  
  var paciente = obtemPacienteDoFormulario(form);

  

  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
  }

 
  adicionaPacienteNaTabela(paciente);
  form.reset();
  document.querySelector("#mensagem-erro").innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    li.classList.add("badge-erro");
    ul.appendChild(li);
  });

}

function obtemPacienteDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    altura: form.altura.value,
    peso: form.peso.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd = montaTd(paciente.nome, "info-nome");
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura , "info-altura");
  var gorduraTd = montaTd(paciente.gordura , "info-gordura");
  var imcTd = montaTd(paciente.imc , "info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length <= 0) erros.push("Informe o nome");
  if(!validaPeso(paciente.peso)) erros.push("Peso inválido");
  if(paciente.gordura.value < 0 || paciente.gordura.value >= 100) erros.push("Gordura inválida");
  if(paciente.gordura.length == 0) erros.push("Informe a gordura");
  if(paciente.peso.length == 0) erros.push("Informe o peso");
  if(paciente.altura.length == 0) erros.push("Informe a altura");
  if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

  return erros;
}
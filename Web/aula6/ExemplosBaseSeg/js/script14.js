$("#button1").click(gravarDados);
$("#button2").click(carregarDados);
$("#button3").click(apagarDados);

function gravarDados() {
  localStorage.setItem("rgm",$("#rgm").val()); // rmg 1 é o nome da variavel para consulta posterior, rgm2(#rgm) é a tag de entrada de dados
  localStorage.setItem("nome",$("#nome").val());
  limparCampos();
}

function carregarDados() {
   if(localStorage.length > 0){
       $("#rgm").val(localStorage.getItem("rgm"));
       $("#nome").val(localStorage.getItem("nome"));
   }
}

function apagarDados() {
   if(localStorage.length > 0){
       localStorage.clear(); // comando clear para apagar o localStorage
   }
}

function limparCampos() {
    $("#rgm").val("");
    $("#profissao").val("");
    $("#nome").val("");
    $("#cpf").val("");
} 
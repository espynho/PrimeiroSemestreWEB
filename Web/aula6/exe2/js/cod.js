"use strict";
let url = "dados.xml";
let saida = "";
let i = 0;
saida += "<table border='0'>"
$.ajax(url)
.done(function (xml){
    $(xml).find("usuario").each(function(){
        //$("#saida").append(
            //$(this).attr() //+
               saida += "<tr><td class='caixa'>";
               saida += $(this).find("foto").text()+`<img src='/aula6/exe2/img/${i}.png'>`
               saida += "<p class='nome'>"+$(this).find("nome").text()+"</p>"
               saida += "CPF: "+$(this).find("CPF").text()+"<br>"
               saida += "RG: "+$(this).find("RG").text()+"<br>"
               saida += "Data de nacimento: "+ $(this).find("data_de_nascimento").text()+"<br>"
               saida += "<p class='nome'>Endereço:</p>"
               saida += $(this).find("logradouro").text()+" - "
               saida += $(this).find("numero").text()+"<br>"
               saida += $(this).find("cidade").text()+" - "
               saida += $(this).find("estado").text()+"<br>"
               saida += "Telefone fixo: "+$(this).find("telefone").text()+"<br>"
               saida += "Celular: "+$(this).find("celular").text()+"<br>"
               saida += "Email: "+$(this).find("email").text()+"<br>"
               saida += "<p class='nome'>Dados Bancários:</p>"
               saida += "Banco: "+$(this).find("banco").text()+"<br>"
               saida += "Agencia: "+$(this).find("agencia").text()+" - "
               saida += "Conta: "+$(this).find("numero_da_conta").text()+"<br>"
               saida += "Renda: "+$(this).find("renda").text()+"<br>"
               saida += "</td></tr>"
               i++;
           // );
        });saida +="</table>";
        $("#saida").append(saida);
    })
    .fail(function(){
        alert("Deu errado")
    });
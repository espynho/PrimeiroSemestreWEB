"use strict";
// ====================== calculo =====================
function calculoImposto(){
    let ir ;
    let salario = Number(document.querySelector("#cx_salario").value) ;
    if(salario < 1434){
        document.querySelector("#cx_resultado").value = "Isento" ;
    }else{
        if(salario >= 1434 && salario < 2150){
            ir = salario * 0.075 ;
            document.querySelector("#cx_resultado").value = ir ;
        }else{
            if(salario >= 2150 && salario < 2866){
                ir = salario * 0.15 ;
                document.querySelector("#cx_resultado").value = ir ;   
            }else{
                if(salario >= 2866 && salario < 3582){
                    ir = salario * 0.225 ;
                    document.querySelector("#cx_resultado").value = ir ;
                }else{
                    if(salario >= 3582){
                        ir = salario * 0.275 ;
                        document.querySelector("#cx_resultado").value = ir ;
                    }
                }
            }
        }
    }

    //else{alert("maior");}
    //alert(salario);
}
// ====================== botão =======================
document.querySelector("#btn0").addEventListener("click", function(){
    calculoImposto();
})
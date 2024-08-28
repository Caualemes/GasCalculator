// função de validação das informações && calculo //
    
function calcular(){
    let precoGas = document.getElementById('precoGas').value 
    let autonomiaGas = document.getElementById('autonomiaGas').value
    let precoEtanol = document.getElementById("precoEtanol").value
    let autonomiaEtanol = document.getElementById("autonomiaEtanol").value
    let consumoGas = precoGas / autonomiaGas
    let consumoEtanol = precoEtanol / autonomiaEtanol
    
    if (precoGas == '' || autonomiaGas == '' || precoEtanol == '' || autonomiaEtanol == ''){
        alert("Preencha Todos os Campos!")
    }
    else if(consumoGas < consumoEtanol){
        document.getElementById("resultado").innerHTML = 'O custo por Km da Gasolina é de: '+consumoGas.toFixed(2)+' e o custo por Km do Etanol: '+consumoEtanol.toFixed(2)+'. Portanto, Gasolina Compensa Mais!'
    }
    else if(consumoGas == consumoEtanol) {
        document.getElementById("resultado").innerHTML = 'O custo por Km da Gasolina é de: '+consumoGas.toFixed(2)+' e o custo por Km do Etanol: '+consumoEtanol.toFixed(2)+'. Ambos possuem o mesmo custo/benefício!'
    }  
    else{
        document.getElementById("resultado").innerHTML = 'O custo por Km da Gasolina é de: '+consumoGas.toFixed(2)+' e o custo por Km do Etanol: '+consumoEtanol.toFixed(2)+'. Portanto, Etanol Compensa Mais!'
    
    return precoEtanol, autonomiaEtanol, precoGas, autonomiaGas

    } 

}


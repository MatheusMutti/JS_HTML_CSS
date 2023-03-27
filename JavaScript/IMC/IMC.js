function calcular_imc() {
    let peso = document.querySelector('input#peso').value
    let altura = document.querySelector('input#altura').value
    let imc = (peso / (altura * altura)).toFixed(2)
    var resultado = document.querySelector('div#resultado')
    var dica = document.querySelector("div.dica")

    if (peso == ""){
        resultado.innerHTML = 'Digite corretamente os dados.'
    }
    if (imc < 20) {
        resultado.innerHTML = `Seu índice é de ${imc}, você está abaixo do peso.`
        dica.innerHTML = 'Dica! Procure comer a cada 3 horas.'
    }else if (imc == 20 && imc < 25) {
        resultado.innerHTML = `Seu índice é de ${imc}, seu peso é ideal.`
        dica.innerHTML = 'Parabéns! Mantenha os seus hábitos alimentares.'
    }else (imc >= 25); {
        resultado.innerHTML = `Seu índice é de ${imc}, você está acima do peso.`
        dica.innerHTML = 'Dica! Procure comer mais devagar respeitar a saciedade. '
        }
}
    
    


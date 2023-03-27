function contador() {
    res.innerHTML = ""
    var text = document.getElementById('texto')
    var frequencia = document.getElementById('frequencia')
    var freq = Number(frequencia.value)
    var final = Number(text.value)
    
    if (final == ""){
        res.innerHTML = `Digite corretamente`
        }else if (freq == ""){
        res.innerHTML = `Digite corretamente`
        } else {    
        var inicial = 0
        
        do {
            inicial += freq;   
            res.innerHTML += `${inicial} `
        } while (inicial < final);
    } 
}
function tabuada() {
    tab.innerHTML = ""
    var num = document.getElementById('num')
    var num = Number(num.value)
    var mult = 0 
    if (num == ""){
        var num = 1
    }
    while (mult <= 10) {
        var resultado = num * mult;
        tab.innerHTML += (`${num} x ${mult} = ${resultado}<br>`)
        mult ++
        
        
    }
}
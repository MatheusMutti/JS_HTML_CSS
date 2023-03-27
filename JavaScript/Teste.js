
function define_salario ()

    var salario = document.getElementById('valor')
    if (salario <= 300) {
        var salario = salario + (salario ** 0.15)
    }else{
        var salario = salario + (salario ** 0.075)
    }

    res.innerHTML = (`Seu novo salário é de ${salario}`)
const num_list = []; //creating array

function add_num() {
    let new_num = document.getElementById("num").value
    if (new_num == 0 || new_num == ""){
        window.alert("Digite o número corretamente")
        }else if (new_num > 100 || new_num <0) {
            window.alert("Digite o número corretamente")    
        }else{
            new_num = Number(new_num)
            num_list.push(`${new_num}`);
            tab.innerHTML += `Valor ${new_num} adicionado.` + "<br>"; 
    }
}
function finalizar() {

    stats.innerHTML = ""

    num_list.sort();
    min_num = num_list[0] //valor mínimo
    num_list.reverse();
    max_num = num_list[0] //valor máximo
    let len = num_list.length; //qtde de itens
    
    let median = 0;
    let total = 0;
        for (let x in num_list) {
            total += Number(num_list[x]); //calculando valor total
        median = (total / 2); // calculando a média
            
    }


            
    stats.innerHTML += `
    
    O total de números cadastrados foi de ${len}.` + `<br>` +

    `O maior valor foi ${max_num}.` + `<br>` +

    `O menor valor foi ${min_num}.` + `<br>` +

    `A soma dos valores foi de ${total}.` + `<br>` +

    `A média dos valores foi de ${median}.`
    
    
}
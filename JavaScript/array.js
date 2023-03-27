let num = [5, 6, 7, 8]

console.log(num)

for (var x=0; x<num.length; x++){
    console.log(`A posição ${x} tem o calor ${num[x]}`)

}


for (let x in num) {
    console.log(`${num[x]}`)
}
    
let w = num.indexOf(8)
console.log(`${w}`)
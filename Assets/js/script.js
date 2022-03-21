// declaraçãod e variavéis
var nome = 'Wisley Alves'
let idade = 28
const sexo = 'M'

// imprimir no console
console.log(nome)

const comparaIdade = function (idade){
    let idadeMax = 30
    let op = 3
    console.log('> ', sexo)

    if (idade <= idadeMax ){
        console.log('Idade é menor ', idadeMax )
        console.log(`Idade é menor que ${idadeMax}`)
    } else {
        console.log('Idade é maior ' + idadeMax)
    }
    
    switch(op){
        case 1:
            console.log('Caso 1')
        break
        case 2:
            console.log('Caso 2')
        break

        default:
            console.log('Default')
    }

}

const repeticao = function () {
    for(let i = 0; i < 10; i++){
        console.log('> ', i)
    }
}



const inicio = function () {
    repeticao()    
}

inicio()


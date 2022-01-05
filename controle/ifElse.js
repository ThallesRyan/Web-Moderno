function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

//Se tiver apenas uma variável, tranforma ela em verdadeiro ou falso
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...'+ valor)
    }

}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

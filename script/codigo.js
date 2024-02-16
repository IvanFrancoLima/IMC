var inicio = window.document.querySelector('a#inicio')
var masculino = window.document.querySelector('input#masculino')
var feminino = window.document.querySelector('input#feminino')
var calculo = window.document.querySelector('input#btn_calcular')
var imc = []
var sexo = ''

masculino.addEventListener('click',btn_masc)
feminino.addEventListener('click',btn_fem)
calculo.addEventListener('click',calcular)
inicio.addEventListener('click',iniciar)

function iniciar(){
    let resultado = window.document.querySelector('section#resultado')
    let formulario = window.document.querySelector('section#calculo')

    formulario.style.display='block'
    resultado.style.display='none'
}

function btn_masc(){
    masculino.style.background='cyan'
    masculino.style.color='white'
    sexo = 'masculino'

    feminino.style.background ='rgba(255, 30, 0, 0.096)'
    color='rgba(0, 0, 0, 0.582)'
}

function btn_fem(){
    feminino.style.background='red'
    feminino.style.color='white'
    
    masculino.style.background='rgba(0, 255, 255, 0.096)'
    masculino.style.color='rgba(0, 0, 0, 0.582)'
    sexo = 'feminino'
}

function calcular(){
    let peso = Number(window.document.querySelector('input#peso').value)
    let altura = Number(window.document.querySelector('input#altura').value)
    let msg = window.document.querySelector('p#msg')
    let resultado = window.document.querySelector('section#resultado')
    let formulario = window.document.querySelector('section#calculo')

    if(peso == '' || altura == ''){
        window.alert('Preencha os campos para prosseguir')
    }else if(altura<1.20 || peso<20){
        window.alert('Os valores inseridos são muito baixos')
    }else if(sexo ==''){
        window.alert('Escolha o seu sexo')
    }else{
        imc.push(sexo)
        imc.push(peso/(altura*altura))
        formulario.style.display='none'
        resultado.style.display='block'

        if(imc[0] =='masculino'){
            if (imc[1]<18.5){
                msg.innerHTML = `Calculamos o seu IMC que resultou em ${imc[1].toFixed(2)}  e infelizmente você é um homem que está <strong>abaixo</strong> do seu peso ideal`
            }else if(imc[1]<24.99){
                msg.innerHTML = `Calculamos o seu IMC que resultou em ${imc[1].toFixed(2)}  e felizmente você é um homem que está no peso <strong>ideal</strong>`
            }else if(imc[1]<29.99){
                msg.innerHTML = `Calculamos o seu IMC que resultou em ${imc[1].toFixed(2)}  e infelizmente você é um homem que está com <strong>sobrepeso</strong>`
            }else{
                msg.innerHTML = `Calculamos o seu IMC que resultou em ${imc[1].toFixed(2)}  e infelizmente você é um homem que está <strong>Obeso</strong>`
            }
        }else{
            if (imc[1]<18.5){
                msg.innerHTML = `Calculamos o seu IMC que resultou em ${imc[1].toFixed(2)}  e infelizmente você é uma mulher que está <strong>abaixo</strong> do seu peso ideal`
            }else if(imc[1]<24.99){
                msg.innerHTML = `Calculamos o seu IMC que resultou em ${imc[1].toFixed(2)}  e felizmente você é uma mulher que está no peso <strong>ideal</strong>`
            }else if(imc[1]<29.99){
                msg.innerHTML = `Calculamos o seu IMC que resultou em ${imc[1].toFixed(2)}  e infelizmente você é uma mulher que está com <strong>sobrepeso</strong>`
            }else{
                msg.innerHTML = `Calculamos o seu IMC que resultou em ${imc[1].toFixed(2)}  e infelizmente você é uma mulher que está <strong>Obeso</strong>`
            }
        }       
    }
}
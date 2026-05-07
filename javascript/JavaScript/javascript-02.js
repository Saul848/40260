// let b1 = document.getElementById("b1")
// let b2 = document.getElementById("b2")
// let b3 = document.getElementById("b3")
// let b4 = document.getElementById("b4")
// let b5 = document.getElementById("b5")
// let b6 = document.getElementById("b6")
// let b7 = document.getElementById("b7")
// let b8 = document.getElementById("b8")
// let b9 = document.getElementById("b9")
// let b0 = document.getElementById("b0")

let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)){
        const boton = botones[key];
        if(boton.className != "operadores"){
            boton.addEventListener("click", pintar)
            //console.log(boton)
        }else{
            boton.addEventListener("click", pintar2)
            //console.log(boton)
        }
        
    }
}

function pintar(e){
    console.log(e.target.innerText)
    resultado.value= e.target.innerText
}

let operadores = document.getElementsByClassName("operadores")
for (const key in operadores){
    if(Object.prototype.hasOwnProperty.call(operadores, key)){
        const boton = operadores[key];
        boton.addEventListener("click", pintar2)
    }
}

function pintar2(e){
    console.log(e.target.innerText)
    if(e.innerText =="+"){
        suma()
    }
}

let prm1
let prm2
function suma(){
    prm1 = resultado.value
    resultado.value =""
}

function igual(){
    prm2 = resultado.value
    resultado.value = prm1 + prm2
}
let pantalla = 'pantalla-1'

function getPantalla(event) {
    pantalla = event.srcElement.id
}
function asignarNumero(event) {
    document.getElementById(pantalla).value += event.srcElement.value
}

function calcular(){
    console.log('calculando')
    let valor1 = Number(document.getElementById('pantalla-1').value)
    let valor2 = Number(document.getElementById('pantalla-2').value)

    let propina = valor1 * (valor2/100)

    document.getElementById('propina').innerHTML = `Propina: ${propina}` 
    document.getElementById('total').innerHTML = `Total a Pagar: ${valor1 + propina}`
}

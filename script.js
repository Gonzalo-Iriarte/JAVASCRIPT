
let monto, moneda, monedaDevolucion

const uru = 1
const dolar = 40
const euro = 41.82
const arg = 0.22
const real = 7.7
const libra = 48.8
const franco = 41.6

console.log("CAMBIO CODER UY")

do {
    monto = parseFloat(prompt("Ingrese el monto que desea cambiar"))
    moneda = parseInt (prompt ("Elija el tipo de moneda del dinero que usted tiene, ingrese 1 para peso argentino, 2-peso uruguayo, 3-dólares, 4-euro, 5-real, 6-libra esterlina, 7-franco suizo"))
    monedaDevolucion = parseInt(prompt("¿A qué moneda desea que le cambiemos su dinero? Ingrese 1 para peso argentino, 2-peso uruguayo, 3-dólares, 4-euro, 5-real, 6-libra esterlina, 7-franco suizo"))
    
        if (isNaN (monto) || isNaN(moneda) || isNaN(monedaDevolucion)){
            alert("Ingrese números")
        }

} while (isNaN (monto) || isNaN(moneda) || isNaN(monedaDevolucion) || validarDatos(monto,moneda,monedaDevolucion))

function validarDatos (monto, moneda,monedaDevolucion){
    if ((monto > 0) && (monedaDevolucion > 0) && (moneda > 0) && (moneda < 8) && (monedaDevolucion < 8) && (moneda != monedaDevolucion)){
        
        return false // TODO OK, PUEDE CONTINUAR EL TRAMITE
    }else {
        alert ("Ingrese opciones válidas")
        return true // VUELVE A PEDIR DATOS
    }
}

function cambioMoneda (monto, moneda){
    switch (moneda){
        case 1:
            //peso argentino
            console.log ("Usted entregó " + (monto) + " pesos argentinos")
            monto = monto * arg
            break
        case 2:
            //peso uruguayo
            console.log ("Usted entregó " + (monto) + " pesos uruguayos")
            monto = monto * uru
            break
        case 3:
            //dolar
            console.log ("Usted entregó " + (monto) + " dólares")
            monto = monto * dolar
            break
        case 4:
            //euro
            console.log ("Usted entregó " + (monto) + " euros")
            monto = monto * euro
            break
        case 5:
            //real
            console.log ("Usted entregó " + (monto) + " reales")
            monto = monto * real
            break
        case 6:
            //libra
            console.log ("Usted entregó " + (monto) + " libras esterlinas")
            monto = monto * libra
            break
        case 7:
            //franco
            console.log ("Usted entregó " + (monto) + " francos suizos")
            monto = monto * franco
            break
        default:
            alert ("Número de moneda no válido")
            break
    }
    return monto
}
   
function calcularDevolucion (monto,monedaDevolucion){
    switch(monedaDevolucion){
        case 1:
            //peso argentino
           monto = monto / arg
           console.log ("Le devolvemos $ " + parseInt(monto) + " pesos argentinos")
            break
        case 2:
            //peso uruguayo
            monto = monto / uru 
            console.log ("Le devolvemos $ " + parseInt(monto) + " pesos uruguayos")
            break
        case 3:
            //dolar
            monto = monto / dolar
            console.log ("Le devolvemos $ " + monto + " dolares")
            break
        case 4:
            //euro
            monto = monto / euro
            console.log ("Le devolvemos $ " + parseInt(monto) + " euros")
            break
        case 5:
            //real
            monto = monto / real
            console.log ("Le devolvemos $ " + parseInt(monto) + " reales")
            break
        case 6:
            //libra
            monto = monto / libra
            console.log ("Le devolvemos $ " + parseInt(monto) + " libras esterlinas")
            break
        case 7:
            //franco
            monto = monto / franco
            console.log ("Le devolvemos $ " + parseInt(monto) + " francos suizos")
            break
        default:
            alert ("Número de moneda no válido")
            break
    }
}

monto = (cambioMoneda (monto,moneda,monedaDevolucion))
console.log ('Su monto en pesos uruguayos es $ ' + (monto))
calcularDevolucion (monto,monedaDevolucion)




let monto, moneda, monedaDevolucion, opcion, nombreX

const uru = 1
const dolar = 40
const euro = 41.82
const arg = 0.22
const real = 7.7
const libra = 48.8
const franco = 41.6

class Empleado {
    constructor (nombre, apellido, fechaNacimiento, puesto, salario){
        this.nombre = nombre
        this.apellido = apellido
        this.fechaNacimiento = fechaNacimiento
        this.puesto = puesto
        this.salario = salario
    }

    cambiarPuesto (nuevoPuesto){
        this.puesto = nuevoPuesto
    }
    aumentarSalario (nuevoSalario){
        this.salario = nuevoSalario
    }
}

const empleado1 = new Empleado ("samuel", " Eto'o", "12/05/1987", "Agente de atención al cliente", 25000)
const empleado2 = new Empleado ("ronaldinho", " Gaucho", "03/10/1982", "Agente de atención al cliente", 25000)
const empleado3 = new Empleado ("lionel", " Messi", "27/01/1985", "Agente de atención al cliente", 25000)
const empleado4 = new Empleado ("carles", " Puyol", "30/04/1978", "Agente de atención al cliente", 25000)
const empleado5 = new Empleado ("clarence", " Seedorf", "23/03/1975", "Agente de atención al cliente", 25000)
const nuevoEmpleado = new Empleado ("","","","","")

const empleados = [empleado1, empleado2, empleado3, empleado4, empleado5]

function listarEmpleados (){
    for (let i = 0; i < empleados.length; i++){
        console.log(empleados[i].nombre)
    }
}
console.log("BIENVENIDO A CAMBIO CODER UY")
console.log("LISTA DE EMPLEADOS")
listarEmpleados()
function buscarEmpleado (nombreEmpleado){
    for (let i = 0; i < empleados.length; i++){
        if (nombreEmpleado === empleados[i].nombre) {
            return (i)
        }
    }
}

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



do {
    opcion = parseInt (prompt("Elija una opción: ingrese 1 para cambiar dinero - ingrese 2 para añadir un empleado - ingrese 3 para eliminar un empleado - ingrese 4 si desea cambiar de puesto un empleado - ingrese 5 para aumentar el sueldo a un empleado"))
}while (isNaN(opcion))

switch (opcion){
    case 1:
        do {
            monto = parseFloat(prompt("Ingrese el monto que desea cambiar"))
            moneda = parseInt (prompt ("Elija el tipo de moneda del dinero que usted tiene, ingrese 1 para peso argentino, 2-peso uruguayo, 3-dólares, 4-euro, 5-real, 6-libra esterlina, 7-franco suizo"))
            monedaDevolucion = parseInt(prompt("¿A qué moneda desea que le cambiemos su dinero? Ingrese 1 para peso argentino, 2-peso uruguayo, 3-dólares, 4-euro, 5-real, 6-libra esterlina, 7-franco suizo"))
            
                if (isNaN (monto) || isNaN(moneda) || isNaN(monedaDevolucion)){
                    alert("Ingrese números")
                }

        } while (isNaN (monto) || isNaN(moneda) || isNaN(monedaDevolucion) || validarDatos(monto,moneda,monedaDevolucion))

        console.log("CAMBIO CODER UY")
        console.log ("Usted está siendo atendido por " + (empleado1.nombre) + (empleado1.apellido))
        monto = (cambioMoneda (monto,moneda,monedaDevolucion))
        console.log ('Su monto en pesos uruguayos es $ ' + (monto))
        calcularDevolucion (monto,monedaDevolucion)
        break
    case 2:
        nombreX = prompt("Escriba el nombre del empleado en minúsculas")
        nuevoEmpleado.nombre = nombreX
        empleados.push (nuevoEmpleado)
        console.log("LISTA DE EMPLEADOS ACTUALIZADA")
        listarEmpleados()
        alert (nuevoEmpleado.nombre + " ha sido añadido exitosamente")
        break
    case 3:
        nombreX = prompt("Escriba el nombre del empleado en minúsculas")
        indice = buscarEmpleado(nombreX)
        if (indice != -1){
            empleados.splice(indice, 1)
            console.log("LISTA DE EMPLEADOS ACTUALIZADA")
            listarEmpleados()
            alert ("Su empleado ha sido eliminado")
        }else{
            alert ("No se encontró el nombre, intenten de nuevo por favor")
        }
        break 
    case 4:
        nombreX = prompt("Ingrese en minúsculas el nombre del empleado que desea cambiar de puesto")
        indice = buscarEmpleado(nombreX)
        if (indice != -1){
            console.log("El empleado seleccionado es " + empleados[indice].nombre)
            console.log("Su puesto actual es " + empleados[indice].puesto)
            let nuevoPuesto = prompt ("Ingrese el nuevo puesto")
            empleados[indice].cambiarPuesto(nuevoPuesto)
            console.log (empleados[indice].nombre + " ha cambiado su puesto ha " + nuevoPuesto)
        }
        break
    case 5:
        nombreX = prompt("Ingrese en minúsculas el nombre del empleado que desea aumentar el salario")
        indice = buscarEmpleado(nombreX)
        if (indice != -1){
            console.log("El empleado seleccionado es " + empleados[indice].nombre)
            console.log("Su salario actual es " + empleados[indice].salario)
            let nuevoSalario = prompt ("Ingrese el nuevo salario")
            empleados[indice].aumentarSalario(nuevoSalario)
            console.log (empleados[indice].nombre + " ha cambiado su salario ha " + nuevoSalario)
        }
        break
    default:
        alert ("Ingrese una opción válida")
        break
}



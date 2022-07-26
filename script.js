let monto, moneda, monedaDevolucion

const uru = 1
const dolar = 40
const euro = 41.82
const arg = 0.22
const real = 7.7
const libra = 48.8
const franco = 41.6

class Empleado {
    constructor(nombre, apellido, fechaNac, puesto, salario) {
        this.nombre = nombre
        this.apellido = apellido
        this.fechaNac = fechaNac
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

let empleados = []

if(localStorage.getItem('empleados')) {
    tareas = JSON.parse(localStorage.getItem('empleados'))
} else {
    localStorage.setItem('empleados', JSON.stringify(empleados))
}

const formEmpleados = document.getElementById("formEmpleados")
const divEmpleados = document.getElementById("divEmpleados")
const botonEmpleados = document.getElementById("botonEmpleados")

formEmpleados.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    let datForm = new FormData(e.target)

   let empleado = new Empleado(datForm.get('nombre'), datForm.get('apellido'), datForm.get('fechaNac'), datForm.get('puesto'), datForm.get('salario'))
   empleados.push(empleado)
   console.log(empleados)
   localStorage.setItem('empleados', JSON.stringify(empleados))
    formEmpleados.reset()
})



botonEmpleados.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('empleados'))
    divEmpleados.innerHTML = ""
    arrayStorage.forEach((empleado, indice) => {
        
        divEmpleados.innerHTML += `
        <div class="card border-dark mb-3" id="empleado${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header"><h2>${empleado.nombre} ${empleado.apellido}</h2></div>
            <div class="card-body">
                <p class="card-title">${empleado.fechaNac}</p>
                <p class="card-title">${empleado.puesto}</p>
                <p class="card-title">${empleado.salario}</p>
                <button class="btn btn-danger">Dar de baja Empleado</button>
                
            </div>
        </div>

        `
    });

    arrayStorage.forEach((empleado, indice) => {
        let botonEliminar = document.getElementById(`empleado${indice}`).lastElementChild.lastElementChild
        botonEliminar.addEventListener('click', () => {
            document.getElementById(`empleado${indice}`).remove()
            empleados.splice(indice,1)
            localStorage.setItem('empleados', JSON.stringify(empleados))
            console.log(`${empleado.nombre} Eliminado`)
        })
    })
})


botonAtenderCliente.addEventListener("click", () => {
    divClientes.innerHTML += `
        <form id="formClientes">

            <div class="mb-3">
                <label for="montoCambiar" class="form-label">Ingrese la cantidad de dinero que desea cambiar</label>
                <input type="number" class="form-control" id="montoCambiar" name="monto"> 
            </div>
            <div class="mb-3">
                <label for="monedaCliente" class="form-label">Ingrese tipo de moneda de su dinero</label>
                <label> Elija el tipo de moneda del dinero que usted tiene, ingrese 1 para peso argentino, 2-peso uruguayo, 3-dólar, 4-euro, 5-real, 6-libra esterlina, 7-franco suizo </label>
                <input type="number" class="form-control" id="monedaCliente" name="monedaC">
            </div>
            <div class="mb-3">
                <label for="monedaDevolucion" class="form-label">Ingrese tipo de moneda en que desea su cambio</label>
                <label> ¿A qué moneda desea que le cambiemos su dinero? Ingrese 1 para peso argentino, 2-peso uruguayo, 3-dólares, 4-euro, 5-real, 6-libra esterlina, 7-franco suizo </label>
                <input type="number" class="form-control" id="monedaDevolucion" name="monedaD">
            </div>

            <button type="submit" class="btn btn-primary">Efectuar Cambio</button>

        </form>

        `
        formClientes.addEventListener('submit', (e) => {
            e.preventDefault()
            
            let datForm = new FormData(e.target)
            console.log(parseInt(datForm.get("monedaC")))
            let monedaCli = datForm.get("monedaC")
            let mon = datForm.get("monto")
            console.log (monedaCli, mon)
            monto = cambioMoneda (mon, monedaCli)

            console.log ('Su monto en pesos uruguayos es $ ' + (monto))
            calcularDevolucion (monto,monedaDevolucion)

        })

});

function listarEmpleados (){
    for (let i = 0; i < empleados.length; i++){
        console.log(empleados[i].nombre)
    }
}

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
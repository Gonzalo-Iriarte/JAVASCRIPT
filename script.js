let monto, moneda, monedaDevolucion

const uru = 1
let dolar = 40
let euro = 41.82
let arg = 0.22
let real = 7.7
const libra = 48.8
const franco = 41.6

traerCotizaciones()

setInterval(()=>{
   traerCotizaciones()
}, 60000)

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
    
    let datForm = new FormData(e.target)
    let empleado = new Empleado(datForm.get('nombre'), datForm.get('apellido'), datForm.get('fechaNac'), datForm.get('puesto'), datForm.get('salario'))
    empleados.push(empleado)
    localStorage.setItem('empleados', JSON.stringify(empleados))
    Swal.fire (`${empleado.nombre} ${empleado.apellido} ha sido ingresado al sistema exitosamente`)
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
            Swal.fire (`${empleado.nombre} ${empleado.apellido} ha sido eliminado del sistema exitosamente`)
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
          
            let monedaCli = parseInt(datForm.get("monedaC"))
            let mon = parseInt(datForm.get("monto"))
            let monedaDev = parseInt(datForm.get("monedaD"))
            
            monto = cambioMoneda (mon, monedaCli)
            calcularDevolucion (monto,monedaDev)
        })
});

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
            Swal.fire ("Usted entregó " + (monto) + " pesos argentinos")
            monto = monto * arg
            break
        case 2:
            //peso uruguayo
            Swal.fire ("Usted entregó " + (monto) + " pesos uruguayos")
            monto = monto * uru
            break
        case 3:
            //dolar
            Swal.fire ("Usted entregó " + (monto) + " dólares")
            monto = monto * dolar
            break
        case 4:
            //euro
            Swal.fire ("Usted entregó " + (monto) + " euros")
            monto = monto * euro
            break
        case 5:
            //real
             
            Swal.fire ("Usted entregó " + (monto) + " reales")
            monto = monto * real
            break
        case 6:
            //libra
            console.log ("Usted entregó " + (monto) + " libras esterlinas")
            monto = monto * libra
            break
        case 7:
            //franco
            Swal.fire ("Usted entregó " + (monto) + " francos suizos")
            monto = monto * franco
            break
        default:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Número de moneda no válido!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            break
    }
    return monto
}
   
function calcularDevolucion (monto,monedaDevolucion){

    switch(monedaDevolucion){
        case 1:
            //peso argentino
           monto = monto / arg
           Swal.fire ("Le devolvemos $ " + parseInt(monto) + " pesos argentinos")
            break
        case 2:
            //peso uruguayo
            monto = monto / uru 
            Swal.fire ("Le devolvemos $ " + parseInt(monto) + " pesos uruguayos")
            break
        case 3:
            //dolar
            monto = monto / dolar
            Swal.fire ("Le devolvemos $ " + monto + " dolares")
            break
        case 4:
            //euro
            monto = monto / euro
            Swal.fire ("Le devolvemos $ " + parseInt(monto) + " euros")
            break
        case 5:
            //real
            monto = monto / real
            Swal.fire ("Le devolvemos $ " + parseInt(monto) + " reales")
            break
        case 6:
            //libra
            monto = monto / libra
            Swal.fire ("Le devolvemos $ " + parseInt(monto) + " libras esterlinas")
            break
        case 7:
            //franco
            monto = monto / franco
            Swal.fire ("Le devolvemos $ " + parseInt(monto) + " francos suizos")
            break
        default:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Número de moneda no válido!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            break
    }
}

function traerCotizaciones(){
    fetch ("https://cotizaciones-brou.herokuapp.com/api/currency/latest")
    .then(response => response.json())
    .then(({rates}) => {
        arg = (rates.ARS.sell + rates.ARS.buy) / 2
        dolar = (rates.USD.sell + rates.USD.buy) / 2
        real = (rates.BRL.sell + rates.BRL.buy) / 2
        euro = (rates.EUR.sell + rates.EUR.buy) / 2
    })
}
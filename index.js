let cuentas = [
    {nombre: "Mali", saldo: 200, password: 1234},
    {nombre: "Gera", saldo: 290, password: 1234},
    {nombre: "Maui", saldo: 67, password: 1234}
];

// Variables Globales
let usuarioActual;
let saldoActual;
let passwordActual;

// Function para ocultar la pantalla principal y mostar los usuarios.
function ingresoUsuario () {
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("loginUsuario").style.display = "inherit";
}

// Function guardar en las variables globales los datos del usuario.
// Oculta la pantalla de selección de usuarios y mostrar la pantalla de clave
function mali () {
    usuarioActual = cuentas[0].nombre;
    saldoActual = cuentas[0].saldo;
    passwordActual = cuentas[0].password;

    document.getElementById("loginUsuario").style.display = "none";
    document.getElementById("claveUsuario").style.display = "inherit";
}

// Function guardar en las variables globales los datos del usuario.
// Oculta la pantalla de selección de usuarios y mostrar la pantalla de clave
function gera () {
    usuarioActual = cuentas[1].nombre;
    saldoActual = cuentas[1].saldo;
    passwordActual = cuentas[1].password;

    document.getElementById("loginUsuario").style.display = "none";
    document.getElementById("claveUsuario").style.display = "inherit";
}

// Function guardar en las variables globales los datos del usuario.
// Oculta la pantalla de selección de usuarios y mostrar la pantalla de clave
function maui () {
    usuarioActual = cuentas[2].nombre;
    saldoActual = cuentas[2].saldo;
    passwordActual = cuentas[2].password;

    document.getElementById("loginUsuario").style.display = "none";
    document.getElementById("claveUsuario").style.display = "inherit";
}

// Function que recibe el valor del input de password y lo asigna a una variable. 
// Se ejecuta la function checkConstraseña y se envía el valor del input de pass.
function validacionClave () {

    let inputContraseña = document.getElementById ("claveIngresada").value; 
    checkContraseña (inputContraseña);
}

// Con el valor del input de pass, se hace la validación. Si está bien, oculta la pantalla de ingreso de clave y muestra las opciones del cajero.
function checkContraseña (inputContraseña) {
    let contraseñaFinal = parseInt (inputContraseña);
    for (let i = 0; i < cuentas.length; i++){
        if (usuarioActual == cuentas[i].nombre && contraseñaFinal == cuentas[i].password) {
            document.getElementById("claveUsuario").style.display = "none";
            document.getElementById("opcionesCajero").style.display = "inherit";
            break;
        } else {
            const resultado = document.createTextNode (`La contraseña está errada. Inténtalo de nuevo`);
            const numeroFinal = document.getElementById("mensajeError");
            numeroFinal.innerHTML = "";
            numeroFinal.appendChild (resultado);
        }
    }
}

// Ver Saldo
function verSaldo () {
    document.getElementById("opcionesCajero").style.display = "none";
    document.getElementById("verSaldo").style.display = "inherit";

    const saldoUsuario = document.createTextNode (`$${saldoActual}`);
    const mensajeSaldo = document.getElementById ("saldoCliente");
    mensajeSaldo.innerHTML = "";
    mensajeSaldo.appendChild(saldoUsuario);
}

// Ingresar Saldo
function ingresarSaldo () {
    document.getElementById("opcionesCajero").style.display = "none";
    document.getElementById("agregarSaldo").style.display = "inherit";
}

// Recibe el saldo ingresado por el cliente y lo envía a la función para revisar si sobrepasa el monto. 
function inputSaldo () {
    const saldoIngresado = parseInt(document.getElementById ("saldoIngresado").value);
    checkSaldo (saldoIngresado);
}

// Valida el monto ingresado.
function checkSaldo (saldoIngresado) {
    if ((saldoIngresado + saldoActual) > 990){
        const mensajeError = document.createTextNode ("Sobrepasa el monto permitido por el banco. Ingresa un valor inferior.")
        const mensajeUsuario = document.getElementById ("alertaCupo");
        mensajeUsuario.innerHTML = "";
        mensajeUsuario.appendChild (mensajeError);
    } else {
        mostrarTransacción (saldoIngresado, saldoActual);
    }
}

// Muestra la pantalla con el saldo del cliente
function mostrarTransacción (saldoIngresado, saldoActual) {
    document.getElementById("agregarSaldo").style.display = "none";
    document.getElementById("saldoTotal").style.display = "inherit";

    const dineroIngresado = document.createTextNode (`$${saldoIngresado}`);
    const mostrarDinero = document.getElementById("saldoIngresadoCliente");
    mostrarDinero.innerHTML = "";
    mostrarDinero.appendChild (dineroIngresado);

    const dinerototal = document.createTextNode (`$${(saldoIngresado + saldoActual)}`);
    const mostrarTotal = document.getElementById ("saldoTotalCliente");
    mostrarTotal.innerHTML = "";
    mostrarTotal.appendChild (dinerototal);
}


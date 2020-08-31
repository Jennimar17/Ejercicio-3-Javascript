/*Datos personales

Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga:
 "Nuevo usuario agregado al sistema:" y liste todos los datos juntos. */

alert("Página de Registro de Ususarios")

let nombre = prompt("Diga su nombre")

let apellido = prompt("Diga su apellido")

let edad = prompt("Diga su edad")

let nacionalidad = prompt("En que país naciste?")

let documento = prompt("Numero de documento")

let datosUsuario = nombre + " " + apellido + " " + "de" + " " + edad + " " + "años" + " " + "nacida en" + " " + nacionalidad + " " + " con documento n° " + " " + documento

alert("Se ha registrado con éxito, sus datos son:" + " " + datosUsuario)
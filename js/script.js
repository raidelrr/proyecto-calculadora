//Esta funcion agrega en la pantalla el valor del boton de la calculadora que el usuario toque.
function agregarAPantalla(valorElegido){
document.getElementById("pantalla").value += valorElegido;
}
//Esta funcion borra todo lo que hay en la pantalla
function borrar(){
    document.getElementById("pantalla").value = ``;
}
//Esta funcion calcula todas las operaciones que existan en la pantalla
function calcular(){
    const valorDeLaPantalla = document.getElementById(`pantalla`).value;
    const resultado = eval(valorDeLaPantalla);
    document.getElementById("pantalla").value = resultado;
}
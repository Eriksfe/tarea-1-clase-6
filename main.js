/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y
el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonAceptar = document.querySelector("button");
const cuerpoPagina = document.querySelector("body");
let promedioEdades;
let menorEdad;
let mayorEdad;

const agregaInputsPorPersona = function(){
    let cantidadPersonas = Number(document.querySelector(".cantidad-personas").value);
    for(let i=0; i<cantidadPersonas; i++){
        let label = document.createElement("label");
        let edadIntegrante = document.createElement("input");
        let espacio = document.createElement("br");
        label.textContent = `Familiar ${i+1}.`;
        edadIntegrante.type = "number";
        edadIntegrante.id = "edad-integrante";
        edadIntegrante.placeholder = "ingresar edad";
        cuerpoPagina.appendChild(label);
        cuerpoPagina.appendChild(edadIntegrante);
        cuerpoPagina.appendChild(espacio);
    }
}

const agregaBotonCalcular = function(){
    const botonCalcular = document.createElement("button");
    botonCalcular.id = "boton-calcular"
    botonCalcular.textContent = "Calcular";
    cuerpoPagina.appendChild(botonCalcular);
    botonCalcular.onclick = function(){
        calcularPromedio();
        calcularMenorEdad();
        calcularMayorEdad();
        textoEdades();
        agregaBotonReset();
    }
}

const calcularPromedio = function(){
    let sumaEdades = 0;
    let edadesIntegrantes = document.querySelectorAll("#edad-integrante");
    for(let i=0; i<edadesIntegrantes.length; i++){
        sumaEdades = sumaEdades + Number(edadesIntegrantes[i].value);
        promedioEdades = sumaEdades / edadesIntegrantes.length;
    }
    console.log(`El promedio de edades es ${promedioEdades}`);
}

const calcularMenorEdad = function(){
    let arr1 = [];
    let edadesIntegrantes = document.querySelectorAll("#edad-integrante");
    for(let i=0; i<edadesIntegrantes.length; i++){
        arr1.push(edadesIntegrantes[i].value);
    }
    menorEdad = Math.min(...arr1);
    console.log(`La menor edad es ${menorEdad}`);
}

const calcularMayorEdad = function(){
    let arr1 = [];
    let edadesIntegrantes = document.querySelectorAll("#edad-integrante");
    for(let i=0; i<edadesIntegrantes.length; i++){
        arr1.push(edadesIntegrantes[i].value);
    }
    mayorEdad = Math.max(...arr1);
    console.log(`La mayor edad es ${mayorEdad}`);
}

const textoEdades = function(){
    let texto = document.querySelector("p");
    texto.textContent = `El promedio de edades es ${promedioEdades}, la menor edad es ${menorEdad} y la mayor es ${mayorEdad}`;
}

const agregaBotonReset = function(){
    let $botonReiniciar = document.createElement("input");
    $botonReiniciar.type = "reset";
    $botonReiniciar.value = "Empezar de nuevo";
    cuerpoPagina.appendChild($botonReiniciar);
    $botonReiniciar.onclick = function(){
        location.reload();
    }
} 

$botonAceptar.onclick = function(){
    if (document.querySelector(".cantidad-personas").value == "") {
        let texto = document.querySelector("p");
        texto.textContent = "No ingresaste ningún número. Probá de nuevo!";
        return false;
    } else if (document.querySelector(".cantidad-personas").value <= 0) {
        let texto = document.querySelector("p");
        texto.textContent = "No ingresaste ningún número válido. Probá de nuevo!";
        return false;
    } else {
    let texto = document.querySelector("p");
    texto.textContent = "";
    agregaInputsPorPersona();
    agregaBotonCalcular();
    return false;
    }
}


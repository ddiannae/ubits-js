// ------------------ SESIÓN 1 ----------------------
console.log("Hello world desde nuestro Plug!");

// Declaración y asignación de variables con let
let num1 = 10;
console.log(num1);

let num2 = 3.5;
console.log(num2);

// Operaciones matemáticas
console.log(num2 + num1);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num2 / num1);
console.log(num1 % 5);

// Declaración de variables, sin asignación
let sinAsignacion;
// Valor: undefined
console.log(sinAsignacion);

//NaN: Not a number
console.log(sinAsignacion + 1);

sinAsignacion = 5;
console.log(sinAsignacion);
console.log(sinAsignacion + 1);

const saludo = "Bienvenid@s";
console.log(saludo);

//Re-asignación de una variable
num1 = 500;
console.log(num1);

// Las variables declaradas con const 
// tienen que inicializarse o hay error de sintaxis
// const constSinAsignacion;

// Concatenación de texto
console.log(saludo + " estudiantes");

// Javascript convierte a valores numéricos
console.log("3" * "7");
console.log("3" / "7");

// La suma es concatenación aunque sean 
// textos numericos
console.log("3" + "7");

// Propiedad length de los strings
const texto = "Aprendiendo JS con Ubits Plugs";
console.log("La variable texto tiene " + texto.length + " caracteres")

// Algunos métodos de los strings
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto);

// ------------------ SESIÓN 2 ----------------------
// Los arreglos son colecciones de valores
let arreglo = [24, 20, 22, 23, 21];
console.log(arreglo);

let arregloMixto = ["fresa", "manzana", 349, 209];
console.log(arregloMixto);

// Accedemos a los elementos mediante sus índices
console.log(arregloMixto[0]);
arregloMixto[0] = "mango";
console.log(arregloMixto);

// Algunos métodos de los arreglos
// Push. Insertar elementos al final
arreglo.push(24);
console.log(arreglo);
console.log(arreglo.length);
// Unshift. Insertar elementos al inicio
arreglo.unshift(19)
console.log(arreglo);
// Pop. Sacar un elemento del final
arreglo.pop();
// Shift. Sacar un elemento del inicio
arreglo.shift();
console.log(arreglo);

// Ejercicio: Insertar elementos en la lista de compras
let listaCompras = [["leche", 24], ["mantequilla", 18]]

console.log(listaCompras);
let elemento = ["pan", 35];
listaCompras.push(elemento);
console.log(listaCompras);
listaCompras.unshift(["aderezo", 50]);
console.log(listaCompras);

//Funciones

// Declaración de la función 
function saludar() {
    console.log("Hola!");
}

//Llamado o ejecución
saludar();
saludar();
saludar();
saludar();

// Declaración de una función con un parámetro
function saludarPersonal(nombre) {
    console.log("Hola! " + nombre);
}

// Ejecución de una función con argumentos
saludarPersonal("Melanie");
let todos = "estudiantes de UBITS";
saludarPersonal(todos);

// Scope global
let suma = "Esta es la variable suma";

function sumarTres(numero) {
    // Scope local. La variable mantiene este
    // valor dentro de la función
    const sumando = 3;
    let suma = numero + sumando;
    console.log(sumando);
    return(suma);
}

console.log(sumarTres(5));
let resultadoFuncion = sumarTres(23234234);
console.log(resultadoFuncion);

// La variable mantiene el valor asignado 
// en el scope global
console.log(suma);

// Esta variable solo existe en la función sumarTres
//console.log(sumando);

// Encontrar el tercer ángulo interno de un triángulo. 
// Ejercicio: https://www.codewars.com/kata/5a023c426975981341000014
function otroAngulo(a, b) {
    return(180-a-b)
}

console.log(otroAngulo(90, 45));

// Condicionales 
if (3 < 140) {
    // Código si el valor es verdadero
    console.log("Condición verdadera");
}

// Comparación de valor
let varBool = 5 == "5";
console.log(varBool);

// Comparación de valor y de tipo
let varBool2 = 5 === "5";
console.log(varBool2);

// Una función con condicionales
function comparacionACien(numero) {

    if(numero < 100) {
        return("menor a 100");
    } else if (numero > 100) {
        return("mayor a 100");
    } else if (numero === 100) {
        return("valor y tipo igual a 100");
    } else {
        return("Esto no es un valor numérico");
    }
}

console.log(comparacionACien(40));
console.log(comparacionACien(500));
console.log(comparacionACien(100));
console.log(comparacionACien("100"));
console.log(comparacionACien("cadena"));

// ------------------ SESIÓN 3 ----------------------
// AND && OR ||
// Función para sugerir

function sugerirDesayuno(dia) {
    // Comparaciones-operaciones tienen que regresar 
    // falso o verdadero
    if (dia == "Lunes" || dia == "Miércoles") {
        return("Fruta con yogurth natural");
    } else if(dia == "Martes" || dia  == "Jueves") {
        return("Smoothie frutos rojos");
    } else {
        return("Lo que gustes!")
    }
}

console.log(sugerirDesayuno("Martes"));

// Enero - max 21, min 3
// Febrero - max 23, min 4
// Marzo - max 26, min 5
function evaluarTemperatura(mes, temp) {
    if((mes == "Enero" && (temp <= 21 && temp >= 3)) ||
        (mes == "Febrero" && (temp <= 23 && temp >= 4))
    ) {
        return("Temperatura dentro del rango")
    } else {
        return("Temperatura fuera del rango")
    }
}

console.log(evaluarTemperatura("Enero", 18));
console.log(evaluarTemperatura("Enero", 0));
console.log(evaluarTemperatura("Febrero", 21));
console.log(evaluarTemperatura("Febrero", 35));

// Construir un arreglos con los primeros 5 múltiplos de 55 
let multiplos = [];

// i++ --> i = i+1
for (let i=1; i <= 5; i++ ) {
    multiplos.push(i*55);
    console.log(multiplos);
}
console.log(multiplos);

// Función para repetir una palabra n veces

function repetir(n, palabra) {

    let repeticiones = "";
    for(let i=0; i<n; i++) {
        repeticiones = repeticiones + palabra;
    }
    return(repeticiones);
}

console.log(repetir(3, "M"));
console.log(repetir(10, "Hola"));

let palabra = "computadora"
let reversa = ""

for(let i= palabra.length-1; i>=0; i--) {
    reversa = reversa + palabra[i];
}
console.log(reversa);

let frutas = ["naranja", "fresa", "mango", "kiwi"]

console.log(frutas.includes("fresa"))
console.log(frutas.includes("plátano"))

let frase = "me gustan los gatos";
console.log(frase.replace("gatos", "perros"));
console.log(frase.split(" "));

const alumno = {
    nombre: "Juan", 
    apellido: "García", 
    edad: 25
}

console.log(alumno);
console.log(alumno.apellido);
console.log(alumno["apellido"]);
console.log(alumno["edad"]);
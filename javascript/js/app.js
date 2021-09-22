alert('Soy una ventana emergente!');
console.log('Soy un mensaje en la consola!')
/*Variables*/
var nombre_variable;
let otra_variable = "Hola";
const PI = 3.1416;
let num2=18;
let Hayclases=true;
let terminoLaClase=false;
/* tipos: undefined, numero, string, Booleano, Objeto, arreglo, chart, funcion */
 console.log(PI*num2);
 console.log(num2 + 36 + " " + otra_variable);
 /* Condicionales */
hayClases=false;
if( hayClases == true && terminoLaClase !=true){
    console.log('Nos conectamos a la videollamada!');
 }else{  
    console.log('salimos a celebrar el Dia del Estudiante!')
}
if(hayClases == false || terminoLaClase == true){
    console.log('salimos a celebrar el Dia del Estudiante!')
}

let elemento = document.getElementById("principal");
// console.log(elemento);
elemento.innerHTML= "Mi valor para innerHTML";
elemento.innerHTML+= "<p>"+otra_variable+"</p>";
document.write("<h3 class= 'text-center bg-primary'>Hola buen día</h3>");
document.write("<h3>Cómo están?</h3>");

if(nombre_variable == undefined){
    elemento.innerHTML+="Estamos con una variable sin valor definido!"
    elemento.innerHTML+="<p>Luis Navas</p><p>Barbara</p><p>Damian</p><p>Debora</p><p>Elías</p>"
    elemento.style.backgroundColor="blue";
    elemento.style.color="white";
}

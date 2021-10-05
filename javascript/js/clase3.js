/*funciones*/
function calcular(){
    // let num = prompt("Ingrese el primer número: ")            devuelve string
    // let num2 = prompt("Ingrese el segundo número: ")          devuelve string

    // let num = parseInt(prompt("Ingrese el primer número: "))   devuelve nro entero
    // let num2 = parseInt(prompt("Ingrese el segundo número: ")) devuelve nro entero

    // let num = parseFloat(prompt("Ingrese el primer número: "))    devuelve nro decimal
    // let num2 = parseFloat(prompt("Ingrese el segundo número: "))   devuelve nro decimal

    let num = Number(prompt("Ingrese el primer número: ")) ;   /*acepta el cero o blanco*/
    let num2 = Number(prompt("Ingrese el segundo número: ")) ; /*acepta el cero o blanco*/

    let op = prompt("Elija el tipo de operación: \n + para sumar \n - para restar \n * para multiplicar \n / para dividir")
    let resultado = 0;
    

    let elemento = document.getElementById("principal");
    if(op === "+"){
        resultado = num + num2;
        elemento.innerHTML+="<p>El resultado de la suma de " +num+ " y " +num2+ " es: " +resultado+"</p>"   
    }else if(op === "-"){
        resultado = num - num2;
        elemento.innerHTML+="<p>El resultado de la resta de " +num+ " y " +num2+ " es: " +resultado+"</p>" 
    }else if(op === "*"){
        resultado = num * num2;
        elemento.innerHTML+="<p>El resultado de la multiplicación de " +num+ " y " +num2+ " es: " +resultado+"</p>" 
    }else if(op === "/"){
        resultado = num / num2;
        elemento.innerHTML+="<p>El resultado de la división de " +num+ " y " +num2+ " es: " +resultado+"</p>" 
    }else{
        elemento.innerHTML+="El valor para la operación es incorrecto!"
    }
    
}

function entrar(ev){
    ev.preventDefault();
    let email = document.getElementById("exampleInputEmail1")
    console.log(email);
}
entrar();
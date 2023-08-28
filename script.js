const boton = document.getElementById("boton-color");
const color = document.getElementById("color");

function generarColorHexAleatorio() {
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    for(let i = 0; i < 6; i++){ //Se repite 6 veces
        let i = Math.floor(Math.random() * 16); //Saca aleatoriamente 6 caracteres (por el loop) de 16 en total
        console.log(i);
        colorHex += digitos[i]; // colorHex = colorHex + digitos[indiceAletorio] 
        //En base a digitos saca los 6 caracteres aleatorios de los 16 que tiene
        //digitos se itera a través de indiceAleatorio
        //cada vez que se haga una vuelta del ciclo for, se suma un elemento de dígitos a través de la iteración [i]
        console.log(colorHex);
    }
    return colorHex;
}

boton.addEventListener("click", function() {
    let colorAleatorio = generarColorHexAleatorio();
    //Actualizar el texto
    color.textContent = colorAleatorio;
    //Actualizar el color de fondo
    document.body.style.backgroundColor = colorAleatorio; 
});


//     function cicloPrueba() {
//         let nombres = ["juan","jesus","rafael","maki","nestor"];
//         let nombresLista = [];

//         for (let i = 0; i < 5; i++) {
//             let iteracion = Math.floor(Math.random() * 5);
//             console.log(iteracion);
//             nombresLista.push(nombres[iteracion]) ;
//         }
//         return nombresLista
        
        
//     }

// console.log(cicloPrueba());

//ciclo pasando un array y regresa un array tambien
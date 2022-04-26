//FUNCIONES DECLARATIVAS
var varGlobal = 'Soy Scope Global';
function saludarComision(){
    console.log('Hola Comision 22075🐍');

    //SCOPE
    var varLocal = 'Hola soy Scope Local';
    console.log('Dentro de la funcion->',varGlobal);
    console.log('Dentro de la funcion->',varLocal);
    let variableLogica = true;
    if(variableLogica){
        let scopeIf = 'Vivo solo dentro del if';
        console.log(scopeIf)
    }

    console.log('variableLOgica-',variableLogica);
    console.log('fuera del IF-',scopeIf);

}

console.log('Fuera de la funcion->',varGlobal);
// console.log('Fuera de la funcion->',varLocal);

saludarComision();

//FUNCIONES CON PARAMETROS
function calcularPerimetro(ladoUnoParam, ladoDosParam){
    let perimetro = ladoUnoParam*2+ladoDosParam*2;
    let resultadoPerimetro = document.getElementById('resultadoPerimetro');
    resultadoPerimetro.innerHTML = "<b>"+perimetro+"</b>";
}


//PARTE 1
let btnPerimetro = document.getElementById('btnPerimetro');

btnPerimetro.addEventListener('click',function(){
    let inputLadoUno = document.getElementById('ladoUno');
    let inputLadoDos = document.getElementById('ladoDos');  
    // PRIMERO SIN  PARSE
    // let ladoUno = inputLadoUno.value;

    let ladoUno = parseFloat(inputLadoUno.value);
    let ladoDos = parseFloat(inputLadoDos.value);
    console.log('ladouno',Number.isNaN((ladoUno)));

    //COMPROBACION SI ES NUMERO
    if((Number.isNaN(ladoUno))||(Number.isNaN(ladoDos))){
        alert('Los lados ingresados no corresponde a formato numerico');
    }else{
        calcularPerimetro(ladoUno,ladoDos);
    }

})

//FUNCIONES DE EXPRESION - Anonimas porque no tiene un nombre y se lo asigno a 
// una variable . No es recomendable usar muchos return, lo recomendable uno solo

// Lo que quiere decir que con las funciones declarativas, 
// podemos mandar llamar la función antes de que ésta sea declarada, 
// y con la expresión de función, no, tendríamos que declararla primero, 
// y después mandarla llamar.

var determinarMayor = function(ladoUno,ladoDos){
    if(ladoUno>ladoDos){
        return "<b>El lado Uno es mayor que lado Dos</b>";
    }else{
        if(ladoUno<ladoDos){
            return  "<b>El lado Dos es mayor que lado Uno</b>";
        }else{
            return  "<b>Los Lados son iguales</b>";
        }
    }
}

let btnMayor = document.getElementById('btnMayor');

btnMayor.addEventListener('click',function(){
    let inputLadoUno = document.getElementById('ladoUno');
    let inputLadoDos = document.getElementById('ladoDos');  
    
    let ladoUno = parseFloat(inputLadoUno.value);
    let ladoDos = parseFloat(inputLadoDos.value);
    
    let resultadoMayor = document.getElementById('resultadoMayor');
    resultadoMayor.innerHTML = determinarMayor(ladoUno,ladoDos);
    
});


const determinarCalificacion = function(nota=6){
    let calificacion = '';
    switch (nota) {
        case 10:
            calificacion = 'Sobresaliente'
            break;
        case 9:
            calificacion = 'Notable'
            break;
        case 8:
            calificacion = 'Bien'
            break;
        case 7:
        case 6:
            calificacion = 'Aprobado'
            break;
        default:
            calificacion = 'Desaprobado'
            break;
    }
    return calificacion;
}

let btnCalificacion = document.getElementById('btnCalificacion');

btnCalificacion.addEventListener('click',function(){
    
    let inputNota = document.getElementById('nota');

    let nota = parseInt(inputNota.value);
    
    let resultadoCalificacion = document.getElementById('resultadoCalificacion');
    resultadoCalificacion.innerHTML = `La calificación de su nota es: <b>${determinarCalificacion(nota)}</b>`;
});


// BUCLES
const contarLetrasA = () => {
    let inputFrase = document.getElementById('frase');

    let frase = inputFrase.value;
    let cantidadA = 0;

    let index = 0;
    console.log(frase.length);
    while (index < frase.length) {
        console.log(frase[index]);
        if(frase[index]=='a'||frase[index]=='A'){
            cantidadA++
        }
        index++;
    }
    let resultadoLetraA = document.getElementById('resultadoLetraA');
    resultadoLetraA.innerHTML = `La cantidad de letras "a" son <b>${cantidadA}</b>`;
}


let btnVocales = document.getElementById('btnVocales');

btnVocales.addEventListener('click',function(){
    
    let inputFrase = document.getElementById('frase');
    let frase = inputFrase.value;

    let resultadoMotrarVocales = document.getElementById('resultadoMotrarVocales');

    for (let index = 0; index < frase.length; index++) {
        if(frase[index]=='a'||frase[index]=='e'||frase[index]=='i'||frase[index]=='o'||frase[index]=='u'){
            resultadoMotrarVocales.innerHTML += `<b>${frase[index]}</b><br>`;
        }
    }
});

let btnCantidadVocales = document.getElementById('btnCantidadVocales');

btnCantidadVocales.addEventListener('click',function(){
    let inputFrase = document.getElementById('frase');
    let frase = inputFrase.value;


    let cantA = 0;
    let cantE = 0;
    let cantI = 0;
    let cantO = 0;
    let cantU = 0;

    for (let index = 0; index < frase.length; index++) {
        switch (frase[index]) {
            case 'a':
            case 'A':
                cantA++
                break;
            case 'e':
            case 'E':
                cantE++
                break;
            case 'i':
            case 'I':
                cantI++
                break;
            case 'o':
            case 'O':
                cantO++
                break;
            case 'u':
            case 'U':
                cantU++
                break;
        }
    }

    let resultadoCantidadVocales = document.getElementById('resultadoMotrarVocales');
    resultadoCantidadVocales.innerHTML = `
            La cantidade de 'A': <b>${cantA}</b><br>
            La cantidade de 'E': <b>${cantE}</b><br>
            La cantidade de 'I': <b>${cantI}</b><br>
            La cantidade de 'O': <b>${cantO}</b><br>
            La cantidade de 'U': <b>${cantU}</b><br>
            `;

});
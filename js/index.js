// PARTE 2
let inputLadoUno = document.getElementById('ladoUno');
let inputLadoDos = document.getElementById('ladoDos');  


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
        let perimetro = ladoUno*2+ladoDos*2;
        let resultadoPerimetro = document.getElementById('resultadoPerimetro');
        resultadoPerimetro.innerHTML = "<b>"+perimetro+"</b>";
    }

})

let btnMayor = document.getElementById('btnMayor');

btnMayor.addEventListener('click',function(){

    let ladoUno = parseFloat(inputLadoUno.value);
    let ladoDos = parseFloat(inputLadoDos.value);

    if(ladoUno>ladoDos){
        let resultadoMayor = document.getElementById('resultadoMayor');
        resultadoMayor.innerHTML = "<b>El lado Uno es mayor que lado Dos</b>";
    }else{
        if(ladoUno<ladoDos){
            let resultadoMayor = document.getElementById('resultadoMayor');
            resultadoMayor.innerHTML = "<b>El lado Dos es mayor que lado Uno</b>";
        }else{
            let resultadoMayor = document.getElementById('resultadoMayor');
            resultadoMayor.innerHTML = "<b>Los Lados son iguales</b>";
        }
    }
});

let btnCalificacion = document.getElementById('btnCalificacion');

btnCalificacion.addEventListener('click',function(){
    
    let inputNota = document.getElementById('nota');

    let nota = parseInt(inputNota.value);
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
    let resultadoCalificacion = document.getElementById('resultadoCalificacion');
    resultadoCalificacion.innerHTML = `La calificación de su nota es: <b>${calificacion}</b>`;
});


// BUCLES

let btnLetraA = document.getElementById('btnLetraA');

btnLetraA.addEventListener('click',function(){
    
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
});

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
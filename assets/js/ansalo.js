var letras = "";
var numeros = "";
var tipo = "LETRAS";
var ultimoValor = 0;

function imprimirvalor(valor) {
    if (tipo == "LETRAS") {
        if (ultimoValor != (valor - 1)) {
            alert("No se ha ingresado el valor: " + numerosALetras(valor-1));

        } else {
            ultimoValor = valor;
            var letra = numerosALetras(valor);
            console.log (letra);
            letras = document.getElementById('letrasInput').value;
            document.getElementById("letrasInput").value = letras + letra;
        }
    }
    else {
        if (ultimoValor != (valor - 1)) {
            var valormensaje = valor-1;
            alert("No se ha ingresado el valor: "+ valormensaje);

        } else {
            ultimoValor = valor;
            if (valor == 10){
                valor = 0;
            }
            numeros = document.getElementById('numerosInput').value;
            document.getElementById("numerosInput").value = numeros + valor;
        }
    }
    if (valor == 10 && tipo == "LETRAS") {
        tipo = "NUMEROS";
        ultimoValor = 0;
    }
}

function numerosALetras(numero) {
    var letra = "";

    switch (numero) {
        case 1:
            letra = "A";
            break;
        case 2:
            letra = "B";
            break;
        case 3:
            letra = "C";
            break;
        case 4:
            letra = "D";
            break;
        case 5:
            letra = "E";
            break;
        case 6:
            letra = "F";
            break;
        case 7:
            letra = "G";
            break;
        case 8:
            letra = "H";
            break;
        case 9:
            letra = "I";
            break;
        case 10:
            letra = "J";
            break;        
        default:
            break;
    }
    return letra;
}

function pto(){
    window.location.href ='./assets/pages/calculadora.html';
}

function reset() {
    document.getElementById("letrasInput").value = "";
    document.getElementById("numerosInput").value = "";
    ultimoValor = 0;
    tipo = "LETRAS";
}

/* Switches temas */

// function para fijar el  theme dado
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;    
}

// function para cambiar a dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-retro');
    } else if (localStorage.getItem('theme') === 'theme-retro')  {
        setTheme('theme-light');
    } else if (localStorage.getItem('theme') === 'theme-light')  {        
        setTheme('theme-retro');
    }else {       
        setTheme('theme-dark');
    }
}

function toggleThemeOscuro() {
    if (localStorage.getItem('theme') === 'theme-dark') {       
        setTheme('theme-light');
    } else if (localStorage.getItem('theme') === 'theme-retro')  {
        setTheme('theme-dark');
    } else if (localStorage.getItem('theme') === 'theme-light')  {
        setTheme('theme-dark');
    }else {
        setTheme('theme-light');
    }
}
 // function para cambiar a Retro theme
function RetroTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-retro');
    } else if (localStorage.getItem('theme') === 'theme-light')  {
        setTheme('theme-retro');
    } else {
        setTheme('theme-light');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {   
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else if(localStorage.getItem('theme') === 'theme-retro') {
        setTheme('theme-retro');
    } else {     
        setTheme('theme-light');        
    }
})
();


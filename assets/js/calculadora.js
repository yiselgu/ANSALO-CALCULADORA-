//CAPTURANO LOS NUMEROS Y OPERADORES
let btnNumbers = document.querySelectorAll('.btn-number');
let btnOperators = document.querySelectorAll('.btn-operator');
let boardText= document.querySelector('.board-text');
let clear = document.querySelector('.btn-clear');
let del= document.querySelector('.btn-delete');
let equal= document.querySelector('.btn-equal')
let numbers=[];
let total=0;
let operator='';

//LIMPIEZA DE 
clear.addEventListener('click',function(){
    vacio();
    numbers=[];
})

//FUNCTION PONER VACIO
const vacio= () => {
    boardText.innerText='';
}

//ELIMIANR DIGITOS
del.addEventListener('click',function(){
    let number = boardText.innerText.split('');
    number.pop();
    boardText.innerText=number.join('');
    number= boardText.innerText;
})

//REGISTRO DE NUMEROS
 btnNumbers.forEach(function(btnNumber){
    btnNumber.addEventListener('click', function(){
        boardText.innerText+=btnNumber.innerText;
       })      
})

//REGISTRO DE BOTONES DE OPERACIONES
btnOperators.forEach(function(btnOperator){
    //VERIFICAMO QUE SOLO ACEPTE LOS OPERADORES DE + - / * x2
    if(btnOperator.innerText !== '<--' && btnOperator.innerHTML!=='<i class="fa fa-arrow-circle-left"></i>'){
       //CASO ESPECIFICO OPERADOR 'X2'
        if(btnOperator.innerText==='x2'){
            btnOperator.addEventListener('click',function(){
            numbers.push(parseInt(boardText.innerText));
            boardText.innerText=Math.pow(numbers[0],2);
            operator=btnOperator.innerText;
        })
       }else{   
            btnOperator.addEventListener('click',function(){
            numbers.push(parseInt(boardText.innerText));
            boardText.innerText='';
            operator=btnOperator.innerText;
        })
       }
    }
    
})

//FUNCIO IGUAL
equal.addEventListener('click',function(e,o=operator){
    console.log(operator);
    //SI HAY NUMERO QUE OPERAR
    if(numbers.length>0){
            numbers.push(parseInt(boardText.innerText))
            total=numbers[0];
            for (let i = 1; i < numbers.length; i++) {

                switch (o) {
                    case '+':
                        total += numbers[i];
                        break;
                    case '-' :
                        total -= numbers[i];
                        break;
                    case '÷' :
                        total /= numbers[i];
                        break;
                    case 'x' :
                        total *= numbers[i];
                        break;
                    case 'x2' :
                        total = '';
                        break;
                    default:
                        break;
                }
            }
            if(total.toString().length<10){
                boardText.innerText=total;
            }else{
                boardText.innerText='1.E';
            }
            numbers=[];
            total=0;
    
        }else{
            boardText.innerText='';
        }    
})



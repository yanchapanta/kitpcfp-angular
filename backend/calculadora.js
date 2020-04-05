console.log('!APLICACION DE CALCULADORA¡');
var params = process.argv.slice(2);//slice es la parte que no me muestra
//console.log(params);
var num1 = parseFloat(params[0]);
var num2 = parseFloat(params[1]);
console.log('Número uno: '+num1+' y Número dos: '+num2);

var plantilla=`
La suma es=>  ${num1+num2}
La resta es=>  ${num1-num2}
La multiplicacion es=>  ${num1*num2}
La divicion es=>  ${num1/num2}

`;


console.log(plantilla);

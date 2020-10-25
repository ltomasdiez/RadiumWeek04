/*****************Funciones *************/
/*EJERICIO A
a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha variable
en la consola del navegador.*/
function suma(numUno, numDos){
	var resultado = 0;
	resultado = numUno + numDos
	return resultado;
}
var prueba = suma(7,9);
console.log(prueba);

/*EJERCICIO B 
b)A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene
error y retornar el valor NaN como resultado.*/
function suma1(numUno, numDos){
	var resultado=0;
	if((typeof(numUno)=='number')&&(typeof(numDos)=='number')){
		resultado = numUno + numDos;
		console.log(resultado);
	}else{
		resultado='NaN';
		alert('Uno de los parametros tiene error' + resultado);
	}
	return resultado; 
}
prueba=suma1('s',3);

/*EJERCICIO C
c)Crear una función validate integer que reciba un número como parámetro y verdadero si es
un número entero. */
function validateInteger(numUno){
	var result;
	if(numUno%1 == 0){
		result = true;
	}else{
		result = false;
	}
	return result;
}
console.log(validateInteger(2));

/* EJERCICIO D
d)A la función suma del ejercicio b) agregarle una llamada que valide que los números sean
enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número
convertido a entero (redondeado). */
function suma2(numUno, numDos){
	var resultado=0;
	if((typeof(numUno)=='number')&&(typeof(numDos)=='number')){
		resultado = numUno + numDos;
		if(validateInteger(resultado)){
			console.log('es entero');
		}else{
			alert('Error decimal, convirtiendo a entero... : ' + parseInt(resultado));
		}
	}else{
		resultado='NaN';
		alert(resultado);
	}
	return resultado; 
}
suma2(5,5.5);

/* EJERCICIO E
e)Convertir la validación del ejercicio b) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual*/
function validationType(num){
	var result;
	if(typeof(num)=='number'){
		result=true;
	}else{
		result=false;
	}
	return result;
}

function suma3(numUno, numDos){
	var resultado=0;
	if((validationType(numUno))&&(validationType(numDos))){
		resultado=numUno+numDos;
		console.log(resultado);
	}else{
		resultado='NaN';
		alert('Uno de los parametros tiene error' + resultado);
	}
	return resultado;
}
suma3(2.5,5);


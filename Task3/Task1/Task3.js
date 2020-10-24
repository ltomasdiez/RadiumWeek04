/*********************************Arrays*******************************/

/* EJERCICIO A
a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log) */
var array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('El mes 5 es: '+array1[4]);
console.log('El mes 11 es: '+array1[10]);

/*EJERCICIO B
b)Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log(array1.sort());

/*EJERCICIO C
c)Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
array1.unshift("Meses");
array1.push('del Año');
console.log(array1);

/*EJERCICIO D
d)Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
array1.pop();
array1.shift();
console.log(array1);

/*EJERCICIO E
e)Invertir el orden del array (utilizar reverse) */
array1.reverse();
console.log(array1);

/*EJERCICIO F
f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
var stringBig=array1.join('-');
console.log(stringBig);

/*EJERCICIO G
g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var array2=array1.slice(array1.indexOf('Mayo'),array1.indexOf('Noviembre'));
console.log(array2);





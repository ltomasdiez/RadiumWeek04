/*******************************For******************************/
/*
d)Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/

/*EJERCICIO A
a)Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
var array1 = ["lucas1","pablo2","juan3","raul4","carlos5"];
for (let index = 0; index < array1.length; index++) {
    alert(array1[index]);
}
/*EJERCICIO B
b)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar
una alerta por cada palabra modificada.*/
for (let index = 0; index < array1.length; index++) {
    alert(array1[index].substring(0,1).toUpperCase()+array1[index].substring(1,array1[index].length));
}

/*EJERCICIO C
c)Crear una variable llamada “sentence” que tenga un string vacío, luego al array del
punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable
sentence. Al final mostrar una única alerta con la cadena completa.*/
var sentence = "";
for (let index = 0; index < array1.length; index++) {
    sentence = sentence + " " + array1[index];
}
alert(sentence);



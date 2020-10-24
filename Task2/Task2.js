/******************************Strings*********************************/

/* EJERCICIO A
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase).*/
var stringUno = 'Lorenzo Tomas Diez';
stringUno = stringUno.toUpperCase();
console.log(stringUno);

/* EJERCICIO B
b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var stringDos = 'Julian tiene 20 años.';
var stringTres = stringDos.substring(0,5);
console.log(stringTres);

/* EJERCICIO C
c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var stringCuatro = 'Juan tiene un gato viejo';
var stringSeis = stringCuatro.substring((stringCuatro.length-3),stringCuatro.length);
console.log(stringSeis);

/*EJERCICIO D
d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva
 variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var stringSiete='la peor EXPERIENCIA es La mejor maestra.';
var stringOcho=stringSiete.substring(0,1).toUpperCase() + stringSiete.substring(1,stringSiete.length).toLowerCase();
console.log(stringOcho);

/*EJERCICIO E
e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable
(utilizar indexOf).*/
var stringNueve = 'Todas las limitaciones son autoimpuestas.'
var stringDiez = stringNueve.indexOf(" ",0);
console.log(stringDiez);

/* EJERCICIO F
f)Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios
anteriores para generar un nuevo string que tenga la primera letra de ambas palabras
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +). */
var stringOnce = "otorriNolaringólogo electroenceFalograma";
var stringDoce = stringOnce.indexOf("electroenceFalograma",0);
var stringTrece =
    stringOnce.substring(0,1).toUpperCase()+
    stringOnce.substring(1,stringDoce).toLowerCase()+
    stringOnce.substring(stringDoce,stringDoce+1).toUpperCase()+
    stringOnce.substring(stringDoce+1,stringOnce.length).toLowerCase();
console.log(stringTrece)







Para ejecutar un archivo con node se debe usar el comando "node"

Se puede crear un archivo que tenga javascript y ejecutarlo con el comando "node" sin necesidad de un navegador

Para ejecutarlo se debej escribir: node <nombre del archivo> este archivo debe ser .js es decir, javascript

Por ejemplo creamos el archivo hello.js con un "for" que imprimirá en la consola "Hello from hello.js" 10 veces 

Lo ejecutamos con el comando "node hello.js" por supuesto, luego de guardar el archivo (ctrl + s)

El resultado de esto es tal como esperado, en la consola del servidor se visualiza el mensaje 10 veces

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            NODE ECHO EXERCISE ------> Hecho
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Usando la línea de comando, crear un archivo echo.js

Dentro del archivo escribir una función llamada "echo" que tome 2 argumentos: un string y un número

Debe imprimir el string la cantidad de veces según el argumento numérico

Invocar las siguientes funciones:

echo("Echo!!", 10);
echo("Tater Tots", 3);

Agregar 2 ejemplos al final del archivo

Ejecutar echo.js con "node"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            NODE AVERAGE EXERCISE ------> Hecho
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Crear un nuevo archivo "grader.js"

Definir una nueva función llamada "average"

Debe tomar un sólo parámetro, un array de notas de exámenes (todos números)

Debe devolver la nota promedio en el array, redondeado al valor más cercano

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                        NPM
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

NPM = Node Package Manager

Package es como las librearías que se usan en front-end, es código escrito por alguien o un grupo que se puede incluir y utilizar en unproyecto propio.

NPM tiene una herramienta en la línea de comando que facilita la instalación de estos packages. Este comando es "npm install <nombre del package>"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        INSTALANDO PACKAGES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Instalar package cat-me en un nuevo archivo llamado app.js, archivo en el que instalaremos todos nuestros packages.

Para instalar cat-me usamos en la línea de comando "npm install cat-me"

Para utilizarlo, debemos importarlo a nuestro archivo app.js de la siguiente forma:
        
        var algo = require("packageName"); /Cuando ejecute este código va a buscar un package llamado como el packageName, toma el código de los archivos que necesita y los incorpora a la variable "algo"
        
En npmjs.com podemos ver la documentación de los paquetes que utilicemos para saber la funcionalidad, los métodos que lo compoenen y cómo utilizarlos.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        NPM EXERCISE FAKER ------->
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Crear una nueva carpeta llamada "MyShop"

Agregar un archivo llamado "listProducts.js"

Instalar el paquete faker

Leer la documentación y entender cómo funciona faker

Usar faker para imprimir 10 productos con sus precios random ambos

Ejecutar el archivo con el comando node

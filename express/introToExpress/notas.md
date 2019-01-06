****************************************************
                    EXPRESS
****************************************************

EXPRESS es un framework. Un framework es código que una persona o varias escribieron y podemos usar con métodos.

La diferencia entre una librería y un framework es algo llamado "Control invertido", esto significa que cuando se utiliza una librería, uno tiene el control, sin embargo con un framework, este tiene el control.

Todo el flujo de control ya está en el framework y hay unos pocos espacios en blanco donde podemos llenar con nuestro propio código.

Hay dos tipos de frameworks, liviano o pesado. Estos términos se refieren a cuánto hace el framework por el desarrollador y cuánto deja para que este haga.

Un framework liviano depende más de que el desarrollador complete los espacios con su código, el pesado deja menos espacios para completar.

Express es muy liviano, no esconde cosas, no hace cosas que uno no espere.

Descripción de la página de express:
        Rápido unopinionated, minimalista.

Unopinionated, se re fiere a que es flexible, hay más libertad para decidir cómo vamos a estructurar las cosas.

**************************************************************
                    Our First Express App
**************************************************************

* Revisar dogDemo
* Revisar HTTP response/request lifecycle
* Crear nuestra propia express app

**************************************************************
                    PACKAGE.JSON
**************************************************************
Todos los paquetes tienen un archivo llamado package.json.

Es un archivo que contiene toda la metadata de esta aplicación o paquete (express, cat-me). Tiene el nombre, una descripción, un autor, las licencias, entre otras. Pero lo más importante son las dependencias.

Las dependencias son todos los paquetes de las que nuestra aplicación depende para funcionar. Es decir si vemos el package.json de express,
podemos ver en "dependencies" todos los paquetes y versiones de las que depende express

Qué hace el --save al instalar un paquete?

Previo a instalar un paquete debemos crear nuestro propio package.json que dirá las dependencias de nuestra aplicación. Para esto ingresamos el comando:
            
            npm init
            
Este crea un documento package.json para el cuál la consola nos pedirá algunos datos como: nombre, descripción, autor, versión, entry point (este es preferiblel modificarlo a app.js, la mayoría lo modifica), licencia.

Cuando confirmamos la licencia nos muestra cómo queda y apretamos que sí y ahí genera el documento

Ahora cuando instalemos un nuevo paquete ponemos:
        
            npm install "paquete" --save

Lo que hace el --save guarda en el package.json que creamos, en dependencies, el nombre del paquete que instalamos en nuestra aplicación y la versión.

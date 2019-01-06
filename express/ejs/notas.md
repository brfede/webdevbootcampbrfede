Cómo mostrar HTML y templates.

*Usar res.render() para mostrar HTML (desde archivos ejs)
*Explicación EJS
*Pasar variables a EJS


Para mostrar HTML podríamos usar res.render("archivo.html")
Sin embargo, cuando se utiliza express no se usa html plano. Se utiliza templates, que pueden ser dinámicos.

Utilizamos ejs (embbebed javaScript), este archivo ejs lo guardamos en la carpeta views como todos los archivos ejs que querramos mostrar según la ruta que solicite el usuario
Para usar ejs necesitamos instalar el paquete "ejs" con npm install ejs --save
  
El problema de usar html plano es que mostrará siempre la misma pantalla sin poder modificarla a menos que sea por código. Con ejs podemos hacer que el usuario pueda modificarla también al publicar cosas.
  
Al utilizar res.render tengo que indicar el archivo al que va a hacer referencia esa ruta requerida por el usuario, y separado por una coma, entre llaves también tengo que poner las variables que quiera pasar al template,
como por ejemplo algún parámetro que el usuario ponga en la ruta y pasarlo para que se muestre en la pantalla.
  
  En el archivo ejs para mostrar lo que sea js tengo que usar las siguientes etiquetas <%= lo que quiera mostrar %> 

Hay dos tipos de etiquetas para incorporar javascript en html:
        
        <%= %> Esta etiqueta es para encerrar lo que quieo mostrar
        <% %> Esta etiqueta es para poner procesos lògicos y que no se muestren/no arrojen error
        
En los casos lógicos, cada línea que sea parte de la lógica del código debe ir encerrada por esas etiquetas, la parte del html que quiero que se muestre en caso de que se dé esa lógica, no deben ir encerradas en etiquetas


Se pueden incorporar los estilos en las distintas páginas con la etiqueta "link" y haciendo refeerencia al documento que tenga el estilo que deseamos para esa página. Lo más convencional es 
guardar los archivos css en una carpeta llamada "public". Ahí pondremos todos nuestros archivos que sean para complementar la página sean css, js.. 

Para que el link funcione, debemos indicarle a express en nuestro archivo app.js que queremos que muestre al servidor los archivos guardados en la carpeta "public", esto lo hacemos con el siguiente código:
                
                    app.use(express.static("nombreCarpeta")
                    
                    
Para incluir las partes que se repiten en todos los archivos, por ejemplo las etiquetas "<!DOCTYPE html>", "<html></html>".. etc, podemos crear una carpeta nueva llamada partials, y creamos templates con estas partes
que principalmente serán los headers y footers de las páginas y luego linkearemos estos archivos a los de la página.

Para esto debemos:
    1. crear carpeta partials: dentro crear headers.ejs y footer.ejs con sus contenidos
    2. En los archivos que querramos linkear esto ingresar el siguiente código:
                <% include /partials/header.ejs %> o <% include /partials/footer.ejs %> <!--La parte de partials se ingresa porque nosotros indicamos a express que mire views, no partials-->
    3. Modificar en el link del archivo css, agregandole "/" quedando:
                <link rel="stylesheet" type="text/css" href="/app.css">
                
                
*****************************
        POST REQUEST
*****************************
Cuando hacemos un post estamos haciendo un request a una ruta determinada, en este request 
hay un body que contiene lo que se està pidiendo por parte del usuario, para que nosotros podamos utilizar el contenido
de lo que está pidiendo el usuario tenemos que:
    *En la etiqueta "form" poner los atributos action y method. En action pondremos la ruta referida al post
        y en method nos referiremos al método sea post, get, put, etc...
    *en el "input" del formulario, poner un "name". Este "name" se va a guardar en el body del request y 
         nosotros podemos guardarlo en una variable. 
Para que ejs pueda interpretar el 
contenido del body, debemos instalar body-parser ("npm install body-parser --save"), requerirlo en una variable 
y usar la siguiente consigna
        app.use(bodyParser.urlencoded({extended: true});

Para que podamos agregar este valor al array debemos hacer que el array sea global y no de función, sin embargo, este 
no es un método que vayamos a usar ya que usaremos mongo como base de datos y no arrays en nuestro código. Esto último
es de bido a que si nosotros reiniciamos el servidor, desaparecerán los nuevos valores.

Para que la página, luego de hacer el post, redirija a la misma página y no a otra X, debemos usar res.redirect("/rutaPrevia")

*********************************************
                MAKING A REQUEST
*********************************************
Se pueden realizar requests desde la línea de comando utilizando el comando "curl":
            
            curl http://www.google.com

Se recibe todo el código de la página requerida.

Para utilizarlo en una página debemos utilizar el package request, instalarlo e incluirlo en una variable
cuando utilizamos request tenemos 2 parámetros:
    1. la url que requerimos
    2. una función con 3 parámetros:
        i. error: para que si se genera un error podamos mostrarlo
        ii. response: principalmente para saber si la respuesta es exitosa o hubo mala conección o qué
        iii. body: si no hubo error y la respuesta es exitosa, mostrar el body de la página
La mejor práctica es, si hay un error mostrarlo en la consola, si no hay error y si estatus de la respuesta es = 200
mostrar el body

Cuando queremos hacer un request a una API o URL de una página, debemos seguir los mismos pasos
pero si queremos sacar una parte específica del JSON que recibimos, en una primer instancia no vamos a poder realizarlo
ya que el response que estamos recibiendo es un string
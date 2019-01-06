Mongo es una base de datos no-SQL. Es de las bases de datos más populares con node.js y express
Al ser tan popular tiene mucha ayuda en internet
La notación es tipo "objetos" de javaScript
Para instalar ver video:
    https://www.youtube.com/watch?v=b089GmAvUyQ&feature=youtu.be
    
Una vez instalado se debe utilizar dos (recomendable en realidad) terminales de comando, una para iniciar mongo, la otra para la aplicación
En la terminal de mongo para iniciar mongo ejecuto el siguiente comando:
        
        ./mongod

En la terminal de la aplicación, ejecuto el comando "mongo" para ingresar y tulizar la base de datos. Ejecutando el comando "help" nos muestra los comandos que podemos utilizar en la BD

Usando "show dbs" puedo ver las bases de datos que existen en mi base.

Usando "use <nombre>" ingresa a la base de datos con dicho nombre y si no existe la crea 

Para insertar datos en una tabla utilizo el comando:

    db.nombreTabla.insert({nombre: "dato", nombre: "dato"}) <--- siendo "nombre" los nombres de ese parámetro del objeto y el dato entre comillas y separado por dos puntos uno de otro
    
    Si se pone más de un dato se debe separar con comas y todo encerrado entre llaves
    
    Una colección es un conjunto de tablas(esquemas)
    
Podemos utilizar "show collections" para ver las bd que existen con datos

Para ver todos los datos de una bd usamos:
    
        db.nombreTabla.find()

Si quisieramos ver de esa tabla unos datos específicos usamos:

        db.nombreTabla.find({nombre: "dato"})
        
Para actualizar datos uso:
        
        db.nombreTabla.update({nombre_dato_referencia: "dato"}, {nombre_dato_a modificar: "datoActualizado"}) < -- se buscará el dato del primer parámetro pasado y se modificará el dato del segundo.
        
        El inconveniente al utilizar esto es que elimina todos los datos menos el "nombre_dato_a_modificar", es decir sobreescribe todo por el dato que queremos actualizar.
        
        Para evitar esto se utiliza el siguiente comando:
        
        db.nombreTabla.update({nom-dato-referencia: "dato"}, {$set: {nom-dato-modificar: "dato"}}) < -- de esta forma, utilizando $set, mantiene los datos y sólamente modifica el que mencionamos luego del $set
        
Para eliminar utilizamos remove.

    db.nomTabla.remove({nom-dato-referencia: "dato"}) < -- elimina todo el objeto que contenga ese "dato"
        
        
        
        
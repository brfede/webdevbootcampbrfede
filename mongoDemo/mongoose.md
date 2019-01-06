Mongoose es una base de datos para node.js. Es un paquete que ayuda a interactuar con mongodb dentro de nuestros archivos de javascript
Se puede realizar sin mongoose, pero este lo hace más simple

Como cualquier paquete debemos instalarlo usando:

        npm install mongoose --save (esto último para guardar la versión en nuestro package.json)
        
Requerirlo en una variable y luego, con mongo prendido en la terminal de comando de mongo (./mongod), ponemos en nuestro archivo js el siguiente comando:

        mongoose.connect("mongodb://localhost:27017/nombreTabla"); //27017 es el puerto que utiliza mongo
        
Esto hará que mongoose busque la tabla "nombreTabla" y de no encontrarla, la crea.

Para agregar una nueva tabla debemos crear un esquema de la siguiente forma
        
        var nombreEsquema (ejemplo: catSchema) = new mongoose.Schema({
                nombreDato: tipoDato (ej: String), //el tipo de dato va con mayúscula en la primer letra
                nombreDato: tipoDato (ej: Number),
                nombreDato: tipoDato(ej: String),
        });
        
        var Nombre (con mayúscula primer letra) = mongoose.model("Nombre", nombreEsquema); //con esto estamos aplicando a "Nombre" el esquema definido arriba

Para utilizar mongo con "Nombre" usaremos Nombre.find o Nombre.update o lo que fuera necesario. Ya que cuando definimos un modelo, no sólo estamos aplicando
el esquema definido sino otorgandole los métodos que necesitamos.

En el ejemplo de cat.js realizamos lo arriba mencionado.

*Conectamos a cat_app
*Creamos el esquema
*Creamos el modelo Cat y aplicamos el esquema creado
*Creamos una línea en el modelo Cat de la siguiente forma:
                
                var george: = new Cat({
                        name: "George",
                        age: 11,
                        temperament: "Grouchy"
                });
                
                Completando con datos el esquema propuesto
*Luego de creado esto lo guardamos en la base de datos de la siguiente forma:
                
                george.save(function(err,cat) {  //con esta función podemos manejar los posibles errores que se presenten al realizar esta acción
                        if(err){
                                console.log("Something went wrong!");
                        } else {
                                console.log("We just saved a cat to the DB");
                                console.log(cat);
                        }
                });
 Esta función para manejar los errores lo haremos en cada una de las acciones que tengan relación con la BD.
 
 Otra forma para agregar un línea al modelo es de la siguiente forma:
 
        Cat.create({
           name: "Snow White",
           age: 15,
           temperament: "Bland"
        }, function(err, cat){
            if(err){
                console.log(err);
            } else {
                console.log(cat);
            }
        });

De esta forma estamos creando y guardando al mismo tiempo e incorporamos la función en la cuál vemos si hay un error.
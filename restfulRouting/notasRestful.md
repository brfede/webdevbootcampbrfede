REST - es un patrón para definir nuestras rutas. Es un mapeo entre rutas HTTP y CRUD

CRUD refiere a:

CREATE
READ
UPDATE
DESTROY

Para realizar todas estas acciones necesito diferentes rutas. Con express contamos con 7 diferentes rutas para esto.

Para algunas acciones necesitamos dos rutas, GET y POST

Las 7 rutas son:

Name         Path                HTTP verb       Purpose
===========================================================================================
Index        /dogs               GET             List all dogs
New          /dogs/new           GET             Show new dog form
Create       /dogs               POST            Create a new dog, then redirect somewhere
Show         /dogs/:id           GET             Show info about one specific dog
Edit         /dogs/:id/edit      GET             Show edit form for one dog
Update       /dogs/:id           PUT             Update a particular dog, then redirect somewhere
Destroy      /dogs/:id           DELETE          Delete a particular dog, then redirect somewhere

Para este proyecto los paquetes utilizados son.
*Express
*Mongoose
*Body-parser
*method-override: para poder utilizar los métodos put y delete desde la eti_
    eta form ya que HTML no toma estos métodos
*ejs
*express-sanitizer: para permitir al usuario ingresar html en el textarea pero
    evitando que ingrese scripts

Lo primero realizado es en app.js inicializando variables requiriendo los paquetes instalados

Luego se realizó lo necesario para que esos paquetes pudieran utilizarse en la app.js

*mongoose: mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true}); //en donde estamos creando la db restful_blog_app
*mongoose: mongoose.set("useFindAndModify", false); //para poder utilizar algunos métodos de mongoose
*express: app.set("view engine", "ejs");
*express: app.use(express.static("public"));
*express-body-parser: app.use(bodyParser.urlenconded({extended: true}));
*express / express-sanitizer: 




# MVutils

---

RRD => 1.0.1
26-03-2021

- Se creo proyecto base y se configuro la funcionalidad para comunicar la tabla de ordenes

---

mma => 1.0.2
2-03-2021

- Se modificaron nombres de tablas y prefijos de campos.


mma => 1.0.3
11-04-2021

- Se modificaron nombres de tablas y prefijos de campos y se corrigieron valores por defecto en tablas, se borro modelo no uilizado lpv_detelle, se elimino tabla duplicada mv_dirCliente.

mma => 1.0.4
11-04-2021

- Se corrigienron mayusculas / minusculas en nombres de archivos de modelos y controladores, se configuraron los datos de autenticacion en woocommerce como variables de entorno.
- Se capacito sobre git.

rmrd => 1.0.5

- Se crearon nuevos controladores en la carpeta llamada woocommerce para mostrar datos de las ordenes que estan ordenadas como los modelos que ya se crearon.
- Se aplico la funcion de for loop para imprimir en orden los datos.

rmrd => 1.0.6

- Se crearon consultas de creacion por medio de datos nuevos en el apartado de ordenes.

- Se probo la conexion con la base de datos local para mandar datos de woocommerce a la base de datos local en mysql con exito.

rmrd => 1.0.7

- Actualizacion se tabla productos.

rmrd => 1.0.8

- Se modifico el nombre de todos los modelos y los campos de delet

-Se crearon los controladores para la creacion de datos en la base de datos tomando los datos de woocommerce para pasar informacion del sistema de woocommerce al nuevo sistema.

rmrd => 1.0.9

- Se creo tabla de atributos y controlador.

rmrd => 1.0.10

- Se corrigieron detalles.


rmrd => 1.0.11

- Se corrigieron letras de mayuscula a minuscula en mv_direccion y se asiganron nuevos atributos en cliente y ordenes.

rmrd => 1.0.12

- Se corrigieron campos en las tablas de clientes y ordenes.

rmrd => 1.0.13

- Se corrigieron errores de sintaxis

rmrd => 1.0.14

- Se arreglo error de creacion de tablas, el tipo de data DECIMAL(18, 6) no es admitido

rmrd => 1.0.15

- Se asignaron los datos para guardar informacion en las tablas de clientes 

rmrd => 1.0.16

- Se modifico el server

---

E.R.F.N. => 1.0.17
13-05-2021

- Implementacion & optimización de Controllers para WooComerce

---

rmrd => 1.0.18
13-05-2021

- Implementacion de clientes 


rmrd => 1.0.19
14-05-2021

- Implementacion de clientes y productos terminada

---

E.R.F.N. => 1.0.20
20-05-2021

- Implementacion de controllers para CRUD & otras operaciones de BBDDD
- Optimización de organziación de flujo de procesos
- Optimización de funcionalidad en ciertas funciones

---


R.M.R.D. => 1.0.21
21-05-2021

- Procesos de insercion y busqueda de datos en las tablas referente a las ordenes completada
- Procesos de insercion y busqueda de datos en las tablas referente a los clientes completada
- Procesos de insercion y busqueda de datos en las tablas referente a los productos completada

---

R.M.R.D. => 1.0.22
21-05-2021

- Tablas corregidas en estatus y productos

R.M.R.D. => 1.0.23
24-05-2021

- Errores corregidos en clientes, tabla de direcciones

- Consultas funcionando sin error alguno

R.M.R.D. => 1.0.24
25-05-2021

- Para todos las cosultas pasaron de ser de ordenes: 1 2 3 4, clientes: 5 6 7 8, productos:9 10 11 a solo ser caso 1 2 y 3 a elegir para ordenes, clientes y productos

M.M.A => 1.0.25 28-05-2021

- Se eliminaron inserciones de cross sell y upsell hasta definir como insertar un array
- Se elimino la insercion de unidad de medida y unidad de servicio SAT

R.M.R.D. => 1.0.26 28-05-2021

- Se creo relacion entre categorias y productos, falta etiquetas

R.M.R.D. => 1.0.27 31-05-2021

- Se crearon relaciones de muchos a muchos en las tablas relacionadas a productos (categorias y etiquetas)


R.M.R.D. => 1.0.27 01-06-2021

- Se crearon opcion para relacionar tablas etiquetas y categorias de manera separada


R.M.R.D. => 1.0.28 05-06-2021

- Se crearon metodos POST para las listas de precios y se corrigieron orden de datos en los controladores para ordenesdetalles

R.M.R.D. => 1.0.29 05-06-2021

- Se corrigieron la insercion de datos en ordenes detalles

R.M.R.D. => 1.0.30 09-06-2021

- Se crearon catalogos para unidades sat y servcios productos sat para insertar de manera rapida a la
base de datos

R.M.R.D. => 1.0.31 09-06-2021

- Se creo un metodo para subir datos de woocomercer paginados en 100 por subida (falta iterar las paginas para no imprimir el mismo dato)

R.M.R.D. => 1.0.31 09-06-2021

- Pendiente solucionar iteracion en el caso 3 de ordenes.

R.M.R.D. => 1.0.31 14-06-2021

- Problema de iteraccion resuelto
- subida de datos para ordenes y productos por pagina funcionando (arreglar detalle de tiempo de espera)

R.M.R.D. => 1.0.32 18-06-2021

- Insercion de agentes y unidad sat completada


R.M.R.D. => 1.0.33 22-06-2021

- Insercion de lista de precios terminada

R.M.R.D. => 1.0.34 24-06-2021

- Insercion de productos, ordenes, clientes y lista de precios terminada.

R.M.R.D. => 1.0.35 25-06-2021

- Se agrego el campo de imagenes a la tabla de productos para mostrar imagen de los productos.

R.M.R.D. => 1.0.36 29-06-2021

- Se actualizaron algunos datos en los modelos de clientes, categorias, etiquetas, ordenes y productos.

- Se eliminaron por el momento los modelos para unidad SAT y servico del producto.

- Se corrigio error de insercion de datos en categorias y etiquetas.


R.M.R.D. => 1.0.37 30-06-2021

- Se corrigieron errores en el detalle de lista de precios.

R.M.R.D. => 1.0.38 02-07-2021

- Relacion de muchos a muchos terminada entre categorias y productos.

- Relacion de muchos a muchos terminada entre etiquetas y productos.

R.M.R.D. => 1.0.39 09-07-2021

- Error de validacion en la tabla productos corregido.

R.M.R.D. => 1.0.40 13-07-2021

- API lista para funcionar.

R.M.R.D. => 1.0.41 14-07-2021

- Resolves asignados en las repuestas al API.

R.M.R.D. => 1.0.42 20-07-2021

- Se corrigio error de imagenes en productos.

- Obtencion de clientes desde woocomerce terminado.

- Campo de precio unitario en los detalles de las ordenes asignado.

R.M.R.D. => 1.0.43 21-07-2021

- Relacion de clientes y ordenes terminada.

R.M.R.D. => 1.0.44 24-07-2021

- Resolves asignados(queda pendiente el de agentes).

R.M.R.D. => 1.0.45 24-07-2021

- Se insertaron nuevos campos en productos.
- La actualizacion en lista de precios esta en proceso.

R.M.R.D. => 1.0.46 24-07-2021

- La actualizacion en lista de precios terminada.

- Coneccion con GRAPHQL establecida

R.M.R.D. => 1.0.47 24-07-2021

- Resolve en agentes actualizado

R.M.R.D. => 1.0.48 11-09-2021

- Metodos post creados para todas las peticiones
- Modelos de tasas creadas
- Insercion y actualizacion de lista de precios terminada
- Insercion y actualizacion para los productos terminada
- Metodos get del sistema usando la base local en proceso.

R.M.R.D. => 1.0.49 17-09-2021

- Se corrigieron detalles

R.M.R.D. => 1.0.50 29-09-2021

- Metodo para mostrar productos terminado


R.M.R.D. => 1.0.51 01-10-2021

- Metodo para exportar productos por archivo .json terminado

R.M.R.D. => 1.0.52 04-10-2021

- Metodo para exportar productos completos por archivo .json terminado

R.M.R.D. => 1.0.53 05-10-2021

- Metodos para traer datos completos y por empresa corregidos y terminados

R.M.R.D. => 1.0.54 09-10-2021

- Metodos para actualizar productos y ordenes en la nube y en woocommerce al mismo tiempo, terminados
- Mejoras en la lista de precios

R.M.R.D. => 1.0.55 11-10-2021

- Correcciones en la insercion de datos.

R.M.R.D. => 1.0.56 16-10-2021

- Definicion para mostrar listas de precios terminada.

R.M.R.D. => 1.0.57 19-10-2021

- Mostrar y exportar productos terminado.
- Mostrar y exportar ordenes terminado.
- Mostrar y exportar clientes terminado.
- Mostrar y exportar listas de precio terminado.

R.M.R.D. => 1.0.58 04-12-2021

- Correcciones en los modelos de tablas y controladores en general .

R.M.R.D. => 1.0.59 08-12-2021

- Impuestos corregidos

R.M.R.D. => 1.0.60 20-12-2021

- Atributos de altura, ancho, peso y largo de un producto asignado

R.M.R.D. => 1.0.61 20-12-2021

- Correcion en el nombre de la base de datos en las
peticiones de mostrar productos y ordenes

R.M.R.D. => 1.0.62 21-12-2021

- Correcion en el nombre de la base de datos en las
peticiones de mostrar productos

R.M.R.D. => 1.0.63 27-12-2021

- Peticion para guardar archivos JSON de productos, ordenes, clientes y listas de precio en S3

R.M.R.D. => 1.0.64 28-12-2021

- Correccion de errores en la peticion para mostrar ordenes 

R.M.R.D. => 1.0.64 12-01-2022

- Nuevas peticiones para asignar agentes, ctageorias, etiquetas y relaciones.

- Peticion para actualizar productos terminada.
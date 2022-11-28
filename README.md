![](public/fabihogar.gif)

# Fabihogar - Proyecto E-commerce 

#### Profesor de React: **Eric Wajnrajch**
#### Alumno: **Luis Belisario**

Proyecto final de React en CoderHouse, consiste en la construcción de un e-commerce empleando la librería de react, capaz de mostrar diversos productos al usuario, ver detalle del producto, carrito de compras, interactuar con la base de datos en firestore, consultar detalle de compras. A continuación se detalla en mas profundidad las herramientas empleadas y su uso dentro del proyecto. 

Para la elaboración de este proyecto decidí trabajar con requerimientos lo mas reales posibles, por lo que trabajé con una tienda física ubicada en la Ciudad de Buenos Aires, de la cual se puede observar su fachada en la siguiente imagen.

![](src/assets/images/3localFabihogar.jpg)

## FrameWork utilizado

En este proyecto trabajé con [Bootstrap](https://getbootstrap.com/), el mismo me permitió aprender a como poder integrar este framework con react; además, este marco de trabajo me dió la posibilidad de crear un proyecto responsive con menor cantidad de horas de desarrollo y aceleró los arreglos estéticos del e-commerce, lo que se tradujo en mas tiempo para mejorar la estructura aplicada bajo la librería react. 

## Librerías utilizadas

- [Firebase](https://firebase.google.com/?hl=es-419&gclid=Cj0KCQiAsoycBhC6ARIsAPPbeLswEcLbqL4NCvAvpeHVlcq_RBgKhIkv4i8rTanC0AswthND-C98dAoaAtTDEALw_wcB&gclsrc=aw.ds): Fue empleada para almacenar la información de la base de datos del proyecto, tambien fue empleada para almacenar los items que son comprados, contacto de usuarios y el newsletter del e-commerce.

- [Google Fonts](https://fonts.google.com/knowledge): Esta librería aportó las imagenes de los iconos usados dentro del e-commerce, especificamente el del carrito de compras y el del buscador.

- [React-router-dom](https://reactrouter.com/en/main): La librería fue instalada mediante un paquete npm, la misma me permitió enrutar de forma dinámica el e-commerce. Principalmente realicé uso de las palabras reservadas "Link" y "NavLink", mediante las cuales es posible tener mayor dinamismo al momento de gestionar las rutas para la navegación del sitio.

- [React-spinners](https://www.npmjs.com/package/react-spinners): La librería fue instalada mediante un paquete npm, la misma me permitió insertar una animación indicativa de que el sítio esta trabajando con una promesa, por lo que mientras retorna la respuesta de la base de datos se puede observar la animación, de esta forma el usuario entiende que se está buscando la información solicitada o que se está llevando acabo un proceso. El Spinner empleado tiene el nombre de SyncLoader.

## Funcionalidades dentro del e-commerce

1. El administrador del sitio puedo manejar comodamente la base de dato del e-commerce por medio de Firebase.
2. El administrador del sitio posee la capacidad de cambiar a su conveniencia las categorías a mostrar dentro del e-commerce por medio de Firebase.
3. El administrador del sitio puede recibir los correos de los usuarios que deseen recibir publicaciones de ofertas y promociones mediante la casilla newsletter ubicada en el footer del sitio, los mismos se reciben y almacenan en Firebase.
4. El administrador del sitio puede recibir los datos e información de personas que desean ser contactadas para diferentes fines y consultas, los mismos se reciben y almacenan en Firebase.
5. El Usuario puede navegar por todos los links presentes en la barra de navegación, pudiendo escojer la categoría de los productos que se muestran en pantalla.
6. El Usuario puede elejir entre diversos productos mostrados en la página de inicio.
7. El Usuario puede ver el detalle de los productos que seleccione. En ese detalle podrá seleccionar la cantidad de productos que desee por medio de un contador. Dicho contador está enlazado con el precio de la unidad, resultando posible la totalización de todas las unidades. Tambien posee un botón de reset que reinicia el contador. 
8. El Usuario tiene acceso a un carrito de compras, si no posee artículos en el carrito se le renderiza un detalle que lo invita a ver mas productos, si por el contrario posee unidades seleccionadas, primeramente verá la cantidad en un número ubicado al lado del carrito de compras, y también verá todos los productos seleccionados en el carrito de compra, pudiendo:
* Revisar el detalle de cada producto.
* Volver al detalle de cada producto.
* Eliminar los Productos.
* Vaciar el carrito de compras.
* Acceder al CheckOut.
9. El Usuario tiene acceso al CheckOut, donde verá un resumen de los artículos a comprar, se le pedirán los datos de envío, y se presenta un chequeo del mail, en donde no se habilitará el botón de compra hasta tanto no coincidan los correos electrónicos.
10. El Usuarío al continuar con la compra verá la identificación con la que podrá hacer seguimiento de su compra, ademá puede acceder a un botón que lo conducirá a un componente en el que podrá ver el estado de su compra, el mismo estará desabilidado si no se cargan en el imput al menos 20 caracteres, lo que corresponde con los códigos de administración de compras del e-commerce.

## Pasos para correr el proyecto en local

1. Clonar el repositorio

```
git clone https://github.com/Lebs87/fabihogar.git
```
2. Abrirlo en un editos de código e instalar las dependencias

```
npm install
```
3. Correr el proyecto en Local
```
npm start
```
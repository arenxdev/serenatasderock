# FIREBASE PARA LA WEB

## BIENVENIDA E INTRODUCCIÓN

### INTRODUCCIÓN

Bienvenido al Curso de Firebase para Web, vamos a construir un blog usado diferentes servicios de Firebase:

- Creación y autenticación de usuarios por email y redes sociales.
- Correos electrónicos para validar y recuperar contraseñas.
- Reglas de seguridad.
- Almacenamiento de publicaciones e imágenes en Firebase Storage.
- Despliegue de nuestras aplicaciones con Firebase Hosting.
- Notificaciones en tiempo real para anunciar cambios de nuestro blog.

Esta vez nuestro profesor es Juan Guillermo Gómez, Google Developer Expert en la plataforma de Firebase.

### ¿QUÉ ES FIREBASE?

Firebase es un Backend como Servicio, es decir, esta herramienta nos permite conectarnos desde cualquier aplicación a las tareas de backend y despliegue de nuestras aplicaciones de forma mucho más simple, mantenible y escalable.

Tareas como crear y autenticar usuarios, guardar nuestra información en bases de datos, almacenar archivos estáticos, administrar la infraestructura, analizar métricas, entre muchas otras. Gracias a Firebase automatizamos y agilizamos todos estos servicios en una misma plataforma integrada sobre la infraestructura de Google Cloud.

Servicios de Firebase para la Web:

- Cloud Firestore: Almacenamiento y sincronización de los datos de nuestra aplicación a escala global, funciona como una base de datos NoSQL.
- Autenticación: Autenticación de usuarios de manera simple, rápida y segura con email y contraseña, redes sociales o mensajes de texto.
- Cloud Storage: Almacenar y atender nuestros archivos (imágenes, vídeos, etc) a la escala de Google.
- Cloud Messaging: Envío de mensajes y notificaciones segmentadas.
- Hosting: El sistema de Google Cloud para almacenar la información de nuestra página web.
- Cloud Functions: Administración del código de backend necesario para desplegar nuestras aplicaciones a los servidores de Google Cloud.
- Integraciones: Podemos conectar las funciones de Firebase a otros servicios de Google (Google Ads, Google Marketing Platform, entre otras) o incluso a servicios de terceros como Slack, Data Studio y BigQuery.

### CONFIGURACIÓN DE FIREBASE EN EL PROYECTO

Vamos a crear nuestro proyecto sin ningún framework de JavaScript, solo un archivo index.html, los estilos de la aplicación con CSS y algunos archivos de configuración para crear un servidor local mientras subimos el proyecto a un servidor de verdad. Toda la lógica de nuestra aplicación esta lista, así que podemos concentrarnos en construir la conexión Firebase y terminar algunas funcionalidades.

Lo primero que debemos añadir para crear nuestros proyectos son los archivos de Firebase, uno con el código base de la librería y otro para cada servicio que utilizamos en nuestra aplicación. Gracias a esta división nuestra aplicación puede cargar menos archivos y funcionar mucho más rápido.

## AUTENTICACIÓN DE USUARIOS

### SERVICIOS DE AUTENTICACIÓN Y CONFIGURACIÓN DE USUARIOS

Firebase nos proporciona una configuración muy sencilla para manejar la creación de usuarios, inicio de sesión y logout de la aplicación con email y password o con redes sociales (Google Accounts, Facebook, Twitter, Github o incluso nuestros proveedores personalizados).

Firebase nos proporciona SDKs (Software Development Kits) para facilitar la programación y configuración de estas funcionalidades en los lenguajes y plataformas más comunes, en caso de no encontrar estas librerías oficiales podemos encontrar diferentes herramientas creadas por la comunidad. Tambien tenemos acceso y control muy personalizado de toda esta información gracias a la Consola de Firebase.

Gracias al servicio de autenticación de usuarios de Firebase podemos ahorrar mucho tiempo programando estas mismas funcionalidades por nuestra cuenta.

### HABILITAR EN LA CONSOLA LOS SERVICIOS DE AUTENTICACIÓN POR EMAIL Y GOOGLE

Después de habilitar los servicios de autenticación con email y Google Accounts podemos programar el código necesario para enviar la información de los usuarios cuando se registran en nuestra aplicación.

Nuestro proyecto tiene lista la UI del formulario para el registro, los usuarios deben escribir sus datos básicos y al momento de hacer click en el botón vamos a ejecutar la función Autenticación.crearCuentaEmailPass del archivo autenticacion.js, solo debemos llamar al método firebase.auth().createUserWithEmailAndPassword con los datos más importantes del usuario. Además, si el registro es exitoso podemos actualizar el resto de información de los usuarios con el método user.updateProfile o mandar las verificaciones que necesitemos.

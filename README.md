# Guía para Levantar el Proyecto
## 1. Preparación
Antes de comenzar, asegúrate de tener instalado lo siguiente:

Node.js: Necesitarás Node.js para ejecutar tanto el frontend como el backend.
MySQL: Asegúrate de tener MySQL instalado y configurado.

## 2. Backend (API)
Abre una terminal y navega hasta la carpeta api de tu proyecto.
Ejecuta el siguiente comando para instalar las dependencias:
```npm install```

Crea un archivo .env en la carpeta api y configura las variables de entorno necesarias (por ejemplo, la cadena de conexión a la base de datos).
Ejecuta el siguiente comando para iniciar el servidor:
```npm start```
El backend estará disponible en http://localhost:3000.

## 3. Base de Datos
Abre MySQL Workbench u otra herramienta de administración de MySQL.
Crea una nueva base de datos llamada “facturaciondb”:
SQL

```CREATE DATABASE facturaciondb;```

## 4. Frontend (Facturación App)
Abre otra terminal y navega hasta la carpeta facturacion-app.
Ejecuta el siguiente comando para instalar las dependencias:
```npm install```

Crea un archivo .env en la carpeta facturacion-app y configura las variables de entorno necesarias (por ejemplo, la URL del backend).
Ejecuta el siguiente comando para iniciar la aplicación:
npm start
El frontend estará disponible en http://localhost:3001.
## 5. Acceso a la Aplicación
Abre tu navegador y accede a http://localhost:3001. Deberías ver la interfaz de tu aplicación. ¡Listo!

Recuerda personalizar esta guía según las particularidades de tu proyecto. Si tienes alguna pregunta adicional o necesitas más detalles, no dudes en preguntar. ¡Buena suerte con tu documentación! 😊
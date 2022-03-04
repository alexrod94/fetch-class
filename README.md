## Pasos para instalar DB.json

- Usar el comando global "npm install -g json-server"
- Crear en la carpeta del proyecto un archivo llamado "db.json"
- Crear en este archivo la estructura del "API" (ejemplo dentro de este repositorio)
- Para lanzar el API, usar comando "json-server --watch db.json"

## Hacer llamadas a DB.json

Para hacer llamadas al API que hemos creado, tendremos que apuntar a la URL http://localhost:3000/. Más allá de eso, cada tipo de datos tendrá un endpoint distinto.

Por ejemplo, podremos hacer las llamadas de "Posts" en http://localhost:3000/posts

### ¿Cómo podemos hacer llamadas para comprobar que todo funciona?

Tenemos tres opciones:

- La aplicación de escritorio de Postman (no la versión de navegador)
- Thunder Client (extensión para VS Code)
- Fetch desde nuestro JavaScript

#Next.js OpenJira App

*Reconstruir los modulos de node

```
npm run install
npm run dev
```

si se usa pnpm:
```
pnpm install
pnpm dev
```

Para correr localmente se necesita la base de datos
```
docker-compose up -d
```

* El -d, significa __detached__

* MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

##Configurar las variables de entorno

Renombrar el archivo __.env.template__ a __.env__

##Llenar la base de datos con informacion de pruebas

Llamar a:

```
http://localhost:3000/api/seed
```
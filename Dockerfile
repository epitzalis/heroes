# Primera etapa

FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build --prod

# Segunda etapa

FROM nginx:1.17.1-alpine

COPY --from=build-step app/dist/heroes /usr/share/nginx/html


# docker build -t heroesapp .                 -> Crea una imagen llamada heroesapp a partir del Dockerfile
# docker images                               -> Nos devuelve las imagenes que tenemos en local, deberíamos ver heroesapp
# docker run -d -it --rm -p 80:80 heroesapp   -> Crea un contenedor de la imagen heroesapp en el puerto 80, que se eliminará después de pararla



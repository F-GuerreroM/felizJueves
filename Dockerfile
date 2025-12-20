# Etapa 1: Build
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Nginx
FROM nginx:alpine

# Borramos la página por defecto de Nginx para evitar confusiones
RUN rm -rf /usr/share/nginx/html/*

# Copiamos TUS archivos (el comodín * arregla el problema de carpetas anidadas)
COPY --from=build /app/dist/*/browser/* /usr/share/nginx/html/

# Copiamos TU configuración (ESTO ES LO QUE FALTABA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

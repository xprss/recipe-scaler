# Stage 1: Build Angular
FROM node:22-alpine AS build

WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve with nginx
FROM nginx:alpine

# Rimuove config default
RUN rm /etc/nginx/conf.d/default.conf

# Config custom
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build Angular
COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

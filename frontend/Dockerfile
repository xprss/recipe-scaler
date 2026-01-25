# Stage 1: Build Angular
FROM node:22-alpine AS build

# Set working directory
WORKDIR /frontend

# Add node_modules/.bin to PATH
ENV PATH=/frontend/node_modules/.bin:$PATH

# Copy only package files first (caching npm install)
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build Angular ignoring budgets
RUN npm run build -- --configuration production

# Stage 2: Nginx
FROM nginx:alpine

# Remove default Nginx config
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/recipe-scaler.conf

# Copy Angular dist from build stage
COPY --from=build /frontend/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

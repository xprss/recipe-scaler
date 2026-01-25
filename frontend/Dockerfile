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

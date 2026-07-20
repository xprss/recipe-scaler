FROM node:22-alpine AS deps

WORKDIR /backend
COPY package*.json ./
RUN npm install

FROM node:22-alpine AS build

WORKDIR /backend
COPY --from=deps /backend/node_modules ./node_modules
COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM node:22-alpine AS runtime

WORKDIR /backend
ENV NODE_ENV=production
COPY --from=build /backend/dist ./dist
COPY --from=build /backend/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000
CMD ["node", "dist/main.js"]

# Étape 1 : Build de l'application
FROM node:20-alpine AS builder

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie du code source
COPY . .

# Build de production
RUN npm run build

# Étape 2 : Serveur web léger pour servir les fichiers
FROM nginx:alpine

# Copie des fichiers buildés vers Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuration Nginx pour SPA (gère le routing React)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose le port 80
EXPOSE 80

# Démarre Nginx
CMD ["nginx", "-g", "daemon off;"]


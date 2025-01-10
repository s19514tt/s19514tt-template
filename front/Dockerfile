# Stage 1: Build the Vue.js application
FROM node:22-alpine as build-stage

# Set working directory
WORKDIR /app

# Install dependencies
COPY ./front/package*.json ./
RUN npm install

# Copy the source code
COPY ./front .

COPY ./server/src/shared-types ./src/shared-types

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine as production-stage

# Copy the built files from the previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

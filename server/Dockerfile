# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before running npm install (for caching purposes)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build TypeScript files
RUN npm run build

# Set the command to run the application
CMD ["node", "./dist/main.js"]

# Expose the ports the application uses
EXPOSE 8000

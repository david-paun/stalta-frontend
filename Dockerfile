# Use Node.js as the base image
FROM node:20.11.1-bookworm

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY . .

# Install dependencies
RUN npm ci

# Run Angular development server with host 0.0.0.0 to allow access from host machine
CMD ["npm", "run", "docker"]


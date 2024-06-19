# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/react-app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the application
CMD [ "npm", "run", "start" ]
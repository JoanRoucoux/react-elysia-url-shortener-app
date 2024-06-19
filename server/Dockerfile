# Use an official Bun runtime as the base image
FROM oven/bun:alpine

# Set the working directory
WORKDIR /usr/src/bun-app

# Copy package.json and bun.lockb to the container
COPY package*.json ./
COPY bun.lockb ./

# Install application dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Run the application
CMD [ "bun", "run", "start" ]
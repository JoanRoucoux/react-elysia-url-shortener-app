# URL Shortener App

This application allows to converts long URLs into shorter, more readable links, making them easier to share:
- It uses Redis as cache.
- It uses MongoDB as database.
- It uses Nginx as a load balancer, and a reverse proxy for the server.
- The application is containerized by Docker.

## Stack

| Client  | Server | Cache | Database |
| ------------- | ------------- | ------------- | ------------- |
| React | ElysiaJS (Bun) | Redis | MongoDB |
| RTK Query | Mongoose |
| Material UI |

## Architecture
<img width="602" alt="Screenshot 2024-06-19 at 22 56 40" src="https://github.com/JoanRoucoux/react-elysia-url-shortener-app/assets/21682157/5bd5570e-e00a-46e3-b176-d5d3339ec04d">

## Demo
![react-elysia-url-shortener-app](https://github.com/JoanRoucoux/react-elysia-url-shortener-app/assets/21682157/1e9ccd27-c1ae-4495-bc14-726ffe4a49c9)

## Getting Started

1. Clone project
```bash
git clone https://github.com/JoanRoucoux/react-elysia-url-shortener-app
```

2. Navigate to the project directory
```bash
cd react-elysia-url-shortener-app
```

3. Create a .env file
```bash
MONGODB_USER=user
MONGODB_PASSWORD=pass
MONGODB_DATABASE=urls
MONGODB_HOST=mongo
MONGODB_LOCAL_PORT=27017
MONGODB_DOCKER_PORT=27017

REDIS_HOST=redis
REDIS_LOCAL_PORT=6379
REDIS_DOCKER_PORT=6379

BUN_LOCAL_PORT=8080
BUN_DOCKER_PORT=8080

NGINX_HOST=localhost
NGINX_LOCAL_PORT=3030
NGINX_DOCKER_PORT=80

VITE_APP_LOCAL_PORT=5173
VITE_APP_DOCKER_PORT=5173
VITE_API_BASE_URL=http://${NGINX_HOST}:${NGINX_LOCAL_PORT}/api/v1
```

4. Start the containers with docker compose
```bash
docker compose up --build
```

5. Enjoy 😊

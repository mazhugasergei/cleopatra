![Cleopatra Trading Co.](./images/banner.jpg)

# Cleopatra Traiding Co. - Dockerized Setup

This repository contains a **Dockerized** setup for a full-stack web application, including **backend**, **frontend**, and **Nginx** as a reverse proxy.

## Tech stack used

1. **TypeScript**
2. **React**
3. **Next.js**
4. **Tailwind CSS**
5. **Prettier**
6. **Storybook**
7. **NestJS**
8. **Docker**
9. **Docker Compose**
10. **Nginx**

## Getting Started

Ensure you have the following installed:

- Docker ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose ([Install Docker Compose](https://docs.docker.com/compose/install/))

## Running in Development Mode

If no compose file specified Docker will pick `docker-compose.yml` as the base and `docker-compose.override.yml` by default that will run services in **dev** mode.

### Starting Development

```sh
docker-compose up --build
```

### Stopping Development

```sh
docker-compose down
```

### Troubleshooting

If Hot Module Replacement (changes on save) does not work, check `docker-compose.override.yml` environment and uncomment some variables.

## Running in Production Mode

Docker will pick `docker-compose.yml` as the base and `docker-compose.prod.yml` that will run services in **prod** mode.

### Starting Production

```sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
```

### Stopping Production

```sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
```

To also remove **volumes**:

```sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v
```

## Troubleshooting

If you run into issues:

1. Check logs → `docker-compose logs -f`
2. Rebuild images → `docker-compose up --build --no-cache`
3. Ensure port `80` is free.

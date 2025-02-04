# base-stage
FROM node:22-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# development-stage
FROM base AS dev
COPY . .
CMD ["npm", "run", "start:dev"]

# build-stage (for production)
FROM base AS build
COPY . .
RUN npm run build

# production-runner
FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=build /app/dist dist
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/package.json package.json
CMD ["node", "dist/main"]

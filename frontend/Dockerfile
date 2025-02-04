# multi-stage-dockerfile
FROM node:22-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# development-stage
FROM base AS dev
COPY . .
CMD ["npm", "run", "dev"]

# build-stage-for-production
FROM base AS build
COPY . .
RUN npm run build

# production-runner
FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=build /app/.next .next
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/package.json package.json
COPY --from=build /app/public public
CMD ["node", "node_modules/.bin/next", "start"]

# base stage
FROM oven/bun:1.1.13-alpine AS base
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# development stage
FROM base AS dev
COPY . .
CMD ["bun", "run", "dev"]

# build stage for production
FROM base AS build
COPY . .
RUN bun run build

# production runner
FROM oven/bun:1.1.13-alpine AS runner
WORKDIR /app
COPY --from=build /app/.next .next
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/package.json package.json
COPY --from=build /app/public public
CMD ["bun", "run", "start"]

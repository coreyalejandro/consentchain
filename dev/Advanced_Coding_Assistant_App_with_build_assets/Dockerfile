# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* yarn.lock* package-lock.json* ./
# Install PNPM via corepack (preferred), fallback to npm if needed
RUN corepack enable && corepack prepare pnpm@9 --activate || true
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile;     elif [ -f package-lock.json ]; then npm ci;     elif [ -f yarn.lock ]; then yarn install --frozen-lockfile;     else pnpm install --frozen-lockfile || npm ci; fi

# Copy rest of the project
COPY . .
# Build
RUN if [ -f package.json ]; then         if cat package.json | grep -q '"build"'; then             pnpm build || npm run build;         else             echo 'No build script found in package.json' && exit 1;         fi;     fi

# --- Runtime stage ---
FROM nginx:stable-alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
# Basic health check
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ || exit 1
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci

COPY . .
RUN npm run build
RUN npx prisma generate

FROM node:18-alpine AS production
WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]

FROM node:18-alpine AS dev
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci && npm cache clean --force
RUN npx prisma generate
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
# Stage 1: Build
FROM node:latest as builder

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

# Stage 2: Run
FROM node:latest

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app

CMD ["npm", "start"]

FROM node:10.2 AS builder
WORKDIR /app
RUN npm install -g @angular/cli ionic
COPY app/ .
RUN node -v && cd /app && ls && npm install && ionic build --engine=browser --prod

FROM nginx:alpine
WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /www .
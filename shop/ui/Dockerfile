FROM nginx:1.25-alpine
WORKDIR /app

COPY ./dist/ui /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

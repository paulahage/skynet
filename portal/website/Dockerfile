FROM nginx:1.25-alpine
WORKDIR /app

COPY ./build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

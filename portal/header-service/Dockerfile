FROM nginx:1.25-alpine

COPY ./header-dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

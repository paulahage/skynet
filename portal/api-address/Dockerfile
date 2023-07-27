FROM node:20-alpine
WORKDIR /app

ENV APP_SECRET_TOKEN="0b48d594-288e-11ee-be56-0242ac120002"

COPY src src
COPY package*.json ./
RUN npm install --only=production


EXPOSE 8000

CMD ["node", "src/index.js"]

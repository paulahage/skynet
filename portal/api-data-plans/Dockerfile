FROM node:20-alpine
WORKDIR /app

ENV APP_SECRET_TOKEN="a04fd1df-598c-4529-b02e-acfe053a1249"

COPY src src
COPY package*.json ./
RUN npm install --only=production

CMD ["node", "src/index.js"]

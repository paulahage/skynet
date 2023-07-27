FROM node:20-alpine
WORKDIR /app

ENV APP_SECRET_TOKEN="39c7c6c1-3000-495a-a9c4-e13510a75f2e"

COPY index.js ./
COPY package*.json ./
COPY header-dist ./
RUN npm install --only=production

CMD ["node", "index.js"]

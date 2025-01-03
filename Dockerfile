FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && npm install --production

COPY . .

EXPOSE 5050

CMD ["npm", "start"]

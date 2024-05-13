#prod version
FROM node:16-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install
RUN npm install -g prisma

RUN npx prisma generate

COPY . .

RUN npm run build

RUN chmod +x /app/start.sh

CMD ["/app/start.sh"]
FROM node:12.13.1
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn tsc --project .
EXPOSE 3000
CMD ["node", "dist/index.js"]
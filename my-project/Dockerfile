FROM node:18-alpine
WORKDIR /app 
COPY package.json . 
RUN npm i --save
RUN npm run build
COPY . .
EXPOSE 5005
CMD ["npm", "run", "dev"]
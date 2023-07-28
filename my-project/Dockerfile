FROM node:18-alpine
WORKDIR /app 
COPY package.json . 
RUN npm i --save
COPY . .
EXPOSE 5005
CMD ["npm", "run", "dev"]
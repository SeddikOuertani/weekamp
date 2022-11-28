FROM node:14.21.1-alpine
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start
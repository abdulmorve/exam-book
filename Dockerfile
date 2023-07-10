
FROM node
WORKDIR /src
COPY . .
EXPOSE 17000
CMD node server.js


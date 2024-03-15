FROM node:18-alpine
WORKDIR /todo-server/
COPY package.json /todo-server/
RUN npm install
COPY . .
CMD ["npm","run", "dev"]

FROM node:18-alpine
WORKDIR /todo-ui/
COPY public/ /todo-ui/public
COPY src/ /todo-ui/src
COPY package.json /todo-ui/
COPY tsconfig.json /todo-ui/
RUN npm install
CMD ["npm", "start"]
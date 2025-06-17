FROM cypress/base:latest

WORKDIR /home/cypress

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]

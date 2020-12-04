FROM node:current-slim

WORKDIR /home/marcos/Documentos/development/

COPY package.json .

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs

RUN npm install

CMD ["npm", "start"]

COPY . .

#tentativa de dorcker file. 
#The command '/bin/sh -c npm install' returned a non-zero code: 1
#provavelmente erro na hora de instalar os pacotes do npm
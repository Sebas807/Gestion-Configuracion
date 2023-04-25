FROM node:19-alpine

WORKDIR /ProyectoGestion

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000
CMD ["npm",".start"]

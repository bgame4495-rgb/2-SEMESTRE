# usamos a versão 22 do Node.js baseada em Alpine para uma imagem leve
FROM node:22-alpine

WORKDIR /app

#copiamos os arquivos de dependências primeiro para aproveitar o cache do Docker

COPY package*.json ./

RUN npm install
#copiamos o restante dos arquivos do projeto para a imagem

COPY . .
#expondo a porta 5173 para acesso ao servidor de desenvolvimento do Vite

EXPOSE 5173
#definindo o comando para iniciar o servidor de desenvolvimento do Vite, permitindo acesso externo com a opção --host

CMD ["npm", "run", "dev", "--", "--host"]
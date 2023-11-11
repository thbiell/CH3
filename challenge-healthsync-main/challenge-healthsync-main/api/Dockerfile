# Use uma imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /src

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação Node.js estará em execução
EXPOSE 8080

# Comando para iniciar a aplicação Node.js
CMD ["npm", "start"]

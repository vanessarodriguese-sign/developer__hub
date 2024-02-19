# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o contêiner
COPY . .

# Instale as dependências do projeto
RUN npm install

# Exponha a porta necessária pelo aplicativo
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "start"]

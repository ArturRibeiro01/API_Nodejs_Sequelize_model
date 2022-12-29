# API_Nodejs_Sequelize_model



<!-- LINK DAS AULAS -->
https://www.youtube.com/watch?v=bnGKctadkuw












<!-- Passo a passo -->

<!-- 1 Instalar express (controle de rotas) -->
yarn add express

<!-- 1 Instalar o sequelize (Manipular o banco de dados pelo nodejs) As duas extensões  -->
yarn add sequelize
yarn add sequelize-cli -D


<!-- 1 Instalar nodemon (Atualiza a aplicação automáticamente ao salvar) -->
yarn add nodemon -D

<!-- Não esquecer de apontar para o nodemon o arquivo de atualização , incluindo o script -->
  "scripts": {
    "dev": "nodemon src/index.js"
  },

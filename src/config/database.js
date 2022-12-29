module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: 'Artur@17118901',
  database: 'crud_api_nodejs_sequelize',

  define: {
    timestamp: true, // timestamp cria os registros Created At updatedAt automaticamente
    underscore: true, // troca a nomemclatura natural de de CamelCase para underscore  ex( nomeCompleto -> nome_completo)
    // underscoreAll: true, // deixa tudo como underscore
  }
}

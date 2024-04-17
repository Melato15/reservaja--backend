const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost", // Coloque o host do seu banco de dados
  username: "root", // Coloque o usuário do seu banco de dados
  password: "3d4f5y62d", // Coloque a senha do seu banco de dados
  database: "reserva_ja", // Coloque o nome do seu banco de dados
});

const models = {
  User: require("./user")(sequelize, Sequelize),
};

Object.values(models)
  .filter((model) => typeof model.associate === "function")
  .forEach((model) => model.associate(models));

module.exports = {
  sequelize,
  ...models,
};

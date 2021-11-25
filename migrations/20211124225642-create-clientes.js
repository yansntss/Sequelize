"use strict";

const { STRING } = require("sequelize/dist");

module.exports = {
  //versao acima  avançando versoes
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("clientes", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      email: Sequelize.STRING,
    });
   
  },

  // versao abaixo desfazendo coisas
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clientes');
  },
};

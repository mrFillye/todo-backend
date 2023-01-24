"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("todos", "createdAt", {
        type: "TIMESTAMP",
        allowNull: false,
      }),
      await queryInterface.addColumn("todos", "updatedAt", {
        type: "TIMESTAMP",
        allowNull: false,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeColumn("todos", "createdAt", {
        type: "TIMESTAMP",
        allowNull: false,
      }),
      await queryInterface.removeColumn("todos", "updatedAt", {
        type: "TIMESTAMP",
        allowNull: false,
      }),
    ]);
  },
};

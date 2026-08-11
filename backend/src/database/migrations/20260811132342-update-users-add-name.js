'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Nombre completo',
    });

    await queryInterface.addColumn('users', 'lastname', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Nombre completo',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'name');
    await queryInterface.removeColumn('users', 'lastname');
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('users', 'lastname', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('users', 'name');
    await queryInterface.removeColumn('users', 'lastname');
  }
};

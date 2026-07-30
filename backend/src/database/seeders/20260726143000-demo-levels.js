'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('levels', [
      {
        id: 1,
        name: 'Semilla',
        minPoints: 0,
      },
      {
        id: 2,
        name: 'Nivel 2',
        minPoints: 100,
      },
      {
        id: 3,
        name: 'Nivel 3',
        minPoints: 300,
      },
      {
        id: 4,
        name: 'Nivel 4',
        minPoints: 400,
      },
      {
        id: 5,
        name: 'Nivel 5',
        minPoints: 500,
      },
      {
        id: 6,
        name: 'Nivel 6',
        minPoints: 600,
      },
      {
        id: 7,
        name: 'Nivel 7',
        minPoints: 700,
      },
      {
        id: 8,
        name: 'Nivel 8',
        minPoints: 800,
      },
      {
        id: 9,
        name: 'Nivel 9',
        minPoints: 900,
      },
      {
        id: 10,
        name: 'Brote',
        minPoints: 1000,
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('levels', null, {});
  }
};

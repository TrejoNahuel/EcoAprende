'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('modules', [
      {
        title: 'Reciclaje en casa',
        description: 'Aprendé a separar residuos correctamente, identificar materiales reciclables y reducir la cantidad de basura que generás en tu hogar.',
      },
      {
        title: 'Huella de carbono',
        description: 'Descubrí qué es la huella de carbono, cómo se calcula y qué acciones cotidianas pueden ayudar a disminuir tu impacto ambiental.',
      },
      {
        title: 'Consumo responsable',
        description: 'Conocé hábitos de compra sostenibles, elegí productos con menor impacto ambiental y promové un consumo más consciente.',
      },
      {
        title: 'Ahorro de agua y energía',
        description: 'Incorporá prácticas simples para reducir el consumo de agua y electricidad, cuidando el planeta y ahorrando recursos.',
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('modules', {
      title: [
        'Reciclaje en casa',
        'Huella de carbono',
        'Consumo responsable',
        'Ahorro de agua y energía',
      ],
    });
  }
};

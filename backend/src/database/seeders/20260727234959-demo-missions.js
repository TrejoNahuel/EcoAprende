'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('missions', [
      {
        title: 'Llevá tu propia botella reutilizable',
        description: 'Evitá usar botellas descartables durante el día.',
        frequency: 'daily',
        points: 10,
        badge: null,
      },
      {
        title: 'Usá transporte público',
        description: 'Realizá al menos un viaje en transporte público.',
        frequency: 'daily',
        points: 15,
        badge: null,
      },
      {
        title: 'Separá los residuos toda la semana',
        description: 'Clasificá correctamente tus residuos durante 7 días.',
        frequency: 'weekly',
        points: 50,
        badge: 'Reciclador Semanal',
      },
      {
        title: 'Reducí el consumo eléctrico',
        description: 'Apagá luces y dispositivos cuando no los uses.',
        frequency: 'weekly',
        points: 40,
        badge: 'Ahorrador de Energía',
      },
      {
        title: 'Plantá un árbol',
        description: 'Participá en una actividad de reforestación.',
        frequency: 'weekly',
        points: 100,
        badge: 'Guardián Verde',
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('missions', null, {});
  }
};

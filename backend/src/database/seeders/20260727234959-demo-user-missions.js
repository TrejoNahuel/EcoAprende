'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const existingUserId = 1;
    const existingMissionId = 1;

    await queryInterface.bulkInsert('user_missions', [
      {
        userId: existingUserId,
        missionId: existingMissionId,
        completedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('user_missions', null, {});
  }
};

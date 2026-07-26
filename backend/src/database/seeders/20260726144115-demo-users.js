'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'student@example.com',
        password: '$2b$10$qTfKYq34V5PYlhHeOuPYmubOfFG2RNIspC9GwOB87hHeHnQwfPJPS',
        role: 'student',
      },
      {
        email: 'teacher@example.com',
        password: '$2b$10$zVwiIqkDzqq9i4701LbPh.7EVpGE93fd35UGDFbRm/cxBS90/YZIK',
        role: 'teacher',
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', {
      email: [
        'student@example.com',
        'teacher@example.com',
      ],
    });
  }
};

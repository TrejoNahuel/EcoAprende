'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_missions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      missionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'missions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      completedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('user_missions', {
      fields: ['userId', 'missionId'],
      type: 'unique',
      name: 'unique_user_mission',
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('user_missions');
  }
};

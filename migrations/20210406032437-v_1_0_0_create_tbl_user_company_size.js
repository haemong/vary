'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_user_company_size', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      size: {
        type: Sequelize.INTEGER,
      },
      label: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      created_at_unix_timestamp: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      deleted_at: { type: 'TIMESTAMP' }
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.dropTable('tbl_content');
  }
};
'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_webpage_template_category', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      parent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_webpage_template_category',
          key: 'id'
        },
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    return await queryInterface.dropTable('tbl_webpage_template_category');
  }
};
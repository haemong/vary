'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_statistics_campaign', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      customer_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_customer',
          key: 'id'
        },
        // allowNull: false
      },
      campaign_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_campaign',
          key: 'id'
        },
        // allowNull: false
      },
      sendgrid_message_id: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      event: {
        type: Sequelize.STRING
      },
      reason: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
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
    return await queryInterface.dropTable('tbl_statistics_campaign');
  }
};
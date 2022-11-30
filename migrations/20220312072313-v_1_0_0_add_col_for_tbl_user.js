'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_user', 'cafe24_mall_id', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_user', 'cafe24_mall_id');
  }
};

/* eslint-disable no-undef */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email : {
        type: Sequelize.STRING , 
        allowNull : false , 
      },
      username:{
        allowNull: false , 
        type:Sequelize.STRING,
        unique : true 
      },
      password:{
        allowNull: false , 
        type:Sequelize.STRING,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
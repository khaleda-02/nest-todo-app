/* eslint-disable no-undef */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Todos',{
      id:{
        type:Sequelize.INTEGER  ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey : true 
      } , 
      deadline : {
        type: Sequelize.DATE , 
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      catergory : {
        type:Sequelize.STRING , 
        allowNull: false 
      },
      title : {
        type:Sequelize.STRING , 
        allowNull: false 
      }, 
      discription : {
        type:Sequelize.STRING , 
        allowNull: true  
      }, 
      is_done : {
        type:Sequelize.BOOLEAN , 
        allowNull: true  
      },
      user_id:{
        type: Sequelize.INTEGER ,
        allowNull : false ,
        references : {
          model: 'Users',
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Todos');
  }
};

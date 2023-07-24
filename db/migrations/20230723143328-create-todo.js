'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('todos',{
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
          model: 'users',
          key:'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    })
  },

  down: (queryInterface, Sequelize) => {}
};

const { DataTypes } = require('sequelize');
const sequelize=require('../../db/connectDB');

const UserDetails=sequelize.define('user',{
    username:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.ENUM('admin','reception'),
        allowNull:false,
    }

});

module.exports=UserDetails;
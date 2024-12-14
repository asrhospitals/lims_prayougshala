const { DataTypes } = require('sequelize');
const sequalize=require('../../db/connectDB');

const Hospital=sequalize.define('hospitalmaster',{
    hsptlName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    hsptlType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    district:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pin:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNo:{
        type:DataTypes.INTEGER,
        allowNull:false
       
    },
    contactPersonName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contactPersonPhoneNo:{
        type:DataTypes.INTEGER,
        allowNull:false
        
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});

module.exports=Hospital;
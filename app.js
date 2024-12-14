require('dotenv').config();
const express=require('express');
const app=express();
const PORT=process.env.PORT || 2000;
const MasterRoutes=require('./routes/masterRoute');
const AuthRoutes=require('./routes/authenticationRoute');
const sequelize=require('./db/connectDB');
const verifyToken=require("./middlewares/authMiddileware");
const role=require("./middlewares/roleMiddleware");


app.use(express.json());

/// User Authentication Routes
app.use('/lims/v1',AuthRoutes);

/// All routes
app.use('/lims/v1',verifyToken,role("admin"),MasterRoutes);

const server=async()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync(); 
        console.log('Connection to PostgreSQL has been established successfully'); 
        app.listen(PORT,()=>{ console.log(`${PORT} port is Connected`);});
    } catch (error) {
        console.log(error)
    }
}

server();
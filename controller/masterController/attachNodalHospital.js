const NodalHospital=require('../../model/masterModel/attachNodalHospitalMaster');

/// Add Nodal
const addNodalHospital=async(req,res)=>{
    try {
        const newNodal=req.body;
        const createNodal=await NodalHospital.create(newNodal);
        res.status(201).json(createNodal);
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
};


/// Get Nodal

const getNodalHospital=async(req,res)=>{
    try {
        const findNodal=await NodalHospital.findAll();
        res.status(200).json(findNodal);
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
};


/// Update NOdal
const updateNodalHospital=async(req,res)=>{
    try {
        const id=req.params.id;
        const updatenodal=await NodalHospital.findByPk(id);
        updatenodal.update(req.body);
        res.status(200).json(updatenodal)
    } catch (error) {
        
    }
};

module.exports={addNodalHospital,getNodalHospital,updateNodalHospital}
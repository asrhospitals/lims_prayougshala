const LabtoLab=require('../../model/masterModel/labtolabMaster');

/// Add LabtoLab
const addlabtolab=async(req,res)=>{
    try {
        const newLab=req.body;
        const createLab=await LabtoLab.create(newLab);
        res.status(201).json(createLab);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

/// Get Lab to Lab
const getlabtolab=async(req,res)=>{
    try {
        const getlab=await LabtoLab.findAll();
        res.status(200).json(getlab);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

/// Update Lab
const updatelabtolab=async(req,res)=>{
    try {
        const id=req.params.id;
        const updatelab=await LabtoLab.findByPk(id);
        updatelab.update(req.body);
        res.status(200).json(updatelab);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

module.exports={addlabtolab,getlabtolab,updatelabtolab}
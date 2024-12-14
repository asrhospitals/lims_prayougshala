const Speciman=require('../../model/masterModel/specimenTypeMaster');

/// Add Speciman
const addSpecimen=async(req,res)=>{
    try {
        const newSpecimen=req.body;
        const createSpecimen=await Speciman.create(newSpecimen);
        res.status(201).json(createSpecimen);
    } catch (error) {
        res.status(400).send({message:'Somthing went wrong'});
    }
};

/// Get Specimen
const getSpecimen=async(req,res)=>{
    try {
        const getSpecimens=await Speciman.findAll();
        res.status(200).json(getSpecimens);
    } catch (error) {
        res.status(400).send({message:'Somthing went wrong'});
    }
};

/// Update Specimen
const updateSpecimen=async(req,res)=>{
    try {
        const id = req.params.id;
        const updateSpecimens=await Speciman.findByPk(id);
        updateSpecimens.update(req.body);
        res.status(200).json(updateSpecimens);
    } catch (error) {
        res.status(400).send({message:'Somthing went wrong'}); 
    }
};

module.exports={addSpecimen,getSpecimen,updateSpecimen}
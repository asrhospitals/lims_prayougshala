const ReferralDoctor=require('../../model/masterModel/referalDoctorMaster');

/// Add Referral Doctor
const addRefDoctor=async(res,req)=>{
    try {
        const newRefDoc=req.body;
        const createRefDoc=await ReferralDoctor.create(newRefDoc);
        res.status(201).json(createRefDoc);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

/// Get Referral Doctor
const getRefDoc=async(req,res)=>{
    try {
        const getrefDoc=await ReferralDoctor.findAll();
        res.status(200).json(getrefDoc);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

/// Update Referral Doctor
const updateRefDoc=async(req,res)=>{
    try {
        const id=req.params.id;
        const updateRef=await ReferralDoctor.findByPk(id);
        updateRef.update(req.body);
        res.status(200).json(updateRef);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

module.exports={addRefDoctor,getRefDoc,updateRefDoc}
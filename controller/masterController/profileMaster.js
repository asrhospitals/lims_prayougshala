const ProfileEntryMaster=require('../../model/masterModel/profileMaster');

/// Add New Profile
const addProfile=async(req,res)=>{
    try {
        const newProfile=req.body;
        const createProfile=await ProfileEntryMaster.create(newProfile);
        res.status(201).json(createProfile);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

/// Get Profile

const getProfile=async(req,res)=>{
    try {
        const getNewProfile=await ProfileEntryMaster.findAll();
        res.status(200).json(getNewProfile);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

/// Update Profile

const updateProfile=async(req,res)=>{
    try {
        const id=req.params.id;
        const updateNewProfile=await ProfileEntryMaster.findByPk(id);
        updateNewProfile.update(req.body);
        res.status(200).json(updateNewProfile);
    } catch (error) {
        res.status(400).send({message:'Something went wrong'});
    }
};

module.exports={addProfile,getProfile,updateProfile}
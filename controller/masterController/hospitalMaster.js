const Hospital=require('../../model/masterModel/hospitalMaster');

/// Add Hospital
const addhospital=async(req,res)=>{

  try {
    const newHospital=req.body;
    const createHospital=await Hospital.create(newHospital);
    res.status(201).json(createHospital);
  } catch (error) {
    res.status(400).send({message:'Something went wrong'});
  }
};

/// Get Hospital
const gethospital=async(req,res)=>{
  try {
    const getHospital=Hospital.findAll();
    res.status(200).json(getHospital);
  } catch (error) {
    res.status(400).send({message:'Something went wrong'});
  }
};

/// Update Hospital
const updatehospital=async(req,res)=>{
  try {
    const id=req.params.id;
    const updateHospital=await Hospital.findByPk(id);
    updateHospital.update(req.body);
    res.status(200).json(updateHospital);
  } catch (error) {
    res.status(400).send({message:'Something went wrong'});

  }
}

module.exports={addhospital,gethospital,updatehospital}
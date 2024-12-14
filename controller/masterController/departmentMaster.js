const DeparmentMaster=require('../../model/masterModel/departmentMaster');

/// Add Department
const addDepartment = async (req, res) => {
  try {
    const newDepartment = req.body;
    const createDepartment=await DeparmentMaster.create(newDepartment);
    res.status(201).json({ message: "Created successfully",data:createDepartment});
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

/// Get All Department

const getDepartment = async (req, res) => {
  try {
    const newDepartment = await DeparmentMaster.findAll(); 
    res.status(200).json(newDepartment);
  } catch (error) {
    res.status(404).send("Something went wrong");
  }
};

/// Update Department
const updateDepartment = async (req, res) => {
  try {
    const newDepartment = await DeparmentMaster.findByPk(req.params.id); 
    newDepartment.update(req.body); 
    res.json(newDepartment);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

module.exports = { addDepartment, getDepartment, updateDepartment };

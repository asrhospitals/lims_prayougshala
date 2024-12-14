const ReportType=require('../../model/masterModel/reportTypeMaster');

/// Add New Report
const addReport=async(req,res)=>{
    try {
        const newReport=req.body;
        const createReport=await ReportType.create(newReport);
        res.status(201).json(createReport);
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
};


/// Get Report

const getReport=async(req,res)=>{
    try {
        const findReport=await Report.findAll();
        res.status(200).json(findReport);
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
};


/// Update Report
const updateReport=async(req,res)=>{
    try {
        const id=req.params.id;
        const updateReport=await ReportType.findByPk(id);
        updateReport.update(req.body);
        res.status(200).json(updateReport)
    } catch (error) {
        
    }
};

module.exports={addReport,getReport,updateReport}
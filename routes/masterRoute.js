const Router=require('express');
const { addDepartment, getDepartment, updateDepartment } = require('../controller/masterController/departmentMaster');
const { addSubDepartment, getSubDepartment, updateSubDepartment } = require('../controller/masterController/subdepartmentMaster');
const { addhsptltype, gethsptltype, updatehsptltype } = require('../controller/masterController/hospitaltypeMaster');
const { addhospital, gethospital, updatehospital } = require('../controller/masterController/hospitalMaster');
const { addNodal, getNodal, updateNodal } = require('../controller/masterController/nodalMaster');
const { addRole, getRole, updateRole } = require('../controller/masterController/roletypeMaster');
const { addPhlebo, getPhlebo, updatePhlebo } = require('../controller/masterController/phlebotomistMaster');
const { addReception, getReception, updateReception } = require('../controller/masterController/receptionMaster');
const { addNodalHospital, getNodalHospital, updateNodalHospital } = require('../controller/masterController/attachNodalHospital');
const { addlabtolab, getlabtolab, updatelabtolab } = require('../controller/masterController/labtolabMaster');
const { addInstrument, getIntrument, updateIntrument } = require('../controller/masterController/instrumentMaster');
const { addNodalInstrument, getNodalInstrument, updateNodalInstrument } = require('../controller/masterController/attachedNodalInstrumentMaster');
const { addTechnician, getTechnician, updateTechnician } = require('../controller/masterController/technicianMaster');
const { addRefDoctor, getRefDoc, updateRefDoc } = require('../controller/masterController/referralMaster');
const { addProfile, getProfile, updateProfile } = require('../controller/masterController/profileMaster');
const { addReport, getReport, updateReport } = require('../controller/masterController/reportTypeMaster');
const { addSpecimen, getSpecimen, updateSpecimen } = require('../controller/masterController/specimenMaster');
const router=Router();

/// Department Master
router.route('/add-department').post(addDepartment);
router.route('/get-department').get(getDepartment);
router.route('/update-department/:id').put(updateDepartment);

/// Subdepartment Master
router.route('/add-subdepartment').post(addSubDepartment);
router.route('/get-subdepartment').get(getSubDepartment);
router.route('/update-subdepartment/:id').put(updateSubDepartment);

/// Hospital Type Master
router.route('/add-hsptltype').post(addhsptltype);
router.route('/get-hsptltype').get(gethsptltype);
router.route('/update-hsptltype/:id').put(updatehsptltype);

/// Hospital Master
router.route('/add-hospital').post(addhospital);
router.route('/get-hospital').get(gethospital);
router.route('/update-hospital/:id').put(updatehospital);

/// Nodal Master
router.route('/add-nodal').post(addNodal);
router.route('/get-nodal').get(getNodal);
router.route('/update-nodal/:id').put(updateNodal);

/// Lab to Lab Master
router.route('/add-labtolab').post(addlabtolab);
router.route('/get-labtolab').get(getlabtolab);
router.route('/update-labtolab/:id').put(updatelabtolab);

/// Attach Nodal Hospital
router.route('/add-nodalhospital').post(addNodalHospital);
router.route('/get-nodalhospital').get(getNodalHospital);
router.route('/update-nodalhospital/:id').put(updateNodalHospital);

/// Lab Intrument Master
router.route('/add-instrument').post(addInstrument);
router.route('/get-instrument').get(getIntrument);
router.route('/update-instrument/:id').put(updateIntrument);

/// Attach Nodal Instrument Master
router.route('/add-nodalinstrument').post(addNodalInstrument);
router.route('/get-nodalinstrument').get(getNodalInstrument);
router.route('/update-nodalinstrument/:id').put(updateNodalInstrument);

/// Role Type Master
router.route('/add-role').post(addRole);
router.route('/get-role').get(getRole);
router.route('/update-role/:id').put(updateRole);

/// Phlebotomist Master
router.route('/add-phlebo').post(addPhlebo);
router.route('/get-phlebo').get(getPhlebo);
router.route('/update-phlebo/:id').put(updatePhlebo);

/// Reception Master
router.route('/add-recep').post(addReception);
router.route('/get-recep').get(getReception);
router.route('/update-recep/:id').put(updateReception);

/// Technician Master
router.route('/add-tech').post(addTechnician);
router.route('/get-tech').get(getTechnician);
router.route('/update-tech/:id').put(updateTechnician);

/// Referral Doctor Master
router.route('/add-refdoc').post(addRefDoctor);
router.route('/get-refdoc').get(getRefDoc);
router.route('/update-refdoc/:id').put(updateRefDoc);

///-------------Report Doctor(Need to Add)----------

/// Profile Entry Master
router.route('/add-profileentry').post(addProfile);
router.route('/get-profileentry').get(getProfile);
router.route('/update-profileentry/:id').put(updateProfile);

///---------- Profile Master(Need to Add)------------

///Report Type Master
router.route('/add-report').post(addReport);
router.route('/get-report').get(getReport);
router.route('/update-report/:id').put(updateReport);

///----------Reagent Master(Need to Add)--------------

///----------- Investigation Master (Need to Add)----------

///Specimen Type Master
router.route('/add-specimen').post(addSpecimen);
router.route('/get-specimen').get(getSpecimen);
router.route('/update-specimen/:id').put(updateSpecimen);


module.exports=router;
const Employee = require("../model/employeeSchema");

exports.postEmployeeDetails = async (req, res) => {
    const createUser = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        dob: req.body.dob,
        gender: req.body.gender,
        nationality: req.body.nationality,
        guardianSpouseName: req.body.guardianSpouseName,
        permanentAddress: req.body.permanentAddress,
        currentAddress: req.body.currentAddress,
        eID: req.body.eID,
        email: req.body.email,
        doj: req.body.doj,
        department: req.body.department,
        designation: req.body.designation,
        employementType: req.body.employementType,
        workExp: req.body.workExp,
        managerName: req.body.managerName,
        hrName: req.body.hrName,
        workAddress: req.body.workAddress,
    })
    await createUser.save();
    res.status(201).json({ employee: createUser })
};
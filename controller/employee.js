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

exports.getEmployeeByIndex = async (req, res) => {
    let searchString = req.body.search;
    let array = [];
    const fetchUser = await Employee.find();
    try {
        fetchUser.map(data => {
            if (data.firstName.includes(searchString) || data.lastName.includes(searchString) || data.email.includes(searchString)) {
                array.push(data)
            }
        })

        if (array.length >= 1) {
            res.status(200).json({ employee: array })
        } else {
            res.status(404).json({ employee: "not found" })
        }
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

exports.deleteEmployeeByID = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    try {
        await Employee.find({ firstName: id })
        await Employee.deleteOne({ firstName: id });
        res.status(204).json({ employee: employeeID })
    } catch (err) {
        res.status(404).json({ message: "No such employee" })
    }
}
const express = require("express");

const router= express.Router();
const EmploeeController = require("../controller/employee")
console.log("a")
router.post("/addEmployee",EmploeeController.postEmployeeDetails);
router.post("/getData",EmploeeController.getEmployeeByIndex);
router.delete("/deleteEmployee/:id",EmploeeController.deleteEmployeeByID);

module.exports = router;
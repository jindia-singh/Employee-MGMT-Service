const express = require("express");

const router= express.Router();
const EmploeeController = require("../controller/employee")

router.post("/addEmployee",EmploeeController.postEmployeeDetails);
router.get("/getData",(req,res)=>{
    res.status(200).json({ "employee": "createUser" })
})
module.exports = router;
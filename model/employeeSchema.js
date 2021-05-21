const mongoose = require("mongoose");

const schema = mongoose.Schema;

const employeeSchema = new schema({
    firstName:{type:String, require:true},
    lastName:{type:String, require:true},
    phoneNumber:{type:Number, require:true},
    dob:{type:Date, require:true},
    gender:{type:String, require:true},
    nationality:{type:String, require:true},
    guardianSpouseName:{type:String},
    permanentAddress:{type:String, require:true},
    currentAddress:{type:String, require:true},
    eID:{type:Number, require:true},
    email:{type:String, require:true,lowercase: true},
    doj:{type:Date, require:true},
    department:{type:String, require:true},
    designation:{type:String, require:true},
    employementType:{type:String},
    workExp:{type:String, require:true},
    managerName:{type:String},
    hrName:{type:String},
    workAddress:{type:String, require:true},
});


module.exports = mongoose.model("Employee",employeeSchema)
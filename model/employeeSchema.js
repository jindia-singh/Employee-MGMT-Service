const mongoose = require("mongoose");

const schema = mongoose.Schema;

const employeeSchema = new schema({
    firstName:{type:String, require:true,index: true},
    lastName:{type:String, require:true,index: true},
    phoneNumber:{type:Number},
    dob:{type:Date},
    gender:{type:String},
    nationality:{type:String},
    guardianSpouseName:{type:String},
    permanentAddress:{type:String},
    currentAddress:{type:String},
    eID:{type:Number},
    email:{type:String, require:true,lowercase: true,index: true},
    doj:{type:Date},
    department:{type:String},
    designation:{type:String},
    employementType:{type:String},
    workExp:{type:String},
    managerName:{type:String},
    hrName:{type:String},
    workAddress:{type:String},
});

const index = { firstName: 'text', lastName: 'text', email: 'text' };
employeeSchema.index(index);
module.exports = mongoose.model("Employee",employeeSchema)
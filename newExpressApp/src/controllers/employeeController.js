const Employee = require('../models/employeeModel');

module.exports.index = (req, res) => {     
    
    req.db.connect(() => {
        Employee.find((err, result) => { //============ FIND ALL ==============
            if(err) throw err;
            
            res.send( result);
        })
    })
    
    
}
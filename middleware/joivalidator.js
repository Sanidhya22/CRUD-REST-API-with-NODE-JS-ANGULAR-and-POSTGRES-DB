const validator = require("../schemas/schemas")

const joivalidator= async (req,res,next) =>{

    try {
        await validator.validateAsync(req.body);
        
    } catch (error) {
        return res.status(400).json({error:error.details[0].message})
        
     }
     next()
     }

module.exports= joivalidator;
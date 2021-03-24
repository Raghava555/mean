const _mongoose = require('mongoose');
const _schema = _mongoose.Schema({
    customerid : {type:String, required:true},
});

module.exports=_mongoose.model("userMongoDBSchema",_schema)
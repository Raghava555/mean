const _mongoose = require('mongoose');
const _schema = _mongoose.Schema({
      client_id : {type:String, required:true},
      user:{
        id:{type:String, required:true},
        password:{type:String, required:true}
      }
});

module.exports=_mongoose.model("postMongoDBSchema",_schema);
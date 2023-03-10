const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  id:{
    type:String,
    required:true,
    unique:true
  },
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  is_reg:{
    type:Boolean,
    default:true
  },
  image:{
    type:String
  },
  poster:{
    type:String
  },
  docs:{
    type:Array
  },
  date:{
    type:Date,
    required:true
  },
  minpart:{
    type:Number,
    required:true
  },
  maxpart:{
    type:Number,
    required:true
  },
  closed:{
    type:Boolean,
    default:false
  },
  is_team:{
    type:Boolean,
    default:false
  },participants:[{type:mongoose.ObjectId,ref:"EventRegs"}],
  teams:{
    type:[mongoose.ObjectId],
    ref:"Teams"
  }
},{timestamps:true});
const item = mongoose.model("Events",eventSchema);

module.exports = item;
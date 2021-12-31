import mongoose from "mongoose";


var quoteSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
        unique:true,
    },
    by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
      
    }
});

//Export the model
 mongoose.model('Quote', quoteSchema);
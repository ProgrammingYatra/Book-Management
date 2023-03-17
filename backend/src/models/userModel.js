const mongoose = require("mongoose");
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      enum: ["Mr", "Mrs", "Miss"],
      trim: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
    },
    phone: {
      type: String,
      require: true,
      unquie: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      min: 8,
      max: 15,
      trim: true,
      select:false
    },
    address: {
      street: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      pincode: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save",async function(req,res,next){
   if(!this.isModified("password")){
      next();
   }
   this.password=await bcrypt.hash(this.password,10)

})

userSchema.methods.comparePassword=async function(password){
   return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model("user", userSchema);

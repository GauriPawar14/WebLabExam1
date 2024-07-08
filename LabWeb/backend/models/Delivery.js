const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    Id:String,
    orderId:String, 
    deliveryDate:Date,
    deliveryAddress:String,
    deliveryFee:Number

});

const UserModel= mongoose.model("deliveries", DeliverySchema);
module.exports = UserModel;
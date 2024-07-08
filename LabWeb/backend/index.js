const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const UserModel = require('./models/Delivery');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/CreateDelivery" , (req, res) => {
    UserModel.create(req.body)
       .then(delivery => res.json(delivery))
       .catch((err) => res.status(400).json(err));
   })

//    app.put('/updateUser/:id',(req,res)=>{
//       const id = req.params.id;
//       UserModel.findByIdAndUpdate({_id: id},{name: req.body.name,email:req.body.email,age:req.body.age})
//       .then(users => res.json(users))
//       .catch(err => res.json(err))
//   })

   mongoose.connect("mongodb://localhost:27017/WebLab")

app.listen(3001,() => {
    console.log('Server is running on port 3001');
});
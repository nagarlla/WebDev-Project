var express = require('express');
var router = express.Router();
var userModel=require('../Model/user.model')
/* var registrationModell=require('../Model/registration.modell')*/
router.post('/',(req,res)=>{
  let newuser=new userModel({
    Name:req.body.Name,
    Dept:req.body.Dept,
    RegNo:req.body.RegNo,
    password:req.body.password
  })
  newuser.save()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })

})
router.get('/',(req,res)=>{
  userModel.find()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})
router.put('/:id',(req,res)=>{
  userModel.findByIdAndUpdate(req.params.id,{
    Name:req.body.Name,
    Dept:req.body.Dept,
    RegNo:req.body.RegNo,
    password:req.body.password

  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})
router.delete('/:id',(req,res)=>{
  userModel.findByIdAndDelete(req.params.id)
  .then(response=>{
    res.send(response)

  })
  .catch(err=>{
    res.send(err)
  })
})
// router.post('/',(req,res)=>{
//   let newregistration=new registrationModell({
//       Name:req.body.Name,
//       RegNo:req.body.RegNo,
//       Dept:req.body.Dept
//   })
//   newregistration.save()
//   .then(response=>{
//       res.send("Data added successfully")
//   })
//  .catch(err=>{
//   res.send(err)
//  })
// })
// router.get('/',(req,res)=>{
//   registrationModell.find()
//   .then(response=>{
//     res.send(response)
//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })
// router.put('/:id',(req,res)=>{
//   registrationModell.findByIdAndUpdate(req.params.id,{
//     Name:req.body.Name,
//     Dept:req.body.Dept,
//     RegNo:req.body.RegNo,
//     password:req.body.password

//   })
//   .then(response=>{
//     res.send(response)
//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })
// router.delete('/:id',(req,res)=>{
//   registrationModell.findByIdAndDelete(req.params.id)
//   .then(response=>{
//     res.send(response)

//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })

module.exports = router;
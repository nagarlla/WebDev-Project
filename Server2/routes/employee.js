// var express = require('express');
// var router = express.Router();
// const seatingModel1 = require('../Model1/seating.model');
// router.post('/',(req,res)=>{
//   let newuser=new seatingModel1({
//     RegNo:req.body.RegNo,
//     Dept:req.body.Dept,
//     Gallery:req.body.Gallery
//   })
//   newuser.save()
//   .then(response=>{
//     res.send(response)
//   })
//   .catch(err=>{
//     res.send(err)
//   })

// })
// router.get('/',(req,res)=>{
//   seatingModel1.find()
//   .then(response=>{
//     res.send(response)
//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })
// router.put('/:id',(req,res)=>{
//  seatingModel1.findByIdAndUpdate(req.params.id,{
//     Dept:req.body.Dept,
//     RegNo:req.body.RegNo,
//     Gallery:req.body.Gallery
//   })
//   .then(response=>{
//     res.send(response)
//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })
// router.delete('/:id',(req,res)=>{
//  seatingModel1.findByIdAndDelete(req.params.id)
//   .then(response=>{
//     res.send(response)

//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })
// module.exports = router;





var express = require('express');
var router = express.Router();
var userModel=require('../Model/user.model')
router.post('/',(req,res)=>{
  let newuser=new userModel({
    Dept:req.body.Dept,
    RegNo:req.body.RegNo,
    Gallery:req.body.Gallery,
    SeatNo:req.body.SeatNo
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
    Dept:req.body.Dept,
    RegNo:req.body.RegNo,
    Gallery:req.body.Gallery,
    SeatNo:req.body.SeatNo
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
module.exports = router
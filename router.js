var express = require("express");
var router = express.Router();

                  
const credential ={
    email:"akhil@gmail.com",   
    password:"1234"
}
// login user
router.post('/login',(req,res) => {
    if(req.body.email === credential.email && req.body.password === credential.password){
        req.session.user =req.body.email;

        res.redirect('/router/dashboard');
    }else{
        res.render('base',{errorMessage:"Invalid username or password"})
    }
})

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('home',{username:req.session.user})
    }else{
        res.redirect('/')

    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(`Error occurred ${err}`);
        }else{
            console.log("Logout successfully")
            res.redirect('/')
        }
    })
})

module.exports = router;
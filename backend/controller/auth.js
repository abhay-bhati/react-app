const jwt = require('jsonwebtoken');

exports.authController = (req, res, next) => {
    console.log(req.body);
    console.log(process.env.ACCESS_KEY);
    if(req.body.access_key === process.env.ACCESS_KEY){
        console.log('access granted');
        const token = jwt.sign({user:'admin'}, process.env.TOKEN_KEY, {expiresIn:'1h'});
        res.json({token:token})
    }
    else{
        console.log('incorrect');
        res.json({message:'invalid access key'})
    }
};
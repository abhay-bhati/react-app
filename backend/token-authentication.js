const jwt = require('jsonwebtoken');

module.exports = function authentication(req, res, next){
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        console.log('yooo');
        console.log(token);
        jwt.verify(token, process.env.TOKEN_KEY, (err, result) => {
            if(err){
                console.log('1');
                return res.status(403).json({message:'not authenticated'})
            }
            console.log('2');
            console.log(result);
            req.user = result.user;
            next();
        })
    };


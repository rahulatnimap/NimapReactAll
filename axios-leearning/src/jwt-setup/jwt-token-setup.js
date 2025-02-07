import jwt from 'jsonwebtoken';
import cookies from 'js-cookie';

const SECRET_KEY   = 'mYPRIVATE-JWT' 

export function generateToken(user){
    return jwt.sign({ userid : user.id , username : user.username} , SECRET_KEY , {
        expiresIn : '15s',
    });
}

export  function generrateRefresh(user){
     return jwt.sign({ userid : user.id} , SECRET_KEY);
}
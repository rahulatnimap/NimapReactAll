import { SignJWT , jwtVerify } from 'jose'
import { token } from '../components/Authentication/Login'


export const SECRET_KEY   = new TextEncoder().encode("My-secreted")
// console.log(SECRET_KEY ,"SecretKey");


export async function generateToken(user){
    return await new SignJWT(user)
    .setProtectedHeader( {alg : "HS256"})
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(SECRET_KEY)
}

export async function verifyToken(token){
    try {
        const { payload } = await jwtVerify(token , SECRET_KEY);
        console.log(payload);
        return payload
    } catch (error) {
        console.log(error);  
    }

}



// export  function generrateRefresh(user){
//      return jwt.sign({ userid : user.id} , SECRET_KEY);
// }


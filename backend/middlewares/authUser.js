import jwt from 'jsonwebtoken'


const authUser=async(req,res,next)=>{
    try {

        const {token}=req.headers
        if(!token){
            return res.json({success:false,message:"Not Authorized Login again"})
        }
        const token_decode=jwt.verify(token,process.env.JWT_SECRET) 
        req.userId=token_decode.id
        next()
        
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}
export default authUser

// const authUser = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.json({ success: false, message: "Not Authorized, No Token" });
//     }

//     const token = authHeader.split(" ")[1]; // get token after "Bearer"
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.userId = decoded.id; // attach userId to request
//     next();
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default authUser;
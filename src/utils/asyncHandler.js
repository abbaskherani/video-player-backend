//ye bhi ek way
const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=> next(err));
    }
}


export {asyncHandler}

//Higher Order Function
// const func = (fn) => () => {}
//ye ek way hai
// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message: err.message
//         });
//     }
// } 
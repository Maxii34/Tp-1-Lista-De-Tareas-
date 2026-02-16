import mongoose from "mongoose";

try {
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.info('Se conecto a la BD exitozamente.')
    })
} catch (error) {
    console.error(error)
}

export default mongoose;
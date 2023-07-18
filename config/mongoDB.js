import mongoose from 'mongoose'

const connectDataBase = async() => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL , {
            useUnifiedTopology : true,
            useNewUrlParser : true 
        }
        )
        console.log("mongo connected ")
    } catch (error) {
        console.log( `Error : ${error}`)
        process.exit(1)
    }
}
export default connectDataBase;
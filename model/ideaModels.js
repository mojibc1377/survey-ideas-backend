import mongoose from "mongoose";
const ideaSchema = mongoose.Schema({
    text1: {
        type: String,
    },
    text2: {
        type: String,
    }
});

const Idea = mongoose.model("Idea", ideaSchema);
export default Idea;

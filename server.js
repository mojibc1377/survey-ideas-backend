// server.js
import express from "express"
import cors from "cors"
import connectDataBase from "./config/mongoDB.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Create a Mongoose schema and model
const ideaSchema = new mongoose.Schema({
  text1: String,
  text2: String,
});

const Idea = mongoose.model('Idea', ideaSchema);

// Create a route to receive the data from the frontend
app.post('/ideas', async (req, res) => {
  try {
    const { text1, text2 } = req.body;
    const idea = new Idea({ text1, text2 });
    await idea.save();
    res.status(201).json({ message: 'Idea stored successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to store the idea.' });
  }
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)
connectDataBase();
});

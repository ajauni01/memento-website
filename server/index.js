import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();


// POST routes
app.use('/posts', postRoutes)

/// Middleware for parsing incoming JSON data
app.use(express.json({ limit: '30mb' }));
// Middleware for parsing incoming URL-encoded data (e.g., form submissions)
app.use(express.urlencoded({ limit: '30mb', extended: true }));
// Middleware for handling CORS (Cross-Origin Resource Sharing)
app.use(cors());

// TODO: use environmental variable to hide the database userName, and password 
const uri = "mongodb+srv://memento-project:D54csfYDnVvLTdM0@cluster0.3vaow4q.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connect to the mongoDB database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`The SERVER is running on PORT: ${PORT}`)))
  .catch((error) => console.log(error.message))




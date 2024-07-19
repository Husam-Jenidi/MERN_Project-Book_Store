import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from "cors"


const app = express();

// Middleware for parsing the request body
app.use(express.json()) 
//Middleware for handling CORS POLICY
//Option 1: Allow all origins with deafult of cors(*)
app.use(cors())

//Option 2: Allow Custom Origins
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
//             })
//         );

//Route for setting the index page
app.get('/', (request, response) => {//get is a http method for getting resources
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack Tutorial")
});

app.use('/books',booksRoute)

mongoose.connect(mongoDBURL).then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
        console.log("App is listenning to " + PORT)
    })
}).catch((error) => {
    console.log(error)
})
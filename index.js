import express from 'express'
import mongoose from 'mongoose';
import mongodbPass from './secret.js';

const app = express()

// app.listen(3000, () => {
//     console.log("Server is listening in port 3000...");
// })

app.get('/', (req, res) => {
    res.send('Just hello world!!!');
})

const url = `mongodb+srv://dibborah100:${mongodbPass}@backenddb.duonria.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`;

mongoose.connect(url)
  .then(() =>{ 
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log("Server is listening in port 3000...");
    })
  })
  .catch(() => console.log('connnection failure!!!'));



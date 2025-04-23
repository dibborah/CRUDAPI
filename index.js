import express from 'express'
import mongoose from 'mongoose';
import mongodbPass from './secret.js';
import productRoute from './routes/product.route.js';
const app = express();

// midlewares:

// we not allow json to our nodejs by default
// so this line below written 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello from nodejs API updated!!!');
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




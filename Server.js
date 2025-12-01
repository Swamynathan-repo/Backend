const express= require('express');
const mongoose=require('mongoose');
const Product = require( './model/product');
const productRoutes = require('./routes/productRoutes');

// middleware
const app=express();
app.use(express.json());

app.listen(4000,()=>{
    console.log("Port is listening on 4000...");
});

// routes
app.use("/api/products", productRoutes);


app.get('/',(req,res)=>{
    res.send("Hello wolrd, Node server back...");
});

// app.get('/api/products',async(req,res)=>{
//     try {
//         const pdt = await Product.find({});
//         res.status(200).json(pdt);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// });

// app.get('/api/products/:id',async(req,res)=>{
//     try {
//         const {id}=req.params;
//         const pdt= await Product.findById(id);
//         res.status(200).json(pdt);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// });

// app.post('/api/products', async(req,res) => {
//     try {
//         console.log("Product model:", Product);
//         const product= await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         console.error("Error creating product:", error);
//         res.status(500).json({message:error.message});
//     }
//     // await.Product=express.json
//     // console.log(req.body);
//     // res.send(req.body);
// });

// update pdt API
// app.put('/api/products/:id', async(req,res) => {
//     try {
//         const {id} = req.params;
//         const pdt = await Product.findByIdAndUpdate(id , req.body);

//         if(!pdt){
//             return res.status(404).json({message:"Product not Found"});
//         }
//         // find again the pdt in DB
//         const UpdatedPdt= await Product.findById(id);
//         res.status(200).json(UpdatedPdt);
        
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });

// Delete pdt
// app.delete('/api/products/:id', async (req,res) => {
//     try {
//         const {id}=req.params;
//         const pdts= await Product.findByIdAndDelete(id);

//         if (!pdts){
//             res.status(404).json({message:"Product not able to delete"});
//         }
//         //  const DeletePdt =await
//          res.status(200).json({message:"Product deleted Succesfully..!"})

//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });

mongoose.connect("mongodb+srv://Swamydb:swamydb@cluster0.nyzec3q.mongodb.net/Crud?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB connected succesfully");
})
.catch(()=>{
    console.log("But Connection Failed !");
})
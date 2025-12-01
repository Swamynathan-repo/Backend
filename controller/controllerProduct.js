const Product= require('../model/product');

const getProducts = async(req,res)=>{
    try {
        const pdt = await Product.find({});
        res.status(200).json(pdt);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const getProduct= async (req, res)=>{
    try {
        const {id}=req.params;
        const pdt= await Product.findById(id);
        res.status(200).json(pdt);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const createProduct = async (req, res) => {
    try {
        console.log("Product model:", Product);
        const product= await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({message:error.message});
    }
};

const updateProduct = async (req,res)=> {
    try {
        const {id} = req.params;
        const pdt = await Product.findByIdAndUpdate(id , req.body);

        if(!pdt){
            return res.status(404).json({message:"Product not Found"});
        }
        // find again the pdt in DB
        const UpdatedPdt= await Product.findById(id);
        res.status(200).json(UpdatedPdt);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const deleteProduct = async (req,res)=> {
    try {
        const {id}=req.params;
        const pdts= await Product.findByIdAndDelete(id);

        if (!pdts){
            res.status(404).json({message:"Product not able to delete"});
        }
        //  const DeletePdt =await
         res.status(200).json({message:"Product deleted Succesfully..!"})

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};




module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
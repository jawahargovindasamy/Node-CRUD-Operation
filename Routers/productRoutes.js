import express from 'express';
import { createProduct, deleteProduct, getProducts, getProductsById, updateProduct } from '../Controllers/productController.js';

const router=express.Router();

router.get("/getdata",getProducts);
router.get("/getdata/:id",getProductsById);
router.post("/create",createProduct);
router.put("/update/:id",updateProduct);
router.delete("/delete/:id",deleteProduct);



export default router;
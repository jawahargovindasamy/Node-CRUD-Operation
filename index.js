import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./Routers/productRoutes.js"

dotenv.config();

const app = express();

//default middlewares
app.use(express.json());
app.use(cors());

//Port declaration
const port=process.env.PORT || 4000;

//Default route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

//custom routes
app.use('/api/products',productRoutes)


//server starting
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
})

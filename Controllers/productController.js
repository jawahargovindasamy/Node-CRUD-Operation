const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 500 },
];

//get method

export const getProducts = (req, res) => {
  try {
    res.status(200).json({
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot retrieve products Error in get Products" });
  }
};

//get by id method
export const getProductsById = (req, res) => {
  const id = req.params.id;
  try {
    const product = products.find((item) => item.id === parseInt(id));
    if (product) {
      return res.status(200).json({
        message: "Product retrieved successfully",
        data: product,
      });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot retrieve products Error in get Products" });
  }
};

// Create a new product
export const createProduct = (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = {
      id: products.length + 1,
      name: name,
      price: price,
    };
    products.push(newProduct);
    res.status(200).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot create product Error in create Product" });
  }
};

// Update a product by ID
export const updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  try {
    const index = products.findIndex((ele) => ele.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
    products[index].name = name;
    products[index].price = price;
    res.status(200).json({
      message: "Product updated successfully",
      data: products[index],
    });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot update product Error in update Product" });
  }
};

// Delete a product by ID
export const deleteProduct = (req, res) => {
  const id = req.params.id;
  try {
    const index = products.findIndex((ele) => ele.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
    products.splice(index, 1);
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot delete product Error in delete Product" });
  }
};

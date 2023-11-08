// File with all the functions related to products
const Product = require("../Models/product.model");
const objectConverter = require("../Utils/object.converter");

//Function to save Product in Database
exports.saveProduct = async (req, res) => {
  try {
    const saveProductReq = {
      productId: req.body.productId,
      name: req.body.name,
      availableItems: req.body.availableItems,
      category: req.body.category,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      manufacturer: req.body.manufacturer,
      price: req.body.price,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };
    // Save the product to the database
    const savedProduct = await Product.create(saveProductReq);

    // Return the saved product in the response
    res.status(201).json(savedProduct);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error while saving product" });
  }
};

//Function to search all the products in Database
exports.findAllProducts = async (req, res) => {
  try {
    // Extract query parameters from the request
    const {
      category = "",
      direction = "DESC",
      name = "",
      sortBy = "productId",
    } = req.query;

    const queryObj = {};

    const products = await Product.find(queryObj).sort({ [sortBy]: direction });

    const response = {
      products: objectConverter.productResponse(products),
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({
      message: "Some error occurred while fetching the products.",
    });
  }
};

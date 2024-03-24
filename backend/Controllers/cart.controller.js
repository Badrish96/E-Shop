const Cart = require("../Models/cart.model");
const Product = require("../Models/product.model");

exports.addToCart = async (req, res) => {
  try {
    const { quantity } = req.body; // Retrieve quantity from request body

    const product = await Product.findById(req.params.id);

    // Check if product exists
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    if (product.availableItems < quantity) {
      return res.status(404).send({ message: "Product is out of stock" });
    }

    // Creating a new Cart item with the product details
    const cartItem = new Cart({
      productId: product._id, // Assign product ID to productId field
      quantity: quantity,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price * quantity,
    });

    // Saving the cart item to the database
    await cartItem.save();

    res.status(200).send(cartItem); // Sending the cart item in the response
  } catch (err) {
    res.status(500).send({
      message: `${err} occurred while adding product to cart`,
    });
  }
};

exports.getCartData = async (req, res) => {
  try {
    const cartData = await Cart.find({});

    // Mapping the retrieved data to extract necessary fields
    const responseData = cartData.map((item) => ({
      description: item.description,
      quantity: item.quantity,
      imageUrl: item.imageUrl,
      price: item.price,
    }));

    // Sending the response with the extracted data
    res.status(200).send(responseData);
  } catch (err) {
    res.status(500).send({
      message: `${err} occurred while getting cart data`,
    });
  }
};

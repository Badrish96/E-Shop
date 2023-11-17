const address = require("../Models/address.model");
const User = require("../Models/user.model");

exports.addAddress = async (req, res) => {
  try {
    // Check zip code format
    const zipCode = req.body.zipCode;
    if (!/^\d{6}$/.test(zipCode)) {
      return res.status(400).json({ message: "Invalid zip code!" });
    }

    // Check contact number format
    const contactNumber = req.body.phone;
    if (!/^\d{10}$/.test(contactNumber)) {
      return res.status(400).json({ message: "Invalid contact number!" });
    }

    const addAddressObj = {
      name: req.body.name,
      phone: contactNumber,
      street: req.body.street,
      landmark: req.body.landmark,
      city: req.body.city,
      state: req.body.state,
      zipCode: zipCode,
      userId: req.userId,
    };

    const createdAddress = await address.create(addAddressObj);

    // Create the response object
    const addressWithUser = {
      _id: createdAddress._id,
      name: createdAddress.name,
      contactNumber: createdAddress.phone,
      street: createdAddress.street,
      landmark: createdAddress.landmark,
      city: createdAddress.city,
      state: createdAddress.state,
      zipCode: createdAddress.zipCode,
      createdAt: createdAddress.createdAt,
      updatedAt: createdAddress.updatedAt,
      user: req.userId, // Attach user information to the response
    };

    return res.status(201).json(addressWithUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error while adding address" });
  }
};

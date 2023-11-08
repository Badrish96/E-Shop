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
      user: req.role,
    };

    const createdAddress = await address.create(addAddressObj);

    if (createdAddress) {
      const user = await User.findOne({ role: req.role });
      user.populate("userSchema");
      await user.save();
    }

    // Create the response object
    return res.status(201).json(createdAddress);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error while adding address" });
  }
};

exports.productResponse = (products) => {
  var productResponse = [];
  products.forEach((product) => {
    productResponse.push({
      productId: product.productId,
      name: product.name,
      availableItems: product.availableItems,
      category: product.category,
      description: product.description,
      imageUrl: product.imageUrl,
      manufacturer: product.manufacturer,
      price: product.price,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  });
  return productResponse;
};

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products" });
};

module.exports = { getAllProductsStatic, getAllProducts };

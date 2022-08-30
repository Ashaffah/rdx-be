import Product from "../models/productsModel.js";

export const getAllProducts = async (req, res) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;

  let query = {};
  query.offset = (parseInt(currentPage) - 1) * parseInt(perPage);
  query.limit = parseInt(perPage);

  Product.findAndCountAll(query)
    .then((result) => {
      res.status(200).json({
        message: "Success get Data Product",
        data: result.rows,
        total_data: result.count,
        per_page: parseInt(perPage),
        current_page: parseInt(currentPage),
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const payload = {
    title: req.body.title,
    price: req.body.price,
  };
  Product.create(payload)
    .then((result) => {
      res.status(200).json({ message: "Product Created" });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

export const updateProduct = async (req, res) => {
  const payload = {
    title: req.body.title,
    price: req.body.price,
  };
  Product.update(payload, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.status(200).json({
        message: "Product Updated",
      });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

export const deleteProduct = async (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Product Deleted",
      });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

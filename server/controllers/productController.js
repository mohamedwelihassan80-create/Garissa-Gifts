import Product from '../models/productModel.js';

// @desc    Get all products
// @route   GET /api/products
export const getProducts = async (req, res) => {
  try {
    const { search, category } = req.query;

    let query = { isActive: true };

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    if (category) {
      query.category = category;
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create product (admin only)
// @route   POST /api/products
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const image = req.files?.image?.[0]?.filename
      ? `uploads/images/${req.files.image[0].filename}`
      : '';

    const file = req.files?.file?.[0]?.filename
      ? `uploads/files/${req.files.file[0].filename}`
      : '';

    const fileName = req.files?.file?.[0]?.originalname || '';

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock: stock || 1,
      image,
      file,
      fileName
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update product (admin only)
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const { name, description, price, category, stock, isActive } = req.body;

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.stock = stock ?? product.stock;
    product.isActive = isActive ?? product.isActive;

    if (req.files?.image?.[0]?.filename) {
      product.image = `uploads/images/${req.files.image[0].filename}`;
    }

    if (req.files?.file?.[0]?.filename) {
      product.file = `uploads/files/${req.files.file[0].filename}`;
      product.fileName = req.files.file[0].originalname;
    }

    const updated = await product.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete product (admin only)
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.deleteOne();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
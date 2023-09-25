import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  productName: {
    type: String,
    required: [true, "Product no is required."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  image: {
    type: String,
    required: [true, "Blance is required."],
  },
  price: {
    type: Number,
    require: [true, "Price is required"],
  },
  comparePrice: {
    type: Number,
    require: [true, "compare price is required"],
  },
  category: {
    type: String,
    require: [true, "Category is required"],
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;

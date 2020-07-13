const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chidoorSchema = new Schema({
  maker: { type: String, required: true, index: true },
  model: { type: String, required: true, index: true },
  panel_style: { type: String, required: true, index: true },
  product_family: { type: String, required: true },
  door_style_text: { type: String, required: true },
  family_brochure_link: { type: String, required: true },
  model_flyer_link: { type: String, required: true },
  price: { type: String, required: true },
  r_value_text: { type: String, required: true, index: true },
  rtm_construction_type: { type: String, required: true },
  rtm_insulation_type: { type: String, required: true },
  section_material: { type: String, required: true, index: true },
});

chidoorSchema.index({ "$**": "text" });

const CHIdoor = mongoose.model("CHIdoor", chidoorSchema);
module.exports = CHIdoor;

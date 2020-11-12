const db = require("../models");
const { set } = require("mongoose");

module.exports = {
  // create new CHI
  createCHI: function (req, res) {
    db.CHIdoor.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //   get all CHI
  getAllCHI: function (req, res) {
    db.CHIdoor.find({})
      .then((dbDoors) => res.json(dbDoors))
      .catch((err) => res.status(422).json(err));
  },

  // search bar function to query entire DB for the search terms
  searchDoor: function (req, res) {
    let searchQuery = req.params.query;
    // console.log("params yo-->", searchQuery);
    db.CHIdoor.find({
      $or: [//partial text search 
        { maker: { $regex: searchQuery, $options: "i" } },
        { model: { $regex: searchQuery, $options: "i" } },
        { panel_style: { $regex: searchQuery, $options: "i" } }, 
        { door_style_text: { $regex: searchQuery, $options: "i" } }, 
        { product_family: { $regex: searchQuery, $options: "i" } }, 
        { section_material: { $regex: searchQuery, $options: "i" } }, 
        { rtm_insulation_type: { $regex: searchQuery, $options: "i" } }, 
      ],
    })
      .then((result) => {
        // console.log(result);
        // console.log(result.length);
        res.json(result);
      })
      .catch((err) => res.status(422).json(err));
  },
};

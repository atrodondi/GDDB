const router = require("express").Router();
const doorControllers = require("../../controllers/doorControllers");
//  /api/allCHI
router.route("/allCHI").get(doorControllers.getAllCHI);

//   /api/createCHI
router.route("/createCHI").post(doorControllers.createCHI);

//   /api/search
router.route("/search/:query").get(doorControllers.searchDoor);

module.exports = router;

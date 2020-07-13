const path = require("path");
const router = require("express").Router();
const apiRoutes = require('./doors')
const loginRoutes = require('./login')

// climb routes

router.use("/api",apiRoutes)
router.use("/login",loginRoutes)





// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });module.exports = router;
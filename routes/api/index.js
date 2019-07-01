const path = require("path");
const router = require("express").Router();
const savedRoutes = require("./saved");
const searchRoutes = require("./search");

// Saved books routes
router.use("/saved", savedRoutes);
//Book search routes
router.use("/search", searchRoutes);

// Render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
  

module.exports = router;

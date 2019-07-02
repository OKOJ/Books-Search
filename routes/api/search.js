const router = require("express").Router();
const searchController = require("../../controllers/search");

router
  .route("/")
  .get(searchController.findAll);

module.exports = router

const router = require("express").Router();
const savedController = require("../../controllers/savedController");
const searchController = require("../../controllers/searchController");
router.route("/")
  .get(savedController.findAll)
  .post(savedController.create);

router
  .route("/:id")
  .get(savedController.findById)
  .put(savedController.update)
  .delete(savedController.remove);

module.exports = router;

const router = require("express").Router();
const savedController = require("../../controllers/saved");
//const searchController = require("../../controllers/search");
router.route("/")
  .get(savedController.findAll)
  .post(savedController.create);

router
  .route("/:id")
  .get(savedController.findById)
  .put(savedController.update)
  .delete(savedController.remove);

module.exports = router;

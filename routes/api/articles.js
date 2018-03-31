const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/artice"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/artice/:id"
router
  .route("/:id")
// FULL CRUD IN FUTURE 
//  .get(articlesController.findById)
//  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;

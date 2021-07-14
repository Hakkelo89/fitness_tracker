const { Router } = require("express");

const {
  renderStats,
  renderExercise,
  renderHome,
} = require("../../controllers/html");

const router = Router();

router.get("/stats", renderStats);
router.get("/exercise", renderExercise);
router.get("/", renderHome);

module.exports = router;

const { Router } = require("express");

const {
  getAllWorkouts,
  updateWorkout,
  createWorkout,
  getAggregatedWorkout,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts", getAllWorkouts);
router.post("/workouts", createWorkout);
router.put("/workouts/:id", updateWorkout);
router.get("/workouts/range", getAggregatedWorkout);

module.exports = router;

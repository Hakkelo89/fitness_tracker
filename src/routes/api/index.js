const { Router } = require("express");

const {
  getAllWorkouts,
  changeWorkout,
  createWorkout,
  getWorkoutRange,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts/range", getWorkoutRange);
router.put("/workouts/:id", changeWorkout);
router.get("/workouts", getAllWorkouts);
router.post("/workouts", createWorkout);

module.exports = router;

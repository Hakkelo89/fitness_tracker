const { Workout } = require("../../models");

// find all workouts in database
const getAllWorkouts = async (req, res) => {
  try {
    const allWorkoutsData = await Workout.find();
    return res.status(200).json(allWorkoutsData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to get workouts." });
  }
};

// find current workout by id to update in database
const updateWorkout = async (req, res) => {
  try {
    const workoutData = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    return res.status(200).json(workoutData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to update workout." });
  }
};

// add new workout to database
const createWorkout = async (req, res) => {
  try {
    const workoutData = await Workout.create({});
    return res.status(200).json(workoutData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to create workout." });
  }
};

// get workouts for stats page
const getAggregatedWorkout = async (req, res) => {
  try {
    const workoutData = await Workout.find();
    return res.status(200).json(workoutData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to get workout." });
  }
};

module.exports = {
  getAllWorkouts,
  updateWorkout,
  createWorkout,
  getAggregatedWorkout,
};

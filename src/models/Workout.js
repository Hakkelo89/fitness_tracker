const mongoose = require("mongoose");

const schema = {
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
};

const virtuals = {
  toJSON: {
    virtuals: true,
  },
};

const WorkoutSchema = new mongoose.Schema(schema, virtuals);

function calculateTotalDuration() {
  const callback = (aggregate, exercise) => {
    return aggregate + exercise.duration;
  };

  const totalDuration = this.exercises.reduce(callback, 0);

  return totalDuration;
}

WorkoutSchema.virtual("totalDuration").get(calculateTotalDuration);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

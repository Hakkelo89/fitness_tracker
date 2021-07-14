const path = require("path");

const renderStatsPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
};

const renderExercisePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
};

const renderHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

module.exports = { renderStatsPage, renderExercisePage, renderHomePage };

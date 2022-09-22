const express = require("express");
const {
  getTours,
  createTour,
  getSingleTours,
  updateSingleTour,
  getTrandingTours,
  getThreeCheapestTours,
} = require("../controllers/tour.controller");
const router = express.Router();

router.route("/").get(getTours).post(createTour);
router.route("/trending").get(getTrandingTours);
router.route("/cheapest").get(getThreeCheapestTours);
router.route("/:id").get(getSingleTours).patch(updateSingleTour);

module.exports = router;

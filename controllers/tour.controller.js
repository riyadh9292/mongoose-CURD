const {
  getToursServices,
  createTourServices,
  getATour,
  updateATour,
  getThreeTrandingTours,
  getCheapestTours,
} = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
  try {
    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    const { page, page_size } = req.query;

    const tour = await getToursServices(queries, page, page_size);
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "cann't get data",
      error: error,
    });
  }
};
exports.getSingleTours = async (req, res, next) => {
  try {
    const { id } = req.params;

    const tour = await getATour(id);
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "cann't get data",
      error: error,
    });
  }
};
exports.updateSingleTour = async (req, res, next) => {
  try {
    const { id } = req.params;

    const tour = await updateATour(id, req.body);
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "cann't get data",
      error: error,
    });
  }
};
exports.getTrandingTours = async (req, res, next) => {
  try {
    const tour = await getThreeTrandingTours();
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "cann't get data",
      error: error,
    });
  }
};
exports.getThreeCheapestTours = async (req, res, next) => {
  try {
    const tour = await getCheapestTours();
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "cann't get data",
      error: error,
    });
  }
};
exports.createTour = async (req, res, next) => {
  try {
    // const data = req.body;
    const result = await createTourServices(req.body);
    //save or create

    // const product = new Product(req.body);

    // const result = await product.save();
    // result.logger();
    // console.log(result);

    res.status(201).json({
      status: "success",
      message: "Data inserted successfully !",
      data: result,
    });

    // res.send("it is working");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

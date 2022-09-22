const Tour = require("../models/Tour");

exports.getToursServices = async (queries, page = 1, page_size = 10) => {
  const tour = await Tour.find({})
    .skip((parseInt(page) - 1) * parseInt(page_size))
    .limit(parseInt(page_size))
    .select(queries.fields)
    .sort(queries.sortBy);
  return tour;
};
exports.getATour = async (id) => {
  const tour = await Tour.findOneAndUpdate({ _id: id }, { $inc: { views: 1 } });
  return tour;
};
exports.updateATour = async (id, data) => {
  const tour = await Tour.updateOne({ _id: id }, data, { runValidators: true });
  return tour;
};
exports.getThreeTrandingTours = async (id, data) => {
  const tour = await Tour.find().limit(3).sort({ views: -1 });
  return tour;
};
exports.getCheapestTours = async (id, data) => {
  const tour = await Tour.find().limit(3).sort({ price: 1 });
  return tour;
};
exports.createTourServices = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

const mongoose = require("mongoose");

// product schema
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name for this product"],
      trim: true,
      unique: [true, "name must be unique"],
      minLength: [3, "name must be at least 3 characters"],
      maxLength: [100, "name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can not be negative"],
    },
    views: {
      type: Number,
      min: [0, "View can not be negative"],
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["available", "not-available"],
        message: "Status can not be {VALUE}.",
      },
    },
    option: {
      type: String,
      required: true,
      enum: {
        values: ["Bus", "Micro-bus", "Train", "Plane"],
        message: "Status can not be {VALUE}.",
      },
    },
  },
  {
    timeStamps: true,
  }
);

tourSchema.pre("save", function (next) {
  this.views = 0;
  next();
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;

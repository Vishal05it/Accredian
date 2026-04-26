import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
const infoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be atleast 2 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        "Invalid email!",
      ],
    },
    phoneNo: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    companyName: {
      type: String,
      required: [true, "Company Name is required"],
      minlength: [4, "Company Name must be atleast 2 characters long"],
    },
    domain: {
      type: String,
      required: [true, "Domain is required"],
      enum: [
        "Product Management",
        "CFO",
        "Data Science",
        "Artificial Intelligence",
        "Human Resource",
        "Strategy & Leadership",
        "General Management",
        "Digital Transformation",
        "Business Management",
        "Finance",
        "Project Management",
        "Senior Management",
      ],
    },
    candidates: {
      type: Number,
      required: [true, "Candidates are required"],
    },
    modeOfDelivery: {
      type: String,
      required: [true, "Delivery mode Name is required"],
    },
    example: {
      type: String,
      required: [true, "Delivery mode Name is required"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("info", infoSchema) || mongoose.models.info;

const express = require("express");
const fs = require("fs");
const router = express.Router();

// const accessibleDataPath = "./data/accessible.json";
// const GNDataPath = "./data/gender_neutral.json";
// const hygieneDataPath = "./data/HygieneProducts";
// const showerData = "./data/showers.json";

router.post("/filter", (req, res) => {
  // geting filter array of boolean data from frontend
  // array will be form: [0] = Accessibile, [1]  = Female Hygiene Products, [2] Shower
  const filters = req.body.filters;

  if (!filters || filters.length() != 3)
    return res.status(400).json({ error: "Invalid filters array" });

  if (filters[0] == false && filters[1] == false && filters[2] == false) {
    console.log("All filters are off"); // all filters are off(
    // call Leena default function
  }

  if (filters[0]) {
    // Accessibility filter
    console.log("Accesibility Filter Toggle is on");
    //call Leena accessible function visible
  } else {
    //call Leena accessible function NOT visible
  }

  if (filters[1]) {
    console.log("Female Hygiene Products Toggle is on"); // Female Hygiene Products fulter
    //call Leena Female Hygiene Prodcuts visible
  } else {
    //call Leena Female Hygiene Products NOT visible
  }
  if (filters[2]) {
    console.log("Shower Toggle is on"); //
    // call Leena Shower Function visible
  } else {
    // call Leena Shower Function NOT visible
  }

  res.json({
    message: "Filters processed successfully",
    appliedFilters: filters,
  });
});

module.exports = router;

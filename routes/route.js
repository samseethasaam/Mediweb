const route = require("express").Router();
const {
  getInventions,
  getInventionSuggestion,
  getPractitioners,
  getPractitionerSuggestion,
  getTreatments,
  getTreatmentSuggestion
} = require("../data/sql.js");

// Root
route.get("/", (req, res) => {
  res.redirect("/home");
});

// Home
route.get("/home", (req, res) => {
  res.render("home");
});

// search page
route.get("/search", (req, res) => {
  // send empty rows as result
  res.render("search", {
    type1: [],
    type2: [],
    type3: [],
    isSearch: false
  });
});

// search api
route.post("/search", async (req, res) => {
  let type1, type2, type3;
  const type = req.body["search-type"],
    searchKey = req.body["search-key"];
  if (type == 1) {
    type1 = await getInventions(searchKey);
    type1 = type1?.data;
  } else if (type == 2) {
    type2 = await getPractitioners(searchKey);
    type2 = type2?.data;
  } else if (type == 3) {
    type3 = await getTreatments(searchKey);
    type3 = type3?.data;
  }
  res.render("search", {
    type1: type1 || [],
    type2: type2 || [],
    type3: type3 || [],
    isSearch: true
  });
});


// search suggestion
route.post("/suggest/:type/:key", async (req, res) => {
  const type = req.params.type, key = req.params.key;
  let result = [];
  if (type == 1) {
    result = await getInventionSuggestion(key);
    result = result?.data?.map(item => item?.instrument_name);
  } else if (type == 2) {
    result = await getPractitionerSuggestion(key);
    result = result?.data?.map(item => item?.full_name);
  } else if (type == 3) {
    result = await getTreatmentSuggestion(key);
    result = result?.data?.map(item => item?.disease_name);
  }
  res.json({
    result: result || []
  });
});

// Not Found
route.get("/404", (req, res) => {
  res.status(404);
  res.render("404");
});

// All other routes
route.get("*", (req, res) => {
  // logs requested path
  console.log(`404 : ${req.originalUrl}`);
  res.redirect("/404");
});

module.exports = route;

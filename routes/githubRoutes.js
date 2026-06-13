const express = require("express");
const router = express.Router();

const {
  getGithubProfile,
  getAllProfiles,
  getSingleProfile,
} = require("../controllers/githubControllers");

router.get("/analyze/:username", getGithubProfile);

router.get("/profiles", getAllProfiles);

router.get("/profiles/:username", getSingleProfile);

module.exports = router;
const axios = require("axios");
const db = require("../config/db");
const { saveProfile } = require("../models/profileModel");

const getGithubProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    saveProfile(response.data);

    res.status(200).json({
      success: true,
      message: "Profile analyzed and stored successfully",
      data: response.data,
    });
  } catch (error) {
        console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProfiles = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(results);
  });
};

const getSingleProfile = (req, res) => {
  const { username } = req.params;

  db.query(
    "SELECT * FROM users WHERE github_username = ?",
    [username],
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (results.length === 0) {
        return res.status(404).json({
          message: "Profile not found",
        });
      }

      res.status(200).json(results[0]);
    }
  );
};

module.exports = {
  getGithubProfile,
  getAllProfiles,
  getSingleProfile,
};
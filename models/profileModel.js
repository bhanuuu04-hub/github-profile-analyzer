const db = require("../config/db");

const saveProfile = (profile) => {
  const sql = `
    INSERT INTO users
    (
      github_username,
      name,
      followers,
      following,
      public_repos,
      company,
      location,
      profile_url
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      followers = VALUES(followers),
      following = VALUES(following),
      public_repos = VALUES(public_repos)
  `;

  db.query(sql, [
    profile.login,
    profile.name,
    profile.followers,
    profile.following,
    profile.public_repos,
    profile.company,
    profile.location,
    profile.html_url,
  ]);
};

module.exports = {
  saveProfile,
};
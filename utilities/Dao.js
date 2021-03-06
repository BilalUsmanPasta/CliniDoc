const pool = require("../config/db.js");

module.exports = {
  async executeQuery(query) {
    try {
      const results = await pool.query(query);
      return results;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

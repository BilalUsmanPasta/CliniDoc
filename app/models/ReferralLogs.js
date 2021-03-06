const Dao = require("../../utilities/Dao.js");
const moment = require("moment");

module.exports = {
  async addReferralLog({
    referral_id,
    call_status,
    receptionist_name,
    duration_in_sec,
    notes,
  }) {
    try {
      // const sql = `INSERT INTO ReferralLogs (referral_id) VALUES (${referral_id});`;

      const sql = `INSERT INTO ReferralLogs (referral_id, call_status,
          receptionist_name,
           duration_in_sec ,
           call_date_and_time,
           notes
      ) VALUES (${referral_id}, ${call_status || ""}, "${
        receptionist_name || ""
      }"
        ,${duration_in_sec},
        "${moment().format("YYYY-MM-DDTHH:mm:ss")}",
                "${notes || ""}"
         );`;

      const res = await Dao.executeQuery(sql);
      return res;
    } catch (exp) {
      return response
        .status(400)
        .send({ errorMessage: exp.message, ResponseCode: "Fail" });
    }
  },

  async getReferralLogs({ referral_id }) {
    const sql = `select * from ReferralLogs where referral_id=${referral_id}`;
    const res = await Dao.executeQuery(sql);
    console.log("res");
    console.log(res);
    return res;
  },

  async updateReferral() {
    const sql = `select * from Profile where email="${email}" AND password="${password}"`;
    const res = await Dao.executeQuery(sql);
    console.log("res");
    console.log(res);
    return res;
  },
};

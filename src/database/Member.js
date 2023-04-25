// In src/database/Record.js
const DB = require("./db.json");

const getMemberForRecord = (memberId) => {
  try {
    const member = DB.members.filter((member) => member.id === memberId);
    if (!member.length) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${memberId}'`,
      };
    }
    return member;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
module.exports = { getMemberForRecord };
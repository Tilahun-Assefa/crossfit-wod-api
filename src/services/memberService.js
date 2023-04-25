// In src/services/memberService.js
const Member = require("../database/Member");

const getMemberForRecord = (memberId) => {
    try {
        const member = Member.getMemberForRecord(memberId);
        return member;
    } catch (error) {
        throw error;
    }
};
module.exports = { getMemberForRecord };
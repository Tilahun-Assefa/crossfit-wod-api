// In src/controllers/memberController.js
const memberService = require("../services/memberService");

/*********************************************************** */
const getMemberForRecord = (req, res) => {
    const { params: { memberId } } = req;
    if (!memberId) {
        res.status(400).send({
            status: "Failed",
            data: {
                error: "Parameter ':memberId' can not be empty"
            }
        });
    }
    try {
        const member = memberService.getMemberForRecord(memberId);
        res.send({ status: "OK", data: member });
    } catch (er) {
        res.status(er.status || 500).send({ status: "Failed", data: { error: er.message || er } });
    }
};

module.exports = {
    getMemberForRecord
};
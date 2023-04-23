// In src/database/utils.js
const fs = require("fs");

//Util Function to overwrite our JSON file to persist the data
const saveToDatabase = (DB) => {
    fs.writeFileSync("./db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf-8",
    });
};

module.exports = { saveToDatabase };
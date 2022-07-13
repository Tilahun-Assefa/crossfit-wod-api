// In src/index.js 
const express = require("express");

//import router module
const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// For testing purposes using baseURL and router 
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
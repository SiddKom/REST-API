const express = require("express");
const studentRoutes = require("./src/students/routes");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello mf")
});

app.use("/next", studentRoutes);

app.listen(port, () => {
    console.log("Running on port 3000...");
});

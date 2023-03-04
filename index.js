const express = require("express");
const app = express();
const mailRoutes = require("./routes/index")
app.use(express.json())
app.use(mailRoutes)

app.listen(2000, () => console.log("Server Started!"))
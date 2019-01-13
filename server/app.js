const express= require("express");
const bodyParser= require("body-parser");
const userRouter= require("./routes/userRoutes");

// @app
const app= express();

app.use(bodyParser.json());

// router congiguration 
app.use("/api/vi", userRouter);

module.exports=app;
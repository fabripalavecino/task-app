const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
require("dotenv").config({ path: "./config/test.env" });
const app = express();




app.use(express.json());

app.use(userRouter);

app.use(taskRouter);

module.exports = app;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next()
// });

// app.use((req,res,next) => {
//   res.status(503).send('Site is currently down. Check back soon')
// })
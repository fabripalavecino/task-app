const app = require("./app");

require("dotenv").config({ path: "./config/test.env" });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next()
// });

// app.use((req,res,next) => {
//   res.status(503).send('Site is currently down. Check back soon')
// })
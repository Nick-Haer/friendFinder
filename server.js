const express = require(`express`)

const app = express()

const PORT = process.env.PORT || 3000;

const path = require(`path`)

const htmlRoutes = require("./app/routing/htmlRoutes")
const apiRoutes = require("./app/routing/apiRoutes").router

// console.log(apiRoutes)

// console.log(apiRoutes.router.surveyResults)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRoutes);

app.use(`/api/friends`, apiRoutes)


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
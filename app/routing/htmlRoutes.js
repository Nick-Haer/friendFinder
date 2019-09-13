const express = require(`express`)

const app = express()

const router = express.Router()

const path = require(`path`)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


router.get(`/`, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html" ))
})

router.get(`/survey`, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html" ))
})

module.exports = router
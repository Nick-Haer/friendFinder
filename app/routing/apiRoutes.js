const express = require(`express`)

const app = express()

const router = express.Router()

const path = require(`path`)

const people = require("../data/friends").peoplePreferences

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


router.get(`/`, function (req, res) {
    console.log("working")
    res.send(`electric boogaloo pt.2`)
})


router.post(`/`, function (req, res) {
    // console.log(req.body)

    // console.log(people)

    

    let matchMakerArray = people.forEach()

    people.push(req.body)

    

    console.log(people)

    // console.log(friendsList)

    res.json(req.body)

})


module.exports = {
    router,
    people,
}
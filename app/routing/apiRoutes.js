const express = require(`express`)

const app = express()

const router = express.Router()

const path = require(`path`)

const people = require("../data/friends").peoplePreferences

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


router.get(`/`, function (req, res) {
    console.log("working")
    res.jsonu(people)
})


router.post(`/`, function (req, res) {


    // console.log(req.body)

    // console.log(people)

    let currentPerson = req.body;

    


    // console.log(people)



    function makeMeAMatch (peopleArr) {
        let matchMakerArray = [];
        for (let person of peopleArr) {
            // console.log(person)
        let counter = -1;
           let scoresDiff = (person.preferences.reduce((acc, element) => {
                counter++;
                return parseInt(acc) + Math.abs(parseInt(element) - parseInt(currentPerson.preferences[counter]))
            }, 0))
            // console.log(scoresDiff)
        let newPerson = {}
        newPerson.name = person.name
        newPerson.photo = person.photo
        newPerson.difference = scoresDiff

        matchMakerArray.push(newPerson)
        }

        let result = 100;

        for (let match of matchMakerArray) {
            if (match.difference < result) {
                result = match.difference
            }
        }

        // console.log(result)
        console.log(matchMakerArray)

        for (let match of matchMakerArray) {
            if (match.difference === result) {
                return res.json(match)
            }
        }


    }

    if (people.length >= 1) {
        makeMeAMatch(people)
    }





    people.push(currentPerson)

    // console.log(people)

    

    // console.log(friendsList)

    // res.json(req.body)

})


module.exports = {
    router,
    people,
}
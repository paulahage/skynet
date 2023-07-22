const fs = require('fs')
const express = require('express')
const app = express()

const citiesFile = fs.readFileSync('src/cities.json', 'utf-8')
const streetsFile = fs.readFileSync('src/streets.json', 'utf-8')
const cities = JSON.parse(citiesFile)
const streets = JSON.parse(streetsFile)

function getCityByPostCode(postCode) {
    const index = parseInt(cities.length * postCode / 99999)
    return cities[index === cities.length ? cities.length - 1 : index]
}

function getStreetByPostCode(postCode) {
    const index = parseInt(streets.length * postCode / 99999)
    return streets[index === streets.length ? streets.length - 1 : index]
}

app.get('/getAddressByPostCode', (req, res) => {
    const token = req.header('Authorization');
    const { postCode } = req.query

    if(!token) {
        return res.status(401).send("missing X-TOKEN header")
    }
    const parsedToken = token.split(' ')[1]
    if(parsedToken !== process.env.APP_SECRET_TOKEN){
        return res.status(401).send("invalid token")
    }
    if(!postCode){
        return res.status(400).send("missing query parameter 'postCode'")
    } 
    if(parseInt(postCode) < 1 || parseInt(postCode) > 99999) {
        return res.status(400).send("'postCode' parameter has to be a number between 00000 and 99999")
    }

    try{
        const { city, country} = getCityByPostCode(postCode)
        res.send({
            street: getStreetByPostCode(postCode),
            city,
            country
        })
    }catch (e) {
        res.status(500).send(e.stack)
    }
})

app.listen(8000 , () => console.log("running on :8000"))


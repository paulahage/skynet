const fs = require('fs')
const express = require('express')
const app = express()

const plansFile = fs.readFileSync('src/plans.json', 'utf-8')
const plans = JSON.parse(plansFile)

function getAvailablePlans(postCode) {
    const lastChar = postCode.toString().substring(postCode.toString().length - 1)
    const lastNumber = parseInt(lastChar)

    if(lastNumber < 2) {
        return plans.slice(0, 1)
    }
    if(lastNumber < 4) {
        return plans.slice(0, 2)
    }
    if(lastNumber < 6) {
        return plans.slice(0, 3)
    }
    return plans
}


app.get('/getPlans', (req, res) => {
    const token = req.header('Authorization');
    const { postCode } = req.query

    if(!token) {
        return res.status(401).send("missing authorization bearer header")
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
        const plans = getAvailablePlans(postCode)
        res.send(plans)
    }catch (e) {
        res.status(500).send(e.stack)
    }
})

app.listen(8000 , () => console.log("running on :8000"))


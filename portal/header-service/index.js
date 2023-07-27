const path = require('path');
const express = require('express')
const app = express()

app.get('/getHeader', (req, res) => {
    const token = req.header('Authorization')
    if(!token) {
        return res.status(401).send("missing authorization bearer header")
    }
    const parsedToken = token.split(' ')[1]
    if(parsedToken !== process.env.APP_SECRET_TOKEN){
        return res.status(401).send("invalid token")
    }

    try{
        const staticFolderPath = path.join(__dirname, '.');
        app.use(express.static(staticFolderPath));
        res.sendFile(path.join(staticFolderPath, 'index.html'));

    }catch (e) {
        res.status(500).send(e.stack)
    }
})

app.listen(80 , () => console.log("running on :80"))


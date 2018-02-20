const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');
const axios      = require('axios');
const Contactsdb = require('./model/Contactdb');

PORT = process.env.PORT || 8080

app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/data'
mongoose.connect(MONGO_CONNECTION_STRING);
const connection = mongoose.connection;

app.post('/addContact', (req, res) => {
    Contactsdb({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        streetAddress: req.body.streetAddress,
        postalCode: req.body.postalCode
    }).save()
        .then(addedContact => {
            res.json(addedContact);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500).send("We have encountered an error")
        })
})

app.get('/contactsList', (req, res) => {
    Contactsdb.find({})
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500).send("We have encountered an issue");
        })
})

app.delete('/contactsList/:contactId', (req, res) => {
    Contactsdb.findOneAndRemove({ _id: req.params.contactId })
        .then(removedContact => {
            res.json(removedContact);
        })
        .catch(error => {
            res.send(error);
            console.log(error);
        })
})



connection.on("open", () => {
    console.log("We are connected to mongo!");
    app.listen(PORT, _ => {
        console.log(`Express listening on ${PORT}, ctrl+c to kill`)
    })
})


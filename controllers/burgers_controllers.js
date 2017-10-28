var express = require('express');
var router = express.Router();


var burger = require('../models/burger.js');

//route to show all available in the DB

router.get("/", (req, res) => {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        //hbsObject = handlebars object
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//route to create new rows

router.post("/api/burger", (req, res) => {
    console.log(req.params);

    let burgerName = req.params.burger_name;
    let eat = req.params.devoured;

    burger.create(

        [
            "burgerName", "eat"
        ], [
            req.body.burgerName, req.body.eat
        ], (result) => {
            res.json({ id: result, insertId });
        });
});

//update by ID

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.burger_id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//delete rows by ID

router.delete("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.burger_id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
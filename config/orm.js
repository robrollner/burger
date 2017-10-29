var db = require("./connection"); // change back to conn

var orm = {
    //Select All function object
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        db.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    //insert value function object 
    create: function(burger_name, cb) {
        db.query(`INSERT INTO burgers (burger_name) VALUES ('${burger_name}')`, (err, res) => {
            if (err) throw err;
            console.log(`${burger_name} added to eat`);
            cb(res);
        });
    },

    //update row function object
    update: function(burger_id, burgerStatus, cb) {
        db.query(`UPDATE burgers SET devoured = ${burgerStatus} WHERE burger_id = ${burger_id}`, (err, res) => {
            if (err) throw err;
            console.log(`${burger_id} has been devoured!`);
            cb(res);
        })
    },
    //delete row from function object
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        db.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};


module.exports = orm;
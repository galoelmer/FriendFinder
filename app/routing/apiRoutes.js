var usersData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(usersData);
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body);
        
    });
}




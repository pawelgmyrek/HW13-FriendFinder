var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {


    for (var i = 0; i < req.body.scores.length; i++) {
      req.body.scores[i] = parseInt(req.body.scores[i]);
    }

    function getSum(total, num) {
      return total + num;
    }
    function addMyNums() {
      var totalScore = req.body.scores.reduce(getSum);
    }
    addMyNums();

    for(var i = 0; i < friends[i].scores.length; i++) {
      for (var x = 0; x <friends.scores.length; i++) {
        friends.scores[x] = parseInt(friends.scores[i]);
      };
    }
    function addExistingNums() {
      var friendScore = friend.score.reduce(getSum);
    }
    addExistingNums();

    var minimumDifference = 30;
    var totalDifference = Math.abs(totalScore - friendScore);

    if (totalDifference < minimumDifference) {
      console.log("Match Found");
    }

    else {
      console.log("No Match Found");
    }

    friends.push(req.body);
    res.send(req.params)
    res.json(friends);
  });
}

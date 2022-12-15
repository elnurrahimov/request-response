const goods = [
  
    { name: "car", sum: 4, price: 10000, id: 1 },
    { name: "notebook", sum: 8, price: 2000, id: 2 },
    { name: "pencil", sum: 24, price: 15, id: 3 },
    { name: "bag", sum: 11, price: 20, id: 4 },
    { name: "book", sum: 45, price: 10, id: 5 },
    { name: "phone", sum: 10, price: 455, id: 6 },
    { name: "apple", sum: 100, price: 40, id: 7 },
    { name: "potato", sum: 200, price: 33, id: 8 },
    { name: "bus", sum: 7, price: 12345, id: 9 },
    { name: "pen", sum: 123, price: 21, id: 10 }
  
];

const express = require("express");
const app = express();

app.get("/user/:id", function (req, res) {
    const idOfUser = parseInt(req.params.id);
    const user = goods.find((user) => user.id === idOfUser);
    if (!user) {
      res.status(404).send();
    }
    res.status(200).json(user);
  });

app.listen(3002, function () {
  console.log("Example app listening on port 3000!");
});

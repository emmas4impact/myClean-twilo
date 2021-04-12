const express = require("express");
const userRoute = express.Router();
const UserModel = require("./Schema");

userRoute.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find(req.query);
    if (users) {
      res.status(200).send(users);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
      next(error)
  }
});
userRoute.get("/:id", async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (user) {
          res.status(200).send(user);
        } else {
          res.status(404).send("Not found");
        }
      } catch (error) {
          next(error)
      }
});
userRoute.post("/", async (req, res, next) => {
    try {
        const newuser = new UserModel(req.body);
       const addedUser = await newuser.save();
        if (addedUser) {
          res.status(201).send(addedUser._id);
        } else {
          res.status(404).send("Not found");
        }
      } catch (error) {
          next(error)
      }
});
    

userRoute.put("/:id", async (req, res, next) => {
    
});
userRoute.delete("/:id", async (req, res, next) => {});

module.exports = userRoute;

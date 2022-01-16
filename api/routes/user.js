const express = require("express");
const router = express.Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");
const User = require("../models/User");

router.get("/test", (req, res) => {
  res.send("test :))");
});

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //if user updates the password, we should encrypt it first.

  if (req.body.password) {
    req.body.passqord = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    //destructuring
    const { password, ...others } = updatedUser._doc;
    return res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("User has been deleted");
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(1)
      : await User.find();

    //users are an array of objects including password field.
    const finalUsers = users.map((user) => {
      const { password, ...others } = user._doc;
      return others;
    });

    return res.status(200).json(finalUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET STATS (get total number of users per month in the last year)
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// ADD USER
router.put("/:username/add", verifyToken, async (req, res) => {
  const currentUser = await User.findById(req.body._id);
  const user = await User.findOne({ username: req.params.username });
  /* 
  console.log("user", user);
  console.log("currentuser", currentUser); 
  */
  if (currentUser._id !== user._id) {
    try {
      if (!currentUser.friends.includes(user._id)) {
        //If everything is ok,  update both users.
        await user.updateOne({ $push: { friends: currentUser._id } });
        await currentUser.updateOne({ $push: { friends: user._id } });

        return res.status(200).json("User has been added!");
      } else {
        return res.status(403).json("You are already friends!");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can not add yourself!");
  }
});

// REMOVE USER
router.put("/:username/remove", verifyToken, async (req, res) => {
  const currentUser = await User.findById(req.body._id);
  const user = await User.findOne({ username: req.params.username });
  if (currentUser._id !== user._id) {
    try {
      if (currentUser.friends.includes(user._id)) {
        //If everything is ok,  update both users.
        await user.updateOne({ $pull: { friends: currentUser._id } });
        await currentUser.updateOne({ $pull: { friends: user._id } });

        return res.status(200).json("User has been removed!");
      } else {
        return res.status(403).json("You are not friends!");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can not remove yourself!");
  }
});

//GET FRIENDS (the profil pictures, usernames and IDs)
/*
TODO: Use of VerifyTokenAndAutherization gives invalid token error on the client. 
Figure out why. 
*/
router.get("/friends/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const friends = await Promise.all(
      user.friends.map((friendID) => User.findById(friendID))
    );
    let friendList = [];
    friends.map((friend) => {
      //destructuring
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    return res.status(200).json(friendList);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;

const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// connect to the database
mongoose.connect('mongodb://localhost:27017/academy', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// // Create a scheme for standings
// const standingsSchema = new mongoose.Schema({
//   users: Array
// });
//
// // Create a model for standings
// const Standings = mongoose.model('Standings', standingsSchema);

// Schema for users
const userSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.ObjectID,
  //   ref: 'Standings'
  // },
  username: String,
  academicPrestige: Number,
  yearInSchool: String,
  degreeStatus: String,
  // // Resources will be laid out as follows: [Food, Brain Power, Time]
  // resources: Array,
  // resourcesMax: Array,
  // Assignments will be laid out as follows: [Paper, Project, Exam]
  assignmentsEnglish: Array,
  assignmentsMathematics: Array,
  assignmentsHumanities: Array,
  assignmentsFineArts: Array,
  assignmentsCommunications: Array,
  assignmentsScience: Array,
  assignmentsSocialSciences: Array,
  // Research will be laid out as follows: [English, Mathematics, Humanities,
  // Fine Arts, Communications, Science, Social Sciences, Spying, Embarassing,
  // Stealing, Finding Error, Food Efficiency, Brain Efficiency, Time Efficiency]
  research: Array,
  // We need the date to compensate the user for resources earned when not
  // logged in.
  lastLoggedIn: Date
});

// Create a model for users
const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
  const userToAdd = new User({
    username: req.body.username,
    academicPrestige: req.body.academicPrestige,
    yearInSchool: req.body.yearInSchool,
    degreeStatus: req.body.degreeStatus,
    assignmentsEnglish: req.body.assignmentsEnglish,
    assignmentsMathematics: req.body.assignmentsMathematics,
    assignmentsHumanities: req.body.assignmentsHumanities,
    assignmentsFineArts: req.body.assignmentsFineArts,
    assignmentsCommunications: req.body.assignmentsCommunications,
    assignmentsScience: req.body.assignmentsScience,
    assignmentsSocialSciences: req.body.assignmentsSocialSciences,
    research: req.body.research,
    lastLoggedIn: req.body.lastLoggedIn
  });
  try {
    // See if the username already exists. If so, send status code 409.
    // We need unique usernames.
    const userFound = User.findOne({username: userToAdd.username}, async function (err, user) {
      if (err) {
        res.send(500);
        return;
      }
      if (user) {
        res.send(409);
        return;
      } else {
        await userToAdd.save();
        res.send(userToAdd);
      }
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const userFound = User.findOne({username: req.query.username}, async function (err, user) {
      if (err) {
        res.send(500);
        return;
      }
      if (!user) {
        res.send(404);
        return;
      } else {
        res.send(user);
      }
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/users/:userID/login', async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.userID});
    if (!user) {
      res.sendStatus(404);
      return;
    }
    user.lastLoggedIn = req.body.lastLoggedIn;
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/users/:userID/add-task', async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.userID});
    if (!user) {
      res.sendStatus(404);
      return;
    }
    user.assignmentsEnglish = req.body.assignmentsEnglish;
    user.assignmentsScience = req.body.assignmentsScience;
    user.assignmentsFineArts = req.body.assignmentsFineArts;
    user.assignmentsHumanities = req.body.assignmentsHumanities;
    user.assignmentsMathematics = req.body.assignmentsMathematics;
    user.assignmentsCommunications = req.body.assignmentsCommunications;
    user.assignmentsSocialSciences = req.body.assignmentsSocialSciences;
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Schema for resources
const resourceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User'
  },
  food: Number,
  brainPower: Number,
  time: Number,
  maxFood: Number,
  maxBrainPower: Number,
  maxTime: Number
});

// Model for resources
const Resource = mongoose.model('Resource', resourceSchema);

app.post('/api/users/:userID/resources', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if (!user) {
      res.send(404);
      return;
    }
    let resources = new Resource({
      user: user,
      food: req.body.food,
      brainPower: req.body.brainPower,
      time: req.body.time,
      maxFood: req.body.maxFood,
      maxBrainPower: req.body.maxBrainPower,
      maxTime: req.body.maxTime
    });
    await resources.save();
    res.send(resources);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/users/:userID/resources', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if (!user) {
      res.send(404);
      return;
    }
    let resources = await Resource.findOne({user: user._id});
    res.send(resources);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/users/:userID/resources/:resourceID', async (req, res) => {
  try {
    let resources = await Resource.findOne({_id: req.params.resourceID, user: req.params.userID});
    if (!resources) {
      res.send(404);
      return;
    }
    resources.food = req.body.food;
    resources.brainPower = req.body.brainPower;
    resources.time = req.body.time;
    resources.maxFood = req.body.maxFood;
    resources.maxBrainPower = req.body.maxBrainPower;
    resources.maxTime = req.body.maxTime;
    await resources.save();
    res.send(resources);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

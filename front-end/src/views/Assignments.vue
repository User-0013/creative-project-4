<template>
<div class="page">
  <div class="resources">
    <div class="individual-resource">
      <p>Time: {{Math.floor(time)}}</p>
      <p>({{this.$root.$data.initData.secondsInHour * this.$root.$data.initData.resources.timeGrowthCoeff}}/hour)</p>
      <p>Max: {{maxTime}}</p>
    </div>
    <div class="individual-resource">
      <p>Brain Power: {{Math.floor(brainPower)}}</p>
      <p>({{this.$root.$data.initData.secondsInHour * this.$root.$data.initData.resources.brainPowerGrowthCoeff}}/hour)</p>
      <p>Max: {{maxBrainPower}}</p>
    </div>
    <div class="individual-resource">
      <p>Food: {{Math.floor(food)}}</p>
      <p>({{this.$root.$data.initData.secondsInHour * this.$root.$data.initData.resources.foodGrowthCoeff}}/hour)</p>
      <p>Max: {{maxFood}}</p>
    </div>
  </div>
  <div class="assignments">
    <h2>English</h2>
    <AssignmentOptions @resources-spent="updateResourcesOnTask" @assignment-completed="updateAssignmentsOnTask" :subject="this.$root.$data.initData.subjects.english" :paperTime="paperTime" :paperBrainPower="paperBrainPower" :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower" :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
      :examFood="examFood" :papers="assignmentsEnglish[0]" :projects="assignmentsEnglish[1]" :exams="assignmentsEnglish[2]" :time="time" :brainPower="brainPower" :food="food" />
    <h2>Mathematics</h2>
    <AssignmentOptions @resources-spent="updateResourcesOnTask" @assignment-completed="updateAssignmentsOnTask" :subject="this.$root.$data.initData.subjects.mathematics" :paperTime="paperTime" :paperBrainPower="paperBrainPower" :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower" :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
      :examFood="examFood" :papers="assignmentsMathematics[0]" :projects="assignmentsMathematics[1]" :exams="assignmentsMathematics[2]" :time="time" :brainPower="brainPower" :food="food" />
    <h2>Humanities</h2>
    <AssignmentOptions @resources-spent="updateResourcesOnTask" @assignment-completed="updateAssignmentsOnTask" :subject="this.$root.$data.initData.subjects.humanities" :paperTime="paperTime" :paperBrainPower="paperBrainPower" :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower" :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
      :examFood="examFood" :papers="assignmentsHumanities[0]" :projects="assignmentsHumanities[1]" :exams="assignmentsHumanities[2]" :time="time" :brainPower="brainPower" :food="food" />
    <h2>Fine Arts</h2>
    <AssignmentOptions @resources-spent="updateResourcesOnTask" @assignment-completed="updateAssignmentsOnTask" :subject="this.$root.$data.initData.subjects.fineArts" :paperTime="paperTime" :paperBrainPower="paperBrainPower" :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower" :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
      :examFood="examFood" :papers="assignmentsFineArts[0]" :projects="assignmentsFineArts[1]" :exams="assignmentsFineArts[2]" :time="time" :brainPower="brainPower" :food="food" />
    <h2>Communications</h2>
    <AssignmentOptions @resources-spent="updateResourcesOnTask" @assignment-completed="updateAssignmentsOnTask" :subject="this.$root.$data.initData.subjects.communications" :paperTime="paperTime" :paperBrainPower="paperBrainPower" :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower" :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
      :examFood="examFood" :papers="assignmentsCommunications[0]" :projects="assignmentsCommunications[1]" :exams="assignmentsCommunications[2]" :time="time" :brainPower="brainPower" :food="food" />
    <h2>Science</h2>
    <AssignmentOptions @resources-spent="updateResourcesOnTask" @assignment-completed="updateAssignmentsOnTask" :subject="this.$root.$data.initData.subjects.science" :paperTime="paperTime" :paperBrainPower="paperBrainPower" :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower" :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
      :examFood="examFood" :papers="assignmentsScience[0]" :projects="assignmentsScience[1]" :exams="assignmentsScience[2]" :time="time" :brainPower="brainPower" :food="food" />
    <h2>Social Sciences</h2>
    <AssignmentOptions @resources-spent="updateResourcesOnTask" @assignment-completed="updateAssignmentsOnTask" :subject="this.$root.$data.initData.subjects.socialSciences" :paperTime="paperTime" :paperBrainPower="paperBrainPower" :paperFood="paperFood" :projectTime="projectTime" :projectBrainPower="projectBrainPower" :projectFood="projectFood" :examTime="examTime" :examBrainPower="examBrainPower"
      :examFood="examFood" :papers="assignmentsSocialSciences[0]" :projects="assignmentsSocialSciences[1]" :exams="assignmentsSocialSciences[2]" :time="time" :brainPower="brainPower" :food="food" />
  </div>
</div>
</template>

<script>
import AssignmentOptions from "../components/AssignmentOptions.vue"
import axios from 'axios'
export default {
  name: 'Assignments',
  components: {
    AssignmentOptions
  },
  data() {
    return {
      user: null,
      resource: null,
      time: 0,
      brainPower: 0,
      food: 0,
      maxTime: 0,
      maxBrainPower: 0,
      maxFood: 0,
      paperTime: this.$root.$data.initData.assignments.paper.time,
      paperBrainPower: this.$root.$data.initData.assignments.paper.brainPower,
      paperFood: this.$root.$data.initData.assignments.paper.food,
      projectTime: this.$root.$data.initData.assignments.project.time,
      projectBrainPower: this.$root.$data.initData.assignments.project.brainPower,
      projectFood: this.$root.$data.initData.assignments.project.food,
      examTime: this.$root.$data.initData.assignments.exam.time,
      examBrainPower: this.$root.$data.initData.assignments.exam.brainPower,
      examFood: this.$root.$data.initData.assignments.exam.food,
      assignmentsEnglish: this.$root.$data.initData.emptyAssignmentsArray,
      assignmentsMathematics: this.$root.$data.initData.emptyAssignmentsArray,
      assignmentsHumanities: this.$root.$data.initData.emptyAssignmentsArray,
      assignmentsFineArts: this.$root.$data.initData.emptyAssignmentsArray,
      assignmentsCommunications: this.$root.$data.initData.emptyAssignmentsArray,
      assignmentsScience: this.$root.$data.initData.emptyAssignmentsArray,
      assignmentsSocialSciences: this.$root.$data.initData.emptyAssignmentsArray,
      queueEnglish: [],
      queueMathematics: [],
      queueHumanities: [],
      queueFineArts: [],
      queueCommunications: [],
      queueScience: [],
      queueSocialSciences: []
    }
  },
  methods: {
    async getUser() {
      try {
        let response = await axios.get("/api/users", {
          params: {
            username: this.$root.$data.username
          }
        });
        this.user = response.data;
        this.academicPrestige = this.user.academicPrestige;
        this.degreeStatus = this.user.degreeStatus;
        this.yearInSchool = this.user.yearInSchool;
        this.assignmentsEnglish = this.user.assignmentsEnglish;
        this.assignmentsMathematics = this.user.assignmentsMathematics;
        this.assignmentsHumanities = this.user.assignmentsHumanities;
        this.assignmentsFineArts = this.user.assignmentsFineArts;
        this.assignmentsCommunications = this.user.assignmentsCommunications;
        this.assignmentsScience = this.user.assignmentsScience;
        this.assignmentsSocialSciences = this.user.assignmentsSocialSciences;
        await this.getResource();
        this.getResourcesSinceLastLoggedIn();
        this.updateLastLoggedIn();
        this.populateQueues();
      } catch (error) {
        console.log(error);
      }
    },
    async getResource() {
      try {
        const response = await axios.get(`/api/users/${this.user._id}/resources`);
        this.resource = response.data;
        this.time = this.resource.time;
        this.brainPower = this.resource.brainPower;
        this.food = this.resource.food;
        this.maxTime = this.resource.maxTime;
        this.maxBrainPower = this.resource.maxBrainPower;
        this.maxFood = this.resource.maxFood;
      } catch (error) {
        console.log(error);
      }
    },
    updateResources() {
      // Update resources every second.
      setInterval(function() {
        // Get how many resources we need to give the user.
        // Formulas are different based on a user's resource efficiency.

        // Time forumla.
        if (this.time < this.resource.maxTime) {
          this.time += this.$root.$data.initData.resources.timeGrowthCoeff;
        } else {
          this.time = this.resource.maxTime;
        }

        // Brain Power formula.
        if (this.brainPower < this.resource.maxBrainPower) {
          this.brainPower += this.$root.$data.initData.resources.brainPowerGrowthCoeff;
        } else {
          this.brainPower = this.resource.maxBrainPower;
        }

        // Food formula.
        if (this.food < this.resource.maxFood) {
          this.food += this.$root.$data.initData.resources.foodGrowthCoeff;
        } else {
          this.food = this.resource.maxFood;
        }
      }.bind(this), 1000);
    },
    async saveResources() {
      // Save the current user's resources to the database.
      await axios.put(`/api/users/${this.user._id}/resources/${this.resource._id}`, {
        food: this.food,
        brainPower: this.brainPower,
        time: this.time,
        maxFood: this.resource.maxFood,
        maxBrainPower: this.resource.maxBrainPower,
        maxTime: this.resource.maxTime
      })
    },
    async updateLastLoggedIn() {
      try {
        let currentDate = new Date();
        await axios.put(`/api/users/${this.user._id}/login`, {
          lastLoggedIn: currentDate
        });
      } catch (error) {
        console.log(error);
      }
    },
    getResourcesSinceLastLoggedIn() {
      // Get the current date and subtract from the last time the user
      // logged in.
      let now = new Date();
      let lastLoggedIn = new Date(this.user.lastLoggedIn);

      // Get the resources earned while the user wasn't logged in.
      let resourcesEarnedWhileLoggedOut = (now.getTime() - lastLoggedIn.getTime()) / 1000;
      this.time += this.$root.$data.initData.resources.timeGrowthCoeff * resourcesEarnedWhileLoggedOut;
      this.brainPower += this.$root.$data.initData.resources.brainPowerGrowthCoeff * resourcesEarnedWhileLoggedOut;
      this.food += this.$root.$data.initData.resources.foodGrowthCoeff * resourcesEarnedWhileLoggedOut;
    },
    updateResourcesOnTask (task) {
      let taskQuantity = task.number;
      let taskTime = task.time;
      let taskBrainPower = task.brainPower;
      let taskFood = task.food;
      this.time -= taskQuantity * taskTime;
      this.brainPower -= taskQuantity * taskBrainPower;
      this.food -= taskQuantity * taskFood;
    },
    isEnoughResourcesOnTask (number, time, brainPower, food) {
      if ((this.time - number * time) < 0
        || (this.brainPower - number * brainPower) < 0
        || (this.food - number * food) < 0) {
        return false;
      } else {
        return true;
      }
    },
    async updateAssignmentsOnTask (task) {
      let assignmentIndex = -1
      switch(task.name) {
        case "Paper":
          assignmentIndex = 0;
          break;
        case "Project":
          assignmentIndex = 1;
          break;
        case "Exam":
          assignmentIndex = 2;
          break;
      }

      switch(task.subject) {
        case this.$root.$data.initData.subjects.english:
          this.assignmentsEnglish[assignmentIndex] += task.number;
          this.user.assignmentsEnglish[assignmentIndex] = this.assignmentsEnglish[assignmentIndex];
          break;
        case this.$root.$data.initData.subjects.mathematics:
          this.assignmentsMathematics[assignmentIndex] += task.number;
          this.user.assignmentsMathematics[assignmentIndex] = this.assignmentsMathematics[assignmentIndex];
          break;
        case this.$root.$data.initData.subjects.humanities:
          this.assignmentsHumanities[assignmentIndex] += task.number;
          this.user.assignmentsHumanities[assignmentIndex] = this.assignmentsHumanities[assignmentIndex];
          break;
        case this.$root.$data.initData.subjects.fineArts:
          this.assignmentsFineArts[assignmentIndex] += task.number;
          this.user.assignmentsFineArts[assignmentIndex] = this.assignmentsFineArts[assignmentIndex];
          break;
        case this.$root.$data.initData.subjects.communications:
          this.assignmentsCommunications[assignmentIndex] += task.number;
          this.user.assignmentsCommunications[assignmentIndex] = this.assignmentsCommunications[assignmentIndex];
          break;
        case this.$root.$data.initData.subjects.science:
          this.assignmentsScience[assignmentIndex] += task.number;
          this.user.assignmentsScience[assignmentIndex] = this.assignmentsScience[assignmentIndex];
          break;
        case this.$root.$data.initData.subjects.socialSciences:
          this.assignmentsSocialSciences[assignmentIndex] += task.number;
          this.user.assignmentsSocialSciences[assignmentIndex] = this.assignmentsSocialSciences[assignmentIndex];
          break;
      }

      try {
        await axios.put(`/api/users/${this.user._id}/add-task`, {
          assignmentsEnglish: this.user.assignmentsEnglish,
          assignmentsMathematics: this.user.assignmentsMathematics,
          assignmentsHumanities: this.user.assignmentsHumanities,
          assignmentsFineArts: this.user.assignmentsFineArts,
          assignmentsCommunications: this.user.assignmentsCommunications,
          assignmentsScience: this.user.assignmentsScience,
          assignmentsSocialSciences: this.user.assignmentsSocialSciences
        });
      } catch (error) {
        console.log(error);
      }
    },
    async updateTaskQueue (task) {
      // Check if this is a duplicate task.
      let isDuplicate = false;
      for (let i = 0; i < this.user.taskQueue.length; i++) {
        if (this.user.taskQueue[i].id === task.id) {
          isDuplicate = true;
        }
      }
      if (!isDuplicate) {
        this.user.taskQueue.push(task);
        try {
          await axios.put(`/api/users/${this.user._id}/update-task-queue`, {
            taskQueue: this.user.taskQueue
          });
        } catch (error) {
          console.log(error);
        }
      }
    },
    async populateQueues () {
      for (let i = 0; i < this.user.taskQueue.length; i++) {
        let task = this.user.taskQueue[i];
        switch (task.subject) {
          case this.$root.$data.initData.subjects.english:
            this.queueEnglish.push(task);
            break;
          case this.$root.$data.initData.subjects.mathematics:
            this.queueMathematics.push(task);
            break;
          case this.$root.$data.initData.subjects.humanities:
            this.queueHumanities.push(task);
            break;
          case this.$root.$data.initData.subjects.fineArts:
            this.queueFineArts.push(task);
            break;
          case this.$root.$data.initData.subjects.communications:
            this.queueCommunications.push(task);
            break;
          case this.$root.$data.initData.subjects.science:
            this.queueScience.push(task);
            break;
          case this.$root.$data.initData.subjects.socialSciences:
            this.queueSocialSciences.push(task);
            break;
        }
      }
    },
    async saveTaskQueue () {
      await axios.put(`/api/users/${this.user._id}/update-task-queue`, {
        taskQueue: this.user.taskQueue
      });
    }
  },
  created: function () {
    this.getUser();
  },
  mounted: function () {
    this.updateResources();
  },
  destroyed: function () {
    this.saveResources();
  }
}
</script>

<style scoped>
.page {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

.page h1 {
  display: flex;
  width: 90%;
  font-family: "Times New Roman", serif;
  padding: 20px 15px;
  margin: 20px 5%;
}

.page h2 {
  display: flex;
  width: 100%;
  font-family: "Helvetica", sans-serif;
  font-size: 2.5em;
  padding: 20px 20px;
  color: #000;
}

.page h3 {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 0;
  font-family: "Candara";
  font-size: 2em;
  color: #000;
}

.page p {
  display: flex;
  font-family: "Garamond";
  font-size: 1.3em;
  margin: 10px 0;
}

.resources {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  border-radius: 5px;
  background-color: #D1E8E2;
  margin: 50px 0;
  padding: 0 20px;
  padding-bottom: 15px;
}

.individual-resource {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.individual-resource p {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 5px;
}

/* Buttons */
.button {
  display: flex;
  width: 100px;
  height: 50px;
  color: #D1E8E2;
  align-items: center;
  justify-content: center;
  background-color: #2C3531;
  border-radius: 4px;
  margin-top: 2%;
  margin-left: 20px;
  font-size: 1.25em;
}

.button-wrapper {
  display: flex;
  width: 100%;
  margin-right: 50px;
  justify-content: flex-end;
}

.assignments {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  border-radius: 5px;
  background-color: #D1E8E2;
  margin: 50px 0;
  padding: 0 20px;
  padding-bottom: 15px;
}

.assignment-options {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.assignment-req {
  display: flex;
  width: 50%;
  margin: 20px 0;
  flex-direction: column;
  justify-content: center;
}

.input-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.input {
  width: 75px;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .page h2 {
    font-size: 1.9em;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .resources {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 33%;
  }

  .individual-resource {
    margin: 10px 30px;
  }
}
</style>

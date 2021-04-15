<template>
<div class="assignment-options">
  <div class="assignment-req">
    <h3>Paper</h3>
    <p>Resources Required:</p>
    <div class="resources-req-wrapper">
      <div class="resources-req">
        <p>Time: {{paperTime}},</p>
        <p>Brain Power: {{paperBrainPower}},</p>
        <p>Food: {{paperFood}}</p>
      </div>
    </div>
    <p>Time to Complete: {{timeRemainingPaper}} s</p>
    <p>Current Number: {{papers}}</p>
    <form @submit.prevent="" class="pure-form">
      <div class="input-wrapper">
        <!-- onkeypress code taken from https://stackoverflow.com/questions/32777184/html-input-for-positive-whole-numbers-only-type-number -->
        <input type="number" min="1" onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 49 && event.charCode <= 57" v-model="quantityPaper" class="input"/>
        <div class="button-wrapper"><button @click="addTask('Paper', quantityPaper, timeRemainingPaper, paperTime, paperBrainPower, paperFood)" class="button">Start</button></div>
      </div>
    </form>
  </div>
  <div class="assignment-req">
    <h3>Project</h3>
    <p>Resources Required:</p>
    <div class="resources-req-wrapper">
      <div class="resources-req">
        <p>Time: {{projectTime}},</p>
        <p>Brain Power: {{projectBrainPower}},</p>
        <p>Food: {{projectFood}}</p>
      </div>
    </div>
    <p>Time to Complete: {{timeRemainingProject}} s</p>
    <p>Current Number: {{projects}}</p>
    <form @submit.prevent="" class="pure-form">
      <div class="input-wrapper">
        <!-- onkeypress code taken from https://stackoverflow.com/questions/32777184/html-input-for-positive-whole-numbers-only-type-number -->
        <input type="number" min="1" onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 49 && event.charCode <= 57" v-model="quantityProject" class="input"/>
        <div class="button-wrapper"><button @click="addTask('Project', quantityProject, timeRemainingProject, projectTime, projectBrainPower, projectFood)" class="button">Start</button></div>
      </div>
    </form>
  </div>
  <div class="assignment-req">
    <h3>Exam</h3>
    <p>Resources Required:</p>
    <div class="resources-req-wrapper">
      <div class="resources-req">
        <p>Time: {{examTime}},</p>
        <p>Brain Power: {{examBrainPower}},</p>
        <p>Food: {{examFood}}</p>
      </div>
    </div>
    <p>Time to Complete: {{timeRemainingExam}} s</p>
    <p>Current Number: {{exams}}</p>
    <form @submit.prevent="" class="pure-form">
      <div class="input-wrapper">
        <!-- onkeypress code taken from https://stackoverflow.com/questions/32777184/html-input-for-positive-whole-numbers-only-type-number -->
        <input type="number" min="1" onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 49 && event.charCode <= 57" v-model="quantityExam" class="input"/>
        <div class="button-wrapper"><button @click="addTask('Exam', quantityExam, timeRemainingExam, examTime, examBrainPower, examFood)" class="button">Start</button></div>
      </div>
    </form>
  </div>

  <div v-show="isTaskQueued" class="queue">
    <h2>Pending Tasks</h2>
    <div v-for="task in queue" :key="task.id">
      <div class="task">
        <p><b>{{task.name}}</b> - Quantity: {{task.number}}, Time Remaining: {{Math.ceil(task.timeRemaining)}}</p>
        <button @click="removeTask(task)" class="button">X</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AssignmentOptions',
  props: {
    subject: String,
    papers: Number,
    projects: Number,
    exams: Number,
    paperTime: Number,
    paperBrainPower: Number,
    paperFood: Number,
    projectTime: Number,
    projectBrainPower: Number,
    projectFood: Number,
    examTime: Number,
    examBrainPower: Number,
    examFood: Number,
    time: Number,
    brainPower: Number,
    food: Number
  },
  data () {
    return {
      queue: [],
      id: Math.floor(Math.random() * Date.now()),
      lastTaskEnd: 0,
      quantityPaper: "",
      quantityProject: "",
      quantityExam: "",
      timeRemainingPaper: 50,
      timeRemainingProject: 85,
      timeRemainingExam: 100
    }
  },
  methods: {
    addTask(task, quantity, timeLeft, time, brainPower, food) {
      if (quantity > 0) {
        if (this.$parent.isEnoughResourcesOnTask(quantity, time, brainPower, food)) {
          let start = this.lastTaskEnd;
          if (this.lastTaskEnd == 0 || this.lastTaskEnd < Date.now() / 1000) {
            start = Date.now() / 1000;
          }
          let end = start + quantity * timeLeft;
          this.lastTaskEnd = end;
          quantity = parseInt(quantity);
          let taskObject = {
            id: this.id,
            name: task,
            subject: this.subject,
            number: quantity,
            timeRemaining: end - start,
            startTime: start,
            endTime: end,
            time: time,
            brainPower: brainPower,
            food: food
          };
          this.$emit('resources-spent', taskObject);
          this.queue.push(taskObject);
          // this.updateTask();
          // Generate an id that will have a good chance of not conflicting with existing ids.
          this.id = Math.floor(Math.random() * Date.now());
        } else {
          alert("Not enough resources!");
        }
      }
    },
    updateTask() {
      // Always start at the front of the queue.
      let refreshIntervalID = setInterval(function () {
        if (this.queue[0].timeRemaining <= 0) {
          this.$emit('assignment-completed', this.queue[0]);
          this.removeTask(this.queue[0]);
          clearInterval(refreshIntervalID);
          return;
        } else {
          this.queue[0].intervalID = refreshIntervalID;
          this.queue[0].timeRemaining = this.queue[0].endTime - Date.now() / 1000;
        }
      }.bind(this), 1000);
    },
    removeTask(task) {
      let indexFound = this.queue.indexOf(task)
      let indexFoundParent = this.$parent.user.taskQueue.indexOf(task)
      if (indexFound !== -1) {
        // If the task isn't completed yet, refund the user's resources.
        if (task.timeRemaining > 0) {
          task.number = -task.number;
          this.$parent.updateResourcesOnTask(task);
        }
        clearInterval(this.queue[indexFound].intervalID);
        this.queue.splice(indexFound, 1)
      }
      if (indexFoundParent !== -1) {
        clearInterval(this.$parent.user.taskQueue[indexFoundParent].intervalID);
        this.$parent.user.taskQueue.splice(indexFoundParent, 1);
        this.$parent.saveTaskQueue();
      }
    },
    getQueue () {
      switch (this.subject) {
        case this.$root.$data.initData.subjects.english:
          this.queue = this.$parent.queueEnglish;
          break;
        case this.$root.$data.initData.subjects.mathematics:
          this.queue = this.$parent.queueMathematics;
          break;
        case this.$root.$data.initData.subjects.humanities:
          this.queue = this.$parent.queueHumanities;
          break;
        case this.$root.$data.initData.subjects.fineArts:
          this.queue = this.$parent.queueFineArts;
          break;
        case this.$root.$data.initData.subjects.communications:
          this.queue = this.$parent.queueCommunications;
          break;
        case this.$root.$data.initData.subjects.science:
          this.queue = this.$parent.queueScience;
          break;
        case this.$root.$data.initData.subjects.socialSciences:
          this.queue = this.$parent.queueSocialSciences;
          break;
      }
    }
  },
  created: function () {
    this.getQueue();
  },
  computed: {
    isTaskQueued () {
      if (this.queue.length > 0) {
        this.updateTask();
        return true;
      } else {
        return false;
      }
    }
  },
  beforeDestroy: function() {
    if (this.queue.length > 0) {
      // Stop all setInterval's before destroying.
      for (let i = 0; i < this.queue.length; i++) {
        this.$parent.updateTaskQueue(this.queue[i]);
        clearInterval(this.queue[i].intervalID);
      }
      this.$parent.saveTaskQueue();
    }
  }
}
</script>

<style scoped>
  .assignment-req h3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 0;
    font-family: "Candara";
    font-size: 2em;
    color: #000;
  }

  .p {
    display: flex;
    font-family: "Garamond";
    font-size: 1.3em;
    margin: 10px 0;
  }

  .assignment-req p {
    margin: 5px 0;
  }

  .resources-req-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .resources-req {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
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
    align-items: center;
  }

  .queue {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .task {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .task button {
    width: 50px;
    height: 35px;
  }

  .pure-form {
    width: 100%;
  }

  .input-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
  }

  .input {
    width: 75px;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 400px) {
    .assignment-req {
      width: 100%;
    }

    .page h3 {
      font-size: 1.75em;
    }
  }

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {
    .button-wrapper {
      margin-right: 50px;
    }
  }

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .button-wrapper {
      margin-right: 50px;
    }

    .assignment-req {
      display: flex;
      width: 33%;
      margin: 20px 0;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .resources-req-wrapper {
      flex-direction: row;
    }

    .resources-req-wrapper p {
      margin-right: 5px;
    }
  }
</style>

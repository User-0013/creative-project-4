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
      id: 0,
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
        let start = Date.now() / 1000;
        let end = start + quantity * timeLeft;
        quantity = parseInt(quantity);
        let taskObject = {
          id: this.id,
          name: task,
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
        this.updateTask(taskObject);
        this.id += 1;
      }
    },
    updateTask(task) {
      let indexFound = this.queue.indexOf(task);
      let refreshIntervalID = setInterval(function () {
        if (this.queue[indexFound].timeRemaining <= 0) {
          this.removeTask(task);
          task.subject = this.subject;
          this.$emit('assignment-completed', task);
          clearInterval(refreshIntervalID);
          return;
        } else {
          this.queue[indexFound].timeRemaining = this.queue[indexFound].endTime - Date.now() / 1000;
        }
      }.bind(this), 1000);
    },
    removeTask(task) {
      let indexFound = this.queue.indexOf(task)
      if (indexFound !== -1) {
        this.queue.splice(indexFound, 1)
      }
    }
  },
  computed: {
    isTaskQueued () {
      if (this.queue.length > 0)
        return true;
      else
        return false;
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

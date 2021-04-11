<template>
<div class="assignment-options">
  <div class="assignment-req">
    <h3>Paper</h3>
    <p>Resources Required:</p>
    <p>Time: {{paperTime}}, Brain Power: {{paperBrainPower}}, Food: {{paperFood}}</p>
    <form @submit.prevent="" class="pure-form">
      <div class="input-wrapper">
        <input type="number" v-model="quantityPaper" class="input"/>
        <div class="button-wrapper"><button @click="addTask('Paper', quantityPaper, timeRemainingPaper)" class="button">Start</button></div>
      </div>
    </form>
  </div>
  <div class="assignment-req">
    <h3>Project</h3>
    <p>Resources Required:</p>
    <p>Time: {{projectTime}}, Brain Power: {{projectBrainPower}}, Food: {{projectFood}}</p>
    <form @submit.prevent="" class="pure-form">
      <div class="input-wrapper">
        <input type="number" v-model="quantityProject" class="input"/>
        <div class="button-wrapper"><button @click="addTask('Project', quantityProject, timeRemainingProject)" class="button">Start</button></div>
      </div>
    </form>
  </div>
  <div class="assignment-req">
    <h3>Exam</h3>
    <p>Resources Required:</p>
    <p>Time: {{examTime}}, Brain Power: {{examBrainPower}}, Food: {{examFood}}</p>
    <form @submit.prevent="" class="pure-form">
      <div class="input-wrapper">
        <input type="number" v-model="quantityExam" class="input"/>
        <div class="button-wrapper"><button @click="addTask('Exam', quantityExam, timeRemainingExam)" class="button">Start</button></div>
      </div>
    </form>
  </div>

  <div v-show="isTaskQueued" class="queue">
    <h2>Pending Tasks</h2>
    <div v-for="task in queue" :key="task.id">
      <div class="task">
        <p><b>{{task.name}}</b> - Quantity: {{task.number}}, Time Remaining: {{task.number * task.timeRemaining}}</p>
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
    paperTime: Number,
    paperBrainPower: Number,
    paperFood: Number,
    projectTime: Number,
    projectBrainPower: Number,
    projectFood: Number,
    examTime: Number,
    examBrainPower: Number,
    examFood: Number
  },
  data () {
    return {
      queue: [],
      id: 0,
      quantityPaper: 0,
      quantityProject: 0,
      quantityExam: 0,
      timeRemainingPaper: 50,
      timeRemainingProject: 85,
      timeRemainingExam: 100
    }
  },
  methods: {
    addTask(task, quantity, timeLeft) {
      this.queue.push({
        id: this.id,
        name: task,
        number: quantity,
        timeRemaining: timeLeft
      })
      this.id += 1;
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
    align-items: flex-start;
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
  @media only screen and (min-width: 401px) and (max-width: 960px) {}

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .assignment-req {
      width: 33%;
    }
  }
</style>

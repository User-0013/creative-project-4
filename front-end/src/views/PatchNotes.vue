<template>
  <div class='page'>
    <div class='patch-notes'>
      <h1>Patch 0.2</h1>

      <p>
        The following changes to come in the next patch are:
      </p>
        <ul class='patch-notes-ul'>
          <li><p>Backend support added</p></li>
          <li><p>Dynamic game mechanics will start being rolled out</p></li>
          <li><p>Stats and resources to update based on basic game mechanics</p></li>
          <li><p>More game mechanics added to those already in existence</p></li>
        </ul>
        <p>
          This will come out sometime in early April 2021.
        </p>
    </div>

    <div class='patch-notes'>
      <h1>Patch 0.1</h1>

      <p>
        The following changes were made:
      </p>
        <ul class='patch-notes-ul'>
          <li><p>Registration, login and logout now works locally. Backend not supported yet</p></li>
          <li><p>A few basic game mechanics added. Only static for now. Dynamic will come later</p></li>
          <li><p>Basic user stats added on login</p></li>
          <li><p>Assignments added along with a first look at a queue that will display pending tasks</p></li>
        </ul>
    </div>

    <div class='patch-notes'>
      <h1>Patch 0.0</h1>

      <p>
        The following changes were made:
      </p>
      <ul class='patch-notes-ul'>
        <li><p>Patch notes added</p></li>
        <li><p>Login and register pages added</p></li>
        <li><p>Responsive homepage formatting</p></li>
        <li><p>Color updated and standardized</p></li>
      </ul>
    </div>

    <div class='fill-space'></div>
  </div>
</template>

<script>

export default {
  name: 'PatchNotes'
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .page {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .fill-space {
    display: flex;
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }

  .page h1 {
    display: flex;
    width: 90%;
    font-family: "Times New Roman", serif;
    padding: 20px 15px;
    margin: 20px 5%;
    background-color: #D1E8E2;
  }

  .page h2 {
    display: flex;
    width: 100%;
    font-family: "Helvetica", sans-serif;
    font-size: 2.5em;
    padding: 20px 20px;
    color: #FFF;
    background-color: #116466;
  }

  .page h3 {
    display: flex;
    flex-direction: row;
    width: 90%;
    font-family: "Candara";
    font-size: 2em;
    padding: 10px 40px;
    margin-left: 4%;
    margin-right: 4%;
    color: #FFF;
    background-color: #116466;
  }

  .page p {
    display: flex;
    font-family: "Garamond";
    font-size: 1.3em;
    text-align: left;
    margin-bottom: 1rem;
  }

  .page a {
    font-family: "Garamond";
    padding: 0 5px;
  }

  .patch-notes {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    border-radius: 4px;
    border: 2px solid #000;
    margin: 2% 5%;
  }

  .patch-notes h1 {
    border-radius: 4px;
  }

  .patch-notes p {
    padding: 0 40px;
  }

  .patch-notes li p {
    padding: 0 0;
  }

  .patch-notes-ul {
    margin: 0 20%;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 400px) {
    .page {
      width: 100%;
      height: 100%;
    }
  }

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {}

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .page h1 {
      display: flex;
      width: 98%;
      padding: 20px 15px;
      margin: 20px 1%;
    }

    .page h3 {
      width: 98%;
      margin-left: 1%;
      margin-right: 1%;
    }

    .patch-notes-ul {
      margin: 0 4%;
    }
  }
</style>

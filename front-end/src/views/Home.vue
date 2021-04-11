<template>
  <div class='page'>
    <h1 class='main-title'>Academic Prestige</h1>

		<h2>What Is It?</h2>

		<div class='section-wrapper'>
			<p class='section'>
				Academic Prestige is a PVP real-time strategy game akin to OGame. You begin
				as a freshman	who is starting their first year at Georgia Fry University.
				Your goal is to	compete with the other students (players) and earn as much
				academic prestige	as you can.
			</p>
		</div>

		<h2>Earn Prestige</h2>

		<div class='section-wrapper'>
			<div class='picture-wrapper'>
				<img class='picture' src='/images/14099923036_e64f770e96_b.jpg'/>
			</div>

			<p class='section'>
				Earning academic prestige can be as simple as finishing a short
				homework assignment to as complex as earning a Bachelor's degree, or if you're
				ambtitious enough to earn a PhD.
			</p>
		</div>

		<h3>Study</h3>

		<div class='section-wrapper'>
			<div class='picture-wrapper'>
				<img class='picture' src='/images/5080412622_6035139e21_b.jpg'/>
			</div>

			<p class='section'>
				Enroll in classes at Georgia Fry University to learn more about the key
				univeristy subjects: English, Mathematics, Humanities, Fine Arts and
				Communications, Science, and Social	Sciences. Finish assignments and exams
				in these classes to earn prestige.
			</p>
		</div>

		<h3>Collaborate</h3>

		<div class='section-wrapper'>
			<div class='picture-wrapper'>
				<img class='picture' src='/images/9679505500_f1c68272ac_b.jpg'/>
			</div>

			<p class='section'>
				Collaborating with other students decreases the amount of time needed to
				to study and finish assignments. Form large study groups and combine your
				skills to accomplish massive feats such as publishing an academic paper.
				However, you must watch out. Your fellow students can decrease your academic
				prestige by stealing your homework, embarrassing you in front of the professors
				at Georgia Fry University, or	even causing you to flunk out of any or all
				of your classes.
			</p>
		</div>

		<h3>Climb the Ranks</h3>

		<div class='section-wrapper'>
			<div class='picture-wrapper'>
				<img class='picture' src='/images/9679506248_c9b2af5e8b_b.jpg'/>
			</div>

			<p class='section'>
				Gaining more prestige than your fellow classmates will show them that you
				are not to be messed with. Your prestige is a reflection of your knowlege
				and skills at Georgia Fry University. As you grow, it becomes harder for
				the other students to stop you as they will be less successful in their
				attempts to sabotage you.
			</p>
		</div>

		<h2>Are You Ready?</h2>
		<div class='button-wrapper'>
			<a href='/register'>
				<div class='button long-text'>Register Now</div>
			</a>
		</div>

    <div class='fill-space'></div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  a:hover {
    text-decoration: none;
    color: #FFF;
  }

  /* Buttons */
  .button {
    display: flex;
    width: 100px;
    height: 50px;
    color: #D1E8E2;
    align-items: center;
    background-color: #2C3531;
    border-radius: 4px;
    margin-top: 2%;
    font-size: 1.25em;
  }

  .button.long-text {
    width: 150px;
    justify-content: center;
  }

  .button-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .button-wrapper .button {
    width: 150px;
    height: 75px;
    font-size: 1.5em;
    margin: 15% 0;
  }

  /* Header Styles */
  .main-title {
    display: flex;
    font-family: "Times New Roman", serif;
    font-size: 4em;
    padding: 10px 0;
    margin: 20px auto;
    justify-content: center;
    color: #000;
    width: 100%;
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
    width: 90%;
    font-family: "Candara";
    font-size: 2em;
    padding: 10px 40px;
    margin-left: 4%;
    margin-right: 4%;
    color: #000;
  }

  .page p {
    display: flex;
    font-family: "Garamond";
    font-size: 1.3em;
  }

  .page a {
    font-family: "Garamond";
    text-decoration: none;
    padding: 0 5px;
  }

  /* Section Styles */
  .section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    margin: 20px auto;
    background-color: #D1E8E2;
  }

  .section-wrapper {
    display: flex;
    flex-direction: column;
    margin: 20px 40px;
  }

  /* Picture Styles */
  .picture-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .picture {
    display: flex;
    height: 100%;
    width: 300px;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 400px) {
    .page {
      width: 100%;
      height: 100%;
    }
    .button {
      margin-top: 10%;
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

    .section {
      text-align: left;
    }

    .section-wrapper {
      flex-direction: row;
    }

    .picture-wrapper {
      width: 400px;
    }

    .button-wrapper .button {
      width: 200px;
      height: 100px;
      font-size: 1.5em;
      margin: 10% 0;
    }

    .picture {
      width: 400px;
    }
  }
</style>

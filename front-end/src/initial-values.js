export let initData = {
  resources: {
    food: 200,
    brainPower: 200,
    time: 200,
    maxFood: 1000,
    maxBrainPower: 1000,
    maxTime: 500,
    foodGrowthCoeff: 0.1,
    brainPowerGrowthCoeff: 0.15,
    timeGrowthCoeff: 0.05
  },
  research: {
    english: 1,
    mathematics: 1,
    humanities: 1,
    fineArts: 1,
    communications: 1,
    science: 1,
    socialSciences: 1,
    spying: 1,
    embarassing: 1,
    stealing: 1,
    findingError: 1,
    foodEfficiency: 1,
    brainEfficiency: 1,
    timeEfficiency: 1
  },
  assignments: {
    paper: {
      food: 100,
      brainPower: 150,
      time: 50
    },
    project: {
      time: 100,
      brainPower: 200,
      food: 100
    },
    exam: {
      time: 50,
      brainPower: 250,
      food: 100
    }
  },
  subjects: {
    english: "English",
    mathematics: "Mathematics",
    humanities: "Humanities",
    fineArts: "Fine Arts",
    communications: "Communications",
    science: "Science",
    socialSciences: "Social Sciences"
  },
  secondsInHour: 3600,
  emptyArray: [],
  emptyAssignmentsArray: [0, 0, 0],
  emptyResearchArray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  degreeStatus: "Undergrad",
  yearInSchool: "Freshman",
  academicPrestige: 0
}

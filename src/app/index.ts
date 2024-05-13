// Functions for the dice game

// Randomly select a number from the dice depending on sides to simulate 'rolling the dice'
export const diceRoll = (sides: number) => {
  return Math.floor(Math.random() * sides) + 1;
};

// Collect the result of each dice rolled and the total number from all dice
export const result = (numOfDice: number = 1, sides: number = 6) => {
  let eachDice = [];
  let total = 0;

  for (let i = 0; i < numOfDice; i++) {
    const roll = diceRoll(sides);
    eachDice.push(roll);
    total += roll;
  }

  return { total, eachDice };
};

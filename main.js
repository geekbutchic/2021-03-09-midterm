// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

ageToAbilities = (age) => {
  if (age < 16) {
    return "You can't drive.";
  } else if (age <= 16 || age <= 17) {
    return "You can drive but not vote.";
  } else if (age <= 18 || age <= 24) {
    return "You can vote but not rent a car.";
  } else if (age <= 25 || age <= 100) {
    return "You can do pretty much anything.";
  }
};

oddIndices = (arr) => {
    let indices = 0;

    
};

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === "undefined") {
  ageToAbilities = undefined;
}
if (typeof oddIndices === "undefined") {
  oddIndices = undefined;
}
if (typeof numOddValues === "undefined") {
  numOddValues = undefined;
}
if (typeof averageStringLength === "undefined") {
  averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === "undefined") {
  firstPunctuationIndex = undefined;
}
if (typeof getPlace === "undefined") {
  getPlace = undefined;
}

module.exports = {
  ageToAbilities,
  oddIndices,
  numOddValues,
  averageStringLength,
  firstPunctuationIndex,
  getPlace,
};

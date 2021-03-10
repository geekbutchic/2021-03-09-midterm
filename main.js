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

oddIndices = (a) => {
  let ar = [];

  for (var i = 0; i < a.length; i++) {
    if (i % 2 === 1) {
      ar.push(a[i]);
    }
  }
  return ar;
};

numOddValues = (arr) => {
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddCount++;
    }
  }
  return oddCount;
};

averageStringLength = (arr) => {
  let output = arr.join("").length / arr.length;
  if (!output) {
    return 0;
  } else {
    return output;
  }
};


// Possible other function that might work but did not pass tests

// firstPunctuationIndex = (str) => {
//     let indices = [];

//    for (let i = 0; i < str.length; i++) {
//        if (str[i].includes('!')) {
//            return indices.push(i);
//        } else if (str[i] === '?') {
//            return indices.push(i);
//        } else if (str[i] === '.') {
//            return indices.push(i);
//        }
//    }
//    return indices;
// }
// -1 is example of searching for element 
firstPunctuationIndex = (str) => {
    let firstIndex = -1

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.' || str[i] === '!' || str[i] === '?') {
            if (firstIndex === -1) {
                firstIndex = i;
            }
        }
    }
    return firstIndex;
};
// Pinball machine high score
// 1st - 100
// 2nd - 90
// 3rd - 80
// Our score - 95

getPlace = (str) => {

}







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

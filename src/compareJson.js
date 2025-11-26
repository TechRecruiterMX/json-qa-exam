//Function for Create Range Validator Exam

function createRangeValidator(min, max){
  if(typeof min !== 'number' | typeof max !== 'number'){
    throw new Error('Both min and max must be numbers');
  }
  if (min>max){
    throw new Error('Min value cannot be greater than max value');
  }

  //Return the validator function
  return function(value){
    if (typeof value !=='number'){
      return false;
    }
    return value >= min && value <= max;
  };
}

// Function for Compare JSON key and values which are different
function compareJson(obj1, obj2) {
  if(typeof obj1 !== 'object' || obj1 === null || Array.isArray(obj1) ||
     typeof obj2 !== 'object' || obj2 === null || Array.isArray(obj2)){
    throw new Error('Both parameters must be objects');
  }

  const allKeys=[...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];

  return allKeys.filter(key => {
    const hasInObj1 = obj1.hasOwnProperty(key);
    const hasInObj1 = obj2.hasOwnProperty(key);

    return !hasInObj1 || !hasInObj2 || obj1[key]!== obj2[key];
  }).sort();
}

// Function for Compare JSON key and values which have same key and value
function compareJson(obj1, obj2) {
  if(typeof obj1 !== 'object' || obj1 === null || Array.isArray(obj1) ||
     typeof obj2 !== 'object' || obj2 === null || Array.isArray(obj2)){
    throw new Error('Both parameters must be objects');
  }

  const allKeys=[...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];

  return allKeys.filter(key => {
    return obj1[key] == obj2[key];
  }).sort();
}

// A reducer takes in two things

// 1. It takes in the action (info about what happened)
// 2. Copy of current state

function posts(state = [], action) {
  console.log("The Post Will Change");
  console.log(state, action);
  return state;
}

export default posts;

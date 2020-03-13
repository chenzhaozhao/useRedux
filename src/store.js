const Redux = require("redux");
const createStore = Redux.createStore;
const reducer = (state = "绿灯", action) => {
  switch (action.type) {
    case "GO":
      state = "绿灯";
      break;

    case "STOP":
      state = "红灯";
      break;

    case "CAUTION":
      state = "黄灯";
      break;
  }
  return state;
};
const store = createStore(reducer);
export { store };

require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5fb6a6328096b016b044216e")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("5fb6d7851cf8482fec0a9ec7")
  .then((res) => {
    console.log("count", res);
  })
  .catch((e) => {
    console.log(e);
  });

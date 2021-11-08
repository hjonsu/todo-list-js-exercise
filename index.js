function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },


    taskComplete: function () {
      this.complete = true;
    }
  };
  return task;
};


const task1 = newTask("clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "Just do it");
const task3 = newTask("Walk dog", "Pixie needs to poop!");
const tasks = [task1, task2, task3];

task3.logState();
task3.taskComplete();
task3.logState();

console.log(tasks);

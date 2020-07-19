const Singleton = (function () {
  function ProcessManager() {
    this.noOfProcess = 0;
  }

  ProcessManager.prototype.increaseProcessCount = function () {
    this.noOfProcess++;
  };

  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  function getProcessManager() {
    if (pManager === undefined) createProcessManager(); // create new instance if exists doesn't exists
    return pManager; // return instance if instance already exists
  }

  return getProcessManager;
})();

let processMan1 = Singleton();
let processMan2 = Singleton(); // same instance is returned.

processMan1.increaseProcessCount();
processMan1.increaseProcessCount();

console.log(processMan1); // ProcessManager {noOfProcess: 2}
console.log(processMan2); // ProcessManager {noOfProcess: 2}

console.log(processMan1 === processMan2); // true

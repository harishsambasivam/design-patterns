const Developer = function (name) {
  this.name = name;
  this.type = "Developer";
};

const Tester = function (name) {
  this.name = name;
  this.type = "Tester";
};

const EmployeeFactory = function () {};
EmployeeFactory.prototype.create = function create(name, type) {
  switch (type) {
    case "developer":
      return new Developer(name);
    case "tester":
      return new Tester(name);
    default:
      throw new Error("please pass a valid role!");
  }
};

let employeeFactory = new EmployeeFactory();

employeeFactory.create("harish", "developer"); // Developer {name:'harish', type: 'Developer'}
employeeFactory.create("aravind krishna", "tester"); // Tester {name:'aravind krishna', type: 'tester'}
employeeFactory.create("rasmee basira", "tester"); // Tester {name:'rasmee basira', type: 'tester'}
employeeFactory.create("balaguru", "developer"); // Developer {name:'balaguru', type: 'Developer'}

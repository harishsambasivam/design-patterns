const EmployeeFactory = require("./factory");

let employeeFactory = new EmployeeFactory();

employeeFactory.create("harish", "developer"); // Developer {name:'harish', type: 'Developer'}
employeeFactory.create("aravind krishna", "tester"); // Tester {name:'aravind krishna', type: 'tester'}
employeeFactory.create("rasmee basira", "tester"); // Tester {name:'rasmee basira', type: 'tester'}
employeeFactory.create("balaguru", "developer"); // Developer {name:'balaguru', type: 'Developer'}

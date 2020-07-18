class User {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  send(receiver, message) {
    receiver.receive(this.name, message);
  }

  // these two methods are tightly coupled, Also communication is many to many,
  //   think about implementing a spam filter!!

  receive(sender, message) {
    // spam filtering
    console.log(`${sender} to ${this.name} : ${message}`);
  }
}

// In such scenario, we can use Mediator pattern, which acts as mediator between two objects. Rather than objects themselves handle communication and business logic, Mediator will handle those routing , spam filtering and other logic etc.,

// --> low coupling 👏

const harish = new User("harish");
const ravi = new User("ravi");

harish.send(ravi, "Hello bro!");
ravi.send(harish, "Hello Harish!");

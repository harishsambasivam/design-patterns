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

const harish = new User("harish");
const ravi = new User("ravi");
const sasi = new User("sasi kumar");
const amudhan = new User("amudhavigneshwaran");

harish.send(ravi, "Hello bro!");
ravi.send(harish, "Hello Harish!");

// harish would love to say 'Have a nice day to everyone!'
harish.send(ravi, "Have a nice day to everyone!");
harish.send(sasi, "Have a nice day to everyone!");
harish.send(amudhan, "Have a nice day to everyone!");

// what if we have chat room which will pass the message to everyone!!

// In such scenario, we can use Mediator pattern, which acts as mediator between two objects. Rather than objects themselves handle communication and business logic, Mediator will handle those routing , spam filtering and other logic etc.,

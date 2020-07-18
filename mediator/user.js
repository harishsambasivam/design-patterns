module.exports = class User {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  send(receiver, message) {
    this.mediator.send(this.name, receiver, message);
  }

  receive(sender, message) {
    console.log(`${sender} to ${this.name} : ${message}`);
  }
};

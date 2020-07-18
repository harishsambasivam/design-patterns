module.exports = class User {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  send(message, receiver) {
    this.mediator.send(message, this.name, receiver);
  }

  receive(message, sender) {
    console.log(`${sender} to ${this.name} : ${message}`);
  }
};

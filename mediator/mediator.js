class Mediator {
  constructor(name) {
    this.name = name;
    this.users = {};
  }

  addUser(user) {
    user.mediator = this;
    this.users[user.name] = user;
  }

  send(sender, receiver, message) {
    this.users[receiver.name].receive(sender, message);
  }
}
module.exports = { Mediator };

// chat room -> mediator

class ChatRoom {
  constructor(name) {
    this.name = name;
    this.users = {};
  }

  addUser(user) {
    user.mediator = this; // updating null -> this
    this.users[user.name] = user; // pushing to this.users
  }

  send(message, sender, receiver) {
    if (receiver) {
      this.users[receiver.name].receive(message, sender);
    } else {
      for (const user in this.users) {
        this.users[user].receive(message, sender);
      }
    }
  }
}

module.exports = { ChatRoom };

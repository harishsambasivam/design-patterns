// https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/

module.exports = class Observer {
  constructor(name) {
    this.name = name;
  }

  newNotification(notification) {
    console.log(`Hey, ${this.name} : ${notification}`);
  }
};

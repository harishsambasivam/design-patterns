module.exports = class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observerToUnsubscribe) {
    this.observers = this.observers.filter((observer) => {
      return observer !== observerToUnsubscribe;
    });
  }

  notifySubscribers(notification) {
    this.observers.forEach((observer) => {
      observer.newNotification(notification);
    });
  }
};

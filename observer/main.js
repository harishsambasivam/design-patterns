const Observable = require("./observable");
const Observer = require("./observer");

const akshaySaini = new Observable();

const harish = new Observer("harish");
const santhosh = new Observer("santhosh");
const ravi = new Observer("ravi");
const george = new Observer("george");

akshaySaini.subscribe(harish);
akshaySaini.subscribe(santhosh);
akshaySaini.subscribe(ravi);
akshaySaini.subscribe(george);

akshaySaini.notifySubscribers(
  "Akashai Saini uploaded : how to cook👨‍🍳 food with JavaScript!"
);

akshaySaini.unsubscribe(santhosh);
akshaySaini.unsubscribe(harish);

akshaySaini.notifySubscribers(
  "Akashai Saini uploaded : how to launch a rocket🚀 with JavaScript!"
);

// Hey, harish : Akashai Saini uploaded : how to cook👨‍🍳 food with JavaScript!
//
// Hey, santhosh : Akashai Saini uploaded : how to cook👨‍🍳 food with JavaScript!
//
// Hey, ravi : Akashai Saini uploaded : how to cook👨‍🍳 food with JavaScript!
//
// Hey, george : Akashai Saini uploaded : how to cook👨‍🍳  food with JavaScript!
//
// Hey, ravi : Akashai Saini uploaded : how to launch a rocket🚀 with JavaScript!
//
// Hey, george : Akashai Saini uploaded : how to launch a rocket🚀 with JavaScript!

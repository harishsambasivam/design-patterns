const { ChatRoom } = require("./mediator");
const User = require("./user");

const linkedInChatRoom = new ChatRoom("linkedin-server");

const harish = new User("harish sambasivam");
const ravi = new User("ravi kiran");
const sasi = new User("sasi kumar");
const amudhan = new User("amudhavigneshwaran");

linkedInChatRoom.addUser(harish);
linkedInChatRoom.addUser(ravi);
linkedInChatRoom.addUser(sasi);
linkedInChatRoom.addUser(amudhan);

harish.send("Hello, Brother. How are You!", ravi);
ravi.send("I'm good bro, wbu?", harish);

harish.send("Have a nice day, Anna!", amudhan);
amudhan.send("Thank You!", harish);

sasi.send("How are you?", harish);
harish.send("I'am good :) ", sasi);

harish.send("Have a nice Day Everyone!");

// harish sambasivam to ravi kiran 💨 Hello, Brother. How are You!
// ravi kiran to harish sambasivam 💨 I'm good bro, wbu?
// harish sambasivam to amudhavigneshwaran 💨 Have a nice day, Anna!
// amudhavigneshwaran to harish sambasivam 💨 Thank You!
// sasi kumar to harish sambasivam 💨 How are you?
// harish sambasivam to sasi kumar 💨 I'am good 💨)
// harish sambasivam to harish sambasivam 💨 Have a nice Day Everyone!
// harish sambasivam to ravi kiran 💨 Have a nice Day Everyone!
// harish sambasivam to sasi kumar 💨 Have a nice Day Everyone!
// harish sambasivam to amudhavigneshwaran 💨 Have a nice Day Everyone!

// https://medium.com/better-programming/the-mediator-pattern-in-javascript-2bd2ff244447
// https://www.youtube.com/watch?v=ZuhgOu-DGA4&t=87s
// https://www.youtube.com/watch?v=KOVc5o5kURE

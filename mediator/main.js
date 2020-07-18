const { Mediator } = require("./mediator");
const User = require("./user");

const linkedInServer = new Mediator("linkedin-server");

const harish = new User("harish sambasivam");
const ravi = new User("ravi kiran");
const sasi = new User("sasi kumar");
const amudhan = new User("amudhavigneshwaran");

linkedInServer.addUser(harish);
linkedInServer.addUser(ravi);
linkedInServer.addUser(sasi);
linkedInServer.addUser(amudhan);

harish.send(ravi, "Hello, Brother. How are You!");
ravi.send(harish, "I'm good bro, wbu?");

harish.send(amudhan, "Have a nice day, Anna!");
amudhan.send(harish, "Thank You!");

sasi.send(harish, "How are you?");
harish.send(sasi, "I'am good :) ");

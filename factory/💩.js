function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

// we need to create Objects for these classes.

const harish = new Developer("harish");
const arun = new Tester("arun");
const bala = new Developer("bala");
const ravi = new Developer("ravi");
const sasi = new Developer("sasi");
const sai = new Tester("sai");
const amudhan = new Tester("amudhan");
const george = new Tester("george");

// we acheived the thing but 'new','new', 'new'!!!!
// Think of creating 100 objects, 100 'new' keyword.

// lets see how factory pattern can let us write clean code.

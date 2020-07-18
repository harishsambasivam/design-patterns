const Developer = require("./developer");
const Tester = require("./tester");

module.exports = class {
  create(name, type) {
    switch (type) {
      case "developer":
        return new Developer(name);
      case "tester":
        return new Tester(name);
      default:
        throw new Error("please pass a valid role!");
    }
  }
};

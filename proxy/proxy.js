const AnimalKingdomAPI = require("./AnimalKingdomAPI");
module.exports = class ApiProxy {
  constructor() {
    this.cache = {};
    this.api = new AnimalKingdomAPI();
  }

  get(type) {
    if (this.cache[type] === undefined) this.cache[type] = this.api.get(type);
    else console.log("serving from cache");
    return this.cache[type]; // serving from cache/local Storage
  }
};

const AnimalKingdomAPI = require("./AnimalKingdomAPI");
const Proxy = require("./proxy");

// without proxy
const animalKingdomAPI = new AnimalKingdomAPI();
console.log(animalKingdomAPI.get("bird")); // serving from api( network call )
console.log(animalKingdomAPI.get("reptile")); // serving from api( network call )
console.log(animalKingdomAPI.get("reptile")); // serving from api( network call )
console.log(animalKingdomAPI.get("bird")); // serving from api( network call )
console.log(animalKingdomAPI.get("mammal")); // serving from api( network call )
console.log(animalKingdomAPI.get("reptile")); // serving from api( network call )
console.log(animalKingdomAPI.get("bird")); // serving from api( network call )
console.log(animalKingdomAPI.get("reptile")); // serving from api( network call )
console.log(animalKingdomAPI.get("bird")); // serving from api( network call )
console.log(animalKingdomAPI.get("mammal")); // serving from api( network call )

// with proxy
const proxy = new Proxy("bird");
console.log(proxy.get("reptile")); // serving from api( network call )
console.log(proxy.get("bird")); // serving from api( network call )
console.log(proxy.get("reptile")); //serving from cache
console.log(proxy.get("bird")); // serving from cache
console.log(proxy.get("mammal")); // serving from api( network call )
console.log(proxy.get("reptile")); // serving from cache
console.log(proxy.get("bird")); // serving from cache
console.log(proxy.get("reptile")); // serving from cache
console.log(proxy.get("bird")); // serving from cache
console.log(proxy.get("mammal")); // serving from cache

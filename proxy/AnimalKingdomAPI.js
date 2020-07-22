module.exports = class AnimalKingdomAPI {
  get(type) {
    // assume we are making network calls to api
    console.log("serving from api( network call )");
    switch (type) {
      case "mammal":
        // return fetch('https://zoo.api/mammal');
        return { animal: "elephant" };

      case "bird":
        // return fetch('https://zoo.api/bird');
        return { bird: "peacock" };

      case "reptile":
        // return fetch('https://zoo.api/reptile');
        return { reptile: "snake" };

      case "amphibian":
        // return fetch('https://zoo.api/amphibian');
        return { amphibian: "frog" };
    }
  }
};

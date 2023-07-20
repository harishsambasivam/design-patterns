module Interface {
  /**
   *
   * Definition and Purpose: An interface in TypeScript defines a contract for a structure,
   * specifying the properties and methods that an implementing object or class must have. It
   * allows you to describe the shape of an object or the structure of a class.
   *
   */

  interface Animal {
    name: string;
    sound: string;
    makeSound(data: { maxSoundInOneGo: number }): void;
  }

  // implementing a class

  class Dog implements Animal {
    name: string;
    sound: string;

    constructor(name: string, sound: string) {
      this.name = name;
      this.sound = sound || "Woof!";
    }

    makeSound(data: { maxSoundInOneGo: number }): void {
      let sound = "";
      while (data.maxSoundInOneGo > 0) {
        sound += " " + this.sound;
        data.maxSoundInOneGo--;
      }
      console.log(sound);
    }
  }

  const myDog = new Dog("Buddy", "bow bow!");
  myDog.makeSound({ maxSoundInOneGo: 5 });

  // creating a new object with interface
  const dog: Animal = {
    sound: "bow bow!",
    name: "johny",
    makeSound: function (data: { maxSoundInOneGo: number }): void {
      let sound = "";
      while (data.maxSoundInOneGo > 0) {
        sound += " " + this.sound;
        data.maxSoundInOneGo--;
      }
      console.log(sound);
    },
  };

  dog.makeSound({ maxSoundInOneGo: 2 });

  /**
   * Inheriting multiple interfaces
   */

  interface Printable {
    print(): void;
  }

  interface Loggable {
    log(): void;
  }

  // Interface extending multiple interfaces
  interface PrintableAndLoggable extends Printable, Loggable {
    printAndLog(): void;
  }

  // Class implementing the interface
  class Document implements PrintableAndLoggable {
    print(): void {
      console.log("Printing document...");
    }

    log(): void {
      console.log("Logging document...");
    }

    printAndLog(): void {
      this.print();
      this.log();
    }
  }

  // Create an instance of the Document class
  const doc = new Document();
  doc.printAndLog();



  /**
   * 
   * reopening an interface
   * 
   */

  interface Tshirt {
    color: string
    sleeve: 'half' | 'full'
  }

  interface Tshirt {
    neck: 'rounded' | 'polo'
  }

  const myFavTshirt: Tshirt = {
    color: 'offwhite',
    sleeve: 'half',
    neck: 'rounded'
  }
  
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class Person {
    constructor (fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }

    printInfo = () => {
        let  info = `Name: ${this.firstName} ${this.lastName} \n Age: ${this.age}`
        return info;
    }

    addAge = (ageToIncrement = 1) => {
        this.age += ageToIncrement;
    }
}

let person1 = new Person("Max", "Well", 55);
let person2 = new Person("Julie", "Newman", 25);

console.log(person1.printInfo() + "\n");
console.log(person2.printInfo() + "\n");

person1.addAge(3);

console.log(person1.printInfo() + "\n");
console.log(person2.printInfo() + "\n");

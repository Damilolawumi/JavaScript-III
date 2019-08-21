//The for principles of "this";
// in your own words. explain the four principle for the "this" keyword below.
//*
//The principles of 'this' is that this will bind to specific objects in different SVGElementInstanceList. below are the principles of 'this' 
// 1. Window/Global Object Binding:
//When in the global scope, the value of “this” will be the window/console Object.
// 2. Implicit Binding:
// Implicit binding occurs when dot notation is used to invoke a function.
// 3. New Binding
// When you create an instance of a function, the context of this moves to the newly created instance.
// 4. Explicit Binding 
// Explicit binding occurs when .call(), .apply(), or .bind() are used on a function. It is called explicit because you are explicitly passing in a this context to call() or apply()
//write out a code example of each explanation above

// Principle 1

// code example for Window Binding
function myReligion(religion) {
    console.log(this);
    return religion;
  };
  myReligion("Christian");

// Principle 2

// code example for Implicit Binding
const myName = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myName.sayHello('Atinuke');

// Principle 3

// code example for New Binding
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
    var Car1 = new Car('Toyota', 'Camry', 2014);
    console.log(Car1);


// Principle 4

// code example for Explicit Binding
function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
      return `Hello, my name is ${this.name}`;
    };
  }

  let dami = {
      name: 'Dami',
      age:900
  }


  let tobe = new Person({
      name:'Tobechukwu',
      age:40,
      homeTown:'Owerri'
  })

  console.log(tobe.speak.apply(dami))



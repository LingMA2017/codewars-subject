// Description:

// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// Use method prototypes to enable all Dogs to bark.


function Dog (breed) {
  this.breed = breed;
  this.bark = function(){}
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function() {
  return "Woof";
};
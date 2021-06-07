'use strict';

function between(min, max){  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

function role(){
var val = between(1,3);
  switch (val) {
    case 1:
      return 'author'
    case 2:
      return 'admin'
    case 3:
      return 'guest'
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var faker = require("faker");

  // Iteration
  // This code runs twenty times
  // It produces each time different data
  for (var i = 0; i < 20; i++) {
    // Initializing our variables with a different random data each time it is run
      var randomUsername = faker.name.findName(); // Generates a random name
      var randomEmail = faker.internet.email(); // Generates a random email
      var randomPassword = faker.internet.password(); // Generates a random password
      var randomRole = role(); // Generates a random role
      var randomCreatedAt = faker.date.past(2); // Generates a random date
      var randomUpdatedAt = faker.date.between(randomCreatedAt, faker.date.recent()); // Generates a random date

      console.log(randomUsername); // Outputs a random name
      console.log(randomEmail); // Outputs a random email
      console.log(randomPassword); // Outputs the random password generated
      console.log(randomRole); // Outputs the random role generates
      console.log(randomCreatedAt); // Produces a random date
      console.log(randomUpdatedAt); // Gives back a random date
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Birsa Munda Airport',
        address: '888G+X62, Chowk, Pawan Colony, Hinoo, Ranchi, Jharkhand 834002',
        cityId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Devi Ahilyabai Holkar Airport',
        address: 'Indore, Madhya Pradesh',
        cityId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Indore Airport',
        address: 'Indore, Madhya Pradesh',
        cityId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Lal Bahadur Shastri International Airport',
        address: 'Varanasi, Babatpur, Uttar Pradesh 221006',
        cityId: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Jayprakash Narayan International Airport',
        address: 'Shaheed Pir Ali Khan Marg, Bhatpura village, Sheikhpura, Patna, Bihar 800014',
        cityId: 5,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
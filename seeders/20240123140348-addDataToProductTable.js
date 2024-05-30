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
    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        name: 'basic black',
        description: 'basic style back t-shirt',
        price: 8.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/black01.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 2,
        name: 'basic blue',
        description: 'basic style blue t-shirt',
        price: 9.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/blue01.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 3,
        name: 'dark blue',
        description: 'dark blue t-shirt',
        price: 10.19,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/blue02.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 4,
        name: 'khaki with bear',
        description: 'khaki bear t-shirt',
        price: 11.59,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/kacky01.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 5,
        name: 'khaki line',
        description: 'khaki line t-shirt',
        price: 12.89,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/kacky02.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 6,
        name: 'pink bunny',
        description: 'pink bunny t-shirt',
        price: 14.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/pink01.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 7,
        name: 'red sonder',
        description: 'red sonder t-shirt',
        price: 8.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/red01.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 8,
        name: 'red champion',
        description: 'red champion t-shirt',
        price: 14.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/red02.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 9,
        name: 'basic white',
        description: 'basic style white t-shirt',
        price: 8.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/white01.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 10,
        name: 'white standard',
        description: 'white standard t-shirt',
        price: 10.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/white02.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 11,
        name: 'basic yellow',
        description: 'basic style yellow t-shirt',
        price: 8.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/yellow01.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 12,
        name: 'yellow 72',
        description: 'yellow 72 t-shirt',
        price: 9.99,
        image: '/Users/sonjohn/Desktop/copilot/testapi/imgsrc/yellow02.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
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

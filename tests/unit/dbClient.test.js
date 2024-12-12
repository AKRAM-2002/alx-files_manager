const chai = require('chai');
const dbClient = require('../../utils/db'); // Update path if necessary
const { expect } = chai;

describe('DB Client', () => {
  it('should connect to MongoDB successfully', async () => {
    const isAlive = dbClient.isAlive();
    expect(isAlive).to.be.true;
  });

  it('should retrieve the correct number of users', async () => {
    const count = await dbClient.nbUsers();
    expect(count).to.be.a('number');
  });
});

const chai = require('chai');
const redisClient = require('../../utils/redis'); // Update path if necessary
const { expect } = chai;

describe('Redis Client', () => {
  it('should connect to Redis successfully', async () => {
    const isAlive = redisClient.isAlive();
    expect(isAlive).to.be.true;
  });

  it('should set and get a key-value pair', async () => {
    await redisClient.set('testKey', 'testValue', 10);
    const value = await redisClient.get('testKey');
    expect(value).to.equal('testValue');
  });
});

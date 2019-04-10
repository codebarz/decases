
const mockGet = {
  get:
      jest.fn(() => Promise.resolve({data:[{name: "57"}, {name: "decafreelance"}]}))
};
module.exports = mockGet;

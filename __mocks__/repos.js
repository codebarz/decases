
const mockGet = jest.fn(() => Promise.resolve({ data: [{"repo" : "57"}] }));
module.exports = mockGet;

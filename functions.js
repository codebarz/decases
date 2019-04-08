const functions = {
    add: (a, b) => {
     if(!a || !b) {
         return `Arguments must not be empty`;
     }
     else {
         return a + b;
     }
    }
};

module.exports = functions;
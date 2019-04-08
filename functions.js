const functions = {
    add: (a, b) => {
     if(!a || !b) {
         return `Arguments must not be empty`;
     }
     else if(typeof a === "string" || typeof b === "string") {
         return "Both arguments must be an Integer";
     }
     else {
         return a + b;
     }
    }
};

module.exports = functions;
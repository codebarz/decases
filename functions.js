const functions = {
    add: (a, b) => {
     if(!a || !b) {
         return `Arguments must not be empty`;
     }
     else if(typeof a !== "number" || typeof b !== "number") {
         return "Both arguments must be an Integer";
     }
     else {
         return a + b;
     }
    },
    indefiniteAdd: (...a) => {
        let result = 0;
        for(let i in a) {
            result += a[i];
        }
        return result;
    },
    difference: (a,b) => {
        if(!a || !b) {
            return `Arguments must not be empty`;
        }
        else if(typeof a !== "number" || typeof b !== "number") {
            return "Both arguments must be an Integer";
        }
        else {
            return a - b;
        }
    }
};

module.exports = functions;
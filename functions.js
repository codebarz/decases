const axios = require('axios');
const ajax = require('ajax');
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
    },
    multiply: (...a) => {
        let result = 1;
        for(let i in a) {
            result *= a[i];
        }
        return result;
    },
    divide: (a,b) => a / b,
    getUserRepo: async (username) => {
        const url = `https://api.github.com/users/${username}/repos`;
        console.log(url);
        let result = [];
        await axios.get(url)
            .then(function (response) {
                response.data.forEach(value => result.push(value.name));
                return result;
            })
            .catch(function (error) {
                return error;
            });
        return result;
    },
    concatStrings: (a,b) => {
        if(!a || !b) {
            return `Parameters must not be empty`;
        }
        else if(typeof a === "number" || typeof b === "number") {
            return `Arguments must be strings`;
        }
        else {
            return `${a} ${b}`;
        }
    }

};

module.exports = functions;
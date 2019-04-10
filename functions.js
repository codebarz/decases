const axios = require('axios');
const mockAxios = require('./__mocks__/repos');
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
            if(typeof a[i] === 'string') {
                result = 'All arguments must be integers';
            }
            else {
                result *= a[i];
            }
        }
            return result;
    },
    divide: (a,b) => a / b,
    getUserRepo: async (username) => {
    const url = `https://api.github.com/users/${username}/repos`;
    let result = [];
    await mockAxios.get(url)
        .then(function (response) {
            response.data.forEach(value => result.push(value.name));
            return result;
        })
        .catch(function (error) {
            return error;
        });
        console.log(result);
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
functions.getUserRepo("whitehox");
module.exports = functions;
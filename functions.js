const axios = require('axios');
//const mock = require('__mocks__/repos');
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
        const mockUrl = `http://localhost:3000/data?username=${username}`;
        let result = [];
        await axios.get(url)
            .then(function (response) {
                response.data.forEach(value => result.push(value.name));
                return result;
            })
            .catch(function (error) {
                return error;
            });
        if(result.length > 0) {
            return result;
        }
        else {
            return 'This user doesn\'t have any repo';
        }
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
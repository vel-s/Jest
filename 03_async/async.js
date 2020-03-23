const axios = require('axios');

class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data ? resolve(data) : reject(new Error('error'));
            }, 100);
        })
    }

    static async get() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Ajax;
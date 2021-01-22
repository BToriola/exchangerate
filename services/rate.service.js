
const axios = require('axios');

const rateService = () => {
    // Fetching exchange rates from the external API


    const rate = async (base, currency) => {
        try {
            const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`);
            const result = response.data;
            return result;
        } catch (error) {
            return error.response.result
        }
    }
    return { rate }

}

module.exports = rateService;
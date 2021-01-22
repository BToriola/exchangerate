
const exchangeRateService = require('../services/rate.service');

const getRates = async (req, res) => {
    const { base, currency } = req.query;

    // check if all query parameters are provided
    if (!base) {
        return res.status(400).json({
            message: 'Please enter the currency base'
        });
    }

    if (!currency) {
        return res.status(400).json({
            message: 'Please enter the exchange rate'
        });
    }

    try {
        // Send the query parameters to the rate service for processing
        const results = await exchangeRateService().rate(base, currency);

        if (!results) {
            return res.status(204);
        }

        return res.status(200).json({
            results
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
        });
    }
}

module.exports = {
    getRates,
}
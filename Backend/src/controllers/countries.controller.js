import axios from 'axios';

// Controller get countries
export const getCountries = async (req, res, next) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};


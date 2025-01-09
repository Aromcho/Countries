import axios from "axios";

export const getCountryInfo = async (req, res, next) => {
    const { countryCode } = req.params; 

    if (!countryCode) {
        return res.status(400).json({ error: "Country code is required" });
    }

    try {
        const bordersResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
        
        if (!bordersResponse.data) {
            return res.status(404).json({ error: `No data found for country code: ${countryCode}` });
        }

        const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
            country: bordersResponse.data.commonName, 
        });

        const flagResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
            country: bordersResponse.data.commonName,
        });

        res.status(200).json({
            borders: bordersResponse.data.borders || [],
            population: populationResponse.data.data || [],
            flag: flagResponse.data.data.flag || "No flag available",
        });
    } catch (error) {
        console.error("Error fetching country info:", error.message);
        next(error); 
    }
};

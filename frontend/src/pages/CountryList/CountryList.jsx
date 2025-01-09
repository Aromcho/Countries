import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Box } from '@mui/material';
import CountryCard from '../../components/CountryCard/CountryCard';
import CountryListSkeleton from '../../components/CountryListSkeleton/CountryListSkeleton'; // Skeleton loader
import './CountryList.css';

function CountryList() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/countries')
            .then((response) => {
                setCountries(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
                setLoading(false);
            });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom className="section-title">
                Countries of the World
            </Typography>
            <Grid container spacing={3} className="country-list-container">
                {loading
                    ? Array.from(new Array(6)).map((_, index) => (
                          <Grid item xs={12} sm={6} md={4} key={index}>
                              <CountryListSkeleton />
                          </Grid>
                      ))
                    : countries.map((country) => (
                          <Grid item xs={12} sm={6} md={4} key={country.countryCode}>
                              <CountryCard country={country} />
                          </Grid>
                      ))}
            </Grid>
        </Container>
    );
}

export default CountryList;

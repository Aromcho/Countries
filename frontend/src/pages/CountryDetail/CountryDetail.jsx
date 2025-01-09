import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    CardMedia,
    Button,
    Divider,
    Grid,
    Skeleton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Line } from 'react-chartjs-2';
import { Helmet } from 'react-helmet-async';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './CountryDetail.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CountryDetail() {
    const { code } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/country/${code}`)
            .then((response) => {
                setCountryData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching country details:', error);
                setLoading(false);
            });
    }, [code]);

    if (loading) {
        return (
            <Container className="country-detail-container">
                <Helmet>
                    <title>Loading Country...</title>
                </Helmet>
                
                            <Skeleton variant="rectangular" width="100%" height={400} />
                            <Skeleton width="60%" style={{ margin: '10px 0' }} />
                            <Skeleton width="80%" />
                        
        
            </Container>
        );
    }

    if (!countryData) {
        return (
            <Container className="country-detail-container">
                <Helmet>
                    <title>Error</title>
                </Helmet>
                <Typography variant="h6" color="error" align="center">
                    No data available for this country.
                </Typography>
            </Container>
        );
    }

    const { borders, population, flag } = countryData;

    const chartData = {
        labels: population.populationCounts.map((pop) => pop.year),
        datasets: [
            {
                label: 'Population',
                data: population.populationCounts.map((pop) => pop.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <Container className="country-detail-container">
            <Helmet>
                <title>{population.country}</title>
                <link rel="icon" href={flag} />
            </Helmet>
            <Button
                startIcon={<ArrowBackIcon />}
                component={Link}
                to="/"
                variant="contained"
                className="back-button"
            >
                Back to List
            </Button>

            <Card className="country-card">
                <CardMedia
                    component="img"
                    height="300"
                    image={flag}
                    alt={`${population.country} Flag`}
                    className="flag-image"
                />
                <CardContent>
                    <Typography variant="h4" className="country-name">
                        {population.country}
                    </Typography>
                    <Typography variant="subtitle1" className="country-code">
                        Code: {population.code}
                    </Typography>
                </CardContent>
            </Card>

            

            <Typography variant="h5" className="section-title">
                Population Over Time
            </Typography>
            <Divider className="divider" />
            <Box className="chart-container">
                <Line data={chartData} key={code} />
            </Box>

            <Typography variant="h5" className="section-title">
                Bordering Countries
            </Typography>
            <Divider className="divider" />
            <List className="borders-list">
                {borders.map((border) => (
                    <ListItem
                        key={border.countryCode}
                        component={Link}
                        to={`/country/${border.countryCode}`}
                        button
                        className="border-item"
                    >
                        <ListItemText
                            primary={border.commonName}
                            secondary={border.region}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default CountryDetail;

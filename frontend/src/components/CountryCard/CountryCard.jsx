import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FlagIcon from '@mui/icons-material/Flag';
import InfoIcon from '@mui/icons-material/Info';
import './CountryCard.css';

function CountryCard({ country }) {
    return (
        <Card className="country-card">
            <CardMedia
                component="img"
                height="140"
                image={`https://flagcdn.com/w320/${country.countryCode.toLowerCase()}.png`}
                alt={`${country.name} flag`}
                className="country-flag"
            />
            <CardContent>
                <Typography variant="h6" component="div" className="country-name">
                    <FlagIcon className="flag-icon" /> {country.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Explore details and statistics about {country.name}.
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    component={Link}
                    to={`/country/${country.countryCode}`}
                    size="small"
                    startIcon={<InfoIcon />}
                    className="view-details-button"
                >
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
}

export default CountryCard;

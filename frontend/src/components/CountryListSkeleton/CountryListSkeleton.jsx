import React from 'react';
import { Card, CardContent, Skeleton, Box } from '@mui/material';

function CountryListSkeleton() {
    return (
        <Card className="country-card">
            <Skeleton variant="rectangular" height={140} className="skeleton-flag" />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Skeleton variant="circular" width={24} height={24} />
                    <Skeleton variant="text" width="60%" sx={{ ml: 2 }} />
                </Box>
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="50%" />
            </CardContent>
        </Card>
    );
}

export default CountryListSkeleton;

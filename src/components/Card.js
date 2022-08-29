import * as React from 'react';
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
const BlogCard = ({
    children,
    date,
    title,
    image,
    description
}) => {
    return(
        <Card 
            sx={
                {
                    width: 300,
                    height: 300
                }
            }>
            <CardMedia
                component="img"
                height="194"
                image={image}
            />
            <CardHeader
                title={title}
                subheader={date}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>    
    );
}



export {BlogCard}

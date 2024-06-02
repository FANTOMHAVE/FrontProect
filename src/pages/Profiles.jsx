import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {data} from "../helpers/data";
import {Link} from "react-router-dom";

export default function Profiles () {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <h1>profiles</h1>
        {data.map((people) => (
                 <Card key={people.id} sx={{ maxWidth: 345, margin: "10px" }}>
                 <CardMedia
                   sx={{ height: 300 }}
                   image={people.image}
                   title={people.name}
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                   {people.name}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                   {people.description}
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Button component={Link} to={`/${people.id}`} size="small">Learn More</Button>
                 </CardActions>
               </Card>
        ))}
        </div>
    )
}

/*
import React from 'react'

export default function Home () {
    return (
        <div>
            
        </div>
    )
}
*/
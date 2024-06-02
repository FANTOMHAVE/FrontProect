import React from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { data } from "../helpers/data";
import { Link } from "react-router-dom";

export default function Prof() {
    const { id } = useParams();
    const person = data.find((people) => people.id === Number(id));

    if (!person) {
        return <div>Человек не найден</div>;
    }
    return (
        <Card key={person.id} sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia
                sx={{ height: 300 }}
                image={person.image}
                title={person.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {person.name}
                    {person.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {person.description}
                </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
}
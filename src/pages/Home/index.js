import React, { useState } from 'react';
import { Container , Typography, Card, Grid, TextField, Button } from '@material-ui/core'

import styles from './styles'

export default () => {

    const [buscarPelicula, setBuscarPelicula] = useState('');
    const classes = styles();

    const handleBuscarPeliculaChange = e => {
        setBuscarPelicula(e.target.value);
    };
    const handleLimpiar = e => {
        console.log(1);
    }
    const handleBuscar = e => {
        console.log(1);  
    }

    return(
        <Container className ={classes.container}>
            <Card className ={classes.cardContainer}>
                <Grid className ={classes.titleGridContainer}>
                    <Grid>
                        <Typography className ={classes.title}>Bienvenido</Typography>
                    </Grid>
                    
                </Grid>
                <TextField
                    value={buscarPelicula}
                    placeholder="Buscando..."
                    className={classes.textFieldSearch}
                    onChange={handleBuscarPeliculaChange}
                />
                <Grid className ={classes.buttonContainer}>
                    <Button color="secondary" onClick={handleLimpiar}>Limpiar</Button>
                    <Button className ={classes.searchButton} color="primary" onClick={handleBuscar}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    )
}


















///<Grid> <MovieIcon className={classes.movieIcon}/> </Grid> 